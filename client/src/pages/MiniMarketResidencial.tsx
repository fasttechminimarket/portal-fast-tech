import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { CheckCircle, ShoppingCart, Clock, Shield, TrendingUp, Smartphone, ArrowRight } from 'lucide-react';

const BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';
const EQUIPE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/1935575c-5c79-4d98-8d9e-1f37380580d8_756f9f24.jpg';

export default function MiniMarketResidencial() {
  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.82)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(0,217,255,0.3)', background: 'rgba(0,217,255,0.07)', color: '#00d9ff' }}
            >
              <ShoppingCart size={12} />
              Mini Market Residencial
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">Conveniência 24h </span>
              <span style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                a um Elevador
              </span>
              <br />
              <span className="text-white">de Distância</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              O Fast&amp;Tech Mini Market transforma seu condomínio em um ecossistema inteligente. Produtos de primeira necessidade, snacks, bebidas e muito mais — disponíveis 24 horas por dia, 7 dias por semana, sem custo algum para o condomínio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato">
                <button
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #00d9ff, #0099bb)', color: '#0a0819', boxShadow: '0 0 25px rgba(0,217,255,0.4)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(0,217,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(0,217,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                >
                  <CheckCircle size={16} />
                  Agendar Visita Técnica Gratuita
                </button>
              </Link>
              <Link href="/contato">
                <button
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{ background: 'transparent', color: '#ff006e', border: '2px solid rgba(255,0,110,0.5)', boxShadow: '0 0 15px rgba(255,0,110,0.2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,0,110,0.1)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(255,0,110,0.4)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 15px rgba(255,0,110,0.2)'; }}
                >
                  Sou Síndico / Gestor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMO FUNCIONA ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.90)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-white">Como </span>
              <span style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Funciona</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Instalamos, operamos e gerenciamos tudo. Você só aproveita os benefícios.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: '01', icon: '📋', title: 'Visita Técnica', desc: 'Nossa equipe visita o condomínio gratuitamente para avaliar o espaço ideal.', color: '#00d9ff' },
              { step: '02', icon: '🔧', title: 'Instalação Gratuita', desc: 'Montamos o Mini Market completo sem nenhum custo para o condomínio.', color: '#d400ff' },
              { step: '03', icon: '🤖', title: 'Operação Autônoma', desc: 'Sistema 100% automatizado com reposição inteligente de estoque.', color: '#ffd700' },
              { step: '04', icon: '💰', title: 'Cashback Mensal', desc: 'O condomínio recebe um percentual do faturamento todo mês.', color: '#00d9ff' },
            ].map((s, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-4 sm:p-6 text-center transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${s.color}20`, backdropFilter: 'blur(8px)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.border = `1px solid ${s.color}50`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.border = `1px solid ${s.color}20`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
              >
                <div className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: s.color, opacity: 0.5 }}>{s.step}</div>
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUTOS ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center bottom' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ border: '1px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.07)', color: '#ffd700' }}
              >
                Nosso Mix de Produtos
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                <span className="text-white">Tudo que você </span>
                <span style={{ background: 'linear-gradient(90deg, #ffd700, #ff006e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  precisa
                </span>
                <span className="text-white">, sempre disponível</span>
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Refrigerantes e Sucos', 'Água e Energéticos', 'Snacks e Biscoitos',
                  'Chocolates e Doces', 'Leite e Derivados', 'Pão de Forma',
                  'Produtos de Limpeza', 'Cervejas e Gelados', 'Pão Francês Fresquinho',
                  'Sal, Açúcar e Temperos', 'Picolés e Sorvetes', 'Muito mais...',
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: '#00d9ff', flexShrink: 0 }} />
                    <span className="text-gray-300 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Clock, title: '24h por dia', desc: '365 dias por ano, sem fechar', color: '#00d9ff' },
                { icon: Shield, title: 'Segurança Total', desc: 'Câmeras e reconhecimento facial', color: '#d400ff' },
                { icon: Smartphone, title: 'Pagamento Digital', desc: 'Pix, cartão e aproximação', color: '#ffd700' },
                { icon: TrendingUp, title: 'Estoque Inteligente', desc: 'Reposição automática por IA', color: '#00d9ff' },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl p-5 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${f.color}20` }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.border = `1px solid ${f.color}50`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.border = `1px solid ${f.color}20`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                  >
                    <Icon size={24} style={{ color: f.color, marginBottom: '10px', filter: `drop-shadow(0 0 6px ${f.color}60)` }} />
                    <h4 className="font-bold text-white text-sm mb-1">{f.title}</h4>
                    <p className="text-gray-400 text-xs">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VANTAGENS PARA O CONDOMÍNIO ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1) scaleY(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.90)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-white">Vantagens para o </span>
              <span style={{ background: 'linear-gradient(90deg, #00d9ff, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Condomínio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: '🏆',
                title: 'Valorização Imobiliária',
                desc: 'Pesquisas do mercado imobiliário mostram que condomínios com Mini Market valorizaram mais de 15% em menos de um ano. A tendência é ultrapassar 20% ainda em 2026.',
                color: '#ffd700',
              },
              {
                icon: '💵',
                title: 'Receita Passiva Mensal',
                desc: 'Cashback direto para o condomínio dependendo da quantidade de apartamentos ou casas. Quanto mais vendas, mais ganho para o condomínio.',
                color: '#00d9ff',
              },
              {
                icon: '⭐',
                title: 'Diferencial Competitivo',
                desc: 'Atraia novos moradores e retenha os atuais com um serviço exclusivo que poucos condomínios oferecem. Torne-se referência na região.',
                color: '#d400ff',
              },
            ].map((v, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 transition-all duration-300"
                style={{ background: `linear-gradient(135deg, ${v.color}08, rgba(10,8,25,0.5))`, border: `1.5px solid ${v.color}30` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 40px ${v.color}15`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Final */}
          <div
            className="rounded-2xl p-8 md:p-10 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(0,217,255,0.08), rgba(212,0,255,0.06))', border: '1.5px solid rgba(0,217,255,0.25)' }}
          >
            <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
              Pronto para Revolucionar seu Condomínio?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Agende uma visita técnica gratuita e descubra como a Fast&amp;Tech pode transformar seu espaço sem nenhum custo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <button
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #00d9ff, #0099bb)', color: '#0a0819', boxShadow: '0 0 25px rgba(0,217,255,0.4)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(0,217,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(0,217,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                >
                  <CheckCircle size={16} />
                  Agendar Visita Gratuita
                </button>
              </Link>
              <Link href="/quem-somos">
                <button
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.2)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  Conhecer a Fast&amp;Tech <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
