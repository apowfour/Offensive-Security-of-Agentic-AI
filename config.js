/* ============================================================
   OffensiveAgentic — site configuration
   Categories shown on the home page + the hierarchy tree.
   Edit labels/blurbs here; add new categories by adding a row.
   ============================================================ */

/* Each category maps to a `type` used in data.js.
   icon = a Tabler icon name (https://tabler.io/icons).
   label = English label, label_ar = Arabic label (keep tech terms in English).
   blurb = English blurb, blurb_ar = Arabic blurb. */
const CATEGORIES = [
  { type:"framework",  label:"Frameworks",      label_ar:"Frameworks",        icon:"sitemap",        blurb:"Structured maps of the agentic threat landscape.",                blurb_ar:"خرائط منظمة لمشهد التهديدات الخاص بالـ Agentic AI." },
  { type:"standard",   label:"Standards",       label_ar:"Standards",         icon:"checklist",      blurb:"Official risk taxonomies and governance standards.",              blurb_ar:"تصنيفات المخاطر الرسمية ومعايير الحوكمة." },
  { type:"methodology",label:"Methodologies",   label_ar:"Methodologies",     icon:"route",          blurb:"Step-by-step processes for running an engagement.",               blurb_ar:"عمليات خطوة بخطوة لتنفيذ Engagement." },
  { type:"book",       label:"Books",           label_ar:"كتب",               icon:"book",           blurb:"Long-form texts on AI and adversarial security.",                 blurb_ar:"كتب متعمّقة حول الذكاء الاصطناعي والأمن الهجومي." },
  { type:"tool",       label:"Tools",           label_ar:"أدوات",             icon:"tools",          blurb:"Scanners, harnesses and red-teaming frameworks.",                 blurb_ar:"Scanners و Harnesses وأطر الـ Red Teaming." },
  { type:"benchmark",  label:"Benchmarks",      label_ar:"Benchmarks",        icon:"speedometer",    blurb:"Reproducible test sets for measuring robustness.",                blurb_ar:"مجموعات اختبار قابلة للتكرار لقياس المتانة." },
  { type:"paper",      label:"Research Papers", label_ar:"أوراق بحثية",       icon:"file-text",      blurb:"Surveys, attacks, defenses and systematizations.",                blurb_ar:"استبيانات، هجمات، دفاعات وتنظيمات منهجية." },
  { type:"guide",      label:"Guides",          label_ar:"أدلة",              icon:"book-2",         blurb:"Practitioner explainers and how-tos.",                            blurb_ar:"شروحات عملية للممارسين وكيفية التنفيذ." },
  { type:"whitepaper", label:"Whitepapers",     label_ar:"Whitepapers",       icon:"file-description",blurb:"Vendor and community deep-dives.",                               blurb_ar:"تعمّقات من البائعين والمجتمع." },
  { type:"blog_post",  label:"Blog Posts",      label_ar:"مقالات المدونات",    icon:"news",           blurb:"Blogs, newsletters, and podcasts tracking the field.",            blurb_ar:"مدونات ونشرات وبودكاست تتابع المجال." },
  { type:"course",     label:"Courses",         label_ar:"دورات",             icon:"school",         blurb:"Training, certifications, and workshops on offensive AI security.",blurb_ar:"تدريب وشهادات وورش عمل حول الأمن الهجومي للذكاء الاصطناعي." }
];

/* The hierarchy tree shown on the home page.
   Just nested lists — add or edit freely. A node can optionally
   link to a category page via {label, cat} or any url via {label, url}.
   label_ar = Arabic label (keep tech terms in English). */
const TREE = [
  { label:"Frameworks", label_ar:"Frameworks", cat:"framework", children:[
    {label:"Threat taxonomies", label_ar:"تصنيفات التهديدات"},
    {label:"Red-teaming frameworks", label_ar:"أطر الـ Red Teaming"},
    {label:"Governance frameworks", label_ar:"أطر الحوكمة"}
  ]},
  { label:"Standards", label_ar:"Standards", cat:"standard", children:[
    {label:"Risk taxonomies", label_ar:"تصنيفات المخاطر"},
    {label:"Government & body standards", label_ar:"معايير الحكومات والهيئات"}
  ]},
  { label:"Methodologies", label_ar:"Methodologies", cat:"methodology", children:[
    {label:"Engagement process", label_ar:"عملية الـ Engagement"},
    {label:"Playbooks", label_ar:"Playbooks"}
  ]},
  { label:"Books", label_ar:"كتب", cat:"book", children:[
    {label:"AI red teaming", label_ar:"AI Red Teaming"},
    {label:"Adversarial machine learning", label_ar:"Adversarial Machine Learning"}
  ]},
  { label:"Tools", label_ar:"أدوات", cat:"tool", children:[
    {label:"Scanners", label_ar:"Scanners"},
    {label:"Multi-turn attack", label_ar:"هجمات متعددة الأدوار"},
    {label:"CI / regression", label_ar:"CI / Regression"},
    {label:"Agent harnesses", label_ar:"Agent Harnesses"}
  ]},
  { label:"Benchmarks", label_ar:"Benchmarks", cat:"benchmark", children:[
    {label:"Attack-surface benchmarks", label_ar:"Benchmarks لمساحة الهجوم"},
    {label:"Safety & policy benchmarks", label_ar:"Benchmarks للأمان والسياسات"}
  ]},
  { label:"Research Papers", label_ar:"أوراق بحثية", cat:"paper", children:[
    {label:"Surveys", label_ar:"استبيانات", cat:"paper", topic:"Surveys"},
    {label:"Benchmarks", label_ar:"Benchmarks", cat:"paper", topic:"Benchmarks"},
    {label:"Prompt Injection", label_ar:"Prompt Injection", cat:"paper", topic:"Prompt Injection"},
    {label:"Jailbreaking", label_ar:"Jailbreaking", cat:"paper", topic:"Jailbreaking"},
    {label:"Backdoor & Poisoning", label_ar:"Backdoor & Poisoning", cat:"paper", topic:"Backdoor & Poisoning"},
    {label:"RAG Security", label_ar:"RAG Security", cat:"paper", topic:"RAG Security"},
    {label:"Multi-Agent Security", label_ar:"Multi-Agent Security", cat:"paper", topic:"Multi-Agent Security"},
    {label:"Pentesting Frameworks", label_ar:"أطر Pentesting", cat:"paper", topic:"Pentesting Frameworks"},
    {label:"Red Teaming", label_ar:"Red Teaming", cat:"paper", topic:"Red Teaming"},
    {label:"Offensive Cyber / CTF / CVE", label_ar:"Offensive Cyber / CTF / CVE", cat:"paper", topic:"Offensive Cyber / CTF / CVE"},
    {label:"Privacy & Exfiltration", label_ar:"Privacy & Exfiltration", cat:"paper", topic:"Privacy & Exfiltration"},
    {label:"Protocol Security", label_ar:"Protocol Security", cat:"paper", topic:"Protocol Security"},
    {label:"Embodied & Robotic Security", label_ar:"Embodied & Robotic Security", cat:"paper", topic:"Embodied & Robotic Security"},
    {label:"Threat Modeling", label_ar:"Threat Modeling", cat:"paper", topic:"Threat Modeling"},
    {label:"Computer-Use & Web Agents", label_ar:"Computer-Use & Web Agents", cat:"paper", topic:"Computer-Use & Web Agents"},
    {label:"Misc Attacks & Other", label_ar:"هجمات متنوعة وأخرى", cat:"paper", topic:"Misc Attacks & Other"},
    {label:"MCP Security", label_ar:"MCP Security", cat:"paper", topic:"MCP Security"},
    {label:"Agent Memory Attacks", label_ar:"Agent Memory Attacks", cat:"paper", topic:"Agent Memory Attacks"},
    {label:"Supply Chain Attacks", label_ar:"Supply Chain Attacks", cat:"paper", topic:"Supply Chain Attacks"},
    {label:"Side-channel Attacks", label_ar:"Side-channel Attacks", cat:"paper", topic:"Side-channel Attacks"},
  ]},
  { label:"Guides", label_ar:"أدلة", cat:"guide", children:[
    {label:"Framework guides", label_ar:"أدلة الأطر"},
    {label:"Technique guides", label_ar:"أدلة التقنيات"}
  ]},
  { label:"Whitepapers", label_ar:"Whitepapers", cat:"whitepaper", children:[
    {label:"Vendor", label_ar:"من البائعين"},
    {label:"Community", label_ar:"من المجتمع"}
  ]},
  { label:"Blog Posts", label_ar:"مقالات المدونات", cat:"blog_post", children:[
    {label:"Vendor blogs", label_ar:"مدونات البائعين"},
    {label:"Researcher blogs", label_ar:"مدونات الباحثين"},
    {label:"Newsletters", label_ar:"نشرات"},
    {label:"Podcasts", label_ar:"بودكاست"}
  ]},
  { label:"Courses", label_ar:"دورات", cat:"course", children:[
    {label:"Professional training", label_ar:"تدريب احترافي"},
    {label:"Vendor training", label_ar:"تدريب البائعين"},
    {label:"MOOCs", label_ar:"MOOCs"},
    {label:"Certifications", label_ar:"شهادات"},
    {label:"Free / open", label_ar:"مجاني / مفتوح"}
  ]}
];
