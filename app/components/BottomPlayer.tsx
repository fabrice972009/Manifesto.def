"use client";
import { useState, useRef, useEffect, createContext, useContext, useCallback } from "react";
import Image from "next/image";

interface Track { title: string; url: string; cover: string | null; albumTitle: string; }
interface PlayerCtx {
  playAll: (tracks: Track[], startIdx: number) => void;
  currentUrl: string;
  playing: boolean;
}
const Ctx = createContext<PlayerCtx | null>(null);
export function usePlayer() { return useContext(Ctx)!; }
function fmt(s: number) { return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`; }

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef              = useRef<HTMLAudioElement|null>(null);
  const queueRef              = useRef<Track[]>([]);
  const queueIdxRef           = useRef(0);
  const [current, setCurrent] = useState<Track|null>(null);
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration,setDuration]= useState(0);
  const [progress,setProgress]= useState(0);

  const loadTrack = useCallback((i: number) => {
    const a = audioRef.current!;
    const t = queueRef.current[i];
    if (!t) return;
    queueIdxRef.current = i;
    a.src = t.url || "";
    a.play().catch(()=>{});
    setCurrent(t); setPlaying(true); setElapsed(0); setProgress(0);
  }, []);

  useEffect(() => {
    const a = new Audio();
    a.addEventListener("timeupdate", () => {
      setElapsed(a.currentTime);
      setDuration(a.duration||0);
      setProgress(a.duration?(a.currentTime/a.duration)*100:0);
    });
    a.addEventListener("ended", () => {
      const n = queueIdxRef.current+1;
      if (n < queueRef.current.length) loadTrack(n);
    });
    audioRef.current = a;
    return () => { a.pause(); };
  }, [loadTrack]);

  const playAll = useCallback((tracks: Track[], idx: number) => {
    queueRef.current = tracks; loadTrack(idx);
  }, [loadTrack]);

  function toggle() {
    const a = audioRef.current!;
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
    <Ctx.Provider value={{ playAll, currentUrl: current?.url||"", playing }}>
      {children}
      {current && (
        <div className="fixed bottom-0 left-0 right-0 z-50" style={{background:"linear-gradient(to top,#0A0705,rgba(10,7,5,0.97))",borderTop:"1px solid rgba(212,180,131,0.15)"}}>
          <div className="w-full h-1 bg-[rgba(212,180,131,0.1)] cursor-pointer group" onClick={scrub}>
            <div className="h-full bg-[#B8430E] group-hover:bg-[#D4B483] transition-colors relative" style={{width:`${progress}%`}}>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#E8DFC8] opacity-0 group-hover:opacity-100 transition-opacity"/>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative w-11 h-11 flex-shrink-0 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)]">
                {current.cover
                  ? <Image src={current.cover} alt={current.albumTitle} fill className="object-cover"/>
                  : <div className="w-full h-full bg-[#1C1410] flex items-center justify-center opacity-30">🎵</div>
                }
              </div>
              <div className="min-w-0">
                <p className="font-display text-[#E8DFC8] text-sm truncate">{current.title}</p>
                <p className="font-mono text-[rgba(212,180,131,0.45)] text-[10px] truncate">{current.albumTitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button onClick={()=>loadTrack(Math.max(0,queueIdxRef.current-1))} className="text-[rgba(212,180,131,0.5)] hover:text-[#E8DFC8] transition-colors text-lg">⏮</button>
              <button onClick={toggle} className="w-10 h-10 rounded-full bg-[#E8DFC8] hover:bg-white transition-colors flex items-center justify-center text-[#0A0705] text-base font-bold">
                {playing?"⏸":"▶"}
              </button>
              <button onClick={()=>loadTrack(Math.min(queueRef.current.length-1,queueIdxRef.current+1))} className="text-[rgba(212,180,131,0.5)] hover:text-[#E8DFC8] transition-colors text-lg">⏭</button>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="font-mono text-[rgba(212,180,131,0.4)] text-[10px] whitespace-nowrap">{fmt(elapsed)}{duration?` / ${fmt(duration)}`:""}</span>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
