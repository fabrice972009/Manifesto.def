"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

// ── FREE WINDOW — jiska Dimanch 3 Dawout 10pm New York ───────────────────
const FREE_UNTIL = new Date("2026-08-03T23:59:00-04:00").getTime();
// ─────────────────────────────────────────────────────────────────────────

const STRIPE_20  = "https://buy.stripe.com/28E4gyfDN4dTa6X0CZbwk0g";
const STRIPE_50  = "https://buy.stripe.com/6oU4gybnxeSxcf51H3bwk0e";
const BASE       = "https://pub-3349eab07880460384bd522979faa46f.r2.dev";

const MANIFESTO_TRACKS = [
  { title: "Manifesto",        url: `${BASE}/manifesto/01%20-%20Manifesto.mp3` },
  { title: "Chapit 5",         url: `${BASE}/manifesto/02%20-%20Chapit%205.mp3` },
  { title: "Pa Anpil",         url: `${BASE}/manifesto/03%20-%20Pa%20Anpil.mp3` },
  { title: "M La",             url: `${BASE}/manifesto/04%20-%20M%20La.mp3` },
  { title: "Viktim Ou Koupab", url: `${BASE}/manifesto/05%20-%20Viktim%20Ou%20Koupab.mp3` },
  { title: "Rhod Trip",        url: `${BASE}/manifesto/06%20-%20Rhod%20Trip.mp3` },
  { title: "Se Pa Lavi M Sa",  url: `${BASE}/manifesto/07%20-%20Se%20Pa%20Lavi%20M%20Sa.mp3` },
  { title: "Sove Rap",         url: `${BASE}/manifesto/08%20-%20Sove%20Rap.mp3` },
  { title: "A La Diego",       url: `${BASE}/manifesto/09%20-%20A%20La%20Diego.mp3` },
  { title: "Dènye Mesaj",      url: `${BASE}/manifesto/10%20-%20D%C3%A8nye%20Mesaj.mp3` },
];

function fmt(s: number) {
  return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
}

function fmtCountdown(ms: number) {
  const h = Math.floor(ms/3600000);
  const m = Math.floor((ms%3600000)/60000);
  const s = Math.floor((ms%60000)/1000);
  return `${String(h).padStart(2,"0")}h ${String(m).padStart(2,"0")}m ${String(s).padStart(2,"0")}s`;
}

export default function Home() {
  const audioRef              = useRef<HTMLAudioElement|null>(null);
  const [idx, setIdx]         = useState(0);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(Math.max(0, FREE_UNTIL - Date.now()));
  const isFree = timeLeft > 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, FREE_UNTIL - Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const loadAndPlay = useCallback((i: number) => {
    const a = audioRef.current!;
    a.src = MANIFESTO_TRACKS[i].url;
    a.play().catch(()=>{});
    setIdx(i); setElapsed(0); setProgress(0); setPlaying(true); setStarted(true);
    a.onended = () => loadAndPlay((i+1) % MANIFESTO_TRACKS.length);
  }, []);

  useEffect(() => {
    const a = new Audio();
    a.addEventListener("timeupdate", () => {
      setElapsed(a.currentTime);
      setDuration(a.duration||0);
      setProgress(a.duration?(a.currentTime/a.duration)*100:0);
    });
    audioRef.current = a;
    return () => { a.pause(); };
  }, []);

  function togglePlay() {
    const a = audioRef.current!;
    if (!started) { loadAndPlay(0); return; }
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play().catch(()=>{}); setPlaying(true); }
  }

  function scrub(e: React.MouseEvent<HTMLDivElement>) {
    const a = audioRef.current;
    if (!a||!duration) return;
    const pct = (e.clientX-e.currentTarget.getBoundingClientRect().left)/e.currentTarget.offsetWidth;
    a.currentTime = pct*duration;
  }

  return (
    <main className="pb-28" style={{background:"radial-gradient(ellipse at 50% 0%, rgba(107,15,18,0.35) 0%, rgba(10,7,5,0) 50%)"}}>

      {/* ── HERO ── */}
      <section className="flex flex-col items-center pt-14 pb-10 px-6 text-center">
        <div className="relative w-52 max-w-[70vw] aspect-square mb-6 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)] shadow-[0_0_80px_rgba(107,15,18,0.5)]">
          <Image src="/cover.png" alt="Manifesto" fill priority className="object-cover"/>
        </div>
        <p className="font-mono text-[#B8430E] text-[10px] uppercase tracking-[0.3em] mb-1">Def Fondamantal</p>
        <h1 className="font-display text-[#E8DFC8] text-3xl md:text-5xl tracking-wide mb-1">MANIFESTO</h1>
        <p className="font-display text-[#D4B483] text-xs tracking-[0.2em] mb-6">ALBUM · 2026</p>

        {/* Free window badge */}
        {isFree && (
          <div className="bg-[#1C1410] border border-[rgba(212,180,131,0.2)] rounded-sm px-5 py-3 mb-6 text-center">
            <p className="font-mono text-[#B8430E] text-[10px] uppercase tracking-widest mb-1">Koute gratis — disponib pou</p>
            <p className="font-display text-[#E8DFC8] text-lg tracking-widest">{fmtCountdown(timeLeft)}</p>
          </div>
        )}

        {/* ── 3 CTAs ── */}
        <div className="w-full max-w-sm flex flex-col gap-3 mb-8">
          {/* Already bought $20 */}
          <a href="/manifesto"
            className="flex items-center justify-between bg-[#1C1410] border border-[rgba(212,180,131,0.25)] hover:border-[#B8430E] text-[#D4B483] hover:text-[#E8DFC8] px-5 py-3.5 rounded-sm transition-colors group">
            <div className="text-left">
              <p className="font-display text-sm tracking-wide">Te achte Manifesto ($20)</p>
              <p className="font-mono text-[10px] text-[rgba(212,180,131,0.45)] group-hover:text-[rgba(212,180,131,0.7)]">Koute + Telechaje Manifesto</p>
            </div>
            <span className="text-lg">→</span>
          </a>

          {/* Already bought $50 */}
          <a href="/collection"
            className="flex items-center justify-between bg-[#1C1410] border border-[rgba(212,180,131,0.25)] hover:border-[#B8430E] text-[#D4B483] hover:text-[#E8DFC8] px-5 py-3.5 rounded-sm transition-colors group">
            <div className="text-left">
              <p className="font-display text-sm tracking-wide">Te achte Koleksyon ($50)</p>
              <p className="font-mono text-[10px] text-[rgba(212,180,131,0.45)] group-hover:text-[rgba(212,180,131,0.7)]">Koute + Telechaje tout album yo</p>
            </div>
            <span className="text-lg">→</span>
          </a>

          {/* Buy $20 */}
          <a href={STRIPE_20} target="_blank" rel="noreferrer"
            className="flex items-center justify-between bg-[#6B0F12] hover:bg-[#8B1515] px-5 py-3.5 rounded-sm transition-colors">
            <div className="text-left">
              <p className="font-display text-[#E8DFC8] text-sm tracking-wide">Achte Manifesto</p>
              <p className="font-mono text-[10px] text-[rgba(232,223,200,0.55)]">Telechaje album lan pou toujou</p>
            </div>
            <span className="font-display text-[#D4B483] text-sm">$20</span>
          </a>

          {/* Buy $50 */}
          <a href={STRIPE_50} target="_blank" rel="noreferrer"
            className="flex items-center justify-between bg-[rgba(184,67,14,0.15)] border border-[#B8430E] hover:bg-[rgba(184,67,14,0.25)] px-5 py-3.5 rounded-sm transition-colors">
            <div className="text-left">
              <p className="font-display text-[#E8DFC8] text-sm tracking-wide">Manifesto + Diskografi</p>
              <p className="font-mono text-[10px] text-[rgba(232,223,200,0.55)]">Tout album yo + Manifesto</p>
            </div>
            <span className="font-display text-[#D4B483] text-sm">$50</span>
          </a>
        </div>
      </section>

      {/* ── TRACKLIST ── */}
      {isFree && (
        <div className="max-w-lg mx-auto px-4 pb-6">
          <p className="font-mono text-[rgba(212,180,131,0.4)] text-[10px] uppercase tracking-widest text-center mb-4">Lis Chante</p>
          {MANIFESTO_TRACKS.map((t,i) => (
            <button key={i} onClick={() => loadAndPlay(i)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-sm transition-all text-left group
                ${i===idx && started ? "bg-[rgba(107,15,18,0.35)] border border-[rgba(184,67,14,0.4)]" : "hover:bg-[rgba(212,180,131,0.05)] border border-transparent"}`}>
              <div className="w-8 flex-shrink-0 text-center">
                {i===idx && started && playing
                  ? <span className="text-[#B8430E] text-sm">▶</span>
                  : <span className={`font-mono text-xs ${i===idx && started ? "text-[#B8430E]" : "text-[rgba(212,180,131,0.35)] group-hover:text-[rgba(212,180,131,0.6)]"}`}>{String(i+1).padStart(2,"0")}</span>
                }
              </div>
              <span className={`flex-1 text-sm ${i===idx && started ? "text-[#E8DFC8] font-display" : "text-[rgba(232,223,200,0.65)] group-hover:text-[#E8DFC8]"}`}>
                {t.title}
              </span>
              {i===idx && started && (
                <span className="font-mono text-[10px] text-[rgba(212,180,131,0.35)]">{fmt(elapsed)}</span>
              )}
            </button>
          ))}
        </div>
      )}

      {!isFree && (
        <div className="max-w-sm mx-auto px-6 text-center py-8">
          <p className="text-[rgba(232,223,200,0.5)] text-sm leading-relaxed">
            Fenèt koute gratis la fèmen. Achte album lan pou jwenn aksè pèmanan.
          </p>
        </div>
      )}

      <footer className="px-6 py-10 text-center border-t border-[rgba(212,180,131,0.1)] mt-4">
        <p className="text-[rgba(232,223,200,0.2)] text-xs">© Def Fondamantal — Tout dwa rezève</p>
      </footer>

      {/* ── BOTTOM BAR ── */}
      {started && (
        <div className="fixed bottom-0 left-0 right-0 z-50"
          style={{background:"linear-gradient(to top,#0A0705,rgba(10,7,5,0.97))",borderTop:"1px solid rgba(212,180,131,0.15)"}}>
          <div className="w-full h-1 bg-[rgba(212,180,131,0.1)] cursor-pointer group" onClick={scrub}>
            <div className="h-full bg-[#B8430E] group-hover:bg-[#D4B483] transition-colors relative" style={{width:`${progress}%`}}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#E8DFC8] opacity-0 group-hover:opacity-100 transition-opacity"/>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative w-11 h-11 flex-shrink-0 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)]">
                <Image src="/cover.png" alt="Manifesto" fill className="object-cover"/>
              </div>
              <div className="min-w-0">
                <p className="font-display text-[#E8DFC8] text-sm truncate">{MANIFESTO_TRACKS[idx].title}</p>
                <p className="font-mono text-[rgba(212,180,131,0.45)] text-[10px]">Def Fondamantal</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button onClick={()=>loadAndPlay((idx-1+MANIFESTO_TRACKS.length)%MANIFESTO_TRACKS.length)} className="text-[rgba(212,180,131,0.5)] hover:text-[#E8DFC8] transition-colors text-lg">⏮</button>
              <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-[#E8DFC8] hover:bg-white transition-colors flex items-center justify-center text-[#0A0705] text-base font-bold">
                {playing?"⏸":"▶"}
              </button>
              <button onClick={()=>loadAndPlay((idx+1)%MANIFESTO_TRACKS.length)} className="text-[rgba(212,180,131,0.5)] hover:text-[#E8DFC8] transition-colors text-lg">⏭</button>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="font-mono text-[rgba(212,180,131,0.4)] text-[10px] whitespace-nowrap">
                {fmt(elapsed)}{duration?` / ${fmt(duration)}`:""}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Play prompt */}
      {!started && isFree && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <button onClick={()=>loadAndPlay(0)}
            className="bg-[#6B0F12] hover:bg-[#B8430E] transition-colors text-[#E8DFC8] font-display tracking-widest uppercase text-sm px-8 py-3 rounded-full shadow-[0_0_30px_rgba(107,15,18,0.5)]">
            ▶ Kòmanse Koute
          </button>
        </div>
      )}
    </main>
  );
}
