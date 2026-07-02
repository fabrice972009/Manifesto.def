"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const ALBUMS: Album[] = [
  {
    id: "revakplim",
    title: "Rèv ak Plim",
    year: "2018",
    cover: "/revakplim-cover.jpg",
    tracks: [
      "Intro", "Pou'm te rive la", "Reflèm",
      "TTR (Time to rap) ft Bobby Da Last One", "Rèv ak Plim",
      "Parano", "Melanko Rim", "Kraze Cd'm", "Nothin",
      "Levangil Geto", "Machann Sab ft Samantha Normil",
      "Pa gen Rèv ki Two Gran ft Da.G", "Outro",
    ],
  },
  {
    id: "eskal1",
    title: "Eskal I",
    year: "2022",
    cover: "/eskal1-cover.jpg",
    tracks: [
      "Yon Ti Kounouk (Intro)", "Plent", "Chimen Pèdi Tan", "Rap Pa m",
      "Nou 2 P Ap Mouri La", "San Papye", "Alice", "M P Ap Janm Bliye Ou",
      "Neverland", "Denyè Pasaje", "Demen", "Nan Pakou M (Outro)",
    ],
  },
  {
    id: "ouvesekla",
    title: "Ouve Sek La",
    year: "2023",
    cover: "/ouvesekla-cover.jpg",
    tracks: [
      "Ouve Sek La", "Rap Pis Ke Sa", "Show Skillz", "Levanjil Getho a",
      "Se Konsa Sa Ye", "Sou Map La", "Konvesasyon", "Kranp Ke Vwa",
      "Solo Ashh", "Sou Beton", "Malade", "Pakou On Bal",
    ],
  },
  {
    id: "mixtape4",
    title: "#4 Mixtape",
    year: "2021",
    cover: null,
    tracks: [
      "Ak on Gyal", "Rekadraj", "Mi-Thug", "Jou m kite Rap", "Listwa Be l",
      "Mouri an Paix", "Aswe a", "Devan Jem", "Numero 0", "Nan Pakoum",
      "Ouve Se k la", "TFKL", "Kasparov", "Papa",
    ],
  },
];

interface Album {
  id: string;
  title: string;
  year: string;
  cover: string | null;
  tracks: string[];
}

function AlbumCard({ album }: { album: Album }) {
  const [open, setOpen]         = useState(false);
  const [playing, setPlaying]   = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed]   = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function tick() {
    timerRef.current = setInterval(() => {
      setElapsed(prev => {
        const next = prev + 1;
        if (next >= 240) { nextTrack(); return 0; }
        setProgress((next / 240) * 100);
        return next;
      });
    }, 1000);
  }

  function togglePlay() {
    if (!open) { setOpen(true); setPlaying(true); tick(); return; }
    if (playing) { clearInterval(timerRef.current!); setPlaying(false); }
    else { setPlaying(true); tick(); }
  }

  function nextTrack() {
    clearInterval(timerRef.current!);
    setTrackIdx(i => (i + 1) % album.tracks.length);
    setElapsed(0); setProgress(0);
    setPlaying(true); tick();
  }

  function prevTrack() {
    clearInterval(timerRef.current!);
    setTrackIdx(i => (i - 1 + album.tracks.length) % album.tracks.length);
    setElapsed(0); setProgress(0);
    if (playing) tick();
  }

  useEffect(() => () => clearInterval(timerRef.current!), []);

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

  return (
    <div className="bg-char border border-parchment/10 rounded-sm overflow-hidden hover:border-parchment/25 transition-colors">
      <div className="relative aspect-square cursor-pointer group" onClick={togglePlay}>
        {album.cover ? (
          <Image src={album.cover} alt={album.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-char to-ink">
            <span className="text-3xl opacity-25">🎵</span>
            <span className="font-mono text-parchment/25 text-xs uppercase tracking-widest mt-2">Foto ap vini</span>
          </div>
        )}
        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-blood flex items-center justify-center text-xl shadow-[0_0_30px_rgba(107,15,18,0.6)]">
            {playing ? "⏸" : "▶"}
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="font-display text-bone text-sm mb-1">{album.title}</p>
        <p className="font-mono text-parchment/40 text-xs mb-4">{album.year} · {album.tracks.length} chante</p>

        {open && (
          <div className="mb-4 bg-ink/60 border border-parchment/10 rounded-sm p-3">
            <p className="font-mono text-ember text-[10px] uppercase tracking-widest mb-1">K ap jwe</p>
            <p className="text-bone/80 text-xs mb-3 truncate">{album.tracks[trackIdx]}</p>
            <div className="flex items-center gap-2">
              <button onClick={prevTrack} className="text-parchment hover:text-ember">⏮</button>
              <button onClick={togglePlay} className="text-parchment hover:text-ember">
                {playing ? "⏸" : "▶"}
              </button>
              <button onClick={nextTrack} className="text-parchment hover:text-ember">⏭</button>
              <div className="flex-1 h-1 bg-parchment/10 rounded cursor-pointer"
                onClick={e => {
                  const pct = (e.clientX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
                  setElapsed(Math.round(pct * 240));
                  setProgress(pct * 100);
                }}>
                <div className="h-full bg-ember rounded" style={{ width: `${progress}%` }} />
              </div>
              <span className="font-mono text-parchment/40 text-[10px]">{fmt(elapsed)}</span>
            </div>
          </div>
        )}

        <div className="flex gap-2">
          <button onClick={togglePlay}
            className={`flex-1 border py-2 rounded-sm font-display text-[11px] tracking-wider uppercase transition-colors
              ${playing ? "bg-blood/30 border-ember text-bone" : "border-parchment/20 text-parchment hover:border-ember hover:text-bone"}`}>
            {playing ? "⏸ Poze" : "▶ Koute"}
          </button>
          <button
            onClick={() => alert("Uploade MP3 yo sou Supabase pou aktive telechajman.")}
            className="flex-1 bg-blood hover:bg-ember transition-colors text-bone py-2 rounded-sm font-display text-[11px] tracking-wider uppercase">
            ⬇ Telechaje
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(false);

  function handlePreorder(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    window.location.href = "https://buy.stripe.com/6oU4gybnxeSxcf51H3bwk0e";
  }

  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-ember-glow overflow-hidden px-6 py-20">
        <div className="absolute inset-0 -z-10">
          <Image src="/cover.png" alt="" fill priority className="object-cover opacity-20" />
        </div>
        <div className="relative z-10 w-72 max-w-[75vw] aspect-square mb-10 shadow-[0_0_120px_rgba(107,15,18,0.5)] rounded-sm overflow-hidden border border-parchment/20">
          <Image src="/cover.png" alt="Manifesto album cover" fill className="object-cover" />
        </div>
        <p className="font-mono text-ember text-xs tracking-[0.35em] uppercase mb-3">Def Fondamantal — Album</p>
        <h1 className="font-display text-bone text-5xl md:text-7xl tracking-wide text-center mb-2">MANIFESTO</h1>
        <p className="font-display text-parchment text-sm tracking-[0.2em] mb-10">DEF FONDAMANTAL</p>

        <div className="max-w-lg w-full mb-10 bg-char/60 border border-parchment/15 border-l-[3px] border-l-blood rounded-sm p-7 backdrop-blur-sm">
          {[
            "MANIFESTO disponib kounye a nan prekomand.",
            "Prekomand sa a se pa jis yon fason pou achte yon album. Se yon fason pou patisipe nan egzistans li.",
            "Pandan plizyè mwa, mwen te travay nan lonbraj, san ekip, san gwo kanpay, san rekou. Sèlman nwit estidyo, dout, kesyonnman ak yon konviksyon: kreye yon zèv ki sanble ak mwen, san konpwomi.",
            "MANIFESTO se temwayaj vwayaj sa a. Yon deklarasyon entansyon. Yon paj ki fèmen yon chapit e ki louvri yon lòt.",
            "Lè ou prekomande album la, ou pami premye moun k ap pote pwojè sa a. Ou pèmèt yon mizik endepandan kontinye viv lib, lwen tandans yo enpoze ak algoritm yo.",
            "Mèsi a tout moun ki chwazi soutni zèv la anvan menm yo fin tande l nèt. Konfyans sa a gen yon valè imans.",
          ].map((p, i) => (
            <p key={i} className={`text-sm leading-relaxed mb-3 last:mb-0 ${i === 0 ? "font-display text-parchment" : i === 5 ? "text-parchment/70 italic" : "text-bone/75"}`}>{p}</p>
          ))}
        </div>

        <form onSubmit={handlePreorder} className="w-full max-w-sm flex flex-col gap-3">
          <button type="submit" disabled={loading}
            className="bg-blood hover:bg-ember transition-colors text-bone font-display tracking-widest uppercase text-sm py-4 rounded-sm disabled:opacity-50">
            {loading ? "Ap redirijew…" : "Prekomande Manifesto — $49.99"}
          </button>
          <p className="text-bone/40 text-xs text-center">
            Deja prekomande?{" "}
            <a href="/mersi" className="underline hover:text-ember">Al nan paj mèsi a</a>
          </p>
        </form>
        <p className="font-display text-parchment/40 text-xs tracking-[0.25em] uppercase mt-10">✦ Mouvman an kòmanse jodi a ✦</p>
      </section>

      {/* DISCOGRAPHY */}
      <section className="px-6 py-24 border-t border-parchment/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-mono text-ember text-xs tracking-[0.35em] uppercase mb-4">Diskografi</p>
            <h2 className="font-display text-bone text-3xl md:text-4xl mb-4">Zèv Pasé</h2>
            <p className="text-bone/55 max-w-md mx-auto text-sm leading-relaxed">
              Koute epi telechaje album Def Fondamantal yo gratis. Pa bezwen prekomand.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ALBUMS.map(a => <AlbumCard key={a.id} album={a} />)}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 text-center border-t border-parchment/10">
        <p className="font-display text-parchment text-2xl tracking-widest mb-2">31 JIYÈ</p>
        <p className="text-bone/35 text-xs font-mono uppercase tracking-[0.3em]">Manifesto lage nèt</p>
        <p className="text-bone/20 text-xs mt-6">© Def Fondamantal — Tout dwa rezève</p>
      </footer>
    </main>
  );
}
