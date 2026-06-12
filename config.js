/* ============================================================
   OffensiveAgentic — site configuration
   Categories shown on the home page + the hierarchy tree.
   Edit labels/blurbs here; add new categories by adding a row.
   ============================================================ */

/* Each category maps to a `type` used in data.js.
   icon = a Tabler icon name (https://tabler.io/icons). */
const CATEGORIES = [
  { type:"framework",  label:"Frameworks",      icon:"sitemap",        blurb:"Structured maps of the agentic threat landscape." },
  { type:"standard",   label:"Standards",       icon:"checklist",      blurb:"Official risk taxonomies and governance standards." },
  { type:"methodology",label:"Methodologies",   icon:"route",          blurb:"Step-by-step processes for running an engagement." },
  { type:"book",       label:"Books",           icon:"book",           blurb:"Long-form texts on AI and adversarial security." },
  { type:"tool",       label:"Tools",           icon:"tools",          blurb:"Scanners, harnesses and red-teaming frameworks." },
  { type:"benchmark",  label:"Benchmarks",      icon:"speedometer",    blurb:"Reproducible test sets for measuring robustness." },
  { type:"paper",      label:"Research Papers", icon:"file-text",      blurb:"Surveys, attacks, defenses and systematizations." },
  { type:"guide",      label:"Guides",          icon:"book-2",         blurb:"Practitioner explainers and how-tos." },
  { type:"whitepaper", label:"Whitepapers",     icon:"file-description",blurb:"Vendor and community deep-dives." },
  { type:"blog",       label:"Blogs",           icon:"news",           blurb:"Sites that publish ongoing analysis." },
  { type:"newsletter", label:"Newsletters",     icon:"mail",           blurb:"Regular digests to follow the field." }
];

/* The hierarchy tree shown on the home page.
   Just nested lists — add or edit freely. A node can optionally
   link to a category page via {label, cat} or any url via {label, url}. */
const TREE = [
  { label:"Frameworks", cat:"framework", children:[
    {label:"Threat taxonomies"},
    {label:"Red-teaming frameworks"},
    {label:"Governance frameworks"}
  ]},
  { label:"Standards", cat:"standard", children:[
    {label:"Risk taxonomies"},
    {label:"Government & body standards"}
  ]},
  { label:"Methodologies", cat:"methodology", children:[
    {label:"Engagement process"},
    {label:"Playbooks"}
  ]},
  { label:"Books", cat:"book", children:[
    {label:"AI red teaming"},
    {label:"Adversarial machine learning"}
  ]},
  { label:"Tools", cat:"tool", children:[
    {label:"Scanners"},
    {label:"Multi-turn attack"},
    {label:"CI / regression"},
    {label:"Agent harnesses"}
  ]},
  { label:"Benchmarks", cat:"benchmark", children:[
    {label:"Attack-surface benchmarks"},
    {label:"Safety & policy benchmarks"}
  ]},
  { label:"Research Papers", cat:"paper", children:[
    {label:"Surveys", cat:"paper", topic:"Surveys"},
    {label:"Benchmarks", cat:"paper", topic:"Benchmarks"},
    {label:"Prompt Injection", cat:"paper", topic:"Prompt Injection"},
    {label:"Jailbreaking", cat:"paper", topic:"Jailbreaking"},
    {label:"Backdoor & Poisoning", cat:"paper", topic:"Backdoor & Poisoning"},
    {label:"RAG Security", cat:"paper", topic:"RAG Security"},
    {label:"Multi-Agent Security", cat:"paper", topic:"Multi-Agent Security"},
    {label:"Pentesting Frameworks", cat:"paper", topic:"Pentesting Frameworks"},
    {label:"Red Teaming", cat:"paper", topic:"Red Teaming"},
    {label:"Offensive Cyber / CTF / CVE", cat:"paper", topic:"Offensive Cyber / CTF / CVE"},
    {label:"Privacy & Exfiltration", cat:"paper", topic:"Privacy & Exfiltration"},
    {label:"Protocol Security", cat:"paper", topic:"Protocol Security"},
    {label:"Embodied & Robotic Security", cat:"paper", topic:"Embodied & Robotic Security"},
    {label:"Threat Modeling", cat:"paper", topic:"Threat Modeling"},
    {label:"Computer-Use & Web Agents", cat:"paper", topic:"Computer-Use & Web Agents"},
    {label:"Misc Attacks & Other", cat:"paper", topic:"Misc Attacks & Other"},
  ]},
  { label:"Guides", cat:"guide", children:[
    {label:"Framework guides"},
    {label:"Technique guides"}
  ]},
  { label:"Whitepapers", cat:"whitepaper", children:[
    {label:"Vendor"},
    {label:"Community"}
  ]},
  { label:"Blogs", cat:"blog", children:[
    {label:"Vendor blogs"},
    {label:"Research blogs"}
  ]},
  { label:"Newsletters", cat:"newsletter", children:[
    {label:"Field digests"}
  ]}
];
