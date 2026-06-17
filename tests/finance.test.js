/* Bull Invest — finance engine tests (mirrors the app's FV/PMT/GOAL). Run: node tests/finance.test.js */
const round2 = x => Math.round(x * 100) / 100;
function FV(pv, pmt, a, y){ const r=(a/100)/12, n=y*12; return round2(pv*Math.pow(1+r,n) + (r===0? pmt*n : pmt*((Math.pow(1+r,n)-1)/r))); }
function PMT(p, a, y){ const i=(a/100)/12, n=y*12; return round2(i===0? p/n : p*i/(1-Math.pow(1+i,-n))); }
function GOAL(t, pv, a, y){ const r=(a/100)/12, n=y*12, f=r===0? n : ((Math.pow(1+r,n)-1)/r); return round2((t - pv*Math.pow(1+r,n))/f); }

let fail = 0;
function approx(actual, expected, tol, label){
  const ok = Math.abs(actual - expected) <= tol;
  console.log((ok ? "PASS" : "FAIL") + "  " + label + " = " + actual + (ok ? "" : " (expected ~" + expected + ")"));
  if (!ok) fail++;
}

approx(PMT(200000, 6, 30), 1199.10, 0.5, "PMT $200k @6% / 30y monthly");
approx(PMT(200000, 6, 30) * 360 - 200000, 231676.38, 5, "Total interest on that loan");
approx(PMT(12000, 0, 2), 500, 0.01, "0% loan $12k / 2y");
approx(FV(1000, 0, 10, 10), 2707.04, 1, "Lump $1000 @10% / 10y");
approx(FV(0, 100, 5, 10), 15528.23, 1, "$100/mo @5% / 10y annuity");
approx(GOAL(15528.23, 0, 5, 10), 100, 0.5, "Savings goal solves to $100/mo");
approx(FV(50000, 1000, 7, 35), 2376362.19, 2, "Retirement projection");

console.log(fail === 0 ? "\n✓ All finance tests passed" : "\n✗ " + fail + " finance test(s) failed");
process.exit(fail === 0 ? 0 : 1);
