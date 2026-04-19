import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  alpha: number;
};

const SUBJECTS = [
  "Algorithms", "Data Structures", "OS",
  "Networks", "Databases", "Compilers",
  "Linear Algebra", "Calculus", "Statistics",
  "Software Eng.", "Discrete Math", "AI",
];

export function useKnowledgeGraphAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes: Node[] = SUBJECTS.map((label) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      label,
      alpha: Math.random() * 0.4 + 0.5,
    }));

    let pulse = 0;
    const LINK_DIST = 160;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      pulse += 0.035;

      /* ── Edges ── */
      nodes.forEach((a) => {
        /* to center */
        const dx = a.x - cx;
        const dy = a.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST * 1.6) {
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(a.x, a.y);
          ctx.strokeStyle = `rgba(0,255,200,${(1 - dist / (LINK_DIST * 1.6)) * 0.22})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        /* between nodes */
        nodes.forEach((b) => {
          if (a === b) return;
          const ex = a.x - b.x;
          const ey = a.y - b.y;
          const d = Math.sqrt(ex * ex + ey * ey);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / LINK_DIST) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      /* ── Center node ── */
      const pr = 26 + Math.sin(pulse) * 4;

      /* pulse ring */
      ctx.beginPath();
      ctx.arc(cx, cy, pr + 14, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,255,200,${0.06 + Math.sin(pulse) * 0.04})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      /* fill */
      ctx.beginPath();
      ctx.arc(cx, cy, pr, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,255,200,0.08)";
      ctx.fill();
      ctx.strokeStyle = "rgba(0,255,200,0.55)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "700 10px 'Space Mono', monospace";
      ctx.fillStyle = "rgba(0,255,200,0.9)";
      ctx.fillText("B.Sc. CS", cx, cy - 6);
      ctx.font = "400 9px 'Space Mono', monospace";
      ctx.fillStyle = "rgba(0,255,200,0.5)";
      ctx.fillText("3.21 GPAX", cx, cy + 8);

      /* ── Subject nodes ── */
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,200,${node.alpha * 0.65})`;
        ctx.fill();

        ctx.font = "400 9px 'Space Mono', monospace";
        ctx.fillStyle = `rgba(170,170,170,${node.alpha * 0.65})`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(node.label, node.x, node.y + 7);

        /* attract toward center */
        const nx = cx - node.x;
        const ny = cy - node.y;
        const nd = Math.sqrt(nx * nx + ny * ny);
        node.vx += (nx / nd) * 0.012;
        node.vy += (ny / nd) * 0.012;

        /* speed cap */
        const spd = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (spd > 0.75) { node.vx *= 0.75 / spd; node.vy *= 0.75 / spd; }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 16 || node.x > W - 16) node.vx *= -1;
        if (node.y < 16 || node.y > H - 16) node.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return canvasRef;
}
