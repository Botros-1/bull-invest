/* Bull Invest — WCAG AA contrast tests for light & dark palettes. Run: node tests/contrast.test.js */
function lum(hex){ const c=hex.replace("#",""); const r=parseInt(c.substr(0,2),16)/255, g=parseInt(c.substr(2,2),16)/255, b=parseInt(c.substr(4,2),16)/255;
  const f=v=>v<=0.03928? v/12.92 : Math.pow((v+0.055)/1.055,2.4); return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); }
function ratio(a,b){ const L=lum(a), M=lum(b); return (Math.max(L,M)+0.05)/(Math.min(L,M)+0.05); }

const LIGHT = { card:"#ffffff", ink:"#0c1116", ink2:"#39424e", muted:"#5b6675", accentink:"#077a43", btn:"#077a43", onbtn:"#ffffff", bg:"#f4f6f8" };
const DARK  = { card:"#141d29", ink:"#e8eef6", ink2:"#c2ccd8", muted:"#9aa6b4", accentink:"#43dd92", btn:"#1bb46a", onbtn:"#06210f", bg:"#0b1118" };

let fail = 0;
function check(theme, p){
  const pairs = [
    ["primary text on card", p.ink, p.card],
    ["secondary text on card", p.ink2, p.card],
    ["muted text on card", p.muted, p.card],
    ["accent text on card", p.accentink, p.card],
    ["button label on button", p.onbtn, p.btn],
    ["active chip text (bg on ink)", p.bg, p.ink],
    ["focused input text (ink on card)", p.ink, p.card]
  ];
  for (const [name, fg, bg] of pairs){
    const r = ratio(fg, bg);
    const ok = r >= 4.5;
    console.log((ok ? "PASS" : "FAIL") + "  [" + theme + "] " + name + " = " + r.toFixed(2) + ":1");
    if (!ok) fail++;
  }
}
check("light", LIGHT);
check("dark", DARK);
console.log(fail === 0 ? "\n✓ All contrast pairs meet WCAG AA (4.5:1)" : "\n✗ " + fail + " contrast pair(s) below 4.5:1");
process.exit(fail === 0 ? 0 : 1);
