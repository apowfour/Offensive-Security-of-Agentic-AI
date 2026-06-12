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
  { label:"1 · Core Concepts", children:[
    { label:"What is an AI agent", children:[
      {label:"LLM + tools + memory + planning loop"},
      {label:"Autonomy levels"},
      {label:"Multi-agent systems"}
    ]},
    { label:"Why the attack surface differs", children:[
      {label:"Tool / function calling"},
      {label:"Memory & state"},
      {label:"Multi-step reasoning"},
      {label:"Inter-agent trust"}
    ]}
  ]},
  { label:"2 · Disciplines", children:[
    {label:"Red Teaming"},
    {label:"Penetration Testing"},
    {label:"Vulnerability Assessment"},
    {label:"Evaluation & Benchmarking", cat:"benchmark"}
  ]},
  { label:"3 · Threats & Attacks", children:[
    {label:"Prompt injection (direct / indirect)"},
    {label:"Tool misuse & hijacking"},
    {label:"Memory poisoning"},
    {label:"Privilege escalation"},
    {label:"Excessive agency"},
    {label:"Supply chain (models, plugins, MCP)"},
    {label:"Multi-agent attacks"}
  ]},
  { label:"4 · Frameworks & Standards", children:[
    {label:"Frameworks", cat:"framework"},
    {label:"Standards", cat:"standard"}
  ]},
  { label:"5 · Tooling & Measurement", children:[
    {label:"Tools", cat:"tool"},
    {label:"Benchmarks", cat:"benchmark"}
  ]},
  { label:"6 · Knowledge & Process", children:[
    {label:"Research Papers", cat:"paper"},
    {label:"Methodologies & Playbooks", cat:"methodology"},
    {label:"Guides", cat:"guide"},
    {label:"Whitepapers", cat:"whitepaper"}
  ]},
  { label:"7 · Stay Current", children:[
    {label:"Blogs", cat:"blog"},
    {label:"Newsletters", cat:"newsletter"},
    {label:"Books", cat:"book"}
  ]}
];
