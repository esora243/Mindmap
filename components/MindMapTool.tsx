'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import type { MindNode, Template } from '@/lib/types';

interface Props {
  templates: Template[];
}

// ====== ユーティリティ ======
const uid = () => Math.random().toString(36).slice(2, 10);

const findAndUpdate = (node: MindNode, id: string, updater: (n: MindNode) => MindNode): MindNode => {
  if (node.id === id) return updater({ ...node });
  return { ...node, children: node.children.map((c) => findAndUpdate(c, id, updater)) };
};
const findAndDelete = (node: MindNode, id: string): MindNode => ({
  ...node,
  children: node.children.filter((c) => c.id !== id).map((c) => findAndDelete(c, id)),
});
const findAndAddChild = (node: MindNode, id: string, newChild: MindNode): MindNode => {
  if (node.id === id) return { ...node, children: [...node.children, newChild] };
  return { ...node, children: node.children.map((c) => findAndAddChild(c, id, newChild)) };
};
const findNode = (n: MindNode, id: string): MindNode | null => {
  if (n.id === id) return n;
  for (const c of n.children) {
    const r = findNode(c, id);
    if (r) return r;
  }
  return null;
};

// ====== レイアウト ======
const NODE_W = 160;
const NODE_H = 44;
const H_GAP = 70;
const V_GAP = 16;

interface LaidNode extends MindNode {
  _children: LaidNode[];
  height: number;
  depth: number;
  x: number;
  y: number;
}

const layout = (node: MindNode, depth = 0): LaidNode => {
  const laidChildren = node.children.map((c) => layout(c, depth + 1));
  const childrenHeight = laidChildren.reduce((sum, c, i) => sum + c.height + (i > 0 ? V_GAP : 0), 0);
  const height = Math.max(NODE_H, childrenHeight);
  return { ...node, _children: laidChildren, height, depth, x: 0, y: 0 };
};

const assignPositions = (node: LaidNode, x = 40, y = 0): LaidNode => {
  node.x = x;
  node.y = y + node.height / 2 - NODE_H / 2;
  const totalChildH = node._children.reduce((s, c, i) => s + c.height + (i > 0 ? V_GAP : 0), 0);
  let childY = y + (node.height - totalChildH) / 2;
  node._children.forEach((c) => {
    assignPositions(c, x + NODE_W + H_GAP, childY);
    childY += c.height + V_GAP;
  });
  return node;
};

const flatten = (node: LaidNode, list: LaidNode[] = []): LaidNode[] => {
  list.push(node);
  node._children.forEach((c) => flatten(c, list));
  return list;
};
const collectEdges = (node: LaidNode, edges: { from: LaidNode; to: LaidNode }[] = []) => {
  node._children.forEach((c) => {
    edges.push({ from: node, to: c });
    collectEdges(c, edges);
  });
  return edges;
};

export default function MindMapTool({ templates }: Props) {
  const [tree, setTree] = useState<MindNode>(() => JSON.parse(JSON.stringify(templates[0].root)));
  const [activeTemplateId, setActiveTemplateId] = useState(templates[0].id);
  const [selectedId, setSelectedId] = useState('root');
  const [editText, setEditText] = useState('');
  const [editColor, setEditColor] = useState('#2563eb');
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const node = findNode(tree, selectedId);
    if (node) {
      setEditText(node.text);
      setEditColor(node.color || '#2563eb');
    }
  }, [selectedId, tree]);

  const applyTemplate = (id: string) => {
    const tpl = templates.find((t) => t.id === id);
    if (tpl) {
      setTree(JSON.parse(JSON.stringify(tpl.root)));
      setActiveTemplateId(id);
      setSelectedId('root');
    }
  };

  const handleAddChild = useCallback(() => {
    if (!selectedId) return;
    const newChild: MindNode = { id: uid(), text: '新しいノード', color: '#64748b', children: [] };
    setTree((t) => findAndAddChild(t, selectedId, newChild));
    setSelectedId(newChild.id);
  }, [selectedId]);

  const handleDelete = useCallback(() => {
    if (!selectedId || selectedId === 'root') return;
    setTree((t) => findAndDelete(t, selectedId));
    setSelectedId('root');
  }, [selectedId]);

  const handleUpdate = useCallback(() => {
    if (!selectedId) return;
    setTree((t) =>
      findAndUpdate(t, selectedId, (n) => ({ ...n, text: editText || '(無題)', color: editColor }))
    );
  }, [selectedId, editText, editColor]);

  const exportPNG = () => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = svg.width.baseVal.value * 2;
      canvas.height = svg.height.baseVal.value * 2;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.scale(2, 2);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'mindmap.png';
        a.click();
      });
    };
    img.src = url;
  };

  const exportPDF = () => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    const serializer = new XMLSerializer();
    const svgStr = serializer.serializeToString(svg);
    const win = window.open('', '_blank');
    if (!win) return;
    win.document.write(`<html><head><title>マインドマップ PDF</title>
<style>body{margin:0;padding:20px;}svg{max-width:100%;height:auto;}</style>
</head><body>${svgStr}<script>window.onload=()=>window.print();<\/script></body></html>`);
    win.document.close();
  };

  const exportJSON = () => {
    const blob = new Blob([JSON.stringify(tree, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'mindmap.json';
    a.click();
  };

  const laid = assignPositions(layout(tree));
  const nodes = flatten(laid);
  const edges = collectEdges(laid);
  const maxX = Math.max(...nodes.map((n) => n.x)) + NODE_W + 60;
  const maxY = Math.max(...nodes.map((n) => n.y + NODE_H)) + 40;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* サイドバー */}
      <aside className="lg:col-span-1 space-y-4">
        <div className="bg-white rounded-xl border shadow-sm p-4">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-blue-600 rounded"></span>テンプレート
          </h3>
          <div className="space-y-2">
            {templates.map((t) => (
              <button
                key={t.id}
                onClick={() => applyTemplate(t.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition border ${
                  activeTemplateId === t.id
                    ? 'bg-blue-50 border-blue-300 text-blue-700 font-semibold'
                    : 'bg-white border-slate-200 hover:bg-slate-50'
                }`}
              >
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{t.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-4">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-emerald-600 rounded"></span>ノード編集
          </h3>
          <label className="block text-xs text-slate-500 mb-1">テキスト</label>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full border rounded px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-xs text-slate-500 mb-1">色</label>
          <div className="flex items-center gap-2 mb-3">
            <input
              type="color"
              value={editColor}
              onChange={(e) => setEditColor(e.target.value)}
              className="w-12 h-9 border rounded cursor-pointer"
            />
            <input
              type="text"
              value={editColor}
              onChange={(e) => setEditColor(e.target.value)}
              className="flex-1 border rounded px-2 py-1 text-sm font-mono"
            />
          </div>
          <button onClick={handleUpdate} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded mb-2">
            ノードを更新
          </button>
          <button onClick={handleAddChild} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2 rounded mb-2">
            ＋ 子ノードを追加
          </button>
          <button
            onClick={handleDelete}
            disabled={selectedId === 'root'}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-slate-300 text-white text-sm font-semibold py-2 rounded"
          >
            選択ノードを削除
          </button>
        </div>

        <div className="bg-white rounded-xl border shadow-sm p-4">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-amber-500 rounded"></span>エクスポート
          </h3>
          <button onClick={exportPNG} className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm font-semibold py-2 rounded mb-2">
            🖼 PNG画像で保存
          </button>
          <button onClick={exportPDF} className="w-full bg-slate-700 hover:bg-slate-800 text-white text-sm font-semibold py-2 rounded mb-2">
            📄 PDFで保存
          </button>
          <button onClick={exportJSON} className="w-full bg-slate-600 hover:bg-slate-700 text-white text-sm font-semibold py-2 rounded">
            ⬇ JSONで保存
          </button>
        </div>
      </aside>

      {/* キャンバス */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-xl border shadow-sm p-4 mindmap-canvas-wrapper">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-900">マインドマップ</h3>
            <div className="text-xs text-slate-500">ノードをクリックして編集</div>
          </div>
          <div className="w-full overflow-auto bg-gradient-to-br from-slate-50 to-blue-50 border rounded-lg">
            <svg
              ref={svgRef}
              width={maxX}
              height={maxY}
              className="block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={maxX} height={maxY} fill="#f8fafc" />
              {edges.map((e, i) => {
                const x1 = e.from.x + NODE_W;
                const y1 = e.from.y + NODE_H / 2;
                const x2 = e.to.x;
                const y2 = e.to.y + NODE_H / 2;
                const mx = (x1 + x2) / 2;
                return (
                  <path
                    key={i}
                    d={`M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`}
                    stroke="#94a3b8"
                    strokeWidth="2"
                    fill="none"
                  />
                );
              })}
              {nodes.map((n) => {
                const isSel = selectedId === n.id;
                return (
                  <g
                    key={n.id}
                    transform={`translate(${n.x},${n.y})`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedId(n.id);
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <rect
                      width={NODE_W}
                      height={NODE_H}
                      rx="10"
                      ry="10"
                      fill={n.color || '#2563eb'}
                      stroke={isSel ? '#1e293b' : '#ffffff'}
                      strokeWidth={isSel ? 3 : 2}
                      opacity={0.95}
                    />
                    <text
                      x={NODE_W / 2}
                      y={NODE_H / 2 + 5}
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="13"
                      fontWeight="600"
                      style={{ pointerEvents: 'none' }}
                    >
                      {n.text.length > 16 ? n.text.slice(0, 15) + '…' : n.text}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            💡 ヒント：中央のテーマから3階層程度に整理すると見やすくなります。
          </p>
        </div>
      </div>
    </div>
  );
}
