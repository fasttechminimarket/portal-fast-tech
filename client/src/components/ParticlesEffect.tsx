import { useEffect, useRef } from 'react';

/**
 * PARTICLES EFFECT — Fast&Tech
 * Partículas com rastro + raios de energia nas setas + scan diagonal
 */
export default function ParticlesEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, frame = 0, scanX = 0;
    let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      tmx = e.clientX / W;
      tmy = e.clientY / H;
    };
    window.addEventListener('mousemove', onMove);

    const COLORS = ['#00d9ff','#00d9ff','#ff40ff','#ffd700','#ff006e','#00d9ff'];

    // ── PARTÍCULA COM RASTRO ──
    interface Trail { x: number; y: number; }
    interface Particle {
      x: number; y: number; vx: number; vy: number;
      sz: number; color: string; alpha: number; maxAlpha: number;
      life: number; maxLife: number; trail: Trail[];
    }

    const makeParticle = (): Particle => {
      const s = Math.random() > 0.5 ? 0 : 1;
      let x, y, vx, vy;
      if (s === 0) {
        x = Math.random() * W * 0.5;
        y = H * 0.1 + Math.random() * H * 0.55;
        vx = 1.3 + Math.random() * 1.2;
        vy = -(0.4 + Math.random() * 0.65);
      } else {
        x = W * 0.45 + Math.random() * W * 0.5;
        y = H * 0.42 + Math.random() * H * 0.45;
        vx = 1.1 + Math.random() * 1.0;
        vy = -(0.5 + Math.random() * 0.7);
      }
      return {
        x, y, vx, vy,
        sz: Math.random() * 2.2 + 0.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        alpha: 0,
        maxAlpha: Math.random() * 0.65 + 0.2,
        life: 0,
        maxLife: Math.random() * 140 + 70,
        trail: [],
      };
    };

    const resetParticle = (p: Particle) => Object.assign(p, makeParticle());

    const updateParticle = (p: Particle) => {
      p.trail.push({ x: p.x, y: p.y });
      if (p.trail.length > 10) p.trail.shift();
      p.x += p.vx + (mx - 0.5) * 0.4;
      p.y += p.vy + (my - 0.5) * 0.25;
      p.life++;
      if (p.alpha < p.maxAlpha) p.alpha += 0.04;
      if (p.life > p.maxLife * 0.65) p.alpha -= p.maxAlpha / (p.maxLife * 0.35);
      if (p.life >= p.maxLife || p.alpha < 0) resetParticle(p);
    };

    const drawParticle = (p: Particle) => {
      p.trail.forEach((t, i) => {
        const ta = p.alpha * (i / p.trail.length) * 0.4;
        ctx.save();
        ctx.globalAlpha = Math.max(0, ta);
        ctx.shadowBlur = 5;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(t.x, t.y, p.sz * (i / p.trail.length) * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.shadowBlur = 14;
      ctx.shadowColor = p.color;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // ── RAIO DE ENERGIA ──
    interface Ray {
      x1: number; y1: number; x2: number; y2: number;
      t: number; maxT: number; color: string; width: number;
    }

    const makeRay = (): Ray => {
      const maxT = Math.random() * 100 + 55;
      const s = Math.floor(Math.random() * 4);
      const bases = [
        { x1: 20,      y1: H * 0.28, dx: W * 0.38, dy: -H * 0.22 },
        { x1: 60,      y1: H * 0.42, dx: W * 0.32, dy: -H * 0.18 },
        { x1: W * 0.5, y1: H * 0.56, dx: W * 0.36, dy: -H * 0.26 },
        { x1: W * 0.56,y1: H * 0.70, dx: W * 0.3,  dy: -H * 0.22 },
      ];
      const b = bases[s % 4];
      return {
        x1: b.x1 + Math.random() * 50,
        y1: b.y1 + Math.random() * 35,
        x2: b.x1 + b.dx + Math.random() * 50,
        y2: b.y1 + b.dy + Math.random() * 35,
        t: 0, maxT,
        color: Math.random() > 0.5 ? '#00d9ff' : '#ff40ff',
        width: Math.random() * 1.8 + 0.5,
      };
    };

    const drawRay = (r: Ray) => {
      const prog = r.t / r.maxT;
      const ease = prog < 0.5 ? 2 * prog * prog : 1 - Math.pow(-2 * prog + 2, 2) / 2;
      const tail = Math.max(0, ease - 0.18);
      const cx = r.x1 + (r.x2 - r.x1) * ease;
      const cy = r.y1 + (r.y2 - r.y1) * ease;
      const tx = r.x1 + (r.x2 - r.x1) * tail;
      const ty = r.y1 + (r.y2 - r.y1) * tail;
      const a = (1 - Math.abs(prog - 0.5) * 2) * 0.9;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.shadowBlur = 18;
      ctx.shadowColor = r.color;
      ctx.strokeStyle = r.color;
      ctx.lineWidth = r.width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(tx, ty);
      ctx.lineTo(cx, cy);
      ctx.stroke();
      ctx.fillStyle = r.color;
      ctx.beginPath();
      ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    // Inicializa
    const particles: Particle[] = Array.from({ length: 90 }, makeParticle);
    const rays: Ray[] = Array.from({ length: 10 }, () => {
      const r = makeRay();
      r.t = Math.random() * r.maxT;
      return r;
    });

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      // Suaviza mouse
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;

      // Scan diagonal
      scanX = (scanX + 1.2) % (W + H);
      ctx.save();
      ctx.globalAlpha = 0.09;
      ctx.strokeStyle = '#00d9ff';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 8;
      ctx.shadowColor = '#00d9ff';
      ctx.beginPath();
      ctx.moveTo(scanX - H, 0);
      ctx.lineTo(scanX, H);
      ctx.stroke();
      ctx.restore();

      // Partículas
      particles.forEach(p => { updateParticle(p); drawParticle(p); });

      // Raios
      rays.forEach(r => {
        r.t++;
        if (r.t > r.maxT) Object.assign(r, makeRay());
        drawRay(r);
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
}
