# I Love You in 20 Different Languages ❤️

A frame-accurate recreation of the romantic Python turtle heart animation as a modern, lightweight web application built with **HTML5, CSS3, and Vanilla JavaScript (ES6+)**.

Designed as a romantic gift, this website reproduces the exact typography, neon glow, staggered animation timing, 23 horizontal rows, and 127 phrases in 20 different languages to form a heart.

---

## 🌟 Live Demo & Preview

Simply double-click `index.html` in any browser, or deploy directly to **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 🌍 The 20 Languages Included

The animation features "I love you" in 20 authentic languages and native scripts:

| # | Language | Translation | Script / Region |
|---|---|---|---|
| 1 | **English** | `I love you` | Latin |
| 2 | **Turkish** | `Seni seviyorum` | Latin |
| 3 | **Spanish** | `Te amo` | Latin |
| 4 | **French** | `Je t'aime` | Latin |
| 5 | **German** | `Ich liebe dich` | Latin |
| 6 | **Italian** | `Ti amo` | Latin |
| 7 | **Portuguese** | `Eu te amo` | Latin |
| 8 | **Russian** | `Я тебя люблю` | Cyrillic |
| 9 | **Korean** | `사랑해` | Hangul |
| 10 | **Japanese** | `愛してる` | Kanji / Hiragana |
| 11 | **Chinese** | `我爱你` | Simplified Chinese |
| 12 | **Hindi** | `मैं तुमसे प्यार करता हूँ` | Devanagari |
| 13 | **Greek** | `Σ' αγαπώ` | Greek |
| 14 | **Dutch** | `Ik hou van jou` | Latin |
| 15 | **Swedish** | `Jag älskar dig` | Latin |
| 16 | **Polish** | `Kocham cię` | Latin |
| 17 | **Thai** | `ฉันรักเธอ` | Thai |
| 18 | **Vietnamese** | `Anh yêu em` | Latin with diacritics |
| 19 | **Indonesian** | `Aku cinta kamu` | Latin |
| 20 | **Ukrainian** | `Я тебе кохаю` | Cyrillic |

---

## 🔬 Reference Analysis & Animation Architecture

### 1. Structure & Silhouette
- **23 Horizontal Rows:** The entire heart silhouette is composed of 23 uniformly spaced rows (spaced by 23px).
- **Split Lobes (Rows 0–5):** Divided into a Left Lobe and Right Lobe separated by a central cleft gap that smoothly contracts from 210px down to 16px.
- **Tapered Body (Rows 6–22):** Continuous horizontal lines with row widths tapering from 605px at the widest point down to 45px at the bottom tip.
- **Total Phrases:** Exactly 127 phrase instances forming the complete shape.

### 2. Animation Progression
- **Right Perimeter & Seam (0.0s – 5.5s):** Tracing down from the top cleft and right lobe to the bottom point.
- **Left Perimeter (5.5s – 8.8s):** Tracing up the left edge to complete the outer silhouette.
- **Concentric Fill (8.8s – 12.2s):** Filling the inner heart rows from outside layers inward to the core.
- **Gentle Heartbeat Pulse (Post-Completion):** Once all words are positioned, the completed heart enters a subtle, continuous dual-beat (`lub-dub`) breathing pulse.

### 3. Visual Styling & Neon Glow
- **Background:** Void pitch-black (`#000000`).
- **Core Color:** Electric coral-red (`#ff2a5f`) with layered neon text shadows (`#ff3366`, `#ff0044`, `#d50032`).
- **Bloom on Spawn:** Newly rendered words pop in with a brighter initial neon bloom before settling into place.
- **Multi-Script Typography:** Comprehensive Unicode font stack ensuring authentic rendering for Hindi, Thai, Arabic, CJK, and Cyrillic scripts.

---

## 🚀 How to Run Locally

No build tools, Node.js packages, or external dependencies are required.

### Option 1: Direct File Open
1. Navigate to the project directory:
   ```
   C:\Users\junai\All Program\heart
   ```
2. Double-click `index.html` (or right-click and open with Google Chrome, Microsoft Edge, Firefox, or Safari).

### Option 2: Using Any Local Server (Optional)
If you prefer running via a local web server:

**Using Python:**
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

**Using Node.js (npx):**
```bash
npx serve .
```

---

## 🌐 Deployment to Vercel, Netlify, or GitHub Pages

This project is a static site (HTML, CSS, JS) and can be deployed in seconds:

- **GitHub Pages:** Push to a repository, go to **Settings > Pages**, choose the `main` branch, and save.
- **Vercel / Netlify:** Drag and drop the folder or connect your Git repository. No build command required; publish directory is `./`.

---

## ✨ Interactive Features

- **Click / Tap Anywhere:** Replays the heart animation from the beginning.
- **Keyboard Shortcuts:** Press <kbd>Space</kbd> or <kbd>R</kbd> to restart the animation.
- **Hover / Touch Translations:** Hovering over any phrase highlights it with a radiant neon glow and displays a clean floating tooltip showing the language name and country flag.
- **Fully Responsive:** Automatically scales smoothly to fit any desktop, tablet, or mobile screen dimensions without text clipping or horizontal scrollbars.
