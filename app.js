const frames = [
  {
    id: "cream",
    name: "Classic Cream",
    note: "厚白相纸",
    paper: "#fbf2e1",
    ink: "#1f1b16",
    accent: "#c94b3a"
  },
  {
    id: "black",
    name: "Midnight Film",
    note: "黑胶片边框",
    paper: "#171513",
    ink: "#f8ecdc",
    accent: "#c69042"
  },
  {
    id: "ticket",
    name: "Hongdae Ticket",
    note: "票根虚线",
    paper: "#f9edda",
    ink: "#231f19",
    accent: "#257d7a"
  },
  {
    id: "blue",
    name: "Blue Hour",
    note: "冷调相纸",
    paper: "#dbe8ee",
    ink: "#1d303d",
    accent: "#426894"
  },
  {
    id: "doodle",
    name: "Doodle Date",
    note: "手绘涂鸦",
    paper: "#fff4df",
    ink: "#2a2118",
    accent: "#c94b3a"
  }
];

const filters = [
  {
    id: "seoul",
    name: "Seoul Soft",
    note: "柔和奶油肤色",
    css: "contrast(1.04) saturate(1.08) sepia(0.12) brightness(1.04)"
  },
  {
    id: "portra",
    name: "Warm Portra",
    note: "暖黄胶片",
    css: "contrast(1.08) saturate(1.18) sepia(0.28) brightness(1.02)"
  },
  {
    id: "chrome",
    name: "Cool Chrome",
    note: "青蓝反转片",
    css: "contrast(1.14) saturate(1.02) hue-rotate(184deg) brightness(0.98)"
  },
  {
    id: "mono",
    name: "Mono Booth",
    note: "高反差黑白",
    css: "grayscale(1) contrast(1.22) brightness(1.02)"
  },
  {
    id: "faded",
    name: "Faded 200",
    note: "低饱和褪色",
    css: "contrast(0.94) saturate(0.72) sepia(0.18) brightness(1.08)"
  },
  {
    id: "fujichrome",
    name: "Fuji Classic Chrome",
    note: "低饱和纪实蓝绿",
    css: "contrast(1.08) saturate(0.78) sepia(0.08) hue-rotate(186deg) brightness(0.99)",
    grade: { tint: "#476c74", tintAlpha: 0.1, fade: 0.08, vignette: 0.22 }
  },
  {
    id: "fujiclassicneg",
    name: "Fuji Classic Neg",
    note: "消费负片高反差",
    css: "contrast(1.18) saturate(1.22) sepia(0.18) brightness(1.01)",
    grade: { tint: "#c77747", tintAlpha: 0.1, fade: 0.03, vignette: 0.3 }
  },
  {
    id: "fujivelvia",
    name: "Fuji Velvia Vivid",
    note: "高饱和风景反转片",
    css: "contrast(1.16) saturate(1.58) brightness(0.98)",
    grade: { tint: "#245d73", tintAlpha: 0.06, fade: 0, vignette: 0.28 }
  },
  {
    id: "fujieterna",
    name: "Fuji Eterna Cinema",
    note: "电影灰阶低饱和",
    css: "contrast(0.92) saturate(0.72) brightness(1.03)",
    grade: { tint: "#64726c", tintAlpha: 0.11, fade: 0.12, vignette: 0.18 }
  },
  {
    id: "fujiacros",
    name: "Fuji Acros Mono",
    note: "细腻高层次黑白",
    css: "grayscale(1) contrast(1.18) brightness(1.02)",
    grade: { tint: "#d8d0c3", tintAlpha: 0.07, fade: 0.02, vignette: 0.32 }
  },
  {
    id: "ricohpositive",
    name: "Ricoh Positive Film",
    note: "GR 街拍正片色",
    css: "contrast(1.2) saturate(1.18) brightness(0.98)",
    grade: { tint: "#3f5f6a", tintAlpha: 0.08, fade: 0.02, vignette: 0.26 }
  },
  {
    id: "ricohnegative",
    name: "Ricoh Negative Film",
    note: "褪色相纸负片感",
    css: "contrast(1.08) saturate(0.9) sepia(0.24) brightness(1.08)",
    grade: { tint: "#d49567", tintAlpha: 0.14, fade: 0.16, vignette: 0.2 }
  },
  {
    id: "ricohbleach",
    name: "Ricoh Bleach Bypass",
    note: "漂白跳过硬影调",
    css: "contrast(1.34) saturate(0.55) brightness(0.96)",
    grade: { tint: "#667078", tintAlpha: 0.1, fade: 0.03, vignette: 0.35 }
  }
];

const stickerTypes = [
  { type: "heart", colors: ["#e35b68", "#f08fa0", "#ffffff"] },
  { type: "star", colors: ["#ffd35a", "#ffffff", "#f4a340"] },
  { type: "spark", colors: ["#ffffff", "#8ed7d3", "#ffd35a"] },
  { type: "dot", colors: ["#e35b68", "#8ed7d3", "#ffffff"] }
];

const backgroundStyles = [
  { id: "none", name: "Original", label: "Keep camera background", type: "none", className: "original-bg" },
  { id: "blue-studio", name: "Soft Blue", label: "Blue studio paper", type: "gradient", className: "blue-gradient", colors: ["#294b73", "#9bd4e8", "#f4fbff"] },
  { id: "sage-studio", name: "Sage Green", label: "Muted green wall", type: "gradient", className: "green-gradient", colors: ["#58735c", "#9cb395", "#e8eddc"] },
  { id: "white-studio", name: "Studio White", label: "Clean white flash", type: "solid", className: "white-bg", color: "#fbfbf7" },
  { id: "mono-stars", name: "Mono Stars", label: "White wall with black stars", type: "stars", className: "star-bg", colors: ["#f8faf6", "#111111"] },
  { id: "flash-glow", name: "Flash Glow", label: "High exposure white", type: "exposure", className: "flash-bg", colors: ["#ffffff", "#f4f1e8"] }
];

const MEDIAPIPE_SELFIE_SEGMENTATION_SRC = "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation/selfie_segmentation.js";
const MEDIAPIPE_SELFIE_SEGMENTATION_ASSETS = "https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation";
let sketchSegmentationPromise = null;

function applyBackgroundToCanvas(canvas, bgStyle, patternIndex = 0) {
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;

  if (!bgStyle || bgStyle.type === "none") {
    return;
  }

  if (bgStyle.type === "solid" && bgStyle.color) {
    ctx.fillStyle = bgStyle.color;
    ctx.fillRect(0, 0, width, height);
    return;
  }

  if (bgStyle.type === "gradient" && bgStyle.colors) {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, bgStyle.colors[0]);
    gradient.addColorStop(0.55, bgStyle.colors[1]);
    gradient.addColorStop(1, bgStyle.colors[2] || bgStyle.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    return;
  }

  if (bgStyle.type === "stars" && bgStyle.colors) {
    ctx.fillStyle = bgStyle.colors[0];
    ctx.fillRect(0, 0, width, height);
    drawBackgroundStars(ctx, width, height, bgStyle.colors[1], patternIndex);
    return;
  }

  if (bgStyle.type === "exposure" && bgStyle.colors) {
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.42, 0, width * 0.5, height * 0.42, Math.max(width, height) * 0.78);
    gradient.addColorStop(0, bgStyle.colors[0]);
    gradient.addColorStop(1, bgStyle.colors[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.42)";
    ctx.fillRect(0, 0, width, height);
  }
}

function drawBackgroundStars(ctx, width, height, color, patternIndex = 0) {
  const starPatterns = [
    [
      [0.06, 0.08, 0.1, -0.12, true], [0.18, 0.06, 0.06, 0.18, true], [0.31, 0.09, 0.12, -0.16, true], [0.46, 0.06, 0.055, 0.12, false], [0.62, 0.1, 0.105, -0.14, true], [0.78, 0.07, 0.065, 0.18, true], [0.93, 0.1, 0.09, -0.1, true],
      [0.1, 0.24, 0.07, 0.16, false], [0.24, 0.22, 0.055, -0.18, true], [0.39, 0.26, 0.1, 0.14, true], [0.56, 0.23, 0.055, -0.12, true], [0.72, 0.26, 0.085, 0.2, false], [0.88, 0.22, 0.06, -0.2, true],
      [0.05, 0.42, 0.08, -0.14, true], [0.18, 0.39, 0.055, 0.16, true], [0.31, 0.45, 0.065, -0.2, false], [0.5, 0.41, 0.12, 0.1, true], [0.67, 0.44, 0.06, -0.16, true], [0.82, 0.4, 0.095, 0.18, true], [0.96, 0.45, 0.055, -0.1, false],
      [0.1, 0.62, 0.065, 0.2, true], [0.24, 0.67, 0.1, -0.18, true], [0.39, 0.63, 0.055, 0.12, true], [0.55, 0.69, 0.075, -0.14, false], [0.73, 0.64, 0.11, 0.16, true], [0.9, 0.68, 0.06, -0.18, true],
      [0.06, 0.86, 0.055, -0.16, false], [0.2, 0.82, 0.105, 0.18, true], [0.36, 0.88, 0.065, -0.12, true], [0.54, 0.84, 0.055, 0.2, false], [0.7, 0.88, 0.095, -0.18, true], [0.88, 0.84, 0.075, 0.14, true]
    ],
    [
      [0.04, 0.12, 0.075, 0.16, true], [0.17, 0.09, 0.115, -0.18, true], [0.33, 0.06, 0.06, 0.12, false], [0.49, 0.11, 0.095, -0.14, true], [0.65, 0.07, 0.055, 0.2, true], [0.8, 0.11, 0.12, -0.16, true], [0.96, 0.08, 0.06, 0.14, false],
      [0.1, 0.28, 0.06, -0.2, true], [0.25, 0.27, 0.085, 0.18, false], [0.4, 0.31, 0.055, -0.12, true], [0.55, 0.27, 0.115, 0.14, true], [0.73, 0.31, 0.065, -0.16, true], [0.89, 0.28, 0.1, 0.18, true],
      [0.04, 0.49, 0.115, -0.14, true], [0.2, 0.48, 0.055, 0.2, false], [0.36, 0.53, 0.095, -0.18, true], [0.52, 0.49, 0.06, 0.16, true], [0.68, 0.54, 0.08, -0.12, false], [0.85, 0.5, 0.11, 0.14, true],
      [0.12, 0.7, 0.08, 0.18, true], [0.28, 0.66, 0.055, -0.16, true], [0.44, 0.72, 0.12, 0.12, true], [0.6, 0.67, 0.055, -0.2, false], [0.76, 0.71, 0.09, 0.16, true], [0.93, 0.68, 0.06, -0.14, true],
      [0.05, 0.9, 0.06, 0.14, false], [0.21, 0.86, 0.105, -0.18, true], [0.39, 0.91, 0.065, 0.2, true], [0.57, 0.86, 0.095, -0.12, true], [0.75, 0.91, 0.06, 0.16, false], [0.91, 0.86, 0.105, -0.2, true]
    ],
    [
      [0.08, 0.07, 0.115, -0.16, true], [0.23, 0.12, 0.055, 0.18, true], [0.39, 0.08, 0.08, -0.12, false], [0.55, 0.13, 0.12, 0.16, true], [0.72, 0.08, 0.06, -0.2, true], [0.88, 0.13, 0.095, 0.14, true],
      [0.04, 0.27, 0.06, 0.2, false], [0.18, 0.3, 0.095, -0.14, true], [0.34, 0.25, 0.06, 0.16, true], [0.5, 0.3, 0.105, -0.18, true], [0.67, 0.26, 0.055, 0.12, false], [0.83, 0.3, 0.115, -0.16, true], [0.97, 0.26, 0.055, 0.18, true],
      [0.1, 0.46, 0.09, -0.12, true], [0.26, 0.5, 0.055, 0.2, true], [0.42, 0.45, 0.12, -0.16, true], [0.58, 0.51, 0.065, 0.14, false], [0.75, 0.47, 0.085, -0.18, true], [0.91, 0.52, 0.06, 0.16, false],
      [0.05, 0.66, 0.055, -0.18, true], [0.2, 0.7, 0.11, 0.14, true], [0.37, 0.65, 0.065, -0.2, false], [0.53, 0.71, 0.09, 0.18, true], [0.7, 0.66, 0.055, -0.12, true], [0.86, 0.71, 0.12, 0.16, true],
      [0.1, 0.9, 0.075, 0.12, false], [0.27, 0.84, 0.105, -0.18, true], [0.45, 0.9, 0.055, 0.2, true], [0.62, 0.84, 0.12, -0.14, true], [0.79, 0.9, 0.06, 0.16, false], [0.94, 0.84, 0.095, -0.2, true]
    ]
  ];
  const stars = starPatterns[patternIndex % starPatterns.length];

  for (const [xRatio, yRatio, sizeRatio, rotation, filled] of stars) {
    const size = Math.min(width, height) * sizeRatio;
    ctx.save();
    ctx.translate(width * xRatio, height * yRatio);
    ctx.rotate(rotation);
    ctx.lineWidth = Math.max(3, size * 0.085);
    ctx.strokeStyle = color;
    ctx.fillStyle = filled ? color : "transparent";
    drawStar(ctx, size);
    ctx.restore();
  }
}

function loadScriptOnce(src) {
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.crossOrigin = "anonymous";
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

async function initPortraitSegmentation() {
  if (sketchSegmentationPromise) {
    return sketchSegmentationPromise;
  }

  sketchSegmentationPromise = loadScriptOnce(MEDIAPIPE_SELFIE_SEGMENTATION_SRC)
    .then(() => {
      if (!window.SelfieSegmentation) {
        throw new Error("SelfieSegmentation global is missing");
      }
      const segmenter = new window.SelfieSegmentation({
        locateFile: (file) => `${MEDIAPIPE_SELFIE_SEGMENTATION_ASSETS}/${file}`
      });
      segmenter.setOptions({
        modelSelection: 1,
        selfieMode: false
      });
      return segmenter;
    })
    .catch((error) => {
      console.warn("Portrait segmentation unavailable", error);
      sketchSegmentationPromise = null;
      return null;
    });

  return sketchSegmentationPromise;
}

const fourCutFrames = [
  {
    id: "classic",
    name: "Classic Ink",
    note: "手绘黑线",
    paper: "#f8f8f5",
    ink: "#111111",
    accent: "#111111",
    style: "solid"
  },
  {
    id: "white",
    name: "White Booth",
    note: "全白边框",
    paper: "#ffffff",
    ink: "#111111",
    accent: "#d7d2c8",
    style: "solid"
  },
  {
    id: "berry",
    name: "Berry Film",
    note: "粉红菲林边框",
    paper: "#fff3ef",
    ink: "#2c2924",
    accent: "#d35467",
    style: "solid"
  },
  {
    id: "sky",
    name: "Blue Film",
    note: "蓝色菲林边框",
    paper: "#e8f6fb",
    ink: "#263238",
    accent: "#367f9a",
    style: "solid"
  },
  {
    id: "notebook",
    name: "Notebook Day",
    note: "横线本相条",
    paper: "#fffaf0",
    ink: "#2c2924",
    accent: "#5b8fb5",
    style: "notebook"
  },
  {
    id: "star-pop",
    name: "Star Pop",
    note: "纯色星星随机边框",
    paper: "#fff8d8",
    ink: "#242018",
    accent: "#f0b429",
    style: "stars"
  },
  {
    id: "heart-stamp",
    name: "Heart Stamp",
    note: "红心印章边框",
    paper: "#fff0f3",
    ink: "#332126",
    accent: "#e04f63",
    style: "hearts"
  },
  {
    id: "checker",
    name: "Checker Tape",
    note: "复古棋盘胶带",
    paper: "#fffaf0",
    ink: "#222222",
    accent: "#111111",
    style: "checker"
  },
  {
    id: "ribbon",
    name: "Ribbon Blue",
    note: "丝带边框",
    paper: "#eef8f3",
    ink: "#20302d",
    accent: "#4e9d88",
    style: "ribbon"
  }
];

const state = {
  stream: null,
  selectedFrame: "cream",
  selectedFilter: "seoul",
  hasPhoto: false,
  rawPhoto: null,
  stickers: []
};

const fourCutState = {
  stream: null,
  selectedFrame: "berry",
  shots: []
};

const sketchFlowState = {
  step: "landing",
  frameIndex: 0,
  layout: "strip",
  ratio: "portrait",
  color: true,
  filterId: "color",
  backgroundStyleId: "none",
  stream: null,
  shots: [],
  printTimers: []
};

const SKETCH_COUNTDOWN_TICK_MS = 700;
const SKETCH_PRE_SHOT_PAUSE_MS = 300;
const SKETCH_BETWEEN_SHOTS_MS = 500;

const sketchFilters = [
  { id: "color", name: "Color", label: "Color film", css: "contrast(1.08) saturate(0.9) sepia(0.12)" },
  { id: "bw", name: "B&W", label: "Black and white", css: "grayscale(1) contrast(1.18)" },
  { id: "sepia", name: "Sepia", label: "Warm brown old photo", css: "sepia(0.72) saturate(0.9) contrast(1.05)" },
  { id: "vintage", name: "Vintage", label: "Faded warm retro", css: "sepia(0.24) saturate(0.72) contrast(0.94) brightness(1.06)" },
  { id: "warm", name: "Warm", label: "Warm bright skin tone", css: "sepia(0.2) saturate(1.12) brightness(1.06) contrast(1.02)" },
  { id: "noir", name: "Noir", label: "High contrast mono", css: "grayscale(1) contrast(1.48) brightness(0.96)" },
  { id: "vivid", name: "Vivid", label: "Punchy color", css: "saturate(1.48) contrast(1.14) brightness(1.02)" },
  { id: "pastel", name: "Pastel", label: "Soft light color", css: "contrast(0.84) saturate(0.72) brightness(1.13)" },
  { id: "dreamy", name: "Dreamy", label: "Bright soft glow", css: "contrast(0.9) saturate(1.12) brightness(1.13) blur(0.4px)" },
  { id: "bluefilm", name: "Blue Film", label: "Blue flash film look", css: "contrast(1.16) saturate(1.16) brightness(1.05)", grain: true, filmGrade: "blueFlash" },
  { id: "cinematic", name: "Cinematic", label: "Low-sat film mood", css: "contrast(1.2) saturate(0.78) brightness(0.98)" },
  { id: "blur", name: "Blur", label: "Soft focus", css: "blur(2px) contrast(1.04) saturate(0.94)" },
  { id: "trix", name: "Tri-X", label: "Classic grainy mono", css: "grayscale(1) contrast(1.32) brightness(1.02)", grain: true },
  { id: "acros", name: "Acros", label: "Fine soft mono", css: "grayscale(1) contrast(1.12) brightness(1.05)", grain: true },
  { id: "ortho", name: "Ortho", label: "Blue-sensitive mono", css: "grayscale(1) contrast(1.28) brightness(0.92) sepia(0.08)", grain: true },
  { id: "silver", name: "Silver", label: "Matte silver print", css: "grayscale(1) contrast(0.95) brightness(1.12)", grain: true },
  { id: "expired", name: "Expired", label: "Muted old film", css: "sepia(0.18) saturate(0.45) contrast(0.86) brightness(1.08)", grain: true }
];

const $ = (selector) => document.querySelector(selector);

const elements = {
  topModeNav: $("#topModeNav"),
  topModeButtons: document.querySelectorAll("#topModeNav [data-app-mode]"),
  legacyNavTabs: $(".nav-tabs"),
  sketchFlow: $(".sketch-flow"),
  legacyApp: $(".legacy-app"),
  sketchSteps: document.querySelectorAll("[data-sketch-step]"),
  sketchBackButtons: document.querySelectorAll("[data-sketch-back]"),
  sketchEnter: $("#sketchEnter"),
  sketchFrameSelect: $("#sketchFrameSelect"),
  sketchPrevFrame: $("#sketchPrevFrame"),
  sketchNextFrame: $("#sketchNextFrame"),
  sketchFilterToggle: $("#sketchFilterToggle"),
  sketchModeSample: $("#sketchModeSample"),
  sketchModeCards: document.querySelectorAll("[data-sketch-filter]"),
  sketchLayoutButtons: document.querySelectorAll("[data-sketch-layout]"),
  sketchFrameStyleButtons: document.querySelectorAll("[data-sketch-frame-style]"),
  sketchChoiceSummary: $("#sketchChoiceSummary"),
  sketchLiveSummary: $("#sketchLiveSummary"),
  sketchSelectFrame: $("#sketchSelectFrame"),
  sketchTakePhotoEntry: $("#sketchTakePhotoEntry"),
  sketchUploadEntry: $("#sketchUploadEntry"),
  sketchUploadInput: $("#sketchUploadInput"),
  sketchVideo: $("#sketchVideo"),
  sketchLiveMachine: $(".live-machine"),
  sketchLiveCanvas: $("#sketchLiveCanvas"),
  sketchStartShoot: $("#sketchStartShoot"),
  sketchShootCountdown: $("#sketchShootCountdown"),
  sketchShootProgress: $("#sketchShootProgress"),
  bgStyleButtons: $("#bgStyleButtons"),
  sketchOutputCanvas: $("#sketchOutputCanvas"),
  sketchPrintCountdown: $("#sketchPrintCountdown"),
  sketchPickup: $("#sketchPickup"),
  sketchFramePreview: $("#sketchFramePreview"),
  navTabs: document.querySelectorAll("[data-page-target]"),
  pages: document.querySelectorAll(".page-view"),
  video: $("#cameraFeed"),
  canvas: $("#photoCanvas"),
  status: $("#cameraStatus"),
  frameOptions: $("#frameOptions"),
  filterOptions: $("#filterOptions"),
  viewerWrap: $(".viewer-wrap"),
  startCamera: $("#startCamera"),
  takePhoto: $("#takePhoto"),
  retakePhoto: $("#retakePhoto"),
  downloadPhoto: $("#downloadPhoto"),
  useDemo: $("#useDemo"),
  caption: $("#captionInput"),
  dateToggle: $("#dateToggle"),
  grainToggle: $("#grainToggle"),
  stickerToggle: $("#stickerToggle"),
  stickerAmount: $("#stickerAmount"),
  randomizeStickers: $("#randomizeStickers"),
  countdown: $("#countdown"),
  flash: $("#flash"),
  fourCutVideo: $("#fourCutVideo"),
  fourCutCanvas: $("#fourCutCanvas"),
  fourFrameOptions: $("#fourFrameOptions"),
  fourStartCamera: $("#fourStartCamera"),
  fourStartSession: $("#fourStartSession"),
  fourRetake: $("#fourRetake"),
  fourDownload: $("#fourDownload"),
  fourUseDemo: $("#fourUseDemo"),
  fourCaption: $("#fourCaptionInput"),
  fourDateToggle: $("#fourDateToggle"),
  fourDoodleToggle: $("#fourDoodleToggle"),
  fourProgress: $("#fourProgress"),
  fourStatus: $("#fourCutStatus"),
  fourCountdown: $("#fourCountdown"),
  fourFlash: $("#fourFlash")
};

function getSelectedFrame() {
  return frames.find((frame) => frame.id === state.selectedFrame) || frames[0];
}

function getSelectedFilter() {
  return filters.find((filter) => filter.id === state.selectedFilter) || filters[0];
}

function renderOptions() {
  elements.frameOptions.innerHTML = frames.map((frame) => `
    <button class="frame-option ${frame.id === state.selectedFrame ? "is-selected" : ""}" type="button" data-frame="${frame.id}">
      <span class="frame-preview ${frame.id}"></span>
      <span class="option-name">${frame.name}</span>
      <span class="option-note">${frame.note}</span>
    </button>
  `).join("");

  elements.filterOptions.innerHTML = filters.map((filter) => `
    <button class="filter-option ${filter.id === state.selectedFilter ? "is-selected" : ""}" type="button" data-filter="${filter.id}">
      <span class="filter-swatch" style="filter: ${filter.css};"></span>
      <span>
        <span class="option-name">${filter.name}</span>
        <span class="option-note">${filter.note}</span>
      </span>
    </button>
  `).join("");
}

function renderFourFrameOptions() {
  elements.fourFrameOptions.innerHTML = fourCutFrames.map((frame) => `
    <button class="four-frame-option ${frame.id === fourCutState.selectedFrame ? "is-selected" : ""}" type="button" data-four-frame="${frame.id}">
      <span class="four-frame-preview ${frame.id}"></span>
      <span>
        <span class="option-name">${frame.name}</span>
        <span class="option-note">${frame.note}</span>
      </span>
    </button>
  `).join("");
}

function getSketchBackgroundStyle() {
  return backgroundStyles.find((style) => style.id === sketchFlowState.backgroundStyleId) || backgroundStyles[0];
}

function renderBackgroundStyleOptions() {
  if (!elements.bgStyleButtons) {
    return;
  }

  elements.bgStyleButtons.innerHTML = backgroundStyles.map((style) => `
    <button class="bg-style-button ${style.className} ${style.id === sketchFlowState.backgroundStyleId ? "is-selected" : ""}" type="button" data-bg-style="${style.id}" aria-pressed="${style.id === sketchFlowState.backgroundStyleId}">
      <span>${style.name}</span>
    </button>
  `).join("");
}

function syncPreviewStyle() {
  elements.viewerWrap.dataset.frame = state.selectedFrame;
  elements.video.style.filter = getSelectedFilter().css;
  elements.video.style.transform = "scaleX(-1)";
  elements.canvas.style.filter = "none";
}

function stopMediaStream(stream) {
  if (!stream) {
    return;
  }

  for (const track of stream.getTracks()) {
    track.stop();
  }
}

function switchPage(pageId) {
  for (const page of elements.pages) {
    page.classList.toggle("is-active", page.id === pageId);
  }

  for (const tab of elements.navTabs) {
    tab.classList.toggle("is-active", tab.dataset.pageTarget === pageId);
  }
}

function switchAppMode(mode) {
  const isSketch = mode === "sketch";
  elements.sketchFlow.classList.toggle("is-active", isSketch);
  elements.legacyApp.classList.toggle("is-active", !isSketch);

  for (const button of elements.topModeButtons) {
    button.classList.toggle("is-active", button.dataset.appMode === mode);
  }

  if (isSketch) {
    stopMediaStream(sketchFlowState.stream);
    sketchFlowState.stream = null;
    showSketchStep("landing");
    return;
  }

  stopMediaStream(sketchFlowState.stream);
  sketchFlowState.stream = null;

  if (mode === "polaroid") {
    switchPage("polaroidPage");
    return;
  }

  if (mode === "legacyFourCut") {
    switchPage("fourCutPage");
  }
}

function handleTopModeNavClick(event) {
  const button = event.target.closest("[data-app-mode]");
  if (!button || !elements.topModeNav.contains(button)) {
    return;
  }

  switchAppMode(button.dataset.appMode);
}

function handleLegacyNavClick(event) {
  const tab = event.target.closest("[data-page-target]");
  if (!tab || !elements.legacyNavTabs.contains(tab)) {
    return;
  }

  switchPage(tab.dataset.pageTarget);
}

function initNavigation() {
  elements.topModeNav?.addEventListener("click", handleTopModeNavClick);
  elements.legacyNavTabs?.addEventListener("click", handleLegacyNavClick);
}

function showSketchStep(step) {
  sketchFlowState.step = step;
  for (const panel of elements.sketchSteps) {
    panel.classList.toggle("is-active", panel.dataset.sketchStep === step);
  }
  if (step === "camera") {
    syncSketchLiveAspectRatio();
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

function clearSketchPrintTimers() {
  for (const timer of sketchFlowState.printTimers) {
    window.clearTimeout(timer);
  }
  sketchFlowState.printTimers = [];
}

function goBackSketchStep(targetStep) {
  clearSketchPrintTimers();
  if (sketchFlowState.stream) {
    stopMediaStream(sketchFlowState.stream);
    sketchFlowState.stream = null;
  }

  sketchFlowState.shots = [];
  if (elements.sketchVideo) {
    elements.sketchVideo.srcObject = null;
  }
  if (elements.sketchStartShoot) {
    elements.sketchStartShoot.disabled = false;
    elements.sketchStartShoot.textContent = "start 4 shots";
  }
  if (elements.sketchShootProgress) {
    elements.sketchShootProgress.textContent = "ready for 4 shots";
  }
  if (elements.sketchOutputCanvas) {
    elements.sketchOutputCanvas.classList.remove("is-delivered");
  }
  if (elements.sketchPickup) {
    elements.sketchPickup.disabled = true;
  }

  renderSketchSetupSummary();
  syncSketchLiveAspectRatio();
  showSketchStep(targetStep);
}

function getSketchFrame() {
  return fourCutFrames[sketchFlowState.frameIndex] || fourCutFrames[0];
}

function getSketchRatioLabel() {
  return sketchFlowState.ratio === "landscape" ? "4:3" : "3:4";
}

function getSketchLayoutLabel() {
  return sketchFlowState.layout === "grid" ? "2 x 2" : "4 x 1";
}

function getSketchFilter() {
  return sketchFilters.find((filter) => filter.id === sketchFlowState.filterId) || sketchFilters[0];
}

function applySketchLiveFilter() {
  const filter = getSketchFilter();
  if (elements.sketchVideo) {
    elements.sketchVideo.style.filter = filter.css;
    elements.sketchVideo.style.transform = "scaleX(-1) rotate(-1deg)";
  }
  elements.sketchLiveMachine?.classList.toggle("has-grain-filter", Boolean(filter.grain));
}

function syncSketchLiveAspectRatio() {
  const isLandscape = sketchFlowState.ratio === "landscape";
  elements.sketchLiveMachine?.classList.toggle("is-landscape", isLandscape);
  elements.sketchLiveMachine?.classList.toggle("is-portrait", !isLandscape);
  for (const target of [elements.sketchVideo, elements.sketchLiveCanvas]) {
    if (target) {
      target.style.aspectRatio = getSketchRatioLabel().replace(":", " / ");
    }
  }
}

function getSketchCaptureSize() {
  return sketchFlowState.ratio === "landscape" ? { width: 1200, height: 900 } : { width: 900, height: 1200 };
}

function renderSketchSetupSummary() {
  const frame = getSketchFrame();
  const background = getSketchBackgroundStyle();
  const setupSummary = [
    frame.name,
    `${getSketchLayoutLabel()} · ${getSketchRatioLabel()}`
  ].join(" / ");
  const liveSummary = [
    getSketchFilter().name,
    background.id === "none" ? "Original BG" : background.name,
    setupSummary
  ].join(" / ");

  if (elements.sketchChoiceSummary) {
    elements.sketchChoiceSummary.textContent = setupSummary;
  }
  if (elements.sketchLiveSummary) {
    elements.sketchLiveSummary.textContent = liveSummary;
  }
}

function renderSketchFramePreview() {
  const frame = getSketchFrame();
  if (!elements.sketchFramePreview) {
    return;
  }
  elements.sketchFramePreview.className = "selected-strip wobble-strip color";
  elements.sketchFramePreview.classList.add(`frame-style-${frame.id}`);
  elements.sketchFramePreview.classList.toggle("grid", sketchFlowState.layout === "grid");
  elements.sketchFramePreview.classList.toggle("landscape", sketchFlowState.ratio === "landscape");
  elements.sketchFramePreview.style.color = frame.accent;
  elements.sketchFramePreview.style.backgroundColor = frame.paper;
}

function renderSketchFrameStylePicker() {
  for (const button of elements.sketchFrameStyleButtons) {
    const isSelected = button.dataset.sketchFrameStyle === getSketchFrame().id;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  }
  renderSketchFramePreview();
  renderSketchSetupSummary();
}

function renderSketchLayoutPicker() {
  for (const button of elements.sketchLayoutButtons) {
    const isSelected = button.dataset.sketchLayout === sketchFlowState.layout
      && button.dataset.sketchRatio === sketchFlowState.ratio;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  }
  renderSketchFramePreview();
}

function renderSketchModePicker() {
  if (elements.sketchModeSample) {
    elements.sketchModeSample.classList.toggle("is-color", sketchFlowState.color);
    elements.sketchModeSample.classList.toggle("is-bw", !sketchFlowState.color);
  }

  for (const card of elements.sketchModeCards) {
    const isSelected = card.dataset.sketchFilter === sketchFlowState.filterId;
    card.classList.toggle("is-selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  }
}

function syncSketchFilterToggles(source) {
  if (source?.dataset?.sketchFilter) {
    sketchFlowState.filterId = source.dataset.sketchFilter;
  } else if (source) {
    sketchFlowState.filterId = source.checked ? "color" : "bw";
  }
  sketchFlowState.color = !["bw", "noir", "trix", "acros", "ortho", "silver"].includes(sketchFlowState.filterId);
  for (const toggle of [elements.sketchFilterToggle]) {
    if (toggle && toggle !== source) {
      toggle.checked = sketchFlowState.filterId === "color";
    }
  }
  renderSketchFramePreview();
  renderSketchModePicker();
  renderSketchSetupSummary();
  applySketchLiveFilter();
}

function handleSketchModeClick(event) {
  const card = event.target.closest("[data-sketch-filter]");
  if (!card) {
    return;
  }

  syncSketchFilterToggles(card);
}

function handleSketchLayoutClick(event) {
  const button = event.target.closest("[data-sketch-layout]");
  if (!button) {
    return;
  }

  sketchFlowState.layout = button.dataset.sketchLayout === "grid" ? "grid" : "strip";
  sketchFlowState.ratio = button.dataset.sketchRatio === "landscape" ? "landscape" : "portrait";
  renderSketchLayoutPicker();
  syncSketchLiveAspectRatio();
}

function handleSketchFrameStyleClick(event) {
  const button = event.target.closest("[data-sketch-frame-style]");
  if (!button) {
    return;
  }

  const nextIndex = fourCutFrames.findIndex((frame) => frame.id === button.dataset.sketchFrameStyle);
  if (nextIndex < 0) {
    return;
  }

  sketchFlowState.frameIndex = nextIndex;
  renderSketchFrameStylePicker();
}

function handleBackgroundStyleClick(event) {
  const button = event.target.closest("[data-bg-style]");
  if (!button) {
    return;
  }

  sketchFlowState.backgroundStyleId = button.dataset.bgStyle;
  renderBackgroundStyleOptions();
  renderSketchSetupSummary();
}

function cycleSketchFrame(direction) {
  const nextIndex = sketchFlowState.frameIndex + direction;
  sketchFlowState.frameIndex = (nextIndex + fourCutFrames.length) % fourCutFrames.length;
  renderSketchFramePreview();
}

async function startCamera() {
  try {
    state.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1600 }, height: { ideal: 2000 } },
      audio: false
    });
    elements.video.srcObject = state.stream;
    await elements.video.play();
    elements.status.textContent = "摄像头已开启";
    elements.takePhoto.disabled = false;
    elements.startCamera.textContent = "摄像头已连接";
  } catch (error) {
    elements.status.textContent = "摄像头不可用";
    elements.takePhoto.disabled = true;
    console.error("Camera failed", error);
  }
}

function setPhotoMode(hasPhoto) {
  state.hasPhoto = hasPhoto;
  elements.video.classList.toggle("is-visible", !hasPhoto);
  elements.canvas.classList.toggle("is-visible", hasPhoto);
  elements.retakePhoto.disabled = !hasPhoto;
  elements.downloadPhoto.disabled = !hasPhoto;
  elements.takePhoto.disabled = hasPhoto || !state.stream;
}

function drawCoverImage(ctx, image, x, y, width, height) {
  const sourceWidth = image.videoWidth || image.naturalWidth || image.width;
  const sourceHeight = image.videoHeight || image.naturalHeight || image.height;
  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = width / height;
  let sx = 0;
  let sy = 0;
  let sw = sourceWidth;
  let sh = sourceHeight;

  if (sourceRatio > targetRatio) {
    sw = sourceHeight * targetRatio;
    sx = (sourceWidth - sw) / 2;
  } else {
    sh = sourceWidth / targetRatio;
    sy = (sourceHeight - sh) / 2;
  }

  ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
}

function drawFrameDetails(ctx, frame, width, height, photoBox) {
  ctx.strokeStyle = withAlpha(frame.ink, 0.25);
  ctx.lineWidth = 4;
  ctx.strokeRect(36, 36, width - 72, height - 72);

  if (frame.id === "ticket") {
    ctx.setLineDash([18, 14]);
    ctx.beginPath();
    ctx.moveTo(56, height - 138);
    ctx.lineTo(width - 56, height - 138);
    ctx.stroke();
    ctx.setLineDash([]);
    drawCircleCut(ctx, 0, height * 0.5, 34, frame.paper);
    drawCircleCut(ctx, width, height * 0.5, 34, frame.paper);
  }

  if (frame.id === "doodle") {
    ctx.strokeStyle = frame.accent;
    ctx.lineWidth = 5;
    for (let i = 0; i < 7; i += 1) {
      const x = 64 + i * 78;
      const y = 62 + (i % 2) * 18;
      drawSpark(ctx, x, y, 12);
    }
    ctx.font = "28px Georgia, serif";
    ctx.fillStyle = frame.accent;
    ctx.fillText("xoxo", width - 150, height - 76);
  }

  if (frame.id === "black") {
    ctx.fillStyle = frame.accent;
    for (let x = 54; x < width - 54; x += 48) {
      ctx.fillRect(x, 52, 20, 12);
      ctx.fillRect(x, height - 154, 20, 12);
    }
  }

  if (frame.id === "blue") {
    ctx.fillStyle = withAlpha(frame.accent, 0.14);
    ctx.fillRect(photoBox.x - 12, photoBox.y - 12, photoBox.width + 24, 18);
    ctx.fillRect(photoBox.x - 12, photoBox.y + photoBox.height - 6, photoBox.width + 24, 18);
  }
}

function drawCircleCut(ctx, x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawSpark(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y - size);
  ctx.lineTo(x + 4, y - 4);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + 4, y + 4);
  ctx.lineTo(x, y + size);
  ctx.lineTo(x - 4, y + 4);
  ctx.lineTo(x - size, y);
  ctx.lineTo(x - 4, y - 4);
  ctx.closePath();
  ctx.stroke();
}

function drawGrain(ctx, width, height) {
  const grain = document.createElement("canvas");
  const grainCtx = grain.getContext("2d");
  const size = 180;
  grain.width = size;
  grain.height = size;

  const image = grainCtx.createImageData(size, size);
  for (let index = 0; index < image.data.length; index += 4) {
    const value = Math.random() > 0.5 ? 255 : 0;
    image.data[index] = value;
    image.data[index + 1] = value;
    image.data[index + 2] = value;
    image.data[index + 3] = 18;
  }
  grainCtx.putImageData(image, 0, 0);

  ctx.save();
  ctx.globalCompositeOperation = "soft-light";
  ctx.globalAlpha = 0.38;
  ctx.fillStyle = ctx.createPattern(grain, "repeat");
  ctx.fillRect(0, 0, width, height);
  ctx.restore();
}

function applyFilmGrade(ctx, filter, photoBox) {
  const grade = filter.grade;
  if (!grade) {
    return;
  }

  ctx.save();
  ctx.beginPath();
  ctx.rect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);
  ctx.clip();

  if (grade.fade) {
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = grade.fade;
    ctx.fillStyle = "#f7ead7";
    ctx.fillRect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);
  }

  if (grade.tint) {
    ctx.globalCompositeOperation = "soft-light";
    ctx.globalAlpha = grade.tintAlpha;
    ctx.fillStyle = grade.tint;
    ctx.fillRect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);
  }

  if (grade.vignette) {
    const centerX = photoBox.x + photoBox.width / 2;
    const centerY = photoBox.y + photoBox.height / 2;
    const radius = Math.max(photoBox.width, photoBox.height) * 0.72;
    const vignette = ctx.createRadialGradient(centerX, centerY, radius * 0.35, centerX, centerY, radius);
    vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
    vignette.addColorStop(1, `rgba(0, 0, 0, ${grade.vignette})`);
    ctx.globalCompositeOperation = "multiply";
    ctx.globalAlpha = 1;
    ctx.fillStyle = vignette;
    ctx.fillRect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);
  }

  ctx.restore();
}

function applySketchFilmGrade(ctx, filter, photoBox) {
  if (filter.filmGrade !== "blueFlash") {
    return;
  }

  ctx.save();
  ctx.beginPath();
  ctx.rect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);
  ctx.clip();

  ctx.globalCompositeOperation = "screen";
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#fff6df";
  ctx.fillRect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);

  ctx.globalCompositeOperation = "soft-light";
  ctx.globalAlpha = 0.28;
  const blueWash = ctx.createLinearGradient(photoBox.x, photoBox.y, photoBox.x, photoBox.y + photoBox.height);
  blueWash.addColorStop(0, "#294b73");
  blueWash.addColorStop(0.55, "#8fcde0");
  blueWash.addColorStop(1, "#fff2df");
  ctx.fillStyle = blueWash;
  ctx.fillRect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);

  ctx.globalCompositeOperation = "overlay";
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = "#e68b54";
  ctx.fillRect(photoBox.x, photoBox.y + photoBox.height * 0.38, photoBox.width, photoBox.height * 0.62);

  const centerX = photoBox.x + photoBox.width / 2;
  const centerY = photoBox.y + photoBox.height * 0.42;
  const radius = Math.max(photoBox.width, photoBox.height) * 0.78;
  const vignette = ctx.createRadialGradient(centerX, centerY, radius * 0.28, centerX, centerY, radius);
  vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
  vignette.addColorStop(1, "rgba(14, 32, 58, 0.28)");
  ctx.globalCompositeOperation = "multiply";
  ctx.globalAlpha = 1;
  ctx.fillStyle = vignette;
  ctx.fillRect(photoBox.x, photoBox.y, photoBox.width, photoBox.height);

  ctx.save();
  ctx.translate(photoBox.x, photoBox.y);
  drawGrain(ctx, photoBox.width, photoBox.height);
  ctx.restore();
  ctx.restore();
}

function generateStickerLayout(photoBox) {
  const count = Number(elements.stickerAmount.value);
  const padding = 72;

  return Array.from({ length: count }, (_, index) => {
    const preset = stickerTypes[index % stickerTypes.length];
    const color = preset.colors[Math.floor(Math.random() * preset.colors.length)];
    return {
      type: preset.type,
      color,
      x: photoBox.x + padding + Math.random() * (photoBox.width - padding * 2),
      y: photoBox.y + padding + Math.random() * (photoBox.height - padding * 2),
      size: 30 + Math.random() * 46,
      rotation: -0.5 + Math.random(),
      alpha: 0.72 + Math.random() * 0.24
    };
  });
}

function drawStickers(ctx, photoBox) {
  if (!elements.stickerToggle.checked) {
    return;
  }

  if (state.stickers.length !== Number(elements.stickerAmount.value)) {
    state.stickers = generateStickerLayout(photoBox);
  }

  for (const sticker of state.stickers) {
    drawSticker(ctx, sticker);
  }
}

function drawSticker(ctx, sticker) {
  ctx.save();
  ctx.translate(sticker.x, sticker.y);
  ctx.rotate(sticker.rotation);
  ctx.globalAlpha = sticker.alpha;
  ctx.lineWidth = Math.max(3, sticker.size * 0.08);
  ctx.strokeStyle = sticker.strokeAlpha === 0 ? "transparent" : `rgba(35, 31, 28, ${sticker.strokeAlpha ?? 0.18})`;
  ctx.fillStyle = sticker.color;

  if (sticker.type === "heart") {
    drawHeart(ctx, sticker.size);
  }

  if (sticker.type === "star") {
    drawStar(ctx, sticker.size);
  }

  if (sticker.type === "spark") {
    drawSparkSticker(ctx, sticker.size);
  }

  if (sticker.type === "dot") {
    ctx.beginPath();
    ctx.arc(0, 0, sticker.size * 0.38, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

function drawHeart(ctx, size) {
  const scale = size / 64;
  ctx.beginPath();
  ctx.moveTo(0, 22 * scale);
  ctx.bezierCurveTo(-38 * scale, -4 * scale, -24 * scale, -34 * scale, 0, -18 * scale);
  ctx.bezierCurveTo(24 * scale, -34 * scale, 38 * scale, -4 * scale, 0, 22 * scale);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawStar(ctx, size) {
  const outer = size * 0.48;
  const inner = size * 0.21;
  ctx.beginPath();
  for (let i = 0; i < 10; i += 1) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = -Math.PI / 2 + i * Math.PI / 5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawSparkSticker(ctx, size) {
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.52);
  ctx.lineTo(size * 0.12, -size * 0.12);
  ctx.lineTo(size * 0.52, 0);
  ctx.lineTo(size * 0.12, size * 0.12);
  ctx.lineTo(0, size * 0.52);
  ctx.lineTo(-size * 0.12, size * 0.12);
  ctx.lineTo(-size * 0.52, 0);
  ctx.lineTo(-size * 0.12, -size * 0.12);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

function drawCaption(ctx, frame, width, height) {
  const caption = elements.caption.value.trim() || "SEOUL MEMORY";
  ctx.fillStyle = frame.ink;
  ctx.font = "700 34px Georgia, serif";
  ctx.textAlign = "left";
  ctx.fillText(caption.toUpperCase(), 64, height - 78);

  if (elements.dateToggle.checked) {
    ctx.font = "24px Courier New, monospace";
    ctx.textAlign = "right";
    ctx.fillText(new Date().toLocaleDateString("zh-CN"), width - 64, height - 78);
  }
}

function renderPhoto(source) {
  const canvas = elements.canvas;
  const ctx = canvas.getContext("2d");
  const width = 1200;
  const height = 1500;
  const frame = getSelectedFrame();
  const filter = getSelectedFilter();
  const photoBox = { x: 92, y: 92, width: 1016, height: 1086 };
  const rawPhoto = captureSource(source, photoBox.width, photoBox.height);

  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = frame.paper;
  ctx.fillRect(0, 0, width, height);
  ctx.save();
  ctx.filter = filter.css;
  ctx.drawImage(rawPhoto, photoBox.x, photoBox.y, photoBox.width, photoBox.height);
  ctx.restore();
  applyFilmGrade(ctx, filter, photoBox);
  drawStickers(ctx, photoBox);
  drawFrameDetails(ctx, frame, width, height, photoBox);
  drawCaption(ctx, frame, width, height);

  if (elements.grainToggle.checked) {
    drawGrain(ctx, width, height);
  }

  state.rawPhoto = rawPhoto;
  setPhotoMode(true);
}

function captureSource(source, width, height) {
  const rawPhoto = document.createElement("canvas");
  const rawCtx = rawPhoto.getContext("2d");
  rawPhoto.width = width;
  rawPhoto.height = height;
  if (isVideoSource(source)) {
    rawCtx.save();
    rawCtx.translate(width, 0);
    rawCtx.scale(-1, 1);
    drawCoverImage(rawCtx, source, 0, 0, width, height);
    rawCtx.restore();
    return rawPhoto;
  }

  drawCoverImage(rawCtx, source, 0, 0, width, height);
  return rawPhoto;
}

function isVideoSource(source) {
  return source instanceof HTMLVideoElement;
}

function withAlpha(hex, alpha) {
  const clean = hex.replace("#", "");
  const red = parseInt(clean.slice(0, 2), 16);
  const green = parseInt(clean.slice(2, 4), 16);
  const blue = parseInt(clean.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

async function runCountdown() {
  for (const value of [3, 2, 1]) {
    elements.countdown.textContent = value;
    elements.countdown.classList.add("is-active");
    await delay(700);
    elements.countdown.classList.remove("is-active");
    await delay(120);
  }
  elements.countdown.textContent = "";
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function takePhoto() {
  if (!state.stream) {
    return;
  }
  elements.takePhoto.disabled = true;
  await runCountdown();
  elements.flash.classList.remove("is-on");
  void elements.flash.offsetWidth;
  elements.flash.classList.add("is-on");
  renderPhoto(elements.video);
  elements.status.textContent = "照片已生成";
}

function retakePhoto() {
  state.rawPhoto = null;
  state.stickers = [];
  setPhotoMode(false);
  elements.status.textContent = state.stream ? "摄像头已开启" : "等待开启摄像头";
}

function downloadPhoto() {
  const link = document.createElement("a");
  link.download = `seoul-film-booth-${Date.now()}.png`;
  link.href = elements.canvas.toDataURL("image/png");
  link.click();
}

function getSelectedFourFrame() {
  return fourCutFrames.find((frame) => frame.id === fourCutState.selectedFrame) || fourCutFrames[0];
}

async function startFourCutCamera() {
  try {
    fourCutState.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 960 } },
      audio: false
    });
    elements.fourCutVideo.srcObject = fourCutState.stream;
    elements.fourCutVideo.style.transform = "scaleX(-1)";
    await elements.fourCutVideo.play();
    elements.fourStartSession.disabled = false;
    elements.fourStartCamera.textContent = "摄像头已连接";
    elements.fourStatus.textContent = "准备四连拍";
  } catch (error) {
    elements.fourStatus.textContent = "摄像头不可用";
    elements.fourStartSession.disabled = true;
    console.error("Four cut camera failed", error);
  }
}

function updateFourProgress() {
  const slots = elements.fourProgress.querySelectorAll("span");
  slots.forEach((slot, index) => {
    slot.classList.toggle("is-filled", index < fourCutState.shots.length);
  });
}

async function startFourCutSession() {
  if (!fourCutState.stream) {
    return;
  }

  fourCutState.shots = [];
  setFourCutOutputMode(false);
  elements.fourStartSession.disabled = true;
  elements.fourStatus.textContent = "四连拍进行中";
  updateFourProgress();

  for (let index = 0; index < 4; index += 1) {
    await runFourCountdown();
    flashFourCut();
    fourCutState.shots = [...fourCutState.shots, captureSource(elements.fourCutVideo, 900, 900)];
    updateFourProgress();
  }

  if (fourCutState.shots.length === 4) {
    renderFourCutStrip();
    elements.fourStatus.textContent = "四格已生成";
  }
}

async function runFourCountdown() {
  for (const value of [3, 2, 1]) {
    elements.fourCountdown.textContent = value;
    elements.fourCountdown.classList.add("is-active");
    await delay(520);
    elements.fourCountdown.classList.remove("is-active");
    await delay(90);
  }
  elements.fourCountdown.textContent = "";
}

function flashFourCut() {
  elements.fourFlash.classList.remove("is-on");
  void elements.fourFlash.offsetWidth;
  elements.fourFlash.classList.add("is-on");
}

function setFourCutOutputMode(hasOutput) {
  elements.fourCutVideo.classList.toggle("is-visible", !hasOutput);
  elements.fourCutCanvas.classList.toggle("is-visible", hasOutput);
  elements.fourRetake.disabled = !hasOutput;
  elements.fourDownload.disabled = !hasOutput;
  elements.fourStartSession.disabled = hasOutput || !fourCutState.stream;
}

function renderFourCutStrip() {
  const fourCutCanvas = elements.fourCutCanvas;
  const ctx = fourCutCanvas.getContext("2d");
  const frame = getSelectedFourFrame();
  const width = 900;
  const height = 2400;
  const margin = 58;
  const gap = 26;
  const photoSize = width - margin * 2;

  fourCutCanvas.width = width;
  fourCutCanvas.height = height;
  ctx.fillStyle = frame.paper;
  ctx.fillRect(0, 0, width, height);
  drawFourCutPaper(ctx, frame, width, height);

  fourCutState.shots.forEach((shot, index) => {
    const y = margin + index * (photoSize + gap);
    ctx.save();
    ctx.filter = "contrast(1.08) saturate(0.9) sepia(0.18) brightness(1.04)";
    ctx.drawImage(shot, margin, y, photoSize, photoSize);
    ctx.restore();
    ctx.strokeStyle = frame.ink;
    ctx.lineWidth = 5;
    ctx.strokeRect(margin, y, photoSize, photoSize);
  });

  drawFourCutCaption(ctx, frame, width, height);
  if (elements.fourDoodleToggle.checked) {
    drawFourCutDoodles(ctx, frame, width, height);
  }
  drawGrain(ctx, width, height);
  setFourCutOutputMode(true);
}

function drawFourCutPaper(ctx, frame, width, height) {
  ctx.strokeStyle = frame.ink;
  ctx.lineWidth = 7;
  ctx.setLineDash([22, 14]);
  ctx.strokeRect(24, 24, width - 48, height - 48);
  ctx.setLineDash([]);

  if (frame.id === "notebook") {
    ctx.strokeStyle = withAlpha(frame.accent, 0.34);
    ctx.lineWidth = 3;
    for (let y = 80; y < height - 80; y += 72) {
      ctx.beginPath();
      ctx.moveTo(34, y);
      ctx.lineTo(width - 34, y);
      ctx.stroke();
    }
  }
}

function drawFourCutCaption(ctx, frame, width, height) {
  ctx.fillStyle = frame.ink;
  ctx.textAlign = "center";
  ctx.font = "700 52px Comic Sans MS, Bradley Hand, cursive";
  ctx.fillText((elements.fourCaption.value.trim() || "FILM LIFE").toUpperCase(), width / 2, height - 86);

  if (elements.fourDateToggle.checked) {
    ctx.font = "28px Courier New, monospace";
    ctx.fillText(new Date().toLocaleDateString("zh-CN"), width / 2, height - 44);
  }
}

function drawFourCutDoodles(ctx, frame, width, height) {
  const doodles = [
    { x: 92, y: 70, type: "star" },
    { x: width - 90, y: 88, type: "heart" },
    { x: 86, y: height - 150, type: "spark" },
    { x: width - 82, y: height - 156, type: "star" }
  ];

  for (const doodle of doodles) {
    drawSticker(ctx, {
      ...doodle,
      color: frame.accent,
      size: 58,
      rotation: doodle.x > width / 2 ? 0.22 : -0.22,
      alpha: 0.86
    });
  }
}

function retakeFourCut() {
  fourCutState.shots = [];
  setFourCutOutputMode(false);
  elements.fourStatus.textContent = fourCutState.stream ? "准备四连拍" : "先打开摄像头";
  updateFourProgress();
}

function downloadFourCut() {
  const fourCutCanvas = elements.fourCutCanvas;
  const link = document.createElement("a");
  link.download = `film-life-four-cut-${Date.now()}.png`;
  link.href = fourCutCanvas.toDataURL("image/png");
  link.click();
}

function createFourCutDemoShot(index) {
  const demo = document.createElement("canvas");
  const ctx = demo.getContext("2d");
  demo.width = 900;
  demo.height = 900;
  const palettes = [
    ["#f7bdc5", "#3c6170"],
    ["#f7d985", "#47735f"],
    ["#b7dce7", "#d46f59"],
    ["#ead7f0", "#2c2924"]
  ];
  const [start, end] = palettes[index % palettes.length];
  const gradient = ctx.createLinearGradient(0, 0, demo.width, demo.height);
  gradient.addColorStop(0, start);
  gradient.addColorStop(1, end);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, demo.width, demo.height);
  ctx.fillStyle = "rgba(255, 250, 240, 0.72)";
  ctx.beginPath();
  ctx.arc(450, 370, 170, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(35, 31, 28, 0.48)";
  ctx.fillRect(230, 590, 440, 150);
  ctx.fillStyle = "#fffaf0";
  ctx.font = "700 72px Comic Sans MS, cursive";
  ctx.textAlign = "center";
  ctx.fillText(`CUT ${index + 1}`, 450, 690);
  return demo;
}

function useFourCutDemo() {
  fourCutState.shots = [0, 1, 2, 3].map((index) => createFourCutDemoShot(index));
  updateFourProgress();
  renderFourCutStrip();
  elements.fourStatus.textContent = "样片四格已生成";
}

async function startSketchCamera() {
  try {
    sketchFlowState.stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 1280 } },
      audio: false
    });
    elements.sketchVideo.srcObject = sketchFlowState.stream;
    elements.sketchVideo.style.transform = "scaleX(-1) rotate(-1deg)";
    await elements.sketchVideo.play();
    renderSketchSetupSummary();
    syncSketchLiveAspectRatio();
    applySketchLiveFilter();
    elements.sketchShootProgress.textContent = "ready for 4 shots";
    elements.sketchStartShoot.disabled = false;
    showSketchStep("camera");
  } catch (error) {
    console.error("Sketch camera failed", error);
    sketchFlowState.stream = null;
    renderSketchSetupSummary();
    syncSketchLiveAspectRatio();
    elements.sketchShootProgress.textContent = "camera unavailable, demo 4 shots";
    elements.sketchStartShoot.disabled = false;
    elements.sketchStartShoot.textContent = "start 4 shots";
    showSketchStep("camera");
  }
}

async function startSketchShoot() {
  sketchFlowState.shots = [];
  elements.sketchStartShoot.disabled = true;
  elements.sketchStartShoot.textContent = "shooting";
  for (let index = 0; index < 4; index += 1) {
    await delay(SKETCH_PRE_SHOT_PAUSE_MS);
    await runSketchCountdown(index);
    const shot = await captureSketchShot(index);
    sketchFlowState.shots = [...sketchFlowState.shots, shot];
    elements.sketchShootProgress.textContent = `saved ${sketchFlowState.shots.length} / 4`;
    if (index < 3) {
      await delay(SKETCH_BETWEEN_SHOTS_MS);
    }
  }

  if (sketchFlowState.shots.length === 4) {
    elements.sketchShootProgress.textContent = "printing";
    showSketchPrint();
  }
  elements.sketchStartShoot.disabled = false;
  elements.sketchStartShoot.textContent = "start 4 shots";
}

async function captureSketchShot(index) {
  let source;
  if (sketchFlowState.stream) {
    const captureSize = getSketchCaptureSize();
    source = captureSource(elements.sketchVideo, captureSize.width, captureSize.height);
  } else {
    source = createFourCutDemoShot(index);
  }

  return replaceSketchPortraitBackground(source, index);
}

async function runSketchCountdown(index) {
  elements.sketchShootProgress.textContent = `shot ${index + 1} / 4`;
  for (const value of [3, 2, 1]) {
    elements.sketchShootCountdown.textContent = value;
    await delay(SKETCH_COUNTDOWN_TICK_MS);
  }
  elements.sketchShootCountdown.textContent = "";
}

async function useSketchDemo() {
  elements.sketchShootProgress.textContent = "processing background";
  sketchFlowState.shots = await processSketchShotSources(
    [0, 1, 2, 3].map((index) => createFourCutDemoShot(index))
  );
  elements.sketchShootProgress.textContent = "printing";
  showSketchPrint();
}

function uploadSketchPhoto(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const image = new Image();
  image.onload = async () => {
    const captureSize = getSketchCaptureSize();
    elements.sketchShootProgress.textContent = "processing background";
    const source = captureSource(image, captureSize.width, captureSize.height);
    sketchFlowState.shots = await processSketchShotSources([source, source, source, source]);
    elements.sketchShootProgress.textContent = "printing";
    showSketchPrint();
    URL.revokeObjectURL(image.src);
    event.target.value = "";
  };
  image.src = URL.createObjectURL(file);
}

async function processSketchShotSources(sources) {
  const shots = [];
  for (const [index, source] of sources.entries()) {
    shots.push(await replaceSketchPortraitBackground(source, index));
  }
  return shots;
}

async function replaceSketchPortraitBackground(source, index = 0) {
  const background = getSketchBackgroundStyle();
  if (background.type === "none") {
    return source;
  }

  elements.sketchShootProgress.textContent = "cutting portrait";
  const segmenter = await initPortraitSegmentation();
  if (!segmenter) {
    elements.sketchShootProgress.textContent = "background tool unavailable";
    return source;
  }

  try {
    const results = await segmentPortrait(segmenter, source);
    return composePortraitBackground(source, results.segmentationMask, background, index);
  } catch (error) {
    console.warn("Portrait background replacement failed", error);
    elements.sketchShootProgress.textContent = "using original background";
    return source;
  }
}

function segmentPortrait(segmenter, source) {
  return new Promise((resolve, reject) => {
    segmenter.onResults(resolve);
    Promise.resolve(segmenter.send({ image: source })).catch(reject);
  });
}

function composePortraitBackground(source, mask, background, patternIndex = 0) {
  const width = source.width || source.videoWidth || source.naturalWidth;
  const height = source.height || source.videoHeight || source.naturalHeight;
  const output = document.createElement("canvas");
  const outputCtx = output.getContext("2d");
  output.width = width;
  output.height = height;

  applyBackgroundToCanvas(output, background, patternIndex);

  const portrait = document.createElement("canvas");
  const portraitCtx = portrait.getContext("2d");
  portrait.width = width;
  portrait.height = height;
  portraitCtx.filter = getSketchFilter().css;
  portraitCtx.drawImage(source, 0, 0, width, height);
  portraitCtx.filter = "none";
  applySketchFilmGrade(portraitCtx, getSketchFilter(), { x: 0, y: 0, width, height });
  portraitCtx.globalCompositeOperation = "destination-in";
  portraitCtx.filter = "blur(1px)";
  portraitCtx.drawImage(mask, 0, 0, width, height);

  outputCtx.drawImage(portrait, 0, 0);
  output.dataset.sketchFilterApplied = "true";
  return output;
}

function showSketchPrint() {
  clearSketchPrintTimers();
  renderSketchOutputStrip();
  showSketchStep("print");
  elements.sketchPickup.disabled = true;
  elements.sketchOutputCanvas.classList.remove("is-delivered");
  elements.sketchPrintCountdown.textContent = "2";
  const tickTimer = window.setTimeout(() => {
    elements.sketchPrintCountdown.textContent = "1";
  }, 700);
  const deliverTimer = window.setTimeout(() => {
    elements.sketchPrintCountdown.textContent = "0";
    elements.sketchOutputCanvas.classList.add("is-delivered");
    elements.sketchPickup.disabled = false;
    sketchFlowState.printTimers = [];
  }, 1400);
  sketchFlowState.printTimers = [tickTimer, deliverTimer];
}

function getSketchOutputLayout() {
  return sketchFlowState.layout === "grid" ? "grid" : "strip";
}

function getSketchPhotoAspectRatio() {
  return sketchFlowState.ratio === "landscape" ? 4 / 3 : 3 / 4;
}

function renderSketchOutputStrip() {
  const sketchOutputCanvas = elements.sketchOutputCanvas;
  const ctx = sketchOutputCanvas.getContext("2d");
  const frame = getSketchFrame();
  const outputLayout = getSketchOutputLayout();
  const aspectRatio = getSketchPhotoAspectRatio();
  const borderWidth = 8;
  const margin = outputLayout === "grid" ? 42 : 34;
  const gap = outputLayout === "grid" ? 26 : 20;
  const width = outputLayout === "grid" ? 1080 : 520;
  const photoWidth = outputLayout === "grid" ? (width - margin * 2 - gap) / 2 : width - margin * 2;
  const photoHeight = photoWidth / aspectRatio;
  const captionHeight = outputLayout === "grid" ? 56 : 36;
  const gridHeight = outputLayout === "grid"
    ? photoHeight * 2 + gap
    : photoHeight * 4 + gap * 3;
  const height = Math.round(margin * 2 + captionHeight + gridHeight + 56);

  sketchOutputCanvas.width = width;
  sketchOutputCanvas.height = height;
  ctx.fillStyle = frame.paper;
  ctx.fillRect(0, 0, width, height);
  drawDecoratedFrameBackground(ctx, frame, width, height, margin, captionHeight);
  ctx.strokeStyle = frame.accent;
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(borderWidth / 2, borderWidth / 2, width - borderWidth, height - borderWidth);

  sketchFlowState.shots.forEach((shot, index) => {
    const column = outputLayout === "grid" ? index % 2 : 0;
    const row = outputLayout === "grid" ? Math.floor(index / 2) : index;
    const x = margin + column * (photoWidth + gap);
    const y = margin + captionHeight + row * (photoHeight + gap);
    ctx.save();
    const filter = getSketchFilter();
    ctx.filter = shot.dataset?.sketchFilterApplied === "true" ? "none" : filter.css;
    drawCoverImage(ctx, shot, x, y, photoWidth, photoHeight);
    ctx.restore();
    if (shot.dataset?.sketchFilterApplied !== "true") {
      applySketchFilmGrade(ctx, filter, { x, y, width: photoWidth, height: photoHeight });
    }
    drawSketchPhotoFrame(ctx, frame, x, y, photoWidth, photoHeight, borderWidth, index);
  });

  ctx.fillStyle = frame.ink;
  ctx.font = "700 26px Comic Sans MS, cursive";
  ctx.textAlign = "center";
  ctx.fillText(outputLayout === "grid" ? "film life 2x2" : "film life 4x1", width / 2, margin + 24);
  ctx.font = "700 18px Comic Sans MS, cursive";
  ctx.fillText(`${Math.round(photoWidth)} x ${Math.round(photoHeight)} ${getSketchRatioLabel()}`, width / 2, height - 28);
  drawGrain(ctx, width, height);
}

function drawSketchPhotoFrame(ctx, frame, x, y, width, height, borderWidth, index) {
  const style = frame.style || "solid";
  ctx.save();
  ctx.strokeStyle = frame.accent;
  ctx.lineWidth = borderWidth;
  ctx.strokeRect(x + borderWidth / 2, y + borderWidth / 2, width - borderWidth, height - borderWidth);

  if (style === "stars") {
    drawPhotoFrameStickers(ctx, frame, x, y, width, height, [
      [0.08, 0.08, 26, -0.2, "star"], [0.24, 0.06, 16, 0.18, "star"], [0.78, 0.08, 22, -0.12, "star"],
      [0.94, 0.26, 18, 0.16, "star"], [0.08, 0.74, 20, -0.18, "star"], [0.82, 0.92, 24, 0.2, "star"]
    ]);
  }

  if (style === "hearts") {
    drawPhotoFrameStickers(ctx, frame, x, y, width, height, [
      [0.1, 0.1, 20, -0.18, "heart"], [0.88, 0.12, 18, 0.16, "heart"],
      [0.12, 0.86, 18, 0.2, "heart"], [0.9, 0.84, 22, -0.16, "heart"]
    ]);
  }

  if (style === "checker") {
    drawPhotoCheckerCorners(ctx, frame, x, y, width, height);
  }

  if (style === "ribbon") {
    drawPhotoRibbonFrame(ctx, frame, x, y, width, height, index);
  }

  if (style === "notebook") {
    drawPhotoNotebookFrame(ctx, frame, x, y, width, height);
  }

  if (style === "solid" && frame.id !== "classic") {
    drawPhotoTapeLabel(ctx, frame, x, y, width);
  }

  ctx.restore();
}

function drawPhotoFrameStickers(ctx, frame, x, y, width, height, stickers) {
  for (const [xRatio, yRatio, size, rotation, type] of stickers) {
    drawSticker(ctx, {
      x: x + width * xRatio,
      y: y + height * yRatio,
      type,
      color: frame.accent,
      size,
      rotation,
      alpha: 0.95,
      strokeAlpha: 0
    });
  }
}

function drawPhotoCheckerCorners(ctx, frame, x, y, width, height) {
  const block = 16;
  ctx.fillStyle = frame.accent;
  for (let i = 0; i < 5; i += 1) {
    if (i % 2 === 0) {
      ctx.fillRect(x + i * block, y, block, block);
      ctx.fillRect(x + width - (i + 1) * block, y + height - block, block, block);
    } else {
      ctx.fillRect(x + i * block, y + block, block, block);
      ctx.fillRect(x + width - (i + 1) * block, y + height - block * 2, block, block);
    }
  }
}

function drawPhotoRibbonFrame(ctx, frame, x, y, width, height, index) {
  ctx.strokeStyle = withAlpha(frame.accent, 0.8);
  ctx.lineWidth = 5;
  ctx.setLineDash([18, 12]);
  ctx.strokeRect(x + 14, y + 14, width - 28, height - 28);
  ctx.setLineDash([]);
  ctx.fillStyle = withAlpha(frame.accent, 0.72);
  const ribbonY = index % 2 === 0 ? y + 10 : y + height - 24;
  ctx.fillRect(x + width * 0.18, ribbonY, width * 0.64, 14);
}

function drawPhotoNotebookFrame(ctx, frame, x, y, width, height) {
  ctx.strokeStyle = withAlpha(frame.accent, 0.36);
  ctx.lineWidth = 2;
  for (let lineY = y + 32; lineY < y + height - 18; lineY += 34) {
    ctx.beginPath();
    ctx.moveTo(x + 12, lineY);
    ctx.lineTo(x + width - 12, lineY);
    ctx.stroke();
  }
}

function drawPhotoTapeLabel(ctx, frame, x, y, width) {
  ctx.fillStyle = withAlpha(frame.accent, frame.id === "white" ? 0.34 : 0.22);
  ctx.fillRect(x + width * 0.35, y + 10, width * 0.3, 18);
  ctx.strokeStyle = frame.accent;
  ctx.lineWidth = 3;
  ctx.strokeRect(x + width * 0.35, y + 10, width * 0.3, 18);
}

function drawDecoratedFrameBackground(ctx, frame, width, height, margin, captionHeight) {
  const style = frame.style || "solid";
  if (style === "stars") {
    drawBorderStickers(ctx, frame, width, height, [
      [0.12, 0.06, 34, -0.2], [0.34, 0.045, 25, 0.18], [0.62, 0.07, 30, -0.12], [0.84, 0.05, 24, 0.24],
      [0.08, 0.22, 26, 0.1], [0.91, 0.24, 34, -0.18], [0.1, 0.48, 24, 0.24], [0.88, 0.5, 28, -0.08],
      [0.12, 0.76, 34, 0.16], [0.86, 0.72, 24, -0.22], [0.28, 0.94, 26, 0.2], [0.72, 0.93, 34, -0.16]
    ], "star");
    return;
  }

  if (style === "hearts") {
    drawBorderStickers(ctx, frame, width, height, [
      [0.15, 0.065, 16, -0.15], [0.5, 0.055, 13, 0.14], [0.82, 0.07, 16, -0.18],
      [0.08, 0.32, 13, 0.2], [0.92, 0.34, 17, -0.1], [0.1, 0.66, 16, -0.18],
      [0.9, 0.68, 13, 0.18], [0.32, 0.935, 15, 0.12], [0.68, 0.93, 16, -0.16]
    ], "heart");
    return;
  }

  if (style === "checker") {
    drawCheckerTape(ctx, frame, width, height, margin);
    return;
  }

  if (style === "ribbon") {
    drawRibbonFrame(ctx, frame, width, height, margin, captionHeight);
    return;
  }

  if (style === "notebook") {
    drawNotebookLines(ctx, frame, width, height);
  }
}

function drawBorderStickers(ctx, frame, width, height, points, type) {
  for (const [xRatio, yRatio, size, rotation] of points) {
    drawSticker(ctx, {
      x: width * xRatio,
      y: height * yRatio,
      type,
      color: frame.accent,
      size,
      rotation,
      alpha: 0.92,
      strokeAlpha: 0
    });
  }
}

function drawCheckerTape(ctx, frame, width, height, margin) {
  const block = 18;
  ctx.fillStyle = withAlpha(frame.accent, 0.86);
  for (let x = margin - 18; x < width - margin + 18; x += block) {
    if (Math.floor(x / block) % 2 === 0) {
      ctx.fillRect(x, 22, block, block);
      ctx.fillRect(x, height - 42, block, block);
    }
  }
  for (let y = margin; y < height - margin; y += block) {
    if (Math.floor(y / block) % 2 === 0) {
      ctx.fillRect(22, y, block, block);
      ctx.fillRect(width - 42, y, block, block);
    }
  }
}

function drawRibbonFrame(ctx, frame, width, height, margin, captionHeight) {
  ctx.fillStyle = withAlpha(frame.accent, 0.18);
  ctx.fillRect(margin - 18, captionHeight + 18, 16, height - captionHeight - margin - 36);
  ctx.fillRect(width - margin + 2, captionHeight + 18, 16, height - captionHeight - margin - 36);
  ctx.strokeStyle = withAlpha(frame.accent, 0.72);
  ctx.lineWidth = 4;
  ctx.setLineDash([14, 12]);
  ctx.strokeRect(margin - 20, captionHeight + 16, width - margin * 2 + 40, height - captionHeight - margin - 32);
  ctx.setLineDash([]);
}

function drawNotebookLines(ctx, frame, width, height) {
  ctx.strokeStyle = withAlpha(frame.accent, 0.25);
  ctx.lineWidth = 2;
  for (let y = 56; y < height - 44; y += 38) {
    ctx.beginPath();
    ctx.moveTo(24, y);
    ctx.lineTo(width - 24, y);
    ctx.stroke();
  }
}

function pickUpSketchPhoto() {
  const sketchOutputCanvas = elements.sketchOutputCanvas;
  const link = document.createElement("a");
  link.download = `sketchbooth-four-cut-${Date.now()}.png`;
  link.href = sketchOutputCanvas.toDataURL("image/png");
  link.click();
}

function createDemoImage() {
  const demo = document.createElement("canvas");
  const ctx = demo.getContext("2d");
  demo.width = 1200;
  demo.height = 1500;

  const gradient = ctx.createLinearGradient(0, 0, demo.width, demo.height);
  gradient.addColorStop(0, "#f1c9a7");
  gradient.addColorStop(0.45, "#496f86");
  gradient.addColorStop(1, "#231f1c");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, demo.width, demo.height);

  ctx.fillStyle = "rgba(255, 248, 232, 0.7)";
  ctx.beginPath();
  ctx.arc(625, 520, 210, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(35, 31, 28, 0.44)";
  ctx.fillRect(250, 880, 700, 260);
  ctx.fillStyle = "#fff5e6";
  ctx.font = "700 86px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("SEOUL", 600, 1010);
  ctx.font = "38px Courier New, monospace";
  ctx.fillText("sample preview", 600, 1086);

  return demo;
}

function useDemoPhoto() {
  state.stickers = generateStickerLayout({ x: 92, y: 92, width: 1016, height: 1086 });
  renderPhoto(createDemoImage());
  elements.status.textContent = "样张已生成";
}

function rerenderIfNeeded() {
  syncPreviewStyle();
  if (state.hasPhoto && state.rawPhoto) {
    renderPhoto(state.rawPhoto);
  }
}

function bindClick(target, eventName, handler) {
  if (target) {
    target.addEventListener(eventName, handler);
  }
}

function bindEvents() {
  initNavigation();

  bindClick(elements.sketchEnter, "click", () => showSketchStep("select"));
  for (const button of elements.sketchBackButtons) {
    button.addEventListener("click", () => goBackSketchStep(button.dataset.sketchBack));
  }
  bindClick(elements.sketchPrevFrame, "click", () => cycleSketchFrame(-1));
  bindClick(elements.sketchNextFrame, "click", () => cycleSketchFrame(1));
  elements.sketchSelectFrame.addEventListener("click", () => {
    renderSketchSetupSummary();
    syncSketchLiveAspectRatio();
    showSketchStep("choice");
  });
  elements.sketchTakePhotoEntry.addEventListener("click", startSketchCamera);
  elements.sketchUploadEntry.addEventListener("click", () => elements.sketchUploadInput.click());
  elements.sketchUploadInput.addEventListener("change", uploadSketchPhoto);
  elements.sketchStartShoot.addEventListener("click", startSketchShoot);
  elements.sketchPickup.addEventListener("click", pickUpSketchPhoto);
  for (const card of elements.sketchModeCards) {
    card.addEventListener("click", handleSketchModeClick);
  }
  for (const button of elements.sketchLayoutButtons) {
    button.addEventListener("click", handleSketchLayoutClick);
  }
  for (const button of elements.sketchFrameStyleButtons) {
    button.addEventListener("click", handleSketchFrameStyleClick);
  }
  bindClick(elements.bgStyleButtons, "click", handleBackgroundStyleClick);
  bindClick(elements.sketchFilterToggle, "change", () => syncSketchFilterToggles(elements.sketchFilterToggle));

  bindClick(elements.startCamera, "click", startCamera);
  elements.takePhoto.addEventListener("click", takePhoto);
  elements.retakePhoto.addEventListener("click", retakePhoto);
  elements.downloadPhoto.addEventListener("click", downloadPhoto);
  elements.useDemo.addEventListener("click", useDemoPhoto);
  elements.caption.addEventListener("input", rerenderIfNeeded);
  elements.dateToggle.addEventListener("change", rerenderIfNeeded);
  elements.grainToggle.addEventListener("change", rerenderIfNeeded);
  elements.stickerToggle.addEventListener("change", rerenderIfNeeded);
  elements.stickerAmount.addEventListener("input", () => {
    state.stickers = [];
    rerenderIfNeeded();
  });
  elements.randomizeStickers.addEventListener("click", () => {
    state.stickers = [];
    rerenderIfNeeded();
  });

  elements.frameOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-frame]");
    if (!button) {
      return;
    }
    state.selectedFrame = button.dataset.frame;
    renderOptions();
    rerenderIfNeeded();
  });

  elements.filterOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) {
      return;
    }
    state.selectedFilter = button.dataset.filter;
    renderOptions();
    rerenderIfNeeded();
  });

  elements.fourStartCamera.addEventListener("click", startFourCutCamera);
  elements.fourStartSession.addEventListener("click", startFourCutSession);
  elements.fourRetake.addEventListener("click", retakeFourCut);
  elements.fourDownload.addEventListener("click", downloadFourCut);
  elements.fourUseDemo.addEventListener("click", useFourCutDemo);
  elements.fourCaption.addEventListener("input", () => {
    if (fourCutState.shots.length === 4) {
      renderFourCutStrip();
    }
  });
  elements.fourDateToggle.addEventListener("change", () => {
    if (fourCutState.shots.length === 4) {
      renderFourCutStrip();
    }
  });
  elements.fourDoodleToggle.addEventListener("change", () => {
    if (fourCutState.shots.length === 4) {
      renderFourCutStrip();
    }
  });
  elements.fourFrameOptions.addEventListener("click", (event) => {
    const button = event.target.closest("[data-four-frame]");
    if (!button) {
      return;
    }
    fourCutState.selectedFrame = button.dataset.fourFrame;
    renderFourFrameOptions();
    if (fourCutState.shots.length === 4) {
      renderFourCutStrip();
    }
  });
}

function boot() {
  renderOptions();
  renderFourFrameOptions();
  renderBackgroundStyleOptions();
  renderSketchFramePreview();
  renderSketchModePicker();
  renderSketchLayoutPicker();
  renderSketchSetupSummary();
  syncSketchLiveAspectRatio();
  syncPreviewStyle();
  updateFourProgress();
  bindEvents();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
