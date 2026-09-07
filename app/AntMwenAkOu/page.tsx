"use client";
import Image from "next/image";

const STRIPE_LIVE = "https://buy.stripe.com/3cIbJ077heSx2Ev1H3bwk0w";

export default function AntMwenAkOuPage() {
  return (
    <main style={{background:"#080808", minHeight:"100vh", fontFamily:"Georgia, serif"}}>

      {/* HERO — flyer full width */}
      <div style={{position:"relative", width:"100%", aspectRatio:"4/5", maxHeight:"85vh"}}>
        <Image src="/35bouji-flyer.jpg" alt="35 Bouji Pou Def" fill style={{objectFit:"cover"}}/>
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(8,8,8,1) 100%)"
        }}/>
      </div>

      {/* CONTENT */}
      <div style={{maxWidth:"420px", margin:"0 auto", padding:"0 20px 60px"}}>

        {/* Subtitle */}
        <div style={{textAlign:"center", marginTop:"-40px", position:"relative", zIndex:2, marginBottom:"36px"}}>
          <p style={{fontFamily:"'Courier New', monospace", fontSize:"11px", letterSpacing:"0.3em",
            textTransform:"uppercase", color:"#C9A84C", marginBottom:"8px"}}>
            13 Septanm 2026 · 8PM
          </p>
          <div style={{display:"flex", alignItems:"center", gap:"12px", marginBottom:"24px"}}>
            <div style={{flex:1, height:"1px", background:"linear-gradient(to right, transparent, rgba(201,168,76,0.5))"}}/>
            <span style={{color:"rgba(201,168,76,0.6)", fontSize:"12px"}}>✦</span>
            <div style={{flex:1, height:"1px", background:"linear-gradient(to left, transparent, rgba(201,168,76,0.5))"}}/>
          </div>
        </div>

        {/* Message */}
        <div style={{marginBottom:"32px"}}>
          <p style={{color:"rgba(255,255,255,0.55)", fontSize:"13px", lineHeight:"1.9",
            textAlign:"center", marginBottom:"20px"}}>
            14 Septanm 1991, aswe a, yon istwa te kòmanse.<br/>
            Jodi a, 35 ane apre, Dèf ap selebre nan yon saware<br/>
            ki p ap janm bliye.
          </p>
          <p style={{color:"rgba(255,255,255,0.55)", fontSize:"13px", lineHeight:"1.9", textAlign:"center"}}>
            Dèf ap chwazi <span style={{color:"#C9A84C"}}>20 mizik</span> —
            epi se <span style={{color:"#C9A84C"}}>Bacha yo</span> ki ap chwazi
            lòt <span style={{color:"#C9A84C"}}>15</span> yo.
            35 mizik. 35 bouji. Yon aswe ant mwen ak ou.
          </p>
        </div>

        {/* Divider */}
        <div style={{display:"flex", alignItems:"center", gap:"12px", marginBottom:"32px"}}>
          <div style={{flex:1, height:"1px", background:"rgba(201,168,76,0.2)"}}/>
          <span style={{color:"rgba(201,168,76,0.4)", fontSize:"10px", fontFamily:"monospace",
            letterSpacing:"0.2em", textTransform:"uppercase"}}>Jwenn Aksè</span>
          <div style={{flex:1, height:"1px", background:"rgba(201,168,76,0.2)"}}/>
        </div>

        {/* CTAs */}
        <div style={{display:"flex", flexDirection:"column", gap:"12px"}}>

          {/* $50 collection — free */}
          <a href="/live" style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            padding:"18px 20px", border:"1px solid rgba(201,168,76,0.3)",
            background:"rgba(201,168,76,0.05)", textDecoration:"none",
            transition:"all 0.2s"
          }}>
            <div>
              <p style={{color:"#C9A84C", fontSize:"13px", marginBottom:"3px", fontFamily:"Georgia, serif"}}>
                Te achte Koleksyon $50
              </p>
              <p style={{color:"rgba(255,255,255,0.35)", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.05em"}}>
                Aksè gratis nan saware a
              </p>
            </div>
            <span style={{color:"#C9A84C", fontSize:"18px"}}>→</span>
          </a>

          {/* Buy ticket */}
          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer" style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            padding:"18px 20px", background:"#C9A84C", textDecoration:"none",
            transition:"all 0.2s"
          }}>
            <div>
              <p style={{color:"#000", fontSize:"14px", fontWeight:"bold", marginBottom:"3px", fontFamily:"Georgia, serif"}}>
                Pran Tikè ou
              </p>
              <p style={{color:"rgba(0,0,0,0.55)", fontSize:"11px", fontFamily:"monospace", letterSpacing:"0.05em"}}>
                13 Septanm · Live prive ak Dèf
              </p>
            </div>
            <span style={{color:"#000", fontSize:"16px", fontWeight:"bold"}}>$20 →</span>
          </a>

        </div>

        {/* Footer */}
        <p style={{
          textAlign:"center", marginTop:"48px", fontFamily:"monospace",
          fontSize:"10px", letterSpacing:"0.2em", textTransform:"uppercase",
          color:"rgba(255,255,255,0.15)"
        }}>
          Fond4Mantal · Depi 14 Septanm 1991
        </p>

        <a href="/" style={{
          display:"block", textAlign:"center", marginTop:"16px",
          color:"rgba(255,255,255,0.2)", fontSize:"12px",
          textDecoration:"none", fontFamily:"monospace"
        }}>← Retounen</a>
      </div>
    </main>
  );
}
