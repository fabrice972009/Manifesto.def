"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const BASE = "https://pub-3349eab07880460384bd522979faa46f.r2.dev";

interface Track { title: string; url: string; }
interface Album { id: string; title: string; year: string; cover: string|null; tracks: Track[]; zipUrl: string; }

const ALBUMS: Album[] = [
  { id:"manifesto", title:"Manifesto", year:"2026", cover:"/cover.png", zipUrl:`${BASE}/manifesto/Manifesto-Def-Fondamantal.zip`,
    tracks:[
      {title:"Manifesto",url:`${BASE}/manifesto/01%20-%20Manifesto.mp3`},
      {title:"Chapit 5",url:`${BASE}/manifesto/02%20-%20Chapit%205.mp3`},
      {title:"Pa Anpil",url:`${BASE}/manifesto/03%20-%20Pa%20Anpil.mp3`},
      {title:"M La",url:`${BASE}/manifesto/04%20-%20M%20La.mp3`},
      {title:"Viktim Ou Koupab",url:`${BASE}/manifesto/05%20-%20Viktim%20Ou%20Koupab.mp3`},
      {title:"Rhod Trip",url:`${BASE}/manifesto/06%20-%20Rhod%20Trip.mp3`},
      {title:"Se Pa Lavi M Sa",url:`${BASE}/manifesto/07%20-%20Se%20Pa%20Lavi%20M%20Sa.mp3`},
      {title:"Sove Rap",url:`${BASE}/manifesto/08%20-%20Sove%20Rap.mp3`},
      {title:"A La Diego",url:`${BASE}/manifesto/09%20-%20A%20La%20Diego.mp3`},
      {title:"Dènye Mesaj",url:`${BASE}/manifesto/10%20-%20D%C3%A8nye%20Mesaj.mp3`},
    ]},
  { id:"revakplim", title:"Rèv ak Plim", year:"2018", cover:"/revakplim-cover.jpg", zipUrl:`${BASE}/revakplim/Rev-Ak-Plim.zip`,
    tracks:[
      {title:"Intro",url:`${BASE}/revakplim/01-Intro.mp3`},
      {title:"Pou'm te rive la",url:`${BASE}/revakplim/02-Pou%27m%20te%20rive%20la.mp3`},
      {title:"Reflèm",url:`${BASE}/revakplim/03-Refl%C3%A8m.mp3`},
      {title:"TTR ft Bobby Da Last One",url:`${BASE}/revakplim/04-TTR%20%28Time%20to%20rap%29%20ft%20Bobby%20Da%20Last%20One.mp3`},
      {title:"Rèv ak Plim",url:`${BASE}/revakplim/05-R%C3%A8v%20ak%20Plim.mp3`},
      {title:"Parano",url:`${BASE}/revakplim/06-Parano.mp3`},
      {title:"Melanko Rim",url:`${BASE}/revakplim/07-Melanko%20Rim.mp3`},
      {title:"Kraze Cd'm",url:`${BASE}/revakplim/08-Kraze%20Cd%27m.mp3`},
      {title:"Nothin",url:`${BASE}/revakplim/09-Nothin.mp3`},
      {title:"Levangil Geto",url:`${BASE}/revakplim/10-Levangil%20Geto.mp3`},
      {title:"Machann Sab ft Samantha Normil",url:`${BASE}/revakplim/11-Machann%20Sab%20Ft%20Samantha%20Normil.mp3`},
      {title:"Pa gen Rèv ki Two Gran ft Da.G",url:`${BASE}/revakplim/12-Pa%20gen%20Rev%20ki%20Two%20Gran%20ft%20Da.G.mp3`},
      {title:"Outro",url:`${BASE}/revakplim/13-Outro.mp3`},
    ]},
  { id:"eskal1", title:"Eskal I", year:"2022", cover:"/eskal1-cover.jpg", zipUrl:`${BASE}/eskal1/Eskal-I.zip`,
    tracks:[
      {title:"Yon Ti Kounouk (Intro)",url:`${BASE}/eskal1/01%20-%20Yon%20Ti%20Kounouk%20%28Intro%29.mp3`},
      {title:"Plent",url:`${BASE}/eskal1/02%20-%20Plent.mp3`},
      {title:"Chimen Pèdi Tan",url:`${BASE}/eskal1/03%20-%20Chimen%20P%C3%A8di%20Tan.mp3`},
      {title:"Rap Pa m",url:`${BASE}/eskal1/04%20-%20Rap%20Pa%20m.mp3`},
      {title:"Nou 2 P Ap Mouri La",url:`${BASE}/eskal1/05%20-%20Nou%202%20P%20Ap%20Mouri%20La.mp3`},
      {title:"San Papye",url:`${BASE}/eskal1/06%20-%20San%20Papye.mp3`},
      {title:"Alice",url:`${BASE}/eskal1/07%20-%20Alice.mp3`},
      {title:"M P Ap Janm Bliye Ou",url:`${BASE}/eskal1/08%20-%20M%20P%20Ap%20Janm%20Bliye%20Ou.mp3`},
      {title:"Neverland",url:`${BASE}/eskal1/09%20-%20Neverland.mp3`},
      {title:"Denyè Pasaje",url:`${BASE}/eskal1/10%20-%20Deny%C3%A8%20Pasaje.mp3`},
      {title:"Demen",url:`${BASE}/eskal1/11%20-%20Demen.mp3`},
      {title:"Nan Pakou M (Outro)",url:`${BASE}/eskal1/12%20-%20Nan%20Pakou%20M%20%28Outro%29.mp3`},
    ]},
  { id:"ouvesekla", title:"Ouve Sek La", year:"2023", cover:"/ouvesekla-cover.jpg", zipUrl:`${BASE}/ovesekla/Ouve-Sek-La.zip`,
    tracks:[
      {title:"Ouve Sek La",url:`${BASE}/ovesekla/01%20-%20Ouve%20Sek%20La.mp3`},
      {title:"Rap Pis Ke Sa",url:`${BASE}/ovesekla/02%20-%20Rap%20Pis%20Ke%20Sa.mp3`},
      {title:"Show Skillz",url:`${BASE}/ovesekla/03%20-%20Show%20Skillz.mp3`},
      {title:"Levanjil Getho a",url:`${BASE}/ovesekla/04%20-%20Levanjil%20Getho%20a.mp3`},
      {title:"Se Konsa Sa Ye",url:`${BASE}/ovesekla/07%20-%20Se%20Konsa%20Sa%20Ye.mp3`},
      {title:"Sou Map La",url:`${BASE}/ovesekla/08%20-%20Sou%20Map%20La.mp3`},
      {title:"Konvesasyon",url:`${BASE}/ovesekla/Konvesasyon.mp3`},
      {title:"Kranp Ke Vwa",url:`${BASE}/ovesekla/Kranp%20Ke%20Vwa.mp3`},
      {title:"Solo Ashh",url:`${BASE}/ovesekla/Solo%20Ashh.mp3`},
      {title:"Sou Beton",url:`${BASE}/ovesekla/Sou%20Beton.mp3`},
      {title:"Malade",url:`${BASE}/ovesekla/Malade.mp3`},
      {title:"Pakou On Bal",url:`${BASE}/ovesekla/Pakou%20On%20Bal.mp3`},
    ]},
  { id:"mixtape4", title:"#4 Mixtape", year:"2021", cover:"/mixtape4-cover.jpg", zipUrl:`${BASE}/mixtape4/4-Mixtape.zip`,
    tracks:[
      {title:"Ak on Gyal",url:`${BASE}/mixtape4/Ak%20on%20Gyal.mp3`},
      {title:"Rekadraj",url:`${BASE}/mixtape4/Rekadraj.mp3`},
      {title:"Mi-Thug",url:`${BASE}/mixtape4/Mi-Thug.mp3`},
      {title:"Jou m kite Rap",url:`${BASE}/mixtape4/Jou%20m%20kite%20Rap.mp3`},
      {title:"Listwa Be l",url:`${BASE}/mixtape4/Listwa%20Be%20l.mp3`},
      {title:"Mouri an Paix",url:`${BASE}/mixtape4/Mouri%20an%20Paix.mp3`},
      {title:"Aswe a",url:`${BASE}/mixtape4/Aswe%20a.mp3`},
      {title:"Devan Jem",url:`${BASE}/mixtape4/Devan%20Jem.mp3`},
      {title:"Numero 0",url:`${BASE}/mixtape4/Numero%200.mp3`},
      {title:"Nan Pakoum",url:`${BASE}/mixtape4/Nan%20Pakoum.mp3`},
      {title:"Ouve Se k la",url:`${BASE}/mixtape4/Ouve%20Se%20k%20la.mp3`},
      {title:"TFKL",url:`${BASE}/mixtape4/TFKL.mp3`},
      {title:"Kasparov",url:`${BASE}/mixtape4/Kasparov.mp3`},
      {title:"Papa",url:`${BASE}/mixtape4/Papa.mp3`},
    ]},
];

function fmt(s: number) { return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`; }

function Gate({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail]     = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault(); setError(""); setLoading(true);
    const res  = await fetch("/api/verify-collection", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ email }) });
    const data = await res.json();
    setLoading(false);
    if (data.valid) onSuccess();
    else setError("Imel sa a pa nan lis la. Verifye epi eseye ankò.");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{background:"radial-gradient(ellipse at 50% 20%, rgba(107,15,18,0.4) 0%, rgba(10,7,5,0) 60%)"}}>
      <div className="relative w-48 aspect-square mb-8 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.2)] shadow-[0_0_80px_rgba(107,15,18,0.5)]">
        <Image src="/cover.png" alt="Manifesto" fill className="object-cover"/>
      </div>
      <p className="font-mono text-[#B8430E] text-[10px] uppercase tracking-[0.3em] mb-2">Koleksyon Konplè</p>
      <h1 className="font-display text-[#E8DFC8] text-3xl mb-2">MANIFESTO + DISKOGRAFI</h1>
      <p className="font-display text-[#D4B483] text-xs tracking-[0.2em] mb-6">DEF FONDAMANTAL</p>
      <p className="text-[rgba(232,223,200,0.55)] text-sm max-w-xs mb-8 leading-relaxed">
        Antre imel ou te itilize pou achte koleksyon konplè a.
      </p>
      <form onSubmit={submit} className="w-full max-w-sm flex flex-col gap-3">
        <input type="email" required placeholder="imel@egzanp.com" value={email}
          onChange={e=>setEmail(e.target.value)}
          className="bg-[#1C1410] border border-[rgba(212,180,131,0.3)] text-[#E8DFC8] placeholder:text-[rgba(232,223,200,0.3)] px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-[#B8430E]"/>
        <button type="submit" disabled={loading}
          className="bg-[#6B0F12] hover:bg-[#B8430E] transition-colors text-[#E8DFC8] font-display tracking-widest uppercase text-sm py-3 rounded-sm disabled:opacity-50">
          {loading ? "N ap verifye…" : "Jwenn Aksè"}
        </button>
        {error && <p className="text-[#B8430E] text-xs text-center">{error}</p>}
      </form>
      <a href="/" className="text-[rgba(232,223,200,0.25)] text-xs mt-8 underline hover:text-[#B8430E]">Retounen</a>
    </div>
  );
}

function AlbumSection({ album, globalAudio, currentUrl, onPlay }: {
  album: Album;
  globalAudio: HTMLAudioElement|null;
  currentUrl: string;
  onPlay: (url: string, albumId: string, trackIdx: number) => void;
}) {
  const isActive = album.tracks.some(t => t.url === currentUrl);
  const [open, setOpen] = useState(album.id === "manifesto");

  return (
    <div className="mb-6 bg-[#1C1410] border border-[rgba(212,180,131,0.1)] rounded-sm overflow-hidden">
      {/* Album header */}
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 hover:bg-[rgba(212,180,131,0.03)] transition-colors">
        <div className="relative w-14 h-14 flex-shrink-0 rounded-sm overflow-hidden border border-[rgba(212,180,131,0.15)]">
          {album.cover
            ? <Image src={album.cover} alt={album.title} fill className="object-cover"/>
            : <div className="w-full h-full bg-[#0A0705] flex items-center justify-center text-lg opacity-25">🎵</div>
          }
        </div>
        <div className="flex-1 text-left">
          <p className={`font-display text-sm ${isActive ? "text-[#D4B483]" : "text-[#E8DFC8]"}`}>{album.title}</p>
          <p className="font-mono text-[rgba(212,180,131,0.4)] text-[10px]">{album.year} · {album.tracks.length} chante</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button onClick={e=>{e.stopPropagation(); onPlay(album.tracks[0].url, album.id, 0);}}
            className="w-9 h-9 rounded-full bg-[#6B0F12] hover:bg-[#B8430E] transition-colors flex items-center justify-center text-[#E8DFC8] text-sm">
            {isActive ? "▶" : "▶"}
          </button>
          <a href={album.zipUrl} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}
            className="font-mono text-[rgba(212,180,131,0.4)] hover:text-[#D4B483] text-[10px] uppercase tracking-wider transition-colors">
            ⬇ ZIP
          </a>
          <span className="text-[rgba(212,180,131,0.3)] text-xs">{open ? "▲" : "▼"}</span>
        </div>
      </button>

      {/* Tracklist */}
      {open && (
        <div className="border-t border-[rgba(212,180,131,0.08)]">
          {album.tracks.map((t,i) => {
            const isPlaying = t.url === currentUrl;
            return (
              <button key={i} onClick={() => onPlay(t.url, album.id, i)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors text-left group
                  ${isPlaying ? "bg-[rgba(107,15,18,0.3)]" : "hover:bg-[rgba(212,180,131,0.04)]"}`}>
                <span className={`font-mono text-[10px] w-6 flex-shrink-0 text-center ${isPlaying ? "text-[#B8430E]" : "text-[rgba(212,180,131,0.3)] group-hover:text-[rgba(212,180,131,0.6)]"}`}>
                  {isPlaying ? "▶" : String(i+1).padStart(2,"0")}
                </span>
                <span className={`flex-1 text-xs ${isPlaying ? "text-[#E8DFC8] font-display" : "text-[rgba(232,223,200,0.6)] group-hover:text-[#E8DFC8]"}`}>
                  {t.title}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CollectionPlayer() {
  const audioRef              = useRef<HTMLAudioElement|null>(null);
  const queueRef              = useRef<Track[]>([]);
  const queueIdxRef           = useRef(0);
  const [currentUrl, setCurrentUrl] = useState("");
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentTrack = ALBUMS.flatMap(a=>a.tracks).find(t=>t.url===currentUrl);
  const currentAlbum = ALBUMS.find(a=>a.tracks.some(t=>t.url===currentUrl));

  useEffect(() => {
    const a = new Audio();
    a.addEventListener("timeupdate", () => {
      setElapsed(a.currentTime); setDuration(a.duration||0);
      setProgress(a.duration?(a.currentTime/a.duration)*100:0);
    });
    a.addEventListener("ended", () => {
      const n = queueIdxRef.current+1;
      if (n < queueRef.current.length) playFromQueue(n);
    });
    audioRef.current = a;
    return () => { a.pause(); };
  }, []);

  function playFromQueue(i: number) {
    const a = audioRef.current!;
    const t = queueRef.current[i];
    if (!t) return;
    queueIdxRef.current = i;
    a.src = t.url;
    a.play().catch(()=>{});
    setCurrentUrl(t.url); setPlaying(true); setElapsed(0); setProgress(0);
  }

  function handlePlay(url: string, albumId: string, trackIdx: number) {
    const album = ALBUMS.find(a=>a.id===albumId)!;
    queueRef.current = album.tracks;
    playFromQueue(trackIdx);
  }

  function togglePlay() {
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
    <div className="min-h-screen pb-28" style={{background:"radial-gradient(ellipse at 50% 0%, rgba(107,15,18,0.25) 0%, rgba(10,7,5,0) 45%)"}}>
      <div className="max-w-lg mx-auto px-4 pt-12">
        <p className="font-mono text-[#B8430E] text-[10px] uppercase tracking-[0.3em] mb-1 text-center">Koleksyon Konplè</p>
        <h1 className="font-display text-[#E8DFC8] text-2xl text-center mb-1">DEF FONDAMANTAL</h1>
        <p className="text-[rgba(212,180,131,0.4)] text-xs font-mono text-center mb-10">5 album · Tout dwa rezève</p>

        {ALBUMS.map(a => (
          <AlbumSection key={a.id} album={a} globalAudio={audioRef.current}
            currentUrl={currentUrl} onPlay={handlePlay}/>
        ))}
      </div>

      {/* Bottom bar */}
      {currentUrl && (
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
                {currentAlbum?.cover
                  ? <Image src={currentAlbum.cover} alt={currentAlbum.title} fill className="object-cover"/>
                  : <div className="w-full h-full bg-[#1C1410]"/>
                }
              </div>
              <div className="min-w-0">
                <p className="font-display text-[#E8DFC8] text-sm truncate">{currentTrack?.title}</p>
                <p className="font-mono text-[rgba(212,180,131,0.45)] text-[10px] truncate">{currentAlbum?.title} · Def Fondamantal</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button onClick={()=>{const n=queueIdxRef.current-1; if(n>=0) playFromQueue(n);}} className="text-[rgba(212,180,131,0.5)] hover:text-[#E8DFC8] text-lg">⏮</button>
              <button onClick={togglePlay} className="w-10 h-10 rounded-full bg-[#E8DFC8] hover:bg-white transition-colors flex items-center justify-center text-[#0A0705] text-base font-bold">
                {playing?"⏸":"▶"}
              </button>
              <button onClick={()=>{const n=queueIdxRef.current+1; if(n<queueRef.current.length) playFromQueue(n);}} className="text-[rgba(212,180,131,0.5)] hover:text-[#E8DFC8] text-lg">⏭</button>
            </div>
            <div className="flex-1 flex justify-end">
              <span className="font-mono text-[rgba(212,180,131,0.4)] text-[10px] whitespace-nowrap">{fmt(elapsed)}{duration?` / ${fmt(duration)}`:""}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CollectionPage() {
  const [unlocked, setUnlocked] = useState(false);
  return unlocked
    ? <CollectionPlayer />
    : <Gate onSuccess={() => setUnlocked(true)} />;
}
