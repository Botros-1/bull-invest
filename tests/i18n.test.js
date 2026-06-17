/* Bull Invest — i18n completeness test. Ensures every translation key has all 6 languages.
   Run: node tests/i18n.test.js */
const fs = require("fs");
const path = require("path");
const file = path.join(__dirname, "..", "bull-invest-prototype.html");
const html = fs.readFileSync(file, "utf8");

const langs = ["en", "es", "fr", "ar", "pt", "tl"];
const start = html.indexOf("const T={");
const end = html.indexOf("};", start);
if (start === -1 || end === -1) { console.log("FAIL: translation table not found"); process.exit(1); }
const body = html.slice(start, end);

const counts = {};
langs.forEach(L => { const m = body.match(new RegExp("[,{]" + L + ':"', "g")); counts[L] = m ? m.length : 0; });
console.log("Entries per language:", counts);

let fail = 0;
const values = Object.values(counts);
const allEqual = values.every(v => v === values[0] && v > 0);
if (!allEqual) { console.log("FAIL: language entry counts are not balanced"); fail++; }
else console.log("PASS: " + values[0] + " keys present in all " + langs.length + " languages");

process.exit(fail === 0 ? 0 : 1);
