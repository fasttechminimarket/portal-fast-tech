import { useEffect, useRef } from 'react';

/**
 * NEON BACKGROUND — Fast&Tech
 * Setas neon animadas com paralaxe + pulso + overlay responsivo
 */

const BG_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';

interface NeonBackgroundProps {
  overlay?: number;
  flip?: boolean;
  position?: string;
  children?: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export default function NeonBackground({
  overlay = 0.78,
  flip = false,
  position = 'center',
  children,
  className = '',
  animated = true,
}: NeonBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef(0);
  const frameRef = useRef(0);
  const mxRef = useRef(0.5);
  const myRef = useRef(0.5);
  const tmxRef = useRef(0.5);
  const tmyRef = useRef(0.5);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgOkRef = useRef(false);

  useEffect(() => {
    if (!animated) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0;

    const resize = () => {
      const p = canvas.parentElement;
      if (!p) return;
      W = canvas.width = p.offsetWidth || window.innerWidth;
      H = canvas.height = p.offsetHeight || window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Carrega imagem de fundo
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => { imgOkRef.current = true; imgRef.current = img; };
    img.src = BG_URL;

    const onMove = (e: MouseEvent) => {
      tmxRef.current = e.clientX / window.innerWidth;
      tmyRef.current = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      frameRef.current++;
      const frame = frameRef.current;
      mxRef.current += (tmxRef.current - mxRef.current) * 0.04;
      myRef.current += (tmyRef.current - myRef.current) * 0.04;
      const mx = mxRef.current, my = myRef.current;
      const pulse = (Math.sin(frame * 0.035) + 1) / 2;
      const pulse2 = (Math.sin(frame * 0.028 + 1.5) + 1) / 2;

      ctx.clearRect(0, 0, W, H);

      // Imagem de fundo com paralaxe
      if (imgOkRef.current && imgRef.current) {
        const px = (mx - 0.5) * 22;
        const py = (my - 0.5) * 16;
        const s = 1.07;
        ctx.save();
        ctx.globalAlpha = 1;
        if (flip) {
          ctx.translate(W, 0);
          ctx.scale(-1, 1);
        }
        ctx.drawImage(imgRef.current, (W - W * s) / 2 + px, (H - H * s) / 2 + py, W * s, H * s);
        if (flip) ctx.restore();
        else ctx.restore();
      }

      // Overlay escuro ajustável
      ctx.save();
      ctx.globalAlpha = overlay;
      ctx.fillStyle = '#0a0530';
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Pulso de luz nas setas — CANTO SUPERIOR ESQUERDO
      ctx.save();
      ctx.globalAlpha = 0.05 + pulse * 0.08;
      const g1 = ctx.createLinearGradient(0, H, W * 0.5, 0);
      g1.addColorStop(0, '#00d9ff');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Pulso de luz nas setas — CANTO INFERIOR DIREITO
      ctx.save();
      ctx.globalAlpha = 0.04 + pulse2 * 0.07;
      const g2 = ctx.createLinearGradient(W, H, W * 0.5, H * 0.35);
      g2.addColorStop(0, '#ff40ff');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Reflexo de cursor
      ctx.save();
      ctx.globalAlpha = 0.06 + pulse * 0.04;
      const gc = ctx.createRadialGradient(mx * W, my * H, 0, mx * W, my * H, 200);
      gc.addColorStop(0, '#00d9ff');
      gc.addColorStop(1, 'transparent');
      ctx.fillStyle = gc;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();

      // Vinheta nas bordas
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.9);
      vig.addColorStop(0, 'transparent');
      vig.addColorStop(1, 'rgba(4,1,26,0.75)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, [animated, overlay, flip]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Imagem de fundo estática (fallback) */}
      {!animated && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('${BG_URL}')`,
              backgroundSize: 'cover',
              backgroundPosition: position,
              transform: flip ? 'scaleX(-1)' : undefined,
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{ background: `rgba(10, 8, 25, ${overlay})` }}
          />
        </>
      )}

      {/* Canvas animado */}
      {animated && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          style={{ width: '100%', height: '100%' }}
        />
      )}

      {/* Conteúdo por cima */}
      {children && (
        <div className="relative z-10">{children}</div>
      )}
    </div>
  );
}
