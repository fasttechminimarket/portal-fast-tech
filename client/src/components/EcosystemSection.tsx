import { ShoppingCart, Tv, Droplets } from 'lucide-react';

/**
 * ECOSYSTEM SECTION - Fast&Tech Soluções
 * Design: Background neon com overlay escuro, sem mascotes
 * Layout: 3 cards lado a lado em grid responsivo
 */
export default function EcosystemSection() {
  const pillars = [
    {
      icon: ShoppingCart,
      title: 'Mini Market 24h',
      description:
        'Honest market completo com inteligência de estoque. Produtos de primeira necessidade, snacks e bebidas a um elevador de distância.',
      color: '#00d9ff',
      badge: 'Mais Popular',
    },
    {
      icon: Tv,
      title: 'Fast&Tech Mídia · DOOH',
      description:
        'Telas inteligentes em elevadores e halls para comunicação ágil e moderna. Publicidade segmentada e avisos em tempo real.',
      color: '#d400ff',
      badge: 'Inovação',
    },
    {
      icon: Droplets,
      title: 'Laundry In Box',
      description:
        'Lavanderia autônoma e smart lockers. O fim da dor de cabeça com máquinas quebradas. Operação inteligente sem complicações.',
      color: '#ffd700',
      badge: 'Exclusivo',
    },
  ];

  return (
    <section id="ecosystem" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background neon com overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          transform: 'scaleX(-1)',
        }}
      />
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(13, 11, 30, 0.82)' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[rgba(212,0,255,0.35)] bg-[rgba(212,0,255,0.07)] text-[#d400ff] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#d400ff] rounded-full animate-pulse shadow-[0_0_6px_#d400ff]" />
            Nossos Pilares
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">O </span>
            <span
              style={{
                background: 'linear-gradient(90deg, #00d9ff, #d400ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Ecossistema
            </span>
            <span className="text-white"> Completo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Três pilares que transformam completamente a experiência em condomínios e espaços corporativos
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`fade-in fade-in-delay-${index + 1} card-neon group`}
              >
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: `${pillar.color}15`,
                    border: `1px solid ${pillar.color}40`,
                    color: pillar.color,
                  }}
                >
                  {pillar.badge}
                </div>

                {/* Icon */}
                <div
                  className="mb-4 inline-flex p-3 rounded-xl"
                  style={{
                    background: `${pillar.color}12`,
                    border: `1px solid ${pillar.color}25`,
                  }}
                >
                  <Icon
                    size={28}
                    style={{
                      color: pillar.color,
                      filter: `drop-shadow(0 0 8px ${pillar.color}80)`,
                    }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00d9ff] transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="h-0.5 w-10 rounded-full group-hover:w-20 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${pillar.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in fade-in-delay-4 text-center mt-14">
          <button
            className="btn-neon-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agende uma Demonstração Gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
