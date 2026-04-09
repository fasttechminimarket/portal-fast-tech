import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { Tv, Droplets, CheckCircle, ArrowRight, Zap, Shield, Smartphone } from 'lucide-react';

const BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';

export default function MidiaLaundry() {
  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.82)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(212,0,255,0.3)', background: 'rgba(212,0,255,0.07)', color: '#d400ff' }}
            >
              <Tv size={12} /> Mídia Indoor &amp; Laundry In Box
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">Comunicação </span>
              <span style={{ background: 'linear-gradient(90deg, #d400ff, #00d9ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Inteligente
              </span>
              <br />
              <span className="text-white">e Lavanderia </span>
              <span style={{ background: 'linear-gradient(90deg, #ffd700, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Autônoma
              </span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Dois pilares do ecossistema Fast&amp;Tech que elevam completamente a experiência no seu condomínio ou empresa: telas inteligentes para comunicação moderna e lavanderia autônoma sem complicações.
            </p>
            <Link href="/contato">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #d400ff, #00d9ff)', color: '#fff', boxShadow: '0 0 25px rgba(212,0,255,0.4)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(212,0,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(212,0,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                <CheckCircle size={16} /> Quero Saber Mais
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAST&TECH MÍDIA DOOH ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.90)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              {/* Logo Mídia Indoor */}
              <div className="mb-6">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/T%C3%ADtulo_244d9a0e.webp"
                  alt="Fast&Tech Mídia Indoor"
                  style={{
                    width: '220px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 0 20px rgba(212,0,255,0.5)) drop-shadow(0 0 40px rgba(0,217,255,0.2))',
                  }}
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                <span className="text-white">Telas Inteligentes que </span>
                <span style={{ background: 'linear-gradient(90deg, #d400ff, #00d9ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Comunicam e Geram Receita
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                O Fast&amp;Tech Mídia transforma elevadores e halls de entrada em canais de comunicação modernos e eficientes. Telas digitais de alta definição que exibem avisos do condomínio, publicidade segmentada e conteúdo relevante para moradores e visitantes.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Tv, title: 'Telas 4K em Elevadores e Halls', desc: 'Displays de alta resolução instalados nos pontos de maior circulação do condomínio.', color: '#d400ff' },
                  { icon: Zap, title: 'Comunicados em Tempo Real', desc: 'Envie avisos, comunicados e informações importantes para todos os moradores instantaneamente.', color: '#00d9ff' },
                  { icon: Shield, title: 'Publicidade Segmentada', desc: 'Anúncios de estabelecimentos locais geram receita adicional para o condomínio.', color: '#ffd700' },
                  { icon: Smartphone, title: 'Gestão Remota', desc: 'Controle todo o conteúdo exibido pelo celular, a qualquer hora e de qualquer lugar.', color: '#d400ff' },
                ].map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${f.color}15`, border: `1px solid ${f.color}30` }}>
                        <Icon size={18} style={{ color: f.color }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
                        <p className="text-gray-400 text-sm">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '📺', title: 'DOOH Digital', desc: 'Digital Out-of-Home de última geração', color: '#d400ff' },
                { icon: '📡', title: 'Conectividade Total', desc: 'Integrado à internet e ao sistema do condomínio', color: '#00d9ff' },
                { icon: '💡', title: 'Conteúdo Dinâmico', desc: 'Programação automática por horário e evento', color: '#ffd700' },
                { icon: '📊', title: 'Relatórios de Alcance', desc: 'Métricas de visualizações e engajamento', color: '#d400ff' },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 text-center transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${c.color}08, rgba(10,8,25,0.5))`, border: `1.5px solid ${c.color}25` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${c.color}15`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1">{c.title}</h4>
                  <p className="text-gray-400 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divisor neon */}
          <div className="relative my-12">
            <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #d400ff, #00d9ff, transparent)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: '#0a0819', border: '1px solid rgba(212,0,255,0.3)', color: '#d400ff' }}>
                E também...
              </div>
            </div>
          </div>

          {/* ─── LAUNDRY IN BOX ─── */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
              {[
                { icon: '🧺', title: 'Lavagem Automática', desc: 'Máquinas de última geração com ciclos inteligentes', color: '#ffd700' },
                { icon: '🔒', title: 'Smart Lockers', desc: 'Armários inteligentes para recebimento de encomendas', color: '#00d9ff' },
                { icon: '📱', title: 'App de Controle', desc: 'Acompanhe o ciclo pelo celular em tempo real', color: '#d400ff' },
                { icon: '⚡', title: 'Sem Filas', desc: 'Agendamento digital e notificações automáticas', color: '#ffd700' },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 text-center transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${c.color}08, rgba(10,8,25,0.5))`, border: `1.5px solid ${c.color}25` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${c.color}15`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h4 className="font-bold text-white text-sm mb-1">{c.title}</h4>
                  <p className="text-gray-400 text-xs">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2">
              {/* Badge Em Lançamento */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ border: '1px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.07)', color: '#ffd700' }}
                >
                  <Droplets size={12} /> Laundry In Box
                </div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest animate-pulse"
                  style={{
                    border: '1.5px solid rgba(255,100,0,0.7)',
                    background: 'rgba(255,100,0,0.12)',
                    color: '#ff6400',
                    boxShadow: '0 0 12px rgba(255,100,0,0.3)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: '#ff6400', boxShadow: '0 0 6px #ff6400' }} />
                  Em Processo de Lançamento
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                <span className="text-white">O Fim da Dor de Cabeça </span>
                <span style={{ background: 'linear-gradient(90deg, #ffd700, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  com Máquinas Quebradas
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A Laundry In Box é uma lavanderia autônoma e inteligente instalada no seu condomínio. Máquinas modernas, sempre funcionando, com pagamento digital e monitoramento em tempo real. Chega de reclamações sobre máquinas quebradas ou mal utilizadas.
              </p>
              <div className="space-y-3">
                {[
                  'Manutenção preventiva e corretiva por nossa conta',
                  'Pagamento via Pix, cartão ou crédito no app',
                  'Notificação no celular quando o ciclo termina',
                  'Smart Lockers para recebimento de encomendas 24h',
                  'Relatórios de uso para a administração do condomínio',
                  'Instalação e operação 100% gerenciadas pela Fast&Tech',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={16} style={{ color: '#ffd700', flexShrink: 0 }} />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleY(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Leve o Ecossistema Completo para o seu Espaço
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Combine o Mini Market, a Mídia Indoor e a Laundry In Box para uma transformação completa do seu condomínio ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #d400ff, #00d9ff)', color: '#fff', boxShadow: '0 0 25px rgba(212,0,255,0.4)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(212,0,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(212,0,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                Agendar Visita Técnica Gratuita
              </button>
            </Link>
            <Link href="/">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                Ver o Ecossistema Completo <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
