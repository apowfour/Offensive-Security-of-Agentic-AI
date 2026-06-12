/* ============================================================
   OffensiveAgentic — YOUR CONTENT LIVES HERE
   ------------------------------------------------------------
   To add a reference: copy one block, paste it inside the [ ]
   below, fill in the fields, save. That's it.

   Fields:
     title : name of the resource
     type  : one of  framework | standard | methodology | book | tool
                     benchmark | paper | guide | whitepaper | blog | newsletter
             (these decide which page the entry appears on)
     org   : who made it (optional)
     year  : year (optional)
     desc  : one or two plain sentences
     url   : link
     tags  : optional list of keywords for search, e.g. ["prompt injection"]
   ============================================================ */

const RESOURCES = [

  /* ---------- FRAMEWORKS & STANDARDS ---------- */
  {
    title: "OWASP Top 10 for Agentic Applications (2026)",
    start: true,
    type: "standard",
    org: "OWASP Gen AI Security Project",
    year: 2025,
    desc: "Globally peer-reviewed list of the most critical security risks for autonomous, agentic AI. Adds agent-specific risks like behavior hijacking, tool misuse, and identity/privilege abuse. The natural starting point for any assessment.",
    url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/",
    tags: ["owasp", "top 10", "risk"]
  },
  {
    title: "OWASP Agentic Security Initiative",
    type: "framework",
    org: "OWASP",
    year: 2025,
    desc: "Research initiative exploring security implications of agentic systems built on LangGraph, AutoGPT, CrewAI, including threat models and mitigations.",
    url: "https://genai.owasp.org/initiatives/agentic-security-initiative/",
    tags: ["owasp"]
  },
  {
    title: "MITRE ATLAS",
    start: true,
    type: "framework",
    org: "MITRE",
    year: 2026,
    desc: "The 'ATT&CK for AI'. As of v5.1.0 (Nov 2025): 16 tactics, 84 techniques, 32 mitigations, 42 case studies. A 2025 collaboration with Zenity Labs added 14 techniques specific to AI agents. Use it to label and communicate attacker behaviors.",
    url: "https://atlas.mitre.org/",
    tags: ["mitre", "att&ck", "ttp"]
  },
  {
    title: "NIST AI RMF & AI Agent Standards Initiative",
    type: "standard",
    org: "NIST (CAISI)",
    year: 2026,
    desc: "NIST's Center for AI Standards and Innovation launched a three-pillar program standardizing agent security, interoperability, and identity. NIST red-teaming reported an 81% attack success rate against agents vs. 11% against baseline defenses.",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    tags: ["nist", "governance", "rmf"]
  },
  {
    title: "CSA Agentic AI Red Teaming Guide",
    start: true,
    type: "whitepaper",
    org: "Cloud Security Alliance",
    year: 2025,
    desc: "How to test agent vulnerabilities across permission escalation, hallucination, orchestration flaws, memory manipulation, and supply-chain risks, with actionable steps.",
    url: "https://cloudsecurityalliance.org/",
    tags: ["csa", "red teaming"]
  },

  /* ---------- METHODOLOGIES & PLAYBOOKS ---------- */
  {
    title: "5 steps for deploying agentic AI red teaming",
    type: "methodology",
    org: "CSO Online",
    year: 2025,
    desc: "Practical staged approach to standing up an agentic red-teaming program.",
    url: "https://www.csoonline.com/article/4055224/5-steps-for-deploying-agentic-ai-red-teaming.html",
    tags: ["playbook", "process"]
  },
  {
    title: "LLM Red Teaming Playbook — Enterprise Security Testing Guide",
    type: "methodology",
    org: "Prompt Guardrails",
    year: 2025,
    desc: "Step-by-step enterprise playbook for LLM/agent red teaming.",
    url: "https://promptguardrails.com/blog/llm-red-teaming-playbook-enterprise-security-testing-guide",
    tags: ["playbook"]
  },
  {
    title: "LLM Red Teaming Guide 2026: Tools, Attacks & Methodology",
    type: "methodology",
    org: "AppSec Santa",
    year: 2026,
    desc: "End-to-end methodology covering attack taxonomy and tooling.",
    url: "https://appsecsanta.com/ai-security-tools/llm-red-teaming",
    tags: ["methodology"]
  },
  {
    title: "AI Red-Teaming Guide (community)",
    type: "methodology",
    org: "requie/AI-Red-Teaming-Guide",
    year: 2025,
    desc: "Open community guide to adversarial testing and security evaluation of AI systems.",
    url: "https://github.com/requie/AI-Red-Teaming-Guide",
    tags: ["github", "guide"]
  },

  /* ---------- TOOLS ---------- */
  {
    title: "Garak",
    start: true,
    type: "tool",
    org: "NVIDIA",
    year: 2024,
    desc: "LLM vulnerability scanner with 37+ probe modules including promptinject, latentinjection (RAG), and atkgen. Best for baseline 'is this model safe to deploy' scans and nightly regression.",
    url: "https://github.com/NVIDIA/garak",
    tags: ["scanner", "prompt injection"]
  },
  {
    title: "PyRIT",
    start: true,
    type: "tool",
    org: "Microsoft",
    year: 2024,
    desc: "Adaptive multi-turn and multi-modal red-teaming framework. Includes the Crescendo gradual-escalation strategy and encoding transforms. Best for scheduled, comprehensive campaigns.",
    url: "https://github.com/Azure/PyRIT",
    tags: ["multi-turn", "crescendo"]
  },
  {
    title: "Promptfoo",
    type: "tool",
    org: "Promptfoo",
    year: 2024,
    desc: "Eval and regression harness covering 50+ vulnerability types with CI/CD integration. Catches when a prompt change re-enables a previously fixed jailbreak. Best for developer-facing CI gates.",
    url: "https://github.com/promptfoo/promptfoo",
    tags: ["ci", "regression", "eval"]
  },
  {
    title: "AgentDojo",
    type: "tool",
    org: "ETH Zurich",
    year: 2024,
    desc: "Dynamic environment for tool-using agents with 97 injection tasks across 629 test cases. Doubles as both an attack/defense harness and a benchmark.",
    url: "https://github.com/ethz-spylab/agentdojo",
    tags: ["harness", "prompt injection", "benchmark"]
  },
  {
    title: "DeepTeam",
    type: "tool",
    org: "Confident AI",
    year: 2025,
    desc: "LLM red-teaming framework with built-in mappings to the OWASP Top 10 for Agentic Applications.",
    url: "https://www.trydeepteam.com/docs/frameworks-owasp-top-10-for-agentic-applications",
    tags: ["framework", "owasp"]
  },

  /* ---------- BENCHMARKS & EVALUATION ---------- */
  {
    title: "Agent Security Bench (ASB)",
    type: "benchmark",
    org: "Academic",
    year: 2024,
    desc: "Formalizes common agent attack surfaces such as prompt injection and improper tool use, enabling reproducible evaluation and systematic ablations.",
    url: "https://www.google.com/search?q=Agent+Security+Bench+ASB+paper",
    tags: ["evaluation"]
  },
  {
    title: "OpenAgentSafety",
    type: "benchmark",
    org: "Academic",
    year: 2025,
    desc: "Evaluates agents across diverse tasks with metrics tied to instruction-following, policy compliance, and robustness to malicious inputs.",
    url: "https://www.google.com/search?q=OpenAgentSafety+benchmark",
    tags: ["safety", "evaluation"]
  },

  /* ---------- RESEARCH PAPERS ---------- */
  {
    title: "A Survey on Agentic Security: Applications, Threats and Defenses",
    start: true,
    type: "paper",
    org: "arXiv:2510.06445",
    year: 2025,
    desc: "Broad survey mapping the agentic security field. A good orientation read.",
    url: "https://arxiv.org/pdf/2510.06445",
    tags: ["survey"]
  },
  {
    title: "A Survey of Agentic AI and Cybersecurity",
    type: "paper",
    org: "arXiv:2601.05293",
    year: 2026,
    desc: "Challenges, opportunities, and use-case prototypes at the intersection of agentic AI and cybersecurity.",
    url: "https://arxiv.org/html/2601.05293v1",
    tags: ["survey"]
  },
  {
    title: "SoK: The Attack Surface of Agentic AI — Tools, and Autonomy",
    type: "paper",
    org: "arXiv:2603.22928",
    year: 2026,
    desc: "Systematization of knowledge on how tools and autonomy expand the agent attack surface.",
    url: "https://arxiv.org/pdf/2603.22928",
    tags: ["sok", "attack surface"]
  },
  {
    title: "From Secure Agentic AI to Secure Agentic Web",
    type: "paper",
    org: "arXiv:2603.01564",
    year: 2026,
    desc: "Challenges, threats, and future directions as agents interconnect across the web.",
    url: "https://arxiv.org/pdf/2603.01564",
    tags: ["agentic web"]
  },
  {
    title: "Redefining AI Red Teaming in the Agentic Era: From Weeks to Hours",
    type: "paper",
    org: "arXiv:2605.04019",
    year: 2026,
    desc: "Argues for and demonstrates faster, automated agentic red-teaming workflows.",
    url: "https://arxiv.org/html/2605.04019v1",
    tags: ["red teaming", "automation"]
  },
  {
    title: "Security Challenges in AI Agent Deployment",
    type: "paper",
    org: "arXiv:2507.20526",
    year: 2025,
    desc: "Survey of the practical security challenges that arise when deploying AI agents.",
    url: "https://arxiv.org/pdf/2507.20526",
    tags: ["deployment"]
  },
  {
    title: "NAAMSE: Evolutionary Security Evaluation of Agents",
    type: "paper",
    org: "arXiv:2602.07391",
    year: 2026,
    desc: "Pre-deployment evaluation framework that reframes red-teaming as an optimization problem.",
    url: "https://arxiv.org/pdf/2602.07391",
    tags: ["evaluation", "optimization"]
  },
  {
    title: "AAGATE: A NIST AI RMF-Aligned Governance Platform for Agentic AI",
    type: "paper",
    org: "arXiv:2510.25863",
    year: 2025,
    desc: "Governance platform aligning agentic AI operations with the NIST AI RMF.",
    url: "https://arxiv.org/pdf/2510.25863",
    tags: ["governance", "nist"]
  },
  {
    title: "Agentic Web: Weaving the Next Web with AI Agents",
    type: "paper",
    org: "arXiv:2507.21206",
    year: 2025,
    desc: "Background on the emerging agentic web — useful context for inter-agent threats.",
    url: "https://arxiv.org/pdf/2507.21206",
    tags: ["agentic web", "background"]
  },

  /* ---------- GUIDES & WHITEPAPERS ---------- */
  {
    title: "AI Red Teaming: Tools, frameworks, and attack strategies explained",
    type: "guide",
    org: "Vectra",
    year: 2025,
    desc: "Long-form explainer of the AI red-teaming landscape.",
    url: "https://www.vectra.ai/topics/ai-red-teaming",
    tags: ["overview"]
  },
  {
    title: "Comparing AI Security Frameworks: OWASP, CSA, NIST, MITRE",
    type: "guide",
    org: "Straiker",
    year: 2025,
    desc: "Side-by-side comparison of the major AI security frameworks and how they fit together.",
    url: "https://www.straiker.ai/blog/comparing-ai-security-frameworks-owasp-csa-nist-and-mitre",
    tags: ["frameworks", "comparison"]
  },
  {
    title: "MITRE ATLAS Framework 2026 — Guide to Securing AI Systems",
    type: "guide",
    org: "Practical DevSecOps",
    year: 2026,
    desc: "Practitioner's guide to applying MITRE ATLAS.",
    url: "https://www.practical-devsecops.com/mitre-atlas-framework-guide-securing-ai-systems/",
    tags: ["mitre"]
  },
  {
    title: "MITRE ATLAS: AI Attack Techniques mapped to red-team operations",
    type: "guide",
    org: "Repello AI",
    year: 2025,
    desc: "Maps ATLAS AML.T techniques to concrete red-team operations.",
    url: "https://repello.ai/blog/mitre-atlas-framework",
    tags: ["mitre"]
  },
  {
    title: "Prompt Injection Vulnerability Detection: Tools & Techniques",
    type: "guide",
    org: "Augment Code",
    year: 2025,
    desc: "Survey of detection tools and techniques for prompt injection.",
    url: "https://www.augmentcode.com/guides/prompt-injection-detection",
    tags: ["prompt injection", "detection"]
  },
  {
    title: "OWASP Gen AI Security Project — Resources hub",
    type: "guide",
    org: "OWASP",
    year: 2025,
    desc: "The canonical hub of OWASP GenAI security resources.",
    url: "https://genai.owasp.org/resources/",
    tags: ["owasp", "hub"]
  },

  /* ---------- BLOGS & NEWSLETTERS ---------- */
  {
    title: "OWASP Gen AI Security Project",
    type: "blog",
    org: "OWASP",
    year: 2025,
    desc: "Initiative updates and resource drops — follow for new agentic security material.",
    url: "https://genai.owasp.org/",
    tags: ["owasp"]
  },
  {
    title: "Repello AI Blog",
    type: "blog",
    org: "Repello AI",
    year: 2025,
    desc: "ATLAS mappings and red-team technique write-ups.",
    url: "https://repello.ai/blog/mitre-atlas-framework",
    tags: ["red teaming"]
  },
  {
    title: "Vectra AI — AI security topics",
    type: "blog",
    org: "Vectra",
    year: 2025,
    desc: "Ongoing AI red-teaming and detection coverage.",
    url: "https://www.vectra.ai/topics/ai-red-teaming",
    tags: ["detection"]
  },
  {
    title: "CSA Labs research notes",
    type: "blog",
    org: "Cloud Security Alliance",
    year: 2026,
    desc: "Research notes on NIST agent standards and red-teaming.",
    url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/",
    tags: ["csa", "nist"]
  }

  /* ---------- ADD NEW ENTRIES ABOVE THIS LINE ----------
     Copy this template, paste above, fill in:

  ,{
    title: "",
    type: "tool",
    org: "",
    year: 2026,
    desc: "",
    url: "",
    tags: []
  }
  ------------------------------------------------------ */
];
