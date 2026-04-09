/**
 * NEON BACKGROUND - Fast&Tech Soluções
 * Componente reutilizável de fundo neon com setas geométricas
 * Usado em todas as seções hero de cada página
 */

const BG_URL =
  'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';

interface NeonBackgroundProps {
  overlay?: number; // 0-1, opacidade do overlay escuro
  flip?: boolean;
  position?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function NeonBackground({
  overlay = 0.82,
  flip = false,
  position = 'center',
  children,
  className = '',
}: NeonBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
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
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
