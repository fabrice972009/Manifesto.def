"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const BASE = "https://pub-3349eab07880460384bd522979faa46f.r2.dev";

interface Track { title: string; url: string; }
interface Album { id:string; title:string; year:string; cover:string|null; tracks:Track[]; zipUrl:string; }

const ALBUMS: Album[] = [
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

function AlbumCard({ album }: { album: Album }) {
  const audioRef=useRef<HTMLAudioElement|null>(null);
  const [open,setOpen]=useState(false);
  const [playing,setPlaying]=useState(false);
  const [idx,setIdx]=useState(0);
  const [progress,setProgress]=useState(0);
  const [elapsed,setElapsed]=useState(0);
  const [duration,setDuration]=useState(0);

  useEffect(()=>{
    const a=new Audio();
    const onTime=()=>{setElapsed(a.currentTime);setDuration(a.duration||0);setProgress(a.duration?(a.currentTime/a.duration)*100:0);};
    a.addEventListener("timeupdate",onTime);
    audioRef.current=a;
    return()=>{a.pause();a.removeEventListener("timeupdate",onTime);};
  },[]);

  function loadAndPlay(i:number){
    const a=audioRef.current!;
    a.src=album.tracks[i].url;
    a.play().catch(()=>{});
    setIdx(i);setProgress(0);setElapsed(0);setPlaying(true);setOpen(true);
    a.onended=()=>loadAndPlay((i+1)%album.tracks.length);
  }
  function togglePlay(){
    const a=audioRef.current!;
    if(!open){loadAndPlay(0);return;}
    if(playing){a.pause();setPlaying(false);}else{a.play().catch(()=>{});setPlaying(true);}
  }
  const fmt=(s:number)=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;

  return (
    <div className="bg-[#1C1410] border border-[rgba(212,180,131,0.1)] rounded-sm overflow-hidden hover:border-[rgba(212,180,131,0.25)] transition-colors">
      <div className="relative aspect-square cursor-pointer group" onClick={togglePlay}>
        {album.cover?<Image src={album.cover} alt={album.title} fill className="object-cover"/>
          :<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1C1410] to-[#0A0705]"><span className="text-3xl opacity-25">🎵</span></div>}
        <div className="absolute inset-0 bg-[rgba(10,7,5,0.4)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#6B0F12] flex items-center justify-center text-xl">{playing?"⏸":"▶"}</div>
        </div>
      </div>
      <div className="p-4">
        <p className="font-display text-[#E8DFC8] text-sm mb-1">{album.title}</p>
        <p className="font-mono text-[rgba(212,180,131,0.4)] text-xs mb-4">{album.year} · {album.tracks.length} chante</p>
        {open&&(
          <div className="mb-4 bg-[rgba(10,7,5,0.6)] border border-[rgba(212,180,131,0.1)] rounded-sm p-3">
            <p className="font-mono text-[#B8430E] text-[10px] uppercase tracking-widest mb-1">K ap jwe</p>
            <p className="text-[rgba(232,223,200,0.8)] text-xs mb-3 truncate">{album.tracks[idx].title}</p>
            <div className="flex items-center gap-2 mb-3">
              <button onClick={()=>loadAndPlay((idx-1+album.tracks.length)%album.tracks.length)} className="text-[#D4B483] hover:text-[#B8430E]">⏮</button>
              <button onClick={togglePlay} className="text-[#D4B483] hover:text-[#B8430E]">{playing?"⏸":"▶"}</button>
              <button onClick={()=>loadAndPlay((idx+1)%album.tracks.length)} className="text-[#D4B483] hover:text-[#B8430E]">⏭</button>
              <div className="flex-1 h-1 bg-[rgba(212,180,131,0.1)] rounded cursor-pointer"
                onClick={e=>{const a=audioRef.current;if(!a||!duration)return;const p=(e.clientX-e.currentTarget.getBoundingClientRect().left)/e.currentTarget.offsetWidth;a.currentTime=p*duration;}}>
                <div className="h-full bg-[#B8430E] rounded" style={{width:`${progress}%`}}/>
              </div>
              <span className="font-mono text-[rgba(212,180,131,0.4)] text-[10px] whitespace-nowrap">{fmt(elapsed)}{duration?` / ${fmt(duration)}`:""}</span>
            </div>
            <div className="max-h-28 overflow-y-auto space-y-0.5">
              {album.tracks.map((t,i)=>(
                <button key={i} onClick={()=>loadAndPlay(i)}
                  className={`w-full text-left flex gap-2 px-2 py-1 rounded text-xs transition-colors ${i===idx?"bg-[rgba(107,15,18,0.3)] text-[#E8DFC8]":"text-[rgba(232,223,200,0.45)] hover:text-[#E8DFC8] hover:bg-[rgba(212,180,131,0.05)]"}`}>
                  <span className="font-mono text-[#B8430E] w-5 flex-shrink-0">{String(i+1).padStart(2,"0")}</span>{t.title}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <button onClick={togglePlay} className={`flex-1 border py-2 rounded-sm font-display text-[11px] tracking-wider uppercase transition-colors ${playing?"bg-[rgba(107,15,18,0.3)] border-[#B8430E] text-[#E8DFC8]":"border-[rgba(212,180,131,0.2)] text-[#D4B483] hover:border-[#B8430E]"}`}>
            {playing?"⏸ Poze":"▶ Koute"}
          </button>
          <a href={album.zipUrl} target="_blank" rel="noreferrer"
            className="flex-1 bg-[#6B0F12] hover:bg-[#B8430E] transition-colors text-[#E8DFC8] py-2 rounded-sm font-display text-[11px] tracking-wider uppercase text-center">
            ⬇ Telechaje
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MersiPage() {
  return (
    <main>
      <section className="relative min-h-[55vh] flex flex-col items-center justify-center px-6 py-20 text-center"
        style={{background:"radial-gradient(ellipse at 50% 0%, rgba(107,15,18,0.4) 0%, rgba(10,7,5,0) 65%)"}}>
        <div className="w-20 h-20 rounded-full bg-[#1C1410] border border-[rgba(212,180,131,0.2)] flex items-center justify-center text-4xl mb-8">🙏</div>
        <p className="font-mono text-[#B8430E] text-xs tracking-[0.35em] uppercase mb-4">Prekomand konfime</p>
        <h1 className="font-display text-[#E8DFC8] text-4xl md:text-5xl mb-8">Mèsi paske w prekomande</h1>
        <div className="max-w-lg bg-[rgba(28,20,16,0.6)] border border-[rgba(212,180,131,0.15)] border-l-[3px] border-l-[#6B0F12] rounded-sm p-7 text-left">
          <p className="text-[rgba(232,223,200,0.8)] text-sm leading-relaxed mb-3">Mèsi paske w te prekomande album <span className="font-display text-[#D4B483]">MANIFESTO</span> a. Konfyans ou se karburan pwojè sa a.</p>
          <p className="text-[rgba(232,223,200,0.8)] text-sm leading-relaxed mb-3">Pandan tan sa, kontinye koute epi telechaje tout mizik Def Fondamantal yo anba a — gratis, pou ou.</p>
          <p className="text-[rgba(212,180,131,0.7)] text-sm italic">Manifesto lage nèt <span className="font-display not-italic text-[#D4B483]">31 Jiyè</span>. Nou pral avèti ou.</p>
        </div>
        <a href="/manifesto" className="mt-8 inline-block bg-[#6B0F12] hover:bg-[#B8430E] transition-colors text-[#E8DFC8] font-display tracking-widest uppercase text-sm px-8 py-3 rounded-sm">
          Koute Manifesto →
        </a>
      </section>
      <section className="px-6 py-16 border-t border-[rgba(212,180,131,0.1)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono text-[#B8430E] text-xs tracking-[0.35em] uppercase mb-4">Pou ou</p>
            <h2 className="font-display text-[#E8DFC8] text-3xl mb-4">Diskografi Def Fondamantal</h2>
            <p className="text-[rgba(232,223,200,0.5)] text-sm max-w-md mx-auto">Koute epi telechaje tout album yo gratis.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALBUMS.map(a=><AlbumCard key={a.id} album={a}/>)}
          </div>
        </div>
      </section>
      <footer className="px-6 py-12 text-center border-t border-[rgba(212,180,131,0.1)]">
        <p className="font-display text-[#D4B483] text-xl tracking-widest mb-2">31 JIYÈ</p>
        <p className="text-[rgba(232,223,200,0.3)] text-xs font-mono uppercase tracking-[0.3em]">Manifesto lage nèt</p>
        <p className="text-[rgba(232,223,200,0.2)] text-xs mt-4">© Def Fondamantal — Tout dwa rezève</p>
      </footer>
    </main>
  );
}
