import { useEffect, useRef } from 'react';

/**
 * NEON OVERLAY — Fast&Tech
 * Paralaxe + pulso nas setas + reflexo do cursor
 * Coloca em qualquer section sobre a imagem de fundo
 */
export default function NeonOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, frame = 0;
    let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;

    const resize = () => {
      const p = canvas.parentElement;
      W = canvas.width = p ? p.offsetWidth : window.innerWidth;
      H = canvas.height = p ? p.offsetHeight : window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e: MouseEvent) => {
      tmx = e.clientX / window.innerWidth;
      tmy = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      frame++;
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;
      const pulse  = (Math.sin(frame * 0.035) + 1) / 2;
      const pulse2 = (Math.sin(frame * 0.028 + 1.5) + 1) / 2;

      ctx.clearRect(0, 0, W, H);

      // Pulso azul — setas superior esquerdo
      ctx.save();
      ctx.globalAlpha = 0.04 + pulse * 0.08;
      const g1 = ctx.createLinearGradient(0, H, W * 0.5, 0);
      g1.addColorStop(0, '#00d9ff');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Pulso magenta — setas inferior direito
      ctx.save();
      ctx.globalAlpha = 0.03 + pulse2 * 0.06;
      const g2 = ctx.createLinearGradient(W, H, W * 0.5, H * 0.35);
      g2.addColorStop(0, '#ff40ff');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Reflexo do cursor
      ctx.save();
      ctx.globalAlpha = 0.05 + pulse * 0.04;
      const gc = ctx.createRadialGradient(mx * W, my * H, 0, mx * W, my * H, 180);
      gc.addColorStop(0, '#00d9ff');
      gc.addColorStop(1, 'transparent');
      ctx.fillStyle = gc;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

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
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%', zIndex: 1 }}
    />
  );
}
