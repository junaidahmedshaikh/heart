/**
 * I Love You in 35 Languages — Mathematical Heart Text Layout & Animation
 * Recreates the romantic heart with exact parametric symmetry,
 * scanline text packing, multi-script Unicode typography, and deterministic assembly.
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
    
    // Canvas context for measuring text widths accurately
    this.measureCanvas = document.createElement('canvas');
    this.ctx = this.measureCanvas.getContext('2d');

    this.phrases = [];
    this.animationTimers = [];
    this.isAssembled = false;
    this.currentFontSize = 14;

    this.init();
  }

  init() {
    // Wait for fonts to be loaded before measuring
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        this.buildLayoutAndAnimate();
      });
    } else {
      setTimeout(() => this.buildLayoutAndAnimate(), 250);
    }

    this.setupEvents();
  }

  setupEvents() {
    let resizeTimeout = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.buildLayoutAndAnimate();
      }, 150);
    });

    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.replay();
      });
    }

    document.body.addEventListener('click', (e) => {
      if (e.target.closest('#replay-btn') || e.target.closest('.phrase')) return;
      this.replay();
    });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.key.toLowerCase() === 'r') {
        e.preventDefault();
        this.replay();
      }
    });
  }

  /* ==========================================================================
     Mathematical Heart Boundary Solver
     Uses parametric heart curve with smooth blend in the lower body
     to guarantee broad shoulders and a natural, gradual bottom taper.
     ========================================================================== */
  getYRaw(t) {
    return 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
  }

  getXRaw(t, yVal) {
    const sinT = Math.sin(t);
    const base = 16 * Math.pow(sinT, 3);
    const lin = 16 * sinT;
    // Blend lower half (y < 5.0) smoothly to prevent premature narrowing
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

  /**
   * Returns horizontal interval(s) [xMin, xMax] inside the heart at normalized yVal.
   */
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
        { start: -xOuter, end: -xInner },
        { start: xInner, end: xOuter }
      ];
    } else {
      // Full unified body
      const tOuter = this.findTRoot(tPeak, Math.PI, yVal);
      const xOuter = this.getXRaw(tOuter, yVal);

      return [
        { start: -xOuter, end: xOuter }
      ];
    }
  }

  /* ==========================================================================
     Scanline Text Layout Algorithm
     ========================================================================== */
  buildLayoutAndAnimate() {
    this.clearAnimation();
    this.container.innerHTML = '';
    this.container.classList.remove('beating');

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Viewport responsive sizing with safe boundaries
    const availW = Math.min(vw * 0.92, 900);
    const availH = Math.min(vh * 0.88, 720);

    // Heart aspect ratio is approx 32 / 28.92 ~ 1.106
    const scaleFactor = Math.min(availW / 32, availH / 28.92);

    // Dynamically calculate readable font size and row height
    this.currentFontSize = Math.max(9.5, Math.min(14, scaleFactor * 0.58));
    const rowHeight = this.currentFontSize * 1.75;

    const fontStyle = `700 ${this.currentFontSize}px "Noto Sans", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans Devanagari", "Noto Sans Bengali", "Noto Sans Gurmukhi", "Noto Sans Thai", "Noto Sans JP", "Noto Sans KR", "Noto Sans SC", sans-serif`;
    this.ctx.font = fontStyle;

    const cx = vw / 2;
    const cy = vh / 2;

    const yMax = 11.923;
    const yMin = -17.0;
    const totalUnitH = yMax - yMin; // 28.923
    const yMid = (yMax + yMin) / 2; // -2.5385: true optical center

    const numRows = Math.floor((totalUnitH * scaleFactor) / rowHeight);
    const stepUnit = (totalUnitH - 1.2) / numRows;

    this.phrases = [];
    let translationIndex = 0;

    for (let r = 0; r < numRows; r++) {
      const yVal = (yMax - 0.6) - r * stepUnit;
      if (yVal < yMin + 0.3) break;

      // Perfectly center vertically using yMid offset
      const screenY = cy - (yVal - yMid) * scaleFactor;
      const intervals = this.getScanlineIntervals(yVal);

      intervals.forEach(interval => {
        const sxStart = cx + interval.start * scaleFactor;
        const sxEnd = cx + interval.end * scaleFactor;
        const widthAvail = sxEnd - sxStart;

        if (widthAvail < 24) return;

        // Collect phrases fitting inside widthAvail
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

        // If none fit but interval is viable, fit at least one
        if (rowPhrases.length === 0) {
          const item = TRANSLATIONS[translationIndex % TRANSLATIONS.length];
          const textW = this.ctx.measureText(item.text).width;
          if (textW <= widthAvail * 1.15) {
            rowPhrases.push({ ...item, textW });
            translationIndex++;
          }
        }

        if (rowPhrases.length === 0) return;

        // Distribute phrases across [sxStart, sxEnd]
        const totalTextWidth = rowPhrases.reduce((sum, p) => sum + p.textW, 0);
        const k = rowPhrases.length;

        let startX = sxStart;
        let gap = 0;

        if (k > 1) {
          const rawGap = (widthAvail - totalTextWidth) / (k - 1);
          // If interval is wide and rawGap is too loose, center the row with balanced gaps
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

        // Create DOM elements and assign deterministic target & scatter coordinates
        let currentX = startX;
        rowPhrases.forEach(p => {
          const targetX = currentX;
          const targetY = screenY - this.currentFontSize / 2;

          // Deterministic scattered starting position outside the heart
          const angle = (this.phrases.length * 137.5 * Math.PI) / 180; // golden ratio dispersion
          const scatterRadius = Math.max(vw, vh) * 0.55 + ((this.phrases.length % 5) * 60);
          const scatterX = cx + Math.cos(angle) * scatterRadius;
          const scatterY = cy + Math.sin(angle) * scatterRadius;

          const span = document.createElement('span');
          span.className = 'phrase scattered';
          span.textContent = p.text;
          span.style.fontSize = `${this.currentFontSize}px`;
          span.style.left = `${targetX.toFixed(1)}px`;
          span.style.top = `${targetY.toFixed(1)}px`;

          if (p.rtl) {
            span.setAttribute('dir', 'rtl');
          }

          // Initial position set via transform
          span.style.transform = `translate(${(scatterX - targetX).toFixed(1)}px, ${(scatterY - targetY).toFixed(1)}px)`;

          // Hover / Touch interaction
          span.addEventListener('mouseenter', (e) => this.showTooltip(e, p));
          span.addEventListener('mouseleave', () => this.hideTooltip());
          span.addEventListener('touchstart', (e) => this.showTooltip(e, p), { passive: true });

          this.container.appendChild(span);

          // Distance from center for flowing assembly ordering
          const dist = Math.hypot(targetX - cx, targetY - cy);

          this.phrases.push({
            el: span,
            dist,
            targetX,
            targetY,
            scatterX,
            scatterY
          });

          currentX += p.textW + gap;
        });
      });
    }

    // Stagger animation: outer phrases arrive first, flowing inwards
    this.phrases.sort((a, b) => b.dist - a.dist);

    this.animatePhrases();
  }

  /* ==========================================================================
     Deterministic Staggered Animation
     ========================================================================== */
  animatePhrases() {
    this.clearAnimation();
    this.isAssembled = false;

    const totalPhrases = this.phrases.length;
    const totalDuration = 7200; // ~7.2 seconds flowing assembly
    const stepDelay = totalDuration / totalPhrases;

    this.phrases.forEach((item, index) => {
      const delay = index * stepDelay;
      const timer = setTimeout(() => {
        item.el.classList.remove('scattered');
        item.el.classList.add('assembled');
        item.el.style.transform = 'translate(0px, 0px)';
      }, delay);

      this.animationTimers.push(timer);
    });

    // When all phrases have assembled, start gentle heartbeat pulse
    const completionTimer = setTimeout(() => {
      this.isAssembled = true;
      this.container.classList.add('beating');
    }, totalDuration + 1200);

    this.animationTimers.push(completionTimer);
  }

  clearAnimation() {
    this.animationTimers.forEach(t => clearTimeout(t));
    this.animationTimers = [];
  }

  replay() {
    // Smoothly scatter back, then assemble anew
    this.clearAnimation();
    this.container.classList.remove('beating');

    this.phrases.forEach(item => {
      item.el.classList.remove('assembled');
      item.el.classList.add('scattered');
      item.el.style.transform = `translate(${(item.scatterX - item.targetX).toFixed(1)}px, ${(item.scatterY - item.targetY).toFixed(1)}px)`;
    });

    setTimeout(() => {
      this.animatePhrases();
    }, 400);
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
