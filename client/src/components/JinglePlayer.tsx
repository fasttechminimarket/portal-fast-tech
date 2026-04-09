import { useState, useRef, useEffect } from 'react';

const JINGLE_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/F%C3%BAria_FastTech_8bb067b1.mp3';

export default function JinglePlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [textPulse, setTextPulse] = useState(false);

  // Pulsa o ícone quando está tocando
  useEffect(() => {
    if (!playing) { setPulse(false); return; }
    const id = setInterval(() => setPulse(p => !p), 600);
    return () => clearInterval(id);
  }, [playing]);

  // Pulsa o texto continuamente (independente do estado de reprodução)
  useEffect(() => {
    const id = setInterval(() => setTextPulse(p => !p), 800);
    return () => clearInterval(id);
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  const handleEnded = () => setPlaying(false);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      {/* Frase neon rosa shock pulsante — visível apenas em mobile */}
      <div className="sm:hidden" style={{
        fontSize: 8,
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: '#ff006e',
        textShadow: textPulse
          ? '0 0 12px rgba(255,0,110,0.9), 0 0 24px rgba(255,0,110,0.6)'
          : '0 0 6px rgba(255,0,110,0.5), 0 0 12px rgba(255,0,110,0.3)',
        transition: 'text-shadow 0.4s ease',
        lineHeight: 1.1,
        filter: textPulse
          ? 'drop-shadow(0 0 8px rgba(255,0,110,0.8))'
          : 'drop-shadow(0 0 4px rgba(255,0,110,0.4))',
      }}>
        Conheça Nosso<br />Jingle Oficial<br />Aqui →
      </div>

      {/* Container do player */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          userSelect: 'none',
          flexShrink: 0,
        }}
        onClick={toggle}
        title={playing ? 'Pausar jingle' : 'Ouvir o jingle Fast&Tech'}
      >
        <audio ref={audioRef} src={JINGLE_URL} onEnded={handleEnded} preload="none" />

        {/* Botão play/pause circular com glow neon */}
        <div style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: playing
            ? 'linear-gradient(135deg, #d400ff, #00d9ff)'
            : 'linear-gradient(135deg, #00d9ff, #d400ff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: playing
            ? `0 0 ${pulse ? 16 : 8}px rgba(212,0,255,0.8), 0 0 ${pulse ? 28 : 14}px rgba(0,217,255,0.5)`
            : '0 0 8px rgba(0,217,255,0.4)',
          transition: 'box-shadow 0.3s ease',
          flexShrink: 0,
        }}>
          {playing ? (
            /* Ícone pause */
            <svg width="12" height="14" viewBox="0 0 12 14" fill="white">
              <rect x="1" y="1" width="3.5" height="12" rx="1" />
              <rect x="7.5" y="1" width="3.5" height="12" rx="1" />
            </svg>
          ) : (
            /* Ícone play */
            <svg width="12" height="14" viewBox="0 0 12 14" fill="white" style={{ marginLeft: 2 }}>
              <polygon points="1,1 11,7 1,13" />
            </svg>
          )}
        </div>

        {/* Texto com efeito neon — oculto em mobile para não quebrar o layout */}
        <div className="hidden sm:flex" style={{
          flexDirection: 'column',
          lineHeight: 1.2,
        }}>
          <span style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#00d9ff',
            textShadow: '0 0 8px rgba(0,217,255,0.9), 0 0 16px rgba(0,217,255,0.5)',
            whiteSpace: 'nowrap',
          }}>
            {playing ? '♪ Tocando o Jingle...' : 'Aperte o Play e'}
          </span>
          <span style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            background: 'linear-gradient(90deg, #d400ff, #ff6b35)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 6px rgba(212,0,255,0.7))',
            whiteSpace: 'nowrap',
          }}>
            {playing ? 'Fast&Tech Fúria! 🎵' : 'conheça no Jingle'}
          </span>
        </div>
      </div>
    </div>
  );
}
