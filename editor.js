'use strict';

// ═══════════════════════════════
//  EDITOR — RetroCamV8
//  Редактор фотографий с фильтрами
// ═══════════════════════════════

document.addEventListener('DOMContentLoaded', function() {

// ── DOM ──────────────────────────────────────────────────────────────────────
const edScreen      = document.getElementById('editor-screen');
const edCanvas      = document.getElementById('editor-canvas');
const edCtx         = edCanvas.getContext('2d', {willReadFrequently:true});
const edEmpty       = document.getElementById('editor-empty');
const edEmptyIcon   = document.getElementById('editor-empty-icon');
const edFileInput   = document.getElementById('editor-file-input');
const edSaveBtn     = document.getElementById('editor-save-btn');
const edExitBtn     = document.getElementById('editor-exit-btn');
const edLoadBtn     = document.getElementById('editor-load-btn');
const edSettingsBtn = document.getElementById('editor-settings-btn');
const edSliders     = document.getElementById('editor-sliders-panel');
const edSlidersBody = document.getElementById('editor-sliders-body');
const edSlidersClose= document.getElementById('editor-sliders-close');
const edFilterItems = document.querySelectorAll('.efc');
const editorMenuRow = document.getElementById('editor-menu-row');
const edPreviewArea = document.getElementById('editor-preview-area');
const edUploadHint  = document.getElementById('editor-upload-hint-btn');

// ── STATE ─────────────────────────────────────────────────────────────────────
let edMode        = 'f1960';
let sourceImage   = null;
let hasPhoto      = false;
let renderPending = false;

// Настройки фильтров редактора — отдельно от настроек камеры
const EFS = {};
for (const [m, d] of Object.entries(DEFS)) {
  EFS[m] = {};
  for (const s of d.sliders) EFS[m][s.key] = s.def;
}

// ── ИКОНКА ПУСТОГО СОСТОЯНИЯ ──────────────────────────────────────────────────
function drawEmptyIcon() {
  const c   = edEmptyIcon;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 120, 120);
  ctx.strokeStyle = '#4a4030';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  if(ctx.roundRect) ctx.roundRect(15, 20, 90, 70, 6);
  else { ctx.rect(15, 20, 90, 70); }
  ctx.stroke();
  ctx.strokeStyle = '#3a3020';
  ctx.lineWidth   = 1.5;
  ctx.beginPath();
  ctx.moveTo(25, 75); ctx.lineTo(50, 45); ctx.lineTo(65, 60);
  ctx.lineTo(80, 40); ctx.lineTo(105, 75);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(85, 38, 8, 0, Math.PI * 2);
  ctx.strokeStyle = '#5a4a20';
  ctx.stroke();
  ctx.strokeStyle = '#c9a84c';
  ctx.lineWidth   = 2.5;
  ctx.lineCap     = 'round';
  ctx.beginPath();
  ctx.moveTo(60, 97); ctx.lineTo(60, 107);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(52, 100); ctx.lineTo(60, 110); ctx.lineTo(68, 100);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(48, 112); ctx.lineTo(72, 112);
  ctx.stroke();
}

// ── ОТКРЫТЬ / ЗАКРЫТЬ ─────────────────────────────────────────────────────────
function openEditor() {
  edScreen.style.display   = 'flex';
  edScreen.style.transform = 'translateY(100%)';
  edScreen.style.transition = 'none';
  // форсируем reflow
  void edScreen.offsetHeight;
  edScreen.style.transition = 'transform .35s cubic-bezier(.32,.72,0,1)';
  edScreen.style.transform  = 'translateY(0)';
  drawEmptyIcon();
  updateEditorLang();
}
// Экспорт для вызова из camera.js
window.openEditorScreen = openEditor;

function closeEditor() {
  edSliders.classList.remove('open');
  edScreen.classList.remove('sliders-open');
  edScreen.style.transition = 'transform .3s cubic-bezier(.32,.72,0,1)';
  edScreen.style.transform  = 'translateY(100%)';
  setTimeout(() => { edScreen.style.display = 'none'; }, 320);
}

// ── ЗАГРУЗКА ФОТО ─────────────────────────────────────────────────────────────
function handleFileLoad(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      sourceImage = img;
      hasPhoto    = true;
      edEmpty.classList.add('hide');
      edCanvas.classList.add('show');
      edSaveBtn.classList.add('active');
      fitCanvas();
      renderPhoto();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function fitCanvas() {
  if (!sourceImage) return;
  const area = edPreviewArea.getBoundingClientRect();
  const aw = area.width  || edPreviewArea.offsetWidth;
  const ah = area.height || edPreviewArea.offsetHeight;
  if (!aw || !ah) return;
  const iw = sourceImage.naturalWidth;
  const ih = sourceImage.naturalHeight;
  const scale = Math.min(aw / iw, ah / ih, 1);
  edCanvas.width  = Math.round(iw * scale);
  edCanvas.height = Math.round(ih * scale);
}

// ── РЕНДЕР ПРЕВЬЮ ─────────────────────────────────────────────────────────────
function renderPhoto() {
  if (!sourceImage || !hasPhoto) return;
  if (renderPending) return;
  renderPending = true;
  requestAnimationFrame(() => {
    renderPending = false;
    const w = edCanvas.width;
    const h = edCanvas.height;
    if (!w || !h) return;
    edCtx.clearRect(0, 0, w, h);
    edCtx.drawImage(sourceImage, 0, 0, w, h);
    applyEditorFilter(edCtx, w, h, edMode);
  });
}

// ── ПРИМЕНИТЬ ФИЛЬТР ──────────────────────────────────────────────────────────
function applyEditorFilter(ctx, w, h, m) {
  if (m === 'f1960') { filter_f1960(ctx, w, h, EFS.f1960); return; }
  if (m === 'lomo')  { filter_lomo(ctx, w, h, EFS.lomo);   return; }
  if (m === 'nes')   { filter_nes(ctx, w, h, EFS.nes);     return; }
  const id = ctx.getImageData(0, 0, w, h);
  const d  = id.data;
  if      (m === 'f1970') filter_f1970(d, w, h, EFS.f1970);
  else if (m === 'f1980') filter_f1980(d, w, h, EFS.f1980);
  else if (m === 'f1990') filter_f1990(d, w, h, EFS.f1990);
  else if (m === 'f2000') filter_f2000(d, w, h, EFS.f2000);
  else if (m === 'bw')    filter_bw(d, w, h, EFS.bw);
  else if (m === 'sepia') filter_sepia(d, w, h, EFS.sepia);
  ctx.putImageData(id, 0, 0);
}

// ── РЕНДЕР В ПОЛНОМ РАЗРЕШЕНИИ ДЛЯ СОХРАНЕНИЯ ────────────────────────────────
function renderFull(callback) {
  const sc  = document.createElement('canvas');
  sc.width  = sourceImage.naturalWidth;
  sc.height = sourceImage.naturalHeight;
  const ctx = sc.getContext('2d', {willReadFrequently:true});
  ctx.drawImage(sourceImage, 0, 0);
  applyEditorFilter(ctx, sc.width, sc.height, edMode);
  callback(sc.toDataURL('image/jpeg', 0.93));
}

// ── ПОЛЗУНКИ ──────────────────────────────────────────────────────────────────
const ED_LABELS_EN = {
  brightness:'BRIGHTNESS', contrast:'CONTRAST', saturation:'SATURATION',
  warmth:'WARMTH', grain:'GRAIN', vignette:'VIGNETTE', fade:'FADE',
  green:'FUJI GREEN', violet:'BLUE-VIOLET', coffee:'COFFEE',
  pink:'PINK TONE', leak:'LIGHT LEAK', leakHue:'LEAK HUE',
  blockSize:'PIXEL SIZE', dither:'DITHERING', pixelBlock:'PIXEL',
  blur:'BLUR', shadowCrush:'SHADOWS', warmNokia:'NOKIA WARM',
};

function buildSliders(m) {
  const def = DEFS[m];
  const en  = (typeof currentLang !== 'undefined') && currentLang === 'en';
  edSlidersBody.innerHTML = '';
  if (!def || def.sliders.length === 0) {
    const p = document.createElement('div');
    p.style.cssText = 'font-size:10px;color:#6a5c3a;letter-spacing:1.5px;line-height:1.7;padding:4px 0;';
    p.textContent   = en ? 'NO ADJUSTABLE PARAMETERS' : 'НЕТ НАСТРАИВАЕМЫХ ПАРАМЕТРОВ';
    edSlidersBody.appendChild(p);
    return;
  }
  for (const s of def.sliders) {
    const v   = EFS[m][s.key];
    const lbl = en ? (ED_LABELS_EN[s.key] || s.label) : s.label;
    const row = document.createElement('div');
    row.className = 'sr';
    row.innerHTML = `
      <div class="sl">${lbl}<b id="elv_${m}_${s.key}">${v}</b></div>
      <input type="range" id="esl_${m}_${s.key}" min="${s.min}" max="${s.max}" value="${v}">
    `;
    edSlidersBody.appendChild(row);
    const inp  = row.querySelector('input');
    const disp = row.querySelector('b');
    inp.addEventListener('input', () => {
      EFS[m][s.key] = parseInt(inp.value);
      disp.textContent = inp.value;
      renderPhoto();
    });
  }
}

// ── ЛОКАЛИЗАЦИЯ ───────────────────────────────────────────────────────────────
function updateEditorLang() {
  const en = (typeof currentLang !== 'undefined') && currentLang === 'en';
  const texts = {
    'et-back':   en ? 'BACK'    : 'НАЗАД',
    'et-save':   en ? 'SAVE'    : 'СОХРАНИТЬ',
    'et-params': en ? 'PARAMS'  : 'ПАРАМЕТРЫ',
    'et-load':   en ? 'UPLOAD'  : 'ЗАГРУЗИТЬ',
    'et-choose': en ? 'Choose from gallery' : 'Выбрать из галереи',
  };
  for (const [id, txt] of Object.entries(texts)) {
    const el = document.getElementById(id);
    if (el) el.textContent = txt;
  }
  const emptyLabel = document.getElementById('editor-empty-label');
  if (emptyLabel) emptyLabel.textContent = en ? 'Upload image' : 'Загрузить фото';
  const edTitle = document.getElementById('editor-title');
  if (edTitle) edTitle.textContent = en ? 'EDITOR' : 'РЕДАКТОР';
  const edSlTitle = document.getElementById('editor-sliders-title');
  if (edSlTitle) edSlTitle.textContent = en ? 'PARAMETERS' : 'ПАРАМЕТРЫ';

  document.querySelectorAll('.efl').forEach(el => {
    const txt = en ? el.dataset.en : el.dataset.ru;
    if (txt) el.textContent = txt;
  });
  if (edSliders.classList.contains('open')) buildSliders(edMode);
}
window.updateEditorLang = updateEditorLang;

// ── СОБЫТИЯ ───────────────────────────────────────────────────────────────────

// Открытие из меню бургера (через camera.js)
if (editorMenuRow) {
  editorMenuRow.addEventListener('click', () => {
    document.getElementById('dropdown').classList.remove('open');
    document.getElementById('menu-btn').classList.remove('open');
    openEditor();
  });
}

// Закрыть
edExitBtn.addEventListener('click', closeEditor);

// Загрузить фото
function triggerFileInput() { edFileInput.click(); }
edLoadBtn.addEventListener('click', triggerFileInput);
if (edUploadHint) edUploadHint.addEventListener('click', triggerFileInput);

edFileInput.addEventListener('change', e => {
  if (e.target.files && e.target.files[0]) {
    handleFileLoad(e.target.files[0]);
  }
  edFileInput.value = '';
});

// Выбор фильтра
edFilterItems.forEach(btn => {
  btn.addEventListener('click', () => {
    if (typeof vibrate === 'function') vibrate(12);
    edFilterItems.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    edMode = btn.dataset.emode;
    if (edSliders.classList.contains('open')) buildSliders(edMode);
    renderPhoto();
  });
});

// Параметры (шторка)
edSettingsBtn.addEventListener('click', () => {
  buildSliders(edMode);
  const opening = !edSliders.classList.contains('open');
  edSliders.classList.toggle('open');
  edScreen.classList.toggle('sliders-open', opening);
  setTimeout(() => { fitCanvas(); renderPhoto(); }, 300);
});
edSlidersClose.addEventListener('click', () => {
  edSliders.classList.remove('open');
  edScreen.classList.remove('sliders-open');
  setTimeout(() => { fitCanvas(); renderPhoto(); }, 300);
});

// Сохранить
edSaveBtn.addEventListener('click', () => {
  if (!hasPhoto) return;
  edSaveBtn.style.opacity       = '0.5';
  edSaveBtn.style.pointerEvents = 'none';
  setTimeout(() => {
    renderFull(dataUrl => {
      const ts       = new Date().toISOString().replace(/[:.]/g, '').slice(0, 15);
      const fileName = `retrocam_edit_${edMode}_${ts}.jpg`;
      const label    = (typeof currentLang !== 'undefined' && currentLang === 'en')
        ? 'SAVED ✓' : 'СОХРАНЕНО ✓';
      if (typeof savePhoto === 'function') {
        savePhoto(dataUrl, fileName, label);
      } else {
        const a = document.createElement('a');
        a.href = dataUrl; a.download = fileName;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
      }
      edSaveBtn.style.opacity       = '1';
      edSaveBtn.style.pointerEvents = 'auto';
    });
  }, 60);
});

// Пересчёт при повороте экрана
window.addEventListener('resize', () => {
  if (!hasPhoto) return;
  fitCanvas();
  renderPhoto();
});

// Синхронизация языка
const _origApplyLang = window.applyLang;
if (typeof _origApplyLang === 'function') {
  window.applyLang = function() {
    _origApplyLang.apply(this, arguments);
    updateEditorLang();
  };
}

}); // конец DOMContentLoaded
