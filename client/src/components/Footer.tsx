import { useScrollToTop } from '@/hooks/useScrollToTop';

/**
 * FOOTER - Fast&Tech Soluções
 * Design: Fundo muito escuro com neon border top
 * Logo + links + redes sociais + copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <footer className="relative overflow-hidden" style={{ background: '#080614' }}>
      {/* Neon top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00d9ff, #d400ff, #ffd700, transparent)' }}
      />

      {/* Subtle glow */}
      <div className="absolute top-0 left-1/4 w-96 h-32 blur-3xl z-0" style={{ background: 'rgba(0,217,255,0.04)' }} />
      <div className="absolute top-0 right-1/4 w-96 h-32 blur-3xl z-0" style={{ background: 'rgba(212,0,255,0.04)' }} />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="fade-in md:col-span-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/LOGOTIPO_efa03675.png"
              alt="Fast&Tech Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando condomínios e empresas com ecossistema autônomo de ponta.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { name: 'WhatsApp', icon: '💬' },
                { name: 'Instagram', icon: '📷' },
                { name: 'LinkedIn', icon: '💼' },
              ].map(social => (
                <a
                  key={social.name}
                  href="#"
                  title={social.name}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-sm transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.4)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Produto',
              links: [
                { label: 'O Ecossistema', href: '#ecosystem' },
                { label: 'Para Empresas', href: '#corporate' },
                { label: 'Mini Market 24h', href: '#ecosystem' },
                { label: 'Mídia DOOH', href: '#ecosystem' },
              ],
            },
            {
              title: 'Empresa',
              links: [
                { label: 'Sobre Nós', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Carreiras', href: '#' },
                { label: 'Contato', href: '#contact' },
              ],
            },
            {
              title: 'Legal',
              links: [
                { label: 'Privacidade', href: '#' },
                { label: 'Termos de Uso', href: '#' },
                { label: 'Cookies', href: '#' },
                { label: 'LGPD', href: '#' },
              ],
            },
          ].map((col, i) => (
            <div key={i} className={`fade-in fade-in-delay-${i + 1}`}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-widest">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-[#00d9ff] transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            © {currentYear} Fast&Tech Soluções. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Feito com 💜 para transformar condomínios
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-11 h-11 rounded-xl flex items-center justify-center font-bold text-[#0d0b1e] hover:scale-110 transition-all duration-300 z-50 ${
          isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(135deg, #00d9ff, #d400ff)',
          boxShadow: '0 0 20px rgba(0,217,255,0.4)',
        }}
      >
        ↑
      </button>
    </footer>
  );
}
