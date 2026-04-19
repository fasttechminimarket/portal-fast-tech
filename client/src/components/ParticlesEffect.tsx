import { useEffect, useRef } from 'react';

/**
 * PARTICLES EFFECT — Fast&Tech
 * Canvas completo: partículas com rastro + raios de energia nas setas + scan diagonal
 */
export default function ParticlesEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const animRef = useRef(0);
  const mxRef = useRef(0.5);
  const myRef = useRef(0.5);
  const tmxRef = useRef(0.5);
  const tmyRef = useRef(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;
    let scanX = 0;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      tmxRef.current = e.clientX / W;
      tmyRef.current = e.clientY / H;
    };
    window.addEventListener('mousemove', onMove);

    // ── PARTÍCULA COM RASTRO ──
    const COLORS = ['#00d9ff','#00d9ff','#ff40ff','#ffd700','#ff006e','#00d9ff'];

    class FlowParticle {
      x = 0; y = 0; vx = 0; vy = 0;
      sz = 1; color = '#00d9ff'; alpha = 0; maxAlpha = 0.5;
      life = 0; maxLife = 100;
      trail: { x: number; y: number }[] = [];

      constructor() { this.reset(); }

      reset() {
        const s = Math.random() > 0.5 ? 0 : 1;
        if (s === 0) {
          this.x = Math.random() * W * 0.5;
          this.y = H * 0.1 + Math.random() * H * 0.55;
          this.vx = 1.3 + Math.random() * 1.2;
          this.vy = -(0.4 + Math.random() * 0.65);
        } else {
          this.x = W * 0.45 + Math.random() * W * 0.5;
          this.y = H * 0.42 + Math.random() * H * 0.45;
          this.vx = 1.1 + Math.random() * 1.0;
          this.vy = -(0.5 + Math.random() * 0.7);
        }
        this.sz = Math.random() * 2.2 + 0.6;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = 0;
        this.maxAlpha = Math.random() * 0.65 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 140 + 70;
        this.trail = [];
      }

      update() {
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > 10) this.trail.shift();
        const mx = mxRef.current, my = myRef.current;
        this.x += this.vx + (mx - 0.5) * 0.4;
        this.y += this.vy + (my - 0.5) * 0.25;
        this.life++;
        if (this.alpha < this.maxAlpha) this.alpha += 0.04;
        if (this.life > this.maxLife * 0.65) this.alpha -= this.maxAlpha / (this.maxLife * 0.35);
        if (this.life >= this.maxLife || this.alpha < 0) this.reset();
      }

      draw() {
        this.trail.forEach((t, i) => {
          const ta = this.alpha * (i / this.trail.length) * 0.4;
          ctx!.save();
          ctx!.globalAlpha = ta;
          ctx!.shadowBlur = 5;
          ctx!.shadowColor = this.color;
          ctx!.fillStyle = this.color;
          ctx!.beginPath();
          ctx!.arc(t.x, t.y, this.sz * (i / this.trail.length) * 0.8, 0, Math.PI * 2);
          ctx!.fill();
          ctx!.restore();
        });
        ctx!.save();
        ctx!.globalAlpha = Math.max(0, this.alpha);
        ctx!.shadowBlur = 14;
        ctx!.shadowColor = this.color;
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.sz, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    // ── RAIO DE ENERGIA ──
    class EnergyRay {
      x1 = 0; y1 = 0; x2 = 0; y2 = 0;
      t = 0; maxT = 80; color = '#00d9ff'; width = 1;

      constructor() { this.reset(); }

      reset() {
        this.t = 0;
        this.maxT = Math.random() * 100 + 55;
        const s = Math.floor(Math.random() * 4);
        const bases = [
          { x1: 20, y1: H * 0.28, dx: W * 0.38, dy: -H * 0.22 },
          { x1: 60, y1: H * 0.42, dx: W * 0.32, dy: -H * 0.18 },
          { x1: W * 0.5, y1: H * 0.56, dx: W * 0.36, dy: -H * 0.26 },
          { x1: W * 0.56, y1: H * 0.70, dx: W * 0.3, dy: -H * 0.22 },
        ];
        const b = bases[s % bases.length];
        this.x1 = b.x1 + Math.random() * 50;
        this.y1 = b.y1 + Math.random() * 35;
        this.x2 = this.x1 + b.dx;
        this.y2 = this.y1 + b.dy;
        this.color = Math.random() > 0.5 ? '#00d9ff' : '#ff40ff';
        this.width = Math.random() * 1.8 + 0.5;
      }

      update() { this.t++; if (this.t > this.maxT) this.reset(); }

      draw() {
        const prog = this.t / this.maxT;
        const ease = prog < 0.5 ? 2 * prog * prog : 1 - Math.pow(-2 * prog + 2, 2) / 2;
        const tail = Math.max(0, ease - 0.18);
        const cx = this.x1 + (this.x2 - this.x1) * ease;
        const cy = this.y1 + (this.y2 - this.y1) * ease;
        const tx = this.x1 + (this.x2 - this.x1) * tail;
        const ty = this.y1 + (this.y2 - this.y1) * tail;
        const a = (1 - Math.abs(prog - 0.5) * 2) * 0.9;
        ctx!.save();
        ctx!.globalAlpha = a;
        ctx!.shadowBlur = 18;
        ctx!.shadowColor = this.color;
        ctx!.strokeStyle = this.color;
        ctx!.lineWidth = this.width;
        ctx!.lineCap = 'round';
        ctx!.beginPath();
        ctx!.moveTo(tx, ty);
        ctx!.lineTo(cx, cy);
        ctx!.stroke();
        ctx!.globalAlpha = a;
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.restore();
      }
    }

    // Inicializa
    const particles: FlowParticle[] = [];
    const rays: EnergyRay[] = [];
    for (let i = 0; i < 90; i++) particles.push(new FlowParticle());
    for (let i = 0; i < 10; i++) {
      const r = new EnergyRay();
      r.t = Math.random() * r.maxT;
      rays.push(r);
    }

    const animate = () => {
      frameRef.current++;
      ctx.clearRect(0, 0, W, H);

      // Paralaxe suave
      mxRef.current += (tmxRef.current - mxRef.current) * 0.05;
      myRef.current += (tmyRef.current - myRef.current) * 0.05;

      // Scan diagonal nas setas
      scanX = (scanX + 1.2) % (W + H);
      ctx.save();
      ctx.globalAlpha = 0.10;
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
      particles.forEach(p => { p.update(); p.draw(); });

      // Raios
      rays.forEach(r => { r.update(); r.draw(); });

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
      style={{ opacity: 0.85 }}
    />
  );
}
