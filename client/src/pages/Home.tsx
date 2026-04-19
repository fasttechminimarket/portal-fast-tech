import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { ShoppingCart, Tv, Droplets, CheckCircle, Star, Building2, Home as HomeIcon, ArrowRight, Zap } from 'lucide-react';
import SindicoFunnel from '@/components/SindicoFunnel';
import IndicationMachine from '@/components/IndicationMachine';
import MidiaIndoorFunnel from '@/components/MidiaIndoorFunnel';
import NeonOverlay from '@/components/NeonOverlay';

/**
 * HOME PAGE - Fast&Tech Soluções
 * Design: Dark Tech com background neon, efeitos glow
 * Seções: Hero, Ecossistema (3 pilares), Vantagens rápidas, CTA duplo
 */

const ASSETS = {
  logo: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/LOGOTIPO_efa03675.png',
  bg: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp',
  equipe: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/1935575c-5c79-4d98-8d9e-1f37380580d8_756f9f24.jpg',
  mascoteShopping: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/mascote_shopping_5161aa28.webp',
  mascoteAI: 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/mascote_ai_45fc2ef9.webp',
};

export default function Home() {
  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${ASSETS.bg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.78)' }} />
        <NeonOverlay />
        {/* Partículas decorativas */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${[3,2,4,2,3,2][i]}px`,
                height: `${[3,2,4,2,3,2][i]}px`,
                background: i % 2 === 0 ? '#00d9ff' : '#d400ff',
                boxShadow: `0 0 ${[8,6,10,6,8,6][i]}px ${i % 2 === 0 ? '#00d9ff' : '#d400ff'}`,
                top: `${[15,35,55,70,25,80][i]}%`,
                left: `${[10,80,20,60,45,30][i]}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${2 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: texto */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{
                border: '1px solid rgba(0,217,255,0.3)',
                background: 'rgba(0,217,255,0.07)',
                color: '#00d9ff',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#00d9ff', boxShadow: '0 0 6px #00d9ff' }}
              />
              Ecossistema Autônomo 24h
            </div>

            <h1 className="font-black leading-tight mb-6">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-2">
                <span className="text-white">O Fim do </span>
                <span
                  style={{
                    background: 'linear-gradient(90deg, #00d9ff, #d400ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Condomínio
                </span>
                <span className="text-white"> Comum.</span>
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl mt-4">
                <span className="text-white">A Revolução do </span>
                <br className="sm:hidden" />
                <span
                  style={{
                    background: 'linear-gradient(90deg, #ffd700, #ff006e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Ecossistema Autônomo.
                </span>
              </div>
            </h1>

            <div className="mb-8 max-w-xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Valorize seu patrimônio com nosso{' '}
                <span style={{ color: '#00d9ff', fontWeight: 700 }}>Mini Market 24h</span>,{' '}
                <span style={{ color: '#d400ff', fontWeight: 700 }}>Mídia Indoor</span> e{' '}
                <span style={{ color: '#ffd700', fontWeight: 700 }}>Laundry In Box</span>.{' '}
                <strong className="text-white">Tudo a custo zero para o condomínio.</strong>
              </p>
              <div
                className="rounded-xl px-4 py-3 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(212,0,255,0.06))',
                  border: '1px solid rgba(0,217,255,0.35)',
                  boxShadow: '0 0 20px rgba(0,217,255,0.12), inset 0 0 20px rgba(212,0,255,0.04)',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00d9ff, #d400ff, transparent)' }} />
                <p className="text-sm leading-relaxed" style={{ color: '#e0e0ff' }}>
                  <span style={{ color: '#00d9ff', fontWeight: 800 }}>Somos marca própria</span> — não pagamos{' '}
                  <em>Naming Rights</em> e nem{' '}
                  <span style={{ color: '#ff006e', fontWeight: 700 }}>Royalties mensais de 5%, 6%, 8%</span>.{' '}
                  Nossos preços são{' '}
                  <span
                    style={{
                      fontWeight: 900,
                      background: 'linear-gradient(90deg, #ffd700, #ff006e)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 0 6px rgba(255,215,0,0.5))',
                    }}
                  >
                    mais de 30% mais baratos
                  </span>{' '}
                  que os de um Mini Market franqueado.
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #d400ff, #00d9ff, transparent)' }} />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/mini-market-residencial">
                <button
                  className="px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #00d9ff, #0099bb)',
                    color: '#0a0819',
                    boxShadow: '0 0 25px rgba(0,217,255,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(0,217,255,0.7)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(0,217,255,0.4)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  <HomeIcon size={16} />
                  Sou Síndico / Gestor
                </button>
              </Link>
              <Link href="/mini-market-corporativo">
                <button
                  className="px-7 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #ff006e, #d400ff)',
                    color: '#fff',
                    boxShadow: '0 0 25px rgba(255,0,110,0.4)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(255,0,110,0.7)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255,0,110,0.4)';
                    (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                  }}
                >
                  <Building2 size={16} />
                  Quero no meu Prédio / Empresa
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '500+', label: 'Condôminos Ativos', color: '#00d9ff' },
                { value: 'R$0', label: 'Custo de Implantação', color: '#ffd700' },
                { value: '24h', label: 'Operação Autônoma', color: '#d400ff' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-2xl font-black" style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}60` }}>
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-xs leading-tight max-w-[80px]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: logo principal ampliada com neon roxo */}
          <div className="relative flex justify-center lg:justify-center mt-4 lg:mt-0">
            <div className="relative flex items-center justify-center" style={{ width: 'min(420px, 82vw)', height: 'min(420px, 82vw)' }}>
              {/* Anel neon roxo animado */}
              <div
                className="absolute rounded-full animate-pulse"
                style={{
                  width: '100%',
                  height: '100%',
                  border: '2px solid rgba(212,0,255,0.6)',
                  boxShadow: '0 0 40px rgba(212,0,255,0.5), 0 0 80px rgba(212,0,255,0.2), inset 0 0 40px rgba(212,0,255,0.1)',
                  borderRadius: '50%',
                  animationDuration: '3s',
                }}
              />
              {/* Anel neon azul externo girando */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 'calc(100% + 50px)',
                  height: 'calc(100% + 50px)',
                  top: '-25px',
                  left: '-25px',
                  border: '1.5px solid rgba(0,217,255,0.3)',
                  boxShadow: '0 0 20px rgba(0,217,255,0.25)',
                  borderRadius: '50%',
                  animation: 'spin 12s linear infinite',
                }}
              />
              {/* Container circular com overflow hidden para cortar cantos da logo */}
              <div
                className="relative z-10 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  width: '82%',
                  height: '82%',
                  background: 'radial-gradient(circle, rgba(74,45,125,0.4) 0%, rgba(10,8,25,0.2) 70%)',
                }}
              >
                <img
                  src={ASSETS.logo}
                  alt="Fast&Tech Soluções"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'drop-shadow(0 0 20px rgba(212,0,255,0.5)) drop-shadow(0 0 40px rgba(0,217,255,0.3))',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-500 text-xs tracking-widest uppercase">Explore</span>
          <div
            className="w-px h-8"
            style={{ background: 'linear-gradient(180deg, #00d9ff, transparent)' }}
          />
        </div>
      </section>

      {/* ─── ECOSSISTEMA ─── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${ASSETS.bg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scaleX(-1)',
          }}
        />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.88)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(212,0,255,0.3)', background: 'rgba(212,0,255,0.07)', color: '#d400ff' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#d400ff', boxShadow: '0 0 6px #d400ff' }} />
              Nossos Pilares
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">O </span>
              <span style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Ecossistema
              </span>
              <span className="text-white"> Completo</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Três pilares que transformam completamente a experiência em condomínios e espaços corporativos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ShoppingCart,
                title: 'Mini Market 24h',
                description: 'Honest market completo com inteligência de estoque. Produtos de primeira necessidade a um elevador de distância, disponíveis 24 horas por dia.',
                color: '#00d9ff',
                badge: 'Mais Popular',
                href: '/mini-market-residencial',
              },
              {
                icon: Tv,
                title: 'Fast&Tech Mídia · DOOH',
                description: 'Telas inteligentes em elevadores e halls para comunicação ágil e moderna. Publicidade segmentada e avisos em tempo real para moradores.',
                color: '#d400ff',
                badge: 'Inovação',
                href: '/midia-laundry',
              },
              {
                icon: Droplets,
                title: 'Laundry In Box',
                description: 'Lavanderia autônoma e smart lockers. O fim da dor de cabeça com máquinas quebradas. Operação inteligente sem complicações.',
                color: '#ffd700',
                badge: 'Exclusivo',
                href: '/midia-laundry',
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <Link key={i} href={pillar.href}>
                  <div
                    className="group rounded-2xl p-6 cursor-pointer transition-all duration-400 h-full"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: `1px solid ${pillar.color}25`,
                      backdropFilter: 'blur(10px)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.border = `1px solid ${pillar.color}60`;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${pillar.color}20, inset 0 0 40px ${pillar.color}05`;
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.border = `1px solid ${pillar.color}25`;
                      (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                      style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}40`, color: pillar.color }}
                    >
                      {pillar.badge}
                    </div>
                    <div
                      className="mb-4 inline-flex p-3 rounded-xl"
                      style={{ background: `${pillar.color}12`, border: `1px solid ${pillar.color}25` }}
                    >
                      <Icon size={28} style={{ color: pillar.color, filter: `drop-shadow(0 0 8px ${pillar.color}80)` }} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{pillar.description}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: pillar.color }}>
                      Saiba mais <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── POR QUE FAST&TECH ─── */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url('${ASSETS.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
        />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.90)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.07)', color: '#ffd700' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#ffd700', boxShadow: '0 0 6px #ffd700' }} />
              Por que Fast&amp;Tech?
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">Vantagens que </span>
              <span style={{ background: 'linear-gradient(90deg, #ffd700, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                fazem a diferença
              </span>
            </h2>
          </div>

          {/* Destaque Marca Própria */}
          <div
            className="mb-12 mx-auto max-w-4xl rounded-2xl p-6 md:p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(212,0,255,0.10), rgba(0,217,255,0.08))',
              border: '1.5px solid rgba(212,0,255,0.45)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(212,0,255,0.18)', border: '1px solid rgba(212,0,255,0.4)' }}
              >
                🏆
              </div>
              <div>
                <h3
                  className="text-base md:text-lg font-black mb-3 uppercase tracking-wide"
                  style={{ background: 'linear-gradient(90deg, #d400ff, #00d9ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Marca Registrada e Própria — Sem Franquias, Sem Amarras
                </h3>
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                  O Ecossistema Fast&amp;Tech é <strong className="text-white">marca registrada e própria</strong>. Não somos franquia, não pagamos <em>Naming Rights</em> — taxa de entrada que beira mais de cem mil reais — e muito menos royalties de 6%, 7% ou até 9% do faturamento todos os meses para marcas terceiras. Isso impacta <strong className="text-[#ffd700]">diretamente na precificação dos nossos produtos</strong>, que giram em torno de <strong className="text-[#00d9ff]">20% mais baratos</strong> que os mini mercadinhos de franquias. Não temos amarras contratuais com fornecedores nem com marcas, o que também gera menores preços em nossas prateleiras, geladeiras e freezers.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #d400ff, #00d9ff, transparent)' }} />
          </div>

          {/* Grid de vantagens */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '💰', title: 'Zero Custo de Implantação', desc: 'Nenhum investimento inicial. Toda a infraestrutura é nossa responsabilidade.', color: '#ffd700' },
              { icon: '📈', title: 'Repasse de % do Faturamento', desc: 'Cashback direto para o condomínio dependendo da quantidade de apartamentos ou casas. Quanto mais vendas, mais ganho para o condomínio.', color: '#00d9ff' },
              { icon: '⚙️', title: 'Operação 100% Cuidada', desc: 'Nossa equipe gerencia tudo: estoque, manutenção, limpeza e atendimento.', color: '#d400ff' },
              { icon: '🚀', title: 'Tecnologia de Ponta', desc: 'Sistemas inteligentes de estoque, pagamento e segurança integrados.', color: '#00d9ff' },
              { icon: '🛡️', title: 'Suporte 24/7', desc: 'Equipe disponível para resolver qualquer problema a qualquer hora.', color: '#ffd700' },
              { icon: '🏢', title: 'Valorização do Imóvel', desc: 'Pesquisas do mercado imobiliário mostram que imóveis com Mini Market valorizaram mais de 15% em menos de um ano. A tendência é ultrapassar 20% ainda em 2026.', color: '#d400ff' },
            ].map((b, i) => (
              <div
                key={i}
                className="group rounded-2xl p-5 transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${b.color}20`,
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${b.color}50`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${b.color}15`;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1px solid ${b.color}20`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-white mb-2 text-sm">{b.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <p className="text-gray-300 text-lg mb-6">
              Mais de <span className="text-[#ffd700] font-bold">500 condôminos</span> confiam todos os dias e 24h na Fast&amp;Tech
            </p>
            <Link href="/contato">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #ff006e, #d400ff)',
                  color: '#fff',
                  boxShadow: '0 0 25px rgba(255,0,110,0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(255,0,110,0.7)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255,0,110,0.4)';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                }}
              >
                Seja o Próximo a Revolucionar seu Espaço
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── DEPOIMENTOS ─── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url('${ASSETS.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1)' }}
        />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(255,0,110,0.3)', background: 'rgba(255,0,110,0.07)', color: '#ff006e' }}
            >
              <Star size={12} /> O que dizem sobre nós
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-white">Quem já </span>
              <span style={{ background: 'linear-gradient(90deg, #ff006e, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Transformou
              </span>
              <span className="text-white"> seu Espaço</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Veja o que síndicos, moradores e gestores estão falando sobre o ecossistema Fast&amp;Tech.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                nome: 'Carlos Mendes',
                cargo: 'Síndico — Condomínio Parque das Flores, SP',
                texto: 'Desde que instalamos o Mini Market da Fast&Tech, o condomínio passou a receber um cashback mensal que já ajudou a cobrir parte das despesas de manutenção. Os moradores adoraram a comodidade de ter uma loja 24h no próprio prédio.',
                stars: 5,
                color: '#00d9ff',
                foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
              },
              {
                nome: 'Fernanda Oliveira',
                cargo: 'Moradora — Edifício Horizonte Blue, Campinas',
                texto: 'Antes eu precisava sair de casa para comprar qualquer coisa básica. Agora desço o elevador e resolvo tudo no Mini Market. Os preços são ótimos e a tecnologia de pagamento é super prática, uso o celular e pronto!',
                stars: 5,
                color: '#d400ff',
                foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
              },
              {
                nome: 'Ricardo Souza',
                cargo: 'Gestor de Facilities — Grupo Vanguard, São Paulo',
                texto: 'Implementamos o Mini Market Corporativo e a Mídia Indoor nos nossos dois escritórios. A produtividade da equipe aumentou visivelmente — menos saídas para almoço. A Fast&Tech cuida de tudo, nós só aproveitamos os benefícios.',
                stars: 5,
                color: '#ffd700',
                foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face',
              },
              {
                nome: 'Ana Paula Ramos',
                cargo: 'Síndica — Residencial Villa Verde, Guarulhos',
                texto: 'A instalação foi rápida e sem nenhum custo para o condomínio. Em menos de 30 dias já estávamos recebendo o repasse mensal. Os moradores não param de elogiar. Já indiquei para outros síndicos da minha região!',
                stars: 5,
                color: '#00d9ff',
                foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face',
              },
              {
                nome: 'Marcelo Teixeira',
                cargo: 'Morador — Condomínio Solar das Acácias, Santo André',
                texto: 'Uso o Mini Market quase todos os dias. Esqueci o leite? Desce lá. Precisa de uma cerveja gelada? Desce lá. É uma comodidade que parece pequena, mas faz uma diferença enorme no dia a dia. Preço justo e sempre bem abastecido.',
                stars: 5,
                color: '#ff006e',
                foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
              },
              {
                nome: 'Juliana Costa',
                cargo: 'Administradora — Imobiliária Horizonte, São Paulo',
                texto: 'Gerencio mais de 15 condomínios e já indiquei a Fast&Tech para 8 deles. O processo é simples, sem burocracia, e o suporte é excelente. Os síndicos ficam satisfeitos e os moradores também. É um diferencial enorme para o condomínio.',
                stars: 5,
                color: '#d400ff',
                foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
              },
            ].map((dep, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1.5px solid ${dep.color}25`,
                  backdropFilter: 'blur(10px)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1.5px solid ${dep.color}55`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 35px ${dep.color}15`;
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.border = `1.5px solid ${dep.color}25`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Estrelas */}
                <div className="flex gap-1 mb-4">
                  {[...Array(dep.stars)].map((_, s) => (
                    <Star key={s} size={14} fill={dep.color} style={{ color: dep.color }} />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5 italic">
                  &ldquo;{dep.texto}&rdquo;
                </p>

                {/* Autor com foto */}
                <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${dep.color}20` }}>
                  <img
                    src={dep.foto}
                    alt={dep.nome}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                    style={{ border: `2px solid ${dep.color}50`, boxShadow: `0 0 12px ${dep.color}30` }}
                  />
                  <div>
                    <p className="text-white font-bold text-sm">{dep.nome}</p>
                    <p className="text-gray-500 text-xs leading-snug">{dep.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA DUPLO ─── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url('${ASSETS.bg}')`, backgroundSize: 'cover', backgroundPosition: 'center bottom', transform: 'scaleY(-1)' }}
        />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card Síndico */}
            <div
              className="rounded-2xl p-8 text-center transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(0,217,255,0.03))',
                border: '1.5px solid rgba(0,217,255,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 50px rgba(0,217,255,0.2)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-xl font-black text-white mb-3">Sou Síndico / Gestor</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Descubra como transformar seu condomínio em um ecossistema inteligente e ainda gerar receita extra sem nenhum custo.
              </p>
              <Link href="/mini-market-residencial">
                <button
                  className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider"
                  style={{ background: 'linear-gradient(135deg, #00d9ff, #0099bb)', color: '#0a0819', boxShadow: '0 0 20px rgba(0,217,255,0.4)' }}
                >
                  Quero Saber Mais
                </button>
              </Link>
            </div>

            {/* Card Morador/Empresa */}
            <div
              className="rounded-2xl p-8 text-center transition-all duration-300 group"
              style={{
                background: 'linear-gradient(135deg, rgba(255,0,110,0.08), rgba(212,0,255,0.03))',
                border: '1.5px solid rgba(255,0,110,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 50px rgba(255,0,110,0.2)';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-black text-white mb-3">Quero no meu Prédio / Empresa</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Indique a Fast&amp;Tech para o seu condomínio ou empresa e tenha comodidade 24h a um elevador de distância.
              </p>
              <Link href="/contato">
                <button
                  className="w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider"
                  style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 20px rgba(255,0,110,0.4)' }}
                >
                  Indicar Agora
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ─── MÓDULO 2: FUNIL DO SÍNDICO ─── */}
      <SindicoFunnel />

      {/* ─── MÓDULO 3: MÁQUINA DE INDICAÇÃO ─── */}
      <IndicationMachine />

      {/* ─── MÓDULO 5: FUNIL DA MÍDIA INDOOR ─── */}
      <MidiaIndoorFunnel />

    </Layout>
  );
}
