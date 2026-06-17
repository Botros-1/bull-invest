<div align="center">

# 🐂 Bull Invest

**All your money. One app.**

[![Live Demo](https://img.shields.io/badge/live%20demo-online-0ca15a)](https://botros-1.github.io/bull-invest/)
[![License: MIT](https://img.shields.io/badge/License-MIT-0ca15a.svg)](LICENSE)
[![CI](https://github.com/Botros-1/bull-invest/actions/workflows/ci.yml/badge.svg)](https://github.com/Botros-1/bull-invest/actions)
[![PWA](https://img.shields.io/badge/PWA-installable-0ca15a)](manifest.webmanifest)
[![Languages](https://img.shields.io/badge/languages-6%20(incl.%20RTL)-2563eb)](#-features)
[![Accessibility](https://img.shields.io/badge/a11y-WCAG%20AA-0ca15a)](#-testing)
[![Made with](https://img.shields.io/badge/made%20with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-f0b429)](#-tech)

A modern personal-finance super-app concept — one secure dashboard for every account a person holds (checking, savings, investing, retirement, loans) across every bank, plus zero-fee ATM access, built-in financial calculators, and a how-to video library.

**🔗 Live demo:** https://botros-1.github.io/bull-invest/

</div>

> ⚠️ **This is a front-end demo / prototype with sample data.** It is not a real bank and does not move real money. See the [Disclaimer](#-disclaimer).

---

## ✨ Features

- **One dashboard, every bank** — aggregated view of accounts from Chase, Wells Fargo, Schwab, Fidelity and more.
- **Smart categories** — retirement (401k/IRA), savings, investing, and a loan/mortgage payoff tracker with goals.
- **Zero ATM fees** — automatic worldwide surcharge reimbursement, modeled on Schwab & Fidelity.
- **Calculators you can run yourself** — investment growth, loan/mortgage, retirement, savings-goal, **plus a "code-it" custom tab**. Every formula is unit-tested.
- **6 languages** — English, Español, Français, العربية (full right-to-left), Português, Tagalog.
- **Accessibility** — WCAG-AA contrast (light & dark), screen-reader landmarks/ARIA, keyboard navigation, larger-text & high-contrast modes, reduced-motion support.
- **Dark mode** + light mode, remembered between visits.
- **Installable** on iPhone/Android home screen.

## 👤 Credits

- **Built, developed, and tested by Botros Saleb** — sole builder, A to Z.
- **Original idea & ongoing feedback by Angel Gallegos.**

## 🚀 Run locally

It's a static site — no build step.

```bash
npx serve .
# open the printed http://localhost:3000
```

Or just open `bull-invest-prototype.html` in a browser.

## 🌐 Deploy (free)

- **GitHub Pages (recommended):** push this repo → **Settings → Pages → Source: `main`**. Live at <https://botros-1.github.io/bull-invest/>. A fresh URL avoids any old browser cache.
- **Netlify:** drag the folder onto <https://app.netlify.com/drop>.

`index.html` is the clean entry point and loads the app.

## 📱 Install on a phone

Open the hosted link, then **iPhone (Safari):** Share → *Add to Home Screen*; **Android (Chrome):** menu → *Install app*.

## 🧪 Testing

No dependencies — just Node.js. Tests run automatically in CI on every push.

```bash
npm test
# finance.test.js   – calculator formulas vs textbook values (8 checks)
# contrast.test.js  – WCAG AA color contrast, light + dark (14 checks)
# i18n.test.js      – all 157 UI strings present in all 6 languages
```

Latest local run: **finance 8/8 ✓**, **contrast 14/14 ✓ (≥4.5:1)**, **i18n 157×6 balanced ✓**.
For visual/mobile checks, open in Chrome and press **F12 → Ctrl+Shift+M** to preview iPhone layout (including Arabic RTL and dark mode).

## 🗂️ Project structure

| File | Purpose |
|------|---------|
| `index.html` | Clean entry point (loads the app) |
| `bull-invest-prototype.html` | The full single-file app (HTML/CSS/JS) |
| `manifest.webmanifest` | PWA metadata (installable) |
| `icon-*.png`, `apple-touch-icon.png` | App icons (full-bleed) |
| `qr-code.html` | QR-code maker for your hosted link |
| `tests/` | Node test suite (finance, contrast, i18n) |
| `.github/workflows/ci.yml` | Continuous integration |

> Note: the service worker is intentionally disabled for this demo so updates always load fresh; the app stays installable via the manifest.

## 🛠️ Tech

Plain HTML, CSS, and vanilla JavaScript. [Chart.js](https://www.chartjs.org/) via CDN. No framework, no build tooling.

## 🧭 From demo to real product

1. **Mobile apps:** React Native or Flutter (or wrap with Capacitor).
2. **Data:** account aggregation via Plaid / MX / Finicity.
3. **Banking:** a chartered banking partner (or BaaS) to hold funds and fund ATM rebates.
4. **Compliance:** KYC/AML, money-transmitter licensing, data-privacy law — with a fintech attorney.

## ⚠️ Disclaimer

Bull Invest is a concept demonstration. All balances, transactions, and figures are illustrative sample data. It is not affiliated with any bank or financial institution, provides no financial advice, and does not handle real funds. Bank names are referenced for illustration only.

## 📚 Citation

If you reference this project, please cite it (see [`CITATION.cff`](CITATION.cff)) — author **Botros Saleb**, idea & feedback **Angel Gallegos**.

## 📄 License

[MIT](LICENSE) © 2026 Botros Saleb
