import { useState } from 'react';
import { Link } from 'wouter';
import { Play, MapPin, Star, ChevronLeft, ChevronRight, X, Camera, Video } from 'lucide-react';

// ─── VÍDEOS ────────────────────────────────────────────────────────────────
const VIDEOS = [
  {
    id: 1,
    title: 'Apresentação — 2ª Unidade Fast&Tech Guarulhos',
    subtitle: 'Mini Market Autônomo 24h • Guarulhos, SP',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/lv_0_20260317230330_c4aabbd7.mp4',
    tag: 'Apresentação',
    tagColor: '#d400ff',
  },
  {
    id: 2,
    title: 'Inauguração — 2ª Unidade • Edifício Guaratuba',
    subtitle: 'Guarulhos, SP • Março 2026',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/INAUGURA%C3%87AO2UNIDADE_GUARULHOS_8275fd4b.mp4',
    tag: 'Inauguração',
    tagColor: '#00d9ff',
  },
  {
    id: 3,
    title: 'Apresentação — 1ª Unidade Fast&Tech',
    subtitle: 'Condomínio Premium I • São Paulo, SP',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/APRESENTA%C3%87AO_LOJA1_PREMIUM1_a97f0e63.mp4',
    tag: 'Apresentação',
    tagColor: '#ffd700',
  },
  {
    id: 4,
    title: 'Inauguração — 1ª Unidade Fast&Tech',
    subtitle: 'Condomínio Premium I • São Paulo, SP',
    url: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/INAUGURA%C3%87AO_LOJA1_PREMIUMI_6a803996.mp4',
    tag: 'Inauguração',
    tagColor: '#ff6b35',
  },
];

// ─── FOTOS (substituir pelos CDN URLs reais quando enviadas) ───────────────
const PHOTOS: { id: number; caption: string; url: string }[] = [
  // Adicionar fotos aqui conforme forem enviadas:
  // { id: 1, caption: '1ª Unidade — Fachada', url: 'https://...' },
];

// ─── STATS ─────────────────────────────────────────────────────────────────
const STATS = [
  { value: '2', label: 'Lojas em Operação', icon: '🏪' },
  { value: '24h', label: 'Funcionamento Contínuo', icon: '⏰' },
  { value: '100%', label: 'Autônomo', icon: '🤖' },
  { value: '0', label: 'Custo para o Condomínio', icon: '💰' },
];

export default function NossasLojas() {
  const [lightboxPhoto, setLightboxPhoto] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<number>(0);

  const openLightbox = (idx: number) => setLightboxPhoto(idx);
  const closeLightbox = () => setLightboxPhoto(null);
  const prevPhoto = () => setLightboxPhoto(i => (i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null));
  const nextPhoto = () => setLightboxPhoto(i => (i !== null ? (i + 1) % PHOTOS.length : null));

  return (
    <div style={{ paddingBottom: 80 }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ padding: '60px 20px 40px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.25)',
          borderRadius: 20, padding: '6px 16px', marginBottom: 24,
        }}>
          <Camera size={14} color="#00d9ff" />
          <span style={{ color: '#00d9ff', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Lojas em Operação
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(32px, 6vw, 56px)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 16,
          color: '#fff',
        }}>
          Conheça Nossas{' '}
          <span style={{
            background: 'linear-gradient(90deg, #00d9ff, #d400ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Lojas Reais
          </span>
        </h1>

        <p style={{ color: '#a0a0c0', fontSize: 'clamp(15px, 2vw, 18px)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Não é promessa — é realidade. Veja como nossas lojas funcionam 24h por dia,
          sem funcionários, sem complicação, gerando renda para o condomínio.
        </p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, maxWidth: 480, margin: '0 auto' }}>
          {STATS.map(s => (
            <div key={s.label} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(0,217,255,0.15)',
              borderRadius: 16,
              padding: '16px 24px',
              textAlign: 'center',
              minWidth: 120,
            }}>
              <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
              <div style={{
                fontSize: 28, fontWeight: 900, color: '#00d9ff',
                background: 'linear-gradient(90deg, #00d9ff, #d400ff)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{s.value}</div>
              <div style={{ color: '#888', fontSize: 12, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VÍDEOS EM MOSAICO ─────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
          <Video size={20} color="#d400ff" />
          <h2 style={{ color: '#fff', fontSize: 22, fontWeight: 800, margin: 0 }}>
            Vídeos das Nossas Lojas
          </h2>
        </div>

        {/* Grade de vídeos — 2 colunas no desktop, 1 no mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: 24,
        }}>
          {VIDEOS.map(v => (
            <div key={v.id} style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: `1px solid ${v.tagColor}33`,
              boxShadow: `0 0 30px ${v.tagColor}18`,
              background: '#0a0819',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Player */}
              <div style={{ position: 'relative', background: '#000' }}>
                <video
                  controls
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'contain' }}
                >
                  <source src={v.url} type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
                {/* Badge de tipo */}
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: `${v.tagColor}22`,
                  border: `1px solid ${v.tagColor}66`,
                  borderRadius: 20, padding: '4px 12px',
                  color: v.tagColor, fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  backdropFilter: 'blur(8px)',
                }}>
                  {v.tag}
                </div>
              </div>
              {/* Info */}
              <div style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                  <MapPin size={13} color={v.tagColor} />
                  <span style={{ color: v.tagColor, fontSize: 12, fontWeight: 600 }}>{v.subtitle}</span>
                </div>
                <h3 style={{ color: '#fff', fontSize: 16, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                  {v.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALERIA DE FOTOS ──────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <Camera size={20} color="#00d9ff" />
          <h2 style={{ color: '#fff', fontSize: 22, fontWeight: 800, margin: 0 }}>
            Galeria de Fotos
          </h2>
        </div>

        {PHOTOS.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {PHOTOS.map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                style={{
                  borderRadius: 16,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(0,217,255,0.15)',
                  position: 'relative',
                  aspectRatio: '4/3',
                  background: '#111',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 24px rgba(0,217,255,0.25)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '20px 14px 12px',
                  color: '#fff', fontSize: 13, fontWeight: 600,
                }}>
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            padding: '40px 20px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px dashed rgba(0,217,255,0.2)',
            borderRadius: 16,
            textAlign: 'center',
            color: '#555',
          }}>
            <Camera size={40} color="#333" style={{ marginBottom: 12 }} />
            <p style={{ fontSize: 15, marginBottom: 8, color: '#666' }}>
              Fotos das lojas em breve
            </p>
            <p style={{ fontSize: 13, color: '#444' }}>
              Estamos preparando a galeria com fotos da 1ª e 2ª unidade
            </p>
          </div>
        )}
      </section>

      {/* ── DEPOIMENTOS RÁPIDOS ───────────────────────────────────────────── */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '0 16px 60px' }}>
        <h2 style={{ color: '#fff', fontSize: 22, fontWeight: 800, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Star size={20} color="#ffd700" fill="#ffd700" />
          O que dizem nossos parceiros
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {[
            { name: 'Carlos Mendes', role: 'Síndico • Condomínio Parque das Flores', text: 'Os preços são muito mais baratos do que qualquer franquia. Meus moradores ficaram impressionados — compraram refrigerante, snack e água por menos do que pagavam no mercado do bairro.', stars: 5 },
            { name: 'Fernanda Oliveira', role: 'Moradora • 2ª Unidade', text: 'Compro todo dia antes de sair para o trabalho. Sem cadastro, sem app, só escanear e pagar. Muito mais prático do que qualquer outra opção.', stars: 5 },
            { name: 'Ricardo Souza', role: 'Gestor de Facilities • Empresa Parceira', text: 'Nossos colaboradores economizam tempo e dinheiro. A Fast&Tech instalou em 48h e nunca tivemos problema com estoque ou pagamento.', stars: 5 },
          ].map((t, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '20px',
            }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={14} color="#ffd700" fill="#ffd700" />
                ))}
              </div>
              <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.6, marginBottom: 16, fontStyle: 'italic' }}>
                "{t.text}"
              </p>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ color: '#666', fontSize: 12 }}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 700, margin: '0 auto', padding: '0 16px', textAlign: 'center' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(212,0,255,0.08))',
          border: '1px solid rgba(0,217,255,0.2)',
          borderRadius: 24,
          padding: '40px 32px',
        }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 900, marginBottom: 12 }}>
            Quer uma loja assim no seu condomínio?
          </h2>
          <p style={{ color: '#a0a0c0', fontSize: 16, marginBottom: 28, lineHeight: 1.6 }}>
            Custo zero para o condomínio. Instalação em 48h. Renda passiva todo mês.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contato">
              <button style={{
                padding: '14px 28px',
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 15,
                background: 'linear-gradient(135deg, #ff006e, #d400ff)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 24px rgba(255,0,110,0.4)',
              }}>
                Quero no meu condomínio →
              </button>
            </Link>
            <a
              href="https://wa.me/5511948161325?text=Olá!%20Vi%20as%20lojas%20no%20site%20e%20quero%20saber%20mais%20sobre%20o%20Mini%20Market%20para%20meu%20condomínio."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 28px',
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 15,
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                color: '#fff',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              💬 Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      {lightboxPhoto !== null && PHOTOS.length > 0 && (
        <div
          onClick={closeLightbox}
          style={{
            position: 'fixed', inset: 0, zIndex: 10000,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <button onClick={closeLightbox} style={{
            position: 'absolute', top: 20, right: 20,
            background: 'rgba(255,255,255,0.1)', border: 'none',
            borderRadius: '50%', width: 44, height: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: '#fff',
          }}>
            <X size={20} />
          </button>
          {PHOTOS.length > 1 && (
            <>
              <button onClick={e => { e.stopPropagation(); prevPhoto(); }} style={{
                position: 'absolute', left: 16, background: 'rgba(255,255,255,0.1)',
                border: 'none', borderRadius: '50%', width: 44, height: 44,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff',
              }}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={e => { e.stopPropagation(); nextPhoto(); }} style={{
                position: 'absolute', right: 16, background: 'rgba(255,255,255,0.1)',
                border: 'none', borderRadius: '50%', width: 44, height: 44,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#fff',
              }}>
                <ChevronRight size={20} />
              </button>
            </>
          )}
          <img
            src={PHOTOS[lightboxPhoto].url}
            alt={PHOTOS[lightboxPhoto].caption}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 16, objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
}
