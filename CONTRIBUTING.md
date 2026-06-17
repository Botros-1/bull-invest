# Contributing to Bull Invest

Thanks for your interest in improving Bull Invest! This is a front-end demo
(see the [disclaimer](README.md#-disclaimer)), so contributions are mostly
about UI, accessibility, translations, and the calculator engine.

## Getting started

1. Fork and clone the repo.
2. Open `bull-invest-prototype.html` in a browser, or run a local server so the
   PWA features work:
   ```bash
   npx serve .
   ```
3. Make your changes (it's a single-file app plus supporting assets).

## Running the tests

No dependencies required — just Node.js:

```bash
npm test          # runs all checks
# or individually:
node tests/finance.test.js     # finance formulas vs textbook values
node tests/contrast.test.js    # WCAG AA color contrast (light + dark)
node tests/i18n.test.js        # all translation keys present in all 6 languages
```

All three must pass (and they run automatically in CI on every push).

## Guidelines

- **Accessibility first:** keep WCAG AA contrast; don't remove ARIA, focus
  styles, or keyboard support. Run `tests/contrast.test.js` after color changes.
- **Translations:** if you add UI text, add a key to the `T` table in all six
  languages (en, es, fr, ar, pt, tl). `tests/i18n.test.js` enforces this.
- **Finance:** any change to `FV` / `PMT` / `GOAL` must keep `finance.test.js`
  passing.
- **Mobile + RTL:** test in Chrome device mode (F12 → Ctrl+Shift+M) including
  Arabic (right-to-left) and dark mode.

## Reporting issues

Open a GitHub issue with steps to reproduce and, for visual bugs, a screenshot
and the device/browser. Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).
