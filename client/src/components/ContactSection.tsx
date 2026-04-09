import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * CONTACT SECTION - Fast&Tech Soluções
 * Design: Fundo escuro com efeitos neon
 * Mascote: Imagem da loja com todos os mascotes reunidos
 * Layout: Formulário esquerda, mascote loja direita
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'condominio',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', type: 'condominio' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#0d0b1e' }}>
      {/* Neon glow effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl z-0" style={{ background: 'rgba(0,217,255,0.05)' }} />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl z-0" style={{ background: 'rgba(212,0,255,0.05)' }} />

      {/* Neon top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #d400ff, #00d9ff, transparent)' }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[rgba(0,217,255,0.35)] bg-[rgba(0,217,255,0.07)] text-[#00d9ff] text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse shadow-[0_0_6px_#00d9ff]" />
            Fale Conosco
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span
              style={{
                background: 'linear-gradient(90deg, #00d9ff, #d400ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Agende uma Visita
            </span>
            <br />
            <span className="text-white">Técnica Gratuita</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como a Fast&Tech pode transformar seu espaço
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Form */}
          <div className="fade-in">
            <form onSubmit={handleSubmit} className="card-neon">
              <h3 className="text-xl font-bold mb-6 text-white">Formulário de Contato</h3>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl text-sm font-semibold" style={{ background: 'rgba(0,217,255,0.1)', border: '1px solid #00d9ff', color: '#00d9ff' }}>
                  ✓ Obrigado! Em breve entraremos em contato com você.
                </div>
              )}

              {[
                { label: 'Nome Completo *', name: 'name', type: 'text', placeholder: 'Seu nome' },
                { label: 'Email *', name: 'email', type: 'email', placeholder: 'seu@email.com' },
                { label: 'Telefone / WhatsApp *', name: 'phone', type: 'tel', placeholder: '(11) 98765-4321' },
              ].map(field => (
                <div key={field.name} className="mb-4">
                  <label className="block text-sm font-semibold text-gray-300 mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(0,217,255,0.5)';
                      e.target.style.boxShadow = '0 0 0 2px rgba(0,217,255,0.15)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              ))}

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2">Tipo de Espaço *</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-white focus:outline-none transition-all duration-300"
                  style={{
                    background: 'rgba(20,12,50,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <option value="condominio">Condomínio</option>
                  <option value="empresa">Empresa</option>
                  <option value="clinica">Clínica</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <button type="submit" className="btn-neon-secondary w-full py-3.5">
                Agendar Visita Técnica Gratuita
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                Seus dados estão seguros conosco. Nunca compartilhamos informações.
              </p>
            </form>
          </div>

          {/* Right: Contact info + Mascote loja */}
          <div className="fade-in fade-in-delay-1 flex flex-col gap-6">
            {/* Contact cards */}
            {[
              { icon: Phone, label: 'Telefone / WhatsApp', value: '(11) 98765-4321', color: '#00d9ff' },
              { icon: Mail, label: 'Email', value: 'contato@fasttech.com.br', color: '#d400ff' },
              { icon: MapPin, label: 'Localização', value: 'São Paulo - SP', color: '#ffd700' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${item.color}40`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                  }}
                >
                  <Icon size={22} style={{ color: item.color, filter: `drop-shadow(0 0 6px ${item.color}60)`, flexShrink: 0 }} />
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-white font-semibold text-sm">{item.value}</p>
                  </div>
                </div>
              );
            })}

            {/* Mascote loja - convidando */}
            <div className="relative mt-2">
              {/* Speech bubble */}
              <div
                className="mb-3 px-5 py-3 rounded-2xl text-sm font-bold text-white text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,217,255,0.12), rgba(212,0,255,0.12))',
                  border: '1.5px solid rgba(0,217,255,0.35)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                🤝 Conheça a Família Fast&Tech Soluções — pessoas reais, apaixonadas por tecnologia e prontas para transformar o seu espaço!
              </div>
              <div
                className="w-0 h-0 mx-auto mb-2"
                style={{
                  borderLeft: '10px solid transparent',
                  borderRight: '10px solid transparent',
                  borderTop: '12px solid rgba(0,217,255,0.35)',
                }}
              />
              <div className="mascote-float">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/1935575c-5c79-4d98-8d9e-1f37380580d8_b067b173.jpg"
                  alt="Família Fast&Tech Soluções - Equipe Real"
                  className="w-full rounded-2xl"
                  style={{
                    border: '1.5px solid rgba(0,217,255,0.2)',
                    filter: 'drop-shadow(0 0 20px rgba(0,217,255,0.2))',
                  }}
                />
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest">Siga-nos</p>
              <div className="flex gap-3">
                {[
                  { name: 'WhatsApp', icon: '💬', color: '#25d366' },
                  { name: 'Instagram', icon: '📷', color: '#d400ff' },
                  { name: 'LinkedIn', icon: '💼', color: '#00d9ff' },
                ].map(social => (
                  <a
                    key={social.name}
                    href="#"
                    title={social.name}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = `${social.color}60`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${social.color}30`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
