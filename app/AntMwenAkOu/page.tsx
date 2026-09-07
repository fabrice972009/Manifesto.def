"use client";
import Image from "next/image";

const STRIPE_LIVE = "https://buy.stripe.com/3cIbJ077heSx2Ev1H3bwk0w";

export default function AntMwenAkOuPage() {
  return (
    <main style={{background:"#080808", minHeight:"100vh", fontFamily:"Georgia, serif",
      display:"flex", flexDirection:"column", alignItems:"center"}}>

      <div style={{width:"100%", maxWidth:"400px", padding:"0 0 60px"}}>

        {/* FLYER — ratio fixed */}
        <div style={{position:"relative", width:"100%", aspectRatio:"3/4", overflow:"hidden"}}>
          <Image src="/35bouji-flyer.jpg" alt="35 Bouji Pou Def" fill
            style={{objectFit:"contain", objectPosition:"center"}}/>
          <div style={{
            position:"absolute", bottom:0, left:0, right:0, height:"30%",
            background:"linear-gradient(to bottom, rgba(8,8,8,0) 0%, rgba(8,8,8,1) 100%)"
          }}/>
        </div>

        {/* CONTENT */}
        <div style={{padding:"0 24px"}}>

          <div style={{textAlign:"center", marginBottom:"28px"}}>
            <p style={{fontFamily:"'Courier New', monospace", fontSize:"11px", letterSpacing:"0.3em",
              textTransform:"uppercase", color:"#C9A84C", marginBottom:"12px"}}>
              13 Septanm 2026 · 8PM
            </p>
            <div style={{display:"flex", alignItems:"center", gap:"12px"}}>
              <div style={{flex:1, height:"1px", background:"linear-gradient(to right, transparent, rgba(201,168,76,0.4))"}}/>
              <span style={{color:"rgba(201,168,76,0.5)", fontSize:"12px"}}>✦</span>
              <div style={{flex:1, height:"1px", background:"linear-gradient(to left, transparent, rgba(201,168,76,0.4))"}}/>
            </div>
          </div>

          <div style={{marginBottom:"28px"}}>
            <p style={{color:"rgba(255,255,255,0.55)", fontSize:"13px", lineHeight:"1.9",
              textAlign:"center", marginBottom:"16px"}}>
              14 Septanm 1991, aswe a, yon istwa te kòmanse.
              Jodi a, 35 ane apre, Dèf ap selebre nan yon saware ki p ap janm bliye.
            </p>
            <p style={{color:"rgba(255,255,255,0.55)", fontSize:"13px", lineHeight:"1.9", textAlign:"center"}}>
              Dèf ap chwazi <span style={{color:"#C9A84C"}}>20 mizik</span> — epi se{" "}
              <span style={{color:"#C9A84C"}}>Bacha yo</span> ki ap chwazi lòt{" "}
              <span style={{color:"#C9A84C"}}>15</span> yo.
              35 mizik. 35 bouji. Yon aswe ant mwen ak ou.
            </p>
          </div>

          <div style={{display:"flex", alignItems:"center", gap:"12px", marginBottom:"24px"}}>
            <div style={{flex:1, height:"1px", background:"rgba(201,168,76,0.2)"}}/>
            <span style={{color:"rgba(201,168,76,0.4)", fontSize:"10px", fontFamily:"monospace",
              letterSpacing:"0.2em", textTransform:"uppercase"}}>Tikè</span>
            <div style={{flex:1, height:"1px", background:"rgba(201,168,76,0.2)"}}/>
          </div>

          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer" style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            padding:"18px 20px", background:"#C9A84C", textDecoration:"none",
            marginBottom:"40px"
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

          <p style={{textAlign:"center", fontFamily:"monospace", fontSize:"10px",
            letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.15)",
            marginBottom:"12px"}}>
            Fond4Mantal · Depi 14 Septanm 1991
          </p>

          <a href="/" style={{display:"block", textAlign:"center",
            color:"rgba(255,255,255,0.2)", fontSize:"12px",
            textDecoration:"none", fontFamily:"monospace"}}>← Retounen</a>
        </div>
      </div>
    </main>
  );
}
