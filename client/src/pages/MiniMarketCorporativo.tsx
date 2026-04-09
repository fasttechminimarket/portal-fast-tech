import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { CheckCircle, Building2, Users, Coffee, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';

export default function MiniMarketCorporativo() {
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
              style={{ border: '1px solid rgba(255,0,110,0.3)', background: 'rgba(255,0,110,0.07)', color: '#ff006e' }}
            >
              <Building2 size={12} />
              Mini Market Corporativo
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">A Fast&amp;Tech </span>
              <span style={{ background: 'linear-gradient(90deg, #ff006e, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                também Transforma
              </span>
              <br />
              <span className="text-white">a sua Empresa</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-8">
              Escritórios, clínicas, centros logísticos e empresas de todos os segmentos podem ter um Mini Market Fast&amp;Tech para <strong className="text-white">reter talentos</strong>, aumentar a produtividade e oferecer praticidade real aos funcionários — sem nenhum custo para a empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contato">
                <button
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 25px rgba(255,0,110,0.4)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(255,0,110,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255,0,110,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                >
                  <CheckCircle size={16} />
                  Quero para minha Empresa
                </button>
              </Link>
              <Link href="/contato">
                <button
                  className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                  style={{ background: 'transparent', color: '#00d9ff', border: '2px solid rgba(0,217,255,0.4)' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,217,255,0.08)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  Agendar Visita Técnica
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEGMENTOS ATENDIDOS ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.90)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              <span className="text-white">Segmentos que </span>
              <span style={{ background: 'linear-gradient(90deg, #ff006e, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Atendemos</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Qualquer empresa com fluxo de pessoas pode ter um ecossistema Fast&amp;Tech
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '🏢', title: 'Escritórios Corporativos', desc: 'Mantenha sua equipe energizada e produtiva com snacks, bebidas e refeições práticas disponíveis a qualquer hora.', color: '#ff006e' },
              { icon: '🏥', title: 'Clínicas e Hospitais', desc: 'Ofereça comodidade a pacientes, acompanhantes e profissionais de saúde com produtos essenciais 24h por dia.', color: '#00d9ff' },
              { icon: '🏭', title: 'Centros Logísticos', desc: 'Atenda colaboradores em turnos alternados com um mercado autônomo que nunca fecha, independentemente do horário.', color: '#ffd700' },
              { icon: '🎓', title: 'Faculdades e Escolas', desc: 'Proporcione conveniência a alunos e professores com produtos acessíveis e pagamento digital facilitado.', color: '#d400ff' },
              { icon: '🏨', title: 'Hotéis e Pousadas', desc: 'Agregue valor ao seu empreendimento com um mini market exclusivo para hóspedes, disponível 24h.', color: '#ff006e' },
              { icon: '⚽', title: 'Academias e Espaços Fitness', desc: 'Ofereça suplementos, bebidas esportivas e snacks saudáveis para seus alunos sem precisar de funcionários extras.', color: '#00d9ff' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-4 sm:p-6 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${s.color}20`, backdropFilter: 'blur(8px)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.border = `1px solid ${s.color}50`; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 25px ${s.color}12`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.border = `1px solid ${s.color}20`; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFÍCIOS PARA EMPRESAS ─── */}
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
                Benefícios Corporativos
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                <span className="text-white">Retenha Talentos com </span>
                <span style={{ background: 'linear-gradient(90deg, #ffd700, #ff006e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Benefícios Reais
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Em um mercado cada vez mais competitivo, oferecer comodidades diferenciadas é essencial para atrair e reter os melhores profissionais. O Mini Market Fast&amp;Tech é um benefício tangível que seus colaboradores vão valorizar todos os dias.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Users, title: 'Retenção de Talentos', desc: 'Funcionários valorizam empresas que investem em seu bem-estar e comodidade.', color: '#ff006e' },
                  { icon: TrendingUp, title: 'Aumento de Produtividade', desc: 'Menos tempo perdido saindo para comprar itens básicos, mais foco no trabalho.', color: '#00d9ff' },
                  { icon: Coffee, title: 'Bem-estar no Trabalho', desc: 'Alimentos e bebidas disponíveis 24h contribuem para um ambiente de trabalho mais agradável.', color: '#ffd700' },
                  { icon: Zap, title: 'Zero Custo para a Empresa', desc: 'Toda a infraestrutura e operação é por nossa conta. Você só aproveita os benefícios.', color: '#d400ff' },
                ].map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${b.color}15`, border: `1px solid ${b.color}30` }}
                      >
                        <Icon size={18} style={{ color: b.color }} />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm mb-1">{b.title}</h4>
                        <p className="text-gray-400 text-sm">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'R$0', label: 'Custo de Implantação', sub: 'para a empresa', color: '#ffd700' },
                { value: '24h', label: 'Disponibilidade', sub: '7 dias por semana', color: '#00d9ff' },
                { value: '20%', label: 'Mais Barato', sub: 'que franquias', color: '#d400ff' },
                { value: '100%', label: 'Operação Gerenciada', sub: 'pela nossa equipe', color: '#ff006e' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 sm:p-6 text-center transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, ${s.color}08, rgba(10,8,25,0.5))`, border: `1.5px solid ${s.color}25` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${s.color}15`; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div className="text-3xl font-black mb-1" style={{ color: s.color, textShadow: `0 0 20px ${s.color}60` }}>{s.value}</div>
                  <div className="text-white font-bold text-sm mb-1">{s.label}</div>
                  <div className="text-gray-500 text-xs">{s.sub}</div>
                </div>
              ))}
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
            Transforme sua Empresa com a Fast&amp;Tech
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato agora e descubra como podemos instalar um Mini Market na sua empresa sem nenhum custo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contato">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 25px rgba(255,0,110,0.4)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(255,0,110,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255,0,110,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                <CheckCircle size={16} />
                Falar com um Especialista
              </button>
            </Link>
            <Link href="/mini-market-residencial">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                Ver Mini Market Residencial <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
