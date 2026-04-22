import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import ConciergeWidget from '@/components/ConciergeWidget';
import JinglePlayer from '@/components/JinglePlayer';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';

/**
 * LAYOUT - Fast&Tech Soluções
 * SOLUÇÃO DEFINITIVA PARA DROPDOWNS:
 * Os submenus são renderizados via ReactDOM.createPortal diretamente no document.body.
 * Isso garante que escapam de QUALQUER stacking context (backdrop-filter, z-index, etc.)
 * e ficam sempre na frente de todo o conteúdo da página.
 */

const LOGO = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/LOGOTIPO_efa03675.png';

interface DropdownItem { label: string; href: string; }

interface NavDropdownProps {
  label: string;
  items: DropdownItem[];
  accentColor: string;
  isActive: boolean;
  currentLocation: string;
  onNavigate: (href: string) => void;
}

function NavDropdown({ label, items, accentColor, isActive, currentLocation, onNavigate }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<{ top: number; left: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setRect({ top: r.bottom + 6, left: r.left });
    }
    setOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    setOpen(false);
  }, [currentLocation]);

  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const dropdown = open && rect ? createPortal(
    <div
      style={{
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        width: 240,
        background: '#0a0819',
        border: `1px solid ${accentColor}55`,
        borderRadius: 12,
        boxShadow: `0 8px 40px rgba(0,0,0,0.9), 0 0 0 1px ${accentColor}20, 0 0 30px ${accentColor}15`,
        zIndex: 2147483647, // valor máximo possível de z-index
        overflow: 'hidden',
        pointerEvents: 'auto',
      }}
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      {items.map((item) => (
        <div
          key={item.label + item.href}
          onClick={() => { setOpen(false); onNavigate(item.href); }}
          style={{
            padding: '12px 18px',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            color: currentLocation === item.href ? accentColor : '#d0d0f0',
            background: currentLocation === item.href ? `${accentColor}15` : 'transparent',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            transition: 'all 0.15s',
            userSelect: 'none',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.background = `${accentColor}20`;
            (e.currentTarget as HTMLDivElement).style.color = accentColor;
            (e.currentTarget as HTMLDivElement).style.paddingLeft = '22px';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.background = currentLocation === item.href ? `${accentColor}15` : 'transparent';
            (e.currentTarget as HTMLDivElement).style.color = currentLocation === item.href ? accentColor : '#d0d0f0';
            (e.currentTarget as HTMLDivElement).style.paddingLeft = '18px';
          }}
        >
          → {item.label}
        </div>
      ))}
    </div>,
    document.body
  ) : null;

  return (
    <>
      <button
        ref={btnRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '8px 12px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          color: isActive || open ? accentColor : '#c8c8e0',
          background: isActive || open ? `${accentColor}14` : 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
          outline: 'none',
        }}
        onMouseEnter={openMenu}
        onMouseLeave={scheduleClose}
      >
        {label}
        <ChevronDown
          size={13}
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {dropdown}
    </>
  );
}

// Submenu expansível para a barra horizontal mobile
interface MobileBarDropdownProps {
  label: string;
  color: string;
  active: boolean;
  items: { label: string; href: string }[];
  onNavigate: (href: string) => void;
  currentLocation: string;
}

function MobileBarDropdown({ label, color, active, items, onNavigate, currentLocation }: MobileBarDropdownProps) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<{ top: number; left: number } | null>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!open && btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setRect({ top: r.bottom + 4, left: r.left });
    }
    setOpen(!open);
  };

  // Fecha ao navegar
  useEffect(() => { setOpen(false); }, [currentLocation]);

  // Fecha ao clicar fora — mas ignora cliques dentro do portal
  const portalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      const inBtn = btnRef.current && btnRef.current.contains(target);
      const inPortal = portalRef.current && portalRef.current.contains(target);
      if (!inBtn && !inPortal) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler as EventListener);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler as EventListener);
    };
  }, [open]);

  const portal = open && rect ? createPortal(
    <div
      ref={portalRef}
      style={{
        position: 'fixed',
        top: rect.top,
        left: rect.left,
        minWidth: 200,
        background: '#0a0819',
        border: `1px solid ${color}55`,
        borderRadius: 12,
        boxShadow: `0 8px 40px rgba(0,0,0,0.9), 0 0 30px ${color}15`,
        zIndex: 2147483647,
        overflow: 'hidden',
      }}
    >
      {items.map((item) => (
        <div
          key={item.href}
          onPointerDown={(e) => {
            // Usa pointerDown para garantir que o clique seja registrado antes
            // do mousedown handler fechar o menu
            e.stopPropagation();
            e.preventDefault();
            setOpen(false);
            // Pequeno delay para garantir que o estado feche antes de navegar
            setTimeout(() => onNavigate(item.href), 10);
          }}
          style={{
            padding: '14px 18px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            color: currentLocation === item.href ? color : '#d0d0f0',
            background: currentLocation === item.href ? `${color}15` : 'transparent',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            userSelect: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          → {item.label}
        </div>
      ))}
    </div>,
    document.body
  ) : null;

  return (
    <>
      <div
        ref={btnRef}
        onClick={handleToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: 3,
          padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600,
          whiteSpace: 'nowrap', cursor: 'pointer', userSelect: 'none', transition: 'all 0.15s',
          color: active || open ? color : '#c8c8e0',
          background: active || open ? `${color}18` : 'transparent',
          border: active || open ? `1.5px solid ${color}55` : '1.5px solid transparent',
        }}
      >
        {label}
        <ChevronDown size={11} style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />
      </div>
      {portal}
    </>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location, navigate] = useLocation();

  // Navega sem fechar o menu mobile (a barra horizontal não precisa fechar nada)
  const mobileNavTo = (href: string) => {
    navigate(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const isMinimkt = location === '/mini-market-residencial' || location === '/mini-market-corporativo';
  const isEcossistema = location === '/midia-laundry';

  const navLink = (href: string, label: string, accent = '#00d9ff') => (
    <Link href={href}>
      <div
        style={{
          padding: '8px 12px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 600,
          cursor: 'pointer',
          color: location === href ? accent : '#c8c8e0',
          background: location === href ? `${accent}14` : 'transparent',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.color = accent;
          (e.currentTarget as HTMLDivElement).style.background = `${accent}10`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.color = location === href ? accent : '#c8c8e0';
          (e.currentTarget as HTMLDivElement).style.background = location === href ? `${accent}14` : 'transparent';
        }}
      >
        {label}
      </div>
    </Link>
  );

  return (
    <header
      className="fixed top-0 left-0 right-0 transition-all duration-300"
      style={{
        zIndex: 9000,
        background: scrolled ? 'rgba(10,8,25,0.97)' : 'rgba(10,8,25,0.80)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(0,217,255,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-2">

        {/* Logo — canto esquerdo */}
        <Link href="/">
          <div className="flex items-center gap-1.5 cursor-pointer flex-shrink-0">
            <img
              src={LOGO}
              alt="Fast&Tech Soluções"
              style={{ height: 36, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(0,217,255,0.35))' }}
            />
          </div>
        </Link>

        {/* FAST&TECH SOLUÇÕES — fica entre a logo e o menu Home no desktop.
            No mobile fica antes do botão hamburguer (ml-auto apenas no mobile via lg:ml-0) */}
        <Link href="/" className="ml-4 lg:ml-6 mr-2 lg:mr-6">
          <div className="flex flex-col items-start cursor-pointer flex-shrink-0" style={{ lineHeight: 1.1 }}>
            <span
              className="font-black uppercase block"
              style={{
                background: 'linear-gradient(90deg, #00d9ff, #d400ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 10px rgba(0,217,255,0.6))',
                letterSpacing: '0.1em',
                fontSize: 'clamp(14px, 2.2vw, 20px)',
              }}
            >
              FAST&amp;TECH
            </span>
            <span
              className="font-black uppercase block"
              style={{
                background: 'linear-gradient(90deg, #d400ff, #00d9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px rgba(212,0,255,0.5))',
                letterSpacing: '0.22em',
                fontSize: 'clamp(9px, 1.4vw, 13px)',
              }}
            >
              SOLUÇÕES
            </span>
          </div>
        </Link>

        {/* Desktop Nav — vem depois do texto, sem ml-auto para não empurrar para a direita */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLink('/', 'Home')}

          <NavDropdown
            label="Mini Market"
            items={[
              { label: 'Para Seu Condomínio', href: '/mini-market-residencial' },
              { label: 'Para Sua Empresa', href: '/mini-market-corporativo' },
            ]}
            accentColor="#00d9ff"
            isActive={isMinimkt}
            currentLocation={location}
            onNavigate={navigate}
          />

          <NavDropdown
            label="O Ecossistema"
            items={[
              { label: 'Mídia Indoor (DOOH)', href: '/midia-laundry' },
              { label: 'Laundry In Box', href: '/midia-laundry' },
            ]}
            accentColor="#d400ff"
            isActive={isEcossistema}
            currentLocation={location}
            onNavigate={navigate}
          />

          {navLink('/quem-somos', 'Quem Somos')}
          {navLink('/nossas-lojas', 'Nossas Lojas', '#d400ff')}
          {navLink('/como-comprar', 'Como Comprar', '#00d9ff')}
          {navLink('/faq', 'FAQ', '#ffd700')}
          {navLink('/contato', 'Contato')}
        </nav>

        {/* CTA Desktop — ml-auto empurra para o canto direito */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ml-auto">
          <JinglePlayer />
          <Link href="/contato">
            <button
              style={{
                padding: '8px 16px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: 'linear-gradient(135deg, #ff006e, #d400ff)',
                color: '#fff',
                boxShadow: '0 0 18px rgba(255,0,110,0.35)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 32px rgba(255,0,110,0.65)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 18px rgba(255,0,110,0.35)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
            >
              Indique seu Condomínio
            </button>
          </Link>
        </div>

        {/* Mobile toggle & Jingle Player — ml-auto empurra para o canto direito no mobile */}
        <div className="lg:hidden flex items-center gap-2 ml-auto">
          <JinglePlayer />
          <button
            className="p-2 rounded-lg transition-all duration-200 flex-shrink-0"
          style={{ color: '#00d9ff', background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.2)', cursor: 'pointer' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── BARRA MOBILE HORIZONTAL (sempre visível, deslizável) ── */}
      <div
        className="lg:hidden"
        style={{
          borderTop: '1px solid rgba(0,217,255,0.08)',
          background: 'rgba(10,8,25,0.97)',
          overflowX: 'auto',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            padding: '6px 12px',
            minWidth: 'max-content',
          }}
        >
          {/* Usamos divs com onClick+navigate para evitar re-render que reseta a barra */}
          {/* Home */}
          {[{ href: '/', label: 'Home', color: '#00d9ff', active: location === '/' }].map((item) => (
            <div key={item.href} onClick={() => mobileNavTo(item.href)}
              style={{ padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer', userSelect: 'none', transition: 'all 0.15s',
                color: item.active ? item.color : '#c8c8e0', background: item.active ? `${item.color}18` : 'transparent', border: item.active ? `1.5px solid ${item.color}55` : '1.5px solid transparent' }}
            >{item.label}</div>
          ))}

          {/* Mini Market — com submenu expansível (nomes iguais ao desktop) */}
          <MobileBarDropdown
            label="Mini Market"
            color="#00d9ff"
            active={isMinimkt}
            items={[
              { label: 'Para Seu Condomínio', href: '/mini-market-residencial' },
              { label: 'Para Sua Empresa', href: '/mini-market-corporativo' },
            ]}
            onNavigate={mobileNavTo}
            currentLocation={location}
          />

          {/* O Ecossistema */}
          {[{ href: '/midia-laundry', label: 'O Ecossistema', color: '#d400ff', active: isEcossistema }].map((item) => (
            <div key={item.href} onClick={() => mobileNavTo(item.href)}
              style={{ padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer', userSelect: 'none', transition: 'all 0.15s',
                color: item.active ? item.color : '#c8c8e0', background: item.active ? `${item.color}18` : 'transparent', border: item.active ? `1.5px solid ${item.color}55` : '1.5px solid transparent' }}
            >{item.label}</div>
          ))}

          {/* Demais itens */}
          {[
            { href: '/quem-somos', label: 'Quem Somos', color: '#00d9ff', active: location === '/quem-somos' },
            { href: '/nossas-lojas', label: 'Nossas Lojas', color: '#d400ff', active: location === '/nossas-lojas' },
            { href: '/como-comprar', label: 'Como Comprar', color: '#00d9ff', active: location === '/como-comprar' },
            { href: '/faq', label: 'FAQ', color: '#ffd700', active: location === '/faq' },
            { href: '/contato', label: 'Contato', color: '#00d9ff', active: location === '/contato' },
          ].map((item) => (
            <div key={item.href} onClick={() => mobileNavTo(item.href)}
              style={{ padding: '6px 12px', borderRadius: 20, fontSize: 13, fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer', userSelect: 'none', transition: 'all 0.15s',
                color: item.active ? item.color : '#c8c8e0', background: item.active ? `${item.color}18` : 'transparent', border: item.active ? `1.5px solid ${item.color}55` : '1.5px solid transparent' }}
            >{item.label}</div>
          ))}
          <div
            onClick={() => mobileNavTo('/contato')}
            style={{ padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap', cursor: 'pointer', background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginLeft: 4, userSelect: 'none' }}
          >
            Indique
          </div>
        </div>
      </div>

      {/* Mobile Menu (hambúrguer expandido — detalhes dos submenus) */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{ background: 'rgba(10,8,25,0.99)', borderTop: '1px solid rgba(0,217,255,0.1)', maxHeight: '80vh', overflowY: 'auto' }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link href="/">
              <div className="px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer" style={{ color: location === '/' ? '#00d9ff' : '#c8c8e0' }}>Home</div>
            </Link>

            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
                style={{ color: '#00d9ff', background: 'rgba(0,217,255,0.05)', border: 'none', cursor: 'pointer' }}
                onClick={() => setMobileExpanded(mobileExpanded === 'minimarket' ? null : 'minimarket')}
              >
                Mini Market
                <ChevronDown size={14} style={{ transform: mobileExpanded === 'minimarket' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>
              {mobileExpanded === 'minimarket' && (
                <div className="mt-1 ml-2 space-y-1">
                  {[{ label: 'Para Seu Condomínio', href: '/mini-market-residencial' }, { label: 'Para Sua Empresa', href: '/mini-market-corporativo' }].map(item => (
                    <Link key={item.href} href={item.href}>
                      <div className="px-6 py-2.5 rounded-lg text-sm font-medium cursor-pointer" style={{ color: '#c8c8e0' }}>→ {item.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
                style={{ color: '#d400ff', background: 'rgba(212,0,255,0.05)', border: 'none', cursor: 'pointer' }}
                onClick={() => setMobileExpanded(mobileExpanded === 'ecossistema' ? null : 'ecossistema')}
              >
                O Ecossistema
                <ChevronDown size={14} style={{ transform: mobileExpanded === 'ecossistema' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
              </button>
              {mobileExpanded === 'ecossistema' && (
                <div className="mt-1 ml-2 space-y-1">
                  {[{ label: 'Mídia Indoor (DOOH)', href: '/midia-laundry' }, { label: 'Laundry In Box', href: '/midia-laundry' }].map(item => (
                    <Link key={item.label} href={item.href}>
                      <div className="px-6 py-2.5 rounded-lg text-sm font-medium cursor-pointer" style={{ color: '#c8c8e0' }}>→ {item.label}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/quem-somos">
              <div className="px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer" style={{ color: location === '/quem-somos' ? '#00d9ff' : '#c8c8e0' }}>Quem Somos</div>
            </Link>
            <Link href="/nossas-lojas">
              <div className="px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer" style={{ color: location === '/nossas-lojas' ? '#d400ff' : '#c8c8e0' }}>Nossas Lojas</div>
            </Link>
            <Link href="/como-comprar">
              <div className="px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer" style={{ color: location === '/como-comprar' ? '#00d9ff' : '#c8c8e0' }}>Como Comprar</div>
            </Link>
            <Link href="/faq">
              <div className="px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer" style={{ color: location === '/faq' ? '#ffd700' : '#c8c8e0' }}>FAQ</div>
            </Link>
            <Link href="/contato">
              <div className="px-4 py-2.5 rounded-lg text-sm font-semibold cursor-pointer" style={{ color: location === '/contato' ? '#00d9ff' : '#c8c8e0' }}>Contato</div>
            </Link>

            <div className="pt-3 pb-1">
              <Link href="/contato">
                <button className="w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wider" style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', border: 'none', cursor: 'pointer' }}>
                  Indique seu Condomínio
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'rgba(5,4,15,0.98)', borderTop: '1px solid rgba(0,217,255,0.1)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <img src={LOGO} alt="Fast&Tech" style={{ height: 56, width: 'auto', objectFit: 'contain', marginBottom: 16, filter: 'drop-shadow(0 0 8px rgba(0,217,255,0.3))' }} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Ecossistema autônomo para condomínios e espaços corporativos. Mini Market 24h, Mídia Indoor e Laundry In Box — tudo a custo zero.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: '📸', href: 'https://instagram.com/fasttechsolucoes', color: '#ff006e', label: 'Instagram' },
                { icon: '💬', href: 'https://wa.me/5511948161325', color: '#00d9ff', label: 'WhatsApp' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-200"
                  style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}25`; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}12`; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: '#00d9ff' }}>Ecossistema</h4>
            <ul className="space-y-2">
              {[
                { label: 'Mini Market — Condomínio', href: '/mini-market-residencial' },
                { label: 'Mini Market — Empresa', href: '/mini-market-corporativo' },
                { label: 'Mídia Indoor (DOOH)', href: '/midia-laundry' },
                { label: 'Laundry In Box', href: '/midia-laundry' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>
                    <span className="text-gray-400 text-sm cursor-pointer transition-colors duration-200"
                      onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = '#00d9ff'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = ''; }}
                    >{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: '#d400ff' }}>Empresa</h4>
            <ul className="space-y-2">
              {[
                { label: 'Quem Somos', href: '/quem-somos' },
                { label: 'Nossas Lojas', href: '/nossas-lojas' },
                { label: 'Contato', href: '/contato' },
                { label: 'Indique seu Condomínio', href: '/contato' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>
                    <span className="text-gray-400 text-sm cursor-pointer transition-colors duration-200"
                      onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = '#d400ff'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = ''; }}
                    >{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <Link href="/contato">
                <button className="w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 15px rgba(255,0,110,0.3)', border: 'none', cursor: 'pointer' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 30px rgba(255,0,110,0.6)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 15px rgba(255,0,110,0.3)'; }}
                >Indique seu Condomínio</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Fast&amp;Tech Soluções. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00d9ff', boxShadow: '0 0 6px #00d9ff' }} />
            <span className="text-gray-600 text-xs">Ecossistema Autônomo 24h</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps { children: React.ReactNode; }

export default function Layout({ children }: LayoutProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0, frame = 0, mx = 0.5, my = 0.5;
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    const SPACING = 44;
    const xs: number[] = [], ys: number[] = [], phases: number[] = [], speeds: number[] = [], sizes: number[] = [];
    function buildGrid() {
      xs.length=0;ys.length=0;phases.length=0;speeds.length=0;sizes.length=0;
      for (let r=0;r<Math.ceil(H/SPACING)+2;r++)
        for (let c=0;c<Math.ceil(W/SPACING)+2;c++) {
          xs.push(c*SPACING+(Math.random()-.5)*6);
          ys.push(r*SPACING+(Math.random()-.5)*6);
          phases.push(Math.random()*Math.PI*2);
          speeds.push(.006+Math.random()*.005);
          sizes.push(Math.random()*1.2+.4);
        }
    }
    buildGrid();
    const lC=['#00d9ff','#d400ff','#00d9ff','#d400ff'];
    const lY=[H*.22,H*.40,H*.58,H*.76];
    const lA=[12,15,11,14], lF=[.007,.009,.006,.008], lP=[0,1.5,3,4.5], lT=[0,.25,.5,.75];
    const onR=()=>{W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;buildGrid();lY[0]=H*.22;lY[1]=H*.40;lY[2]=H*.58;lY[3]=H*.76;};
    const onM=(e:MouseEvent)=>{mx=e.clientX/W;my=e.clientY/H;};
    window.addEventListener('resize',onR);
    window.addEventListener('mousemove',onM);
    function loop() {
      frame++;
      ctx.clearRect(0,0,W,H);
      const pulse=(Math.sin(frame*.025)+1)/2;
      ctx.save();ctx.globalAlpha=.06+pulse*.04;
      const g1=ctx.createRadialGradient(mx*W,my*H,0,mx*W,my*H,220);
      g1.addColorStop(0,'#00d9ff');g1.addColorStop(1,'transparent');
      ctx.fillStyle=g1;ctx.fillRect(0,0,W,H);ctx.restore();
      ctx.save();ctx.globalAlpha=.04+pulse*.03;
      const g2=ctx.createRadialGradient(W*.8,H*.8,0,W*.8,H*.8,260);
      g2.addColorStop(0,'#d400ff');g2.addColorStop(1,'transparent');
      ctx.fillStyle=g2;ctx.fillRect(0,0,W,H);ctx.restore();
      const t=frame*.018;
      for(let i=0;i<xs.length;i++){
        const x=xs[i]+Math.sin(t*speeds[i]*60+phases[i])*2.5;
        const y=ys[i]+Math.cos(t*speeds[i]*40+phases[i])*2.5;
        const dx=x/W-mx,dy=y/H-my;
        const dist=Math.sqrt(dx*dx+dy*dy);
        const glow=Math.max(0,1-dist*3.5);
        ctx.save();ctx.globalAlpha=.07+glow*.4;
        if(glow>.1){ctx.shadowBlur=8+glow*14;ctx.shadowColor='#00d9ff';}
        ctx.fillStyle=glow>.25?'#00d9ff':'#3344aa';
        ctx.beginPath();ctx.arc(x,y,sizes[i]+glow*2,0,Math.PI*2);ctx.fill();ctx.restore();
      }
      for(let i=0;i<4;i++){
        lT[i]+=.003;
        const a=(Math.sin(lT[i]*Math.PI*2)+1)/2;
        ctx.save();ctx.globalAlpha=a*.10;ctx.strokeStyle=lC[i];ctx.lineWidth=1;
        ctx.shadowBlur=5;ctx.shadowColor=lC[i];ctx.beginPath();
        for(let x=0;x<=W;x+=4){const y=lY[i]+Math.sin(x*lF[i]+frame*.02+lP[i])*lA[i];x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}
        ctx.stroke();ctx.restore();
        const tx=(lT[i]*.3%1)*W;
        const ty=lY[i]+Math.sin(tx*lF[i]+frame*.02+lP[i])*lA[i];
        ctx.save();ctx.globalAlpha=.8;ctx.shadowBlur=16;ctx.shadowColor=lC[i];ctx.fillStyle=lC[i];
        ctx.beginPath();ctx.arc(tx,ty,2.5,0,Math.PI*2);ctx.fill();ctx.restore();
      }
      raf=requestAnimationFrame(loop);
    }
    loop();
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',onR);window.removeEventListener('mousemove',onM);};
  }, []);

  return (
    <div style={{ background: '#0a0819', minHeight: '100vh', color: '#fff', position: 'relative' }}>
      <canvas ref={canvasRef} style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',pointerEvents:'none',zIndex:9,opacity:.85}} />
      <Header />
      <main
        style={{ position: 'relative', zIndex: 1 }}
        className="pt-14 lg:pt-14"
      >
        {/* Espaço extra só no mobile para compensar a barra de navegação horizontal */}
        <div className="block lg:hidden" style={{ height: 40 }} />
        {children}
      </main>
      <Footer />
      <ConciergeWidget />
      <WhatsAppButton />
    </div>
  );
}
