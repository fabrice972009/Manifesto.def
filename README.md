# Manifesto — Def Fondamantal
## METE SIT LA LIVE (3 etap)

---

### ① GITHUB — Uploade kòd la
1. Ale sou **github.com** → konekte / kreye kont
2. Bouton vèt **"New"** → non: `manifesto-site` → **Create repository**
3. Klike **"uploading an existing file"**
4. Dezipe `manifesto-site-FINAL.zip` → drag-and-drop TOUT fichye yo → **Commit changes**

---

### ② VERCEL — Deplwaye sit la
1. Ale sou **vercel.com** → **Sign up with GitHub**
2. **New Project** → chwazi `manifesto-site` → **Import**
3. Klike **Deploy** dirèkteman — pa bezwen chanje anyen
4. Sit la ap LIVE nan ~2 minit ✅
5. Pou chanje non URL a: **Settings → Domains → Edit**
   (egzanp: `manifesto-def.vercel.app`)

> ⚠️ Pa gen okenn variable pou konfigire — sit la pwòp tankou sa a.

---

### ③ STRIPE — Konfigire redirect apre peman
1. **dashboard.stripe.com** → **Payment Links**
2. Klike sou lyen ou a → **Edit**
3. Seksyon **"After payment"** → chwazi **"Don't show Stripe confirmation page"**
4. Tape URL sa a: `https://manifesto-def.vercel.app/mersi`
5. **Save** ✅

---

## AJOUTE FICHYE AUDIO YO (pou player a mache)
Lè ou prè pou mete mizik yo anliy:
1. Supabase.com → New project → Storage → New bucket `albums` (Public ON)
2. Uploade MP3 yo → kopi URL chak chante
3. Nan `app/mersi/page.tsx` → ranplase `url: ""` ak URL reyèl yo
4. Git push → Vercel redeplwaye otomatikman

## AJOUTE 4YÈM ALBUM LAN
Nan `app/mersi/page.tsx` ak `app/page.tsx`, ajoute blòk nan tablo `ALBUMS` lan → git push.
