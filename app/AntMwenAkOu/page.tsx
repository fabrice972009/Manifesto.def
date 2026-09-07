"use client";
import Image from "next/image";

const STRIPE_LIVE = "https://buy.stripe.com/fZu00i0IT39P92T5Xjbwk0h";

export default function AntMwenAkOuPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-5 py-12"
      style={{background:"#000000"}}>
      <div className="w-full max-w-sm">

        {/* Flyer */}
        <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
          <Image src="/ant-mwen-ak-ou.jpg" alt="Ant Mwen ak Ou" fill className="object-cover"/>
          {/* Gold overlay badge */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-4"
            style={{background:"linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%)"}}>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-1"
              style={{color:"#C9A84C"}}>13 Septanm · Aswe — 14 Septanm</p>
            <p className="font-display text-white text-lg leading-tight">35 Bouji Pou Dèf</p>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] mb-2" style={{color:"#C9A84C"}}>
            Fond4Mantal Present
          </p>
          <h1 className="font-display text-white text-3xl mb-1">Ant Mwen ak Ou</h1>
          <p className="font-display text-2xl mb-4" style={{color:"#C9A84C"}}>35 Bouji Pou Dèf</p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1" style={{background:"linear-gradient(to right, transparent, #C9A84C)"}}/>
            <span className="text-xs font-mono" style={{color:"#C9A84C"}}>✦</span>
            <div className="h-px flex-1" style={{background:"linear-gradient(to left, transparent, #C9A84C)"}}/>
          </div>
        </div>

        {/* Message */}
        <div className="border p-6 mb-8 rounded-sm"
          style={{borderColor:"rgba(201,168,76,0.25)", background:"rgba(201,168,76,0.04)"}}>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-4" style={{color:"#C9A84C"}}>
            Yon Envitasyon
          </p>
          <p className="text-[rgba(255,255,255,0.75)] text-sm leading-relaxed mb-4">
            14 Septanm 1991, aswe a, yon istwa te kòmanse. Jodi a, plis pase 3 deseni apre, Dèf pral selebre 35 ane nan yon fason ki p ap janm bliye.
          </p>
          <p className="text-[rgba(255,255,255,0.75)] text-sm leading-relaxed mb-4">
            Yon sware kote atis la ak Bacha yo pral kreye ansanm — Dèf ap chwazi 20 mizik, epi se <span style={{color:"#C9A84C"}} className="font-display">ou</span> ak tout Bacha yo ki ap chwazi 15 lòt yo.
          </p>
          <p className="text-[rgba(255,255,255,0.75)] text-sm leading-relaxed">
            35 mizik. 35 bouji. Yon sèl aswe pou selebre yon vwayaj eksepsyonèl. Vini fè li avèk nou.
          </p>
        </div>

        {/* Event details */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {[
            ["📅","Dat","13 Septanm 2026"],
            ["🕐","Lè","Aswe — Minwi"],
            ["🎵","35 mizik","20 pa Dèf · 15 pa Bacha yo"],
            ["🎂","Espesyal","35 bouji pou Dèf"],
          ].map(([icon, label, val], i) => (
            <div key={i} className="border p-3 rounded-sm" style={{borderColor:"rgba(201,168,76,0.2)", background:"rgba(201,168,76,0.03)"}}>
              <p className="text-base mb-1">{icon}</p>
              <p className="font-mono text-[9px] uppercase tracking-wider mb-0.5" style={{color:"rgba(201,168,76,0.5)"}}>
                {label}
              </p>
              <p className="text-white text-xs">{val}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <a href="/live"
            className="flex items-center justify-between px-5 py-4 rounded-sm transition-all"
            style={{background:"#C9A84C"}}>
            <div>
              <p className="font-display text-black text-sm font-bold">Jwenn Aksè — Te Achte $50</p>
              <p className="font-mono text-[10px] text-[rgba(0,0,0,0.55)]">Koleksyon — aksè gratis</p>
            </div>
            <span className="text-black font-bold text-lg">→</span>
          </a>
          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer"
            className="flex items-center justify-between border px-5 py-4 rounded-sm transition-all hover:bg-[rgba(201,168,76,0.08)]"
            style={{borderColor:"rgba(201,168,76,0.4)"}}>
            <div>
              <p className="font-display text-white text-sm">Poko gen aksè — Jwenn li</p>
              <p className="font-mono text-[10px]" style={{color:"rgba(201,168,76,0.5)"}}>Peye pou patisipe nan saware a</p>
            </div>
            <span style={{color:"#C9A84C"}} className="font-display text-sm">$20 →</span>
          </a>
        </div>

        {/* Signature */}
        <div className="text-center mt-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px flex-1" style={{background:"linear-gradient(to right, transparent, rgba(201,168,76,0.3))"}}/>
            <span className="font-display text-xs" style={{color:"rgba(201,168,76,0.4)"}}>✦</span>
            <div className="h-px flex-1" style={{background:"linear-gradient(to left, transparent, rgba(201,168,76,0.3))"}}/>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-widest" style={{color:"rgba(201,168,76,0.3)"}}>
            Fond4Mantal · Istwa te kòmanse 14 Septanm 1991
          </p>
        </div>

        <a href="/" className="block text-center text-[rgba(255,255,255,0.2)] text-xs mt-8 hover:text-white transition-colors">← Retounen</a>
      </div>
    </main>
  );
}
