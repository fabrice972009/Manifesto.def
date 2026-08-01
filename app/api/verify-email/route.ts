import { NextRequest, NextResponse } from "next/server";

// $20 buyers — Manifesto sèlman (34 imel)
const MANIFESTO_BUYERS = new Set([
  "shadlynejoseph6@gmail.com",
  "samstanleypaul26@gmail.com",
  "breensvilce@myyahoo.com",
  "gillesjunior509@icloud.com",
  "kevinssouverain@gmail.com",
  "maxjimmy78@gmail.com",
  "jvirgile99@yahoo.com",
  "yversontoutpuissant@icloud.com",
  "frantz1208@icloud.com",
  "ojuleswilfrid2005@gmail.com",
  "duilensleyy@gmail.com",
  "wedsonlouispierre@yahoo.com",
  "abednegov79@gmail.com",
  "claudeprincebryan@gmail.com",
  "gassendyn@gmail.com",
  "bjohn90@icloud.com",
  "williamsoncler10@gmail.com",
  "meuzeoodsen95@gmail.com",
  "luxamy00@gmail.com",
  "bethsaidaisrael648@gmail.com",
  "majestikplenkob@gmail.com",
  "jocharlestin99@gmail.com",
  "yliaderleclerc9@gmail.com",
  "nicolasjeanmarc@icloud.com",
  "meson_posts.8m@icloud.com",
  "willydorceus0@ocloud.com",
  "cardocadesty@gmail.com",
  "ffritzline@gmail.com",
  "csidoffmacena@gmail.com",
  "dumerviljeancaderson44@gmail.com",
  "paulmossanto087@icloud.com",
  "andieloanevil1995@gmail.com",
  "davyray94@gmail.com",
  "wensleypierre419@gamil.com",
  "manifesto.vip20@gmail.com", // ← dummy $20
]);

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || typeof email !== "string") return NextResponse.json({ valid: false });
  return NextResponse.json({ valid: MANIFESTO_BUYERS.has(email.trim().toLowerCase()) });
}
