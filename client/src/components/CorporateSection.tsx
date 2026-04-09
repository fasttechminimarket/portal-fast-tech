import { Users, Zap, TrendingUp, Building2 } from 'lucide-react';

/**
 * CORPORATE SECTION - Fast&Tech Soluções
 * Design: Fundo escuro com efeitos neon
 * Mascote: Robô policial/segurança à direita, guardando o espaço corporativo
 * Layout: Conteúdo esquerda, mascote direita
 */
export default function CorporateSection() {
  const benefits = [
    {
      icon: Users,
      title: 'Retenha Talentos',
      description: 'Ofereça praticidade 24h aos seus funcionários com mini market e laundry autônomos',
      color: '#00d9ff',
    },
    {
      icon: Zap,
      title: 'Aumente Produtividade',
      description: 'Reduz deslocamentos e oferece comodidade que impacta diretamente o bem-estar',
      color: '#d400ff',
    },
    {
      icon: TrendingUp,
      title: 'Valorize o Espaço',
      description: 'Transforme seu escritório, clínica ou centro logístico em ambiente premium',
      color: '#ffd700',
    },
    {
      icon: Building2,
      title: 'Receita Passiva',
      description: 'Receba cashback mensal sobre o faturamento do mini market instalado',
      color: '#00d9ff',
    },
  ];

  return (
    <section id="corporate" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#0d0b1e' }}>
      {/* Neon glow effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl z-0" style={{ background: 'rgba(212,0,255,0.06)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl z-0" style={{ background: 'rgba(0,217,255,0.05)' }} />

      {/* Neon top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #00d9ff, #d400ff, transparent)' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Content */}
          <div className="fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[rgba(255,215,0,0.35)] bg-[rgba(255,215,0,0.07)] text-[#ffd700] text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#ffd700] rounded-full animate-pulse shadow-[0_0_6px_#ffd700]" />
              Mercado Corporativo
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">
              <span
                style={{
                  background: 'linear-gradient(90deg, #ffd700, #d400ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                A Fast&Tech também
              </span>
              <br />
              <span className="text-white">transforma sua Empresa.</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Escritórios, clínicas, centros logísticos e espaços corporativos também podem ter um{' '}
              <span className="text-[#00d9ff] font-semibold">Mini Market 24h</span> para reter talentos e oferecer praticidade aos funcionários.
            </p>

            {/* Benefits grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className={`fade-in fade-in-delay-${index + 1} flex gap-3 p-4 rounded-xl group transition-all duration-300`}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${benefit.color}40`;
                      (e.currentTarget as HTMLElement).style.background = `${benefit.color}08`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)';
                    }}
                  >
                    <div
                      className="flex-shrink-0 p-2 rounded-lg"
                      style={{ background: `${benefit.color}15` }}
                    >
                      <Icon
                        size={20}
                        style={{ color: benefit.color, filter: `drop-shadow(0 0 4px ${benefit.color}60)` }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-1">{benefit.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className="btn-neon-gold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Transforme sua Empresa
            </button>
          </div>

          {/* Right: Stats e diferenciais visuais */}
          <div className="fade-in fade-in-delay-2 flex flex-col gap-6">
            {/* Destaque principal */}
            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.08), rgba(212,0,255,0.08))',
                border: '1.5px solid rgba(255,215,0,0.3)',
              }}
            >
              <p className="text-[#ffd700] font-black text-4xl mb-1">24h</p>
              <p className="text-gray-300 text-sm">Operação contínua, sem interrupções</p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Condôminos Atendidos', color: '#00d9ff' },
                { value: 'R$0', label: 'Custo de Implantação', color: '#d400ff' },
                { value: '20%', label: 'Produtos mais Baratos', color: '#ffd700' },
                { value: '15%+', label: 'Valorização do Imóvel', color: '#00d9ff' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="text-2xl font-black mb-1" style={{ color: stat.color, textShadow: `0 0 12px ${stat.color}60` }}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background: 'rgba(0,217,255,0.05)',
                border: '1px solid rgba(0,217,255,0.2)',
              }}
            >
              <p className="text-gray-300 text-sm leading-relaxed italic">
                &ldquo;Empresas que investem em bem-estar e comodidade para seus colaboradores têm até <strong className="text-[#00d9ff]">40% menos rotatividade</strong> e maior produtividade.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
