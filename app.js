// ══════════════════════════════════════════
// INVOICE CONSTANTS — لازم تتحط فوق كده لأن applyPrintSize() بتتنادى وقت تحميل الصفحة الأول قبل أي حاجة تانية
// ══════════════════════════════════════════
const INVOICE_PAPER_SIZES = ['a4', '80mm', '58mm', '55mm'];
// كل قوالب الفاتورة بقت أبيض/أسود بس (مونوكروم) — الفرق بينهم في التركيب والشكل مش في الألوان
const INVOICE_TEMPLATES = ['classic', 'elegant', 'bordered', 'banded'];
// رول ثابت بيظهر في كل الفواتير والتصدير — بيوضح إن الشغل ده من تطوير Fateen Digital Solutions
const APP_CREDIT_LINE = 'Fateen Digital Solutions — fateen1.me';

// ══════════════════════════════════════════
// SVG ICONS
// ══════════════════════════════════════════
const IC = {
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>`,
  offer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>`,
  cancel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  edit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  followup: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  deal_plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="12" y1="12" x2="12" y2="18"/><line x1="9" y1="15" x2="15" y2="15"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3,6 5,6 21,6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  star_fill: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  star_empty: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>`,
  warn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  print: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 6,2 18,2 18,9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>`,
  save: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17,21 17,13 7,13 7,21"/><polyline points="7,3 7,8 15,8"/></svg>`,
  csv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  money: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  trend_up: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>`,
  pipeline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  ok_circle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22,4 12,14.01 9,11.01"/></svg>`,
  ban: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`,
  invoice: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><polyline points="15,2 15,7 20,7"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>`,
  id_card: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2"/><line x1="8" y1="16.5" x2="8" y2="16.5"/><line x1="13" y1="10" x2="18" y2="10"/><line x1="13" y1="14" x2="18" y2="14"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2l-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/><path d="M15.5 7.5L18 10l3-3-2.5-2.5"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="13" y2="13"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.8 14.1c-.24.68-1.4 1.3-1.93 1.37-.5.08-1.11.11-1.8-.11a16.2 16.2 0 0 1-1.66-.61 12.8 12.8 0 0 1-4.9-4.34c-.36-.5-.72-1.08-.81-1.66-.1-.6.06-1.14.4-1.53.13-.15.3-.24.48-.28.14-.03.29-.03.42 0 .13.03.27.09.38.32.13.28.44 1.02.48 1.09.04.08.07.17.01.28-.06.11-.09.18-.18.28-.09.1-.19.23-.27.31-.09.09-.18.19-.08.37.1.18.44.73.95 1.18.65.58 1.2.76 1.38.85.18.09.29.07.4-.04.11-.11.46-.53.58-.71.12-.18.24-.15.4-.09.16.06 1.02.48 1.19.57.17.09.29.13.33.2.04.08.04.44-.2 1.12z"/></svg>`,
  archive: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="21,8 21,21 3,21 3,8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>`,
  restore: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3,4 3,9 8,9"/></svg>`,
  calc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="16" y1="10" x2="16.01" y2="10"/><line x1="8" y1="14" x2="8.01" y2="14"/><line x1="12" y1="14" x2="12.01" y2="14"/><line x1="16" y1="14" x2="16.01" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M7 5H4a2 2 0 0 0 2 4"/><path d="M17 5h3a2 2 0 0 1-2 4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  gift: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M12 8c-1.5-3-5-4-5-1.5S9 8 12 8z"/><path d="M12 8c1.5-3 5-4 5-1.5S15 8 12 8z"/></svg>`,
  bulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.05V17h6v-.25c0-.85.4-1.55 1-2.05A7 7 0 0 0 12 2z"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  task: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><polyline points="8,12 11,15 16,9"/></svg>`,
  map_pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  paperclip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,
  history: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/><line x1="12" y1="7" x2="12" y2="12"/><line x1="12" y1="12" x2="15" y2="15"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5,3 19,12 5,21"/></svg>`,
  stop: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>`,
  flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v6.5L4 18a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9.5V2"/><path d="M6 15h12"/><line x1="8" y1="2" x2="16" y2="2"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  thumb_up: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
};

// ══════════════════════════════════════════
// QUICK ADD (زرار عائم) — يفتح مودال إضافة سريع من أي صفحة من غير ما تتنقل
// ══════════════════════════════════════════
function toggleQuickAdd() {
  const menu = document.getElementById('qa-fab-menu');
  const btn = document.getElementById('qa-fab-btn');
  if (!menu || !btn) return;
  const willOpen = !menu.classList.contains('open');
  menu.classList.toggle('open', willOpen);
  btn.classList.toggle('open', willOpen);
}
function closeQuickAdd() {
  const menu = document.getElementById('qa-fab-menu');
  const btn = document.getElementById('qa-fab-btn');
  if (menu) menu.classList.remove('open');
  if (btn) btn.classList.remove('open');
}
function quickAdd(kind) {
  closeQuickAdd();
  if (kind === 'client') openAddClient();
  else if (kind === 'deal') openAddDeal();
  else if (kind === 'followup') addFollowupFor(null);
  else if (kind === 'quote') openQuickQuote();
}
// قفل المنيو لو المستخدم ضغط برّه أو فتح أي مودال تاني
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.qa-fab-wrap');
  if (wrap && !wrap.contains(e.target)) closeQuickAdd();
}, true);

// تلميحات الحقول (placeholder) بتتقطع لو كانت أطول من عرض الحقل — بنضيف tooltip تلقائي
// بيوريك النص كامل لما تمرّر عليه الماوس، من غير ما نحتاج نعدّل كل حقل يدويًا
document.addEventListener('mouseover', (e) => {
  const el = e.target.closest && e.target.closest('input[placeholder], textarea[placeholder]');
  if (el && !el.title) el.title = el.placeholder;
}, true);

// ══════════════════════════════════════════
// AUTH — تفعيل النظام أول مرة + إنشاء حساب + تسجيل الدخول
// ══════════════════════════════════════════
// ملاحظة مهمة: التحقق ده بيحصل في المتصفح بالكامل (مفيش سيرفر خلفه)،
// فهو مناسب كحاجز دخول بسيط لموظفين، مش نظام حماية حقيقي لبيانات حساسة.

const ACTIVATION_KEY   = 'fatinCRM_activated_v1';  // فلاج التفعيل — بيتسجل مرة واحدة بس على كل جهاز/متصفح
const ACTIVATION_CODE  = 'FATIN-2025';              // ← غيّر كود التفعيل هنا لأي كود تحبه
const USERS_KEY         = 'fatinCRM_users_v1';      // الحسابات المسجّلة على الجهاز ده
const AUTH_SESSION_KEY  = 'fatinCRM_session_v1';    // جلسة الدخول — بتحفظ اسم المستخدم اللي داخل

// حساب المطور السري — تسجيل الدخول بـ 00 / 00 بيدخل بصلاحية "مطور" من غير ما يتسجل كحساب عادي
const DEV_LOGIN = { user: '00', pass: '00', name: 'المطور', role: 'مطور' };

// اللوجو اللي بيتم اختياره في شاشة إنشاء أول حساب (قبل ما DB يتحفظ فعليًا)
let signupLogoData = null;
function signupUploadLogo(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    signupLogoData = ev.target.result;
    const img = document.getElementById('signup-logo-img');
    const ph = document.getElementById('signup-logo-ph');
    if (img) { img.src = signupLogoData; img.style.display = 'block'; }
    if (ph) ph.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function isActivated() {
  return localStorage.getItem(ACTIVATION_KEY) === 'true';
}
function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch (e) { return []; }
}
function saveUsers(list) {
  localStorage.setItem(USERS_KEY, JSON.stringify(list));
}
function getSessionUsername() {
  return localStorage.getItem(AUTH_SESSION_KEY) || sessionStorage.getItem(AUTH_SESSION_KEY) || '';
}
function isLoggedIn() {
  return !!getSessionUsername();
}
function getCurrentUser() {
  const uname = getSessionUsername();
  if (!uname) return null;
  if (uname === DEV_LOGIN.user) return DEV_LOGIN;
  return getUsers().find(u => u.user === uname) || null;
}
function isDeveloperUser() {
  const cur = getCurrentUser();
  return !!cur && cur.role === DEV_LOGIN.role;
}
function showAuthPanel(which) {
  const panels = { activate: 'auth-activate-panel', signup: 'auth-signup-panel', login: 'auth-login-panel' };
  Object.entries(panels).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) el.style.display = key === which ? '' : 'none';
  });
}
function updateSidebarUser() {
  const cur = getCurrentUser();
  const wrap = document.getElementById('sidebar-user');
  const devTab = document.getElementById('nav-developer-tab');
  if (devTab) devTab.style.display = isDeveloperUser() ? '' : 'none'; // تاب المطور يظهر للمطور بس
  if (wrap) {
    if (!cur) {
      wrap.style.display = 'none';
    } else {
      wrap.style.display = 'flex';
      document.getElementById('sidebar-user-name').textContent = cur.name || cur.user;
      document.getElementById('sidebar-user-role').textContent = cur.role || 'مستخدم';
    }
  }
  applyUserPagePermissions(cur);
  syncSidebarBrand();
}
// بيخفي عناصر السايدبار اللي المستخدم الحالي مش مسموح له بالدخول عليها (حسب allowedPages
// المحدّدة له من صفحة "إدارة الموظفين")؛ لوحة التحكم بقت زي أي صفحة تانية تتقفل أو تتفتح، والمطور دايمًا شايف كل حاجة
function applyUserPagePermissions(cur) {
  const restricted = cur && !isDeveloperUser() && Array.isArray(cur.allowedPages);
  document.querySelectorAll('.nav-item[data-page]').forEach(n => {
    const p = n.dataset.page;
    n.style.display = (!restricted || cur.allowedPages.includes(p)) ? '' : 'none';
  });
}
// اسم الشركة (من الإعدادات) + اسم الموظف اللي داخل — بدل اسم النظام الثابت
function syncSidebarBrand() {
  const s = (typeof DB !== 'undefined' && DB.settings) || {};
  const cur = getCurrentUser();
  const brandEl = document.getElementById('sidebar-brand-name');
  const printBrandEl = document.getElementById('print-brand-name');
  const brandText = s.brandName || 'اسم الشركة';
  if (brandEl) brandEl.textContent = brandText;
  if (printBrandEl) printBrandEl.textContent = brandText;
}
function initAuth() {
  if (!isActivated()) {
    document.body.classList.add('locked');
    showAuthPanel('activate');
    setTimeout(() => document.getElementById('activate-code')?.focus(), 100);
    return;
  }
  if (getUsers().length === 0) {
    document.body.classList.add('locked');
    showAuthPanel('signup');
    setTimeout(() => document.getElementById('signup-name')?.focus(), 100);
    return;
  }
  if (!isLoggedIn()) {
    document.body.classList.add('locked');
    showAuthPanel('login');
    setTimeout(() => document.getElementById('login-user')?.focus(), 100);
    return;
  }
  document.body.classList.remove('locked');
  // ملاحظة: مش بننادي updateSidebarUser() هنا لأن initAuth() بتتنفذ قبل ما DB يتحمّل
  // (DB بيتعرّف لاحقًا في الكود)، فلو فيه جلسة محفوظة من قبل هيحصل خطأ ويوقف السكريبت كله.
  // التحديث ده بيحصل بعد تحميل DB مباشرة (شوف الكود بعد "let DB = loadDB();").
}
function submitActivation() {
  const codeEl = document.getElementById('activate-code');
  const errEl = document.getElementById('activate-error');
  const code = (codeEl.value || '').trim();
  if (code.toUpperCase() !== ACTIVATION_CODE.toUpperCase()) {
    errEl.classList.add('show');
    codeEl.focus();
    codeEl.select();
    return;
  }
  errEl.classList.remove('show');
  localStorage.setItem(ACTIVATION_KEY, 'true'); // يتسجل مرة واحدة بس — من هنا ورايح مش هيتطلب تاني على الجهاز ده
  if (getUsers().length === 0) {
    showAuthPanel('signup');
    setTimeout(() => document.getElementById('signup-name')?.focus(), 100);
  } else {
    showAuthPanel('login');
    setTimeout(() => document.getElementById('login-user')?.focus(), 100);
  }
}
function submitSignup() {
  const companyEl = document.getElementById('signup-company');
  const nameEl = document.getElementById('signup-name');
  const userEl = document.getElementById('signup-user');
  const passEl = document.getElementById('signup-pass');
  const pass2El = document.getElementById('signup-pass2');
  const errEl = document.getElementById('signup-error');
  const errText = document.getElementById('signup-error-text');
  const company = (companyEl.value || '').trim();
  const name = (nameEl.value || '').trim();
  const uname = (userEl.value || '').trim();
  const pass = passEl.value || '';
  const pass2 = pass2El.value || '';

  function showErr(msg) { errText.textContent = msg; errEl.classList.add('show'); }
  errEl.classList.remove('show');

  if (!company) { companyEl.focus(); return showErr('من فضلك اكتب اسم الشركة'); }
  if (!name || !uname || !pass || !pass2) return showErr('من فضلك املأ كل الحقول');
  if (uname.toLowerCase() === DEV_LOGIN.user) return showErr('اسم المستخدم ده محجوز، اختار اسم تاني');
  if (pass.length < 4) return showErr('كلمة المرور لازم تكون 4 حروف/أرقام على الأقل');
  if (pass !== pass2) return showErr('كلمة المرور وتأكيدها مش متطابقين');

  const users = getUsers();
  if (users.some(u => u.user === uname)) return showErr('اسم المستخدم ده مستخدم قبل كده');

  const newUser = { name, user: uname, pass, role: 'مدير' }; // ← أي حساب بيتعمل من هنا صلاحيته دايمًا "مدير"
  users.push(newUser);
  saveUsers(users);

  localStorage.setItem(AUTH_SESSION_KEY, uname);
  document.body.classList.remove('locked');
  updateSidebarUser();

  // حفظ اسم الشركة واللوجو (لو اتحطوا) في DB مع أول حساب بيتعمل
  if (!DB.settings) DB.settings = { brandName:'', brandSub:'', phone:'', email:'', address:'', theme:'dark-gold' };
  DB.settings.brandName = company;
  if (signupLogoData) DB.logo = signupLogoData;
  saveDB();
  applyLogo();

  setTimeout(() => toast(`تم إنشاء الحساب، أهلاً بيك يا ${name}`), 150);
}
function submitLogin() {
  const userEl = document.getElementById('login-user');
  const passEl = document.getElementById('login-pass');
  const rememberEl = document.getElementById('login-remember');
  const errEl = document.getElementById('login-error');
  const u = (userEl.value || '').trim();
  const p = passEl.value || '';

  // حساب المطور السري
  if (u === DEV_LOGIN.user && p === DEV_LOGIN.pass) {
    errEl.classList.remove('show');
    if (rememberEl.checked) localStorage.setItem(AUTH_SESSION_KEY, DEV_LOGIN.user);
    else sessionStorage.setItem(AUTH_SESSION_KEY, DEV_LOGIN.user);
    document.body.classList.remove('locked');
    updateSidebarUser();
    logActivity('تسجيل دخول', 'وضع المطور');
    saveDB();
    setTimeout(() => toast('أهلاً بيك، وضع المطور مفعّل'), 150);
    return;
  }

  const match = getUsers().find(a => a.user === u && a.pass === p);
  if (!match) {
    errEl.classList.add('show');
    passEl.value = '';
    passEl.focus();
    logActivity('محاولة دخول فاشلة', u ? `اسم المستخدم: ${u}` : '');
    saveDB();
    return;
  }
  errEl.classList.remove('show');
  if (rememberEl.checked) localStorage.setItem(AUTH_SESSION_KEY, match.user);
  else sessionStorage.setItem(AUTH_SESSION_KEY, match.user);
  document.body.classList.remove('locked');
  updateSidebarUser();
  logActivity('تسجيل دخول', match.name);
  saveDB();
  setTimeout(() => toast(`أهلاً بيك، ${match.name}`), 150);
}
function togglePassVisibility() {
  const passEl = document.getElementById('login-pass');
  passEl.type = passEl.type === 'password' ? 'text' : 'password';
}
async function logout() {
  if (!(await confirmDialog('هل تريد تسجيل الخروج؟', {title:'تسجيل الخروج', okText:'تسجيل الخروج'}))) return;
  const cur = getCurrentUser();
  logActivity('تسجيل خروج', (cur && cur.name) || '');
  saveDB();
  localStorage.removeItem(AUTH_SESSION_KEY);
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  const userEl = document.getElementById('login-user');
  const passEl = document.getElementById('login-pass');
  if (userEl) userEl.value = '';
  if (passEl) passEl.value = '';
  document.body.classList.add('locked');
  showAuthPanel('login');
  setTimeout(() => document.getElementById('login-user')?.focus(), 100);
}

initAuth();

// ══════════════════════════════════════════
// SERVICE TYPE CATEGORIES
// ══════════════════════════════════════════
function serviceCategory(s) {
  if (!s) return 'other';
  const pos = ['سيستم + تسعير + مينيو','سيستم كاشير','سيستم كافيه','سيستم سوبر ماركت','سيستم فيبات'];
  const web = ['ويبسايت سابلمنت','ويبسايت محاماه','ويبسايت تعريفي'];
  const mgmt = ['سيستم حسابات','نظام إدارة أعمال','سيستم ملاهي وإدارة','سيستم اداره'];
  if (pos.includes(s)) return 'pos';
  if (web.includes(s)) return 'web';
  if (mgmt.includes(s)) return 'mgmt';
  return 'other';
}

// ══════════════════════════════════════════
// SERVICE CATEGORIES (قابلة للتعديل من صفحة الخدمات)
// ══════════════════════════════════════════
const SVC_CAT_COLOR_PALETTE = ['cyan', 'green', 'purple', 'orange', 'gold', 'gray', 'red'];

// بيتأكد إن DB.settings موجود (Object) قبل أي قراءة/كتابة عليه — بديل عن تكرار نفس السطر
// "if (!DB.settings) DB.settings = {}" في أكتر من 15 دالة مختلفة في الملف ده
function ensureSettings() {
  if (!DB.settings) DB.settings = {};
  return DB.settings;
}

// بيرجّع قايمة إعداد (Array) من DB.settings، ولو مش موجودة أو فاضية بيعمّرها بالقيمة الافتراضية.
// بديل عن تكرار نفس الشرط "لو مفيش، اعمل افتراضي" في أكتر من دالة (فئات الخدمات، حالات الصفقات، طرق الدفع، التوقيعات)
function ensureSettingsList(key, defaultFactory) {
  ensureSettings();
  if (!DB.settings[key] || !DB.settings[key].length) {
    DB.settings[key] = defaultFactory();
  }
  return DB.settings[key];
}

// ══════════════════════════════════════════
// NOTIFICATION SETTINGS (تفعيل/تعطيل أنواع التنبيهات)
// ══════════════════════════════════════════
function getNotificationSettings() {
  ensureSettings();
  if (!DB.settings.notifications) {
    DB.settings.notifications = { followups: true, dealDeadline: true, commissionDue: true, walletCommissionDue: true, staleDeal: true, staleDealDays: 5, renewalDue: true, lowRating: true, commissionWalletDueDays: 7 };
  }
  if (DB.settings.notifications.lowRating === undefined) DB.settings.notifications.lowRating = true;
  return DB.settings.notifications;
}

// ══════════════════════════════════════════
// ROLES (أدوار جاهزة تحدد صفحات مسموح بيها دفعة واحدة عند إنشاء موظف)
// ══════════════════════════════════════════
function getRoles() {
  return ensureSettingsList('roles', () => [
    {name: 'مدير', allowedPages: getEmployeePermissionPages()},
    {name: 'مندوب مبيعات', allowedPages: ['dashboard','clients','deals','followups','feedback','targets']},
    {name: 'محاسب', allowedPages: ['dashboard','financial-reports','employees','services']}
  ]);
}

// ══════════════════════════════════════════
// KEYBOARD SHORTCUTS (اختصارات فتح الصفحات بلوحة المفاتيح)
// ══════════════════════════════════════════
function getDefaultShortcuts() {
  return {dashboard:'1', clients:'2', deals:'3', followups:'4', feedback:'5', targets:'6', employees:'7', services:'8', 'financial-reports':'9', settings:'0'};
}
function getShortcuts() {
  ensureSettings();
  if (!DB.settings.shortcuts) DB.settings.shortcuts = getDefaultShortcuts();
  return DB.settings.shortcuts;
}

// ══════════════════════════════════════════
// ACTIVITY LOG (سجل بكل التعديلات المهمة اللي بتحصل في النظام)
// ══════════════════════════════════════════
function logActivity(action, details) {
  if (!DB.activityLog) DB.activityLog = [];
  const cur = (typeof getCurrentUser === 'function') ? getCurrentUser() : null;
  DB.activityLog.unshift({
    ts: new Date().toLocaleString('ar-EG-u-nu-latn'),
    user: (cur && cur.name) || 'غير معروف',
    action,
    details: details || ''
  });
  // منمنع سجل النشاط من الزيادة اللانهائية — بنحتفظ بآخر 500 حركة بس
  if (DB.activityLog.length > 500) DB.activityLog.length = 500;
}

function getServiceCategories() {
  return ensureSettingsList('serviceCategories', () => [
    {key:'pos', name:'نقاط البيع (POS)', shortLabel:'POS', color:'cyan'},
    {key:'mgmt', name:'أنظمة الإدارة', shortLabel:'إدارة', color:'green'},
    {key:'web', name:'مواقع ويب', shortLabel:'ويب', color:'purple'},
    {key:'other', name:'أخرى', shortLabel:'أخرى', color:'orange'}
  ]);
}

function getServiceCategory(key) {
  return getServiceCategories().find(c => c.key === key);
}

function nextServiceCategoryColor() {
  const used = getServiceCategories().map(c => c.color);
  return SVC_CAT_COLOR_PALETTE.find(c => !used.includes(c)) || SVC_CAT_COLOR_PALETTE[used.length % SVC_CAT_COLOR_PALETTE.length];
}

function renderServiceCategoryTags() {
  const wrap = document.getElementById('service-category-tags-list');
  if (!wrap) return;
  const cats = getServiceCategories();
  wrap.innerHTML = cats.map(c => `
    <span class="status-tag svc-${c.color}">
      ${c.name}
      <button type="button" class="status-tag-del" onclick="removeServiceCategory(${JSON.stringify(c.key)})" title="حذف الفئة">&#x2715;</button>
    </span>
  `).join('');
}

function addServiceCategory() {
  const input = document.getElementById('new-service-category-input');
  const name = input.value.trim();
  if (!name) { input.classList.add('field-invalid'); toast('اكتب اسم الفئة الأول', 'error'); return; }
  const cats = getServiceCategories();
  if (cats.some(c => c.name === name)) { input.classList.add('field-invalid'); toast('الفئة دي موجودة بالفعل', 'error'); return; }
  input.classList.remove('field-invalid');
  const key = 'cat_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  cats.push({ key, name, shortLabel: name, color: nextServiceCategoryColor() });
  saveDB();
  input.value = '';
  renderServiceCategoryTags();
  populateServiceCategorySelects();
  toast('تمت إضافة الفئة');
}

async function removeServiceCategory(key) {
  const cats = getServiceCategories();
  if (cats.length <= 1) { toast('لازم تفضل فئة واحدة على الأقل', 'error'); return; }
  const cat = getServiceCategory(key);
  const inUse = (DB.services || []).filter(s => s.category === key).length;
  const msg = inUse
    ? `الفئة "${cat ? cat.name : key}" مستخدمة في ${inUse} خدمة. هتفضل موجودة في الخدمات القديمة بس مش هتظهر كخيار جديد. تحذف؟`
    : `حذف الفئة "${cat ? cat.name : key}"؟`;
  if (!(await confirmDialog(msg))) return;
  DB.settings.serviceCategories = cats.filter(c => c.key !== key);
  saveDB();
  renderServiceCategoryTags();
  populateServiceCategorySelects();
  renderServices();
  toast('تم حذف الفئة', 'error');
}

// بيحدّث الفئة في نافذة إضافة/تعديل خدمة، وفلتر الفئات في صفحة الخدمات، مع بعض
function populateServiceCategorySelects(selectedValue) {
  const cats = getServiceCategories();
  const modalSel = document.getElementById('svc-category');
  if (modalSel) {
    modalSel.innerHTML = cats.map(c => `<option value="${c.key}">${c.name}</option>`).join('');
    if (selectedValue && !cats.some(c => c.key === selectedValue)) {
      modalSel.insertAdjacentHTML('beforeend', `<option value="${selectedValue}">${selectedValue}</option>`);
    }
    modalSel.value = selectedValue || (cats[0] ? cats[0].key : '');
  }
  const filterSel = document.getElementById('svc-filter-category');
  if (filterSel) {
    const cur = filterSel.value;
    filterSel.innerHTML = `<option value="">كل الفئات</option>` + cats.map(c => `<option value="${c.key}">${c.name}</option>`).join('');
    filterSel.value = cats.some(c => c.key === cur) ? cur : '';
  }
}

function serviceBadgeEl(name) {
  const svc = getServices().find(s => s.name === name);
  const catKey = svc ? svc.category : serviceCategory(name); // fallback heuristic لو الخدمة اتشالت من القايمة
  const cat = getServiceCategory(catKey) || getServiceCategory('other') || { name: 'أخرى', shortLabel: 'أخرى', color: 'gray' };
  return `<span class="service-badge svc-${cat.color}">${cat.shortLabel || cat.name}</span> ${name}`;
}


// ══════════════════════════════════════════
// SERVICES CRUD
// ══════════════════════════════════════════
function getServices() { return DB.services || []; }

function buildServiceOptions(selectedName) {
  const svcs = getServices();
  const cats = getServiceCategories();
  let html = '';
  cats.forEach(cat => {
    const list = svcs.filter(s => s.category === cat.key);
    if (!list.length) return;
    html += '<optgroup label="' + cat.name + '">';
    list.forEach(s => {
      const sel = s.name === selectedName ? ' selected' : '';
      html += '<option value="' + s.name + '"' + sel + '>' + s.name + '</option>';
    });
    html += '</optgroup>';
  });
  // خدمات مربوطة بفئة اتحذفت — بتتحط تحت مجموعة "أخرى" عشان متختفيش من القايمة
  const knownKeys = cats.map(c => c.key);
  const orphan = svcs.filter(s => !knownKeys.includes(s.category));
  if (orphan.length) {
    html += '<optgroup label="أخرى">';
    orphan.forEach(s => {
      const sel = s.name === selectedName ? ' selected' : '';
      html += '<option value="' + s.name + '"' + sel + '>' + s.name + '</option>';
    });
    html += '</optgroup>';
  }
  return html;
}

function populateServiceSelects(selectedName) {
  const opts = buildServiceOptions(selectedName);
  ['f-service','d-service'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = opts;
  });
}

let editingServiceId = null;

function openAddService() {
  editingServiceId = null;
  document.getElementById('modal-service-title').textContent = 'إضافة خدمة جديدة';
  ['svc-name','svc-notes'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('svc-price').value = '';
  document.getElementById('svc-cost').value = '';
  document.getElementById('svc-commission-rate').value = '';
  populateServiceCategorySelects();
  openModal('modal-service');
}

function editService(id) {
  const s = getServices().find(x => x.id === id);
  if (!s) return;
  editingServiceId = id;
  document.getElementById('modal-service-title').textContent = 'تعديل الخدمة';
  document.getElementById('svc-name').value = s.name;
  populateServiceCategorySelects(s.category);
  document.getElementById('svc-price').value = s.price;
  document.getElementById('svc-cost').value = s.cost;
  document.getElementById('svc-commission-rate').value = s.commissionRate;
  document.getElementById('svc-notes').value = s.notes || '';
  openModal('modal-service');
}

function saveService() {
  const name = document.getElementById('svc-name').value.trim();
  const price = document.getElementById('svc-price').value;
  const cost = document.getElementById('svc-cost').value;
  const commissionRate = document.getElementById('svc-commission-rate').value;
  const ok = runValidation([
    {id:'svc-name', value:name, test:isRequired, message:'أدخل اسم الخدمة'},
    {id:'svc-price', value:price, test:isNonNegNum, message:'السعر لازم يكون رقم صحيح 0 أو أكبر'},
    {id:'svc-cost', value:cost, test:isNonNegNum, message:'التكلفة لازم تكون رقم صحيح 0 أو أكبر'},
    {id:'svc-commission-rate', value:commissionRate, test:isPercent, message:'نسبة العمولة لازم تكون بين 0 و 100'},
  ]);
  if (!ok) return;
  const dup = DB.services.some(s => s.name === name && s.id !== editingServiceId);
  if (dup) { document.getElementById('svc-name').classList.add('field-invalid'); toast('في خدمة بنفس الاسم موجودة بالفعل', 'error'); return; }
  const obj = {
    name,
    category: document.getElementById('svc-category').value,
    price: parseFloat(price)||0, cost: parseFloat(cost)||0, commissionRate: parseFloat(commissionRate)||0,
    notes: document.getElementById('svc-notes').value.trim()
  };
  if (editingServiceId) {
    const idx = DB.services.findIndex(x => x.id === editingServiceId);
    const oldPrice = DB.services[idx].price;
    if (Number(oldPrice) !== Number(obj.price)) {
      if (!DB.priceHistory) DB.priceHistory = [];
      DB.priceHistory.push({id:Date.now(), serviceId:editingServiceId, serviceName:name, oldPrice, newPrice:obj.price, date:todayISO(), by:(getCurrentUser()&&getCurrentUser().name)||''});
    }
    DB.services[idx] = {...DB.services[idx], ...obj};
    toast('تم تحديث الخدمة');
  } else {
    const maxId = DB.services.reduce((m,s) => Math.max(m,s.id), 0);
    DB.services.push({id: maxId+1, ...obj});
    toast('تمت إضافة الخدمة');
  }
  saveDB();
  closeModal('modal-service');
  renderServices();
}

async function deleteService(id) {
  const s = getServices().find(x => x.id === id);
  if (!s) return;
  const inUse = DB.clients.some(c => c.service === s.name);
  if (inUse && !(await confirmDialog('هذه الخدمة مستخدمة في بيانات عملاء. هل تريد حذفها؟'))) return;
  if (!inUse && !(await confirmDialog('حذف الخدمة "' + s.name + '"؟'))) return;
  DB.services = DB.services.filter(x => x.id !== id);
  saveDB();
  toast('تم الحذف', 'error');
  renderServices();
}

function renderServices() {
  renderServiceCategoryTags();
  populateServiceCategorySelects();
  const search = (document.getElementById('svc-search')||{}).value?.toLowerCase()||'';
  const filterCat = (document.getElementById('svc-filter-category')||{}).value||'';
  let svcs = getServices();
  if (search) svcs = svcs.filter(s => s.name.toLowerCase().includes(search));
  if (filterCat) svcs = svcs.filter(s => s.category === filterCat);

  if (!svcs.length) {
    document.getElementById('services-tbody').innerHTML = '<tr><td colspan="9" style="text-align:center;padding:40px;color:var(--text3)">لا توجد خدمات مطابقة</td></tr>';
    return;
  }
  svcs = applySort(svcs, 'services', {
    id: s=>s.id, name: s=>s.name, category: s=>{ const c=getServiceCategory(s.category); return c?c.name:s.category; }, price: s=>s.price, cost: s=>s.cost,
    margin: s=>s.price>0?(s.price-s.cost)/s.price*100:0, commissionRate: s=>s.commissionRate,
    clients: s=>DB.clients.filter(c=>c.service===s.name).length
  });
  document.getElementById('services-tbody').innerHTML = svcs.map((s,i) => {
    const margin = s.price > 0 ? Math.round((s.price - s.cost) / s.price * 100) : 0;
    const marginColor = margin > 50 ? 'var(--green)' : margin > 25 ? 'var(--gold)' : 'var(--red)';
    const clientCount = DB.clients.filter(c => c.service === s.name).length;
    const commission = s.price > 0 ? Math.round(s.price * s.commissionRate / 100) : 0;
    const cat = getServiceCategory(s.category);
    return '<tr>' +
      '<td style="color:var(--text3)">' + (i+1) + '</td>' +
      '<td class="td-name" style="font-weight:700">' + s.name + '</td>' +
      '<td><span class="service-badge svc-' + (cat?cat.color:'gray') + '">' + (cat?cat.name:'أخرى') + '</span></td>' +
      '<td class="td-amount" style="color:var(--gold)">' + fmt(s.price) + '</td>' +
      '<td class="td-amount" style="color:var(--red)">' + fmt(s.cost) + '</td>' +
      '<td><span style="font-weight:800;color:' + marginColor + '">' + margin + '%</span></td>' +
      '<td><span class="badge badge-gold">' + s.commissionRate + '% (' + fmt(commission) + ' ج.م)</span></td>' +
      '<td style="text-align:center;color:var(--text3)">' + clientCount + '</td>' +
      '<td class="actions">' +
        '<button class="act-btn" onclick="openPriceHistory(' + JSON.stringify(s.id) + ')" title="سجل تغييرات السعر">' + IC.history + '</button>' +
        '<button class="act-btn" onclick="editService(' + JSON.stringify(s.id) + ')" title="تعديل">' + IC.edit + '</button>' +
        '<button class="act-btn danger" onclick="deleteService(' + JSON.stringify(s.id) + ')" title="حذف">' + IC.trash + '</button>' +
      '</td>' +
    '</tr>';
  }).join('');
}

function openPriceHistory(serviceId) {
  const s = getServices().find(x=>x.id===serviceId);
  if (!s) return;
  const list = (DB.priceHistory||[]).filter(h=>h.serviceId===serviceId).sort((a,b)=>b.id-a.id);
  document.getElementById('price-history-title').textContent = 'سجل تغييرات سعر: ' + s.name;
  document.getElementById('price-history-body').innerHTML = !list.length
    ? `<div class="empty" style="padding:30px">لسه مفيش تغييرات مسجّلة في سعر الخدمة دي</div>`
    : list.map(h => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--border2)">
        <div style="font-size:12.5px">
          <span style="text-decoration:line-through;color:var(--text3)">${fmt(h.oldPrice)}</span>
          ${IC.arrow}
          <b style="color:var(--gold)">${fmt(h.newPrice)} ج.م</b>
        </div>
        <div style="text-align:left">
          <div style="font-size:11px;color:var(--text3)">${formatDateDisplay(h.date)}</div>
          ${h.by?`<div style="font-size:11px;color:var(--text3)">${h.by}</div>`:''}
        </div>
      </div>
    `).join('');
  openModal('modal-price-history');
}

// ══════════════════════════════════════════
// DATA LAYER
// ══════════════════════════════════════════
const STORAGE_KEY = 'fatinCRM_v3';

// ══════════════════════════════════════════
// مناطق جغرافية معروفة — تستخدم في خريطة العملاء (تلوين/تجميع) وتقرير أكتر مناطق بيع
// لو عنوان العميل بيحتوي اسم منطقة من دول، بيتربط بيها تلقائيًا في التقارير
// ══════════════════════════════════════════
const AREA_ZONES = [
  { name: 'مدينة نصر', lat: 30.0731, lng: 31.3462 },
  { name: 'المعادي', lat: 29.9602, lng: 31.2569 },
  { name: 'الزمالك', lat: 30.0571, lng: 31.2244 },
  { name: 'مصر الجديدة', lat: 30.0875, lng: 31.3243 },
  { name: 'الدقي', lat: 30.0385, lng: 31.2126 },
  { name: 'المهندسين', lat: 30.0561, lng: 31.2003 },
  { name: 'وسط البلد', lat: 30.0459, lng: 31.2359 },
  { name: 'التجمع الخامس', lat: 30.0074, lng: 31.4913 },
  { name: 'الشيخ زايد', lat: 30.0777, lng: 30.9757 },
  { name: '6 أكتوبر', lat: 29.9660, lng: 30.9232 },
  { name: 'حلوان', lat: 29.8442, lng: 31.3339 },
  { name: 'شبرا', lat: 30.1131, lng: 31.2440 },
  { name: 'المقطم', lat: 29.9847, lng: 31.3053 },
  { name: 'العبور', lat: 30.2409, lng: 31.4913 },
  { name: 'الإسكندرية', lat: 31.2001, lng: 29.9187 },
  { name: 'الجيزة', lat: 30.0131, lng: 31.2089 },
];
function guessAreaFromAddress(address) {
  if (!address) return null;
  const found = AREA_ZONES.find(z => address.includes(z.name));
  return found ? found.name : null;
}
function jitterCoord(val, spread = 0.012) { return val + (Math.random() - 0.5) * spread; }

const DEFAULT_DB = {
  clients: [
    {id:1,name:"كريبتون",date:"14/02",owner:"بافلي هاني",phone:"011 1358 8356",service:"سيستم + تسعير + مينيو",cost:8000,collected:8000,status:"نشط / مكتمل",agent:"قعرو و عبعظ",address:"بجوار توليب",notes:"تم استلام كامل المبلغ"},
    {id:2,name:"سماش زون",date:"14/02",owner:"كيرلس روماني",phone:"012 1001 3158",service:"سيستم + تسعير + مينيو",cost:8000,collected:8000,status:"نشط / مكتمل",agent:"قعرو و عبعظ",address:"بجوار توليب",notes:"تم استلام كامل المبلغ"},
    {id:3,name:"ع السيخ",date:"14/02",owner:"رامي رشاد",phone:"011 2320 0500",service:"سيستم + تسعير + مينيو",cost:8000,collected:8000,status:"نشط / مكتمل",agent:"قعرو و عبعظ",address:"بجوار توليب",notes:"تم استلام كامل المبلغ"},
    {id:4,name:"كوفتا ريكا",date:"14/02",owner:"صاصا سيدنا",phone:"012 8071 4029",service:"سيستم + تسعير + مينيو",cost:8000,collected:8000,status:"نشط / مكتمل",agent:"قعرو و عبعظ",address:"بجوار توليب",notes:"تم استلام كامل المبلغ"},
    {id:5,name:"بنزينه التعاون",date:"09/05",owner:"جوزيف",phone:"010 6668 6960",service:"سيستم حسابات",cost:30000,collected:30000,status:"نشط / مكتمل",agent:"قعرو",address:"التامين",notes:"تم استلام كامل المبلغ"},
    {id:6,name:"موسسه العيسي",date:"22/05",owner:"كيرلس جاد",phone:"012 2036 1204",service:"نظام إدارة أعمال",cost:18000,collected:0,status:"قيد المتابعة",agent:"قعرو",address:"مول جابر عوض",notes:"تحديد السعر النهائي"},
    {id:7,name:"ما تيجي كافيه",date:"20/05",owner:"حسين",phone:"011 5203 7767",service:"سيستم كاشير",cost:10000,collected:0,status:"قيد المتابعة",agent:"قعرو",address:"بجوار نادي المهندسين",notes:"تحديد السعر النهائي"},
    {id:8,name:"سكون",date:"14/02",owner:"عمر",phone:"010 2233 1415",service:"سيستم كافيه",cost:8000,collected:0,status:"قيد المتابعة",agent:"قعرو",address:"بجوار توليب",notes:"إعادة التواصل مطلوب"},
    {id:9,name:"الهيلثي فود",date:"30/05",owner:"—",phone:"—",service:"متابعة وإقناع",cost:10000,collected:0,status:"قيد المتابعة",agent:"قعرو",address:"بجوار توليب",notes:"إعادة التواصل مطلوب"},
    {id:10,name:"باتس",date:"30/05",owner:"—",phone:"—",service:"متابعة وإقناع",cost:8000,collected:0,status:"قيد المتابعة",agent:"قعرو",address:"امام مول بلازا",notes:"تقديم عرض سعر"},
    {id:11,name:"الكوتش",date:"30/05",owner:"—",phone:"—",service:"ويبسايت سابلمنت",cost:12000,collected:0,status:"عرض مقدم",agent:"قعرو",address:"بجوار توليب",notes:"ينتظر ارسال العرض"},
    {id:12,name:"الدكتور",date:"30/05",owner:"—",phone:"—",service:"سيستم ملاهي وإدارة",cost:15000,collected:0,status:"عرض مقدم",agent:"قعرو",address:"بجوار توليب",notes:"ينتظر ارسال العرض"},
    {id:13,name:"الشيف حسام",date:"30/05",owner:"حسام",phone:"011 4711 0030",service:"سيستم سوبر ماركت",cost:8000,collected:0,status:"عرض مقدم",agent:"قعرو",address:"بجوار توليب",notes:"ينتظر ارسال العرض"},
    {id:14,name:"new man",date:"03/05",owner:"ايمن",phone:"0111 1840443",service:"سيستم حسابات",cost:5000,collected:0,status:"ملغي",agent:"قعرو",address:"كورنيش عباس فريد",notes:"مستعجل وغير قادرين علي المهمه"},
    {id:15,name:"جميله Gamila",date:"03/05",owner:"ايمن",phone:"0111 1840443",service:"سيستم حسابات",cost:5000,collected:0,status:"ملغي",agent:"قعرو",address:"كورنيش عباس فريد",notes:"مستعجل وغير قادرين علي المهمه"},
    {id:16,name:"papa store vape",date:"13/05",owner:"بابا",phone:"0114 0434618",service:"سيستم فيبات",cost:10000,collected:0,status:"ملغي",agent:"قعرو",address:"امام الاستاد",notes:"شايف السعر غالي"},
    {id:17,name:"ايليت جروب",date:"01/02",owner:"اللواء طارق جمعه",phone:"010 0368 8880",service:"ويبسايت محاماه",cost:5500,collected:0,status:"ملغي",agent:"قعرو",address:"غرب سهيل جريدي",notes:"مرضيش يدفع الفلوس"},
    {id:18,name:"اولاد صمور للكاوتش",date:"27/04",owner:"صمور",phone:"010 2722 1512",service:"سيستم اداره",cost:5000,collected:0,status:"ملغي",agent:"قعرو",address:"بجوار المستشفي العام",notes:"مستعجل وغير قادرين علي المهمه"}
  ],
  team: [
    {id:1,name:"قعرو",role:"CEO",phone:"—",joined:"2025-01-01",clients:15,completed:5,cancelled:5,commission:0,notes:"المندوب الرئيسي"},
    {id:2,name:"عبد العزيز (عبعظ)",role:"CFO",phone:"—",joined:"2025-01-01",clients:4,completed:4,cancelled:0,commission:10000,notes:"متخصص تسعير"},
    {id:3,name:"كيرو أمير",role:"CRM",phone:"—",joined:"2025-01-01",clients:1,completed:1,cancelled:0,commission:5500,notes:"يتابع جميع العملاء"}
  ],
  targetsByYear: {
    2025: [
      {month:"يناير",target:10000,actual:0,clientsTarget:2,clientsActual:0,status:"لا بيانات",notes:""},
      {month:"فبراير",target:12000,actual:32000,clientsTarget:2,clientsActual:4,status:"تجاوز التارجت",notes:"4 عملاء سيستم مطاعم"},
      {month:"مارس",target:12000,actual:0,clientsTarget:2,clientsActual:0,status:"لا بيانات",notes:""},
      {month:"ابريل",target:12000,actual:0,clientsTarget:2,clientsActual:0,status:"لا بيانات",notes:""},
      {month:"مايو",target:15000,actual:30000,clientsTarget:3,clientsActual:5,status:"تجاوز التارجت",notes:"بنزينة التعاون مكتمل"},
      {month:"يونيو",target:15000,actual:0,clientsTarget:2,clientsActual:0,status:"مستهدف",notes:"موسسه العيسي + ما تيجي"},
      {month:"يوليو",target:18000,actual:0,clientsTarget:3,clientsActual:0,status:"مستهدف",notes:""},
      {month:"اغسطس",target:18000,actual:0,clientsTarget:3,clientsActual:0,status:"مستهدف",notes:""},
      {month:"سبتمبر",target:20000,actual:0,clientsTarget:3,clientsActual:0,status:"مستهدف",notes:""},
      {month:"اكتوبر",target:20000,actual:0,clientsTarget:4,clientsActual:0,status:"مستهدف",notes:""},
      {month:"نوفمبر",target:22000,actual:0,clientsTarget:4,clientsActual:0,status:"مستهدف",notes:""},
      {month:"ديسمبر",target:25000,actual:0,clientsTarget:5,clientsActual:0,status:"مستهدف",notes:""}
    ]
  },
  commissionRates: [
    {service:"سيستم + تسعير + مينيو",price:8000,rate:15,commission:1200},
    {service:"سيستم حسابات",price:30000,rate:12,commission:3600},
    {service:"نظام إدارة أعمال",price:18000,rate:12,commission:2160},
    {service:"سيستم كاشير / كافيه",price:10000,rate:13,commission:1300},
    {service:"ويبسايت",price:12000,rate:10,commission:1200},
    {service:"سيستم ملاهي وإدارة",price:15000,rate:12,commission:1800}
  ],
  services: [
    {id:1,name:"سيستم + تسعير + مينيو",category:"pos",price:8000,cost:3000,commissionRate:15,notes:""},
    {id:2,name:"سيستم كاشير",category:"pos",price:10000,cost:4000,commissionRate:13,notes:""},
    {id:3,name:"سيستم كافيه",category:"pos",price:8000,cost:3000,commissionRate:13,notes:""},
    {id:4,name:"سيستم سوبر ماركت",category:"pos",price:8000,cost:3500,commissionRate:13,notes:""},
    {id:5,name:"سيستم فيبات",category:"pos",price:10000,cost:4000,commissionRate:13,notes:""},
    {id:6,name:"سيستم حسابات",category:"mgmt",price:30000,cost:10000,commissionRate:12,notes:""},
    {id:7,name:"نظام إدارة أعمال",category:"mgmt",price:18000,cost:6000,commissionRate:12,notes:""},
    {id:8,name:"سيستم ملاهي وإدارة",category:"mgmt",price:15000,cost:5000,commissionRate:12,notes:""},
    {id:9,name:"سيستم اداره",category:"mgmt",price:10000,cost:3500,commissionRate:12,notes:""},
    {id:10,name:"ويبسايت سابلمنت",category:"web",price:12000,cost:4000,commissionRate:10,notes:""},
    {id:11,name:"ويبسايت محاماه",category:"web",price:5500,cost:2000,commissionRate:10,notes:""},
    {id:12,name:"ويبسايت تعريفي",category:"web",price:8000,cost:2500,commissionRate:10,notes:""},
    {id:13,name:"متابعة وإقناع",category:"other",price:10000,cost:0,commissionRate:0,notes:""},
    {id:14,name:"أخرى",category:"other",price:0,cost:0,commissionRate:0,notes:""}
  ],
  followups: [],
  feedbacks: [],
  employeeTargetsByYear: {},
  tasks: [],
  attendance: [],
  priceHistory: [],
  logo: null,
  stamp: null,
  lastUpdate: new Date().toLocaleString('ar-EG-u-nu-latn')
};

// كل عميل يبدأ بصفقة واحدة مبدئية (من بيانات العميل الافتراضية)، ويمكن إضافة صفقات أكتر بعدين
DEFAULT_DB.deals = DEFAULT_DB.clients.map(c => ({
  id: c.id, clientId: c.id, service: c.service, cost: c.cost, collected: c.collected,
  status: c.status, agent: c.agent, date: c.date, notes: c.notes
}));

let DB = loadDB();
applyPrintSize();
// لو فيه جلسة دخول محفوظة من قبل، دلوقتي بس نحدّث اسم المستخدم/الشركة في الشريط الجانبي
// (بعد ما DB بقى متاح فعليًا)، عشان نتجنب خطأ "استخدام DB قبل ما يتحمّل" اللي كان بيوقف السكريبت كله
if (typeof isLoggedIn === 'function' && isLoggedIn()) {
  updateSidebarUser();
}
let editingClientId = null;
let editingDealId = null;
let editingFollowupId = null;
let editingMsgTemplateId = null;
let currentPage = 'dashboard';

// ══════════════════════════════════════════
// جداول متجاوبة على الموبايل: كل عمود بياخد data-label من عنوانه في الـ <thead> تلقائيًا
// (بدون ما نلمس أي render function) عشان الـ CSS يقدر يعرض "العنوان: القيمة" في كل سطر
// بدل ما نحتاج نلف يمين وشمال على الموبايل
// ══════════════════════════════════════════
function labelizeResponsiveTables(root) {
  (root || document).querySelectorAll('.table-wrap table').forEach(table => {
    const headers = [...table.querySelectorAll('thead th')].map(th => th.textContent.trim());
    if (!headers.length) return;
    table.querySelectorAll('tbody tr').forEach(tr => {
      [...tr.children].forEach((td, i) => {
        if (td.tagName === 'TD' && headers[i] !== undefined && !td.hasAttribute('data-label')) {
          td.setAttribute('data-label', headers[i]);
        }
      });
    });
  });
}
(function watchTablesForLabeling() {
  let scheduled = false;
  const observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { scheduled = false; labelizeResponsiveTables(); });
  });
  document.addEventListener('DOMContentLoaded', () => {
    labelizeResponsiveTables();
    observer.observe(document.body, { childList: true, subtree: true });
  });
})();
let currentFbRating = 0;

// ══════════════════════════════════════════
// TARGETS BY YEAR — helpers
// ══════════════════════════════════════════
const MONTHS_AR = ["يناير","فبراير","مارس","ابريل","مايو","يونيو","يوليو","اغسطس","سبتمبر","اكتوبر","نوفمبر","ديسمبر"];

function defaultYearTargets() {
  return MONTHS_AR.map(m => ({month:m, target:0, actual:0, clientsTarget:0, clientsActual:0, status:'لا بيانات', notes:''}));
}

// السنة المختارة حاليًا لعرض/تعديل الأهداف — تبدأ بأحدث سنة فيها بيانات، أو السنة الحالية
let currentTargetsYear = (() => {
  const years = Object.keys(DB.targetsByYear||{}).map(Number).filter(n=>!isNaN(n));
  if (years.length) return Math.max(...years);
  return new Date().getFullYear();
})();

function getYearTargets(year) {
  if (!DB.targetsByYear) DB.targetsByYear = {};
  if (!DB.targetsByYear[year]) DB.targetsByYear[year] = defaultYearTargets();
  return DB.targetsByYear[year];
}

function availableTargetYears() {
  const years = new Set(Object.keys(DB.targetsByYear||{}).map(Number));
  years.add(currentTargetsYear);
  years.add(new Date().getFullYear());
  return Array.from(years).sort((a,b)=>a-b);
}

// ══════════════════════════════════════════
// TARGETS BY EMPLOYEE — تارجت شهري لكل موظف على حدة (يتقارن بالمحصّل الفعلي من صفقاته)
// ══════════════════════════════════════════
let currentEmpTargetsMemberId = null;
let currentEmpTargetsYear = new Date().getFullYear();

function defaultEmployeeYearTargets() {
  return MONTHS_AR.map(m => ({month:m, target:0}));
}

function getEmployeeYearTargets(year, memberId) {
  if (!DB.employeeTargetsByYear) DB.employeeTargetsByYear = {};
  if (!DB.employeeTargetsByYear[year]) DB.employeeTargetsByYear[year] = {};
  if (!DB.employeeTargetsByYear[year][memberId]) DB.employeeTargetsByYear[year][memberId] = defaultEmployeeYearTargets();
  return DB.employeeTargetsByYear[year][memberId];
}

// بيحسب المحصّل الفعلي لموظف معيّن في شهر معيّن، من واقع صفقاته الفعلية (مش رقم متحدّث يدويًا) — نفس منطق مطابقة الاسم المستخدم في اللوحة والفريق
function getAgentMonthActual(agentName, year, monthIdx) {
  if (!agentName) return 0;
  const ym = `${year}-${String(monthIdx+1).padStart(2,'0')}`;
  return (DB.deals||[])
    .filter(d => (d.agent||'').includes(agentName) || agentName.includes(d.agent||''))
    .filter(d => (d.date||'').slice(0,7) === ym)
    .reduce((a,d)=>a+(d.collected||0), 0);
}

function populateEmpTargetsEmployeeSelect(selectId) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const prev = sel.value;
  sel.innerHTML = (DB.team||[]).map(m => `<option value="${m.id}">${m.name}</option>`).join('');
  if (prev && [...sel.options].some(o=>o.value===prev)) sel.value = prev;
  else if (sel.options.length) sel.value = sel.options[0].value;
}

function renderEmployeeTargets() {
  populateEmpTargetsEmployeeSelect('emp-targets-employee-select');
  const sel = document.getElementById('emp-targets-employee-select');
  const grid = document.getElementById('emp-targets-grid');
  const statsBox = document.getElementById('emp-targets-stats');
  if (!sel || !grid) return;
  if (!(DB.team||[]).length) {
    grid.innerHTML = `<div class="empty" style="padding:30px"><div>أضف أعضاء فريق أولاً من صفحة الموظفين عشان تقدر تحدد تارجت لكل واحد</div></div>`;
    if (statsBox) statsBox.innerHTML = '';
    return;
  }
  const memberId = parseInt(sel.value);
  const member = (DB.team||[]).find(m => m.id === memberId);
  const year = currentTargetsYear;
  const yearTargets = getEmployeeYearTargets(year, memberId);
  const totalTarget = yearTargets.reduce((a,t)=>a+t.target,0);
  const totalActual = member ? MONTHS_AR.reduce((a,_,i)=>a+getAgentMonthActual(member.name, year, i), 0) : 0;

  if (statsBox) {
    statsBox.innerHTML = `
      <div class="stat-card gold">
        <div class="stat-icon" style="color:var(--gold)">${IC.target}</div>
        <div class="stat-label">الهدف السنوي للموظف</div>
        <div class="stat-value">${fmt(totalTarget)}</div>
        <div class="stat-sub">ج.م لعام ${year}</div>
      </div>
      <div class="stat-card green">
        <div class="stat-icon" style="color:var(--green)">${IC.money}</div>
        <div class="stat-label">المحصل الفعلي</div>
        <div class="stat-value">${fmt(totalActual)}</div>
        <div class="stat-sub">${pct(totalActual,totalTarget)}% من الهدف</div>
      </div>
    `;
  }

  grid.innerHTML = yearTargets.map((t,i) => {
    const actual = member ? getAgentMonthActual(member.name, year, i) : 0;
    const p = t.target ? pct(actual, t.target) : 0;
    const exceeded = actual >= t.target && t.target > 0;
    const hasData = actual > 0;
    return `<div class="target-card">
      <div class="target-month">${t.month}</div>
      <div class="target-bar">
        <span style="color:var(--text2)">${fmt(actual)}</span>
        <span style="color:var(--text3)">/ ${fmt(t.target)}</span>
      </div>
      <div class="progress-bar" style="margin-bottom:8px">
        <div class="progress-fill ${exceeded?'progress-green':'progress-gold'}" style="width:${Math.min(p,100)}%"></div>
      </div>
      <div class="target-pct ${exceeded?'target-exceeded':hasData?'target-active':'target-pending'}">
        ${hasData ? p+'%' : '—'}
      </div>
    </div>`;
  }).join('');
}

function openEditEmployeeTargets() {
  if (!(DB.team||[]).length) { toast('أضف أعضاء فريق أولاً من صفحة الموظفين', 'error'); return; }
  populateEmpTargetsEmployeeSelect('emp-tgt-member-select');
  const empSel = document.getElementById('emp-targets-employee-select');
  if (empSel && empSel.value) document.getElementById('emp-tgt-member-select').value = empSel.value;

  const now = new Date().getFullYear();
  const yearsSet = new Set();
  for (let y = now - 3; y <= now + 5; y++) yearsSet.add(y);
  yearsSet.add(currentTargetsYear);
  const years = Array.from(yearsSet).sort((a,b)=>a-b);
  const yearSel = document.getElementById('emp-tgt-year-select');
  yearSel.innerHTML = years.map(y => `<option value="${y}" ${y===currentTargetsYear?'selected':''}>${y}</option>`).join('');

  renderEmployeeTargetsEditTable();
  openModal('modal-emp-targets');
}

function renderEmployeeTargetsEditTable() {
  const memberId = parseInt(document.getElementById('emp-tgt-member-select').value);
  const year = parseInt(document.getElementById('emp-tgt-year-select').value) || currentTargetsYear;
  const member = (DB.team||[]).find(m => m.id === memberId);
  const yearTargets = getEmployeeYearTargets(year, memberId);
  document.getElementById('emp-targets-edit-body').innerHTML = `
    <div style="overflow-x:auto">
      <table>
        <thead><tr><th>الشهر</th><th>التارجت (ج.م)</th><th>المحصل الفعلي (تلقائي)</th></tr></thead>
        <tbody>
          ${yearTargets.map((t,i)=>{
            const actual = member ? getAgentMonthActual(member.name, year, i) : 0;
            return `<tr>
              <td style="font-weight:700">${t.month}</td>
              <td><input class="form-input" style="width:120px" id="emp-tgt-target-${i}" value="${t.target}" type="number"></td>
              <td style="color:var(--text3)">${fmt(actual)}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function saveEmployeeTargets() {
  const memberId = parseInt(document.getElementById('emp-tgt-member-select').value);
  const year = parseInt(document.getElementById('emp-tgt-year-select').value) || currentTargetsYear;
  const yearTargets = getEmployeeYearTargets(year, memberId);
  const ids = yearTargets.map((t,i)=>`emp-tgt-target-${i}`);
  let hasError = false;
  ids.forEach(id => { if (!isNonNegNum(document.getElementById(id).value || '0')) hasError = true; });
  clearFieldErrors(ids);
  if (hasError) {
    ids.forEach(id => { const el = document.getElementById(id); if (el && !isNonNegNum(el.value||'0')) el.classList.add('field-invalid'); });
    toast('في أرقام غير صحيحة في جدول هدف الموظف — لازم تكون 0 أو أكبر', 'error');
    return;
  }
  DB.employeeTargetsByYear[year][memberId] = yearTargets.map((t,i) => ({...t, target: parseFloat(document.getElementById(`emp-tgt-target-${i}`).value)||0}));
  saveDB();
  closeModal('modal-emp-targets');
  toast('تم حفظ هدف الموظف');
  renderEmployeeTargets();
}

function loadDB() {
  try {
    const raw = localStorage.getItem(isSandboxMode() ? SANDBOX_STORAGE_KEY : STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (!parsed.feedbacks) parsed.feedbacks = [];
      if (!parsed.employeeTargetsByYear) parsed.employeeTargetsByYear = {};
      if (!parsed.logo) parsed.logo = null;
      if (parsed.stamp === undefined) parsed.stamp = null;
      if (!parsed.invoices) parsed.invoices = [];
      if (!parsed.settings) parsed.settings = { brandName:'', brandSub:'', phone:'', email:'', address:'', theme:'dark-gold' };
      // ترقية من نظام الـ QR القديم (لينك واحد بس) لنظام قوائم QR متعددة، كل واحد بمكانه ورسالته الخاصة
      if (!parsed.settings.qrCodes) {
        parsed.settings.qrCodes = (parsed.settings.qrLink)
          ? [{ id: Date.now(), label: 'QR Code', link: parsed.settings.qrLink, caption: 'امسح الكود للتواصل', position: 'footer', showOnInvoice: !!parsed.settings.showQr, showOnIdCard: false }]
          : [];
      }
      if (!parsed.deals) {
        // ترقية من نسخة قديمة: نولّد صفقة واحدة لكل عميل موجود
        parsed.deals = (parsed.clients||[]).map(c => ({
          id: c.id, clientId: c.id, service: c.service, cost: c.cost, collected: c.collected,
          status: c.status, agent: c.agent, date: c.date, notes: c.notes
        }));
      }
      if (!parsed.services) parsed.services = JSON.parse(JSON.stringify(DEFAULT_DB.services));
      // ترقية من نسخة قديمة: targets كانت مصفوفة واحدة (سنة 2025 بس)، بقت خريطة بالسنين
      if (parsed.targets && !parsed.targetsByYear) {
        parsed.targetsByYear = { 2025: parsed.targets };
      }
      if (!parsed.targetsByYear) parsed.targetsByYear = {};
      delete parsed.targets;
      if (!parsed.followups) parsed.followups = [];
      if (!parsed.documents) parsed.documents = []; // مركز المستندات: عقود ومرفقات إضافية لكل عميل (غير الفواتير اللي بتتسجل تلقائيًا)
      if (!parsed.employees) parsed.employees = [];
      if (!parsed.activityLog) parsed.activityLog = [];
      if (!parsed.tasks) parsed.tasks = [];
      if (!parsed.attendance) parsed.attendance = [];
      if (!parsed.priceHistory) parsed.priceHistory = [];
      if (!parsed.settings.autoBackupDay) parsed.settings.autoBackupDay = '';
      if (!parsed.settings.lastAutoBackup) parsed.settings.lastAutoBackup = '';
      if (!parsed.settings.lastMonthlyReportMonth) parsed.settings.lastMonthlyReportMonth = '';
      if (!parsed.settings.lastSeasonalAlertMonth) parsed.settings.lastSeasonalAlertMonth = '';
      if (!parsed.quoteVariants) parsed.quoteVariants = []; // نسخ عروض الأسعار (اختبار A/B)
      if (!parsed.quoteSends) parsed.quoteSends = [];       // سجل إرسال كل نسخة لكل عميل (لحساب معدل التحويل)
      (parsed.deals||[]).forEach(d => { if (!Array.isArray(d.expenses)) d.expenses = []; });
      (parsed.clients||[]).forEach(c => { if (c.referralRewardGiven === undefined) c.referralRewardGiven = false; if (c.lat === undefined) c.lat = null; if (c.lng === undefined) c.lng = null; });
      parsed.followups.forEach(f => {
        if (f.done === undefined) f.done = false;
        if (f.nextDate === undefined) f.nextDate = '';
        if (f.duration === undefined) f.duration = null; // مدة التواصل بالدقايق (اختياري)
        if (f.agent === undefined) f.agent = '';          // مين اللي عمل المتابعة دي
      });
      // ترقية من نسخة قديمة: العملاء مكانش فيهم فلاج أرشفة — كلهم يبقوا نشطين افتراضيًا
      (parsed.clients||[]).forEach(c => {
        if (c.archived === undefined) c.archived = false;
        if (c.archivedAt === undefined) c.archivedAt = null;
      });
      return parsed;
    }
  } catch(e){}
  return {
    clients: [],
    deals: [],
    team: [],
    employees: [],
    targetsByYear: {},
    commissionRates: [],
    services: [],
    followups: [],
    feedbacks: [],
    invoices: [],
    documents: [],
    activityLog: [],
    tasks: [],
    attendance: [],
    priceHistory: [],
    logo: null,
    stamp: null,
    quoteVariants: [],
    quoteSends: [],
    settings: { brandName:'', brandSub:'', phone:'', email:'', address:'', theme:'dark-gold', autoBackupDay:'', lastAutoBackup:'', lastMonthlyReportMonth:'', lastSeasonalAlertMonth:'' },
    lastUpdate: new Date().toLocaleString('ar-EG-u-nu-latn')
  };
}

// ══════════════════════════════════════════
// SANDBOX MODE — بيئة تدريب منفصلة، بيانات وهمية بس، من غير ما تلمس بيانات النظام الحقيقية
// ══════════════════════════════════════════
const SANDBOX_STORAGE_KEY = 'fatinCRM_sandbox_v1';
function isSandboxMode() { return sessionStorage.getItem('fatinCRM_sandboxActive') === 'true'; }
function sandboxSeedData() {
  const seed = JSON.parse(JSON.stringify(DEFAULT_DB));
  seed.settings = { brandName:'وضع تجربة (Sandbox)', brandSub:'بيانات وهمية للتدريب', phone:'', email:'', address:'', theme:'dark-gold', autoBackupDay:'', lastAutoBackup:'' };

  const services = seed.services.length ? seed.services : DEFAULT_DB.services;
  const agents = ['محمود عبد الله (تجربة)', 'ندى فتحي (تجربة)'];
  seed.team = agents.map((name,i) => ({ id:i+1, name, role:'مندوب مبيعات', phone: devRandPhone(), joined: devRandDateISO(200), clients:0, completed:0, cancelled:0, commission:0, notes:'عضو فريق تجربة' }));

  const businessNames = ['مطعم الأصالة', 'كافيه لاونج', 'سوبر ماركت الأمل', 'صيدلية الشفاء', 'متجر الأناقة', 'عيادة النور', 'محل الديكور', 'أكاديمية التعليم', 'مركز اللياقة', 'بوتيك الموضة', 'مخبز الفرحة', 'ورشة السيارات'];
  const statuses = ['قيد المتابعة', 'عرض مقدم', 'نشط / مكتمل', 'ملغي'];
  const streetPrefixes = ['شارع الحرية', 'شارع النصر', 'شارع الجمهورية', 'شارع الثورة', 'ميدان رئيسي'];

  let clientId = 1, dealId = 1;
  AREA_ZONES.slice(0, 12).forEach((zone, i) => {
    const svc = devPick(services);
    const status = devPick(statuses);
    const cost = svc.price > 0 ? svc.price : devRandInt(5,30)*1000;
    const collected = status === 'نشط / مكتمل' ? cost : (status === 'ملغي' ? 0 : devRandInt(0, cost));
    const agent = devPick(agents);
    const date = devRandDateISO();
    const client = {
      id: clientId, name: `${devPick(businessNames)} ${zone.name}`, owner: devPick(['أحمد سمير','محمد عبد الله','مصطفى كامل','يوسف حسن']),
      phone: devRandPhone(), phones: [], branches: [], service: svc.name, cost, collected, status, agent, date,
      address: `${devPick(streetPrefixes)}، ${zone.name}`, notes: '', businessType:'', birthday:'',
      referredBy:'', referralRewardGiven:false, customFields:{}, archived:false, archivedAt:null,
      lat: jitterCoord(zone.lat), lng: jitterCoord(zone.lng)
    };
    seed.clients.push(client);
    seed.deals.push({ id: dealId, clientId: client.id, service: svc.name, cost, collected, status, agent, date, notes:'', expenses:[] });
    clientId++; dealId++;
  });

  // متابعات تجريبية تغطي أنواع مختلفة (فيها زيارات ميدانية عشان تقرير حركة الموظفين يبان)
  const fuTypes = ['مكالمة هاتفية', 'واتساب', 'زيارة ميدانية', 'إرسال عرض', 'تحصيل مبلغ'];
  let fuId = 1;
  seed.clients.forEach(c => {
    const n = devRandInt(1,3);
    for (let i=0;i<n;i++) {
      seed.followups.push({ id: fuId++, clientId: c.id, type: devPick(fuTypes), note:'متابعة تجريبية', next:'', nextDate:'', agent: c.agent, duration: devRandInt(2,15), audioNote:null, date: new Date().toLocaleDateString('ar-EG-u-nu-latn'), done: Math.random()<0.5 });
    }
  });

  // مهام ومصاريف تجريبية بسيطة
  seed.tasks = [
    { id:1, title:'جهز عرض سعر لعميل جديد', due: todayISO(), priority:'high', assignee: agents[0], notes:'', done:false, createdAt: todayISO() },
    { id:2, title:'متابعة فاتورة متأخرة', due: todayISO(), priority:'normal', assignee: agents[1], notes:'', done:false, createdAt: todayISO() },
  ];

  return seed;
}
function enterSandboxMode() {
  if (!localStorage.getItem(SANDBOX_STORAGE_KEY)) {
    localStorage.setItem(SANDBOX_STORAGE_KEY, JSON.stringify(sandboxSeedData()));
  }
  sessionStorage.setItem('fatinCRM_sandboxActive', 'true');
  location.reload();
}
function exitSandboxMode() {
  sessionStorage.removeItem('fatinCRM_sandboxActive');
  location.reload();
}
function resetSandboxData() {
  localStorage.setItem(SANDBOX_STORAGE_KEY, JSON.stringify(sandboxSeedData()));
  toast('تم تصفير بيانات وضع التجربة');
  location.reload();
}
function renderSandboxBanner() {
  const el = document.getElementById('sandbox-banner');
  if (!el) return;
  el.style.display = isSandboxMode() ? 'flex' : 'none';
}

function saveDB() {
  DB.lastUpdate = new Date().toLocaleString('ar-EG-u-nu-latn');
  localStorage.setItem(isSandboxMode() ? SANDBOX_STORAGE_KEY : STORAGE_KEY, JSON.stringify(DB));
  // أي تغيير في البيانات (من أي صفحة) بيحدّث كل حاجة ظاهرة على الشاشة فورًا —
  // البادجات، الإشعارات، اسم الشركة، والصفحة الحالية — مش بس الجزء اللي اتغيّر
  if (typeof refreshEverything === 'function') refreshEverything();
  else refreshBadges();
}

// بتحدّث كل شارات (badges) العدّادات في السايد بار والهيدر فورًا مع أي تغيير في البيانات،
// بغض النظر عن الصفحة المفتوحة حاليًا
function refreshBadges() {
  const dealsBadge = document.getElementById('followup-badge');
  if (dealsBadge) {
    const urgentDeals = (DB.deals||[]).filter(d=>d.status==='قيد المتابعة').length;
    dealsBadge.textContent = urgentDeals || '';
    dealsBadge.style.display = urgentDeals ? 'inline' : 'none';
  }
  updateFollowupsBadge();
}

// ══════════════════════════════════════════
// LOGO
// ══════════════════════════════════════════
function applyLogo() {
  const img = document.getElementById('logo-img');
  const ph = document.getElementById('logo-ph');
  const pImg = document.getElementById('print-logo-img');
  const pPh = document.getElementById('print-logo-ph');
  if (DB.logo) {
    img.src = DB.logo;
    img.style.display = 'block';
    ph.style.display = 'none';
    if (pImg) { pImg.src = DB.logo; pImg.style.display = 'block'; pPh.style.display = 'none'; }
  } else {
    img.style.display = 'none';
    ph.style.display = 'flex';
    if (pImg) { pImg.style.display = 'none'; pPh.style.display = 'flex'; }
  }
}

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
const pageTitles = {
  dashboard: 'لوحة التحكم',
  clients: 'قائمة العملاء',
  deals: 'الصفقات',
  followups: 'المتابعات',
  tasks: 'المهام',
  'clients-map': 'خريطة العملاء',
  targets: 'التارجت والأهداف',
  social: 'ربط السوشيال',
  employees: 'الموظفين وفريق العمل',
  services: 'الخدمات',
  feedback: 'تقييمات العملاء',
  'financial-reports': 'تقارير مالية',
  'document-center': 'مركز المستندات',
  templates: 'القوالب الجاهزة',
  'activity-log': 'سجل النشاط',
  developer: 'لوحة المطور',
  settings: 'الإعدادات'
};

// بيتأكد إن المستخدم الحالي (لو مقيّد بصلاحيات صفحات معينة) مسموح له يفتح الصفحة دي
function isPageAllowedForUser(page) {
  const cur = getCurrentUser();
  if (!cur || isDeveloperUser()) return true;
  if (!Array.isArray(cur.allowedPages)) return true; // حسابات قديمة من غير تقييد = وصول كامل
  return cur.allowedPages.includes(page);
}

// أول صفحة مسموح للمستخدم الحالي يفتحها (بترتيب القائمة الجانبية) — بتستخدم كبديل
// لما "لوحة التحكم" (أو أي صفحة محفوظة) تبقى مقفولة على المستخدم ده
function getFirstAllowedPage() {
  const cur = getCurrentUser();
  const candidates = Object.keys(pageTitles).filter(p => p !== 'developer' || isDeveloperUser());
  const found = candidates.find(p => isPageAllowedForUser(p));
  return found || 'dashboard';
}

// بنحفظ آخر صفحة مفتوحة عشان لو حصل ريفريش (F5) يرجعك لنفس الصفحة بدل ما يرميك على الهوم
const CURRENT_PAGE_KEY = 'fatinCRM_currentPage_v1';
function getSavedPage() {
  const saved = localStorage.getItem(CURRENT_PAGE_KEY);
  if (saved && pageTitles[saved] && !(saved === 'developer' && !isDeveloperUser()) && isPageAllowedForUser(saved)) return saved;
  return getFirstAllowedPage();
}

function navigate(page) {
  if (page === 'developer' && !isDeveloperUser()) { toast('الصفحة دي متاحة للمطور بس', 'error'); return; }
  if (!isPageAllowedForUser(page)) { toast('الصفحة دي مش متاحة لصلاحيتك', 'error'); return; }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.textContent.trim().includes(pageTitles[page])) n.classList.add('active');
  });
  document.getElementById('page-title').textContent = pageTitles[page];
  const printTitleEl = document.getElementById('print-page-title');
  if (printTitleEl) printTitleEl.textContent = pageTitles[page];
  currentPage = page;
  localStorage.setItem(CURRENT_PAGE_KEY, page); // نحفظ آخر صفحة عشان الريفريش
  renderPage(page);
  closeSidebar(); // السايدبار يقفل تلقائي بعد اختيار أي صفحة
}

// ══════════════════════════════════════════
// SIDEBAR (مقفول دايماً، يتفتح بس بالضغط على زرار القائمة)
// ══════════════════════════════════════════
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-backdrop').classList.add('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-backdrop').classList.remove('open');
}
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.classList.contains('open')) closeSidebar();
  else openSidebar();
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSidebar(); closeNotifDropdown(); closeGlobalSearch(); }
});

// تبديل تابات صفحة "الموظفين وفريق العمل" المدموجة (بيانات الموظفين / أداء الفريق / جدول العمولات)
function setEmployeesTab(tab) {
  document.querySelectorAll('#employees-tabs .tab').forEach((t,i)=>{
    t.classList.toggle('active', ['staff','performance','commission-table','attendance'][i]===tab);
  });
  document.getElementById('emp-tab-staff').style.display = tab==='staff' ? '' : 'none';
  document.getElementById('emp-tab-performance').style.display = tab==='performance' ? '' : 'none';
  document.getElementById('emp-tab-commission-table').style.display = tab==='commission-table' ? '' : 'none';
  document.getElementById('emp-tab-attendance').style.display = tab==='attendance' ? '' : 'none';
  if (tab==='attendance') renderAttendance();
}

function renderPage(page) {
  if (page === 'dashboard') renderDashboard();
  else if (page === 'clients') renderClients();
  else if (page === 'deals') renderDeals();
  else if (page === 'followups') renderFollowups();
  else if (page === 'tasks') renderTasks();
  else if (page === 'clients-map') renderClientsMap();
  else if (page === 'targets') renderTargets();
  else if (page === 'employees') { renderEmployees(); renderTeam(); renderAttendance(); }
  else if (page === 'services') renderServices();
  else if (page === 'feedback') renderFeedbackPage();
  else if (page === 'financial-reports') renderFinancialReports();
  else if (page === 'document-center') renderDocumentCenter();
  else if (page === 'templates') renderTemplatesPage();
  else if (page === 'msg-templates') renderMsgTemplatesPage();
  else if (page === 'activity-log') renderActivityLogPage();
  else if (page === 'developer') renderDeveloperPage();
  else if (page === 'settings') renderSettings();
}

// ══════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════
const fmt = n => Number(n||0).toLocaleString('ar-EG-u-nu-latn');
const pct = (a,b) => b ? Math.round(a/b*100) : 0;

// ══════════════════════════════════════════
// VALIDATION
// ══════════════════════════════════════════
const isRequired    = v => v !== undefined && v !== null && String(v).trim() !== '';
const isNonNegNum   = v => v !== '' && v !== null && v !== undefined && !isNaN(v) && Number(v) >= 0;
const isPositiveNum = v => v !== '' && v !== null && v !== undefined && !isNaN(v) && Number(v) > 0;
const isPercent     = v => isNonNegNum(v) && Number(v) <= 100;
const isValidShortDate = v => /^\d{1,2}\/\d{1,2}$/.test(String(v||'').trim());
const isValidPhone  = v => !v || /^[\d\s+()-]{6,20}$/.test(String(v).trim());

// ══════════════════════════════════════════
// DATE HELPERS (حقل التاريخ الحقيقي بدل نص)
// ══════════════════════════════════════════
function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
// بيحول تاريخ قديم بصيغة يوم/شهر (بيانات سابقة) لصيغة ISO عشان حقل input[type=date] يقدر يعرضها
function ddmmToISO(str) {
  str = String(str||'').trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str; // بالفعل ISO
  const m = str.match(/^(\d{1,2})\/(\d{1,2})$/);
  if (m) {
    const day = m[1].padStart(2,'0'), month = m[2].padStart(2,'0');
    return `${new Date().getFullYear()}-${month}-${day}`;
  }
  return '';
}
// بيعرض تاريخ ISO بشكل يوم/شهر/سنة، ولو مش ISO (بيانات قديمة) بيسيبه زي ما هو
function formatDateDisplay(str) {
  str = String(str||'').trim();
  const m = str.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (m) return `${m[3]}/${m[2]}/${m[1]}`;
  return str || '—';
}

// آخر نشاط فعلي على العميل = آخر متابعة (id بتاع المتابعة هو Date.now() وقت إنشاءها)
// أو تاريخ آخر صفقة لو مفيش متابعات خالص
function clientLastActivity(c) {
  let latest = null;
  const iso = ddmmToISO(c.date);
  if (iso) { const d = new Date(iso); if (!isNaN(d)) latest = d; }
  (DB.followups || []).filter(f => f.clientId === c.id).forEach(f => {
    const d = new Date(f.id);
    if (!isNaN(d) && (!latest || d > latest)) latest = d;
  });
  return latest;
}
// فرق الأيام بين تاريخ معين والنهاردة
function daysSince(date) {
  if (!date) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  const d = new Date(date); d.setHours(0,0,0,0);
  return Math.round((today - d) / 86400000);
}
// نص بشري بسيط زي "من 3 أيام" أو "النهاردة" بناءً على تاريخ آخر نشاط
function relativeTimeAr(date) {
  if (!date) return '—';
  const days = daysSince(date);
  if (days === null) return '—';
  if (days <= 0) return 'النهاردة';
  if (days === 1) return 'من يوم';
  if (days < 7) return `من ${days} أيام`;
  if (days < 30) { const w = Math.round(days/7); return `من ${w} ${w===1?'أسبوع':'أسابيع'}`; }
  const m = Math.round(days/30);
  return `من ${m} ${m===1?'شهر':'شهور'}`;
}

// ══════════════════════════════════════════
// أرقام تليفون إضافية + فروع العميل (helpers)
// ══════════════════════════════════════════
// ══════════════════════════════════════════
// زرار "اتصال" من داخل النظام (Click-to-Call) — روابط tel: بسيطة، من غير أي تكامل خارجي
// ══════════════════════════════════════════
function telHref(phone) {
  const digits = String(phone||'').replace(/[^\d+]/g, '');
  return digits ? `tel:${digits}` : '#';
}
function callBtnHtml(phone, size) {
  if (!phone || phone === '—') return '';
  const s = size || '';
  return `<a class="act-btn" href="${telHref(phone)}" title="اتصال بـ ${phone}" onclick="event.stopPropagation()" style="${s}">${IC.phone}</a>`;
}

function phonesExtraContainer() { return document.getElementById('f-phones-extra'); }
function branchesContainer() { return document.getElementById('f-branches-list'); }

function addPhoneRow(value) {
  const wrap = phonesExtraContainer();
  if (!wrap) return;
  const row = document.createElement('div');
  row.className = 'dynamic-row';
  row.innerHTML = `
    <input class="form-input" placeholder="رقم تليفون إضافي" value="${(value||'').replace(/"/g,'&quot;')}">
    <button type="button" class="dynamic-row-del" onclick="this.closest('.dynamic-row').remove()" title="حذف الرقم">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>`;
  wrap.appendChild(row);
}

function addBranchRow(branch) {
  branch = branch || {name:'', address:'', phone:''};
  const wrap = branchesContainer();
  if (!wrap) return;
  const row = document.createElement('div');
  row.className = 'dynamic-row branch-row';
  row.innerHTML = `
    <input class="form-input" placeholder="اسم الفرع" value="${(branch.name||'').replace(/"/g,'&quot;')}">
    <input class="form-input" placeholder="عنوان الفرع" value="${(branch.address||'').replace(/"/g,'&quot;')}">
    <input class="form-input" placeholder="تليفون الفرع" value="${(branch.phone||'').replace(/"/g,'&quot;')}">
    <button type="button" class="dynamic-row-del" onclick="this.closest('.dynamic-row').remove()" title="حذف الفرع">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>`;
  wrap.appendChild(row);
}

function collectExtraPhones() {
  const wrap = phonesExtraContainer();
  if (!wrap) return [];
  return Array.from(wrap.querySelectorAll('input')).map(i=>i.value.trim()).filter(Boolean);
}

function collectBranches() {
  const wrap = branchesContainer();
  if (!wrap) return [];
  return Array.from(wrap.querySelectorAll('.dynamic-row')).map(row => {
    const inputs = row.querySelectorAll('input');
    return { name: inputs[0].value.trim(), address: inputs[1].value.trim(), phone: inputs[2].value.trim() };
  }).filter(b => b.name || b.address || b.phone);
}

// بيحول نص الأرقام/الفروع (من ملف الإكسيل) لمصفوفة، والعكس
function parsePhonesCell(v) {
  return String(v||'').split(/[؛;,]/).map(s=>s.trim()).filter(Boolean);
}
function parseBranchesCell(v) {
  return String(v||'').split(/[؛;]/).map(s=>s.trim()).filter(Boolean).map(part => {
    const bits = part.split(':').map(x=>x.trim());
    return { name: bits[0]||'', address: bits[1]||'', phone: bits[2]||'' };
  });
}
function phonesToCell(phones) { return (phones||[]).join('؛ '); }
function branchesToCell(branches) {
  return (branches||[]).map(b => [b.name,b.address,b.phone].filter(Boolean).join(':')).join('؛ ');
}
// بيحول قيمة تاريخ جايه من الإكسيل (Date أو نص) لصيغة ISO موحّدة
function normalizeDateCell(v) {
  if (v instanceof Date && !isNaN(v)) {
    return `${v.getFullYear()}-${String(v.getMonth()+1).padStart(2,'0')}-${String(v.getDate()).padStart(2,'0')}`;
  }
  const str = String(v||'').trim();
  if (!str) return todayISO();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const dmY = str.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
  if (dmY) return `${dmY[3]}-${dmY[2].padStart(2,'0')}-${dmY[1].padStart(2,'0')}`;
  const dm = str.match(/^(\d{1,2})\/(\d{1,2})$/);
  if (dm) return `${new Date().getFullYear()}-${dm[2].padStart(2,'0')}-${dm[1].padStart(2,'0')}`;
  return str;
}

// ══════════════════════════════════════════
// GENERIC TABLE SORTING (نظام فرز عام لكل الجداول)
// ══════════════════════════════════════════
const sortStates = {};

// بيتنادى من onclick بتاع أي عمود قابل للفرز
function thSort(tableName, key, renderFn) {
  const st = sortStates[tableName] || (sortStates[tableName] = {key:null, dir:1});
  if (st.key === key) st.dir *= -1; else { st.key = key; st.dir = 1; }
  updateSortHeaderUI(tableName, key, st.dir);
  renderFn();
}

function updateSortHeaderUI(tableName, key, dir) {
  document.querySelectorAll(`th[data-table="${tableName}"]`).forEach(th => {
    th.removeAttribute('data-sort');
    if (th.dataset.key === key) th.setAttribute('data-sort', dir > 0 ? 'asc' : 'desc');
  });
}

// بيحول تاريخ (ISO أو يوم/شهر) لرقم قابل للمقارنة
function dateSortValue(str) {
  const iso = ddmmToISO(str) || String(str||'');
  const t = Date.parse(iso);
  return isNaN(t) ? 0 : t;
}

// list: المصفوفة بعد الفلترة/البحث. extractors: {key: fn(item)=>value قابل للمقارنة}
function applySort(list, tableName, extractors) {
  const st = sortStates[tableName];
  if (!st || !st.key || !extractors[st.key]) return list;
  const ext = extractors[st.key];
  return [...list].sort((a,b) => {
    let va = ext(a), vb = ext(b);
    if (typeof va === 'string') va = va.toLowerCase();
    if (typeof vb === 'string') vb = vb.toLowerCase();
    if (va < vb) return -1 * st.dir;
    if (va > vb) return 1 * st.dir;
    return 0;
  });
}


// بيبني قائمة المندوبين من فريق العمل + أي أسماء مندوبين موجودة فعلاً في العملاء/الصفقات
// (عشان لو حد ضاف مندوب جديد في صفحة الفريق يظهر فورًا هنا، وميحصلش فقدان لأسماء قديمة)
function getAgentNames() {
  const names = new Set();
  (DB.team||[]).forEach(m => { if (m.name) names.add(m.name); });
  (DB.clients||[]).forEach(c => { if (c.agent) names.add(c.agent); });
  (DB.deals||[]).forEach(d => { if (d.agent) names.add(d.agent); });
  return [...names];
}
function populateAgentOptions(selectId, selectedValue) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const names = getAgentNames();
  sel.innerHTML = names.map(n => `<option value="${n}">${n}</option>`).join('');
  if (selectedValue && !names.includes(selectedValue)) {
    sel.insertAdjacentHTML('beforeend', `<option value="${selectedValue}">${selectedValue}</option>`);
  }
  sel.value = selectedValue || (names[0]||'');
}
const isValidEmail  = v => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());

// بتشيل أي علامة خطأ سابقة من الحقول دي
function clearFieldErrors(ids) {
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('field-invalid');
  });
}

// rules: [{id, value, test, message}]
// بتوقف عند أول خطأ: بتعلّم الحقل بالأحمر، تعرض توست بالرسالة، وتركّز عليه
function runValidation(rules) {
  clearFieldErrors(rules.map(r => r.id));
  for (const r of rules) {
    if (!r.test(r.value)) {
      const el = document.getElementById(r.id);
      if (el) { el.classList.add('field-invalid'); el.focus(); }
      toast(r.message, 'error');
      return false;
    }
  }
  return true;
}

// أسباب إلغاء الصفقات — تتسجل وقت ما صفقة تتحط "ملغي" عشان نعرف أكتر سبب بيخسّرنا صفقات
const CANCEL_REASONS = ['السعر غالي', 'اختار منافس', 'مستعجل / أجّل القرار', 'مش مقتنع بالخدمة', 'مشكلة في التواصل', 'سبب آخر'];
// بيتوجّد/يتخفى حقل سبب الإلغاء في فورم الصفقة حسب الحالة المختارة
function toggleCancelReasonField() {
  const statusEl = document.getElementById('d-status');
  const group = document.getElementById('d-cancel-reason-group');
  if (!statusEl || !group) return;
  group.style.display = statusEl.value === 'ملغي' ? '' : 'none';
}
const STATUS_ICONS = { green: IC.check, gold: IC.clock, cyan: IC.offer, red: IC.cancel, gray: IC.target, purple: IC.star_fill };
function getDealStatuses() {
  return ensureSettingsList('dealStatuses', () => [
    {name:'قيد المتابعة', color:'gold'},
    {name:'عرض مقدم', color:'cyan'},
    {name:'نشط / مكتمل', color:'green'},
    {name:'ملغي', color:'red'}
  ]);
}
function statusBadge(s) {
  const found = getDealStatuses().find(x => x.name === s);
  const color = found ? found.color : 'gray';
  const icon = STATUS_ICONS[color] || '';
  return `<span class="badge badge-${color}">${icon} ${s}</span>`;
}

// ══════════════════════════════════════════
// مكتبة الرسائل الجاهزة (Smart Templates) — واتساب/إيميل لكل موقف
// ══════════════════════════════════════════
// المتغيرات المتاحة جوه أي قالب: {name} {owner} {service} {cost} {collected} {remaining} {agent} {date} {phone}
const MSG_TEMPLATE_CATEGORIES = [
  {key:'marketing', name:'ماركتينج / أول تواصل'},
  {key:'followup',  name:'متابعة'},
  {key:'closing',   name:'إغلاق الصفقة'},
  {key:'postsale',  name:'ما بعد البيع'},
  {key:'invoices',  name:'الفواتير والديون'},
  {key:'employees', name:'الموظفين والمرتبات'},
  {key:'general',   name:'عام / مناسبات'}
];
function buildDefaultMessageTemplates() {
  return [
    // ── ماركتينج / أول تواصل ──
    {
      id: 1, name: 'أول تواصل / تعريف بالخدمة', category: 'marketing', channel: 'whatsapp',
      body: 'مرحباً "{name}" 👋\nمعاك {agent} من {company}.\nبنقدم خدمة "{service}" وحابب أعرض عليك التفاصيل والأسعار — تحب نتكلم دلوقتي ولا تفضل ميعاد تاني يناسبك؟'
    },
    {
      id: 2, name: 'رد على استفسار عميل', category: 'marketing', channel: 'whatsapp',
      body: 'أهلاً "{name}" 🌹\nشكراً لتواصلك معانا بخصوص "{service}".\nالسعر بيبدأ من {cost} ج.م حسب التفاصيل اللي محتاجها.\nلو حابب توضيح أكتر أو عرض سعر مفصل، قولي وهرسلهولك حالاً.'
    },
    {
      id: 3, name: 'عرض سعر رسمي', category: 'marketing', channel: 'whatsapp',
      body: 'مرحباً "{owner}"، بتمنى تكون بخير 🌹\nبناءً على طلبك، ده عرض السعر الخاص بـ "{service}" بقيمة {cost} ج.م.\nهل تحب نثبت الاتفاق ونحدد ميعاد البدء؟'
    },
    {
      id: 4, name: 'إعادة استهداف عميل مهتم قديم', category: 'marketing', channel: 'whatsapp',
      body: 'أهلاً "{name}" 👋\nكنا اتكلمنا قبل كده بخصوص "{service}"، وحابب أطمن هل لسه محتاج الخدمة؟\nعندنا عروض جديدة ممكن تناسبك دلوقتي.'
    },
    // ── متابعة (Follow-up) ──
    {
      id: 5, name: 'متابعة بعد عرض سعر', category: 'followup', channel: 'whatsapp',
      body: 'مرحباً "{owner}"، بتمنى تكون بخير 💡\nبنتابع معاك بخصوص عرض السعر اللي اتبعتلك لـ "{service}" بقيمة {cost} ج.م.\nهل قدرت تراجعه؟ لو عندك أي استفسار أنا موجود.'
    },
    {
      id: 6, name: 'متابعة بدون رد (3 أيام)', category: 'followup', channel: 'whatsapp',
      body: 'أهلاً "{name}" 🙏\nمحاولين نتواصل معاك من فترة بخصوص "{service}" ولسه مستنيين ردك.\nلو لسه مهتم قولنا، ولو مش دلوقتي مفيش مشكلة، إحنا موجودين وقت ما تحتاجنا.'
    },
    {
      id: 7, name: 'تذكير بموعد', category: 'followup', channel: 'whatsapp',
      body: 'مرحباً "{owner}"، تذكير بسيط بميعادنا الخاص بـ "{service}" يوم {date}.\nياريت تأكد الميعاد يناسبك ولا تحتاج نغيره.'
    },
    {
      id: 8, name: 'متابعة رضا أثناء تنفيذ الخدمة', category: 'followup', channel: 'whatsapp',
      body: 'أهلاً "{name}" 🌹\nإحنا في منتصف تنفيذ "{service}"، حابب أطمن كل حاجة ماشية زي ما اتفقنا وعندك أي ملاحظات لحد دلوقتي؟'
    },
    // ── إغلاق الصفقة ──
    {
      id: 9, name: 'تأكيد الاتفاق وبدء التنفيذ', category: 'closing', channel: 'whatsapp',
      body: 'تمام يا "{owner}" ✅\nتم تأكيد الاتفاق على "{service}" بقيمة {cost} ج.م.\nهنبدأ التنفيذ يوم {date}، وهيتابعك {agent} أول بأول.'
    },
    {
      id: 10, name: 'شكر بعد إغلاق صفقة', category: 'closing', channel: 'whatsapp',
      body: 'أهلاً "{owner}" 🎉\nشكراً جزيلاً لثقتك في التعامل معانا في "{service}"! تم إغلاق الصفقة بنجاح وإحنا سعداء بالتعاون.\nلو احتجت أي حاجة أو في أي سؤال، أنا موجود.'
    },
    {
      id: 11, name: 'طلب بيانات لاستكمال التعاقد', category: 'closing', channel: 'whatsapp',
      body: 'مرحباً "{name}"، عشان نستكمل التعاقد على "{service}" محتاجين منك:\n- الاسم بالكامل\n- رقم الاتصال البديل\n- العنوان (لو مطلوب)\nابعتهملي وهنبدأ فورًا.'
    },
    // ── ما بعد البيع ──
    {
      id: 12, name: 'متابعة رضا بعد التسليم', category: 'postsale', channel: 'whatsapp',
      body: 'أهلاً "{name}" 🌹\nبعد ما استلمت "{service}"، حابب أطمن إن كل حاجة عجبتك وماشية تمام؟\nرأيك يهمنا عشان نقدملك خدمة أفضل دايمًا.'
    },
    {
      id: 13, name: 'طلب تقييم / مراجعة', category: 'postsale', channel: 'whatsapp',
      body: 'مرحباً "{owner}" 🙏\nلو مبسوط من خدمة "{service}"، هيسعدنا جدًا تقييمك بكلمتين، ده بيفرق معانا كتير وبيساعدنا نتحسن أكتر.'
    },
    {
      id: 14, name: 'عرض خدمة إضافية (Cross-sell)', category: 'postsale', channel: 'whatsapp',
      body: 'أهلاً "{name}" 👋\nبناءً على تعاملك معانا في "{service}"، عندنا خدمة تانية ممكن تفيدك وتكمل نفس الاحتياج، تحب أشرحلك التفاصيل؟'
    },
    {
      id: 15, name: 'تذكير بمتابعة / صيانة دورية', category: 'postsale', channel: 'whatsapp',
      body: 'مرحباً "{owner}"، تذكير بسيط إن ميعاد المتابعة الدورية لخدمة "{service}" اقترب.\nياريت تتفق معانا على ميعاد يناسبك.'
    },
    // ── الفواتير والديون ──
    {
      id: 16, name: 'إشعار فاتورة مبيعات جديدة', category: 'invoices', channel: 'whatsapp',
      body: 'فاتورة مبيعات جديدة رقم {invoice_no}\nالعميل: {name}\nإجمالي الفاتورة: {invoice_total} ج.م\nالمدفوع: {paid} ج.م\nالمتبقي منها: {remaining} ج.م'
    },
    {
      id: 17, name: 'تذكير دفع بسيط', category: 'invoices', channel: 'whatsapp',
      body: 'مرحباً "{owner}"، تحية طيبة 🌹\nده تذكير بسيط إن فيه مبلغ متبقي قدره {remaining} ج.م على حساب "{name}".\nياريت لو ممكن نتفق على ميعاد للتحصيل في أقرب وقت.'
    },
    {
      id: 18, name: 'تذكير شهري بإجمالي الديون', category: 'invoices', channel: 'whatsapp',
      body: 'تذكير لطيف من {company}\nعزيزنا العميل {name}، يرجى العلم بأن إجمالي المديونيات المستحقة عليكم حتى تاريخه هو:\n{new_total_debt} ج.م\nشاكرين تعاونكم وسرعة سدادكم.'
    },
    {
      id: 19, name: 'إشعار استلام دفعة / سداد جزئي', category: 'invoices', channel: 'whatsapp',
      body: 'تم استلام دفعة من "{name}" بمبلغ {paid} ج.م على فاتورة رقم {invoice_no}.\nالمتبقي حاليًا: {remaining} ج.م\nشكراً على سرعة السداد 🙏'
    },
    // ── الموظفين والمرتبات ──
    {
      id: 20, name: 'إشعار صرف راتب', category: 'employees', channel: 'whatsapp',
      body: 'إشعار راتب من {company}\nعزيزنا {employee_name}، تم صرف راتب شهر {date} بقيمة {salary} ج.م بتاريخ {payment_date}.\nشكراً لمجهودك معانا 🌹'
    },
    {
      id: 21, name: 'إشعار سلفة', category: 'employees', channel: 'whatsapp',
      body: 'أهلاً {employee_name} 👋\nتم اعتماد طلب السلفة الخاص بيك بمبلغ {advance} ج.م، وهيتم خصمها من راتبك القادم حسب الاتفاق.'
    },
    {
      id: 22, name: 'إشعار خصم', category: 'employees', channel: 'whatsapp',
      body: 'إشعار من {company}\nعزيزنا {employee_name}، تم تطبيق خصم بقيمة {deduction} ج.م على راتب شهر {date}.\nالسبب: {deduction_reason}\nلأي استفسار تواصل مع الإدارة.'
    },
    {
      id: 23, name: 'إشعار موافقة على إجازة', category: 'employees', channel: 'whatsapp',
      body: 'أهلاً {employee_name} 🌹\nتم اعتماد إجازتك من نوع "{leave_type}" لمدة {leave_days} يوم بداية من {date}.\nنتمنالك إجازة سعيدة.'
    },
    {
      id: 24, name: 'تذكير حضور / غياب', category: 'employees', channel: 'whatsapp',
      body: 'تنويه من {company}\nعزيزنا {employee_name}، لاحظنا عدم تسجيل حضورك اليوم {date}.\nياريت توضح السبب أو تتواصل مع المسؤول المباشر.'
    },
    // ── عام / مناسبات ──
    {
      id: 25, name: 'ترحيب بعميل جديد', category: 'general', channel: 'whatsapp',
      body: 'أهلاً بيك يا "{name}" في {company} 🌹\nسعداء بانضمامك، ولو احتجت أي مساعدة أو عندك أي سؤال إحنا موجودين دايمًا.'
    },
    {
      id: 26, name: 'رد تلقائي وقت الغياب', category: 'general', channel: 'whatsapp',
      body: 'أهلاً "{name}" 👋\nشكراً لتواصلك مع {company}، حاليًا خارج مواعيد العمل الرسمية وهنرد عليك في أقرب وقت ممكن.'
    },
    {
      id: 27, name: 'تهنئة بمناسبة', category: 'general', channel: 'whatsapp',
      body: 'كل سنة وانت طيب يا "{name}" بمناسبة {occasion} 🎉\nمن كل فريق {company} أطيب التمنيات لك.'
    }
  ];
}

function getMessageTemplates() {
  ensureSettings();
  let list = DB.settings.messageTemplates;
  if (!list || !list.length) {
    list = DB.settings.messageTemplates = buildDefaultMessageTemplates();
    DB.settings.msgLibraryV2 = true;
    saveDB();
  } else if (!DB.settings.msgLibraryV2) {
    // ترقية لمرة واحدة: نضيف القوالب الجديدة من المكتبة الموسّعة من غير ما نمسح أي قالب المستخدم عدّله بنفسه
    const existingIds = new Set(list.map(t => t.id));
    buildDefaultMessageTemplates().forEach(t => { if (!existingIds.has(t.id)) list.push(t); });
    DB.settings.msgLibraryV2 = true;
    saveDB();
  }
  return list;
}
function getMessageTemplate(id) { return getMessageTemplates().find(t => t.id === id); }

// بيستبدل كل المتغيرات في نص القالب ببيانات العميل الفعلية
function fillMessageTemplate(body, client) {
  if (!client) return body || '';
  const remaining = (client.cost||0) - (client.collected||0);
  const s = DB.settings || {};
  const map = {
    '{name}': client.name || '',
    '{owner}': client.owner || client.name || '',
    '{service}': client.service || '',
    '{cost}': fmt(client.cost||0),
    '{collected}': fmt(client.collected||0),
    '{remaining}': fmt(remaining > 0 ? remaining : 0),
    '{agent}': client.agent || '',
    '{date}': formatDateDisplay(client.date),
    '{phone}': client.phone || '',
    '{company}': s.brandName || ''
  };
  let out = body || '';
  Object.keys(map).forEach(k => { out = out.split(k).join(map[k]); });
  // ملاحظة: القوالب الخاصة بالفواتير/الموظفين فيها متغيرات زي {invoice_no} أو {employee_name}
  // مش موجودة في بيانات العميل، فبتفضل زي ما هي في المعاينة عشان تتعدل يدويًا قبل الإرسال
  return out;
}

function addMessageTemplate() {
  editingMsgTemplateId = null;
  document.getElementById('modal-msg-template-title').textContent = 'قالب رسالة جديد';
  document.getElementById('mt-name').value = '';
  document.getElementById('mt-category').value = MSG_TEMPLATE_CATEGORIES[0].key;
  document.getElementById('mt-channel').value = 'whatsapp';
  document.getElementById('mt-body').value = '';
  openModal('modal-msg-template');
}
function editMessageTemplate(id) {
  const t = getMessageTemplate(id);
  if (!t) return;
  editingMsgTemplateId = id;
  document.getElementById('modal-msg-template-title').textContent = 'تعديل القالب';
  document.getElementById('mt-name').value = t.name;
  document.getElementById('mt-category').value = t.category || 'other';
  document.getElementById('mt-channel').value = t.channel || 'whatsapp';
  document.getElementById('mt-body').value = t.body || '';
  openModal('modal-msg-template');
}
function saveMessageTemplate() {
  const name = document.getElementById('mt-name').value.trim();
  const body = document.getElementById('mt-body').value.trim();
  const category = document.getElementById('mt-category').value;
  const channel = document.getElementById('mt-channel').value;
  const ok = runValidation([
    {id:'mt-name', value:name, test:isRequired, message:'اكتب اسم القالب'},
    {id:'mt-body', value:body, test:isRequired, message:'اكتب نص الرسالة'},
  ]);
  if (!ok) return;
  const templates = getMessageTemplates();
  if (editingMsgTemplateId) {
    const idx = templates.findIndex(t => t.id === editingMsgTemplateId);
    if (idx > -1) templates[idx] = {...templates[idx], name, category, channel, body};
    logActivity('تعديل قالب رسالة', name);
    toast('تم تحديث القالب');
  } else {
    templates.push({id: Date.now(), name, category, channel, body});
    logActivity('إضافة قالب رسالة', name);
    toast('تم حفظ القالب');
  }
  saveDB();
  closeModal('modal-msg-template');
  renderMsgTemplatesPage();
}
async function deleteMessageTemplate(id) {
  const t = getMessageTemplate(id);
  if (!t) return;
  if (!(await confirmDialog(`حذف قالب "${t.name}"؟`))) return;
  DB.settings.messageTemplates = getMessageTemplates().filter(x => x.id !== id);
  logActivity('حذف قالب رسالة', t.name);
  saveDB();
  renderMsgTemplatesPage();
  toast('تم حذف القالب', 'error');
}
function renderMsgTemplatesPage() {
  const wrap = document.getElementById('msg-templates-list');
  if (!wrap) return;
  const templates = getMessageTemplates();
  if (!templates.length) {
    wrap.innerHTML = `<div class="card" style="padding:20px;text-align:center;color:var(--text3);font-size:13px">لسه مفيش قوالب رسائل. اضغط "قالب جديد" لإضافة أول رسالة جاهزة.</div>`;
    return;
  }
  const catName = k => (MSG_TEMPLATE_CATEGORIES.find(c=>c.key===k)||{}).name || 'أخرى';
  wrap.innerHTML = templates.map(t => `
    <div class="card" style="padding:12px 14px;margin-bottom:10px">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div>
          <div style="font-weight:800;font-size:13px;display:flex;align-items:center;gap:8px">
            ${t.name}
            <span class="badge badge-gold">${catName(t.category)}</span>
            <span class="badge badge-cyan">${t.channel === 'whatsapp' ? 'واتساب' : t.channel === 'email' ? 'إيميل' : 'الكل'}</span>
          </div>
          <div style="font-size:11.5px;color:var(--text3);margin-top:6px;white-space:pre-wrap;max-width:600px">${t.body.length > 140 ? t.body.slice(0,140)+'…' : t.body}</div>
        </div>
        <div style="display:flex;gap:8px;flex-shrink:0">
          <button class="btn btn-outline btn-sm" onclick="editMessageTemplate(${t.id})">${IC.edit} تعديل</button>
          <button class="btn btn-outline btn-sm" onclick="deleteMessageTemplate(${t.id})" style="color:var(--red)">${IC.trash} حذف</button>
        </div>
      </div>
    </div>
  `).join('');
}

// نافذة إرسال رسالة لعميل معين — تختار القالب وتشوف المعاينة وتبعت واتساب أو تنسخ النص
let sendMsgClientId = null;
function openSendMessage(clientId) {
  const c = DB.clients.find(x => x.id === clientId);
  if (!c) return;
  sendMsgClientId = clientId;
  const sel = document.getElementById('sm-template');
  const templates = getMessageTemplates();
  if (!templates.length) {
    sel.innerHTML = `<option value="">لا توجد قوالب — أضف واحد من صفحة "رسائل جاهزة"</option>`;
  } else {
    sel.innerHTML = MSG_TEMPLATE_CATEGORIES.map(cat => {
      const items = templates.filter(t => (t.category || 'general') === cat.key);
      if (!items.length) return '';
      return `<optgroup label="${cat.name}">${items.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}</optgroup>`;
    }).join('') + (() => {
      const known = new Set(MSG_TEMPLATE_CATEGORIES.map(c => c.key));
      const rest = templates.filter(t => !known.has(t.category));
      return rest.length ? `<optgroup label="أخرى">${rest.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}</optgroup>` : '';
    })();
  }
  document.getElementById('sm-client-name').textContent = c.name;
  document.getElementById('sm-phone-note').textContent = c.phone ? `سيتم الإرسال على: ${c.phone}` : 'العميل ده مفيهوش رقم تليفون مسجّل — تقدر تنسخ النص بس';
  updateSendMessagePreview();
  openModal('modal-send-message');
}
function updateSendMessagePreview() {
  const c = DB.clients.find(x => x.id === sendMsgClientId);
  const sel = document.getElementById('sm-template');
  const t = getMessageTemplate(parseInt(sel.value));
  const preview = document.getElementById('sm-preview');
  preview.value = t ? fillMessageTemplate(t.body, c) : '';
}
function cleanPhoneForWa(phone) {
  let digits = String(phone||'').replace(/[^\d+]/g, '');
  digits = digits.replace(/^0/, '20'); // مصر — بديل الصفر بكود الدولة لو الرقم محلي
  return digits;
}
function sendViaWhatsapp() {
  const c = DB.clients.find(x => x.id === sendMsgClientId);
  const text = document.getElementById('sm-preview').value;
  if (!c || !c.phone) { toast('العميل ده مفيهوش رقم تليفون مسجّل', 'error'); return; }
  const url = `https://wa.me/${cleanPhoneForWa(c.phone)}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  logActivity('إرسال رسالة واتساب', c.name);
}
async function copyMessageText() {
  const text = document.getElementById('sm-preview').value;
  try {
    await navigator.clipboard.writeText(text);
    toast('تم نسخ النص');
  } catch(e) {
    toast('تعذّر نسخ النص', 'error');
  }
}

// ══════════════════════════════════════════
// PAYMENT METHODS (from Settings)
// ══════════════════════════════════════════
function getPaymentMethods() {
  return ensureSettingsList('paymentMethods', () => ['نقدي', 'تحويل بنكي', 'فودافون كاش', 'إنستاباي', 'شيك']);
}

function renderPaymentMethodTags() {
  const wrap = document.getElementById('payment-methods-list');
  if (!wrap) return;
  const methods = getPaymentMethods();
  wrap.innerHTML = methods.map(m => `
    <span class="status-tag badge-gold">
      ${m}
      <button type="button" class="status-tag-del" onclick="removePaymentMethod(${JSON.stringify(m).replace(/&/g,'&amp;').replace(/"/g,'&quot;')})" title="حذف طريقة الدفع">&#x2715;</button>
    </span>
  `).join('');
}

function addPaymentMethod() {
  const input = document.getElementById('new-payment-method-input');
  const name = input.value.trim();
  if (!name) { input.classList.add('field-invalid'); toast('اكتب اسم طريقة الدفع الأول', 'error'); return; }
  const methods = getPaymentMethods();
  if (methods.includes(name)) { input.classList.add('field-invalid'); toast('طريقة الدفع دي موجودة بالفعل', 'error'); return; }
  input.classList.remove('field-invalid');
  methods.push(name);
  saveDB();
  input.value = '';
  renderPaymentMethodTags();
  populatePaymentMethodSelect('d-payment-method');
  toast('تمت إضافة طريقة الدفع');
}

async function removePaymentMethod(name) {
  const methods = getPaymentMethods();
  if (methods.length <= 1) { toast('لازم تفضل طريقة دفع واحدة على الأقل', 'error'); return; }
  const inUse = (DB.deals||[]).filter(d => d.paymentMethod === name).length;
  const msg = inUse
    ? `طريقة الدفع "${name}" مستخدمة في ${inUse} صفقة. هتفضل موجودة في السجلات القديمة بس مش هتظهر كخيار جديد. تحذف؟`
    : `حذف طريقة الدفع "${name}"؟`;
  if (!(await confirmDialog(msg))) return;
  DB.settings.paymentMethods = methods.filter(m => m !== name);
  saveDB();
  renderPaymentMethodTags();
  populatePaymentMethodSelect('d-payment-method');
  toast('تم حذف طريقة الدفع', 'error');
}

// ══════════════════════════════════════════
// CUSTOM FIELDS (حقول مخصصة على بيانات العميل — بيتضافوا من الإعدادات وبيظهروا تلقائي في فورم العميل)
// ══════════════════════════════════════════
function getCustomFieldDefs() {
  return ensureSettingsList('customFieldDefs', () => []);
}
function slugifyFieldKey(label) {
  const base = 'cf_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2,6);
  return base;
}
function renderCustomFieldDefsList() {
  const wrap = document.getElementById('custom-fields-list');
  if (!wrap) return;
  const defs = getCustomFieldDefs();
  const typeLabels = {text:'نص', number:'رقم', date:'تاريخ'};
  wrap.innerHTML = defs.length ? defs.map(d => `
    <span class="status-tag badge-cyan">
      ${d.label} <span style="opacity:0.6;font-size:10px">(${typeLabels[d.type]||d.type})</span>
      <button type="button" class="status-tag-del" onclick="removeCustomFieldDef('${d.key}')" title="حذف الحقل">&#x2715;</button>
    </span>
  `).join('') : `<div class="empty" style="padding:14px"><div>مفيش حقول مخصصة لسه</div></div>`;
}
function addCustomFieldDef() {
  const labelInput = document.getElementById('new-custom-field-label');
  const typeSelect = document.getElementById('new-custom-field-type');
  const label = labelInput.value.trim();
  const type = typeSelect.value;
  if (!label) { labelInput.classList.add('field-invalid'); toast('اكتب اسم الحقل الأول', 'error'); return; }
  const defs = getCustomFieldDefs();
  if (defs.some(d => d.label === label)) { labelInput.classList.add('field-invalid'); toast('في حقل بنفس الاسم موجود بالفعل', 'error'); return; }
  labelInput.classList.remove('field-invalid');
  defs.push({key: slugifyFieldKey(label), label, type});
  saveDB();
  labelInput.value = '';
  renderCustomFieldDefsList();
  toast('تمت إضافة الحقل المخصص');
}
async function removeCustomFieldDef(key) {
  const defs = getCustomFieldDefs();
  const def = defs.find(d => d.key === key);
  if (!def) return;
  if (!(await confirmDialog(`حذف الحقل المخصص "${def.label}"؟ القيم المحفوظة عليه في العملاء الحاليين هتفضل متخزنة بس مش هتظهر تاني.`))) return;
  DB.settings.customFieldDefs = defs.filter(d => d.key !== key);
  saveDB();
  renderCustomFieldDefsList();
  toast('تم حذف الحقل المخصص', 'error');
}
// بيبني حقول الإدخال الديناميكية جوه فورم إضافة/تعديل العميل حسب الحقول المخصصة المعرّفة في الإعدادات
function renderCustomFieldInputs(existingValues) {
  const wrap = document.getElementById('f-custom-fields');
  if (!wrap) return;
  const defs = getCustomFieldDefs();
  const vals = existingValues || {};
  if (!defs.length) { wrap.innerHTML = ''; return; }
  wrap.innerHTML = defs.map(d => `
    <div class="form-group">
      <label class="form-label">${d.label}</label>
      <input class="form-input" data-cf-key="${d.key}" type="${d.type === 'number' ? 'number' : d.type === 'date' ? 'date' : 'text'}" value="${(vals[d.key]!=null ? vals[d.key] : '')}">
    </div>
  `).join('');
}
function collectCustomFieldValues() {
  const wrap = document.getElementById('f-custom-fields');
  if (!wrap) return {};
  const out = {};
  wrap.querySelectorAll('[data-cf-key]').forEach(el => { out[el.dataset.cfKey] = el.value; });
  return out;
}

// ══════════════════════════════════════════
// CLIENT BUSINESS TEMPLATES (قوالب نوع النشاط — كل نوع نشاط بيقترح خدمة وسعر افتراضي عند إضافة عميل جديد)
// ══════════════════════════════════════════
function getClientBusinessTemplates() {
  return ensureSettingsList('clientBusinessTemplates', () => [
    {type:'مطعم', service:'سيستم + تسعير + مينيو', cost:8000},
    {type:'كافيه', service:'سيستم كافيه', cost:8000},
    {type:'محل / سوبر ماركت', service:'سيستم سوبر ماركت', cost:8000},
    {type:'عيادة / نشاط إداري', service:'نظام إدارة أعمال', cost:18000},
  ]);
}
function populateClientBusinessTypeSelect(selectedType) {
  const sel = document.getElementById('f-business-type');
  if (!sel) return;
  const templates = getClientBusinessTemplates();
  sel.innerHTML = '<option value="">— بدون قالب —</option>' + templates.map(t =>
    `<option value="${t.type}" ${t.type===selectedType?'selected':''}>${t.type}</option>`
  ).join('');
}
// بيتنفذ عند اختيار نوع النشاط في فورم عميل جديد — بيقترح خدمة وتكلفة افتراضية لأول صفقة للعميل
function applyClientBusinessTemplate() {
  if (editingClientId) return; // القوالب بتتطبق بس على العميل الجديد، مش بتغيّر بيانات صفقة موجودة
  const sel = document.getElementById('f-business-type');
  const hint = document.getElementById('f-business-type-hint');
  if (!sel) return;
  const t = getClientBusinessTemplates().find(x => x.type === sel.value);
  if (hint) hint.textContent = t ? `هيتقترح تلقائيًا: ${t.service} — ${fmt(t.cost)} ج.م (تقدر تعدلها من صفقة العميل بعدين)` : '';
}
function populateClientTemplateServiceOptions() {
  const sel = document.getElementById('new-ctpl-service');
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = '<option value="">اختر خدمة</option>' + getServices().map(s => `<option value="${s.name}">${s.name}</option>`).join('');
  if (current) sel.value = current;
}
function renderClientTemplatesList() {
  const wrap = document.getElementById('client-templates-list');
  if (!wrap) return;
  const templates = getClientBusinessTemplates();
  wrap.innerHTML = templates.length ? `<div class="table-wrap"><table><thead><tr><th>نوع النشاط</th><th>الخدمة المقترحة</th><th>السعر المقترح</th><th></th></tr></thead><tbody>` +
    templates.map((t,i) => `<tr>
      <td>${t.type}</td><td>${t.service}</td><td>${fmt(t.cost)} ج.م</td>
      <td><button class="act-btn" title="حذف" onclick="removeClientBusinessTemplate(${i})">${IC.trash}</button></td>
    </tr>`).join('') + `</tbody></table></div>`
    : `<div class="empty" style="padding:14px"><div>مفيش قوالب نوع نشاط لسه</div></div>`;
}
function addClientBusinessTemplate() {
  const typeInput = document.getElementById('new-ctpl-type');
  const serviceSelect = document.getElementById('new-ctpl-service');
  const costInput = document.getElementById('new-ctpl-cost');
  const type = typeInput.value.trim();
  const service = serviceSelect.value;
  const cost = parseFloat(costInput.value) || 0;
  if (!type || !service) { toast('اختار نوع النشاط والخدمة الأول', 'error'); return; }
  const templates = getClientBusinessTemplates();
  if (templates.some(t => t.type === type)) { toast('نوع النشاط ده موجود بالفعل', 'error'); return; }
  templates.push({type, service, cost});
  saveDB();
  typeInput.value = ''; costInput.value = '';
  renderClientTemplatesList();
  toast('تمت إضافة القالب');
}
async function removeClientBusinessTemplate(index) {
  const templates = getClientBusinessTemplates();
  const t = templates[index];
  if (!t) return;
  if (!(await confirmDialog(`حذف قالب "${t.type}"؟`))) return;
  templates.splice(index, 1);
  saveDB();
  renderClientTemplatesList();
  toast('تم حذف القالب', 'error');
}

// ══════════════════════════════════════════
// REFERRAL TRACKING (تتبع إحالة العملاء)
// ══════════════════════════════════════════
function populateReferralOptions(selectedId) {
  const sel = document.getElementById('f-referred-by');
  if (!sel) return;
  const options = DB.clients.filter(c => c.id !== editingClientId);
  sel.innerHTML = '<option value="">— بدون ترشيح —</option>' + options.map(c =>
    `<option value="${c.id}" ${String(c.id)===String(selectedId)?'selected':''}>${c.name}</option>`
  ).join('');
}
function referredClientsOf(clientId) {
  return DB.clients.filter(c => String(c.referredBy) === String(clientId));
}
function toggleReferralReward(clientId, checked) {
  const c = DB.clients.find(x=>x.id===clientId);
  if (!c) return;
  c.referralRewardGiven = checked;
  saveDB();
  toast(checked ? 'تم تسجيل صرف مكافأة الترشيح' : 'تم إلغاء تسجيل المكافأة');
}

// ══════════════════════════════════════════
// SETTINGS TAB — الإشعارات
// ══════════════════════════════════════════
function renderNotificationsSettings() {
  const ns = getNotificationSettings();
  const map = {'notif-toggle-followups':'followups', 'notif-toggle-deal':'dealDeadline', 'notif-toggle-commission':'commissionDue', 'notif-toggle-walletcomm':'walletCommissionDue', 'notif-toggle-staledeal':'staleDeal', 'notif-toggle-renewal':'renewalDue', 'notif-toggle-lowrating':'lowRating'};
  Object.keys(map).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = ns[map[id]] !== false;
  });
  const staleDaysEl = document.getElementById('notif-staledeal-days');
  if (staleDaysEl) staleDaysEl.value = ns.staleDealDays || 5;
  const s = DB.settings || {};
  const daysEl = document.getElementById('notif-walletcomm-days');
  if (daysEl) daysEl.value = ns.commissionWalletDueDays || 7;
  const minEl = document.getElementById('comm-min-withdraw');
  if (minEl) minEl.value = s.commissionMinWithdraw || '';
  const maxEl = document.getElementById('comm-max-withdraw');
  if (maxEl) maxEl.value = s.commissionMaxWithdraw || '';
}
function toggleNotificationSetting(key, checked) {
  const ns = getNotificationSettings();
  ns[key] = checked;
  saveDB();
  toast(checked ? 'تم تفعيل التنبيه' : 'تم إيقاف التنبيه');
}
function updateCommissionWalletDueDays(value) {
  const ns = getNotificationSettings();
  ns.commissionWalletDueDays = parseInt(value) || 7;
  saveDB();
}
function updateStaleDealDays(value) {
  const ns = getNotificationSettings();
  ns.staleDealDays = parseInt(value) || 5;
  saveDB();
}
function updateCommissionLimitSetting(key, value) {
  ensureSettings();
  DB.settings[key] = parseFloat(value) || 0;
  saveDB();
}

// ══════════════════════════════════════════
// SETTINGS TAB — الأدوار (Roles): مجموعات صلاحيات جاهزة تتطبق على الموظف بضغطة واحدة
// ══════════════════════════════════════════
let editingRoleName = null;
function renderRolesSettings() {
  const wrap = document.getElementById('roles-list');
  if (!wrap) return;
  const roles = getRoles();
  wrap.innerHTML = roles.map(r => `
    <div class="card" style="padding:12px 14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <div>
        <div style="font-weight:800;font-size:13px">${r.name}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:2px">${r.allowedPages.length} صفحة مسموحة</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-outline btn-sm" onclick="openEditRole(${JSON.stringify(r.name)})">تعديل</button>
        <button class="btn btn-outline btn-sm" onclick="deleteRole(${JSON.stringify(r.name)})" style="color:var(--red)">حذف</button>
      </div>
    </div>
  `).join('');
}
function openAddRole() {
  editingRoleName = null;
  document.getElementById('role-modal-title').textContent = 'دور جديد';
  document.getElementById('role-name-input').value = '';
  renderRolePagesChecklist([]);
  openModal('modal-role');
}
function openEditRole(name) {
  const role = getRoles().find(r => r.name === name);
  if (!role) return;
  editingRoleName = name;
  document.getElementById('role-modal-title').textContent = 'تعديل دور';
  document.getElementById('role-name-input').value = role.name;
  renderRolePagesChecklist(role.allowedPages);
  openModal('modal-role');
}
function renderRolePagesChecklist(selected) {
  const wrap = document.getElementById('role-pages-list');
  if (!wrap) return;
  const pages = getEmployeePermissionPages();
  wrap.innerHTML = pages.map(p => `
    <label class="inv-toggle-row" style="flex:0 0 auto">
      <input type="checkbox" class="role-page-check" value="${p}" ${selected.includes(p) ? 'checked' : ''}>
      <span>${pageTitles[p]}</span>
    </label>
  `).join('');
}
function saveRole() {
  const name = document.getElementById('role-name-input').value.trim();
  if (!name) { toast('اكتب اسم الدور الأول', 'error'); return; }
  const roles = getRoles();
  const clash = roles.find(r => r.name === name && r.name !== editingRoleName);
  if (clash) { toast('فيه دور بنفس الاسم ده بالفعل', 'error'); return; }
  const allowedPages = Array.from(document.querySelectorAll('#role-pages-list .role-page-check')).filter(b=>b.checked).map(b=>b.value);
  if (!allowedPages.length) { toast('لازم تختار صفحة واحدة على الأقل', 'error'); return; }
  if (editingRoleName) {
    const idx = roles.findIndex(r => r.name === editingRoleName);
    roles[idx] = {name, allowedPages};
    logActivity('تعديل دور', name);
  } else {
    roles.push({name, allowedPages});
    logActivity('إضافة دور', name);
  }
  saveDB();
  closeModal('modal-role');
  renderRolesSettings();
  toast('تم حفظ الدور');
}
async function deleteRole(name) {
  if (!(await confirmDialog(`حذف دور "${name}"؟ الموظفين اللي متعينين عليه مش هيتأثروا، بس هيختفي كخيار جاهز.`))) return;
  DB.settings.roles = getRoles().filter(r => r.name !== name);
  logActivity('حذف دور', name);
  saveDB();
  renderRolesSettings();
  toast('تم حذف الدور', 'error');
}
// بيتنادى من مودال الموظف لما تختار دور جاهز — بيحدد صفحاته تلقائيًا في تشيك بوكس الصلاحيات
function applyRolePreset() {
  const sel = document.getElementById('emp-role-preset');
  if (!sel || !sel.value) return;
  const role = getRoles().find(r => r.name === sel.value);
  if (!role) return;
  renderEmployeePagesList(role.allowedPages);
}
function populateRolePresetSelect() {
  const sel = document.getElementById('emp-role-preset');
  if (!sel) return;
  const roles = getRoles();
  sel.innerHTML = `<option value="">— اختر دور جاهز (اختياري) —</option>` + roles.map(r => `<option value="${r.name}">${r.name}</option>`).join('');
}

// ══════════════════════════════════════════
// SETTINGS TAB — اختصارات لوحة المفاتيح
// ══════════════════════════════════════════
let capturingShortcutFor = null;
function renderShortcutsSettings() {
  const wrap = document.getElementById('shortcuts-list');
  if (!wrap) return;
  const shortcuts = getShortcuts();
  const pages = Object.keys(getDefaultShortcuts());
  wrap.innerHTML = pages.map(p => `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 0;border-bottom:1px solid var(--border2)">
      <span style="font-size:13px">${pageTitles[p]}</span>
      <button type="button" class="btn btn-outline btn-sm" id="shortcut-btn-${p}" onclick="startCaptureShortcut('${p}')" style="min-width:110px;font-family:monospace">Alt + ${(shortcuts[p]||'—').toUpperCase()}</button>
    </div>
  `).join('');
}
function startCaptureShortcut(page) {
  capturingShortcutFor = page;
  const btn = document.getElementById('shortcut-btn-' + page);
  if (btn) btn.textContent = 'اضغط أي مفتاح...';
}
document.addEventListener('keydown', e => {
  if (!capturingShortcutFor) return;
  e.preventDefault();
  if (e.key === 'Escape') { renderShortcutsSettings(); capturingShortcutFor = null; return; }
  const key = e.key.length === 1 ? e.key.toLowerCase() : null;
  if (!key) return;
  const shortcuts = getShortcuts();
  shortcuts[capturingShortcutFor] = key;
  saveDB();
  capturingShortcutFor = null;
  renderShortcutsSettings();
  toast('تم تحديث الاختصار');
});
// تفعيل الاختصارات فعليًا: Alt + المفتاح المحدد بيفتح الصفحة المرتبطة به، إلا لو المستخدم بيكتب في حقل إدخال
document.addEventListener('keydown', e => {
  if (!e.altKey || capturingShortcutFor) return;
  const tag = (document.activeElement && document.activeElement.tagName) || '';
  if (['INPUT','TEXTAREA','SELECT'].includes(tag)) return;
  const shortcuts = getShortcuts();
  const key = e.key.toLowerCase();
  const page = Object.keys(shortcuts).find(p => shortcuts[p] === key);
  if (page && isPageAllowedForUser(page)) { e.preventDefault(); navigate(page); }
});


function populatePaymentMethodSelect(selectId, selectedValue) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  const methods = getPaymentMethods();
  sel.innerHTML = methods.map(m => `<option value="${m}">${m}</option>`).join('');
  if (selectedValue && !methods.includes(selectedValue)) {
    sel.insertAdjacentHTML('beforeend', `<option value="${selectedValue}">${selectedValue}</option>`);
  }
  sel.value = selectedValue || (methods[0]||'');
}

// ══════════════════════════════════════════
// INVOICE SIGNATURES (from Settings)
// ══════════════════════════════════════════
function getInvoiceSignaturesConfig() {
  return ensureSettingsList('signatures', () => []);
}

function renderSignaturesSettings() {
  const wrap = document.getElementById('signatures-list');
  if (!wrap) return;
  const sigs = getInvoiceSignaturesConfig();
  wrap.innerHTML = sigs.length ? sigs.map((sg, i) => `
    <div class="signature-row">
      <label class="inv-toggle-row" style="margin:0" title="يظهر في الفاتورة ولا لا">
        <input type="checkbox" ${sg.enabled === false ? '' : 'checked'} onchange="toggleSignatureEnabled(${i}, this.checked)">
      </label>
      <div style="flex:1">
        <div class="signature-row-role">${sg.role}</div>
        <div class="signature-row-name">${sg.name || '—'}</div>
      </div>
      <button type="button" class="status-tag-del" onclick="removeSignature(${i})" title="حذف التوقيع">&#x2715;</button>
    </div>
  `).join('') : `<div style="font-size:12px;color:var(--text3)">لسه مفيش توقيعات إضافية مُعرّفة — الفاتورة هتعرض توقيع الموظف اللي طلعها تلقائيًا بس</div>`;
}

function addSignature() {
  const roleInput = document.getElementById('new-signature-role');
  const nameInput = document.getElementById('new-signature-name');
  const role = roleInput.value.trim();
  const name = nameInput.value.trim();
  if (!role) { roleInput.classList.add('field-invalid'); toast('اكتب مسمى التوقيع (زي: توقيع المدير)', 'error'); return; }
  if (!name) { nameInput.classList.add('field-invalid'); toast('اكتب الاسم اللي هيظهر في التوقيع', 'error'); return; }
  roleInput.classList.remove('field-invalid'); nameInput.classList.remove('field-invalid');
  const sigs = getInvoiceSignaturesConfig();
  sigs.push({ role, name, enabled: true });
  saveDB();
  roleInput.value = ''; nameInput.value = '';
  renderSignaturesSettings();
  updateInvoicePreview();
  toast('تمت إضافة التوقيع');
}

async function removeSignature(i) {
  if (!(await confirmDialog('حذف هذا التوقيع؟'))) return;
  const sigs = getInvoiceSignaturesConfig();
  sigs.splice(i, 1);
  saveDB();
  renderSignaturesSettings();
  updateInvoicePreview();
  toast('تم حذف التوقيع', 'error');
}

function toggleSignatureEnabled(i, checked) {
  const sigs = getInvoiceSignaturesConfig();
  if (!sigs[i]) return;
  sigs[i].enabled = checked;
  saveDB();
  updateInvoicePreview();
}

// هل توقيع الموظف اللي طلّع الفاتورة تلقائيًا مفعّل ولا لأ (تتحكم فيه من إعدادات "توقيعات الفاتورة")
function isAutoSignatureEnabled() {
  ensureSettings();
  return DB.settings.autoSignatureEnabled !== false;
}

function setAutoSignatureEnabled(checked) {
  ensureSettings();
  DB.settings.autoSignatureEnabled = checked;
  saveDB();
  updateInvoicePreview();
  toast(checked ? 'هيظهر توقيع الموظف تلقائيًا في كل فاتورة' : 'اتقفل توقيع الموظف التلقائي — هيظهر بس التوقيعات الإضافية اللي فعّلتها');
}

// حجم خط التوقيعات في الفاتورة (small/medium/large) — بيتحكم فيه من نفس تاب الإعدادات
function getSignatureSize() {
  ensureSettings();
  return DB.settings.signatureSize || 'medium';
}

function setSignatureSize(size) {
  ensureSettings();
  DB.settings.signatureSize = size;
  saveDB();
  updateInvoicePreview();
}

// بيرجع كل التوقيعات اللي المفروض تظهر فعليًا في الفاتورة: توقيع الموظف اللي طلّعها تلقائيًا (أول واحد)،
// لو مفعّل من الإعدادات، وبعده أي توقيعات إضافية مفعّلة من الإعدادات (زي توقيع المدير) — من غير تكرار لو كانت نفس الاسم والمسمى
function getActiveInvoiceSignatures(cur) {
  const autoOn = isAutoSignatureEnabled();
  const autoSig = getInvoiceSignerLabel(cur);
  const extra = getInvoiceSignaturesConfig()
    .filter(sg => sg.enabled !== false)
    .map(sg => ({ line: sg.role, mark: sg.name }))
    .filter(sg => !(autoOn && sg.line === autoSig.line && sg.mark === autoSig.mark));
  if (!cur) return extra.length ? extra : (autoOn ? [autoSig] : []);
  return autoOn ? [autoSig, ...extra] : extra;
}

function starsHtml(rating, size=13) {
  let h = '';
  for (let i=1; i<=5; i++) {
    h += `<span style="color:${i<=rating?'var(--gold)':'var(--border2)'}; width:${size}px; height:${size}px; display:inline-flex;">${i<=rating?IC.star_fill:IC.star_empty}</span>`;
  }
  return `<div style="display:inline-flex;gap:2px;align-items:center">${h}</div>`;
}

function calcStats() {
  const c = DB.clients;
  const totalCost = c.reduce((a,x)=>a+x.cost,0);
  const collected = c.reduce((a,x)=>a+x.collected,0);
  const remaining = c.filter(x=>x.status!=='ملغي').reduce((a,x)=>a+(x.cost-x.collected),0);
  const pipeline = c.filter(x=>['قيد المتابعة','عرض مقدم'].includes(x.status)).reduce((a,x)=>a+x.cost,0);
  const completed = c.filter(x=>x.status==='نشط / مكتمل').length;
  const following = c.filter(x=>x.status==='قيد المتابعة').length;
  const offered   = c.filter(x=>x.status==='عرض مقدم').length;
  const cancelled = c.filter(x=>x.status==='ملغي').length;
  const totalComm = DB.team.reduce((a,x)=>a+x.commission,0);
  return {totalCost,collected,remaining,pipeline,completed,following,offered,cancelled,totalComm,total:c.length};
}

// ══════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════
// ══════════════════════════════════════════
// DASHBOARD WIDGETS (تخصيص شخصي — كل مستخدم يقدر يخفي/يظهر العناصر اللي عايزها من إعداداته)
// ══════════════════════════════════════════
const DASH_WIDGET_DEFAULTS = {
  'stat-collected': true, 'stat-pipeline': true, 'stat-completed': true, 'stat-cancelled': true,
  pipeline: true, donut: true, annual: true, followups: true,
  'team-top': true, 'services-top': true, 'feedback-summary': true, 'month-status': true, 'recent-clients': true,
  'at-risk': true, 'smart-insights': true, 'yoy-compare': true, 'security-alerts': true, 'gamification': true
};
// كل ويدجت له: عنوان مختصر، وصف، أيقونة، ولون — وبيتجمعوا في مجموعات في شاشة التخصيص
const DASH_WIDGET_META = {
  'stat-collected': { group: 'بطاقات الإحصائيات', title: 'إجمالي المحصل', desc: 'إجمالي المبالغ اللي اتحصّلت من العملاء مقارنة بالإجمالي المطلوب', icon: 'money', color: 'gold' },
  'stat-pipeline':  { group: 'بطاقات الإحصائيات', title: 'Pipeline المتوقع', desc: 'قيمة الصفقات المتوقعة من العملاء قيد المتابعة والعروض المقدمة', icon: 'pipeline', color: 'cyan' },
  'stat-completed': { group: 'بطاقات الإحصائيات', title: 'عقود مكتملة', desc: 'عدد العقود اللي اتقفلت بنجاح من إجمالي عدد العملاء', icon: 'ok_circle', color: 'green' },
  'stat-cancelled': { group: 'بطاقات الإحصائيات', title: 'معدل الإلغاء', desc: 'نسبة العقود الملغية من إجمالي عدد العملاء', icon: 'ban', color: 'red' },
  pipeline:  { group: 'التحليلات والرسوم', title: 'قيد المتابعة — الأولوية', desc: 'قائمة العملاء قيد المتابعة أو اللي اتقدملهم عرض، مرتبة بالأولوية', icon: 'pipeline', color: 'cyan' },
  donut:     { group: 'التحليلات والرسوم', title: 'توزيع الحالات', desc: 'رسم دائري بيوضح توزيع العملاء على حالاتهم المختلفة', icon: 'donut', color: 'purple' },
  annual:    { group: 'التحليلات والرسوم', title: 'التارجت السنوي', desc: 'نسبة تحقيق الهدف السنوي المحدد للفريق مقابل المُحقق فعليًا', icon: 'target', color: 'gold' },
  'month-status': { group: 'التحليلات والرسوم', title: 'حالة الشهر الحالي', desc: 'مقارنة سريعة بين المستهدف والمُحقق فعليًا لشهر الجاري', icon: 'month', color: 'green' },
  'services-top': { group: 'التحليلات والرسوم', title: 'أكثر الخدمات طلبًا', desc: 'ترتيب الخدمات حسب عدد مرات الطلب والإيراد الناتج عن كل خدمة', icon: 'services', color: 'cyan' },
  followups: { group: 'النشاط والمتابعات', title: 'سجل المتابعات', desc: 'آخر المتابعات المضافة على العملاء والصفقات', icon: 'followups', color: 'green' },
  'recent-clients': { group: 'النشاط والمتابعات', title: 'أحدث العملاء', desc: 'آخر العملاء اللي اتضافوا للنظام مع حالتهم وخدمتهم', icon: 'recent', color: 'red' },
  'feedback-summary': { group: 'النشاط والمتابعات', title: 'تقييمات العملاء', desc: 'متوسط التقييم العام وآخر تقييمات العملاء المسجّلة', icon: 'feedback', color: 'gold' },
  'team-top': { group: 'الفريق والعمولات', title: 'أفضل أداء الفريق', desc: 'ترتيب أعضاء الفريق حسب العمولة وعدد العملاء المكتملين', icon: 'team', color: 'purple' },
  'at-risk': { group: 'النشاط والمتابعات', title: 'عملاء في خطر', desc: 'عملاء نشطين مفيش عليهم أي تفاعل (متابعة) من فترة طويلة — تحرك قبل ما تخسرهم', icon: 'atrisk', color: 'red' },
  'smart-insights': { group: 'التحليلات والرسوم', title: 'تحليل أداء ذكي', desc: 'ملاحظات تلقائية عن العملاء المتأخرين، معدل التحويل، أفضل مصدر ترشيح، وأعياد ميلاد العملاء القريبة', icon: 'bulb', color: 'gold' },
  'yoy-compare': { group: 'التحليلات والرسوم', title: 'مقارنة سنة بسنة', desc: 'مقارنة التحصيل الشهري للسنة الحالية بنفس أشهر السنة اللي فاتت', icon: 'chart_yoy', color: 'cyan' },
  'security-alerts': { group: 'النشاط والمتابعات', title: 'نقاط أمان', desc: 'كل التحذيرات المهمة (عملاء في خطر، متابعات متأخرة، عمولات مستحقة) في مكان واحد', icon: 'shield', color: 'red' },
  'gamification': { group: 'الفريق والعمولات', title: 'شارات الفريق', desc: 'شارات تلقائية زي أعلى تحصيل، أكتر عملاء، وأقل نسبة إلغاء لأعضاء الفريق', icon: 'trophy', color: 'gold' },
};
const DASH_WIDGET_ICONS = {
  money: IC.money, pipeline: IC.pipeline, ok_circle: IC.ok_circle, ban: IC.ban,
  donut: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9h-9z" fill="currentColor" stroke="none"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  followups: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  month: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  services: IC.chart,
  recent: IC.id_card,
  feedback: IC.star_fill,
  team: IC.users,
  atrisk: IC.warn,
  bulb: IC.bulb,
  shield: IC.shield,
  trophy: IC.trophy,
  chart_yoy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
};
function dashWidgetsStorageKey() {
  return 'fatinCRM_dashWidgets_' + (getSessionUsername() || 'guest');
}
function getDashboardWidgetsConfig() {
  try {
    const saved = JSON.parse(localStorage.getItem(dashWidgetsStorageKey()) || '{}');
    return {...DASH_WIDGET_DEFAULTS, ...saved};
  } catch (e) { return {...DASH_WIDGET_DEFAULTS}; }
}
function setDashboardWidgetPref(key, value) {
  const cfg = getDashboardWidgetsConfig();
  cfg[key] = value;
  localStorage.setItem(dashWidgetsStorageKey(), JSON.stringify(cfg));
  renderDashboard();
  renderDashboardWidgetsSettings();
}
function setAllDashboardWidgets(value) {
  const cfg = {};
  Object.keys(DASH_WIDGET_DEFAULTS).forEach(k => cfg[k] = value);
  localStorage.setItem(dashWidgetsStorageKey(), JSON.stringify(cfg));
  renderDashboard();
  renderDashboardWidgetsSettings();
}
function resetDashboardWidgets() {
  localStorage.removeItem(dashWidgetsStorageKey());
  renderDashboard();
  renderDashboardWidgetsSettings();
  toast('اترجعت الإعدادات الافتراضية لويدجت لوحة التحكم', 'success');
}
function applyDashboardWidgetsVisibility() {
  const cfg = getDashboardWidgetsConfig();
  document.querySelectorAll('[data-dash-widget]').forEach(el => {
    el.style.display = cfg[el.dataset.dashWidget] === false ? 'none' : '';
  });
}

// ══════════════════════════════════════════
// DASHBOARD LAYOUT (ترتيب البلوكات — كل مستخدم يقدر يسحب البلوكات ويرتبها زي ما يريحه)
// ══════════════════════════════════════════
const DASH_LAYOUT_DEFAULT_ORDER = Object.keys(DASH_WIDGET_META);
// عرض كل بلوك بعدد الأعمدة (من 4 أعمدة أساسية) — عرض ثابت لكل نوع ويدجت، مش قابل للتعديل
const DASH_WIDGET_WIDTHS = {
  'stat-collected': 1, 'stat-pipeline': 1, 'stat-completed': 1, 'stat-cancelled': 1,
  pipeline: 2, donut: 2, annual: 2, followups: 4,
  'month-status': 2, 'services-top': 2, 'recent-clients': 2, 'feedback-summary': 2, 'team-top': 2,
  'at-risk': 2, 'smart-insights': 4, 'yoy-compare': 2, 'security-alerts': 2, 'gamification': 2
};
function dashLayoutStorageKey() {
  return 'fatinCRM_dashLayout_' + (getSessionUsername() || 'guest');
}
function getDashboardLayout() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(dashLayoutStorageKey()) || '{}'); } catch (e) { saved = {}; }
  const savedOrder = Array.isArray(saved.order) ? saved.order.filter(k => DASH_WIDGET_META[k]) : [];
  // أي ويدجت جديد يتضاف بعدين للنظام ومش موجود في الترتيب المحفوظ عند المستخدم، بيتضاف في الآخر تلقائيًا
  const missing = DASH_LAYOUT_DEFAULT_ORDER.filter(k => !savedOrder.includes(k));
  return { order: [...savedOrder, ...missing] };
}
function saveDashboardLayout(layout) {
  localStorage.setItem(dashLayoutStorageKey(), JSON.stringify(layout));
}
function resetDashboardLayout() {
  localStorage.removeItem(dashLayoutStorageKey());
  renderDashboard();
  toast('اترجع ترتيب لوحة التحكم للوضع الافتراضي', 'success');
}
let dashDragState = null;
// بيربط أحداث السحب (pointer events) بمقبض كل بلوك عشان يتقدر يترتب بشكل موثوق (بدل HTML5 drag اللي مش بيثبت دايمًا)
function attachDashBlocksDnD(grid) {
  grid.querySelectorAll('.dash-block').forEach(block => {
    const handle = block.querySelector('.dash-block-drag');
    if (!handle) return;
    handle.onpointerdown = e => startDashBlockDrag(e, grid, block);
  });
}
function startDashBlockDrag(e, grid, block) {
  if (dashDragState || e.button === 2) return;
  e.preventDefault();
  const rect = block.getBoundingClientRect();

  const placeholder = document.createElement('div');
  placeholder.className = 'dash-block-placeholder';
  placeholder.style.gridColumn = block.style.gridColumn;
  placeholder.style.height = rect.height + 'px';
  block.after(placeholder);

  block.classList.add('dash-block-floating');
  block.style.width = rect.width + 'px';
  block.style.height = rect.height + 'px';
  block.style.left = rect.left + 'px';
  block.style.top = rect.top + 'px';
  document.body.appendChild(block);
  document.body.classList.add('dash-block-drag-active');

  dashDragState = {
    grid, block, placeholder,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top
  };
  document.addEventListener('pointermove', onDashBlockDragMove);
  document.addEventListener('pointerup', onDashBlockDragEnd);
}
function onDashBlockDragMove(e) {
  if (!dashDragState) return;
  const { grid, block, placeholder } = dashDragState;
  block.style.left = (e.clientX - dashDragState.offsetX) + 'px';
  block.style.top = (e.clientY - dashDragState.offsetY) + 'px';

  // بنستخدم elementFromPoint عشان نلاقي أي بلوك تاني تحت المؤشر، وبنطفي الـ pointer-events من البلوك العائم عشان ميحجبش الاكتشاف
  block.style.pointerEvents = 'none';
  const overEl = document.elementFromPoint(e.clientX, e.clientY);
  block.style.pointerEvents = '';
  const overBlock = overEl ? overEl.closest('.dash-block') : null;
  if (overBlock && overBlock !== block && overBlock !== placeholder && grid.contains(overBlock)) {
    // تأثير المغناطيس: أي بلوك يتحط المؤشر فوقه، الـ placeholder بيقفز ياخد مكانه على طول
    const children = [...grid.children];
    const placeholderIndex = children.indexOf(placeholder);
    const overIndex = children.indexOf(overBlock);
    if (placeholderIndex < overIndex) overBlock.after(placeholder);
    else overBlock.before(placeholder);
    placeholder.classList.add('dash-block-placeholder-pulse');
    setTimeout(() => placeholder.classList.remove('dash-block-placeholder-pulse'), 150);
  }
}
function onDashBlockDragEnd() {
  if (!dashDragState) return;
  const { grid, block, placeholder } = dashDragState;
  document.removeEventListener('pointermove', onDashBlockDragMove);
  document.removeEventListener('pointerup', onDashBlockDragEnd);
  document.body.classList.remove('dash-block-drag-active');

  placeholder.replaceWith(block);
  block.classList.remove('dash-block-floating');
  block.style.position = '';
  block.style.left = '';
  block.style.top = '';
  block.style.width = '';
  block.style.height = '';
  block.style.pointerEvents = '';

  // بنحفظ الترتيب الجديد زي ما هو ظاهر فعليًا في الـ DOM
  const newOrder = [...grid.querySelectorAll('.dash-block')].map(b => b.dataset.key);
  saveDashboardLayout({ order: newOrder });

  dashDragState = null;
}
const DASH_BLOCK_DRAG_SVG = `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="6" r="1.6"/><circle cx="16" cy="6" r="1.6"/><circle cx="8" cy="12" r="1.6"/><circle cx="16" cy="12" r="1.6"/><circle cx="8" cy="18" r="1.6"/><circle cx="16" cy="18" r="1.6"/></svg>`;
// بيبني المحتوى الداخلي لكل بلوك حسب نوعه (بطاقة إحصائية، أو قسم بعنوان وكارد)
function dashBlockInnerHTML(key) {
  if (key.startsWith('stat-')) return `<div class="stat-card ${DASH_WIDGET_META[key].color}" id="${key}-card"></div>`;
  const titles = {
    pipeline: 'قيد المتابعة — الأولوية', donut: 'توزيع الحالات', annual: 'أهداف',
    followups: 'المتابعات المضافة', 'team-top': 'أفضل أداء الفريق', 'services-top': 'أكثر الخدمات طلبًا',
    'feedback-summary': 'تقييمات العملاء', 'month-status': 'حالة الشهر الحالي', 'recent-clients': 'أحدث العملاء',
    'at-risk': 'عملاء في خطر', 'smart-insights': `${IC.bulb} تحليل أداء ذكي`, 'yoy-compare': 'مقارنة سنة بسنة',
    'security-alerts': `${IC.shield} نقاط أمان`, 'gamification': `${IC.trophy} شارات الفريق`
  };
  const contentIds = {
    pipeline: 'pipeline-list', donut: 'donut-wrap', annual: 'annual-progress', followups: 'followups-list',
    'team-top': 'team-top-list', 'services-top': 'services-top-list', 'feedback-summary': 'feedback-summary-wrap',
    'month-status': 'month-status-wrap', 'recent-clients': 'recent-clients-list', 'at-risk': 'at-risk-list',
    'smart-insights': 'smart-insights-list', 'yoy-compare': 'yoy-compare-wrap',
    'security-alerts': 'security-alerts-list', 'gamification': 'gamification-list'
  };
  const titleHtml = key === 'annual' ? `<div class="sec-title" id="dash-targets-title">${titles[key]}</div>` : `<div class="sec-title">${titles[key]}</div>`;
  if (key === 'donut') {
    return `<div class="sec-header">${titleHtml}</div><div class="card"><div class="donut-wrap" id="donut-wrap"></div></div>`;
  }
  const cardStyle = key === 'annual' ? ' style="padding:14px 18px"' : '';
  return `<div class="sec-header">${titleHtml}</div><div class="card"${cardStyle} id="${contentIds[key]}"></div>`;
}
// بيبني شبكة بلوكات لوحة التحكم القابلة للسحب والترتيب — كل البلوكات بتاخد كامل ارتفاع صفها (مفيش فراغات ماينفعش تسحب فيها)
function renderDashboardBlocksGrid() {
  const grid = document.getElementById('dash-blocks-grid');
  if (!grid) return;
  const cfg = getDashboardWidgetsConfig();
  const layout = getDashboardLayout();
  const visibleOrder = layout.order.filter(k => DASH_WIDGET_META[k] && cfg[k] !== false);
  grid.innerHTML = visibleOrder.map(k => {
    const span = DASH_WIDGET_WIDTHS[k] || 1;
    return `<div class="dash-block" data-key="${k}" style="grid-column: span ${span}">
      <div class="dash-block-bar no-print">
        <span class="dash-block-drag" title="اسحب لتغيير مكان البلوك">${DASH_BLOCK_DRAG_SVG}</span>
      </div>
      <div class="dash-block-content">${dashBlockInnerHTML(k)}</div>
    </div>`;
  }).join('') || `<div class="empty"><div class="empty-icon">${IC.eye}</div>مفيش أي ويدجت مفعّل حاليًا — فعّل من إعدادات لوحة التحكم</div>`;
  attachDashBlocksDnD(grid);
}
// بيبني شاشة تخصيص ويدجت لوحة التحكم: تولبار فيه عداد + إجراءات سريعة، وكروت مقسّمة بمجموعات

function renderDashboardWidgetsSettings() {
  const wrap = document.getElementById('dash-widgets-list');
  if (!wrap) return;
  const cfg = getDashboardWidgetsConfig();
  const keys = Object.keys(DASH_WIDGET_META);
  const onCount = keys.filter(k => cfg[k] !== false).length;

  const groups = {};
  keys.forEach(k => {
    const g = DASH_WIDGET_META[k].group;
    (groups[g] = groups[g] || []).push(k);
  });

  const toolbar = `
    <div class="dash-widgets-toolbar">
      <div class="dash-widgets-count">
        <span>مفعّل حاليًا:</span><b>${onCount}</b><span>من ${keys.length}</span>
      </div>
      <div class="dash-widgets-actions">
        <button type="button" onclick="setAllDashboardWidgets(true)">إظهار الكل</button>
        <button type="button" onclick="setAllDashboardWidgets(false)">إخفاء الكل</button>
        <button type="button" onclick="resetDashboardWidgets()">الافتراضي</button>
        <button type="button" onclick="resetDashboardLayout()">ترتيب افتراضي</button>
      </div>
    </div>`;

  const groupsHtml = Object.keys(groups).map(g => `
    <div class="dash-widget-group">
      <div class="dash-widget-group-title">${g}</div>
      <div class="dash-widgets-grid">
        ${groups[g].map(k => {
          const m = DASH_WIDGET_META[k];
          const isOn = cfg[k] !== false;
          return `
          <div class="dash-widget-card ${isOn ? 'is-on' : ''}">
            <div class="dash-widget-icon c-${m.color}">${DASH_WIDGET_ICONS[m.icon] || ''}</div>
            <div class="dash-widget-body">
              <div class="dash-widget-title">${m.title}</div>
              <div class="dash-widget-desc">${m.desc}</div>
            </div>
            <label class="widget-switch" title="${isOn ? 'إخفاء' : 'إظهار'}">
              <input type="checkbox" ${isOn ? 'checked' : ''} onchange="setDashboardWidgetPref('${k}', this.checked)">
              <span class="widget-switch-track"></span>
            </label>
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');

  wrap.innerHTML = toolbar + groupsHtml;
}

function renderDashboard() {
  renderDashboardBlocksGrid();
  const s = calcStats();
  const dashYear = new Date().getFullYear();
  const dashYearTargets = getYearTargets(dashYear);
  const annualTarget = dashYearTargets.reduce((a,x)=>a+x.target,0);
  const annualActual = dashYearTargets.reduce((a,x)=>a+x.actual,0);

  // Avg feedback rating
  const avgRating = DB.feedbacks.length
    ? (DB.feedbacks.reduce((a,f)=>a+f.rating,0)/DB.feedbacks.length).toFixed(1)
    : '—';

  // كل بلوك بيتملى بس لو موجود فعليًا في الشبكة (يعني مفعّل من إعدادات المستخدم)
  const setHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  setHTML('stat-collected-card', `
    <div class="stat-icon" style="color:var(--gold)">${IC.money}</div>
    <div class="stat-label">إجمالي المحصل</div>
    <div class="stat-value">${fmt(s.collected)}</div>
    <div class="stat-sub">من ${fmt(s.totalCost)} ج.م إجمالي</div>
  `);
  setHTML('stat-pipeline-card', `
    <div class="stat-icon" style="color:var(--cyan)">${IC.pipeline}</div>
    <div class="stat-label">Pipeline المتوقع</div>
    <div class="stat-value">${fmt(s.pipeline)}</div>
    <div class="stat-sub">${s.following} متابعة • ${s.offered} عرض مقدم</div>
  `);
  setHTML('stat-completed-card', `
    <div class="stat-icon" style="color:var(--green)">${IC.ok_circle}</div>
    <div class="stat-label">عقود مكتملة</div>
    <div class="stat-value">${s.completed}</div>
    <div class="stat-sub">من ${s.total} عميل إجمالي</div>
  `);
  setHTML('stat-cancelled-card', `
    <div class="stat-icon" style="color:var(--red)">${IC.ban}</div>
    <div class="stat-label">معدل الإلغاء</div>
    <div class="stat-value">${pct(s.cancelled,s.total)}%</div>
    <div class="stat-sub">${s.cancelled} عقد ملغي</div>
  `);

  const pipeClients = DB.clients.filter(c=>['قيد المتابعة','عرض مقدم'].includes(c.status));
  setHTML('pipeline-list', pipeClients.length ?
    `<div class="card-header">العملاء قيد المتابعة والعروض (${pipeClients.length})</div>` +
    pipeClients.map((c,i)=>{
      const clientFb = DB.feedbacks.filter(f=>f.clientId===c.id);
      const avgR = clientFb.length ? (clientFb.reduce((a,f)=>a+f.rating,0)/clientFb.length).toFixed(1) : null;
      return `<div class="pipeline-item">
        <div class="pl-num">${i+1}</div>
        <div class="pl-info">
          <div class="pl-name">${c.name} ${avgR?starsHtml(Math.round(avgR),11):''}</div>
          <div class="pl-service">${serviceBadgeEl(c.service)} • ${c.agent} • ${statusBadge(c.status)}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:3px">${c.notes||''}</div>
        </div>
        <div class="pl-amount">${fmt(c.cost)} ج.م</div>
      </div>`;
    }).join('') : `<div class="empty"><div class="empty-icon">${IC.ok_circle}</div>لا يوجد عملاء قيد المتابعة</div>`);

  // ─── عملاء في خطر: نشطين (قيد المتابعة/عرض مقدم) ومفيش تفاعل عليهم من فترة ───
  const AT_RISK_DAYS = 7;
  const riskList = DB.clients
    .filter(c => ['قيد المتابعة','عرض مقدم'].includes(c.status))
    .map(c => ({ c, days: daysSince(clientLastActivity(c)) }))
    .filter(x => x.days === null || x.days >= AT_RISK_DAYS)
    .sort((a,b) => (b.days ?? 999) - (a.days ?? 999));
  setHTML('at-risk-list', riskList.length ?
    `<div class="card-header" style="display:flex;align-items:center;gap:6px"><span style="width:15px;height:15px;flex-shrink:0;display:inline-flex">${IC.warn}</span> عملاء محتاجين تحرّك — ${AT_RISK_DAYS}+ يوم من غير تفاعل (${riskList.length})</div>` +
    riskList.map(({c, days}) => `
      <div class="pipeline-item">
        <div class="pl-info">
          <div class="pl-name">${c.name}</div>
          <div class="pl-service">${serviceBadgeEl(c.service)} • ${c.agent} • ${statusBadge(c.status)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="badge badge-red">${days === null ? 'من غير نشاط' : `من ${days} يوم`}</span>
          <button class="act-btn" title="متابعة سريعة" onclick="addFollowupFor(${JSON.stringify(c.id)})">${IC.followup}</button>
        </div>
      </div>`).join('')
    : `<div class="empty"><div class="empty-icon">${IC.ok_circle}</div>مفيش عملاء في خطر — كله متابَع تمام</div>`);

  const total = s.total || 1;
  const donutData = [
    {label:'مكتمل',count:s.completed,color:'#00e676',r:s.completed/total},
    {label:'متابعة',count:s.following,color:'#f0a500',r:s.following/total},
    {label:'عرض',count:s.offered,color:'#00d4ff',r:s.offered/total},
    {label:'ملغي',count:s.cancelled,color:'#ff4d6d',r:s.cancelled/total},
  ];
  let offset=0, r=32, circ=2*Math.PI*r;
  const arcs = donutData.map(d=>{
    const len = d.r*circ;
    const arc = `<circle cx="40" cy="40" r="${r}" fill="none" stroke="${d.color}" stroke-width="10" stroke-dasharray="${len} ${circ-len}" stroke-dashoffset="${-offset}" opacity="0.9"/>`;
    offset += len;
    return arc;
  }).join('');

  setHTML('donut-wrap', `
    <div class="donut">
      <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="32" fill="none" stroke="#1e2540" stroke-width="10"/>${arcs}</svg>
      <div class="donut-center">${s.total}</div>
    </div>
    <div>
      ${donutData.map(d=>`
        <div class="legend-item">
          <span class="legend-dot" style="background:${d.color}"></span>
          <span>${d.label}</span>
          <span style="margin-right:auto;font-weight:700;color:var(--text)">${d.count}</span>
        </div>
      `).join('')}
      ${DB.feedbacks.length ? `<div class="legend-item" style="margin-top:8px;border-top:1px solid var(--border);padding-top:8px">
        <span style="color:var(--gold)">${starsHtml(Math.round(parseFloat(avgRating)||0), 11)}</span>
        <span style="font-weight:700;color:var(--gold);margin-right:4px">${avgRating}</span>
      </div>` : ''}
    </div>
  `);

  const dashTitleEl = document.getElementById('dash-targets-title');
  if (dashTitleEl) dashTitleEl.textContent = `أهداف ${dashYear}`;
  const annPct = pct(annualActual, annualTarget);
  setHTML('annual-progress', `
    <div class="progress-wrap">
      <div class="progress-header">
        <span style="font-weight:700">التارجت السنوي ${dashYear}</span>
        <span style="color:var(--gold);font-weight:800">${annPct}%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill progress-gold" style="width:${Math.min(annPct,100)}%"></div></div>
      <div class="progress-header" style="margin-top:6px">
        <span style="font-size:11px;color:var(--text3)">محصل: ${fmt(annualActual)} ج.م</span>
        <span style="font-size:11px;color:var(--text3)">هدف: ${fmt(annualTarget)} ج.م</span>
      </div>
    </div>
  `);

  const fu = DB.followups.slice(-8).reverse();
  setHTML('followups-list', `<div class="card-header">سجل المتابعات (${DB.followups.length})</div>` +
    (fu.length ? fu.map(f=>{
      const c = DB.clients.find(x=>x.id===f.clientId);
      return `<div class="followup-item">
        <div class="fu-dot" style="background:var(--gold)"></div>
        <div class="fu-text">
          <div class="fu-name">${c?c.name:'—'} • <span style="color:var(--cyan)">${f.type}</span></div>
          <div class="fu-note">${f.note||''}</div>
          ${f.next?`<div class="fu-next-line" style="font-size:11px;color:var(--orange);margin-top:2px;display:flex;align-items:center;gap:4px">${IC.arrow} ${f.next}</div>`:''}
        </div>
        <div class="fu-date">${f.date}</div>
      </div>`;
    }).join('') : `<div class="empty"><div class="empty-icon">${IC.followup}</div>لا توجد متابعات بعد</div>`));

  // ── ويدجت: أفضل أداء الفريق ──
  const teamSorted = [...DB.team].sort((a,b)=>b.commission-a.commission);
  setHTML('team-top-list', `<div class="card-header">ترتيب الفريق حسب العمولة</div>` + (teamSorted.length ?
    teamSorted.slice(0,6).map((m,i)=>`
      <div class="pipeline-item">
        <div class="pl-num">${i+1}</div>
        <div class="pl-info">
          <div class="pl-name">${m.name} <span style="color:var(--text3);font-weight:400">• ${m.role}</span></div>
          <div class="pl-service">مكتمل: ${m.completed} • ملغي: ${m.cancelled} • عملاء: ${m.clients}</div>
        </div>
        <div class="pl-amount">${fmt(m.commission)} ج.م</div>
      </div>`).join('') : `<div class="empty"><div class="empty-icon">${IC.users}</div>لا يوجد أعضاء فريق بعد</div>`));

  // ── ويدجت: أكثر الخدمات طلبًا ──
  const svcMap = {};
  DB.clients.forEach(c => {
    if (!svcMap[c.service]) svcMap[c.service] = { count: 0, revenue: 0 };
    svcMap[c.service].count++;
    svcMap[c.service].revenue += c.cost;
  });
  const svcSorted = Object.entries(svcMap).sort((a,b)=>b[1].revenue-a[1].revenue).slice(0,6);
  const maxRevenue = svcSorted.length ? svcSorted[0][1].revenue || 1 : 1;
  setHTML('services-top-list', `<div class="card-header">أعلى الخدمات إيرادًا</div>` + (svcSorted.length ?
    svcSorted.map(([name,d])=>`
      <div style="padding:10px 18px;border-bottom:1px solid var(--border)">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px">
          <span style="font-weight:700">${name}</span>
          <span style="color:var(--text3)">${d.count} عميل</span>
        </div>
        <div class="progress-bar"><div class="progress-fill progress-cyan" style="width:${Math.round(d.revenue/maxRevenue*100)}%"></div></div>
        <div style="font-size:11px;color:var(--text3);margin-top:4px">${fmt(d.revenue)} ج.م</div>
      </div>`).join('') : `<div class="empty"><div class="empty-icon">${IC.chart}</div>لا توجد بيانات خدمات بعد</div>`));

  // ── ويدجت: تقييمات العملاء ──
  const fbAll = DB.feedbacks;
  const fbAvg = fbAll.length ? (fbAll.reduce((a,f)=>a+f.rating,0)/fbAll.length).toFixed(1) : '—';
  const fbRecent = fbAll.slice(-4).reverse();
  setHTML('feedback-summary-wrap', `
    <div class="card-header">متوسط التقييم العام</div>
    <div style="padding:14px 18px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--border)">
      ${starsHtml(Math.round(parseFloat(fbAvg)||0), 15)}
      <span style="font-weight:800;color:var(--gold);font-size:16px">${fbAvg}</span>
      <span style="font-size:11px;color:var(--text3);margin-right:auto">${fbAll.length} تقييم</span>
    </div>
    ${fbRecent.length ? fbRecent.map(f=>{
      const c = DB.clients.find(x=>x.id===f.clientId);
      return `<div class="feedback-item" style="padding:10px 18px;border-bottom:1px solid var(--border)">
        <div class="feedback-meta"><span>${c?c.name:'—'}</span>${starsHtml(f.rating,11)}</div>
        ${f.comment?`<div class="feedback-text" style="margin-top:4px">${f.comment}</div>`:''}
      </div>`;
    }).join('') : `<div class="empty"><div class="empty-icon">${IC.star_fill}</div>لا توجد تقييمات بعد</div>`}
  `);

  // ── ويدجت: حالة الشهر الحالي ──
  const now = new Date();
  const curMonthName = MONTHS_AR[now.getMonth()];
  const yrTargets = getYearTargets(now.getFullYear());
  const mt = yrTargets.find(t=>t.month===curMonthName) || {target:0,actual:0,clientsTarget:0,clientsActual:0,status:'لا بيانات'};
  const mPct = pct(mt.actual, mt.target);
  setHTML('month-status-wrap', `
    <div class="progress-wrap">
      <div class="progress-header">
        <span style="font-weight:700">${curMonthName} ${now.getFullYear()}</span>
        <span style="color:var(--green);font-weight:800">${mPct}%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill progress-green" style="width:${Math.min(mPct,100)}%"></div></div>
      <div class="progress-header" style="margin-top:6px">
        <span style="font-size:11px;color:var(--text3)">محصل: ${fmt(mt.actual)} ج.م</span>
        <span style="font-size:11px;color:var(--text3)">هدف: ${fmt(mt.target)} ج.م</span>
      </div>
      <div style="font-size:11px;color:var(--text3);margin-top:6px">عملاء: ${mt.clientsActual} / ${mt.clientsTarget} • ${mt.status}</div>
    </div>
  `);

  // ── ويدجت: أحدث العملاء ──
  const recentClients = DB.clients.slice(-6).reverse();
  setHTML('recent-clients-list', `<div class="card-header">أحدث العملاء المضافين</div>` + (recentClients.length ?
    recentClients.map((c,i)=>`
      <div class="pipeline-item">
        <div class="pl-num">${i+1}</div>
        <div class="pl-info">
          <div class="pl-name">${c.name}</div>
          <div class="pl-service">${serviceBadgeEl(c.service)} • ${statusBadge(c.status)}</div>
        </div>
        <div class="pl-amount">${fmt(c.cost)} ج.م</div>
      </div>`).join('') : `<div class="empty"><div class="empty-icon">${IC.id_card}</div>لا يوجد عملاء بعد</div>`));

  // ── ويدجت: تحليل أداء ذكي (Smart Insights) ──
  setHTML('smart-insights-list', buildSmartInsightsHtml({s, riskList, yrTargets, curMonthName}));

  // ── ويدجت: مقارنة سنة بسنة (Year-over-Year) ──
  setHTML('yoy-compare-wrap', buildYoyCompareHtml(dashYear));

  // ── ويدجت: نقاط أمان (Security Alerts) ──
  setHTML('security-alerts-list', buildSecurityAlertsHtml({s, riskList}));

  // ── ويدجت: شارات الفريق (Gamification) ──
  setHTML('gamification-list', buildGamificationHtml());

  refreshBadges();
}

// ── بناء تحليل الأداء الذكي: ملاحظات تلقائية محسوبة من البيانات الموجودة فعليًا ──
function buildSmartInsightsHtml({s, riskList, yrTargets, curMonthName}) {
  const cards = [];

  // 1) عملاء محتاجين تحرك، مجمّعين حسب المندوب
  if (riskList.length) {
    const byAgent = {};
    riskList.forEach(({c}) => { byAgent[c.agent] = (byAgent[c.agent]||0) + 1; });
    const topAgentEntry = Object.entries(byAgent).sort((a,b)=>b[1]-a[1])[0];
    cards.push({
      color: 'red', icon: IC.warn, label: 'متابعات متأخرة',
      value: `${topAgentEntry[0]} عنده ${topAgentEntry[1]} عميل متابعتهم متأخرة`,
      desc: `إجمالي ${riskList.length} عميل محتاجين تحرك دلوقتي في كل الفريق`
    });
  }

  // 2) معدل التحويل: مقارنة عدد العملاء اللي اتقفلوا (نشط/مكتمل) الشهر ده مقابل الشهر اللي فات
  const curIdx = yrTargets.findIndex(t => t.month === curMonthName);
  if (curIdx > 0) {
    const curM = yrTargets[curIdx], prevM = yrTargets[curIdx-1];
    const curConv = curM.clientsTarget ? pct(curM.clientsActual, curM.clientsTarget) : null;
    const prevConv = prevM.clientsTarget ? pct(prevM.clientsActual, prevM.clientsTarget) : null;
    if (curConv !== null && prevConv !== null) {
      const diff = curConv - prevConv;
      cards.push({
        color: diff >= 0 ? 'green' : 'red', icon: diff >= 0 ? IC.trend_up : IC.warn,
        label: 'معدل تحقيق الهدف',
        value: `${curConv}% الشهر ده مقابل ${prevConv}% اللي فات`,
        desc: diff >= 0 ? `تحسّن بمقدار ${Math.abs(diff)}% عن الشهر اللي فات` : `نزل ${Math.abs(diff)}% عن الشهر اللي فات — يستاهل مراجعة`
      });
    }
  }

  // 3) أفضل مصدر ترشيح (Referral Tracking)
  const referralCounts = {};
  DB.clients.forEach(c => { if (c.referredBy) referralCounts[c.referredBy] = (referralCounts[c.referredBy]||0) + 1; });
  const topReferral = Object.entries(referralCounts).sort((a,b)=>b[1]-a[1])[0];
  if (topReferral) {
    const referrerClient = DB.clients.find(x => String(x.id) === String(topReferral[0]));
    cards.push({
      color: 'gold', icon: IC.link, label: 'أفضل مصدر ترشيح',
      value: `${referrerClient ? referrerClient.name : '—'} جابلك ${topReferral[1]} ${topReferral[1]===1?'عميل':'عملاء'}`,
      desc: 'يستاهل مكافأة أو شكر على الترشيح'
    });
  }

  // 4) أعياد ميلاد قريبة (خلال 7 أيام)
  const upcomingBirthdays = DB.clients.filter(c => c.birthday && daysUntilAnnualDate(c.birthday) !== null && daysUntilAnnualDate(c.birthday) <= 7);
  if (upcomingBirthdays.length) {
    const names = upcomingBirthdays.slice(0,3).map(c => c.name).join('، ');
    cards.push({
      color: 'cyan', icon: IC.gift, label: 'أعياد ميلاد قريبة',
      value: `${upcomingBirthdays.length} عميل عيد ميلادهم خلال أسبوع`,
      desc: `${names}${upcomingBirthds_extra(upcomingBirthdays)}`
    });
  }

  // 5) خدمة محتاجة مراجعة سعر (هامش ربح منخفض) لو فيه بيانات تكفي
  const svcMargin = {};
  (DB.services||[]).forEach(sv => {
    const clientsCount = DB.clients.filter(c => c.service === sv.name).length;
    if (clientsCount >= 2 && sv.price > 0) {
      svcMargin[sv.name] = { margin: ((sv.price - sv.cost) / sv.price) * 100, clientsCount };
    }
  });
  const lowMarginEntry = Object.entries(svcMargin).sort((a,b)=>a[1].margin-b[1].margin)[0];
  if (lowMarginEntry && lowMarginEntry[1].margin < 25) {
    cards.push({
      color: 'red', icon: IC.money, label: 'هامش ربح منخفض',
      value: `${lowMarginEntry[0]} — هامش ${Math.round(lowMarginEntry[1].margin)}% بس`,
      desc: `مطلوبة من ${lowMarginEntry[1].clientsCount} عميل — يستاهل مراجعة السعر أو التكلفة`
    });
  }

  if (!cards.length) {
    return `<div class="empty"><div class="empty-icon">${IC.bulb}</div>مفيش ملاحظات جديدة دلوقتي — كله شكله تمام</div>`;
  }

  return `<div class="insight-grid">${cards.map(cd => `
    <div class="insight-card insight-${cd.color}">
      <div class="insight-icon">${cd.icon}</div>
      <div class="insight-body">
        <div class="insight-label">${cd.label}</div>
        <div class="insight-value">${cd.value}</div>
        <div class="insight-desc">${cd.desc}</div>
      </div>
    </div>`).join('')}</div>`;
}
function upcomingBirthds_extra(list) { return list.length > 3 ? ` و${list.length-3} غيرهم` : ''; }

// بيحسب عدد الأيام المتبقية لأقرب تكرار سنوي لتاريخ معين (يوم/شهر بس، من غير سنة) — بيرجع null لو التاريخ فاضي
function daysUntilAnnualDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  let next = new Date(today.getFullYear(), d.getMonth(), d.getDate());
  if (next < today) next = new Date(today.getFullYear()+1, d.getMonth(), d.getDate());
  return Math.round((next - today) / 86400000);
}

// ── بناء ويدجت مقارنة سنة بسنة (Year-over-Year) ──
function buildYoyCompareHtml(dashYear) {
  const curYear = getYearTargets(dashYear);
  const prevYear = getYearTargets(dashYear - 1);
  const hasPrevData = prevYear.some(t => t.actual > 0);
  if (!hasPrevData) {
    return `<div class="empty"><div class="empty-icon">${IC.chart}</div>مفيش بيانات كفاية لسنة ${dashYear-1} للمقارنة</div>`;
  }
  const curTotal = curYear.reduce((a,x)=>a+x.actual,0);
  const prevTotal = prevYear.reduce((a,x)=>a+x.actual,0);
  const diffPct = prevTotal > 0 ? Math.round(((curTotal - prevTotal) / prevTotal) * 100) : 0;
  const maxVal = Math.max(...curYear.map(t=>t.actual), ...prevYear.map(t=>t.actual), 1);
  return `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 18px;border-bottom:1px solid var(--border)">
      <div>
        <div style="font-size:11px;color:var(--text3)">${dashYear} مقابل ${dashYear-1}</div>
        <div style="font-size:15px;font-weight:800;margin-top:2px">${fmt(curTotal)} ج.م <span style="font-size:11px;color:var(--text3);font-weight:400">مقابل ${fmt(prevTotal)} ج.م</span></div>
      </div>
      <span class="badge badge-${diffPct>=0?'green':'red'}">${diffPct>=0?'+':''}${diffPct}%</span>
    </div>
    <div style="padding:10px 18px">
      ${curYear.map((t,i) => {
        const p = prevYear[i];
        return `<div style="margin-bottom:8px">
          <div style="font-size:11px;color:var(--text3);margin-bottom:3px">${t.month}</div>
          <div class="progress-bar" style="margin-bottom:3px"><div class="progress-fill progress-gold" style="width:${Math.round((t.actual/maxVal)*100)}%"></div></div>
          <div class="progress-bar" style="height:5px;opacity:0.55"><div class="progress-fill progress-cyan" style="width:${Math.round((p.actual/maxVal)*100)}%;height:5px"></div></div>
        </div>`;
      }).join('')}
      <div style="font-size:10.5px;color:var(--text3);display:flex;gap:14px;margin-top:4px">
        <span><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:var(--gold);margin-left:4px"></span>${dashYear}</span>
        <span><span style="display:inline-block;width:8px;height:8px;border-radius:2px;background:var(--cyan);margin-left:4px;opacity:0.55"></span>${dashYear-1}</span>
      </div>
    </div>`;
}

// ── بناء ويدجت نقاط أمان: تجميع كل التحذيرات المهمة في مكان واحد ──
function buildSecurityAlertsHtml({s, riskList}) {
  const fu = getFollowupStats();
  const alerts = [];
  if (riskList.length) alerts.push({color:'red', icon:IC.warn, text:`${riskList.length} عميل في خطر (من غير تفاعل من فترة)`});
  if (fu.overdue) alerts.push({color:'red', icon:IC.followup, text:`${fu.overdue} متابعة متأخرة عن موعدها`});
  if (fu.today) alerts.push({color:'gold', icon:IC.clock, text:`${fu.today} متابعة مطلوبة النهاردة`});
  const cancelRate = s.total ? Math.round((s.cancelled/s.total)*100) : 0;
  if (cancelRate >= 20) alerts.push({color:'red', icon:IC.ban, text:`معدل الإلغاء وصل ${cancelRate}% — نسبة مرتفعة`});
  if (s.totalComm > 0) alerts.push({color:'gold', icon:IC.money, text:`${fmt(s.totalComm)} ج.م عمولات مستحقة للفريق`});

  if (!alerts.length) {
    return `<div class="empty"><div class="empty-icon">${IC.shield}</div>مفيش أي تحذيرات دلوقتي — كله مطمّن</div>`;
  }
  return alerts.map(a => `
    <div style="display:flex;align-items:center;gap:10px;padding:10px 18px;border-bottom:1px solid var(--border)">
      <span style="width:18px;height:18px;flex-shrink:0;color:var(--${a.color==='red'?'red':'gold'})">${a.icon}</span>
      <span style="font-size:12.5px">${a.text}</span>
    </div>`).join('');
}

// ── بناء ويدجت شارات الفريق (Gamification) ──
function buildGamificationHtml() {
  const team = DB.team || [];
  if (!team.length) return `<div class="empty"><div class="empty-icon">${IC.trophy}</div>مفيش أعضاء فريق بعد</div>`;
  const badges = [];
  const topCommission = [...team].sort((a,b)=>b.commission-a.commission)[0];
  if (topCommission && topCommission.commission > 0) badges.push({icon:IC.trophy, label:'أعلى تحصيل عمولة', name:topCommission.name, value:`${fmt(topCommission.commission)} ج.م`});
  const topClients = [...team].sort((a,b)=>b.clients-a.clients)[0];
  if (topClients && topClients.clients > 0) badges.push({icon:IC.users, label:'أكتر عملاء', name:topClients.name, value:`${topClients.clients} عميل`});
  const withRate = team.filter(m => m.clients > 0).map(m => ({...m, rate: m.completed/m.clients}));
  const bestCloseRate = [...withRate].sort((a,b)=>b.rate-a.rate)[0];
  if (bestCloseRate) badges.push({icon:IC.target, label:'أعلى نسبة إغلاق', name:bestCloseRate.name, value:`${Math.round(bestCloseRate.rate*100)}%`});
  const lowestCancel = [...withRate].sort((a,b)=>(a.cancelled/a.clients)-(b.cancelled/b.clients))[0];
  if (lowestCancel) badges.push({icon:IC.shield, label:'أقل نسبة إلغاء', name:lowestCancel.name, value:`${Math.round((lowestCancel.cancelled/lowestCancel.clients)*100)}%`});

  if (!badges.length) return `<div class="empty"><div class="empty-icon">${IC.trophy}</div>مفيش بيانات كفاية لحساب الشارات لسه</div>`;
  let html = `<div class="gamif-badges-wrap">${badges.map(b => `
    <div class="gamif-badge">
      <div class="gamif-badge-icon">${b.icon}</div>
      <div class="gamif-badge-body">
        <div class="gamif-badge-label">${b.label}</div>
        <div class="gamif-badge-name">${b.name}</div>
      </div>
      <div class="gamif-badge-value">${b.value}</div>
    </div>`).join('')}</div>`;

  // ── شاراتي (شخصي) — لو المستخدم الحالي مسجّل دخول باسم عضو من الفريق، بنوريله ترتيبه وشاراته هو بالذات ──
  const cur = getCurrentUser();
  const me = cur && cur.name ? team.find(m => m.name === cur.name) : null;
  if (me) {
    const myBadges = badges.filter(b => b.name === me.name);
    const rank = [...team].sort((a,b) => (b.commission||0) - (a.commission||0)).findIndex(m => m.name === me.name) + 1;
    html += `
    <div style="margin-top:16px;padding-top:14px;border-top:1px dashed var(--border2)">
      <div style="font-weight:800;font-size:13px;margin-bottom:10px;display:flex;align-items:center;gap:6px"><span style="width:14px;height:14px;color:var(--gold);display:inline-flex">${IC.trophy}</span> شاراتي أنا</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:10px">ترتيبك في تحصيل العمولة: <b style="color:var(--gold)">#${rank}</b> من أصل ${team.length}</div>
      ${myBadges.length ? `<div class="gamif-badges-wrap">${myBadges.map(b => `
        <div class="gamif-badge">
          <div class="gamif-badge-icon">${b.icon}</div>
          <div class="gamif-badge-body"><div class="gamif-badge-label">${b.label}</div><div class="gamif-badge-name" style="color:var(--green);display:flex;align-items:center;gap:5px">مبروك، إنت الأول! <span style="width:12px;height:12px;display:inline-flex">${IC.trophy}</span></div></div>
          <div class="gamif-badge-value">${b.value}</div>
        </div>`).join('')}</div>` : `<div style="font-size:12px;color:var(--text3)">لسه معندكش شارة النهاردة — استمر وهتوصلها</div>`}
    </div>`;
  }
  return html;
}

// ══════════════════════════════════════════
// CLIENTS
// ══════════════════════════════════════════
// ══════════════════════════════════════════
// LEAD SCORING & SEGMENTATION
// ══════════════════════════════════════════
// تقييم آلي (0-100) لجودة/حرارة العميل بناءً على 3 عوامل متاحة فعليًا في بياناتنا:
// 1) حالة الصفقة (وزن أساسي)  2) نسبة التحصيل من التكلفة  3) متوسط تقييم العميل (feedback)
function clientAvgRating(c) {
  const fb = DB.feedbacks.filter(f => f.clientId === c.id);
  return fb.length ? fb.reduce((a,f)=>a+f.rating,0) / fb.length : 0;
}
function leadScore(c) {
  const statusWeight = {
    'نشط / مكتمل': 40,
    'عرض مقدم': 30,
    'قيد المتابعة': 20,
    'ملغي': 0
  }[c.status] ?? 15;
  const paymentScore = c.cost > 0 ? Math.min(30, Math.round((c.collected / c.cost) * 30)) : 0;
  const ratingScore = Math.round((clientAvgRating(c) / 5) * 30); // من غير تقييم = صفر، مش عقاب
  return Math.max(0, Math.min(100, statusWeight + paymentScore + ratingScore));
}
// الشريحة اللي بيقع فيها العميل حسب نقاطه وحالته — دي أساس الـ Segmentation
function clientSegment(c) {
  const score = leadScore(c);
  if (c.status === 'ملغي') return 'lost';
  if (score >= 75) return 'vip';
  if (score >= 40) return 'warm';
  return 'risk';
}
const SEGMENT_META = {
  vip:  { label: 'VIP',        color: 'var(--green)', dim: 'var(--green-dim)'  },
  warm: { label: 'متابعة نشطة', color: 'var(--gold)',  dim: 'var(--gold-dim)'   },
  risk: { label: 'في خطر',      color: 'var(--red)',   dim: 'var(--red-dim)'    },
  lost: { label: 'ملغي',        color: 'var(--text3)', dim: 'rgba(92,100,128,0.12)' }
};
function scoreBadge(c) {
  const score = leadScore(c);
  const seg = clientSegment(c);
  const meta = SEGMENT_META[seg];
  return `<div style="display:flex;align-items:center;gap:6px">
    <span style="font-weight:700;font-size:12px;color:${meta.color}">${score}</span>
    <span style="font-size:10px;padding:2px 7px;border-radius:20px;background:${meta.dim};color:${meta.color};white-space:nowrap">${meta.label}</span>
  </div>`;
}

// ══════════════════════════════════════════
// LOAD MORE (تقسيم صفحات) — العملاء بيتعرضوا على دفعات (50 افتراضيًا) بدل ما كل القائمة تتعرض مرة واحدة
// ══════════════════════════════════════════
const CLIENTS_PAGE_SIZE = 50;
let clientsShowCount = CLIENTS_PAGE_SIZE;
let clientsLastFilterSig = '';

function loadMoreClients() {
  clientsShowCount += CLIENTS_PAGE_SIZE;
  renderClients();
}

function renderClients() {
  const search = (document.getElementById('client-search')||{}).value?.toLowerCase()||'';
  const filterStatus = (document.getElementById('client-filter-status')||{}).value||'';
  const filterAgent = (document.getElementById('client-filter-agent')||{}).value||'';
  const filterService = (document.getElementById('client-filter-service')||{}).value||'';
  const filterSegment = (document.getElementById('client-filter-segment')||{}).value||'';

  const agentSel = document.getElementById('client-filter-agent');
  if (agentSel && agentSel.options.length === 1) {
    const agents = [...new Set(DB.clients.map(c=>c.agent))].filter(Boolean);
    agents.forEach(a => { const o=document.createElement('option'); o.value=a; o.text=a; agentSel.appendChild(o); });
  }
  const svcSel = document.getElementById('client-filter-service');
  if (svcSel && svcSel.options.length === 1) {
    const svcs = [...new Set(DB.clients.map(c=>c.service))].filter(Boolean);
    svcs.forEach(s => { const o=document.createElement('option'); o.value=s; o.text=s; svcSel.appendChild(o); });
  }

  const showArchived = !!(document.getElementById('client-show-archived')||{}).checked;
  let list = DB.clients.filter(c => showArchived ? !!c.archived : !c.archived);
  if (search) list = list.filter(c=>c.name.toLowerCase().includes(search)||(c.service||'').toLowerCase().includes(search)||(c.owner||'').toLowerCase().includes(search));
  if (filterStatus) list = list.filter(c=>c.status===filterStatus);
  if (filterAgent)  list = list.filter(c=>c.agent===filterAgent);
  if (filterService) list = list.filter(c=>c.service===filterService);
  if (filterSegment) list = list.filter(c=>clientSegment(c)===filterSegment);
  const archCount = DB.clients.filter(c=>c.archived).length;
  const archBadge = document.getElementById('client-archived-count');
  if (archBadge) archBadge.textContent = archCount ? `(${archCount})` : '';
  list = applySort(list, 'clients', {
    id: c=>c.id, name: c=>c.name, service: c=>c.service, cost: c=>c.cost, collected: c=>c.collected,
    remaining: c=>c.cost-c.collected, status: c=>c.status, agent: c=>c.agent, date: c=>dateSortValue(c.date),
    rating: c=>{ const fb=DB.feedbacks.filter(f=>f.clientId===c.id); return fb.length ? fb.reduce((a,f)=>a+f.rating,0)/fb.length : 0; },
    score: c=>leadScore(c)
  });

  // لو المستخدم غيّر البحث/الفلاتر، نرجّع العدّاد لأول دفعة تاني
  const filterSig = JSON.stringify({search, filterStatus, filterAgent, filterService, filterSegment, showArchived});
  if (filterSig !== clientsLastFilterSig) {
    clientsShowCount = CLIENTS_PAGE_SIZE;
    clientsLastFilterSig = filterSig;
  }

  const tbody = document.getElementById('clients-tbody');
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="12" style="text-align:center;padding:30px;color:var(--text3)">لا توجد نتائج</td></tr>`;
    return;
  }

  const totalCount = list.length;
  const visibleList = list.slice(0, clientsShowCount);

  tbody.innerHTML = visibleList.map(c=>{
    const remaining = c.cost - c.collected;
    const clientFb = DB.feedbacks.filter(f=>f.clientId===c.id);
    const avgR = clientFb.length ? Math.round(clientFb.reduce((a,f)=>a+f.rating,0)/clientFb.length) : 0;
    return `<tr>
      <td style="color:var(--text3);font-size:12px">${c.id}</td>
      <td>
        <div class="td-name">${c.name}</div>
        <div style="font-size:11px;color:var(--text3)">${c.owner||''}</div>
      </td>
      <td><div style="font-size:12px">${serviceBadgeEl(c.service)}</div></td>
      <td class="td-amount" style="color:var(--text)">${fmt(c.cost)}</td>
      <td class="td-amount" style="color:var(--green)">${fmt(c.collected)}</td>
      <td class="td-amount" style="color:${remaining>0?'var(--red)':'var(--text3)'}">${remaining>0?fmt(remaining):'—'}</td>
      <td>${statusBadge(c.status)}</td>
      <td>${avgR ? starsHtml(avgR) : '<span style="color:var(--text3);font-size:11px">—</span>'}</td>
      <td>${scoreBadge(c)}</td>
      <td><span style="font-size:12px">${c.agent}</span></td>
      <td><span style="font-size:12px;color:var(--text3)">${formatDateDisplay(c.date)}</span></td>
      <td>
        <div class="actions">
          ${callBtnHtml(c.phone)}
          <button class="act-btn gold" onclick="openAddDeal(${JSON.stringify(c.id)})" title="صفقة جديدة لهذا العميل">${IC.deal_plus}</button>
          <button class="act-btn" onclick="openSendMessage(${JSON.stringify(c.id)})" title="إرسال رسالة جاهزة">${IC.message}</button>
          <button class="act-btn" onclick="viewClient(${JSON.stringify(c.id)})" title="عرض">${IC.eye}</button>
          <button class="act-btn" onclick="printInvoiceForClient(${JSON.stringify(c.id)})" title="طباعة فاتورة (كل الصفقات)">${IC.invoice}</button>
          <button class="act-btn" onclick="openClientIdCard(${JSON.stringify(c.id)})" title="بطاقة ID">${IC.id_card}</button>
          <button class="act-btn" onclick="editClient(${JSON.stringify(c.id)})" title="تعديل">${IC.edit}</button>
          <button class="act-btn" onclick="addFollowupFor(${JSON.stringify(c.id)})" title="متابعة">${IC.followup}</button>
          ${c.archived
            ? `<button class="act-btn" onclick="restoreClient(${JSON.stringify(c.id)})" title="استعادة من الأرشيف">${IC.restore}</button>
               <button class="act-btn danger" onclick="deleteClient(${JSON.stringify(c.id)})" title="حذف نهائي">${IC.trash}</button>`
            : `<button class="act-btn" onclick="archiveClient(${JSON.stringify(c.id)})" title="أرشفة (بدل الحذف النهائي)">${IC.archive}</button>`}
        </div>
      </td>
    </tr>`;
  }).join('') + (totalCount > visibleList.length ? `
    <tr class="no-print">
      <td colspan="12" style="text-align:center;padding:16px">
        <button class="btn btn-outline btn-sm" onclick="loadMoreClients()">
          عرض المزيد (${fmt(visibleList.length)} من ${fmt(totalCount)})
        </button>
      </td>
    </tr>` : '');
}

// ══════════════════════════════════════════
// DEALS (الصفقات) — كل عميل ممكن يكون له أكتر من صفقة
// ══════════════════════════════════════════

// الصفقات (DB.deals) هي مصدر الحقيقة الوحيد للأرقام المالية.
// بيانات العميل (cost/collected/status/service/agent/date) بتتحسب دايمًا
// من صفقاته عشان الداشبورد والتقارير وصفحة الصفقات يتفقوا في الأرقام.

// أول صفقة اتسجلت للعميل — هي اللي بتتحدث لما تعدّل بيانات العميل من فورمه
function primaryDealFor(clientId) {
  const deals = (DB.deals || []).filter(d => d.clientId === clientId);
  return deals.length ? deals[0] : null;
}

// بيعيد حساب بيانات العميل الملخّصة من كل صفقاته (مجموع التكلفة/المحصّل،
// وآخر حالة/خدمة/مندوب/تاريخ من أحدث صفقة)
function syncClientFromDeals(clientId) {
  const c = DB.clients.find(x => x.id === clientId);
  if (!c) return;
  const deals = (DB.deals || []).filter(d => d.clientId === clientId);
  if (!deals.length) return; // مفيش صفقات؟ سيبها زي ما هي
  c.cost = deals.reduce((a, d) => a + d.cost, 0);
  c.collected = deals.reduce((a, d) => a + d.collected, 0);
  const latest = deals.reduce((a, d) => (d.id > a.id ? d : a), deals[0]);
  c.status = latest.status;
  c.service = latest.service;
  c.agent = latest.agent;
  c.date = latest.date;
}

// بيتابع تغيّر الحالة عشان يحدّث عدادات الفريق (إكمال/إلغاء) تلقائيًا
function trackStatusTransition(agent, prevStatus, newStatus) {
  if (!agent || prevStatus === newStatus) return;
  if (newStatus === 'نشط / مكتمل' && prevStatus !== 'نشط / مكتمل') updateAgentStats(agent, 'complete');
  if (newStatus === 'ملغي' && prevStatus !== 'ملغي') updateAgentStats(agent, 'cancel');
}

function dealStats() {
  const d = DB.deals || [];
  const totalCost = d.reduce((a,x)=>a+x.cost,0);
  const collected = d.reduce((a,x)=>a+x.collected,0);
  const pipeline = d.filter(x=>['قيد المتابعة','عرض مقدم'].includes(x.status)).reduce((a,x)=>a+x.cost,0);
  const completed = d.filter(x=>x.status==='نشط / مكتمل').length;
  return {total:d.length, totalCost, collected, pipeline, completed};
}

// ══════════════════════════════════════════
// مؤشر "صحة الصفقة" (Deal Health Score) — لون/نقطة سريعة تحدد أي صفقة نشطة محتاجة اهتمام فوري
// العوامل: 1) مدة عدم النشاط منذ آخر تواصل مع العميل  2) عدد مرات التواصل (متابعات) المسجّلة
//          3) التقدم الفعلي في التحصيل (نسبة المحصّل من التكلفة)
// ══════════════════════════════════════════
function dealHealthScore(d) {
  if (!isDealActive(d)) return null; // الصفقات المكتملة/الملغية مالهاش داعي لمؤشر صحة
  const client = DB.clients.find(c => c.id === d.clientId);
  const lastActivity = client ? clientLastActivity(client) : null;
  const daysSinceActivity = lastActivity ? daysSince(lastActivity) : 999;
  const contactCount = (DB.followups || []).filter(f => f.clientId === d.clientId).length;
  const progress = d.cost > 0 ? (d.collected / d.cost) : 0;

  let score = 100;
  if (daysSinceActivity > 14) score -= 50;
  else if (daysSinceActivity > 7) score -= 30;
  else if (daysSinceActivity > 3) score -= 10;

  if (contactCount === 0) score -= 25;
  else if (contactCount < 2) score -= 10;

  score += Math.round(progress * 15);
  return Math.max(0, Math.min(100, score));
}
function dealHealthMeta(score) {
  if (score === null) return { color: 'var(--text3)', dim: 'rgba(255,255,255,0.05)', label: '—' };
  if (score >= 70) return { color: 'var(--green)', dim: 'var(--green-dim)', label: 'بخير' };
  if (score >= 40) return { color: 'var(--gold)', dim: 'var(--gold-dim)', label: 'محتاجة متابعة' };
  return { color: 'var(--red)', dim: 'var(--red-dim)', label: 'عاجلة' };
}
function dealHealthBadge(d) {
  const score = dealHealthScore(d);
  const meta = dealHealthMeta(score);
  return `<div style="display:flex;align-items:center;gap:6px" title="${score===null?'لا ينطبق':`نقاط الصحة: ${score}`}">
    <span style="width:8px;height:8px;border-radius:50%;background:${meta.color};flex-shrink:0"></span>
    <span style="font-size:10.5px;padding:2px 7px;border-radius:20px;background:${meta.dim};color:${meta.color};white-space:nowrap">${meta.label}</span>
  </div>`;
}

let dealsViewMode = 'list';
let lastDealsListForKanban = [];
function setDealsView(mode) {
  dealsViewMode = mode;
  document.getElementById('deals-view-btn-list').classList.toggle('active', mode==='list');
  document.getElementById('deals-view-btn-kanban').classList.toggle('active', mode==='kanban');
  document.getElementById('deals-list-view').style.display = mode==='list' ? '' : 'none';
  document.getElementById('deals-kanban-view').style.display = mode==='kanban' ? '' : 'none';
  if (mode==='kanban') renderDealsKanban(lastDealsListForKanban);
}

function renderDeals() {
  const clientSel = document.getElementById('deal-filter-client');
  if (clientSel && clientSel.options.length === 1) {
    DB.clients.forEach(c => { const o=document.createElement('option'); o.value=c.id; o.text=c.name; clientSel.appendChild(o); });
  }
  const agentSel = document.getElementById('deal-filter-agent');
  if (agentSel && agentSel.options.length === 1) {
    const agents = [...new Set((DB.deals||[]).map(d=>d.agent))].filter(Boolean);
    agents.forEach(a => { const o=document.createElement('option'); o.value=a; o.text=a; agentSel.appendChild(o); });
  }

  const search = (document.getElementById('deal-search')||{}).value?.toLowerCase()||'';
  const filterStatus = (document.getElementById('deal-filter-status')||{}).value||'';
  const filterClient = (document.getElementById('deal-filter-client')||{}).value||'';
  const filterAgent = (document.getElementById('deal-filter-agent')||{}).value||'';

  let list = (DB.deals||[]).map(d => ({...d, _client: DB.clients.find(c=>c.id===d.clientId)}));
  if (search) list = list.filter(d => (d._client && (d._client.name.toLowerCase().includes(search) || (d._client.owner||'').toLowerCase().includes(search))) || (d.service||'').toLowerCase().includes(search) || (d.agent||'').toLowerCase().includes(search));
  if (filterStatus) list = list.filter(d => d.status === filterStatus);
  if (filterClient) list = list.filter(d => String(d.clientId) === filterClient);
  if (filterAgent) list = list.filter(d => d.agent === filterAgent);
  list = applySort(list, 'deals', {
    id: d=>d.id, client: d=>(d._client?d._client.name:''), service: d=>d.service, cost: d=>d.cost,
    collected: d=>d.collected, remaining: d=>d.cost-d.collected, status: d=>d.status, agent: d=>d.agent,
    date: d=>dateSortValue(d.date)
  });

  const s = dealStats();
  document.getElementById('deals-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.pipeline}</div>
      <div class="stat-label">إجمالي الصفقات</div>
      <div class="stat-value">${s.total}</div>
      <div class="stat-sub">بقيمة ${fmt(s.totalCost)} ج.م</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon" style="color:var(--green)">${IC.money}</div>
      <div class="stat-label">إجمالي المحصل</div>
      <div class="stat-value">${fmt(s.collected)}</div>
      <div class="stat-sub">ج.م</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.pipeline}</div>
      <div class="stat-label">Pipeline المتوقع</div>
      <div class="stat-value">${fmt(s.pipeline)}</div>
      <div class="stat-sub">قيد المتابعة والعروض</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon" style="color:var(--green)">${IC.ok_circle}</div>
      <div class="stat-label">صفقات مكتملة</div>
      <div class="stat-value">${s.completed}</div>
      <div class="stat-sub">من ${s.total} صفقة</div>
    </div>
  `;

  const tbody = document.getElementById('deals-tbody');
  lastDealsListForKanban = list;
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="11" style="text-align:center;padding:30px;color:var(--text3)">لا توجد صفقات</td></tr>`;
    if (dealsViewMode === 'kanban') renderDealsKanban(list);
    return;
  }
  tbody.innerHTML = list.map(d => {
    const remaining = d.cost - d.collected;
    const hasDiscount = d.originalCost && d.originalCost > d.cost;
    const discountLabel = d.discountType === 'percent' ? `${d.discountValue}%` : fmt(d.discountValue);
    return `<tr>
      <td style="color:var(--text3);font-size:12px">${d.id}</td>
      <td>
        <div class="td-name">${d._client ? d._client.name : '—'}</div>
        ${d._client && d._client.owner ? `<div style="font-size:11px;color:var(--text3)">${d._client.owner}</div>` : ''}
      </td>
      <td><div style="font-size:12px">${serviceBadgeEl(d.service)}</div></td>
      <td class="td-amount" style="color:var(--text)">
        ${hasDiscount ? `<div style="font-size:11px;color:var(--text3);text-decoration:line-through">${fmt(d.originalCost)}</div>` : ''}
        ${fmt(d.cost)}
        ${hasDiscount ? `<div><span class="badge badge-red" style="margin-top:2px">خصم ${discountLabel}</span></div>` : ''}
      </td>
      <td class="td-amount" style="color:var(--green)">${fmt(d.collected)}</td>
      <td class="td-amount" style="color:${remaining>0?'var(--red)':'var(--text3)'}">${remaining>0?fmt(remaining):'—'}</td>
      <td>${statusBadge(d.status)}</td>
      <td>${dealHealthBadge(d)}</td>
      <td><span style="font-size:12px">${d.agent||'—'}</span></td>
      <td><span style="font-size:12px;color:var(--text3)">${formatDateDisplay(d.date)}</span></td>
      <td>
        <div class="actions">
          ${d._client ? callBtnHtml(d._client.phone) : ''}
          <button class="act-btn" onclick="printInvoiceForDeal(${JSON.stringify(d.id)})" title="طباعة فاتورة">${IC.invoice}</button>
          <button class="act-btn" onclick="editDeal(${JSON.stringify(d.id)})" title="تعديل">${IC.edit}</button>
          <button class="act-btn" onclick="addFollowupFor(${JSON.stringify(d.clientId)})" title="متابعة">${IC.followup}</button>
          <button class="act-btn danger" onclick="deleteDeal(${JSON.stringify(d.id)})" title="حذف">${IC.trash}</button>
        </div>
      </td>
    </tr>`;
  }).join('');
  if (dealsViewMode === 'kanban') renderDealsKanban(list);
}

// ══════════════════════════════════════════
// KANBAN BOARD للصفقات — نفس الأعمدة المعرّفة في إعدادات حالات الصفقات (getDealStatuses)
// سحب وإفلات (Drag & Drop) لنقل الصفقة من حالة لأخرى بسرعة من غير فتح مودال
// ══════════════════════════════════════════
let draggedDealId = null;

function renderDealsKanban(list) {
  const board = document.getElementById('deals-kanban-view');
  if (!board) return;
  list = list || [];
  const statuses = getDealStatuses();
  board.innerHTML = statuses.map(st => {
    const colDeals = list.filter(d => d.status === st.name);
    const colTotal = colDeals.reduce((a,d)=>a+d.cost, 0);
    return `<div class="kanban-col" data-status="${st.name}" ondragover="kanbanColDragOver(event)" ondragleave="kanbanColDragLeave(event)" ondrop="kanbanColDrop(event, ${JSON.stringify(st.name)})">
      <div class="kanban-col-header" title="اسحب لترتيب الأعمدة">
        <span class="kanban-col-grip"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/></svg></span>
        <span class="kanban-col-dot badge-${st.color}"></span>
        <span class="kanban-col-title">${st.name}</span>
        <span class="kanban-col-count">${colDeals.length}</span>
      </div>
      <div class="kanban-col-sub">${fmt(colTotal)} ج.م</div>
      <div class="kanban-col-body">
        ${colDeals.length ? colDeals.map(d => kanbanCardHtml(d)).join('') : `<div class="kanban-empty">اسحب صفقة هنا</div>`}
      </div>
    </div>`;
  }).join('');
  attachKanbanColsDnD(board);
}

// بيربط سحب أعمدة الكانبان بأحداث الـ pointer (بدل HTML5 drag اللي مش بيثبت دايمًا — نفس الطريقة المستخدمة في بلوكات الداشبورد)
function attachKanbanColsDnD(board) {
  board.querySelectorAll('.kanban-col').forEach(col => {
    const handle = col.querySelector('.kanban-col-header');
    if (!handle) return;
    handle.onpointerdown = e => startKanbanColDrag(e, board, col);
  });
}
let kanbanColDragState = null;
function startKanbanColDrag(e, board, col) {
  if (kanbanColDragState || e.button === 2) return;
  e.preventDefault();
  const rect = col.getBoundingClientRect();

  const placeholder = document.createElement('div');
  placeholder.className = 'kanban-col-placeholder';
  placeholder.style.width = rect.width + 'px';
  placeholder.style.height = rect.height + 'px';
  col.after(placeholder);

  col.classList.add('kanban-col-floating');
  col.style.width = rect.width + 'px';
  col.style.height = rect.height + 'px';
  col.style.left = rect.left + 'px';
  col.style.top = rect.top + 'px';
  document.body.appendChild(col);
  document.body.classList.add('kanban-col-drag-active');

  kanbanColDragState = {
    board, col, placeholder,
    offsetX: e.clientX - rect.left,
    offsetY: e.clientY - rect.top
  };
  document.addEventListener('pointermove', onKanbanColDragMove);
  document.addEventListener('pointerup', onKanbanColDragEnd);
}
function onKanbanColDragMove(e) {
  if (!kanbanColDragState) return;
  const { board, col, placeholder } = kanbanColDragState;
  col.style.left = (e.clientX - kanbanColDragState.offsetX) + 'px';
  col.style.top = (e.clientY - kanbanColDragState.offsetY) + 'px';

  col.style.pointerEvents = 'none';
  const overEl = document.elementFromPoint(e.clientX, e.clientY);
  col.style.pointerEvents = '';
  const overCol = overEl ? overEl.closest('.kanban-col') : null;
  if (overCol && overCol !== col && overCol !== placeholder && board.contains(overCol)) {
    const children = [...board.children];
    const placeholderIndex = children.indexOf(placeholder);
    const overIndex = children.indexOf(overCol);
    if (placeholderIndex < overIndex) overCol.after(placeholder);
    else overCol.before(placeholder);
  }
}
function onKanbanColDragEnd() {
  if (!kanbanColDragState) return;
  const { board, col, placeholder } = kanbanColDragState;
  document.removeEventListener('pointermove', onKanbanColDragMove);
  document.removeEventListener('pointerup', onKanbanColDragEnd);
  document.body.classList.remove('kanban-col-drag-active');

  placeholder.replaceWith(col);
  col.classList.remove('kanban-col-floating');
  col.style.position = '';
  col.style.left = '';
  col.style.top = '';
  col.style.width = '';
  col.style.height = '';
  col.style.pointerEvents = '';

  // بنحفظ الترتيب الجديد زي ما هو ظاهر فعليًا في الـ DOM
  const newOrder = [...board.querySelectorAll('.kanban-col')].map(c => c.dataset.status);
  applyDealStatusColumnsOrder(newOrder);

  kanbanColDragState = null;
}
// بيرتب DB.settings.dealStatuses حسب ترتيب أسماء جاي من الـ DOM بعد السحب، وبيحفظ ويعرض تاني
function applyDealStatusColumnsOrder(orderedNames) {
  const statuses = getDealStatuses();
  const byName = new Map(statuses.map(s => [s.name, s]));
  const reordered = orderedNames.map(n => byName.get(n)).filter(Boolean);
  statuses.length = 0;
  statuses.push(...reordered);
  saveDB();
  renderDealsKanban(lastDealsListForKanban);
}

// السحب والإفلات (HTML5 native) مش بيشتغل كويس على اللمس/الموبايل — وبيعمل تأخير قبل ما السكرول يشتغل،
// فبنفعّله بس للأجهزة اللي بتشتغل بالماوس، وعلى الموبايل بنعتمد على قايمة "نقل لمرحلة" تحت الكارت بدل السحب
const isTouchDevice = window.matchMedia && window.matchMedia('(hover: none), (pointer: coarse)').matches;

function kanbanCardHtml(d) {
  const remaining = d.cost - d.collected;
  const dragAttrs = isTouchDevice ? '' : `draggable="true" ondragstart="kanbanCardDragStart(event, ${JSON.stringify(d.id)})" ondragend="kanbanCardDragEnd(event)"`;
  const statusOptions = getDealStatuses().map(s => `<option value="${s.name}" ${s.name===d.status?'selected':''}>${s.name}</option>`).join('');
  return `<div class="kanban-card" ${dragAttrs} onclick="editDeal(${JSON.stringify(d.id)})">
    <div class="kanban-card-name">${d._client ? d._client.name : '—'}</div>
    <div class="kanban-card-service">${d.service||''}</div>
    <div class="kanban-card-row">
      <span class="kanban-card-cost">${fmt(d.cost)} ج.م</span>
      ${remaining>0 ? `<span class="kanban-card-remaining">متبقي ${fmt(remaining)}</span>` : `<span class="kanban-card-paid">مدفوع بالكامل</span>`}
    </div>
    <div class="kanban-card-footer">
      <span class="kanban-card-agent">${d.agent||'—'}</span>
      <span class="kanban-card-date">${formatDateDisplay(d.date)}</span>
    </div>
    <select class="kanban-card-move" onclick="event.stopPropagation()" onchange="event.stopPropagation(); changeDealStatus(${JSON.stringify(d.id)}, this.value)" title="نقل لمرحلة تانية">${statusOptions}</select>
  </div>`;
}

function kanbanCardDragStart(ev, id) {
  draggedDealId = id;
  ev.dataTransfer.effectAllowed = 'move';
  ev.dataTransfer.setData('text/plain', String(id));
  ev.currentTarget.classList.add('dragging');
}
function kanbanCardDragEnd(ev) {
  ev.currentTarget.classList.remove('dragging');
  draggedDealId = null;
}
function kanbanColDragOver(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = 'move';
  ev.currentTarget.classList.add('drag-over');
}
function kanbanColDragLeave(ev) {
  ev.currentTarget.classList.remove('drag-over');
}
function kanbanColDrop(ev, newStatus) {
  ev.preventDefault();
  ev.currentTarget.classList.remove('drag-over');
  const id = draggedDealId !== null ? draggedDealId : parseInt(ev.dataTransfer.getData('text/plain'));
  changeDealStatus(id, newStatus);
}

// بينقل صفقة لحالة جديدة (مستخدمة في الـ Kanban) — بيحدّث كل ما يترتب على تغيير الحالة زي ما بيحصل من مودال التعديل العادي
function changeDealStatus(dealId, newStatus) {
  const deal = (DB.deals||[]).find(d => d.id === dealId);
  if (!deal || deal.status === newStatus) return;
  const prevStatus = deal.status;
  deal.status = newStatus;
  trackStatusTransition(deal.agent, prevStatus, newStatus);
  syncClientFromDeals(deal.clientId);
  logActivity('نقل صفقة (Kanban)', `${(DB.clients.find(c=>c.id===deal.clientId)||{}).name||''} — من "${prevStatus}" إلى "${newStatus}"`);
  saveDB();
  toast(`تم نقل الصفقة لـ "${newStatus}"`);
}

// ══════════════════════════════════════════
// INVOICES (فواتير الصفقات/العملاء)
// ══════════════════════════════════════════

// مفتاح الفترة الحالية بناءً على إعداد "تصفير الترقيم تلقائيًا" (يومي/أسبوعي/شهري) — بيتغير المفتاح ده لما الفترة تتغير فيبدأ العداد من الأول تاني
function currentInvoicePeriodKey(resetMode) {
  const d = new Date();
  if (resetMode === 'daily') return d.toISOString().slice(0, 10); // YYYY-MM-DD
  if (resetMode === 'weekly') {
    const onejan = new Date(d.getFullYear(), 0, 1);
    const week = Math.ceil((((d - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    return `${d.getFullYear()}-W${week}`;
  }
  if (resetMode === 'monthly') return d.toISOString().slice(0, 7); // YYYY-MM
  return 'none';
}

// بيرجع رقم الفاتورة الجاية منسّق (بادئة + أصفار) من غير ما يستهلك العداد — للمعاينة بس
function formatInvoiceNumber(counter, s) {
  s = s || DB.settings || {};
  const prefix = s.invoiceNumPrefix || '';
  const padding = parseInt(s.invoiceNumPadding, 10) || 4;
  return prefix + String(counter).padStart(padding, '0');
}

// بيرجع رقم العداد الجاي (من غير استهلاك) — بيراعي رقم البداية والتصفير التلقائي
function peekNextInvoiceCounter() {
  const s = DB.settings || {};
  const start = parseInt(s.invoiceNumStart, 10) || 1000;
  const resetMode = s.invoiceNumReset || 'none';
  const periodKey = currentInvoicePeriodKey(resetMode);
  if (DB.invoiceCounterPeriodKey !== periodKey || !DB.invoiceCounter) {
    return start;
  }
  return DB.invoiceCounter + 1;
}

function nextInvoiceNumber() {
  const s = DB.settings || {};
  const start = parseInt(s.invoiceNumStart, 10) || 1000;
  const resetMode = s.invoiceNumReset || 'none';
  const periodKey = currentInvoicePeriodKey(resetMode);
  if (DB.invoiceCounterPeriodKey !== periodKey || !DB.invoiceCounter) {
    DB.invoiceCounter = start;
  } else {
    DB.invoiceCounter++;
  }
  DB.invoiceCounterPeriodKey = periodKey;
  return formatInvoiceNumber(DB.invoiceCounter, s);
}

// بيانات فاتورة لصفقة واحدة بس
function buildInvoiceForDeal(dealId) {
  const deal = (DB.deals || []).find(d => d.id === dealId);
  if (!deal) return null;
  const client = DB.clients.find(c => c.id === deal.clientId);
  if (!client) return null;
  // لو الصفقة عليها خصم، بنعرض السعر الأصلي في الجدول وبنطرح الخصم في الإجماليات
  const hasDiscount = !!(deal.discountType && deal.discountType !== 'none' && deal.originalCost);
  const originalCost = hasDiscount ? deal.originalCost : deal.cost;
  const discountAmount = hasDiscount ? Math.max(originalCost - deal.cost, 0) : 0;
  const discountLabel = hasDiscount ? (deal.discountType === 'percent' ? `${deal.discountValue}%` : `${fmt(deal.discountValue)} ج.م`) : '';
  return {
    client,
    items: [{ name: deal.service || 'خدمة', qty: 1, price: originalCost, total: originalCost, discountAmount, discountLabel }],
    subtotal: originalCost,
    discountTotal: discountAmount,
    collected: deal.collected,
    paymentMethod: deal.paymentMethod || '',
    dealIds: [deal.id]
  };
}

// بيانات فاتورة تجمع كل صفقات عميل واحد
function buildInvoiceForClient(clientId) {
  const client = DB.clients.find(c => c.id === clientId);
  if (!client) return null;
  const deals = (DB.deals || []).filter(d => d.clientId === clientId);
  if (!deals.length) { toast('العميل ده لسه مالوش صفقات', 'error'); return null; }
  const items = deals.map(d => {
    const hasDiscount = !!(d.discountType && d.discountType !== 'none' && d.originalCost);
    const originalCost = hasDiscount ? d.originalCost : d.cost;
    const discountAmount = hasDiscount ? Math.max(originalCost - d.cost, 0) : 0;
    const discountLabel = hasDiscount ? (d.discountType === 'percent' ? `${d.discountValue}%` : `${fmt(d.discountValue)} ج.م`) : '';
    return { name: d.service || 'خدمة', qty: 1, price: originalCost, total: originalCost, discountAmount, discountLabel };
  });
  return {
    client,
    items,
    subtotal: items.reduce((a, it) => a + it.total, 0),
    discountTotal: items.reduce((a, it) => a + it.discountAmount, 0),
    collected: deals.reduce((a, d) => a + d.collected, 0),
    paymentMethod: [...new Set(deals.map(d => d.paymentMethod).filter(Boolean))].join('، '),
    dealIds: deals.map(d => d.id)
  };
}

// زر الفاتورة في صف الصفقة — لو العميل ليه أكتر من صفقة، نسأله يعمل الفاتورة للصفقة دي بس ولا لكل صفقاته
async function printInvoiceForDeal(dealId) {
  const deal = (DB.deals || []).find(d => d.id === dealId);
  if (!deal) return;
  const clientDeals = (DB.deals || []).filter(d => d.clientId === deal.clientId);
  if (clientDeals.length > 1) {
    const wantAll = await confirmDialog(
      'العميل ده ليه أكتر من صفقة. تحب الفاتورة تجمع كل صفقاته ولا الصفقة دي بس؟',
      { title: 'اختر نوع الفاتورة', okText: 'كل صفقات العميل', cancelText: 'الصفقة دي بس', danger: false }
    );
    if (wantAll) { openInvoice(buildInvoiceForClient(deal.clientId)); return; }
  }
  openInvoice(buildInvoiceForDeal(dealId));
}

// زر الفاتورة في صف العميل — بتجمع كل صفقاته دايمًا
function printInvoiceForClient(clientId) {
  openInvoice(buildInvoiceForClient(clientId));
}

// بيرجع لابل الرول (بدون الاسم) + اسم الموقّع اللي هيتكتب بخط الإمضاء
function getInvoiceSignerLabel(cur) {
  if (!cur) return { line: '—', mark: '' };
  if (cur.role === DEV_LOGIN.role) {
    // المطور بيتعرض دايمًا بالاسم ده بغض النظر عن اسم الحساب
    return { line: 'توقيع المطور', mark: 'Kerollos Hany' };
  }
  if (cur.role === 'مدير') {
    return { line: 'توقيع المدير', mark: cur.name };
  }
  if (cur.role === 'مندوب مبيعات' || cur.role === 'مبيعات' || cur.role === 'Sales' || cur.role === 'sales') {
    return { line: 'توقيع مندوب المبيعات', mark: cur.name };
  }
  // أي صلاحية تانية غير متوقعة — بنعرض الرول والاسم زي ما هو
  return { line: cur.role ? `توقيع ${cur.role}` : 'توقيع المسؤول', mark: cur.name };
}

function openInvoice(data) {
  if (!data) { toast('مفيش بيانات كفاية لإصدار الفاتورة', 'error'); return; }
  applyPrintSize(); // نطبّق حجم الورقة المختار من الإعدادات على المعاينة نفسها، مش وقت الطباعة بس
  applyInvoiceTemplate(); // نطبّق شكل تصميم الفاتورة المختار من الإعدادات
  // لو فاضل نسخ إضافية اتضافت في طباعة سابقة (مثلاً المستخدم قفل الفاتورة قبل ما يطبع)، نرجّعها لنسخة واحدة بس
  const copiesWrap = document.getElementById('invoice-print-copies');
  if (copiesWrap) {
    const all = copiesWrap.querySelectorAll('.inv-print-copy');
    all.forEach((el, i) => { if (i > 0) el.remove(); });
  }

  const num = nextInvoiceNumber();
  const dateStr = new Date().toLocaleDateString('en-GB');
  const net = Math.max(data.subtotal - (data.discountTotal || 0), 0);
  const cur = getCurrentUser();
  const s = DB.settings || {};

  // حساب الضريبة لو مفعّلة من الإعدادات — بتتحسب على الصافي بعد الخصم وقبل خصم المحصّل
  const applyTax = !!s.applyTax;
  const taxRate = applyTax ? (parseFloat(s.taxRate) || 0) : 0;
  const taxAmount = applyTax ? Math.round(net * taxRate) / 100 : 0;
  const due = Math.max(net + taxAmount - data.collected, 0);

  // نسجّل الفاتورة في سجل الفواتير عشان الأرشيف
  if (!DB.invoices) DB.invoices = [];
  DB.invoices.push({
    id: num, number: num, clientId: data.client.id, dealIds: data.dealIds,
    date: dateStr, subtotal: data.subtotal, collected: data.collected, due,
    issuedBy: cur ? cur.name : ''
  });
  saveDB();

  // هيدر الفاتورة: اللوجو جوه البوكس اللي جنب "INVOICE"، واسم الشركة متدمج مع "INVOICE"، واسم العميل تحته
  const brandName = (s.brandName || 'اسم الشركة').trim();
  const titleEl = document.getElementById('invoice-title-text');
  if (titleEl) titleEl.textContent = `${brandName} - INVOICE`;
  const logoImg = document.getElementById('invoice-logo-img');
  const logoPh = document.getElementById('invoice-logo-ph');
  const logoBox = logoImg ? logoImg.closest('.inv-logo-box') : null;
  const showLogo = s.showLogo !== false;
  if (logoBox) logoBox.style.display = showLogo ? '' : 'none';
  if (showLogo) {
    if (DB.logo) { logoImg.src = DB.logo; logoImg.style.display = 'block'; logoPh.style.display = 'none'; }
    else { logoImg.style.display = 'none'; logoPh.textContent = brandName.charAt(0) || 'ف'; logoPh.style.display = 'flex'; }
  } else {
    logoImg.style.display = 'none'; logoPh.style.display = 'none';
  }

  // نص الترحيب أعلى الفاتورة (اختياري — لو مفيش نص متسجل بيتخفي تمامًا)
  const welcomeEl = document.getElementById('invoice-welcome');
  const welcomeText = (s.invoiceWelcomeText || '').trim();
  if (welcomeEl) {
    if (welcomeText) { welcomeEl.textContent = welcomeText; welcomeEl.style.display = ''; }
    else { welcomeEl.style.display = 'none'; }
  }

  // بيانات العميل
  document.getElementById('invoice-to-name').textContent = data.client.name || '—';
  document.getElementById('invoice-to-phone').textContent = data.client.phone || '—';
  document.getElementById('invoice-to-address').textContent = data.client.address || '—';

  // اسم الموظف اللي طلع الفاتورة (اختياري من الإعدادات)
  const employeeLine = document.getElementById('invoice-employee-line');
  if (employeeLine) {
    if (s.showEmployeeName) { employeeLine.style.display = ''; document.getElementById('invoice-employee-name').textContent = (cur && cur.name) || '—'; }
    else { employeeLine.style.display = 'none'; }
  }
  // الرقم الضريبي للشركة (اختياري من الإعدادات)
  const taxNumberLine = document.getElementById('invoice-tax-number-line');
  if (taxNumberLine) {
    if (s.showTaxNumber) { taxNumberLine.style.display = ''; document.getElementById('invoice-tax-number-val').textContent = s.taxNumber || '—'; }
    else { taxNumberLine.style.display = 'none'; }
  }

  // رقم/تاريخ/إجمالي مطلوب
  document.getElementById('invoice-number').textContent = num;
  document.getElementById('invoice-date').textContent = dateStr;
  document.getElementById('invoice-total-due').textContent = fmt(due) + ' ج.م';

  // إظهار/إخفاء عمود سعر الوحدة في جدول الأصناف حسب الإعدادات
  const invTable = document.getElementById('invoice-table');
  if (invTable) invTable.classList.toggle('hide-unit-price', s.showUnitPrice === false);

  // جدول المنتجات/الخدمات — بيعرض السعر الأصلي ولو فيه خصم بيظهر تحت اسم الخدمة
  document.getElementById('invoice-items-tbody').innerHTML = data.items.map(it => `
    <tr>
      <td>${it.name}${it.discountLabel ? `<div class="inv-item-discount">خصم ${it.discountLabel}</div>` : ''}</td>
      <td style="text-align:center">${it.qty}</td>
      <td class="pv-unit-price-col" style="text-align:center">${fmt(it.price)}</td>
      <td style="text-align:center">${fmt(it.total)}</td>
    </tr>
  `).join('');

  // الإجمالي والخصم (لو موجود) والضريبة (لو مفعّلة) والمحصل والمتبقي
  document.getElementById('invoice-subtotal').textContent = fmt(data.subtotal) + ' ج.م';
  const discountRow = document.getElementById('invoice-discount-row');
  if (data.discountTotal > 0) {
    discountRow.style.display = '';
    document.getElementById('invoice-discount').textContent = '- ' + fmt(data.discountTotal) + ' ج.م';
  } else {
    discountRow.style.display = 'none';
  }
  const taxRow = document.getElementById('invoice-tax-row');
  if (applyTax) {
    taxRow.style.display = '';
    document.getElementById('invoice-tax-label').textContent = `Tax (${taxRate}%) :`;
    document.getElementById('invoice-tax-amount').textContent = fmt(taxAmount) + ' ج.م';
  } else {
    taxRow.style.display = 'none';
  }
  document.getElementById('invoice-collected').textContent = fmt(data.collected) + ' ج.م';
  document.getElementById('invoice-total').textContent = fmt(due) + ' ج.م';

  // نص الختام أسفل الفاتورة (بديل "Thank you for purchase!")
  const thanksEl = document.getElementById('invoice-thanks-text');
  if (thanksEl) thanksEl.textContent = (s.invoiceFooterText || '').trim() || 'Thank you for purchase!';

  // طريقة الدفع المختارة في الصفقة (أو الصفقات المجمّعة)
  const paymentMethodEl = document.getElementById('invoice-payment-method');
  if (paymentMethodEl) paymentMethodEl.textContent = data.paymentMethod || '—';

  // الختم — بيظهر بلونه الحقيقي (زي الأزرق) لو تم رفعه من الإعدادات، ولو مفعّل من "إظهار ختم الشركة"
  const stampImg = document.getElementById('invoice-stamp-img');
  const showStampSetting = (DB.settings && DB.settings.showStamp) !== false;
  if (stampImg) {
    if (DB.stamp && showStampSetting) { stampImg.src = DB.stamp; stampImg.style.display = 'block'; }
    else { stampImg.style.display = 'none'; }
  }

  // توقيع المسؤول اللي طلع الفاتورة — لابل الرول (توقيع المطور/المدير/مندوب المبيعات) مكان "توقيع المسؤول"،
  // وبعده خط، وبعده الإمضاء بخط اليد فيه اسم الشخص فعليًا. توقيع الموظف بيظهر دايمًا تلقائيًا،
  // وبعده أي توقيعات إضافية مفعّلة من الإعدادات (زي توقيع المدير) بجمبه
  const signaturesToShow = getActiveInvoiceSignatures(cur);
  const signaturesWrap = document.getElementById('invoice-signatures');
  if (signaturesWrap) {
    signaturesWrap.className = 'inv-signatures inv-sig-size-' + getSignatureSize();
    signaturesWrap.innerHTML = signaturesToShow.map(sig => {
      const isArabicName = /[\u0600-\u06FF]/.test(sig.mark || '');
      return `
      <div class="inv-signature">
        <div class="inv-sign-role-label">${sig.line}</div>
        <div class="inv-sign-line"></div>
        <div class="inv-sign-mark${isArabicName ? ' inv-sign-mark-ar' : ''}">${sig.mark||''}</div>
      </div>`;
    }).join('');
  }

  // QR Codes — كل الأكواد المفعّلة على الفاتورة، كل واحد في مكانه ورسالته
  renderAllInvoiceQRCodes();

  openModal('modal-invoice');
}

// حجم الفاتورة/الطباعة اللي المستخدم اختاره من الإعدادات (a4 / 80mm / 58mm / 55mm)
// بيتطبّق كـ class على body (للتنسيقات) + @page ديناميكي (لحجم الورقة الفعلي وقت الطباعة)
function applyPrintSize() {
  const size = (DB.settings && DB.settings.printSize) || 'a4';
  document.body.classList.remove(...INVOICE_PAPER_SIZES.map(s => 'print-size-' + s));
  document.body.classList.add('print-size-' + size);
  let styleTag = document.getElementById('dynamic-page-size');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'dynamic-page-size';
    document.head.appendChild(styleTag);
  }
  const pageRules = {
    a4: '@page { size: A4; margin: 15mm; }',
    '80mm': '@page { size: 80mm auto; margin: 3mm; }',
    '58mm': '@page { size: 58mm auto; margin: 2mm; }',
    '55mm': '@page { size: 55mm auto; margin: 2mm; }'
  };
  styleTag.textContent = pageRules[size] || pageRules.a4;
}

// شكل تصميم الفاتورة المختار من الإعدادات (classic/modern/simple/elegant/contrast) — بيتطبّق كـ class على ورقة الفاتورة
function applyInvoiceTemplate() {
  const paper = document.getElementById('invoice-paper');
  if (!paper) return;
  const tpl = (DB.settings && DB.settings.invoiceTemplate) || 'classic';
  paper.classList.remove(...INVOICE_TEMPLATES.map(t => 'inv-template-' + t));
  paper.classList.add('inv-template-' + tpl);
}

function applyInvoiceTemplateSetting(tpl) {
  ensureSettings();
  DB.settings.invoiceTemplate = tpl;
  saveDB();
  document.querySelectorAll('#invoice-template-grid .theme-card').forEach(c => {
    c.classList.toggle('active', c.dataset.invoiceTemplate === tpl);
  });
  updateInvoicePreview();
  toast('تم تغيير شكل الفاتورة');
}

function saveInvoicePrintSize() {
  ensureSettings();
  DB.settings.printSize = document.getElementById('sett-print-size').value;
  applyPrintSize();
  saveDB();
  toast('تم حفظ حجم الفاتورة');
}

function saveInvoicePrintCopies() {
  ensureSettings();
  DB.settings.printCopies = parseInt(document.getElementById('sett-print-copies').value, 10) || 1;
  saveDB();
  toast('تم حفظ عدد النسخ');
}

// حد أقصى لنسبة الخصم المسموحة في الصفقات — يترك فاضي = من غير حد
function saveMaxDiscountPercent() {
  ensureSettings();
  const raw = document.getElementById('max-discount-percent').value;
  const val = raw === '' ? null : Math.min(100, Math.max(0, parseFloat(raw) || 0));
  DB.settings.maxDiscountPercent = val;
  if (val !== null) document.getElementById('max-discount-percent').value = val;
  saveDB();
  toast(val === null ? 'تم إلغاء الحد الأقصى للخصم' : `تم حفظ الحد الأقصى: ${val}%`);
}

// هل المستخدم الحالي مستثنى من حد الخصم الأقصى (مدير أو مطور)؟
function isDiscountCapExempt() {
  if (isDeveloperUser()) return true;
  const cur = getCurrentUser();
  return !!cur && cur.role === 'مدير';
}

// نص الترحيب والختام — بيتحفظ أول ما المستخدم يكتب (debounce بسيط عن طريق مقارنة القيمة)
function saveInvoiceTexts() {
  ensureSettings();
  DB.settings.invoiceWelcomeText = document.getElementById('inv-welcome-text').value;
  DB.settings.invoiceFooterText = document.getElementById('inv-footer-text').value;
  saveDB();
}

function saveInvoiceTaxRate() {
  ensureSettings();
  let rate = parseFloat(document.getElementById('inv-tax-rate').value);
  if (isNaN(rate) || rate < 0) rate = 0;
  if (rate > 100) rate = 100;
  DB.settings.taxRate = rate;
  saveDB();
  toast('تم حفظ نسبة الضريبة');
}

// تفعيل/تعطيل أي عنصر من عناصر الفاتورة (الضريبة، الرقم الضريبي، اسم الموظف، عمود سعر الوحدة)
function saveInvoiceToggle(key, value) {
  ensureSettings();
  DB.settings[key] = value;
  saveDB();
}

// ══════════════════════════════════════════
// QR CODES (متعددة) — على الفاتورة و/أو بطاقة الـ ID
// كل QR له: اسم داخلي، لينك، رسالة تظهر تحته، مكان مخصوص في الفاتورة، وتحديد يظهر فين
// ══════════════════════════════════════════
let editingQrCodeId = null;

// بيرسم QR Code جوه عنصر معين (div) بناءً على نص/لينك — بيمسح أي كود قديم قبل ما يرسم الجديد
function renderQRInto(elId, text, size = 90) {
  const holder = document.getElementById(elId);
  if (!holder) return;
  holder.innerHTML = '';
  if (!text || typeof QRCode === 'undefined') return;
  try {
    new QRCode(holder, {
      text: text,
      width: size,
      height: size,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  } catch (e) { /* لو حصل أي خطأ في المكتبة، نتجاهله بدل ما نكسر باقي الفاتورة */ }
}

const QR_POSITION_LABELS = { footer: 'أسفل الفاتورة', 'top-right': 'أعلى يمين', 'top-left': 'أعلى شمال', 'bottom-right': 'أسفل يمين', 'bottom-left': 'أسفل شمال' };

function openAddQrCode(id = null) {
  editingQrCodeId = id;
  const list = ensureSettingsList('qrCodes', () => []);
  const entry = id ? list.find(q => q.id === id) : null;
  document.getElementById('modal-qrcode-title').textContent = entry ? 'تعديل QR' : 'QR جديد';
  document.getElementById('qr-label').value = entry ? entry.label : '';
  document.getElementById('qr-link').value = entry ? entry.link : '';
  document.getElementById('qr-caption').value = entry ? (entry.caption || '') : '';
  document.getElementById('qr-position').value = entry ? (entry.position || 'footer') : 'footer';
  document.getElementById('qr-target-invoice').checked = entry ? !!entry.showOnInvoice : true;
  document.getElementById('qr-target-idcard').checked = entry ? !!entry.showOnIdCard : false;
  clearFieldErrors(['qr-label', 'qr-link']);
  renderQrCodeModalPreview();
  openModal('modal-qrcode');
}

function renderQrCodeModalPreview() {
  const link = document.getElementById('qr-link')?.value.trim();
  if (link) renderQRInto('qr-modal-preview', link, 74);
  else { const p = document.getElementById('qr-modal-preview'); if (p) p.innerHTML = ''; }
}

function saveQrCodeEntry() {
  const label = document.getElementById('qr-label').value.trim();
  const link = document.getElementById('qr-link').value.trim();
  const ok = runValidation([
    { id: 'qr-label', value: label, test: isRequired, message: 'اكتب اسم يميّز الـ QR ده' },
    { id: 'qr-link', value: link, test: isRequired, message: 'اكتب الرابط اللي هيتحول لـ QR' },
  ]);
  if (!ok) return;
  const list = ensureSettingsList('qrCodes', () => []);
  const data = {
    label,
    link,
    caption: document.getElementById('qr-caption').value.trim(),
    position: document.getElementById('qr-position').value,
    showOnInvoice: document.getElementById('qr-target-invoice').checked,
    showOnIdCard: document.getElementById('qr-target-idcard').checked,
  };
  if (editingQrCodeId) {
    const entry = list.find(q => q.id === editingQrCodeId);
    if (entry) Object.assign(entry, data);
  } else {
    list.push({ id: Date.now(), ...data });
  }
  saveDB();
  closeModal('modal-qrcode');
  toast('تم حفظ الـ QR');
  renderQrCodeSettingsList();
}

async function deleteQrCodeEntry(id) {
  if (!(await confirmDialog('حذف هذا الـ QR؟'))) return;
  const list = ensureSettingsList('qrCodes', () => []);
  DB.settings.qrCodes = list.filter(q => q.id !== id);
  saveDB();
  toast('تم الحذف', 'error');
  renderQrCodeSettingsList();
}

function renderQrCodeSettingsList() {
  const box = document.getElementById('qr-codes-list');
  if (!box) return;
  const list = ensureSettingsList('qrCodes', () => []);
  if (!list.length) {
    box.innerHTML = `<div class="empty" style="padding:24px"><div style="font-size:13px">لسه مفيش QR مضاف — اضغط "QR جديد" وابدأ</div></div>`;
    return;
  }
  box.innerHTML = `<div class="qr-list">${list.map(q => `
    <div class="qr-list-item">
      <div class="qr-list-thumb" id="qr-thumb-${q.id}"></div>
      <div class="qr-list-info">
        <div class="qr-list-label">${q.label}</div>
        <div class="qr-list-meta">
          <span class="badge badge-gray">${QR_POSITION_LABELS[q.position] || 'أسفل الفاتورة'}</span>
          ${q.showOnInvoice ? '<span class="badge badge-gold">الفاتورة</span>' : ''}
          ${q.showOnIdCard ? '<span class="badge badge-cyan">بطاقة ID</span>' : ''}
        </div>
        ${q.caption ? `<div class="qr-list-caption">"${q.caption}"</div>` : ''}
      </div>
      <div class="qr-list-actions">
        <button class="act-btn" onclick="openAddQrCode(${q.id})">${IC.edit}</button>
        <button class="act-btn danger" onclick="deleteQrCodeEntry(${q.id})">${IC.trash}</button>
      </div>
    </div>`).join('')}</div>`;
  list.forEach(q => renderQRInto(`qr-thumb-${q.id}`, q.link, 56));
}

// بيمسح أي صناديق QR اتحطت ديناميكيًا في أطراف الفاتورة (المواضع الجانبية) قبل ما يرسم من جديد
function clearDynamicInvoiceQRBoxes() {
  document.querySelectorAll('#invoice-paper .inv-qr-corner').forEach(el => el.remove());
}

// بيرسم كل الـ QR codes المفعّلة على الفاتورة الحقيقية، كل واحد في مكانه المحدد من الإعدادات
function renderAllInvoiceQRCodes() {
  const list = ((DB.settings || {}).qrCodes || []).filter(q => q.showOnInvoice && q.link);
  clearDynamicInvoiceQRBoxes();
  const footerBox = document.getElementById('invoice-qr-box');
  const footerEntries = list.filter(q => !q.position || q.position === 'footer');
  const cornerEntries = list.filter(q => q.position && q.position !== 'footer');

  if (footerBox) {
    if (footerEntries.length) {
      footerBox.style.display = 'flex';
      footerBox.innerHTML = footerEntries.map((q, i) => `
        <div class="inv-qr-item">
          <div class="inv-qr-img-wrap" id="invoice-qr-canvas-f${i}"></div>
          <div class="inv-qr-label">${q.caption || 'امسح الكود'}</div>
        </div>`).join('');
      footerEntries.forEach((q, i) => renderQRInto(`invoice-qr-canvas-f${i}`, q.link, 90));
    } else {
      footerBox.style.display = 'none';
      footerBox.innerHTML = '';
    }
  }

  const paper = document.getElementById('invoice-paper');
  if (paper) {
    cornerEntries.forEach((q, i) => {
      const wrap = document.createElement('div');
      wrap.className = `inv-qr-corner inv-qr-corner-${q.position}`;
      const canvasId = `invoice-qr-canvas-c${i}`;
      wrap.innerHTML = `<div class="inv-qr-img-wrap" id="${canvasId}"></div>${q.caption ? `<div class="inv-qr-label">${q.caption}</div>` : ''}`;
      paper.appendChild(wrap);
      renderQRInto(canvasId, q.link, 66);
    });
  }
}

// بيرسم كل الـ QR codes المفعّلة على بطاقة الـ ID (عميل أو عضو فريق)
function renderAllIdCardQRCodes() {
  const box = document.getElementById('idcard-qr-box');
  if (!box) return;
  const list = ((DB.settings || {}).qrCodes || []).filter(q => q.showOnIdCard && q.link);
  if (!list.length) { box.style.display = 'none'; box.innerHTML = ''; return; }
  box.style.display = 'flex';
  box.innerHTML = list.map((q, i) => `
    <div class="inv-qr-item">
      <div class="inv-qr-img-wrap" id="idcard-qr-canvas-${i}"></div>
      <div class="inv-qr-label">${q.caption || 'امسح الكود'}</div>
    </div>`).join('');
  list.forEach((q, i) => renderQRInto(`idcard-qr-canvas-${i}`, q.link, 66));
}

// إعدادات ترقيم الفواتير: البادئة، رقم البداية، عدد الأصفار، والتصفير التلقائي
function saveInvoiceNumbering() {
  ensureSettings();
  DB.settings.invoiceNumPrefix = document.getElementById('inv-num-prefix').value;
  DB.settings.invoiceNumStart = parseInt(document.getElementById('inv-num-start').value, 10) || 1000;
  DB.settings.invoiceNumPadding = parseInt(document.getElementById('inv-num-padding').value, 10) || 4;
  DB.settings.invoiceNumReset = document.getElementById('inv-num-reset').value;
  saveDB();
  updateInvoiceNumberPreview();
  toast('تم حفظ إعدادات الترقيم');
}

// بيقرا القيم من فورم الإعدادات نفسها (من غير ما يكون اتحفظ بعد) عشان يوري "الفاتورة الجاية هتبقى رقم كام" لحظيًا
function updateInvoiceNumberPreview() {
  const out = document.getElementById('inv-num-preview-out');
  if (!out) return;
  const prefix = document.getElementById('inv-num-prefix').value || '';
  const start = parseInt(document.getElementById('inv-num-start').value, 10) || 1000;
  const padding = parseInt(document.getElementById('inv-num-padding').value, 10) || 4;
  const resetMode = (DB.settings && DB.settings.invoiceNumReset) || 'none';
  const periodKey = currentInvoicePeriodKey(resetMode);
  const counter = (DB.invoiceCounterPeriodKey !== periodKey || !DB.invoiceCounter) ? start : DB.invoiceCounter + 1;
  out.textContent = prefix + String(counter).padStart(padding, '0');
}

// المعاينة الحية جوه صفحة الإعدادات — بتتحدث فورًا مع أي تغيير في القالب/النصوص/الضريبة/العناصر الظاهرة
function updateInvoicePreview() {
  const paper = document.getElementById('inv-preview-paper');
  if (!paper) return;
  const s = DB.settings || {};
  const tpl = document.querySelector('#invoice-template-grid .theme-card.active')?.dataset.invoiceTemplate || s.invoiceTemplate || 'classic';
  paper.classList.remove(...INVOICE_TEMPLATES.map(t => 'inv-template-' + t));
  paper.classList.add('inv-template-' + tpl);

  const brandName = (document.getElementById('sett-brand-name')?.value || s.brandName || 'اسم الشركة').trim();
  document.getElementById('pv-title').textContent = `${brandName || 'اسم الشركة'} - INVOICE`;

  // الشعار الحقيقي للشركة (أو حرف مبدئي من اسمها لو مفيش شعار) — مع إمكانية إخفاؤه بالكامل من الإعدادات
  const showLogo = document.getElementById('inv-show-logo')?.checked ?? (s.showLogo !== false);
  const pvLogoBox = paper.querySelector('.inv-logo-box');
  const pvLogoImg = document.getElementById('pv-logo-img');
  const pvLogoPh = document.getElementById('pv-logo-ph');
  if (pvLogoBox) pvLogoBox.style.display = showLogo ? '' : 'none';
  if (showLogo && pvLogoImg && pvLogoPh) {
    if (DB.logo) { pvLogoImg.src = DB.logo; pvLogoImg.style.display = 'block'; pvLogoPh.style.display = 'none'; }
    else { pvLogoImg.style.display = 'none'; pvLogoPh.textContent = brandName.charAt(0) || 'ف'; pvLogoPh.style.display = 'flex'; }
  }

  // ختم الشركة الحقيقي (لو تم رفعه من الإعدادات ومفعّل إظهاره)
  const pvStampImg = document.getElementById('pv-stamp-img');
  const showStampChecked = document.getElementById('inv-show-stamp')?.checked ?? (s.showStamp !== false);
  if (pvStampImg) {
    if (DB.stamp && showStampChecked) { pvStampImg.src = DB.stamp; pvStampImg.style.display = 'block'; }
    else { pvStampImg.style.display = 'none'; }
  }

  const welcomeText = document.getElementById('inv-welcome-text')?.value.trim();
  const welcomeEl = document.getElementById('pv-welcome');
  if (welcomeText) { welcomeEl.textContent = welcomeText; welcomeEl.style.display = ''; } else { welcomeEl.style.display = 'none'; }

  const footerText = document.getElementById('inv-footer-text')?.value.trim();
  document.getElementById('pv-footer-text').textContent = footerText || 'Thank you for purchase!';

  const showEmployee = document.getElementById('inv-show-employee')?.checked;
  const employeeLine = document.getElementById('pv-employee-line');
  employeeLine.style.display = showEmployee ? '' : 'none';
  if (showEmployee) document.getElementById('pv-employee-name').textContent = (getCurrentUser() && getCurrentUser().name) || 'اسم الموظف';

  // معاينة حية لتوقيعات الفاتورة: توقيع الموظف الحالي اللي داخل تلقائيًا + أي توقيعات إضافية مفعّلة
  const pvSigsWrap = document.getElementById('pv-signatures');
  if (pvSigsWrap) {
    const cur = getCurrentUser();
    const previewSigs = getActiveInvoiceSignatures(cur);
    pvSigsWrap.className = 'inv-signatures inv-sig-size-' + getSignatureSize();
    pvSigsWrap.innerHTML = previewSigs.map(sig => {
      const isArabicName = /[\u0600-\u06FF]/.test(sig.mark || '');
      return `
      <div class="inv-signature">
        <div class="inv-sign-role-label">${sig.line}</div>
        <div class="inv-sign-line"></div>
        <div class="inv-sign-mark${isArabicName ? ' inv-sign-mark-ar' : ''}">${sig.mark || ''}</div>
      </div>`;
    }).join('');
  }

  const showTaxNumber = document.getElementById('inv-show-tax-number')?.checked;
  const taxNumberLine = document.getElementById('pv-tax-number-line');
  taxNumberLine.style.display = showTaxNumber ? '' : 'none';
  if (showTaxNumber) document.getElementById('pv-tax-number').textContent = document.getElementById('inv-tax-number')?.value.trim() || '—';

  const showUnitPrice = document.getElementById('inv-show-unit-price')?.checked;
  document.getElementById('pv-table').classList.toggle('hide-unit-price', !showUnitPrice);

  const applyTax = document.getElementById('inv-apply-tax')?.checked;
  const taxRow = document.getElementById('pv-tax-row');
  const subtotal = 2000;
  if (applyTax) {
    let rate = parseFloat(document.getElementById('inv-tax-rate')?.value);
    if (isNaN(rate) || rate < 0) rate = 0;
    const taxAmount = Math.round(subtotal * rate) / 100;
    taxRow.style.display = '';
    document.getElementById('pv-tax-label').textContent = `Tax (${rate}%) :`;
    document.getElementById('pv-tax-amount').textContent = fmt(taxAmount) + ' ج.م';
    document.getElementById('pv-total-due').textContent = fmt(subtotal + taxAmount) + ' ج.م';
  } else {
    taxRow.style.display = 'none';
    document.getElementById('pv-total-due').textContent = fmt(subtotal) + ' ج.م';
  }
}

function doPrintInvoice() {
  applyPrintSize();
  const copiesWrap = document.getElementById('invoice-print-copies');
  const copies = Math.max(parseInt((DB.settings && DB.settings.printCopies) || 1, 10), 1);
  // بنستنسخ ورقة الفاتورة بعدد النسخ المطلوب قبل الطباعة، وكل نسخة بتتطبع في ورقة منفصلة (page-break)
  if (copiesWrap && copies > 1) {
    const original = copiesWrap.querySelector('.inv-print-copy');
    for (let i = 1; i < copies; i++) {
      copiesWrap.appendChild(original.cloneNode(true));
    }
  }
  document.body.classList.add('printing-invoice');
  window.print();
}
window.addEventListener('afterprint', () => {
  document.body.classList.remove('printing-invoice');
  // نشيل أي نسخ إضافية اتضافت للطباعة عشان معاينة الشاشة ترجع زي ما كانت (نسخة واحدة بس)
  const copiesWrap = document.getElementById('invoice-print-copies');
  if (copiesWrap) {
    const all = copiesWrap.querySelectorAll('.inv-print-copy');
    all.forEach((el, i) => { if (i > 0) el.remove(); });
  }
});

function fillDealClientSelect(selectedId) {
  const sel = document.getElementById('deal-client');
  if (!DB.clients.length) { sel.innerHTML = `<option value="">أضف عميل أولاً</option>`; return; }
  sel.innerHTML = DB.clients.map(c => `<option value="${c.id}" ${c.id===selectedId?'selected':''}>${c.name}</option>`).join('');
}

// ══════════════════════════════════════════
// DEAL EXPENSES — تكلفة تنفيذ الصفقة (سفر، خامات، وقت...) غير قيمة الصفقة نفسها، عشان نشوف الربح الصافي الحقيقي
// ══════════════════════════════════════════
let dealExpensesDraft = [];
function renderDealExpensesRows() {
  const wrap = document.getElementById('d-expenses-list');
  if (!wrap) return;
  if (!dealExpensesDraft.length) {
    wrap.innerHTML = `<div style="font-size:12px;color:var(--text3);padding:6px 0">مفيش مصاريف مسجّلة على الصفقة دي</div>`;
  } else {
    wrap.innerHTML = dealExpensesDraft.map((ex,i) => `
      <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
        <input class="form-input" style="flex:2" value="${ex.desc}" placeholder="وصف المصروف" onchange="dealExpensesDraft[${i}].desc=this.value">
        <input class="form-input" style="flex:1" type="number" value="${ex.amount}" placeholder="القيمة" onchange="dealExpensesDraft[${i}].amount=parseFloat(this.value)||0;updateDealExpensesTotal()">
        <button class="act-btn danger" type="button" onclick="removeDealExpenseRow(${i})">${IC.trash}</button>
      </div>
    `).join('');
  }
  updateDealExpensesTotal();
}
function addDealExpenseRow() {
  dealExpensesDraft.push({desc:'', amount:0});
  renderDealExpensesRows();
}
function removeDealExpenseRow(i) {
  dealExpensesDraft.splice(i,1);
  renderDealExpensesRows();
}
function updateDealExpensesTotal() {
  const el = document.getElementById('d-expenses-total');
  if (!el) return;
  const total = dealExpensesDraft.reduce((a,e)=>a+(parseFloat(e.amount)||0),0);
  el.textContent = total ? `إجمالي المصاريف: ${fmt(total)} ج.م` : '';
}

function openAddDeal(clientId=null) {
  editingDealId = null;
  document.getElementById('modal-deal-title').textContent = 'صفقة جديدة';
  fillDealClientSelect(clientId);
  populateServiceSelects('سيستم + تسعير + مينيو');
  document.getElementById('d-cost').value = '';
  document.getElementById('d-discount-type').value = 'none';
  document.getElementById('d-discount-value').value = '';
  document.getElementById('d-discount-preview-wrap').style.display = 'none';
  document.getElementById('d-collected').value = '';
  populatePaymentMethodSelect('d-payment-method');
  document.getElementById('d-status').value = 'قيد المتابعة';
  populateAgentOptions('d-agent', 'قعرو');
  document.getElementById('d-date').value = todayISO();
  document.getElementById('d-notes').value = '';
  document.getElementById('d-commission-override-toggle').checked = false;
  document.getElementById('d-commission-override-type').value = 'percent';
  document.getElementById('d-commission-override-value').value = '';
  document.getElementById('d-commission-override-fields').style.display = 'none';
  document.getElementById('d-cancel-reason').value = CANCEL_REASONS[0];
  toggleCancelReasonField();
  dealExpensesDraft = [];
  renderDealExpensesRows();
  openModal('modal-deal');
  updateDealCommissionPreview();
}

function editDeal(id) {
  const d = (DB.deals||[]).find(x=>x.id===id);
  if (!d) return;
  editingDealId = id;
  document.getElementById('modal-deal-title').textContent = 'تعديل الصفقة';
  fillDealClientSelect(d.clientId);
  populateServiceSelects(d.service);
  document.getElementById('d-cost').value = d.originalCost || d.cost;
  document.getElementById('d-discount-type').value = d.discountType || 'none';
  document.getElementById('d-discount-value').value = d.discountValue || '';
  document.getElementById('d-collected').value = d.collected;
  populatePaymentMethodSelect('d-payment-method', d.paymentMethod);
  document.getElementById('d-status').value = d.status;
  populateAgentOptions('d-agent', d.agent);
  document.getElementById('d-date').value = ddmmToISO(d.date);
  document.getElementById('d-notes').value = d.notes||'';
  document.getElementById('d-cancel-reason').value = d.cancelReason || CANCEL_REASONS[0];
  toggleCancelReasonField();
  const ov = d.commissionOverride;
  document.getElementById('d-commission-override-toggle').checked = !!ov;
  document.getElementById('d-commission-override-type').value = ov ? ov.type : 'percent';
  document.getElementById('d-commission-override-value').value = ov ? ov.value : '';
  document.getElementById('d-commission-override-fields').style.display = ov ? 'flex' : 'none';
  dealExpensesDraft = JSON.parse(JSON.stringify(d.expenses || []));
  renderDealExpensesRows();
  openModal('modal-deal');
  updateDealDiscountPreview();
  updateDealCommissionPreview();
}

// بيحسب قيمة الخصم والإجمالي الصافي بناءً على نوع وقيمة الخصم المدخلة
function computeDealDiscount(baseCost, discountType, discountValue) {
  baseCost = parseFloat(baseCost) || 0;
  discountValue = parseFloat(discountValue) || 0;
  let discountAmount = 0;
  if (discountType === 'percent') discountAmount = baseCost * Math.min(discountValue, 100) / 100;
  else if (discountType === 'fixed') discountAmount = Math.min(discountValue, baseCost);
  const finalCost = Math.max(0, baseCost - discountAmount);
  return { discountAmount, finalCost };
}

// بيحدّث معاينة الإجمالي بعد الخصم لحظيًا في فورم الصفقة
function updateDealDiscountPreview() {
  const baseCost = document.getElementById('d-cost').value;
  const discountType = document.getElementById('d-discount-type').value;
  const discountValue = document.getElementById('d-discount-value').value;
  const wrap = document.getElementById('d-discount-preview-wrap');
  if (discountType === 'none' || !parseFloat(discountValue)) { wrap.style.display = 'none'; updateDealCommissionPreview(); return; }
  const { discountAmount, finalCost } = computeDealDiscount(baseCost, discountType, discountValue);
  wrap.style.display = '';
  document.getElementById('d-discount-preview').textContent = `${fmt(finalCost)} ج.م (خصم ${fmt(discountAmount)} ج.م)`;
  updateDealCommissionPreview();
}

// ══════════════════════════════════════════
// حاسبة عرض سعر سريعة (Quick Quote) — أداة بسيطة قبل عمل صفقة رسمية،
// مفيدة وانت بتتفاوض مع العميل تليفونيًا: تدخل الخدمة والخصم فيقولك التكلفة النهائية والعمولة المتوقعة
// ══════════════════════════════════════════
function openQuickQuote() {
  const sel = document.getElementById('qq-service');
  sel.innerHTML = buildServiceOptions();
  document.getElementById('qq-discount-type').value = 'none';
  document.getElementById('qq-discount-value').value = '';
  qqSyncCostFromService();
  updateQuickQuote();
  openModal('modal-quick-quote');
}
// لما تختار خدمة، بيحط سعرها الافتراضي في حقل التكلفة (لسه تقدر تعدّله يدويًا)
function qqSyncCostFromService() {
  const svc = getServices().find(s => s.name === document.getElementById('qq-service').value);
  document.getElementById('qq-cost').value = svc ? svc.price : '';
  updateQuickQuote();
}
function updateQuickQuote() {
  const serviceName = document.getElementById('qq-service').value;
  const baseCost = document.getElementById('qq-cost').value;
  const discountType = document.getElementById('qq-discount-type').value;
  const discountValue = document.getElementById('qq-discount-value').value;
  const { discountAmount, finalCost } = computeDealDiscount(baseCost, discountType, discountValue);
  const commission = computeServiceRateCommission(serviceName, finalCost);
  document.getElementById('qq-result-final').textContent = fmt(finalCost) + ' ج.م';
  document.getElementById('qq-result-discount').textContent = discountAmount > 0 ? `خصم ${fmt(discountAmount)} ج.م` : 'بدون خصم';
  document.getElementById('qq-result-commission').textContent = fmt(commission.total) + ' ج.م' + (commission.rate ? ` (${commission.rate}%)` : '');
  qqLastResult = { serviceName, baseCost: parseFloat(baseCost)||0, discountType, discountValue, discountAmount, finalCost, commission: commission.total };
}
let qqLastResult = null;
async function copyQuickQuote() {
  if (!qqLastResult) return;
  const r = qqLastResult;
  const lines = [
    `الخدمة: ${r.serviceName}`,
    `السعر الأساسي: ${fmt(r.baseCost)} ج.م`,
    r.discountAmount > 0 ? `الخصم: ${fmt(r.discountAmount)} ج.م` : null,
    `الإجمالي النهائي: ${fmt(r.finalCost)} ج.م`
  ].filter(Boolean);
  try {
    await navigator.clipboard.writeText(lines.join('\n'));
    toast('تم نسخ تفاصيل العرض');
  } catch(e) {
    toast('تعذّر النسخ', 'error');
  }
}
// بيحوّل نتيجة الحاسبة لصفقة رسمية جاهزة — بيفتح فورم إضافة صفقة ومعبّي بيانات العرض مسبقًا
function convertQuickQuoteToDeal() {
  if (!qqLastResult) return;
  const r = qqLastResult;
  closeModal('modal-quick-quote');
  openAddDeal();
  document.getElementById('d-service').value = r.serviceName;
  document.getElementById('d-cost').value = r.baseCost;
  document.getElementById('d-discount-type').value = r.discountType;
  document.getElementById('d-discount-value').value = r.discountValue;
  updateDealDiscountPreview();
}

// ══════════════════════════════════════════
// COMMISSION SYSTEM — شرائح مرنة حسب عدد الصفقات في الشهر + استثناءات لكل صفقة
// ══════════════════════════════════════════
function getCommissionTiersConfig() {
  ensureSettings();
  if (!DB.settings.commissionTiers) DB.settings.commissionTiers = [];
  return DB.settings.commissionTiers;
}

function renderCommissionTiersSettings() {
  const wrap = document.getElementById('commission-tiers-list');
  if (!wrap) return;
  const tiers = getCommissionTiersConfig();
  if (!tiers.length) {
    wrap.innerHTML = `<div style="font-size:12px;color:var(--text3)">لسه مفيش شرائح مُعرّفة — العمولة هتتحسب حسب نسبة كل خدمة كالمعتاد</div>`;
    return;
  }
  let startCount = 1;
  wrap.innerHTML = tiers.map((t, i) => {
    const hasLimit = t.upto !== null && t.upto !== undefined && t.upto !== '';
    const rangeLabel = hasLimit ? `من الصفقة ${startCount} إلى ${t.upto}` : `من الصفقة ${startCount} وبعدها (بلا حد)`;
    if (hasLimit) startCount = parseInt(t.upto, 10) + 1;
    return `
    <div class="signature-row" style="align-items:center;flex-wrap:wrap;gap:10px">
      <div style="flex:1;min-width:150px">
        <div class="signature-row-role">شريحة ${i + 1}</div>
        <div class="signature-row-name">${rangeLabel}</div>
      </div>
      <input class="form-input" type="number" min="1" placeholder="حد الصفقات (فاضي = بلا حد)" style="width:170px" value="${hasLimit ? t.upto : ''}" onchange="updateCommissionTierField(${i},'upto',this.value)">
      <input class="form-input" type="number" min="0" max="100" placeholder="النسبة %" style="width:90px" value="${t.rate ?? ''}" onchange="updateCommissionTierField(${i},'rate',this.value)">
      <input class="form-input" type="number" min="0" placeholder="بونص عند اكتمال الشريحة" style="width:180px" value="${t.bonus || ''}" onchange="updateCommissionTierField(${i},'bonus',this.value)">
      <button type="button" class="status-tag-del" onclick="removeCommissionTier(${i})" title="حذف الشريحة">&#x2715;</button>
    </div>`;
  }).join('');
}

function addCommissionTier() {
  const tiers = getCommissionTiersConfig();
  tiers.push({ upto: null, rate: 10, bonus: 0 });
  saveDB();
  renderCommissionTiersSettings();
  updateDealCommissionPreview();
  toast('تمت إضافة شريحة عمولة جديدة');
}

function updateCommissionTierField(i, field, value) {
  const tiers = getCommissionTiersConfig();
  if (!tiers[i]) return;
  if (field === 'upto') tiers[i].upto = String(value).trim() === '' ? null : (parseInt(value, 10) || null);
  else tiers[i][field] = parseFloat(value) || 0;
  saveDB();
  renderCommissionTiersSettings();
  updateDealCommissionPreview();
}

async function removeCommissionTier(i) {
  if (!(await confirmDialog('حذف هذه الشريحة؟'))) return;
  const tiers = getCommissionTiersConfig();
  tiers.splice(i, 1);
  saveDB();
  renderCommissionTiersSettings();
  updateDealCommissionPreview();
  toast('تم حذف الشريحة', 'error');
}

// بيرجع كل صفقات مندوب معين في شهر معين (YYYY-MM)، مع إمكانية استثناء صفقة معينة (زي الصفقة اللي بنعدلها دلوقتي)
function getAgentMonthDeals(agent, ym, excludeId = null) {
  return (DB.deals || []).filter(d => d.agent === agent && (d.date || '').slice(0, 7) === ym && d.id !== excludeId);
}

// بيدور على الشريحة المناسبة لترتيب صفقة معينة في الشهر (rank بيبدأ من 1)
function findCommissionTierForRank(tiers, rank) {
  for (const t of tiers) {
    const hasLimit = t.upto !== null && t.upto !== undefined && t.upto !== '';
    if (!hasLimit) return t;
    if (rank <= parseInt(t.upto, 10)) return t;
  }
  return tiers[tiers.length - 1] || null;
}

// بيحسب عمولة صفقة تلقائيًا حسب النظام (لو مفعّل)، بيرجع null لو مفيش شرائح مُعرّفة
function computeAutoDealCommission(agent, dateStr, cost, excludeId = null) {
  const tiers = getCommissionTiersConfig();
  if (!tiers.length || !agent || !dateStr) return null;
  const ym = String(dateStr).slice(0, 7);
  if (!/^\d{4}-\d{2}$/.test(ym)) return null;
  const rank = getAgentMonthDeals(agent, ym, excludeId).length + 1;
  const tier = findCommissionTierForRank(tiers, rank);
  if (!tier) return null;
  const rate = tier.rate || 0;
  const commissionAmount = Math.round((cost || 0) * rate) / 100;
  const hasLimit = tier.upto !== null && tier.upto !== undefined && tier.upto !== '';
  const bonus = (hasLimit && rank === parseInt(tier.upto, 10)) ? (tier.bonus || 0) : 0;
  return { rank, rate, commissionAmount, bonus, total: commissionAmount + bonus };
}

// بيحسب عمولة صفقة اعتمادًا على نسبة العمولة الثابتة المسجّلة للخدمة نفسها في صفحة الخدمات (fallback لما نظام الشرائح مش مفعّل)
function computeServiceRateCommission(serviceName, cost) {
  const svc = getServices().find(s => s.name === serviceName);
  const rate = svc ? (svc.commissionRate || 0) : 0;
  const commissionAmount = Math.round((cost || 0) * rate) / 100;
  return { rank: null, rate, commissionAmount, bonus: 0, total: commissionAmount, source: 'service' };
}

// بيحسب عمولة صفقة موجودة فعليًا — بياخد في الاعتبار الاستثناء اليدوي لو موجود، وإلا نظام الشرائح لو مفعّل،
// وإلا بيرجع تلقائيًا لنسبة العمولة الثابتة المسجّلة للخدمة (زي ما موضّح في هينت الإعدادات)
function getDealCommissionAmount(deal) {
  if (!deal) return 0;
  const cost = deal.cost || 0;
  if (deal.commissionOverride) {
    const { type, value } = deal.commissionOverride;
    return type === 'percent' ? Math.round(cost * (value || 0)) / 100 : (value || 0);
  }
  const result = computeAutoDealCommission(deal.agent, deal.date, cost, deal.id);
  if (result) return result.total;
  return computeServiceRateCommission(deal.service, cost).total;
}

function toggleDealCommissionOverride() {
  const on = document.getElementById('d-commission-override-toggle').checked;
  document.getElementById('d-commission-override-fields').style.display = on ? 'flex' : 'none';
  updateDealCommissionPreview();
}

// معاينة حية لعمولة الصفقة جوه فورم الصفقة نفسه — بتتحدث مع أي تغيير في التكلفة/الخصم/المندوب/التاريخ/الاستثناء
function updateDealCommissionPreview() {
  const box = document.getElementById('d-commission-auto-preview');
  if (!box) return;
  const agent = document.getElementById('d-agent')?.value;
  const date = document.getElementById('d-date')?.value;
  const cost = document.getElementById('d-cost')?.value;
  const discountType = document.getElementById('d-discount-type')?.value;
  const discountValue = document.getElementById('d-discount-value')?.value;
  const { finalCost } = computeDealDiscount(cost, discountType, discountValue);

  const overrideOn = document.getElementById('d-commission-override-toggle')?.checked;
  if (overrideOn) {
    const ot = document.getElementById('d-commission-override-type').value;
    const ov = parseFloat(document.getElementById('d-commission-override-value').value) || 0;
    const amount = ot === 'percent' ? Math.round(finalCost * ov) / 100 : ov;
    box.textContent = `${fmt(amount)} ج.م (استثناء يدوي)`;
    return;
  }
  const result = computeAutoDealCommission(agent, date, finalCost, editingDealId);
  if (!result) {
    const service = document.getElementById('d-service')?.value;
    const fb = computeServiceRateCommission(service, finalCost);
    box.textContent = fb.rate
      ? `${fmt(fb.total)} ج.م — نسبة العمولة الثابتة للخدمة دي (${fb.rate}%)، مفيش شرائح شهرية مفعّلة`
      : 'مفيش نسبة عمولة محددة لا في الشرائح ولا في الخدمة دي — العمولة هتبقى 0 إلا لو حددت استثناء يدوي';
    return;
  }
  let txt = `${fmt(result.total)} ج.م — دي صفقة رقم ${result.rank} للمندوب ده الشهر ده (${result.rate}%)`;
  if (result.bonus) txt += ` + بونص ${fmt(result.bonus)} ج.م`;
  box.textContent = txt;
}

// ══════════════════════════════════════════
// ID CARDS — بطاقة هوية قابلة للطباعة لكل عميل ولكل عضو فريق، بحقول وصورة قابلين للتخصيص من الإعدادات
// ══════════════════════════════════════════
const ID_CARD_CLIENT_FIELD_DEFS = [
  { key: 'photo',   label: 'صورة العميل' },
  { key: 'id',      label: 'رقم ID' },
  { key: 'owner',   label: 'اسم صاحب النشاط / جهة الاتصال' },
  { key: 'service', label: 'الخدمة' },
  { key: 'status',  label: 'الحالة' },
  { key: 'phone',   label: 'رقم الهاتف' },
  { key: 'address', label: 'العنوان' },
  { key: 'agent',   label: 'المندوب المسؤول' },
  { key: 'date',    label: 'تاريخ التعاقد' },
  { key: 'notes',   label: 'ملاحظات' },
];
const ID_CARD_TEAM_FIELD_DEFS = [
  { key: 'photo',      label: 'الصورة الشخصية' },
  { key: 'id',         label: 'رقم ID' },
  { key: 'role',       label: 'المسمى الوظيفي' },
  { key: 'phone',      label: 'رقم الهاتف' },
  { key: 'joined',     label: 'تاريخ الانضمام' },
  { key: 'clients',    label: 'عدد العملاء' },
  { key: 'completed',  label: 'الصفقات المكتملة' },
  { key: 'commission', label: 'إجمالي العمولة' },
  { key: 'notes',      label: 'ملاحظات' },
];

// إعدادات بطاقات الـ ID (أي حقول تظهر) — قابلة للتغيير في أي وقت من تاب "بطاقات ID" في الإعدادات
function getIdCardConfig() {
  ensureSettings();
  if (!DB.settings.idCard) DB.settings.idCard = {};
  const cfg = DB.settings.idCard;
  if (!cfg.client) cfg.client = {};
  if (!cfg.team) cfg.team = {};
  ID_CARD_CLIENT_FIELD_DEFS.forEach(f => { if (cfg.client[f.key] === undefined) cfg.client[f.key] = true; });
  ID_CARD_TEAM_FIELD_DEFS.forEach(f => { if (cfg.team[f.key] === undefined) cfg.team[f.key] = true; });
  return cfg;
}

function toggleIdCardField(type, key, checked) {
  const cfg = getIdCardConfig();
  cfg[type][key] = checked;
  saveDB();
  if (currentIdCardType === type && document.getElementById('modal-idcard')?.classList.contains('open')) renderIdCardModal();
}

function renderIdCardSettings() {
  const cfg = getIdCardConfig();
  const clientWrap = document.getElementById('idcard-client-fields');
  const teamWrap = document.getElementById('idcard-team-fields');
  if (clientWrap) {
    clientWrap.innerHTML = ID_CARD_CLIENT_FIELD_DEFS.map(f => `
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;padding:6px 0;cursor:pointer">
        <input type="checkbox" ${cfg.client[f.key] ? 'checked' : ''} onchange="toggleIdCardField('client','${f.key}',this.checked)" style="width:15px;height:15px">
        <span>${f.label}</span>
      </label>`).join('');
  }
  if (teamWrap) {
    teamWrap.innerHTML = ID_CARD_TEAM_FIELD_DEFS.map(f => `
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;padding:6px 0;cursor:pointer">
        <input type="checkbox" ${cfg.team[f.key] ? 'checked' : ''} onchange="toggleIdCardField('team','${f.key}',this.checked)" style="width:15px;height:15px">
        <span>${f.label}</span>
      </label>`).join('');
  }
}

// رقم ID ثابت لكل عميل/مندوب — مبني على رقم السجل الداخلي، فمش بيتغيّر أبدًا مهما اتعدّل بياناته
function getClientDisplayId(c) { return 'CU-' + String(c.id).padStart(4, '0'); }
function getAgentDisplayId(m) { return 'AG-' + String(m.id).padStart(4, '0'); }

let currentIdCardType = null;   // 'client' | 'team'
let currentIdCardEntityId = null;

function openClientIdCard(clientId) {
  const c = DB.clients.find(x => x.id === clientId);
  if (!c) return;
  currentIdCardType = 'client';
  currentIdCardEntityId = clientId;
  renderIdCardModal();
  openModal('modal-idcard');
}

function openTeamIdCard(memberId) {
  const m = DB.team.find(x => x.id === memberId);
  if (!m) return;
  currentIdCardType = 'team';
  currentIdCardEntityId = memberId;
  renderIdCardModal();
  openModal('modal-idcard');
}

function renderIdCardModal() {
  const cfg = getIdCardConfig();
  const brandName = (DB.settings && DB.settings.brandName) || 'Fateen Digital Solutions';
  const logoImg = document.getElementById('idcard-company-logo');
  if (logoImg) { if (DB.logo) { logoImg.src = DB.logo; logoImg.style.display = 'block'; } else { logoImg.style.display = 'none'; } }
  const nameEl = document.getElementById('idcard-company-name');
  if (nameEl) nameEl.textContent = brandName;

  const photoImg = document.getElementById('idcard-photo-img');
  const photoPh = document.getElementById('idcard-photo-ph');
  const rows = document.getElementById('idcard-rows');
  const removePhotoBtn = document.getElementById('idcard-remove-photo-btn');
  const idBadge = document.getElementById('idcard-id-code');

  function fillPhoto(entity, fieldsOn) {
    if (entity.photo && fieldsOn) { photoImg.src = entity.photo; photoImg.style.display = 'block'; photoPh.style.display = 'none'; }
    else { photoImg.style.display = 'none'; photoPh.style.display = fieldsOn !== false ? 'flex' : 'none'; photoPh.textContent = (entity.name || '?').charAt(0); }
    document.getElementById('idcard-photo-box').style.display = fieldsOn !== false ? '' : 'none';
    removePhotoBtn.style.display = (entity.photo && fieldsOn !== false) ? '' : 'none';
  }

  if (currentIdCardType === 'client') {
    const c = DB.clients.find(x => x.id === currentIdCardEntityId);
    if (!c) return;
    const f = cfg.client;
    document.getElementById('idcard-title').textContent = 'بطاقة عميل';
    document.getElementById('idcard-name').textContent = c.name;
    document.getElementById('idcard-subtitle').textContent = f.service !== false ? (c.service || '') : '';
    idBadge.textContent = f.id !== false ? getClientDisplayId(c) : '';
    idBadge.style.display = f.id !== false ? '' : 'none';
    fillPhoto(c, f.photo);
    const rowDefs = [
      { on: f.owner,   label: 'صاحب النشاط',       value: c.owner || '—' },
      { on: f.status,  label: 'الحالة',             value: c.status || '—' },
      { on: f.phone,   label: 'الهاتف',             value: c.phone || '—' },
      { on: f.address, label: 'العنوان',            value: c.address || '—' },
      { on: f.agent,   label: 'المندوب المسؤول',   value: c.agent || '—' },
      { on: f.date,    label: 'تاريخ التعاقد',      value: formatDateDisplay(c.date) },
      { on: f.notes,   label: 'ملاحظات',            value: c.notes || '—' },
    ];
    rows.innerHTML = rowDefs.filter(r => r.on !== false).map(r =>
      `<div class="idcard-row"><span class="idcard-row-label">${r.label}</span><span class="idcard-row-value">${r.value}</span></div>`).join('');
  } else {
    const m = DB.team.find(x => x.id === currentIdCardEntityId);
    if (!m) return;
    const f = cfg.team;
    document.getElementById('idcard-title').textContent = 'بطاقة فريق العمل';
    document.getElementById('idcard-name').textContent = m.name;
    document.getElementById('idcard-subtitle').textContent = f.role !== false ? (m.role || '') : '';
    idBadge.textContent = f.id !== false ? getAgentDisplayId(m) : '';
    idBadge.style.display = f.id !== false ? '' : 'none';
    fillPhoto(m, f.photo);
    const rowDefs = [
      { on: f.phone,      label: 'الهاتف',            value: m.phone || '—' },
      { on: f.joined,     label: 'تاريخ الانضمام',    value: formatDateDisplay(m.joined) },
      { on: f.clients,    label: 'عدد العملاء',       value: String(m.clients || 0) },
      { on: f.completed,  label: 'صفقات مكتملة',      value: String(m.completed || 0) },
      { on: f.commission, label: 'إجمالي العمولة',    value: fmt(m.commission || 0) + ' ج.م' },
      { on: f.notes,      label: 'ملاحظات',           value: m.notes || '—' },
    ];
    rows.innerHTML = rowDefs.filter(r => r.on !== false).map(r =>
      `<div class="idcard-row"><span class="idcard-row-label">${r.label}</span><span class="idcard-row-value">${r.value}</span></div>`).join('');
  }
  renderAllIdCardQRCodes();
}

function uploadIdCardPhoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { toast('حجم الصورة يتجاوز 2 ميجابايت', 'error'); return; }
  const reader = new FileReader();
  reader.onload = ev => {
    if (currentIdCardType === 'client') {
      const c = DB.clients.find(x => x.id === currentIdCardEntityId);
      if (c) c.photo = ev.target.result;
    } else {
      const m = DB.team.find(x => x.id === currentIdCardEntityId);
      if (m) m.photo = ev.target.result;
    }
    saveDB();
    renderIdCardModal();
    toast('تم تحديث الصورة');
  };
  reader.readAsDataURL(file);
  e.target.value = '';
}

async function removeIdCardPhoto() {
  if (!(await confirmDialog('حذف صورة البطاقة؟'))) return;
  if (currentIdCardType === 'client') {
    const c = DB.clients.find(x => x.id === currentIdCardEntityId);
    if (c) c.photo = null;
  } else {
    const m = DB.team.find(x => x.id === currentIdCardEntityId);
    if (m) m.photo = null;
  }
  saveDB();
  renderIdCardModal();
  toast('تم حذف الصورة', 'error');
}

function doPrintIdCard() {
  document.body.classList.add('printing-idcard');
  window.print();
}
window.addEventListener('afterprint', () => {
  document.body.classList.remove('printing-idcard');
});

function saveDeal() {
  const clientId = parseInt(document.getElementById('deal-client').value);
  const service = document.getElementById('d-service').value;
  const cost = document.getElementById('d-cost').value;
  const discountType = document.getElementById('d-discount-type').value;
  const discountValue = document.getElementById('d-discount-value').value;
  const collected = document.getElementById('d-collected').value;
  const date = document.getElementById('d-date').value;
  const ok = runValidation([
    {id:'deal-client', value:clientId, test:v=>!isNaN(v)&&v>0, message:'اختر العميل أولاً'},
    {id:'d-service', value:service, test:isRequired, message:'اختر الخدمة'},
    {id:'d-cost', value:cost, test:isNonNegNum, message:'قيمة الصفقة لازم تكون رقم صحيح 0 أو أكبر'},
    {id:'d-discount-value', value:discountValue||0, test:isNonNegNum, message:'قيمة الخصم لازم تكون رقم صحيح 0 أو أكبر'},
    {id:'d-collected', value:collected, test:isNonNegNum, message:'المبلغ المحصّل لازم يكون رقم صحيح 0 أو أكبر'},
    {id:'d-date', value:date, test:isRequired, message:'اختر التاريخ'},
  ]);
  if (!ok) return;
  if (discountType === 'percent' && Number(discountValue) > 100) {
    document.getElementById('d-discount-value').classList.add('field-invalid');
    toast('نسبة الخصم مينفعش تكون أكبر من 100%', 'error');
    return;
  }
  // حد أقصى للخصم من الإعدادات — المدير/المطور مستثنون
  const maxDiscount = ensureSettings().maxDiscountPercent;
  if (discountType === 'percent' && maxDiscount != null && Number(discountValue) > maxDiscount && !isDiscountCapExempt()) {
    document.getElementById('d-discount-value').classList.add('field-invalid');
    toast(`الخصم أعلى من الحد الأقصى المسموح (${maxDiscount}%) — كلّم المدير للموافقة`, 'error');
    return;
  }
  const { discountAmount, finalCost } = computeDealDiscount(cost, discountType, discountValue);
  if (Number(collected) > finalCost) {
    document.getElementById('d-collected').classList.add('field-invalid');
    toast('المبلغ المحصّل مينفعش يكون أكبر من الإجمالي بعد الخصم', 'error');
    return;
  }
  const newStatus = document.getElementById('d-status').value;
  const newCollected = parseFloat(collected)||0;
  const hasDiscount = discountType !== 'none' && discountAmount > 0;
  const commissionOverrideOn = document.getElementById('d-commission-override-toggle').checked;
  const commissionOverride = commissionOverrideOn ? {
    type: document.getElementById('d-commission-override-type').value,
    value: parseFloat(document.getElementById('d-commission-override-value').value) || 0
  } : null;
  const obj = {
    clientId,
    service,
    cost: finalCost,
    originalCost: hasDiscount ? (parseFloat(cost)||0) : null,
    discountType: hasDiscount ? discountType : null,
    discountValue: hasDiscount ? (parseFloat(discountValue)||0) : null,
    collected: newCollected,
    paymentMethod: document.getElementById('d-payment-method').value,
    status: newStatus,
    agent: document.getElementById('d-agent').value,
    date,
    notes: document.getElementById('d-notes').value.trim(),
    commissionOverride,
    cancelReason: newStatus === 'ملغي' ? document.getElementById('d-cancel-reason').value : null,
    expenses: dealExpensesDraft.filter(e=>e.desc || e.amount).map(e=>({desc:e.desc||'', amount:parseFloat(e.amount)||0})),
  };
  if (!DB.deals) DB.deals = [];
  if (editingDealId) {
    const idx = DB.deals.findIndex(x=>x.id===editingDealId);
    const prevStatus = DB.deals[idx].status;
    DB.deals[idx] = {...DB.deals[idx], ...obj};
    if (prevStatus !== newStatus) DB.deals[idx].statusUpdatedAt = todayISO();
    else if (!DB.deals[idx].statusUpdatedAt) DB.deals[idx].statusUpdatedAt = todayISO();
    trackStatusTransition(obj.agent, prevStatus, newStatus);
    logActivity('تعديل صفقة', `${(DB.clients.find(c=>c.id===clientId)||{}).name||''} — ${service}`);
    toast('تم تحديث الصفقة');
  } else {
    const maxId = DB.deals.reduce((m,x)=>Math.max(m,x.id),0);
    DB.deals.push({id: maxId+1, ...obj, statusUpdatedAt: todayISO()});
    trackStatusTransition(obj.agent, null, newStatus);
    logActivity('إضافة صفقة', `${(DB.clients.find(c=>c.id===clientId)||{}).name||''} — ${service}`);
    toast('تم إضافة الصفقة بنجاح');
    if (newCollected > 0) autoUpdateMonthlyTarget(obj.date, newCollected);
  }
  syncClientFromDeals(clientId);
  saveDB(); closeModal('modal-deal'); renderPage(currentPage);
}

async function deleteDeal(id) {
  if (!(await confirmDialog('هل تريد حذف هذه الصفقة؟'))) return;
  const d = (DB.deals||[]).find(x=>x.id===id);
  const clientId = d ? d.clientId : null;
  DB.deals = (DB.deals||[]).filter(x=>x.id!==id);
  if (clientId) syncClientFromDeals(clientId);
  logActivity('حذف صفقة', d ? `${(DB.clients.find(c=>c.id===clientId)||{}).name||''} — ${d.service||''}` : '');
  saveDB(); toast('تم حذف الصفقة','error'); renderPage(currentPage);
}

// ══════════════════════════════════════════
// TARGETS
// ══════════════════════════════════════════
function renderTargets() {
  const yearTargets = getYearTargets(currentTargetsYear);
  const totalTarget = yearTargets.reduce((a,x)=>a+x.target,0);
  const totalActual = yearTargets.reduce((a,x)=>a+x.actual,0);
  const completed = yearTargets.filter(t=>t.actual>=t.target&&t.target>0).length;
  const annPct = pct(totalActual,totalTarget);

  // زرار اختيار السنة فوق الصفحة
  const pageYearSel = document.getElementById('targets-page-year-select');
  if (pageYearSel) {
    const years = availableTargetYears();
    pageYearSel.innerHTML = years.map(y=>`<option value="${y}" ${y===currentTargetsYear?'selected':''}>${y}</option>`).join('');
  }

  document.getElementById('targets-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.target}</div>
      <div class="stat-label">الهدف السنوي</div>
      <div class="stat-value">${fmt(totalTarget)}</div>
      <div class="stat-sub">ج.م لعام ${currentTargetsYear}</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon" style="color:var(--green)">${IC.money}</div>
      <div class="stat-label">المحصل الفعلي</div>
      <div class="stat-value">${fmt(totalActual)}</div>
      <div class="stat-sub">${annPct}% من الهدف</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.ok_circle}</div>
      <div class="stat-label">أشهر تجاوزت التارجت</div>
      <div class="stat-value">${completed}</div>
      <div class="stat-sub">من 12 شهر</div>
    </div>
    <div class="stat-card red">
      <div class="stat-icon" style="color:var(--red)">${IC.chart}</div>
      <div class="stat-label">المتبقي للهدف</div>
      <div class="stat-value">${fmt(totalTarget-totalActual)}</div>
      <div class="stat-sub">ج.م متبقي</div>
    </div>
  `;

  document.getElementById('targets-grid').innerHTML = yearTargets.map(t=>{
    const p = t.target ? pct(t.actual, t.target) : 0;
    const exceeded = t.actual >= t.target && t.target > 0;
    const hasData = t.actual > 0;
    return `<div class="target-card">
      <div class="target-month">${t.month}</div>
      <div class="target-bar">
        <span style="color:var(--text2)">${fmt(t.actual)}</span>
        <span style="color:var(--text3)">/ ${fmt(t.target)}</span>
      </div>
      <div class="progress-bar" style="margin-bottom:8px">
        <div class="progress-fill ${exceeded?'progress-green':'progress-gold'}" style="width:${Math.min(p,100)}%"></div>
      </div>
      <div class="target-pct ${exceeded?'target-exceeded':hasData?'target-active':'target-pending'}">
        ${hasData ? p+'%' : '—'}
      </div>
    </div>`;
  }).join('');

  document.getElementById('targets-tbody').innerHTML = yearTargets.map(t=>{
    const diff = t.actual - t.target;
    const p = t.target ? pct(t.actual,t.target) : 0;
    return `<tr>
      <td style="font-weight:700">${t.month}</td>
      <td class="td-amount">${fmt(t.target)}</td>
      <td class="td-amount" style="color:var(--green)">${fmt(t.actual)}</td>
      <td class="td-amount" style="color:${diff>=0?'var(--green)':'var(--red)'}">${diff>=0?'+':''}${fmt(diff)}</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div class="progress-bar" style="width:80px;flex-shrink:0">
            <div class="progress-fill ${t.actual>=t.target&&t.target>0?'progress-green':'progress-gold'}" style="width:${Math.min(p,100)}%"></div>
          </div>
          <span style="font-size:12px;font-weight:700">${p}%</span>
        </div>
      </td>
      <td>${t.clientsTarget}</td>
      <td>${t.clientsActual}</td>
      <td>${statusBadge2(t.status)}</td>
    </tr>`;
  }).join('');

  renderTargetPrediction();
  renderEmployeeTargets();
}

// ══════════════════════════════════════════
// تنبؤ بسيط بالتارجت — بناءً على أداء الشهر الحالي لحد النهارده، بيتوقع هل هيتحقق التارجت ولا لأ
// ومطلوب إيه إضافي يوميًا عشان يوصله
// ══════════════════════════════════════════
function renderTargetPrediction() {
  const box = document.getElementById('target-prediction-box');
  if (!box) return;
  const now = new Date();
  const realYear = now.getFullYear();
  // التنبؤ منطقي بس لو بنعرض سنة التارجت الحالية فعلاً (مش سنة قديمة أو مستقبلية)
  if (currentTargetsYear !== realYear) { box.innerHTML = ''; return; }

  const monthIdx = now.getMonth();
  const dayOfMonth = now.getDate();
  const daysInMonth = new Date(realYear, monthIdx + 1, 0).getDate();
  const remainingDays = Math.max(daysInMonth - dayOfMonth, 0);

  const yearTargets = getYearTargets(realYear);
  const cur = yearTargets[monthIdx];
  if (!cur || !cur.target) {
    box.innerHTML = `<div class="prediction-card prediction-empty">
      <div class="prediction-icon">${IC.target}</div>
      <div>
        <div class="prediction-title">تنبؤ التارجت</div>
        <div class="prediction-sub">لسه مفيش تارجت متحدد للشهر ده — حدد الهدف الشهري الأول عشان نقدر نتوقع أداءك</div>
      </div>
    </div>`;
    return;
  }

  const projected = dayOfMonth > 0 ? Math.round((cur.actual / dayOfMonth) * daysInMonth) : cur.actual;
  const willHit = projected >= cur.target;
  const remainingAmount = Math.max(cur.target - cur.actual, 0);
  const neededPerDay = remainingDays > 0 ? Math.ceil(remainingAmount / remainingDays) : remainingAmount;
  const p = pct(cur.actual, cur.target);

  // متوسط أداء آخر 3 شهور قبل الشهر ده (لو موجودة) — كمؤشر إضافي على الاتجاه العام
  const pastMonths = yearTargets.slice(Math.max(0, monthIdx - 3), monthIdx).filter(m => m.target > 0);
  const pastAvgPct = pastMonths.length ? Math.round(pastMonths.reduce((a, m) => a + pct(m.actual, m.target), 0) / pastMonths.length) : null;

  let statusHtml, statusClass;
  if (cur.actual >= cur.target) {
    statusClass = 'prediction-hit';
    statusHtml = `<span class="prediction-badge prediction-badge-green">${IC.check} حققت التارجت خلاص</span>`;
  } else if (willHit) {
    statusClass = 'prediction-hit';
    statusHtml = `<span class="prediction-badge prediction-badge-green">${IC.trend_up} على المسار الصحيح</span>`;
  } else {
    statusClass = 'prediction-miss';
    statusHtml = `<span class="prediction-badge prediction-badge-red">${IC.warn} محتاج تسرّع</span>`;
  }

  box.innerHTML = `<div class="prediction-card ${statusClass}">
    <div class="prediction-icon">${IC.target}</div>
    <div style="flex:1">
      <div class="prediction-title-row">
        <div class="prediction-title">تنبؤ بسيط بتارجت ${cur.month} ${realYear}</div>
        ${statusHtml}
      </div>
      <div class="prediction-body">
        ${cur.actual >= cur.target
          ? `<span>وصلت لـ <b>${fmt(cur.actual)} ج.م</b> من أصل <b>${fmt(cur.target)} ج.م</b> — تجاوزت الهدف بـ <b>${fmt(cur.actual - cur.target)} ج.م</b>.</span>`
          : `<span>على المعدل الحالي (${fmt(cur.actual)} ج.م في ${dayOfMonth} يوم)، متوقع تقفل الشهر على <b>${fmt(projected)} ج.م</b> من أصل هدف <b>${fmt(cur.target)} ج.م</b> (${p}% لحد دلوقتي).</span>
             ${remainingDays > 0
               ? `<span> عشان توصل للتارجت، محتاج تحصّل حوالي <b>${fmt(neededPerDay)} ج.م/يوم</b> في الـ${remainingDays} يوم الباقيين.</span>`
               : `<span> الشهر خلص خلاص وفاتك <b>${fmt(remainingAmount)} ج.م</b> عن الهدف.</span>`}`
        }
        ${pastAvgPct !== null ? `<div class="prediction-hint">متوسط تحقيق التارجت في آخر ${pastMonths.length} شهور: <b>${pastAvgPct}%</b></div>` : ''}
      </div>
    </div>
  </div>`;
}

function switchTargetsPageYear(year) {
  currentTargetsYear = parseInt(year) || new Date().getFullYear();
  renderTargets();
}

function statusBadge2(s) {
  if (s.includes('تجاوز')) return `<span class="badge badge-green">${IC.check} ${s}</span>`;
  if (s.includes('مستهدف')) return `<span class="badge badge-cyan">${IC.target} ${s}</span>`;
  return `<span class="badge badge-gray">${s}</span>`;
}

// ══════════════════════════════════════════
// TEAM
// ══════════════════════════════════════════
function renderTeam() {
  renderLeaderboard();
  const s = calcStats();
  const totalComm = DB.team.reduce((a,x)=>a+x.commission,0);
  document.getElementById('team-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.users}</div><div class="stat-label">أعضاء الفريق</div>
      <div class="stat-value">${DB.team.length}</div><div class="stat-sub">مندوب وإدارة</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon" style="color:var(--green)">${IC.money}</div><div class="stat-label">إجمالي العمولات</div>
      <div class="stat-value">${fmt(totalComm)}</div><div class="stat-sub">ج.م مستحق</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.trend_up}</div><div class="stat-label">معدل إغلاق الفريق</div>
      <div class="stat-value">${pct(s.completed, s.completed+s.cancelled)}%</div>
      <div class="stat-sub">نسبة النجاح</div>
    </div>
    <div class="stat-card red">
      <div class="stat-icon" style="color:var(--red)">${IC.ban}</div><div class="stat-label">إجمالي الإلغاءات</div>
      <div class="stat-value">${s.cancelled}</div><div class="stat-sub">عقد ملغي</div>
    </div>
  `;

  const search = (document.getElementById('team-search')||{}).value?.toLowerCase()||'';
  const sortMode = (document.getElementById('team-sort')||{}).value||'';
  let teamList = DB.team;
  if (search) teamList = teamList.filter(m => m.name.toLowerCase().includes(search) || (m.role||'').toLowerCase().includes(search));
  teamList = [...teamList];
  if (sortMode === 'name') teamList.sort((a,b)=>a.name.localeCompare(b.name,'ar'));
  else if (sortMode === 'clients') teamList.sort((a,b)=>b.clients-a.clients);
  else if (sortMode === 'completed') teamList.sort((a,b)=>b.completed-a.completed);
  else if (sortMode === 'commission') teamList.sort((a,b)=>b.commission-a.commission);

  document.getElementById('team-cards').innerHTML = !teamList.length
    ? `<div class="empty" style="padding:40px"><div>لا توجد نتائج مطابقة</div></div>`
    : teamList.map(m=>{
    const closeRate = m.clients ? pct(m.completed, m.clients) : 0;
    // Get clients for this agent and their feedbacks
    const agentClients = DB.clients.filter(c=>c.agent.includes(m.name)||m.name.includes(c.agent));
    const agentCollected = agentClients.reduce((a,c)=>a+c.collected, 0);
    const agentPipeline = agentClients.filter(c=>['قيد المتابعة','عرض مقدم'].includes(c.status)).reduce((a,c)=>a+c.cost, 0);
    const thisMonthYm = todayISO().slice(0,7);
    const autoCommThisMonth = getAgentMonthDeals(m.name, thisMonthYm).reduce((a,d)=>a+getDealCommissionAmount(d), 0);
    const roleIcon = m.role==='CEO'
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" width="22" height="22"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
      : m.role==='CFO'
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2" width="22" height="22"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" stroke-width="2" width="22" height="22"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
    return `<div class="card" style="margin-bottom:12px">
      <div style="padding:16px 18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">
        <div style="display:flex;align-items:center;gap:14px">
          <div style="width:48px;height:48px;border-radius:50%;background:var(--gold-dim);border:2px solid var(--border2);display:flex;align-items:center;justify-content:center;">${roleIcon}</div>
          <div>
            <div style="font-size:16px;font-weight:800">${m.name}</div>
            <div style="font-size:12px;color:var(--text3)">${m.role} • ${m.notes||''}</div>
          </div>
        </div>
        <div style="display:flex;gap:20px;flex-wrap:wrap">
          <div style="text-align:center"><div style="font-size:20px;font-weight:900;color:var(--cyan)">${m.clients}</div><div style="font-size:11px;color:var(--text3)">عملاء</div></div>
          <div style="text-align:center"><div style="font-size:20px;font-weight:900;color:var(--green)">${m.completed}</div><div style="font-size:11px;color:var(--text3)">مكتمل</div></div>
          <div style="text-align:center"><div style="font-size:20px;font-weight:900;color:var(--gold)">${closeRate}%</div><div style="font-size:11px;color:var(--text3)">إغلاق</div></div>
          <div style="text-align:center"><div style="font-size:20px;font-weight:900;color:var(--orange)">${fmt(m.commission)}</div><div style="font-size:11px;color:var(--text3)">عمولة${commissionBalances(m).availableToWithdraw > 0 ? ` <span style="color:var(--green)">(متاح للسحب: ${fmt(commissionBalances(m).availableToWithdraw)})</span>` : ''}</div></div>
          <div style="text-align:center">
            <div style="font-size:20px;font-weight:900;color:var(--purple)">${fmt(autoCommThisMonth)}</div>
            <div style="font-size:11px;color:var(--text3)">عمولة الشهر (تلقائي)</div>
            ${autoCommThisMonth > 0 ? (
              (m.commissionAddedMonths || []).includes(todayISO().slice(0,7))
                ? `<div style="font-size:10px;color:var(--green);margin-top:4px">${IC.ok_circle} اتضافت للرصيد</div>`
                : `<button class="btn btn-outline btn-sm" style="margin-top:4px;padding:2px 8px;font-size:10.5px" onclick="addAutoCommissionToBalance(${JSON.stringify(m.id)})">${IC.plus} ضيفها للرصيد</button>`
            ) : ''}
          </div>
        </div>
        <div class="actions">
          <button class="btn btn-outline btn-sm" onclick="openTeamIdCard(${JSON.stringify(m.id)})">${IC.id_card} بطاقة ID</button>
          <button class="btn btn-outline btn-sm" onclick="openCommissionWallet('team', ${JSON.stringify(m.id)})">${IC.money} العمولة</button>
          <button class="btn btn-outline btn-sm" onclick="editMember(${JSON.stringify(m.id)})">${IC.edit} تعديل</button>
          <button class="btn btn-danger btn-sm" onclick="deleteMember(${JSON.stringify(m.id)})">${IC.trash}</button>
        </div>
      </div>
    </div>`;
  }).join('');

  const svcs4comm = getServices().filter(s=>s.price>0);
  document.getElementById('commission-tbody').innerHTML = svcs4comm.map(s=>{
    const comm = Math.round(s.price * s.commissionRate / 100);
    return `<tr>
      <td>${serviceBadgeEl(s.name)}</td>
      <td class="td-amount">${fmt(s.price)}</td>
      <td><span class="badge badge-gold">${s.commissionRate}%</span></td>
      <td class="td-amount" style="color:var(--gold)">${fmt(comm)}</td>
    </tr>`;
  }).join('');
}

// ══════════════════════════════════════════
// مقارنة الموظفين (Leaderboard) — بورد بسيط يقارن أعضاء الفريق ببعض على شهر/سنة
// (عدد عملاء، نسبة إغلاق، عمولة) عشان يحفز المنافسة الإيجابية
// ══════════════════════════════════════════
function populateLeaderboardPeriodOptions() {
  const typeSel = document.getElementById('lb-period-type');
  const valSel = document.getElementById('lb-period-value');
  if (!typeSel || !valSel) return;
  const type = typeSel.value || 'month';
  const now = new Date();
  const monthsInData = new Set((DB.deals||[]).map(d => (d.date||'').slice(0,7)).filter(Boolean));
  monthsInData.add(now.toISOString().slice(0,7));
  const yearsInData = new Set([...monthsInData].map(ym => ym.slice(0,4)));

  const prevSelected = valSel.value;
  if (type === 'month') {
    const months = [...monthsInData].sort().reverse();
    valSel.innerHTML = months.map(ym => {
      const [y,m] = ym.split('-');
      return `<option value="${ym}">${MONTHS_AR[parseInt(m,10)-1]} ${y}</option>`;
    }).join('');
  } else {
    const years = [...yearsInData].sort().reverse();
    valSel.innerHTML = years.map(y => `<option value="${y}">${y}</option>`).join('');
  }
  // نحافظ على نفس الاختيار لو لسه موجود ضمن الخيارات الجديدة، وإلا نختار أحدث فترة
  if (prevSelected && [...valSel.options].some(o=>o.value===prevSelected)) valSel.value = prevSelected;
}

function getLeaderboardData(periodType, periodValue) {
  const deals = (DB.deals||[]).filter(d => {
    const dstr = d.date || '';
    return periodType === 'month' ? dstr.slice(0,7) === periodValue : dstr.slice(0,4) === periodValue;
  });
  return (DB.team||[]).map(m => {
    const agentDeals = deals.filter(d => d.agent === m.name);
    const clientsCount = new Set(agentDeals.map(d=>d.clientId)).size;
    const completed = agentDeals.filter(d => d.status === 'نشط / مكتمل').length;
    const totalDeals = agentDeals.length;
    const closeRate = totalDeals ? pct(completed, totalDeals) : 0;
    const commission = agentDeals.reduce((a,d)=>a+getDealCommissionAmount(d), 0);
    return { name: m.name, role: m.role, clientsCount, completed, totalDeals, closeRate, commission };
  });
}

function renderLeaderboard() {
  const box = document.getElementById('leaderboard-box');
  if (!box) return;
  populateLeaderboardPeriodOptions();
  const periodType = document.getElementById('lb-period-type')?.value || 'month';
  const periodValue = document.getElementById('lb-period-value')?.value;
  const sortBy = document.getElementById('lb-sort-by')?.value || 'commission';
  if (!periodValue) { box.innerHTML = `<div class="empty" style="padding:30px"><div>لا توجد بيانات كفاية للمقارنة</div></div>`; return; }

  let data = getLeaderboardData(periodType, periodValue);
  data.sort((a,b) => b[sortBy] - a[sortBy]);

  if (!data.length) {
    box.innerHTML = `<div class="empty" style="padding:30px"><div>لا يوجد أعضاء فريق بعد</div></div>`;
    return;
  }

  const medalColors = ['#f0a500','#c7cbe0','#c98553'];
  const medals = medalColors.map(c => `<span style="width:16px;height:16px;display:inline-flex;color:${c}">${IC.trophy}</span>`);
  const maxVal = Math.max(...data.map(x=>x[sortBy]), 1);
  const sortLabels = { commission:'عمولة', clients:'عملاء', closeRate:'إغلاق' };

  box.innerHTML = `<div class="leaderboard-list">${data.map((x,i) => {
    const barVal = Math.max(pct(x[sortBy], maxVal), x[sortBy] > 0 ? 3 : 0);
    const valDisplay = sortBy === 'closeRate' ? `${x.closeRate}%` : sortBy === 'clients' ? fmt(x.clientsCount) : fmt(x.commission) + ' ج.م';
    return `<div class="lb-row ${i<3?'lb-top':''}">
      <div class="lb-rank">${medals[i] || (i+1)}</div>
      <div class="lb-info">
        <div class="lb-name">${x.name} <span class="lb-role">${x.role||''}</span></div>
        <div class="lb-bar"><div class="lb-bar-fill" style="width:${barVal}%"></div></div>
      </div>
      <div class="lb-stats">
        <div class="lb-stat"><b>${x.clientsCount}</b><span>عملاء</span></div>
        <div class="lb-stat"><b>${x.closeRate}%</b><span>إغلاق</span></div>
        <div class="lb-stat lb-stat-main"><b>${fmt(x.commission)}</b><span>عمولة</span></div>
      </div>
    </div>`;
  }).join('')}</div>
  <div class="lb-hint">مرتّب حسب: ${sortLabels[sortBy]}</div>`;
}


// ══════════════════════════════════════════
// EMPLOYEES (إدارة الموظفين) — كل الموظفين الإداريين/التشغيليين،
// منفصلة عن "فريق العمل" (اللي مخصوص لمندوبي المبيعات والعمولات)
// ══════════════════════════════════════════
const EMPLOYEE_STATUSES = [
  {name:'نشط', color:'green'},
  {name:'إجازة', color:'orange'},
  {name:'منتهي الخدمة', color:'red'}
];
let editingEmployeeId = null;

function getEmployeeDepartments() {
  ensureSettings();
  if (!DB.settings.employeeDepartments || !DB.settings.employeeDepartments.length) {
    DB.settings.employeeDepartments = ['الإدارة العامة', 'المبيعات', 'الدعم الفني', 'المحاسبة', 'التسويق'];
  }
  return DB.settings.employeeDepartments;
}

function renderEmployeeDepartmentTags() {
  const wrap = document.getElementById('emp-dept-tags-list');
  if (!wrap) return;
  const depts = getEmployeeDepartments();
  wrap.innerHTML = depts.map(d => `
    <span class="status-tag badge-gray">
      ${d}
      <button type="button" class="status-tag-del" onclick="removeEmployeeDepartment(${JSON.stringify(d)})" title="حذف القسم">&#x2715;</button>
    </span>
  `).join('');
}

function addEmployeeDepartment() {
  const input = document.getElementById('new-emp-dept-input');
  const name = input.value.trim();
  if (!name) { input.classList.add('field-invalid'); toast('اكتب اسم القسم الأول', 'error'); return; }
  const depts = getEmployeeDepartments();
  if (depts.includes(name)) { input.classList.add('field-invalid'); toast('القسم ده موجود بالفعل', 'error'); return; }
  input.classList.remove('field-invalid');
  depts.push(name);
  saveDB();
  input.value = '';
  renderEmployeeDepartmentTags();
  populateEmployeeDepartmentSelects();
  toast('تمت إضافة القسم');
}

async function removeEmployeeDepartment(name) {
  const depts = getEmployeeDepartments();
  if (depts.length <= 1) { toast('لازم يفضل قسم واحد على الأقل', 'error'); return; }
  const inUse = (DB.employees || []).filter(e => e.department === name).length;
  const msg = inUse
    ? `القسم "${name}" مستخدم في ${inUse} موظف. هيفضل موجود في السجلات القديمة بس مش هيظهر كخيار جديد. تحذف؟`
    : `حذف القسم "${name}"؟`;
  if (!(await confirmDialog(msg))) return;
  DB.settings.employeeDepartments = depts.filter(d => d !== name);
  saveDB();
  renderEmployeeDepartmentTags();
  populateEmployeeDepartmentSelects();
  renderEmployees();
  toast('تم حذف القسم', 'error');
}

function populateEmployeeDepartmentSelects(selectedValue) {
  const depts = getEmployeeDepartments();
  const modalSel = document.getElementById('emp-department');
  if (modalSel) {
    modalSel.innerHTML = depts.map(d => `<option value="${d}">${d}</option>`).join('');
    if (selectedValue && !depts.includes(selectedValue)) {
      modalSel.insertAdjacentHTML('beforeend', `<option value="${selectedValue}">${selectedValue}</option>`);
    }
    modalSel.value = selectedValue || (depts[0] || '');
  }
  const filterSel = document.getElementById('emp-filter-department');
  if (filterSel) {
    const cur = filterSel.value;
    filterSel.innerHTML = `<option value="">كل الأقسام</option>` + depts.map(d => `<option value="${d}">${d}</option>`).join('');
    filterSel.value = depts.includes(cur) ? cur : '';
  }
}

function employeeStatusBadge(s) {
  const found = EMPLOYEE_STATUSES.find(x => x.name === s);
  const color = found ? found.color : 'gray';
  return `<span class="badge badge-${color}">${s}</span>`;
}

// الصفحات اللي المدير يقدر يحدد يظهرها لموظف معين (باستثناء لوحة المطور — دي للمطور بس)
function getEmployeePermissionPages() {
  return Object.keys(pageTitles).filter(p => p !== 'developer');
}

// بيبني قائمة تشيك بوكس لكل صفحة في النظام — بما فيها لوحة التحكم، ممكن تتقفل أو تتفتح زي أي صفحة تانية
function renderEmployeePagesList(selectedPages) {
  const wrap = document.getElementById('emp-pages-list');
  if (!wrap) return;
  const hasLogin = !!document.getElementById('emp-username').value.trim();
  const pages = getEmployeePermissionPages();
  const selected = selectedPages || collectSelectedEmployeePages() || pages; // كل الصفحات متاحة افتراضيًا لموظف جديد
  wrap.innerHTML = pages.map(p => `
    <label class="inv-toggle-row" style="flex:0 0 auto;opacity:${hasLogin ? '1' : '.5'}">
      <input type="checkbox" class="emp-page-check" value="${p}" ${selected.includes(p) ? 'checked' : ''} ${hasLogin ? '' : 'disabled'}>
      <span>${pageTitles[p]}</span>
    </label>
  `).join('');
}

function collectSelectedEmployeePages() {
  const boxes = document.querySelectorAll('#emp-pages-list .emp-page-check');
  if (!boxes.length) return null;
  return Array.from(boxes).filter(b => b.checked).map(b => b.value);
}

function openAddEmployee() {
  editingEmployeeId = null;
  document.getElementById('modal-employee-title').textContent = 'إضافة موظف جديد';
  ['emp-name', 'emp-jobtitle', 'emp-phone', 'emp-email', 'emp-salary', 'emp-commission', 'emp-notes', 'emp-username', 'emp-password'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  document.getElementById('emp-hiredate').value = todayISO();
  document.getElementById('emp-status').value = 'نشط';
  populateEmployeeDepartmentSelects();
  document.getElementById('emp-role').value = 'موظف';
  populateRolePresetSelect();
  document.getElementById('emp-role-preset').value = '';
  renderEmployeePagesList(getEmployeePermissionPages());
  clearFieldErrors(['emp-name', 'emp-phone', 'emp-email', 'emp-salary', 'emp-username', 'emp-password']);
  openModal('modal-employee');
}

function editEmployee(id) {
  const e = DB.employees.find(x => x.id === id);
  if (!e) return;
  editingEmployeeId = id;
  document.getElementById('modal-employee-title').textContent = 'تعديل بيانات موظف';
  document.getElementById('emp-name').value = e.name;
  document.getElementById('emp-jobtitle').value = e.jobTitle || '';
  populateEmployeeDepartmentSelects(e.department);
  document.getElementById('emp-phone').value = e.phone || '';
  document.getElementById('emp-email').value = e.email || '';
  document.getElementById('emp-hiredate').value = e.hireDate || '';
  document.getElementById('emp-salary').value = e.salary || '';
  document.getElementById('emp-commission').value = e.commission || '';
  document.getElementById('emp-status').value = e.status || 'نشط';
  document.getElementById('emp-notes').value = e.notes || '';
  document.getElementById('emp-username').value = e.username || '';
  document.getElementById('emp-password').value = '';
  document.getElementById('emp-password').placeholder = e.username ? 'اتركها فارغة لو مش هتغيّر كلمة المرور' : 'كلمة المرور';
  document.getElementById('emp-role').value = e.role || 'موظف';
  populateRolePresetSelect();
  document.getElementById('emp-role-preset').value = '';
  renderEmployeePagesList(e.allowedPages && e.allowedPages.length ? e.allowedPages : getEmployeePermissionPages());
  clearFieldErrors(['emp-name', 'emp-phone', 'emp-email', 'emp-salary', 'emp-username', 'emp-password']);
  openModal('modal-employee');
}

function saveEmployee() {
  const name = document.getElementById('emp-name').value.trim();
  const jobTitle = document.getElementById('emp-jobtitle').value.trim();
  const department = document.getElementById('emp-department').value;
  const phone = document.getElementById('emp-phone').value.trim();
  const email = document.getElementById('emp-email').value.trim();
  const hireDate = document.getElementById('emp-hiredate').value;
  const salary = document.getElementById('emp-salary').value;
  const commission = document.getElementById('emp-commission').value;
  const status = document.getElementById('emp-status').value;
  const notes = document.getElementById('emp-notes').value.trim();
  const username = document.getElementById('emp-username').value.trim();
  const password = document.getElementById('emp-password').value;
  const role = document.getElementById('emp-role').value;
  const hasLogin = !!username;
  const allowedPages = collectSelectedEmployeePages() || getEmployeePermissionPages();

  const existing = editingEmployeeId ? DB.employees.find(x => x.id === editingEmployeeId) : null;

  const rules = [
    {id: 'emp-name', value: name, test: isRequired, message: 'أدخل اسم الموظف'},
    {id: 'emp-phone', value: phone, test: isValidPhone, message: 'رقم التليفون غير صحيح'},
    {id: 'emp-salary', value: salary || '0', test: isNonNegNum, message: 'الراتب لازم يكون رقم صحيح 0 أو أكبر'},
    {id: 'emp-commission', value: commission || '0', test: isNonNegNum, message: 'العمولة لازم تكون رقم صحيح 0 أو أكبر'},
  ];
  if (hasLogin) {
    const isNewLogin = !existing || !existing.username;
    if (isNewLogin) rules.push({id: 'emp-password', value: password, test: v => v && v.length >= 4, message: 'كلمة المرور لازم تكون 4 حروف/أرقام على الأقل'});
  }
  if (!runValidation(rules)) return;

  if (hasLogin && !allowedPages.length) {
    toast('لازم تسمح للموظف بصفحة واحدة على الأقل عشان يقدر يدخل النظام', 'error');
    return;
  }

  if (hasLogin) {
    if (username.toLowerCase() === DEV_LOGIN.user) {
      document.getElementById('emp-username').classList.add('field-invalid');
      toast('اسم المستخدم ده محجوز، اختار اسم تاني', 'error');
      return;
    }
    const clash = getUsers().find(u => u.user === username && u.user !== (existing && existing.username));
    if (clash) {
      document.getElementById('emp-username').classList.add('field-invalid');
      toast('اسم المستخدم ده مستخدم قبل كده', 'error');
      return;
    }
  }

  const obj = {name, jobTitle, department, phone, email, hireDate, salary: parseFloat(salary) || 0, commission: parseFloat(commission) || 0, status, notes};

  if (editingEmployeeId) {
    const idx = DB.employees.findIndex(x => x.id === editingEmployeeId);
    syncEmployeeLogin(existing, hasLogin, username, password, role, name, allowedPages);
    DB.employees[idx] = {...existing, ...obj, username: hasLogin ? username : '', role: hasLogin ? role : '', allowedPages: hasLogin ? allowedPages : []};
    logActivity('تعديل بيانات موظف', name);
    toast('تم تحديث بيانات الموظف');
  } else {
    const maxId = DB.employees.reduce((m, x) => Math.max(m, x.id), 0);
    const newEmp = {id: maxId + 1, ...obj, username: '', role: '', allowedPages: []};
    syncEmployeeLogin(newEmp, hasLogin, username, password, role, name, allowedPages);
    if (hasLogin) { newEmp.username = username; newEmp.role = role; newEmp.allowedPages = allowedPages; }
    DB.employees.push(newEmp);
    logActivity('إضافة موظف', name);
    toast('تمت إضافة الموظف');
  }
  saveDB(); closeModal('modal-employee'); renderPage('employees');
}

// بيربط/يفصل حساب دخول الموظف من نظام المستخدمين (USERS_KEY) — منفصل عن DB الأساسية
// عشان تسجيل الدخول يفضل شغال زي ما هو حتى لو عملنا استيراد/تصدير لبيانات الـ CRM
// allowedPages بتتحفظ على حساب المستخدم نفسه عشان navigate()/السايدبار يقدروا يقيّدوا الوصول فورًا
function syncEmployeeLogin(emp, hasLogin, username, password, role, name, allowedPages) {
  const users = getUsers();
  const oldUsername = emp ? emp.username : '';
  if (hasLogin) {
    if (oldUsername && oldUsername !== username) {
      const i = users.findIndex(u => u.user === oldUsername);
      if (i > -1) users.splice(i, 1);
    }
    const idx = users.findIndex(u => u.user === username);
    if (idx > -1) users[idx] = {...users[idx], name, user: username, role, allowedPages, pass: password ? password : users[idx].pass};
    else users.push({name, user: username, pass: password, role, allowedPages});
  } else if (oldUsername) {
    const i = users.findIndex(u => u.user === oldUsername);
    if (i > -1) users.splice(i, 1);
  }
  saveUsers(users);
}

async function deleteEmployee(id) {
  const e = DB.employees.find(x => x.id === id);
  if (!e) return;
  const msg = e.username
    ? `هل تريد حذف الموظف "${e.name}"؟ هيتشال معاه صلاحية دخوله للنظام كمان.`
    : `هل تريد حذف الموظف "${e.name}"؟`;
  if (!(await confirmDialog(msg))) return;
  if (e.username) saveUsers(getUsers().filter(u => u.user !== e.username));
  DB.employees = DB.employees.filter(x => x.id !== id);
  logActivity('حذف موظف', e.name);
  saveDB(); toast('تم حذف الموظف', 'error'); renderPage('employees');
}

function renderEmployees() {
  renderEmployeeDepartmentTags();
  populateEmployeeDepartmentSelects((document.getElementById('emp-filter-department') || {}).value);

  const all = DB.employees || [];
  const active = all.filter(e => e.status === 'نشط').length;
  const onLeave = all.filter(e => e.status === 'إجازة').length;
  const withLogin = all.filter(e => e.username).length;
  document.getElementById('employees-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.users}</div><div class="stat-label">إجمالي الموظفين</div>
      <div class="stat-value">${all.length}</div><div class="stat-sub">موظف مسجّل</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon" style="color:var(--green)">${IC.check}</div><div class="stat-label">نشط حاليًا</div>
      <div class="stat-value">${active}</div><div class="stat-sub">على رأس العمل</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon" style="color:var(--purple)">${IC.clock}</div><div class="stat-label">في إجازة</div>
      <div class="stat-value">${onLeave}</div><div class="stat-sub">حاليًا</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.key}</div><div class="stat-label">لديهم دخول للنظام</div>
      <div class="stat-value">${withLogin}</div><div class="stat-sub">حساب مفعّل</div>
    </div>
  `;

  const search = (document.getElementById('emp-search') || {}).value?.toLowerCase() || '';
  const filterDept = (document.getElementById('emp-filter-department') || {}).value || '';
  const filterStatus = (document.getElementById('emp-filter-status') || {}).value || '';

  let list = all;
  if (search) list = list.filter(e => e.name.toLowerCase().includes(search) || (e.jobTitle || '').toLowerCase().includes(search) || (e.phone || '').includes(search));
  if (filterDept) list = list.filter(e => e.department === filterDept);
  if (filterStatus) list = list.filter(e => e.status === filterStatus);
  list = applySort(list, 'employees', {
    name: e => e.name, department: e => e.department || '', jobTitle: e => e.jobTitle || '',
    salary: e => e.salary || 0, hireDate: e => dateSortValue(e.hireDate), status: e => e.status || ''
  });

  const tbody = document.getElementById('employees-tbody');
  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center;padding:30px;color:var(--text3)">لا توجد نتائج</td></tr>`;
    return;
  }
  tbody.innerHTML = list.map(e => `
    <tr>
      <td><div class="td-name">${e.name}</div></td>
      <td><span style="font-size:12px">${e.jobTitle || '—'}</span></td>
      <td>${e.department ? `<span class="status-tag badge-gray" style="cursor:default">${e.department}</span>` : '—'}</td>
      <td><span style="font-size:12px">${e.phone || '—'}</span></td>
      <td><span style="font-size:12px;color:var(--text3)">${e.hireDate ? formatDateDisplay(e.hireDate) : '—'}</span></td>
      <td class="td-amount">${e.salary ? fmt(e.salary) : '—'}${(e.commission || 0) > 0 ? `<div style="font-size:10.5px;color:var(--gold);margin-top:2px">عمولة: ${fmt(e.commission)}${commissionBalances(e).availableToWithdraw > 0 ? ` <span style="color:var(--green)">(متاح: ${fmt(commissionBalances(e).availableToWithdraw)})</span>` : ''}</div>` : ''}</td>
      <td>${employeeStatusBadge(e.status)}</td>
      <td>${e.username ? `<span class="badge badge-cyan">${IC.key} ${e.role || 'موظف'}</span>` : `<span class="badge badge-gray">بدون دخول</span>`}</td>
      <td>
        <div class="actions">
          <button class="act-btn" onclick="openCommissionWallet('employee', ${JSON.stringify(e.id)})" title="محفظة العمولة">${IC.money}</button>
          <button class="act-btn" onclick="editEmployee(${JSON.stringify(e.id)})" title="تعديل">${IC.edit}</button>
          <button class="act-btn danger" onclick="deleteEmployee(${JSON.stringify(e.id)})" title="حذف">${IC.trash}</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function exportEmployeesCSV() {
  const headers = ['الاسم', 'الوظيفة', 'القسم', 'الهاتف', 'البريد', 'تاريخ التعيين', 'الراتب', 'الحالة', 'دخول النظام', 'الصلاحية', 'ملاحظات'];
  const rows = (DB.employees || []).map(e => [e.name, e.jobTitle || '', e.department || '', e.phone || '', e.email || '', e.hireDate || '', e.salary || 0, e.status || '', e.username ? 'نعم' : 'لا', e.role || '', e.notes || '']);
  exportRowsToCSV(headers, rows, `الموظفين-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g, '-')}.csv`);
}

// ══════════════════════════════════════════
// ATTENDANCE — حضور/انصراف بسيط لكل موظف، بيربط بتاريخ اليوم
// ══════════════════════════════════════════
function nowHM() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
}
function allStaffNames() {
  const names = new Set();
  (DB.team||[]).forEach(m=>names.add(m.name));
  (DB.employees||[]).forEach(e=>names.add(e.name));
  return Array.from(names);
}
function populateAttendanceSelect() {
  const sel = document.getElementById('att-employee-select');
  if (!sel) return;
  const prev = sel.value;
  sel.innerHTML = allStaffNames().map(n=>`<option value="${n}">${n}</option>`).join('');
  if (prev && [...sel.options].some(o=>o.value===prev)) sel.value = prev;
}
function todayAttendanceFor(name) {
  return (DB.attendance||[]).find(a => a.name === name && a.date === todayISO());
}
function checkInEmployee() {
  const name = document.getElementById('att-employee-select').value;
  if (!name) { toast('اختار الموظف أولاً', 'error'); return; }
  if (!DB.attendance) DB.attendance = [];
  let rec = todayAttendanceFor(name);
  if (rec && rec.checkIn) { toast('الموظف ده سجّل حضور بالفعل النهاردة', 'error'); return; }
  if (!rec) { rec = {id:Date.now(), name, date:todayISO(), checkIn:'', checkOut:''}; DB.attendance.push(rec); }
  rec.checkIn = nowHM();
  saveDB();
  toast(`تم تسجيل حضور ${name} — ${rec.checkIn}`);
  renderAttendance();
}
function checkOutEmployee() {
  const name = document.getElementById('att-employee-select').value;
  if (!name) { toast('اختار الموظف أولاً', 'error'); return; }
  const rec = todayAttendanceFor(name);
  if (!rec || !rec.checkIn) { toast('الموظف ده لسه مسجّلش حضور النهاردة', 'error'); return; }
  if (rec.checkOut) { toast('الموظف ده سجّل انصراف بالفعل النهاردة', 'error'); return; }
  rec.checkOut = nowHM();
  saveDB();
  toast(`تم تسجيل انصراف ${name} — ${rec.checkOut}`);
  renderAttendance();
}
async function deleteAttendanceRecord(id) {
  if (!(await confirmDialog('حذف سجل الحضور ده؟'))) return;
  DB.attendance = (DB.attendance||[]).filter(a=>a.id!==id);
  saveDB(); toast('تم الحذف','error'); renderAttendance();
}
function attendanceDurationLabel(rec) {
  if (!rec.checkIn || !rec.checkOut) return '—';
  const [h1,m1] = rec.checkIn.split(':').map(Number);
  const [h2,m2] = rec.checkOut.split(':').map(Number);
  let mins = (h2*60+m2) - (h1*60+m1);
  if (mins < 0) mins += 24*60;
  return `${Math.floor(mins/60)} س ${mins%60} د`;
}
function renderAttendance() {
  const wrap = document.getElementById('attendance-tbody');
  if (!wrap) return;
  populateAttendanceSelect();
  const filterDate = (document.getElementById('att-date-filter')||{}).value || '';
  let list = [...(DB.attendance||[])];
  if (filterDate) list = list.filter(a=>a.date===filterDate);
  list.sort((a,b) => b.date.localeCompare(a.date) || (b.checkIn||'').localeCompare(a.checkIn||''));

  const todayList = (DB.attendance||[]).filter(a=>a.date===todayISO());
  document.getElementById('attendance-stats').innerHTML = `
    <div class="stat-card gold"><div class="stat-icon" style="color:var(--gold)">${IC.check}</div><div class="stat-label">حاضرين النهاردة</div><div class="stat-value">${todayList.filter(a=>a.checkIn).length}</div></div>
    <div class="stat-card cyan"><div class="stat-icon" style="color:var(--cyan)">${IC.clock}</div><div class="stat-label">لسه في الشغل</div><div class="stat-value">${todayList.filter(a=>a.checkIn && !a.checkOut).length}</div></div>
    <div class="stat-card green"><div class="stat-icon" style="color:var(--green)">${IC.ok_circle}</div><div class="stat-label">انصرفوا النهاردة</div><div class="stat-value">${todayList.filter(a=>a.checkOut).length}</div></div>
  `;

  if (!list.length) {
    wrap.innerHTML = `<tr><td colspan="6" class="empty" style="padding:40px">لا يوجد سجلات حضور${filterDate?' في هذا التاريخ':''}</td></tr>`;
    return;
  }
  wrap.innerHTML = list.map(a => `
    <tr>
      <td><div class="td-name">${a.name}</div></td>
      <td>${formatDateDisplay(a.date)}</td>
      <td style="color:var(--green)">${a.checkIn||'—'}</td>
      <td style="color:var(--red)">${a.checkOut||'—'}</td>
      <td>${attendanceDurationLabel(a)}</td>
      <td><button class="act-btn danger" onclick="deleteAttendanceRecord(${a.id})" title="حذف">${IC.trash}</button></td>
    </tr>
  `).join('');
}

// ══════════════════════════════════════════
// FINANCIAL REPORTS
// ══════════════════════════════════════════
function setFinRepTab(tab) {
  const order = ['tips','services','commissions','payments','seasonal','abtests'];
  document.querySelectorAll('#finrep-tabs .tab').forEach((t,i)=>{
    t.classList.toggle('active', order[i]===tab);
  });
  order.forEach(t => {
    const el = document.getElementById(`finrep-tab-${t}`);
    if (el) el.style.display = (t===tab) ? '' : 'none';
  });
}

function renderFinancialReports() {
  const s = calcStats();
  const services = getServices();

  // Estimated delivery cost per client, based on that service's unit cost
  const serviceCostMap = {};
  services.forEach(sv => serviceCostMap[sv.name] = sv.cost);
  const totalServiceCost = DB.clients.reduce((a,c)=> a + (serviceCostMap[c.service]||0), 0);
  const netProfit = s.collected - s.totalComm - totalServiceCost;
  const profitMargin = s.collected ? Math.round(netProfit / s.collected * 100) : 0;

  // ─── Stat cards ───
  document.getElementById('finrep-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.money}</div><div class="stat-label">إجمالي الإيرادات</div>
      <div class="stat-value">${fmt(s.collected)}</div><div class="stat-sub">ج.م محصّل</div>
    </div>
    <div class="stat-card red">
      <div class="stat-icon" style="color:var(--red)">${IC.chart}</div><div class="stat-label">التكاليف والعمولات</div>
      <div class="stat-value">${fmt(totalServiceCost + s.totalComm)}</div><div class="stat-sub">تكلفة خدمات + عمولات</div>
    </div>
    <div class="stat-card ${netProfit>=0?'green':'red'}">
      <div class="stat-icon" style="color:var(--${netProfit>=0?'green':'red'})">${IC.trend_up}</div><div class="stat-label">إجمالي الأرباح</div>
      <div class="stat-value">${fmt(netProfit)}</div><div class="stat-sub">صافي الربح (ج.م)</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.target}</div><div class="stat-label">هامش الربح</div>
      <div class="stat-value">${profitMargin}%</div><div class="stat-sub">من إجمالي الإيرادات</div>
    </div>
  `;

  // ─── Insights / Tips ───
  const cancelledRevLost = DB.clients.filter(c=>c.status==='ملغي').reduce((a,x)=>a+x.cost,0);
  const followingRevLost = DB.clients.filter(c=>c.status==='قيد المتابعة').reduce((a,x)=>a+x.cost,0);

  let bestSvc = null, worstSvc = null;
  services.filter(sv=>sv.price>0).forEach(sv=>{
    const cnt = DB.clients.filter(c=>c.service===sv.name).length;
    if (!cnt) return;
    const rev = DB.clients.filter(c=>c.service===sv.name).reduce((a,c)=>a+c.collected,0);
    const cost = cnt * sv.cost;
    const margin = rev ? (rev-cost)/rev*100 : 0;
    if (!bestSvc || margin > bestSvc.margin) bestSvc = {name:sv.name, margin};
    if (!worstSvc || margin < worstSvc.margin) worstSvc = {name:sv.name, margin};
  });

  const topAgent = [...DB.team].sort((a,b)=>b.commission-a.commission)[0];

  document.getElementById('finrep-insights').innerHTML = `
    <div class="insight-grid">
      <div class="insight-card insight-red">
        <div class="insight-icon">${IC.warn}</div>
        <div class="insight-body">
          <div class="insight-label">إيراد ضائع — إلغاءات</div>
          <div class="insight-value">${fmt(cancelledRevLost)} ج.م</div>
          <div class="insight-desc">${s.cancelled} عقد ملغي — عرض خصم لاسترداد بعضهم</div>
        </div>
      </div>
      <div class="insight-card insight-gold">
        <div class="insight-icon">${IC.clock}</div>
        <div class="insight-body">
          <div class="insight-label">Pipeline قيد المتابعة</div>
          <div class="insight-value">${fmt(followingRevLost)} ج.م</div>
          <div class="insight-desc">يحتاج متابعة يومية — ${s.following} عميل</div>
        </div>
      </div>
      <div class="insight-card insight-green">
        <div class="insight-icon">${IC.check}</div>
        <div class="insight-body">
          <div class="insight-label">عقود صيانة سنوية متوقعة</div>
          <div class="insight-value">${fmt(s.completed * 2000)} ج.م</div>
          <div class="insight-desc">${s.completed} عميل مكتمل × 2,000 ج.م/سنة إيراد متكرر</div>
        </div>
      </div>
      ${bestSvc ? `<div class="insight-card insight-green">
        <div class="insight-icon">${IC.trend_up}</div>
        <div class="insight-body">
          <div class="insight-label">أعلى خدمة ربحية</div>
          <div class="insight-value">${bestSvc.name}</div>
          <div class="insight-desc">هامش ربح ${Math.round(bestSvc.margin)}% — ركّز التسويق عليها</div>
        </div>
      </div>` : ''}
      ${worstSvc && worstSvc.margin < 20 ? `<div class="insight-card insight-red">
        <div class="insight-icon">${IC.warn}</div>
        <div class="insight-body">
          <div class="insight-label">أقل خدمة ربحية</div>
          <div class="insight-value">${worstSvc.name}</div>
          <div class="insight-desc">هامش ربح ${Math.round(worstSvc.margin)}% فقط — راجع السعر أو التكلفة</div>
        </div>
      </div>` : ''}
      ${topAgent ? `<div class="insight-card insight-cyan">
        <div class="insight-icon">${IC.users}</div>
        <div class="insight-body">
          <div class="insight-label">أعلى مندوب عمولة</div>
          <div class="insight-value">${topAgent.name}</div>
          <div class="insight-desc">${fmt(topAgent.commission)} ج.م عمولة مستحقة</div>
        </div>
      </div>` : ''}
    </div>
  `;

  // ─── أسباب الإلغاء — أكتر سبب بيخسّرنا صفقات ───
  const cancelledDeals = (DB.deals||[]).filter(d => d.status === 'ملغي');
  const reasonCounts = {};
  cancelledDeals.forEach(d => { const r = d.cancelReason || 'غير مسجّل'; reasonCounts[r] = (reasonCounts[r]||0) + 1; });
  const reasonRows = Object.keys(reasonCounts).sort((a,b)=>reasonCounts[b]-reasonCounts[a]);
  const cancelReasonsEl = document.getElementById('finrep-cancel-reasons');
  if (cancelReasonsEl) {
    cancelReasonsEl.innerHTML = cancelledDeals.length ? `
      <div class="sec-header"><div class="sec-title">أسباب إلغاء الصفقات (${cancelledDeals.length})</div></div>
      <div class="card">
        ${reasonRows.map(r => {
          const count = reasonCounts[r];
          const pctVal = Math.round(count/cancelledDeals.length*100);
          return `<div style="margin-bottom:10px">
            <div style="display:flex;justify-content:space-between;font-size:12.5px;margin-bottom:4px">
              <span>${r}</span><span style="color:var(--text3)">${count} صفقة (${pctVal}%)</span>
            </div>
            <div class="progress-bar"><div class="progress-fill progress-gold" style="width:${pctVal}%"></div></div>
          </div>`;
        }).join('')}
      </div>` : '';
  }

  // ─── Services performance & profitability (merged with revenue-by-service) ───
  const svcRows = services.map(sv=>{
    const svcClients = DB.clients.filter(c=>c.service===sv.name);
    const count = svcClients.length;
    const revenue = svcClients.reduce((a,c)=>a+c.collected,0);
    const contractValue = svcClients.reduce((a,c)=>a+c.cost,0);
    const estCost = count * sv.cost;
    const profit = revenue - estCost;
    const margin = revenue ? Math.round(profit/revenue*100) : 0;
    return {sv, count, revenue, contractValue, estCost, profit, margin};
  }).sort((a,b)=>b.revenue-a.revenue);

  document.getElementById('finrep-services-tbody').innerHTML = svcRows.map(r=>`
    <tr>
      <td>${serviceBadgeEl(r.sv.name)}</td>
      <td style="text-align:center">${r.count || '—'}</td>
      <td class="td-amount" style="color:var(--green)">${fmt(r.revenue)}</td>
      <td class="td-amount">${fmt(r.contractValue)}</td>
      <td class="td-amount" style="color:var(--red)">${fmt(r.estCost)}</td>
      <td class="td-amount" style="color:${r.profit>=0?'var(--green)':'var(--red)'}">${r.profit>=0?'+':''}${fmt(r.profit)}</td>
      <td>${r.count ? `<span class="badge ${r.margin>=30?'badge-green':r.margin>=0?'badge-gold':'badge-red'}">${r.margin}%</span>` : '—'}</td>
    </tr>`).join('') || `<tr><td colspan="7" style="text-align:center;color:var(--text3)">لا توجد بيانات بعد</td></tr>`;

  // ─── Team performance & commissions ───
  document.getElementById('finrep-team-tbody').innerHTML = DB.team.map(m=>{
    const closeRate = m.clients ? pct(m.completed, m.clients) : 0;
    return `<tr>
      <td class="td-name">${m.name}</td>
      <td>${m.role}</td>
      <td style="text-align:center">${m.clients}</td>
      <td style="text-align:center;color:var(--green)">${m.completed}</td>
      <td style="text-align:center;color:var(--red)">${m.cancelled}</td>
      <td><span class="badge ${closeRate>=50?'badge-green':'badge-gold'}">${closeRate}%</span></td>
      <td class="td-amount" style="color:var(--orange)">${fmt(m.commission)}</td>
    </tr>`;
  }).join('') || `<tr><td colspan="7" style="text-align:center;color:var(--text3)">لا يوجد أعضاء بعد</td></tr>`;

  // ─── Commission by service type ───
  const svcs4comm = services.filter(sv=>sv.price>0);
  document.getElementById('finrep-commission-tbody').innerHTML = svcs4comm.map(sv=>{
    const comm = Math.round(sv.price * sv.commissionRate / 100);
    return `<tr>
      <td>${serviceBadgeEl(sv.name)}</td>
      <td class="td-amount">${fmt(sv.price)}</td>
      <td><span class="badge badge-gold">${sv.commissionRate}%</span></td>
      <td class="td-amount" style="color:var(--gold)">${fmt(comm)}</td>
    </tr>`;
  }).join('');

  // ─── Payment methods analysis ───
  const deals4pay = DB.deals || [];
  const totalCollectedForPay = deals4pay.reduce((a,d)=>a+d.collected,0);
  const byMethod = {};
  deals4pay.forEach(d => {
    const m = d.paymentMethod || 'غير محدد';
    if (!byMethod[m]) byMethod[m] = { count: 0, total: 0 };
    byMethod[m].count += 1;
    byMethod[m].total += d.collected;
  });
  const methodRows = Object.keys(byMethod)
    .map(m => ({ name: m, ...byMethod[m] }))
    .sort((a,b) => b.total - a.total);
  document.getElementById('finrep-payments-tbody').innerHTML = methodRows.map(r => {
    const share = totalCollectedForPay ? Math.round(r.total / totalCollectedForPay * 100) : 0;
    return `<tr>
      <td>${r.name}</td>
      <td style="text-align:center">${r.count}</td>
      <td class="td-amount" style="color:var(--green)">${fmt(r.total)}</td>
      <td><span class="badge badge-gold">${share}%</span></td>
    </tr>`;
  }).join('') || `<tr><td colspan="4" style="text-align:center;color:var(--text3)">لا توجد بيانات بعد</td></tr>`;

  renderWhatsappReminders();
  renderSeasonalTab();
  renderAbTestingTab();
}

// ══════════════════════════════════════════
// WHATSAPP — تذكيرات تحصيل ذكية (زرار إرسال فوري، بدون سيرفر أو API رسمي)
// ══════════════════════════════════════════
function renderWhatsappReminders() {
  const wrap = document.getElementById('finrep-wa-reminders');
  if (!wrap) return;
  const dueList = (DB.clients||[]).filter(c => !c.archived && c.status !== 'ملغي' && (c.cost - c.collected) > 0 && c.phone);
  dueList.sort((a,b)=>(b.cost-b.collected)-(a.cost-a.collected));
  const top = dueList.slice(0, 8);
  if (!top.length) { wrap.innerHTML = ''; return; }
  wrap.innerHTML = `
    <div class="sec-header"><div class="sec-title" style="display:flex;align-items:center;gap:6px"><span style="width:15px;height:15px;display:inline-flex;color:var(--green)">${IC.whatsapp}</span> تذكيرات واتساب اليوم — مبالغ متبقية</div></div>
    <div class="card" style="margin-bottom:16px">
      ${top.map(c => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)">
          <div><b>${c.name}</b> <span style="color:var(--text3);font-size:12px">— متبقي ${fmt(c.cost-c.collected)} ج.م</span></div>
          <button class="act-btn" onclick="openSendMessage(${JSON.stringify(c.id)})" title="إرسال تذكير واتساب">${IC.whatsapp}</button>
        </div>`).join('')}
    </div>`;
}

// ══════════════════════════════════════════
// تنبؤ بموسمية الطلب (Seasonal Patterns)
// بيحلل صفقات الشركة عبر كل السنين المسجّلة، وبيلاقي الشهور اللي بيزيد فيها الطلب على خدمة معينة
// بشكل ملحوظ عن باقي شهور السنة — تحليل إحصائي بسيط على بياناتك الفعلية، من غير أي اتصال خارجي
// ══════════════════════════════════════════
function analyzeSeasonalPatterns() {
  const byServiceMonth = {};
  (DB.deals||[]).forEach(d => {
    const iso = ddmmToISO(d.date) || d.date;
    const dt = new Date(iso);
    if (isNaN(dt) || !d.service) return;
    const m = dt.getMonth();
    if (!byServiceMonth[d.service]) byServiceMonth[d.service] = Array(12).fill(0);
    byServiceMonth[d.service][m]++;
  });
  const results = [];
  Object.keys(byServiceMonth).forEach(service => {
    const counts = byServiceMonth[service];
    const total = counts.reduce((a,b)=>a+b,0);
    if (total < 4) return; // بيانات قليلة جدًا مش كفاية للاستنتاج
    const avg = total / 12;
    counts.forEach((c, idx) => {
      if (avg > 0 && c >= avg * 1.5 && c >= 2) results.push({ service, month: idx, count: c, avg });
    });
  });
  return results;
}
function renderSeasonalTab() {
  const wrap = document.getElementById('finrep-seasonal-list');
  if (!wrap) return;
  const patterns = analyzeSeasonalPatterns();
  if (!patterns.length) {
    wrap.innerHTML = `<div class="card" style="padding:20px;text-align:center;color:var(--text3);font-size:13px">مفيش بيانات كفاية لسه لاستنتاج نمط موسمي واضح — التحليل بيتحسن كل ما تراكمت بيانات صفقات أكتر عبر شهور وسنين مختلفة.</div>`;
    return;
  }
  const curMonth = new Date().getMonth();
  const nextMonth = (curMonth+1) % 12;
  patterns.sort((a,b)=> b.count - a.count);
  wrap.innerHTML = `
    <div style="font-size:12.5px;color:var(--text3);margin-bottom:10px">تحليل مبني على الصفقات المسجّلة عندك فعليًا عبر كل السنين المتاحة — بيوضح الشهور اللي بيزيد فيها الطلب على خدمة معينة بشكل ملحوظ.</div>
    <div class="insight-grid">
      ${patterns.map(p => `
        <div class="insight-card ${p.month===curMonth ? 'insight-gold' : p.month===nextMonth ? 'insight-cyan' : 'insight-green'}">
          <div class="insight-icon">${IC.trend_up}</div>
          <div class="insight-body">
            <div class="insight-label">${p.service}</div>
            <div class="insight-value">${MONTHS_AR[p.month]}</div>
            <div class="insight-desc">${p.count} صفقة في ${MONTHS_AR[p.month]} مقابل متوسط ${p.avg.toFixed(1)} صفقة/شهر${p.month===curMonth?' — الشهر ده! استعد بدري':p.month===nextMonth?' — الشهر الجاي، جهّز نفسك':''}</div>
          </div>
        </div>
      `).join('')}
    </div>`;
}
// بيتفحص مرة واحدة عند فتح النظام، ولو الشهر الحالي بيمثّل موسم مرتفع لخدمة معينة، بيطلع تنبيه (مرة واحدة بس في الشهر)
function checkSeasonalAlerts() {
  const patterns = analyzeSeasonalPatterns();
  const curMonth = new Date().getMonth();
  const hits = patterns.filter(p => p.month === curMonth);
  if (!hits.length) return;
  const monthKey = todayISO().slice(0,7);
  if (DB.settings.lastSeasonalAlertMonth === monthKey) return;
  DB.settings.lastSeasonalAlertMonth = monthKey;
  saveDB();
  hits.forEach(h => toast(`موسم الطلب العالي على "${h.service}" بيبدأ الشهر ده (${MONTHS_AR[h.month]}) — استعد بدري`, 'success'));
}

// ══════════════════════════════════════════
// اختبار A/B لعروض السعر
// نسخ (variants) لعرض سعر نفس الخدمة، بتتبعت للعملاء وبيتسجل كل إرسال، وبعدين بنقارن أنهي نسخة
// قفلت صفقات أكتر (لو اتقفلت صفقة لنفس العميل/الخدمة بعد تاريخ الإرسال، نعتبرها نجحت)
// ══════════════════════════════════════════
function getQuoteVariants() { if (!DB.quoteVariants) DB.quoteVariants = []; return DB.quoteVariants; }
let editingQuoteVariantId = null;
function openAddQuoteVariant() {
  editingQuoteVariantId = null;
  document.getElementById('modal-quote-variant-title').textContent = 'نسخة عرض سعر جديدة (A/B)';
  document.getElementById('qv-name').value = '';
  document.getElementById('qv-service').innerHTML = `<option value="">كل الخدمات</option>` + buildServiceOptions();
  document.getElementById('qv-message').value = 'أهلاً {name}، عرض خاص على {service} بسعر {cost} ج.م. تحب نكمل؟';
  openModal('modal-quote-variant');
}
function editQuoteVariant(id) {
  const v = getQuoteVariants().find(x=>x.id===id);
  if (!v) return;
  editingQuoteVariantId = id;
  document.getElementById('modal-quote-variant-title').textContent = 'تعديل نسخة العرض';
  document.getElementById('qv-name').value = v.name;
  document.getElementById('qv-service').innerHTML = `<option value="">كل الخدمات</option>` + buildServiceOptions(v.service);
  document.getElementById('qv-message').value = v.message;
  openModal('modal-quote-variant');
}
function saveQuoteVariant() {
  const name = document.getElementById('qv-name').value.trim();
  const service = document.getElementById('qv-service').value;
  const message = document.getElementById('qv-message').value.trim();
  const ok = runValidation([
    {id:'qv-name', value:name, test:isRequired, message:'اكتب اسم النسخة'},
    {id:'qv-message', value:message, test:isRequired, message:'اكتب نص العرض'},
  ]);
  if (!ok) return;
  const list = getQuoteVariants();
  if (editingQuoteVariantId) {
    const idx = list.findIndex(x=>x.id===editingQuoteVariantId);
    if (idx>-1) list[idx] = {...list[idx], name, service, message};
    logActivity('تعديل نسخة عرض A/B', name);
  } else {
    list.push({id: Date.now(), name, service, message});
    logActivity('إضافة نسخة عرض A/B', name);
  }
  saveDB();
  closeModal('modal-quote-variant');
  renderAbTestingTab();
  toast('تم حفظ نسخة العرض');
}
async function deleteQuoteVariant(id) {
  const v = getQuoteVariants().find(x=>x.id===id);
  if (!v) return;
  if (!(await confirmDialog(`حذف نسخة "${v.name}"؟ (سجل الإرسالات القديمة بتاعها هيفضل موجود ضمن الإحصائيات)`))) return;
  DB.quoteVariants = getQuoteVariants().filter(x=>x.id!==id);
  logActivity('حذف نسخة عرض A/B', v.name);
  saveDB();
  renderAbTestingTab();
}
function computeQuoteVariantStats() {
  const sends = DB.quoteSends || [];
  return getQuoteVariants().map(v => {
    const vSends = sends.filter(s => s.variantId === v.id);
    const sentCount = vSends.length;
    let wonCount = 0;
    vSends.forEach(s => {
      const won = (DB.deals||[]).some(d => {
        if (d.clientId !== s.clientId) return false;
        if (v.service && d.service !== v.service) return false;
        if (d.status !== 'نشط / مكتمل') return false;
        const dIso = ddmmToISO(d.date) || d.date;
        return new Date(dIso) >= new Date(s.date);
      });
      if (won) wonCount++;
    });
    return { ...v, sentCount, wonCount, rate: sentCount ? Math.round(wonCount/sentCount*100) : 0 };
  });
}
function renderAbTestingTab() {
  const wrap = document.getElementById('finrep-abtests-list');
  if (!wrap) return;
  const stats = computeQuoteVariantStats();
  if (!stats.length) {
    wrap.innerHTML = `<div class="card" style="padding:20px;text-align:center;color:var(--text3);font-size:13px">لسه مفيش نسخ عروض أسعار. اضغط "+ نسخة عرض جديدة" وابدأ تجربة أكتر من صيغة على نفس الخدمة، وابعتها للعملاء من صفحة تفاصيل العميل (زرار "عرض A/B").</div>`;
    return;
  }
  wrap.innerHTML = `<div class="table-wrap"><div style="overflow-x:auto"><table>
    <thead><tr><th>النسخة</th><th>الخدمة</th><th>مرات الإرسال</th><th>صفقات اتقفلت بعدها</th><th>معدل التحويل</th><th></th></tr></thead>
    <tbody>${stats.map(v=>`
      <tr>
        <td><div class="td-name">${v.name}</div><div style="font-size:11px;color:var(--text3);max-width:280px;white-space:pre-wrap">${v.message.length>90?v.message.slice(0,90)+'…':v.message}</div></td>
        <td>${v.service || 'كل الخدمات'}</td>
        <td style="text-align:center">${v.sentCount}</td>
        <td style="text-align:center;color:var(--green)">${v.wonCount}</td>
        <td><span class="badge ${v.rate>=30?'badge-green':'badge-gold'}">${v.rate}%</span></td>
        <td style="display:flex;gap:6px">
          <button class="act-btn" onclick="editQuoteVariant(${v.id})" title="تعديل">${IC.edit}</button>
          <button class="act-btn danger" onclick="deleteQuoteVariant(${v.id})" title="حذف">${IC.trash}</button>
        </td>
      </tr>`).join('')}
    </tbody>
  </table></div></div>
  <div style="font-size:11.5px;color:var(--text3);margin-top:10px">* معدل التحويل بيتحسب لو اتقفلت صفقة لنفس العميل (ونفس الخدمة لو محدّدة) بعد تاريخ إرسال العرض.</div>`;
}
// إرسال نسخة عرض لعميل من صفحة تفاصيله — بيفتح واتساب فورًا وبيسجّل الإرسال ضمن اختبار A/B
let quoteAbClientId = null;
function openQuoteAbSendChooser(clientId) {
  const c = DB.clients.find(x=>x.id===clientId);
  if (!c) return;
  const variants = getQuoteVariants().filter(v => !v.service || v.service === c.service);
  if (!variants.length) { toast('مفيش نسخ عروض أسعار (A/B) مناسبة لخدمة العميل ده — أضف نسخة من التقارير المالية > اختبار A/B للعروض', 'error'); return; }
  quoteAbClientId = clientId;
  document.getElementById('qab-variant').innerHTML = variants.map(v=>`<option value="${v.id}">${v.name}</option>`).join('');
  updateQuoteAbPreview();
  openModal('modal-quote-ab');
}
function updateQuoteAbPreview() {
  const c = DB.clients.find(x=>x.id===quoteAbClientId);
  const v = getQuoteVariants().find(x=>x.id===parseInt(document.getElementById('qab-variant').value));
  document.getElementById('qab-preview').value = v ? fillMessageTemplate(v.message, c) : '';
}
function sendQuoteAbNow() {
  const c = DB.clients.find(x=>x.id===quoteAbClientId);
  const v = getQuoteVariants().find(x=>x.id===parseInt(document.getElementById('qab-variant').value));
  if (!c || !v) return;
  if (!c.phone) { toast('العميل ده مفيهوش رقم تليفون مسجّل', 'error'); return; }
  const text = document.getElementById('qab-preview').value;
  const url = `https://wa.me/${cleanPhoneForWa(c.phone)}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  const sends = DB.quoteSends || (DB.quoteSends = []);
  sends.push({ id: Date.now(), variantId: v.id, clientId: c.id, service: v.service || c.service, date: todayISO() });
  logActivity('إرسال عرض سعر (A/B)', `${c.name} — نسخة ${v.name}`);
  saveDB();
  closeModal('modal-quote-ab');
  toast('تم إرسال العرض وتسجيله في اختبار A/B');
}

// ══════════════════════════════════════════
// تصدير تقرير شهري تلقائي PDF
// بيبني شكل التقرير كـ HTML مخفي، يحوّله لصورة عالية الدقة (عشان العربي يترسم صح)، وبعدين يحطها في ملف PDF
// ══════════════════════════════════════════
function monthBoundsAgo(monthsAgo) {
  const d = new Date();
  d.setDate(1);
  d.setMonth(d.getMonth() - monthsAgo);
  const y = d.getFullYear(), m = d.getMonth();
  return { start: new Date(y, m, 1), end: new Date(y, m + 1, 1), label: `${MONTHS_AR[m]} ${y}` };
}
async function exportMonthlyReportPDF(monthsAgo = 0) {
  if (typeof html2canvas === 'undefined' || !window.jspdf) {
    toast('تعذّر تحميل مكتبة تصدير PDF — تأكد من اتصال الإنترنت وحاول تاني', 'error');
    return;
  }
  const { start, end, label } = monthBoundsAgo(monthsAgo);
  const inRange = (str) => {
    if (!str) return false;
    const iso = ddmmToISO(str) || str;
    const dt = new Date(iso);
    return !isNaN(dt) && dt >= start && dt < end;
  };
  const newClients = (DB.clients||[]).filter(c => inRange(c.date));
  const closedDeals = (DB.deals||[]).filter(d => d.status === 'نشط / مكتمل' && inRange(d.date));
  const cancelledDeals = (DB.deals||[]).filter(d => d.status === 'ملغي' && inRange(d.date));
  const collectedInRange = (DB.deals||[]).reduce((sum, d) => inRange(d.date) ? sum + (d.collected||0) : sum, 0);

  const container = document.createElement('div');
  container.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:800px;background:#0b0f14;color:#fff;padding:36px;font-family:Tahoma,Arial,sans-serif;direction:rtl';
  container.innerHTML = `
    <div style="text-align:center;margin-bottom:24px">
      <div style="font-size:22px;font-weight:800;color:#d4af37">${(DB.settings.brandName || 'التقرير الشهري')}</div>
      <div style="font-size:14px;color:#aaa;margin-top:4px">تقرير شهر ${label}</div>
    </div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:20px">
      ${[['عملاء جدد', newClients.length], ['صفقات مغلقة', closedDeals.length], ['صفقات ملغية', cancelledDeals.length], ['إجمالي التحصيل', fmt(collectedInRange) + ' ج.م']]
        .map(([lbl, val]) => `<div style="flex:1;min-width:150px;background:#161c24;border:1px solid #2a323d;border-radius:10px;padding:16px;text-align:center">
          <div style="font-size:12px;color:#999">${lbl}</div>
          <div style="font-size:20px;font-weight:800;margin-top:6px;color:#d4af37">${val}</div>
        </div>`).join('')}
    </div>
    <div style="font-size:13px;font-weight:700;margin-bottom:8px;color:#d4af37">أهم الصفقات المغلقة</div>
    <table style="width:100%;border-collapse:collapse;font-size:12px">
      <thead><tr style="background:#161c24">
        <th style="padding:6px;border:1px solid #2a323d">العميل</th><th style="padding:6px;border:1px solid #2a323d">الخدمة</th>
        <th style="padding:6px;border:1px solid #2a323d">القيمة</th><th style="padding:6px;border:1px solid #2a323d">التاريخ</th>
      </tr></thead>
      <tbody>
        ${closedDeals.slice(0,15).map(d => {
          const c = DB.clients.find(x=>x.id===d.clientId);
          return `<tr><td style="padding:6px;border:1px solid #2a323d">${c?c.name:'—'}</td><td style="padding:6px;border:1px solid #2a323d">${d.service}</td><td style="padding:6px;border:1px solid #2a323d">${fmt(d.cost)} ج.م</td><td style="padding:6px;border:1px solid #2a323d">${formatDateDisplay(d.date)}</td></tr>`;
        }).join('') || `<tr><td colspan="4" style="padding:10px;text-align:center;color:#888">لا توجد صفقات مغلقة في هذا الشهر</td></tr>`}
      </tbody>
    </table>
    <div style="margin-top:26px;text-align:center;font-size:10px;color:#666">${APP_CREDIT_LINE}</div>
  `;
  document.body.appendChild(container);
  try {
    const canvas = await html2canvas(container, { backgroundColor: '#0b0f14', scale: 2 });
    const { jsPDF } = window.jspdf;
    const w = canvas.width/2, h = canvas.height/2;
    const pdf = new jsPDF({ unit: 'px', format: [w, h] });
    pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, w, h);
    pdf.save(`تقرير-${label.replace(/\s/g,'-')}.pdf`);
    toast('تم تصدير تقرير PDF بنجاح');
  } catch (e) {
    toast('حصل خطأ أثناء تصدير PDF', 'error');
  } finally {
    container.remove();
  }
}
// بيتفحص مرة واحدة عند فتح النظام في أول 5 أيام من الشهر، وبينبّه إن تقرير الشهر السابق جاهز للتصدير
// (تصدير تلقائي حقيقي بدون فتح البرنامج مش ممكن من غير سيرفر، فده أقرب تنفيذ فعلي جوه المتصفح)
function checkAutoMonthlyReport() {
  const monthKey = todayISO().slice(0,7);
  if (new Date().getDate() > 5) return;
  if (DB.settings.lastMonthlyReportMonth === monthKey) return;
  DB.settings.lastMonthlyReportMonth = monthKey;
  saveDB();
  toast('تقرير الشهر الماضي جاهز — من "التقارير المالية" تقدر تصدّره PDF بضغطة واحدة');
}

// ══════════════════════════════════════════
// مسح كارت شخصي (Business Card Scanner) — OCR كامل جوه المتصفح (Tesseract.js)، بدون رفع الصورة لأي سيرفر
// ══════════════════════════════════════════
async function scanBusinessCard(e) {
  const file = e.target.files[0];
  if (!file) return;
  const statusEl = document.getElementById('card-scan-status');
  statusEl.style.display = 'block';
  const iconSpan = (svg, color) => `<span style="width:13px;height:13px;display:inline-flex;color:${color};flex-shrink:0;vertical-align:middle;margin-left:5px">${svg}</span>`;
  statusEl.innerHTML = 'جاري قراءة الكارت... (ممكن تاخد شوية ثواني)';
  try {
    if (typeof Tesseract === 'undefined') {
      statusEl.innerHTML = iconSpan(IC.warn, 'var(--orange)') + 'تعذّر تحميل أداة القراءة — تأكد من اتصال الإنترنت';
      return;
    }
    const { data } = await Tesseract.recognize(file, 'ara+eng');
    const text = data.text || '';
    const phoneMatch = text.match(/(?:\+?20|0)?1[0125]\d{8}/) || text.match(/\d{8,12}/);
    const lines = text.split('\n').map(l=>l.trim()).filter(Boolean);
    const nameLine = lines.find(l => /[a-zA-Zء-ي]{3,}/.test(l) && !/\d{5,}/.test(l));
    if (phoneMatch) document.getElementById('f-phone').value = phoneMatch[0];
    if (nameLine && !document.getElementById('f-name').value.trim()) document.getElementById('f-name').value = nameLine;
    statusEl.innerHTML = (phoneMatch || nameLine)
      ? iconSpan(IC.check, 'var(--green)') + 'تم استخراج البيانات — راجعها قبل الحفظ'
      : iconSpan(IC.warn, 'var(--orange)') + 'مقدرش يستخرج بيانات واضحة، اكتبها يدويًا';
  } catch (err) {
    statusEl.innerHTML = iconSpan(IC.warn, 'var(--orange)') + 'حصل خطأ أثناء قراءة الكارت';
  } finally {
    e.target.value = '';
  }
}

// ══════════════════════════════════════════
// FEEDBACK
// ══════════════════════════════════════════
let editingFbId = null;

let currentFbNps = null;
function openAddFeedback() {
  editingFbId = null;
  currentFbRating = 0;
  currentFbNps = null;
  document.getElementById('fb-client').innerHTML = DB.clients.map(c=>`<option value="${c.id}">${c.name}</option>`).join('');
  document.getElementById('fb-comment').value = '';
  updateStarsUI(0);
  updateNpsUI(null);
  openModal('modal-feedback');
}

function setRating(val) {
  currentFbRating = val;
  updateStarsUI(val);
}

// مقياس الـ NPS: 0-6 غير راضٍ (Detractor)، 7-8 محايد (Passive)، 9-10 مروّج (Promoter)
function npsCategory(val) {
  if (val === null || val === undefined) return null;
  if (val >= 9) return 'promoter';
  if (val >= 7) return 'passive';
  return 'detractor';
}
function setNps(val) {
  currentFbNps = val;
  updateNpsUI(val);
}
function updateNpsUI(val) {
  const cat = npsCategory(val);
  const labels = {detractor:'غير راضٍ — محتاج متابعة', passive:'محايد', promoter:'مروّج للخدمة'};
  document.querySelectorAll('#fb-nps-scale .nps-btn').forEach(btn=>{
    const btnVal = parseInt(btn.dataset.val);
    btn.classList.remove('active-detractor','active-passive','active-promoter');
    if (val !== null && btnVal === val) btn.classList.add('active-' + cat);
  });
  const txt = document.getElementById('fb-nps-text');
  if (txt) txt.textContent = val === null ? 'اختر رقم' : `${val}/10 — ${labels[cat]}`;
}

function updateStarsUI(val) {
  const texts = {0:'اختر تقييم', 1:'سيء', 2:'مقبول', 3:'جيد', 4:'ممتاز', 5:'رائع جداً'};
  document.querySelectorAll('#fb-stars-wrap .star-btn svg polygon, #fb-stars-wrap .star-btn svg polyline').forEach((el,i)=>{
    const btn = el.closest('.star-btn');
    const btnVal = parseInt(btn.dataset.val||'0');
    if (btnVal<=val) {
      el.setAttribute('fill','currentColor');
      btn.style.color='var(--gold)';
    } else {
      el.setAttribute('fill','none');
      btn.style.color='var(--border2)';
    }
  });
  const txt = document.getElementById('fb-rating-text');
  if (txt) txt.textContent = texts[val]||'';
}

function saveFeedback() {
  const clientId = parseInt(document.getElementById('fb-client').value);
  const ok = runValidation([
    {id:'fb-client', value:clientId, test:v=>!isNaN(v)&&v>0, message:'اختر العميل أولاً'},
  ]);
  if (!ok) return;
  if (!currentFbRating) { toast('اختر تقييم أولاً', 'error'); return; }
  if (currentFbNps === null) { toast('اختر رقم الـ NPS من 0 لـ10', 'error'); return; }
  const comment = document.getElementById('fb-comment').value.trim();
  const fb = { id: Date.now(), clientId, rating: currentFbRating, nps: currentFbNps, comment, date: new Date().toLocaleDateString('ar-EG-u-nu-latn'), alertAck: currentFbRating === 1 ? false : null };
  DB.feedbacks.push(fb);
  saveDB();
  closeModal('modal-feedback');
  toast('تم حفظ التقييم');
  if (currentFbRating === 1) {
    const client = DB.clients.find(c => c.id === clientId);
    const agentName = client ? (client.agent || '—') : '—';
    toast(`تقييم نجمة واحدة من ${client ? client.name : 'عميل'} — المسؤول: ${agentName}`, 'error');
  }
  renderFeedbackPage();
}

async function deleteFeedback(id) {
  if (!(await confirmDialog('حذف هذا التقييم؟'))) return;
  DB.feedbacks = DB.feedbacks.filter(f=>f.id!==id);
  saveDB(); toast('تم الحذف','error'); renderFeedbackPage();
}

// بيقفل تنبيه تقييم النجمة الواحدة بعد ما المسؤول يتابع مع العميل — بيختفي من جرس الإشعارات
function ackLowRating(id) {
  const fb = (DB.feedbacks||[]).find(f => f.id === id);
  if (!fb) return;
  fb.alertAck = true;
  saveDB();
  toast('تم تأكيد المتابعة');
  renderFeedbackPage();
}

function renderFeedbackPage() {
  const fbs = DB.feedbacks;
  const avgRating = fbs.length ? (fbs.reduce((a,f)=>a+f.rating,0)/fbs.length) : 0;
  const fiveStars = fbs.filter(f=>f.rating===5).length;
  // NPS Score = % مروّجين - % غير راضين (المقياس العالمي المعروف)
  const withNps = fbs.filter(f=>f.nps !== undefined && f.nps !== null);
  const promoters = withNps.filter(f=>npsCategory(f.nps)==='promoter').length;
  const detractors = withNps.filter(f=>npsCategory(f.nps)==='detractor').length;
  const npsScore = withNps.length ? Math.round((promoters/withNps.length - detractors/withNps.length) * 100) : null;

  document.getElementById('feedback-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.star_fill}</div>
      <div class="stat-label">متوسط التقييم</div>
      <div class="stat-value">${avgRating ? avgRating.toFixed(1) : '—'}</div>
      <div class="stat-sub">من 5 نجوم</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.users}</div>
      <div class="stat-label">إجمالي التقييمات</div>
      <div class="stat-value">${fbs.length}</div>
      <div class="stat-sub">تقييم عميل</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon" style="color:var(--green)">${IC.ok_circle}</div>
      <div class="stat-label">تقييم 5 نجوم</div>
      <div class="stat-value">${fiveStars}</div>
      <div class="stat-sub">${fbs.length?pct(fiveStars,fbs.length):0}% من الإجمالي</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon" style="color:var(--purple)">${IC.trend_up}</div>
      <div class="stat-label">نتيجة NPS</div>
      <div class="stat-value">${npsScore === null ? '—' : npsScore}</div>
      <div class="stat-sub">${withNps.length ? `من ${withNps.length} تقييم` : 'لا توجد بيانات بعد'}</div>
    </div>
  `;

  const list = document.getElementById('feedback-list');
  const search = (document.getElementById('fb-search')||{}).value?.toLowerCase()||'';
  const filterRating = (document.getElementById('fb-filter-rating')||{}).value||'';
  const sortMode = (document.getElementById('fb-sort')||{}).value||'newest';

  let filtered = fbs.map(f => ({...f, _client: DB.clients.find(x=>x.id===f.clientId)}));
  if (search) filtered = filtered.filter(f => (f._client && f._client.name.toLowerCase().includes(search)) || (f.comment||'').toLowerCase().includes(search));
  if (filterRating) filtered = filtered.filter(f => f.rating === parseInt(filterRating));

  if (sortMode === 'oldest') filtered.sort((a,b)=>a.id-b.id);
  else if (sortMode === 'rating-high') filtered.sort((a,b)=>b.rating-a.rating);
  else if (sortMode === 'rating-low') filtered.sort((a,b)=>a.rating-b.rating);
  else if (sortMode === 'name') filtered.sort((a,b)=>(a._client?a._client.name:'').localeCompare((b._client?b._client.name:''),'ar'));
  else filtered.sort((a,b)=>b.id-a.id); // newest

  if (!fbs.length) {
    list.innerHTML = `<div class="empty" style="padding:60px"><div class="empty-icon">${IC.star_empty}</div><div>لا توجد تقييمات بعد</div><button class="btn btn-gold" style="margin-top:16px" onclick="openAddFeedback()">إضافة أول تقييم</button></div>`;
    return;
  }
  if (!filtered.length) {
    list.innerHTML = `<div class="empty" style="padding:40px"><div>لا توجد نتائج مطابقة</div></div>`;
    return;
  }

  list.innerHTML = filtered.map(f=>{
    const c = f._client;
    const npsLabels = {promoter:'مروّج NPS', passive:'محايد NPS', detractor:'غير راضٍ NPS'};
    const npsColors = {promoter:'badge-green', passive:'badge-gold', detractor:'badge-red'};
    const fNpsCat = npsCategory(f.nps);
    const needsAlert = f.rating === 1 && !f.alertAck;
    return `<div class="feedback-item" style="margin-bottom:10px${needsAlert?';border-color:var(--red)':''}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap">
            <div style="font-weight:800;font-size:14px;color:var(--text)">${c?c.name:'—'}</div>
            ${starsHtml(f.rating,15)}
            ${fNpsCat ? `<span class="badge ${npsColors[fNpsCat]}">${npsLabels[fNpsCat]} (${f.nps}/10)</span>` : ''}
            ${needsAlert ? `<span class="badge badge-red">${IC.warn||''} محتاج متابعة المسؤول${c&&c.agent?' ('+c.agent+')':''}</span>` : ''}
          </div>
          ${f.comment?`<div class="feedback-text">"${f.comment}"</div>`:''}
          <div class="feedback-meta" style="margin-top:8px">
            <span>${c?serviceBadgeEl(c.service):''}</span>
            <span>${f.date}</span>
          </div>
        </div>
        <div class="actions" style="flex-shrink:0">
          ${needsAlert ? `<button class="act-btn" onclick="ackLowRating(${JSON.stringify(f.id)})" title="تم المتابعة">${IC.check}</button>` : ''}
          <button class="act-btn danger" onclick="deleteFeedback(${JSON.stringify(f.id)})">${IC.trash}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════
// مركز المستندات (Document Center)
// مكان واحد يجمع كل الفواتير + العقود/المرفقات الخاصة بكل عميل — بحث سريع باسم العميل أو رقم الفاتورة
// ══════════════════════════════════════════
let docCenterTab = 'invoices';
function setDocCenterTab(tab) {
  docCenterTab = tab;
  document.querySelectorAll('#doc-center-tabs .tab').forEach((t,i)=>{
    t.classList.toggle('active', ['invoices','documents'][i]===tab);
  });
  document.getElementById('doc-tab-invoices').style.display = tab==='invoices' ? '' : 'none';
  document.getElementById('doc-tab-documents').style.display = tab==='documents' ? '' : 'none';
}

function fillDocClientSelect(selectedId) {
  const sel = document.getElementById('doc-client');
  if (!sel) return;
  if (!DB.clients.length) { sel.innerHTML = `<option value="">أضف عميل أولاً</option>`; return; }
  sel.innerHTML = DB.clients.map(c => `<option value="${c.id}" ${c.id===selectedId?'selected':''}>${c.name}</option>`).join('');
}

function openAddDocument(clientId=null) {
  document.getElementById('modal-document-title').textContent = 'إضافة مستند / مرفق';
  fillDocClientSelect(clientId);
  document.getElementById('doc-title').value = '';
  document.getElementById('doc-category').value = 'contract';
  document.getElementById('doc-notes').value = '';
  document.getElementById('doc-file-input').value = '';
  document.getElementById('doc-file-name').textContent = 'مفيش ملف مرفوع';
  clearFieldErrors(['doc-client','doc-title']);
  resetVoiceRecorderUI('document', null);
  openModal('modal-document');
}

let pendingDocFile = null;
function uploadDocFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 5*1024*1024) { toast('حجم الملف كبير — الحد الأقصى 5 ميجابايت', 'error'); e.target.value=''; return; }
  const reader = new FileReader();
  reader.onload = () => {
    pendingDocFile = { name: file.name, data: reader.result, type: file.type };
    document.getElementById('doc-file-name').textContent = file.name;
  };
  reader.readAsDataURL(file);
}

function saveDocument() {
  const clientId = parseInt(document.getElementById('doc-client').value);
  const title = document.getElementById('doc-title').value.trim();
  const ok = runValidation([
    {id:'doc-client', value:clientId, test:v=>!isNaN(v)&&v>0, message:'اختر العميل أولاً'},
    {id:'doc-title', value:title, test:isRequired, message:'اكتب اسم/عنوان المستند'},
  ]);
  if (!ok) return;
  const category = document.getElementById('doc-category').value;
  const notes = document.getElementById('doc-notes').value.trim();
  const voiceNote = voiceNoteDrafts.document || null;
  const doc = {
    id: Date.now(), clientId, title, category, notes,
    fileName: pendingDocFile ? pendingDocFile.name : (voiceNote ? 'ملاحظة صوتية.webm' : ''),
    fileData: pendingDocFile ? pendingDocFile.data : (voiceNote || ''),
    isVoiceNote: !pendingDocFile && !!voiceNote,
    date: todayISO(),
    addedBy: (getCurrentUser() && getCurrentUser().name) || ''
  };
  if (!DB.documents) DB.documents = [];
  DB.documents.push(doc);
  saveDB();
  pendingDocFile = null;
  delete voiceNoteDrafts.document;
  closeModal('modal-document');
  toast('تم حفظ المستند');
  renderDocumentCenter();
}

async function deleteDocument(id) {
  if (!(await confirmDialog('حذف هذا المستند؟'))) return;
  DB.documents = DB.documents.filter(d=>d.id!==id);
  saveDB(); toast('تم الحذف','error'); renderDocumentCenter();
}

function viewDocumentFile(id) {
  const doc = (DB.documents||[]).find(d=>d.id===id);
  if (!doc || !doc.fileData) { toast('مفيش ملف مرفوع مع المستند ده', 'error'); return; }
  const w = window.open('');
  if (!w) { toast('السماح للنوافذ المنبثقة مطلوب لعرض الملف', 'error'); return; }
  if ((doc.fileData||'').startsWith('data:image')) {
    w.document.write(`<title>${doc.fileName||doc.title}</title><body style="margin:0;background:#111;display:flex;align-items:center;justify-content:center;min-height:100vh"><img src="${doc.fileData}" style="max-width:100%;max-height:100vh"></body>`);
  } else {
    w.location.href = doc.fileData;
  }
}

const docCategoryLabels = { contract: 'عقد', attachment: 'مرفق', id: 'صورة هوية/بطاقة', other: 'أخرى' };
function docCategoryBadge(cat) {
  const colors = { contract:'badge-gold', attachment:'badge-cyan', id:'badge-purple', other:'badge-gray' };
  return `<span class="badge ${colors[cat]||'badge-gray'}">${docCategoryLabels[cat]||'أخرى'}</span>`;
}

function renderDocumentCenter() {
  const invoices = DB.invoices || [];
  const documents = DB.documents || [];
  const search = (document.getElementById('doc-center-search')||{}).value?.trim().toLowerCase() || '';

  document.getElementById('doc-center-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.invoice}</div>
      <div class="stat-label">إجمالي الفواتير</div>
      <div class="stat-value">${invoices.length}</div>
      <div class="stat-sub">فاتورة مسجّلة</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.users}</div>
      <div class="stat-label">عملاء لهم مستندات</div>
      <div class="stat-value">${new Set(documents.map(d=>d.clientId)).size}</div>
      <div class="stat-sub">من إجمالي العملاء</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon" style="color:var(--purple)">${IC.trend_up}</div>
      <div class="stat-label">مستندات ومرفقات</div>
      <div class="stat-value">${documents.length}</div>
      <div class="stat-sub">عقد/مرفق مضاف يدويًا</div>
    </div>
  `;

  // تاب الفواتير — قابلة للبحث باسم العميل أو رقم الفاتورة
  let invRows = invoices.map(inv => ({...inv, _client: DB.clients.find(c=>c.id===inv.clientId)}));
  if (search) invRows = invRows.filter(inv => String(inv.number).toLowerCase().includes(search) || (inv._client && inv._client.name.toLowerCase().includes(search)));
  invRows.sort((a,b)=>String(b.number).localeCompare(String(a.number)));

  const invEl = document.getElementById('doc-tab-invoices');
  if (!invoices.length) {
    invEl.innerHTML = `<div class="empty" style="padding:60px"><div>لسه مفيش فواتير مُصدّرة — أول ما تطلّع فاتورة لعميل هتتسجل هنا تلقائيًا</div></div>`;
  } else if (!invRows.length) {
    invEl.innerHTML = `<div class="empty" style="padding:40px"><div>لا توجد نتائج مطابقة</div></div>`;
  } else {
    invEl.innerHTML = `<div class="table-wrap"><table class="data-table"><thead><tr>
      <th>رقم الفاتورة</th><th>العميل</th><th>التاريخ</th><th>الإجمالي</th><th>المحصّل</th><th>المتبقي</th><th>بواسطة</th>
    </tr></thead><tbody>${invRows.map(inv => `
      <tr onclick="${inv._client ? `viewClient(${inv._client.id})` : ''}" style="cursor:${inv._client?'pointer':'default'}">
        <td style="font-weight:700;color:var(--gold)">${inv.number}</td>
        <td>${inv._client ? inv._client.name : '—'}</td>
        <td>${inv.date}</td>
        <td>${fmt(inv.subtotal)} ج.م</td>
        <td>${fmt(inv.collected)} ج.م</td>
        <td>${fmt(inv.due)} ج.م</td>
        <td>${inv.issuedBy||'—'}</td>
      </tr>`).join('')}</tbody></table></div>`;
  }

  // تاب المستندات والمرفقات
  let docRows = documents.map(d => ({...d, _client: DB.clients.find(c=>c.id===d.clientId)}));
  if (search) docRows = docRows.filter(d => d.title.toLowerCase().includes(search) || (d._client && d._client.name.toLowerCase().includes(search)));
  docRows.sort((a,b)=>b.id-a.id);

  const docEl = document.getElementById('doc-tab-documents');
  if (!documents.length) {
    docEl.innerHTML = `<div class="empty" style="padding:60px"><div>لسه مفيش مستندات مضافة</div><button class="btn btn-gold" style="margin-top:16px" onclick="openAddDocument()">إضافة أول مستند</button></div>`;
  } else if (!docRows.length) {
    docEl.innerHTML = `<div class="empty" style="padding:40px"><div>لا توجد نتائج مطابقة</div></div>`;
  } else {
    docEl.innerHTML = `<div class="table-wrap"><table class="data-table"><thead><tr>
      <th>العنوان</th><th>النوع</th><th>العميل</th><th>التاريخ</th><th>ملاحظات</th><th>—</th>
    </tr></thead><tbody>${docRows.map(d => `
      <tr>
        <td style="font-weight:700">${d.title}</td>
        <td>${docCategoryBadge(d.category)}</td>
        <td>${d._client ? d._client.name : '—'}</td>
        <td>${d.date}</td>
        <td style="max-width:220px;white-space:normal;color:var(--text3);font-size:12px">${d.notes||'—'}</td>
        <td>
          <div style="display:flex;gap:6px">
            ${d.isVoiceNote ? `<button class="act-btn" onclick="playVoiceNote(${JSON.stringify(d.fileData)})" title="تشغيل الملاحظة الصوتية">${IC.play}</button>` : ''}
            ${d.fileData && !d.isVoiceNote ? `<button class="act-btn" onclick="viewDocumentFile(${d.id})" title="عرض الملف">${IC.eye}</button>` : ''}
            <button class="act-btn danger" onclick="deleteDocument(${d.id})">${IC.trash}</button>
          </div>
        </td>
      </tr>`).join('')}</tbody></table></div>`;
  }
}

// ══════════════════════════════════════════
// CLIENT CRUD
// ══════════════════════════════════════════
// بيشيل أي رموز غير الأرقام عشان مقارنة أرقام التليفونات تبقى دقيقة (010-1234 = 0101234)
function normalizePhone(p) {
  return String(p||'').replace(/\D/g, '');
}
// بيدور على عميل تاني عنده نفس الرقم (في phone أو phones[]) غير العميل اللي بنعدله دلوقتي
function findDuplicateClientByPhone(phone, excludeId = null) {
  const norm = normalizePhone(phone);
  if (!norm || norm.length < 6) return null;
  return DB.clients.find(c => {
    if (c.id === excludeId) return false;
    const phones = [c.phone, ...(c.phones||[])].filter(Boolean).map(normalizePhone);
    return phones.includes(norm);
  }) || null;
}
// تنبيه فوري وهو بيكتب الرقم في فورم العميل
function checkPhoneDuplicate() {
  const input = document.getElementById('f-phone');
  const warnEl = document.getElementById('f-phone-dup-warning');
  if (!input || !warnEl) return;
  const dup = findDuplicateClientByPhone(input.value, editingClientId);
  if (dup) {
    warnEl.innerHTML = `<span style="width:12px;height:12px;display:inline-flex;color:var(--orange);vertical-align:middle;margin-left:5px">${IC.warn}</span>الرقم ده مسجل بالفعل عند "${dup.name}"`;
    warnEl.style.display = 'block';
  } else {
    warnEl.style.display = 'none';
  }
}

function openAddClient() {
  editingClientId = null;
  document.getElementById('modal-client-title').textContent = 'إضافة عميل جديد';
  ['f-name','f-owner','f-phone','f-address','f-notes'].forEach(id=>document.getElementById(id).value='');
  populateAgentOptions('f-agent', 'قعرو');
  document.getElementById('f-date').value = todayISO();
  phonesExtraContainer().innerHTML = '';
  branchesContainer().innerHTML = '';
  const warnEl = document.getElementById('f-phone-dup-warning');
  if (warnEl) warnEl.style.display = 'none';
  const bdayEl = document.getElementById('f-birthday'); if (bdayEl) bdayEl.value = '';
  const renewEl = document.getElementById('f-renewal-date'); if (renewEl) renewEl.value = '';
  populateClientBusinessTypeSelect('');
  const hintEl = document.getElementById('f-business-type-hint'); if (hintEl) hintEl.textContent = '';
  populateReferralOptions('');
  const rewardEl = document.getElementById('f-referral-reward'); if (rewardEl) rewardEl.checked = false;
  renderCustomFieldInputs({});
  openModal('modal-client');
}

function editClient(id) {
  const c = DB.clients.find(x=>x.id===id);
  if (!c) return;
  editingClientId = id;
  document.getElementById('modal-client-title').textContent = 'تعديل بيانات العميل';
  document.getElementById('f-name').value = c.name;
  document.getElementById('f-owner').value = c.owner||'';
  document.getElementById('f-phone').value = c.phone||'';
  populateAgentOptions('f-agent', c.agent);
  document.getElementById('f-date').value = ddmmToISO(c.date);
  document.getElementById('f-address').value = c.address||'';
  document.getElementById('f-notes').value = c.notes||'';
  // أرقام إضافية: كل الأرقام في c.phones ما عدا الرقم الأساسي (c.phone)
  phonesExtraContainer().innerHTML = '';
  (c.phones||[]).filter(p => p && p !== c.phone).forEach(p => addPhoneRow(p));
  // الفروع
  branchesContainer().innerHTML = '';
  (c.branches||[]).forEach(b => addBranchRow(b));
  const warnEl = document.getElementById('f-phone-dup-warning');
  if (warnEl) warnEl.style.display = 'none';
  const bdayEl = document.getElementById('f-birthday'); if (bdayEl) bdayEl.value = c.birthday || '';
  const renewEl2 = document.getElementById('f-renewal-date'); if (renewEl2) renewEl2.value = c.renewalDate || '';
  populateClientBusinessTypeSelect(c.businessType || '');
  const hintEl = document.getElementById('f-business-type-hint'); if (hintEl) hintEl.textContent = '';
  populateReferralOptions(c.referredBy || '');
  const rewardEl = document.getElementById('f-referral-reward'); if (rewardEl) rewardEl.checked = !!c.referralRewardGiven;
  renderCustomFieldInputs(c.customFields || {});
  openModal('modal-client');
}

async function saveClient() {
  const name = document.getElementById('f-name').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const date = document.getElementById('f-date').value;
  const ok = runValidation([
    {id:'f-name', value:name, test:isRequired, message:'أدخل اسم العميل'},
    {id:'f-date', value:date, test:isRequired, message:'اختر التاريخ'},
    {id:'f-phone', value:phone, test:isValidPhone, message:'رقم التليفون غير صحيح'},
  ]);
  if (!ok) return;
  const dup = findDuplicateClientByPhone(phone, editingClientId);
  if (dup && !(await confirmDialog(`الرقم ده مسجل بالفعل عند "${dup.name}" — تحفظ العميل الجديد برضه؟`))) return;

  // نوع الخدمة/التكلفة/المبلغ المحصّل بقت بتتحدد من صفقة العميل (مودال الصفقات)
  // مش من فورم إضافة العميل. عند الإضافة بتتسجل فارغة/صفر (أو حسب قالب نوع النشاط
  // المختار لو فيه)، وعند التعديل بتفضل زي ما هي من الصفقة الأساسية للعميل.
  const existing = editingClientId ? DB.clients.find(x=>x.id===editingClientId) : null;
  const businessTypeSel = document.getElementById('f-business-type');
  const chosenTemplate = (!existing && businessTypeSel && businessTypeSel.value)
    ? getClientBusinessTemplates().find(t => t.type === businessTypeSel.value) : null;
  const service = existing ? existing.service : (chosenTemplate ? chosenTemplate.service : '');
  const cost = existing ? existing.cost : (chosenTemplate ? chosenTemplate.cost : 0);
  const collected = existing ? existing.collected : 0;

  const prevStatus = existing ? existing.status : null;
  const newStatus = existing ? existing.status : 'قيد المتابعة';
  const newCollected = parseFloat(collected)||0;

  const extraPhones = collectExtraPhones();
  const branches = collectBranches();
  const businessType = businessTypeSel ? businessTypeSel.value : '';
  const birthday = document.getElementById('f-birthday') ? document.getElementById('f-birthday').value : '';
  const renewalDate = document.getElementById('f-renewal-date') ? document.getElementById('f-renewal-date').value : '';
  const referredBy = document.getElementById('f-referred-by') ? document.getElementById('f-referred-by').value : '';
  const referralRewardGiven = document.getElementById('f-referral-reward') ? document.getElementById('f-referral-reward').checked : false;
  const customFields = collectCustomFieldValues();

  const obj = {
    name,
    owner: document.getElementById('f-owner').value.trim(),
    phone,
    phones: [phone, ...extraPhones].filter(Boolean),
    branches,
    service,
    cost: parseFloat(cost)||0,
    collected: newCollected,
    status: newStatus,
    agent: document.getElementById('f-agent').value,
    date,
    address: document.getElementById('f-address').value.trim(),
    notes: document.getElementById('f-notes').value.trim(),
    businessType,
    birthday,
    renewalDate,
    referredBy,
    referralRewardGiven,
    customFields,
    archived: existing ? !!existing.archived : false,
    archivedAt: existing ? (existing.archivedAt || null) : null,
  };

  // الحقول الماليه (التكلفة/المحصّل/الحالة/الخدمة/المندوب/التاريخ) بتتخزن
  // في الصفقة (DB.deals) وليس على العميل مباشرة — بيانات العميل بتتحسب
  // منها تلقائيًا عن طريق syncClientFromDeals عشان تفضل متزامنة مع صفحة الصفقات.
  const dealFields = {
    service: obj.service, cost: obj.cost, collected: obj.collected,
    status: obj.status, agent: obj.agent, date: obj.date, notes: obj.notes
  };

  if (editingClientId) {
    const idx = DB.clients.findIndex(x=>x.id===editingClientId);
    DB.clients[idx] = {...DB.clients[idx], name: obj.name, owner: obj.owner, phone: obj.phone, phones: obj.phones, branches: obj.branches, address: obj.address, businessType: obj.businessType, birthday: obj.birthday, renewalDate: obj.renewalDate, referredBy: obj.referredBy, referralRewardGiven: obj.referralRewardGiven, customFields: obj.customFields};

    if (!DB.deals) DB.deals = [];
    let primary = primaryDealFor(editingClientId);
    if (primary) {
      const pIdx = DB.deals.findIndex(d => d.id === primary.id);
      DB.deals[pIdx] = {...DB.deals[pIdx], ...dealFields};
    } else {
      const maxId = DB.deals.reduce((m,x)=>Math.max(m,x.id),0);
      DB.deals.push({id: maxId+1, clientId: editingClientId, ...dealFields});
    }
    trackStatusTransition(obj.agent, prevStatus, newStatus);
    syncClientFromDeals(editingClientId);
    logActivity('تعديل عميل', obj.name);
    toast('تم تحديث بيانات العميل');
  } else {
    const maxId = DB.clients.reduce((m,c)=>Math.max(m,c.id),0);
    const newId = maxId + 1;
    DB.clients.push({id: newId, ...obj});
    if (!DB.deals) DB.deals = [];
    const maxDealId = DB.deals.reduce((m,x)=>Math.max(m,x.id),0);
    DB.deals.push({id: maxDealId+1, clientId: newId, ...dealFields});
    logActivity('إضافة عميل', obj.name);
    toast('تم إضافة العميل بنجاح');
    updateAgentStats(obj.agent, 'add');
    trackStatusTransition(obj.agent, null, newStatus);
    // AUTO-UPDATE monthly target actual based on collected amount
    if (newCollected > 0) autoUpdateMonthlyTarget(obj.date, newCollected);
  }

  saveDB();
  closeModal('modal-client');
  renderPage(currentPage);
}

function autoUpdateMonthlyTarget(dateStr, amount) {
  // Map month numbers to Arabic names
  const monthMap = { '01':'يناير','02':'فبراير','03':'مارس','04':'ابريل','05':'مايو','06':'يونيو','07':'يوليو','08':'اغسطس','09':'سبتمبر','10':'اكتوبر','11':'نوفمبر','12':'ديسمبر' };
  const isoParts = (dateStr||'').split('-'); // YYYY-MM-DD
  const hasYear = isoParts.length === 3;
  const parts = hasYear ? [isoParts[2], isoParts[1]] : (dateStr||'').split('/');
  if (parts.length < 2) return;
  const monthNum = parts[1].padStart(2,'0');
  const monthName = monthMap[monthNum];
  if (!monthName) return;
  // لو التاريخ مفيهوش سنة (صيغة يوم/شهر قديمة) بنفترض السنة الحالية
  const year = hasYear ? parseInt(isoParts[0]) : new Date().getFullYear();
  const t = getYearTargets(year).find(x=>x.month===monthName);
  if (t) {
    t.actual += amount;
    t.clientsActual = (t.clientsActual||0)+1;
    if (t.actual >= t.target && t.target > 0) t.status = 'تجاوز التارجت';
    else if (t.actual > 0) t.status = 'جاري';
  }
}

function updateAgentStats(agentName, action) {
  DB.team.forEach(m=>{
    if (agentName.includes(m.name)||m.name.includes(agentName)) {
      if (action==='add') m.clients=(m.clients||0)+1;
      if (action==='complete') m.completed=(m.completed||0)+1;
      if (action==='cancel') m.cancelled=(m.cancelled||0)+1;
    }
  });
}

// حذف نهائي — بيمسح العميل وكل بياناته المرتبطة بيه (صفقات، متابعات، تقييمات) بلا رجعة
async function deleteClient(id) {
  const c = DB.clients.find(x=>x.id===id);
  if (!c) return;
  if (!(await confirmDialog(`هل تريد حذف "${c.name}" نهائيًا؟ لن يمكن التراجع عن هذا الإجراء.`))) return;
  DB.clients = DB.clients.filter(x=>x.id!==id);
  DB.feedbacks = DB.feedbacks.filter(f=>f.clientId!==id);
  DB.followups = DB.followups.filter(f=>f.clientId!==id);
  DB.deals = (DB.deals||[]).filter(d=>d.clientId!==id);
  logActivity('حذف عميل نهائيًا', c.name);
  saveDB(); toast('تم الحذف نهائيًا','error'); renderPage(currentPage);
}

// ══════════════════════════════════════════
// أرشفة العملاء — بديل آمن للحذف النهائي، العميل يختفي من القوائم العادية وتقدر ترجعه وقت ما تحتاج
// ══════════════════════════════════════════
async function archiveClient(id) {
  const c = DB.clients.find(x=>x.id===id);
  if (!c) return;
  if (!(await confirmDialog(`أرشفة "${c.name}"؟ هيختفي من قائمة العملاء العادية بس تقدر ترجعه في أي وقت من فلتر "عرض الأرشيف".`))) return;
  c.archived = true;
  c.archivedAt = new Date().toLocaleString('ar-EG-u-nu-latn');
  logActivity('أرشفة عميل', c.name);
  saveDB(); toast('تم نقل العميل للأرشيف'); renderPage(currentPage);
}
function restoreClient(id) {
  const c = DB.clients.find(x=>x.id===id);
  if (!c) return;
  c.archived = false;
  c.archivedAt = null;
  logActivity('استعادة عميل من الأرشيف', c.name);
  saveDB(); toast('تم استرجاع العميل'); renderPage(currentPage);
}

// ══════════════════════════════════════════
// تايم لاين العميل (Client Timeline)
// بتجمع كل حاجة حصلت مع العميل (انضمام، صفقات، متابعات،
// تقييمات، فواتير) في قائمة واحدة مرتبة زمنيًا (الأحدث أولاً)
// ══════════════════════════════════════════
function anyDateToSortable(str) {
  // بيحاول يحول أي صيغة تاريخ معروفة في النظام (ISO أو DD/MM أو DD/MM/YYYY) لتاريخ قابل للمقارنة
  str = String(str||'').trim();
  if (!str) return null;
  let iso = ddmmToISO(str);
  if (iso) { const d = new Date(iso); if (!isNaN(d)) return d; }
  const m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) { const d = new Date(`${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`); if (!isNaN(d)) return d; }
  const d2 = new Date(str);
  return isNaN(d2) ? null : d2;
}

function buildClientTimeline(clientId) {
  const c = DB.clients.find(x=>x.id===clientId);
  if (!c) return [];
  const events = [];

  if (c.date) {
    events.push({ type:'client', dateSort: anyDateToSortable(c.date), dateLabel: formatDateDisplay(ddmmToISO(c.date)||c.date), icon: IC.users, color:'cyan', title:'انضمام العميل للنظام', sub: c.owner ? `المالك: ${c.owner}` : '' });
  }
  (DB.deals||[]).filter(d=>d.clientId===clientId).forEach(d=>{
    events.push({ type:'deal', dateSort: anyDateToSortable(d.date), dateLabel: formatDateDisplay(ddmmToISO(d.date)||d.date), icon: IC.pipeline||IC.trend_up, color:'gold', title:`صفقة: ${d.service}`, sub: `${fmt(d.cost)} ج.م — ${d.status}` });
  });
  (DB.followups||[]).filter(f=>f.clientId===clientId).forEach(f=>{
    events.push({ type:'followup', dateSort: new Date(f.id), dateLabel: f.date, icon: IC.followup||IC.message, color:'purple', title:`متابعة: ${f.type}`, sub: f.note||'' });
  });
  (DB.feedbacks||[]).filter(f=>f.clientId===clientId).forEach(f=>{
    events.push({ type:'feedback', dateSort: new Date(f.id), dateLabel: f.date, icon: IC.star_fill, color: f.rating<=2?'red':'green', title:`تقييم: ${f.rating}/5${f.nps!=null?` — NPS ${f.nps}/10`:''}`, sub: f.comment||'' });
  });
  (DB.invoices||[]).filter(iv=>iv.clientId===clientId).forEach(iv=>{
    events.push({ type:'invoice', dateSort: anyDateToSortable(iv.date), dateLabel: formatDateDisplay(ddmmToISO(iv.date)||iv.date), icon: IC.invoice||IC.star_fill, color:'green', title:`فاتورة رقم ${iv.number}`, sub: `${fmt(iv.subtotal)} ج.م — متبقي ${fmt(iv.due)} ج.م` });
  });

  events.sort((a,b)=>{
    const ta = a.dateSort ? a.dateSort.getTime() : -Infinity;
    const tb = b.dateSort ? b.dateSort.getTime() : -Infinity;
    return tb - ta;
  });
  return events;
}

function renderClientTimelineHtml(clientId) {
  const events = buildClientTimeline(clientId);
  if (!events.length) return '';
  return `
    <div style="font-size:12px;font-weight:700;color:var(--text3);margin-bottom:8px;margin-top:4px;display:flex;align-items:center;gap:6px">${IC.followup||''} تايم لاين العميل (${events.length})</div>
    <div class="client-timeline" style="margin-bottom:16px">
      ${events.map(e=>`
        <div class="timeline-row" style="display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--border2)">
          <div style="flex-shrink:0;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--${e.color}-dim,var(--bg3));color:var(--${e.color})">${e.icon||''}</div>
          <div style="flex:1;min-width:0">
            <div style="display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap">
              <span style="font-size:12.5px;font-weight:700">${e.title}</span>
              <span style="font-size:11px;color:var(--text3);white-space:nowrap">${e.dateLabel||'—'}</span>
            </div>
            ${e.sub ? `<div style="font-size:12px;color:var(--text2);margin-top:2px">${e.sub}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function viewClient(id) {
  const c = DB.clients.find(x=>x.id===id);
  if (!c) return;
  const remaining = c.cost - c.collected;
  const clientDeals = (DB.deals||[]).filter(d=>d.clientId===id);
  const clientFb = DB.feedbacks.filter(f=>f.clientId===id);
  const avgR = clientFb.length ? Math.round(clientFb.reduce((a,f)=>a+f.rating,0)/clientFb.length) : 0;

  document.getElementById('detail-title').textContent = c.name + (c.archived ? ' (مؤرشف)' : '');
  document.getElementById('detail-body').innerHTML = `
    ${c.archived ? `<div style="background:var(--bg3);border:1px solid var(--border2);border-radius:var(--radius2);padding:8px 12px;margin-bottom:14px;font-size:12px;color:var(--text3);display:flex;align-items:center;gap:6px">${IC.archive} العميل ده مؤرشف منذ ${c.archivedAt||'—'}</div>` : ''}
    <div class="detail-grid">
      <div class="detail-item"><div class="detail-lbl">المالك</div><div class="detail-val">${c.owner||'—'}</div></div>
      <div class="detail-item"><div class="detail-lbl">الهاتف</div><div class="detail-val" style="display:flex;align-items:center;gap:8px" dir="ltr">${c.phone||'—'} ${c.phone?`<a href="${telHref(c.phone)}" title="اتصال" style="color:var(--green);display:inline-flex" onclick="event.stopPropagation()">${IC.phone}</a>`:''}</div></div>
      <div class="detail-item"><div class="detail-lbl">الخدمة</div><div class="detail-val">${serviceBadgeEl(c.service)}</div></div>
      <div class="detail-item"><div class="detail-lbl">الحالة</div><div class="detail-val">${statusBadge(c.status)}</div></div>
      <div class="detail-item"><div class="detail-lbl">التكلفة</div><div class="detail-val" style="color:var(--gold)">${fmt(c.cost)} ج.م</div></div>
      <div class="detail-item"><div class="detail-lbl">المحصل</div><div class="detail-val" style="color:var(--green)">${fmt(c.collected)} ج.م</div></div>
      <div class="detail-item"><div class="detail-lbl">المتبقي</div><div class="detail-val" style="color:${remaining>0?'var(--red)':'var(--green)'}">${remaining>0?fmt(remaining)+' ج.م':'مكتمل'}</div></div>
      <div class="detail-item"><div class="detail-lbl">المندوب</div><div class="detail-val">${c.agent}</div></div>
      <div class="detail-item"><div class="detail-lbl">التاريخ</div><div class="detail-val">${formatDateDisplay(c.date)}</div></div>
      <div class="detail-item"><div class="detail-lbl">العنوان</div><div class="detail-val">${c.address||'—'}</div></div>
      <div class="detail-item"><div class="detail-lbl">آخر تحديث</div><div class="detail-val" style="font-size:12.5px;color:var(--text3)">${relativeTimeAr(clientLastActivity(c))}</div></div>
      ${avgR?`<div class="detail-item" style="grid-column:1/-1"><div class="detail-lbl">التقييم</div><div class="detail-val">${starsHtml(avgR,16)} <span style="font-size:12px;color:var(--text3)">(${clientFb.length} تقييم)</span></div></div>`:''}
      ${c.businessType?`<div class="detail-item"><div class="detail-lbl">نوع النشاط</div><div class="detail-val">${c.businessType}</div></div>`:''}
      ${c.birthday?`<div class="detail-item"><div class="detail-lbl">${IC.gift} تاريخ الميلاد/المناسبة</div><div class="detail-val">${formatDateDisplay(c.birthday)} ${(()=>{const d=daysUntilAnnualDate(c.birthday); return d!==null&&d<=30?`<span class="badge badge-cyan" style="margin-right:6px">بعد ${d} يوم</span>`:'';})()}</div></div>`:''}
    </div>
    ${(()=>{
      const referrer = c.referredBy ? DB.clients.find(x=>String(x.id)===String(c.referredBy)) : null;
      const referred = referredClientsOf(id);
      if (!referrer && !referred.length) return '';
      return `<div style="background:var(--bg3);border-radius:var(--radius2);padding:12px;margin-bottom:16px">
        ${referrer?`<div style="font-size:12px;margin-bottom:${referred.length?'8px':'0'};display:flex;justify-content:space-between;align-items:center">
          <span>${IC.link} تم ترشيحه بواسطة: <b>${referrer.name}</b></span>
          <label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer"><input type="checkbox" ${c.referralRewardGiven?'checked':''} onchange="toggleReferralReward(${id},this.checked)"> اتصرفت المكافأة</label>
        </div>`:''}
        ${referred.length?`<div style="font-size:12px">${IC.link} رشّح ${referred.length} عميل: ${referred.map(x=>x.name).join('، ')}</div>`:''}
      </div>`;
    })()}
    ${(()=>{
      const defs = getCustomFieldDefs();
      const vals = c.customFields || {};
      const filled = defs.filter(d => vals[d.key]);
      if (!filled.length) return '';
      return `<div style="background:var(--bg3);border-radius:var(--radius2);padding:12px;margin-bottom:16px">
        <div style="font-size:11px;color:var(--text3);margin-bottom:8px">حقول مخصصة</div>
        <div class="detail-grid">
          ${filled.map(d=>`<div class="detail-item"><div class="detail-lbl">${d.label}</div><div class="detail-val">${vals[d.key]}</div></div>`).join('')}
        </div>
      </div>`;
    })()}
    ${(c.phones||[]).filter(p=>p && p!==c.phone).length ? `
    <div style="background:var(--bg3);border-radius:var(--radius2);padding:12px;margin-bottom:16px">
      <div style="font-size:11px;color:var(--text3);margin-bottom:6px">أرقام تليفون إضافية</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${(c.phones||[]).filter(p=>p && p!==c.phone).map(p=>`<span class="status-tag badge-gray" dir="ltr" style="cursor:default">${p}</span>`).join('')}
      </div>
    </div>` : ''}
    ${(c.branches||[]).length ? `
    <div style="background:var(--bg3);border-radius:var(--radius2);padding:12px;margin-bottom:16px">
      <div style="font-size:11px;color:var(--text3);margin-bottom:8px">فروع العميل (${c.branches.length})</div>
      ${c.branches.map(b=>`
        <div style="display:flex;flex-wrap:wrap;gap:10px;padding:8px 0;border-top:1px solid var(--border2)">
          <div style="font-size:13px;font-weight:700">${b.name||'—'}</div>
          ${b.address?`<div style="font-size:12px;color:var(--text3)">${b.address}</div>`:''}
          ${b.phone?`<div style="font-size:12px;color:var(--text3)" dir="ltr">${b.phone}</div>`:''}
        </div>`).join('')}
    </div>` : ''}
    <div style="background:var(--bg3);border-radius:var(--radius2);padding:12px;margin-bottom:16px">
      <div style="font-size:11px;color:var(--text3);margin-bottom:4px">ملاحظات</div>
      <div style="font-size:13px">${c.notes||'—'}</div>
    </div>
    ${renderClientTimelineHtml(id)}
    ${clientDeals.length?`<div style="font-size:12px;font-weight:700;color:var(--text3);margin-bottom:8px">صفقات العميل (${clientDeals.length})</div>`+clientDeals.map(d=>{
      const hasDiscount = d.originalCost && d.originalCost > d.cost;
      const discountLabel = d.discountType === 'percent' ? `${d.discountValue}%` : fmt(d.discountValue);
      const expTotal = (d.expenses||[]).reduce((a,e)=>a+(e.amount||0),0);
      const netProfit = d.collected - expTotal;
      return `
      <div style="background:var(--bg3);border-radius:var(--radius2);padding:10px;margin-bottom:6px">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12px">${serviceBadgeEl(d.service)}</span>
          ${statusBadge(d.status)}
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:6px;font-size:12px;align-items:center">
          <span>التكلفة: ${hasDiscount?`<span style="text-decoration:line-through;color:var(--text3);margin-left:4px">${fmt(d.originalCost)}</span>`:''}<b style="color:var(--gold)">${fmt(d.cost)} ج.م</b>${hasDiscount?` <span class="badge badge-red">خصم ${discountLabel}</span>`:''}</span>
          <span>المحصل: <b style="color:var(--green)">${fmt(d.collected)} ج.م</b></span>
        </div>
        <div style="margin-top:6px;font-size:12px;color:var(--text3)">طريقة الدفع: <span style="color:var(--text2);font-weight:700">${d.paymentMethod || '—'}</span></div>
        ${expTotal ? `<div style="margin-top:6px;font-size:12px;display:flex;justify-content:space-between;border-top:1px dashed var(--border2);padding-top:6px">
          <span style="color:var(--text3)">مصاريف التنفيذ: <b style="color:var(--red)">${fmt(expTotal)} ج.م</b></span>
          <span>الربح الصافي: <b style="color:var(--green)">${fmt(netProfit)} ج.م</b></span>
        </div>` : ''}
      </div>
    `;}).join(''):''}
    ${(()=>{
      const docs = (DB.documents||[]).filter(d=>d.clientId===id);
      return `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div style="font-size:12px;font-weight:700;color:var(--text3)">مرفقات العميل (${docs.length})</div>
        <button class="btn btn-sm" onclick="openAddDocument(${id})">${IC.paperclip} إضافة مرفق</button>
      </div>
      <div style="background:var(--bg3);border-radius:var(--radius2);padding:${docs.length?'8px 12px':'12px'};margin-bottom:16px">
        ${docs.length ? docs.map(d=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--border2)">
            <div style="font-size:12.5px;display:flex;align-items:center;gap:6px">${d.isVoiceNote?IC.mic:IC.paperclip} ${d.title} <span style="color:var(--text3);font-size:11px">(${formatDateDisplay(d.date)})</span></div>
            <div style="display:flex;gap:6px">
              ${d.isVoiceNote ? `<button class="act-btn" onclick="playVoiceNote(${JSON.stringify(d.fileData)})" title="تشغيل">${IC.play}</button>` : (d.fileData?`<button class="act-btn" onclick="viewDocumentFile(${d.id})" title="عرض">${IC.eye}</button>`:'')}
              <button class="act-btn danger" onclick="deleteDocument(${d.id});viewClient(${id})" title="حذف">${IC.trash}</button>
            </div>
          </div>
        `).join('') : `<div style="font-size:12px;color:var(--text3)">مفيش مرفقات — اضغط "إضافة مرفق" لرفع عقد أو صورة أو تسجل ملاحظة صوتية</div>`}
      </div>`;
    })()}
    ${(()=>{
      const byMethod = {};
      clientDeals.forEach(d => {
        const m = d.paymentMethod || 'غير محدد';
        if (!byMethod[m]) byMethod[m] = 0;
        byMethod[m] += d.collected;
      });
      const methods = Object.keys(byMethod).filter(m => byMethod[m] > 0);
      if (!methods.length) return '';
      return `<div style="font-size:12px;font-weight:700;color:var(--text3);margin-bottom:8px">طرق الدفع المستخدمة</div>
      <div style="background:var(--bg3);border-radius:var(--radius2);padding:10px;margin-bottom:16px">
        ${methods.map(m => `
          <div style="display:flex;justify-content:space-between;font-size:12px;padding:4px 0">
            <span>${m}</span>
            <b style="color:var(--green)">${fmt(byMethod[m])} ج.م</b>
          </div>`).join('')}
      </div>`;
    })()}
  `;
  document.getElementById('detail-footer').innerHTML = `
    <button class="btn btn-outline" onclick="closeModal('modal-detail')">إغلاق</button>
    <button class="btn btn-outline" onclick="closeModal('modal-detail');openSendMessage(${JSON.stringify(id)})">${IC.message} إرسال رسالة</button>
    <button class="btn btn-outline" onclick="closeModal('modal-detail');openQuoteAbSendChooser(${JSON.stringify(id)})" title="إرسال عرض سعر ضمن اختبار A/B">${IC.flask} عرض A/B</button>
    <button class="btn btn-outline" onclick="closeModal('modal-detail');openAddDeal(${JSON.stringify(id)})">${IC.pipeline} إضافة صفقة</button>
    <button class="btn btn-outline" onclick="closeModal('modal-detail');addFollowupFor(${JSON.stringify(id)})">${IC.followup} إضافة متابعة</button>
    <button class="btn btn-outline" onclick="closeModal('modal-detail');openAddFeedbackFor(${JSON.stringify(id)})">${IC.star_fill} إضافة تقييم</button>
    <button class="btn btn-gold" onclick="closeModal('modal-detail');editClient(${JSON.stringify(id)})">${IC.edit} تعديل</button>
  `;
  openModal('modal-detail');
}

function openAddFeedbackFor(clientId) {
  editingFbId = null;
  currentFbRating = 0;
  currentFbNps = null;
  document.getElementById('fb-client').innerHTML = DB.clients.map(c=>`<option value="${c.id}" ${c.id===clientId?'selected':''}>${c.name}</option>`).join('');
  document.getElementById('fb-comment').value = '';
  updateStarsUI(0);
  updateNpsUI(null);
  openModal('modal-feedback');
}

// ══════════════════════════════════════════
// FOLLOW-UPS (المتابعات)
// ══════════════════════════════════════════
// ══════════════════════════════════════════
// تسجيل صوتي عام — مستخدم في متابعات العملاء ومرفقات المستندات (تذكيرات/ملاحظات بالصوت)
// ══════════════════════════════════════════
let voiceRecorderInstance = null;
let voiceRecorderChunks = [];
let voiceNoteDrafts = {}; // { followup: dataUrl, document: dataUrl }

async function toggleVoiceRecording(targetKey) {
  if (voiceRecorderInstance && voiceRecorderInstance.state === 'recording') {
    voiceRecorderInstance.stop();
    return;
  }
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    toast('المتصفح ده مش بيدعم تسجيل الصوت', 'error');
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({audio:true});
    voiceRecorderChunks = [];
    voiceRecorderInstance = new MediaRecorder(stream);
    voiceRecorderInstance.ondataavailable = e => { if (e.data.size) voiceRecorderChunks.push(e.data); };
    voiceRecorderInstance.onstop = () => {
      const blob = new Blob(voiceRecorderChunks, {type:'audio/webm'});
      const reader = new FileReader();
      reader.onload = () => onVoiceRecordingDone(targetKey, reader.result);
      reader.readAsDataURL(blob);
      stream.getTracks().forEach(t=>t.stop());
    };
    voiceRecorderInstance.start();
    updateVoiceRecordUI(targetKey, true);
  } catch(e) {
    toast('مينفعش نوصل للمايك — تأكد من إعطاء صلاحية الوصول للمتصفح', 'error');
  }
}
function onVoiceRecordingDone(targetKey, dataUrl) {
  voiceNoteDrafts[targetKey] = dataUrl;
  updateVoiceRecordUI(targetKey, false);
  const player = document.getElementById('voice-player-'+targetKey);
  if (player) { player.src = dataUrl; player.style.display = 'block'; }
  const clearBtn = document.getElementById('voice-clear-'+targetKey);
  if (clearBtn) clearBtn.style.display = 'inline-flex';
  toast('تم تسجيل الملاحظة الصوتية');
}
function updateVoiceRecordUI(targetKey, recording) {
  const btn = document.getElementById('voice-btn-'+targetKey);
  if (!btn) return;
  btn.classList.toggle('recording-active', recording);
  btn.innerHTML = recording ? `${IC.stop} إيقاف التسجيل` : `${IC.mic} تسجيل ملاحظة صوتية`;
}
function clearVoiceNote(targetKey) {
  delete voiceNoteDrafts[targetKey];
  const player = document.getElementById('voice-player-'+targetKey);
  if (player) { player.src=''; player.style.display = 'none'; }
  const clearBtn = document.getElementById('voice-clear-'+targetKey);
  if (clearBtn) clearBtn.style.display = 'none';
  updateVoiceRecordUI(targetKey, false);
}
function resetVoiceRecorderUI(targetKey, existingUrl) {
  delete voiceNoteDrafts[targetKey];
  updateVoiceRecordUI(targetKey, false);
  const player = document.getElementById('voice-player-'+targetKey);
  const clearBtn = document.getElementById('voice-clear-'+targetKey);
  if (existingUrl) {
    voiceNoteDrafts[targetKey] = existingUrl;
    if (player) { player.src = existingUrl; player.style.display = 'block'; }
    if (clearBtn) clearBtn.style.display = 'inline-flex';
  } else {
    if (player) { player.src=''; player.style.display = 'none'; }
    if (clearBtn) clearBtn.style.display = 'none';
  }
}

// ══════════════════════════════════════════
// CLIENTS MAP — عرض عناوين العملاء على خريطة (Leaflet + OpenStreetMap، من غير API key)
// فيها: تبديل عادي/قمر صناعي، تلوين حسب الحالة، فلاتر، تقرير أكتر مناطق بيع، تقرير حركة الموظفين
// ══════════════════════════════════════════
let clientsMapInstance = null;
let clientsMapMarkers = [];
let clientsMapTileLayer = null;
let clientsMapViewType = 'street'; // street | satellite

const MAP_STATUS_COLORS = { 'قيد المتابعة':'#f5c542', 'عرض مقدم':'#38bdf8', 'نشط / مكتمل':'#22c55e', 'ملغي':'#ef4444' };

async function geocodeClientAddress(clientId) {
  const c = DB.clients.find(x=>x.id===clientId);
  if (!c || !c.address) { toast('اكتب عنوان العميل الأول من صفحة تعديل العميل', 'error'); return; }
  toast('جارٍ تحديد الموقع...');
  try {
    const zone = AREA_ZONES.find(z => c.address.includes(z.name));
    if (zone) {
      // لو العنوان بيحتوي اسم منطقة معروفة نحدد الموقع فورًا من غير ما نستنى خدمة خارجية
      c.lat = jitterCoord(zone.lat);
      c.lng = jitterCoord(zone.lng);
      saveDB();
      toast('تم تحديد موقع العميل على الخريطة');
      renderClientsMap();
      return;
    }
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(c.address + ' مصر')}`);
    const data = await res.json();
    if (!data.length) { toast('معرفناش نحدد الموقع من العنوان ده — جرب تفاصيل أكتر', 'error'); return; }
    c.lat = parseFloat(data[0].lat);
    c.lng = parseFloat(data[0].lon);
    saveDB();
    toast('تم تحديد موقع العميل على الخريطة');
    renderClientsMap();
  } catch(e) {
    toast('فشل الاتصال بخدمة تحديد المواقع — تأكد من الاتصال بالإنترنت', 'error');
  }
}

function setClientManualLocation(clientId, lat, lng) {
  const c = DB.clients.find(x=>x.id===clientId);
  if (!c) return;
  c.lat = lat; c.lng = lng;
  saveDB();
  renderClientsMap();
}

function ensureLeafletLoaded(cb) {
  if (window.L) { cb(); return; }
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
  document.head.appendChild(link);
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
  script.onload = cb;
  script.onerror = () => toast('مقدرناش نحمّل مكتبة الخريطة — تأكد من الاتصال بالإنترنت', 'error');
  document.head.appendChild(script);
}

function setClientsMapView(type) {
  clientsMapViewType = type;
  document.querySelectorAll('.map-view-toggle .tab').forEach(t => t.classList.toggle('active', t.dataset.view === type));
  if (!clientsMapInstance || !window.L) return;
  if (clientsMapTileLayer) clientsMapInstance.removeLayer(clientsMapTileLayer);
  clientsMapTileLayer = type === 'satellite'
    ? L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles &copy; Esri', maxZoom: 19 })
    : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 });
  clientsMapTileLayer.addTo(clientsMapInstance);
}

function populateClientsMapFilters() {
  const statusSel = document.getElementById('map-filter-status');
  const agentSel = document.getElementById('map-filter-agent');
  if (statusSel && !statusSel.options.length) {
    statusSel.innerHTML = `<option value="">كل الحالات</option>` + getDealStatuses().map(s=>`<option value="${s.name}">${s.name}</option>`).join('');
  }
  if (agentSel) {
    const prev = agentSel.value;
    const agents = Array.from(new Set(DB.clients.map(c=>c.agent).filter(Boolean)));
    agentSel.innerHTML = `<option value="">كل المندوبين</option>` + agents.map(a=>`<option value="${a}">${a}</option>`).join('');
    if (prev && agents.includes(prev)) agentSel.value = prev;
  }
}

function getFilteredMapClients() {
  const status = (document.getElementById('map-filter-status')||{}).value || '';
  const agent = (document.getElementById('map-filter-agent')||{}).value || '';
  return DB.clients.filter(c => (!status || c.status===status) && (!agent || c.agent===agent));
}

function renderClientsMap() {
  const listEl = document.getElementById('clients-map-list');
  if (!listEl) return;
  populateClientsMapFilters();

  const filtered = getFilteredMapClients();
  const withLoc = filtered.filter(c => c.lat && c.lng);
  const withoutLoc = filtered.filter(c => !c.lat || !c.lng);
  const totalValue = filtered.reduce((a,c)=>a+(c.collected||0),0);

  document.getElementById('clients-map-stats').innerHTML = `
    <div class="stat-card gold"><div class="stat-icon" style="color:var(--gold)">${IC.map_pin}</div><div class="stat-label">عملاء محددين على الخريطة</div><div class="stat-value">${withLoc.length}</div></div>
    <div class="stat-card cyan"><div class="stat-icon" style="color:var(--cyan)">${IC.warn}</div><div class="stat-label">محتاجين تحديد موقع</div><div class="stat-value">${withoutLoc.length}</div></div>
    <div class="stat-card green"><div class="stat-icon" style="color:var(--green)">${IC.money}</div><div class="stat-label">إجمالي المحصّل (حسب الفلتر)</div><div class="stat-value" style="font-size:16px">${fmt(totalValue)} ج.م</div></div>
  `;

  // legend + خطوط الحالة
  const legendEl = document.getElementById('clients-map-legend');
  if (legendEl) {
    legendEl.innerHTML = Object.entries(MAP_STATUS_COLORS).map(([status,color]) => `
      <span style="display:inline-flex;align-items:center;gap:5px;font-size:11px;color:var(--text3);margin-left:12px">
        <span style="width:10px;height:10px;border-radius:50%;background:${color};display:inline-block"></span>${status}
      </span>
    `).join('');
  }

  listEl.innerHTML = !filtered.length ? `<div class="empty" style="padding:30px">لا يوجد عملاء مطابقين للفلتر</div>` : filtered.map(c => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;border-bottom:1px solid var(--border2)">
      <div style="min-width:0;display:flex;align-items:center;gap:8px">
        <span style="width:9px;height:9px;border-radius:50%;background:${MAP_STATUS_COLORS[c.status]||'#94a3b8'};flex-shrink:0"></span>
        <div>
          <div style="font-size:12.5px;font-weight:700">${c.name}</div>
          <div style="font-size:11px;color:var(--text3)">${c.address || 'مفيش عنوان مسجّل'} ${c.agent?`— ${c.agent}`:''}</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        ${c.lat && c.lng ? `<button class="act-btn" onclick="focusClientOnMap(${c.id})" title="عرض على الخريطة">${IC.map_pin}</button>` : ''}
        <button class="act-btn" onclick="geocodeClientAddress(${c.id})" title="تحديد الموقع من العنوان">${IC.map_pin}</button>
      </div>
    </div>
  `).join('');

  renderTopSellingAreas();
  renderEmployeeMovementReport();

  ensureLeafletLoaded(() => {
    const mapEl = document.getElementById('clients-map-canvas');
    if (!mapEl) return;
    if (!clientsMapInstance) {
      clientsMapInstance = L.map(mapEl).setView([30.0444, 31.2357], 11); // القاهرة كنقطة بداية
      setClientsMapView(clientsMapViewType);
    }
    clientsMapMarkers.forEach(m => clientsMapInstance.removeLayer(m));
    clientsMapMarkers = [];
    withLoc.forEach(c => {
      const color = MAP_STATUS_COLORS[c.status] || '#94a3b8';
      const radius = 8 + Math.min(10, Math.round((c.collected||0) / 5000)); // كل الدوائر بتكبر شوية حسب المحصّل — شكل بصري لحجم الصفقة
      const marker = L.circleMarker([c.lat, c.lng], { radius, color, fillColor: color, fillOpacity: 0.75, weight: 2 }).addTo(clientsMapInstance)
        .bindPopup(`
          <b>${c.name}</b><br>
          ${c.address||''}<br>
          الحالة: ${c.status}<br>
          المندوب: ${c.agent||'—'}<br>
          المحصّل: ${fmt(c.collected)} ج.م<br>
          <a href="#" onclick="viewClient(${c.id});return false;">فتح ملف العميل</a>
        `);
      marker._clientId = c.id;
      clientsMapMarkers.push(marker);
    });
    if (withLoc.length) {
      const group = L.featureGroup(clientsMapMarkers);
      clientsMapInstance.fitBounds(group.getBounds().pad(0.2));
    }
    setTimeout(() => clientsMapInstance.invalidateSize(), 200);
  });
}

// تقرير أكتر مناطق بيع — بيجمع العملاء حسب المنطقة اللي اتلاقت في العنوان (من AREA_ZONES) ويرتبهم حسب إجمالي المحصّل
function renderTopSellingAreas() {
  const el = document.getElementById('top-areas-report');
  if (!el) return;
  const byArea = {};
  DB.clients.forEach(c => {
    const area = guessAreaFromAddress(c.address) || 'منطقة غير محددة';
    if (!byArea[area]) byArea[area] = { count:0, collected:0, cost:0 };
    byArea[area].count++;
    byArea[area].collected += (c.collected||0);
    byArea[area].cost += (c.cost||0);
  });
  const rows = Object.entries(byArea).sort((a,b)=>b[1].collected - a[1].collected).slice(0,8);
  if (!rows.length) { el.innerHTML = `<div class="empty" style="padding:20px">لا يوجد بيانات كفاية بعد</div>`; return; }
  const maxVal = Math.max(...rows.map(r=>r[1].collected), 1);
  el.innerHTML = rows.map(([area, d]) => `
    <div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
        <span style="font-weight:700">${area}</span>
        <span style="color:var(--text3)">${d.count} عميل — <b style="color:var(--gold)">${fmt(d.collected)} ج.م</b></span>
      </div>
      <div style="background:var(--bg2);border-radius:6px;height:6px;overflow:hidden">
        <div style="background:var(--gold);height:100%;width:${Math.round(d.collected/maxVal*100)}%"></div>
      </div>
    </div>
  `).join('');
}

// تقرير حركة الموظفين — عدد الزيارات الميدانية/المتابعات وعدد الصفقات المغلقة والمناطق اللي بيغطيها كل مندوب
function renderEmployeeMovementReport() {
  const el = document.getElementById('employee-movement-report');
  if (!el) return;
  const agents = Array.from(new Set([...(DB.team||[]).map(t=>t.name), ...(DB.employees||[]).map(e=>e.name), ...DB.clients.map(c=>c.agent).filter(Boolean)]));
  if (!agents.length) { el.innerHTML = `<div class="empty" style="padding:20px">لا يوجد مندوبين مسجّلين بعد</div>`; return; }

  const rows = agents.map(agent => {
    const agentClients = DB.clients.filter(c=>c.agent===agent);
    const agentFollowups = (DB.followups||[]).filter(f => {
      const cl = DB.clients.find(x=>x.id===f.clientId);
      return cl && cl.agent === agent;
    });
    const fieldVisits = agentFollowups.filter(f=>f.type==='زيارة ميدانية').length;
    const closedDeals = (DB.deals||[]).filter(d=>d.agent===agent && d.status==='نشط / مكتمل').length;
    const areas = new Set(agentClients.map(c=>guessAreaFromAddress(c.address)).filter(Boolean));
    return { agent, clientsCount: agentClients.length, followupsCount: agentFollowups.length, fieldVisits, closedDeals, areasCount: areas.size };
  }).filter(r => r.clientsCount > 0 || r.followupsCount > 0).sort((a,b)=>b.followupsCount - a.followupsCount);

  if (!rows.length) { el.innerHTML = `<div class="empty" style="padding:20px">لا يوجد نشاط مسجّل بعد</div>`; return; }
  el.innerHTML = `<div class="table-wrap"><table style="font-size:12px">
    <thead><tr><th>المندوب</th><th>عملاء</th><th>متابعات</th><th>زيارات ميدانية</th><th>صفقات مغلقة</th><th>مناطق مغطاة</th></tr></thead>
    <tbody>${rows.map(r => `
      <tr>
        <td style="font-weight:700">${r.agent}</td>
        <td>${r.clientsCount}</td>
        <td>${r.followupsCount}</td>
        <td>${r.fieldVisits}</td>
        <td style="color:var(--green)">${r.closedDeals}</td>
        <td>${r.areasCount}</td>
      </tr>
    `).join('')}</tbody>
  </table></div>`;
}

function focusClientOnMap(clientId) {
  const c = DB.clients.find(x=>x.id===clientId);
  if (!c || !clientsMapInstance) return;
  clientsMapInstance.setView([c.lat, c.lng], 15);
  const marker = clientsMapMarkers.find(m => m._clientId === clientId);
  if (marker) marker.openPopup();
}

function playVoiceNote(dataUrl) {
  let player = document.getElementById('global-voice-player');
  if (!player) {
    player = document.createElement('audio');
    player.id = 'global-voice-player';
    player.controls = true;
    player.style.cssText = 'position:fixed;bottom:16px;left:16px;z-index:9999;background:var(--bg2);border-radius:30px;box-shadow:0 4px 20px rgba(0,0,0,.4)';
    document.body.appendChild(player);
  }
  player.src = dataUrl;
  player.style.display = 'block';
  player.play();
}

function addFollowupFor(clientId) {
  editingFollowupId = null;
  document.getElementById('modal-followup-title').textContent = 'إضافة متابعة';
  const sel = document.getElementById('fu-client');
  if (!DB.clients.length) { sel.innerHTML = `<option value="">أضف عميل أولاً</option>`; }
  else sel.innerHTML = DB.clients.map(c=>`<option value="${c.id}" ${c.id===clientId?'selected':''}>${c.name}</option>`).join('');
  document.getElementById('fu-type').value = 'مكالمة هاتفية';
  document.getElementById('fu-note').value='';
  document.getElementById('fu-next').value='';
  document.getElementById('fu-next-date').value='';
  document.getElementById('fu-duration').value='';
  const agentSel = document.getElementById('fu-agent');
  const cur = getCurrentUser();
  const names = getAgentNames();
  const defaultAgent = (cur && names.includes(cur.name)) ? cur.name : '';
  agentSel.innerHTML = `<option value="">— غير محدد —</option>` + names.map(n=>`<option value="${n}">${n}</option>`).join('');
  agentSel.value = defaultAgent;
  resetVoiceRecorderUI('followup', null);
  openModal('modal-followup');
}

function editFollowup(id) {
  const f = DB.followups.find(x=>x.id===id);
  if (!f) return;
  editingFollowupId = id;
  document.getElementById('modal-followup-title').textContent = 'تعديل المتابعة';
  const sel = document.getElementById('fu-client');
  sel.innerHTML = DB.clients.map(c=>`<option value="${c.id}" ${c.id===f.clientId?'selected':''}>${c.name}</option>`).join('');
  document.getElementById('fu-type').value = f.type;
  document.getElementById('fu-note').value = f.note||'';
  document.getElementById('fu-next').value = f.next||'';
  document.getElementById('fu-next-date').value = f.nextDate||'';
  document.getElementById('fu-duration').value = f.duration || '';
  const agentSel = document.getElementById('fu-agent');
  const names = getAgentNames();
  agentSel.innerHTML = `<option value="">— غير محدد —</option>` + names.map(n=>`<option value="${n}">${n}</option>`).join('');
  if (f.agent && !names.includes(f.agent)) agentSel.insertAdjacentHTML('beforeend', `<option value="${f.agent}">${f.agent}</option>`);
  agentSel.value = f.agent || '';
  resetVoiceRecorderUI('followup', f.audioNote || null);
  openModal('modal-followup');
}

function saveFollowup() {
  const clientId = parseInt(document.getElementById('fu-client').value);
  const type = document.getElementById('fu-type').value;
  const note = document.getElementById('fu-note').value.trim();
  const ok = runValidation([
    {id:'fu-client', value:clientId, test:v=>!isNaN(v)&&v>0, message:'اختر العميل أولاً'},
    {id:'fu-type', value:type, test:isRequired, message:'اختر نوع المتابعة'},
    {id:'fu-note', value:note, test:isRequired, message:'اكتب تفاصيل المتابعة'},
  ]);
  if (!ok) return;
  const next = document.getElementById('fu-next').value.trim();
  const nextDate = document.getElementById('fu-next-date').value;
  const agent = document.getElementById('fu-agent').value;
  const durationRaw = document.getElementById('fu-duration').value;
  const duration = durationRaw !== '' ? Math.max(0, parseInt(durationRaw, 10) || 0) : null;
  if (editingFollowupId) {
    const idx = DB.followups.findIndex(x=>x.id===editingFollowupId);
    DB.followups[idx] = {...DB.followups[idx], clientId, type, note, next, nextDate, agent, duration, audioNote: voiceNoteDrafts.followup || null};
    toast('تم تحديث المتابعة');
  } else {
    DB.followups.push({ id:Date.now(), clientId, type, note, next, nextDate, agent, duration, audioNote: voiceNoteDrafts.followup || null, date: new Date().toLocaleDateString('ar-EG-u-nu-latn'), done:false });
    toast('تم حفظ المتابعة');
  }
  saveDB(); closeModal('modal-followup'); renderPage(currentPage);
}

async function deleteFollowup(id) {
  if (!(await confirmDialog('هل تريد حذف هذه المتابعة؟'))) return;
  DB.followups = DB.followups.filter(x=>x.id!==id);
  saveDB(); toast('تم الحذف','error'); renderPage(currentPage);
}

function toggleFollowupDone(id) {
  const f = DB.followups.find(x=>x.id===id);
  if (!f) return;
  f.done = !f.done;
  saveDB(); renderPage(currentPage);
}

function followupUrgency(f) {
  if (f.done) return 'done';
  if (!f.nextDate) return 'none';
  const today = new Date(); today.setHours(0,0,0,0);
  const nd = new Date(f.nextDate); nd.setHours(0,0,0,0);
  if (nd < today) return 'overdue';
  if (nd.getTime() === today.getTime()) return 'today';
  return 'upcoming';
}

function getFollowupStats() {
  const list = DB.followups||[];
  let overdue=0, today=0, upcoming=0;
  list.forEach(f=>{
    const u = followupUrgency(f);
    if (u==='overdue') overdue++;
    else if (u==='today') today++;
    else if (u==='upcoming') upcoming++;
  });
  return {total:list.length, overdue, today, upcoming};
}

function updateFollowupsBadge() {
  const badge = document.getElementById('followups-nav-badge');
  const s = getFollowupStats();
  const urgent = s.overdue + s.today;
  if (badge) {
    badge.textContent = urgent || '';
    badge.style.display = urgent ? 'inline' : 'none';
  }
  updateNotifBadge();
}

// ══════════════════════════════════════════
// NOTIFICATIONS (الإشعارات)
// ══════════════════════════════════════════
function updateNotifBadge() {
  const n = getNotifItems().length;
  const badge = document.getElementById('notif-badge');
  if (badge) {
    badge.textContent = n > 9 ? '9+' : (n || '');
    badge.style.display = n ? 'flex' : 'none';
  }
}

// بيحدد هل الصفقة لسه شغالة (مش مكتملة/ملغية) حسب لون حالتها في إعدادات حالات الصفقات
function isDealActive(d) {
  const st = getDealStatuses().find(s => s.name === d.status);
  const color = st ? st.color : 'gray';
  return color !== 'green' && color !== 'red';
}

// بيحسب درجة استعجال ميعاد الصفقة بناءً على تاريخها (متأخرة / خلال 3 أيام / لسه بعيدة)
function dealDeadlineUrgency(d) {
  const iso = ddmmToISO(d.date);
  if (!iso) return 'none';
  const today = new Date(); today.setHours(0,0,0,0);
  const dd = new Date(iso); dd.setHours(0,0,0,0);
  const diffDays = Math.round((dd - today) / 86400000);
  if (diffDays < 0) return 'overdue';
  if (diffDays <= 3) return 'soon';
  return 'none';
}

function getDealDeadlineItems() {
  return (DB.deals||[])
    .filter(d => isDealActive(d))
    .map(d => ({...d, _urgency: dealDeadlineUrgency(d), _client: DB.clients.find(c=>c.id===d.clientId)}))
    .filter(d => ['overdue','soon'].includes(d._urgency));
}

// الصفقات المكتملة اللي لسه فيها مبلغ متبقي متحصّلش — يعني العمولة عليها لسه مستحقة
function getCommissionDueItems() {
  return (DB.deals||[])
    .filter(d => {
      const st = getDealStatuses().find(s => s.name === d.status);
      return st && st.color === 'green' && Number(d.collected||0) < Number(d.cost||0);
    })
    .map(d => ({...d, _client: DB.clients.find(c=>c.id===d.clientId)}));
}

// صفقات "قيد المتابعة" (نشطة، مش مكتملة ولا ملغية) من غير أي تحديث لحالتها من فترة طويلة
function getStaleDealItems() {
  const ns = getNotificationSettings();
  const days = Number(ns.staleDealDays) || 5;
  const today = new Date(); today.setHours(0,0,0,0);
  return (DB.deals||[])
    .filter(d => isDealActive(d))
    .map(d => {
      const baseDateStr = d.statusUpdatedAt || ddmmToISO(d.date);
      if (!baseDateStr) return null;
      const bd = new Date(baseDateStr); bd.setHours(0,0,0,0);
      const diffDays = Math.round((today - bd) / 86400000);
      if (diffDays < days) return null;
      return {...d, _staleDays: diffDays, _client: DB.clients.find(c=>c.id===d.clientId)};
    })
    .filter(Boolean);
}

// تذكير تجديد سنوي/دوري للعميل — بناءً على تاريخ التجديد المسجّل في بطاقة العميل
function renewalUrgency(c) {
  if (!c.renewalDate) return 'none';
  const today = new Date(); today.setHours(0,0,0,0);
  const rd = new Date(c.renewalDate); rd.setHours(0,0,0,0);
  const diffDays = Math.round((rd - today) / 86400000);
  if (diffDays < 0) return 'overdue';
  if (diffDays <= 14) return 'soon';
  return 'none';
}
function getRenewalItems() {
  return (DB.clients||[])
    .filter(c => c.renewalDate)
    .map(c => ({...c, _urgency: renewalUrgency(c), _daysLeft: Math.round((new Date(c.renewalDate) - new Date().setHours(0,0,0,0)) / 86400000)}))
    .filter(c => ['overdue','soon'].includes(c._urgency));
}
function sendRenewalWhatsapp(clientId) {
  const c = DB.clients.find(x => x.id === clientId);
  if (!c) return;
  if (!c.phone) { toast('العميل ده مفيهوش رقم تليفون مسجّل', 'error'); return; }
  const s = DB.settings || {};
  const company = s.brandName || '';
  const text = `تذكير من ${company}\nمرحباً "${c.name}"، ميعاد تجديد "${c.service || 'الخدمة'}" الخاص بيك ${(c._urgency||renewalUrgency(c))==='overdue' ? 'كان' : 'قرب'} بتاريخ ${formatDateDisplay(c.renewalDate)}.\nياريت تتواصل معانا في أقرب وقت لإتمام التجديد.`;
  const url = `https://wa.me/${cleanPhoneForWa(c.phone)}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  logActivity('إرسال تذكير تجديد واتساب', c.name);
}

// تقييمات نجمة واحدة لسه محتاجة متابعة من المسؤول (alertAck لسه false) — بتتحط كتنبيه فوري لحد ما حد يأكّد إنه شافها
function getLowRatingItems() {
  return (DB.feedbacks||[])
    .filter(f => f.rating === 1 && !f.alertAck)
    .map(f => ({...f, _client: DB.clients.find(c=>c.id===f.clientId)}));
}

function getNotifItems() {
  const ns = getNotificationSettings();
  let list = [];
  if (ns.followups !== false) {
    list = list.concat((DB.followups||[])
      .map(f => ({...f, _type:'followup', _urgency: followupUrgency(f), _client: DB.clients.find(c=>c.id===f.clientId)}))
      .filter(f => ['overdue','today','upcoming'].includes(f._urgency)));
  }
  if (ns.dealDeadline !== false) {
    list = list.concat(getDealDeadlineItems().map(d => ({...d, _type:'deal'})));
  }
  if (ns.commissionDue !== false) {
    list = list.concat(getCommissionDueItems().map(d => ({...d, _type:'commission', _urgency:'due'})));
  }
  if (ns.walletCommissionDue !== false) {
    list = list.concat(getCommissionWalletDueItems().map(item => ({...item, _type:'walletCommission', _urgency:'due'})));
  }
  if (ns.staleDeal !== false) {
    list = list.concat(getStaleDealItems().map(d => ({...d, _type:'staleDeal', _urgency:'due'})));
  }
  if (ns.renewalDue !== false) {
    list = list.concat(getRenewalItems().map(c => ({...c, _type:'renewal'})));
  }
  if (ns.lowRating !== false) {
    list = list.concat(getLowRatingItems().map(f => ({...f, _type:'lowRating', _urgency:'overdue'})));
  }
  const order = {overdue:0, today:1, soon:2, due:3, upcoming:4};
  list.sort((a,b) => {
    const oa = order[a._urgency] !== undefined ? order[a._urgency] : 9;
    const ob = order[b._urgency] !== undefined ? order[b._urgency] : 9;
    if (oa !== ob) return oa - ob;
    return new Date(a.nextDate || a.date || 0) - new Date(b.nextDate || b.date || 0);
  });
  return list;
}

function toggleNotifDropdown(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('notif-dropdown');
  if (!dd) return;
  if (dd.classList.contains('open')) { closeNotifDropdown(); return; }
  renderNotifDropdown();
  dd.classList.add('open');
}

function closeNotifDropdown() {
  const dd = document.getElementById('notif-dropdown');
  if (dd) dd.classList.remove('open');
}

document.addEventListener('click', e => {
  const wrap = document.getElementById('notif-wrap');
  if (wrap && !wrap.contains(e.target)) closeNotifDropdown();
});

// ══════════════════════════════════════════
// البحث الشامل (Global Search) — بحث فوري في العملاء والصفقات والموظفين
// والخدمات والمهام والمتابعات، وكمان صفحات السيستم نفسها، من أي مكان
// ══════════════════════════════════════════
function escapeHtml(str) {
  return String(str == null ? '' : str).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
}
function toggleGlobalSearch(e) {
  if (e) e.stopPropagation();
  const dd = document.getElementById('gsearch-dropdown');
  if (!dd) return;
  if (dd.classList.contains('open')) { closeGlobalSearch(); return; }
  closeNotifDropdown();
  dd.classList.add('open');
  const bd = document.getElementById('gsearch-backdrop');
  if (bd) bd.classList.add('open');
  const input = document.getElementById('gsearch-input');
  setTimeout(() => { if (input) input.focus(); }, 50);
}
function closeGlobalSearch() {
  const dd = document.getElementById('gsearch-dropdown');
  if (dd) dd.classList.remove('open');
  const bd = document.getElementById('gsearch-backdrop');
  if (bd) bd.classList.remove('open');
}
function clearGlobalSearch() {
  const input = document.getElementById('gsearch-input');
  if (input) { input.value = ''; input.focus(); }
  renderGlobalSearchResults();
}
function gsearchKeydown(e) {
  if (e.key === 'Escape') { closeGlobalSearch(); return; }
  if (e.key === 'Enter') {
    const first = document.querySelector('#gsearch-results .gsearch-item');
    if (first) first.click();
  }
}
document.addEventListener('click', e => {
  const wrap = document.getElementById('gsearch-wrap');
  if (wrap && !wrap.contains(e.target)) closeGlobalSearch();
});

// أيقونات مصغّرة لكل نوع نتيجة في قايمة البحث الشامل
const GSEARCH_ICONS = {
  page: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
  client: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  deal: IC.pipeline,
  employee: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  service: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41L13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  task: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  followup: IC.followup
};
const GSEARCH_GROUP_LABELS = { page: 'الصفحات', client: 'العملاء', deal: 'الصفقات', employee: 'الموظفين', service: 'الخدمات', task: 'المهام', followup: 'المتابعات' };

// بيرجع قايمة نتايج من كل نوع بيانات، كل عنصر فيه: label رئيسي، sub وصف تحته، وonclick handler
function gsearchCollectResults(q) {
  const results = { page: [], client: [], deal: [], employee: [], service: [], task: [], followup: [] };
  const MAX_PER_GROUP = 5;

  // الصفحات (الميزات) — بندور في اسم الصفحة نفسها عشان لو حد مش لاقي ميزة يقدر يوصلها بسرعة
  Object.keys(pageTitles).forEach(p => {
    if (p === 'developer' && !isDeveloperUser()) return;
    if (!isPageAllowedForUser(p)) return;
    if (pageTitles[p].toLowerCase().includes(q) && results.page.length < MAX_PER_GROUP) {
      results.page.push({ name: pageTitles[p], sub: 'صفحة في السيستم', go: () => navigate(p) });
    }
  });

  (DB.clients || []).forEach(c => {
    if (results.client.length >= MAX_PER_GROUP) return;
    const hay = [c.name, c.owner, c.phone, c.address, c.service, c.agent].filter(Boolean).join(' ').toLowerCase();
    if (hay.includes(q)) {
      results.client.push({ name: c.name, sub: [c.phone, c.service].filter(Boolean).join(' · '), go: () => { navigate('clients'); setTimeout(() => viewClient(c.id), 150); } });
    }
  });

  (DB.deals || []).forEach(d => {
    if (results.deal.length >= MAX_PER_GROUP) return;
    const client = (DB.clients || []).find(c => c.id === d.clientId);
    const hay = [client ? client.name : '', d.service, d.agent, d.status, d.notes].filter(Boolean).join(' ').toLowerCase();
    if (hay.includes(q)) {
      results.deal.push({ name: `${client ? client.name : 'عميل محذوف'} — ${d.service || ''}`, sub: `${fmt(d.cost)} ج.م · ${d.status || ''}`, go: () => { navigate('deals'); setTimeout(() => editDeal(d.id), 150); } });
    }
  });

  (DB.employees || []).forEach(emp => {
    if (results.employee.length >= MAX_PER_GROUP) return;
    const hay = [emp.name, emp.phone, emp.jobTitle, emp.email, emp.role].filter(Boolean).join(' ').toLowerCase();
    if (hay.includes(q)) {
      results.employee.push({ name: emp.name, sub: [emp.jobTitle, emp.phone].filter(Boolean).join(' · '), go: () => { navigate('employees'); setEmployeesTab('staff'); setTimeout(() => editEmployee(emp.id), 150); } });
    }
  });

  (DB.services || []).forEach(s => {
    if (results.service.length >= MAX_PER_GROUP) return;
    const hay = [s.name, s.notes].filter(Boolean).join(' ').toLowerCase();
    if (hay.includes(q)) {
      results.service.push({ name: s.name, sub: `${fmt(s.price)} ج.م`, go: () => { navigate('services'); setTimeout(() => editService(s.id), 150); } });
    }
  });

  (DB.tasks || []).forEach(t => {
    if (results.task.length >= MAX_PER_GROUP) return;
    const hay = [t.title, t.notes, t.assignee].filter(Boolean).join(' ').toLowerCase();
    if (hay.includes(q)) {
      results.task.push({ name: t.title, sub: t.assignee ? `مسؤول: ${t.assignee}` : 'مهمة', go: () => { navigate('tasks'); setTimeout(() => editTask(t.id), 150); } });
    }
  });

  (DB.followups || []).forEach(f => {
    if (results.followup.length >= MAX_PER_GROUP) return;
    const client = (DB.clients || []).find(c => c.id === f.clientId);
    const hay = [client ? client.name : '', f.note, f.type, f.agent].filter(Boolean).join(' ').toLowerCase();
    if (hay.includes(q)) {
      results.followup.push({ name: client ? client.name : 'عميل محذوف', sub: f.note || f.type || 'متابعة', go: () => { navigate('followups'); setTimeout(() => editFollowup(f.id), 150); } });
    }
  });

  return results;
}

function renderGlobalSearchResults() {
  const input = document.getElementById('gsearch-input');
  const box = document.getElementById('gsearch-results');
  const clearBtn = document.getElementById('gsearch-clear-btn');
  if (!input || !box) return;
  const q = input.value.trim().toLowerCase();
  if (clearBtn) clearBtn.style.display = q ? 'flex' : 'none';

  if (!q) {
    box.innerHTML = `<div class="gsearch-empty">اكتب أي حاجة تدور عليها — اسم عميل، رقم تليفون، صفقة، موظف، أو حتى اسم صفحة في السيستم</div>`;
    return;
  }

  const results = gsearchCollectResults(q);
  window._gsearchResults = results; // نحتفظ بالنتايج عشان الـ onclick يلاقيها
  const groupsWithResults = Object.keys(results).filter(k => results[k].length);

  if (!groupsWithResults.length) {
    box.innerHTML = `<div class="gsearch-noresult">مفيش نتايج لـ "${input.value.trim()}"</div>`;
    return;
  }

  box.innerHTML = groupsWithResults.map(type => `
    <div class="gsearch-group-label">${GSEARCH_GROUP_LABELS[type]}</div>
    ${results[type].map((r, idx) => `
      <div class="gsearch-item" onclick="gsearchRun('${type}', ${idx})">
        <div class="gsearch-item-icon">${GSEARCH_ICONS[type]}</div>
        <div class="gsearch-item-text">
          <div class="gsearch-item-name">${escapeHtml(r.name)}</div>
          ${r.sub ? `<div class="gsearch-item-sub">${escapeHtml(r.sub)}</div>` : ''}
        </div>
        <div class="gsearch-item-arrow">${IC.arrow}</div>
      </div>
    `).join('')}
  `).join('');
}

function gsearchRun(type, idx) {
  const results = window._gsearchResults;
  if (!results || !results[type] || !results[type][idx]) return;
  const item = results[type][idx];
  closeGlobalSearch();
  clearGlobalSearch();
  item.go();
}

function renderNotifDropdown() {
  const wrap = document.getElementById('notif-dropdown-list');
  if (!wrap) return;
  const items = getNotifItems().slice(0, 8);
  const urgencyLabel = {overdue:'متأخرة', today:'اليوم', upcoming:'قادمة', soon:'قريبة', due:'مستحقة'};
  const urgencyColor = {overdue:'var(--red)', today:'var(--gold)', upcoming:'var(--cyan)', soon:'var(--gold)', due:'var(--cyan)'};
  if (!items.length) {
    wrap.innerHTML = `<div class="notif-empty">${IC.followup}<div style="margin-top:8px">لا توجد تذكيرات الآن</div></div>`;
    return;
  }
  wrap.innerHTML = items.map(f => {
    if (f._type === 'deal') {
      return `
      <div class="notif-item" onclick="closeNotifDropdown(); navigate('deals')">
        <div class="notif-dot" style="background:${urgencyColor[f._urgency]}"></div>
        <div class="notif-item-text">
          <div class="notif-item-name">${f._client?f._client.name:'—'} <span class="badge" style="background:${urgencyColor[f._urgency]}22;color:${urgencyColor[f._urgency]};margin-right:4px">قرب موعد الصفقة</span></div>
          <div class="notif-item-note">${f.service||''}</div>
          <div class="notif-item-date">موعد الصفقة: ${formatDateDisplay(ddmmToISO(f.date))}</div>
        </div>
      </div>`;
    }
    if (f._type === 'commission') {
      return `
      <div class="notif-item" onclick="closeNotifDropdown(); navigate('deals')">
        <div class="notif-dot" style="background:${urgencyColor.due}"></div>
        <div class="notif-item-text">
          <div class="notif-item-name">${f._client?f._client.name:'—'} <span class="badge" style="background:${urgencyColor.due}22;color:${urgencyColor.due};margin-right:4px">عمولة مستحقة</span></div>
          <div class="notif-item-note">متبقي ${fmt((f.cost||0)-(f.collected||0))} ج.م من قيمة الصفقة</div>
        </div>
      </div>`;
    }
    if (f._type === 'walletCommission') {
      return `
      <div class="notif-item" onclick="closeNotifDropdown(); navigate('employees')">
        <div class="notif-dot" style="background:${urgencyColor.due}"></div>
        <div class="notif-item-text">
          <div class="notif-item-name">${f.name || '—'} <span class="badge" style="background:${urgencyColor.due}22;color:${urgencyColor.due};margin-right:4px">رصيد عمولة متاح للسحب</span></div>
          <div class="notif-item-note">${fmt(f._available)} ج.م متاحة من غير سحب من ${f._daysSince} يوم</div>
        </div>
      </div>`;
    }
    if (f._type === 'staleDeal') {
      return `
      <div class="notif-item" onclick="closeNotifDropdown(); navigate('deals')">
        <div class="notif-dot" style="background:${urgencyColor.due}"></div>
        <div class="notif-item-text">
          <div class="notif-item-name">${f._client?f._client.name:'—'} <span class="badge" style="background:${urgencyColor.due}22;color:${urgencyColor.due};margin-right:4px">واقفة من غير تحديث</span></div>
          <div class="notif-item-note">${f.service||''} — قيد المتابعة من غير تحديث حالة من ${f._staleDays} يوم</div>
        </div>
      </div>`;
    }
    if (f._type === 'renewal') {
      const overdue = f._urgency === 'overdue';
      return `
      <div class="notif-item" onclick="closeNotifDropdown(); sendRenewalWhatsapp(${JSON.stringify(f.id)})">
        <div class="notif-dot" style="background:${overdue?'var(--red)':urgencyColor.soon}"></div>
        <div class="notif-item-text">
          <div class="notif-item-name">${f.name||'—'} <span class="badge" style="background:${(overdue?'var(--red)':urgencyColor.soon)}22;color:${overdue?'var(--red)':urgencyColor.soon};margin-right:4px">${overdue?'اتأخر ميعاد التجديد':'قرب ميعاد التجديد'}</span></div>
          <div class="notif-item-note">${overdue ? `اتأخر ${Math.abs(f._daysLeft)} يوم` : `باقي ${f._daysLeft} يوم`} — دوس هنا تبعتله تذكير واتساب</div>
        </div>
      </div>`;
    }
    if (f._type === 'lowRating') {
      return `
      <div class="notif-item" onclick="closeNotifDropdown(); navigate('feedback')">
        <div class="notif-dot" style="background:var(--red)"></div>
        <div class="notif-item-text">
          <div class="notif-item-name">${f._client?f._client.name:'—'} <span class="badge" style="background:var(--red-dim);color:var(--red);margin-right:4px">${IC.star_fill} تقييم سيء</span></div>
          <div class="notif-item-note">المسؤول: ${f._client?(f._client.agent||'—'):'—'}${f.comment?' — "'+f.comment+'"':''}</div>
          <div class="notif-item-date">${f.date||''}</div>
        </div>
      </div>`;
    }
    return `
    <div class="notif-item" onclick="closeNotifDropdown(); editFollowup(${JSON.stringify(f.id)})">
      <div class="notif-dot" style="background:${urgencyColor[f._urgency]}"></div>
      <div class="notif-item-text">
        <div class="notif-item-name">${f._client?f._client.name:'—'} <span class="badge" style="background:${urgencyColor[f._urgency]}22;color:${urgencyColor[f._urgency]};margin-right:4px">${urgencyLabel[f._urgency]}</span></div>
        <div class="notif-item-note">${f.note||f.type||''}</div>
        ${f.nextDate?`<div class="notif-item-date">موعد المتابعة: ${f.nextDate}</div>`:''}
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════
// اقتراحات ذكية للمتابعة — النظام بيقترح: "معدي X أيام من غير رد على العميل ده، كلمه"
// بناءً على تاريخ آخر تفاعل فعلي مع العميل (آخر متابعة مسجّلة أو تاريخ إضافته)، مش موعد ثابت
// ══════════════════════════════════════════
function getSmartFollowupSuggestions(thresholdDays = 10) {
  // العملاء اللي معاهم صفقة نشطة حاليًا (مش مكتملة ولا ملغية) هما اللي محتاجين متابعة فعلاً
  const activeClientIds = new Set((DB.deals||[]).filter(isDealActive).map(d=>d.clientId));
  return (DB.clients||[])
    .filter(c => !c.archived && activeClientIds.has(c.id))
    .map(c => {
      const last = clientLastActivity(c);
      return { client: c, lastActivity: last, days: last ? daysSince(last) : null };
    })
    .filter(x => x.days !== null && x.days >= thresholdDays)
    .sort((a,b) => b.days - a.days);
}

function renderSmartFollowupSuggestions() {
  const box = document.getElementById('smart-fu-suggestions');
  if (!box) return;
  const threshold = parseInt(document.getElementById('smart-fu-threshold')?.value || '10', 10);
  const suggestions = getSmartFollowupSuggestions(threshold);

  if (!suggestions.length) {
    box.innerHTML = `<div class="empty" style="padding:24px"><div style="font-size:13px;display:flex;align-items:center;justify-content:center;gap:6px"><span style="width:14px;height:14px;display:inline-flex;color:var(--green)">${IC.check}</span> مفيش عملاء معدّيين ${threshold} يوم من غير تفاعل — كله تمام</div></div>`;
    return;
  }

  box.innerHTML = `<div class="smart-fu-list">${suggestions.map(x => {
    const c = x.client;
    const urgent = x.days >= threshold * 2;
    return `<div class="smart-fu-card ${urgent?'smart-fu-urgent':''}">
      <div class="smart-fu-icon">${IC.warn}</div>
      <div class="smart-fu-text">
        <b>${c.name}</b>
        <span>معدي <b>${x.days}</b> يوم من غير رد — كلمه عشان الصفقة متتبردش</span>
      </div>
      <div class="smart-fu-actions">
        ${callBtnHtml(c.phone)}
        <button class="act-btn" title="تسجيل متابعة" onclick="addFollowupFor(${c.id})">${IC.followup}</button>
      </div>
    </div>`;
  }).join('')}</div>`;
}

function renderFollowups() {
  renderSmartFollowupSuggestions();
  const clientSel = document.getElementById('fu-filter-client');
  if (clientSel && clientSel.options.length === 1) {
    DB.clients.forEach(c => { const o=document.createElement('option'); o.value=c.id; o.text=c.name; clientSel.appendChild(o); });
  }
  const search = (document.getElementById('fu-search')||{}).value?.toLowerCase()||'';
  const urgencyFilter = (document.getElementById('fu-filter-urgency')||{}).value||'';
  const clientFilter = (document.getElementById('fu-filter-client')||{}).value||'';

  let list = (DB.followups||[]).map(f => ({...f, _urgency: followupUrgency(f), _client: DB.clients.find(c=>c.id===f.clientId)}));
  if (search) list = list.filter(f => (f._client && f._client.name.toLowerCase().includes(search)) || (f.note||'').toLowerCase().includes(search));
  if (urgencyFilter) list = list.filter(f => f._urgency === urgencyFilter);
  if (clientFilter) list = list.filter(f => String(f.clientId) === clientFilter);

  const order = {overdue:0, today:1, upcoming:2, none:3, done:4};
  const sortMode = (document.getElementById('fu-sort')||{}).value||'';
  if (sortMode === 'name') {
    list.sort((a,b) => (a._client?a._client.name:'').localeCompare((b._client?b._client.name:''), 'ar'));
  } else if (sortMode === 'newest') {
    list.sort((a,b) => b.id - a.id);
  } else if (sortMode === 'oldest') {
    list.sort((a,b) => a.id - b.id);
  } else {
    list.sort((a,b)=>{
      if (order[a._urgency] !== order[b._urgency]) return order[a._urgency]-order[b._urgency];
      if (a._urgency === 'upcoming') return new Date(a.nextDate) - new Date(b.nextDate);
      return b.id - a.id;
    });
  }

  const s = getFollowupStats();
  document.getElementById('fu-stats').innerHTML = `
    <div class="stat-card red">
      <div class="stat-icon" style="color:var(--red)">${IC.warn}</div>
      <div class="stat-label">متابعات متأخرة</div>
      <div class="stat-value">${s.overdue}</div>
    </div>
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.clock}</div>
      <div class="stat-label">متابعات اليوم</div>
      <div class="stat-value">${s.today}</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.arrow}</div>
      <div class="stat-label">متابعات قادمة</div>
      <div class="stat-value">${s.upcoming}</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="color:var(--text3)">${IC.followup}</div>
      <div class="stat-label">إجمالي المتابعات</div>
      <div class="stat-value">${s.total}</div>
    </div>
  `;

  const wrap = document.getElementById('followups-page-list');
  if (!list.length) {
    wrap.innerHTML = `<div class="empty"><div class="empty-icon">${IC.followup}</div>لا توجد متابعات</div>`;
    renderFollowupEffortSummary();
    updateFollowupsBadge();
    return;
  }
  const urgencyLabel = {overdue:'متأخرة', today:'اليوم', upcoming:'قادمة', none:'بدون موعد', done:'مكتملة'};
  const urgencyColor = {overdue:'var(--red)', today:'var(--gold)', upcoming:'var(--cyan)', none:'var(--text3)', done:'var(--green)'};
  wrap.innerHTML = list.map(f => `
    <div class="followup-item" style="opacity:${f.done?0.55:1}">
      <div class="fu-dot" style="background:${urgencyColor[f._urgency]}"></div>
      <div class="fu-text">
        <div class="fu-name">${f._client?f._client.name:'—'} • <span style="color:var(--cyan)">${f.type}</span>${f.duration?` <span style="color:var(--text3);font-size:11px">(${f.duration} د)</span>`:''}
          <span class="badge" style="background:${urgencyColor[f._urgency]}22;color:${urgencyColor[f._urgency]};margin-right:6px">${urgencyLabel[f._urgency]}</span>
        </div>
        <div class="fu-note">${f.note||''}</div>
        ${f.next?`<div class="fu-next-line" style="font-size:11px;color:var(--orange);margin-top:2px;display:flex;align-items:center;gap:4px">${IC.arrow} ${f.next}</div>`:''}
        ${f.nextDate?`<div style="font-size:11px;color:${urgencyColor[f._urgency]};margin-top:2px;font-weight:700">موعد المتابعة القادم: ${f.nextDate}</div>`:''}
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <div class="fu-date">${f.date}${f.agent?` • ${f.agent}`:''}</div>
        <div class="actions">
          ${f._client ? callBtnHtml(f._client.phone) : ''}
          ${f.audioNote ? `<button class="act-btn" onclick="playVoiceNote(${JSON.stringify(f.audioNote)})" title="تشغيل الملاحظة الصوتية">${IC.play}</button>` : ''}
          <button class="act-btn" onclick="toggleFollowupDone(${JSON.stringify(f.id)})" title="${f.done?'إعادة فتح':'تمت المتابعة'}">${IC.check}</button>
          <button class="act-btn" onclick="editFollowup(${JSON.stringify(f.id)})" title="تعديل">${IC.edit}</button>
          <button class="act-btn danger" onclick="deleteFollowup(${JSON.stringify(f.id)})" title="حذف">${IC.trash}</button>
        </div>
      </div>
    </div>
  `).join('');
  renderFollowupEffortSummary();
  updateFollowupsBadge();
}

// ملخّص جهد كل موظف — عدد مرات التواصل + إجمالي المدة، بناءً على المتابعات المسجّلة باسمه
function renderFollowupEffortSummary() {
  const wrap = document.getElementById('fu-effort-summary');
  if (!wrap) return;
  const list = (DB.followups||[]).filter(f => f.agent);
  if (!list.length) { wrap.innerHTML = ''; return; }
  const byAgent = {};
  list.forEach(f => {
    if (!byAgent[f.agent]) byAgent[f.agent] = { count: 0, duration: 0 };
    byAgent[f.agent].count++;
    byAgent[f.agent].duration += (f.duration || 0);
  });
  const agents = Object.keys(byAgent).sort((a,b) => byAgent[b].count - byAgent[a].count);
  wrap.innerHTML = `
    <div class="card" style="padding:12px 14px;margin-bottom:14px">
      <div style="font-size:12px;font-weight:700;color:var(--text3);margin-bottom:8px">جهد كل موظف في التواصل</div>
      <div style="display:flex;flex-wrap:wrap;gap:10px">
        ${agents.map(a => `
          <div style="background:var(--bg3);border-radius:var(--radius2);padding:8px 12px;min-width:150px">
            <div style="font-size:12.5px;font-weight:700">${a}</div>
            <div style="font-size:11px;color:var(--text3);margin-top:2px">${byAgent[a].count} تواصل${byAgent[a].duration ? ` • ${byAgent[a].duration} دقيقة` : ''}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ══════════════════════════════════════════
// TASKS — مهام إدارية بسيطة منفصلة عن متابعات العملاء (زي "جهز عرض سعر" أو "راجع فاتورة")
// ══════════════════════════════════════════
let editingTaskId = null;
const TASK_PRIORITIES = { high: {label:'عالية', color:'red'}, normal: {label:'عادية', color:'gold'}, low: {label:'منخفضة', color:'gray'} };

function populateTaskAssigneeSelect() {
  const sel = document.getElementById('task-assignee');
  if (!sel) return;
  const names = new Set();
  (DB.team||[]).forEach(m=>names.add(m.name));
  (DB.employees||[]).forEach(e=>names.add(e.name));
  sel.innerHTML = `<option value="">بدون تحديد</option>` + Array.from(names).map(n=>`<option value="${n}">${n}</option>`).join('');
}

function openAddTask() {
  editingTaskId = null;
  document.getElementById('modal-task-title').textContent = 'مهمة جديدة';
  document.getElementById('task-title-input').value = '';
  document.getElementById('task-due').value = todayISO();
  document.getElementById('task-priority').value = 'normal';
  document.getElementById('task-notes').value = '';
  populateTaskAssigneeSelect();
  document.getElementById('task-assignee').value = '';
  clearFieldErrors(['task-title-input']);
  openModal('modal-task');
}

function editTask(id) {
  const t = (DB.tasks||[]).find(x=>x.id===id);
  if (!t) return;
  editingTaskId = id;
  document.getElementById('modal-task-title').textContent = 'تعديل المهمة';
  document.getElementById('task-title-input').value = t.title;
  document.getElementById('task-due').value = t.due || todayISO();
  document.getElementById('task-priority').value = t.priority || 'normal';
  document.getElementById('task-notes').value = t.notes || '';
  populateTaskAssigneeSelect();
  document.getElementById('task-assignee').value = t.assignee || '';
  clearFieldErrors(['task-title-input']);
  openModal('modal-task');
}

function saveTask() {
  const title = document.getElementById('task-title-input').value.trim();
  const ok = runValidation([{id:'task-title-input', value:title, test:v=>!!v, message:'اكتب اسم المهمة'}]);
  if (!ok) return;
  const due = document.getElementById('task-due').value;
  const priority = document.getElementById('task-priority').value;
  const assignee = document.getElementById('task-assignee').value;
  const notes = document.getElementById('task-notes').value.trim();
  if (!DB.tasks) DB.tasks = [];
  if (editingTaskId) {
    const t = DB.tasks.find(x=>x.id===editingTaskId);
    Object.assign(t, {title, due, priority, assignee, notes});
  } else {
    DB.tasks.push({id:Date.now(), title, due, priority, assignee, notes, done:false, createdAt:todayISO()});
  }
  saveDB();
  closeModal('modal-task');
  toast('تم حفظ المهمة');
  renderTasks();
}

function toggleTaskDone(id) {
  const t = (DB.tasks||[]).find(x=>x.id===id);
  if (!t) return;
  t.done = !t.done;
  t.doneAt = t.done ? todayISO() : null;
  saveDB();
  renderTasks();
}

async function deleteTask(id) {
  if (!(await confirmDialog('حذف هذه المهمة؟'))) return;
  DB.tasks = (DB.tasks||[]).filter(t=>t.id!==id);
  saveDB(); toast('تم الحذف','error'); renderTasks();
}

function renderTasks() {
  const wrap = document.getElementById('tasks-list');
  if (!wrap) return;
  const filter = (document.getElementById('task-filter')||{}).value || 'open';
  let list = [...(DB.tasks||[])];
  if (filter === 'open') list = list.filter(t=>!t.done);
  else if (filter === 'done') list = list.filter(t=>t.done);
  list.sort((a,b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    return (a.due||'').localeCompare(b.due||'');
  });

  const total = (DB.tasks||[]).length;
  const openCount = (DB.tasks||[]).filter(t=>!t.done).length;
  const overdue = (DB.tasks||[]).filter(t=>!t.done && t.due && t.due < todayISO()).length;
  document.getElementById('tasks-stats').innerHTML = `
    <div class="stat-card gold"><div class="stat-icon" style="color:var(--gold)">${IC.task}</div><div class="stat-label">إجمالي المهام</div><div class="stat-value">${total}</div></div>
    <div class="stat-card cyan"><div class="stat-icon" style="color:var(--cyan)">${IC.clock}</div><div class="stat-label">مهام مفتوحة</div><div class="stat-value">${openCount}</div></div>
    <div class="stat-card red"><div class="stat-icon" style="color:var(--red)">${IC.warn}</div><div class="stat-label">متأخرة عن موعدها</div><div class="stat-value">${overdue}</div></div>
  `;

  if (!list.length) {
    wrap.innerHTML = `<div class="empty" style="padding:60px"><div>${filter==='done'?'لا يوجد مهام منتهية':'لا يوجد مهام حاليًا'}</div><button class="btn btn-gold" style="margin-top:16px" onclick="openAddTask()">إضافة أول مهمة</button></div>`;
    return;
  }
  wrap.innerHTML = list.map(t => {
    const pr = TASK_PRIORITIES[t.priority] || TASK_PRIORITIES.normal;
    const isOverdue = !t.done && t.due && t.due < todayISO();
    return `
    <div class="card" style="padding:12px 14px;margin-bottom:8px;opacity:${t.done?0.6:1}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px">
        <div style="display:flex;gap:10px;align-items:flex-start;flex:1;min-width:0">
          <button class="act-btn" style="flex-shrink:0" onclick="toggleTaskDone(${t.id})" title="${t.done?'إعادة فتح':'تم الإنجاز'}">${IC.check}</button>
          <div style="min-width:0">
            <div style="font-weight:700;font-size:13.5px;text-decoration:${t.done?'line-through':'none'}">${t.title}</div>
            <div style="font-size:11.5px;color:var(--text3);margin-top:3px;display:flex;gap:8px;flex-wrap:wrap">
              <span style="color:${isOverdue?'var(--red)':'var(--text3)'}">${IC.clock} ${formatDateDisplay(t.due)}</span>
              ${t.assignee?`<span>${IC.users} ${t.assignee}</span>`:''}
              <span class="badge badge-${pr.color}">${pr.label}</span>
            </div>
            ${t.notes?`<div style="font-size:12px;color:var(--text2);margin-top:4px">${t.notes}</div>`:''}
          </div>
        </div>
        <div class="actions" style="flex-shrink:0">
          <button class="act-btn" onclick="editTask(${t.id})" title="تعديل">${IC.edit}</button>
          <button class="act-btn danger" onclick="deleteTask(${t.id})" title="حذف">${IC.trash}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════════
// TEAM CRUD
// ══════════════════════════════════════════
let editingMemberId = null;

function openAddMember() {
  editingMemberId = null;
  ['m-name','m-role','m-phone','m-notes'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('m-commission').value='';
  openModal('modal-member');
}

function editMember(id) {
  const m = DB.team.find(x=>x.id===id);
  if (!m) return;
  editingMemberId = id;
  document.getElementById('m-name').value=m.name;
  document.getElementById('m-role').value=m.role;
  document.getElementById('m-phone').value=m.phone||'';
  document.getElementById('m-commission').value=m.commission;
  document.getElementById('m-notes').value=m.notes||'';
  openModal('modal-member');
}

function saveMember() {
  const name = document.getElementById('m-name').value.trim();
  const phone = document.getElementById('m-phone').value.trim();
  const commission = document.getElementById('m-commission').value;
  const ok = runValidation([
    {id:'m-name', value:name, test:isRequired, message:'أدخل الاسم'},
    {id:'m-phone', value:phone, test:isValidPhone, message:'رقم التليفون غير صحيح'},
    {id:'m-commission', value:commission||'0', test:isNonNegNum, message:'العمولة لازم تكون رقم صحيح 0 أو أكبر'},
  ]);
  if (!ok) return;
  const obj = { name, role:document.getElementById('m-role').value, phone, commission:parseFloat(commission)||0, notes:document.getElementById('m-notes').value };
  if (editingMemberId) {
    const idx = DB.team.findIndex(x=>x.id===editingMemberId);
    DB.team[idx] = {...DB.team[idx],...obj};
    toast('تم التحديث');
  } else {
    const maxId = DB.team.reduce((m,x)=>Math.max(m,x.id),0);
    DB.team.push({id:maxId+1,clients:0,completed:0,cancelled:0,joined:new Date().toISOString().split('T')[0],...obj});
    toast('تمت الإضافة');
  }
  saveDB(); closeModal('modal-member'); renderTeam();
}

async function deleteMember(id) {
  if (!(await confirmDialog('هل تريد حذف هذا العضو؟'))) return;
  DB.team = DB.team.filter(x=>x.id!==id);
  saveDB(); toast('تم الحذف','error'); renderTeam();
}

// ══════════════════════════════════════════
// محفظة العمولة — إتمام (تصفية) العمولة المستحقة، خصم، وسحب من الرصيد المتاح
// بتشتغل على فريق المبيعات (DB.team) وعلى الموظفين (DB.employees) بنفس المنطق
// المفهوم: commission = إجمالي العمولة المتراكمة (بتتحسب/بتتزود يدوي أو تلقائي من عمولة الشهر)
//          commissionSettled = الجزء اللي اتقفل/اتأكد رسميًا إنه مستحق (بعد ما تعمله "إتمام")
//          commissionWithdrawn = الجزء اللي فعليًا اتسحب/اتصرف من الرصيد المُتمم
//          commissionDeducted = خصومات (غرامة/سلفة إلخ) بتتخصم من نفس الرصيد المُتمم
//          المتاح للسحب = commissionSettled - commissionWithdrawn - commissionDeducted
// ══════════════════════════════════════════
function ensureCommissionWallet(entity) {
  if (!entity) return entity;
  if (entity.commission === undefined || entity.commission === null) entity.commission = 0;
  if (entity.commissionSettled === undefined || entity.commissionSettled === null) entity.commissionSettled = 0;
  if (entity.commissionWithdrawn === undefined || entity.commissionWithdrawn === null) entity.commissionWithdrawn = 0;
  if (entity.commissionDeducted === undefined || entity.commissionDeducted === null) entity.commissionDeducted = 0;
  if (!Array.isArray(entity.commissionLedger)) entity.commissionLedger = [];
  if (!Array.isArray(entity.commissionAddedMonths)) entity.commissionAddedMonths = [];
  return entity;
}
function getCommissionEntity(type, id) {
  const list = type === 'team' ? DB.team : DB.employees;
  return (list || []).find(x => x.id === id);
}
function commissionBalances(entity) {
  ensureCommissionWallet(entity);
  const pendingToSettle = Math.max((entity.commission || 0) - (entity.commissionSettled || 0), 0);
  const availableToWithdraw = Math.max((entity.commissionSettled || 0) - (entity.commissionWithdrawn || 0) - (entity.commissionDeducted || 0), 0);
  return {
    accrued: entity.commission || 0,
    settled: entity.commissionSettled || 0,
    withdrawn: entity.commissionWithdrawn || 0,
    deducted: entity.commissionDeducted || 0,
    pendingToSettle, availableToWithdraw
  };
}
const COMM_TYPE_LABEL = { settle: 'إتمام عمولة', withdraw: 'سحب عمولة', deduct: 'خصم من العمولة' };
const COMM_TYPE_COLOR = { settle: 'var(--gold)', withdraw: 'var(--green)', deduct: 'var(--red)' };
const COMM_TYPE_BADGE = { settle: 'badge-gold', withdraw: 'badge-green', deduct: 'badge-red' };

// ── إضافة عمولة الشهر (المحسوبة تلقائيًا من الصفقات) لرصيد العضو المتراكم — لفريق المبيعات بس ──
function addAutoCommissionToBalance(memberId) {
  const m = DB.team.find(x => x.id === memberId);
  if (!m) return;
  ensureCommissionWallet(m);
  const thisMonthYm = todayISO().slice(0, 7);
  if (m.commissionAddedMonths.includes(thisMonthYm)) { toast('تمت إضافة عمولة الشهر ده لرصيد العضو بالفعل', 'error'); return; }
  const autoComm = getAgentMonthDeals(m.name, thisMonthYm).reduce((a, d) => a + getDealCommissionAmount(d), 0);
  if (autoComm <= 0) { toast('مفيش عمولة تلقائية محسوبة للشهر ده لسه', 'error'); return; }
  m.commission = (m.commission || 0) + autoComm;
  m.commissionAddedMonths.push(thisMonthYm);
  logActivity('إضافة عمولة الشهر لرصيد العضو', `${m.name} — ${fmt(autoComm)} ج.م`);
  saveDB();
  toast(`تم إضافة ${fmt(autoComm)} ج.م لرصيد ${m.name}`);
  renderTeam();
}

let commWalletType = null; // 'team' | 'employee'
let commWalletId = null;
let lastCommAction = null; // {type, amount, note, date} — آخر عملية في الجلسة دي عشان زرار واتساب

function openCommissionWallet(type, id) {
  const entity = getCommissionEntity(type, id);
  if (!entity) return;
  commWalletType = type;
  commWalletId = id;
  lastCommAction = null;
  document.getElementById('cw-settle-note').value = '';
  document.getElementById('cw-withdraw-note').value = '';
  document.getElementById('cw-deduct-note').value = '';
  renderCommissionWalletModal();
  openModal('modal-commission-wallet');
}

function renderCommissionWalletModal() {
  const entity = getCommissionEntity(commWalletType, commWalletId);
  if (!entity) return;
  ensureCommissionWallet(entity);
  const b = commissionBalances(entity);
  const s = DB.settings || {};
  const minW = Number(s.commissionMinWithdraw) || 0;
  const maxW = Number(s.commissionMaxWithdraw) || 0;

  document.getElementById('cw-person-name').textContent = entity.name;
  document.getElementById('cw-accrued').textContent = fmt(b.accrued) + ' ج.م';
  document.getElementById('cw-pending').textContent = fmt(b.pendingToSettle) + ' ج.م';
  document.getElementById('cw-settled').textContent = fmt(b.settled) + ' ج.م';
  document.getElementById('cw-available').textContent = fmt(b.availableToWithdraw) + ' ج.م';
  document.getElementById('cw-settle-amount').value = b.pendingToSettle > 0 ? b.pendingToSettle : '';
  document.getElementById('cw-withdraw-amount').value = b.availableToWithdraw > 0 ? b.availableToWithdraw : '';
  document.getElementById('cw-deduct-amount').value = '';
  document.getElementById('cw-settle-hint').textContent = `أقصى مبلغ ممكن تتممه دلوقتي: ${fmt(b.pendingToSettle)} ج.م`;
  let withdrawHint = `المتاح للسحب دلوقتي: ${fmt(b.availableToWithdraw)} ج.م — إجمالي اتسحب قبل كده: ${fmt(b.withdrawn)} ج.م`;
  if (minW > 0) withdrawHint += ` — أقل سحبة: ${fmt(minW)} ج.م`;
  if (maxW > 0) withdrawHint += ` — أقصى سحبة: ${fmt(maxW)} ج.م`;
  document.getElementById('cw-withdraw-hint').textContent = withdrawHint;
  document.getElementById('cw-deduct-hint').textContent = `أقصى مبلغ ممكن خصمه من الرصيد المتاح: ${fmt(b.availableToWithdraw)} ج.م — إجمالي اتخصم قبل كده: ${fmt(b.deducted)} ج.م`;

  // زرار إرسال واتساب بآخر عملية (لو فيه عملية اتسجلت في الجلسة دي)
  const notifyWrap = document.getElementById('cw-notify-whatsapp-wrap');
  if (notifyWrap) notifyWrap.style.display = lastCommAction ? 'flex' : 'none';

  const ledger = [...(entity.commissionLedger || [])].sort((x, y) => (y.date || '').localeCompare(x.date || '') || y.id - x.id);
  const wrap = document.getElementById('cw-ledger-list');
  wrap.innerHTML = ledger.length ? ledger.map(l => `
    <div class="card" style="padding:10px 12px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
      <div>
        <span class="badge ${COMM_TYPE_BADGE[l.type] || 'badge-gray'}">${COMM_TYPE_LABEL[l.type] || l.type}</span>
        <span style="font-size:11.5px;color:var(--text3);margin-inline-start:8px">${formatDateDisplay(l.date)}</span>
        ${l.note ? `<div style="font-size:11.5px;color:var(--text3);margin-top:4px">${l.note}</div>` : ''}
      </div>
      <div style="font-weight:800;color:${COMM_TYPE_COLOR[l.type] || 'var(--text2)'}">${fmt(l.amount)} ج.م</div>
    </div>
  `).join('') : `<div style="text-align:center;color:var(--text3);font-size:12px;padding:14px">لسه مفيش عمليات مسجّلة على العمولة دي</div>`;
}

function settleCommissionNow() {
  const entity = getCommissionEntity(commWalletType, commWalletId);
  if (!entity) return;
  ensureCommissionWallet(entity);
  const b = commissionBalances(entity);
  const amount = parseFloat(document.getElementById('cw-settle-amount').value) || 0;
  const note = document.getElementById('cw-settle-note').value.trim();
  if (amount <= 0) { toast('اكتب مبلغ صحيح أكبر من صفر', 'error'); return; }
  if (amount > b.pendingToSettle + 0.01) { toast(`أقصى مبلغ ممكن تتممه دلوقتي هو ${fmt(b.pendingToSettle)} ج.م`, 'error'); return; }
  entity.commissionSettled = (entity.commissionSettled || 0) + amount;
  const date = todayISO();
  entity.commissionLedger.push({ id: Date.now(), type: 'settle', amount, date, note });
  lastCommAction = { type: 'settle', amount, note, date };
  logActivity('إتمام عمولة', `${entity.name} — ${fmt(amount)} ج.م`);
  saveDB();
  toast('تم تسجيل إتمام العمولة');
  document.getElementById('cw-settle-note').value = '';
  renderCommissionWalletModal();
  if (commWalletType === 'team') renderTeam(); else renderEmployees();
}

function withdrawCommissionNow() {
  const entity = getCommissionEntity(commWalletType, commWalletId);
  if (!entity) return;
  ensureCommissionWallet(entity);
  const b = commissionBalances(entity);
  const s = DB.settings || {};
  const minW = Number(s.commissionMinWithdraw) || 0;
  const maxW = Number(s.commissionMaxWithdraw) || 0;
  const amount = parseFloat(document.getElementById('cw-withdraw-amount').value) || 0;
  const note = document.getElementById('cw-withdraw-note').value.trim();
  if (amount <= 0) { toast('اكتب مبلغ صحيح أكبر من صفر', 'error'); return; }
  if (amount > b.availableToWithdraw + 0.01) { toast(`أقصى مبلغ متاح للسحب دلوقتي هو ${fmt(b.availableToWithdraw)} ج.م`, 'error'); return; }
  if (minW > 0 && amount < minW) { toast(`أقل مبلغ مسموح بسحبه هو ${fmt(minW)} ج.م`, 'error'); return; }
  if (maxW > 0 && amount > maxW) { toast(`أقصى مبلغ مسموح بسحبه في العملية الواحدة هو ${fmt(maxW)} ج.م`, 'error'); return; }
  entity.commissionWithdrawn = (entity.commissionWithdrawn || 0) + amount;
  const date = todayISO();
  entity.commissionLedger.push({ id: Date.now(), type: 'withdraw', amount, date, note });
  lastCommAction = { type: 'withdraw', amount, note, date };
  logActivity('سحب عمولة', `${entity.name} — ${fmt(amount)} ج.م`);
  saveDB();
  toast('تم تسجيل سحب العمولة');
  document.getElementById('cw-withdraw-note').value = '';
  renderCommissionWalletModal();
  if (commWalletType === 'team') renderTeam(); else renderEmployees();
}

function deductCommissionNow() {
  const entity = getCommissionEntity(commWalletType, commWalletId);
  if (!entity) return;
  ensureCommissionWallet(entity);
  const b = commissionBalances(entity);
  const amount = parseFloat(document.getElementById('cw-deduct-amount').value) || 0;
  const note = document.getElementById('cw-deduct-note').value.trim();
  if (amount <= 0) { toast('اكتب مبلغ صحيح أكبر من صفر', 'error'); return; }
  if (amount > b.availableToWithdraw + 0.01) { toast(`أقصى مبلغ ممكن خصمه دلوقتي هو ${fmt(b.availableToWithdraw)} ج.م`, 'error'); return; }
  entity.commissionDeducted = (entity.commissionDeducted || 0) + amount;
  const date = todayISO();
  entity.commissionLedger.push({ id: Date.now(), type: 'deduct', amount, date, note });
  lastCommAction = { type: 'deduct', amount, note, date };
  logActivity('خصم من العمولة', `${entity.name} — ${fmt(amount)} ج.م`);
  saveDB();
  toast('تم تسجيل الخصم');
  document.getElementById('cw-deduct-note').value = '';
  renderCommissionWalletModal();
  if (commWalletType === 'team') renderTeam(); else renderEmployees();
}

// ── إرسال إشعار واتساب بآخر عملية اتسجلت (إتمام/سحب/خصم) ──
function sendCommWhatsappNotice() {
  const entity = getCommissionEntity(commWalletType, commWalletId);
  if (!entity || !lastCommAction) return;
  if (!entity.phone) { toast('الشخص ده مفيهوش رقم تليفون مسجّل', 'error'); return; }
  const s = DB.settings || {};
  const company = s.brandName || '';
  const actionText = {
    settle: `تم تصفية/إتمام مبلغ ${fmt(lastCommAction.amount)} ج.م من عمولتك المستحقة`,
    withdraw: `تم صرف/سحب مبلغ ${fmt(lastCommAction.amount)} ج.م من رصيد عمولتك`,
    deduct: `تم تسجيل خصم بمبلغ ${fmt(lastCommAction.amount)} ج.م من رصيد عمولتك`
  }[lastCommAction.type] || '';
  let text = `إشعار عمولة من ${company}\nعزيزنا ${entity.name}، ${actionText} بتاريخ ${formatDateDisplay(lastCommAction.date)}.`;
  if (lastCommAction.note) text += `\nملاحظة: ${lastCommAction.note}`;
  const url = `https://wa.me/${cleanPhoneForWa(entity.phone)}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
  logActivity('إرسال إشعار عمولة واتساب', entity.name);
}

// ── تصدير كشف حساب العمولة (Excel/CSV أو طباعة PDF) ──
function exportCommissionStatementCSV() {
  const entity = getCommissionEntity(commWalletType, commWalletId);
  if (!entity) return;
  ensureCommissionWallet(entity);
  const b = commissionBalances(entity);
  const headers = ['التاريخ', 'النوع', 'المبلغ (ج.م)', 'ملاحظة'];
  const rows = [...entity.commissionLedger].sort((x, y) => (x.date || '').localeCompare(y.date || '')).map(l => [formatDateDisplay(l.date), COMM_TYPE_LABEL[l.type] || l.type, fmt(l.amount), l.note || '']);
  rows.push(['', 'إجمالي متراكم', fmt(b.accrued), '']);
  rows.push(['', 'اتم إتمامه', fmt(b.settled), '']);
  rows.push(['', 'اتسحب', fmt(b.withdrawn), '']);
  rows.push(['', 'اتخصم', fmt(b.deducted), '']);
  rows.push(['', 'متاح للسحب حاليًا', fmt(b.availableToWithdraw), '']);
  exportRowsToCSV(headers, rows, `كشف-عمولة-${entity.name}-${todayISO()}.csv`);
}

function printCommissionStatement() {
  const entity = getCommissionEntity(commWalletType, commWalletId);
  if (!entity) return;
  ensureCommissionWallet(entity);
  const b = commissionBalances(entity);
  const s = DB.settings || {};
  const rowsHtml = [...entity.commissionLedger].sort((x, y) => (x.date || '').localeCompare(y.date || '')).map(l => `
    <tr><td>${formatDateDisplay(l.date)}</td><td>${COMM_TYPE_LABEL[l.type] || l.type}</td><td>${fmt(l.amount)} ج.م</td><td>${l.note || ''}</td></tr>
  `).join('');
  const html = `<html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>كشف عمولة - ${entity.name}</title>
    <style>
      body{font-family:Tahoma,Arial,sans-serif;padding:24px;color:#222}
      h1{font-size:18px;margin-bottom:2px} .sub{color:#666;font-size:12px;margin-bottom:18px}
      table{width:100%;border-collapse:collapse;margin-top:14px} th,td{border:1px solid #ccc;padding:8px;text-align:right;font-size:12px}
      th{background:#f2f2f2}
      .stats{display:flex;gap:16px;margin-top:10px;flex-wrap:wrap}
      .stat{border:1px solid #ddd;border-radius:8px;padding:10px 16px;text-align:center;min-width:110px}
      .stat b{display:block;font-size:16px;margin-top:4px}
    </style></head><body>
    <h1>كشف حساب عمولة — ${entity.name}</h1>
    <div class="sub">${s.brandName || ''} — تاريخ الطباعة: ${formatDateDisplay(todayISO())}</div>
    <div class="stats">
      <div class="stat">إجمالي متراكم<b>${fmt(b.accrued)} ج.م</b></div>
      <div class="stat">اتم إتمامه<b>${fmt(b.settled)} ج.م</b></div>
      <div class="stat">اتسحب<b>${fmt(b.withdrawn)} ج.م</b></div>
      <div class="stat">اتخصم<b>${fmt(b.deducted)} ج.م</b></div>
      <div class="stat">متاح للسحب<b>${fmt(b.availableToWithdraw)} ج.م</b></div>
    </div>
    <table><thead><tr><th>التاريخ</th><th>النوع</th><th>المبلغ</th><th>ملاحظة</th></tr></thead>
    <tbody>${rowsHtml || '<tr><td colspan="4" style="text-align:center">لا توجد عمليات</td></tr>'}</tbody></table>
    </body></html>`;
  const win = window.open('', '_blank');
  if (!win) { toast('المتصفح منع فتح نافذة الطباعة — اسمح بالنوافذ المنبثقة لهذا الموقع', 'error'); return; }
  win.document.write(html);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 300);
}

// ── تنبيه: رصيد عمولة متاح للسحب واقف من غير سحب لفترة (يظهر في جرس الإشعارات) ──
function getCommissionWalletDueItems() {
  const ns = getNotificationSettings();
  const thresholdDays = Number(ns.commissionWalletDueDays) || 7;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const all = [
    ...(DB.team || []).map(m => ({ ...m, _kind: 'team' })),
    ...(DB.employees || []).map(e => ({ ...e, _kind: 'employee' }))
  ];
  return all.map(entity => {
    ensureCommissionWallet(entity);
    const b = commissionBalances(entity);
    if (b.availableToWithdraw <= 0) return null;
    const settleEntries = (entity.commissionLedger || []).filter(l => l.type === 'settle').sort((x, y) => (y.date || '').localeCompare(x.date || ''));
    const lastSettleDate = settleEntries.length ? settleEntries[0].date : null;
    if (!lastSettleDate) return null;
    const d = new Date(lastSettleDate); d.setHours(0, 0, 0, 0);
    const diffDays = Math.round((today - d) / 86400000);
    if (diffDays < thresholdDays) return null;
    return { ...entity, _daysSince: diffDays, _available: b.availableToWithdraw };
  }).filter(Boolean);
}

// ══════════════════════════════════════════
// TARGETS EDIT
// ══════════════════════════════════════════
function openEditTargets() {
  // ابني قايمة السنين: 3 سنين للخلف و5 للقدام من السنة الحالية، زائد أي سنة عندها بيانات بالفعل
  const now = new Date().getFullYear();
  const yearsSet = new Set(Object.keys(DB.targetsByYear||{}).map(Number));
  for (let y = now - 3; y <= now + 5; y++) yearsSet.add(y);
  yearsSet.add(currentTargetsYear);
  const years = Array.from(yearsSet).sort((a,b)=>a-b);
  const sel = document.getElementById('tgt-year-select');
  sel.innerHTML = years.map(y => `<option value="${y}" ${y===currentTargetsYear?'selected':''}>${y}</option>`).join('');
  renderTargetsEditTable();
  openModal('modal-targets');
}

function switchTargetsYear(year) {
  currentTargetsYear = parseInt(year) || new Date().getFullYear();
  renderTargetsEditTable();
}

function renderTargetsEditTable() {
  const yearTargets = getYearTargets(currentTargetsYear);
  document.getElementById('targets-edit-body').innerHTML = `
    <div style="overflow-x:auto">
      <table>
        <thead><tr><th>الشهر</th><th>التارجت (ج.م)</th><th>المحصل الفعلي</th><th>عملاء مستهدف</th><th>عملاء فعلي</th><th>ملاحظات</th></tr></thead>
        <tbody>
          ${yearTargets.map((t,i)=>`<tr>
            <td style="font-weight:700">${t.month}</td>
            <td><input class="form-input" style="width:110px" id="tgt-target-${i}" value="${t.target}" type="number"></td>
            <td><input class="form-input" style="width:110px" id="tgt-actual-${i}" value="${t.actual}" type="number"></td>
            <td><input class="form-input" style="width:80px" id="tgt-ct-${i}" value="${t.clientsTarget}" type="number"></td>
            <td><input class="form-input" style="width:80px" id="tgt-ca-${i}" value="${t.clientsActual}" type="number"></td>
            <td><input class="form-input" id="tgt-notes-${i}" value="${t.notes||''}"></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function saveTargets() {
  const yearTargets = getYearTargets(currentTargetsYear);
  const ids = [];
  yearTargets.forEach((t,i) => ids.push(`tgt-target-${i}`, `tgt-actual-${i}`, `tgt-ct-${i}`, `tgt-ca-${i}`));
  let hasError = false;
  yearTargets.forEach((t,i) => {
    [`tgt-target-${i}`,`tgt-actual-${i}`,`tgt-ct-${i}`,`tgt-ca-${i}`].forEach(id => {
      if (!isNonNegNum(document.getElementById(id).value || '0')) hasError = true;
    });
  });
  clearFieldErrors(ids);
  if (hasError) {
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el && !isNonNegNum(el.value || '0')) el.classList.add('field-invalid');
    });
    toast('في أرقام غير صحيحة في جدول الأهداف — لازم تكون 0 أو أكبر', 'error');
    return;
  }
  DB.targetsByYear[currentTargetsYear] = yearTargets.map((t,i)=>{
    const target = parseFloat(document.getElementById(`tgt-target-${i}`).value)||0;
    const actual = parseFloat(document.getElementById(`tgt-actual-${i}`).value)||0;
    return { ...t, target, actual,
      clientsTarget: parseInt(document.getElementById(`tgt-ct-${i}`).value)||0,
      clientsActual: parseInt(document.getElementById(`tgt-ca-${i}`).value)||0,
      notes: document.getElementById(`tgt-notes-${i}`).value,
      status: actual >= target && target > 0 ? 'تجاوز التارجت' : actual > 0 ? 'جاري' : t.status
    };
  });
  saveDB(); closeModal('modal-targets'); toast('تم حفظ الأهداف'); renderPage('targets');
}

// ══════════════════════════════════════════
// EXPORT / IMPORT
// ══════════════════════════════════════════
// ══════════════════════════════════════════
// GENERIC PRINT (PDF) + EXCEL EXPORT — لكل الصفحات
// ══════════════════════════════════════════

// بيفتح مربع طباعة المتصفح على الصفحة الحالية بس (باقي الصفحات متخفية بـ CSS الطباعة)
// المستخدم يقدر يختار "حفظ كـ PDF" من نافذة الطباعة
function printCurrentPage() {
  applyPrintSize();
  window.print();
}

// بيحول أي جدول HTML ظاهر حاليًا لملف CSV (يتفتح في إكسيل) — بياخد بس الأعمدة الظاهرة
// ومش بياخد عمود "إجراءات" (آخر عمود بالأزرار) ولا الأعمدة اللي معلّم عليها no-export
function exportTableToCSV(tableId, filename) {
  const table = document.getElementById(tableId);
  if (!table) { toast('مفيش جدول للتصدير هنا', 'error'); return; }
  const rows = Array.from(table.querySelectorAll('tr'));
  if (!rows.length) { toast('مفيش بيانات للتصدير', 'error'); return; }
  const headCells = Array.from(rows[0].querySelectorAll('th'));
  // استبعاد آخر عمود لو كان "إجراءات"
  const skipLast = headCells.length && /إجراءات/.test(headCells[headCells.length-1].textContent);
  const csvRows = rows.map(tr => {
    let cells = Array.from(tr.querySelectorAll('th,td'));
    if (skipLast) cells = cells.slice(0, -1);
    return cells.map(td => `"${td.textContent.trim().replace(/"/g,'""')}"`).join(',');
  });
  const csv = '\uFEFF' + csvRows.join('\n') + `\n\n"${APP_CREDIT_LINE}"`;
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  toast('تم تصدير Excel (CSV)');
}

// بيصدّر مجموعة كروت (زي المتابعات وأعضاء الفريق) اللي مش جدول HTML، من مصفوفة بيانات جاهزة
function exportRowsToCSV(headers, rows, filename) {
  if (!rows.length) { toast('مفيش بيانات للتصدير', 'error'); return; }
  const csv = '\uFEFF' + [headers, ...rows].map(r => r.map(x => `"${String(x??'').replace(/"/g,'""')}"`).join(',')).join('\n') + `\n\n"${APP_CREDIT_LINE}"`;
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  toast('تم تصدير Excel (CSV)');
}

function exportFollowupsCSV() {
  const headers = ['العميل','النوع','ملاحظة','التاريخ','الخطوة القادمة','موعد المتابعة','الحالة'];
  const rows = (DB.followups||[]).map(f => {
    const c = DB.clients.find(x=>x.id===f.clientId);
    return [c?c.name:'—', f.type||'', f.note||'', f.date||'', f.next||'', f.nextDate||'', f.done?'مكتملة':'غير مكتملة'];
  });
  exportRowsToCSV(headers, rows, `متابعات-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.csv`);
}

function exportFeedbackCSV() {
  const headers = ['العميل','التقييم','NPS (0-10)','فئة NPS','التعليق','التاريخ'];
  const npsLabels = {promoter:'مروّج', passive:'محايد', detractor:'غير راضٍ'};
  const rows = (DB.feedbacks||[]).map(f => {
    const c = DB.clients.find(x=>x.id===f.clientId);
    const cat = npsCategory(f.nps);
    return [c?c.name:'—', f.rating, (f.nps ?? ''), cat ? npsLabels[cat] : '', f.comment||'', f.date||''];
  });
  exportRowsToCSV(headers, rows, `تقييمات-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.csv`);
}

function exportTeamCSV() {
  const headers = ['الاسم','الدور','الهاتف','تاريخ الانضمام','عملاء','مكتمل','ملغي','العمولة','ملاحظات'];
  const rows = (DB.team||[]).map(m => [m.name,m.role,m.phone||'',m.joined||'',m.clients,m.completed,m.cancelled,m.commission,m.notes||'']);
  exportRowsToCSV(headers, rows, `فريق-العمل-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.csv`);
}

function exportServicesCSV() {
  const headers = ['اسم الخدمة','الفئة','السعر','التكلفة','نسبة العمولة','عملاء','ملاحظات'];
  const rows = getServices().map(s => [s.name, (getServiceCategory(s.category)||{}).name || s.category, s.price, s.cost, s.commissionRate, DB.clients.filter(c=>c.service===s.name).length, s.notes||'']);
  exportRowsToCSV(headers, rows, `الخدمات-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.csv`);
}

function exportDealsCSV() {
  const headers = ['#','العميل','الخدمة','التكلفة','المحصل','المتبقي','الحالة','المندوب','التاريخ','ملاحظات'];
  const rows = (DB.deals||[]).map(d => {
    const c = DB.clients.find(x=>x.id===d.clientId);
    return [d.id, c?c.name:'—', d.service, d.cost, d.collected, d.cost-d.collected, d.status, d.agent, d.date, d.notes||''];
  });
  exportRowsToCSV(headers, rows, `الصفقات-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.csv`);
}

function exportTargetsCSV() {
  const headers = ['الشهر','التارجت','المحصل','الفرق','نسبة الإنجاز','عملاء مستهدف','عملاء فعلي','الحالة'];
  const rows = getYearTargets(currentTargetsYear).map(t => [t.month, t.target, t.actual, t.actual-t.target, t.target?Math.round(t.actual/t.target*100)+'%':'—', t.clientsTarget, t.clientsActual, t.status]);
  exportRowsToCSV(headers, rows, `أهداف-${currentTargetsYear}-فطين-CRM.csv`);
}

function exportJSON() {
  const blob = new Blob([JSON.stringify(DB, null, 2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `فطين-CRM-backup-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.json`;
  a.click();
  toast('تم تصدير النسخة الاحتياطية');
}

// ══════════════════════════════════════════
// نسخ احتياطي تلقائي مجدول — بدل التصدير اليدوي، تحدد يوم في الأسبوع وأول ما تفتح النظام بعد ما يجي اليوم ده يصدّر تلقائي
// ══════════════════════════════════════════
const WEEKDAYS_AR = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
function saveAutoBackupDay() {
  const val = document.getElementById('sett-auto-backup-day').value;
  DB.settings.autoBackupDay = val;
  saveDB();
  toast(val ? `هيتصدّر نسخة احتياطية تلقائيًا كل يوم ${WEEKDAYS_AR[val]}` : 'تم إيقاف النسخ الاحتياطي التلقائي');
  renderAutoBackupStatus();
}
function renderAutoBackupStatus() {
  const el = document.getElementById('auto-backup-status');
  if (!el) return;
  const day = DB.settings.autoBackupDay;
  const sel = document.getElementById('sett-auto-backup-day');
  if (sel) sel.value = day || '';
  if (!day && day !== 0) { el.textContent = 'مقفول حاليًا — التصدير يدوي بس'; return; }
  const last = DB.settings.lastAutoBackup;
  el.textContent = last ? `آخر نسخة احتياطية تلقائية: ${last}` : 'لسه معملتش نسخة احتياطية تلقائية — هتتعمل أول ما ييجي اليوم المحدد';
}
// بتتنفذ مرة كل ما النظام يفتح: لو النهاردة هو اليوم المحدد ولسه معملناش نسخة النهاردة، يصدّر تلقائي
function checkScheduledAutoBackup() {
  const day = DB.settings.autoBackupDay;
  if (day === '' || day === undefined || day === null) return;
  const today = new Date();
  if (today.getDay() !== Number(day)) return;
  const todayStr = todayISO();
  if (DB.settings.lastAutoBackup === todayStr) return;
  exportJSON();
  DB.settings.lastAutoBackup = todayStr;
  saveDB();
}

function exportCSV() {
  const headers = ['#','اسم العميل','المالك','الهاتف','أرقام إضافية','الفروع','الخدمة','نوع الخدمة','التكلفة','المحصل','المتبقي','الحالة','المندوب','التاريخ','العنوان','الملاحظات','متوسط التقييم','نوع النشاط','تاريخ الميلاد','رشّحه'];
  const rows = DB.clients.map(c=>{
    const clientFb = DB.feedbacks.filter(f=>f.clientId===c.id);
    const avgR = clientFb.length ? (clientFb.reduce((a,f)=>a+f.rating,0)/clientFb.length).toFixed(1) : '';
    const cat = {pos:'نقطة بيع', web:'ويبسايت', mgmt:'إدارة', other:'أخرى'}[serviceCategory(c.service)];
    const extraPhones = phonesToCell((c.phones||[]).filter(p=>p && p!==c.phone));
    const branchesCell = branchesToCell(c.branches);
    const referrer = c.referredBy ? DB.clients.find(x=>String(x.id)===String(c.referredBy)) : null;
    return [c.id,c.name,c.owner||'',c.phone||'',extraPhones,branchesCell,c.service,cat,c.cost,c.collected,c.cost-c.collected,c.status,c.agent,c.date,c.address||'',c.notes||'',avgR,c.businessType||'',c.birthday||'',referrer?referrer.name:''];
  });
  const csv = '\uFEFF' + [headers,...rows].map(r=>r.map(x=>`"${String(x).replace(/"/g,'""')}"`).join(',')).join('\n') + `\n\n"${APP_CREDIT_LINE}"`;
  const blob = new Blob([csv],{type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `عملاء-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.csv`;
  a.click();
  toast('تم تصدير CSV');
}

function exportFinancialCSV() {
  const headers = ['الشهر','التارجت','المحصل','الفرق','نسبة الإنجاز'];
  const rows = getYearTargets(currentTargetsYear).map(t=>[t.month,t.target,t.actual,t.actual-t.target,t.target?Math.round(t.actual/t.target*100)+'%':'—']);
  const csv = '\uFEFF' + [headers,...rows].map(r=>r.map(x=>`"${x}"`).join(',')).join('\n') + `\n\n"${APP_CREDIT_LINE}"`;
  const blob = new Blob([csv],{type:'text/csv;charset=utf-8'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `تقرير-مالي-فطين-CRM.csv`;
  a.click();
  toast('تم تصدير التقرير المالي');
}

function importJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.clients) throw new Error('ملف غير صحيح');
      if (!data.feedbacks) data.feedbacks = [];
      if (!data.followups) data.followups = [];
      data.followups.forEach(f => { if (f.done === undefined) f.done = false; if (f.nextDate === undefined) f.nextDate = ''; });
      if (!data.deals) {
        data.deals = (data.clients||[]).map(c => ({
          id: c.id, clientId: c.id, service: c.service, cost: c.cost, collected: c.collected,
          status: c.status, agent: c.agent, date: c.date, notes: c.notes
        }));
      }
      DB = data;
      saveDB(); toast('تم استيراد البيانات بنجاح');
      applyLogo(); renderPage(currentPage);
      closeImportChoice();
    } catch(err) { toast('خطأ في الملف', 'error'); }
    finally { e.target.value = ''; }
  };
  reader.readAsText(file);
}

// ══════════════════════════════════════════
// استيراد/تصدير الإكسيل (قالب فاضي + رفع ملف جاهز) — كل البيانات مع بعض
// ══════════════════════════════════════════
function openImportChoice() { openModal('modal-import-choice'); }
function closeImportChoice() { closeModal('modal-import-choice'); }

function buildTemplateSheet(wb, name, headers, rows) {
  const ws = XLSX.utils.aoa_to_sheet([headers, ...rows]);
  XLSX.utils.book_append_sheet(wb, ws, name);
}

function exportFullExcel() {
  if (typeof XLSX === 'undefined') { toast('تعذر تحميل مكتبة الإكسيل، تأكد من اتصال الإنترنت', 'error'); return; }
  const wb = XLSX.utils.book_new();

  const clientRows = DB.clients.map(c => [
    c.id, c.name, c.owner||'', c.phone||'',
    phonesToCell((c.phones||[]).filter(p=>p && p!==c.phone)),
    branchesToCell(c.branches),
    c.service, c.cost, c.collected, c.status, c.agent, c.date, c.address||'', c.notes||''
  ]);
  buildTemplateSheet(wb, 'العملاء', [
    'id','اسم العميل','اسم المالك','الهاتف الأساسي','أرقام إضافية (مفصولة بـ ؛)','الفروع (اسم:عنوان:هاتف - مفصولة بـ ؛)',
    'الخدمة','التكلفة','المحصل','الحالة','المندوب','التاريخ (yyyy-mm-dd)','العنوان','ملاحظات'
  ], clientRows);

  const dealRows = (DB.deals||[]).map(d => [d.id, d.clientId, d.service, d.cost, d.collected, d.status, d.agent, d.date, d.notes||'']);
  buildTemplateSheet(wb, 'الصفقات', ['id','معرف العميل (client id)','الخدمة','التكلفة','المحصل','الحالة','المندوب','التاريخ','ملاحظات'], dealRows);

  const teamRows = (DB.team||[]).map(m => [m.id, m.name, m.role, m.phone||'', m.joined||'', m.clients, m.completed, m.cancelled, m.commission, m.notes||'']);
  buildTemplateSheet(wb, 'الفريق', ['id','الاسم','الدور','الهاتف','تاريخ الانضمام','عملاء','مكتمل','ملغي','العمولة','ملاحظات'], teamRows);

  const svcRows = getServices().map(s => [s.id, s.name, (getServiceCategory(s.category)||{}).name || s.category, s.price, s.cost, s.commissionRate, s.notes||'']);
  buildTemplateSheet(wb, 'الخدمات', ['id','اسم الخدمة','الفئة','السعر','التكلفة','نسبة العمولة','ملاحظات'], svcRows);

  const targetRows = [];
  Object.keys(DB.targetsByYear||{}).sort().forEach(year => {
    (DB.targetsByYear[year]||[]).forEach(t => {
      targetRows.push([year, t.month, t.target, t.actual, t.clientsTarget, t.clientsActual, t.status, t.notes||'']);
    });
  });
  buildTemplateSheet(wb, 'الأهداف', ['السنة','الشهر','التارجت','المحصل','عملاء مستهدف','عملاء فعلي','الحالة','ملاحظات'], targetRows);

  const rateRows = (DB.commissionRates||[]).map(r => [r.service, r.price, r.rate, r.commission]);
  buildTemplateSheet(wb, 'نسب العمولة', ['الخدمة','السعر','النسبة','العمولة'], rateRows);

  // شيت ثابت بيوضح إن النظام ده من تطوير Fateen Digital Solutions
  buildTemplateSheet(wb, 'حقوق الإصدار', [APP_CREDIT_LINE], []);

  XLSX.writeFile(wb, `نسخة-كاملة-فطين-CRM-${new Date().toLocaleDateString('ar-EG-u-nu-latn').replace(/\//g,'-')}.xlsx`);
  toast('تم تصدير نسخة الإكسيل الكاملة');
}

function downloadExcelTemplate() {
  if (typeof XLSX === 'undefined') { toast('تعذر تحميل مكتبة الإكسيل، تأكد من اتصال الإنترنت', 'error'); return; }
  const wb = XLSX.utils.book_new();
  buildTemplateSheet(wb, 'العملاء', [
    'id','اسم العميل','اسم المالك','الهاتف الأساسي','أرقام إضافية (مفصولة بـ ؛)','الفروع (اسم:عنوان:هاتف - مفصولة بـ ؛)',
    'الخدمة','التكلفة','المحصل','الحالة','المندوب','التاريخ (yyyy-mm-dd)','العنوان','ملاحظات'
  ], [[1,'مثال: مطعم النخبة','اسم المالك','0100 000 0000','0111 111 1111؛ 0122 222 2222',
       'فرع مدينة نصر:شارع كذا:0100 111 2222؛ فرع المعادي:شارع كذا:0100 333 4444',
       'سيستم كاشير',8000,8000,'نشط / مكتمل','قعرو',todayISO(),'العنوان الرئيسي','ملاحظات']]);
  buildTemplateSheet(wb, 'الصفقات', ['id','معرف العميل (client id)','الخدمة','التكلفة','المحصل','الحالة','المندوب','التاريخ','ملاحظات'], []);
  buildTemplateSheet(wb, 'الفريق', ['id','الاسم','الدور','الهاتف','تاريخ الانضمام','عملاء','مكتمل','ملغي','العمولة','ملاحظات'], []);
  buildTemplateSheet(wb, 'الخدمات', ['id','اسم الخدمة','الفئة (POS/ويب/إدارة/أخرى)','السعر','التكلفة','نسبة العمولة','ملاحظات'], []);
  buildTemplateSheet(wb, 'الأهداف', ['السنة','الشهر','التارجت','المحصل','عملاء مستهدف','عملاء فعلي','الحالة','ملاحظات'], []);
  buildTemplateSheet(wb, 'نسب العمولة', ['الخدمة','السعر','النسبة','العمولة'], []);
  XLSX.writeFile(wb, 'قالب-استيراد-فطين-CRM.xlsx');
  toast('اتحمّل القالب — املأه وارفعه تاني من (رفع ملف إكسيل جاهز)');
}

function importExcel(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (typeof XLSX === 'undefined') { toast('تعذر تحميل مكتبة الإكسيل، تأكد من اتصال الإنترنت', 'error'); e.target.value=''; return; }
  const reader = new FileReader();
  reader.onload = async ev => {
    try {
      const wb = XLSX.read(ev.target.result, {type:'array', cellDates:true});
      const sheetJson = name => {
        const ws = wb.Sheets[name];
        return ws ? XLSX.utils.sheet_to_json(ws, {defval:''}) : [];
      };

      const clientRows = sheetJson('العملاء');
      if (!clientRows.length) throw new Error('لا يوجد شيت "العملاء" أو هو فاضي في الملف');

      const newClients = clientRows.map((r,i) => {
        const phone = String(r['الهاتف الأساسي']!==undefined?r['الهاتف الأساسي']:(r['الهاتف']||'')).trim();
        const extra = parsePhonesCell(r['أرقام إضافية (مفصولة بـ ؛)']!==undefined?r['أرقام إضافية (مفصولة بـ ؛)']:r['أرقام إضافية']);
        return {
          id: parseInt(r['id'])||(i+1),
          name: String(r['اسم العميل']||'').trim(),
          owner: String(r['اسم المالك']||'').trim(),
          phone,
          phones: [phone, ...extra].filter(Boolean),
          branches: parseBranchesCell(r['الفروع (اسم:عنوان:هاتف - مفصولة بـ ؛)']!==undefined?r['الفروع (اسم:عنوان:هاتف - مفصولة بـ ؛)']:r['الفروع']),
          service: String(r['الخدمة']||'').trim(),
          cost: parseFloat(r['التكلفة'])||0,
          collected: parseFloat(r['المحصل'])||0,
          status: String(r['الحالة']||'قيد المتابعة').trim(),
          agent: String(r['المندوب']||'').trim(),
          date: normalizeDateCell(r['التاريخ (yyyy-mm-dd)']!==undefined?r['التاريخ (yyyy-mm-dd)']:r['التاريخ']),
          address: String(r['العنوان']||'').trim(),
          notes: String(r['ملاحظات']||'').trim(),
        };
      }).filter(c=>c.name);
      if (!newClients.length) throw new Error('محتاج على الأقل اسم عميل واحد صحيح');

      const dealRows = sheetJson('الصفقات');
      let newDeals = dealRows.map((r,i) => ({
        id: parseInt(r['id'])||(i+1),
        clientId: parseInt(r['معرف العميل (client id)']!==undefined?r['معرف العميل (client id)']:r['معرف العميل'])||0,
        service: String(r['الخدمة']||'').trim(),
        cost: parseFloat(r['التكلفة'])||0,
        collected: parseFloat(r['المحصل'])||0,
        status: String(r['الحالة']||'').trim(),
        agent: String(r['المندوب']||'').trim(),
        date: normalizeDateCell(r['التاريخ']),
        notes: String(r['ملاحظات']||'').trim(),
      })).filter(d=>d.clientId && newClients.some(c=>c.id===d.clientId));
      if (!newDeals.length) {
        newDeals = newClients.map(c => ({id:c.id, clientId:c.id, service:c.service, cost:c.cost, collected:c.collected, status:c.status, agent:c.agent, date:c.date, notes:c.notes}));
      }

      const teamRows = sheetJson('الفريق');
      const newTeam = teamRows.map((r,i) => ({
        id: parseInt(r['id'])||(i+1),
        name: String(r['الاسم']||'').trim(),
        role: String(r['الدور']||'').trim(),
        phone: String(r['الهاتف']||'—').trim(),
        joined: String(r['تاريخ الانضمام']||'').trim(),
        clients: parseInt(r['عملاء'])||0,
        completed: parseInt(r['مكتمل'])||0,
        cancelled: parseInt(r['ملغي'])||0,
        commission: parseFloat(r['العمولة'])||0,
        notes: String(r['ملاحظات']||'').trim(),
      })).filter(m=>m.name);

      const svcCats = getServiceCategories();
      const catLabelsRev = {};
      svcCats.forEach(c => { catLabelsRev[c.name] = c.key; if (c.shortLabel) catLabelsRev[c.shortLabel] = c.key; });
      const svcRows = sheetJson('الخدمات');
      const newServices = svcRows.map((r,i) => {
        const catLabel = String(r['الفئة (POS/ويب/إدارة/أخرى)']!==undefined?r['الفئة (POS/ويب/إدارة/أخرى)']:r['الفئة']||'').trim();
        return {
          id: parseInt(r['id'])||(i+1),
          name: String(r['اسم الخدمة']||'').trim(),
          category: catLabelsRev[catLabel] || (svcCats[svcCats.length-1] ? svcCats[svcCats.length-1].key : 'other'),
          price: parseFloat(r['السعر'])||0,
          cost: parseFloat(r['التكلفة'])||0,
          commissionRate: parseFloat(r['نسبة العمولة'])||0,
          notes: String(r['ملاحظات']||'').trim(),
        };
      }).filter(s=>s.name);

      const targetRows = sheetJson('الأهداف');
      const newTargetsByYear = {};
      targetRows.forEach(r => {
        const year = parseInt(r['السنة']) || new Date().getFullYear();
        if (!newTargetsByYear[year]) newTargetsByYear[year] = [];
        newTargetsByYear[year].push({
          month: String(r['الشهر']||'').trim(),
          target: parseFloat(r['التارجت'])||0,
          actual: parseFloat(r['المحصل'])||0,
          clientsTarget: parseInt(r['عملاء مستهدف'])||0,
          clientsActual: parseInt(r['عملاء فعلي'])||0,
          status: String(r['الحالة']||'لا بيانات').trim(),
          notes: String(r['ملاحظات']||'').trim(),
        });
      });

      const rateRows = sheetJson('نسب العمولة');
      const newRates = rateRows.map(r => ({
        service: String(r['الخدمة']||'').trim(),
        price: parseFloat(r['السعر'])||0,
        rate: parseFloat(r['النسبة'])||0,
        commission: parseFloat(r['العمولة'])||0,
      })).filter(x=>x.service);

      if (!(await confirmDialog('هيتم استبدال كل البيانات الحالية (عملاء، صفقات، فريق، خدمات...) بالبيانات اللي في ملف الإكسيل ده. متأكد؟', {title:'تحذير'}))) { e.target.value=''; return; }

      DB = {
        clients: newClients,
        deals: newDeals,
        team: newTeam,
        targetsByYear: Object.keys(newTargetsByYear).length ? newTargetsByYear : (DB.targetsByYear||{}),
        commissionRates: newRates.length ? newRates : (DB.commissionRates||[]),
        services: newServices.length ? newServices : (DB.services||[]),
        followups: DB.followups||[],
        feedbacks: DB.feedbacks||[],
        invoices: DB.invoices||[],
        documents: DB.documents||[],
        logo: DB.logo||null,
        stamp: DB.stamp||null,
        settings: DB.settings || { brandName:'', brandSub:'', phone:'', email:'', address:'', theme:'dark-gold' },
        lastUpdate: new Date().toLocaleString('ar-EG-u-nu-latn')
      };
      saveDB();
      applyLogo();
      renderPage(currentPage);
      closeImportChoice();
      toast('تم استيراد البيانات من ملف الإكسيل بنجاح');
    } catch(err) {
      console.error(err);
      toast('خطأ في قراءة ملف الإكسيل: ' + (err.message||''), 'error');
    } finally {
      e.target.value = '';
    }
  };
  reader.readAsArrayBuffer(file);
}

async function resetDB() {
  if (!(await confirmDialog('تحذير! سيتم حذف كل البيانات. هل أنت متأكد؟', {title:'تحذير'}))) return;
  DB = {
    clients: [],
    deals: [],
    team: [],
    employees: [],
    targets: [],
    commissionRates: [],
    services: [],
    followups: [],
    feedbacks: [],
    invoices: [],
    documents: [],
    logo: DB.logo || null,
    stamp: DB.stamp || null,
    settings: DB.settings || { brandName:'', brandSub:'', phone:'', email:'', address:'', theme:'dark-gold' },
    lastUpdate: new Date().toLocaleString('ar-EG-u-nu-latn')
  };
  saveDB(); toast('تم حذف كل البيانات'); renderPage(currentPage);
}

// ══════════════════════════════════════════
// MODAL + TOAST
// ══════════════════════════════════════════
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ─── بديل مدمج لـ confirm() المتصفح — بيرجع Promise<boolean> ───
let _confirmResolve = null;
function confirmDialog(message, opts = {}) {
  return new Promise(resolve => {
    _confirmResolve = resolve;
    document.getElementById('confirm-title').textContent = opts.title || 'تأكيد العملية';
    document.getElementById('confirm-message').textContent = message;
    const okBtn = document.getElementById('confirm-ok-btn');
    okBtn.textContent = opts.okText || 'تأكيد';
    okBtn.className = 'btn ' + (opts.danger === false ? 'btn-gold' : 'btn-danger');
    document.getElementById('confirm-cancel-btn').textContent = opts.cancelText || 'إلغاء';
    openModal('modal-confirm');
    setTimeout(() => okBtn.focus(), 50);
  });
}
function resolveConfirm(result) {
  closeModal('modal-confirm');
  if (_confirmResolve) { const r = _confirmResolve; _confirmResolve = null; r(result); }
}

// عند الضغط على Enter جوه أي مودال، ينتقل للحقل التالي بدل ما يعمل submit
// (التيكست إريا مستثناة عشان المستخدم يقدر يعمل سطر جديد بالإنتر)
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const el = e.target;
  if (!(el instanceof HTMLElement)) return;
  if (el.tagName === 'TEXTAREA') return;
  const modal = el.closest('.overlay.open .modal');
  if (!modal) return;
  if (!['INPUT','SELECT'].includes(el.tagName)) return;
  e.preventDefault();
  const focusable = Array.from(modal.querySelectorAll('input, select, textarea'))
    .filter(f => !f.disabled && f.offsetParent !== null);
  const idx = focusable.indexOf(el);
  if (idx === -1) return;
  const next = focusable[idx + 1];
  if (next) {
    next.focus();
    if (next.tagName === 'INPUT' && next.select) next.select();
  } else {
    const saveBtn = modal.querySelector('.modal-footer .btn-gold');
    if (saveBtn) saveBtn.focus();
  }
});

document.querySelectorAll('.overlay').forEach(o=>{
  o.addEventListener('click', e => {
    if (e.target !== o) return;
    if (o.id === 'modal-confirm') { resolveConfirm(false); return; }
    closeModal(o.id);
  });
});

function toast(msg, type='success') {
  const wrap = document.getElementById('toast-wrap');
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  const icon = type==='success'
    ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>`
    : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
  el.innerHTML = `${icon} ${msg}`;
  wrap.appendChild(el);
  setTimeout(()=>el.remove(), 3500);
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
applyLogo();
populateStatusSelects();
syncSidebarBrand();
navigate(getSavedPage()); // نرجّع نفس آخر صفحة كان فيها المستخدم بدل ما نرميه على لوحة التحكم دايمًا
renderSandboxBanner();
checkScheduledAutoBackup();
checkAutoMonthlyReport();
checkSeasonalAlerts();

// ══════════════════════════════════════════
// AUTO-REFRESH
// ══════════════════════════════════════════
// بيرجع true لو في مودال مفتوح دلوقتي — عشان الريفريش ميقطعش على المستخدم وهو بيدخل بيانات
function isAnyModalOpen() {
  return !!document.querySelector('.overlay.open');
}

// بيرجع true لو المستخدم دلوقتي بيكتب في حقل إدخال
function isUserTyping() {
  const el = document.activeElement;
  if (!el) return false;
  return ['INPUT','TEXTAREA','SELECT'].includes(el.tagName);
}

// بتحدّث كل حاجة ظاهرة على الشاشة دلوقتي (مش بس محتوى الصفحة الحالية):
// البادجات في السايدبار، عداد الإشعارات، اللوجو، واسم الشركة — عشان أي تغيير في البيانات
// ينعكس على كل حتة في الواجهة فورًا، مش بس الصفحة اللي فاتحها المستخدم
function refreshEverything() {
  applyLogo();
  syncSidebarBrand();
  refreshBadges();
  renderPage(currentPage);
  const dd = document.getElementById('notif-dropdown');
  if (dd && dd.classList.contains('open')) renderNotifDropdown();
}

function autoRefreshTick() {
  if (isAnyModalOpen() || isUserTyping()) return;
  refreshEverything();
}

// ريفريش دوري كل 30 ثانية لأي صفحة مفتوحة (تحديث الوقت النسبي للمتابعات، آخر تحديث، إلخ)
setInterval(autoRefreshTick, 30000);

// لو البيانات اتغيرت من تاب أو نافذة تانية لنفس البرنامج (نفس الـ localStorage)، حدّث كل حاجة فورًا
// مش بس الصفحة اللي واقف فيها — عشان أي تغيير في أي مكان ينعكس على كل الشاشات المفتوحة
window.addEventListener('storage', e => {
  if (e.key !== STORAGE_KEY || isAnyModalOpen()) return;
  DB = loadDB();
  refreshEverything();
  toast('تم تحديث البيانات');
});

// لما المستخدم يرجع للتاب بعد ما يكون بعيد عنه، حدّث كل حاجة على طول
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && !isAnyModalOpen()) {
    refreshEverything();
  }
});


// ══════════════════════════════════════════
// SETTINGS PAGE
// ══════════════════════════════════════════
var currentSettingsTab = 'logo';
function setSettingsTab(tab) {
  currentSettingsTab = tab;
  document.querySelectorAll('#settings-nav .settings-nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.settingsTab === tab);
  });
  document.querySelectorAll('.settings-panel').forEach(el => {
    el.style.display = el.id === `settings-panel-${tab}` ? '' : 'none';
  });
}

function renderSettings() {
  const s = DB.settings || {};
  renderDashboardWidgetsSettings();
  renderAutoBackupStatus();
  // Fill brand info
  document.getElementById('sett-brand-name').value = s.brandName || '';
  document.getElementById('sett-brand-sub').value = s.brandSub || '';
  document.getElementById('sett-phone').value = s.phone || '';
  document.getElementById('sett-email').value = s.email || '';
  document.getElementById('sett-address').value = s.address || '';
  document.getElementById('sett-tax-number').value = s.taxNumber || '';
  document.getElementById('sett-print-size').value = s.printSize || 'a4';
  document.getElementById('sett-print-copies').value = String(s.printCopies || 1);
  document.getElementById('max-discount-percent').value = (s.maxDiscountPercent !== undefined && s.maxDiscountPercent !== null) ? s.maxDiscountPercent : '';
  // نصوص الفاتورة
  document.getElementById('inv-welcome-text').value = s.invoiceWelcomeText || '';
  document.getElementById('inv-footer-text').value = s.invoiceFooterText || '';
  // الضريبة وعناصر الفاتورة — الرقم الضريبي هنا بس للعرض (بيتضاف ويتعدل من تاب معلومات الشركة)
  document.getElementById('inv-tax-number').value = s.taxNumber || '';
  document.getElementById('inv-tax-rate').value = (s.taxRate !== undefined && s.taxRate !== null) ? s.taxRate : '';
  document.getElementById('inv-apply-tax').checked = !!s.applyTax;
  document.getElementById('inv-show-tax-number').checked = !!s.showTaxNumber;
  document.getElementById('inv-show-employee').checked = !!s.showEmployeeName;
  document.getElementById('inv-show-unit-price').checked = s.showUnitPrice !== false;
  document.getElementById('inv-show-logo').checked = s.showLogo !== false;
  document.getElementById('inv-show-stamp').checked = s.showStamp !== false;
  renderQrCodeSettingsList();
  // لو الإعداد المحفوظ بيشاور على قالب اتلغى (زي مودرن/بسيط/كونتراست)، نرجّعه لكلاسيك تلقائيًا
  if (s.invoiceTemplate && !INVOICE_TEMPLATES.includes(s.invoiceTemplate)) {
    s.invoiceTemplate = 'classic';
    saveDB();
  }
  // ترقيم الفواتير
  document.getElementById('inv-num-prefix').value = s.invoiceNumPrefix || '';
  document.getElementById('inv-num-start').value = s.invoiceNumStart || 1000;
  document.getElementById('inv-num-padding').value = String(s.invoiceNumPadding || 4);
  document.getElementById('inv-num-reset').value = s.invoiceNumReset || 'none';
  // Sync settings logo preview with actual logo
  const sImg = document.getElementById('settings-logo-img');
  const sPh = document.getElementById('settings-logo-ph');
  if (DB.logo) {
    sImg.src = DB.logo; sImg.style.display = 'block'; sPh.style.display = 'none';
  } else {
    sImg.style.display = 'none'; sPh.style.display = 'flex';
  }
  // Sync settings stamp preview مع الختم الحالي
  const stImg = document.getElementById('settings-stamp-img');
  const stPh = document.getElementById('settings-stamp-ph');
  if (stImg && stPh) {
    if (DB.stamp) { stImg.src = DB.stamp; stImg.style.display = 'block'; stPh.style.display = 'none'; }
    else { stImg.style.display = 'none'; stPh.style.display = 'flex'; }
  }
  // Mark active theme
  const theme = s.theme || 'dark-gold';
  document.querySelectorAll('.theme-card').forEach(c => {
    const t = c.dataset.theme;
    c.classList.toggle('active', t === theme);
  });
  // Mark active invoice template
  const invTpl = s.invoiceTemplate || 'classic';
  document.querySelectorAll('#invoice-template-grid .theme-card').forEach(c => {
    c.classList.toggle('active', c.dataset.invoiceTemplate === invTpl);
  });
  document.getElementById('auto-signature-toggle').checked = isAutoSignatureEnabled();
  document.getElementById('signature-size-select').value = getSignatureSize();
  renderStatusTags();
  renderPaymentMethodTags();
  renderNotificationsSettings();
  renderRolesSettings();
  renderShortcutsSettings();
  renderSignaturesSettings();
  renderCommissionTiersSettings();
  renderIdCardSettings();
  renderCustomFieldDefsList();
  renderClientTemplatesList();
  populateClientTemplateServiceOptions();
  setSettingsTab(currentSettingsTab);
  updateInvoicePreview();
  updateInvoiceNumberPreview();
}

// ══════════════════════════════════════════
// CUSTOM STATUSES (from Settings)
// ══════════════════════════════════════════
function renderStatusTags() {
  const wrap = document.getElementById('status-tags-list');
  if (!wrap) return;
  const statuses = getDealStatuses();
  wrap.innerHTML = statuses.map(st => `
    <span class="status-tag badge-${st.color}">
      ${STATUS_ICONS[st.color]||''} ${st.name}
      <button type="button" class="status-tag-del" onclick="removeCustomStatus(${JSON.stringify(st.name).replace(/&/g,'&amp;').replace(/"/g,'&quot;')})" title="حذف الحالة">&#x2715;</button>
    </span>
  `).join('');
}

function addCustomStatus() {
  const input = document.getElementById('new-status-input');
  const colorSel = document.getElementById('new-status-color');
  const name = input.value.trim();
  if (!name) { input.classList.add('field-invalid'); toast('اكتب اسم الحالة الأول', 'error'); return; }
  const statuses = getDealStatuses();
  if (statuses.some(s => s.name === name)) { input.classList.add('field-invalid'); toast('الحالة دي موجودة بالفعل', 'error'); return; }
  input.classList.remove('field-invalid');
  statuses.push({ name, color: colorSel.value });
  saveDB();
  input.value = '';
  renderStatusTags();
  populateStatusSelects();
  toast('تمت إضافة الحالة');
}

async function removeCustomStatus(name) {
  const statuses = getDealStatuses();
  if (statuses.length <= 1) { toast('لازم تفضل حالة واحدة على الأقل', 'error'); return; }
  const inUseDeals = (DB.deals||[]).filter(d => d.status === name).length;
  const inUseClients = (DB.clients||[]).filter(c => c.status === name).length;
  const inUse = inUseDeals + inUseClients;
  const msg = inUse
    ? `الحالة "${name}" مستخدمة في ${inUse} سجل. هتفضل موجودة في السجلات القديمة بس مش هتظهر كخيار جديد. تحذف؟`
    : `حذف الحالة "${name}"؟`;
  if (!(await confirmDialog(msg))) return;
  DB.settings.dealStatuses = statuses.filter(s => s.name !== name);
  saveDB();
  renderStatusTags();
  populateStatusSelects();
  toast('تم حذف الحالة', 'error');
}

function populateStatusSelects() {
  const statuses = getDealStatuses();
  const plainOpts = statuses.map(s => `<option>${s.name}</option>`).join('');
  const filterOpts = `<option value="">كل الحالات</option>` + plainOpts;

  const dStatus = document.getElementById('d-status');
  if (dStatus) {
    const cur = dStatus.value;
    dStatus.innerHTML = plainOpts;
    if (statuses.some(s=>s.name===cur)) dStatus.value = cur;
  }
  const clientFilter = document.getElementById('client-filter-status');
  if (clientFilter) {
    const cur = clientFilter.value;
    clientFilter.innerHTML = filterOpts;
    clientFilter.value = cur;
  }
  const dealFilter = document.getElementById('deal-filter-status');
  if (dealFilter) {
    const cur = dealFilter.value;
    dealFilter.innerHTML = filterOpts;
    dealFilter.value = cur;
  }
}

function saveBrandInfo() {
  const phone = document.getElementById('sett-phone').value.trim();
  const email = document.getElementById('sett-email').value.trim();
  const ok = runValidation([
    {id:'sett-phone', value:phone, test:isValidPhone, message:'رقم التليفون غير صحيح'},
    {id:'sett-email', value:email, test:isValidEmail, message:'البريد الإلكتروني غير صحيح'},
  ]);
  if (!ok) return;
  ensureSettings();
  DB.settings.brandName = document.getElementById('sett-brand-name').value.trim();
  DB.settings.brandSub = document.getElementById('sett-brand-sub').value.trim();
  DB.settings.phone = phone;
  DB.settings.email = email;
  DB.settings.address = document.getElementById('sett-address').value.trim();
  DB.settings.taxNumber = document.getElementById('sett-tax-number').value.trim();
  syncSidebarBrand(); // تحديث اسم الشركة في السايدبار وهيدر الطباعة فورًا
  // الرقم الضريبي بيتعدل من هنا بس، وبيظهر في تاب الضريبة كعرض غير قابل للتعديل
  const taxDisplay = document.getElementById('inv-tax-number');
  if (taxDisplay) taxDisplay.value = DB.settings.taxNumber || '';
  logActivity('تعديل معلومات الشركة', DB.settings.brandName || '');
  saveDB();
  updateInvoicePreview();
  toast('تم حفظ معلومات الشركة');
}

function settingsUploadLogo(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { toast('حجم الصورة يتجاوز 2 ميجابايت', 'error'); return; }
  const reader = new FileReader();
  reader.onload = ev => {
    DB.logo = ev.target.result;
    saveDB(); applyLogo();
    // Sync settings preview
    const sImg = document.getElementById('settings-logo-img');
    const sPh = document.getElementById('settings-logo-ph');
    sImg.src = DB.logo; sImg.style.display = 'block'; sPh.style.display = 'none';
    updateInvoicePreview();
    toast('تم تحديث الشعار بنجاح');
  };
  reader.readAsDataURL(file);
}

async function removeLogo() {
  if (!(await confirmDialog('هل تريد حذف الشعار الحالي؟'))) return;
  DB.logo = null; saveDB(); applyLogo();
  const sImg = document.getElementById('settings-logo-img');
  const sPh = document.getElementById('settings-logo-ph');
  if (sImg) { sImg.style.display = 'none'; }
  if (sPh) { sPh.style.display = 'flex'; }
  updateInvoicePreview();
  toast('تم حذف الشعار');
}

// ختم الشركة — بيظهر على الفاتورة بلونه الحقيقي (زي حبر الأزرق) من غير ما نطبّق عليه فلتر أبيض/أسود
function settingsUploadStamp(e) {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) { toast('حجم الصورة يتجاوز 2 ميجابايت', 'error'); return; }
  const reader = new FileReader();
  reader.onload = ev => {
    DB.stamp = ev.target.result;
    saveDB();
    const stImg = document.getElementById('settings-stamp-img');
    const stPh = document.getElementById('settings-stamp-ph');
    stImg.src = DB.stamp; stImg.style.display = 'block'; stPh.style.display = 'none';
    updateInvoicePreview();
    toast('تم تحديث الختم بنجاح');
  };
  reader.readAsDataURL(file);
}

async function removeStamp() {
  if (!(await confirmDialog('هل تريد حذف الختم الحالي؟'))) return;
  DB.stamp = null; saveDB();
  const stImg = document.getElementById('settings-stamp-img');
  const stPh = document.getElementById('settings-stamp-ph');
  if (stImg) { stImg.style.display = 'none'; }
  if (stPh) { stPh.style.display = 'flex'; }
  updateInvoicePreview();
  toast('تم حذف الختم');
}

const THEMES = {
  'dark-gold':   {},
  'dark-cyan':   {},
  'dark-purple': {},
  'dark-green':  {},
  'dark-red':    {},
  'light':       {}
};

function applyTheme(theme) {
  // Remove all theme classes
  Object.keys(THEMES).forEach(t => document.body.classList.remove('theme-' + t));
  document.body.classList.add('theme-' + theme);
  // Update active card
  document.querySelectorAll('.theme-card').forEach(c => {
    c.classList.toggle('active', c.dataset.theme === theme);
  });
  ensureSettings();
  DB.settings.theme = theme;
  logActivity('تغيير الثيم', theme);
  saveDB();
  toast('تم تغيير الثيم');
}

// ══════════════════════════════════════════
// PAGE: القوالب الجاهزة — حفظ "شكل" كامل (ثيم + تصميم فاتورة + بطاقة هوية) واسترجاعه بضغطة واحدة
// ══════════════════════════════════════════
function getLookTemplates() {
  ensureSettings();
  if (!DB.settings.lookTemplates) DB.settings.lookTemplates = [];
  return DB.settings.lookTemplates;
}
function snapshotCurrentLook() {
  const s = ensureSettings();
  return {
    theme: s.theme || 'dark-gold',
    invoiceTemplate: s.invoiceTemplate || 'classic',
    invoiceWelcomeText: s.invoiceWelcomeText || '',
    invoiceFooterText: s.invoiceFooterText || '',
    idCard: JSON.parse(JSON.stringify(s.idCard || {}))
  };
}
function saveCurrentAsTemplate() {
  const input = document.getElementById('new-template-name');
  const name = input.value.trim();
  if (!name) { input.classList.add('field-invalid'); toast('اكتب اسم القالب الأول', 'error'); return; }
  const templates = getLookTemplates();
  if (templates.some(t => t.name === name)) { toast('فيه قالب بنفس الاسم ده بالفعل', 'error'); return; }
  templates.push({name, snapshot: snapshotCurrentLook()});
  logActivity('حفظ قالب شكل جديد', name);
  saveDB();
  input.value = '';
  renderTemplatesPage();
  toast('تم حفظ القالب');
}
function applyLookTemplate(name) {
  const t = getLookTemplates().find(x => x.name === name);
  if (!t) return;
  const s = ensureSettings();
  Object.assign(s, {
    theme: t.snapshot.theme,
    invoiceTemplate: t.snapshot.invoiceTemplate,
    invoiceWelcomeText: t.snapshot.invoiceWelcomeText,
    invoiceFooterText: t.snapshot.invoiceFooterText,
    idCard: JSON.parse(JSON.stringify(t.snapshot.idCard || {}))
  });
  logActivity('تطبيق قالب شكل', name);
  saveDB();
  applyTheme(s.theme);
  toast(`تم تطبيق قالب "${name}"`);
}
async function deleteLookTemplate(name) {
  if (!(await confirmDialog(`حذف قالب "${name}"؟`))) return;
  DB.settings.lookTemplates = getLookTemplates().filter(t => t.name !== name);
  logActivity('حذف قالب شكل', name);
  saveDB();
  renderTemplatesPage();
  toast('تم حذف القالب', 'error');
}
function renderTemplatesPage() {
  const wrap = document.getElementById('templates-list');
  if (!wrap) return;
  const templates = getLookTemplates();
  if (!templates.length) {
    wrap.innerHTML = `<div class="card" style="padding:20px;text-align:center;color:var(--text3);font-size:13px">لسه مفيش قوالب محفوظة. اضبط الثيم وتصميم الفاتورة والبطاقات زي ما عايز، وبعدين احفظه هنا كقالب باسمه.</div>`;
    return;
  }
  wrap.innerHTML = templates.map(t => `
    <div class="card" style="padding:12px 14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <div>
        <div style="font-weight:800;font-size:13px">${t.name}</div>
        <div style="font-size:11px;color:var(--text3);margin-top:2px">ثيم: ${t.snapshot.theme} • قالب فاتورة: ${t.snapshot.invoiceTemplate}</div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-gold btn-sm" onclick="applyLookTemplate(${JSON.stringify(t.name)})">تطبيق</button>
        <button class="btn btn-outline btn-sm" onclick="deleteLookTemplate(${JSON.stringify(t.name)})" style="color:var(--red)">حذف</button>
      </div>
    </div>
  `).join('');
}

// ══════════════════════════════════════════
// PAGE: سجل النشاط — كل التعديلات المهمة اللي حصلت في النظام
// ══════════════════════════════════════════
function renderActivityLogPage() {
  const wrap = document.getElementById('activity-log-list');
  if (!wrap) return;
  const search = (document.getElementById('activity-log-search')||{}).value?.toLowerCase() || '';
  let list = DB.activityLog || [];
  if (search) list = list.filter(a => (a.action||'').toLowerCase().includes(search) || (a.details||'').toLowerCase().includes(search) || (a.user||'').toLowerCase().includes(search));
  if (!list.length) {
    wrap.innerHTML = `<div class="card" style="padding:20px;text-align:center;color:var(--text3);font-size:13px">لسه مفيش أي نشاط مسجّل.</div>`;
    return;
  }
  wrap.innerHTML = list.map(a => `
    <div class="card" style="padding:10px 14px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
      <div>
        <div style="font-size:13px"><b>${a.user}</b> — ${a.action}${a.details ? `: ${a.details}` : ''}</div>
      </div>
      <div style="font-size:11px;color:var(--text3);white-space:nowrap">${a.ts}</div>
    </div>
  `).join('');
}
async function clearActivityLog() {
  if (!(await confirmDialog('حذف كل سجل النشاط نهائيًا؟'))) return;
  DB.activityLog = [];
  saveDB();
  renderActivityLogPage();
  toast('تم مسح السجل', 'error');
}

function initTheme() {
  const theme = (DB.settings && DB.settings.theme) || 'dark-gold';
  document.body.classList.add('theme-' + theme);
}

// Apply theme on load
initTheme();

// ══════════════════════════════════════════
// DEVELOPER PAGE
// ══════════════════════════════════════════
function storageSizeKB() {
  try {
    const bytes = new Blob([JSON.stringify(DB)]).size;
    return (bytes / 1024).toFixed(1);
  } catch(e) { return '0'; }
}

function renderDeveloperPage() {
  const clients = DB.clients||[], deals = DB.deals||[], followups = DB.followups||[],
        feedbacks = DB.feedbacks||[], services = DB.services||[], team = DB.team||[];

  document.getElementById('dev-stats').innerHTML = `
    <div class="stat-card gold">
      <div class="stat-icon" style="color:var(--gold)">${IC.users}</div>
      <div class="stat-label">إجمالي العملاء</div>
      <div class="stat-value">${clients.length}</div>
      <div class="stat-sub">${deals.length} صفقة مرتبطة</div>
    </div>
    <div class="stat-card cyan">
      <div class="stat-icon" style="color:var(--cyan)">${IC.followup}</div>
      <div class="stat-label">المتابعات والتقييمات</div>
      <div class="stat-value">${followups.length}</div>
      <div class="stat-sub">${feedbacks.length} تقييم مسجّل</div>
    </div>
    <div class="stat-card green">
      <div class="stat-icon" style="color:var(--green)">${IC.pipeline}</div>
      <div class="stat-label">الخدمات وفريق العمل</div>
      <div class="stat-value">${services.length}</div>
      <div class="stat-sub">${team.length} عضو فريق</div>
    </div>
    <div class="stat-card purple">
      <div class="stat-icon" style="color:var(--purple)">${IC.save}</div>
      <div class="stat-label">حجم البيانات المخزّنة</div>
      <div class="stat-value">${storageSizeKB()}</div>
      <div class="stat-sub">كيلوبايت (localStorage) — آخر تحديث ${DB.lastUpdate||'—'}</div>
    </div>
  `;

  renderDevIntegrity();
}

// فحص سلامة البيانات: صفقات/متابعات/تقييمات بتشاور على عميل محذوف، أو IDs مكررة
function checkDataIntegrity() {
  const issues = [];
  const clientIds = new Set((DB.clients||[]).map(c=>c.id));

  const orphanDeals = (DB.deals||[]).filter(d => d.clientId != null && !clientIds.has(d.clientId));
  if (orphanDeals.length) issues.push({type:'red', title:'صفقات بدون عميل', desc:`${orphanDeals.length} صفقة مرتبطة بعميل محذوف`});

  const orphanFollowups = (DB.followups||[]).filter(f => f.clientId != null && !clientIds.has(f.clientId));
  if (orphanFollowups.length) issues.push({type:'red', title:'متابعات بدون عميل', desc:`${orphanFollowups.length} متابعة مرتبطة بعميل محذوف`});

  const orphanFeedbacks = (DB.feedbacks||[]).filter(f => f.clientId != null && !clientIds.has(f.clientId));
  if (orphanFeedbacks.length) issues.push({type:'red', title:'تقييمات بدون عميل', desc:`${orphanFeedbacks.length} تقييم مرتبط بعميل محذوف`});

  const dupIds = arr => { const seen = new Set(), dups = new Set(); arr.forEach(x=>{ if(seen.has(x.id)) dups.add(x.id); seen.add(x.id); }); return dups; };
  const dupClients = dupIds(DB.clients||[]);
  if (dupClients.size) issues.push({type:'gold', title:'أرقام عملاء مكررة', desc:`${dupClients.size} ID مكرر في جدول العملاء`});
  const dupServices = dupIds(DB.services||[]);
  if (dupServices.size) issues.push({type:'gold', title:'أرقام خدمات مكررة', desc:`${dupServices.size} ID مكرر في جدول الخدمات`});

  const servicesWithoutPrice = (DB.services||[]).filter(s => !s.price || s.price <= 0);
  if (servicesWithoutPrice.length) issues.push({type:'gold', title:'خدمات بدون سعر', desc:`${servicesWithoutPrice.length} خدمة سعرها صفر`});

  return issues;
}

function renderDevIntegrity() {
  const el = document.getElementById('dev-integrity');
  if (!el) return;
  const issues = checkDataIntegrity();
  if (!issues.length) {
    el.innerHTML = `<div class="insight-card insight-green">
      <div class="insight-icon">${IC.check}</div>
      <div>
        <div class="insight-label">كل البيانات سليمة</div>
        <div class="insight-value">لا يوجد أي مشاكل</div>
        <div class="insight-desc">لا يوجد سجلات مكررة أو مرتبطة بعناصر محذوفة</div>
      </div>
    </div>`;
    return;
  }
  el.innerHTML = `<div class="insight-grid">` + issues.map(i => `
    <div class="insight-card insight-${i.type}">
      <div class="insight-icon">${IC.warn}</div>
      <div>
        <div class="insight-label">${i.title}</div>
        <div class="insight-value">${i.desc}</div>
      </div>
    </div>
  `).join('') + `</div>`;
}

// ── إعادة تعيين البيانات (منطقة الخطر) ──
function devAfterReset(msg) {
  saveDB();
  toast(msg, 'error');
  renderDeveloperPage();
  refreshBadges();
}

async function devResetClientsAndDeals() {
  if (!(await confirmDialog('هل أنت متأكد من حذف كل العملاء والصفقات نهائيًا؟ لا يمكن التراجع.', {title:'تحذير'}))) return;
  DB.clients = [];
  DB.deals = [];
  devAfterReset('تم تصفير العملاء والصفقات');
}

async function devDeleteCancelledClients() {
  const cancelled = (DB.clients||[]).filter(c => c.status === 'ملغي');
  if (!cancelled.length) { toast('لا يوجد عملاء بحالة ملغي', 'error'); return; }
  if (!(await confirmDialog(`هل تريد حذف ${cancelled.length} عميل بحالة "ملغي" وصفقاتهم المرتبطة؟`))) return;
  const idsToRemove = new Set(cancelled.map(c=>c.id));
  DB.clients = (DB.clients||[]).filter(c => !idsToRemove.has(c.id));
  DB.deals = (DB.deals||[]).filter(d => !idsToRemove.has(d.clientId));
  devAfterReset('تم حذف العملاء الملغيين');
}

async function devResetFollowups() {
  if (!(await confirmDialog('هل أنت متأكد من حذف كل المتابعات نهائيًا؟', {title:'تحذير'}))) return;
  DB.followups = [];
  devAfterReset('تم تصفير المتابعات');
}

async function devResetFeedbacks() {
  if (!(await confirmDialog('هل أنت متأكد من حذف كل تقييمات العملاء نهائيًا؟', {title:'تحذير'}))) return;
  DB.feedbacks = [];
  devAfterReset('تم تصفير تقييمات العملاء');
}

async function devResetTeam() {
  if (!(await confirmDialog('هل أنت متأكد من حذف كل أعضاء فريق العمل نهائيًا؟', {title:'تحذير'}))) return;
  DB.team = [];
  devAfterReset('تم تصفير فريق العمل');
}

async function devResetServices() {
  if (!(await confirmDialog('هل أنت متأكد من إرجاع قائمة الخدمات للوضع الافتراضي؟ سيتم حذف أي خدمات مخصصة أضفتها.', {title:'تحذير'}))) return;
  DB.services = JSON.parse(JSON.stringify(DEFAULT_DB.services));
  devAfterReset('تم إرجاع الخدمات للوضع الافتراضي');
}

async function devResetTargets() {
  if (!(await confirmDialog('هل أنت متأكد من حذف كل بيانات التارجت والأهداف لكل السنين؟', {title:'تحذير'}))) return;
  DB.targetsByYear = {};
  devAfterReset('تم تصفير التارجت والأهداف');
}

async function devWipeAll() {
  if (!(await confirmDialog('تحذير أخير: هذا سيمسح كل بيانات النظام (عملاء، صفقات، متابعات، تقييمات، فريق، خدمات، تارجت) بدون استثناء. هل تريد المتابعة؟', {title:'تحذير أخير'}))) return;
  if (!(await confirmDialog('تأكيد نهائي: لا يمكن التراجع عن هذه الخطوة إطلاقًا. متأكد تمامًا؟', {title:'تأكيد نهائي'}))) return;
  const brandSettings = DB.settings;
  const logo = DB.logo;
  const stamp = DB.stamp;
  DB = {
    clients: [], deals: [], team: [], employees: [], targetsByYear: {}, commissionRates: [],
    services: JSON.parse(JSON.stringify(DEFAULT_DB.services)),
    followups: [], feedbacks: [], invoices: [], documents: [],
    logo: logo,
    stamp: stamp,
    settings: brandSettings || { brandName:'', brandSub:'', phone:'', email:'', address:'', theme:'dark-gold' },
    lastUpdate: new Date().toLocaleString('ar-EG-u-nu-latn')
  };
  devAfterReset('تم مسح كل بيانات النظام');
}

// ══════════════════════════════════════════
// بيانات وهمية للتجربة (Developer) — بتضيف عملاء/صفقات/متابعات/تقييمات/فريق/خطة/تارجت
// وهمية فوق البيانات الحالية من غير ما تمسح أي حاجة موجودة، عشان تجرب النظام بسرعة
// ══════════════════════════════════════════
function devRandInt(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function devPick(arr) { return arr[devRandInt(0, arr.length - 1)]; }
function devRandDigits(n) { let s = ''; for (let i = 0; i < n; i++) s += devRandInt(0, 9); return s; }
function devRandPhone() { return devPick(['010', '011', '012', '015']) + ' ' + devRandDigits(4) + ' ' + devRandDigits(4); }
function devRandDateISO(daysBack = 180) {
  const d = new Date();
  d.setDate(d.getDate() - devRandInt(0, daysBack));
  return d.toISOString().slice(0, 10);
}

async function devGenerateFakeData() {
  if (!(await confirmDialog('هيتم توليد بيانات وهمية (عملاء، صفقات، متابعات، تقييمات، فريق، حملات، مهام، مؤشرات، تارجت) وإضافتها فوق البيانات الحالية عشان تجرب النظام بسرعة. البيانات الحقيقية الموجودة مش هتتمسح ولا تتغيّر. تحب تكمل؟', {title:'توليد بيانات وهمية للتجربة'}))) return;

  const businessNames = ['مطعم الأصالة', 'كافيه لاونج', 'سوبر ماركت الأمل', 'صيدلية الشفاء', 'متجر الأناقة', 'عيادة النور', 'محل الديكور', 'استوديو التصوير', 'أكاديمية التعليم', 'مركز اللياقة', 'بوتيك الموضة', 'مخبز الفرحة', 'ورشة السيارات', 'مكتب المحاماة', 'شركة المقاولات', 'معرض الأثاث', 'صالون التجميل', 'مطبعة الإبداع', 'مصنع البلاستيك', 'شركة الشحن'];
  const ownerNames = ['أحمد سمير', 'محمد عبد الله', 'مصطفى كامل', 'يوسف حسن', 'كريم عادل', 'عمرو فتحي', 'إسلام ماهر', 'حسام الدين', 'طارق نبيل', 'وليد جمال', 'مريم أشرف', 'نور الهدى', 'سارة إبراهيم', 'هبة الله', 'ياسمين خالد'];
  const addresses = ['شارع الجمهورية', 'كورنيش النيل', 'شارع البحر', 'المنطقة الصناعية', 'حي السلام', 'شارع الثورة', 'ميدان المحطة', 'شارع الجلاء', 'حي المطار', 'وسط البلد'];
  const notesPool = ['عميل جاد ومتابع باستمرار', 'محتاج متابعة دورية', 'راضي جدًا عن الخدمة', 'طلب تعديلات بسيطة', 'في انتظار الدفعة التالية', 'أضاف فرع جديد مؤخرًا', ''];
  const followupTypes = ['مكالمة هاتفية', 'واتساب', 'زيارة ميدانية', 'إرسال عرض', 'تحصيل مبلغ', 'اجتماع', 'ملاحظة'];
  const followupNotes = ['تم التواصل ومناقشة التفاصيل', 'العميل طلب وقت للتفكير', 'تم إرسال العرض السعري', 'متابعة تحصيل باقي المبلغ', 'اجتماع لمراجعة سير العمل', 'العميل مبسوط من الأداء لحد دلوقتي', 'محتاج نتابع الأسبوع الجاي'];
  const commentsPool = ['خدمة ممتازة وسريعة', 'فريق محترف ومتعاون جدًا', 'التسليم كان في الميعاد بالظبط', 'الأسعار مناسبة والجودة عالية', 'في بعض التأخير لكن النتيجة كويسة', 'هنكرر التعامل تاني أكيد'];

  const services = (DB.services || []).length ? DB.services : DEFAULT_DB.services;
  const statuses = getDealStatuses();
  if (!DB.team) DB.team = [];
  if ((DB.team || []).length < 3) {
    let maxTeamId = (DB.team || []).reduce((m, t) => Math.max(m, t.id), 0);
    [{ name: 'محمود عبد الله', role: 'مندوب مبيعات' }, { name: 'ندى فتحي', role: 'مندوب مبيعات' }].forEach(person => {
      maxTeamId++;
      DB.team.push({ id: maxTeamId, name: person.name, role: person.role, phone: devRandPhone(), joined: devRandDateISO(365), clients: 0, completed: 0, cancelled: 0, commission: 0, notes: 'عضو فريق وهمي للتجربة' });
    });
  }
  const agents = DB.team.map(m => m.name);

  // ── عملاء + صفقاتهم ──
  const clientCount = 20;
  let maxClientId = (DB.clients || []).reduce((m, c) => Math.max(m, c.id), 0);
  let maxDealId = (DB.deals || []).reduce((m, d) => Math.max(m, d.id), 0);
  const newDeals = [];
  for (let i = 0; i < clientCount; i++) {
    maxClientId++;
    const svc = devPick(services);
    const status = devPick(statuses).name;
    const cost = svc.price > 0 ? svc.price : devRandInt(5, 30) * 1000;
    const collected = status === 'نشط / مكتمل' ? cost : (status === 'ملغي' ? 0 : devRandInt(0, cost));
    const agent = devPick(agents);
    const date = devRandDateISO();
    const zone = devPick(AREA_ZONES);
    const client = {
      id: maxClientId, name: `${devPick(businessNames)} ${maxClientId}`, owner: devPick(ownerNames),
      phone: devRandPhone(), phones: [], branches: [], service: svc.name, cost, collected, status,
      agent, date, address: `${devPick(addresses)}، ${zone.name}`, notes: devPick(notesPool),
      lat: jitterCoord(zone.lat), lng: jitterCoord(zone.lng)
    };
    DB.clients.push(client);
    maxDealId++;
    const deal = { id: maxDealId, clientId: client.id, service: svc.name, cost, collected, status, agent, date, notes: client.notes };
    DB.deals.push(deal);
    newDeals.push(deal);
  }
  newDeals.forEach(d => {
    updateAgentStats(d.agent, 'add');
    trackStatusTransition(d.agent, null, d.status);
    if (d.collected > 0) autoUpdateMonthlyTarget(d.date, d.collected);
  });

  // ── متابعات ──
  const fuClients = DB.clients.slice(-clientCount);
  const fuBase = Date.now();
  for (let i = 0; i < 15; i++) {
    const c = devPick(fuClients);
    DB.followups.push({ id: fuBase + i, clientId: c.id, type: devPick(followupTypes), note: devPick(followupNotes), next: '', nextDate: '', date: new Date().toLocaleDateString('ar-EG-u-nu-latn'), done: Math.random() < 0.4 });
  }

  // ── تقييمات ──
  for (let i = 0; i < 10; i++) {
    const c = devPick(fuClients);
    DB.feedbacks.push({ id: fuBase + 1000 + i, clientId: c.id, rating: devRandInt(3, 5), nps: devRandInt(6, 10), comment: devPick(commentsPool), date: new Date().toLocaleDateString('ar-EG-u-nu-latn') });
  }

  // ── تارجت السنة الحالية ──
  const yearTargets = getYearTargets(new Date().getFullYear());
  yearTargets.forEach(t => {
    if (!t.target) t.target = devRandInt(10, 25) * 1000;
    if (!t.actual) t.actual = Math.random() < 0.7 ? devRandInt(Math.round(t.target * 0.3), Math.round(t.target * 1.3)) : 0;
    if (!t.clientsTarget) t.clientsTarget = devRandInt(2, 6);
    if (!t.clientsActual) t.clientsActual = t.actual > 0 ? devRandInt(1, t.clientsTarget + 2) : 0;
    t.status = (t.target > 0 && t.actual >= t.target) ? 'تجاوز التارجت' : (t.actual > 0 ? 'مستهدف' : 'لا بيانات');
  });

  saveDB();
  toast('تم توليد بيانات وهمية بنجاح');
  renderDeveloperPage();
  refreshEverything();
}
