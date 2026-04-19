import { useEffect, useRef } from 'react';

export default function ParticlesEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, frame = 0, scanX = 0;
    let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => { tmx = e.clientX / W; tmy = e.clientY / H; });

    const COLS = ['#00d9ff','#00d9ff','#ff40ff','#ffd700','#ff006e','#00d9ff'];

    interface Trail { x: number; y: number; }
    interface P {
      x:number;y:number;vx:number;vy:number;sz:number;
      color:string;alpha:number;maxAlpha:number;
      life:number;maxLife:number;trail:Trail[];
    }

    const mkP = (): P => {
      const s = Math.random() > 0.5 ? 0 : 1;
      const x = s===0 ? Math.random()*W*0.5 : W*0.45+Math.random()*W*0.5;
      const y = s===0 ? H*0.1+Math.random()*H*0.55 : H*0.42+Math.random()*H*0.45;
      const vx = s===0 ? 1.3+Math.random()*1.2 : 1.1+Math.random()*1.0;
      const vy = s===0 ? -(0.4+Math.random()*0.65) : -(0.5+Math.random()*0.7);
      return { x, y, vx, vy, sz: Math.random()*2.2+0.6,
        color: COLS[Math.floor(Math.random()*COLS.length)],
        alpha: 0, maxAlpha: Math.random()*0.7+0.25,
        life: 0, maxLife: Math.random()*140+70, trail: [] };
    };

    interface R { x1:number;y1:number;x2:number;y2:number;t:number;maxT:number;color:string;w:number; }

    const mkR = (): R => {
      const maxT = Math.random()*100+55;
      const s = Math.floor(Math.random()*4);
      const bases = [
        {x1:20,     y1:H*0.28, dx:W*0.38, dy:-H*0.22},
        {x1:60,     y1:H*0.42, dx:W*0.32, dy:-H*0.18},
        {x1:W*0.5,  y1:H*0.56, dx:W*0.36, dy:-H*0.26},
        {x1:W*0.56, y1:H*0.70, dx:W*0.30, dy:-H*0.22},
      ];
      const b = bases[s%4];
      return {
        x1: b.x1+Math.random()*50, y1: b.y1+Math.random()*35,
        x2: b.x1+b.dx+Math.random()*50, y2: b.y1+b.dy+Math.random()*35,
        t: 0, maxT, color: Math.random()>0.5?'#00d9ff':'#ff40ff',
        w: Math.random()*1.8+0.5,
      };
    };

    const particles: P[] = Array.from({length:90}, mkP);
    const rays: R[] = Array.from({length:10}, () => { const r=mkR(); r.t=Math.random()*r.maxT; return r; });

    const animate = () => {
      frame++;
      mx += (tmx-mx)*0.05; my += (tmy-my)*0.05;
      ctx.clearRect(0,0,W,H);

      // Scan diagonal
      scanX = (scanX+1.2)%(W+H);
      ctx.save(); ctx.globalAlpha=0.10; ctx.strokeStyle='#00d9ff'; ctx.lineWidth=2;
      ctx.shadowBlur=8; ctx.shadowColor='#00d9ff';
      ctx.beginPath(); ctx.moveTo(scanX-H,0); ctx.lineTo(scanX,H); ctx.stroke();
      ctx.restore();

      // Pulso nas setas
      const pulse = (Math.sin(frame*0.035)+1)/2;
      const pulse2 = (Math.sin(frame*0.028+1.5)+1)/2;
      ctx.save();
      ctx.globalAlpha = 0.04+pulse*0.07;
      const g1 = ctx.createLinearGradient(0,H,W*0.5,0);
      g1.addColorStop(0,'#00d9ff'); g1.addColorStop(1,'transparent');
      ctx.fillStyle=g1; ctx.fillRect(0,0,W,H);
      ctx.globalAlpha = 0.03+pulse2*0.06;
      const g2 = ctx.createLinearGradient(W,H,W*0.5,H*0.35);
      g2.addColorStop(0,'#ff40ff'); g2.addColorStop(1,'transparent');
      ctx.fillStyle=g2; ctx.fillRect(0,0,W,H);
      ctx.restore();

      // Reflexo do cursor
      ctx.save(); ctx.globalAlpha=0.06+pulse*0.04;
      const gc = ctx.createRadialGradient(mx*W,my*H,0,mx*W,my*H,180);
      gc.addColorStop(0,'#00d9ff'); gc.addColorStop(1,'transparent');
      ctx.fillStyle=gc; ctx.fillRect(0,0,W,H); ctx.restore();

      // Partículas
      particles.forEach(p => {
        p.trail.push({x:p.x,y:p.y}); if(p.trail.length>10) p.trail.shift();
        p.x+=p.vx+(mx-0.5)*0.4; p.y+=p.vy+(my-0.5)*0.25; p.life++;
        if(p.alpha<p.maxAlpha) p.alpha+=0.04;
        if(p.life>p.maxLife*0.65) p.alpha-=p.maxAlpha/(p.maxLife*0.35);
        if(p.life>=p.maxLife||p.alpha<0) Object.assign(p,mkP());
        p.trail.forEach((t,i)=>{
          ctx.save(); ctx.globalAlpha=Math.max(0,p.alpha*(i/p.trail.length)*0.4);
          ctx.shadowBlur=5; ctx.shadowColor=p.color; ctx.fillStyle=p.color;
          ctx.beginPath(); ctx.arc(t.x,t.y,p.sz*(i/p.trail.length)*0.8,0,Math.PI*2); ctx.fill(); ctx.restore();
        });
        ctx.save(); ctx.globalAlpha=Math.max(0,p.alpha);
        ctx.shadowBlur=14; ctx.shadowColor=p.color; ctx.fillStyle=p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.sz,0,Math.PI*2); ctx.fill(); ctx.restore();
      });

      // Raios de energia
      rays.forEach(r => {
        r.t++; if(r.t>r.maxT) Object.assign(r,mkR());
        const prog=r.t/r.maxT;
        const ease=prog<0.5?2*prog*prog:1-Math.pow(-2*prog+2,2)/2;
        const tail=Math.max(0,ease-0.18);
        const cx=r.x1+(r.x2-r.x1)*ease, cy=r.y1+(r.y2-r.y1)*ease;
        const tx=r.x1+(r.x2-r.x1)*tail, ty=r.y1+(r.y2-r.y1)*tail;
        const a=(1-Math.abs(prog-0.5)*2)*0.9;
        ctx.save(); ctx.globalAlpha=a; ctx.shadowBlur=18; ctx.shadowColor=r.color;
        ctx.strokeStyle=r.color; ctx.lineWidth=r.w; ctx.lineCap='round';
        ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(cx,cy); ctx.stroke();
        ctx.fillStyle=r.color; ctx.beginPath(); ctx.arc(cx,cy,2.5,0,Math.PI*2); ctx.fill();
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => { cancelAnimationFrame(animRef.current); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5,
        opacity: 0.75,
      }}
    />
  );
}
