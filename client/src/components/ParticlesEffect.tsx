import { useEffect, useRef } from 'react';

export default function ParticlesEffect() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let frame = 0;
    let mx = 0.5;
    let my = 0.5;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const SPACING = 44;
    const xs: number[] = [];
    const ys: number[] = [];
    const phases: number[] = [];
    const speeds: number[] = [];
    const sizes: number[] = [];

    function buildGrid() {
      xs.length = 0; ys.length = 0;
      phases.length = 0; speeds.length = 0; sizes.length = 0;
      for (let r = 0; r < Math.ceil(H / SPACING) + 2; r++) {
        for (let c = 0; c < Math.ceil(W / SPACING) + 2; c++) {
          xs.push(c * SPACING + (Math.random() - 0.5) * 6);
          ys.push(r * SPACING + (Math.random() - 0.5) * 6);
          phases.push(Math.random() * Math.PI * 2);
          speeds.push(0.006 + Math.random() * 0.005);
          sizes.push(Math.random() * 1.2 + 0.4);
        }
      }
    }
    buildGrid();

    const lColors = ['#00d9ff', '#d400ff', '#00d9ff', '#d400ff'];
    const lY = [H * 0.22, H * 0.40, H * 0.58, H * 0.76];
    const lAmp = [12, 15, 11, 14];
    const lFreq = [0.007, 0.009, 0.006, 0.008];
    const lPhase = [0, 1.5, 3, 4.5];
    const lT = [0, 0.25, 0.5, 0.75];

    window.addEventListener('resize', () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildGrid();
      lY[0] = H * 0.22; lY[1] = H * 0.40; lY[2] = H * 0.58; lY[3] = H * 0.76;
    });

    window.addEventListener('mousemove', (e) => {
      mx = e.clientX / W;
      my = e.clientY / H;
    });

    function loop() {
      frame++;
      ctx.clearRect(0, 0, W, H);
      const pulse = (Math.sin(frame * 0.025) + 1) / 2;

      // Glow do mouse
      ctx.save();
      ctx.globalAlpha = 0.06 + pulse * 0.04;
      const g1 = ctx.createRadialGradient(mx * W, my * H, 0, mx * W, my * H, 220);
      g1.addColorStop(0, '#00d9ff'); g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Glow roxo fixo
      ctx.save();
      ctx.globalAlpha = 0.04 + pulse * 0.03;
      const g2 = ctx.createRadialGradient(W * 0.8, H * 0.8, 0, W * 0.8, H * 0.8, 260);
      g2.addColorStop(0, '#d400ff'); g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Grid de pontos
      const t = frame * 0.018;
      for (let i = 0; i < xs.length; i++) {
        const x = xs[i] + Math.sin(t * speeds[i] * 60 + phases[i]) * 2.5;
        const y = ys[i] + Math.cos(t * speeds[i] * 40 + phases[i]) * 2.5;
        const dx = x / W - mx;
        const dy = y / H - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = Math.max(0, 1 - dist * 3.5);
        ctx.save();
        ctx.globalAlpha = 0.07 + glow * 0.4;
        if (glow > 0.1) { ctx.shadowBlur = 8 + glow * 14; ctx.shadowColor = '#00d9ff'; }
        ctx.fillStyle = glow > 0.25 ? '#00d9ff' : '#3344aa';
        ctx.beginPath();
        ctx.arc(x, y, sizes[i] + glow * 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Linhas de energia + ponto viajante
      for (let i = 0; i < 4; i++) {
        lT[i] += 0.003;
        const a = (Math.sin(lT[i] * Math.PI * 2) + 1) / 2;
        ctx.save();
        ctx.globalAlpha = a * 0.10;
        ctx.strokeStyle = lColors[i];
        ctx.lineWidth = 1;
        ctx.shadowBlur = 5; ctx.shadowColor = lColors[i];
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const y = lY[i] + Math.sin(x * lFreq[i] + frame * 0.02 + lPhase[i]) * lAmp[i];
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();

        const tx = (lT[i] * 0.3 % 1) * W;
        const ty = lY[i] + Math.sin(tx * lFreq[i] + frame * 0.02 + lPhase[i]) * lAmp[i];
        ctx.save();
        ctx.globalAlpha = 0.8;
        ctx.shadowBlur = 16; ctx.shadowColor = lColors[i];
        ctx.fillStyle = lColors[i];
        ctx.beginPath(); ctx.arc(tx, ty, 2.5, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => { cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.85,
      }}
    />
  );
}
