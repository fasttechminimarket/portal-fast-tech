import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * HEADER - Fast&Tech Soluções
 * Design: Transparente → fundo escuro com blur ao scroll
 * Logo à esquerda, nav central, CTA neon à direita
 * Menu mobile com animação
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Ecossistema', href: '#ecosystem' },
    { label: 'Para Empresas', href: '#corporate' },
    { label: 'Contato', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={isScrolled ? {
        background: 'rgba(13, 11, 30, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0,217,255,0.12)',
        boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
      } : {
        background: 'transparent',
      }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex-shrink-0"
        >
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/LOGOTIPO_efa03675.png"
            alt="Fast&Tech Logo"
            className="h-12 sm:h-14 w-auto object-contain hover:opacity-90 transition-opacity duration-300"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative group"
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)' }}
              />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            className="btn-neon-secondary text-xs py-2.5 px-5"
            onClick={() => handleNavClick('#contact')}
          >
            Indique seu Condomínio
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-all duration-300"
          style={{ color: '#00d9ff' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden py-4 animate-in fade-in duration-200"
          style={{
            background: 'rgba(13, 11, 30, 0.98)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(0,217,255,0.12)',
          }}
        >
          <nav className="container mx-auto px-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-gray-300 hover:text-[#00d9ff] transition-colors duration-300 font-medium py-3 border-b border-[rgba(255,255,255,0.05)] text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <button
                className="btn-neon-secondary w-full py-3 text-sm"
                onClick={() => handleNavClick('#contact')}
              >
                Indique seu Condomínio
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
