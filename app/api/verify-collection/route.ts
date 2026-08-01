import { NextRequest, NextResponse } from "next/server";

// $50 buyers — Manifesto + Diskografi (34 imel)
const COLLECTION_BUYERS = new Set([
  "alyngilet@gmail.com",
  "jeanandersen498@gmail.com",
  "skesnove@gmail.com",
  "milcentrolp6@gmail.com",
  "stehmoc7@icloud.com",
  "coast.squinty_2n@icloud.com",
  "babasdiof@gmail.com",
  "louisemabob@gmail.com",
  "bethsaidaisrael648@gmail.com",
  "cheryrivaldo64@gmail.com",
  "levelprm@gmail.com",
  "pierredjeyson6@gmail.com",
  "benjaminfarley55@yahoo.fr",
  "vkervens97@gmail.com",
  "alphonsedorvilus@gmail.com",
  "wildsaintcyr@gmail.com",
  "formonvilcliford81@gmail.com",
  "clover_nome.3t@icloud.com",
  "jamesvico92@gmail.com",
  "johnwoodidorphyl@gmail.com",
  "makensonjassinthe264@gmail.com",
  "gilleslesly1@gmail.com",
  "derismasmith69@gmail.com",
  "charlesennery19@gmail.com",
  "damarahestelleprevost@gmail.com",
  "dayoolove@icloud.com",
  "merlinkasparovjean@gmail.com",
  "b.loubens10@gmail.com",
  "rodriguemesidor005@gmail.com",
  "pierremickael418@gmail.com",
  "joinicelucasjuan@gmail.com",
  "sauveurjosephisaie@gmail.com",
  "jozamasimeonjoseph@gmail.com",
  "tarzantaxi12@gmail.com",
  "manifesto.vip50@gmail.com", // ← dummy $50
]);

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || typeof email !== "string") return NextResponse.json({ valid: false });
  return NextResponse.json({ valid: COLLECTION_BUYERS.has(email.trim().toLowerCase()) });
}
