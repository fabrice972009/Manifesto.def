"use client";
import { useState } from "react";
import Image from "next/image";

const STRIPE_LIVE = "https://buy.stripe.com/fZu00i0IT39P92T5Xjbwk0h";
const LIVE_LINK = "";

const PERKS = [
  ["💬","Kesyon/repons ak atis la an dirèk"],
  ["🎧","Diskisyon sou chak mòso album lan"],
  ["🎶","Vèsyon inedite / akoustik"],
  ["👀","Kontni ki poko janm pibliye"],
  ["📹","Koulise kreyasyon album lan"],
  ["❤️","Moman pèsonèl ak moun ki sipòte"],
  ["🎁","Sipriz eksklizif nan fen an"],
];

type Stage = "gate" | "upgrade" | "access";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-5 py-10"
      style={{background:"#000000"}}>
      <div className="w-full max-w-sm">
        {/* Flyer */}
        <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden mb-8">
          <Image src="/ant-mwen-ak-ou.jpg" alt="Ant Mwen ak Ou" fill className="object-cover"/>
        </div>
        {children}
        <a href="/" className="block text-center text-[rgba(255,255,255,0.2)] text-xs mt-8 hover:text-white transition-colors">← Retounen</a>
      </div>
    </main>
  );
}

function Gate({ onResult }: { onResult: (s: Stage) => void }) {
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setError(""); setLoading(true);
    const res  = await fetch("/api/verify-live", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ email }) });
    const data = await res.json();
    if (data.valid) { setLoading(false); onResult("access"); return; }
    const res2 = await fetch("/api/verify-email", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ email }) });
    const data2 = await res2.json();
    setLoading(false);
    if (data2.valid) onResult("upgrade");
    else setError("Imel sa a pa nan lis la. Verifye epi eseye ankò.");
  }

  return (
    <Layout>
      <p className="text-[rgba(255,255,255,0.45)] text-sm text-center mb-5">
        Antre imel ou te itilize pou achte pou jwenn aksè.
      </p>
      <form onSubmit={submit} className="flex flex-col gap-3">
        <input type="email" required placeholder="imel@egzanp.com" value={email}
          onChange={e=>setEmail(e.target.value)}
          className="bg-[#111] border border-[rgba(255,255,255,0.15)] text-white placeholder:text-[rgba(255,255,255,0.2)] px-4 py-3 rounded-none text-sm focus:outline-none focus:border-white"/>
        <button type="submit" disabled={loading}
          className="bg-white hover:bg-gray-200 transition-colors text-black font-bold uppercase text-sm py-4 rounded-none disabled:opacity-50 tracking-widest">
          {loading ? "N ap verifye…" : "JWENN AKSÈ"}
        </button>
        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
      </form>
    </Layout>
  );
}

function UpgradePrompt() {
  return (
    <Layout>
      <div className="border border-[rgba(255,255,255,0.1)] p-4 mb-5">
        <div className="space-y-2.5">
          {PERKS.map(([icon, text], i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-sm flex-shrink-0">{icon}</span>
              <span className="text-[rgba(255,255,255,0.65)] text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-[rgba(255,255,255,0.1)] p-4 mb-4">
        <p className="text-[rgba(255,255,255,0.4)] text-xs mb-1">Ou te achte Manifesto pou $20</p>
        <p className="text-white text-sm">Peye $20 anplis pou jwenn aksè nan live sa a.</p>
      </div>
      <a href={STRIPE_LIVE} target="_blank" rel="noreferrer"
        className="flex items-center justify-between bg-white hover:bg-gray-200 transition-colors text-black px-5 py-4 rounded-none">
        <p className="font-bold uppercase tracking-widest text-sm">Jwenn Aksè — $20</p>
        <span className="font-bold">→</span>
      </a>
    </Layout>
  );
}

function LiveAccess() {
  return (
    <Layout>
      <div className="flex items-center justify-center gap-2 mb-5">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"/>
        <span className="text-white text-xs uppercase tracking-widest font-mono">Aksè konfime ✓</span>
      </div>
      <div className="border border-[rgba(255,255,255,0.1)] p-4 mb-5">
        <div className="space-y-2.5">
          {PERKS.map(([icon, text], i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-sm flex-shrink-0">{icon}</span>
              <span className="text-[rgba(255,255,255,0.65)] text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>
      {LIVE_LINK ? (
        <a href={LIVE_LINK} target="_blank" rel="noreferrer"
          className="flex items-center justify-center gap-3 bg-white hover:bg-gray-200 transition-colors text-black font-bold uppercase tracking-widest text-sm px-6 py-4 rounded-none w-full">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse"/>
          REJOINDRE LIVE LA
        </a>
      ) : (
        <div className="border border-[rgba(255,255,255,0.1)] px-5 py-4 text-center">
          <p className="text-white text-xs uppercase tracking-widest font-mono mb-2">25 Dawout · 8PM</p>
          <p className="text-[rgba(255,255,255,0.4)] text-sm">Retounen sou paj sa a lè live la kòmanse.</p>
        </div>
      )}
    </Layout>
  );
}

export default function LivePage() {
  const [stage, setStage] = useState<Stage>("gate");
  if (stage === "gate")    return <Gate onResult={setStage} />;
  if (stage === "upgrade") return <UpgradePrompt />;
  return <LiveAccess />;
}
