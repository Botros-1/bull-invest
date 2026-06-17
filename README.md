# 🐂 Bull Invest

**All your money. One app.** A modern personal‑finance super‑app concept — a single, secure dashboard that brings together every account a person holds (checking, savings, investing, retirement, loans) across every bank, plus zero‑fee ATM access, built‑in financial calculators, and a how‑to video library.

> ⚠️ **This is a front‑end demo / prototype with sample data.** It is not a real bank and does not move real money. See [Disclaimer](#disclaimer).

---

## ✨ Features

- **One dashboard, every bank** — aggregated view of accounts from Chase, Wells Fargo, Schwab, Fidelity and more (like Empower / Monarch).
- **Smart categories** — retirement (401k/IRA), savings, investing, and a loan/mortgage payoff tracker, each with goals and progress.
- **Zero ATM fees** — automatic worldwide surcharge reimbursement, modeled on what Schwab & Fidelity offer today.
- **Calculators you can run yourself** — investment growth, loan/mortgage, retirement, and savings‑goal tools, **plus a custom tab where you can write your own formula**. Every formula is unit‑tested against textbook values.
- **6 languages** — English, Español, Français, العربية (full right‑to‑left), Português, Tagalog.
- **Accessibility** — WCAG‑AA color contrast (light & dark), screen‑reader landmarks/ARIA, full keyboard navigation, larger‑text and high‑contrast modes, reduced‑motion support.
- **Dark mode** + light mode, remembered between visits.
- **Installable (PWA)** — works offline and can be added to a phone home screen.

## 🚀 Run it locally

It's a static site — no build step.

```bash
# just open the file in a browser
open bull-invest-prototype.html        # macOS
start bull-invest-prototype.html       # Windows
```

Or serve the folder (recommended, so the PWA/service worker works):

```bash
npx serve .
# then open http://localhost:3000
```

## 🌐 Deploy (free)

**Netlify (drag & drop):** go to <https://app.netlify.com/drop> and drop this folder. You get a live URL instantly.

**GitHub Pages:** push this repo, then in **Settings → Pages** set the source to your `main` branch. It publishes at `https://<you>.github.io/<repo>/`.

The clean entry point is `index.html`, which loads the app.

## 📱 Install on a phone

Open the hosted link, then:
- **iPhone (Safari):** Share → *Add to Home Screen*
- **Android (Chrome):** menu → *Install app*

## 🧪 Testing

The finance engine and color contrast are verified with Node scripts (no browser needed):

- **Finance math:** 8/8 pass vs. textbook values (e.g. a $200k loan at 6% over 30 yrs = $1,199.10/mo).
- **Contrast:** 0 WCAG‑AA failures in both light and dark themes.

Visual/mobile testing: open in Chrome, press **F12 → Ctrl+Shift+M** and pick an iPhone to preview the responsive layout (including Arabic RTL and dark mode) without a device.

## 🗂️ Project structure

| File | Purpose |
|------|---------|
| `index.html` | Clean entry point (redirects to the app) |
| `bull-invest-prototype.html` | The full single‑file app (HTML/CSS/JS) |
| `manifest.webmanifest` | PWA metadata |
| `sw.js` | Service worker (network‑first caching) |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | App icons |
| `qr-code.html` | QR‑code maker for your hosted link |
| `flyer.html` | Printable promo flyer |

## 🛠️ Tech

Plain HTML, CSS, and vanilla JavaScript. [Chart.js](https://www.chartjs.org/) for charts (via CDN). No framework, no build tooling.

## 🧭 From demo to real product

Turning this into a real app is a fintech business, not just UI:
1. **Mobile apps:** rebuild in React Native or Flutter, or wrap with Capacitor.
2. **Data:** account aggregation via Plaid / MX / Finicity.
3. **Banking:** a chartered banking partner (or BaaS) to hold funds and fund ATM rebates.
4. **Compliance:** KYC/AML, money‑transmitter licensing, data‑privacy law — with a fintech lawyer.

## ⚠️ Disclaimer

Bull Invest is a concept demonstration. All balances, transactions, and figures are illustrative sample data. It is not affiliated with any bank or financial institution, provides no financial advice, and does not handle real funds. Bank names and logos are referenced for illustrative purposes only.

## 📄 License

[MIT](LICENSE)
