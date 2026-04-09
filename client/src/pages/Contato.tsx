import { useState } from 'react';
import Layout from '@/components/Layout';
import { CheckCircle, Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

const BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', tipo: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Fast&Tech.\n\nNome: ${form.nome}\nEmail: ${form.email}\nTelefone: ${form.telefone}\nTipo: ${form.tipo}\n\nMensagem: ${form.mensagem}`
    );
    window.open(`https://wa.me/5511948161325?text=${msg}`, '_blank');
    setEnviado(true);
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(0,217,255,0.2)',
    borderRadius: '12px',
    color: '#fff',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  } as React.CSSProperties;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(0,217,255,0.6)';
    e.target.style.boxShadow = '0 0 15px rgba(0,217,255,0.15)';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(0,217,255,0.2)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.82)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(255,0,110,0.3)', background: 'rgba(255,0,110,0.07)', color: '#ff006e' }}
            >
              <MessageCircle size={12} /> Fale Conosco
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-white">Vamos </span>
              <span style={{ background: 'linear-gradient(90deg, #ff006e, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Transformar
              </span>
              <br />
              <span className="text-white">seu Espaço Juntos</span>
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Agende uma visita técnica gratuita ou tire suas dúvidas. Nossa equipe está pronta para atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* ─── FORMULÁRIO + CONTATOS ─── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.90)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Formulário */}
            <div
              className="rounded-2xl p-5 sm:p-8"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1.5px solid rgba(0,217,255,0.2)', backdropFilter: 'blur(12px)' }}
            >
              <h2 className="text-2xl font-black text-white mb-2">Agende uma Visita Técnica Gratuita</h2>
              <p className="text-gray-400 text-sm mb-6">Preencha o formulário e entraremos em contato em até 24 horas.</p>

              {enviado ? (
                <div className="text-center py-10">
                  <CheckCircle size={48} style={{ color: '#00d9ff', margin: '0 auto 16px' }} />
                  <h3 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-400">Você será redirecionado para o WhatsApp. Nossa equipe entrará em contato em breve!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Nome Completo *</label>
                      <input
                        type="text"
                        required
                        placeholder="Seu nome"
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                        style={inputStyle}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">E-mail</label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Você é... *</label>
                    <select
                      required
                      value={form.tipo}
                      onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    >
                      <option value="" disabled style={{ background: '#0a0819' }}>Selecione uma opção</option>
                      <option value="Síndico / Gestor de Condomínio" style={{ background: '#0a0819' }}>Síndico / Gestor de Condomínio</option>
                      <option value="Morador / Funcionário" style={{ background: '#0a0819' }}>Morador / Funcionário</option>
                      <option value="Empresa / Corporação" style={{ background: '#0a0819' }}>Empresa / Corporação</option>
                      <option value="Administradora de Condomínios" style={{ background: '#0a0819' }}>Administradora de Condomínios</option>
                      <option value="Outro" style={{ background: '#0a0819' }}>Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Mensagem</label>
                    <textarea
                      rows={4}
                      placeholder="Conte-nos sobre seu condomínio ou empresa..."
                      value={form.mensagem}
                      onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #00d9ff, #0099bb)', color: '#0a0819', boxShadow: '0 0 25px rgba(0,217,255,0.4)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(0,217,255,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(0,217,255,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
                  >
                    <Send size={16} /> Enviar pelo WhatsApp
                  </button>
                </form>
              )}
            </div>

            {/* Informações de contato */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white mb-2">Fale Diretamente Conosco</h2>
                <p className="text-gray-400">Escolha o canal de sua preferência para entrar em contato.</p>
              </div>

              {[
                {
                  icon: MessageCircle,
                  title: 'WhatsApp',
                  desc: 'Atendimento Rápido e Direto',
                  value: '(11) 94816-1325',
                  color: '#00d9ff',
                  href: 'https://wa.me/5511948161325',
                  label: 'Chamar no WhatsApp',
                },
                {
                  icon: Mail,
                  title: 'E-mail',
                  desc: 'Propostas e Parcerias',
                  value: 'fasttechminimarket@gmail.com',
                  color: '#d400ff',
                  href: 'mailto:fasttechminimarket@gmail.com',
                  label: 'Enviar E-mail',
                },
                {
                  icon: Phone,
                  title: 'Atendimento Comercial',
                  desc: 'Atendimento Comercial',
                  value: '(11) 94006-2081',
                  color: '#ffd700',
                  href: 'tel:+5511940062081',
                  label: 'Ligar Agora',
                },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 block"
                    style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${c.color}20`, textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.border = `1px solid ${c.color}50`; (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 25px ${c.color}12`; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.border = `1px solid ${c.color}20`; (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                      <Icon size={22} style={{ color: c.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{c.desc}</div>
                      <div className="font-bold text-white">{c.value}</div>
                    </div>
                    <div className="text-xs font-semibold" style={{ color: c.color }}>{c.label} →</div>
                  </a>
                );
              })}

              {/* Redes sociais */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,0,110,0.2)' }}
              >
                <h3 className="font-bold text-white mb-4">Siga a Fast&amp;Tech</h3>
                <div className="flex gap-3">
                  {[
                    { label: 'Instagram', icon: '📸', href: 'https://instagram.com/fasttechsolucoes', color: '#ff006e' },
                    { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/5511948161325', color: '#00d9ff' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl text-center text-xs font-bold transition-all duration-300"
                      style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, color: s.color, textDecoration: 'none' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}20`; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${s.color}10`; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                    >
                      <div className="text-xl mb-1">{s.icon}</div>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Indique seu condomínio */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(255,0,110,0.12), rgba(212,0,255,0.08))', border: '1.5px solid rgba(255,0,110,0.35)' }}
              >
                <h3 className="font-bold text-white mb-2">🏢 Indique seu Condomínio</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Mora em um condomínio ou trabalha em uma empresa que poderia ter um Fast&amp;Tech? Indique e ajude a transformar seu espaço!
                </p>
                <a
                  href="https://wa.me/5511948161325?text=Quero%20indicar%20meu%20condom%C3%ADnio%20para%20a%20Fast%26Tech!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 15px rgba(255,0,110,0.3)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(255,0,110,0.6)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 15px rgba(255,0,110,0.3)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
                >
                  <MessageCircle size={14} /> Indicar Agora
                </a>
                <div className="absolute bottom-0 left-0 h-0.5 w-full" style={{ background: 'linear-gradient(90deg, transparent, #ff006e, #d400ff, transparent)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
