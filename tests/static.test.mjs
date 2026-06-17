import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("page exposes the complete photo booth workflow", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");

  for (const id of [
    "cameraFeed",
    "photoCanvas",
    "startCamera",
    "takePhoto",
    "retakePhoto",
    "downloadPhoto",
    "frameOptions",
    "filterOptions",
    "captionInput",
    "grainToggle",
    "stickerToggle",
    "stickerAmount",
    "randomizeStickers"
  ]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test("top navigation exposes all product modes", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  for (const target of ["sketch", "polaroid", "legacyFourCut"]) {
    assert.match(html, new RegExp(`data-app-mode="${target}"`));
  }

  assert.match(html, /id="topModeNav"/);
  assert.match(script, /function switchAppMode/);
  assert.match(script, /function initNavigation/);
  assert.match(script, /handleTopModeNavClick/);
  assert.match(css, /\.legacy-app\.is-active/);
  assert.match(css, /z-index: 10000/);
});

test("page exposes navigation between polaroid and four cut booth", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");

  assert.match(html, /data-page-target="polaroidPage"/);
  assert.match(html, /data-page-target="fourCutPage"/);
  assert.match(html, /id="polaroidPage"/);
  assert.match(html, /id="fourCutPage"/);
  assert.match(html, /菲林人生四格/);
});

test("four cut booth exposes capture, frame selection, output, and download controls", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");

  for (const id of [
    "sketchLanding",
    "sketchEnter",
    "sketchFrameSelect",
    "sketchFilterToggle",
    "sketchSelectFrame",
    "sketchCameraChoice",
    "sketchTakePhotoEntry",
    "sketchUploadEntry",
    "sketchUploadInput",
    "sketchCamera",
    "sketchVideo",
    "sketchZoomRange",
    "sketchZoomValue",
    "sketchStartShoot",
    "sketchPrint",
    "sketchOutputCanvas",
    "sketchPrintPreviewCanvas",
    "sketchPickup",
    "fourCutVideo",
    "fourCutCanvas",
    "fourFrameOptions",
    "fourStartCamera",
    "fourStartSession",
    "fourRetake",
    "fourDownload",
    "fourUseDemo",
    "fourCaptionInput",
    "fourProgress"
  ]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test("four cut page follows the sketch booth state flow", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  assert.match(script, /const sketchFlowState =/);
  assert.match(script, /function showSketchStep/);
  assert.match(script, /function renderSketchFramePreview/);
  assert.match(script, /function renderBackgroundStyleOptions/);
  assert.match(script, /async function startSketchCamera/);
  assert.match(script, /async function startSketchShoot/);
  assert.match(script, /function showSketchPrint/);
  assert.match(script, /function renderSketchPrintPreview/);
  assert.match(script, /function handleSketchPrintPreviewClick/);
  assert.match(script, /function syncSketchLiveAspectRatio/);
  assert.match(script, /function getSketchCaptureSize/);
  assert.match(script, /function renderSketchFrameStylePicker/);
  assert.match(script, /function handleSketchFrameStyleClick/);
  assert.match(script, /function drawDecoratedFrameBackground/);
  assert.match(script, /function drawBorderStickers/);
  assert.match(script, /function drawSketchPhotoFrame/);
  assert.match(script, /function getSketchOutputMetrics/);
  assert.match(script, /function drawSketchFramePreviewCanvas/);
  assert.match(script, /function drawSketchOutputBase/);
  assert.match(script, /function drawPhotoFrameStickers/);
  assert.match(script, /function replaceSketchPortraitBackground/);
  assert.match(script, /function initPortraitSegmentation/);
  assert.match(script, /function composePortraitBackground/);
  assert.match(script, /function applySketchFilmGrade/);
  assert.match(script, new RegExp('style\\.aspectRatio = getSketchRatioLabel\\(\\)\\.replace\\(":", " / "\\)'));
  assert.match(script, /captureSource\(elements\.sketchVideo, captureSize\.width, captureSize\.height, sketchFlowState\.zoom\)/);
  assert.match(script, /const SKETCH_CAPTURE_SCALE = 2/);
  assert.match(script, /const SKETCH_OUTPUT_SCALE = 3/);
  assert.match(script, /const SKETCH_MIN_ZOOM = 1/);
  assert.match(script, /const SKETCH_MAX_ZOOM = 3/);
  assert.match(script, /function setSketchZoom/);
  assert.match(script, /function syncSketchZoomControls/);
  assert.match(script, /function getZoomedDrawRect/);
  assert.match(script, /captureSource\(image, captureSize\.width, captureSize\.height, sketchFlowState\.zoom\)/);
  assert.match(script, /width: 1200 \* SKETCH_CAPTURE_SCALE/);
  assert.match(script, /height: 1200 \* SKETCH_CAPTURE_SCALE/);
  assert.match(css, /\.live-machine\.is-landscape \.live-preview-window/);
  assert.match(css, /\.live-preview-window/);
  assert.match(css, /overflow:\s*hidden/);
  assert.match(css, /\.zoom-control/);
  assert.match(css, /\.zoom-range/);
  assert.match(css, /\.zoom-value/);
  assert.match(html, /id="sketchShootProgress"/);
  assert.match(html, /id="sketchZoomRange"/);
  assert.match(html, /id="sketchZoomValue"/);
  assert.match(html, /start 4 shots/);
  assert.match(script, /runSketchCountdown\(index\)/);
  assert.match(script, /await captureSketchShot\(index\)/);
  assert.match(script, /return replaceSketchPortraitBackground\(source, index\)/);
  assert.match(script, /shot\.dataset\?\.sketchFilterApplied === "true" \? "none" : filter\.css/);
  assert.match(script, /applySketchFilmGrade\(ctx, filter, photoBox\)/);
  assert.match(script, /const SKETCH_COUNTDOWN_TICK_MS = 700/);
  assert.match(script, /const SKETCH_BETWEEN_SHOTS_MS = 500/);
  assert.match(script, /const SKETCH_PRE_SHOT_PAUSE_MS = 300/);
  assert.match(script, /await delay\(SKETCH_BETWEEN_SHOTS_MS\)/);
  assert.match(script, /await delay\(SKETCH_PRE_SHOT_PAUSE_MS\)/);
  assert.match(script, /shot \$\{index \+ 1\} \/ 4/);
  assert.match(script, /saved \$\{sketchFlowState\.shots\.length\} \/ 4/);
  assert.match(script, /drawDecoratedFrameBackground\(ctx, frame, metrics\.width, metrics\.height, metrics\.margin, metrics\.captionHeight\)/);
  assert.match(script, /drawSketchPhotoFrame\(ctx, frame, photoBox\.x, photoBox\.y, photoBox\.width, photoBox\.height, metrics\.borderWidth, index\)/);
  assert.match(script, /style === "stars"/);
  assert.match(script, /elements\.sketchOutputCanvas\.addEventListener\("click", handleSketchPrintPreviewClick\)/);
  assert.match(script, /const outputCanvas = elements\.sketchOutputCanvas/);
  assert.match(script, /previewCanvas\.width = outputCanvas\.width/);
  assert.match(script, /previewCanvas\.height = outputCanvas\.height/);
  assert.match(script, /ctx\.drawImage\(outputCanvas, 0, 0\)/);
  assert.match(css, /\.print-layout \.delivery-sign[\s\S]*overflow:\s*hidden/);
  assert.match(css, /\.print-layout \.delivery-sign span/);
  assert.match(css, /delivery-sign::before[\s\S]*rgba\(255,255,255,0\.86\)/);
  assert.match(css, /pickup-button::before[\s\S]*rgba\(255,255,255,0\.88\)/);
  assert.doesNotMatch(script, /if \(!sketchFlowState\.stream\) \{\s*useSketchDemo\(\);\s*return;\s*\}/);
  assert.match(script, /sketchFlowState\.shots\.length === 4/);
  assert.match(script, /sketchOutputCanvas\.toDataURL\("image\/png"\)/);
});

test("sketch camera supports portrait background replacement", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  assert.match(html, /id="bgStylePanel"/);
  assert.match(html, /id="bgStyleButtons"/);
  assert.match(html, /Background/);
  assert.match(script, /const backgroundStyles =/);
  assert.match(script, /id: "blue-studio"/);
  assert.match(script, /id: "sage-studio"/);
  assert.match(script, /id: "white-studio"/);
  assert.match(script, /id: "mono-stars"/);
  assert.match(script, /id: "flash-glow"/);
  assert.match(script, /const starPatterns = \[/);
  assert.match(script, /const stars = starPatterns\[patternIndex % starPatterns\.length\]/);
  assert.match(script, /for \(const \[xRatio, yRatio, sizeRatio, rotation, filled\] of stars\)/);
  assert.match(script, /Math\.min\(width, height\) \* sizeRatio/);
  assert.match(script, /\[0\.31, 0\.09, 0\.12, -0\.16, true\]/);
  assert.match(script, /\[0\.44, 0\.72, 0\.12, 0\.12, true\]/);
  assert.match(script, /drawBackgroundStars\(ctx, width, height, bgStyle\.colors\[1\], patternIndex\)/);
  assert.match(script, /MEDIAPIPE_SELFIE_SEGMENTATION_SRC/);
  assert.match(script, /window\.SelfieSegmentation/);
  assert.match(script, /segmenter\.send\(\{ image: source \}\)/);
  assert.match(script, /applyBackgroundToCanvas\(output, background, patternIndex\)/);
  assert.match(script, /portraitCtx\.filter = getSketchFilter\(\)\.css/);
  assert.match(script, /applySketchFilmGrade\(portraitCtx, getSketchFilter\(\), \{ x: 0, y: 0, width, height \}\)/);
  assert.match(script, /output\.dataset\.sketchFilterApplied = "true"/);
  assert.match(script, /globalCompositeOperation = "destination-in"/);
  assert.match(script, /processSketchShotSources/);
  assert.match(script, /data-bg-style/);
  assert.match(css, /\.bg-style-panel/);
  assert.match(css, /\.bg-style-button\.star-bg/);
  assert.match(css, /\.bg-style-button\.star-bg::before/);
  assert.match(css, /polygon points/);
  assert.doesNotMatch(css, /radial-gradient\(circle at 16% 45%/);
  assert.match(css, /\.bg-style-button\.flash-bg/);
  assert.match(css, /\.print-layout \.pickup-button/);
  assert.match(css, /\.print-preview-panel/);
  assert.match(css, /\.print-preview-panel canvas/);
  assert.match(css, /\.printer-window canvas/);
});

test("sketch setup exposes multiple selectable frame styles", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  for (const frameId of [
    "classic",
    "white",
    "berry",
    "sky",
    "notebook",
    "star-pop",
    "heart-stamp",
    "checker",
    "ribbon"
  ]) {
    assert.match(html, new RegExp(`data-sketch-frame-style="${frameId}"`));
  }

  assert.match(html, /class="[^"]*frame-style-panel/);
  assert.match(html, /Star Pop/);
  assert.match(script, /name: "Star Pop"/);
  assert.match(script, /note: "纯色星星随机边框"/);
  assert.match(script, /style: "stars"/);
  assert.match(script, /drawPhotoCheckerCorners/);
  assert.match(script, /drawPhotoRibbonFrame/);
  assert.match(script, /drawPhotoNotebookFrame/);
  assert.match(script, /drawPhotoTapeLabel/);
  assert.match(script, /sketchFrameStyleButtons/);
  assert.match(script, /dataset\.sketchFrameStyle/);
  assert.match(script, /frame\.name/);
  assert.match(css, /\.frame-style-panel/);
  assert.match(css, /\.frame-style-button\.is-selected/);
  assert.match(script, /drawSketchOutputBase\(ctx, frame, metrics\)/);
  assert.match(script, /drawSketchPhotoFrame\(ctx, frame, photoBox\.x, photoBox\.y, photoBox\.width, photoBox\.height, metrics\.borderWidth, index\)/);
  assert.match(css, /\.frame-style-star-pop/);
});

test("sketch flow exposes back buttons for every post-landing step", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  for (const id of [
    "sketchBackFromSelect",
    "sketchBackFromChoice",
    "sketchBackFromCamera",
    "sketchBackFromPrint"
  ]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }

  assert.match(html, /class="[^"]*sketch-back-button/);
  assert.match(script, /function goBackSketchStep/);
  assert.match(script, /function clearSketchPrintTimers/);
  assert.match(script, /sketchBackButtons/);
  assert.match(script, /data-sketch-back/);
  assert.match(script, /stopMediaStream\(sketchFlowState\.stream\)/);
  assert.match(script, /sketchFlowState\.shots = \[\]/);
  assert.match(script, /sketchFlowState\.printTimers = \[\]/);
  assert.match(css, /\.sketch-back-button/);
});

test("sketch setup only chooses layout ratio before camera filters", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");
  const selectSection = html.match(/<section class="sketch-step" id="sketchFrameSelect"[\s\S]*?<\/section>/)?.[0] ?? "";
  const cameraSection = html.match(/<section class="sketch-step" id="sketchCamera"[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.match(cameraSection, /data-sketch-filter="bw"/);
  assert.match(cameraSection, /data-sketch-filter="color"/);
  assert.match(cameraSection, /data-sketch-filter="sepia"/);
  assert.match(cameraSection, /data-sketch-filter="vintage"/);
  assert.match(cameraSection, /data-sketch-filter="warm"/);
  assert.match(cameraSection, /data-sketch-filter="noir"/);
  assert.match(cameraSection, /data-sketch-filter="vivid"/);
  assert.match(cameraSection, /data-sketch-filter="pastel"/);
  assert.match(cameraSection, /data-sketch-filter="dreamy"/);
  assert.match(cameraSection, /data-sketch-filter="bluefilm"/);
  assert.match(cameraSection, /data-sketch-filter="cinematic"/);
  assert.match(cameraSection, /data-sketch-filter="blur"/);
  assert.match(cameraSection, /data-sketch-filter="trix"/);
  assert.match(cameraSection, /data-sketch-filter="acros"/);
  assert.match(cameraSection, /data-sketch-filter="ortho"/);
  assert.match(cameraSection, /data-sketch-filter="silver"/);
  assert.match(cameraSection, /data-sketch-filter="expired"/);
  assert.doesNotMatch(selectSection, /data-sketch-filter/);
  assert.doesNotMatch(selectSection, /sketchPrevFrame/);
  assert.doesNotMatch(selectSection, /sketchNextFrame/);
  assert.doesNotMatch(selectSection, /blank-sign/);
  assert.doesNotMatch(selectSection, /instruction-card/);
  assert.doesNotMatch(selectSection, /price-badge/);
  assert.doesNotMatch(selectSection, /console-label/);
  assert.match(selectSection, /step-note-frame/);
  assert.match(selectSection, /step-note-action/);
  assert.match(html, /Black and white photo filter/);
  assert.match(html, /Color film photo filter/);
  assert.match(html, /Choose layout and photo ratio/);
  assert.match(html, /Press the button to confirm your setup/);
  assert.match(script, /const sketchFilters =/);
  assert.match(script, /grain: true/);
  assert.match(script, /function getSketchFilter/);
  assert.match(script, /function applySketchLiveFilter/);
  assert.match(script, /has-grain-filter/);
  assert.match(script, /function renderSketchModePicker/);
  assert.match(script, /handleSketchModeClick/);
  assert.match(script, /filmGrade: "blueFlash"/);
  assert.match(script, /Blue flash film look/);
  assert.match(script, /blueWash\.addColorStop\(0, "#294b73"\)/);
  assert.match(css, /\.filter-mode-panel/);
  assert.match(css, /\.live-filter-panel/);
  assert.match(html, /class="filter-style-note">Filter/);
  assert.match(css, /\.filter-style-note/);
  assert.match(css, /grid-auto-flow: column/);
  assert.match(css, /overflow-x: auto/);
  assert.match(css, /\.live-machine\.has-grain-filter::after/);
  assert.match(css, /\.filter-select-layout \.side-console/);
  assert.match(css, /\.filter-mode-card\.is-selected/);
  assert.match(css, /\.filter-mode-label/);
  assert.match(css, /\.step-note-number/);
  assert.match(css, /\.sketch-flow::before/);
  assert.match(css, /\.filter-mode-actions \.filter-mode-card\[data-sketch-filter="color"\]\.is-selected[\s\S]*?background:\s*#f6e3b8/);
}
);

test("sketch frame selection supports border themes, layouts, and aspect ratios", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  assert.match(html, /data-sketch-layout="strip" data-sketch-ratio="portrait"/);
  assert.match(html, /data-sketch-layout="strip" data-sketch-ratio="landscape"/);
  assert.match(html, /data-sketch-layout="grid" data-sketch-ratio="portrait"/);
  assert.match(html, /data-sketch-layout="grid" data-sketch-ratio="landscape"/);
  assert.match(html, /4 x 1 · 3:4/);
  assert.match(html, /4 x 1 · 4:3/);
  assert.match(html, /2 x 2 · 3:4/);
  assert.match(html, /2 x 2 · 4:3/);
  assert.match(script, /layout: "strip"/);
  assert.match(script, /ratio: "portrait"/);
  assert.match(script, /sketchLayoutButtons/);
  assert.match(script, /function renderSketchLayoutPicker/);
  assert.match(script, /function getSketchOutputLayout/);
  assert.match(script, /function getSketchPhotoAspectRatio/);
  assert.match(script, /function getSketchRatioLabel/);
  assert.match(script, /classList\.toggle\("landscape", sketchFlowState\.ratio === "landscape"\)/);
  assert.match(script, /photoHeight = photoWidth \/ aspectRatio/);
  assert.match(script, /sketchFlowState\.ratio = button\.dataset\.sketchRatio === "landscape" \? "landscape" : "portrait"/);
  assert.match(script, /getSketchRatioLabel\(\)/);
  assert.match(script, /const borderWidth = 8/);
  assert.match(css, /\.layout-choice-panel/);
  assert.match(css, /grid-template-columns: repeat\(2, minmax\(0, 1fr\)\)/);
  assert.match(css, /\.selected-strip\.grid/);
  assert.match(css, /\.selected-strip\.landscape/);
  assert.match(css, /\.selected-strip\.grid\.landscape/);
  assert.match(script, /getSketchPhotoBox\(metrics, index\)/);
  assert.match(script, /drawSketchOutputCaption\(ctx, frame, metrics\)/);
});

test("sketch choice page inherits the selected setup instead of reselecting filters", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const script = await readFile(new URL("app.js", root), "utf8");
  const choiceSection = html.match(/<section class="sketch-step" id="sketchCameraChoice"[\s\S]*?<\/section>/)?.[0] ?? "";

  assert.match(choiceSection, /id="sketchChoiceSummary"/);
  assert.match(choiceSection, /class="choice-summary/);
  assert.doesNotMatch(choiceSection, /id="sketchChoiceFilterToggle"/);
  assert.doesNotMatch(choiceSection, /instruction-card/);
  assert.doesNotMatch(choiceSection, /price-badge/);
  assert.match(script, /sketchChoiceSummary/);
  assert.match(script, /function renderSketchSetupSummary/);
  assert.match(script, /renderSketchSetupSummary\(\);[\s\S]*showSketchStep\("choice"\)/);
  assert.doesNotMatch(script, /syncSketchFilterToggles\(elements\.sketchLiveFilterToggle\)/);
});

test("sketch flow has mobile-specific layout guards", async () => {
  const css = await readFile(new URL("styles.css", root), "utf8");

  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /body\s*\{[\s\S]*?overflow-x:\s*hidden/);
  assert.match(css, /\.sketch-step\s*\{[\s\S]*?overflow:\s*hidden/);
  assert.match(css, /\.machine-layout\s*\{[\s\S]*?width:\s*390px/);
  assert.match(css, /transform:\s*scale\(min\(0\.86,\s*calc\(\(100vw - 24px\) \/ 390\)\)\)/);
  assert.match(css, /\.filter-select-layout \.frame-machine\s*\{[\s\S]*?left:\s*80px/);
  assert.match(css, /\.camera-choice-machine,\s*\n\s*\.live-machine\s*\{[\s\S]*?left:\s*42px/);
  assert.match(css, /#sketchCamera \.side-console\s*\{[\s\S]*?left:\s*147px/);
});

test("sketch landing uses the simplified three-panel photobooth facade", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  for (const className of [
    "sign-supports",
    "booth-top-rail",
    "booth-left-panel",
    "booth-curtain-panel",
    "booth-side-panel",
    "featured-display",
    "footer-links"
  ]) {
    assert.match(html, new RegExp(`class="[^"]*${className}`));
  }

  assert.match(css, /\.booth-facade/);
  assert.match(css, /grid-template-columns: minmax\(320px, 1\.15fr\) minmax\(260px, 0\.72fr\) minmax\(120px, 0\.36fr\)/);
});

test("sketch landing footer exposes clickable credit and policy links", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  assert.match(html, /href="https:\/\/xhslink\.com\/m\/3OxIKd8fa7B"[^>]*>@geekfocus<\/a>/);
  assert.match(html, /href="#contact"[^>]*>Contact Me<\/a>/);
  assert.match(html, /href="mailto:geekfocus\.ai@gmail\.com"[^>]*>geekfocus\.ai@gmail\.com<\/a>/);

  for (const href of ["#privacy", "#faq", "#about", "#contact"]) {
    assert.match(html, new RegExp(`href="${href}"`));
  }

  for (const sectionId of ["privacy", "faq", "about", "contact"]) {
    assert.match(html, new RegExp(`id="${sectionId}"`));
  }

  assert.match(html, /AI builder/);
  assert.match(html, /CS PhD/);
  assert.match(html, /Photos are processed locally in your browser/);
  assert.match(css, /\.info-panel:target/);
});

test("app defines multiple Korean film booth frames and filters", async () => {
  const script = await readFile(new URL("app.js", root), "utf8");
  const framesBlock = script.slice(script.indexOf("const frames = ["), script.indexOf("const filters = ["));
  const frameIds = [...framesBlock.matchAll(/id: "([a-z]+)",\n\s+name: ".*?",\n\s+note: ".*?",\n\s+paper:/g)].map((match) => match[1]);
  const filterIds = [...script.matchAll(/id: "([a-z]+)",\n\s+name: ".*?",\n\s+note: ".*?",\n\s+css:/g)].map((match) => match[1]);

  assert.deepEqual(frameIds, ["cream", "black", "ticket", "blue", "doodle"]);
  assert.deepEqual(filterIds, [
    "seoul",
    "portra",
    "chrome",
    "mono",
    "faded",
    "fujichrome",
    "fujiclassicneg",
    "fujivelvia",
    "fujieterna",
    "fujiacros",
    "ricohpositive",
    "ricohnegative",
    "ricohbleach"
  ]);
});

test("final image generation supports download and canvas export", async () => {
  const script = await readFile(new URL("app.js", root), "utf8");

  assert.match(script, /canvas\.toDataURL\("image\/png"\)/);
  assert.match(script, /navigator\.mediaDevices\.getUserMedia/);
  assert.match(script, /ctx\.filter = filter\.css/);
});

test("camera previews and captured video frames are mirrored", async () => {
  const script = await readFile(new URL("app.js", root), "utf8");
  const css = await readFile(new URL("styles.css", root), "utf8");

  assert.match(css, /\.viewer-media\.is-camera/);
  assert.match(css, /\.fourcut-video\.is-visible/);
  assert.match(css, /\.sketch-video/);
  assert.match(css, /scaleX\(-1\)/);
  assert.match(script, /function isVideoSource/);
  assert.match(script, /elements\.video\.style\.transform = "scaleX\(-1\)"/);
  assert.match(script, /elements\.sketchVideo\.style\.transform = getSketchZoomTransform\(true\)/);
  assert.match(script, /return `\$\{mirror\}scale\(\$\{sketchFlowState\.zoom\}\)`/);
  assert.match(script, /elements\.fourCutVideo\.style\.transform = "scaleX\(-1\)"/);
  assert.match(script, /rawCtx\.translate\(drawRect\.x \+ drawRect\.width, drawRect\.y\)/);
  assert.match(script, /rawCtx\.scale\(-1, 1\)/);
});

test("stickers can be randomly generated and drawn onto exported photos", async () => {
  const script = await readFile(new URL("app.js", root), "utf8");

  assert.match(script, /function generateStickerLayout/);
  assert.match(script, /function drawSticker/);
  assert.match(script, /type: "heart"/);
  assert.match(script, /type: "star"/);
  assert.match(script, /drawStickers\(ctx, photoBox\)/);
});

test("four cut booth logic captures four frames into a downloadable strip", async () => {
  const script = await readFile(new URL("app.js", root), "utf8");

  assert.match(script, /const fourCutFrames =/);
  assert.match(script, /const fourCutState =/);
  assert.match(script, /async function startFourCutSession/);
  assert.match(script, /function renderFourCutStrip/);
  assert.match(script, /fourCutState\.shots\.length === 4/);
  assert.match(script, /fourCutCanvas\.toDataURL\("image\/png"\)/);
});
