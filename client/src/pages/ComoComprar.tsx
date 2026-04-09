import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { ShoppingCart, Scan, CreditCard, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

/**
 * COMO COMPRAR - Fast&Tech Soluções
 * Design: Dark Tech Neon — fundo escuro #0a0819, neons ciano/magenta/dourado
 * Ordem das seções: Hero → 4 Passos → Vídeo → Por que somos diferentes → Aviso Legal → CTA
 */

const BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';
const VIDEO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/COMOCOMPRAR-PASSOAPASSO_d22efc0d.mp4';

const steps = [
  {
    icon: ShoppingCart,
    number: '01',
    title: 'Escolha seu produto',
    desc: 'Percorra as prateleiras, geladeiras e freezers e escolha o que quiser. Tudo disponível 24 horas por dia, 7 dias por semana.',
    color: '#00d9ff',
  },
  {
    icon: Scan,
    number: '02',
    title: 'Escaneie o código de barras',
    desc: 'Aproxime o produto do leitor de código de barras no nosso equipamento. É instantâneo — sem precisar de aplicativo, sem cadastro, sem senha.',
    color: '#d400ff',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Escolha a forma de pagamento',
    desc: 'Pague com Pix, cartão de crédito, cartão de débito ou carteira digital. Rápido, seguro e sem complicação.',
    color: '#ffd700',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Pronto! Compra realizada',
    desc: 'Seu pagamento é confirmado em segundos. Pegue seu produto e aproveite. Simples assim!',
    color: '#00d9ff',
  },
];

export default function ComoComprar() {
  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.88)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-14 text-center">

          <div className="flex justify-center mb-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(0,217,255,0.35)', background: 'rgba(0,217,255,0.08)', color: '#00d9ff' }}
            >
              <Scan size={12} /> Passo a Passo
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
            <span className="text-white">Como </span>
            <span style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Comprar
            </span>
            <br />
            <span className="text-white">no Mini Market </span>
            <span style={{ background: 'linear-gradient(90deg, #ffd700, #ff006e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Fast&amp;Tech
            </span>
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Um dos maiores diferenciais do Mini Market Fast&amp;Tech é a <strong className="text-white">facilidade total na hora de comprar</strong>. Esqueça aplicativos, cadastros demorados, senhas ou cartões vinculados. No nosso sistema, a compra é feita em segundos — basta escanear e pagar.
          </p>

          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl text-lg font-black"
            style={{
              background: 'linear-gradient(135deg, rgba(0,217,255,0.12), rgba(212,0,255,0.08))',
              border: '2px solid rgba(0,217,255,0.4)',
              boxShadow: '0 0 30px rgba(0,217,255,0.15)',
              color: '#fff',
            }}
          >
            <Zap size={22} style={{ color: '#ffd700', filter: 'drop-shadow(0 0 8px rgba(255,215,0,0.8))' }} />
            <span>
              <span style={{ color: '#00d9ff' }}>Sem cadastro.</span>{' '}
              <span style={{ color: '#d400ff' }}>Sem aplicativo.</span>{' '}
              <span style={{ color: '#ffd700' }}>Sem complicação.</span>
            </span>
          </div>
        </div>
      </section>

      {/* ─── 4 PASSOS + VÍDEO + DIFERENCIAIS + AVISO ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.93)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

          {/* ── 4 PASSOS ── */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-white">4 Passos </span>
              <span style={{ background: 'linear-gradient(90deg, #00d9ff, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Simples
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Do produto à mão em menos de 30 segundos. Sem burocracia, sem espera, sem complicação.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative rounded-2xl p-6 text-center transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}08, rgba(10,8,25,0.6))`,
                    border: `1.5px solid ${step.color}25`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${step.color}20`;
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${step.color}25`;
                  }}
                >
                  <div
                    className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: step.color, color: '#000', boxShadow: `0 0 12px ${step.color}80` }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="inline-flex p-4 rounded-2xl mb-4"
                    style={{ background: `${step.color}12`, border: `1px solid ${step.color}30` }}
                  >
                    <Icon size={32} style={{ color: step.color, filter: `drop-shadow(0 0 8px ${step.color}80)` }} />
                  </div>
                  <h3 className="font-black text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* ── VÍDEO (agora antes dos blocos de texto) ── */}
          <div className="max-w-3xl mx-auto mb-14">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ border: '1px solid rgba(255,215,0,0.35)', background: 'rgba(255,215,0,0.08)', color: '#ffd700' }}
                >
                  🎬 Vídeo Demonstrativo
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-4">
                <span className="text-white">Veja como é </span>
                <span style={{ background: 'linear-gradient(90deg, #ffd700, #ff006e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  fácil na prática
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Assista ao vídeo e veja o processo completo de compra no Mini Market Fast&amp;Tech — do escaneamento ao pagamento em segundos.
              </p>
            </div>

            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: '2px solid rgba(0,217,255,0.25)',
                boxShadow: '0 0 50px rgba(0,217,255,0.15), 0 0 100px rgba(212,0,255,0.08)',
              }}
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full block"
                style={{ maxHeight: '70vh', background: '#000', display: 'block' }}
              >
                <source src={VIDEO_URL} type="video/mp4" />
                Seu navegador não suporta reprodução de vídeo.{' '}
                <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#00d9ff' }}>
                  Clique aqui para baixar o vídeo.
                </a>
              </video>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Vídeo demonstrativo do processo de compra no Mini Market Fast&amp;Tech — gravado em equipamento real.
            </p>
          </div>

          {/* ── POR QUE SOMOS DIFERENTES (agora depois do vídeo) ── */}
          <div
            className="rounded-2xl p-6 md:p-8 mb-10"
            style={{
              background: 'linear-gradient(135deg, rgba(0,217,255,0.07), rgba(212,0,255,0.05))',
              border: '1.5px solid rgba(0,217,255,0.25)',
            }}
          >
            <h3 className="text-xl sm:text-2xl font-black text-white mb-5 text-center">
              Por que nossa forma de comprar é{' '}
              <span style={{ color: '#00d9ff' }}>diferente de todos os concorrentes?</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🚫', text: 'Não precisa baixar nenhum aplicativo no celular.' },
                { icon: '🚫', text: 'Não precisa fazer cadastro com e-mail, CPF ou senha.' },
                { icon: '🚫', text: 'Não precisa vincular cartão de crédito antecipadamente.' },
                { icon: '🚫', text: 'Não precisa criar conta em plataforma nenhuma.' },
                { icon: '✅', text: 'Basta escanear o código de barras do produto no equipamento.' },
                { icon: '✅', text: 'Pague na hora com Pix, cartão de débito, crédito ou carteira digital.' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-2">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <span className={`text-base leading-relaxed ${item.icon === '✅' ? 'text-white font-semibold' : 'text-gray-300'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── AVISO LEGAL BEBIDAS ALCOÓLICAS (agora depois do vídeo) ── */}
          <div
            className="relative rounded-2xl p-5 md:p-6 mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255,165,0,0.10), rgba(255,0,0,0.06))',
              border: '2px solid rgba(255,165,0,0.50)',
              boxShadow: '0 0 20px rgba(255,165,0,0.10)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,165,0,0.15)', border: '1px solid rgba(255,165,0,0.4)' }}
              >
                <AlertTriangle size={24} style={{ color: '#ffa500', filter: 'drop-shadow(0 0 6px rgba(255,165,0,0.8))' }} />
              </div>
              <div>
                <h4
                  className="text-base font-black mb-2 uppercase tracking-wide"
                  style={{ color: '#ffa500' }}
                >
                  Aviso Legal — Bebidas Alcoólicas
                </h4>
                <p className="text-gray-100 text-base leading-relaxed font-semibold">
                  É OBRIGATÓRIO POR LEI FORNECER O CPF E A DATA DE NASCIMENTO EM CASO DE COMPRAS DE BEBIDAS ALCOÓLICAS.
                </p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Esta exigência é determinada pela legislação brasileira para controle de venda de bebidas alcoólicas e verificação de maioridade. O sistema solicitará essas informações automaticamente ao escanear produtos alcoólicos.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-full rounded-b-2xl" style={{ background: 'linear-gradient(90deg, transparent, #ffa500, transparent)' }} />
          </div>

        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleY(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Quer o Mini Market no seu condomínio?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Instalação gratuita, sem burocracia e com cashback mensal para o condomínio. Fale com nossa equipe agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511948161325?text=Olá!%20Vi%20o%20vídeo%20de%20como%20comprar%20e%20quero%20saber%20mais%20sobre%20o%20Mini%20Market%20Fast%26Tech."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', boxShadow: '0 0 25px rgba(37,211,102,0.4)', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(37,211,102,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(37,211,102,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                💬 Falar no WhatsApp
              </button>
            </a>
            <Link href="/contato">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 25px rgba(255,0,110,0.4)', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(255,0,110,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255,0,110,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                Solicitar Proposta
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
