import { useState } from 'react';
import { Link } from 'wouter';
import Layout from '@/components/Layout';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

/**
 * FAQ - Fast&Tech Soluções
 * Design: Dark Tech Neon — fundo escuro #0a0819, neons ciano/magenta/dourado
 * Accordion interativo com animação suave
 */

const BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310419663028305329/hZ8vj7HYLVBd9XsVXHD4zU/3627129_e65008a3.webp';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  accent: string;
  category: string;
}

const faqs: FAQItem[] = [
  // ── CATEGORIA: CUSTO E INVESTIMENTO ──
  {
    category: 'Custo e Investimento',
    accent: '#ffd700',
    question: 'Qual é o custo para o condomínio instalar o Mini Market Fast&Tech?',
    answer: (
      <span>
        <strong style={{ color: '#ffd700' }}>Custo zero para o condomínio.</strong> A Fast&Tech assume 100% do investimento em equipamentos, instalação, mobiliário, estoque inicial, tecnologia e manutenção. O condomínio não paga absolutamente nada para ter o Mini Market funcionando — pelo contrário, <strong style={{ color: '#00d9ff' }}>recebe cashback mensal</strong> sobre o faturamento da loja.
      </span>
    ),
  },
  {
    category: 'Custo e Investimento',
    accent: '#ffd700',
    question: 'O condomínio precisa contratar funcionários para operar o Mini Market?',
    answer: (
      <span>
        Não. O Mini Market Fast&Tech é <strong style={{ color: '#ffd700' }}>100% autônomo</strong>. Funciona 24 horas por dia, 7 dias por semana, sem necessidade de funcionários. O sistema de reconhecimento facial, câmeras online e pagamento digital garante a operação completa sem intervenção humana. A reposição de estoque é feita pela nossa equipe, sem custo adicional.
      </span>
    ),
  },
  {
    category: 'Custo e Investimento',
    accent: '#ffd700',
    question: 'Como funciona o cashback para o condomínio?',
    answer: (
      <span>
        O condomínio recebe uma <strong style={{ color: '#ffd700' }}>porcentagem mensal sobre o faturamento bruto</strong> da loja. Esse valor é depositado diretamente na conta do condomínio todo mês, sem burocracia. Quanto mais os moradores compram, maior o cashback — transformando o Mini Market em uma <strong style={{ color: '#00d9ff' }}>fonte de receita passiva</strong> para o condomínio.
      </span>
    ),
  },

  // ── CATEGORIA: MARCA PRÓPRIA VS FRANQUIAS ──
  {
    category: 'Por que Fast&Tech é melhor que franquias',
    accent: '#d400ff',
    question: 'O que é "Naming Rights" e por que isso importa para mim como síndico?',
    answer: (
      <span>
        <em>Naming Rights</em> é a <strong style={{ color: '#d400ff' }}>taxa de entrada cobrada por marcas franqueadas</strong> para o franqueado usar o nome delas. Algumas marcas do setor cobram mais de <strong style={{ color: '#ff006e' }}>R$ 100.000,00</strong> só para o direito de usar o nome. Esse custo é repassado diretamente para os preços dos produtos da loja — ou seja, os moradores do seu condomínio pagam mais caro por causa disso. Na Fast&Tech, <strong style={{ color: '#ffd700' }}>não existe Naming Rights</strong>. Somos marca própria e esse custo simplesmente não existe.
      </span>
    ),
  },
  {
    category: 'Por que Fast&Tech é melhor que franquias',
    accent: '#d400ff',
    question: 'O que são royalties e como eles afetam os preços dos produtos?',
    answer: (
      <span>
        Royalties são taxas mensais que franqueados pagam à marca franqueadora — geralmente entre <strong style={{ color: '#ff006e' }}>6% e 9% do faturamento bruto</strong>, todo mês, para sempre. Imagine: uma loja que fatura R$ 30.000/mês paga até R$ 2.700 só em royalties. Esse dinheiro precisa sair de algum lugar — e sai dos preços dos produtos. Na Fast&Tech, <strong style={{ color: '#d400ff' }}>não pagamos royalties a ninguém</strong>. Somos marca registrada e própria. Isso nos permite praticar preços <strong style={{ color: '#ffd700' }}>até 30% mais baratos</strong> que os concorrentes franqueados.
      </span>
    ),
  },
  {
    category: 'Por que Fast&Tech é melhor que franquias',
    accent: '#d400ff',
    question: 'Quais são as vantagens concretas de ser marca própria em vez de franquia?',
    answer: (
      <div className="space-y-3">
        <p>Ser marca própria nos dá <strong style={{ color: '#d400ff' }}>liberdade total</strong> para tomar as melhores decisões para o condomínio e para os moradores:</p>
        <div className="space-y-2 mt-2">
          {[
            { icon: '💰', text: 'Sem Naming Rights (taxa de entrada de R$ 100k+) — economia que vai direto para os preços.' },
            { icon: '📉', text: 'Sem royalties mensais de 6–9% — produtos até 30% mais baratos que franquias.' },
            { icon: '🛒', text: 'Liberdade para escolher os melhores fornecedores do mercado, sem amarras contratuais.' },
            { icon: '🏷️', text: 'Liberdade de precificação — podemos praticar os preços mais competitivos da região.' },
            { icon: '🔧', text: 'Decisões rápidas: sem precisar de aprovação da franqueadora para mudar produtos, layout ou tecnologia.' },
            { icon: '🤝', text: 'Relação direta com o condomínio, sem intermediários ou burocracia de rede franqueada.' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <span className="text-gray-200 text-sm leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    category: 'Por que Fast&Tech é melhor que franquias',
    accent: '#d400ff',
    question: 'A Fast&Tech tem alguma amarra contratual com fornecedores?',
    answer: (
      <span>
        Não. Por sermos marca própria, temos <strong style={{ color: '#d400ff' }}>total liberdade para escolher nossos fornecedores</strong>. Compramos dos melhores distribuidores do mercado, negociamos diretamente e sempre buscamos o melhor custo-benefício. Franquias são obrigadas a comprar de fornecedores homologados pela rede — muitas vezes mais caros — e esse custo extra vai para o preço final dos produtos. Na Fast&Tech, essa barreira não existe.
      </span>
    ),
  },

  // ── CATEGORIA: INSTALAÇÃO E OPERAÇÃO ──
  {
    category: 'Instalação e Operação',
    accent: '#00d9ff',
    question: 'Quanto tempo leva para instalar o Mini Market no condomínio?',
    answer: (
      <span>
        A instalação completa leva em média <strong style={{ color: '#00d9ff' }}>5 a 10 dias úteis</strong> após a assinatura do contrato. Nossa equipe cuida de tudo: projeto de layout, instalação elétrica, montagem dos equipamentos, configuração do sistema tecnológico e estoque inicial. O condomínio não precisa fazer nada além de disponibilizar o espaço.
      </span>
    ),
  },
  {
    category: 'Instalação e Operação',
    accent: '#00d9ff',
    question: 'Qual é o espaço mínimo necessário para instalar o Mini Market?',
    answer: (
      <span>
        O Mini Market Fast&Tech pode ser instalado em espaços a partir de <strong style={{ color: '#00d9ff' }}>6m²</strong>. Temos projetos modulares que se adaptam a diferentes tamanhos de espaço — desde uma área compacta no hall do condomínio até um espaço maior dedicado. Nossa equipe faz uma visita técnica gratuita para avaliar o melhor layout para o seu condomínio.
      </span>
    ),
  },
  {
    category: 'Instalação e Operação',
    accent: '#00d9ff',
    question: 'Quem faz a reposição do estoque?',
    answer: (
      <span>
        A reposição é feita <strong style={{ color: '#00d9ff' }}>inteiramente pela equipe Fast&Tech</strong>, sem custo adicional. Nosso sistema de gestão de estoque por inteligência artificial monitora os produtos em tempo real e aciona automaticamente a reposição quando necessário. O síndico e os moradores não precisam se preocupar com isso.
      </span>
    ),
  },
  {
    category: 'Instalação e Operação',
    accent: '#00d9ff',
    question: 'O que acontece se um equipamento apresentar defeito?',
    answer: (
      <span>
        Nosso suporte técnico funciona <strong style={{ color: '#00d9ff' }}>24 horas por dia, 7 dias por semana</strong>. Qualquer problema é atendido com prioridade máxima. Todos os equipamentos são cobertos por garantia e manutenção incluída no contrato — sem custo extra para o condomínio.
      </span>
    ),
  },

  // ── CATEGORIA: TECNOLOGIA E SEGURANÇA ──
  {
    category: 'Tecnologia e Segurança',
    accent: '#ff006e',
    question: 'Como funciona o reconhecimento facial no Mini Market?',
    answer: (
      <span>
        O sistema de reconhecimento facial permite que moradores cadastrados <strong style={{ color: '#ff006e' }}>entrem e saiam da loja de forma segura</strong>, sem precisar de cartão ou senha. A tecnologia identifica o morador em milissegundos, registra a entrada e vincula as compras ao perfil dele. É prático, rápido e seguro — e pode ser integrado ao aplicativo do condomínio.
      </span>
    ),
  },
  {
    category: 'Tecnologia e Segurança',
    accent: '#ff006e',
    question: 'Quais formas de pagamento são aceitas?',
    answer: (
      <span>
        O Mini Market aceita <strong style={{ color: '#ff006e' }}>todas as formas de pagamento digital</strong>: Pix, cartão de crédito, cartão de débito e carteiras digitais (como Google Pay e Apple Pay). Também é possível configurar crédito em conta para moradores cadastrados, com débito automático no boleto do condomínio — uma comodidade extra para os moradores.
      </span>
    ),
  },
  {
    category: 'Tecnologia e Segurança',
    accent: '#ff006e',
    question: 'As câmeras ficam gravando dentro da loja? Quem tem acesso?',
    answer: (
      <span>
        Sim, as câmeras gravam 24h e as imagens ficam armazenadas em nuvem com segurança. O síndico tem acesso ao monitoramento em tempo real pelo aplicativo. As gravações são usadas exclusivamente para <strong style={{ color: '#ff006e' }}>segurança e prevenção de perdas</strong>. Toda a operação segue a LGPD (Lei Geral de Proteção de Dados).
      </span>
    ),
  },

  // ── CATEGORIA: CONTRATO E PARCERIA ──
  {
    category: 'Contrato e Parceria',
    accent: '#00d9ff',
    question: 'Qual é o prazo mínimo de contrato?',
    answer: (
      <span>
        O contrato padrão tem prazo de <strong style={{ color: '#00d9ff' }}>24 meses</strong>, com possibilidade de renovação automática. Após o período inicial, o condomínio pode renovar ou encerrar a parceria com aviso prévio. Não há multas abusivas — nosso objetivo é uma parceria de longo prazo baseada em resultados reais.
      </span>
    ),
  },
  {
    category: 'Contrato e Parceria',
    accent: '#00d9ff',
    question: 'O condomínio precisa de aprovação em assembleia para instalar o Mini Market?',
    answer: (
      <span>
        Depende da convenção do condomínio. Em muitos casos, o síndico tem autonomia para contratar serviços que gerem receita para o condomínio. Recomendamos verificar a convenção condominial. Nossa equipe pode fornecer toda a documentação necessária para facilitar a aprovação em assembleia, incluindo apresentação completa do projeto, planilha de projeção de cashback e contratos para análise.
      </span>
    ),
  },
  {
    category: 'Contrato e Parceria',
    accent: '#00d9ff',
    question: 'O Mini Market Fast&Tech é adequado para condomínios de qual tamanho?',
    answer: (
      <span>
        O Mini Market é ideal para condomínios com <strong style={{ color: '#00d9ff' }}>a partir de 80 unidades</strong>. Quanto maior o condomínio, maior o potencial de faturamento e, consequentemente, maior o cashback mensal. Também atendemos empresas, escritórios e espaços corporativos de qualquer porte.
      </span>
    ),
  },
];

// Agrupa as perguntas por categoria
const categories = Array.from(new Set(faqs.map(f => f.category)));

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        border: `1.5px solid ${isOpen ? item.accent + '55' : 'rgba(255,255,255,0.07)'}`,
        background: isOpen ? `${item.accent}06` : 'rgba(10,8,25,0.5)',
        boxShadow: isOpen ? `0 0 20px ${item.accent}12` : 'none',
      }}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-start gap-4 transition-all duration-200"
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
        onClick={onToggle}
      >
        <HelpCircle
          size={20}
          className="flex-shrink-0 mt-0.5"
          style={{ color: item.accent, filter: `drop-shadow(0 0 6px ${item.accent}80)` }}
        />
        <span className="flex-1 font-bold text-white text-base leading-snug pr-2">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 mt-0.5 transition-transform duration-300"
          style={{
            color: item.accent,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '600px' : '0px' }}
      >
        <div className="px-6 pb-6 pt-0">
          <div
            className="pl-9 text-gray-200 text-base leading-relaxed"
            style={{ borderLeft: `2px solid ${item.accent}40` }}
          >
            <div className="pl-4">
              {item.answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <Layout>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.88)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-14 text-center">

          {/* Badge */}
          <div className="flex justify-center mb-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
              style={{ border: '1px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.07)', color: '#ffd700' }}
            >
              <HelpCircle size={12} /> Perguntas Frequentes
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-5">
            <span className="text-white">Tire Todas as </span>
            <span style={{ background: 'linear-gradient(90deg, #00d9ff, #d400ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Suas Dúvidas
            </span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Respondemos as perguntas mais comuns dos síndicos sobre o Mini Market Fast&Tech — desde custo zero até a grande diferença de ser marca própria em vez de franquia.
          </p>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleX(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.93)' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {categories.map((cat) => {
            const catFaqs = faqs.filter(f => f.category === cat);
            const catAccent = catFaqs[0].accent;
            const globalStartIndex = faqs.findIndex(f => f.category === cat);

            return (
              <div key={cat} className="mb-12">
                {/* Cabeçalho da categoria */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(90deg, ${catAccent}60, transparent)` }}
                  />
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex-shrink-0"
                    style={{ border: `1px solid ${catAccent}40`, background: `${catAccent}10`, color: catAccent }}
                  >
                    {cat}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(90deg, transparent, ${catAccent}60)` }}
                  />
                </div>

                {/* Perguntas da categoria */}
                <div className="space-y-3">
                  {catFaqs.map((item, localIdx) => {
                    const globalIdx = globalStartIndex + localIdx;
                    return (
                      <AccordionItem
                        key={globalIdx}
                        item={item}
                        isOpen={openIndex === globalIdx}
                        onToggle={() => toggle(globalIdx)}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── CTA FINAL ─── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('${BG}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scaleY(-1)' }} />
        <div className="absolute inset-0 z-0" style={{ background: 'rgba(10,8,25,0.92)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex p-4 rounded-2xl mb-6" style={{ background: 'rgba(0,217,255,0.08)', border: '1px solid rgba(0,217,255,0.2)' }}>
            <MessageCircle size={32} style={{ color: '#00d9ff', filter: 'drop-shadow(0 0 10px rgba(0,217,255,0.6))' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ainda tem dúvidas?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Nossa equipe está pronta para responder qualquer pergunta e apresentar uma proposta personalizada para o seu condomínio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511948161325?text=Olá!%20Vim%20pelo%20site%20e%20tenho%20dúvidas%20sobre%20o%20Mini%20Market%20Fast%26Tech."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', boxShadow: '0 0 25px rgba(37,211,102,0.4)', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(37,211,102,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(37,211,102,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                💬 Falar no WhatsApp
              </button>
            </a>
            <Link href="/contato">
              <button
                className="px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #ff006e, #d400ff)', color: '#fff', boxShadow: '0 0 25px rgba(255,0,110,0.4)', border: 'none', cursor: 'pointer' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 45px rgba(255,0,110,0.7)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255,0,110,0.4)'; (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
              >
                Formulário de Contato
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
