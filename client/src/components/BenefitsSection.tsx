/**
 * BENEFITS SECTION - Fast&Tech Soluções
 * Design: Background neon com overlay, sem mascotes
 * Layout: Grid de vantagens 3 colunas + destaque de marca própria
 */
export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Zero Custo de Implantação',
      description: 'Nenhum investimento inicial. Toda a infraestrutura é nossa responsabilidade.',
      icon: '💰',
      color: '#ffd700',
    },
    {
      title: 'Repasse de % do Faturamento',
      description:
        'Cashback direto para o condomínio dependendo da quantidade de apartamentos ou casas. Quanto mais vendas, mais ganho para o condomínio.',
      icon: '📈',
      color: '#00d9ff',
    },
    {
      title: 'Operação 100% Cuidada',
      description: 'Nossa equipe gerencia tudo: estoque, manutenção, limpeza e atendimento.',
      icon: '⚙️',
      color: '#d400ff',
    },
    {
      title: 'Tecnologia de Ponta',
      description: 'Sistemas inteligentes de estoque, pagamento e segurança integrados.',
      icon: '🚀',
      color: '#00d9ff',
    },
    {
      title: 'Suporte 24/7',
      description: 'Equipe disponível para resolver qualquer problema a qualquer hora.',
      icon: '🛡️',
      color: '#ffd700',
    },
    {
      title: 'Valorização do Imóvel',
      description:
        'Pesquisas do mercado imobiliário mostram que a procura por condomínios com Mini Market se tornou prioridade. Imóveis valorizaram mais de 15% em menos de um ano, e a tendência é que ainda em 2026 a valorização ultrapasse 20%.',
      icon: '🏢',
      color: '#d400ff',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background neon */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(13, 11, 30, 0.85)' }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8 fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[rgba(255,215,0,0.35)] bg-[rgba(255,215,0,0.07)] text-[#ffd700] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#ffd700] rounded-full animate-pulse shadow-[0_0_6px_#ffd700]" />
            Por que Fast&amp;Tech?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Vantagens que </span>
            <span
              style={{
                background: 'linear-gradient(90deg, #ffd700, #d400ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              fazem a diferença
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Benefícios reais que transformam seu condomínio e geram receita passiva
          </p>
        </div>

        {/* Destaque: Marca Própria */}
        <div
          className="fade-in fade-in-delay-1 mb-12 mx-auto max-w-4xl rounded-2xl p-6 md:p-8 relative overflow-hidden"
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
                style={{
                  background: 'linear-gradient(90deg, #d400ff, #00d9ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Marca Registrada e Própria — Sem Franquias, Sem Amarras
              </h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                O Ecossistema Fast&amp;Tech é{' '}
                <strong className="text-white">marca registrada e própria</strong>. Não somos
                franquia, não pagamos <em>Naming Rights</em> — taxa de entrada que beira mais de cem
                mil reais — e muito menos royalties de 6%, 7% ou até 9% do faturamento todos os
                meses para marcas terceiras. Isso impacta{' '}
                <strong className="text-[#ffd700]">
                  diretamente na precificação dos nossos produtos
                </strong>
                , que giram em torno de{' '}
                <strong className="text-[#00d9ff]">20% mais baratos</strong> que os mini mercadinhos
                de franquias. Não temos amarras contratuais com fornecedores nem com marcas, o que
                também gera menores preços em nossas prateleiras, geladeiras e freezers.
              </p>
            </div>
          </div>
          {/* Borda brilhante */}
          <div
            className="absolute bottom-0 left-0 h-0.5 w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #d400ff, #00d9ff, transparent)',
            }}
          />
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`fade-in fade-in-delay-${Math.min(index + 1, 5)} card-neon-gold group`}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-sm group-hover:text-[#ffd700] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
              <div
                className="mt-3 h-0.5 w-0 rounded-full group-hover:w-10 transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${benefit.color}, transparent)` }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in fade-in-delay-5 text-center mt-14">
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Mais de{' '}
            <span className="text-[#ffd700] font-bold">500 condôminos</span> confiam todos os dias
            e 24h na Fast&amp;Tech
          </p>
          <button
            className="btn-neon-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Seja o Próximo a Revolucionar seu Espaço
          </button>
        </div>
      </div>
    </section>
  );
}
