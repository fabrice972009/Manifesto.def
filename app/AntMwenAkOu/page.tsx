"use client";
import Image from "next/image";

const STRIPE_LIVE = "https://buy.stripe.com/3cIbJ077heSx2Ev1H3bwk0w";

export default function AntMwenAkOuPage() {
  return (
    <main style={{background:"#0d0d0d", minHeight:"100vh", fontFamily:"Georgia, serif",
      display:"flex", flexDirection:"column", alignItems:"center"}}>

      <div style={{width:"100%", maxWidth:"420px"}}>

        {/* FLYER */}
        <div style={{position:"relative", width:"100%", aspectRatio:"4/5"}}>
          <Image src="/35bouji-flyer2.jpg" alt="35 Bouji Pou Def" fill
            style={{objectFit:"cover", objectPosition:"center top"}}/>
          <div style={{
            position:"absolute", bottom:0, left:0, right:0, height:"35%",
            background:"linear-gradient(to bottom, rgba(13,13,13,0) 0%, rgba(13,13,13,1) 100%)"
          }}/>
        </div>

        {/* CONTENT */}
        <div style={{padding:"0 24px 60px", marginTop:"-8px"}}>

          {/* Date */}
          <p style={{fontFamily:"'Courier New', monospace", fontSize:"11px", letterSpacing:"0.3em",
            textTransform:"uppercase", color:"#C9A84C", textAlign:"center", marginBottom:"24px"}}>
            13 Septanm 2026 · 10PM
          </p>

          {/* Message */}
          <div style={{marginBottom:"28px", borderLeft:"2px solid rgba(201,168,76,0.4)",
            paddingLeft:"16px"}}>
            <p style={{color:"rgba(255,255,255,0.65)", fontSize:"14px", lineHeight:"1.9",
              marginBottom:"14px"}}>
              Istwa a te kòmanse 14 Septanm 1991. 35 ane apre, ann selebre lavi, mizik ak tout bèl souvni yo ansanm.
            </p>
            <p style={{color:"rgba(255,255,255,0.65)", fontSize:"14px", lineHeight:"1.9",
              marginBottom:"14px"}}>
              🎤 Dèf ap pèfòme <span style={{color:"#C9A84C"}}>35 mizik</span> —{" "}
              <span style={{color:"#C9A84C"}}>20</span> li chwazi,{" "}
              <span style={{color:"#C9A84C"}}>15</span> Bacha yo chwazi.
            </p>
            <p style={{color:"rgba(255,255,255,0.65)", fontSize:"14px", lineHeight:"1.9"}}>
              Vin selebre 35 ane Dèf avèk nou. Yon sware espesyal. Yon istwa espesyal.<br/>
              <span style={{color:"#C9A84C"}}>Ant Mwen ak Ou. 🖤🥂</span>
            </p>
          </div>

          {/* Divider */}
          <div style={{display:"flex", alignItems:"center", gap:"12px", marginBottom:"24px"}}>
            <div style={{flex:1, height:"1px", background:"rgba(201,168,76,0.2)"}}/>
            <span style={{color:"rgba(201,168,76,0.4)", fontSize:"10px", fontFamily:"monospace",
              letterSpacing:"0.2em", textTransform:"uppercase"}}>Tikè</span>
            <div style={{flex:1, height:"1px", background:"rgba(201,168,76,0.2)"}}/>
          </div>

          {/* CTA */}
          <a href={STRIPE_LIVE} target="_blank" rel="noreferrer" style={{
            display:"flex", alignItems:"center", justifyContent:"space-between",
            padding:"18px 22px", background:"#C9A84C", textDecoration:"none",
            marginBottom:"16px"
          }}>
            <div>
              <p style={{color:"#000", fontSize:"15px", fontWeight:"bold", marginBottom:"3px",
                fontFamily:"Georgia, serif"}}>Pran Tikè ou</p>
              <p style={{color:"rgba(0,0,0,0.5)", fontSize:"11px", fontFamily:"monospace",
                letterSpacing:"0.05em"}}>13 Septanm · Live prive ak Dèf</p>
            </div>
            <span style={{color:"#000", fontSize:"18px", fontWeight:"bold"}}>$10 →</span>
          </a>

          {/* Footer */}
          <p style={{textAlign:"center", fontFamily:"monospace", fontSize:"10px",
            letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.12)",
            marginTop:"36px", marginBottom:"12px"}}>
            Fond4Mantal · Depi 14 Septanm 1991
          </p>
          <a href="/" style={{display:"block", textAlign:"center",
            color:"rgba(255,255,255,0.18)", fontSize:"12px",
            textDecoration:"none", fontFamily:"monospace"}}>← Retounen</a>
        </div>
      </div>
    </main>
  );
}
