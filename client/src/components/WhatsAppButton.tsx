const WA_NUMBER = '5511948161325';
const WA_MESSAGE = encodeURIComponent('Olá! Vim pelo site da Fast&Tech e gostaria de saber mais sobre o Mini Market Autônomo para o meu condomínio/empresa.');
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 0 0 0 rgba(37,211,102,0); }
        }

        .wa-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #128c7e);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          animation: wa-pulse 2.2s infinite;
          transition: transform 0.2s ease;
          cursor: pointer;
        }

        /* Tooltip — visível APENAS no hover em dispositivos com mouse (pointer: fine) */
        .wa-float .wa-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10,8,25,0.95);
          border: 1px solid rgba(37,211,102,0.35);
          border-radius: 10px;
          padding: 8px 14px;
          white-space: nowrap;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        /* Setinha do tooltip */
        .wa-float .wa-tooltip::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid rgba(10,8,25,0.95);
        }

        /* Mostrar tooltip SOMENTE em dispositivos com mouse real (não touch) */
        @media (hover: hover) and (pointer: fine) {
          .wa-float:hover {
            animation: none;
            transform: scale(1.1);
            box-shadow: 0 6px 28px rgba(37,211,102,0.65);
          }
          .wa-float:hover .wa-tooltip {
            opacity: 1;
          }
        }
      `}</style>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Fale conosco pelo WhatsApp"
      >
        {/* Ícone SVG oficial do WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="white"
        >
          <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.363.627 4.672 1.815 6.693L2.667 29.333l6.84-1.787A13.28 13.28 0 0 0 16.003 29.333C23.37 29.333 29.333 23.363 29.333 16S23.37 2.667 16.003 2.667zm0 2.4c5.96 0 10.93 4.97 10.93 10.933s-4.97 10.933-10.93 10.933a10.88 10.88 0 0 1-5.56-1.52l-.4-.24-4.06 1.06 1.08-3.94-.267-.413A10.88 10.88 0 0 1 5.07 16c0-5.963 4.97-10.933 10.933-10.933zm-3.2 5.6c-.267 0-.693.1-.96.533-.267.44-1.04 1.013-1.04 2.48 0 1.466 1.067 2.88 1.213 3.08.147.2 2.08 3.173 5.04 4.32.707.267 1.253.427 1.68.547.707.2 1.347.173 1.853.107.573-.08 1.76-.72 2.013-1.413.253-.693.253-1.293.173-1.413-.08-.12-.293-.2-.613-.347-.32-.147-1.76-.867-2.027-.96-.267-.093-.467-.147-.667.147-.2.293-.76.96-.933 1.16-.173.2-.347.213-.64.067-.293-.147-1.24-.453-2.36-1.453-.867-.773-1.453-1.733-1.627-2.027-.173-.293-.013-.453.133-.6.133-.133.293-.347.44-.52.147-.173.2-.293.293-.493.093-.2.047-.373-.027-.52-.073-.147-.667-1.6-.907-2.187-.24-.573-.493-.493-.667-.507-.173-.013-.373-.013-.573-.013z" />
        </svg>

        {/* Tooltip — aparece só no hover com mouse real, nunca no touch/mobile */}
        <span className="wa-tooltip">Fale com um especialista</span>
      </a>
    </>
  );
}
