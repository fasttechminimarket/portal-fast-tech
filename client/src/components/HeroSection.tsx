/**
 * HERO SECTION - Fast&Tech Soluções
 * Design: Background neon com setas geométricas (azul/rosa)
 * Mascote: Robô de compras (shopping) à direita, chamando o usuário
 * Layout: Assimétrico - texto esquerda, mascote direita
 */
export default function HeroSection() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background: Neon Arrows */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 z-0" style={{ background: 'rgba(13, 11, 30, 0.72)' }} />

      {/* Glow spots */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#00d9ff]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d400ff]/10 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

          {/* Left: Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="fade-in inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[rgba(0,217,255,0.35)] bg-[rgba(0,217,255,0.07)] text-[#00d9ff] text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse shadow-[0_0_6px_#00d9ff]" />
              Ecossistema Autônomo 24h
            </div>

            {/* Main Title */}
            <h1 className="fade-in fade-in-delay-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black mb-6 leading-tight">
              <span className="block text-white">O Fim do</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #00d9ff, #d400ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Condomínio Comum.
              </span>
              <span className="block text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-2">
                A Revolução do
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl xl:text-5xl"
                style={{
                  background: 'linear-gradient(90deg, #ffd700, #ff00c8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Ecossistema Autônomo.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="fade-in fade-in-delay-2 text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Valorize seu patrimônio com nosso{' '}
              <span className="text-[#00d9ff] font-semibold">Mini Market 24h</span>,{' '}
              <span className="text-[#d400ff] font-semibold">Mídia DOOH</span> e{' '}
              <span className="text-[#ffd700] font-semibold">Laundry In Box</span>.
              <br />
              <span className="text-white font-bold">Tudo a custo zero para o condomínio.</span>
            </p>

            {/* CTA Buttons */}
            <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                className="btn-neon-primary text-sm sm:text-base py-3 px-6"
                onClick={() => handleScroll('contact')}
              >
                Sou Síndico / Gestor
              </button>
              <button
                className="btn-neon-secondary text-sm sm:text-base py-3 px-6"
                onClick={() => handleScroll('contact')}
              >
                Quero no meu Prédio
              </button>
            </div>

            {/* Trust indicators */}
            <div className="fade-in fade-in-delay-4 mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#00d9ff] rounded-full shadow-[0_0_6px_#00d9ff]" />
                Zero custo de implantação
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#d400ff] rounded-full shadow-[0_0_6px_#d400ff]" />
                Operação 100% cuidada
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-[#ffd700] rounded-full shadow-[0_0_6px_#ffd700]" />
                Cashback para o condomínio
              </div>
            </div>
          </div>

          {/* Right: Foto da loja com neon */}
          <div className="fade-in fade-in-delay-2 flex flex-col items-center lg:items-end relative">
            {/* Speech bubble */}
            <div className="relative mb-4 w-full max-w-sm">
              <div
                className="px-5 py-3 rounded-2xl text-sm font-bold text-white text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,217,255,0.15), rgba(212,0,255,0.15))',
                  border: '1.5px solid rgba(0,217,255,0.4)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                🛍️ Venha conhecer a Fast&amp;Tech! Temos tudo o que você precisa, 24h por dia!
              </div>
              <div
                className="w-0 h-0 mx-auto mt-1"
                style={{
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '12px solid rgba(0,217,255,0.4)',
                }}
              />
            </div>

            {/* Foto da equipe / loja */}
            <div className="relative w-full max-w-sm mascote-float">
              <div className="absolute inset-0 bg-[#00d9ff]/10 rounded-2xl blur-2xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/1935575c-5c79-4d98-8d9e-1f37380580d8_b067b173.jpg"
                alt="Família Fast&Tech Soluções"
                className="relative w-full rounded-2xl object-cover"
                style={{
                  border: '2px solid rgba(0,217,255,0.35)',
                  filter: 'drop-shadow(0 0 24px rgba(0,217,255,0.3))',
                  maxHeight: '380px',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block z-10">
        <div className="w-6 h-10 border-2 border-[#00d9ff] rounded-full flex items-center justify-center opacity-60">
          <div className="w-1 h-2 bg-[#00d9ff] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
