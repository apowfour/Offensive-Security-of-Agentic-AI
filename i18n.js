/* ============================================================
   OffensiveAgentic — Internationalization (i18n)
   ------------------------------------------------------------
   Arabic-first bilingual support. Tech/cybersecurity terms
   remain in English inside Arabic strings (e.g. "Prompt
   Injection", "Red Teaming", "Jailbreaking", "OWASP Top 10",
   "LLM", "Agent"). All other words are Arabic.

   Usage:
     - i18n.t('home.hero.title')  -> returns string in current lang
     - i18n.setLang('ar')         -> switches to Arabic (RTL)
     - i18n.setLang('en')         -> switches to English (LTR)
     - i18n.getLang()             -> 'ar' or 'en'
     - i18n.applyToDocument()     -> translates all [data-i18n] elements

   Persistence: language saved to localStorage('oaa-lang').
   Default: 'ar' (Arabic first).
   ============================================================ */

const STRINGS = {
  /* ---- Brand ---- */
  'brand.name': { ar: 'OffensiveAgentic', en: 'OffensiveAgentic' },

  /* ---- Home hero ---- */
  'home.hero.title': {
    ar: 'الأمن الهجومي للـ Agentic AI، في مكان واحد.',
    en: 'The offensive security of agentic AI, in one place.'
  },
  'home.hero.lede': {
    ar: 'مرجع منظم وآخذ في النمو لكل من يقوم بـ Red Teaming أو Penetration Testing أو تقييم أو اختراق وكلاء الذكاء الاصطناعي. اختر فئة للبدء، أو تصفّح الخريطة الكاملة أدناه.',
    en: 'A curated, growing reference for everyone who red-teams, pentests, evaluates, or breaks AI agents. Pick a category to dive in, or scan the full map below.'
  },
  'home.hero.stat.resources': { ar: 'مورد', en: 'resources' },
  'home.hero.stat.categories': { ar: 'فئة', en: 'categories' },

  /* ---- Home sections ---- */
  'home.section.browse.title': { ar: 'تصفّح حسب الفئة', en: 'Browse by category' },
  'home.section.browse.sub': { ar: 'كل فئة تفتح صفحة مخصصة مع بحث خاص بها.', en: 'Each opens a focused page with its own search.' },
  'home.section.tree.title': { ar: 'الخريطة الكاملة', en: 'The full map' },
  'home.section.tree.sub': {
    ar: 'هرمية شاملة للمجال — اضغط على صف يحتوي على ▸ لتوسيعه؛ العناصر المرتبطة تنتقل إلى صفحة فئتها.',
    en: 'A hierarchy of the whole field — click a row with a ▸ to expand it; linked items jump to their category page.'
  },

  /* ---- Tutorial card ---- */
  'home.tutorial.label': { ar: 'الدرس التعليمي', en: 'Tutorial' },
  'home.tutorial.blurb': {
    ar: 'جديد على الموضوع؟ مقدمة لمدة 10 دقائق تنتهي بتجربة هجوم عملية.',
    en: 'New to the topic? A 10-minute primer ending in a hands-on attack demo.'
  },
  'home.tutorial.cta': { ar: 'ابدأ التعلّم ←', en: 'Start learning →' },

  /* ---- Category page ---- */
  'category.back': { ar: '→ كل الفئات', en: '← All categories' },  // arrow points toward "back" direction in each lang's RTL/LTR flow
  'category.search.placeholder': { ar: 'ابحث في هذه الفئة…', en: 'Search within this category…' },
  'category.filter.byTopic': { ar: 'حسب الموضوع', en: 'By topic' },
  'category.chip.more': { ar: '+ المزيد', en: '+N more' }, // overridden dynamically
  'category.chip.less': { ar: 'عرض أقل', en: 'Show less' },
  'category.count.showing': { ar: 'عرض', en: 'Showing' },
  'category.count.of': { ar: 'من', en: 'of' },
  'category.count.topic': { ar: 'الموضوع:', en: 'topic:' },
  'category.empty': {
    ar: 'لا يوجد شيء هنا بعد. هذا القسم ينمو — أضف إدخالاً في <code>data.js</code>.',
    en: 'Nothing here yet. This section is growing — add an entry in <code>data.js</code>.'
  },
  'category.footer.back': { ar: '→ العودة إلى كل الفئات', en: '← Back to all categories' },
  'category.footer.contributions': {
    ar: 'المساهمات مرحب بها على',
    en: 'Contributions welcome on'
  },
  'category.card.open': { ar: 'افتح', en: 'Open' },  // arrow is provided by <span class="arrow"> in app.js (CSS flips it in RTL)
  'category.card.startHere': { ar: '★ ابدأ هنا', en: '★ Start here' },

  /* ---- Tutorial page ---- */
  'tutorial.back': { ar: '→ كل الفئات', en: '← All categories' },
  'tutorial.title': { ar: 'الدروس التعليمية', en: 'Tutorials' },
  'tutorial.lede': {
    ar: 'ثلاثة دروس عملية على الأمن الهجومي للـ Agentic AI — اختر ما يناسب مستواك.',
    en: 'Three hands-on tutorials on the offensive security of agentic AI — pick the one that matches where you are.'
  },
  'tutorial.tab.quick': { ar: '١ البداية السريعة', en: '1 Quick Start' },
  'tutorial.tab.concepts': { ar: '٢ المفاهيم الأساسية', en: '2 Core Concepts' },
  'tutorial.tab.owasp': { ar: '٣ هجمات OWASP Top 10 ASI', en: '3 OWASP Top 10 ASI Attacks' },
  'tutorial.footer.back': { ar: '→ العودة إلى كل الفئات', en: '← Back to all categories' },

  /* ---- Language toggle ---- */
  'lang.toggle.toEn': { ar: 'English', en: 'English' },
  'lang.toggle.toAr': { ar: 'العربية', en: 'العربية' },
  'lang.toggle.aria': { ar: 'تبديل اللغة', en: 'Switch language' },

  /* ---- Footer ---- */
  'footer.openRef': { ar: 'مرجع مفتوح', en: 'Open reference' },
  'footer.contributions': { ar: 'المساهمات مرحب بها على', en: 'Contributions welcome on' },
  'footer.toAdd': {
    ar: 'لإضافة مورد، عدّل ملف',
    en: 'To add a resource, edit'
  },
};

const LANGS = ['ar', 'en'];
const DEFAULT_LANG = 'ar';
const STORAGE_KEY = 'oaa-lang';

const i18n = {
  _lang: null,
  _listeners: [],

  init() {
    // Load saved lang or default to Arabic (Arabic-first per spec)
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch(e) {}
    if (saved && LANGS.includes(saved)) {
      this._lang = saved;
    } else {
      this._lang = DEFAULT_LANG;
    }
    this._applyHtmlDir();
  },

  getLang() { return this._lang; },

  setLang(lang) {
    if (!LANGS.includes(lang)) return;
    if (lang === this._lang) return;
    this._lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e) {}
    this._applyHtmlDir();
    this.applyToDocument();
    this._listeners.forEach(fn => fn(lang));
  },

  toggle() {
    this.setLang(this._lang === 'ar' ? 'en' : 'ar');
  },

  _applyHtmlDir() {
    const html = document.documentElement;
    html.lang = this._lang;
    html.dir = this._lang === 'ar' ? 'rtl' : 'ltr';
  },

  t(key) {
    const entry = STRINGS[key];
    if (!entry) return key;
    return entry[this._lang] || entry.en || key;
  },

  /* Translate all [data-i18n] elements in the document */
  applyToDocument() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = this.t(key);
    });
    // Also handle [data-i18n-text] (sets textContent only)
    document.querySelectorAll('[data-i18n-text]').forEach(el => {
      const key = el.getAttribute('data-i18n-text');
      el.textContent = this.t(key);
    });
    // Update the lang toggle button label
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      // Show the OTHER language's name on the button (so user knows what they'll switch TO)
      const otherLang = this._lang === 'ar' ? 'en' : 'ar';
      toggleBtn.textContent = otherLang === 'ar' ? 'العربية' : 'English';
      toggleBtn.setAttribute('aria-label', this.t('lang.toggle.aria'));
    }
  },

  onChange(fn) { this._listeners.push(fn); },
};

// Auto-init on script load
i18n.init();
