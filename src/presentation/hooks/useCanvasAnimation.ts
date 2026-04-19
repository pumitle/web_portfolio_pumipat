import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  text: string;
  opacity: number;
  speed: number;
  size: number;
};

const CODE_SNIPPETS = [
  "const", "=>", "async", "await",
  "return", "import", "export", "function",
  "type", "useState", "fetch", "null",
  ".map()", ".then()", "{}", "[]",
];

export function useCanvasAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const particles: Particle[] = Array.from({ length: 28 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
      opacity: Math.random() * 0.35 + 0.05,
      speed: Math.random() * 0.4 + 0.1,
      size: Math.random() * 4 + 10,
    }));

    let cursor = { y: H * 0.45, blink: 0 };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Grid lines
      ctx.strokeStyle = "rgba(0,255,200,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Scan line
      cursor.blink += 0.04;
      const scanY = (Math.sin(cursor.blink) * 0.5 + 0.5) * H;
      const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
      grad.addColorStop(0, "rgba(0,255,200,0)");
      grad.addColorStop(0.5, "rgba(0,255,200,0.06)");
      grad.addColorStop(1, "rgba(0,255,200,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 40, W, 80);

      // Particles
      particles.forEach((p) => {
        ctx.font = `${p.size}px 'Space Mono', monospace`;
        ctx.fillStyle = `rgba(0,255,200,${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
        p.y -= p.speed;
        if (p.y < -20) {
          p.y = H + 20;
          p.x = Math.random() * W;
          p.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return canvasRef;
}
