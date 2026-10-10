/**
 * I Love You in 35 Languages — Dual Animation Heart Engine
 * Features:
 *  - Mode 'old': Sequential in-place neon bloom tracing the heart contours (matching reference video).
 *  - Mode 'new': Flowing scattered assembly where words fly into place from outside.
 *  - Symmetrical mathematical heart with scanline text-packing algorithm.
 */

// 35 Authentic Translations
const TRANSLATIONS = [
  { text: "I love you", lang: "English", flag: "🇬🇧" },
  { text: "Ich liebe dich", lang: "German", flag: "🇩🇪" },
  { text: "Ti amo", lang: "Italian", flag: "🇮🇹" },
  { text: "Je t’aime", lang: "French", flag: "🇫🇷" },
  { text: "Te amo", lang: "Spanish", flag: "🇪🇸" },
  { text: "Eu te amo", lang: "Portuguese", flag: "🇵🇹" },
  { text: "Ik hou van jou", lang: "Dutch", flag: "🇳🇱" },
  { text: "Σ’ αγαπώ", lang: "Greek", flag: "🇬🇷" },
  { text: "Я тебя люблю", lang: "Russian", flag: "🇷🇺" },
  { text: "Я тебе кохаю", lang: "Ukrainian", flag: "🇺🇦" },
  { text: "Kocham cię", lang: "Polish", flag: "🇵🇱" },
  { text: "Seni seviyorum", lang: "Turkish", flag: "🇹🇷" },
  { text: "मैं तुमसे प्यार करता हूँ", lang: "Hindi", flag: "🇮🇳" },
  { text: "میں تم سے محبت کرتا ہوں", lang: "Urdu", flag: "🇵🇰", rtl: true },
  { text: "أحبك", lang: "Arabic", flag: "🇸🇦", rtl: true },
  { text: "我爱你", lang: "Chinese", flag: "🇨🇳" },
  { text: "愛してる", lang: "Japanese", flag: "🇯🇵" },
  { text: "사랑해", lang: "Korean", flag: "🇰🇷" },
  { text: "Anh yêu em", lang: "Vietnamese", flag: "🇻🇳" },
  { text: "Aku cinta kamu", lang: "Indonesian", flag: "🇮🇩" },
  { text: "Saya cintakan awak", lang: "Malay", flag: "🇲🇾" },
  { text: "ฉันรักคุณ", lang: "Thai", flag: "🇹🇭" },
  { text: "Mahal kita", lang: "Filipino", flag: "🇵🇭" },
  { text: "আমি তোমাকে ভালোবাসি", lang: "Bengali", flag: "🇧🇩" },
  { text: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ", lang: "Punjabi", flag: "🇮🇳" },
  { text: "دوستت دارم", lang: "Persian", flag: "🇮🇷", rtl: true },
  { text: "אני אוהב אותך", lang: "Hebrew", flag: "🇮🇱", rtl: true },
  { text: "Te iubesc", lang: "Romanian", flag: "🇷🇴" },
  { text: "Jag älskar dig", lang: "Swedish", flag: "🇸🇪" },
  { text: "Jeg elsker dig", lang: "Danish", flag: "🇩🇰" },
  { text: "Jeg elsker deg", lang: "Norwegian", flag: "🇳🇴" },
  { text: "Rakastan sinua", lang: "Finnish", flag: "🇫🇮" },
  { text: "Miluji tě", lang: "Czech", flag: "🇨🇿" },
  { text: "Szeretlek", lang: "Hungarian", flag: "🇭🇺" },
  { text: "Nakupenda", lang: "Swahili", flag: "🇰🇪" }
];

class HeartApp {
  constructor() {
    this.container = document.getElementById('heart-container');
    this.tooltip = document.getElementById('tooltip');
    this.replayBtn = document.getElementById('replay-btn');
    this.btnModeOld = document.getElementById('btn-mode-old');
    this.btnModeNew = document.getElementById('btn-mode-new');
    
    // Canvas context for measuring text widths accurately
    this.measureCanvas = document.createElement('canvas');
    this.ctx = this.measureCanvas.getContext('2d');

    this.phrases = [];
    this.animationTimers = [];
    this.currentMode = 'new'; // 'old' or 'new'
    this.currentFontSize = 14;

    this.init();
  }

  init() {
    // Wait for fonts to be ready before measuring
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        this.buildLayout();
        this.startCurrentAnimation();
      });
    } else {
      setTimeout(() => {
        this.buildLayout();
        this.startCurrentAnimation();
      }, 250);
    }

    this.setupEvents();
  }

  setupEvents() {
    let resizeTimeout = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.buildLayout();
        this.startCurrentAnimation();
      }, 150);
    });

    // Animation Mode Switchers
    if (this.btnModeOld) {
      this.btnModeOld.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setMode('old');
      });
    }

    if (this.btnModeNew) {
      this.btnModeNew.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setMode('new');
      });
    }

    // Replay button
    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.replay();
      });
    }

    // Click anywhere on screen to replay
    document.body.addEventListener('click', (e) => {
      if (e.target.closest('.top-controls') || e.target.closest('.phrase')) return;
      this.replay();
    });

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.key.toLowerCase() === 'r') {
        e.preventDefault();
        this.replay();
      } else if (e.key === '1') {
        this.setMode('old');
      } else if (e.key === '2') {
        this.setMode('new');
      }
    });
  }

  setMode(mode) {
    if (this.currentMode === mode && this.phrases.length > 0) {
      this.replay();
      return;
    }

    this.currentMode = mode;
    if (this.btnModeOld && this.btnModeNew) {
      this.btnModeOld.classList.toggle('active', mode === 'old');
      this.btnModeNew.classList.toggle('active', mode === 'new');
    }

    this.startCurrentAnimation();
  }

  /* ==========================================================================
     Mathematical Heart Boundary Solver
     ========================================================================== */
  getYRaw(t) {
    return 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  }

  getXRaw(t, yVal) {
    const sinT = Math.sin(t);
    const base = 16 * Math.pow(sinT, 3);
    const lin = 16 * sinT;
    const blendWeight = Math.max(0, Math.min(1, (5.0 - yVal) / 22.0));
    return base * (1 - 0.40 * blendWeight) + lin * (0.40 * blendWeight);
  }

  findTRoot(tMin, tMax, targetY) {
    let a = tMin;
    let b = tMax;
    for (let iter = 0; iter < 28; iter++) {
      const mid = (a + b) / 2;
      const yMid = this.getYRaw(mid);
      const yA = this.getYRaw(a);
      if ((yMid - targetY) * (yA - targetY) <= 0) {
        b = mid;
      } else {
        a = mid;
      }
    }
    return (a + b) / 2;
  }

  getScanlineIntervals(yVal) {
    const tPeak = 0.84107;
    const yMax = 11.923;
    const yNotch = 5.0;
    const yMin = -17.0;

    if (yVal > yMax || yVal < yMin) return [];

    if (yVal >= yNotch) {
      // Split upper lobes
      const tInner = this.findTRoot(0, tPeak, yVal);
      const tOuter = this.findTRoot(tPeak, Math.PI, yVal);

      const xInner = this.getXRaw(tInner, yVal);
      const xOuter = this.getXRaw(tOuter, yVal);

      return [
        { start: -xOuter, end: -xInner, lobe: 'left', xMax: xOuter },
        { start: xInner, end: xOuter, lobe: 'right', xMax: xOuter }
      ];
    } else {
      // Full unified body
      const tOuter = this.findTRoot(tPeak, Math.PI, yVal);
      const xOuter = this.getXRaw(tOuter, yVal);

      return [
        { start: -xOuter, end: xOuter, lobe: 'full', xMax: xOuter }
      ];
    }
  }

  /* ==========================================================================
     Scanline Text Layout Algorithm
     ========================================================================== */
  buildLayout() {
    this.clearAnimation();
    this.container.innerHTML = '';
    this.container.classList.remove('beating');

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Viewport responsive sizing with safe boundaries
    const availW = Math.min(vw * 0.92, 900);
    const availH = Math.min(vh * 0.88, 720);

    const scaleFactor = Math.min(availW / 32, availH / 28.92);

    this.currentFontSize = Math.max(9.5, Math.min(14, scaleFactor * 0.58));
    const rowHeight = this.currentFontSize * 1.75;

    const fontStyle = `700 ${this.currentFontSize}px "Noto Sans", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans Devanagari", "Noto Sans Bengali", "Noto Sans Gurmukhi", "Noto Sans Thai", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", sans-serif`;
    this.ctx.font = fontStyle;

    const cx = vw / 2;
    const cy = vh / 2;

    const yMax = 11.923;
    const yMin = -17.0;
    const totalUnitH = yMax - yMin;
    const yMid = (yMax + yMin) / 2; // -2.5385

    const numRows = Math.floor((totalUnitH * scaleFactor) / rowHeight);
    const stepUnit = (totalUnitH - 1.2) / numRows;

    this.phrases = [];
    let translationIndex = 0;

    for (let r = 0; r < numRows; r++) {
      const yVal = (yMax - 0.6) - r * stepUnit;
      if (yVal < yMin + 0.3) break;

      const screenY = cy - (yVal - yMid) * scaleFactor;
      const intervals = this.getScanlineIntervals(yVal);

      intervals.forEach(interval => {
        const sxStart = cx + interval.start * scaleFactor;
        const sxEnd = cx + interval.end * scaleFactor;
        const widthAvail = sxEnd - sxStart;

        if (widthAvail < 24) return;

        const rowPhrases = [];
        let accumulatedW = 0;
        const minGap = Math.max(8, this.currentFontSize * 0.65);

        while (true) {
          const item = TRANSLATIONS[translationIndex % TRANSLATIONS.length];
          const textW = this.ctx.measureText(item.text).width;
          const needed = accumulatedW + (rowPhrases.length > 0 ? minGap : 0) + textW;

          if (needed <= widthAvail) {
            rowPhrases.push({ ...item, textW });
            accumulatedW = needed;
            translationIndex++;
          } else {
            break;
          }
        }

        if (rowPhrases.length === 0) {
          const item = TRANSLATIONS[translationIndex % TRANSLATIONS.length];
          const textW = this.ctx.measureText(item.text).width;
          if (textW <= widthAvail * 1.15) {
            rowPhrases.push({ ...item, textW });
            translationIndex++;
          }
        }

        if (rowPhrases.length === 0) return;

        const totalTextWidth = rowPhrases.reduce((sum, p) => sum + p.textW, 0);
        const k = rowPhrases.length;

        let startX = sxStart;
        let gap = 0;

        if (k > 1) {
          const rawGap = (widthAvail - totalTextWidth) / (k - 1);
          if (rawGap > this.currentFontSize * 2.0) {
            gap = this.currentFontSize * 1.25;
            startX = sxStart + (widthAvail - (totalTextWidth + gap * (k - 1))) / 2;
          } else {
            gap = rawGap;
            startX = sxStart;
          }
        } else {
          gap = 0;
          startX = sxStart + (widthAvail - totalTextWidth) / 2;
        }

        let currentX = startX;
        rowPhrases.forEach((p, pIdx) => {
          const targetX = currentX;
          const targetY = screenY - this.currentFontSize / 2;

          // Deterministic scattered starting position for New Animation
          const angle = (this.phrases.length * 137.5 * Math.PI) / 180;
          const scatterRadius = Math.max(vw, vh) * 0.55 + ((this.phrases.length % 5) * 60);
          const scatterX = cx + Math.cos(angle) * scatterRadius;
          const scatterY = cy + Math.sin(angle) * scatterRadius;

          const span = document.createElement('span');
          span.className = 'phrase';
          span.textContent = p.text;
          span.style.fontSize = `${this.currentFontSize}px`;
          span.style.left = `${targetX.toFixed(1)}px`;
          span.style.top = `${targetY.toFixed(1)}px`;

          if (p.rtl) {
            span.setAttribute('dir', 'rtl');
          }

          // Tooltip interactions
          span.addEventListener('mouseenter', (e) => this.showTooltip(e, p));
          span.addEventListener('mouseleave', () => this.hideTooltip());
          span.addEventListener('touchstart', (e) => this.showTooltip(e, p), { passive: true });

          this.container.appendChild(span);

          // Calculate ordering metrics:
          // 1. Distance from center (for New Animation)
          const distFromCenter = Math.hypot(targetX - cx, targetY - cy);

          // 2. Contour / perimeter classification (for Old Animation)
          // Is this word on the outer boundary or inside?
          const isOuterLeft = (pIdx === 0 && interval.start < 0);
          const isOuterRight = (pIdx === k - 1 && interval.end > 0);
          const isPerimeter = isOuterLeft || isOuterRight || r === 0 || r >= numRows - 2;

          // Sequential rank for Old Animation (traces right lobe down, left lobe up, then fills inside)
          let oldRank = 0;
          if (isOuterRight) {
            // Right perimeter from top to bottom
            oldRank = 100 + r;
          } else if (isOuterLeft) {
            // Left perimeter from bottom to top
            oldRank = 200 + (numRows - r);
          } else {
            // Inner core filling from outside layers inwards
            const normalizedDist = distFromCenter / (availW / 2);
            oldRank = 300 + (1.0 - normalizedDist) * 100 + (r % 3);
          }

          this.phrases.push({
            el: span,
            distFromCenter,
            oldRank,
            targetX,
            targetY,
            scatterX,
            scatterY
          });

          currentX += p.textW + gap;
        });
      });
    }
  }

  startCurrentAnimation() {
    this.clearAnimation();
    this.container.classList.remove('beating');

    if (this.currentMode === 'old') {
      this.playOldAnimation();
    } else {
      this.playNewAnimation();
    }
  }

  /* ==========================================================================
     OLD ANIMATION: Sequential In-Place Neon Bloom
     Words bloom sequentially along the contour and fill in-place
     ========================================================================== */
  playOldAnimation() {
    // Sort phrases by oldRank (right perimeter -> left perimeter -> inner core)
    const sorted = [...this.phrases].sort((a, b) => a.oldRank - b.oldRank);

    // Initial state: reset all phrases to hidden in-place
    this.phrases.forEach(item => {
      item.el.className = 'phrase mode-old-hidden';
      item.el.style.transform = 'translate(0px, 0px)';
    });

    const totalPhrases = sorted.length;
    const totalDuration = 8200; // ~8.2 seconds sequential bloom
    const stepDelay = totalDuration / totalPhrases;

    sorted.forEach((item, index) => {
      const delay = index * stepDelay;
      const timer = setTimeout(() => {
        item.el.classList.remove('mode-old-hidden');
        item.el.classList.add('mode-old-blooming');
      }, delay);

      this.animationTimers.push(timer);
    });

    // Completion: subtle gentle heartbeat
    const completionTimer = setTimeout(() => {
      this.container.classList.add('beating');
    }, totalDuration + 600);

    this.animationTimers.push(completionTimer);
  }

  /* ==========================================================================
     NEW ANIMATION: Scattered Flowing Assembly
     Words fly in smoothly from outer scattered coordinates
     ========================================================================== */
  playNewAnimation() {
    // Sort phrases by distance from center (flowing from outer edge to center)
    const sorted = [...this.phrases].sort((a, b) => b.distFromCenter - a.distFromCenter);

    // Initial state: phrases placed at scattered offsets
    this.phrases.forEach(item => {
      item.el.className = 'phrase mode-new-scattered';
      item.el.style.transform = `translate(${(item.scatterX - item.targetX).toFixed(1)}px, ${(item.scatterY - item.targetY).toFixed(1)}px)`;
    });

    const totalPhrases = sorted.length;
    const totalDuration = 7200; // ~7.2 seconds flowing assembly
    const stepDelay = totalDuration / totalPhrases;

    sorted.forEach((item, index) => {
      const delay = index * stepDelay;
      const timer = setTimeout(() => {
        item.el.classList.remove('mode-new-scattered');
        item.el.classList.add('mode-new-assembled');
        item.el.style.transform = 'translate(0px, 0px)';
      }, delay);

      this.animationTimers.push(timer);
    });

    // Completion: subtle gentle heartbeat
    const completionTimer = setTimeout(() => {
      this.container.classList.add('beating');
    }, totalDuration + 1200);

    this.animationTimers.push(completionTimer);
  }

  clearAnimation() {
    this.animationTimers.forEach(t => clearTimeout(t));
    this.animationTimers = [];
  }

  replay() {
    this.startCurrentAnimation();
  }

  showTooltip(e, p) {
    if (!this.tooltip) return;
    this.tooltip.innerHTML = `<span class="tooltip-flag">${p.flag}</span><span class="tooltip-lang">${p.lang}:</span> &ldquo;${p.text}&rdquo;`;
    this.tooltip.classList.add('show');
  }

  hideTooltip() {
    if (!this.tooltip) return;
    this.tooltip.classList.remove('show');
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  new HeartApp();
});
