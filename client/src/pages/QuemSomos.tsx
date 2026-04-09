import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { CheckCircle, Star, Zap, Shield, Heart } from 'lucide-react';

const BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';
const EQUIPE = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/1935575c-5c79-4d98-8d9e-1f37380580d8_756f9f24.jpg';

export default function QuemSomos() {
  return (
    <Layout>
      {/* ─── HERO + NOSSA HISTÓRIA + POR QUE SOMOS DIFERENTES ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-16">

          {/* Badge */}
          <div className="flex justify-center mb-3">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.07)', color: '#ffd700' }}
            >
              <Star size={12} /> Quem Somos
            </div>
          </div>

          {/* Título compacto */}
          <div className="text-center mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-3">
              <span className="text-white">A Empresa que </span>
              <span style={{ background: 'linear-gradient(90deg, #ffd700, #ff006e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Revoluciona
              </span>
              <span className="text-white"> Espaços com </span>
              <span style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Tecnologia
              </span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
              Somos a Fast&amp;Tech Soluções — uma empresa brasileira apaixonada por transformar condomínios e espaços corporativos em ecossistemas autônomos, inteligentes e rentáveis.
            </p>
          </div>

          {/* Grid principal: coluna esquerda (história + diferenciais) | coluna direita (foto) */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* ── COLUNA ESQUERDA ── */}
            <div className="mt-8">
              {/* Badge Nossa História */}
              <div
                className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest"
                style={{ border: '1px solid rgba(0,217,255,0.4)', background: 'rgba(0,217,255,0.10)', color: '#00d9ff' }}
              >
                Nossa História
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-5">
                <span className="text-white">Nascemos para </span>
                <span style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Inovar
                </span>
              </h2>
              <div className="space-y-5 text-gray-200 text-lg leading-relaxed mb-10">
                <p>
                  A Fast&amp;Tech Soluções nasceu da visão de que condomínios e empresas merecem muito mais do que serviços básicos. Identificamos uma oportunidade única: levar tecnologia de ponta, conveniência real e geração de receita para espaços que antes ficavam à margem da inovação.
                </p>
                <p>
                  Somos uma <strong className="text-white">marca registrada e 100% própria</strong>. Não somos franquia, não pagamos royalties, não temos amarras contratuais com fornecedores. Essa independência nos permite oferecer produtos <strong style={{ color: '#00d9ff' }}>até 30% mais baratos</strong> que os concorrentes e reinvestir em tecnologia e qualidade de serviço.
                </p>
                <p>
                  Nossa missão é simples: transformar cada condomínio e empresa em um ecossistema autônomo que valoriza o patrimônio, gera receita passiva e oferece comodidade real às pessoas que vivem e trabalham nesses espaços.
                </p>
              </div>

              {/* ── POR QUE SOMOS DIFERENTES (preenchendo o espaço vazio) ── */}
              <div
                className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest"
                style={{ border: '1px solid rgba(255,215,0,0.4)', background: 'rgba(255,215,0,0.08)', color: '#ffd700' }}
              >
                Por que somos diferentes
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-5">
                <span className="text-white">Sem Franquias, </span>
                <span style={{ background: 'linear-gradient(90deg, #00d9ff, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Sem Amarras
                </span>
              </h3>

              {/* Destaque marca própria */}
              <div
                className="mb-6 rounded-2xl p-5 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(212,0,255,0.10), rgba(0,217,255,0.08))', border: '1.5px solid rgba(212,0,255,0.45)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: 'rgba(212,0,255,0.18)', border: '1px solid rgba(212,0,255,0.4)' }}>
                    🏆
                  </div>
                  <div>
              <h4 className="text-base font-black mb-2 uppercase tracking-wide" style={{ background: 'linear-gradient(90deg, #d400ff, #00d9ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Marca Registrada e Própria
                  </h4>
                  <p className="text-gray-200 text-base leading-relaxed">
                      Não pagamos <em>Naming Rights</em> nem royalties de 6–9% do faturamento. Isso impacta <strong className="text-yellow-400">diretamente nos preços</strong> — nossos produtos são <strong style={{ color: '#00d9ff' }}>até 30% mais baratos</strong> que os mini mercadinhos de franquias.
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #d400ff, #00d9ff, transparent)' }} />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Instalação e operação 100% gratuitas',
                  'Cashback mensal para o condomínio',
                  'Suporte técnico 24h, 7 dias por semana',
                  'Reconhecimento facial e pagamento digital',
                  'Reposição automática por inteligência artificial',
                  'Equipe especializada em espaços autônomos',
                ].map((d, i) => (
                  <div key={i} className="flex items-center gap-3 py-1.5">
                    <CheckCircle size={15} style={{ color: '#00d9ff', flexShrink: 0 }} />
                    <span className="text-gray-200 text-base">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── COLUNA DIREITA: foto ── */}
            <div className="relative mt-8">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '2px solid rgba(0,217,255,0.25)', boxShadow: '0 0 60px rgba(0,217,255,0.15), 0 0 120px rgba(212,0,255,0.08)' }}
              >
                <img src={EQUIPE} alt="Equipe Fast&Tech" className="w-full h-auto object-cover" />
                <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: 'linear-gradient(transparent, rgba(10,8,25,0.9))' }} />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-bold text-sm">A Família Fast&amp;Tech</p>
                  <p className="text-gray-400 text-xs">Prontos para revolucionar seu espaço!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── NOSSOS VALORES ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center bottom', transform: 'scaleX(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-white">Nossos </span>
              <span style={{ background: 'linear-gradient(90deg, #ffd700, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Valores</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Inovação Constante', desc: 'Buscamos sempre as melhores tecnologias para oferecer soluções cada vez mais eficientes.', color: '#ffd700' },
              { icon: Shield, title: 'Transparência Total', desc: 'Relação clara e honesta com síndicos, moradores e parceiros. Sem letras miúdas.', color: '#00d9ff' },
              { icon: Heart, title: 'Compromisso Real', desc: 'Nossa equipe está sempre disponível para garantir a melhor experiência possível.', color: '#ff006e' },
              { icon: Star, title: 'Excelência no Serviço', desc: 'Padrão de qualidade elevado em tudo que fazemos, do produto ao atendimento.', color: '#d400ff' },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${v.color}08, rgba(10,8,25,0.5))`, border: `1.5px solid ${v.color}25` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${v.color}20`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div className="inline-flex p-3 rounded-xl mb-4" style={{ background: `${v.color}12`, border: `1px solid ${v.color}25` }}>
                    <Icon size={28} style={{ color: v.color, filter: `drop-shadow(0 0 8px ${v.color}80)` }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleY(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Faça Parte da Revolução Fast&amp;Tech
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Junte-se aos mais de 500 condôminos que já confiam na Fast&amp;Tech todos os dias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mini-market-residencial">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00d9ff, #0099cc)', color: '#000', boxShadow: '0 0 25px rgba(0,217,255,0.4)', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(0,217,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(0,217,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                Ver Mini Market
              </button>
            </Link>
            <Link href="/contato">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 25px rgba(255,0,110,0.4)', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(255,0,110,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255,0,110,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                Fale Conosco
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
