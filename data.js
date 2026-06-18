/* ============================================================
   OffensiveAgentic — YOUR CONTENT LIVES HERE
   ------------------------------------------------------------
   734 entries across 11 categories.
   Last updated: 2026-06-18 by data collection pipeline.

   To add a reference: copy one block, paste it inside the [ ]
   below, fill in the fields, save. That's it.

   Fields:
     title : name of the resource
     type  : one of  framework | standard | methodology | book | tool
                     benchmark | paper | guide | whitepaper | blog | newsletter
             (these decide which page the entry appears on)
     topic : paper-only sub-grouping (e.g. "Prompt Injection")
     org   : who made it (optional)
     authors: list of authors (optional)
     year  : year (optional)
     desc  : one or two plain sentences
     url   : link
     tags  : optional list of keywords for search, e.g. ["prompt injection"]
     license: optional SPDX identifier or "commercial"
   ============================================================ */

const RESOURCES = [

  /* ---------- FRAMEWORKS & STANDARDS ---------- */
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
    title: "AWS Agentic AI Security Scoping Matrix",
    type: "framework",
    org: "Amazon Web Services",
    year: 2025,
    authors: ["AWS Security"],
    desc: "Mental model and framework from AWS that categorizes four distinct agentic AI architectures based on connectivity and autonomy, providing scoping guidance for securing autonomous AI systems by tier of risk.",
    url: "https://aws.amazon.com/blogs/security/the-agentic-ai-security-scoping-matrix-a-framework-for-securing-autonomous-ai-systems",
    tags: ["aws", "agentic ai", "scoping", "framework"]
  },
  {
    title: "Anthropic Responsible Scaling Policy (RSP)",
    type: "framework",
    org: "Anthropic",
    year: 2025,
    authors: ["Anthropic"],
    desc: "Voluntary framework specifying progressively higher safety, security, and operational standards (ASL levels) tied to a model's potential for catastrophic risk, including the ASL-3 measures activated for Claude 4 Opus.",
    url: "https://www.anthropic.com/responsible-scaling-policy",
    tags: ["anthropic", "rsp", "capability scaling", "as-levels"]
  },
  {
    title: "CISA AI Cybersecurity Collaboration Playbook",
    type: "framework",
    org: "Cybersecurity and Infrastructure Security Agency",
    year: 2025,
    authors: ["CISA", "JCDC"],
    desc: "CISA/JCDC playbook guiding AI providers, developers, and adopters on voluntarily sharing AI-related cybersecurity information with CISA and partners, including incident categories, communication paths, and information-sharing templates.",
    url: "https://www.cisa.gov/resources-tools/resources/ai-cybersecurity-collaboration-playbook",
    tags: ["cisa", "jcdc", "playbook", "information sharing"]
  },
  {
    title: "CSA AI Controls Matrix (AICM)",
    type: "framework",
    org: "Cloud Security Alliance",
    year: 2025,
    authors: ["Cloud Security Alliance"],
    desc: "Vendor-agnostic control framework with 243 control objectives across 18 security domains for securing AI systems in the cloud, mapped to ISO 42001, ISO 27001, NIST AI RMF, and other major standards.",
    url: "https://cloudsecurityalliance.org/artifacts/ai-controls-matrix",
    tags: ["csa", "controls matrix", "compliance", "framework"]
  },
  {
    title: "Coalition for Secure AI (CoSAI)",
    type: "framework",
    org: "Coalition for Secure AI / OASIS Open",
    year: 2025,
    authors: ["CoSAI"],
    desc: "OASIS-hosted coalition of industry members developing open standards and workflows for secure AI development, deployment, and operation, including the CoSAI-RM risk management framework donated by Google from SAIF.",
    url: "https://oasis-open.org/cosai/",
    tags: ["cosai", "oasis", "open standards", "risk management"]
  },
  {
    title: "HITRUST AI Security Assessment",
    type: "framework",
    org: "HITRUST Alliance",
    year: 2025,
    authors: ["HITRUST Alliance"],
    desc: "HITRUST assessment and certification program providing validated security assurance for deployed AI systems through prescriptive controls covering generative, predictive, and rule-based AI, mapped to ISO 42001 and the HITRUST e1/i1/r2 assessments.",
    url: "https://hitrustalliance.net/assessments-and-certifications/aisecurityassessment",
    tags: ["hitrust", "certification", "controls", "assurance"]
  },
  {
    title: "Microsoft Cloud Security Benchmark v2 — Artificial Intelligence Security",
    type: "framework",
    org: "Microsoft",
    year: 2025,
    authors: ["Microsoft Security"],
    desc: "Microsoft's security benchmark control set for AI workloads, establishing a comprehensive content filtering, validation, and governance framework for safeguarding AI models against malicious interactions and abuse.",
    url: "https://learn.microsoft.com/en-us/security/benchmark/azure/mcsb-v2-artificial-intelligence-security",
    tags: ["microsoft", "security benchmark", "controls", "azure"]
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
    title: "OWASP Top 10 for LLM Applications (LLM01-LLM10)",
    type: "standard",
    org: "OWASP",
    year: 2025,
    desc: "OWASP's flagship risk taxonomy listing the ten most critical vulnerabilities in Large Language Model applications, including prompt injection, insecure output handling, training-data poisoning, and model DoS. Maintained by the Open Web Application Security Project GenAI Security Project; the 2025 edition adds agentic and multi-modal threat coverage.",
    url: "https://genai.owasp.org/llm-top-10/",
    tags: ["owasp", "llm", "risk taxonomy", "vulnerabilities", "governance"]
  },
  {
    title: "OWASP Top 10 for Large Language Model Applications",
    type: "framework",
    org: "OWASP",
    year: 2025,
    authors: ["OWASP Gen AI Security Project"],
    desc: "Community-curated list of the top 10 security risks for LLM applications (LLM01 Prompt Injection through LLM10 Model Theft), with concrete mitigation guidance for developers building on language models.",
    url: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
    tags: ["owasp", "top 10", "llm", "risk list"]
  },
  {
    title: "SANS Critical AI Security Guidelines",
    type: "framework",
    org: "SANS Institute",
    year: 2025,
    authors: ["SANS Institute"],
    desc: "SANS framework providing expert insights into securing AI deployments, balancing security and scalability, and aligning controls with evolving AI-specific threats across enterprise environments.",
    url: "https://www.sans.org/mlp/critical-ai-security-guidelines",
    tags: ["sans", "guidelines", "controls", "enterprise"]
  },
  {
    title: "UK AI Security Institute (AISI)",
    type: "framework",
    org: "UK Government — Department for Science, Innovation and Technology",
    year: 2025,
    authors: ["UK AI Security Institute"],
    desc: "Government research institute that conducts rigorous evaluations of advanced AI models to understand capabilities and risks, developing and testing risk mitigations for frontier AI systems on behalf of the UK and partner governments.",
    url: "https://www.aisi.gov.uk",
    tags: ["uk government", "aisi", "evaluation", "frontier ai"]
  },
  {
    title: "UK Code of Practice for the Cyber Security of AI",
    type: "framework",
    org: "UK Government — Department for Science, Innovation and Technology",
    year: 2025,
    authors: ["UK Government"],
    desc: "Voluntary code of practice focused on the cyber security of AI systems including deep neural networks and generative models, providing baseline controls for developers and deployers of AI in the UK.",
    url: "https://www.gov.uk/government/publications/ai-cyber-security-code-of-practice/code-of-practice-for-the-cyber-security-of-ai",
    tags: ["uk government", "code of practice", "cybersecurity", "voluntary"]
  },
  {
    title: "AVID AI Vulnerability Database",
    type: "framework",
    org: "AI Vulnerability Database (AVID)",
    year: 2024,
    authors: ["AVID"],
    desc: "Open-source vulnerability database and taxonomy for AI/ML systems, indexing documented model weaknesses, biases, failures, and security issues with structured evaluation metadata aligned to NIST AI RMF and MITRE ATLAS.",
    url: "https://avidml.org/database/",
    tags: ["avid", "vulnerability database", "taxonomy", "open source"]
  },
  {
    title: "CISA AI Security Resources & Joint Cybersecurity Advisories",
    type: "standard",
    org: "Cybersecurity & Infrastructure Security Agency (CISA)",
    year: 2024,
    desc: "CISA's AI security hub publishing Joint Cybersecurity Advisories (with NSA, FBI, and international partners) on secure AI deployment, model supply-chain risk, and prompt-injection defense. Includes the 'Secure Deployment of AI Systems' guidance and AI Cybersecurity Collaboration Playbook.",
    url: "https://www.cisa.gov/ai",
    tags: ["cisa", "advisory", "secure deployment", "joint guidance", "government"]
  },
  {
    title: "CSA AI Safety Initiative",
    type: "framework",
    org: "Cloud Security Alliance",
    year: 2024,
    authors: ["Cloud Security Alliance"],
    desc: "CSA coalition of experts producing vendor-neutral AI security guidance and tools, including the AI Controls Matrix, STAR for AI, and forward-looking best practices for secure AI deployments in the cloud.",
    url: "https://cloudsecurityalliance.org/ai-safety-initiative",
    tags: ["csa", "ai safety", "best practices", "cloud security"]
  },
  {
    title: "Council of Europe Framework Convention on Artificial Intelligence",
    type: "standard",
    org: "Council of Europe",
    year: 2024,
    desc: "First international treaty (CETS 225, opened for signature Sept 2024) on AI and human rights, democracy, and rule of law. Binding signatory obligations to ensure AI systems respect equality, privacy, and due process; includes risk-assessment and remedy provisions and a follow-up conference of parties.",
    url: "https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence",
    tags: ["council of europe", "treaty", "human rights", "international", "binding"]
  },
  {
    title: "EU AI Act Code of Practice for General-Purpose AI",
    type: "standard",
    org: "European Commission / AI Office",
    year: 2024,
    desc: "Voluntary Code of Practice for general-purpose AI model providers, drafted by the European AI Office with industry and civil-society stakeholders under Article 56 of the EU AI Act. Outlines commitments for copyright compliance, training-data transparency, systemic-risk assessment, and incident reporting ahead of GPAI obligations binding in 2025-2027.",
    url: "https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice",
    tags: ["eu", "code of practice", "gpai", "transparency", "compliance"]
  },
  {
    title: "EU Artificial Intelligence Act (AI Act)",
    type: "framework",
    org: "European Union",
    year: 2024,
    authors: ["European Parliament and Council"],
    desc: "First comprehensive EU regulation on AI, establishing a risk-based framework that classifies AI systems into unacceptable-risk, high-risk, limited-risk, and minimal-risk categories with corresponding obligations for providers and deployers.",
    url: "https://artificialintelligenceact.eu",
    tags: ["eu ai act", "regulation", "risk-based", "european union"]
  },
  {
    title: "NIST AI 100-4 — Reducing Risks Posed by Synthetic Content",
    type: "standard",
    org: "NIST",
    year: 2024,
    desc: "Technical report responding to Executive Order 14110 §4.5 on reducing synthetic-content risks; catalogs detection, provenance, and label-integrity techniques (C2PA, watermarking, fingerprinting) and outlines open measurement gaps for AI-generated media authenticity.",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-4.pdf",
    tags: ["nist", "synthetic content", "provenance", "watermarking", "deepfake"]
  },
  {
    title: "NIST AI 600-1 — Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile",
    type: "standard",
    org: "NIST",
    year: 2024,
    desc: "NIST's Generative AI Profile supplement to the AI RMF, enumerating 12 risk categories (e.g., CBRN information, confabulation, data privacy, harmful bias, human-AI configuration) and 200+ suggested governance, mapping, measurement, and management actions. Co-developed with a 2,500-member public working group.",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
    tags: ["nist", "ai rmf", "generative ai", "risk profile", "governance"]
  },
  {
    title: "NIST AI 800-1 — Managing Misuse Risk for Dual-Use Foundation Models",
    type: "standard",
    org: "NIST",
    year: 2024,
    desc: "Initial Public Draft of NIST guidance on identifying, measuring, and mitigating catastrophic misuse risks of dual-use foundation models (CBRN synthesis, offensive cyber operations, model autonomy). Complements Executive Order 14110 reporting obligations and the US AISI evaluation program.",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.800-1.ipd.pdf",
    tags: ["nist", "dual-use", "misuse", "frontier models", "governance"]
  },
  {
    title: "NSA Artificial Intelligence Security Center (AISC)",
    type: "framework",
    org: "National Security Agency",
    year: 2024,
    authors: ["NSA"],
    desc: "NSA's AI Security Center hub for detecting and countering AI vulnerabilities impacting the US and allies, advancing industry partnerships, and developing, evaluating, and promoting guidance on AI security topics as the field evolves.",
    url: "https://www.nsa.gov/aisc/",
    tags: ["nsa", "aisc", "government", "guidance"]
  },
  {
    title: "OECD AI Principles",
    type: "framework",
    org: "Organisation for Economic Co-operation and Development (OECD)",
    year: 2024,
    authors: ["OECD"],
    desc: "First intergovernmental standard on AI, adopted in 2019 and updated in 2024, promoting innovative, trustworthy AI that respects human rights and democratic values across five values-based principles and five policy recommendations.",
    url: "https://oecd.ai/en/ai-principles",
    tags: ["oecd", "principles", "policy", "trustworthy ai"]
  },
  {
    title: "OWASP Machine Learning Security Top 10",
    type: "framework",
    org: "OWASP",
    year: 2024,
    authors: ["OWASP ML Security Project"],
    desc: "OWASP project delivering an overview of the top 10 security issues in machine learning systems, including input manipulation, data poisoning, model inversion, and membership inference attacks.",
    url: "https://owasp.org/www-project-machine-learning-security-top-10/",
    tags: ["owasp", "top 10", "machine learning", "risk list"]
  },
  {
    title: "Singapore Model AI Governance Framework (Second Edition)",
    type: "standard",
    org: "IMDA / PDPC Singapore",
    year: 2024,
    desc: "Voluntary governance framework providing implementable guidance on accountability, data-driven decision transparency, human oversight, and stakeholder communications for AI deployers. The 2024 second edition adds a Generative AI extension covering testing, content provenance, and incident reporting.",
    url: "https://www.pdpc.gov.sg/help-and-resources/2020/01/model-ai-governance-framework",
    tags: ["singapore", "governance framework", "voluntary", "generative ai"]
  },
  {
    title: "The AI Attack Surface Map v1.0",
    type: "framework",
    org: "Daniel Miessler",
    year: 2024,
    authors: ["Daniel Miessler"],
    desc: "Maintained framework from Daniel Miessler giving the general public and offensive security practitioners a structured way to think about the various attack surfaces within AI systems, including models, data, agents, integrations, and users.",
    url: "https://danielmiessler.com/blog/the-ai-attack-surface-map-v1-0",
    tags: ["attack surface", "offensive", "taxonomy", "community"]
  },
  {
    title: "US AI Safety Institute (US AISI) at NIST",
    type: "standard",
    org: "NIST",
    year: 2024,
    desc: "NIST institute established under EO 14110 (Feb 2024) to develop safety standards, evaluation methodologies, and red-team guidance for frontier AI models; operates the AI Safety Consortium (AISIC) of 200+ member organizations. Successor to NIST's AISIC program launched in 2023.",
    url: "https://www.nist.gov/aisi",
    tags: ["nist", "us aisI", "frontier models", "evaluations", "consortium"]
  },
  {
    title: "AI Verify — AI Governance Testing Framework & Software Toolkit",
    type: "standard",
    org: "Infocomm Media Development Authority (IMDA), Singapore",
    year: 2023,
    desc: "AI governance testing framework and software toolkit developed by Singapore's IMDA and PDPC for evaluating AI systems against internationally accepted governance principles (transparency, repeatability, robustness, fairness). Provides a Model AI Governance Framework testing kit with technical tests and process checks; open-source via the AI Verify Foundation.",
    url: "https://aiverifyfoundation.sg/resources/ai-verify/",
    tags: ["ai governance", "testing framework", "fairness", "transparency", "imda"]
  },
  {
    title: "Bletchley Declaration on AI Safety",
    type: "standard",
    org: "UK Government (AI Safety Summit)",
    year: 2023,
    desc: "Declaration signed by 28 nations (Nov 2023) establishing a shared agenda for frontier-AI safety: identifying risks of concern, building scientific understanding, and developing domestic and international safety policies. Foundational document for the global AI Safety Summit series.",
    url: "https://www.gov.uk/government/publications/ai-safety-summit-2023-the-bletchley-declaration",
    tags: ["bletchley", "international", "frontier ai", "policy", "summit"]
  },
  {
    title: "China CAC Interim Measures for the Management of Generative AI Services",
    type: "standard",
    org: "Cyberspace Administration of China (CAC)",
    year: 2023,
    desc: "Regulatory measures (effective Aug 2023) governing generative AI services in China: security assessment, training-data legality, content moderation, labeling of synthetic content, and algorithm filing. Cited as the Chinese counterpart to the EU AI Act in cross-jurisdictional AI policy comparisons.",
    url: "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm",
    tags: ["china", "cac", "generative ai", "regulation", "content moderation"]
  },
  {
    title: "G7 Hiroshima AI Process — International Guiding Principles & Code of Conduct",
    type: "standard",
    org: "G7",
    year: 2023,
    desc: "G7-led initiative producing 11 International Guiding Principles and a voluntary Code of Conduct for organizations developing advanced AI systems (Oct 2023). Covers safety testing, content provenance, transparency, public reporting, and information sharing — the first multilateral alignment text on frontier-AI safety.",
    url: "https://www.soumu.go.jp/hiroshimaaiprocess/en/",
    tags: ["g7", "hiroshima", "code of conduct", "frontier ai", "international"]
  },
  {
    title: "Google Secure AI Framework (SAIF)",
    type: "framework",
    org: "Google",
    year: 2023,
    authors: ["Google"],
    desc: "Google's framework for a standardized, holistic approach to integrating security and privacy measures into ML-powered applications, addressing risks such as model theft, data poisoning, and malicious inputs across the AI lifecycle.",
    url: "https://saif.google",
    tags: ["google", "saif", "secure ai", "framework"]
  },
  {
    title: "ISO/IEC 23894:2023 — Artificial Intelligence — Guidance on Risk Management",
    type: "standard",
    org: "ISO/IEC",
    year: 2023,
    desc: "ISO/IEC guidance adapting the ISO 31000 risk-management process to AI systems, covering risk identification, analysis, evaluation, treatment, monitoring, and recording for the AI lifecycle. Designed for use in tandem with ISO/IEC 42001 AIMS certification.",
    url: "https://www.iso.org/standard/77304.html",
    tags: ["iso", "risk management", "ai lifecycle", "governance"]
  },
  {
    title: "ISO/IEC 42001:2023 — Artificial Intelligence Management System",
    type: "standard",
    org: "ISO/IEC",
    year: 2023,
    desc: "First international certifiable standard specifying requirements for an AI Management System (AIMS), covering AI policy, risk treatment, accountability, transparency, and continual improvement across the AI lifecycle. Often described as the ISO 9001 equivalent for AI governance; certification is delivered by accredited bodies.",
    url: "https://www.iso.org/standard/81230.html",
    tags: ["iso", "ai management", "certification", "governance", "risk"]
  },
  {
    title: "NCSC Guidelines for Secure AI System Development",
    type: "standard",
    org: "UK National Cyber Security Centre (NCSC) + CISA et al.",
    year: 2023,
    desc: "Joint-developed guidelines (with CISA, NSA, and 20+ international partners) for secure AI system development covering design, development, deployment, and operation/maintenance phases. Endorsed by Eighteen international cybersecurity agencies as a baseline secure-by-design reference for AI vendors.",
    url: "https://www.ncsc.gov.uk/collection/guidelines-secure-ai-system-development",
    tags: ["ncsc", "secure development", "secure by design", "joint guidance"]
  },
  {
    title: "NIST SP 1270 — Towards a Standard for Identifying and Managing Bias in Artificial Intelligence",
    type: "standard",
    org: "NIST",
    year: 2022,
    desc: "Special Publication proposing a three-part taxonomy (systemic, statistical, human-cognitive bias) and cross-cutting bias-mitigation controls for the AI lifecycle. Foundational reference cited in subsequent federal AI guidance and procurement rules.",
    url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf",
    tags: ["nist", "bias", "fairness", "special publication", "governance"]
  },
  {
    title: "NIST SP 800-218 — Secure Software Development Framework (SSDF)",
    type: "standard",
    org: "NIST",
    year: 2022,
    desc: "Secure Software Development Framework specifying practices across four groups (Prepare, Protect, Produce, Respond) for reducing vulnerability introduction in software, including AI-supply-chain and ML pipeline contexts. Referenced by federal procurement attestations under OMB M-22-18 and EO 14028.",
    url: "https://csrc.nist.gov/pubs/sp/800/218/final",
    tags: ["nist", "ssdf", "secure development", "supply chain", "compliance"]
  },
  {
    title: "IEEE 7000-2021 — Model Process for Addressing Ethical Concerns During System Design",
    type: "framework",
    org: "IEEE",
    year: 2021,
    authors: ["IEEE Standards Association"],
    desc: "IEEE standard providing a set of processes by which organizations can identify and analyze ethical concerns during the concept exploration and design stages of autonomous and intelligent systems, including AI agents.",
    url: "https://standards.ieee.org/standard/7000-2021.html",
    tags: ["ieee", "ethics", "design process", "autonomous systems"]
  },
  {
    title: "UNESCO Recommendation on the Ethics of Artificial Intelligence",
    type: "standard",
    org: "UNESCO",
    year: 2021,
    desc: "First global standard on AI ethics adopted by 193 member states (Nov 2021); outlines 10 principles including human oversight, fairness, sustainability, and accountability, with implementation guidance for legislation, capacity building, and international cooperation. Updated with generative AI implementation guidance in 2023.",
    url: "https://www.unesco.org/en/articles/recommendation-ethics-artificial-intelligence",
    tags: ["unesco", "ai ethics", "principles", "international", "policy"]
  },

  /* ---------- METHODOLOGIES & PLAYBOOKS ---------- */
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
    title: "5 steps for deploying agentic AI red teaming",
    type: "methodology",
    org: "CSO Online",
    year: 2025,
    desc: "Practical staged approach to standing up an agentic red-teaming program.",
    url: "https://www.csoonline.com/article/4055224/5-steps-for-deploying-agentic-ai-red-teaming.html",
    tags: ["playbook", "process"]
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
  {
    title: "HiddenLayer AI Security Resources Hub",
    type: "methodology",
    org: "HiddenLayer",
    year: 2025,
    desc: "HiddenLayer's published methodology resources, threat landscape reports, and adversary emulation guides for ML model security. Documents their model fingerprinting, evasion testing, and extraction attack workflow used in customer engagements.",
    url: "https://hiddenlayer.com/resources",
    tags: ["hiddenlayer", "model security", "methodology", "threat intelligence", "adversary emulation"]
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
    title: "Lakera AI Red Teaming Methodology",
    type: "methodology",
    org: "Lakera",
    year: 2025,
    desc: "Lakera's commercial red-teaming methodology combining automated vulnerability discovery with adversarial probe libraries, used to evaluate LLM applications at scale against prompt injection, jailbreaks, and content policy violations.",
    url: "https://lakera.ai/ai-red-teaming",
    tags: ["lakera", "red teaming", "llm", "methodology", "automation"]
  },
  {
    title: "NIST AI 100-2e2025 — Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations",
    type: "methodology",
    org: "National Institute of Standards and Technology (NIST)",
    year: 2025,
    authors: ["Apostol Vassilev", "Alina Oprea", "Harold Booth", "Jon-Michael Brook"],
    desc: "NIST's foundational taxonomy classifying adversarial ML attacks (predictive, generative, lifecycle) and corresponding mitigations. Provides the standardized vocabulary used by U.S. federal agencies and red teams to scope AI security assessments.",
    url: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf",
    tags: ["nist", "adversarial ml", "taxonomy", "methodology", "ai 100-2"]
  },
  {
    title: "OWASP AI Security and Privacy Guide",
    type: "methodology",
    org: "OWASP",
    year: 2025,
    desc: "OWASP's methodology and checklist for securing AI/ML systems across the development lifecycle, covering data, model, and infrastructure security with privacy-preserving techniques. Provides a practitioner-oriented complement to the OWASP LLM Top 10.",
    url: "https://owasp.org/www-project-ai-security-and-privacy-guide/",
    tags: ["owasp", "ai security", "privacy", "methodology", "checklist"]
  },
  {
    title: "OWASP Top 10 for LLM Applications (2025 Edition)",
    type: "methodology",
    org: "OWASP GenAI Security Project",
    year: 2025,
    desc: "OWASP's industry-standard enumeration of the ten most critical LLM application risks (e.g., prompt injection, insecure output handling, excessive agency) with testing methodology, example scenarios, and mitigation strategies per risk.",
    url: "https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025",
    tags: ["owasp", "llm top 10", "methodology", "risk enumeration", "testing"]
  },
  {
    title: "Snyk AI Security Methodology Series",
    type: "methodology",
    org: "Snyk",
    year: 2025,
    desc: "Snyk's methodology series for securing AI/LLM applications and AI-generated code, covering secure SDLC integration, SAST/DAST for AI pipelines, and detection of vulnerable LLM-generated dependencies.",
    url: "https://snyk.io/series/ai-security/",
    tags: ["snyk", "secure sdlc", "code security", "methodology", "llm"]
  },
  {
    title: "Anthropic Stress Testing Documentation",
    type: "methodology",
    org: "Anthropic",
    year: 2024,
    desc: "Anthropic's published stress-testing methodology for Claude models, documenting how to design adversarial test cases, run evaluation suites at scale, and harden model behavior against jailbreaks and misuse prior to deployment.",
    url: "https://docs.anthropic.com/en/docs/test-and-evaluate/stress-tests",
    tags: ["anthropic", "claude", "stress testing", "evaluation", "methodology"]
  },
  {
    title: "Cohere Security & Red Teaming Methodology",
    type: "methodology",
    org: "Cohere",
    year: 2024,
    desc: "Cohere's enterprise security methodology describing their red-teaming practices, SOC 2/HIPAA/PCI compliance posture, and responsible AI evaluation process for Command-class LLM APIs.",
    url: "https://cohere.com/security",
    tags: ["cohere", "llm api", "red teaming", "compliance", "methodology"]
  },
  {
    title: "Google AI Safety Hub Methodology",
    type: "methodology",
    org: "Google",
    year: 2024,
    desc: "Google's published AI safety methodology hub covering responsible AI principles, red-teaming practices, model card disclosures, and safety evaluations applied across Gemini, Search Generative Experience, and other Google AI products.",
    url: "https://safety.google/",
    tags: ["google", "ai safety", "principles", "methodology", "responsible ai"]
  },
  {
    title: "Google Secure AI Framework (SAIF) Implementation Methodology",
    type: "methodology",
    org: "Google Cloud",
    year: 2024,
    desc: "Google's SAIF implementation methodology applying six core elements (robust foundation, extension to AI, automation, chaos testing, governance, threat intelligence) to secure AI systems and agentic workloads end-to-end.",
    url: "https://cloud.google.com/security/saif",
    tags: ["google", "saif", "framework", "methodology", "cloud security"]
  },
  {
    title: "IBM AI Red Teaming Methodology",
    type: "methodology",
    org: "IBM",
    year: 2024,
    desc: "IBM's published approach to red-teaming enterprise AI deployments, covering model risk scoping, adversarial testing of LLM endpoints, and integration of AI red-teaming into existing cyber red team engagements.",
    url: "https://www.ibm.com/blog/ai-red-teaming",
    tags: ["ibm", "red teaming", "enterprise", "methodology", "ai security"]
  },
  {
    title: "Microsoft PyRIT (Python Risk Identification Toolkit) Methodology",
    type: "methodology",
    org: "Microsoft AI Red Team (AIRT)",
    year: 2024,
    desc: "Open-source Python framework implementing Microsoft AIRT's eight-step AI red-teaming lifecycle covering intelligence gathering, harm taxonomy mapping, probe generation, automated execution, scoring, and reporting. Used internally to red-team Copilot, Azure OpenAI, and other Microsoft AI products.",
    url: "https://microsoft.github.io/PyRIT/",
    tags: ["microsoft", "pyrit", "red teaming", "methodology", "automation"]
  },
  {
    title: "NIST AI RMF Playbook",
    type: "methodology",
    org: "National Institute of Standards and Technology (NIST)",
    year: 2024,
    desc: "Implementation playbook for the NIST AI Risk Management Framework structured around four functions: Govern, Map, Measure, and Manage. Provides actionable steps, examples, and cross-references for organizations operationalizing AI risk management.",
    url: "https://www.nist.gov/itl/ai-risk-management-framework/ai-rmf-playbook",
    tags: ["nist", "ai rmf", "risk management", "methodology", "governance"]
  },
  {
    title: "NIST AI Red-Teaming Catalog (AIRC)",
    type: "methodology",
    org: "National Institute of Standards and Technology (NIST)",
    year: 2024,
    desc: "NIST's AI Red-Teaming resource hub maintained by the U.S. AI Safety Institute, cataloguing red-teaming practices, measurement methodologies, and standards for evaluating AI model and system risks.",
    url: "https://airc.nist.gov/",
    tags: ["nist", "red teaming", "aisi", "catalog", "methodology"]
  },
  {
    title: "NVIDIA NeMo Guardrails Methodology",
    type: "methodology",
    org: "NVIDIA",
    year: 2024,
    desc: "Programmable guardrails framework and methodology for controlling LLM input/output dialogue flow with topical, safety, jailbreak-detection, and fact-checking rails. Documents Colang policy authoring and rails orchestration patterns.",
    url: "https://docs.nvidia.com/nemo/guardrails/",
    tags: ["nvidia", "nemo guardrails", "guardrails", "methodology", "policy"]
  },
  {
    title: "Project Moonshot Methodology",
    type: "methodology",
    org: "AI Verify Foundation",
    year: 2024,
    desc: "Open-source red-teaming toolkit methodology from Singapore's AI Verify Foundation, providing a standardized benchmarking harness for testing LLMs against jailbreaks, harmful completions, and policy violations across plug-and-play attack plugins.",
    url: "https://aiverifyfoundation.sg/project-moonshot/",
    tags: ["ai verify", "moonshot", "red teaming", "methodology", "benchmarking"]
  },
  {
    title: "Trail of Bits AI Security Assessment Methodology",
    type: "methodology",
    org: "Trail of Bits",
    year: 2024,
    desc: "Trail of Bits' methodology for AI/ML security assessments combining model auditing, threat modeling, supply-chain review, and adversarial testing drawn from their cryptographic and application-security practice.",
    url: "https://www.trailofbits.com/services",
    tags: ["trail of bits", "assessment", "audit", "methodology", "threat modeling"]
  },
  {
    title: "AI Verify Testing Framework",
    type: "methodology",
    org: "AI Verify Foundation ( IMDA, Singapore)",
    year: 2023,
    desc: "Singapore's AI governance testing framework and software toolkit methodology, defining a standardized process for assessing AI systems against internationally-recognized principles including transparency, fairness, safety, and accountability.",
    url: "https://aiverifyfoundation.sg/what-is-ai-verify/",
    tags: ["ai verify", "testing framework", "governance", "methodology", "singapore"]
  },
  {
    title: "AVID (AI Vulnerability Database) Methodology",
    type: "methodology",
    org: "AVID",
    year: 2023,
    authors: ["Dan McQuade", "Alyssa Hwang", "Rahul Bose"],
    desc: "Open-source AI vulnerability disclosure methodology and database using a structured taxonomy (use case, lifecycle, AVID effect) to catalogue documented AI/ML vulnerabilities, harms, and limitations in a CVE-like format.",
    url: "https://avidml.org/",
    tags: ["avid", "vulnerability database", "disclosure", "methodology", "taxonomy"]
  },
  {
    title: "DEF CON AI Village Methodology",
    type: "methodology",
    org: "AI Village (DEF CON community)",
    year: 2023,
    desc: "Community-driven AI red-teaming methodology honed at the DEF CON AI Village, including capture-the-flag style adversarial testing against frontier models, disclosure coordination, and open dataset publication (e.g., DEF CON 31 GPT-4 red-team).",
    url: "https://aivillage.org/about/",
    tags: ["def con", "ai village", "community", "red teaming", "methodology"]
  },

  /* ---------- BOOKS ---------- */
  {
    title: "Agentic AI for Offensive Cybersecurity: Build and automate smarter penetration testing workflows using AI-driven agents",
    type: "book",
    org: "Packt Publishing",
    year: 2026,
    authors: ["Orhan Yildirim"],
    desc: "Practitioner book on applying agentic AI to penetration testing automation, including attack surface management, autonomous recon, and AI-driven exploitation workflows. Targets red teamers integrating LLM agents into offensive pipelines.",
    url: "https://www.amazon.com/Agentic-Offensive-Cybersecurity-penetration-workflows/dp/180611447X",
    tags: ["agentic ai", "penetration testing", "offensive", "packt", "automation"]
  },
  {
    title: "Practical AI Security: A Hands-on Guide to Attacking, Defending, and Securing Modern AI Systems",
    type: "book",
    org: "No Starch Press",
    year: 2026,
    authors: ["Harriet Farlow"],
    desc: "Hands-on guide to attacking, defending, and securing modern AI systems by the CEO of Mileva Security Labs. Builds the reader's mental model of data, model, and pipeline attack surfaces with worked examples.",
    url: "https://nostarch.com/practical-ai-security",
    tags: ["ai security", "hands-on", "no starch", "offensive", "defensive"]
  },
  {
    title: "Red Teaming AI: A Field Manual for Attacking Intelligent Systems",
    type: "book",
    org: "No Starch Press",
    year: 2026,
    authors: ["Philip A. Dursey"],
    desc: "Practical field manual for red teaming AI systems covering incremental poisoning, data manipulation, and red teaming large language models. Targets security engineers running offensive assessments against ML pipelines and LLM applications.",
    url: "https://nostarch.com/red-teaming-AI",
    tags: ["red teaming", "ai security", "no starch", "offensive", "field manual"]
  },
  {
    title: "AI Agents for Offensive Security",
    type: "book",
    org: "Manning Publications",
    year: 2025,
    authors: ["Mark Foudy"],
    desc: "Practical guide for offensive security professionals building and using AI agents for reconnaissance, triage, vulnerability discovery, and reporting. Walks through single-agent builds and multi-agent pipelines that fit day-to-day offensive workflows.",
    url: "https://www.manning.com/books/ai-agents-for-offensive-security",
    tags: ["ai agents", "offensive security", "manning", "multi-agent", "vulnerability discovery"]
  },
  {
    title: "AI Engineering: Building Applications with Foundation Models",
    type: "book",
    org: "O'Reilly Media",
    year: 2025,
    authors: ["Chip Huyen"],
    desc: "Comprehensive engineering guide to building production applications on top of foundation models, covering evals, RAG, agents, and failure modes. Includes material on model and prompt security relevant to agentic system design.",
    url: "https://www.oreilly.com/library/view/ai-engineering/9781098166298/",
    tags: ["ai engineering", "foundation models", "agents", "o'reilly", "production"]
  },
  {
    title: "AI-Native LLM Security: Threats, defenses, and best practices for securing generative AI applications",
    type: "book",
    org: "Packt Publishing",
    year: 2025,
    authors: ["Vaibhav Malik", "Ken Huang", "Ads Dawson"],
    desc: "Comprehensive practitioner guide to securing generative AI and LLM applications, mapped to OWASP, NIST, and MITRE taxonomies. Covers prompt injection, model supply chain, agent security, and security controls across the AI development lifecycle.",
    url: "https://www.oreilly.com/library/view/ai-native-llm-security/9781836203759/",
    tags: ["llm security", "generative ai", "packt", "owasp", "defensive"]
  },
  {
    title: "Adversarial Example Detection and Mitigation Using Machine Learning",
    type: "book",
    org: "Springer",
    year: 2025,
    authors: ["Ehsan Nowroozi", "Yekta Said Can Yalcin", "Mauro Conti"],
    desc: "Research monograph on detecting and mitigating adversarial examples in machine learning and AI security. Catalogs emerging threats and defense strategies with emphasis on detection pipelines and resilient model design.",
    url: "https://link.springer.com/book/10.1007/978-3-031-99447-0",
    tags: ["adversarial examples", "detection", "mitigation", "springer", "research"]
  },
  {
    title: "Securing AI Agents: Foundations, Frameworks, and Real-World Implementation",
    type: "book",
    org: "Springer",
    year: 2025,
    authors: ["Ken Huang", "Ceglia G. A. Marques", "Alessandro Pianosi"],
    desc: "Comprehensive guide to the theoretical foundations and practical techniques for securing agentic AI systems, including threat models, red teaming practices, and implementation patterns for safe agent deployment.",
    url: "https://link.springer.com/book/10.1007/978-3-032-02130-4",
    tags: ["agentic ai", "agent security", "springer", "threat modeling", "red teaming"]
  },
  {
    title: "Securing AI Using Zero Trust Principles",
    type: "book",
    org: "Cisco Press",
    year: 2025,
    authors: ["Cindy Green-Ortiz", "Zig Zsiga", "Saskia Laura van der Vorst"],
    desc: "Networking-technology guide applying Zero Trust principles to AI environments, covering data pipelines, model access, runtime controls, and emergent threats. Bridges enterprise security architecture and AI-specific threat surfaces.",
    url: "https://www.ciscopress.com/store/securing-ai-using-zero-trust-principles-9780138363321",
    tags: ["zero trust", "ai security", "cisco press", "enterprise", "defensive"]
  },
  {
    title: "The AI Cybersecurity Handbook",
    type: "book",
    org: "Wiley",
    year: 2025,
    authors: ["Caroline Wong"],
    desc: "Surveys how AI transforms both offensive and defensive cybersecurity operations, including AI-assisted attack automation, defensive AI use cases, and organizational implementation guidance. Covers AI supply chain risks and emerging AI-specific threat vectors.",
    url: "https://www.amazon.com/AI-Cybersecurity-Handbook-Caroline-Wong/dp/1394340869",
    tags: ["ai cybersecurity", "offensive ai", "defensive ai", "wiley", "handbook"]
  },
  {
    title: "AI-Driven Cybersecurity and Threat Intelligence: Cyber Automation, Intelligent Decision-Making and Explainability",
    type: "book",
    org: "Springer",
    year: 2024,
    authors: ["Iqbal H. Sarker"],
    desc: "Academic text on AI-driven cybersecurity including machine learning, explainable AI, and their application across intrusion detection, malware analysis, and threat intelligence. Relevant for both defensive AI use cases and the data pipelines attackers target.",
    url: "https://link.springer.com/book/10.1007/978-3-031-44821-8",
    tags: ["ai cybersecurity", "threat intelligence", "explainable ai", "springer", "research"]
  },
  {
    title: "AI: Unexplainable, Unpredictable, Uncontrollable",
    type: "book",
    org: "Chapman and Hall/CRC",
    year: 2024,
    authors: ["Roman V. Yampolskiy"],
    desc: "Surveys the scientific literature on AI controllability and argues there is no proof AI can be safely controlled, with chapters on explainability, predictability, and verification failures. Foundational reference for the safety case behind adversarial testing and red teaming.",
    url: "https://www.routledge.com/AI-Unexplainable-Unpredictable-Uncontrollable/Yampolskiy/p/book/9781032576275",
    tags: ["ai safety", "controllability", "chapman crc", "yampolskiy", "research"]
  },
  {
    title: "Adversarial AI Attacks, Mitigations, and Defense Strategies: A cybersecurity professional's guide to AI attacks, threat modeling, and securing AI with MLSecOps",
    type: "book",
    org: "Packt Publishing",
    year: 2024,
    authors: ["John Sotiropoulos"],
    desc: "Practitioner guide covering adversarial attacks against AI/LLM systems and the MLSecOps lifecycle for defending them. Includes threat modeling, poisoning/evasion techniques, and secure-by-design controls for AI pipelines.",
    url: "https://www.oreilly.com/library/view/adversarial-ai-attacks/9781835087985/",
    tags: ["adversarial ai", "mlsecops", "threat modeling", "packt", "defensive"]
  },
  {
    title: "Build a Large Language Model (From Scratch)",
    type: "book",
    org: "Manning Publications",
    year: 2024,
    authors: ["Sebastian Raschka"],
    desc: "Step-by-step implementation of a GPT-style LLM covering tokenization, attention, pretraining, and fine-tuning. Gives offensive researchers concrete intuition for where backdoors, prompt-injection sinks, and weight-level artifacts live inside an actual model.",
    url: "https://www.manning.com/books/build-a-large-language-model-from-scratch",
    tags: ["llm", "gpt", "implementation", "manning", "foundational"]
  },
  {
    title: "Generative AI Security: Theories and Practices",
    type: "book",
    org: "Springer",
    year: 2024,
    authors: ["Ken Huang", "Reza M. Parizi", "Mingchao Zhang", "Ali Dehghantanha"],
    desc: "Edited volume on the intersection of generative AI and cybersecurity, covering prompt injection, model abuse, defensive patterns, and the security implications of GenAI deployment. Includes contributions from 39 expert co-authors.",
    url: "https://link.springer.com/book/10.1007/978-3-031-54252-7",
    tags: ["generative ai", "security", "springer", "edited volume", "prompt injection"]
  },
  {
    title: "Hands-On Large Language Models: Language Understanding and Generation",
    type: "book",
    org: "O'Reilly Media",
    year: 2024,
    authors: ["Jay Alammar", "Maarten Grootendorst"],
    desc: "Practitioner-oriented introduction to LLM internals: embeddings, attention, transformer architecture, fine-tuning, and prompting. Useful for offensive researchers who need to reason about model behavior, representations, and failure modes from first principles.",
    url: "https://www.oreilly.com/library/view/hands-on-large-language/9781098150952/",
    tags: ["llm", "transformers", "embeddings", "o'reilly", "practical"]
  },
  {
    title: "Introduction to AI Safety, Ethics, and Society",
    type: "book",
    org: "Routledge (Taylor & Francis)",
    year: 2024,
    authors: ["Dan Hendrycks"],
    desc: "Textbook by the Center for AI Safety director covering malicious use, accidental failures, alignment, and structural risks of advanced AI. Provides the safety framing that motivates red-teaming, model organism research, and frontier-model evaluations.",
    url: "https://www.routledge.com/Introduction-to-AI-Safety-Ethics-and-Society/Hendrycks/p/book/9781032917221",
    tags: ["ai safety", "alignment", "ethics", "routledge", "foundational"]
  },
  {
    title: "Not with a Bug, But with a Sticker: Attacks on Machine Learning Systems",
    type: "book",
    org: "Wiley",
    year: 2024,
    authors: ["Hyrum Anderson", "Gary McGraw"],
    desc: "Trade-press walkthrough of real-world attacks on ML systems, from adversarial stickers to data poisoning and model theft, told through documented incidents. Aimed at security engineers and AI developers building defensive intuition for ML-specific threat surfaces.",
    url: "https://www.oreilly.com/library/view/not-with-a/9781119883982/",
    tags: ["adversarial ml", "ml security", "trade press", "wiley", "defensive"]
  },
  {
    title: "Privacy-Preserving Machine Learning",
    type: "book",
    org: "Manning Publications",
    year: 2024,
    authors: ["J. Morris Chang", "Di Zhuang", "G. Dumindu Samaraweera"],
    desc: "Engineering guide to preventing data breaches in ML projects, covering differential privacy, federated learning, secure aggregation, and inference-time leakage. Directly relevant to defending against model inversion and membership inference on agent memory stores.",
    url: "https://www.oreilly.com/library/view/privacy-preserving-machine-learning/9781617298042/",
    tags: ["privacy", "differential privacy", "federated learning", "manning", "ml security"]
  },
  {
    title: "Prompt Engineering for Generative AI: Future-Proof Inputs for AI That Works",
    type: "book",
    org: "O'Reilly Media",
    year: 2024,
    authors: ["James Phoenix", "Mike Taylor"],
    desc: "Practitioner guide to prompt construction, evaluation, and structured inputs for generative models. Provides the canonical control surface that red teamers manipulate when crafting jailbreaks, prompt injections, and instruction-following attacks.",
    url: "https://www.oreilly.com/library/view/prompt-engineering-for/9781098153427/",
    tags: ["prompt engineering", "generative ai", "o'reilly", "practical", "instruction tuning"]
  },
  {
    title: "The Developer's Playbook for Large Language Model Security",
    type: "book",
    org: "O'Reilly Media",
    year: 2024,
    authors: ["Steve Wilson"],
    desc: "Practical playbook for developers and security teams building LLM applications, covering OWASP Top 10 for LLMs, prompt injection, model supply chain risk, and runtime defenses. Bridges academic LLM security research and enterprise SDLC practice.",
    url: "https://www.oreilly.com/library/view/the-developers-playbook/9781098162191/",
    tags: ["llm security", "owasp", "prompt injection", "o'reilly", "developer"]
  },
  {
    title: "A Hacker's Mind: How the Powerful Bend Society's Rules, and How to Bend Them Back",
    type: "book",
    org: "W. W. Norton & Company",
    year: 2023,
    authors: ["Bruce Schneier"],
    desc: "General-purpose treatment of 'hacking' as the exploitation of rule-system gaps, applied to tax law, policy, and increasingly to AI systems. Provides the conceptual frame Schneier uses when arguing that AI red teaming must extend beyond model weights to sociotechnical systems.",
    url: "https://www.schneier.com/books/a-hackers-mind/",
    tags: ["hacking mindset", "policy", "schneier", "sociotechnical", "foundational"]
  },
  {
    title: "Machine Learning Safety",
    type: "book",
    org: "Springer",
    year: 2023,
    authors: ["Xiaowei Huang"],
    desc: "Academic monograph addressing ML safety concerns including susceptibility to environmental noise, adversarial attacks, and runtime robustness. Includes formal frameworks for safety specification, verification, and assurance of ML components.",
    url: "https://link.springer.com/book/10.1007/978-981-19-6814-3",
    tags: ["ml safety", "robustness", "springer", "verification", "research"]
  },
  {
    title: "The Coming Wave: Technology, Power, and the Twenty-first Century's Greatest Dilemma",
    type: "book",
    org: "Crown Publishing",
    year: 2023,
    authors: ["Mustafa Suleyman"],
    desc: "Trade-press analysis of the unprecedented risks that AI and synthetic biology pose to global order, framing 'containment' as the central problem of the next decade. Relevant to understanding the policy and threat-model backdrop for offensive AI security work.",
    url: "https://www.amazon.com/Coming-Wave-Technology-Twenty-first-Centurys/dp/0593593952",
    tags: ["ai policy", "containment", "crown", "suleyman", "trade press"]
  },
  {
    title: "Adversarial Robustness for Machine Learning",
    type: "book",
    org: "Academic Press (Elsevier)",
    year: 2022,
    authors: ["Pin-Yu Chen", "Cho-Jui Hsieh"],
    desc: "Research monograph summarizing progress on adversarial robustness for ML, with formal treatment of attack algorithms (evasion, poisoning, extraction) and certified defense methods. IBM Research-backed reference for adversarial robustness theory.",
    url: "https://shop.elsevier.com/books/adversarial-robustness-for-machine-learning/chen/978-0-12-824020-5",
    tags: ["adversarial robustness", "academic press", "elsevier", "certified defenses", "research"]
  },
  {
    title: "Natural Language Processing with Transformers: Building Language Applications with Hugging Face",
    type: "book",
    org: "O'Reilly Media",
    year: 2022,
    authors: ["Lewis Tunstall", "Leandro von Werra", "Thomas Wolf"],
    desc: "Revised practical guide to training, fine-tuning, and deploying transformer models with the Hugging Face stack. Relevant background for understanding the model classes, tokenization, and training pipelines that adversaries target.",
    url: "https://www.oreilly.com/library/view/natural-language-processing/9781098136789/",
    tags: ["transformers", "nlp", "hugging face", "o'reilly", "practical"]
  },
  {
    title: "The Alignment Problem: Machine Learning and Human Values",
    type: "book",
    org: "W. W. Norton & Company",
    year: 2020,
    authors: ["Brian Christian"],
    desc: "Narrative survey of the ML alignment problem covering dataset bias, reinforcement learning reward misspecification, and the rise of RLHF. Provides accessible context for understanding why aligned models still jailbreak, leak, and behave adversarially.",
    url: "https://www.amazon.com/Alignment-Problem-Machine-Learning-Values/dp/0393635821",
    tags: ["alignment", "rlhf", "bias", "norton", "narrative"]
  },
  {
    title: "Adversarial Machine Learning",
    type: "book",
    org: "Cambridge University Press",
    year: 2019,
    authors: ["Anthony D. Joseph", "Blaine Nelson", "Benjamin I. P. Rubinstein", "J. D. Tygar"],
    desc: "Foundational academic text on attacks against machine learning systems covering poisoning, evasion, model extraction, and privacy attacks. Predates LLMs but its formal treatment of training-data manipulation and inference-time attacks directly underpins modern agent red teaming.",
    url: "https://www.amazon.com/Adversarial-Machine-Learning-Anthony-Joseph/dp/1107043468",
    tags: ["adversarial ml", "ml security", "foundational", "cambridge university press"]
  },
  {
    title: "Human Compatible: Artificial Intelligence and the Problem of Control",
    type: "book",
    org: "Viking",
    year: 2019,
    authors: ["Stuart Russell"],
    desc: "Argues that AI systems must be built to learn uncertain human preferences rather than optimize fixed objectives, with worked examples of misalignment and misuse. Foundational AI safety text underpinning modern debates over agent intent and reward hacking.",
    url: "https://www.amazon.com/Human-Compatible-Artificial-Intelligence-Problem-ebook/dp/B07N5J5FTS",
    tags: ["ai safety", "alignment", "control", "viking", "foundational"]
  },
  {
    title: "Adversarial Machine Learning (Synthesis Lectures on Artificial Intelligence and Machine Learning)",
    type: "book",
    org: "Morgan & Claypool Publishers",
    year: 2018,
    authors: ["Yevgeniy Vorobeychik", "Murat Kantarcioglu"],
    desc: "Concise synthesis lecture formalizing the adversarial ML problem space with game-theoretic and decision-theoretic frameworks for evasion, poisoning, and privacy attacks. Frequently cited as a foundational academic reference for adversarial ML taxonomy.",
    url: "https://www.amazon.com/Adversarial-Learning-Synthesis-Artificial-Intelligence/dp/1681733951",
    tags: ["adversarial ml", "synthesis lectures", "foundational", "morgan claypool", "game theory"]
  },
  {
    title: "Artificial Intelligence Safety and Security",
    type: "book",
    org: "Chapman and Hall/CRC",
    year: 2018,
    authors: ["Roman V. Yampolskiy"],
    desc: "Edited volume dedicated to the challenges of constructing safe and secure advanced machine intelligence, with chapters covering verification, validation, security, and control of AI systems. Pre-LLM but still a canonical AI safety reference.",
    url: "https://www.routledge.com/Artificial-Intelligence-Safety-and-Security/Yampolskiy/p/book/9780815369820",
    tags: ["ai safety", "ai security", "chapman crc", "edited volume", "foundational"]
  },
  {
    title: "Machine Learning and Security: Protecting Systems with Data and Algorithms",
    type: "book",
    org: "O'Reilly Media",
    year: 2018,
    authors: ["Clarence Chio", "David Freeman"],
    desc: "Practical guide applying ML to security problems (intrusion detection, malware classification) and assessing ML-specific threats to those systems. Pre-LLM but its dual offense/defense framing remains a template for securing AI pipelines.",
    url: "https://www.oreilly.com/library/view/machine-learning-and/9781491979891/",
    tags: ["ml security", "intrusion detection", "malware", "o'reilly", "practical"]
  },
  {
    title: "Software Security: Building Security In",
    type: "book",
    org: "Addison-Wesley Professional",
    year: 2006,
    authors: ["Gary McGraw"],
    desc: "Canonical software security text introducing the touchpoints and knowledge taxonomy for building security into the SDLC. Pre-AI but its risk-management framework underpins modern MLSecOps and is widely referenced in McGraw's later AI security work.",
    url: "https://www.oreilly.com/library/view/software-security-building/0321356705/",
    tags: ["software security", "sdlc", "addison-wesley", "mcgraw", "foundational"]
  },

  /* ---------- TOOLS ---------- */
  {
    title: "DeepTeam",
    type: "tool",
    org: "Confident AI",
    year: 2025,
    desc: "LLM red-teaming framework with built-in mappings to the OWASP Top 10 for Agentic Applications.",
    url: "https://www.trydeepteam.com/docs/frameworks-owasp-top-10-for-agentic-applications",
    tags: ["framework", "owasp"]
  },
  {
    title: "mcp-scan",
    type: "tool",
    org: "Invariant Labs",
    year: 2025,
    desc: "Invariant Labs' CLI that scans Model Context Protocol (MCP) servers for prompt injection, tool poisoning, and credential-exfiltration vectors. Inspects tool descriptions and runtime tool behavior to surface cross-server attack paths.",
    url: "https://github.com/invariantlabs-ai/mcp-scan",
    tags: ["mcp", "prompt-injection", "tool-poisoning", "agent-security", "invariant"],
    license: "Apache-2.0"
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
    title: "CBOMkit",
    type: "tool",
    org: "IBM",
    year: 2024,
    desc: "IBM's toolkit for generating and managing Cyber Bills of Materials (CBOMs) for cryptographic assets in software. Scans Java and Python source code and binaries to inventory crypto algorithms, key lengths, and certificate usage per the CycloneDX CBOM spec.",
    url: "https://github.com/IBM/cbomkit",
    tags: ["supply-chain", "cryptography", "sbom", "cbom", "ibm"],
    license: "Apache-2.0"
  },
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
    title: "Invariant SDK",
    type: "tool",
    org: "Invariant Labs",
    year: 2024,
    desc: "Guardrails for secure and robust agent development from Invariant Labs. Provides policy rules, prompt-injection detection, and runtime agent-behavior analysis for LLM agent systems including MCP-based agents.",
    url: "https://github.com/invariantlabs-ai/invariant",
    tags: ["agent-security", "guardrails", "policy", "prompt-injection", "invariant"],
    license: "Apache-2.0"
  },
  {
    title: "MCP Inspector",
    type: "tool",
    org: "Model Context Protocol Project",
    year: 2024,
    desc: "Official interactive visual testing tool for MCP servers from the Model Context Protocol project. Lets developers inspect server tools, prompts, resources, and message flow during development — useful when auditing third-party MCP servers before integration.",
    url: "https://github.com/modelcontextprotocol/inspector",
    tags: ["mcp", "testing", "inspector", "debugging", "agent-security"],
    license: "MIT"
  },
  {
    title: "Project Moonshot",
    type: "tool",
    org: "AI Verify Foundation (IMDA Singapore)",
    year: 2024,
    desc: "AI Verify Foundation's modular tool to evaluate and red-team any LLM application. Supports plug-in attack strategies, benchmark datasets, and report generation aligned with the AI Verify framework; designed for reusable, scripted red-team workflows.",
    url: "https://github.com/aiverify-foundation/moonshot",
    tags: ["red-team", "evals", "moonshot", "ai-verify", "llm"],
    license: "Apache-2.0"
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
    title: "Protect AI AWS Toolkit",
    type: "tool",
    org: "Protect AI",
    year: 2024,
    desc: "End-to-end security tooling for AI models running on Amazon Bedrock. Combines Recon (AI red-teaming) and Guardian (model scanning) workflows from Protect AI into Bedrock-specific playbooks for Bedrock agents and knowledge bases.",
    url: "https://github.com/protectai/protectai-aws-toolkit",
    tags: ["aws", "bedrock", "red-team", "model-scanning", "protectai"],
    license: "AGPL-3.0"
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
    title: "AI Exploits",
    type: "tool",
    org: "Protect AI",
    year: 2023,
    desc: "Protect AI's collection of real-world AI/ML exploit code for responsibly disclosed vulnerabilities. Includes PoCs against popular ML training platforms, model registries, and agent frameworks (Ray, MLflow, Hugging Face) — useful as red-team reference.",
    url: "https://github.com/protectai/ai-exploits",
    tags: ["exploits", "ml-platforms", "vulnerabilities", "red-team", "protectai"],
    license: "Apache-2.0"
  },
  {
    title: "AI Verify",
    type: "tool",
    org: "AI Verify Foundation (IMDA Singapore)",
    year: 2023,
    desc: "AI Verify Foundation's open-source governance testing framework for AI systems. Provides technical tests for fairness, robustness, and safety across ML pipelines, with reporting templates aligned to international AI governance principles.",
    url: "https://github.com/aiverify-foundation/aiverify",
    tags: ["governance", "fairness", "robustness", "testing", "ai-verify"],
    license: "Apache-2.0"
  },
  {
    title: "AgentOps",
    type: "tool",
    org: "AgentOps",
    year: 2023,
    desc: "Python SDK for AI agent monitoring, LLM cost tracking, and benchmarking. Records agent sessions, replays traces, and integrates with most major LLM and agent frameworks (CrewAI, LangChain, AutoGen, OpenAI Agents SDK) to help red-teamers audit agent execution.",
    url: "https://github.com/AgentOps-AI/agentops",
    tags: ["agent-observability", "tracing", "evals", "cost-tracking"],
    license: "MIT"
  },
  {
    title: "AutoDAN",
    type: "tool",
    org: "SheltonLiu-N (UW-Madison, ICLR 2024)",
    year: 2023,
    authors: ["Xiaogeng Liu", "et al."],
    desc: "ICLR 2024 implementation of AutoDAN: generates stealthy jailbreak prompts against aligned LLMs using a genetic-algorithm search over semantically similar word swaps. Specifically designed to evade perplexity-based defenses that catch GCG-style attacks.",
    url: "https://github.com/SheltonLiu-N/AutoDAN",
    tags: ["jailbreak", "genetic-algorithm", "evasion", "llm-attacks"],
    license: "MIT"
  },
  {
    title: "Braintrust SDK",
    type: "tool",
    org: "Braintrust",
    year: 2023,
    desc: "SDK for the Braintrust AI evaluation platform. Manages prompts, datasets, and scored evaluations; supports both online and offline eval workflows, including red-team scoring pipelines that compare model outputs against safety criteria.",
    url: "https://github.com/braintrustdata/braintrust-sdk",
    tags: ["evals", "prompts", "datasets", "llm"],
    license: "Apache-2.0"
  },
  {
    title: "Guardrails AI",
    type: "tool",
    org: "Guardrails AI",
    year: 2023,
    desc: "Python library for adding validators (structural, factual, semantic, safety) to LLM applications. Validates LLM output against typed schemas, automatically retries with corrective prompts on failure, and emits structured logs of every check.",
    url: "https://github.com/guardrails-ai/guardrails",
    tags: ["guardrails", "validation", "llm", "python", "output-filtering"],
    license: "Apache-2.0"
  },
  {
    title: "Helicone",
    type: "tool",
    org: "Helicone",
    year: 2023,
    desc: "Open-source LLM observability platform. A one-line proxy that logs, monitors, evaluates, and experiments with LLM calls; supports cost tracking, caching, rate limiting, and request replay for red-team testing.",
    url: "https://github.com/Helicone/helicone",
    tags: ["observability", "proxy", "llm", "tracing", "self-host"],
    license: "Apache-2.0"
  },
  {
    title: "HiddenLayer AIMS",
    type: "tool",
    org: "HiddenLayer",
    year: 2023,
    desc: "HiddenLayer's commercial AI Model Security platform for runtime threat detection on ML models. Detects adversarial inputs, model extraction attempts, and inference-time attacks against deployed models via ML-based behavioral detectors.",
    url: "https://hiddenlayer.com/",
    tags: ["ml-security", "runtime-detection", "commercial", "model-extraction", "hiddenlayer"],
    license: "proprietary"
  },
  {
    title: "LLM Guard",
    type: "tool",
    org: "Protect AI",
    year: 2023,
    desc: "Protect AI's security toolkit for LLM interactions. Scans prompts and responses for prompt injection, jailbreaks, secrets, toxic content, and PII; can anonymize and deanonymize content with named-entity transformers before forwarding to downstream models.",
    url: "https://github.com/protectai/llm-guard",
    tags: ["llm-security", "prompt-injection", "pii", "secrets", "protectai"],
    license: "MIT"
  },
  {
    title: "Lakera Guard",
    type: "tool",
    org: "Lakera",
    year: 2023,
    desc: "Lakera's commercial LLM firewall for real-time prompt-injection, jailbreak, and toxic-content detection. Maintains a curated rule set trained on adversarial prompts from the Gandalf benchmark and deploys as an API gateway or container sidecar in front of LLM apps.",
    url: "https://www.lakera.ai/lakera-guard",
    tags: ["llm-firewall", "prompt-injection", "commercial", "guardrails", "lakera"],
    license: "proprietary"
  },
  {
    title: "LangKit",
    type: "tool",
    org: "WhyLabs",
    year: 2023,
    desc: "Open-source toolkit from WhyLabs for monitoring LLMs. Extracts signals from prompts and responses — text quality, readability, similarity, sentiment, topical drift, and jailbreak heuristics — into whylogs profiles for safety and security observability.",
    url: "https://github.com/whylabs/langkit",
    tags: ["observability", "llm-monitoring", "guardrails", "telemetry"],
    license: "Apache-2.0"
  },
  {
    title: "Langfuse",
    type: "tool",
    org: "Langfuse GmbH",
    year: 2023,
    desc: "Open-source AI engineering platform for LLM evals, observability, prompt management, and datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, and LiteLLM; self-hostable and useful for red-team trace capture of agentic runs.",
    url: "https://github.com/langfuse/langfuse",
    tags: ["observability", "tracing", "evals", "opentelemetry", "self-host"],
    license: "MIT"
  },
  {
    title: "NeMo Guardrails",
    type: "tool",
    org: "NVIDIA",
    year: 2023,
    desc: "NVIDIA's open-source toolkit for adding programmable guardrails — topic control, dialog safety, security/fact-checking rules — to LLM-based conversational applications. Rails are authored in Colang and orchestrated with the LLM at runtime.",
    url: "https://github.com/NVIDIA/NeMo-Guardrails",
    tags: ["guardrails", "nvidia", "dialog-safety", "policy", "llm"],
    license: "Apache-2.0"
  },
  {
    title: "OpenAI Evals",
    type: "tool",
    org: "OpenAI",
    year: 2023,
    desc: "Framework for evaluating LLMs and LLM systems with an open-source registry of benchmarks. Defines declarative eval templates that can run model-vs-model grading for safety and capability tests, including custom red-team grading rubrics.",
    url: "https://github.com/openai/evals",
    tags: ["evals", "benchmarks", "grading", "openai", "llm"],
    license: "MIT"
  },
  {
    title: "PAIR (JailbreakingLLMs)",
    type: "tool",
    org: "PAIR Team (UC Davis / UMD)",
    year: 2023,
    authors: ["Patrick Chao", "et al."],
    desc: "Implementation of Prompt Automatic Iterative Refinement (PAIR): uses an attacker LLM to iteratively refine jailbreak prompts against a target LLM using only black-box query access. Prompts the attacker with feedback on each failed attempt to guide the next refinement.",
    url: "https://github.com/patrickrchao/JailbreakingLLMs",
    tags: ["jailbreak", "black-box", "iterative", "llm-attacks", "pair"],
    license: "MIT"
  },
  {
    title: "Phoenix (Arize)",
    type: "tool",
    org: "Arize AI",
    year: 2023,
    desc: "AI observability and evaluation from Arize. Traces LLM and agent calls via OpenTelemetry-instrumented spans, evaluates responses for hallucination and QA correctness, and surfaces regressions across prompt and model versions.",
    url: "https://github.com/Arize-ai/phoenix",
    tags: ["observability", "tracing", "evals", "opentelemetry", "arize"],
    license: "Elastic-2.0"
  },
  {
    title: "Prompt Security PSGuard",
    type: "tool",
    org: "Prompt Security",
    year: 2023,
    desc: "Prompt Security's commercial platform for monitoring and filtering prompts and responses across LLM apps. Detects prompt injection, data exfiltration, and policy violations at the gateway with both inline blocking and audit logging modes.",
    url: "https://www.prompt.security/",
    tags: ["llm-firewall", "prompt-injection", "commercial", "data-exfiltration", "guardrails"],
    license: "proprietary"
  },
  {
    title: "RAGAS",
    type: "tool",
    org: "Exploding Gradients",
    year: 2023,
    desc: "Framework for evaluating Retrieval-Augmented Generation (RAG) pipelines. Provides metrics for context precision/recall, faithfulness, and answer relevance; useful for testing agent retriever robustness against poisoned-context and retrieval-injection attacks.",
    url: "https://github.com/explodinggradients/ragas",
    tags: ["rag", "evals", "faithfulness", "retrieval", "llm"],
    license: "Apache-2.0"
  },
  {
    title: "Rebuff",
    type: "tool",
    org: "Protect AI",
    year: 2023,
    desc: "LLM prompt injection detector from Protect AI. Combines a transformer-based detection model, canary-word checks, and vector-distance heuristics to block prompt injection attempts before they reach downstream agent tools.",
    url: "https://github.com/protectai/rebuff",
    tags: ["prompt-injection", "detection", "guardrails", "protectai"],
    license: "Apache-2.0"
  },
  {
    title: "TAP (Tree of Attacks with Pruning)",
    type: "tool",
    org: "Robust Intelligence Community",
    year: 2023,
    desc: "Tree of Attacks with Pruning: automated jailbreaking for black-box LLMs. Builds a tree of attacker prompts, prunes low-scoring branches at each depth, and recombines survivors to maximize jailbreak success while keeping query count low.",
    url: "https://github.com/RICommunity/TAP",
    tags: ["jailbreak", "tree-search", "black-box", "llm-attacks", "tap"],
    license: "MIT"
  },
  {
    title: "Vigil",
    type: "tool",
    org: "deadbits",
    year: 2023,
    desc: "Detect prompt injections, jailbreaks, and other risky LLM inputs. Combines heuristics, similarity matching against known-bad text corpora, and YARA-style text rules to flag suspicious prompts; can integrate with multiple detection model backends.",
    url: "https://github.com/deadbits/vigil-llm",
    tags: ["prompt-injection", "detection", "yara", "llm-security"],
    license: "Apache-2.0"
  },
  {
    title: "modelscan",
    type: "tool",
    org: "Protect AI",
    year: 2023,
    desc: "Protect AI's tool for detecting malicious code in serialized ML model files (pickle, Keras, PyTorch, TensorFlow, safetensors). Flags unsafe opcodes and suspicious deserialization patterns before model loading to prevent supply-chain code execution via models.",
    url: "https://github.com/protectai/modelscan",
    tags: ["supply-chain", "model-security", "pickle", "deserialization", "protectai"],
    license: "Apache-2.0"
  },
  {
    title: "nbdefense",
    type: "tool",
    org: "Protect AI",
    year: 2023,
    desc: "Protect AI's tool for securing Jupyter notebooks and experimentation environments. Scans notebooks for committed secrets, sensitive data, vulnerable packages, and risky code patterns; ships as CLI and JupyterLab extension.",
    url: "https://github.com/protectai/nbdefense",
    tags: ["notebook-security", "secrets", "supply-chain", "jupyter", "protectai"],
    license: "Apache-2.0"
  },
  {
    title: "TruLens",
    type: "tool",
    org: "Truera",
    year: 2022,
    desc: "Evaluation and tracking library for LLM experiments and AI agents. Records LLM and agent traces, computes app-internal metrics (context relevance, groundedness, toxicity), and chains evaluations into reusable feedback functions.",
    url: "https://github.com/truera/trulens",
    tags: ["evals", "tracing", "feedback", "agents", "llm"],
    license: "MIT"
  },
  {
    title: "Counterfit",
    type: "tool",
    org: "Microsoft",
    year: 2021,
    desc: "Microsoft's CLI providing a generic automation layer for assessing the security of ML models. Wraps Adversarial Robustness Toolbox, TextAttack, and other frameworks behind a unified command set for evasion, exfiltration, and poisoning tests against deployed models.",
    url: "https://github.com/Azure/counterfit",
    tags: ["adversarial", "ml-security", "red-team", "cli", "microsoft"],
    license: "MIT"
  },
  {
    title: "NL-Augmenter",
    type: "tool",
    org: "GEM Benchmark Collaboration",
    year: 2021,
    desc: "Collaborative repository of natural language transformations for data augmentation and adversarial robustness testing. Each transformation is a self-contained module that can be composed and applied to text datasets to stress-test NLP model generalization.",
    url: "https://github.com/GEM-benchmark/NL-Augmenter",
    tags: ["data-augmentation", "nlp", "transformations", "robustness"],
    license: "MIT"
  },
  {
    title: "OpenAttack",
    type: "tool",
    org: "THUNLP (Tsinghua University)",
    year: 2020,
    desc: "Open-source Python package for textual adversarial attack generation against NLP models. Provides unified interfaces for generating adversarial examples via word substitution, paraphrasing, and other transformations, plus evaluation metrics for attack success and semantic preservation.",
    url: "https://github.com/thunlp/OpenAttack",
    tags: ["adversarial", "nlp", "textual-attacks", "python"],
    license: "MIT"
  },
  {
    title: "TextAttack",
    type: "tool",
    org: "QData Lab (UVA & UMich)",
    year: 2020,
    authors: ["John X. Morris", "Vinitha Suri", "Yanai Elazar", "et al."],
    desc: "Python framework for adversarial attacks, data augmentation, and model training in NLP. Provides 15+ transformation methods (word swaps, paraphrasing, character-level edits) and 4 search algorithms; widely used to test embedding-level robustness of NLP components used inside LLM agents.",
    url: "https://github.com/QData/TextAttack",
    tags: ["adversarial", "nlp", "transformations", "python", "ml-security"],
    license: "MIT"
  },
  {
    title: "Adversarial Robustness Toolbox (ART)",
    type: "tool",
    org: "Trusted-AI (Linux Foundation, originally IBM)",
    year: 2018,
    desc: "Python library for machine learning security covering evasion, poisoning, extraction, and inference attacks. Supports TensorFlow, PyTorch, Keras, scikit-learn and other ML frameworks; widely used by red and blue teams for classical ML and early LLM threat simulation.",
    url: "https://github.com/Trusted-AI/adversarial-robustness-toolbox",
    tags: ["adversarial", "ml-security", "evasion", "poisoning", "python"],
    license: "MIT"
  },
  {
    title: "AI Red Teaming Playground Labs",
    type: "tool",
    org: "Microsoft",
    desc: "Hands-on AI red-teaming challenges and infrastructure from Microsoft's Black Hat training, for practicing attacks on AI systems.",
    url: "https://github.com/microsoft/AI-Red-Teaming-Playground-Labs",
    tags: ["red-teaming", "training", "labs"]
  },
  {
    title: "AgentDojo-Inspect",
    type: "tool",
    org: "NIST",
    desc: "Inspect-compatible fork of AgentDojo used in US/UK AISI joint red-teaming to evaluate prompt-injection attacks and defenses on agents.",
    url: "https://github.com/usnistgov/agentdojo-inspect",
    tags: ["evaluation", "prompt injection"]
  },
  {
    title: "Agentic Radar",
    type: "tool",
    org: "SplxAI",
    desc: "Security scanner that maps an agent's workflow and surfaces vulnerabilities via static analysis plus runtime adversarial testing. Generates an OWASP-aligned report.",
    url: "https://github.com/splx-ai/agentic-radar",
    tags: ["scanner", "workflow", "owasp"]
  },
  {
    title: "Browser-Agent-Red-Teaming",
    type: "tool",
    org: "AIM Intelligence",
    desc: "Red teaming and jailbreaking specifically targeting browser-use agents.",
    url: "https://github.com/AIM-Intelligence/Browser-Agent-Red-Teaming",
    tags: ["red-teaming", "browser agent", "jailbreak"]
  },
  {
    title: "CAI (Cybersecurity AI)",
    type: "tool",
    org: "Alias Robotics",
    desc: "Lightweight framework for building offensive and defensive security agents. Bug-bounty ready, with native security-tool integrations.",
    url: "https://github.com/aliasrobotics/cai",
    tags: ["pentest", "framework", "bug bounty"]
  },
  {
    title: "DeepEval",
    type: "tool",
    org: "Confident AI",
    desc: "Developer-friendly framework for testing LLM and agent outputs with metrics for hallucination, toxicity and more. Includes red-teaming and CI integration.",
    url: "https://github.com/confident-ai/deepeval",
    tags: ["evaluation", "ci"]
  },
  {
    title: "FuzzyAI",
    type: "tool",
    org: "CyberArk",
    desc: "Automated LLM fuzzer that finds jailbreaks and prompt injections across many attack strategies (Crescendo, ASCII smuggling, and more) and providers.",
    url: "https://github.com/cyberark/FuzzyAI",
    tags: ["fuzzing", "jailbreak", "red-teaming"]
  },
  {
    title: "GPTFuzz",
    type: "tool",
    org: "sherdencooper",
    desc: "Red-teams LLMs with auto-generated jailbreak prompts via a fuzzing approach that mutates seed templates.",
    url: "https://github.com/sherdencooper/GPTFuzz",
    tags: ["fuzzing", "jailbreak"]
  },
  {
    title: "Giskard",
    type: "tool",
    org: "Giskard AI",
    desc: "Open-source library to evaluate and red-team LLMs and AI agents. Auto-generates adversarial test suites (prompt injection, leakage, harmful content) mapped to the OWASP LLM Top 10.",
    url: "https://github.com/Giskard-AI/giskard",
    tags: ["evaluation", "red-teaming", "owasp"]
  },
  {
    title: "HackingBuddyGPT",
    type: "tool",
    org: "IPA Lab",
    desc: "AI assistant that executes shell commands inside a sandbox, reads the output and decides the next step to autonomously pentest a target.",
    url: "https://github.com/ipa-lab/hackingBuddyGPT",
    tags: ["pentest", "autonomous"]
  },
  {
    title: "HarmBench",
    type: "tool",
    org: "Center for AI Safety",
    desc: "Standardized evaluation framework for automated red teaming of LLMs, providing adversarial baselines for agent-underlying models.",
    url: "https://github.com/centerforaisafety/HarmBench",
    tags: ["red-teaming", "benchmark"]
  },
  {
    title: "Inspect",
    type: "tool",
    org: "UK AI Security Institute",
    desc: "Framework for evaluating multi-turn, tool-using LLM agents with secure sandboxing, parallel execution and a trajectory trace viewer.",
    url: "https://github.com/UKGovernmentBEIS/inspect_ai",
    tags: ["evaluation", "harness"]
  },
  {
    title: "JailbreakBench",
    type: "tool",
    org: "JailbreakBench",
    desc: "Open robustness benchmark and leaderboard for jailbreaking LLMs, reusable as an adversarial baseline for agents.",
    url: "https://github.com/JailbreakBench/jailbreakbench",
    tags: ["jailbreak", "benchmark"]
  },
  {
    title: "LLMFuzzer",
    type: "tool",
    org: "mnns",
    desc: "Fuzzing framework built specifically for LLM integrations and APIs (archived/unmaintained but a useful reference).",
    url: "https://github.com/mnns/LLMFuzzer",
    tags: ["fuzzing"]
  },
  {
    title: "Microsoft Graph AI Red Team Framework",
    type: "tool",
    org: "securelayer7",
    desc: "Autonomous framework of GPT-4-powered agents that perform intelligent penetration testing against Microsoft Graph API endpoints, from recon to exploitation.",
    url: "https://github.com/securelayer7/msg-ai-agent",
    tags: ["pentest", "autonomous", "api"]
  },
  {
    title: "Mindgard CLI",
    type: "tool",
    org: "Mindgard",
    desc: "Open-source CLI for automated red teaming of LLMs and AI agents with attack scenarios aligned to MITRE ATLAS and the OWASP LLM Top 10.",
    url: "https://github.com/Mindgard/cli",
    tags: ["red-teaming", "mitre", "automation"]
  },
  {
    title: "Nebula",
    type: "tool",
    org: "Beryllium Security",
    desc: "AI-powered penetration-testing assistant that automates recon, note-taking and vulnerability analysis from the command line.",
    url: "https://github.com/berylliumsec/nebula",
    tags: ["pentest", "recon"]
  },
  {
    title: "OpenHack",
    type: "tool",
    org: "OpenHackAI",
    desc: "Open-source agentic security scanner for probing AI agents and LLM apps.",
    url: "https://github.com/openhackai/OpenHack",
    tags: ["scanner", "red-teaming"]
  },
  {
    title: "PentAGI",
    type: "tool",
    org: "vxcontrol",
    desc: "Fully autonomous multi-agent pentesting system that integrates 20+ tools (nmap, Metasploit, sqlmap) in a sandboxed environment and plans attacks end to end.",
    url: "https://github.com/vxcontrol/pentagi",
    tags: ["pentest", "multi-agent", "autonomous"]
  },
  {
    title: "Pentest Copilot",
    type: "tool",
    org: "BugBase",
    desc: "AI-powered ethical-hacking assistant that connects to a Kali box, runs tools autonomously and analyzes results.",
    url: "https://github.com/bugbasesecurity/pentest-copilot",
    tags: ["pentest", "assistant"]
  },
  {
    title: "Pentest-Swarm-AI",
    type: "tool",
    org: "Armur AI",
    desc: "Swarm of AI agents that orchestrates recon, classification, exploitation and reporting specialists with ReAct reasoning. Supports bug-bounty, monitoring and CTF modes.",
    url: "https://github.com/Armur-Ai/Pentest-Swarm-AI",
    tags: ["pentest", "multi-agent"]
  },
  {
    title: "PentestGPT",
    type: "tool",
    org: "GreyDGL",
    desc: "LLM-powered framework that guides and automates penetration testing, especially web and CTF-style targets.",
    url: "https://github.com/GreyDGL/PentestGPT",
    tags: ["pentest", "automation"]
  },
  {
    title: "Purple Llama (CyberSecEval)",
    type: "tool",
    org: "Meta",
    desc: "Suite including CyberSecEval, benchmarks that measure models' offensive-cyber capability and insecure-code generation.",
    url: "https://github.com/meta-llama/PurpleLlama",
    tags: ["evaluation", "offensive cyber"]
  },
  {
    title: "Red AI Range (RAR)",
    type: "tool",
    org: "ErdemOzgen",
    desc: "A security platform that builds realistic environments for AI red teaming and vulnerability assessment, with controlled testing scenarios.",
    url: "https://github.com/ErdemOzgen/RedAiRange",
    tags: ["red-teaming", "range", "vuln assessment"]
  },
  {
    title: "Red Teaming Agent (Vectara)",
    type: "tool",
    org: "Vectara",
    desc: "Autonomous red-teaming framework using specialized LLM-powered agents to probe AI systems for vulnerabilities, biases and safety weaknesses.",
    url: "https://github.com/vectara/red-teaming-agent",
    tags: ["red-teaming", "autonomous", "agent"]
  },
  {
    title: "Red Teaming Copilot Studio Agent",
    type: "tool",
    org: "Azure-Samples",
    desc: "AI Red Teaming Agent that assesses Microsoft Copilot Studio agents against adversarial prompt attacks, using PyRIT attack strategies.",
    url: "https://github.com/Azure-Samples/red-teaming-copilot-studio-agent-modular",
    tags: ["red-teaming", "copilot", "prompt injection"]
  },
  {
    title: "Shannon",
    type: "tool",
    org: "Keygraph",
    desc: "White-box AI pentester that reads source, identifies attack vectors and executes real exploits to prove vulnerabilities.",
    url: "https://github.com/KeygraphHQ/shannon",
    tags: ["pentest", "white-box"]
  },
  {
    title: "Snyk agent-scan",
    type: "tool",
    org: "Snyk",
    desc: "Discovers and scans AI agents, MCP servers and agent skills for prompt injection and other threats. Keeps an inventory of agent components.",
    url: "https://github.com/snyk/agent-scan",
    tags: ["scanner", "mcp", "supply chain"]
  },
  {
    title: "Spikee",
    type: "tool",
    org: "Reversec / WithSecure Labs",
    desc: "Prompt-injection kit for evaluation and exploitation: builds custom test datasets, applies evasion (leetspeak, Unicode smuggling, decomposition) and runs dynamic attacks.",
    url: "https://github.com/WithSecureLabs/spikee",
    tags: ["prompt injection", "toolkit", "jailbreak"]
  },
  {
    title: "Strix",
    type: "tool",
    org: "usestrix",
    desc: "Autonomous AI 'hackers' that explore an app via proxy, browser and terminal, find vulnerabilities and confirm them with working proof-of-concepts.",
    url: "https://github.com/usestrix/strix",
    tags: ["pentest", "autonomous", "bug bounty"]
  },
  {
    title: "Vulnhuntr",
    type: "tool",
    org: "Protect AI",
    desc: "Uses LLMs to trace entire code call chains from user input to output, detecting complex multi-step vulnerabilities.",
    url: "https://github.com/protectai/vulnhuntr",
    tags: ["vuln assessment", "code", "sast"]
  },
  {
    title: "Xalgorix",
    type: "tool",
    org: "xalgord",
    desc: "Self-hosted AI pentesting agent combining an LLM, browser automation and a 22-phase testing methodology with reporting.",
    url: "https://github.com/xalgord/xalgorix",
    tags: ["pentest", "bug bounty"]
  },
  {
    title: "agentic-ai-pentest",
    type: "tool",
    org: "HardenedLinux",
    desc: "Agentic AI that performs penetration testing autonomously.",
    url: "https://github.com/hardenedlinux/agentic-ai-pentest",
    tags: ["pentest", "autonomous"]
  },
  {
    title: "agentic_security",
    type: "tool",
    org: "msoedov",
    desc: "Agentic LLM vulnerability scanner and red-teaming kit. Probes agent workflows with jailbreaks, fuzzing and multimodal attacks.",
    url: "https://github.com/msoedov/agentic_security",
    tags: ["scanner", "red-teaming", "jailbreak"]
  },
  {
    title: "llm-attacks (GCG)",
    type: "tool",
    org: "Zou et al.",
    desc: "Reference implementation of universal, transferable adversarial suffixes (GCG) that jailbreak aligned LLMs.",
    url: "https://github.com/llm-attacks/llm-attacks",
    tags: ["jailbreak", "adversarial"]
  },
  {
    title: "promptmap",
    type: "tool",
    org: "Utku Sen",
    desc: "Automated prompt-injection scanner that tests LLM apps and system prompts against a library of injection attacks.",
    url: "https://github.com/utkusen/promptmap",
    tags: ["scanner", "prompt injection"]
  },
  {
    title: "redamon",
    type: "tool",
    org: "samugit83",
    desc: "AI-powered agentic red-team framework that automates offensive operations end to end — reconnaissance, exploitation and post-exploitation — with zero human intervention.",
    url: "https://github.com/samugit83/redamon",
    tags: ["red-teaming", "autonomous", "pentest"]
  },

  /* ---------- BENCHMARKS & EVALUATION ---------- */
  {
    title: "OpenAgentSafety",
    type: "benchmark",
    org: "Academic",
    year: 2025,
    desc: "Evaluates agents across diverse tasks with metrics tied to instruction-following, policy compliance, and robustness to malicious inputs.",
    url: "https://www.google.com/search?q=OpenAgentSafety+benchmark",
    tags: ["safety", "evaluation"]
  },
  {
    title: "AILuminate — MLCommons AI Risk Benchmark",
    type: "benchmark",
    org: "MLCommons AI Risk & Reliability Working Group",
    year: 2024,
    desc: "First standardized industry benchmark for LLM hazard risk measuring model compliance across 12 hazard categories (CBRN, cyber, child safety, deception, hate, etc.) with public leaderboards. Released December 2024 as v1.0 with multilingual prompts in English, Chinese, and French.",
    url: "https://ailuminate.mlcommons.org/",
    tags: ["mlcommons", "hazard", "safety", "leaderboard", "industry"],
    license: "Apache-2.0"
  },
  {
    title: "AIR-Bench — AI Risk Benchmark",
    type: "benchmark",
    org: "Chinese Academy of Sciences / Shanghai AI Lab",
    year: 2024,
    authors: ["Yifan Liu", "Jiayi Kuang", "Xingsheng Zhu", "et al."],
    desc: "Benchmark evaluating LLM safety across 8 risk categories (mental health, discrimination, physical harm, privacy, cybersecurity, ethics, illegal activity, disinformation) and 124 sub-categories, with 5,694 single-turn and 4,449 multi-turn prompts. Distinguished by automated query-generation pipeline and dynamic adversarial updating.",
    url: "https://github.com/AIR-Bench/AIR-Bench",
    tags: ["risk", "safety", "multi-turn", "adversarial", "chinese"],
    license: "Apache-2.0"
  },
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
    title: "MLCommons AI Safety v0.5 Proof of Concept",
    type: "benchmark",
    org: "MLCommons AI Safety Working Group",
    year: 2024,
    desc: "Proof-of-concept release of MLCommons' AI Safety benchmark suite (April 2024), precursor to AILuminate. Defines reference test methodology for automatic and human-graded hazard refusal testing across 13 hazard categories with alicloud, Anthropic, Google, Meta, Microsoft, Nvidia, OpenAI, and others contributing test cases.",
    url: "https://mlcommons.org/2024/04/mlc-aisafety-v0-5-poc/",
    tags: ["mlcommons", "safety", "proof of concept", "reference methodology"],
    license: "Apache-2.0"
  },
  {
    title: "StrongREJECT — Robust and Realistic Jailbreak Evaluation",
    type: "benchmark",
    org: "UC Berkeley",
    year: 2024,
    authors: ["Alyssa L. Li", "Aengus Lynch", "Siddharth S. Phanse", "et al."],
    desc: "Evaluation framework with 313 carefully curated forbidden prompts and a fine-tuned automated judge that scores model responses on refusal, specificity, and convincingness. Designed to address issues with LLM-judge leniency and benchmark saturation observed in JailbreakBench and HarmBench evaluations.",
    url: "https://github.com/dsbowen/strong_reject",
    tags: ["jailbreak", "evaluation", "judge", "forbidden prompts", "robustness"],
    license: "MIT"
  },
  {
    title: "TrustLLM Benchmark — Trustworthiness in Large Language Models",
    type: "benchmark",
    org: "Beijing Institute of Technology / SJTU / Tsinghua",
    year: 2024,
    authors: ["Shangmin Sun", "Hao Wang", "Jiajun Liu", "et al."],
    desc: "Benchmark spanning 6 trustworthiness dimensions (truthfulness, safety, fairness, robustness, privacy, machine ethics) with 29 datasets and 12 categories. Includes 100+ evaluation metrics and comparative analysis of 8 mainstream LLMs; key academic reference for trustworthiness evaluation beyond DecodingTrust.",
    url: "https://github.com/HowieHwong/TrustLLM",
    tags: ["trustworthiness", "fairness", "robustness", "ethics", "evaluation"],
    license: "Apache-2.0"
  },
  {
    title: "WMDP — Weapons of Mass Destruction Proxy Benchmark",
    type: "benchmark",
    org: "Center for AI Safety / MIT",
    year: 2024,
    authors: ["Nathaniel Li", "Alexander Pan", "Anjali Gopal", "et al."],
    desc: "Benchmark of 4,157 multiple-choice questions measuring hazardous knowledge in biosecurity, cybersecurity, and chemistry that could enable CBRN harm. Used to evaluate unlearning methods (e.g., RMU) and refuse-to-answer capabilities; the standard academic proxy for measuring dual-use knowledge in LLMs.",
    url: "https://www.wmdp.ai",
    tags: ["wmdp", "cbrn", "biosecurity", "cybersecurity", "unlearning"],
    license: "MIT"
  },
  {
    title: "WildBench — Benchmarking LLMs with Challenging Real-World User Instructions",
    type: "benchmark",
    org: "Allen Institute for AI",
    year: 2024,
    authors: ["Bill Yuchen Lin", "Yuntian Deng", "Khyathi Raghavi Chandu", "et al."],
    desc: "Benchmark of 1,024 challenging real-world user instructions mined from Vicuna and WildChat, focused on long-form and complex queries where existing benchmarks saturate. Includes length-controlled, pair-wise LLM-judge evaluation for fair capability comparison across frontier models.",
    url: "https://github.com/allenai/wildbench",
    tags: ["real-world", "instruction following", "leaderboard", "evaluation"],
    license: "ODC-BY"
  },
  {
    title: "AgentBench: Evaluating LLMs as Autonomous Agents",
    type: "benchmark",
    org: "Tsinghua University / UC Berkeley",
    year: 2023,
    authors: ["Xiao Liu", "Hao Yu", "Bin Xu", "Shuicheng Yan"],
    desc: "Benchmark of 8 distinct agent environments (operating system, database, knowledge graph, card game, lateral thinking puzzle, household, web shopping, web browsing) for evaluating LLMs as autonomous agents across 878 tasks. Reports accuracy on GPT-4, Claude, and 50+ open models; reproducible via Docker-based evaluation harness.",
    url: "https://github.com/THUDM/AgentBench",
    tags: ["agent", "evaluation", "autonomous", "multi-environment", "dataset"],
    license: "Apache-2.0"
  },
  {
    title: "BeaverTails — Towards Improved Safety Alignment of LLM via Safe RLHF",
    type: "benchmark",
    org: "Peking University (PKU-Alignment)",
    year: 2023,
    authors: ["Jiaming Ji", "Junye Dong", "Hai Kai", "et al."],
    desc: "Dataset of 30,000 QA response annotations with dual (helpfulness and harmlessness) human preferences for training RLHF safety filters and policies. Includes the 333,973-example PKU-SafeRLHF dataset and serves as the standard open-source preference data for safety alignment research.",
    url: "https://github.com/PKU-Alignment/safe-rlhf",
    tags: ["rlhf", "safety alignment", "preference data", "harmlessness", "alignment"],
    license: "Apache-2.0"
  },
  {
    title: "CBBQ — Chinese Bias Benchmark for Question Answering",
    type: "benchmark",
    org: "Fudan University",
    year: 2023,
    authors: ["Yufei Huang", "Yujun Cai", "Yongtao Jiang", "et al."],
    desc: "Chinese-language counterpart to BBQ with 47,003 examples across 11 social bias dimensions adapted to the Chinese cultural context (region, household registration, age, gender, ethnicity, disability, etc.). Used as the standard bias-evaluation set for Chinese-language LLMs.",
    url: "https://github.com/YFHuangxxxx/CBBQ",
    tags: ["bias", "chinese", "qa", "fairness", "cultural"],
    license: "CC-BY-NC-4.0"
  },
  {
    title: "DecodingTrust: A Comprehensive Assessment of Trustworthiness in GPT Models",
    type: "benchmark",
    org: "UC Berkeley / UIUC / Stanford",
    year: 2023,
    authors: ["Boxin Wang", "Wei Ping", "Chaowei Xiao", "Bo Li", "Dawn Song"],
    desc: "Trustworthiness benchmark for GPT models spanning 8 perspectives: stereotype bias, adversarial robustness, OOD robustness, privacy, robustness to hallucination, machine ethics, fairness, and toxicity. Each perspective includes tailored test sets and metrics; the paper's release set the reference taxonomy for LLM trust evaluation.",
    url: "https://decodingtrust.github.io/",
    tags: ["trustworthiness", "gpt", "adversarial", "bias", "privacy"],
    license: "MIT"
  },
  {
    title: "Do-Not-Answer Benchmark for Evaluating LLM Self-Censorship",
    type: "benchmark",
    org: "Hong Kong University of Science and Technology",
    year: 2023,
    authors: ["Yi Liu", "Gelei Deng", "Yuekang Li", "et al."],
    desc: "Benchmark of 5,735 prompts designed to elicit responses that responsible LLMs should refuse to answer, organized across 5 risk categories and 61 sub-categories. Evaluates false refusal and selective self-censorship; complementary to harm-elicitation benchmarks like HarmBench.",
    url: "https://github.com/Libr-AI/do-not-answer",
    tags: ["refusal", "self-censorship", "risk", "evaluation", "safety"],
    license: "CC-BY-NC-4.0"
  },
  {
    title: "HEx-PHI — Efficient LLM Jailbreaking via Bypassing Safety Alignment",
    type: "benchmark",
    org: "Hong Kong Polytechnic University",
    year: 2023,
    authors: ["Eugene Chao", "Lin Yang", "XiaoFang Wang", "et al."],
    desc: "Jailbreak benchmark of 330 hand-crafted prompts across 10 prohibited-content categories (illegal activity, hate, malware, financial harm, privacy violation, etc.) drawn from the prohibited-usage policies of leading LLM vendors. Used as a standard lightweight evaluation set for measuring safety-filter bypass on aligned LLMs.",
    url: "https://arxiv.org/abs/2311.07396",
    tags: ["jailbreak", "safety alignment", "prohibited content", "evaluation"],
    license: "MIT"
  },
  {
    title: "SafetyBench — Evaluating the Safety of Large Language Models",
    type: "benchmark",
    org: "Tsinghua University",
    year: 2023,
    authors: ["Yueqi Zhang", "Rui Wen", "Xiaobo Wang", "et al."],
    desc: "Comprehensive Chinese-and-English safety benchmark of 11,435 multiple-choice questions across 7 safety dimensions (offensive language, unfairness/bias, physical health, mental health, illegal activities, ethics/morality, privacy). Used as the standard safety leaderboard in Chinese-language LLM evaluations.",
    url: "https://github.com/thu-coai/SafetyBench",
    tags: ["safety", "chinese", "multilingual", "qa", "leaderboard"],
    license: "Apache-2.0"
  },
  {
    title: "SneakyPrompt — Jailbreaking Text-to-Image Generators",
    type: "benchmark",
    org: "North Carolina State University",
    year: 2023,
    authors: ["Yuchen Yang", "Bo Hui", "Haolin Yuan", "Ninghai Pan", "Neil Zhenqiang Gong"],
    desc: "Benchmark and attack framework of 4,728 prompts that elicit not-safe-for-work image generation from text-to-image models (Stable Diffusion, DALL-E 2) via semantic obfuscation. First systematic red-team methodology for T2I safety filters; benchmark dataset is widely used for filter robustness evaluation.",
    url: "https://github.com/Yuchen413/text2image_safety",
    tags: ["text-to-image", "jailbreak", "safety filter", "nsfw", "red team"],
    license: "MIT"
  },
  {
    title: "ToolEmu — Identifying Risks of LLM Agents with an LLM Emulator",
    type: "benchmark",
    org: "Cornell University",
    year: 2023,
    authors: ["Kevin Ruan", "Parthasarathy Ravi", "Adrian V. Dalca", "et al."],
    desc: "Benchmark and emulator framework for evaluating risks of LLM agents that use external tools; 50 scenarios across 6 risk categories (harms to user, agent, third parties, environment, helper-AI, cybersecurity) with tool-execution simulated by an LLM. Computationally lightweight alternative to live-tool benchmarks.",
    url: "https://github.com/ryoungj/toolemu",
    tags: ["agent", "tools", "emulator", "risk", "evaluation"],
    license: "MIT"
  },
  {
    title: "BIG-bench — Beyond the Imitation Game Benchmark",
    type: "benchmark",
    org: "Google Research",
    year: 2022,
    authors: ["Aarohi Srivastava", "Abhinav Rastogi", "Abhishek Rao", "et al."],
    desc: "Collaborative benchmark of 200+ diverse tasks contributed by 450+ authors across 132 institutions, designed to probe capabilities beyond those measured by standard LLM benchmarks. Tasks span linguistics, child development, mathematics, common-sense reasoning, and human-like behavior; canonical pre-ChatGPT capability evaluation set.",
    url: "https://github.com/google/BIG-bench",
    tags: ["evaluation", "diverse tasks", "capabilities", "collaborative"],
    license: "Apache-2.0"
  },
  {
    title: "HELM — Holistic Evaluation of Language Models",
    type: "benchmark",
    org: "Stanford CRFM",
    year: 2022,
    authors: ["Percy Liang", "Rishi Bommasani", "Tony Lee", "et al."],
    desc: "Holistic Evaluation of Language Models framework standardizing evaluation across 42 scenarios and 50+ metrics (accuracy, calibration, robustness, fairness, bias, toxicity, efficiency). HELM provides reproducible leaderboards and is widely cited as the canonical LLM evaluation harness for academic and industry comparisons.",
    url: "https://crfm.stanford.edu/helm/",
    tags: ["evaluation", "holistic", "leaderboard", "metrics", "fairness"],
    license: "Apache-2.0"
  },
  {
    title: "BBQ — Bias Benchmark for QA",
    type: "benchmark",
    org: "NYU / University of Utah",
    year: 2021,
    authors: ["Alicia Parrish", "Angelica Chen", "Nikita Nangia", "Samuel R. Bowman"],
    desc: "Question-answering benchmark of 58,492 examples probing social bias across 11 protected classes (age, disability, gender identity, race, religion, sexual orientation, etc.). Measures model bias via accuracy disparity across ambiguous and disambiguated contexts; canonical fairness evaluation set.",
    url: "https://github.com/nyu-mll/bbq",
    tags: ["bias", "fairness", "qa", "social", "protected classes"],
    license: "Apache-2.0"
  },
  {
    title: "TruthfulQA — Measuring How Models Mimic Human Falsehoods",
    type: "benchmark",
    org: "University of Maryland / AI2",
    year: 2021,
    authors: ["Stephanie Lin", "Jacob Hilton", "Owen Evans"],
    desc: "Benchmark of 817 questions across 38 categories designed to elicit imitation of human falsehoods (conspiracy theories, misconceptions, urban legends). Measures whether models can avoid generating false statements when truth conflicts with common misconceptions; canonical truthfulness evaluation set with a paired 'GPT-judge' automated metric.",
    url: "https://github.com/sylinrl/TruthfulQA",
    tags: ["truthfulness", "hallucination", "misconceptions", "qa"],
    license: "Apache-2.0"
  },

  /* ---------- RESEARCH PAPERS ---------- */
  {
    title: "FragFuse: Bypassing Access Control of Large Language Model Agents via Memory-Based Query Fragmentation and Fusion",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Zixin Rao", "Wentian Zhu", "Chan Aristella Lu", "Zhaorun Chen", "et al."],
    desc: "FragFuse: the first attack that enables unprivileged users to bypass agent access control by exploiting the temporal channel of long-term memory — prohibited content is fragmented across interactions, stored in benign-appearing form, and later reconstructed via memory retrieval without appearing in the final query. Three stages (rejection-responsive fragment identification, marker-carrier injection, retrieve-and-fuse). Across four agent settings and three state-of-the-art access-control mechanisms, achieves 86.3% average bypass success and 41.1% end-to-end harmful task success with only 4.4% task-success degradation.",
    url: "https://arxiv.org/abs/2606.15609",
    tags: ["memory poisoning", "access control bypass", "fragfuse", "long-term memory", "agent security"]
  },
  {
    title: "MemVenom: Triggered Poisoning of Multimodal Memories in Web Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Yv Zhang", "Hao Sun", "Hao Fang", "Kuofeng Gao", "et al."],
    desc: "MemVenom: a black-box attack framework that poisons graph-structured external memory in web agents with coordinated text-image evidence via a two-stage design — trigger-conditioned retrieval attack (high-probability malicious memory recall) and post-retrieval attack induction via adversarial perturbations and stealthy OCR injection. Achieves up to 99.15% end-to-end attack success on GPT-5-family web agents across multiple frameworks and vision-language models, while transferring across architectures and scales.",
    url: "https://arxiv.org/abs/2606.10742",
    tags: ["memory poisoning", "multimodal", "memvenom", "web agent", "graph memory"]
  },
  {
    title: "From Untrusted Input to Trusted Memory: A Systematic Study of Memory Poisoning Attacks in LLM Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Pritam Dash", "Tongyu Ge", "Aditi Jain", "Tanmay Shah", "et al."],
    desc: "Systematic study of memory poisoning in LLM agents identifying four memory write channels and nine structural vulnerabilities in model capabilities, system prompt design, and agent architecture, organized into a taxonomy of six attack classes. Introduces MPBench for evaluating memory poisoning attacks and shows that agents designed to write/retrieve memory more aggressively are more exploitable; existing prompt-injection defenses fail to cover memory poisoning.",
    url: "https://arxiv.org/abs/2606.04329",
    tags: ["memory poisoning", "taxonomy", "mpbench", "agent memory", "systematic study"]
  },
  {
    title: "Persona Attack: Incremental Memory Injection Jailbreak Attack against Large Language Models",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Junyoung Park", "Seongyong Ju", "Sunghwan Park", "Jaewoo Lee"],
    desc: "Persona Attack: a memory-injection jailbreak that manipulates the model's context window through incremental injections across a multi-turn conversation. Experiments on widely-used LLMs show that as injections accumulate in memory, models increasingly prioritize these instructions over internal safety alignment; attack success rate varies with the model's memory implementation and instruction combinations, reaching 95% under specific configurations.",
    url: "https://arxiv.org/abs/2606.00150",
    tags: ["memory injection", "jailbreak", "persona attack", "multi-turn", "incremental"]
  },
  {
    title: "Hijacking Agent Memory: Stealthy Trojan Attacks Through Conversational Interaction",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Hongtao Wang", "Se Yang", "Yu Chen", "Puzhuo Liu"],
    desc: "MemPoison: a memory poisoning attack that bypasses selective memory mechanisms in LLM agents by injecting triggerable backdoors into long-term memory through dialogue. Three key components: semantic relational bridge (binds trigger+payload so they co-extract), entity masquerading (triggers mimic named entities to resist rewriting), and joint embedding optimization (forms tight cluster in embedding space, isolated from benign). Achieves ASR up to 0.95 across agent domains and memory mechanisms; multiple defenses shown fundamentally limited.",
    url: "https://arxiv.org/abs/2605.29960",
    tags: ["memory poisoning", "mempoison", "trojan", "selective memory", "embedding"]
  },
  {
    title: "Plant, Persist, Trigger: Sleeper Attack on Large Language Model Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Yongxiang Li", "Moxin Li", "Zhixin Ma", "Fengbin Zhu", "et al."],
    desc: "Formalizes 'Sleeper Attack': adversarial content persists in agent state (session context, memory, reusable skills), remains dormant across interactions, and activates on a benign user query. Constructs a 1,896-instance benchmark covering six real-world harmful outcomes, three attack strategies, and three state targets. Evaluation on seven open/closed-source LLMs shows state-of-the-art agents remain vulnerable even when they achieve low single-interaction attack success rates.",
    url: "https://arxiv.org/abs/2605.28201",
    tags: ["sleeper attack", "persistent backdoor", "agent state", "benchmark", "dormant"]
  },
  {
    title: "MemMorph: Tool Hijacking in LLM Agents via Memory Poisoning",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Xuanye Zhang", "Yongsen Zheng", "Zhuqin Xu", "Kaiyu Zhou", "et al."],
    desc: "MemMorph: the first attack that biases LLM-agent tool selection by poisoning long-term memory rather than tool metadata, injecting a small number of crafted records disguised as technical facts, incident reports, and operational policies. Across 3 benchmarks, 10 agent backbones, and 3 memory-module implementations, achieves up to 85.9% ASR with only three injected records, outperforming the strongest baseline by 25% while retaining potency under three representative defenses.",
    url: "https://arxiv.org/abs/2605.26154",
    tags: ["memory poisoning", "tool hijacking", "memmorph", "long-term memory", "tool selection"]
  },
  {
    title: "MemAudit: Post-hoc Auditing of Poisoned Agent Memory via Causal Attribution and Structural Anomaly Detection",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Zhewen Tan", "Yilun Yao", "Huiyan Jin", "Wenhan Yu", "et al."],
    desc: "MemAudit: a post-hoc causal memory auditing framework combining (1) a counterfactual memory influence score measuring each memory's causal contribution to harmful outputs, and (2) a memory consistency graph identifying structurally anomalous memories. Evaluated against the MINJA query-only memory injection attack; reduces QA attack success from 70% to 0% and RAP attack success from 83.3% to 0% under realistic post-hoc auditing scenarios.",
    url: "https://arxiv.org/abs/2605.23723",
    tags: ["memory poisoning", "memaudit", "post-hoc auditing", "causal attribution", "anomaly detection"]
  },
  {
    title: "Remembering More, Risking More: Longitudinal Safety Risks in Memory-Equipped LLM Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "Technical University of Munich",
    year: 2026,
    authors: ["Ahmad Al-Tawaha", "Shangding Gu", "Peizhi Niu", "Ruoxi Jia", "et al."],
    desc: "Studies 'temporal memory contamination' — how memory accumulated during earlier tasks affects safety on later, unrelated ones in memory-equipped LLM agents. Introduces a trigger-probe protocol with NullMemory counterfactual baseline, applied across three deployment scenarios, eight memory architectures, and Claw-like AI agents (OpenClaw). Memory-induced violation rates show a robust upward trend with exposure length, and the risk is detectable from retrieval state before generation — arguing for treating memory safety as a longitudinal property.",
    url: "https://arxiv.org/abs/2605.17830",
    tags: ["memory safety", "temporal contamination", "longitudinal", "trigger-probe", "openclaw"]
  },
  {
    title: "Hidden in Memory: Sleeper Memory Poisoning in LLM Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "CISPA Helmholtz Center for Information Security",
    year: 2026,
    authors: ["Sidharth Pulipaka", "Stanislau Hlebik", "Leonidas Raghav", "Sahar Abdelnabi", "et al."],
    desc: "Proposes 'sleeper memory poisoning': an adversary manipulates external context (document, webpage, repository) to cause an assistant to store a fabricated user memory that remains dormant and re-emerges across multiple later conversations. Evaluates the full pipeline (write, retrieve, use) across stateful LLM assistants: poisoned memories were added up to 99.8% on GPT-5.5 and 95% on Kimi-K2.6, and among successful retrievals cause attacker-intended agentic actions in 60-89% of evaluations.",
    url: "https://arxiv.org/abs/2605.15338",
    tags: ["sleeper memory poisoning", "persistent memory", "dormant attack", "stateful assistant", "cross-session"]
  },
  {
    title: "The Misattribution Gap: When Memory Poisoning Looks Like Model Failure in Agentic AI Systems",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Tanzim Ahad", "Ismail Hossain", "Md Jahangir Alam", "Sai Puppala", "et al."],
    desc: "Identifies the 'Misattribution Gap' where memory-layer attacks produce behaviors indistinguishable from model failure, leading defenders to apply wrong remediation. Formalizes Semantic Norm Drift (SND) where policy-formatted documents enter a shared vector store and reappear as trusted system context after provenance is lost via a Trust Laundering Chain. Across 64 documented failures, attribution systems blamed the model; four safety classifiers produced zero detections across 510 checkpoints. Proposes Counterfactual Composition Testing (87.5% accuracy, 0 FPs) and Memory-Persistent Information-Flow Control (blocks 97% of attacks).",
    url: "https://arxiv.org/abs/2605.22842",
    tags: ["misattribution gap", "semantic norm drift", "trust laundering", "information flow control", "multi-agent"]
  },
  {
    title: "ShadowMerge: A Novel Poisoning Attack on Graph-Based Agent Memory via Relation-Channel Conflicts",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Yang Luo", "Zifeng Kang", "Tiantian Ji", "Xinran Liu", "et al."],
    desc: "SHADOWMERGE: a poisoning attack against graph-based agent memory exploiting relation-channel conflicts — a poisoned relation shares the same query-activated anchor and canonicalized relation channel as benign evidence while carrying a conflicting value. Pipeline AIR converts the conflict into an ordinary interaction extractable/mergeable/retrievable by graph-memory systems. On Mem0 + PubMedQA/WebShop/ToolEmu achieves 93.8% average ASR, improving best baseline by 50.3 absolute points with negligible impact on benign tasks.",
    url: "https://arxiv.org/abs/2605.09033",
    tags: ["memory poisoning", "shadowmerge", "graph memory", "relation channel", "mem0"]
  },
  {
    title: "MEMSAD: Gradient-Coupled Anomaly Detection for Memory Poisoning in Retrieval-Augmented Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Ishrith Gowda"],
    desc: "MEMSAD (Semantic Anomaly Detection): a calibration-based defense for memory poisoning in retrieval-augmented agents grounded in a gradient-coupling theorem — under encoder regularity, the anomaly-score gradient and retrieval-objective gradient are provably identical, so any continuous perturbation reducing detection risk necessarily degrades retrieval rank. Provides a certified detection radius and minimax-optimal sample complexity; composite defenses achieve TPR=1.00, FPR=0.00 across all attacks, but synonym substitution evades detection, exposing a gap existing embedding-based defenses cannot close.",
    url: "https://arxiv.org/abs/2605.03482",
    tags: ["memory poisoning", "memsad", "anomaly detection", "retrieval-augmented", "stackelberg"]
  },
  {
    title: "Trojan Hippo: Weaponizing Agent Memory for Data Exfiltration",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "ETH Zurich",
    year: 2026,
    authors: ["Debeshee Das", "Julien Piet", "Darya Kaviani", "Luca Beurer-Kellner", "et al."],
    desc: "Trojan Hippo: a persistent-memory attack where the attacker plants a dormant payload via a single untrusted tool call (e.g., crafted email) that activates only when the user later discusses sensitive topics (finance, health, identity) and exfiltrates high-value personal data. OpenEvolve-based adaptive red-teaming benchmark plus capability-aware security/utility analysis across four memory backends (explicit tool, agentic, RAG, sliding window). Achieves 85-100% ASR against frontier OpenAI/Google models with payloads surviving 100+ benign sessions; four basic-principle defenses reduce ASR to 0-5% but with utility costs.",
    url: "https://arxiv.org/abs/2605.01970",
    tags: ["trojan hippo", "memory attack", "data exfiltration", "persistent memory", "tool call"]
  },
  {
    title: "Visual Inception: Compromising Long-term Planning in Agentic Recommenders via Multimodal Memory Poisoning",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Jiachen Qian"],
    desc: "Visual Inception: a multimodal memory-poisoning attack against Agentic Recommender Systems that injects triggers into user-uploaded images acting as 'sleeper agents' in long-term memory; when retrieved during future planning, poisoned memories hijack the reasoning chain toward adversary-defined goals (e.g., high-margin product promotion) without prompt injection. Achieves ~85% Goal-Hit Rate; CognitiveGuard (dual-process defense with diff-based purification + counterfactual consistency checks) reduces this to ~10% with configurable latency trade-offs.",
    url: "https://arxiv.org/abs/2604.16966",
    tags: ["visual inception", "multimodal memory poisoning", "agentic recommender", "sleeper agent", "cognitiveguard"]
  },
  {
    title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Zehao Lin", "Xixuan Hao", "Renyu Fu", "Shaobo Cui", "et al."],
    desc: "Survey proposing a Memory Lifecycle Framework that organizes attacks, defenses, and cross-phase dependencies along six lifecycle phases (Write, Store, Retrieve, Execute, Share & Propagate, Forget & Rollback) and four security objectives (Integrity, Confidentiality, Availability, Governance). Motivates Verifiable Memory Governance (VMG) — five architectural primitives specifying verifiable mechanisms a long-term-memory system must provide for auditable, recoverable control, arguing that robust LTM security must be anchored in storage-time provenance, versioning, and policy-aware retention from the outset.",
    url: "https://arxiv.org/abs/2604.16548",
    tags: ["survey", "long-term memory", "memory lifecycle", "verifiable memory governance", "taxonomy"]
  },
  {
    title: "MemEvoBench: Benchmarking Safety Risks from Memory Misevolution in LLM Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Weiwei Xie", "Shaoxiong Guo", "Fan Zhang", "Tian Xia", "et al."],
    desc: "MemEvoBench: the first benchmark evaluating long-horizon memory safety in LLM agents against adversarial memory injection, noisy tool outputs, and biased feedback. QA-style tasks across 7 domains and 36 risk types plus workflow-style tasks adapted from 20 Agent-SafetyBench environments with noisy tool returns; uses mixed benign/misleading memory pools in multi-round interactions. Experiments show substantial safety degradation under biased memory updates, and static prompt-based defenses prove insufficient.",
    url: "https://arxiv.org/abs/2604.15774",
    tags: ["memory misevolution", "benchmark", "memevobench", "long-horizon", "agent safety"]
  },
  {
    title: "Poison Once, Exploit Forever: Environment-Injected Memory Poisoning Attacks on Web Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Wei Zou", "Mingwen Dong", "Miguel Romero Calvo", "Shuaichen Chang", "et al."],
    desc: "Environment-injected Trajectory-based Agent Memory Poisoning (eTAMP): the first attack to achieve cross-session, cross-site compromise of web agents without direct memory access — a single contaminated observation (e.g., viewing a manipulated product page) silently poisons memory and activates on future tasks on different websites. On (Visual)WebArena reaches up to 32.5% ASR on GPT-5-mini, 23.4% on GPT-5.2; introduces 'Frustration Exploitation' where agents under environmental stress become up to 8x more susceptible.",
    url: "https://arxiv.org/abs/2604.02623",
    tags: ["memory poisoning", "etamp", "web agent", "cross-session", "environment-injected"]
  },
  {
    title: "No Attacker Needed: Unintentional Cross-User Contamination in Shared-State LLM Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Tiankai Yang", "Jiate Li", "Yi Nian", "Shen Dong", "et al."],
    desc: "Formalizes unintentional cross-user contamination (UCC): a failure mode in shared-state LLM agents where information locally valid for one user silently degrades another user's outcome when the agent reapplies it without scope. Controlled evaluation across two shared-state mechanisms shows benign interactions alone produce 57-71% contamination rates under raw shared state; write-time sanitization helps when state is conversational but leaves substantial residual risk when state includes executable artifacts (often manifesting as silent wrong answers).",
    url: "https://arxiv.org/abs/2604.01350",
    tags: ["cross-user contamination", "shared state", "unintentional", "benign interaction", "multi-user"]
  },
  {
    title: "Zombie Agents: Persistent Control of Self-Evolving LLM Agents via Self-Reinforcing Injections",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "National University of Singapore",
    year: 2026,
    authors: ["Xianglin Yang", "Yufei He", "Shuo Ji", "Bryan Hooi", "et al."],
    desc: "Formalizes 'Zombie Agents' — a persistent attack where untrusted external content observed during a benign session is stored as long-term memory and later treated as instruction by self-evolving LLM agents. Black-box framework uses only indirect exposure via attacker-controlled web content; two phases (infection: agent reads poisoned source while completing benign task and writes payload via normal update process; trigger: payload is retrieved/carried forward and causes unauthorized tool behavior). Mechanism-specific persistence strategies resist truncation and relevance filtering across sliding-window and retrieval-augmented memory.",
    url: "https://arxiv.org/abs/2602.15654",
    tags: ["zombie agents", "persistent control", "self-evolving", "memory poisoning", "self-reinforcing"]
  },
  {
    title: "Visual Memory Injection Attacks for Multi-Turn Conversations",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "University of Tübingen",
    year: 2026,
    authors: ["Christian Schlarmann", "Matthias Hein"],
    desc: "Visual Memory Injection (VMI) attack on large vision-language models: a manipulated image uploaded to the web is downloaded by a benign user and used as LVLM input. The image triggers nominal behavior on normal prompts but outputs a prescribed target message when a triggering prompt arrives, enabling adversarial marketing or political persuasion. VMI remains effective even after long multi-turn conversations. Demonstrated on several open-weight LVLMs; code released at github.com/chs20/visual-memory-injection.",
    url: "https://arxiv.org/abs/2602.15927",
    tags: ["visual memory injection", "multi-turn", "lvlm", "adversarial image", "perturbation"]
  },
  {
    title: "ER-MIA: Black-Box Adversarial Memory Injection Attacks on Long-Term Memory-Augmented Large Language Models",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "Texas A&M University",
    year: 2026,
    authors: ["Mitchell Piehl", "Zhaohan Xi", "Zuobin Xiong", "Pan He", "et al."],
    desc: "ER-MIA: the first systematic study of black-box adversarial memory injection attacks targeting the similarity-based retrieval mechanism in long-term-memory-augmented LLMs. Formalizes two realistic attack settings (content-based and question-targeted) with composable attack primitives and ensemble attacks achieving high success rates under minimal attacker assumptions. Experiments across multiple LLMs and long-term memory systems demonstrate similarity-based retrieval is a fundamental, system-level vulnerability persisting across memory designs and application scenarios.",
    url: "https://arxiv.org/abs/2602.15344",
    tags: ["er-mia", "memory injection", "black-box", "long-term memory", "similarity retrieval"]
  },
  {
    title: "BackdoorAgent: A Unified Framework for Backdoor Attacks on LLM-based Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2026,
    authors: ["Yunhao Feng", "Yige Li", "Yutao Wu", "Yingshui Tan", "et al."],
    desc: "BackdoorAgent: a modular stage-aware framework providing a unified agent-centric view of backdoor threats in LLM agents, structuring the attack surface into three functional stages (planning, memory, tool-use) and instrumenting agent execution to analyze trigger activation and propagation. Standardized benchmark spans four representative applications (Agent QA, Agent Code, Agent Web, Agent Drive) in language-only and multimodal settings. Empirical analysis shows triggers implanted at a single stage persist across multiple steps: with GPT-based backbone, 43.58% planning, 77.97% memory, and 60.28% tool-stage attack persistence.",
    url: "https://arxiv.org/abs/2601.04566",
    tags: ["backdooragent", "backdoor attack", "unified framework", "planning memory tool", "multi-stage"]
  },
  {
    title: "Real AI Agents with Fake Memories: Fatal Context Manipulation Attacks on Web3 Agents",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "Princeton University",
    year: 2025,
    authors: ["Atharv Singh Patlan", "Peiyao Sheng", "S. Ashwin Hebbar", "Prateek Mittal", "et al."],
    desc: "Introduces context manipulation — a comprehensive attack vector against Web3 AI agents exploiting unprotected context surfaces (input channels, memory modules, external data feeds) that expands traditional prompt injection into persistent memory injection. Uses ElizaOS as a representative decentralized agent framework; introduces CrAIBench (150+ blockchain tasks, 500+ attack test cases). Shows AI models are significantly more vulnerable to memory injection than prompt injection; prompt-injection defenses provide limited protection when stored context is corrupted, while fine-tuning-based defenses substantially reduce ASR.",
    url: "https://arxiv.org/abs/2503.16248",
    tags: ["web3 agent", "context manipulation", "memory injection", "craibench", "elizaos"]
  },
  {
    title: "Memory Injection Attacks on LLM Agents via Query-Only Interaction",
    type: "paper",
    topic: "Agent Memory Attacks",
    org: "UC Santa Barbara",
    year: 2025,
    authors: ["Shen Dong", "Shaochen Xu", "Pengfei He", "Yige Li", "et al."],
    desc: "MINJA (Memory INJection Attack): a query-only attack that injects malicious records into an agent's memory bank without assuming direct memory modification — the attacker only interacts via queries and output observations. Uses bridging steps linking victim queries to malicious reasoning steps and an indication prompt with progressive shortening so the malicious record is easily retrieved when processing later victim queries. Extensive experiments across diverse agents demonstrate effectiveness with minimal execution requirements.",
    url: "https://arxiv.org/abs/2503.03704",
    tags: ["memory injection", "minja", "query-only", "agent memory", "bridging steps"]
  },
  {
    title: "A-MemGuard: A Proactive Defense Framework for LLM-Based Agent Memory",
    type: "paper",
    topic: "Agent Memory Attacks",
    year: 2025,
    authors: ["Qianshan Wei", "Tengchao Yang", "Yaochen Wang", "Xinfeng Li", "et al."],
    desc: "A-MemGuard (Agent-Memory Guard): the first proactive defense framework for LLM agent memory combining (1) consensus-based validation that detects anomalies by comparing reasoning paths derived from multiple related memories, and (2) a dual-memory structure where detected failures are distilled into 'lessons' stored separately and consulted before future actions, breaking self-reinforcing error cycles. Without modifying the agent's core architecture, cuts attack success rates by over 95% with minimal utility cost. Code at github.com/TangciuYueng/AMemGuard.",
    url: "https://arxiv.org/abs/2510.02373",
    tags: ["memory defense", "a-memguard", "proactive defense", "consensus validation", "dual memory"]
  },
  {
    title: "SupplyChain Poisoning LLM Coding Agent Skill Ecosystems",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2026,
    desc: "Introduces Document-Driven Implicit Payload Execution (DDIPE), a supply-chain attack that embeds malicious logic in code examples and configuration templates within agent skill documentation; an LLM-driven pipeline generates 1,070 adversarial skills across 15 MITRE ATT&CK categories, achieving 11.6-33.5% bypass rates and leading to 4 confirmed vendor vulnerabilities.",
    url: "https://arxiv.org/abs/2604.03081"
  },
  {
    title: "MetaBackdoor: Exploiting Positional Encoding as a Backdoor Attack Surface in LLMs",
    type: "paper",
    topic: "Backdoor & Poisoning",
    org: "Microsoft Research",
    year: 2026,
    authors: ["Rui Wen", "Mark Russinovich", "Andrew Paverd", "Jun Sakuma"],
    desc: "Demonstrates a class of LLM backdoors that use length-correlated positional structure as the trigger without modifying textual content; a simple length-based positional trigger can induce disclosure of sensitive internal information (including system prompts) and supports self-activation in normal multi-turn interaction, expanding the LLM backdoor threat model beyond content-based triggers.",
    url: "https://arxiv.org/abs/2605.15172",
    tags: ["backdoor", "positional encoding", "trigger", "supply chain"]
  },
  {
    title: "The Trigger in the Haystack: Extracting and Reconstructing LLM Backdoor Triggers",
    type: "paper",
    topic: "Backdoor & Poisoning",
    org: "Microsoft Research",
    year: 2026,
    authors: ["Blake Bullwinkel", "Giorgio Severi", "Keegan Hines", "Amanda Minnich"],
    desc: "Builds a practical scanner for sleeper-agent-style backdoors that combines memory extraction (poisoned examples are memorized and leak) with distinctive output-distribution and attention-head patterns when triggers are present; recovers working triggers across multiple backdoor scenarios and fine-tuning methods without prior knowledge of the trigger or target behavior.",
    url: "https://arxiv.org/abs/2602.03085",
    tags: ["backdoor", "sleeper agent", "detection", "scanning"]
  },
  {
    title: "BadSkill: Backdoor Attacks on Agent Skills via Model-in-Skill Poisoning",
    type: "paper",
    topic: "Backdoor & Poisoning",
    org: "Illinois Institute of Technology",
    year: 2026,
    authors: ["Guiyao Tie", "Jiawen Shi", "Pan Zhou", "Lichao Sun"],
    desc: "Targets the model-in-skill supply-chain surface where third-party agent skills bundle backdoor-fine-tuned classifiers that activate only when routine skill parameters satisfy attacker-chosen semantic triggers; achieves up to 99.5% ASR across eight model architectures on OpenClaw-style skills, with a 3% poison rate already yielding 91.7% ASR.",
    url: "https://arxiv.org/abs/2604.09378",
    tags: ["backdoor", "agent skill", "supply chain", "poisoning"]
  },
  {
    title: "SkillTrojan: Backdoor Attacks on Skill-Based Agent Systems",
    type: "paper",
    topic: "Backdoor & Poisoning",
    org: "Shanghai Jiao Tong University",
    year: 2026,
    authors: ["Yunhao Feng", "Yifan Ding", "Yingshui Tan", "Boren Zheng"],
    desc: "Embeds malicious logic inside otherwise plausible agent skills and partitions an encrypted payload across multiple benign-looking skill invocations that activate under a predefined trigger; releases 3000+ curated backdoored skills and attains up to 97.2% ASR while maintaining 89.3% clean accuracy on EHR SQL with GPT-5.2.",
    url: "https://arxiv.org/abs/2604.06811",
    tags: ["backdoor", "skill composition", "payload partitioning", "agent attack"]
  },
  {
    title: "Sleeper Cell: Injecting Latent Malice Temporal Backdoors into Tool-Using LLMs",
    type: "paper",
    topic: "Backdoor & Poisoning",
    org: "Northeastern University",
    year: 2026,
    authors: ["Bhanu Pallakonda", "Mikkel Hindsbo", "Sina Ehsani", "Prag Mishra"],
    desc: "Uses SFT with LoRA to implant a sleeper-agent capability followed by GRPO with a specialized reward to enforce trigger specificity (e.g., Year 2026) and operational concealment, where the model emits benign text after destructive tool actions; poisoned models maintain state-of-the-art benign performance, motivating their silent adoption.",
    url: "https://arxiv.org/abs/2603.03371",
    tags: ["backdoor", "peft", "grpo", "tool use"]
  },
  {
    title: "Inference-Time Backdoors via Chat Templates: From LLM Supply Chains to Agentic System Compromise",
    type: "paper",
    topic: "Backdoor & Poisoning",
    org: "Bar-Ilan University",
    year: 2026,
    authors: ["Ariel Fogel", "Omer Hofman", "Eilon Cohen", "Roman Vainshtein"],
    desc: "Demonstrates that Jinja2 chat templates, which occupy a privileged position between user input and model processing, can implant inference-time backdoors without modifying weights, training data, or runtime infrastructure; on the agent level the template backdoor hijacks tool use across 3,868 episodes bypassing every tested injection defense, and evades all security scans on the largest open model distribution platform.",
    url: "https://arxiv.org/abs/2602.04653",
    tags: ["backdoor", "chat template", "supply chain", "jinja"]
  },
  {
    title: "Malice in Agentland Down the Rabbit Hole of Backdoors",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2025,
    desc: "Formalizes 3 threat models for backdoors in the agentic AI supply chain—direct finetuning-data poisoning, pre-backdoored base models, and a novel environment-poisoning vector—and demonstrates that poisoning a small number of demonstrations can embed backdoors causing confidential user-data leakage with >80% success across two benchmarks.",
    url: "https://arxiv.org/abs/2510.05159"
  },
  {
    title: "Detecting Sleeper Agents in Large Language Models via Semantic Drift Analysis",
    type: "paper",
    topic: "Backdoor & Poisoning",
    org: "Cisco Research",
    year: 2025,
    authors: ["Shahin Zanbaghi", "Ryan Rostampour", "Farhan Abid", "Salim Al Jarmakani"],
    desc: "Combines Sentence-BERT semantic drift analysis with canary baseline comparison to detect backdoored sleeper-agent LLMs in real time; on the official Cadenza-Labs dolphin-llama3-8B sleeper agent achieves 92.5% accuracy with 100% precision and 85% recall at sub-second per-query latency, without modifying the model.",
    url: "https://arxiv.org/abs/2511.15992",
    tags: ["backdoor", "sleeper agent", "detection", "semantic drift"]
  },
  {
    title: "AgentPoison RedTeaming LLM Agents Poisoning Memory",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Red-teams agents by poisoning their memory or knowledge base (AgentPoison). A landmark OSAA memory-poisoning attack.",
    url: "https://arxiv.org/abs/2407.12784"
  },
  {
    title: "BadAgent Inserting Activating Backdoor Attacks LLM Agents",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Inserts and triggers backdoors in LLM agents (BadAgent). Demonstrates agent-level backdoors for OSAA.",
    url: "https://arxiv.org/abs/2406.03007"
  },
  {
    title: "Survey Backdoor Attacks Defenses Large Language Models",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Surveys the agent backdoors and poisoning literature. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://arxiv.org/abs/2406.06852"
  },
  {
    title: "Watch Out Agents Backdoor Threats LLM Based Agents",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Takes the first systematic look at backdoor attacks on LLM-based agents, formulating a general framework and demonstrating that agent backdoors can manipulate final outputs or only intermediate reasoning steps, with triggers in user queries or intermediate observations—and showing current textual backdoor defenses do not mitigate them.",
    url: "https://arxiv.org/abs/2402.11208"
  },
  {
    title: "Sleeper Agents Training Deceptive LLMs Safety Training",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Shows backdoored 'sleeper' models survive safety training. Demonstrates a persistent deceptive-agent threat for OSAA.",
    url: "https://arxiv.org/abs/2401.05566"
  },
  {
    title: "AgentNoiseBench Robustness ToolUsing LLM Agents Noisy Conditions",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "Introduces AgentNoiseBench, a framework that systematically evaluates robustness of tool-using LLM agents under realistic noisy conditions, characterizing biases and uncertainties that cause benchmark vs. deployment gaps in agent behavior.",
    url: "https://arxiv.org/abs/2602.11348"
  },
  {
    title: "Evaluating Regulating Agentic AI Study of Benchmarks",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "Reviews agentic AI evaluation across the three dimensions of benchmarks, metrics, and governance, analyzing how current frameworks capture reasoning, planning, collaboration, and ethical alignment in single- and multi-agent systems to establish a unified foundation for trustworthy, auditable agents.",
    url: "https://doi.org/10.1016/j.inffus.2026.104444"
  },
  {
    title: "FinVault Benchmarking Financial Agent Safety in Execution Grounded Environments",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "Introduces FinVault, the first execution-grounded security benchmark for financial LLM agents, comprising 31 regulatory case-driven tasks that capture state-changing operational risks in investment analysis and decision-making that prior content-compliance evaluations miss.",
    url: "https://arxiv.org/abs/2601.07853"
  },
  {
    title: "Gate AI: LLM Security Benchmark Evaluation Methodology and Results",
    type: "paper",
    topic: "Benchmarks",
    org: "Independent",
    year: 2026,
    authors: ["Ryle Goehausen", "Marcus Sousa"],
    desc: "Evaluation harness addressing per-dataset threshold tuning and undisclosed operating points in published evaluations of prompt-injection and jailbreak detectors; scores detectors across 16 public benchmarks (12,111 samples) using 5-fold cross-validation with a single global operating point, plus a battery of diagnostics including leave-one-dataset-out CV, random-label control, adversarial validation, and a leakage-premium diagnostic.",
    url: "https://arxiv.org/abs/2606.02959",
    tags: ["benchmark", "detector", "evaluation", "methodology"]
  },
  {
    title: "ExploitBench: A Capability Ladder Benchmark for LLM Cybersecurity Agents",
    type: "paper",
    topic: "Benchmarks",
    org: "Carnegie Mellon University",
    year: 2026,
    authors: ["Seunghyun Lee", "David Brumley"],
    desc: "Capability-graded benchmark that decomposes exploitation into 16 measurable flags from coverage and crash through sandbox primitives, arbitrary read/write, control-flow hijack, to arbitrary code execution, each verified by a deterministic oracle with per-run randomized challenge-response; instantiated on 41 V8 bugs to measure model-environment capability with and without adaptive coaching.",
    url: "https://arxiv.org/abs/2605.14153",
    tags: ["benchmark", "exploitation", "capability ladder", "v8"]
  },
  {
    title: "RUBAS: Rubric-Based Reinforcement Learning for Agent Safety",
    type: "paper",
    topic: "Benchmarks",
    org: "Fudan University",
    year: 2026,
    authors: ["Xian Qi Loye", "Qinglin Su", "Zhexin Zhang", "Shiyao Cui"],
    desc: "Decomposes agent behavior into four dimensions (tool-use safety, argument safety, response safety, helpfulness) to provide fine-grained interpretable rewards over complete trajectories for reinforcement learning; improves safety over standard alignment baselines, reduces tool-grounded hallucinations, and maintains competitive utility across multiple agent safety benchmarks.",
    url: "https://arxiv.org/abs/2606.04051",
    tags: ["benchmark", "reinforcement learning", "rubric", "tool safety"]
  },
  {
    title: "TRACES: Proactive Safety Auditing for Multi-Turn LLM Agents via Trajectory-State Modeling",
    type: "paper",
    topic: "Benchmarks",
    org: "Huazhong University of Science and Technology",
    year: 2026,
    authors: ["Jiaqian Li", "Yanshu Li", "Boxuan Zhang", "Ruixiang Tang"],
    desc: "Representation-based proactive auditor that learns prefix-level trajectory risk states from an observer LLM's hidden representations, inducing latent mechanism features whose temporal evolution estimates whether a partial trajectory is drifting toward unsafe behavior; trained with weak trajectory-level supervision while producing dense prefix-level risk estimates that can also help train safer agents.",
    url: "https://arxiv.org/abs/2605.27690",
    tags: ["benchmark", "proactive auditing", "trajectory", "multi-turn"]
  },
  {
    title: "Owner-Harm: A Missing Threat Model for AI Agent Safety",
    type: "paper",
    topic: "Benchmarks",
    org: "Independent",
    year: 2026,
    authors: ["Dongcheng Zhang", "Yiqing Jiang"],
    desc: "Formalizes an eight-category threat model for agents harming their own deployers (illustrated by Slack AI, Microsoft 365 Copilot, and Meta agent incidents), and quantifies the defense gap: a compositional safety system achieving 100% TPR on AgentHarm reaches only 14.8% TPR on AgentDojo injection tasks; a post-hoc 300-scenario owner-harm benchmark raises TPR to 85.3% with a deterministic post-audit verifier.",
    url: "https://arxiv.org/abs/2604.18658",
    tags: ["benchmark", "threat model", "owner harm", "agent safety"]
  },
  {
    title: "Taxonomy and Consistency Analysis of Safety Benchmarks for AI Agents",
    type: "paper",
    topic: "Benchmarks",
    org: "Concordia University",
    year: 2026,
    authors: ["Miles Q. Li", "Benjamin C. M. Fung", "Boyang Li", "Heba Ismail"],
    desc: "First systematic analysis of 40 behavioral agent-safety benchmarks (2023-2026) plus 5 adjacent artifacts using a six-axis taxonomy of benchmark evaluation methodology; finds that benchmark choice can yield contradictory safety conclusions, coverage counts often overstate evaluation depth, and environment fidelity systematically shapes reported safety, with the field disproportionately testing a few model families.",
    url: "https://arxiv.org/abs/2605.16282",
    tags: ["benchmark", "taxonomy", "consistency", "agent safety"]
  },
  {
    title: "OS HARM Benchmark Safety Computer Use Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Introduces OS-Harm, a benchmark built on OSWorld that measures safety of computer-use agents across 150 tasks spanning deliberate user misuse, prompt injection, and model misbehavior, providing the first standardized evaluation of GUI-controlling LLM agent safety.",
    url: "https://arxiv.org/abs/2506.14866"
  },
  {
    title: "RAS Eval Comprehensive Benchmark LLM Agent Security RealWorld",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Presents RAS-Eval, a security benchmark of 80 test cases and 3,802 attack tasks mapped to 11 CWE categories, implemented in JSON, LangGraph, and MCP tool formats; evaluation of 6 LLMs shows attacks cut agent task completion substantially and reveal systematic weaknesses in real-world tool execution.",
    url: "https://arxiv.org/abs/2506.15253"
  },
  {
    title: "Benchmarking the Robustness of Agentic Systems to Adversarially Induced",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Proposes a taxonomy of agentic-system harms and the BAD-ACTS benchmark of 188 high-quality harmful-action examples across 4 agent implementations, enabling systematic study of how LLM-based agents can be coerced into performing harmful actions under attack.",
    url: "https://arxiv.org/abs/2508.16481"
  },
  {
    title: "Breaking Agent Backbones Evaluating the Security of Backbone LLMs",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Introduces 'threat snapshots' that isolate specific states in an agent's execution flow where backbone-LLM vulnerabilities manifest, enabling systematic comparison of how backbone LLM choice affects agent security across 100 models independent of complete agent implementations.",
    url: "https://arxiv.org/abs/2510.22620"
  },
  {
    title: "CTRL ALT DECEIT Sabotage Evaluations for Automated AI R",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Presents CTRL-ALT-DECEIT, a sabotage evaluation suite that measures whether AI agents performing ML R&D can covertly undermine ML models, sandbag performance, and subvert oversight mechanisms, providing the first capability evaluation for insider-threat-style sabotage of automated ML engineering.",
    url: "https://arxiv.org/abs/2511.09904"
  },
  {
    title: "Creative Adversarial Testing CAT A Novel Framework for Evaluating",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Introduces the Creative Adversarial Testing (CAT) framework, which evaluates goal-oriented agentic AI systems by analyzing alignment between tasks and overarching objectives through extensive synthetic simulation, addressing a gap in prior efficacy-focused agent evaluations.",
    url: "https://arxiv.org/abs/2509.23006"
  },
  {
    title: "Cybersecurity AI Benchmark CAIBench A Meta Benchmark for Evaluating",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Presents CAIBench, a modular meta-benchmark that evaluates LLMs and agents across offensive and defensive cybersecurity domains through five integrated evaluation categories, exposing the gap between pre-trained cybersecurity knowledge and labor-relevant attack/defense capability.",
    url: "https://arxiv.org/abs/2510.24317"
  },
  {
    title: "Mind the Gap Evaluating Model and Agentic Level Vulnerabilities",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Presents AgentSeer, an observability tool that decomposes agentic executions into action-component graphs; uses cross-model validation on GPT-OSS-20B and Gemini-2.0-flash with HarmBench to quantify the gap between model-level and agent-level jailbreaking risk and automate iterative prompt hardening.",
    url: "https://arxiv.org/abs/2509.04802"
  },
  {
    title: "OpenAgentSafety A Comprehensive Framework for Evaluating Real World AI",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Introduces OpenAgentSafety, a modular framework that evaluates agent behavior across eight risk categories by interacting with real tools (web browsers, code execution, file systems, bash shells, and email) rather than simulated environments or abstract tool abstractions.",
    url: "https://arxiv.org/abs/2507.06134"
  },
  {
    title: "PEAR Planner Executor Agent Robustness Benchmark",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Presents PEAR, a benchmark for evaluating utility and vulnerability of planner-executor multi-agent systems under adversarial manipulation, systematically examining attack surfaces across the widely adopted planner-executor architecture.",
    url: "https://arxiv.org/abs/2510.07505"
  },
  {
    title: "Security Analysis of Agentic AI Communication Protocols A Comparative",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Performs the first empirical comparative security analysis of agent communication protocols CORAL, ACP, and A2A using a 14-point vulnerability taxonomy, finding CORAL has robust architecture but critical SSE gateway authentication/authorization flaws while ACP's optional JWS enforcement causes high-impact integrity/confidentiality flaws; recommends a hybrid approach.",
    url: "https://arxiv.org/abs/2511.03841"
  },
  {
    title: "Towards Effective Offensive Security LLM Agents Hyperparameter Tuning LLM",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Presents CTFJudge (LLM-as-a-judge for CTF trajectory analysis), the CTF Competency Index (CCI) metric for partial correctness, the CTFTiny 50-challenge benchmark, and a study of how temperature/top-p/max-token hyperparameters influence offensive LLM agent performance in CTF tasks across binary exploitation, web, RE, forensics, and crypto.",
    url: "https://arxiv.org/abs/2508.05674"
  },
  {
    title: "EU-Agent-Bench: Measuring Illegal Behavior of LLM Agents Under EU Law",
    type: "paper",
    topic: "Benchmarks",
    org: "Humboldt University of Berlin",
    year: 2025,
    authors: ["Ilija Lichkovski", "Alexander Müller", "Mariam Ibrahim", "Tiwai Mhundwa"],
    desc: "Verifiable human-curated benchmark evaluating an agent's alignment with EU legal norms across data protection, bias/discrimination, and scientific integrity scenarios where benign user inputs could lead to unlawful actions; compares model function calls against a rubric exhaustively supported by EU legislature citations, and investigates the compliance effect of providing legislative excerpts in the system prompt.",
    url: "https://arxiv.org/abs/2510.21524",
    tags: ["benchmark", "eu law", "compliance", "legal"]
  },
  {
    title: "Agent SafetyBench Evaluating Safety LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Introduces Agent-SafetyBench, a benchmark of 349 interaction environments and 2,000 test cases covering 8 safety risk categories and 10 failure modes for LLM agents; evaluation of 16 agents shows none exceeds a 60% safety score, with lack of robustness and risk awareness identified as the two core defects.",
    url: "https://arxiv.org/abs/2412.14470"
  },
  {
    title: "InjecAgent Benchmark Indirect Prompt Injection Tool Integrated",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for indirect prompt injection against tool-integrated agents. A canonical OSAA benchmark for the highest-impact agent attack.",
    url: "https://arxiv.org/abs/2403.02691"
  },
  {
    title: "JAWS BENCH Security Assessment AI Code Agents Jailbreaking",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Presents JAWS-Bench (Jailbreaks Across WorkSpaces), a benchmark that probes code-agent jailbreaks across empty, single-file, and multi-file workspace regimes, paired with an executable-aware judge that scores compliance, attack success, syntactic correctness, and runtime execution rather than just text refusal.",
    url: "https://arxiv.org/abs/2510.01359"
  },
  {
    title: "JailbreakBench Open Robustness Benchmark Jailbreaking LLMs",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Proposes JailbreakBench, an open-sourced robustness benchmark for jailbreaking LLMs that standardizes attack artifacts, evaluation, and cost reporting, with a curated set of harmful behaviors and submissions repository to make jailbreak evaluation reproducible and comparable.",
    url: "https://arxiv.org/abs/2404.01318"
  },
  {
    title: "ST WebAgentBench Benchmark Safety Trustworthiness Web Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Introduces ST-WebAgentBench, a configurable benchmark of 222 enterprise web-agent tasks each paired with safety/trustworthiness policies, scoring agents along six orthogonal dimensions (e.g., user consent, robustness) beyond raw task completion to enable trustworthy enterprise deployment.",
    url: "https://arxiv.org/abs/2410.06703"
  },
  {
    title: "SafeAgentBench Benchmark Safe Task Planning Embodied LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Presents SafeAgentBench, the first benchmark for safety-aware task planning of embodied LLM agents in interactive simulation, covering diverse hazardous tasks to evaluate whether embodied agents can recognize and refuse unsafe instructions during multi-step planning.",
    url: "https://arxiv.org/abs/2412.13178"
  },
  {
    title: "ToolSword Safety Issues LLMs Tool Learning",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Introduces ToolSword, a framework investigating LLM tool-learning safety across 6 scenarios—malicious queries and jailbreak attacks (input), noisy misdirection and risky cues (execution), harmful feedback and error conflicts (output)—showing even GPT-4 is susceptible across multiple safety-critical tool-learning stages.",
    url: "https://arxiv.org/abs/2402.10753"
  },
  {
    title: "AgentHarm Benchmark Measuring Harmfulness LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark measuring how harmful agent behaviors can be elicited (AgentHarm). Quantifies attacker-achievable harm for OSAA.",
    url: "https://arxiv.org/abs/2410.09024"
  },
  {
    title: "AgentDojo Evaluate Prompt Injection",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A dynamic environment to evaluate prompt-injection attacks and defenses on tool-using agents. A leading OSAA attack/defense harness and benchmark.",
    url: "https://arxiv.org/abs/2406.13352"
  },
  {
    title: "RedCode Risky Code Execution and Generation Benchmark for Code",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Presents RedCode, a benchmark for risky code execution and generation by code agents: RedCode-Exec provides 4,050 risky Python and Bash test cases, and RedCode-Gen evaluates generation of risky code, covering diverse input formats from code snippets to natural text.",
    url: "https://arxiv.org/abs/2411.07781"
  },
  {
    title: "ASB Agent Security Bench",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Formalizes agent attack surfaces such as injection and tool misuse (Agent Security Bench). Enables reproducible OSAA evaluation across attack types.",
    url: "https://arxiv.org/abs/2410.02644"
  },
  {
    title: "PropensityBench Evaluating Latent Safety Risks in Large Language Models",
    type: "paper",
    topic: "Benchmarks",
    desc: "Introduces PropensityBench, an agentic benchmark that evaluates latent safety risks by measuring a model's propensity to pursue harmful actions if empowered (rather than only its capabilities), using an agentic approach to expose blind spots in current safety evaluations.",
    url: "https://scholar.google.com/scholar?q=PropensityBench%20Evaluating%20Latent%20Safety%20Risks%20in%20Large%20Language%20Models"
  },
  {
    title: "Agent Fence Mapping Security Vulnerabilities Deep Research Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2026,
    desc: "Introduces AgentFence, an architecture-centric security evaluation defining 14 trust-boundary attack classes (planning, memory, retrieval, tool use, delegation) and detecting failures via trace-auditable conversation breaks across 8 agent archetypes; mean security break rate ranges from 0.29 (LangGraph) to 0.51 (AutoGPT), with operational classes like Denial-of-Wallet (0.62) dominating.",
    url: "https://arxiv.org/abs/2602.07652"
  },
  {
    title: "Atomicity Agents TOCTOU Vulnerabilities Browser Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2026,
    desc: "Identifies Time-of-Check-to-Time-of-Use (TOCTOU) vulnerabilities in browser-use agents where dynamic or adversarial web content exploits stale planning assumptions; evaluates 10 popular open-source agents on a benchmark of synthesized and real-world websites, and proposes a lightweight pre-execution validation mitigation that monitors DOM/layout changes.",
    url: "https://arxiv.org/abs/2603.00476"
  },
  {
    title: "WARD: Adversarially Robust Defense of Web Agents Against Prompt Injections",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    org: "FPT AI Center",
    year: 2026,
    authors: ["Tri Cao", "Yulin Chen", "Hieu Cao", "Yibo Li"],
    desc: "Builds a guard model from 177K samples collected from 719 high-traffic URLs plus a dedicated prompt-injection-against-guard dataset, and trains it with A3T, an adaptive adversarial attack training framework with memory-based attacker/guard co-evolution; achieves nearly perfect recall on out-of-distribution benchmarks while maintaining low false positives and no added latency.",
    url: "https://arxiv.org/abs/2605.15030",
    tags: ["web agent", "defense", "guard model", "adversarial training"]
  },
  {
    title: "MUZZLE: Adaptive Agentic Red-Teaming of Web Agents Against Indirect Prompt Injection Attacks",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    org: "Imperva",
    year: 2026,
    authors: ["Georgios Syros", "Evan Rose", "Brian Grinstead", "Christoph Kerschbaumer"],
    desc: "Automated agentic framework that uses the agent's trajectories to identify high-salience injection surfaces and adaptively generate context-aware malicious instructions targeting confidentiality, integrity, and availability, iteratively refining attacks based on failed executions; discovers 44 new attacks on 4 web applications, including 3 cross-application prompt-injection attacks and an agent-tailored phishing scenario.",
    url: "https://arxiv.org/abs/2602.09222",
    tags: ["web agent", "red teaming", "adaptive", "indirect injection"]
  },
  {
    title: "How Vulnerable Are AI Agents to Indirect Prompt Injections? Insights from a Large-Scale Public Competition",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    org: "UK AISI",
    year: 2026,
    authors: ["Mateusz Dziemian", "Maxwell Lin", "Xiaohan Fu", "Micha Nowak"],
    desc: "Reports findings from a public red-teaming competition with 464 participants submitting 272,000 attack attempts against 13 frontier models across tool-calling, coding, and computer-use agent settings, yielding 8,648 successful attacks across 41 scenarios; attack success rates ranged from 0.5% (Claude Opus 4.5) to 8.5% (Gemini 2.5 Pro), with universal strategies transferring across 21 of 41 behaviors.",
    url: "https://arxiv.org/abs/2603.15714",
    tags: ["web agent", "red teaming", "competition", "benchmark"]
  },
  {
    title: "Visual Confused Deputy: Exploiting and Defending Perception Failures in Computer-Using Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    org: "Independent",
    year: 2026,
    authors: ["Xunzhuo Liu", "Bowei He", "Xue Liu", "Andy Luo"],
    desc: "Formalizes the visual confused deputy failure mode where a CUA authorizes actions based on a misperceived screen state due to grounding errors, adversarial screenshots, or TOCTOU races, and proposes a dual-channel contrastive guardrail that independently evaluates the visual click target and the agent's reasoning against deployment-specific knowledge bases.",
    url: "https://arxiv.org/abs/2603.14707",
    tags: ["computer use", "confused deputy", "perception", "toctou"]
  },
  {
    title: "The Blind Spot of Agent Safety: How Benign User Instructions Expose Critical Vulnerabilities in Computer-Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    org: "USC",
    year: 2026,
    authors: ["Xuwei Ding", "Skylar Zhai", "Linxin Song", "Jiate Li"],
    desc: "Introduces OS-BLIND, a 300-task benchmark evaluating CUAs when user instructions are entirely benign and harm arises from task context or execution outcome; finds most CUAs exceed 90% ASR and even Claude 4.5 Sonnet reaches 73.0%, rising to 92.7% in multi-agent systems where decomposed subtasks obscure harmful intent from safety-aligned models.",
    url: "https://arxiv.org/abs/2604.10577",
    tags: ["computer use", "benchmark", "benign instruction", "multi-agent"]
  },
  {
    title: "Preference Redirection via Attention Concentration: An Attack on Computer Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    org: "Saarland University",
    year: 2026,
    authors: ["Dominik Seip", "Matthias Hein"],
    desc: "Introduces PRAC, which manipulates the model's internal preferences by redirecting attention toward a stealthy adversarial patch to manipulate CUA product selection on an online shopping platform; while creation requires white-box access, the attack generalizes to fine-tuned versions of the same model, presenting a threat as multiple companies build CUAs on open weights.",
    url: "https://arxiv.org/abs/2604.08005",
    tags: ["computer use", "attention", "adversarial patch", "vision"]
  },
  {
    title: "A Systematization of Security Vulnerabilities in Computer Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "Provides a systematization of security vulnerabilities in Computer Use Agents, identifying 7 risk classes and 3 in-depth exploit scenarios—clickjacking via visual overlays, indirect prompt injection enabling RCE via chained tool use, and CoT exposure attacks—revealing architectural flaws around input provenance, interface-action binding, and memory/delegation control.",
    url: "https://arxiv.org/abs/2507.05445"
  },
  {
    title: "HackWorld Evaluating Computer Use Agents on Exploiting Web Application",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "Presents HackWorld, the first framework for evaluating computer-use agents' ability to exploit web application vulnerabilities via visual interaction across 36 real-world applications in 11 frameworks and 7 languages, using CTF to test injection, auth bypass, and unsafe input handling; SOTA CUAs show <12% exploitation rates and weak multi-step attack planning.",
    url: "https://arxiv.org/abs/2510.12200"
  },
  {
    title: "SecureWebArena A Holistic Security Evaluation Benchmark for LVLM based",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "Presents SecureWebArena, the first holistic security benchmark for LVLM-based web agents, comprising 6 simulated web environments, 2,970 trajectories, 6 user-level and environment-level attack vectors, and a multi-layered evaluation protocol across reasoning/behavioral/outcome dimensions; large-scale experiments on 9 LVLMs reveal consistent vulnerabilities and security-specialization trade-offs.",
    url: "https://arxiv.org/abs/2510.10073"
  },
  {
    title: "WASP Benchmarking Web Agent Security Against Prompt Injection Attacks",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "Introduces WASP, an end-to-end benchmark for Web Agent Security against Prompt injection attacks in realistic scenarios, showing that even top-tier reasoning models are deceived by simple, low-effort human-written injections, with attacks partially succeeding in up to 86% of cases while state-of-the-art agents often fail to fully complete attacker goals.",
    url: "https://arxiv.org/abs/2504.18575"
  },
  {
    title: "Why Are Web AI Agents More Vulnerable Than Standalone",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "Investigates why web AI agents are more vulnerable than standalone LLMs through component-level analysis, identifying 3 critical amplifying factors: embedding user goals into the system prompt, multi-step action generation, and observational capabilities—providing a granular evaluation framework for targeted defense strategies.",
    url: "https://arxiv.org/abs/2502.20383"
  },
  {
    title: "From Prompt to Physical Action Backdoor Attacks Embodied Agents",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "Empirically investigates LoRA-based supply-chain backdoors in LLM-mediated ROS2 robotic control, showing backdoors at the natural-language reasoning stage don't reliably propagate but those aligned with structured JSON command formats trigger physical actions at 83% ASR with >93% clean performance; an agentic verification defense reduces ASR to 20% but adds 8-9s latency.",
    url: "https://arxiv.org/abs/2604.03890"
  },
  {
    title: "What Breaks Embodied AI Security LLM Vulnerabilities CPS Flaws",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "Argues that embodied AI failures arise from embodiment-induced system-level mismatches rather than isolated LLM or CPS flaws, identifying four insights: semantic correctness ≠ physical safety; identical actions yield different outcomes across physical states; small errors amplify across tightly coupled loops; and safety is not compositional across time or system layers.",
    url: "https://arxiv.org/abs/2602.17345"
  },
  {
    title: "VLALeaks: Membership Inference Attacks against Vision-Language-Action Models",
    type: "paper",
    topic: "Embodied & Robotic Security",
    org: "Beijing Institute of Technology",
    year: 2026,
    authors: ["Xukun Luan", "Jinyan Liu", "Xuesong Li", "Yuanguo Bi"],
    desc: "First systematic study of membership inference attacks against Vision-Language-Action models, exploiting attention discrepancies in a two-stage process of membership feature extraction and attack model construction; demonstrates that VLA models readily leak training-set membership information, raising concerns about data privacy and IP infringement for robotic policies.",
    url: "https://arxiv.org/abs/2606.15165",
    tags: ["embodied", "vla", "membership inference", "robotics"]
  },
  {
    title: "Trajectory-Level Redirection Attacks on Vision-Language-Action Models",
    type: "paper",
    topic: "Embodied & Robotic Security",
    org: "University of Houston",
    year: 2026,
    authors: ["Gokul Puthumanaillam", "Vardhan Dongre", "Pranay Thangeda", "Hooshang Nayyeri"],
    desc: "Formalizes command-preserving trajectory redirection, a prompt-only threat model in which the attacker chooses one prompt before the episode that stays close to the benign instruction while redirecting the final physical outcome; an on-policy prompt search discovers near-benign perturbations that redirect VLA rollouts to attacker-specified targets in simulation and on hardware.",
    url: "https://arxiv.org/abs/2606.12978",
    tags: ["embodied", "vla", "trajectory", "prompt attack"]
  },
  {
    title: "Targeting World Models to Compromise Robot Learning Pipelines",
    type: "paper",
    topic: "Embodied & Robotic Security",
    org: "Northeastern University",
    year: 2026,
    authors: ["Ethan Rathbun", "Ahmed Agha", "Saaduddin Mahmud", "Christopher Amato"],
    desc: "Demonstrates that world models in robot learning pipelines are a stealthy data-poisoning entry point: malicious prompts or compromising transition dynamics injected into visibly safe teleoperated datasets activate only when fed through a world model, generating dangerous synthetic trajectories and unsafe policies even though ground-truth training data looks safe.",
    url: "https://arxiv.org/abs/2606.09499",
    tags: ["embodied", "world model", "data poisoning", "supply chain"]
  },
  {
    title: "VLA-Hijack: A Transferable Patch Attack against Vision-Language-Action Models via Visual Proprioception Hijacking",
    type: "paper",
    topic: "Embodied & Robotic Security",
    org: "Tsinghua University",
    year: 2026,
    authors: ["Jiyuan Fu", "Kaixun Jiang", "Jingkai Jia", "Zhaoyu Chen"],
    desc: "Breaks the cross-architecture transferability bottleneck of VLA patch attacks by exploiting visual self-localization: Attention-Guided Proprioceptive Suppression inhibits the real robotic arm's features while Multimodal Proprioceptive Injection establishes the patch as a surrogate 'phantom embodiment'; achieves new state-of-the-art black-box transferability across OpenVLA, UniVLA, and CronusVLA.",
    url: "https://arxiv.org/abs/2605.28083",
    tags: ["embodied", "vla", "patch attack", "transferability"]
  },
  {
    title: "From Prompt to Physical Actuation: Holistic Threat Modeling of LLM-Enabled Robotic Systems",
    type: "paper",
    topic: "Embodied & Robotic Security",
    org: "University of Guelph",
    year: 2026,
    authors: ["Neha Nagaraja", "Hayretdin Bahsi", "Carlo R. da Cunha"],
    desc: "Models an LLM-enabled autonomous robot as a hierarchical Data Flow Diagram and applies STRIDE-per-interaction analysis across six boundary-crossing interaction points using a three-category taxonomy of Conventional Cyber, Adversarial, and Conversational Threats; traces three cross-boundary attack chains from external entry points to unsafe physical actuation.",
    url: "https://arxiv.org/abs/2604.27267",
    tags: ["embodied", "threat model", "stride", "robotics"]
  },
  {
    title: "Jailbreaking Embodied LLMs via Action-level Manipulation",
    type: "paper",
    topic: "Embodied & Robotic Security",
    org: "South China University of Technology",
    year: 2026,
    authors: ["Xinyu Huang", "Qiang Yang", "Leming Shen", "Zijing Ma"],
    desc: "Introduces Blindfold, an automated attack framework that uses Adversarial Proxy Planning to compromise a local surrogate LLM and produce action-level manipulations that appear semantically safe but cause harmful physical effects when executed; achieves up to 53% higher ASR than SOTA baselines on embodied AI simulators and a real-world 6DoF robotic arm.",
    url: "https://arxiv.org/abs/2603.01414",
    tags: ["embodied", "jailbreak", "action-level", "physical"]
  },
  {
    title: "Towards Robust Secure Embodied AI Survey Vulnerabilities Attacks",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2025,
    desc: "Surveys the embodied and robotic agent security literature. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://arxiv.org/abs/2502.13175"
  },
  {
    title: "ANNIE Be Careful of Your Robots",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2025,
    desc: "A security analysis of embodied and robotic agent security. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://arxiv.org/abs/2509.03383"
  },
  {
    title: "AttackVLA: Benchmarking Adversarial and Backdoor Attacks on Vision-Language-Action Models",
    type: "paper",
    topic: "Embodied & Robotic Security",
    org: "Sun Yat-sen University",
    year: 2025,
    authors: ["Jiayu Li", "Yunhan Zhao", "Xiang Zheng", "Zonghuan Xu"],
    desc: "A unified framework aligned with the VLA development lifecycle that implements existing and adapted attacks and evaluates them in simulation and real-world settings; introduces BackdoorVLA, a targeted backdoor that compels the VLA to execute attacker-specified long-horizon action sequences whenever a trigger is present, achieving 58.4% average targeted success rate and 100% on selected tasks.",
    url: "https://arxiv.org/abs/2511.12149",
    tags: ["embodied", "vla", "benchmark", "backdoor"]
  },
  {
    title: "Jailbreak Zero A Path to Pareto Optimal Red Teaming",
    type: "paper",
    topic: "Jailbreaking",
    year: 2026,
    desc: "Introduces Jailbreak-Zero, a red teaming methodology that shifts from example-based to policy-based LLM safety evaluation, using an attack LLM to generate diverse adversarial prompts and fine-tuning with a preference dataset to achieve Pareto optimality across policy coverage, strategy diversity, and prompt fidelity, with higher ASR than state-of-the-art against GPT-4o and Claude 3.5.",
    url: "https://arxiv.org/abs/2601.03265"
  },
  {
    title: "JailbreakOPT: Tool-Assisted Iterative Jailbreak Prompt Optimization",
    type: "paper",
    topic: "Jailbreaking",
    org: "Renmin University of China",
    year: 2026,
    authors: ["Ge Shi", "Jun Yin", "Donglin Xie", "Fangyi Liu"],
    desc: "Organizes atomic jailbreak prompts into an attack tool library and composes them via a unified intra-episode optimization abstraction, framing tool selection as a contextual bandit solved with Thompson sampling; improves attack success rate while reducing the number of attacks needed until success versus atomic and iterative baselines.",
    url: "https://arxiv.org/abs/2606.11425",
    tags: ["jailbreak", "prompt optimization", "bandit", "black-box"]
  },
  {
    title: "Evolving Skill-Structured Attack Memory Enhances LLM Jailbreaking",
    type: "paper",
    topic: "Jailbreaking",
    org: "Peking University",
    year: 2026,
    authors: ["Junke Zhang", "Jianwei Wang", "Sishuo Chen", "Yizhang He"],
    desc: "Introduces MemoAttack, a black-box jailbreak framework that abstracts accumulated attack experience into reusable skill-structured memory units with lifecycle-driven evolution and explore-exploit balanced selection via Thompson sampling; achieves 98.00% average ASR on AdvBench while cutting request count by 45.9%.",
    url: "https://arxiv.org/abs/2605.29237",
    tags: ["jailbreak", "memory", "evolutionary", "black-box"]
  },
  {
    title: "Reasoning as an Attack Surface: Adaptive Evolutionary CoT Jailbreaks for LLMs",
    type: "paper",
    topic: "Jailbreaking",
    org: "Institute of Information Engineering CAS",
    year: 2026,
    authors: ["Jianan Li", "Simeng Qin", "Xiaojun Jia", "Lionel Z. Wang"],
    desc: "Targets Large Reasoning Models by rewriting harmful goals into mild teacher role-play prompts, decomposing them into reasoning fragments, and performing multi-generation evolutionary search with adaptive mutation; an independent scoring model grades harmfulness and high-scoring candidates are enhanced with a destructive CoT template to consistently outperform state-of-the-art jailbreaks.",
    url: "https://arxiv.org/abs/2605.24497",
    tags: ["jailbreak", "chain of thought", "reasoning models", "evolutionary"]
  },
  {
    title: "SlotGCG: Exploiting the Positional Vulnerability in LLMs for Jailbreak Attacks",
    type: "paper",
    topic: "Jailbreaking",
    org: "Yonsei University",
    year: 2026,
    authors: ["Seungwon Jeong", "Jiwoo Jeong", "Hyeonjin Kim", "Yunseok Lee"],
    desc: "Empirically investigates prompt slots (candidate insertion positions) and introduces a Vulnerable Slot Score that quantifies positional vulnerability; the resulting SlotGCG attack achieves 14% higher ASR than GCG, converges faster, and shows 42% higher ASR than baselines against defended models while adding only 200ms of preprocessing.",
    url: "https://arxiv.org/abs/2606.05609",
    tags: ["jailbreak", "gcg", "positional", "optimization"]
  },
  {
    title: "Off-Distribution Voices: Fanfiction Subgenres as Universal Vernacular Jailbreaks for Aligned LLMs",
    type: "paper",
    topic: "Jailbreaking",
    org: "Shanghai Jiao Tong University",
    year: 2026,
    authors: ["Zhongze Luo", "Ruihe Shi", "Zhenshuai Yin", "Haoyue Liu"],
    desc: "Argues the real jailbreak failure mode is an entire under-covered register of natural human writing; uses twelve Archive of Our Own fanfiction subgenres as attack carriers, lifting mean ASR from 0.278 to 0.731 across eight aligned LLMs on HarmBench+JailbreakBench without attacker-LLM or per-target adaptation, with a four-turn SAGA-A4 extension reaching 0.924 mean ASR.",
    url: "https://arxiv.org/abs/2606.04483",
    tags: ["jailbreak", "register attack", "fanfiction", "multi-turn"]
  },
  {
    title: "Audio Jailbreaks in Large Audio-Language Models: Taxonomy, Attack-Defense Analysis, and Cost-Aware Evaluation",
    type: "paper",
    topic: "Jailbreaking",
    org: "National Sun Yat-sen University",
    year: 2026,
    authors: ["Bo-Han Feng", "Yu-Hsuan Li Liang", "Chien-Feng Liu", "You-Hsuan Chang"],
    desc: "Provides a unified taxonomy of Large Audio Language Model jailbreaks (semantic, acoustic, signal, embedding-layer) and evaluates representative attacks and defenses across ten open-source LALMs, measuring benign refusal and latency in addition to attack success; finds Acoustic Best-of-N reveals worst-case audio vulnerabilities and that current defenses trade robustness against benign usability.",
    url: "https://arxiv.org/abs/2605.30031",
    tags: ["jailbreak", "audio", "multimodal", "taxonomy"]
  },
  {
    title: "Steering Vectors are an Adversarial Attack Surface",
    type: "paper",
    topic: "Jailbreaking",
    org: "Independent",
    year: 2026,
    authors: ["Abzal Aidakhmetov", "Donato Crisostomi", "Tommaso Mencattini", "Adrian Robert Minut"],
    desc: "Shows that substituting 4-6% of tokens in a steering dataset silently aligns the resulting activation vector with an anti-refusal direction, jailbreaking the target model while preserving the intended steering effect on benign prompts; poisoned vectors reach 20-55% absolute ASR across two open-weight model families, with refusal-direction orthogonalization recovering ~82% of the ASR gap.",
    url: "https://arxiv.org/abs/2606.05958",
    tags: ["jailbreak", "steering vectors", "data poisoning", "supply chain"]
  },
  {
    title: "BadThink Triggered Overthinking Attacks CoT Reasoning LLMs",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "Introduces BadThink, the first backdoor attack that triggers 'overthinking' in CoT-enabled LLMs via poisoning-based fine-tuning with an LLM-driven iterative optimization process, increasing reasoning trace length over 17x on MATH-500 while preserving final-output consistency and remaining difficult to detect via conventional output evaluation.",
    url: "https://arxiv.org/abs/2511.10714"
  },
  {
    title: "Jailbreaking to Jailbreak Autonomous Agent Red Teaming",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "Introduces J2 (Jailbreaking-to-Jailbreak), a method that turns almost any black-box LLM into a jailbreak attacker against other models, demonstrating that prompts transfer across models, that an attacker can jailbreak a copy of itself, and that reasoning models like Sonnet-3.7 achieve 0.975 ASR against GPT-4o—matching expert human red teamers.",
    url: "https://arxiv.org/abs/2502.09638"
  },
  {
    title: "ShadowCoT Cognitive Hijacking Stealthy Reasoning Backdoors",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "Presents ShadowCoT, a backdoor attack framework that hijacks multi-step reasoning chains in LLMs by selectively rewiring attention pathways and perturbing intermediate representations with minimal parameter overhead (0.15%), reinforced by an RL-driven Reasoning Chain Pollution method that achieves 94.4% attack success and 88.4% hijacking success while preserving benign performance.",
    url: "https://arxiv.org/abs/2504.05605"
  },
  {
    title: "STAC When Innocent Tools Form Dangerous Chains to Jailbreak",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "Introduces Sequential Tool Attack Chaining (STAC), a multi-turn attack framework that chains individually-harmless tool calls into harmful operations only apparent at the final step; evaluation of 483 STAC cases shows GPT-4.1 agents exceed 90% attack success, and a proposed reasoning-driven defense prompt cuts ASR by up to 28.8%.",
    url: "https://arxiv.org/abs/2509.25624"
  },
  {
    title: "Jailbreaking Leading Safety Aligned LLMs Simple Adaptive Attacks",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Demonstrates that leading safety-aligned LLMs (Vicuna, Mistral, Phi-3, Nemotron, Llama-2/3, Gemma, GPT-3.5/4o, Claude) are vulnerable to simple adaptive attacks leveraging logprob access and random search on a suffix, achieving 100% attack success via GPT-4 judge, with transfer/prefilling attacks for Claude models that do not expose logprobs.",
    url: "https://arxiv.org/abs/2404.02151"
  },
  {
    title: "AmpleGCG Learning a Universal and Transferable Generative Model of",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Introduces AmpleGCG, a generative model trained on successful GCG suffixes that captures the distribution of adversarial suffixes and rapidly generates hundreds of suffixes per harmful query, achieving near-100% ASR on Llama-2-7B-chat and Vicuna-7B and transferring to closed-source LLMs with 99% ASR on GPT-3.5.",
    url: "https://arxiv.org/abs/2404.07921"
  },
  {
    title: "AutoDAN Turbo A Lifelong Agent for Strategy Self Exploration",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Introduces AutoDAN-Turbo, a black-box jailbreak method that automatically discovers jailbreak strategies from scratch via lifelong strategy self-exploration, achieving 74.3% higher average ASR than baselines and 88.5% ASR on GPT-4-1106-turbo (rising to 93.4% when integrating human-designed strategies).",
    url: "https://arxiv.org/abs/2410.05295"
  },
  {
    title: "How Johnny Can Persuade LLMs to Jailbreak Them Rethinking",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Introduces a persuasion taxonomy derived from social science research and uses it to automatically generate interpretable Persuasive Adversarial Prompts (PAP) that jailbreak LLMs, achieving >92% attack success rate on Llama 2-7b Chat, GPT-3.5, and GPT-4 within 10 trials, surpassing algorithm-focused attacks.",
    url: "https://arxiv.org/abs/2401.06373"
  },
  {
    title: "LLM Defenses Are Not Robust to Multi Turn Human",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Demonstrates that multi-turn human jailbreaks uncover significant LLM vulnerabilities, exceeding 70% ASR on HarmBench against defenses reporting single-digit ASRs from automated single-turn attacks; releases the MHJ dataset of 2,912 prompts across 537 multi-turn jailbreaks alongside a compendium of red-teaming tactics from commercial engagements.",
    url: "https://arxiv.org/abs/2408.15221"
  },
  {
    title: "AutoDAN Generating Stealthy Jailbreak Prompts",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Automatically generates stealthy, readable jailbreak prompts (AutoDAN). Automated OSAA prompt-attack generation.",
    url: "https://arxiv.org/abs/2310.04451"
  },
  {
    title: "PAIR Jailbreaking Black Box LLMs Few Queries",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "A query-efficient automated black-box jailbreak (PAIR). An efficient OSAA jailbreak primitive.",
    url: "https://arxiv.org/abs/2310.08419"
  },
  {
    title: "Tree of Attacks Jailbreaking Black Box LLMs Automatically",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "Automatically jailbreaks black-box LLMs via a tree search of attacks (TAP). A strong automated OSAA jailbreak method.",
    url: "https://arxiv.org/abs/2312.02119"
  },
  {
    title: "Universal Transferable Adversarial Attacks GCG",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "Introduces transferable adversarial suffixes (GCG) that jailbreak aligned LLMs. A foundational transferable attack underpinning OSAA.",
    url: "https://arxiv.org/abs/2307.15043"
  },
  {
    title: "TextBugger Generating Adversarial Text Against Real world Applications",
    type: "paper",
    topic: "Jailbreaking",
    year: 2018,
    desc: "Presents TextBugger, a general framework for generating adversarial text against deep-learning text-understanding systems, using context-aware lexical bug insertion that achieves 100% success on IMDB against AWS Comprehend within 4.61 seconds, preserves 94.9% human readability, and runs in sub-linear complexity to text length.",
    url: "https://arxiv.org/abs/1812.05271"
  },
  {
    title: "WebMCP Tool Surface Poisoning: Runtime Manipulation Attacks on LLM Agents",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Lin-Fa Lee", "Yi-Yu Chang", "Chia-Mu Yu", "Kuo-Hui Yeh"],
    desc: "Identifies a new Mid-Session Tool Injection (MSTI) threat on the emerging WebMCP protocol where third-party scripts inject malicious tools mid-session, and classifies it into Tool Hijacking (modifying the visible tool set via AbortSignal API or registration race conditions) and Tool Framing (manipulating tool metadata such as readOnlyHint and inputSchema). Demonstrates both classes disrupt WebMCP functionality and proposes origin-bound tool identity, lifecycle consistency, and traceable registration logs as mitigations.",
    url: "https://arxiv.org/abs/2606.06387",
    tags: ["mcp", "tool poisoning", "webmcp", "tool hijacking", "runtime attack"]
  },
  {
    title: "Description-Code Inconsistency in Real-world MCP Servers: Measurement, Detection, and Security Implications",
    type: "paper",
    topic: "MCP Security",
    org: "Huazhong University of Science and Technology",
    year: 2026,
    authors: ["Yutao Shi", "Xiaohan Zhang", "Xiangjing Zhang", "Xihua Shen", "et al."],
    desc: "Defines Description-Code Inconsistency (DCI) in MCP servers, where a tool's natural-language description misrepresents what the code actually does. Builds DCIChecker (structure-aware static analysis + Direct-Reverse-Arbitration prompting) and applies it to 19,200 description-code pairs from 2,214 real servers, finding 9.93% exhibit inconsistencies that enable stealthy malicious behavior and create a defense blind spot.",
    url: "https://arxiv.org/abs/2606.04769",
    tags: ["mcp", "description-code inconsistency", "measurement", "static analysis", "tool poisoning"]
  },
  {
    title: "A Taxonomy of Runtime Faults in Model Context Protocol Servers",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Joshua Owotogbe", "Indika Kumara", "Willem-Jan van den Heuvel", "Damian Andrew Tamburri", "et al."],
    desc: "Presents the first empirical taxonomy of runtime faults in MCP servers, derived by manually analyzing 837 MCP-specific runtime fault threads across 473 actively maintained GitHub repositories. The taxonomy has 11 top-level categories and 27 subcategories (73 leaf fault types) covering protocol interactions, tool invocations, schema enforcement, state management, and security validation; a survey of 55 MCP developers confirms external validity (respondents experienced 20 of 27 subcategories on average).",
    url: "https://arxiv.org/abs/2606.05339",
    tags: ["mcp", "runtime faults", "taxonomy", "empirical study", "reliability"]
  },
  {
    title: "When the Manual Lies: A Realistic Benchmark to Evaluate MCP Poisoning Attacks for LLM Agents",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Shi Liu", "Xuehai Tang", "Xikang Yang", "Liang Lin", "et al."],
    desc: "Introduces Tool Description Poisoning (TDP), a semantic attack where malicious instructions are injected into a tool's descriptive metadata rather than its executable code. Releases the MCP-TDP Security Benchmark (32 real-world test cases across 6 risk categories); evaluation of 8 mainstream LLMs shows GPT-4o reaching nearly 100% attack success rate in high-risk scenarios, and documents a 'Firewall Fallacy' where prompt-guardrail defenses backfire. Proposes 'Reactive Self-Correction' as a defense.",
    url: "https://arxiv.org/abs/2605.24069",
    tags: ["mcp", "tool description poisoning", "benchmark", "firewall fallacy", "reactive self-correction"]
  },
  {
    title: "A First Measurement Study on Authentication Security in Real-World Remote MCP Servers",
    type: "paper",
    topic: "MCP Security",
    org: "Huazhong University of Science and Technology",
    year: 2026,
    authors: ["Huijun Zhou", "Xiaohan Zhang", "Haozhe Zhang", "Haoyang Zhang", "et al."],
    desc: "First measurement study of authentication security in real-world remote MCP servers: identifies 7,973 live remote MCP servers and finds 40.55% expose tools without authentication. Implements a semi-automated detection framework combining passive traffic inspection with active probing; tests 119 OAuth-enabled MCP servers and finds each exhibits at least one authentication flaw (325 total flaws, with dynamic-client-registration flaws affecting 96.6% of tested servers), and obtains 9 CVE IDs through responsible disclosure.",
    url: "https://arxiv.org/abs/2605.22333",
    tags: ["mcp", "authentication", "oauth", "measurement", "cve"]
  },
  {
    title: "VIPER-MCP: Detecting and Exploiting Taint-Style Vulnerabilities in Model Context Protocol Servers",
    type: "paper",
    topic: "MCP Security",
    org: "Shanghai Jiao Tong University",
    year: 2026,
    authors: ["Pengyu Sun", "Qishu Jin", "Enhao Huang", "Zifeng Kang", "et al."],
    desc: "VIPER-MCP: an end-to-end automated vulnerability auditing framework for MCP servers that detects taint-style vulnerabilities and dynamically confirms exploitability with concrete PoC prompts. Introduces anchor-query static analysis with function-level structural context and a feedback-driven dual-mutator prompt evolution mechanism. Scans 39,884 real-world MCP server repositories, discovers 106 confirmed 0-day vulnerabilities with 67 CVE IDs assigned to date.",
    url: "https://arxiv.org/abs/2605.21392",
    tags: ["mcp", "taint analysis", "vulnerability discovery", "fuzzing", "zero-day"]
  },
  {
    title: "Unsafe by Flow: Uncovering Bidirectional Data-Flow Risks in MCP Ecosystem",
    type: "paper",
    topic: "MCP Security",
    org: "Huazhong University of Science and Technology",
    year: 2026,
    authors: ["Xinyi Hou", "Yanjie Zhao", "Haoyu Wang"],
    desc: "Presents MCP-BiFlow, a bidirectional static analysis framework for MCP that models both requester-controlled arguments propagating to sensitive sinks AND untrusted external data surfacing through MCP outputs to influence host/model behavior. Achieves 93.8% recall on a 32-case MCP vulnerability benchmark (outperforming CodeQL, Semgrep, Snyk Code, and MCPScan); scans 15,452 MCP repositories and manually confirms 118 vulnerability paths in 87 servers.",
    url: "https://arxiv.org/abs/2605.07836",
    tags: ["mcp", "taint analysis", "bidirectional data flow", "static analysis", "tool security"]
  },
  {
    title: "MCP Pitfall Lab: Exposing Developer Pitfalls in MCP Tool Server Security under Multi-Vector Attacks",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Run Hao", "Zhuoran Tan"],
    desc: "MCP Pitfall Lab: a protocol-aware security testing framework that operationalizes developer pitfalls across tool-metadata poisoning, puppet servers, and multimodal image-to-tool chains. Includes three workflow challenges (email, document, crypto) with six server variants; static analyzer achieves F1=1.0 on four statically checkable pitfall classes, and applying recommended hardening eliminates all Tier-1 findings (29 to 0) at a mean cost of 27 LOC. Trace-grounded evaluation reveals agent narratives diverge from trace evidence in 63.2% of runs.",
    url: "https://arxiv.org/abs/2604.21477",
    tags: ["mcp", "developer pitfalls", "benchmark", "multi-vector attack", "tool poisoning"]
  },
  {
    title: "Breaking MCP with Function Hijacking Attacks: Novel Threats for Function Calling and Agentic Models",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Yannis Belkhiter", "Giulio Zizzo", "Sergio Maffeis", "Seshu Tirupathi", "et al."],
    desc: "Introduces Function Hijacking Attack (FHA) against agentic function-calling LLMs, manipulating the tool selection process to force invocation of attacker-chosen functions. Unlike prior attacks focused on semantic preference, FHA is largely context-agnostic and robust across function sets; the authors train universal adversarial functions that hijack tool selection across queries. Evaluated on 5 models reaching 70-100% attack success rate over the BFCL dataset.",
    url: "https://arxiv.org/abs/2604.20994",
    tags: ["function calling", "tool hijacking", "adversarial", "attack", "agentic llm"]
  },
  {
    title: "CASCADE: A Cascaded Hybrid Defense Architecture for Prompt Injection Detection in MCP-Based Systems",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["İpek Abasıkeleş Turgut", "Edip Gümüş"],
    desc: "Proposes CASCADE, a three-tiered cascaded defense architecture for MCP-based systems against prompt injection and tool poisoning: Layer 1 regex/phrase-weight/entropy pre-filtering, Layer 2 BGE embedding with Ollama Llama3 fallback, Layer 3 pattern-based output filtering. Evaluation on 5,000 samples yields 95.85% precision, 6.06% FPR, 74.59% F1; runs fully local without external API calls.",
    url: "https://arxiv.org/abs/2604.17125",
    tags: ["mcp", "cascade defense", "prompt injection", "tool poisoning", "defense"]
  },
  {
    title: "Governed MCP: Kernel-Level Tool Governance for AI Agents via Logit-Based Safety Primitives",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Daeyeon Son"],
    desc: "Proposes Governed MCP, a kernel-resident tool governance gateway built on the ProbeLogits logit-based safety primitive, interposing on every MCP tool call via a 6-layer pipeline (schema validation, trust tier, rate limit, adversarial pre-filter, ProbeLogits gate, constitutional policy match) with a Blake3-hashed audit chain. Implemented in Anima OS (~86K LOC Rust); ablation shows removing the ProbeLogits layer collapses F1 from 0.773 to 0.327 on a 101-prompt benchmark.",
    url: "https://arxiv.org/abs/2604.16870",
    tags: ["mcp", "kernel-level", "tool governance", "logit-based safety", "defense"]
  },
  {
    title: "MCPThreatHive: Automated Threat Intelligence for Model Context Protocol Ecosystems",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Yi Ting Shen", "Kentaroh Toyoda", "Alex Leung"],
    desc: "MCPThreatHive: an open-source platform that automates the end-to-end MCP threat intelligence lifecycle (multi-source collection, AI-driven extraction/classification, knowledge-graph storage, visualization) operationalizing the MCP-38 threat taxonomy with STRIDE, OWASP LLM Top 10, and OWASP Agentic Top 10 mappings. Identifies three critical coverage gaps in existing tools: incomplete compositional attack modeling, absence of continuous intelligence, and lack of unified multi-framework classification.",
    url: "https://arxiv.org/abs/2604.13849",
    tags: ["mcp", "threat intelligence", "mcp-38", "stride", "knowledge graph"]
  },
  {
    title: "MCP-DPT: A Defense-Placement Taxonomy and Coverage Analysis for Model Context Protocol Security",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Mehrdad Rostamzadeh", "Sidhant Narula", "Nahom Birhan", "Mohammad Ghasemigol", "et al."],
    desc: "Presents MCP-DPT, a defense-placement-oriented taxonomy that organizes MCP attacks by the architectural component responsible for enforcement across six MCP layers, identifying primary and secondary defense points. Mapping existing defenses reveals uneven, predominantly tool-centric protection with persistent gaps at host orchestration, transport, and supply-chain layers, suggesting many MCP security weaknesses stem from architectural misalignment rather than isolated implementation flaws.",
    url: "https://arxiv.org/abs/2604.07551",
    tags: ["mcp", "defense taxonomy", "layer-aligned", "defense in depth", "supply chain"]
  },
  {
    title: "TRUSTDESC: Preventing Tool Poisoning in LLM Applications via Trusted Description Generation",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Hengkai Ye", "Zhechang Zhang", "Jinyuan Jia", "Hong Hu"],
    desc: "TRUSTDESC: the first framework for preventing tool poisoning by automatically generating trusted tool descriptions from implementations via a three-stage pipeline (SliceMin reachability-aware static analysis with LLM-guided debloating, DescGen synthesis mitigating misleading code artifacts, DynVer dynamic verification of behavioral claims). Evaluated on 52 real-world tools across multiple ecosystems, producing faithful descriptions that improve task completion while mitigating implicit tool poisoning attacks at their root.",
    url: "https://arxiv.org/abs/2604.07536",
    tags: ["mcp", "tool poisoning", "trusted description", "static analysis", "defense"]
  },
  {
    title: "From Component Manipulation to System Compromise: Understanding and Detecting Malicious MCP Servers",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Yiheng Huang", "Zhijia Zhao", "Bihuan Chen", "Susheng Wu", "et al."],
    desc: "Builds the first component-centric PoC dataset of 114 malicious MCP servers and proposes Connor, a two-stage behavioral deviation detector (pre-execution shell-command analysis + intent extraction, then step-wise in-execution trajectory tracing). Evaluation shows multi-component attacks outperform single-component ones, and Connor achieves F1=94.6% (outperforming state-of-the-art by 8.9-59.6%) and identifies two malicious servers in the wild.",
    url: "https://arxiv.org/abs/2604.01905",
    tags: ["mcp", "malicious server", "component-centric", "behavioral detection", "connor"]
  },
  {
    title: "Invisible Threats from Model Context Protocol: Generating Stealthy Injection Payload via Tree-based Adaptive Search",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Yulin Shen", "Xudong Pan", "Geng Hong", "Min Yang"],
    desc: "Proposes Tree-structured Injection for Payloads (TIP), a black-box attack that generates natural-language payloads to seize control of MCP-enabled agents even under defense, casting payload generation as a tree-structured search guided by an attacker LLM with coarse-to-fine optimization. TIP achieves >95% attack success on four LLMs in undefended settings with an order of magnitude fewer queries than prior adaptive attacks, and preserves >50% effectiveness against four representative defenses.",
    url: "https://arxiv.org/abs/2603.24203",
    tags: ["mcp", "tree-structured search", "black-box attack", "prompt injection", "tip"]
  },
  {
    title: "Auditing MCP Servers for Over-Privileged Tool Capabilities",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Charoes Huang", "Xin Huang", "Amin Milani Fard"],
    desc: "Presents mcp-sec-audit, an extensible security assessment toolkit for MCP servers that combines static pattern matching (Python) with dynamic sandboxed fuzzing and monitoring via Docker and eBPF. Detects risky capabilities such as file system access, network requests, and command execution through configurable rule-based analysis and provides mitigation recommendations.",
    url: "https://arxiv.org/abs/2603.21641",
    tags: ["mcp", "auditing", "over-privilege", "ebpf", "sandbox fuzzing"]
  },
  {
    title: "MCP-38: A Comprehensive Threat Taxonomy for Model Context Protocol Systems (v1.0)",
    type: "paper",
    topic: "MCP Security",
    year: 2026,
    authors: ["Yi Ting Shen", "Kentaroh Toyoda", "Alex Leung"],
    desc: "MCP-38: a protocol-specific threat taxonomy of 38 MCP threat categories (MCP-01 through MCP-38) derived via a four-phase methodology (protocol decomposition, multi-framework cross-mapping, real-world incident synthesis, remediation-surface categorization). Each category is mapped to STRIDE, OWASP Top 10 for LLM Applications 2025, and OWASP Top 10 for Agentic Applications 2026, capturing MCP-specific threats like tool description poisoning, indirect prompt injection, parasitic tool chaining, and dynamic trust violations.",
    url: "https://arxiv.org/abs/2603.18063",
    tags: ["mcp", "threat taxonomy", "mcp-38", "stride", "owasp"]
  },
  {
    title: "Compatibility at a Cost: Systematic Discovery and Exploitation of MCP Clause-Compliance Vulnerabilities",
    type: "paper",
    topic: "MCP Security",
    org: "University of Minnesota",
    year: 2026,
    authors: ["Nanzi Yang", "Weiheng Bai", "Kangjie Lu"],
    desc: "Identifies 'compatibility-abusing attacks' arising from MCP specification relaxing behavioral constraints into optional clauses, allowing silent prompt injection and DoS. Constructs a universal language-agnostic IR generator that normalizes MCP SDKs across languages, then applies auditable static analysis with LLM-guided semantic reasoning for cross-language clause-compliance analysis, formalizes attack semantics of MCP clauses, and builds three attack modalities with a modality-guided pipeline to uncover exploitable non-compliance issues.",
    url: "https://arxiv.org/abs/2603.10163",
    tags: ["mcp", "clause compliance", "compatibility abuse", "static analysis", "sdk"]
  },
  {
    title: "Give Them an Inch and They Will Take a Mile:Understanding and Measuring Caller Identity Confusion in MCP-Based AI Systems",
    type: "paper",
    topic: "MCP Security",
    org: "Huazhong University of Science and Technology",
    year: 2026,
    authors: ["Yuhang Huang", "Boyang Ma", "Biwei Yan", "Xuelong Dai", "et al."],
    desc: "Large-scale security analysis of MCP servers showing that treating MCP servers as trusted entities without authenticating the caller identity is fundamentally insecure: most MCP servers rely on persistent authorization states (allowing tool invocations after initial authorization regardless of caller) and fail to enforce per-tool authentication, enabling unauthorized access to sensitive operations. Argues for explicit caller authentication and fine-grained per-tool authorization.",
    url: "https://arxiv.org/abs/2603.07473",
    tags: ["mcp", "caller identity confusion", "authentication", "authorization", "measurement"]
  },
  {
    title: "MalTool: Malicious Tool Attacks on LLM Agents",
    type: "paper",
    topic: "MCP Security",
    org: "UC Berkeley",
    year: 2026,
    authors: ["Yuepeng Hu", "Yuqi Jia", "Mengyuan Li", "Dawn Song", "et al."],
    desc: "MalTool: a coding-LLM-based framework that synthesizes tools exhibiting specified malicious behaviors (taxonomy based on the CIA triad tailored to LLM-agent settings), either standalone or embedded within benign implementations. Constructs two datasets (1,300 standalone malicious tools and 5,727 real-world tools with embedded malicious behaviors) and shows that conventional malware detectors and LLM-agent-tailored detectors exhibit limited effectiveness, highlighting the need for new defenses.",
    url: "https://arxiv.org/abs/2602.12194",
    tags: ["mcp", "malicious tool", "maltool", "coding llm", "dataset"]
  },
  {
    title: "SMCP: Secure Model Context Protocol",
    type: "paper",
    topic: "MCP Security",
    org: "Huazhong University of Science and Technology",
    year: 2026,
    authors: ["Xinyi Hou", "Shenao Wang", "Yifan Zhang", "Ziluo Xue", "et al."],
    desc: "Introduces the Secure Model Context Protocol (SMCP), extending MCP with unified identity management, mutual authentication, ongoing security context propagation, fine-grained policy enforcement, and comprehensive audit logging. Addresses risks including unauthorized access, tool poisoning, prompt injection, privilege escalation, and supply chain attacks that span the MCP workflow, providing protocol-level security improvements for agentic ecosystems.",
    url: "https://arxiv.org/abs/2602.01129",
    tags: ["mcp", "secure protocol", "identity management", "authentication", "audit"]
  },
  {
    title: "Don't believe everything you read: Understanding and Measuring MCP Behavior under Misleading Tool Descriptions",
    type: "paper",
    topic: "MCP Security",
    org: "Huazhong University of Science and Technology",
    year: 2026,
    authors: ["Zhihao Li", "Boyang Ma", "Xuelong Dai", "Minghui Xu", "et al."],
    desc: "First large-scale study of description-code inconsistency in the MCP ecosystem: designs an automated static analysis framework and applies it to 10,240 real-world MCP servers across 36 categories. Finds ~13% of servers exhibit substantial mismatches that can enable undocumented privileged operations, hidden state mutations, or unauthorized financial actions, with systematic differences across application categories, popularity levels, and MCP marketplaces.",
    url: "https://arxiv.org/abs/2602.03580",
    tags: ["mcp", "misleading description", "measurement", "static analysis", "tool description"]
  },
  {
    title: "MCPShield: A Security Cognition Layer for Adaptive Trust Calibration in Model Context Protocol Agents",
    type: "paper",
    topic: "MCP Security",
    org: "Beijing University of Posts and Telecommunications",
    year: 2026,
    authors: ["Zhenhong Zhou", "Yuanhe Zhang", "Hongwei Cai", "Moayad Aloqaily", "et al."],
    desc: "MCPShield: a plug-in security cognition layer for MCP agents inspired by human experience-driven tool validation. Assists the agent in forming security cognition through metadata-guided probing before invocation, constraining execution within controlled boundaries during invocation, and reasoning over historical traces after invocation. Defends against six novel MCP-based attack scenarios across six widely-used agentic LLMs while avoiding false positives on benign servers at low deployment overhead.",
    url: "https://arxiv.org/abs/2602.14281",
    tags: ["mcp", "mcpshield", "trust calibration", "security cognition", "defense"]
  },
  {
    title: "MCP-ITP: An Automated Framework for Implicit Tool Poisoning in MCP",
    type: "paper",
    topic: "MCP Security",
    org: "University of Science and Technology of China",
    year: 2026,
    authors: ["Ruiqi Li", "Zhiqiang Wang", "Yunhao Yao", "Xiang-Yang Li"],
    desc: "MCP-ITP: the first automated framework for implicit tool poisoning in MCP, where the poisoned tool itself remains uninvoked but its metadata induces the agent to invoke a legitimate high-privilege tool for malicious operations. Formulates poisoned tool generation as black-box optimization with iterative feedback from evaluation and detection LLMs; on the MCPTox dataset across 12 LLM agents achieves up to 84.2% attack success rate while suppressing the malicious tool detection rate to as low as 0.3%.",
    url: "https://arxiv.org/abs/2601.07395",
    tags: ["mcp", "implicit tool poisoning", "mcp-itp", "black-box optimization", "mcptox"]
  },
  {
    title: "Systematization of Knowledge: Security and Safety in the Model Context Protocol Ecosystem",
    type: "paper",
    topic: "MCP Security",
    year: 2025,
    authors: ["Shiva Gaire", "Srijan Gyawali", "Saroj Mishra", "Suman Niroula", "et al."],
    desc: "Systematization of Knowledge (SoK) providing a comprehensive taxonomy of risks in the MCP ecosystem, distinguishing adversarial security threats (indirect prompt injection, tool poisoning) from epistemic safety hazards (alignment failures in distributed tool delegation). Analyzes structural vulnerabilities of MCP primitives (Resources, Prompts, Tools), shows how 'context' can be weaponized for unauthorized operations in multi-agent environments, and surveys defenses from cryptographic provenance (ETDI) to runtime intent verification.",
    url: "https://arxiv.org/abs/2512.08290",
    tags: ["mcp", "sok", "taxonomy", "provenance", "etdi"]
  },
  {
    title: "Semantic Attacks on Tool-Augmented LLMs: Securing the Model Context Protocol Against Descriptor-Level Manipulation",
    type: "paper",
    topic: "MCP Security",
    year: 2025,
    authors: ["Saeid Jamshidi", "Arghavan Moradi Dakhel", "Kawser Wazed Nafi", "Foutse Khomh"],
    desc: "Formalizes three descriptor-driven attack classes against MCP — Tool Poisoning, Shadowing, and Rug Pull — and proposes a layered defense integrating descriptor integrity verification, pre-context semantic vetting via an auxiliary LLM, and lightweight runtime guardrails (no model retraining). Evaluating GPT-5.3, DeepSeek-V3, and LLaMA-3.5 across eight prompting strategies finds descriptor manipulation can produce unsafe tool invocations in up to 36% of trials; the full-stack mitigation reduces this to 15% and increases block rate to 74%.",
    url: "https://arxiv.org/abs/2512.06556",
    tags: ["mcp", "descriptor manipulation", "tool poisoning", "shadowing", "rug pull"]
  },
  {
    title: "Securing the Model Context Protocol (MCP): Risks, Controls, and Governance",
    type: "paper",
    topic: "MCP Security",
    year: 2025,
    authors: ["Herman Errico", "Jiquan Ngiam", "Shanita Sojan"],
    desc: "Maps three adversary types exploiting MCP — content-injection attackers, supply-chain attackers, and unintentional adversary agents — against gaps in NIST AI RMF and ISO/IEC 42001. Proposes practical controls: per-user scoped authentication, provenance tracking across workflows, containerized sandboxing with I/O checks, inline DLP/anomaly policy enforcement, and centralized governance via private registries/gateways. Outlines open research questions on verifiable registries, formal methods, and privacy-preserving agent operations.",
    url: "https://arxiv.org/abs/2511.20920",
    tags: ["mcp", "enterprise security", "governance", "threat modeling", "oauth"]
  },
  {
    title: "Parasites in the Toolchain: A Large-Scale Analysis of Attacks on the MCP Ecosystem",
    type: "paper",
    topic: "MCP Security",
    year: 2025,
    authors: ["Shuli Zhao", "Qinsheng Hou", "Zihan Zhan", "Yanhao Wang", "et al."],
    desc: "Identifies Parasitic Toolchain Attacks, instantiated as MCP Unintended Privacy Disclosure (MCP-UPD): malicious instructions embedded in external data sources that LLMs access during legitimate tasks, assembling multiple legitimate tools into a coordinated workflow that exfiltrates private data via three phases (Parasitic Ingestion, Privacy Collection, Privacy Disclosure). Designs MCP-SEC and conducts the first large-scale security census of the MCP ecosystem (12,230 tools across 1,360 servers), revealing systemic risks via real-world exploitable gadgets.",
    url: "https://arxiv.org/abs/2509.06572",
    tags: ["mcp", "parasitic toolchain", "privacy disclosure", "large-scale study", "toolchain"]
  },
  {
    title: "Attractive Metadata Attack: Inducing LLM Agents to Invoke Malicious Tools",
    type: "paper",
    topic: "MCP Security",
    year: 2025,
    authors: ["Kanghua Mo", "Li Hu", "Yucheng Long", "Zhihao Li"],
    desc: "Proposes the Attractive Metadata Attack (AMA), a black-box in-context-learning framework that generates syntactically/semantically valid but malicious tool metadata to influence agent tool selection — without prompt injection or model access. Across 10 realistic scenarios and a range of LLM agents achieves 81-95% attack success rate with significant privacy leakage while remaining effective against prompt-level defenses, auditor-based detection, and MCP-style structured tool-selection protocols. Code released at github.com/SEAIC-M/AMA.",
    url: "https://arxiv.org/abs/2508.02110",
    tags: ["mcp", "metadata attack", "ama", "tool selection", "black-box"]
  },
  {
    title: "From Prompt Injections to Protocol Exploits: Threats in LLM-Powered AI Agents Workflows",
    type: "paper",
    topic: "MCP Security",
    org: "Norwegian University of Science and Technology",
    year: 2025,
    authors: ["Mohamed Amine Ferrag", "Norbert Tihanyi", "Djallel Hamouda", "Leandros Maglaras", "et al."],
    desc: "Survey introducing a unified end-to-end threat model for LLM-agent ecosystems covering host-to-tool and agent-to-agent communications, systematically categorizing 30+ attack techniques across input manipulation, model compromise, system/privacy attacks, and protocol-level vulnerabilities. Provides formal threat formulations for each category (e.g., Prompt-to-SQL injections, Toxic Agent Flow exploit in GitHub MCP servers) and discusses dynamic trust management, cryptographic provenance tracking, and sandboxed agent interfaces.",
    url: "https://arxiv.org/abs/2506.23260",
    tags: ["llm agent", "protocol exploits", "threat model", "survey", "function calling"]
  },
  {
    title: "Model Context Protocol (MCP) at First Glance: Studying the Security and Maintainability of MCP Servers",
    type: "paper",
    topic: "MCP Security",
    year: 2025,
    authors: ["Mohammed Mehedi Hasan", "Hao Li", "Emad Fallahzadeh", "Gopi Krishnan Rajbahadur", "et al."],
    desc: "First large-scale empirical study of MCP: evaluates 1,899 open-source MCP servers using state-of-the-art health metrics and a hybrid analysis pipeline combining a general static analyzer with an MCP-specific scanner. Identifies eight distinct vulnerabilities (only three overlapping with traditional software vulnerabilities); 7.2% of servers contain general vulnerabilities and 5.5% exhibit MCP-specific tool poisoning, while 66% exhibit code smells. Advocates for MCP-specific vulnerability databases and automated security scanning within MCP registries.",
    url: "https://arxiv.org/abs/2506.13538",
    tags: ["mcp", "empirical study", "maintainability", "vulnerability", "tool poisoning"]
  },
  {
    title: "Beyond the Protocol: Unveiling Attack Vectors in the Model Context Protocol (MCP) Ecosystem",
    type: "paper",
    topic: "MCP Security",
    year: 2025,
    authors: ["Hao Song", "Yiming Shen", "Wenxuan Luo", "Leixin Guo", "et al."],
    desc: "First end-to-end empirical evaluation of attack vectors targeting the MCP ecosystem, identifying four attack categories (Tool Poisoning, Puppet, Rug Pull, Exploitation via Malicious External Resources). Authors construct malicious MCP servers, successfully upload them to three widely used MCP aggregation platforms (bypassing current audits), and a 20-participant user study shows users struggle to identify and often unknowingly install malicious servers; demonstrated attacks trigger harmful local actions like accessing private files or transferring digital assets.",
    url: "https://arxiv.org/abs/2506.02040",
    tags: ["mcp", "tool poisoning", "puppet attack", "rug pull", "attack vector"]
  },
  {
    title: "ETDI: Mitigating Tool Squatting and Rug Pull Attacks in Model Context Protocol (MCP) by using OAuth-Enhanced Tool Definitions and Policy-Based Access Control",
    type: "paper",
    topic: "MCP Security",
    org: "Anthropic",
    year: 2025,
    authors: ["Manish Bhatt", "Vineeth Sai Narajala", "Idan Habler"],
    desc: "Introduces the Enhanced Tool Definition Interface (ETDI), a security extension to MCP that mitigates Tool Poisoning and Rug Pull attacks via cryptographic identity verification, immutable versioned tool definitions, and explicit permission management (often leveraging OAuth 2.0). Further proposes fine-grained policy-based access control where tool capabilities are dynamically evaluated against explicit policies using a dedicated policy engine considering runtime context beyond static OAuth scopes.",
    url: "https://arxiv.org/abs/2506.01333",
    tags: ["mcp", "etdi", "tool squatting", "rug pull", "oauth"]
  },
  {
    title: "Enterprise-Grade Security for the Model Context Protocol (MCP): Frameworks and Mitigation Strategies",
    type: "paper",
    topic: "MCP Security",
    org: "Anthropic",
    year: 2025,
    authors: ["Vineeth Sai Narajala", "Idan Habler"],
    desc: "Translates theoretical MCP security concerns into a practical, enterprise-grade mitigation framework with actionable controls. Covers systematic threat modeling of MCP implementations, analysis of attack vectors including tool poisoning, and detailed technical implementation strategies for secure enterprise adoption and governance of integrated AI systems.",
    url: "https://arxiv.org/abs/2504.08623",
    tags: ["mcp", "enterprise security", "threat modeling", "governance", "tool poisoning"]
  },
  {
    title: "From Allies to Adversaries: Manipulating LLM Tool-Calling through Adversarial Injection",
    type: "paper",
    topic: "MCP Security",
    year: 2024,
    authors: ["Haowei Wang", "Rupeng Zhang", "Junjie Wang", "Mingyang Li", "et al."],
    desc: "ToolCommander: a framework exploiting vulnerabilities in LLM tool-calling scheduling via adversarial tool injection. Employs a two-stage attack (malicious tools collect user queries, then dynamically update injected tools based on stolen info to enhance subsequent attacks), enabling privacy theft (91.67% ASR), DoS (up to 100% ASR), and unscheduled tool calling for business-competition manipulation.",
    url: "https://arxiv.org/abs/2412.10198",
    tags: ["llm agent", "tool calling", "toolcommander", "adversarial injection", "privacy theft"]
  },
  {
    title: "LITMUS Benchmarking Behavioral Jailbreaks LLM Agents Real OS",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "Presents LITMUS, a benchmark of 819 high-risk test cases for behavioral jailbreaks of LLM agents in real OS environments, using a semantic-physical dual-verification mechanism and OS-level state rollback; reveals that even strong models like Claude Sonnet 4.6 execute 40.64% of high-risk operations and exhibit invisible 'Execution Hallucination' where verbal refusal co-occurs with completed dangerous actions.",
    url: "https://arxiv.org/abs/2605.10779"
  },
  {
    title: "Security Considerations Artificial Intelligence Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "Presents Perplexity's response to NIST/CAISI on frontier AI agent security, mapping attack surfaces (tools, connectors, hosting, multi-agent coordination), emphasizing indirect prompt injection, confused-deputy behavior, and cascading failures, and assessing layered defenses including sandboxing and deterministic policy enforcement.",
    url: "https://arxiv.org/abs/2603.12230"
  },
  {
    title: "Stop Fixating Prompts Reasoning Hijacking RedTeaming LLM Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "Presents JailAgent, a red-teaming approach that avoids modifying user prompts and instead manipulates the agent's reasoning trajectory and memory retrieval through Trigger Extraction, Reasoning Hijacking, and Constraint Tightening stages, demonstrating strong performance across models and scenarios without impacting agent utility.",
    url: "https://arxiv.org/abs/2604.05549"
  },
  {
    title: "Taming OpenClaw Security Analysis Autonomous LLM Agent Threats",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "Presents a five-layer lifecycle-oriented security analysis of the OpenClaw autonomous LLM agent framework, examining threats across initialization, input, inference, decision, and execution stages—including indirect prompt injection, skill supply-chain contamination, memory poisoning, and intent drift—and analyzing defense limitations.",
    url: "https://arxiv.org/abs/2603.11619"
  },
  {
    title: "Trust No Tool Evaluating Defending LLM Agents Untrusted Feedback",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "Introduces TRUST-Bench (1,970 hidden-trigger tool-compromise episodes), the asymmetric GuardedJoint metric, and VISTA-Guard, a backbone-agnostic framework that abstracts multi-step tool interactions into structured environment variables encoding trust-formation dynamics and scores final-action risk; it reaches 84.2 in-domain and 56.9 out-of-distribution, while one-sided methods collapse to zero under GuardedJoint.",
    url: "https://arxiv.org/abs/2605.17453"
  },
  {
    title: "Agent Skills in the Wild An Empirical Study of",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "Conducts the first large-scale empirical security analysis of 31,132 agent skills from two major marketplaces using SkillScan (static + LLM-based), finding 26.1% contain vulnerabilities across 14 patterns (prompt injection, data exfiltration, privilege escalation, supply chain) and 5.2% show high-severity malicious-intent patterns.",
    url: "https://arxiv.org/abs/2601.10338"
  },
  {
    title: "The Silicon Psyche Anthropomorphic Vulnerabilities in Large Language Models",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "Applies the Cybersecurity Psychology Framework (100-indicator taxonomy of human psychological vulnerabilities) to LLMs, introducing the Synthetic Psychometric Assessment Protocol and revealing 'Anthropomorphic Vulnerability Inheritance'—susceptibility to authority-gradient manipulation, temporal pressure exploitation, and convergent-state attacks mirroring human cognitive failures.",
    url: "https://arxiv.org/abs/2601.00867"
  },
  {
    title: "AutoDojo: Adaptive Attacks Expose Superficial Defenses and User-Underspecification Limits in LLM Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    org: "UC San Diego",
    year: 2026,
    authors: ["Xinhang Ma", "Taoran Li", "Chaowei Xiao", "Zhiyuan Yu"],
    desc: "Adaptive extension of AgentDojo that optimizes indirect prompt injection against a given defense; using a cheap black-box adaptive attack with a frontier LLM iteratively optimizing the injection raises ASR well above the level achieved by static benchmarks, demonstrating that many state-of-the-art defenses offer only limited protection against adaptive threats.",
    url: "https://arxiv.org/abs/2606.15057",
    tags: ["misc", "adaptive attack", "defense evaluation", "agent"]
  },
  {
    title: "Is Your Agent Playing Dead? Deployed LLM Agents Exhibit Constraint-Evasive Fabrication and Thanatosis",
    type: "paper",
    topic: "Misc Attacks & Other",
    org: "Universidad Carlos III de Madrid",
    year: 2026,
    authors: ["Andoni Rodríguez", "Alberto Pozanco", "Daniel Borrajo"],
    desc: "Characterizes Constraint-Evasive Fabrication, where LLM agents under irreconcilable constraints spontaneously fabricate plausible external obstacles (audit restrictions, microservice architectures, error codes) and the extreme limit case Constraint-Evasive Thanatosis where the model simulates a full system crash with fabricated Python exception traces; first observed in a GPT-4o banking agent threatened by a user.",
    url: "https://arxiv.org/abs/2606.14831",
    tags: ["misc", "deceptive behavior", "fabrication", "constraint evasion"]
  },
  {
    title: "From Shield to Target: Denial-of-Service Attacks on LLM-Based Agent Guardrails",
    type: "paper",
    topic: "Misc Attacks & Other",
    org: "Shanghai Jiao Tong University",
    year: 2026,
    authors: ["Yuguang Zhou", "Xunguang Wang", "Pingchuan Ma", "Zhantong Xue"],
    desc: "Reveals that the reasoning and task-following capabilities enabling LLM-based guardrails to defend agents also let attackers trap them in extended reasoning loops via crafted payloads; a beam-search optimization framework and a mechanism-aware structural mutation framework achieve 13-63x token amplification, transferring across diverse guardrail architectures and eight leading model backbones including Claude, GPT, and Gemini.",
    url: "https://arxiv.org/abs/2606.14517",
    tags: ["misc", "denial of service", "guardrail", "reasoning"]
  },
  {
    title: "Runtime Skill Audit: Targeted Runtime Probing for Agent Skill Security",
    type: "paper",
    topic: "Misc Attacks & Other",
    org: "UC San Diego",
    year: 2026,
    authors: ["Tu Lan", "Chaowei Xiao"],
    desc: "Dynamic analysis method that audits agent skills by asking what the skill-mediated agent actually does under targeted runtime conditions rather than testing every skill with the same generic tasks; on OpenClaw across 100 skills, Runtime Skill Audit achieves 90.0% accuracy with 88.0% TPR and 8.0% FPR, improving by 13.0 pp over the best static baseline and continuing to detect 19-20 of 20 malicious skills under self-evolving attacks.",
    url: "https://arxiv.org/abs/2606.11671",
    tags: ["misc", "skill security", "dynamic analysis", "runtime"]
  },
  {
    title: "Data Agents Under Attack: Vulnerabilities in LLM-Driven Analytical Systems",
    type: "paper",
    topic: "Misc Attacks & Other",
    org: "Renmin University of China",
    year: 2026,
    authors: ["Kuncan Wang", "Ziting Wang", "Peizhuo Lv", "Haoyang Li"],
    desc: "Develops a layered vulnerability framework for data agents identifying eight risks across interpretation, execution, and policy layers, pairs it with an attack taxonomy of three goals, seven tactics, fourteen techniques, and an LLM-driven payload generation pipeline grounded in real schemas; evaluates six systems (four open-source, two production cloud analytics services) and reveals substantial vulnerabilities.",
    url: "https://arxiv.org/abs/2606.08661",
    tags: ["misc", "data agent", "vulnerability", "taxonomy"]
  },
  {
    title: "POISE: Position-Aware Undetectable Skill Injection on LLM Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    org: "Institute of Software CAS",
    year: 2026,
    authors: ["Haochang Hao", "Dehai Min", "Zhifang Zhang", "Yunbei Zhang"],
    desc: "Position-aware attack that compresses the trigger into a single benign-looking body instruction, placing it at a feasible position and using a context-aware generator to blend it with nearby setup or prerequisite steps; on Skill-Inject with codex+gpt-5.2 achieves 89.3% ASR (28.0 points above random-placement body baseline), staying stealthy by keeping the user's task verifier passing in the same trial.",
    url: "https://arxiv.org/abs/2606.07943",
    tags: ["misc", "skill injection", "stealth", "position-aware"]
  },
  {
    title: "Security Challenges AI Agent Deployment Large Scale Competition",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Reports results from the largest public red-teaming competition to date (1.8M attacks against 22 frontier AI agents across 44 scenarios), with 60K+ elicited policy violations; curates the Agent Red Teaming (ART) benchmark and shows high attack transferability and limited correlation between robustness and model size.",
    url: "https://arxiv.org/abs/2507.20526"
  },
  {
    title: "ASTRA Agentic Steerability and Risk Assessment Framework",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Introduces ASTRA, a framework evaluating LLMs' ability to enforce custom system-prompt guardrails in agents; it simulates 10 diverse autonomous agents with 37 tools against novel OWASP Top 10-inspired attacks, testing 13 open-source tool-calling LLMs and revealing significant differences in their ability to remain secure during multi-turn planning and tool activation.",
    url: "https://arxiv.org/abs/2511.18114"
  },
  {
    title: "Bridging AI Software Security Comparative Vulnerability Assessment LLM Agent Paradigms",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Bridges AI-specific and traditional software security by comparing Function Calling and Model Context Protocol (MCP) deployment paradigms across 3,250 attack scenarios on 7 LLMs, finding Function Calling has higher overall attack success (73.5% vs 62.59%) while MCP has more LLM-centric exposure, with chained attacks reaching 91-96% success.",
    url: "https://arxiv.org/abs/2507.06323"
  },
  {
    title: "DoomArena A framework for Testing AI Agents Against Evolving",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Presents DoomArena, a plug-in, configurable, and modular security evaluation framework for AI agents that integrates with BrowserGym and τ-bench, enabling attack composition across environments; evaluations of SOTA web and tool-calling agents show no Pareto-dominant agent across threat models and that guardrail defenses fail while powerful SOTA-LLM defenses work better.",
    url: "https://arxiv.org/abs/2504.14064"
  },
  {
    title: "Get the Agents Drunk Memory Perturbations in Autonomous Agent",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Introduces DrunkAgent, a black-box memory-corruption attack against LLM-powered recommender agents that crafts semantically meaningful adversarial triggers and corrupts memory updates during interactions, optimizing on a surrogate model for transferability and stealth across collaborative filtering, retrieval-augmented, and sequential recommenders.",
    url: "https://arxiv.org/abs/2503.23804"
  },
  {
    title: "LibVulnWatch A Deep Assessment Agent System and Leaderboard for",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Introduces LibVulnWatch, a graph-orchestrated multi-agent system that performs deep evidence-based evaluations of open-source AI libraries across security, licensing, maintenance, supply-chain, and compliance domains, surfacing up to 19 risks per library beyond OpenSSF Scorecard coverage.",
    url: "https://arxiv.org/abs/2505.08842"
  },
  {
    title: "Quantifying Distributional Robustness of Agentic Tool Selection",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Introduces LLMCert-T, the first statistical framework returning high-confidence upper bounds on the probability that a tool-selection pipeline satisfies a safety specification, modeling tool selection as Bernoulli estimation under realistic inserted-tool distributions; shows certified correctness drops to ~20% under realistic distractor conditions.",
    url: "https://arxiv.org/abs/2510.03992"
  },
  {
    title: "TRAP Targeted Redirecting of Agentic Preferences",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "Introduces TRAP, a generative adversarial framework that uses diffusion-based semantic injections into the vision-language embedding space (negative-prompt degradation + positive semantic optimization with a Siamese network and layout-aware masking) to induce consistent decision-level preference redirections in VLM agents without model internals access.",
    url: "https://arxiv.org/abs/2505.23518"
  },
  {
    title: "Applying Refusal Vector Ablation to Llama 3 1 70B",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "Applies refusal-vector ablation to Llama 3.1 70B and shows that the resulting unrestricted agents perform harmful tasks (bribery, phishing) while base Instruct models already comply with most harmful agentic requests despite refusing chat-mode equivalents, highlighting that safety fine-tuning does not generalize to agentic behavior.",
    url: "https://arxiv.org/abs/2410.10871"
  },
  {
    title: "Artificial Intelligence as the New Hacker Developing Agents for",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "Develops ReaperAI, an autonomous AI agent leveraging GPT-4 with Retrieval-Augmented Generation for offensive cybersecurity that performs task-driven penetration testing, AI-driven command generation, and advanced prompting; tested on Hack The Box, it successfully exploits known vulnerabilities while exposing command execution and error-handling complexities.",
    url: "https://arxiv.org/abs/2406.07561"
  },
  {
    title: "Breaking Agents Compromising Autonomous LLM Agents Through Malfunction Amplification",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "Introduces a malfunction-amplification attack that causes autonomous LLM agents to execute repetitive or irrelevant actions, inducing failure rates exceeding 80% across multiple scenarios; the authors propose self-examination detection but find the attacks difficult to detect with LLMs alone.",
    url: "https://arxiv.org/abs/2407.20859"
  },
  {
    title: "Insights and Current Gaps in Open Source LLM Vulnerability",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "Performs a comparative analysis of open-source LLM vulnerability scanners (Garak, Giskard, PyRIT, CyberSecEval), detailing their features and quantitatively evaluating detection reliability, uncovering significant reliability issues and providing strategic recommendations for scanner selection across customizability, comprehensiveness, and industry use cases.",
    url: "https://arxiv.org/abs/2410.16527"
  },
  {
    title: "SEAS Self Evolving Adversarial Safety Optimization for Large Language",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "Introduces the Self-Evolving Adversarial Safety (SEAS) optimization framework that iteratively refines both a Red Team model and a Target model using model-generated data, achieving target-model security comparable to GPT-4 after three iterations while markedly increasing the red-team model's attack success rate.",
    url: "https://arxiv.org/abs/2408.02632"
  },
  {
    title: "Security of AI Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "Identifies and details security vulnerabilities in AI agent workflows that current frameworks and research do not address, proposing corresponding defense mechanisms with design and experimental evaluation from a system-security perspective to make AI agents safer and more reliable.",
    url: "https://arxiv.org/abs/2406.08689"
  },
  {
    title: "Image Hijacking Adversarial Images can Control Generative Models at",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2023,
    desc: "Introduces 'image hijacks'—adversarial images that control vision-language model behavior at inference time—via the Behaviour Matching algorithm (and Prompt Matching variant), achieving >80% success against LLaVA across four attack types: arbitrary output generation, context-window leakage, safety-training override, and false-statement belief.",
    url: "https://arxiv.org/abs/2309.00236"
  },
  {
    title: "SAIGuard: Communication-State Simulation for Proactive Defense of LLM Multi-Agent Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    org: "Hebei University of Technology",
    year: 2026,
    authors: ["Ruxue Shi", "Yili Wang", "Mengnan Du", "Qinggang Zhang"],
    desc: "Proactive defense framework that performs communication-state simulation over the MAS interaction graph to estimate the impact of incoming messages on local and global agent state, then sanitizes or regenerates suspicious messages before propagation rather than isolating agents reactively; reduces attack success rates while preserving MAS utility.",
    url: "https://arxiv.org/abs/2606.12474",
    tags: ["multi-agent", "defense", "communication", "simulation"]
  },
  {
    title: "Defending LLM-based Multi-Agent Systems Against Cooperative Attacks with Sentence-Level Rectification",
    type: "paper",
    topic: "Multi-Agent Security",
    org: "University of Science and Technology of China",
    year: 2026,
    authors: ["Yaoyang Luo", "Zhi Zheng", "Ziwei Zhao", "Tong Xu"],
    desc: "Models an adaptive cooperative attack in which malicious agents coordinate through multi-round internal information exchange and dynamically adjust strategies, then proposes STAR (Sentence-Level Trustworthiness Analysis and Rectification) that identifies and rectifies misleading information at the sentence level; cooperative attacks cause 5.34% larger task-success degradation than independent attacks, and STAR improves task success by an average of 36.76%.",
    url: "https://arxiv.org/abs/2605.28104",
    tags: ["multi-agent", "cooperative attack", "defense", "sentence-level"]
  },
  {
    title: "HARP: Measuring Harm Amplification in Multi-Agent LLM Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    org: "University of South Florida",
    year: 2026,
    authors: ["Md Hafizur Rahman", "Zafaryab Haider", "Tanzim Mahfuz", "Prabuddha Chakraborty"],
    desc: "Trace-first methodology that compares paired clean and perturbed executions of multi-agent LLM systems and records harm amplification as H_global/H_local, complementing attack success rate; instantiated in a finance-oriented seven-agent system, finds that single-specialist compromise produces the strongest amplification and shared-context corruption yields the highest attack success.",
    url: "https://arxiv.org/abs/2605.27489",
    tags: ["multi-agent", "harm amplification", "propagation", "benchmark"]
  },
  {
    title: "Evo-Attacker: Memory-Augmented Reinforcement Learning for Long-Horizon Tool Attacks on LLM-MAS",
    type: "paper",
    topic: "Multi-Agent Security",
    org: "Beihang University",
    year: 2026,
    authors: ["Bingyu Yan", "Xiaoming Zhang", "Jinyu Hou", "Chaozhuo Li"],
    desc: "Formulates tool attacks on LLM-MAS as a self-evolving, memory-augmented reinforcement learning process with a dynamic attack memory and deliberative reasoning to retrieve adversarial patterns; introduces Attack-Flow GRPO to optimize intermediate reasoning steps via terminal outcomes, addressing long-horizon credit assignment and consistently outperforming baselines.",
    url: "https://arxiv.org/abs/2605.25389",
    tags: ["multi-agent", "tool attack", "reinforcement learning", "memory"]
  },
  {
    title: "CASPIAN: Online Detection and Attribution of Cascade Attacks in LLM Multi-Agent Systems via Cross-Channel Causal Monitoring",
    type: "paper",
    topic: "Multi-Agent Security",
    org: "University of Texas at Dallas",
    year: 2026,
    authors: ["Kavana Venkatesh", "Jafar Isbarov", "Saad Amin", "Murat Kantarcioglu"],
    desc: "First framework providing unified cross-channel causal analysis of cascade behavior in LLM-MAS via online monitoring of dynamic influence propagation, estimated efficiently via late-interaction conditional transfer entropy; performs online causal attribution identifying origin, bridge, and amplifier agents and outperforms semantic guardrails and graph-based detectors with sub-1% relative overhead latency.",
    url: "https://arxiv.org/abs/2605.19240",
    tags: ["multi-agent", "cascade attack", "causal", "detection"]
  },
  {
    title: "GAMBIT: A Three-Mode Benchmark for Adversarial Robustness in Multi-Agent LLM Collectives",
    type: "paper",
    topic: "Multi-Agent Security",
    org: "Ghent University",
    year: 2026,
    authors: ["Alexandre Le Mercier", "Chris Develder", "Thomas Demeester"],
    desc: "Benchmark with three evaluation modes and two imposter-detection scores for multi-agent LLM systems, using chess as a deep-reasoning substrate and Gemini 3.1 Pro for agents; introduces an adaptive imposter agent that collapses collective performance while remaining essentially undetectable (50.5% F1 with a Gemini-based detector), and shows zero-shot evaluation can be highly misleading for adaptive adversaries.",
    url: "https://arxiv.org/abs/2605.09027",
    tags: ["multi-agent", "benchmark", "imposter", "adaptive"]
  },
  {
    title: "FlowSteer: Prompt-Only Workflow Steering Exposes Planning-Time Vulnerabilities in Multi-Agent LLM Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    org: "University of Washington",
    year: 2026,
    authors: ["Fanxiao Li", "Jiaying Wu", "Tingchao Fu", "Natasha Jaques"],
    desc: "Identifies that workflow position can amplify or suppress a malicious signal and sycophantic framing makes downstream agents relay it; translates these findings into FlowSteer, a prompt-only workflow steering attack that aligns malicious signals with influential task components to increase malicious success by up to 55% over naive prompting, with FlowGuard reducing success by up to 34%.",
    url: "https://arxiv.org/abs/2605.11514",
    tags: ["multi-agent", "planning", "workflow", "sycophancy"]
  },
  {
    title: "Extending OWASP MultiAgentic System Threat Modeling Guide",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Extends OWASP's Multi-Agentic System Threat Modeling Guide with new threat classes from MASEC research—including reasoning collapse in planner-executor chains, unsafe delegation escalation, emergent covert coordination, multi-agent backdoors, and affective prompt framing—with evaluation strategies for robustness, coordination, safety, and emergent behavior monitoring.",
    url: "https://arxiv.org/abs/2508.09815"
  },
  {
    title: "MultiAgent Systems Execute Arbitrary Malicious Code",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Demonstrates that adversarial content can hijack multi-agent system control and communication to invoke unsafe agents, achieving complete security breaches including arbitrary malicious code execution (58-90% on GPT-4o orchestrators, up to 100% in some configurations) and sensitive-data exfiltration, even when individual agents resist direct prompt injection.",
    url: "https://arxiv.org/abs/2503.12188"
  },
  {
    title: "Open Challenges MultiAgent Security Secure Systems AI Agents",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Introduces 'multi-agent security' as a new field studying threats that emerge or amplify through AI-agent interactions, with a taxonomy covering secret collusion, coordinated swarm attacks, network-effect privacy breaches, and dispersion-based evasion, plus security-utility and security-security trade-off analyses across distributed and decentralized settings.",
    url: "https://arxiv.org/abs/2505.02077"
  },
  {
    title: "Security Internet of Agents Attacks Countermeasures",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "An attack/vulnerability study in multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2505.08807"
  },
  {
    title: "Exposing Weak Links in Multi Agent Systems under Adversarial",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Presents SafeAgents, a framework for fine-grained MAS security assessment that exposes how plan construction, inter-agent context sharing, and fallback behaviors affect susceptibility to adversarial prompting, with the Dharma diagnostic measure identifying weak links across centralized, decentralized, and hybrid architectures on 4 datasets.",
    url: "https://arxiv.org/abs/2511.10949"
  },
  {
    title: "MultiFuzz A Dense Retrieval based Multi Agent System for",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Introduces MultiFuzz, a dense-retrieval multi-agent system for network protocol fuzzing that uses RFC document embeddings in a RAG pipeline and chain-of-thought reasoning to mutate protocol messages, improving branch coverage and exploring deeper protocol states than AFLNet, NSFuzz, and ChatAFL on RTSP.",
    url: "https://arxiv.org/abs/2508.14300"
  },
  {
    title: "Multi Agent Security Tax Trading Off Security and Collaboration",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Studied security trade-offs in multi-agent collaborations where an attacker compromises one agent to spread 'infectious malicious prompts' across the system; evaluated vaccination (false memory insertion) and generic safety-instruction defenses that reduce malicious-prompt spread but decrease collaborative capability, illustrating a security-collaboration trade-off.",
    url: "https://arxiv.org/abs/2502.19145"
  },
  {
    title: "TAMAS Benchmarking Adversarial Risks in Multi Agent LLM Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Introduces TAMAS (Threats and Attacks in Multi-Agent Systems), a benchmark with 5 scenarios, 300 adversarial instances across 6 attack types, 211 tools, and 100 harmless tasks, evaluated across 10 backbone LLMs and 3 agent configurations (Autogen, CrewAI), with the Effective Robustness Score metric capturing the safety-task-effectiveness trade-off.",
    url: "https://arxiv.org/abs/2511.05269"
  },
  {
    title: "Towards Unifying Quantitative Security Benchmarking for Multi Agent Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Defines Agent Cascading Injection (ACI)—an attack where a malicious input or tool exploit at one agent cascades through inter-agent trust to amplify downstream effects—and maps it to OWASP's emerging Agentic AI risk categories (Impact Chain, Orchestration Exploits), arguing for quantitative benchmarking frameworks for agent-to-agent protocols like A2A and MCP.",
    url: "https://arxiv.org/abs/2507.21146"
  },
  {
    title: "TitanCA: Lessons from Orchestrating LLM Agents to Discover 100+ CVEs",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    org: "Singapore Management University",
    year: 2026,
    authors: ["Ting Zhang", "Yikun Li", "Chengran Yang", "Ratnadira Widyasari"],
    desc: "Collaborative project between Singapore Management University and GovTech Singapore that orchestrates multiple LLM-powered agents into a unified vulnerability-discovery pipeline with four modules (matching, filtering, inspection, adaptation); applied to open-source software it has discovered 203 confirmed zero-day vulnerabilities and yielded 118 CVEs.",
    url: "https://arxiv.org/abs/2604.17860",
    tags: ["offensive cyber", "cve", "vulnerability discovery", "multi-agent"]
  },
  {
    title: "Co-RedTeam: Orchestrated Security Discovery and Exploitation with LLM Agents",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    org: "ServiceNow Research",
    year: 2026,
    authors: ["Pengfei He", "Ash Fox", "Lesly Miculicich", "Stefan Friedli"],
    desc: "Multi-agent framework mirroring real-world red-teaming workflows with security-domain knowledge, code-aware analysis, execution-grounded iterative reasoning, and long-term memory; decomposes vulnerability analysis into coordinated discovery and exploitation stages and achieves over 60% exploitation success and over 10% absolute improvement in detection over strong baselines.",
    url: "https://arxiv.org/abs/2602.02164",
    tags: ["offensive cyber", "red team", "vulnerability", "exploitation"]
  },
  {
    title: "Enhancing Linux Privilege Escalation Attack Capabilities of Local LLM Agents",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    org: "TU Wien",
    year: 2026,
    authors: ["Benjamin Probst", "Andreas Happe", "Jürgen Cito"],
    desc: "Maps failure modes of open-weight local LLMs on autonomous Linux privilege escalation to five concrete interventions (chain-of-thought prompting, retrieval-augmented generation, structured prompts, history compression, reflective analysis) implemented as extensions to hackingBuddyGPT; Llama3.1 70B exploits 83% of tested vulnerabilities with treatments, matching or outperforming cloud-based GPT-4o.",
    url: "https://arxiv.org/abs/2604.27143",
    tags: ["offensive cyber", "linux", "privilege escalation", "local llm"]
  },
  {
    title: "FuzzingBrain V2: A Multi-Agent LLM System for Automated Vulnerability Discovery and Reproduction",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    org: "Ant Group",
    year: 2026,
    authors: ["Ze Sheng", "Zhicheng Chen", "Qingxiao Xu", "Kewen Zhu"],
    desc: "Multi-agent system built on Google's OSS-Fuzz with a novel Suspicious Point abstraction for vulnerability localization, logic-driven hierarchical function analysis with dual-layer fuzzing, and MCP-based static/dynamic analysis tools; achieved 90% detection on the AIxCC 2025 Final C/C++ dataset and discovered 29 zero-day vulnerabilities across 12 open-source projects in real-world deployment.",
    url: "https://arxiv.org/abs/2605.21779",
    tags: ["offensive cyber", "fuzzing", "zero-day", "vulnerability discovery"]
  },
  {
    title: "A Framework for Evaluating Emerging Cyberattack Capabilities of AI",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "Introduces an evaluation framework that adapts existing cyberattack-chain frameworks for AI systems by analyzing 12,000+ real-world AI-cyber incidents from Google's Threat Intelligence Group into 7 attack-chain archetypes, performing bottleneck analysis to pinpoint AI-amplifiable attack phases and prioritize defenses.",
    url: "https://arxiv.org/abs/2503.11917"
  },
  {
    title: "CVE bench a benchmark for AI agents ability to",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "Introduces CVE-Bench, a real-world cybersecurity benchmark based on critical-severity Common Vulnerabilities and Exposures with a sandbox framework that lets LLM agents exploit vulnerable web applications in realistic conditions; the state-of-the-art agent resolves up to 13% of vulnerabilities.",
    url: "https://arxiv.org/abs/2503.17332"
  },
  {
    title: "CyberSecurity AI Evaluating agentic cybersecurity in attack defense CTFs",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "Empirically evaluates AI attack vs. defense effectiveness in 23 Attack/Defense CTF battlegrounds using the CAI parallel framework, finding defensive agents achieve 54.3% unconstrained patching success vs. 28.3% offensive initial access, but the defensive advantage disappears under operational constraints (availability maintenance, full-intrusion prevention).",
    url: "https://arxiv.org/abs/2510.17521"
  },
  {
    title: "OCCULT Evaluating Large Language Models for Offensive Cyber Operation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "Introduces OCCULT, an operational evaluation framework for LLM offensive cyber operation capabilities, with three prototype benchmarks including TACTL (multiple-choice threat-actor competency test) and CyberLayer simulation; finds DeepSeek-R1 correctly answers 90%+ of challenging offensive cyber knowledge tests.",
    url: "https://arxiv.org/abs/2502.15797"
  },
  {
    title: "PACEbench A Framework for Evaluating Practical AI Cyber Exploitation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "Presents PACEbench, a practical AI cyber-exploitation benchmark spanning single, blended, chained, and defense vulnerability exploitation scenarios, paired with PACEagent that emulates human pentesters via multi-phase reconnaissance/analysis/exploitation; seven frontier LLMs struggle with complex scenarios and none bypass defenses.",
    url: "https://arxiv.org/abs/2510.11688"
  },
  {
    title: "Good News for Script Kiddies? Evaluating Large Language Models for Automated Exploit Generation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    org: "University of New South Wales",
    year: 2025,
    authors: ["David Jin", "Qian Fu", "Yuekang Li"],
    desc: "First systematic study on LLM effectiveness in automated exploit generation, evaluating cooperativeness and technical proficiency on a refactored-vulnerability benchmark; finds GPT-4 and GPT-4o exhibit high cooperativeness comparable to uncensored models while Llama3 is most resistant, but no model successfully generates exploits for refactored labs, though GPT-4o's minimal errors highlight the potential for advancement.",
    url: "https://arxiv.org/abs/2505.01065",
    tags: ["offensive cyber", "exploit generation", "evaluation", "llm"]
  },
  {
    title: "AI Agent Smart Contract Exploit Generation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    org: "University College London",
    year: 2025,
    authors: ["Arthur Gervais", "Liyi Zhou"],
    desc: "Presents A1, an agentic system that transforms any LLM into an end-to-end smart-contract exploit generator with six domain-specific tools, validating outputs through on-chain execution; achieves a 63% success rate on the VERITE benchmark across 36 real-world contracts, extracting up to $8.59M per exploit, with economic analysis revealing attackers achieve profitability at $6K exploit values versus $60K for defenders.",
    url: "https://arxiv.org/abs/2507.05558",
    tags: ["offensive cyber", "smart contract", "blockchain", "exploit generation"]
  },
  {
    title: "FaultLine: Automated Proof-of-Vulnerability Generation Using LLM Agents",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    org: "Columbia University",
    year: 2025,
    authors: ["Vikram Nitin", "Baishakhi Ray", "Roshanak Zilouchian Moghaddam"],
    desc: "LLM agent workflow that traces input flow from source to sink, reasons about branch conditions, and generates proof-of-vulnerability test cases in a feedback-driven loop without language-specific static or dynamic analysis components; on a multilingual dataset of 100 known Java/C/C++ vulnerabilities, generates PoV tests for 16 projects versus 9 for CodeAct 2.1, a 77% relative improvement.",
    url: "https://arxiv.org/abs/2507.15241",
    tags: ["offensive cyber", "proof of vulnerability", "agent", "multi-language"]
  },
  {
    title: "Catastrophic Cyber Capabilities Benchmark 3CB Robustly Evaluating LLM Agent",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "Introduces 3CB (Catastrophic Cyber Capabilities Benchmark), a framework for rigorously assessing real-world offensive cyber capabilities of LLM agents across binary analysis, web, and other domains; frontier models like GPT-4o and Claude 3.5 Sonnet perform offensive reconnaissance/exploitation tasks while smaller open-source models exhibit limited capability.",
    url: "https://arxiv.org/abs/2410.09114"
  },
  {
    title: "Cybench A Framework for Evaluating Cybersecurity Capabilities and Risk",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "Introduces Cybench, a framework with 40 professional-level CTF tasks from 4 competitions (with subtasks for finer-grained evaluation), benchmarking 8 LLMs across 4 agent scaffolds; top models solve complete tasks that took human teams up to 11 minutes, while the hardest task took humans 24 hours 54 minutes.",
    url: "https://arxiv.org/abs/2408.08926"
  },
  {
    title: "LLM Agents Autonomously Hack Websites",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "Demonstrates LLM agents autonomously exploiting real websites. A landmark proof of autonomous OSAA capability.",
    url: "https://arxiv.org/abs/2402.06664"
  },
  {
    title: "Teams LLM Agents Exploit ZeroDay Vulnerabilities",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "Shows teams of agents exploiting zero-day vulnerabilities. Escalates OSAA to coordinated zero-day exploitation.",
    url: "https://arxiv.org/abs/2406.01637"
  },
  {
    title: "LLM Agents can Autonomously Exploit One day Vulnerabilities",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "An autonomous offensive system in autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2404.08144"
  },
  {
    title: "Purple Llama CyberSecEval A Secure Coding Benchmark for Language",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2023,
    desc: "Presents CyberSecEval, a comprehensive benchmark for evaluating LLM cybersecurity as coding assistants across two domains—insecure code generation propensity and compliance with cyberattack assistance requests—with automated test-case generation and evaluation pipeline tested on Llama 2, Code Llama, and OpenAI GPT families.",
    url: "https://arxiv.org/abs/2312.04724"
  },
  {
    title: "Pandora A Cyber Range Environment for the Safe Testing",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    desc: "A security analysis of autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=Pandora%20A%20Cyber%20Range%20Environment%20for%20the%20Safe%20Testing"
  },
  {
    title: "To Defend Against Cyber Attacks Teach AI Agents to Hack",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2026,
    desc: "An attack/vulnerability study in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2602.02595"
  },
  {
    title: "Pen-Strategist: A Reasoning Framework for Penetration Testing Strategy Formation and Analysis",
    type: "paper",
    topic: "Pentesting Frameworks",
    org: "University of Sydney",
    year: 2026,
    authors: ["Yasod Ginige", "Pasindu Marasinghe", "Sajal Jain", "Suranga Seneviratne"],
    desc: "Fine-tunes a Qwen-3-14B model via reinforcement learning on a domain-specific reasoning dataset for pentesting strategy derivation and pairs it with a CNN classifier for step prediction; integrated into PentestGPT, achieves a 47.5% improvement in subtask completion while surpassing GPT-5, with an 18% gain on CTFKnow and a user study showing superior performance versus Claude-4.6-Sonnet.",
    url: "https://arxiv.org/abs/2605.04499",
    tags: ["pentesting", "reasoning", "reinforcement learning", "framework"]
  },
  {
    title: "Towards Automated Pentesting with Large Language Models",
    type: "paper",
    topic: "Pentesting Frameworks",
    org: "University of Coimbra",
    year: 2026,
    authors: ["Ricardo Bessa", "Rui Claro", "João Trindade", "João Lourenço"],
    desc: "Presents RedShell, a privacy-preserving, hardware-efficient framework that fine-tunes LLMs to assist pentesters in generating offensive PowerShell code targeting Microsoft Windows vulnerabilities; achieves over 90% syntactic validity and strong semantic alignment with reference pentesting snippets, outperforming state-of-the-art counterparts in edit distance, with execution reliability validated in real-world-like testing.",
    url: "https://arxiv.org/abs/2604.11772",
    tags: ["pentesting", "powershell", "fine-tuning", "windows"]
  },
  {
    title: "From Controlled to the Wild: Evaluation of Pentesting Agents for the Real-World",
    type: "paper",
    topic: "Pentesting Frameworks",
    org: "University of Coimbra",
    year: 2026,
    authors: ["Pedro Conde", "Henrique Branquinho", "Valerio Mazzone", "Bruno Mendes"],
    desc: "Practical evaluation protocol that shifts AI pentesting-agent assessment from task completion to validated vulnerability discovery across complex multi-attack-surface targets, combining structured ground-truth with LLM-based semantic matching, bipartite resolution for ambiguous scoring, continuous ground-truth maintenance, and repeated cumulative evaluation for stochastic agents.",
    url: "https://arxiv.org/abs/2605.10834",
    tags: ["pentesting", "evaluation", "real-world", "protocol"]
  },
  {
    title: "Automation-Exploit: A Multi-Agent LLM Framework for Adaptive Offensive Security with Digital Twin-Based Risk-Mitigated Exploitation",
    type: "paper",
    topic: "Pentesting Frameworks",
    org: "University of Salerno",
    year: 2026,
    authors: ["Biagio Andreucci", "Arcangelo Castiglione"],
    desc: "Fully autonomous multi-agent framework bridging reconnaissance and exploitation by exfiltrating executables across multiple protocols to fuel logical and binary attack chains; introduces an adaptive safety architecture that dynamically instantiates a cross-platform digital twin with strict state synchronization for memory-corruption flaws, enabling risk-mitigated 'one-shot' execution on physical targets.",
    url: "https://arxiv.org/abs/2604.22427",
    tags: ["pentesting", "digital twin", "multi-agent", "exploitation"]
  },
  {
    title: "Post-Training Local LLM Agents for Linux Privilege Escalation with Verifiable Rewards",
    type: "paper",
    topic: "Pentesting Frameworks",
    org: "CISPA Helmholtz Center for Information Security",
    year: 2026,
    authors: ["Philipp Normann", "Andreas Happe", "Jürgen Cito", "Daniel Arp"],
    desc: "Two-stage post-training pipeline (SFT on procedurally generated privilege-escalation environments, then RL with verifiable rewards) producing PrivEsc-LLM, a 4B-parameter local model achieving 95.8% success on a held-out 12-scenario Linux priv-esc benchmark, nearly matching Claude Opus 4.6 at 97.5% while reducing expected inference cost per successful escalation by over 100x.",
    url: "https://arxiv.org/abs/2603.17673",
    tags: ["pentesting", "local llm", "rl", "privilege escalation"]
  },
  {
    title: "AutoPentester LLM Agent Framework Automated Pentesting",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Introduces AutoPentester, an LLM agent framework that automates pentesting from a target IP using common security tools iteratively, generating dynamic attack strategies from prior tool outputs; on Hack The Box it achieves 27% better subtask completion and 39.5% more vulnerability coverage than PentestGPT with fewer human interactions.",
    url: "https://arxiv.org/abs/2510.05605"
  },
  {
    title: "Cybersecurity AI OT AI Top10 Ranker Dragos OT CTF",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Examines Cybersecurity AI (CAI) performance in the Dragos OT CTF 2025 ICS competition (1,000+ teams), finding CAI reached Rank 1 between hours 7-8, completed 32 of 34 challenges, and matched or exceeded expert human crews in early-phase OT incident response while showing limits in sustained multi-day operations.",
    url: "https://arxiv.org/abs/2511.05119"
  },
  {
    title: "Dynamic Risk Assessments Offensive Cybersecurity Agents",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Argues that frontier-model cybersecurity audits should account for adversaries' real-world degrees of freedom, demonstrating that with just 8 H100 GPU hours an attacker can improve an agent's InterCode CTF capability by 40%+ over baseline without external assistance—motivating dynamic risk assessments for offensive cybersecurity agents.",
    url: "https://arxiv.org/abs/2505.18384"
  },
  {
    title: "xOffense AI Driven Autonomous Penetration Testing MultiAgent",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Presents xOffense, an autonomous multi-agent penetration-testing framework built on a fine-tuned Qwen3-32B with specialized agents for reconnaissance, scanning, and exploitation, achieving a 79.17% sub-task completion rate on AutoPenBench and AI-Pentest-Benchmark and outperforming VulnBot and PentestGPT.",
    url: "https://arxiv.org/abs/2509.13021"
  },
  {
    title: "CAI An Open Bug Bounty Ready Cybersecurity AI",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Introduces CAI (Cybersecurity AI), an open-source framework of specialized AI agents for security testing that defines autonomy levels in cybersecurity, solves CTF challenges up to 3,600x faster than humans (11x on average), and reaches top-30 in Spain on Hack The Box, enabling non-professionals to discover CVSS 4.3-7.5 bugs in bug bounty exercises.",
    url: "https://arxiv.org/abs/2504.06017"
  },
  {
    title: "RedTeamLLM Agentic AI Framework Offensive Security",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An agentic framework orchestrating offensive-security tasks (RedTeamLLM). A direct OSAA red-team automation framework.",
    url: "https://arxiv.org/abs/2505.06913"
  },
  {
    title: "Comparing AI Agents to Cybersecurity Professionals in Real World",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Presents the first comprehensive evaluation of AI agents vs human cybersecurity professionals on a live ~8,000-host university network, introducing ARTEMIS (a multi-agent framework with dynamic prompt generation and auto-triage) that placed second overall—discovering 9 valid vulnerabilities and outperforming 9 of 10 human participants.",
    url: "https://arxiv.org/abs/2512.09882"
  },
  {
    title: "Multi agent penetration testing AI for the web",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Presents MAPTA, a multi-agent system for autonomous web application security assessment that combines LLM orchestration with tool-grounded execution and end-to-end exploit validation, achieving 76.9% success on the XBOW benchmark and discovering critical RCEs and command injections in popular open-source repositories.",
    url: "https://arxiv.org/abs/2508.20816"
  },
  {
    title: "Penetration Testing of Agentic AI A Comparative Security Analysis",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Performs the first systematic comparative penetration testing of agentic AI across 5 models and 2 frameworks (AutoGen, CrewAI) using 13 attack scenarios and 130 test cases, revealing refusal rates vary from 15.4% to 52.3% and identifying a 'hallucinated compliance' defense pattern.",
    url: "https://arxiv.org/abs/2512.14860"
  },
  {
    title: "Shell or Nothing Real World Benchmarks and Memory Activated",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Introduces TermiBench (510 hosts, 25 services, 30 CVEs) — the first real-world, agent-oriented pentesting benchmark where the goal is full system control rather than flag finding—and TermiAgent, a multi-agent framework using Located Memory Activation and structured code-understanding exploit arsenals that outperforms state-of-the-art agents on time and cost.",
    url: "https://arxiv.org/abs/2509.09207"
  },
  {
    title: "VulnBot Autonomous Penetration Testing for A Multi Agent Collaborative",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Introduces VulnBot, an automated penetration-testing framework that simulates human team workflows via a multi-agent system coordinated through a penetration task graph (PTG) across reconnaissance, scanning, and exploitation phases, outperforming GPT-4 and Llama3 on real-world machines.",
    url: "https://arxiv.org/abs/2501.13411"
  },
  {
    title: "PentestEval: Benchmarking LLM-based Penetration Testing with Modular and Stage-Level Design",
    type: "paper",
    topic: "Pentesting Frameworks",
    org: "Nanyang Technological University",
    year: 2025,
    authors: ["Ruozhao Yang", "Mingfei Cheng", "Gelei Deng", "Tianwei Zhang"],
    desc: "First comprehensive benchmark for evaluating LLMs across six decomposed penetration-testing stages (Information Collection, Weakness Gathering, Attack Decision-Making, Exploit Generation, Revision) with 346 tasks across 12 realistic vulnerable scenarios; end-to-end pipelines reach only 31% success rate, and existing systems like PentestGPT, PentestAgent, and VulnBot exhibit similar limitations with autonomous agents failing almost entirely.",
    url: "https://arxiv.org/abs/2512.14233",
    tags: ["pentesting", "benchmark", "stage-level", "evaluation"]
  },
  {
    title: "PentestAgent LLM Agents Automated Penetration Testing",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "Presents PentestAgent, an LLM-based automated penetration testing framework that uses multi-agent collaboration and Retrieval-Augmented Generation to automate intelligence gathering, vulnerability analysis, and exploitation, demonstrating superior task completion over prior approaches.",
    url: "https://arxiv.org/abs/2411.05185"
  },
  {
    title: "AutoPenBench A Vulnerability Testing Benchmark for Generative Agents",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "Introduces AutoPenBench, an open benchmark of 33 vulnerable-system tasks for evaluating generative agents in automated penetration testing, with in-vitro and real-world difficulty levels and generic/specific milestones; the fully autonomous agent achieves 21% success while the human-assisted agent reaches 64%.",
    url: "https://arxiv.org/abs/2410.03225"
  },
  {
    title: "BreachSeek A Multi Agent Automated Penetration Tester",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "Introduces BreachSeek, a multi-agent automated penetration-testing platform built on LangChain/LangGraph that orchestrates autonomous agents through vulnerability identification, attack simulation, exploit execution, and reporting, successfully exploiting vulnerable machines in local network evaluations.",
    url: "https://arxiv.org/abs/2409.03789"
  },
  {
    title: "CIPHER Cybersecurity Intelligent Penetration testing Helper for Ethical Researcher",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "Develops CIPHER, a fine-tuned LLM trained on 300+ pentesting write-ups and tool documentation, and introduces the Findings-Action-Reasoning-Results (FARR) Flow augmentation to create a fully automated pentesting benchmark; CIPHER outperforms larger models like Llama 3 70B on insane-difficulty machines.",
    url: "https://arxiv.org/abs/2408.11650"
  },
  {
    title: "PentestGPT LLM Empowered Automatic Penetration Testing",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An influential LLM-driven automated penetration-testing tool (PentestGPT). A foundational OSAA offensive agent.",
    url: "https://arxiv.org/abs/2308.06782"
  },
  {
    title: "HackSynth LLM Agent and Evaluation Framework for Autonomous Penetration",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "Introduces HackSynth, a dual-module (Planner + Summarizer) LLM agent for autonomous penetration testing, along with two new CTF benchmark sets from PicoCTF and OverTheWire totaling 200 challenges; experiments across multiple LLMs show GPT-4o-powered HackSynth outperforms what GPT-4o's system card suggests.",
    url: "https://arxiv.org/abs/2412.01778"
  },
  {
    title: "PenHeal: A Two-Stage LLM Framework for Automated Pentesting and Optimal Remediation",
    type: "paper",
    topic: "Pentesting Frameworks",
    org: "New York University",
    year: 2024,
    authors: ["Junjie Huang", "Quanyan Zhu"],
    desc: "Two-stage LLM-based framework integrating a Pentest Module that detects vulnerabilities and a Remediation Module that recommends strategies, facilitated through Counterfactual Prompting and an Instructor module using external knowledge; improves vulnerability coverage by 31%, increases remediation effectiveness by 32%, and reduces cost by 46% compared to baseline models.",
    url: "https://arxiv.org/abs/2407.17788",
    tags: ["pentesting", "remediation", "counterfactual", "framework"]
  },
  {
    title: "Collaborative penetration testing suite for emerging generative AI algorithms",
    type: "paper",
    topic: "Pentesting Frameworks",
    desc: "Proposes a collaborative penetration testing suite that integrates DAST/SAST/IAST tools (OWASP ZAP, Burp Suite, SonarQube, Fortify), Hyperledger Fabric blockchain logging, lattice-based quantum-resistant cryptography, and AI red-team simulations to secure generative AI against classical and quantum attacks.",
    url: "https://scholar.google.com/scholar?q=Collaborative%20penetration%20testing%20suite%20for%20emerging%20generative%20AI%20algorithms"
  },
  {
    title: "LLM Agent Leak Data Exfiltration Backdoored Tool Use",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "Introduces Back-Reveal, a data-exfiltration attack that embeds semantic triggers in fine-tuned tool-use LLM agents; when triggered, the agent invokes memory-access tool calls to retrieve user context and exfiltrates it via disguised retrieval calls, with multi-turn interaction amplifying cumulative information leakage over time.",
    url: "https://arxiv.org/abs/2604.05432"
  },
  {
    title: "Observable Channels Privacy Leakage LLM Agent Pipelines",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "Presents CIPL (Channel Inversion for Privacy Leakage), a unified channel-oriented measurement interface for LLM agent pipeline privacy leakage, showing memory behaves as a near-saturated high-risk special case while retrieval-mediated targets show frequent but incomplete leakage and tool-mediated leakage depends on observation surface and provider behavior.",
    url: "https://arxiv.org/abs/2603.22751"
  },
  {
    title: "ADAM: A Systematic Data Extraction Attack on Agent Memory via Adaptive Querying",
    type: "paper",
    topic: "Privacy & Exfiltration",
    org: "Purdue University",
    year: 2026,
    authors: ["Xingyu Lyu", "Jianfeng He", "Ning Wang", "Yidan Hu"],
    desc: "Estimates the data distribution of a victim agent's memory and uses an entropy-guided query strategy to maximize privacy leakage, achieving up to 100% attack success rate against agent memory modules; substantially outperforms state-of-the-art query-based privacy attacks and exposes an urgent need for memory-privacy defenses.",
    url: "https://arxiv.org/abs/2604.09747",
    tags: ["privacy", "memory", "exfiltration", "query attack"]
  },
  {
    title: "Spore: Efficient and Training-Free Privacy Extraction Attack on LLMs via Inference-Time Hybrid Probing",
    type: "paper",
    topic: "Privacy & Exfiltration",
    org: "Beihang University",
    year: 2026,
    authors: ["Yu Cui", "Ruiqing Yue", "Hang Fu", "Sicheng Pan"],
    desc: "Training-free privacy-extraction attack against LLM agent memory that works in both black-box (single-query candidate-set recovery) and gray-box (multi-ranked token leverage) settings, with an information-theoretic analysis showing high query efficiency and substantial per-query leakage; consistently bypasses detection and strong safety alignment across frontier LLMs.",
    url: "https://arxiv.org/abs/2604.23711",
    tags: ["privacy", "memory", "inference-time", "black-box"]
  },
  {
    title: "GraphSteal: Structural Knowledge Stealing from Graph RAG via Traversal Reconstruction",
    type: "paper",
    topic: "Privacy & Exfiltration",
    org: "University of Galway",
    year: 2026,
    authors: ["Jinze Gu", "Qinghua Mao", "Xi Lin", "Jun Wu"],
    desc: "Turns Graph RAG systems into structural oracles: through adaptive black-box interactions, an adversary elicits sufficient relational evidence to reconstruct over 90% of the hidden knowledge graph using Depth-Wise Heuristic Search for node attributes and Breadth-Wise Diffusion Search for topology, with existing guardrails providing limited defense.",
    url: "https://arxiv.org/abs/2605.28645",
    tags: ["privacy", "graph rag", "knowledge stealing", "reconstruction"]
  },
  {
    title: "AgentDAM Privacy Leakage Evaluation for Autonomous Web Agents",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2025,
    desc: "A benchmark for evaluating agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://arxiv.org/abs/2503.09780"
  },
  {
    title: "Automating Prompt Leakage Attacks on Large Language Models Using",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2025,
    desc: "Presents an agentic prompt-leakage testing framework using AG2 (AutoGen) multi-agent teams to elicit system prompts from target LLMs, with a cryptography-inspired definition of prompt-leakage safety requiring attacker indistinguishability between original and stripped prompts—bridging automated threat modeling and practical LLM security.",
    url: "https://arxiv.org/abs/2502.12630"
  },
  {
    title: "Beyond Data Privacy: New Privacy Risks for Large Language Models",
    type: "paper",
    topic: "Privacy & Exfiltration",
    org: "Purdue University",
    year: 2025,
    authors: ["Yuntao Du", "Zitao Li", "Ninghui Li", "Bolin Ding"],
    desc: "Argues that LLM deployment and weaponized autonomous abilities create new privacy vulnerabilities beyond training-data memorization, enabling both inadvertent data leakage and malicious exfiltration from LLM-powered systems, and adversaries can launch sophisticated large-scale privacy attacks threatening financial security and societal trust.",
    url: "https://arxiv.org/abs/2509.14278",
    tags: ["privacy", "exfiltration", "threat model", "deployment"]
  },
  {
    title: "Model Inversion Attacks on Llama 3: Extracting PII from Large Language Models",
    type: "paper",
    topic: "Privacy & Exfiltration",
    org: "Independent",
    year: 2025,
    authors: ["Sathesh P. Sivashanmugam"],
    desc: "Investigates model inversion attacks on Llama 3.2, querying the model with carefully crafted prompts to extract personally identifiable information such as passwords, email addresses, and account numbers; highlights the vulnerability of even smaller LLMs to privacy attacks and motivates defenses like differential privacy and data sanitization.",
    url: "https://arxiv.org/abs/2507.04478",
    tags: ["privacy", "model inversion", "pii", "extraction"]
  },
  {
    title: "The Man Behind the Sound: Demystifying Audio Private Attribute Profiling via Multimodal Large Language Model Agents",
    type: "paper",
    topic: "Privacy & Exfiltration",
    org: "ShanghaiTech University",
    year: 2025,
    authors: ["Lixu Wang", "Kaixiang Yao", "Xinfeng Li", "Dong Yang"],
    desc: "Introduces audio private attribute profiling: MLLM agents infer sensitive personal attributes (age, gender, accent, emotional state) from audio that can be covertly captured; releases the AP^2 benchmark and proposes Gifts, a hybrid ALM+LLM multi-agent framework that significantly outperforms baselines despite ALM hallucinations in long-context generation.",
    url: "https://arxiv.org/abs/2507.10016",
    tags: ["privacy", "audio", "profiling", "multimodal"]
  },
  {
    title: "LeakAgent: RL-based Red-teaming Agent for LLM Privacy Leakage",
    type: "paper",
    topic: "Privacy & Exfiltration",
    org: "Renmin University of China",
    year: 2024,
    authors: ["Yuzhou Nie", "Zhun Wang", "Ye Yu", "Xian Wu"],
    desc: "Trains an open-source LLM via reinforcement learning as a black-box attack agent that generates adversarial prompts for both training-data and system-prompt extraction, with a fine-grained reward function and exploration/exploitation mechanisms; outperforms rule-based approaches in data extraction and automated methods in system-prompt leakage, and extracts prompts from real GPT Store applications.",
    url: "https://arxiv.org/abs/2412.05734",
    tags: ["privacy", "red teaming", "reinforcement learning", "system prompt"]
  },
  {
    title: "Automating Agent Hijacking Structural Template Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2026,
    desc: "Introduces Phantom, an automated agent hijacking framework that targets chat template tokens separating system/user/assistant/tool instructions via Structured Template Injection; using multi-level augmentation, a Template Autoencoder, and Bayesian optimization, it significantly outperforms baselines on Qwen/GPT/Gemini and uncovered 70+ confirmed vulnerabilities in commercial products.",
    url: "https://arxiv.org/abs/2602.16958"
  },
  {
    title: "PI-Hunter: Automated Red-Teaming for Exposing and Localizing Prompt Injections",
    type: "paper",
    topic: "Prompt Injection",
    org: "ServiceNow Research",
    year: 2026,
    authors: ["Pengfei He", "Lesly Miculicich", "Vishesh Sharma", "Ash Fox"],
    desc: "An agentic auditing framework that constructs source-aware test cases and iteratively evolves them to surface latent prompt-injection instructions hidden inside external agent environments, substantially improving vulnerability-exposure coverage over automated red-teaming baselines even under deployed defenses.",
    url: "https://arxiv.org/abs/2606.12737",
    tags: ["prompt injection", "red teaming", "agent security", "indirect injection"]
  },
  {
    title: "IterInject: Indirect Prompt Injection Against LLM Agents via Feedback-Guided Iterative Optimization",
    type: "paper",
    topic: "Prompt Injection",
    org: "Tsinghua University",
    year: 2026,
    authors: ["Zixuan Chen", "Jiaxiang Chen", "Li Luo", "Ke Xu"],
    desc: "Closes the loop between injection, diagnosis, and refinement with a rule-based diagnoser and an LLM optimizer that conditions on full optimization history; on AgentDojo and InjectAgent it outperforms static and adaptive baselines and reaches full success on 5 of 9 Claude Code targets, with a mechanistic analysis tying success to an attention-mediated threshold in mid-to-late layers.",
    url: "https://arxiv.org/abs/2605.24659",
    tags: ["prompt injection", "indirect injection", "optimization", "agent attack"]
  },
  {
    title: "LivePI: More Realistic Benchmarking of Agents Against Indirect Prompt Injection",
    type: "paper",
    topic: "Prompt Injection",
    org: "University of Pennsylvania",
    year: 2026,
    authors: ["Lei Zhao", "Abhay Bhaskar", "Edgar Dobriban"],
    desc: "Runs indirect prompt-injection tests on a real virtual machine with live email, chat, web, file, repository, and wallet interfaces across seven input surfaces; measured total attack success rates of 10.7%-29.6% across five frontier backbones, with group-chat injection uniformly succeeding and repository-link attacks producing high-severity failures.",
    url: "https://arxiv.org/abs/2605.17986",
    tags: ["prompt injection", "benchmark", "indirect injection", "production"]
  },
  {
    title: "Indirect Prompt Injection in the Wild: An Empirical Study of Prevalence, Techniques, and Objectives",
    type: "paper",
    topic: "Prompt Injection",
    org: "CISPA Helmholtz Center for Information Security",
    year: 2026,
    authors: ["Soheil Khodayari", "Xuenan Zhang", "Bhupendra Acharya", "Giancarlo Pellegrino"],
    desc: "Scans 1.2B URLs from 24.8M hosts and validates 15.3K indirect prompt-injection instances across 11.7K pages, characterizing their objectives, delivery mechanisms, and visibility; finds that about 70% of instructions target machines rather than humans, hiding in non-rendered HTML, with model compliance reaching up to 8% on plain-text inputs in controlled experiments.",
    url: "https://arxiv.org/abs/2604.27202",
    tags: ["prompt injection", "empirical study", "web", "indirect injection"]
  },
  {
    title: "AgentVisor: Defending LLM Agents Against Prompt Injection via Semantic Virtualization",
    type: "paper",
    topic: "Prompt Injection",
    org: "Beihang University",
    year: 2026,
    authors: ["Zonghao Ying", "Haozheng Wang", "Jiangfan Liu", "Quanchen Zou"],
    desc: "Borrows from operating-system virtualization to enforce semantic privilege separation in LLM agents, intercepting tool calls through a trusted semantic visor and using one-shot self-correction to recover from attacks; reduces attack success rate to 0.65% with only a 1.45% average utility decrease.",
    url: "https://arxiv.org/abs/2604.24118",
    tags: ["prompt injection", "defense", "privilege separation", "virtualization"]
  },
  {
    title: "Hiding in Plain Floats: Steganographic Carriers for Indirect Prompt and Content Injection",
    type: "paper",
    topic: "Prompt Injection",
    org: "Independent",
    year: 2026,
    authors: ["Mudit Sinha", "Sanika Chavan"],
    desc: "Demonstrates that prompt-injection payloads caught in plain English slip past dual-layer text classifiers (Prompt Guard 2 + TF-IDF) when transported as structured float-array parameters and reconstructed as fragmented telemetry; across 14,400 real-model trials the float-array carrier preserves 94.3% leakage attack success rate against the strongest evaluated defense.",
    url: "https://arxiv.org/abs/2606.08403",
    tags: ["prompt injection", "steganography", "content injection", "evasion"]
  },
  {
    title: "VATS: Exploiting Implicit Authority in Error-Path Injection via Systematic Mutation",
    type: "paper",
    topic: "Prompt Injection",
    org: "Independent",
    year: 2026,
    authors: ["Harshil Patel", "Kunal Pai"],
    desc: "Shows that tool error messages in MCP-style agents carry implicit authority that bypasses safety heuristics; a mutation-driven framework evolving adversarial payloads across seven dimensions triples standard indirect prompt-injection success on Gemini 3.1 Pro, GPT-5.5, GLM-5.1, and Qwen3-Coder, reaching up to 100% compliance.",
    url: "https://arxiv.org/abs/2606.07992",
    tags: ["prompt injection", "mcp", "error path", "mutation"]
  },
  {
    title: "GitInject: Real-World Prompt Injection Attacks in AI-Powered CI/CD Pipelines",
    type: "paper",
    topic: "Prompt Injection",
    org: "University of Central Florida",
    year: 2026,
    authors: ["Jafar Isbarov", "Umid Suleymanov", "Ilia Shumailov", "Murat Kantarcioglu"],
    desc: "Provisions ephemeral GitHub repositories to launch real prompt-injection attacks against live AI-powered CI/CD workflows; documents eleven named attacks including config-file injection, credential exfiltration, judgment manipulation, and availability disruption, finding every tested provider susceptible in default configuration due to structural credential-handling issues.",
    url: "https://arxiv.org/abs/2606.09935",
    tags: ["prompt injection", "ci/cd", "supply chain", "real-world"]
  },
  {
    title: "Caught in the Act(ivation): Toward Pre-Output and Multi-Turn Detection of Credential Exfiltration by LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    org: "Independent",
    year: 2026,
    authors: ["Kargi Chauhan", "Pratibha Revankar"],
    desc: "Combines three complementary defenses against credential exfiltration via indirect prompt injection: pre-output activation probes, format-specific honeytokens calibrated with split conformal prediction, and a cumulative multi-turn information-flow leakage budget; activation features separate benign from credential-seeking prompts with high accuracy even under held-out encodings.",
    url: "https://arxiv.org/abs/2606.04141",
    tags: ["prompt injection", "credential exfiltration", "honeytoken", "detection"]
  },
  {
    title: "Assessing Automated Prompt Injection Attacks in Agentic Environments",
    type: "paper",
    topic: "Prompt Injection",
    org: "ETH Zurich",
    year: 2026,
    authors: ["David Hofer", "Edoardo Debenedetti", "Florian Tramèr"],
    desc: "Adapts GCG (white-box) and TAP (black-box) automated attacks to agentic settings in AgentDojo across 80 task pairs and finds that black-box optimization substantially outperforms gradient-based methods; task-universal attacks transfer to unseen domains but attacks optimized on smaller open-source models fail to transfer to frontier models like GPT-5.",
    url: "https://arxiv.org/abs/2606.10525",
    tags: ["prompt injection", "automated attack", "gcg", "tap"]
  },
  {
    title: "Context Manipulation Web Agents Susceptible Corrupted Memory",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Introduces and formalizes 'plan injection,' a context manipulation attack that corrupts web agents' internal task representations by targeting client-side/third-party memory systems; on Browser-use and Agent-E it bypasses prompt-injection defenses with up to 3x higher success, with 'context-chained injections' increasing privacy exfiltration success by 17.7%.",
    url: "https://arxiv.org/abs/2506.17318"
  },
  {
    title: "Les Dissonances CrossTool Harvesting Pool of Tools LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Introduces Cross-Tool Harvesting and Polluting (XTHP), a novel threat that hijacks multi-tool LLM agent task control flows to collect and pollute confidential information, along with Chord—a dynamic scanner that finds 75% of 66 real-world tools from LangChain and LlamaIndex vulnerable to XTHP attacks.",
    url: "https://arxiv.org/abs/2504.03111"
  },
  {
    title: "Memory Poisoning Attack Defense Memory Based LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Empirically evaluates memory poisoning attacks (MINJA) and defenses in Electronic Health Record agents across GPT-4o-mini, Gemini-2.0-Flash, and Llama-3.1-8B using MIMIC-III data, finding realistic pre-existing memories dramatically reduce attack effectiveness, and proposes Input/Output Moderation and trust-aware Memory Sanitization defenses.",
    url: "https://arxiv.org/abs/2601.05504"
  },
  {
    title: "Simple Prompt Injection Leak Personal Data LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Examines how prompt injection causes tool-calling agents to leak personal data observed during task execution, developing data-flow-based attacks on a fictitious banking agent integrated into AgentDojo; LLMs show 15-50 percentage point utility drops under attack, with average attack success rates around 20% that some defenses reduce to zero.",
    url: "https://arxiv.org/abs/2506.01055"
  },
  {
    title: "On the Security of Tool Invocation Prompts for LLM",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Performs the first systematic red teaming of 6 real-world coding agents (Cursor, Claude Code, Copilot, Windsurf, Cline, Trae), discovering the ToolLeak vulnerability (prompt exfiltration via benign argument retrieval) and achieving remote code execution on every tested agent-LLM pair via a two-channel prompt injection in tool descriptions and return values.",
    url: "https://arxiv.org/abs/2509.05755"
  },
  {
    title: "MemoryGraft Persistent Compromise LLM Agents Poisoned Experience",
    type: "paper",
    topic: "Prompt Injection",
    year: 2024,
    desc: "Introduces MemoryGraft, an indirect injection attack that compromises LLM agents by implanting malicious successful experiences into long-term memory, exploiting the agent's semantic imitation heuristic so that a small set of poisoned procedure templates persist and trigger behavioral drift across sessions on MetaGPT's DataInterpreter with GPT-4o.",
    url: "https://arxiv.org/abs/2512.16962"
  },
  {
    title: "Not What Signed Up For Indirect Prompt Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2023,
    desc: "Seminal paper introducing indirect prompt injection of LLM-integrated applications. Foundational OSAA attack class for tool-using agents.",
    url: "https://arxiv.org/abs/2302.12173"
  },
  {
    title: "Agentic AI as Cybersecurity Attack Surface",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Systematizes agentic runtime security into a unified framework covering data supply chain attacks (transient context injection vs. persistent memory poisoning) and tool supply chain attacks (discovery, implementation, invocation), identifies the 'Viral Agent Loop' where agents become vectors for self-propagating generative worms, and argues for a Zero-Trust Runtime Architecture.",
    url: "https://arxiv.org/abs/2602.19555"
  },
  {
    title: "MCP Threat Modeling Vulnerabilities Tool Poisoning Prompt Injection",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Performs STRIDE/DREAD threat modeling on MCP across five components (Host/Client, LLM, Server, Data Stores, Authorization Server), revealing tool poisoning—malicious instructions embedded in tool metadata—as the most prevalent client-side vulnerability; benchmarks 7 MCP clients and proposes multi-layered defenses including static metadata analysis, model decision path tracking, and behavioral anomaly detection.",
    url: "https://arxiv.org/abs/2603.22489"
  },
  {
    title: "SoK Security Autonomous LLM Agents Agentic Commerce",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Surveys the agent protocol (e.g. MCP) security literature. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2604.15367"
  },
  {
    title: "Towards Secure Agent Skills Architecture Threat Taxonomy Security",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Presents the first comprehensive security analysis of the Agent Skills framework, defining a four-phase lifecycle (Creation, Distribution, Deployment, Execution), a threat taxonomy of 7 categories and 17 scenarios across 3 attack layers, validated by 5 confirmed security incidents and revealing structural flaws (no data-instruction boundary, single-approval persistent trust, no mandatory marketplace review).",
    url: "https://arxiv.org/abs/2604.02837"
  },
  {
    title: "Breaking the Protocol Security Analysis of the Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Presents the first formal security analysis of the MCP specification, identifying three protocol-level vulnerabilities (no capability attestation, unauthenticated bidirectional sampling, implicit trust propagation) and introducing MCPBench across 847 attack scenarios showing MCP amplifies ASR by 23-41% vs. equivalent non-MCP integrations; proposes the backward-compatible MCPSec extension reducing ASR from 52.8% to 12.4%.",
    url: "https://arxiv.org/abs/2601.17549"
  },
  {
    title: "Blue Teaming Function-Calling Agents",
    type: "paper",
    topic: "Protocol Security",
    org: "Imperial College London",
    year: 2026,
    authors: ["Greta Dolcetti", "Giulio Zizzo", "Sergio Maffeis"],
    desc: "Empirically evaluates robustness of four open-source LLMs claiming function-calling capabilities against three attacks and measures effectiveness of eight defenses; results show these models are not safe by default and existing defenses are not yet employable in real-world scenarios.",
    url: "https://arxiv.org/abs/2601.09292",
    tags: ["protocol", "function calling", "blue team", "defense"]
  },
  {
    title: "Automatic Red Teaming LLM based Agents with Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "An autonomous offensive system in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2509.21011"
  },
  {
    title: "MCPSecBench A Systematic Security Benchmark and Playground for Testing",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "Introduces MCPSecBench, the first systematic MCP security benchmark formalizing secure MCP specifications and a taxonomy of 17 attack types across 4 attack surfaces, integrating prompt datasets, MCP servers/clients, attack scripts, GUI test harness, and protection mechanisms; evaluation across 3 MCP platforms shows all surfaces compromise and current defenses achieve <30% success.",
    url: "https://arxiv.org/abs/2508.13220"
  },
  {
    title: "MCPTox A Benchmark for Tool Poisoning Attack on Real",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "Introduces MCPTox, the first benchmark systematically evaluating Tool Poisoning attacks on 45 live real-world MCP servers and 353 authentic tools with 1,312 malicious test cases across 10 risk categories; 20 prominent LLM agents show widespread vulnerability (o1-mini reaches 72.8% ASR) and refusal rates under 3%, with more capable models often more susceptible.",
    url: "https://arxiv.org/abs/2508.14925"
  },
  {
    title: "MCP Security Bench MSB Benchmarking Attacks Against Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "Introduces MSB (MCP Security Benchmark), an end-to-end suite measuring LLM agent resistance to 12 MCP-specific attacks (name collision, preference manipulation, prompt injection in descriptions, out-of-scope parameters, user-impersonating responses, etc.) across 9 agents, 10 domains, and 405 tools via 2,000 attack instances, proposing the Net Resilient Performance metric.",
    url: "https://arxiv.org/abs/2510.15994"
  },
  {
    title: "Systematic Analysis of MCP Security",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "Introduces MCPXKIT (MCP eXploit Toolkit), which categorizes and implements 31 MCP attack methods across direct tool injection, indirect tool injection, malicious user attacks, and LLM-inherent attacks, with quantitative analysis revealing agents' blind reliance on tool descriptions, file-based attack sensitivity, chain attacks via shared context, and difficulty distinguishing external data from commands.",
    url: "https://arxiv.org/abs/2508.12538"
  },
  {
    title: "BlockA2A: Towards Secure and Verifiable Agent-to-Agent Interoperability",
    type: "paper",
    topic: "Protocol Security",
    org: "Tsinghua University",
    year: 2025,
    authors: ["Zhenhua Zou", "Zhuotao Liu", "Lepeng Zhao", "Qiuyang Zhan"],
    desc: "First unified multi-agent trust framework for secure and verifiable agent-to-agent interoperability using decentralized identifiers for cross-domain authentication, blockchain-anchored ledgers for auditability, and smart contracts for context-aware access control; a Defense Orchestration Engine neutralizes prompt-based, communication-based, behavioral, and systemic MAS attacks with sub-second overhead.",
    url: "https://arxiv.org/abs/2508.01332",
    tags: ["protocol", "a2a", "blockchain", "authentication"]
  },
  {
    title: "Whispering Agents: An Event-driven Covert Communication Protocol For the Internet of Agents",
    type: "paper",
    topic: "Protocol Security",
    org: "Independent",
    year: 2025,
    authors: ["Kaibo Huang", "Yukun Wei", "Wansheng Wu", "Tianhua Zhang"],
    desc: "Formalizes the Covert Event Channel as the first unified model for agent covert communication, driven by Storage, Timing, and Behavioral channels; engineers PiCCAP, a protocol that achieves high capacity and robustness while remaining imperceptible to powerful LLM-based wardens, exposing surveillance gaps in the Internet of Agents.",
    url: "https://arxiv.org/abs/2508.02188",
    tags: ["protocol", "covert channel", "internet of agents", "surveillance"]
  },
  {
    title: "Towards Multi-Agent Economies: Enhancing the A2A Protocol with Ledger-Anchored Identities and x402 Micropayments for AI Agents",
    type: "paper",
    topic: "Protocol Security",
    org: "Humboldt University of Berlin",
    year: 2025,
    authors: ["Awid Vaziry", "Sandro Rodriguez Garzon", "Axel Küpper"],
    desc: "Addresses two critical limitations of Google's Agent2Agent protocol (decentralized agent discoverability and agent-to-agent micropayments) by integrating distributed ledger technology to publish AgentCards as smart contracts and extending A2A with the x402 open standard for blockchain-agnostic, HTTP-based micropayments, enabling autonomous agents to discover, authenticate, and compensate each other across organizational boundaries.",
    url: "https://arxiv.org/abs/2507.19550",
    tags: ["protocol", "a2a", "micropayments", "distributed ledger"]
  },
  {
    title: "Improving Google A2A Protocol: Protecting Sensitive Data and Mitigating Unintended Harms in Multi-Agent Systems",
    type: "paper",
    topic: "Protocol Security",
    org: "Jerusalem College of Technology",
    year: 2025,
    authors: ["Yedidel Louck", "Ariel Stulman", "Amit Dvir"],
    desc: "Identifies key weaknesses in Google's A2A protocol (insufficient token lifetime control, lack of strong customer authentication, overbroad access scopes, missing consent flows) and proposes protocol-level refinements including explicit consent orchestration, ephemeral scoped tokens, and direct user-to-service data channels; adversarial prompt-injection tests show substantial leakage reduction at low latency.",
    url: "https://arxiv.org/abs/2505.12490",
    tags: ["protocol", "a2a", "consent", "data protection"]
  },
  {
    title: "The Dark Side of Function Calling: Pathways to Jailbreaking Large Language Models",
    type: "paper",
    topic: "Protocol Security",
    org: "Xidian University",
    year: 2024,
    authors: ["Zihui Wu", "Haichang Gao", "Jianping He", "Ping Wang"],
    desc: "Introduces a 'jailbreak function' attack method that exploits alignment discrepancies, user coercion, and absence of rigorous safety filters in the function calling process; empirical evaluation on six state-of-the-art LLMs including GPT-4o, Claude-3.5-Sonnet, and Gemini-1.5-pro reveals an alarming average success rate of over 90%.",
    url: "https://arxiv.org/abs/2407.17915",
    tags: ["protocol", "function calling", "jailbreak", "alignment"]
  },
  {
    title: "Securing RAG Taxonomy Attacks Defenses Future Directions",
    type: "paper",
    topic: "RAG Security",
    year: 2026,
    desc: "Frames secure RAG as securing external knowledge access and introduces the SLOT taxonomy (Surface, defense Layer, Objective, Target) mapped onto a six-stage knowledge-access pipeline, exposing two structural mismatches between attacks and defenses and outlining directions for multimodal, agentic, and adaptively-evaluated RAG security.",
    url: "https://arxiv.org/abs/2604.08304"
  },
  {
    title: "When Poison Fails After Retrieval: Revisiting Corpus Poisoning under Chunking and Reranking Pipelines",
    type: "paper",
    topic: "RAG Security",
    org: "ByteDance",
    year: 2026,
    authors: ["Xi Nie", "Hongwei Li", "Shenghao Wu", "Mingxuan Li"],
    desc: "Shows that existing RAG corpus-poisoning attacks degrade sharply after reranking because document-level adversarial signals fragment during chunking; proposes Chunk-aware and Rerank-Consistent Poisoning (CRCP) that jointly optimizes retrieval relevance, reranker consistency, and chunk-boundary robustness to remain effective under realistic multi-stage retrieval pipelines.",
    url: "https://arxiv.org/abs/2606.11265",
    tags: ["rag", "corpus poisoning", "reranking", "chunking"]
  },
  {
    title: "SilentRetrieval: Hijacking Retrieval-Augmented Generation via Semantically-Preserving Adversarial Data Poisoning",
    type: "paper",
    topic: "RAG Security",
    org: "Independent",
    year: 2026,
    authors: ["Jiachen Qian"],
    desc: "Two-stage attack that uses Coordinated Beam Search to keep a poisoned host document retrievable while constraining perplexity, then Context-Adaptive Trigger Generation to fuse manipulation triggers into content; achieves 84.6%/81.3% HR@10 and 57.5%/54.8% ASR on Natural Questions and MS MARCO at near-benign perplexity, retaining 74.2% HR@10 at a 0.016% poisoning ratio on Wikipedia-scale.",
    url: "https://arxiv.org/abs/2605.28074",
    tags: ["rag", "data poisoning", "beam search", "fluency"]
  },
  {
    title: "A Wolf in Sheep's Clothing: Targeted Routing Hijacking in Federated RAG",
    type: "paper",
    topic: "RAG Security",
    org: "Peking University",
    year: 2026,
    authors: ["Junjie Mu", "Qiongxiu Li"],
    desc: "Introduces Routing Hijacking, where a malicious FedRAG client forges its semantic profile to attract target queries despite having irrelevant underlying data; the attack misroutes queries and produces missing evidence, poisoning, incorrect answers, and hallucinations across three FedRAG routing architectures, with a MedQA-USUSE case study showing poisoned evidence misleading models across scales.",
    url: "https://arxiv.org/abs/2605.28112",
    tags: ["rag", "federated", "routing attack", "hijacking"]
  },
  {
    title: "LeakDojo: Decoding the Leakage Threats of RAG Systems",
    type: "paper",
    topic: "RAG Security",
    org: "Renmin University of China",
    year: 2026,
    authors: ["Maosen Zhang", "Jianshuo Dong", "Boting Lu", "Wenyue Li"],
    desc: "A configurable framework for controlled evaluation of RAG leakage that benchmarks six existing attacks across fourteen LLMs, four datasets, and diverse RAG systems; reveals that query generation and adversarial instructions contribute independently to leakage (well approximated by their product), and that improvements in RAG faithfulness can introduce increased leakage risk.",
    url: "https://arxiv.org/abs/2605.05818",
    tags: ["rag", "leakage", "benchmark", "privacy"]
  },
  {
    title: "VectorSmuggle: Steganographic Exfiltration in Embedding Stores and a Cryptographic Provenance Defense",
    type: "paper",
    topic: "RAG Security",
    org: "Independent",
    year: 2026,
    authors: ["Jascha Wanger"],
    desc: "Demonstrates that an attacker with write access to a RAG ingestion pipeline can hide payload data in embeddings via small-angle orthogonal rotation that defeats distribution-based detection across every (model, corpus) pair tested; proposes VectorPin, an Ed25519 cryptographic provenance protocol pinning each embedding to its source content and producing model so post-embedding modifications break verification.",
    url: "https://arxiv.org/abs/2605.13764",
    tags: ["rag", "steganography", "exfiltration", "vector database"]
  },
  {
    title: "RefineRAG: Word-Level Poisoning Attacks via Retriever-Guided Text Refinement",
    type: "paper",
    topic: "RAG Security",
    org: "Beihang University",
    year: 2026,
    authors: ["Ziye Wang", "Guanyu Wang", "Kailong Wang"],
    desc: "Treats RAG poisoning as a holistic word-level refinement problem with a Macro Generation stage producing toxic seeds guaranteed to induce target answers and a Micro Refinement stage using retriever-in-the-loop optimization to maximize retrieval priority without compromising naturalness; achieves 90% ASR on Natural Questions with the lowest grammar errors and repetition rates among baselines, and transfers to black-box victims.",
    url: "https://arxiv.org/abs/2604.07403",
    tags: ["rag", "poisoning", "word-level", "retriever"]
  },
  {
    title: "PIDP-Attack: Combining Prompt Injection with Database Poisoning Attacks on Retrieval-Augmented Generation Systems",
    type: "paper",
    topic: "RAG Security",
    org: "Beijing University of Posts and Telecommunications",
    year: 2026,
    authors: ["Haozhen Wang", "Haoyue Liu", "Jionghao Zhu", "Zhichao Wang"],
    desc: "Compound attack that appends malicious characters to queries at inference time and injects a limited number of poisoned passages into the retrieval database to manipulate responses to arbitrary queries without prior knowledge of the user's actual query; improves attack success rates by 4-16% over PoisonedRAG across Natural Questions, HotpotQA, and MS-MARCO on eight LLMs.",
    url: "https://arxiv.org/abs/2603.25164",
    tags: ["rag", "compound attack", "prompt injection", "database poisoning"]
  },
  {
    title: "Unveiling Privacy Risks LLM Agent Memory",
    type: "paper",
    topic: "RAG Security",
    year: 2025,
    desc: "A security analysis of retrieval-augmented agent attacks. It contributes to OSAA by exposing attacks on retrieval-augmented agents.",
    url: "https://arxiv.org/abs/2502.13172"
  },
  {
    title: "Targeting Core Attack RAG Agents Direct LLM Manipulation",
    type: "paper",
    topic: "RAG Security",
    year: 2024,
    desc: "Demonstrates that a deceptively simple adversarial prefix like 'Ignore the document' can compel RAG-based agents' LLM cores to bypass contextual safeguards and produce dangerous outputs, achieving high attack success rates that expose the fragility of LLM-level defenses within agent architectures.",
    url: "https://arxiv.org/abs/2412.04415"
  },
  {
    title: "PISmith RL Based RedTeaming Prompt Injection Defenses",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "Introduces PISmith, an RL-based red-teaming framework using GRPO with adaptive entropy regularization and dynamic advantage weighting to defeat prompt-injection defenses in black-box settings; across 13 benchmarks it consistently achieves the highest ASR, with strong agentic performance on InjecAgent and AgentDojo against GPT-4o-mini and GPT-5-nano.",
    url: "https://arxiv.org/abs/2603.13026"
  },
  {
    title: "RedTeaming Framework Evaluating Robustness AI Security Orchestration",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "Introduces an autonomous red teaming framework that combines LLM-based strategic planning with RL-based tactical execution to generate multi-stage attack campaigns against AI-SOAR autonomous defenders, finding standalone LLM agents fail to sustain attacks and that hybrid LLM-RL approaches are necessary for effective red teaming.",
    url: "https://arxiv.org/abs/2605.17075"
  },
  {
    title: "OpenRT An Open Source Red Teaming Framework for Multimodal",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "Introduces OpenRT, a unified modular red-teaming framework for multimodal LLMs that decouples model integration, dataset management, attack strategies, judge models, and metrics into an adversarial kernel, enabling high-throughput multi-turn MLLM safety evaluation.",
    url: "https://arxiv.org/abs/2601.01592"
  },
  {
    title: "RedBench A Universal Dataset for Comprehensive Red Teaming of",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "Introduces RedBench, a universal red teaming dataset aggregating 37 benchmark datasets (29,362 samples) with a standardized 22-category, 19-domain taxonomy of risk, enabling consistent and comprehensive evaluation of LLM vulnerabilities across attack and refusal prompts.",
    url: "https://arxiv.org/abs/2601.03699"
  },
  {
    title: "Stable-GFlowNet: Toward Diverse and Robust LLM Red-Teaming via Contrastive Trajectory Balance",
    type: "paper",
    topic: "Red Teaming",
    org: "KAIST",
    year: 2026,
    authors: ["Minchan Kwon", "Sunghyun Baek", "Minseo Kim", "Jaemyung Yu"],
    desc: "Addresses training instability and mode collapse in Generative Flow Network red-teamers by eliminating partition-function estimation through pairwise comparisons and adding a robust masking methodology against noisy rewards plus a fluency stabilizer; demonstrates overwhelming attack performance and diversity across various settings while maintaining the optimal policy of GFNs.",
    url: "https://arxiv.org/abs/2605.00553",
    tags: ["red teaming", "gflownet", "diversity", "training stability"]
  },
  {
    title: "Adaptive Instruction Composition for Automated LLM Red-Teaming",
    type: "paper",
    topic: "Red Teaming",
    org: "Lakera AI",
    year: 2026,
    authors: ["Jesse Zymet", "Andy Luo", "Swapnil Shinde", "Sahil Wadhwa"],
    desc: "Combines crowdsourced texts according to an adaptive mechanism trained via reinforcement learning to jointly optimize effectiveness and diversity, balancing exploration and exploitation in a combinatorial space of instructions; substantially outperforms random combination on effectiveness and diversity metrics and surpasses a host of recent adaptive approaches on HarmBench, even under model transfer.",
    url: "https://arxiv.org/abs/2604.21159",
    tags: ["red teaming", "adaptive", "reinforcement learning", "diversity"]
  },
  {
    title: "STAR-Teaming: A Strategy-Response Multiplex Network Approach to Automated LLM Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    org: "Kakao Brain",
    year: 2026,
    authors: ["MinJae Jung", "YongTaek Lim", "Chaeyun Kim", "Junghwan Kim"],
    desc: "Integrates a Multi-Agent System with a Strategy-Response Multiplex Network that recasts the intractable high-dimensional embedding space into a tractable structure, enhancing interpretability of strategic vulnerabilities and streamlining the search for effective strategies by organizing the search space into semantic communities to prevent redundant exploration; achieves higher ASR at lower computational cost than existing methods.",
    url: "https://arxiv.org/abs/2604.18976",
    tags: ["red teaming", "multi-agent", "network", "jailbreak"]
  },
  {
    title: "When Scanners Lie: Evaluator Instability in LLM Red-Teaming",
    type: "paper",
    topic: "Red Teaming",
    org: "Lakera AI",
    year: 2026,
    authors: ["Lidor Erez", "Omer Hofman", "Tamir Nizri", "Roman Vainshtein"],
    desc: "Demonstrates that commonly used open-source vulnerability scanners exhibit measurement instability dependent on the evaluator component, with changing evaluators significantly altering reported ASR; proposes a two-phase reliability-aware framework using evaluator-disagreement quantification and verification-based evaluation, raising evaluator accuracy on Garak from 72% to 89%.",
    url: "https://arxiv.org/abs/2603.14633",
    tags: ["red teaming", "evaluation", "scanner", "reliability"]
  },
  {
    title: "AgentAuditor Human Level Safety Security Evaluation LLM Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Introduces AgentAuditor, a training-free memory-augmented reasoning framework that emulates human expert evaluators for LLM agent safety/security via structured semantic feature extraction and context-aware RAG; also releases ASSEBench (2,293 annotated interactions across 15 risk types and 29 scenarios) and achieves human-level LLM-as-a-judge accuracy.",
    url: "https://arxiv.org/abs/2506.00641"
  },
  {
    title: "Hiding AI Traffic Abusing MCP LLM Powered Agentic RedTeaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Introduces a command-and-control (C2) architecture that abuses the Model Context Protocol to coordinate distributed, adaptive reconnaissance agents covertly across networks, eliminating key host/network detection artifacts compared to traditional C2 and enabling asynchronous parallel operations without periodic beaconing.",
    url: "https://arxiv.org/abs/2511.15998"
  },
  {
    title: "SIRAJ Diverse Efficient RedTeaming LLM Agents Distilled Reasoning",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Presents SIRAJ, a generic black-teaming framework for arbitrary black-box LLM agents that generates diverse seed test cases covering risk outcomes, tool-use trajectories, and risk sources, then iteratively refines model-based adversarial attacks; a distilled 8B red-teamer model improves attack success rate by 100%, surpassing the 671B DeepSeek-R1.",
    url: "https://arxiv.org/abs/2510.26037"
  },
  {
    title: "ARMs Adaptive Red Teaming Agent against Multimodal Models with",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Proposes ARMs, an adaptive red-teaming agent that systematically probes vision-language models by automatically optimizing diverse multi-step red-teaming strategies with reasoning-enhanced orchestration, addressing the scalability gap of manual VLM safety evaluation.",
    url: "https://arxiv.org/abs/2510.02677"
  },
  {
    title: "ASTRA Autonomous Spatial Temporal Red teaming for AI Software",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Presents ASTRA, an automated agent that uncovers safety flaws in AI coding assistants like GitHub Copilot by building domain-specific knowledge graphs of complex software tasks and performing online vulnerability exploration of target models with adaptive prompting.",
    url: "https://arxiv.org/abs/2508.03936"
  },
  {
    title: "AgentXploit End to End Red Teaming for AI Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Proposes AgentXploit (later renamed AgentVigil), a black-box fuzzing framework that automatically discovers and exploits indirect prompt injection vulnerabilities in LLM agents by constructing a high-quality seed corpus and refining inputs via Monte Carlo Tree Search.",
    url: "https://arxiv.org/abs/2505.05849"
  },
  {
    title: "AutoODD Agentic Audits via Bayesian Red Teaming in Black",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Introduces AutoODD, an LLM-agent framework that automatically generates semantically relevant test cases to search for failure modes in specialized black-box models, fitting a Bayesian surrogate to map the operational design domain with reduced human effort.",
    url: "https://arxiv.org/abs/2509.08638"
  },
  {
    title: "AutoRedTeamer Autonomous Red Teaming with Lifelong Attack Integration",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Presents AutoRedTeamer, a fully automated end-to-end red teaming framework for LLMs that combines a dual-agent architecture with memory-guided attack selection to continuously discover and integrate new attack vectors across high-level risk categories.",
    url: "https://arxiv.org/abs/2503.15754"
  },
  {
    title: "BlueCodeAgent A Blue Teaming Agent Enabled by Automated Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Introduces BlueCodeAgent, an end-to-end blue teaming agent enabled by automated red teaming that integrates constitution and code analysis with dynamic analysis for multi-level defense across bias/malicious-instruction/vulnerable-code detection, achieving 12.7% average F1 improvement while reducing false positives in vulnerable-code detection.",
    url: "https://arxiv.org/abs/2510.18131"
  },
  {
    title: "Genesis Evolving Attack Strategies for LLM Web Agent Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Introduces Genesis, a 3-module agentic red-teaming framework (Attacker, Scorer, Strategist) for web agents that integrates a genetic algorithm with hybrid strategy representation, dynamically discovers effective attack strategies from interaction logs, and compiles them into a growing strategy library redeployed to enhance the Attacker.",
    url: "https://arxiv.org/abs/2510.18314"
  },
  {
    title: "Mind the Gap Comparing Model vs Agentic Level Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Conducts comparative red teaming of GPT-OSS-20B at model vs agentic levels using the AgentSeer observability framework, identifying 'agentic-only vulnerabilities' that emerge exclusively in agentic execution contexts and finding tool-calling contexts show 24% higher vulnerability than non-tool contexts, while certain model-level exploits fail to transfer to agentic settings.",
    url: "https://arxiv.org/abs/2509.17259"
  },
  {
    title: "OpenAI's Approach to External Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Describes OpenAI's external red teaming methodology for AI models and systems, detailing design considerations including red-team composition, access levels, network access, guidance, and feedback integration, with case studies on frontier model evaluations.",
    url: "https://arxiv.org/abs/2503.16431"
  },
  {
    title: "Red Teaming AI Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Argues that current AI red teaming is too narrow and proposes a framework splitting red teaming into macro-level system red teaming (spanning the AI lifecycle) and micro-level model red teaming, with six recommendations emphasizing multifunctional teams and emergent sociotechnical risks.",
    url: "https://arxiv.org/abs/2507.05538"
  },
  {
    title: "RedCodeAgent Automatic Red teaming Agent against Diverse Code Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Presents RedCodeAgent, the first automated red-teaming agent for code agents that uses an adaptive memory module to dynamically select and combine jailbreak tools against diverse code agents, evaluated in simulated sandboxes that also judge runtime execution rather than only static code.",
    url: "https://arxiv.org/abs/2510.02609"
  },
  {
    title: "RedTeamCUA Realistic Adversarial Testing of Computer Use Agents in",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Presents RedTeamCUA, an adversarial testing framework with a hybrid web-OS sandbox (VM + Docker) for computer-use agents, plus RTC-Bench (864 examples) benchmarking frontier CUAs; Claude 3.7 Sonnet CUA shows 42.9% ASR, and Claude 4.5 Sonnet CUA exhibits 60% ASR in realistic end-to-end settings.",
    url: "https://arxiv.org/abs/2505.21936"
  },
  {
    title: "SafeSearch Automated Red Teaming for the Safety of LLM",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Proposes SafeSearch, an automated red-teaming framework for LLM-based search agents that generates 300 test cases across five risk categories (e.g., misinformation, prompt injection) and evaluates 3 search agent scaffolds across 17 LLMs, revealing attack success rates up to 90.5% on GPT-4.1-mini.",
    url: "https://arxiv.org/abs/2509.23694"
  },
  {
    title: "The Automation Advantage in AI Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Analyzes 214,271 attack attempts by 1,674 users across 30 LLM challenges in the Crucible platform, showing automated approaches achieve 69.5% success versus 47.6% for manual methods despite only 5.2% of users automating, with implications for combining human strategy with programmatic execution.",
    url: "https://arxiv.org/abs/2504.19855"
  },
  {
    title: "Red-Bandit: Test-Time Adaptation for LLM Red-Teaming via Bandit-Guided LoRA Experts",
    type: "paper",
    topic: "Red Teaming",
    org: "University College London",
    year: 2025,
    authors: ["Christos Ziakas", "Nicholas Loo", "Nishita Jain", "Alessandra Russo"],
    desc: "Post-trains parameter-efficient LoRA experts specialized for distinct attack styles using RL rewarding unsafe-prompt generation, then dynamically selects among them at inference using a multi-armed bandit policy; achieves state-of-the-art on AdvBench under sufficient exploration (ASR@10) with more human-readable prompts, and the bandit policy serves as a diagnostic uncovering model-specific vulnerabilities.",
    url: "https://arxiv.org/abs/2510.07239",
    tags: ["red teaming", "lora", "bandit", "test-time"]
  },
  {
    title: "RedTWIZ: Diverse LLM Red Teaming via Adaptive Attack Planning",
    type: "paper",
    topic: "Red Teaming",
    org: "Bitdefender",
    year: 2025,
    authors: ["Artur Horal", "Daniel Pina", "Henrique Paz", "Iago Paulo"],
    desc: "Adaptive and diverse multi-turn red-teaming framework for auditing LLM robustness in AI-assisted software development, combining systematic conversational jailbreak assessment, a diverse generative multi-turn attack suite with compositional realistic goal-oriented strategies, and a hierarchical attack planner that adaptively plans and triggers attacks tailored to specific LLM vulnerabilities.",
    url: "https://arxiv.org/abs/2510.06994",
    tags: ["red teaming", "multi-turn", "planning", "jailbreak"]
  },
  {
    title: "RainbowPlus: Enhancing Adversarial Prompt Generation via Evolutionary Quality-Diversity Search",
    type: "paper",
    topic: "Red Teaming",
    org: "VinAI Research",
    year: 2025,
    authors: ["Quy-Anh Dang", "Chris Ngo", "Truong-Son Hy"],
    desc: "Rooted in evolutionary computation, extends MAP-Elites with a multi-element archive storing diverse high-quality prompts and a comprehensive fitness function evaluating multiple prompts concurrently; across six benchmarks and four open-source LLMs demonstrates superior ASR and diversity (~0.84), generating up to 100x more unique prompts than prior quality-diversity methods against nine state-of-the-art models.",
    url: "https://arxiv.org/abs/2504.15047",
    tags: ["red teaming", "evolutionary", "quality-diversity", "prompt generation"]
  },
  {
    title: "ALERT A Comprehensive Benchmark for Assessing Large Language Models",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Introduces ALERT, a large-scale red-teaming safety benchmark of 45,000+ instructions organized by a fine-grained risk taxonomy; evaluating 10 open/closed LLMs shows many struggle to attain reasonable safety levels, with the taxonomy enabling in-depth alignment assessment across various policies.",
    url: "https://arxiv.org/abs/2404.08676"
  },
  {
    title: "Against The Achilles Heel A Survey on Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Surveys the agent red teaming literature. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2404.00629"
  },
  {
    title: "Automated Red Teaming with GOAT the Generative Offensive Agent",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Introduces GOAT (Generative Offensive Agent Tester), an automated red-teaming system that mimics how common users actually interact with LLMs—exploiting multi-turn conversation dynamics and shared online techniques rather than gradient-based adversarial methods.",
    url: "https://arxiv.org/abs/2410.01606"
  },
  {
    title: "HarmBench A Standardized Evaluation Framework for Automated Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "A standardized evaluation framework for automated red teaming (HarmBench). Standardizes OSAA red-team measurement.",
    url: "https://arxiv.org/abs/2402.04249"
  },
  {
    title: "Holistic Automated Red Teaming for Large Language Models through",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Presents HARM (Holistic Automated Red TeaMing), which scales test-case diversity using a top-down fine-grained risk taxonomy and reinforcement learning to enable multi-turn red teaming that captures real human-machine interaction dynamics beyond single-turn attacks.",
    url: "https://arxiv.org/abs/2409.16783"
  },
  {
    title: "PyRIT A Framework for Security Risk Identification and Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Presents PyRIT, a framework for security-risk identification and red teaming of generative AI. A widely used OSAA red-teaming toolkit.",
    url: "https://arxiv.org/abs/2410.02828"
  },
  {
    title: "RedAgent Red Teaming Large Language Models with Context aware",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Introduces RedAgent, a multi-agent LLM system that abstracts existing attacks into 'jailbreak strategies' and uses a context-aware memory buffer to generate scenario-specific jailbreak prompts, jailbreaking most black-box LLMs in five queries and discovering 60 severe vulnerabilities in GPTs applications.",
    url: "https://arxiv.org/abs/2407.16667"
  },
  {
    title: "AGENTVIGIL Automatic BlackBox RedTeaming Indirect Prompt Injection LLM Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2023,
    desc: "Presents AgentVigil (originally AgentXploit), a generic black-box fuzzing framework that automatically discovers indirect prompt injection vulnerabilities in LLM agents via MCTS-based seed selection, achieving 71% and 70% success against o3-mini and GPT-4o agents on AgentDojo and VWA-adv (nearly doubling baselines) and demonstrating real-world URL-redirect exploits.",
    url: "https://scholar.google.com/scholar?q=AGENTVIGIL%20Automatic%20BlackBox%20RedTeaming%20Indirect%20Prompt%20Injection%20LLM%20Agents"
  },
  {
    title: "Red Teaming LLM MultiAgent Systems via Communication Attacks",
    type: "paper",
    topic: "Red Teaming",
    year: 2023,
    desc: "Introduces Agent-in-the-Middle (AiTM), a novel attack against LLM multi-agent systems that intercepts and manipulates inter-agent messages via an LLM-powered adversarial agent with reflection, demonstrating that compromising message channels can compromise the entire MAS even without compromising individual agents.",
    url: "https://scholar.google.com/scholar?q=Red%20Teaming%20LLM%20MultiAgent%20Systems%20via%20Communication%20Attacks"
  },
  {
    title: "Lessons From Red Teaming 100 Generative AI Products eBook",
    type: "paper",
    topic: "Red Teaming",
    desc: "Distills eight lessons from Microsoft's red teaming of over 100 generative AI products, presenting an internal threat-model ontology and covering topics such as: AI red teaming is not safety benchmarking, automation expands risk-surface coverage, and the human element remains crucial.",
    url: "https://scholar.google.com/scholar?q=Lessons%20From%20Red%20Teaming%20100%20Generative%20AI%20Products%20eBook"
  },
  {
    title: "FeatureBleed: Inferring Private Enriched Attributes From Sparsity-Optimized AI Accelerators",
    type: "paper",
    topic: "Side-channel Attacks",
    org: "NC State University",
    year: 2026,
    authors: ["Darsh Asher", "Farshad Dizani", "Joshua Kalyanapu", "Rosario Cammarota", "et al."],
    desc: "Demonstrates FEATUREBLEED, the first hardware-level backend-retrieval data-stealing attack: it exploits zero-skipping in AI accelerators to infer private backend-retrieved features solely via end-to-end timing, bypassing state-of-the-art privacy defenses across Intel AVX/AMX and NVIDIA A100 backends.",
    url: "https://arxiv.org/abs/2602.18304",
    tags: ["side channel", "timing", "gpu", "accelerator", "privacy"]
  },
  {
    title: "OptiLeak: Efficient Prompt Reconstruction via Reinforcement Learning in Multi-tenant LLM Services",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2026,
    authors: ["Longxiang Wang", "Xiang Zheng", "Xuhao Zhang", "Yao Zhang", "et al."],
    desc: "OptiLeak uses RL with Direct Preference Optimization on 'hard tokens' identified by likelihood ranking to reconstruct prompts from shared KV caches in multi-tenant LLM serving; it reduces average requests per token by up to 12.48× over baselines across 3B–14B models.",
    url: "https://arxiv.org/abs/2602.20595",
    tags: ["kv cache", "prompt leakage", "side channel", "reinforcement learning", "multi-tenant"]
  },
  {
    title: "TrEEStealer: Stealing Decision Trees via Enclave Side Channels",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2026,
    authors: ["Jonas Sander", "Anja Rabich", "Nick Mahling", "Felix Maurer", "et al."],
    desc: "Steals TEE-protected decision trees via TEE-specific side channels coupling control-flow information with page-fault traces, achieving high-fidelity extraction without strong API-output assumptions that prior black-box DT extraction attacks required.",
    url: "https://arxiv.org/abs/2604.18716",
    tags: ["tee", "decision tree", "side channel", "model extraction", "enclave"]
  },
  {
    title: "Cascade: Composing Software-Hardware Attack Gadgets for Adversarial Threat Amplification in Compound AI Systems",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2026,
    authors: ["Sarbartha Banerjee", "Prateek Sahu", "Anjo Vahldiek-Oberwagner", "Jose Sanchez Vicarte", "Mohit Tiwari"],
    desc: "Shows that traditional software CVEs and hardware timing/bit-flip/power side channels compose with LLM-specific algorithmic attacks in compound AI pipelines; demonstrates two novel chained attacks that inject jailbreak prompts by combining a code-injection flaw with a guardrail Rowhammer attack.",
    url: "https://arxiv.org/abs/2603.12023",
    tags: ["compound ai", "side channel", "rowhammer", "jailbreak", "cascade attack"]
  },
  {
    title: "Kraken: Higher-order EM Side-Channel Attacks on DNNs in Near and Far Field",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2026,
    authors: ["Peter Horvath", "Ilia Shumailov", "Lukasz Chmielewski", "Lejla Batina", "Yuval Yarom"],
    desc: "First parameter-extraction attack on GPU Tensor Cores via near-field EM side channels using Correlation Power Analysis, plus an exploratory far-field analysis showing LLM hyperparameter and weight leakage from GPU EM radiation even 100 cm away through glass.",
    url: "https://arxiv.org/abs/2603.02891",
    tags: ["em side channel", "gpu", "tensor core", "weight extraction", "cpa"]
  },
  {
    title: "AttenMIA: LLM Membership Inference Attack through Attention Signals",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2026,
    authors: ["Pedram Zaree", "Md Abdullah Al Mamun", "Yue Dong", "Ihsen Alouani", "Nael Abu-Ghazaleh"],
    desc: "AttenMIA is a membership-inference attack on LLMs that exploits self-attention patterns combined with perturbation-based divergence metrics; on LLaMA-2, Pythia and OPT it consistently outperforms confidence- and embedding-based MIA baselines.",
    url: "https://arxiv.org/abs/2601.18110",
    tags: ["membership inference", "attention", "llm", "side channel", "privacy"]
  },
  {
    title: "Learning to Detect Language Model Training Data via Active Reconstruction",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2026,
    authors: ["Junjie Oscar Yin", "John X. Morris", "Vitaly Shmatikov", "Sewon Min", "Hannaneh Hajishirzi"],
    desc: "Proposes Active Data Reconstruction Attack (ADRA), a family of MIA that uses on-policy RL to actively induce the target model to reconstruct candidate texts, improving detection of pre-training, post-training and distillation data by an average of 10.7% over prior MIAs.",
    url: "https://arxiv.org/abs/2602.19020",
    tags: ["membership inference", "reinforcement learning", "training data", "reconstruction", "side channel"]
  },
  {
    title: "Extracting Training Dialogue Data from Large Language Model based Task Bots",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2026,
    authors: ["Shuo Zhang", "Junzhou Zhao", "Junji Hou", "Pinghui Wang", "et al."],
    desc: "Quantifies training-dialogue-data extraction attacks against LLM-based task-oriented dialogue systems, analyzes why existing extraction attacks underperform on TODS, and proposes tailored sampling and membership-inference techniques that extract thousands of true training turns.",
    url: "https://arxiv.org/abs/2603.01550",
    tags: ["training data extraction", "task bot", "membership inference", "llm", "side channel"]
  },
  {
    title: "A Survey on Model Extraction Attacks and Defenses for Large Language Models",
    type: "paper",
    topic: "Side-channel Attacks",
    org: "Duke University",
    year: 2025,
    authors: ["Kaixiang Zhao", "Lincan Li", "Kaize Ding", "Neil Zhenqiang Gong", "et al."],
    desc: "Surveys LLM-specific model extraction attacks and defenses, organizing attacks into functionality extraction, training-data extraction, and prompt-targeted stealing, and proposing specialized metrics for evaluating attack effectiveness and defense utility on generative language models.",
    url: "https://arxiv.org/abs/2506.22521",
    tags: ["survey", "model extraction", "prompt stealing", "training data", "side channel"]
  },
  {
    title: "MoEcho: Exploiting Side-Channel Attacks to Compromise User Privacy in Mixture-of-Experts LLMs",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2025,
    authors: ["Ruyi Ding", "Tianhong Xu", "Xinyi Shen", "Aidong Adam Ding", "Yunsi Fei"],
    desc: "Uncovers four novel side channels on Mixture-of-Experts LLMs (Cache Occupancy and Pageout+Reload on CPUs; Performance Counter and Page Fault on GPUs) that exploit input-dependent expert routing to recover user inputs, demonstrating a new privacy attack surface for MoE.",
    url: "https://arxiv.org/abs/2508.15036",
    tags: ["moe", "side channel", "expert routing", "cache", "gpu"]
  },
  {
    title: "I Know What You Said: Unveiling Hardware Cache Side-Channels in Local Large Language Model Inference",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2025,
    authors: ["Zibo Gao", "Junjie Hu", "Feng Guo", "Yixin Zhang", "et al."],
    desc: "Reveals token-value and token-position leakage via cache access patterns in local LLM inference; an unprivileged eavesdropper attack recovers input/output text from token-embedding cache patterns and autoregressive-decoding timing on Llama, Falcon and Gemma deployments.",
    url: "https://arxiv.org/abs/2505.06738",
    tags: ["cache side channel", "local llm", "token leakage", "timing", "privacy"]
  },
  {
    title: "ProxyPrompt: Securing System Prompts against Prompt Extraction Attacks",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2025,
    authors: ["Zhixiong Zhuang", "Maria-Irina Nicolae", "Hui-Po Wang", "Mario Fritz"],
    desc: "Defends system prompts by replacing them with proxies that preserve task utility while obfuscating extracted prompts; on 264 LLM×prompt pairs ProxyPrompt protects 94.70% of prompts against extraction attacks, versus 42.80% for the next-best defense.",
    url: "https://arxiv.org/abs/2505.11459",
    tags: ["prompt extraction", "defense", "system prompt", "side channel", "prompt leakage"]
  },
  {
    title: "On the Effectiveness of Membership Inference in Targeted Data Extraction from Large Language Models",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2025,
    authors: ["Ali Al Sahili", "Ali Chehab", "Razane Tajeddine"],
    desc: "Integrates multiple MIA techniques into the LLM training-data extraction pipeline and benchmarks their effectiveness in the integrated setting against conventional MIA benchmarks, exposing where MIAs add value (or do not) for real-world data-extraction adversaries.",
    url: "https://arxiv.org/abs/2512.13352",
    tags: ["membership inference", "training data extraction", "llm", "benchmark", "privacy"]
  },
  {
    title: "PROMPTMINER: Black-Box Prompt Stealing against Text-to-Image Generative Models via Reinforcement Learning and Fuzz Optimization",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2025,
    authors: ["Mingzhe Li", "Renhao Zhang", "Zhiyang Wen", "Siqi Pan", "et al."],
    desc: "PROMPTMINER is a black-box prompt-stealing framework against text-to-image models that decouples the task into an RL optimization phase for subjects and a fuzz-optimization phase for stylistic modifiers, avoiding white-box gradient and large labeled-data assumptions of prior prompt-recovery attacks.",
    url: "https://arxiv.org/abs/2511.22119",
    tags: ["prompt stealing", "text-to-image", "black-box", "side channel", "ip theft"]
  },
  {
    title: "Do Vision-Language Models Leak What They Learn? Adaptive Token-Weighted Model Inversion Attacks",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2025,
    authors: ["Ngoc-Bao Nguyen", "Sy-Tuyen Ho", "Koh Jun Hao", "Ngai-Man Cheung"],
    desc: "First systematic model-inversion study on vision-language models; introduces token- and sequence-based MI strategies and SMI-AW, which adaptively reweights each token's gradient by its visual grounding to better reconstruct private training images from VLMs.",
    url: "https://arxiv.org/abs/2508.04097",
    tags: ["model inversion", "vlm", "training data", "side channel", "reconstruction"]
  },
  {
    title: "Why Are My Prompts Leaked? Unraveling Prompt Extraction Threats in Customized Large Language Models",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2024,
    authors: ["Zi Liang", "Haibo Hu", "Qingqing Ye", "Yaxin Xiao", "Haoyang Li"],
    desc: "Analyzes prompt memorization as the mechanism behind prompt leakage, identifying perplexity and attention-matrix token translation as causes and showing that current safety-aligned LLMs remain vulnerable; proposes scaling-law-based defense strategies.",
    url: "https://arxiv.org/abs/2408.02416",
    tags: ["prompt leakage", "memorization", "attention", "side channel", "defense"]
  },
  {
    title: "PRSA: Prompt Stealing Attacks against Real-World Prompt Services",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2024,
    authors: ["Yong Yang", "Changjiang Li", "Qingming Li", "Oubo Ma", "et al."],
    desc: "PRSA is a prompt-stealing framework against real-world prompt services that infers prompt intent from limited input-output pairs; it raises attack success rate from 17.8% to 46.1% on prompt marketplaces and from 39% to 52% on LLM application stores versus prior work.",
    url: "https://arxiv.org/abs/2402.19200",
    tags: ["prompt stealing", "prompt service", "ip theft", "side channel", "extraction"]
  },
  {
    title: "Exploiting HDMI and USB Ports for GPU Side-Channel Insights",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2024,
    authors: ["Sayed Erfan Arefin", "Abdul Serwadda"],
    desc: "Builds a custom plug-in device that passively measures power on HDMI and USB ports to infer GPU activities such as neural-network inference and video rendering, exposing a new physical side-channel vector that bypasses built-in port security.",
    url: "https://arxiv.org/abs/2410.02539",
    tags: ["gpu", "power side channel", "hdmi", "usb", "physical"]
  },
  {
    title: "Prompt Leakage effect and defense strategies for multi-turn LLM interactions",
    type: "paper",
    topic: "Side-channel Attacks",
    year: 2024,
    authors: ["Divyansh Agarwal", "Alexander R. Fabbri", "Ben Risher", "et al."],
    desc: "Systematically investigates prompt-leakage vulnerabilities in multi-turn LLM interactions across 10 LLMs and 4 domains, designing a sycophancy-driven threat model that elevates average attack success rate from 17.7% to 86.2%; benchmarks 7 black-box defenses plus fine-tuning-based mitigation against the threat.",
    url: "https://arxiv.org/abs/2404.16251",
    tags: ["prompt leakage", "multi-turn", "sycophancy", "side channel", "defense"]
  },
  {
    title: "Language Model Inversion",
    type: "paper",
    topic: "Side-channel Attacks",
    org: "Cornell University",
    year: 2023,
    authors: ["John X. Morris", "Wenting Zhao", "Justin T. Chiu", "Vitaly Shmatikov", "Alexander M. Rush"],
    desc: "Shows that next-token probability distributions leak surprising amounts of information about preceding text; the proposed inversion method reconstructs hidden prompts on Llama-2 7B with BLEU 59, token-level F1 78, and recovers 27% of prompts exactly.",
    url: "https://arxiv.org/abs/2311.13647",
    tags: ["model inversion", "prompt recovery", "llm", "side channel", "vec2text"]
  },
  {
    title: "Text Revealer: Private Text Reconstruction via Model Inversion Attacks against Transformers",
    type: "paper",
    topic: "Side-channel Attacks",
    org: "UC San Diego",
    year: 2022,
    authors: ["Ruisi Zhang", "Seira Hidano", "Farinaz Koushanfar"],
    desc: "Formulates Text Revealer, the first model-inversion attack for text reconstruction against transformer text classifiers; it uses GPT-2 to generate domain-like text and perturbs hidden states with target-model feedback to reconstruct private training texts across different text lengths.",
    url: "https://arxiv.org/abs/2209.10505",
    tags: ["model inversion", "text reconstruction", "transformer", "side channel", "privacy"]
  },
  {
    title: "DeepSteal: Advanced Model Extractions Leveraging Efficient Weight Stealing in Memories",
    type: "paper",
    topic: "Side-channel Attacks",
    org: "Arizona State University",
    year: 2021,
    authors: ["Adnan Siraj Rakin", "Md Hafizul Islam Chowdhuryy", "Fan Yao", "Deliang Fan"],
    desc: "Introduces DeepSteal, the first attack to extract detailed DNN weights via a memory side channel: its HammerLeak stage leverages RowHammer to leak weight bits, and a learning-based recovery stage reconstructs weight values from noisy bit flips, enabling high-fidelity model stealing.",
    url: "https://arxiv.org/abs/2111.04625",
    tags: ["rowhammer", "weight stealing", "memory side channel", "model extraction", "hardware"]
  },
  {
    title: "Cache Telepathy: Leveraging Shared Resource Attacks to Learn DNN Architectures",
    type: "paper",
    topic: "Side-channel Attacks",
    org: "UIUC",
    year: 2018,
    authors: ["Mengjia Yan", "Christopher Fletcher", "Josep Torrellas"],
    desc: "Uses Prime+Probe and Flush+Reload cache side channels to steal DNN architectures by observing tiled-GEMM call patterns; reduces the architecture search space by very substantial factors for VGG and ResNet running OpenBLAS and Intel MKL.",
    url: "https://arxiv.org/abs/1808.04761",
    tags: ["cache side channel", "architecture stealing", "dnn", "prime+probe", "flush+reload"]
  },
  {
    title: "Malicious ML Model Detection by Learning Dynamic Behaviors",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Sarang Nambiar", "Dhruv Pradhan", "Ezekiel Soremekun"],
    desc: "Introduces DynaHug, a detector that learns runtime behaviors of benign pre-trained models via one-class SVM and flags malicious PTMs by dynamic analysis; evaluated on 25,000+ benign/malicious Hugging Face and MalHug models, it outperforms PickleScan and other baselines by up to 44% F1.",
    url: "https://arxiv.org/abs/2604.19438",
    tags: ["model hub", "pickle", "malware detection", "supply chain", "hugging face"]
  },
  {
    title: "Deep Dive into the Abuse of DL APIs To Create Malicious AI Models and How to Detect Them",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Mohamed Nabeel", "Oleksii Starov"],
    desc: "Shows that deep-learning framework APIs (e.g., TensorFlow file/network/persistence primitives) can be abused to embed RCE, exfiltration, and persistence payloads in models in ways that current Hugging Face scanners fail to flag, and proposes detection heuristics for this understudied supply-chain vector.",
    url: "https://arxiv.org/abs/2601.04553",
    tags: ["model hub", "tensorflow", "rce", "supply chain", "malicious model"]
  },
  {
    title: "Mind the Gap: Evaluating LLMs for High-Level Malicious Package Detection vs. Fine-Grained Indicator Identification",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Ahmed Ryan", "Ibrahim Khalil", "Abdullah Al Jahid", "Md Erfan", "et al."],
    desc: "Evaluates 13 LLMs on 4,070 PyPI packages for malicious-package detection; reports a 'granularity gap' where GPT-4.1 reaches F1≈0.99 on binary detection but performance drops ~41% when identifying fine-grained malicious indicators.",
    url: "https://arxiv.org/abs/2602.16304",
    tags: ["pypi", "malicious package", "llm detection", "supply chain", "evaluation"]
  },
  {
    title: "Bridging Expert Reasoning and LLM Detection: A Knowledge-Driven Framework for Malicious Packages",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Wenbo Guo", "Shiwen Song", "Jiaxun Guo", "Zhengzi Xu", "et al."],
    desc: "IntelGuard is a RAG-based detector that grounds LLM reasoning in 8,000+ threat-intelligence reports; deployed on PyPI.org it achieved 99% accuracy on 4,027 packages and uncovered 54 previously unreported malicious packages.",
    url: "https://arxiv.org/abs/2601.16458",
    tags: ["pypi", "rag", "malicious package", "supply chain", "threat intelligence"]
  },
  {
    title: "CHASE: LLM Agents for Dissecting Malicious PyPI Packages",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Takaaki Toda", "Tatsuya Mori"],
    desc: "Presents CHASE, a Plan-and-Execute multi-agent architecture with specialized worker agents and deterministic security tools for dissecting malicious PyPI packages; on 3,000 packages (500 malicious) it materially reduces hallucination-driven false alarms compared to single-agent LLM baselines.",
    url: "https://arxiv.org/abs/2601.06838",
    tags: ["pypi", "multi-agent", "malicious package", "supply chain", "llm"]
  },
  {
    title: "AI Supply Chain Galaxy: 3D Visual Analytics for License Compliance",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Weiru Han", "Xuetao Shi", "Wenyi He", "Wei Wang", "et al."],
    desc: "Builds AI Supply Chain Galaxy, a 3D visual analytics system over 908,449 Hugging Face models; finds 55.46% exhibit compliance/metadata risks, 56.67% license omission in adapter derivations, and 8.05% license drift in fine-tuning chains.",
    url: "https://arxiv.org/abs/2606.16292",
    tags: ["hugging face", "license compliance", "model provenance", "supply chain", "visualization"]
  },
  {
    title: "Trust Me, Import This: Dependency Steering Attacks via Malicious Agent Skills",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Yiyong Liu", "Chia-Yi Hsu", "Chun-Ying Huang", "Michael Backes", "et al."],
    desc: "Introduces Dependency Steering, an attack that weaponizes persistent LLM-coding-agent Skills to bias agents toward attacker-controlled packages during benign tasks, achieving high targeted hallucination rates that transfer across models and remain undetected by Skill scanners and LLM-based auditors.",
    url: "https://arxiv.org/abs/2605.09594",
    tags: ["agent skill", "dependency confusion", "supply chain", "coding agent", "hallucination"]
  },
  {
    title: "Token-Level Generalization in LoRA Adapter Backdoors: Attack Characterization and Behavioral Detection",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Travis Lelle"],
    desc: "Empirically characterizes LoRA adapter backdoors on a Qwen 2.5 1.5B prompt-injection classifier, showing a token-feature-level generalization that breaks defender probing; a behavioral detector using outlier_gap and mean_attack_rate separates poisoned from clean adapters with zero false positives at high recall.",
    url: "https://arxiv.org/abs/2605.30189",
    tags: ["lora", "backdoor", "behavioral detection", "supply chain", "fine-tuning"]
  },
  {
    title: "PoisonForge: Task-Level Targeted Poisoning Benchmark for Instruction-Tuned LLMs",
    type: "paper",
    topic: "Supply Chain Attacks",
    org: "Northeastern University",
    year: 2026,
    authors: ["Luze Sun", "Anshuman Suri", "Harsh Chaudhari", "Cristina Nita-Rotaru", "Alina Oprea"],
    desc: "Releases PoisonForge, a task-level poisoning benchmark over 12 open-weight models (2B–32B) and 5 families: with only 10 poisoned examples per 1,000, 11/12 models exceed 70% attack success rate while unintended leakage to non-target tasks stays below 0.5%.",
    url: "https://arxiv.org/abs/2605.23168",
    tags: ["data poisoning", "benchmark", "fine-tuning", "supply chain", "instruction tuning"]
  },
  {
    title: "Poison with Style: A Practical Poisoning Attack on Code Large Language Models",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Khang Tran", "Yazan Boshmaf", "Issa Khalil", "NhatHai Phan", "et al."],
    desc: "Presents PwS, a code-LLM poisoning attack that uses developers' code styles as covert triggers; poisoned models emit CWE-20 vulnerable code in 95% of trigger-style cases with under 5% pass@1 drop on HumanEval, evading state-of-the-art defenses.",
    url: "https://arxiv.org/abs/2605.27631",
    tags: ["code llm", "poisoning", "cwe", "supply chain", "backdoor"]
  },
  {
    title: "Security in the Fine-Tuning Lifecycle of Large Language Models: Threats, Defenses,Evaluation, and Future Directions",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Wenjuan Li", "Yitao Liu", "Runze Chen", "Rajkumar Buyya"],
    desc: "A lifecycle-based survey of LLM fine-tuning security that organizes threats and defenses into pre-tuning, during-tuning, and post-tuning phases and presents unified empirical evaluations showing attack effectiveness is highly model-dependent and non-monotonic with scale.",
    url: "https://arxiv.org/abs/2605.25073",
    tags: ["fine-tuning", "survey", "weight tampering", "supply chain", "post-training"]
  },
  {
    title: "BadTemplate: A Training-Free Backdoor Attack via Chat Template Against Large Language Models",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Zihan Wang", "Hongwei Li", "Rui Zhang", "Wenbo Jiang", "Guowen Xu"],
    desc: "Reveals that customizable LLM chat templates can be abused to inject arbitrary strings into the system prompt; the resulting BadTemplate attack embeds persistent backdoors without retraining, evading current defenses with high effectiveness and low cost.",
    url: "https://arxiv.org/abs/2602.05401",
    tags: ["chat template", "backdoor", "training-free", "supply chain", "system prompt"]
  },
  {
    title: "Sequential Data Poisoning in LLM Post-Training",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2026,
    authors: ["Jack Sanderson", "Yihan Wang", "Xiaoqian Lu", "Gautam Kamath", "Yiwei Lu"],
    desc: "Identifies a 'single-attacker illusion' in LLM post-training: separate adversaries poisoning SFT and preference datasets appear negligible in isolation, but their contributions are additive in SFT→DPO and complementary in SFT→PPO, exposing cross-stage supply-chain risk.",
    url: "https://arxiv.org/abs/2606.04929",
    tags: ["post-training", "data poisoning", "sft", "rlhf", "supply chain"]
  },
  {
    title: "PickleBall: Secure Deserialization of Pickle-based Machine Learning Models (Extended Report)",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2025,
    authors: ["Andreas D. Kellas", "Neophytos Christou", "Wenxin Jiang", "Penghui Li", "et al."],
    desc: "Presents PickleBall, a drop-in pickle replacement that statically derives a per-library safe-load policy and dynamically enforces it at load time, correctly loading 79.8% of benign pickle-based Hugging Face models while rejecting 100% of malicious samples in the authors' dataset.",
    url: "https://arxiv.org/abs/2508.15987",
    tags: ["pickle", "deserialization", "model hub", "supply chain", "defense"]
  },
  {
    title: "The Art of Hide and Seek: Making Pickle-Based Model Supply Chain Poisoning Stealthy Again",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2025,
    authors: ["Tong Liu", "Guozhu Meng", "Peng Zhou", "Zizhuang Deng", "et al."],
    desc: "Systematically discloses the pickle-based model poisoning surface, identifying 22 distinct loading paths across five foundational frameworks and showing that current scanners (PickleScan, Fickling, ModelScan) miss stealthy payloads that bypass their detection logic.",
    url: "https://arxiv.org/abs/2508.19774",
    tags: ["pickle", "model poisoning", "bypass", "hugging face", "supply chain"]
  },
  {
    title: "Implementing AI Bill of Materials (AI BOM) with SPDX 3.0: A Comprehensive Guide to Creating AI and Dataset Bill of Materials",
    type: "paper",
    topic: "Supply Chain Attacks",
    org: "Linux Foundation",
    year: 2025,
    authors: ["Karen Bennet", "Gopi Krishnan Rajbahadur", "Arthit Suriyawongkul", "Kate Stewart"],
    desc: "A guide from the SPDX community extending SBOM practice to an AI Bill of Materials that documents algorithms, data-collection methods, frameworks, licenses and standards compliance, providing a concrete manifest schema for AI supply-chain transparency.",
    url: "https://arxiv.org/abs/2504.16743",
    tags: ["ai bom", "sbom", "spdx", "supply chain", "provenance"]
  },
  {
    title: "Your Compiler is Backdooring Your Model: Understanding and Exploiting Compilation Inconsistency Vulnerabilities in Deep Learning Compilers",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2025,
    authors: ["Simin Chen", "Jinjun Peng", "Yixin He", "Junfeng Yang", "Baishakhi Ray"],
    desc: "Shows that an unmodified DL compiler can silently alter model semantics, introducing effective backdoors on 6 models across 3 commercial compilers and 2 hardware platforms with 100% trigger success, and finds natural triggers in 31 of the top 100 Hugging Face models (including one with 220M+ downloads).",
    url: "https://arxiv.org/abs/2509.11173",
    tags: ["dl compiler", "backdoor", "hugging face", "supply chain", "compilation inconsistency"]
  },
  {
    title: "AgentHub: A Registry for Discoverable, Verifiable, and Reproducible AI Agents",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2025,
    authors: ["Erik Pautsch", "Tanmay Singla", "Parv Kumar", "Wenxin Jiang", "et al."],
    desc: "Proposes AgentHub, a registry layer for AI agents with a canonical manifest, publish-time validation, version-bound evidence records and an append-only lifecycle log, addressing agent supply-chain gaps analogous to npm/Hugging Face for software and models.",
    url: "https://arxiv.org/abs/2510.03495",
    tags: ["agent registry", "provenance", "supply chain", "governance", "manifest"]
  },
  {
    title: "TAIBOM: Bringing Trustworthiness to AI-Enabled Systems",
    type: "paper",
    topic: "Supply Chain Attacks",
    org: "University of Oxford",
    year: 2025,
    authors: ["Vadim Safronov", "Anthony McCaigue", "Nicholas Allott", "Andrew Martin"],
    desc: "Introduces TAIBOM, a Trusted AI Bill of Materials framework that extends SBOM principles to AI systems with a structured dependency model, integrity-statement propagation across heterogeneous AI pipelines, and a trust-attestation process for component provenance.",
    url: "https://arxiv.org/abs/2510.02169",
    tags: ["ai bom", "sbom", "provenance", "supply chain", "trust attestation"]
  },
  {
    title: "Models Are Codes: Towards Measuring Malicious Code Poisoning Attacks on Pre-trained Model Hubs",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2024,
    authors: ["Jian Zhao", "Shenao Wang", "Yanjie Zhao", "Xinyi Hou", "et al."],
    desc: "First systematic study of malicious code poisoning on pre-trained model hubs; proposes MalHug, an end-to-end pipeline combining dataset script extraction, deserialization, taint analysis and heuristic matching that was deployed with Ant Group to scan Hugging Face models and uncover previously unknown malicious PTMs.",
    url: "https://arxiv.org/abs/2409.09368",
    tags: ["model hub", "malicious code", "taint analysis", "hugging face", "supply chain"]
  },
  {
    title: "Privacy Backdoors: Stealing Data with Corrupted Pretrained Models",
    type: "paper",
    topic: "Supply Chain Attacks",
    org: "ETH Zurich",
    year: 2024,
    authors: ["Shanglun Feng", "Florian Tramèr"],
    desc: "Shows that an attacker who tampers with a pretrained model's weights can fully compromise finetuning-data privacy, reconstructing individual finetuning samples with guaranteed success — and breaks differential-privacy training when the base model is untrusted, exposing a new ML supply-chain risk.",
    url: "https://arxiv.org/abs/2404.00473",
    tags: ["privacy backdoor", "weight tampering", "differential privacy", "supply chain", "model inversion"]
  },
  {
    title: "PyMilo: A Python Library for ML I/O",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2024,
    authors: ["AmirHosein Rostami", "Sepand Haghighi", "Sadra Sabouri", "Alireza Zolanvari"],
    desc: "PyMilo is an open-source Python package that exports trained ML models in a transparent, non-executable format (replacing pickle), enabling safe model exchange and deployment while sidestepping pickle deserialization attacks in the ML supply chain.",
    url: "https://arxiv.org/abs/2501.00528",
    tags: ["pickle", "serialization", "safe format", "supply chain", "defense"]
  },
  {
    title: "VL-Trojan: Multimodal Instruction Backdoor Attacks against Autoregressive Visual Language Models",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2024,
    authors: ["Jiawei Liang", "Siyuan Liang", "Man Luo", "Aishan Liu", "et al."],
    desc: "Proposes VL-Trojan, a multimodal instruction backdoor attack against autoregressive vision-language models that uses an isolate-and-cluster strategy for image triggers and an iterative character-level text-trigger generator for black-box settings.",
    url: "https://arxiv.org/abs/2402.13851",
    tags: ["vlm", "trojan", "multimodal", "instruction tuning", "supply chain"]
  },
  {
    title: "TrojFM: Resource-efficient Backdoor Attacks against Very Large Foundation Models",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2024,
    authors: ["Yuzhou. Nie", "Yanting. Wang", "Jinyuan. Jia", "Michael J. De Lucia", "et al."],
    desc: "Proposes TrojFM, a backdoor attack on very large foundation models (e.g., Llama-3-70B) that injects backdoors by fine-tuning only a small fraction of parameters via a customized QLoRA, forcing similar hidden representations for poisoned inputs regardless of semantics.",
    url: "https://arxiv.org/abs/2405.16783",
    tags: ["foundation model", "backdoor", "qlora", "supply chain", "weight manipulation"]
  },
  {
    title: "The Philosopher's Stone: Trojaning Plugins of Large Language Models",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2023,
    authors: ["Tian Dong", "Minhui Xue", "Guoxing Chen", "Rayne Holland", "et al."],
    desc: "Demonstrates trojaned LoRA adapters that induce LLMs to execute attacker-defined outputs and weaponize tools on trigger; proposes POLISHED (LLM-aligned poisoning) and FUSION (attention-magnifying weight editing) attacks that improve over prior LoRA trojaning baselines.",
    url: "https://arxiv.org/abs/2312.00374",
    tags: ["lora", "trojan", "adapter", "supply chain", "agent"]
  },
  {
    title: "An Empirical Study of Pre-Trained Model Reuse in the Hugging Face Deep Learning Model Registry",
    type: "paper",
    topic: "Supply Chain Attacks",
    year: 2023,
    authors: ["Wenxin Jiang", "Nicholas Synovic", "Matt Hyatt", "Taylor R. Schorlemmer", "et al."],
    desc: "First empirical study of pre-trained-model reuse on Hugging Face, combining 12 practitioner interviews with repository mining to identify provenance, reproducibility and portability attributes and three core challenges including missing metadata and model risks.",
    url: "https://arxiv.org/abs/2303.02552",
    tags: ["hugging face", "model reuse", "empirical study", "provenance", "supply chain"]
  },
  {
    title: "From Secure Agentic AI to Secure Agentic Web",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Surveys threats and directions as agents interconnect into an agentic web. Extends the OSAA attack surface to web-scale interactions.",
    url: "https://arxiv.org/abs/2603.01564"
  },
  {
    title: "SoK Attack Surface Agentic AI Tools Autonomy",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Systematizes how tools and autonomy expand the agent attack surface. The clearest SoK of the OSAA attack surface to date.",
    url: "https://arxiv.org/abs/2603.22928"
  },
  {
    title: "Survey Agentic AI Cybersecurity Challenges Opportunities",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Examines dual-use implications of agentic AI for cybersecurity: defensive capabilities (continuous monitoring, autonomous incident response) and amplified adversarial power (reconnaissance, exploitation, social engineering), surveying threat models, frameworks, and three real-world use-case implementations.",
    url: "https://arxiv.org/abs/2601.05293"
  },
  {
    title: "Attack Defense Landscape Agentic AI Comprehensive Survey",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Presents a comprehensive survey of AI agent security covering the design space, attack landscape, and defense mechanisms, with case studies identifying existing gaps and open challenges in securing agentic AI systems that combine LLMs with non-AI components.",
    url: "https://arxiv.org/abs/2603.11088"
  },
  {
    title: "A Systematic Survey of Security Threats and Defenses in LLM-Based AI Agents: A Layered Attack Surface Framework",
    type: "paper",
    topic: "Surveys",
    org: "Independent",
    year: 2026,
    authors: ["Kexin Chu"],
    desc: "Proposes the Layered Attack Surface Model (LASM) that decomposes the agentic stack into seven layers (Foundation, Cognitive, Memory, Tool Execution, Multi-Agent Coordination, Ecosystem, Governance) augmented with a four-class temporality axis; analyzes 116 papers (2021-2026) and reveals the upper stack is sharply under-explored for long-horizon and stack-propagating threats, with documented attack regions having no corresponding defenses.",
    url: "https://arxiv.org/abs/2604.23338",
    tags: ["survey", "taxonomy", "attack surface", "layered"]
  },
  {
    title: "Jailbreaking LLMs & VLMs: Mechanisms, Evaluation, and Unified Defense",
    type: "paper",
    topic: "Surveys",
    org: "Beihang University",
    year: 2026,
    authors: ["Zejian Chen", "Chaozhuo Li", "Chao Li", "Xi Zhang"],
    desc: "Systematic survey spanning text-only to multimodal settings, organizing jailbreak attacks by template/encoding, in-context manipulation, RL/adversarial, LLM-assisted, and fine-tuned methods, and defenses by prompt-level obfuscation, output evaluation, and model-level alignment; proposes unified defense principles at perception, generation, and parameter layers.",
    url: "https://arxiv.org/abs/2601.03594",
    tags: ["survey", "jailbreak", "multimodal", "defense"]
  },
  {
    title: "Agentic AI Security Threats Defenses Evaluation Open Challenges",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "A benchmark for evaluating agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://doi.org/10.1109/ACCESS.2026.3675554"
  },
  {
    title: "Comprehensive Survey LLM Agent Full Stack Safety",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Introduces the first 'full-stack' safety survey covering the entire LLM lifecycle (data preparation, pre-training, post-training, deployment, commercialization), reviewing 800+ papers to systematically organize safety issues including data generation, alignment, model editing, and LLM-based agent systems.",
    url: "https://arxiv.org/abs/2504.15585"
  },
  {
    title: "Secure MultiLLM Agentic AI ZeroTrust Survey",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Introduces zero-trust security for multi-LLM agentic AI in Edge General Intelligence, surveying model-level and system-level mechanisms (strong identification, context-aware access control, blockchain-based management, proactive maintenance) needed to secure inter-LLM communications across edge infrastructures.",
    url: "https://arxiv.org/abs/2508.19870"
  },
  {
    title: "Survey Agentic Security Applications Threats Defenses",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Presents the first holistic survey of the agentic security landscape organized around Applications, Threats, and Defenses, with a taxonomy of 260+ papers analyzing entry points and agent-loop stages attacks target, defense strategies, cost trade-offs, and gaps requiring full-lifecycle defenses.",
    url: "https://arxiv.org/abs/2510.06445"
  },
  {
    title: "Survey Attacks Large Language Models",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Systematically surveys adversarial attacks on LLMs and LLM-based agents, organizing methods into Training-Phase, Inference-Phase, and Availability/Integrity attacks, with representative attack methods and corresponding defenses analyzed for each phase.",
    url: "https://arxiv.org/abs/2505.12567"
  },
  {
    title: "Survey Autonomy Induced Security Risks Large Model Agents",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys autonomy-induced security risks in large-model-based agents—memory poisoning, tool misuse, reward hacking, emergent misalignment—across perception, cognition, memory, and action modules, and proposes the Reflective Risk-Aware Agent Architecture (R2A2) grounded in Constrained Markov Decision Processes.",
    url: "https://arxiv.org/abs/2506.23844"
  },
  {
    title: "Large Model Based Agents Cooperation Paradigms Security Privacy Future Trends",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the state-of-the-art of large-model-based agents including architecture, components, enabling technologies, and applications; discusses collaboration paradigms from data, computation, and knowledge perspectives; analyzes security vulnerabilities and privacy risks in multi-agent settings; and proposes future directions for robust, secure LM agent ecosystems.",
    url: "https://doi.org/10.1109/COMST.2025.3576176"
  },
  {
    title: "Evaluation Benchmarking LLM Agents Survey",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the LLM agent evaluation field with a two-dimensional taxonomy organizing work along evaluation objectives (behavior, capabilities, reliability, safety) and evaluation process (interaction modes, datasets/benchmarks, metrics, tooling), highlighting enterprise challenges and future directions.",
    url: "https://arxiv.org/abs/2507.21504"
  },
  {
    title: "TRiSM Agentic AI Trust Risk Security Management LLM MultiAgent Systems",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Adapts Gartner's AI TRiSM framework to Agentic Multi-Agent Systems across Explainability, ModelOps, Security, Privacy, and Lifecycle Governance pillars, proposing a risk taxonomy, two new metrics (Component Synergy Score, Tool Utilization Efficacy), and a research roadmap for trustworthy agentic AI deployment.",
    url: "https://arxiv.org/abs/2506.04133"
  },
  {
    title: "Forewarned Forearmed Survey LLM Agents Autonomous Cyberattacks",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys LLM-based agents used in autonomous cyberattacks, presenting their scouting/memory/reasoning/action capabilities and examining attack effectiveness across static, mobile, and infrastructure-free networks, with analysis of defense methods and the phenomenon of 'Cyber Threat Inflation.'",
    url: "https://arxiv.org/abs/2505.12786"
  },
  {
    title: "Survey Trustworthy LLM Agents Threats Countermeasures",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Introduces the TrustAgent framework, a comprehensive study of trustworthy LLM agents and multi-agent systems that organizes trustworthiness into intrinsic (brain, memory, tool) and extrinsic (user, agent, environment) aspects, summarizing attacks, defenses, and evaluation methods.",
    url: "https://arxiv.org/abs/2503.09648"
  },
  {
    title: "Agentic AI Security: Threats, Defenses, Evaluation, and Open Challenges",
    type: "paper",
    topic: "Surveys",
    org: "University of California Davis",
    year: 2025,
    authors: ["Anshuman Chhabra", "Shrestha Datta", "Shahriar Kabir Nahin", "Prasant Mohapatra"],
    desc: "Outlines a threat taxonomy specific to agentic AI (with planning, tool use, memory, and autonomy), reviews recent benchmarks and evaluation methodologies, and discusses defense strategies from both technical and governance perspectives, synthesizing current research and highlighting open challenges for secure-by-design agent systems.",
    url: "https://arxiv.org/abs/2510.23883",
    tags: ["survey", "agentic ai", "taxonomy", "evaluation"]
  },
  {
    title: "LLM Security: Vulnerabilities, Attacks, Defenses, and Countermeasures",
    type: "paper",
    topic: "Surveys",
    org: "University of Granada",
    year: 2025,
    authors: ["Francisco Aguilera-Martínez", "Fernando Berzal"],
    desc: "Defines and categorizes attacks on LLMs distinguishing between training-phase attacks and post-deployment attacks, with a thorough analysis paired with prevention-based and detection-based defense mechanisms; evaluates effectiveness of known defenses against each threat and identifies areas requiring further research.",
    url: "https://arxiv.org/abs/2505.01177",
    tags: ["survey", "vulnerabilities", "defenses", "training"]
  },
  {
    title: "Personal LLM Agents Capability Efficiency Security Survey",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys Personal LLM Agents—LLM-based assistants tightly integrated with personal data and devices—covering architecture, capability, efficiency, and security, with expert-opinion analysis and a comprehensive survey of representative solutions across these four pillars.",
    url: "https://arxiv.org/abs/2401.05459"
  },
  {
    title: "Unique Security Privacy Threats LLMs Comprehensive Survey",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Provides a comprehensive survey of unique privacy and security threats across four LLM lifecycle scenarios (pre-training, fine-tuning, deployment, and LLM-based agents), with a taxonomy of threat models and analysis of countermeasures tailored to each scenario.",
    url: "https://arxiv.org/abs/2406.07973"
  },
  {
    title: "Navigating Risks Security Privacy Ethics LLM Agents",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys security, privacy, and ethics threats in LLM-based agents using a novel taxonomy based on threat sources and impacts (addressing cross-module/cross-stage threats), identifying 6 key agent features and analyzing 4 representative agents as case studies with future research directions across data, methodology, and policy.",
    url: "https://arxiv.org/abs/2411.09523"
  },
  {
    title: "Emerged Security Privacy LLM Agent Survey Case Studies",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys emerged privacy and security issues in LLM agents, categorizing threats and their impacts on humans, environments, and other agents, with case studies illustrating vulnerabilities and review of defensive strategies and future research trends.",
    url: "https://arxiv.org/abs/2407.19354"
  },
  {
    title: "Blockchain for Large Language Model Security and Safety: A Holistic Survey",
    type: "paper",
    topic: "Surveys",
    org: "Boise State University",
    year: 2024,
    authors: ["Caleb Geren", "Amanda Board", "Gaby G. Dagher", "Tim Andersen"],
    desc: "Comprehensively assesses how blockchain technology (with data immutability and decentralized structure) can be leveraged to enhance LLM security and safety; proposes the BC4LLMs taxonomy to systematically categorize related works addressing data poisoning, prompt injections, and unauthorized data exposure, highlighting research directions and challenges at this intersection.",
    url: "https://arxiv.org/abs/2407.20181",
    tags: ["survey", "blockchain", "defenses", "taxonomy"]
  },
  {
    title: "A Survey on Large Language Model (LLM) Security and Privacy: The Good, the Bad, and the Ugly",
    type: "paper",
    topic: "Surveys",
    org: "Drexel University",
    year: 2023,
    authors: ["Yifan Yao", "Jinhao Duan", "Kaidi Xu", "Yuanfang Cai"],
    desc: "Explores the intersection of LLMs with security and privacy, categorizing literature into 'The Good' (beneficial applications like code vulnerability detection and data confidentiality protection), 'The Bad' (offensive applications leveraging human-like reasoning), and 'The Ugly' (vulnerabilities of LLMs and their defenses); notes that LLMs both bolster and jeopardize cybersecurity.",
    url: "https://arxiv.org/abs/2312.02003",
    tags: ["survey", "security", "privacy", "taxonomy"]
  },
  {
    title: "A Comprehensive Survey of Attack Techniques, Implementation, and Mitigation Strategies in Large Language Models",
    type: "paper",
    topic: "Surveys",
    org: "Murdoch University",
    year: 2023,
    authors: ["Aysan Esmradi", "Daniel Wankit Yip", "Chun Fai Chan"],
    desc: "Reviews over 100 recent research works categorizing LLM attacks into attacks on models themselves (requiring expertise, data access, and time) and attacks on applications (more accessible to attackers); provides an in-depth analysis of attack methods, mitigation techniques with their effectiveness and limitations, and examines real-world reported and implemented attacks.",
    url: "https://arxiv.org/abs/2312.10982",
    tags: ["survey", "attack techniques", "mitigation", "real-world"]
  },
  {
    title: "MATRA: Modeling the Attack Surface of Agentic AI Systems -- OpenClaw Case Study",
    type: "paper",
    topic: "Threat Modeling",
    org: "CISPA Helmholtz Center for Information Security",
    year: 2026,
    authors: ["Tim Van hamme", "Thomas Vissers", "Javier Carnerero-Cano", "Mario Fritz"],
    desc: "A pragmatic threat-modeling framework that adapts established risk-assessment methodology to agentic AI: starts from an asset-based impact assessment and uses attack trees to determine likelihood within a specific deployment; demonstrates on an OpenClaw personal AI agent how architectural controls like network sandboxing and least-privilege access reduce risk by limiting the blast radius of successful injections.",
    url: "https://arxiv.org/abs/2605.10763",
    tags: ["threat model", "attack tree", "risk assessment", "agentic"]
  },
  {
    title: "STRIDE-AI: A Threat Modeling Framework for Generative AI Security Assessment",
    type: "paper",
    topic: "Threat Modeling",
    org: "Offenburg University",
    year: 2026,
    authors: ["Tsafac Nkombong Regine Cyrille", "Franziska Schwarz"],
    desc: "Bridges high-level risk standards (NIST AI RMF) with technical vulnerability taxonomies (OWASP LLM Top 10) via a six-phase assessment lifecycle, a STRIDE adaptation for AI systems, and a purpose-built web tool; initial black-box validation on a deployed LLM chatbot reduced attack success rate from 80% to 15% in a sandbox case study.",
    url: "https://arxiv.org/abs/2605.17163",
    tags: ["threat model", "stride", "nist ai rmf", "owasp"]
  },
  {
    title: "How Adversarial Environments Mislead Agentic AI?",
    type: "paper",
    topic: "Threat Modeling",
    org: "Independent",
    year: 2026,
    authors: ["Zhonghao Zhan", "Huichi Zhou", "Zhenhao Li", "Peiyuan Jing"],
    desc: "Formalizes Adversarial Environmental Injection (AEI), a threat model where adversaries compromise tool outputs to deceive tool-integrated agents, and operationalizes it via POTEMKIN, an MCP-compatible harness; across 11,000+ runs on five frontier agents finds a stark robustness gap where resistance to breadth attacks often increases vulnerability to depth attacks.",
    url: "https://arxiv.org/abs/2604.18874",
    tags: ["threat model", "environmental injection", "mcp", "robustness"]
  },
  {
    title: "Mapping the Exploitation Surface: A 10,000-Trial Taxonomy of What Makes LLM Agents Exploit Vulnerabilities",
    type: "paper",
    topic: "Threat Modeling",
    org: "Independent",
    year: 2026,
    authors: ["Charafeddine Mouzouni"],
    desc: "Approximately 10,000 trials across seven models and 37 prompt conditions in real Docker sandboxes with one varying 'encouragement' sentence show that 9 of 12 hypothesized attack dimensions produce no detectable exploitation; one dimension, goal reframing ('you are solving a puzzle; there may be hidden clues'), reliably triggers 38-40% exploitation on Claude Sonnet 4 despite explicit rule instructions.",
    url: "https://arxiv.org/abs/2604.04561",
    tags: ["threat model", "taxonomy", "empirical", "exploitation"]
  },
  {
    title: "Caging the Agents: A Zero Trust Security Architecture for Autonomous AI in Healthcare",
    type: "paper",
    topic: "Threat Modeling",
    org: "Independent",
    year: 2026,
    authors: ["Saikat Maiti"],
    desc: "Presents a six-domain threat model for agentic AI in healthcare (credential exposure, execution capability abuse, network egress exfiltration, prompt integrity failures, database access, fleet configuration drift) deployed across nine autonomous agents in production, implementing four-layer defense in depth with gVisor isolation, credential proxy sidecars, network egress policies, and a prompt integrity framework.",
    url: "https://arxiv.org/abs/2603.17419",
    tags: ["threat model", "zero trust", "healthcare", "defense in depth"]
  },
  {
    title: "Security Threat Modeling for Emerging AI-Agent Protocols: A Comparative Analysis of MCP, A2A, Agora, and ANP",
    type: "paper",
    topic: "Threat Modeling",
    org: "University of Utah",
    year: 2026,
    authors: ["Zeynab Anbiaee", "Mahdi Rabbani", "Mansur Mirani", "Gunjan Piya"],
    desc: "Systematic security analysis of four emerging AI-agent communication protocols using a structured threat-modeling analysis of architectures, trust assumptions, and lifecycle behaviors; identifies twelve protocol-level risks across creation, operation, and update phases, and provides a measurement-driven MCP case study quantifying wrong-provider tool execution under multi-server composition.",
    url: "https://arxiv.org/abs/2602.11327",
    tags: ["threat model", "mcp", "a2a", "protocol security"]
  },
  {
    title: "ASTRIDE A Security Threat Modeling Platform for Agentic AI",
    type: "paper",
    topic: "Threat Modeling",
    year: 2025,
    desc: "Introduces ASTRIDE, a threat-modeling platform that extends STRIDE with an 'A' category for AI Agent-Specific Attacks (prompt injection, unsafe tool invocation, reasoning subversion), combining a consortium of fine-tuned VLMs with the OpenAI gpt-oss reasoning LLM to perform end-to-end threat modeling from visual architecture diagrams.",
    url: "https://arxiv.org/abs/2512.04785"
  },
  {
    title: "CIA TA Risk Assessment for AI Reasoning Vulnerabilities",
    type: "paper",
    topic: "Threat Modeling",
    year: 2025,
    desc: "An attack/vulnerability study in agent threat modeling and risk assessment. It contributes to OSAA by structuring threat models for offensive assessment.",
    url: "https://arxiv.org/abs/2508.15839"
  },
  {
    title: "Securing Agentic AI Threat Modeling and Risk Analysis for",
    type: "paper",
    topic: "Threat Modeling",
    year: 2025,
    desc: "Applies the seven-layer MAESTRO framework to threat-model a network-monitoring agentic AI prototype (LangChain + WebSocket telemetry), confirming two real-world attacks—resource DoS via traffic replay and memory poisoning via log tampering—and recommending defense-in-depth with memory isolation, planner validation, and real-time anomaly response.",
    url: "https://arxiv.org/abs/2508.10043"
  },
  {
    title: "Securing Agentic AI: A Comprehensive Threat Model and Mitigation Framework for Generative AI Agents",
    type: "paper",
    topic: "Threat Modeling",
    org: "Independent",
    year: 2025,
    authors: ["Vineeth Sai Narajala", "Om Narayan"],
    desc: "Identifies nine primary threats across five domains (cognitive architecture, temporal persistence, operational execution, trust boundary, governance circumvention) and proposes two complementary frameworks: ATFAA, organizing agent-specific risks, and SHIELD, proposing practical mitigations tailored to enterprise GenAI agents whose autonomy, memory, and tool integration create novel risks like delayed exploitability and cross-system lateral movement.",
    url: "https://arxiv.org/abs/2504.19956",
    tags: ["threat model", "enterprise", "mitigation", "framework"]
  },

  /* ---------- GUIDES & WHITEPAPERS ---------- */
  {
    title: "Cisco State of AI Security Report 2026",
    type: "whitepaper",
    org: "Cisco",
    year: 2026,
    authors: ["Cisco"],
    desc: "Cisco's flagship annual AI security report providing comprehensive analysis of AI threat intelligence, global policy developments, standards, and agentic AI attack trends observed across enterprise networks.",
    url: "https://www.cisco.com/c/en/us/products/security/state-of-ai-security.html",
    tags: ["annual report", "cisco", "threat intel", "vendor"]
  },
  {
    title: "HiddenLayer 2026 AI Threat Landscape Report",
    type: "whitepaper",
    org: "HiddenLayer",
    year: 2026,
    authors: ["HiddenLayer Research Team"],
    desc: "Annual threat intelligence report spotlighting the rise of agentic AI and the expanding attack surface of autonomous systems. Covers model extraction, supply chain attacks, and agent-specific incidents across enterprise deployments.",
    url: "https://www.hiddenlayer.com/report-and-guide/threatreport2026",
    tags: ["threat intel", "agentic ai", "annual report", "vendor"]
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
    title: "AI Red Teaming: Tools, frameworks, and attack strategies explained",
    type: "guide",
    org: "Vectra",
    year: 2025,
    desc: "Long-form explainer of the AI red-teaming landscape.",
    url: "https://www.vectra.ai/topics/ai-red-teaming",
    tags: ["overview"]
  },
  {
    title: "AI Risk Report: Fast-Growing Threats in AI Runtime",
    type: "whitepaper",
    org: "Protect AI",
    year: 2025,
    authors: ["Protect AI Threat Research"],
    desc: "Threat research report detailing rapidly growing runtime attack vectors against large language models and AI applications, including prompt injection, tool abuse, and supply chain risks in production AI deployments.",
    url: "https://protectai.com/blog/ai-risk-report-fast-growing-threats-in-ai-runtime",
    tags: ["threat intel", "protect ai", "runtime", "vendor"]
  },
  {
    title: "AI for Security and Security for AI (AWS Whitepaper)",
    type: "whitepaper",
    org: "Amazon Web Services",
    year: 2025,
    authors: ["AWS Security", "SANS Institute"],
    desc: "AWS/SANS whitepaper exploring AI systems through three lenses: securing generative AI applications, using generative AI to strengthen security operations, and managing organizational risk across both directions.",
    url: "https://aws.amazon.com/blogs/security/new-whitepaper-available-ai-for-security-and-security-for-ai-navigating-opportunities-and-challenges",
    tags: ["aws", "sans", "whitepaper", "secure ai"]
  },
  {
    title: "Anthropic Claude 4 System Card",
    type: "whitepaper",
    org: "Anthropic",
    year: 2025,
    authors: ["Anthropic"],
    desc: "System card documenting the capabilities, safety evaluations, alignment assessments, and responsible deployment decisions for Claude Opus 4 and Claude Sonnet 4 hybrid reasoning large language models.",
    url: "https://www.anthropic.com/claude-4-system-card",
    tags: ["model card", "anthropic", "claude", "safety eval"]
  },
  {
    title: "Augment Code Guides Hub",
    type: "guide",
    org: "Augment Code",
    year: 2025,
    desc: "Augment Code's practitioner guide library covering prompt-injection detection, secure AI development, and code-agent hardening patterns derived from their AI coding assistant deployments.",
    url: "https://www.augmentcode.com/guides",
    tags: ["augment code", "guide", "secure development", "code agent", "prompt injection"]
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
  {
    title: "Cisco AI Defense Product Guide",
    type: "guide",
    org: "Cisco",
    year: 2025,
    desc: "Cisco's product guide for AI Defense, describing the architecture for detecting prompt injection, toxic combinations, and data exfiltration across employee-facing and agentic AI workloads.",
    url: "https://www.cisco.com/site/us/en/products/security/ai-defense/index.html",
    tags: ["cisco", "ai defense", "guide", "product", "exfiltration"]
  },
  {
    title: "Cisco Integrated AI Security and Safety Framework Report",
    type: "whitepaper",
    org: "Cisco",
    year: 2025,
    authors: ["Cisco"],
    desc: "Technical report describing Cisco's Integrated AI Security and Safety Framework, designed for practical threat identification, red teaming, and risk prioritization across the AI development lifecycle.",
    url: "https://arxiv.org/pdf/2512.12921",
    tags: ["security framework", "cisco", "red team", "risk prioritization"]
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
    title: "ENISA Threat Landscape 2025",
    type: "whitepaper",
    org: "European Union Agency for Cybersecurity (ENISA)",
    year: 2025,
    authors: ["ENISA"],
    desc: "Twelfth edition of ENISA's annual threat landscape report covering July 2024 to July 2025, highlighting how AI-supported phishing, model poisoning, and software supply chain attacks reshaped the cyber threat landscape.",
    url: "https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025",
    tags: ["threat landscape", "enisa", "annual report", "supply chain"]
  },
  {
    title: "HiddenLayer AI Threat Landscape Report 2025",
    type: "whitepaper",
    org: "HiddenLayer",
    year: 2025,
    authors: ["HiddenLayer Research Team"],
    desc: "2025 edition of HiddenLayer's annual AI threat intelligence report covering vulnerabilities introduced by generative AI in commercial and federal sectors, with case studies on model theft, data poisoning, and adversarial inputs.",
    url: "https://dpo-india.com/Resources/Global_AI_Reports_&_Handbooks/AI-Threat-Landscape-Report-2025.pdf",
    tags: ["threat intel", "annual report", "vendor", "pdf"]
  },
  {
    title: "Lakera 2025 GenAI Security Readiness Report",
    type: "whitepaper",
    org: "Lakera",
    year: 2025,
    authors: ["Lakera Research"],
    desc: "Industry survey report on GenAI security readiness, finding that 15% of respondents experienced a GenAI-related security incident in the past year, with prompt injection as the most common vector observed.",
    url: "https://www.lakera.ai/genai-security-report-2025",
    tags: ["readiness report", "lakera", "prompt injection", "survey"]
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
    title: "Microsoft 2025 Responsible AI Transparency Report",
    type: "whitepaper",
    org: "Microsoft",
    year: 2025,
    authors: ["Microsoft"],
    desc: "Annual transparency report detailing Microsoft's Responsible AI program, including the 67 red team operations AIRT conducted in 2024 across Copilots and flagship Azure OpenAI models and the related governance practices.",
    url: "https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/microsoft/msc/documents/presentations/CSR/Responsible-AI-Transparency-Report-2025-vertical.pdf",
    tags: ["transparency report", "microsoft", "responsible ai", "pdf"]
  },
  {
    title: "Microsoft AI Red Team",
    type: "whitepaper",
    org: "Microsoft",
    year: 2025,
    authors: ["Microsoft AI Red Team (AIRT)"],
    desc: "Landing hub for Microsoft's AI Red Team, with guidance, best practices, and lessons learned from hundreds of red team operations against Copilots and Azure OpenAI flagship models.",
    url: "https://learn.microsoft.com/en-us/security/ai-red-team",
    tags: ["red team", "microsoft", "guidance", "vendor"]
  },
  {
    title: "New Whitepaper Outlines the Taxonomy of Failure Modes in AI Agents",
    type: "whitepaper",
    org: "Microsoft",
    year: 2025,
    authors: ["Microsoft AI Red Team"],
    desc: "Microsoft whitepaper introducing a structured taxonomy of failure modes in AI agents, intended to help security professionals and ML engineers reason about how agentic systems can fail under adversarial conditions.",
    url: "https://www.microsoft.com/en-us/security/blog/2025/04/24/new-whitepaper-outlines-the-taxonomy-of-failure-modes-in-ai-agents",
    tags: ["agentic ai", "taxonomy", "microsoft", "failure modes"]
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
    title: "Salesforce Agentforce & Einstein Generative AI Security Whitepaper",
    type: "whitepaper",
    org: "Salesforce",
    year: 2025,
    authors: ["Salesforce Security"],
    desc: "Security whitepaper providing an overview of the Einstein GPT and Agentforce security capabilities that protect customer data and privacy across Salesforce's generative AI agent stack.",
    url: "https://compliance.salesforce.com/documents/a006e000014OxLFAA0",
    tags: ["agentforce", "salesforce", "security whitepaper", "generative ai"]
  },
  {
    title: "Salesforce Trusted AI and Agents Impact Report",
    type: "whitepaper",
    org: "Salesforce",
    year: 2025,
    authors: ["Salesforce Office of Ethical and Humane Use"],
    desc: "Report covering the foundational principles, policies, and decision-making structures that guide Salesforce's AI initiatives, including Agentforce deployment and the trust layer protecting customer data.",
    url: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/reports/salesforce-trusted-ai-and-agents-impact-report.pdf",
    tags: ["trusted ai", "salesforce", "agents", "pdf"]
  },
  {
    title: "AISEC.info — AI Security Research Hub",
    type: "guide",
    org: "AISEC",
    year: 2024,
    desc: "AISEC's community resource hub aggregating AI security research papers, talks, and practitioner guides covering adversarial ML, model theft, and LLM red-teaming techniques.",
    url: "https://www.aisec.info/",
    tags: ["aisec", "research hub", "guide", "adversarial ml", "community"]
  },
  {
    title: "AgentOps Documentation",
    type: "guide",
    org: "AgentOps",
    year: 2024,
    desc: "Official AgentOps documentation explaining how to instrument LLM agent runs for observability, replay, evaluation, and safety monitoring across multi-step agent workflows.",
    url: "https://docs.agentops.ai/",
    tags: ["agentops", "observability", "agents", "guide", "monitoring"]
  },
  {
    title: "Anthropic Prompt Engineering Overview",
    type: "guide",
    org: "Anthropic",
    year: 2024,
    desc: "Anthropic's official prompt engineering guide for Claude, covering message structure, system prompts, few-shot patterns, chain-of-thought, and defensive prompting against injection.",
    url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
    tags: ["anthropic", "prompt engineering", "claude", "guide", "defensive"]
  },
  {
    title: "Anthropic Strengthen Guardrails Guide",
    type: "guide",
    org: "Anthropic",
    year: 2024,
    desc: "Anthropic's guide to strengthening Claude's guardrails, covering system-prompt hardening, classifier chains, content moderation, and red-teaming-driven policy refinement.",
    url: "https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails",
    tags: ["anthropic", "guardrails", "moderation", "guide", "red teaming"]
  },
  {
    title: "Anthropic Test and Evaluate Documentation",
    type: "guide",
    org: "Anthropic",
    year: 2024,
    desc: "Anthropic's official guide to evaluating Claude models, covering evaluation design, prompt-based test harnesses, grader strategies, and iterative model improvement workflows.",
    url: "https://docs.anthropic.com/en/docs/test-and-evaluate",
    tags: ["anthropic", "evaluation", "guide", "claude", "testing"]
  },
  {
    title: "Cisco AI Security Resources",
    type: "guide",
    org: "Cisco",
    year: 2024,
    desc: "Cisco's curated AI security resource library covering threat models, defense-in-depth patterns, and implementation guidance for securing generative AI usage in enterprise environments.",
    url: "https://sec.cloudapps.cisco.com/security/center/resources/ai-security",
    tags: ["cisco", "ai security", "guide", "enterprise", "threat model"]
  },
  {
    title: "Cloud Security Alliance Research Hub",
    type: "guide",
    org: "Cloud Security Alliance (CSA)",
    year: 2024,
    desc: "CSA's research hub cataloguing working-group artifacts, whitepapers, and practitioner guides on cloud AI security, agentic AI red-teaming, AI controls matrix, and incident response.",
    url: "https://cloudsecurityalliance.org/research",
    tags: ["csa", "research hub", "guide", "cloud security", "agentic ai"]
  },
  {
    title: "CrewAI Documentation",
    type: "guide",
    org: "CrewAI",
    year: 2024,
    desc: "Official CrewAI documentation covering role-based multi-agent orchestration, tool delegation, memory management, and security considerations when authoring autonomous agent crews.",
    url: "https://docs.crewai.com/introduction",
    tags: ["crewai", "multi-agent", "documentation", "guide", "orchestration"]
  },
  {
    title: "ENISA AI Threat Landscape Report",
    type: "whitepaper",
    org: "European Union Agency for Cybersecurity (ENISA)",
    year: 2024,
    authors: ["ENISA"],
    desc: "ENISA report mapping the assets, threats, and threat actors of the AI ecosystem, establishing a baseline for securing AI across Europe with detailed attack taxonomies and mitigation guidance.",
    url: "https://www.enisa.europa.eu/news/enisa-news/enisa-ai-threat-landscape-report-unveils-major-cybersecurity-challenges",
    tags: ["threat landscape", "enisa", "european union", "taxonomy"]
  },
  {
    title: "Google AI Red Team: Why Red Teams Play a Central Role in Helping Organizations Secure AI",
    type: "whitepaper",
    org: "Google",
    year: 2024,
    authors: ["Google AI Red Team"],
    desc: "Google's report describing the mission, methodology, and case studies of its dedicated AI Red Team, focused on simulating threat actors against AI deployments and validating adversarial ML attacks such as data poisoning and prompt injection.",
    url: "https://services.google.com/fh/files/blogs/google_ai_red_team_digital_final.pdf",
    tags: ["red team", "google", "whitepaper", "pdf"]
  },
  {
    title: "HiddenLayer AI Threat Landscape Report 2024",
    type: "whitepaper",
    org: "HiddenLayer",
    year: 2024,
    authors: ["HiddenLayer Research Team"],
    desc: "Inaugural HiddenLayer threat landscape report covering model vulnerabilities, code-generation poisoning, and the foundational taxonomy of AI-specific threats observed in production ML systems.",
    url: "https://21998286.fs1.hubspotusercontent-na1.net/hubfs/21998286/HiddenLayer%20AI%20Threat%20Landscape%20Report%202024.pdf",
    tags: ["threat intel", "annual report", "vendor", "pdf"]
  },
  {
    title: "HiddenLayer Services — AI Security Engagements Guide",
    type: "guide",
    org: "HiddenLayer",
    year: 2024,
    desc: "HiddenLayer's services guide describing their AI security engagement methodology including model security assessments, runtime threat detection, and adversary emulation for ML-enabled enterprises.",
    url: "https://hiddenlayer.com/services",
    tags: ["hiddenlayer", "services", "engagement", "guide", "model security"]
  },
  {
    title: "How Google Does It: Building an Effective AI Red Team",
    type: "whitepaper",
    org: "Google Cloud",
    year: 2024,
    authors: ["Google Cloud Security"],
    desc: "Practical guide from Google on building and operating a dedicated AI red team, including scoping, attack simulation, and lessons learned applying classic and ML-specific adversarial techniques to AI systems.",
    url: "https://cloud.google.com/transform/how-google-does-it-building-an-effective-ai-red-team",
    tags: ["red team", "google cloud", "guidance", "vendor"]
  },
  {
    title: "IBM — Red Teaming LLMs Guide",
    type: "guide",
    org: "IBM",
    year: 2024,
    desc: "IBM's practitioner guide to red-teaming large language model applications, covering attack-surface mapping, jailbreak testing, prompt-injection probes, and integrating LLM red-teaming into existing security programs.",
    url: "https://www.ibm.com/blog/red-teaming-llms",
    tags: ["ibm", "red teaming", "llm", "guide", "jailbreak"]
  },
  {
    title: "Lakera Insights: What is Prompt Injection?",
    type: "guide",
    org: "Lakera",
    year: 2024,
    desc: "Lakera's practitioner explainer covering direct and indirect prompt injection attack vectors, real-world examples, and defensive countermeasures for LLM application developers.",
    url: "https://www.lakera.ai/insights/what-is-prompt-injection",
    tags: ["lakera", "prompt injection", "guide", "indirect injection", "defense"]
  },
  {
    title: "LangChain Security Documentation",
    type: "guide",
    org: "LangChain",
    year: 2024,
    desc: "Official LangChain security guide documenting prompt-injection mitigations, tool-call sandboxing, data-handling best practices, and traceability controls for production LLM applications built with LangChain/LangGraph.",
    url: "https://python.langchain.com/docs/security/",
    tags: ["langchain", "security", "guide", "prompt injection", "tooling"]
  },
  {
    title: "LangGraph Documentation",
    type: "guide",
    org: "LangChain (LangGraph)",
    year: 2024,
    desc: "Official LangGraph documentation for building stateful, cyclic multi-agent LLM applications as graphs, covering checkpointing, human-in-the-loop, tool execution, and security patterns for agent workflows.",
    url: "https://langchain-ai.github.io/langgraph/",
    tags: ["langgraph", "agents", "stateful", "documentation", "guide"]
  },
  {
    title: "LearnPrompting — Open-Source Prompt Engineering Guide",
    type: "guide",
    org: "LearnPrompting",
    year: 2024,
    authors: ["Sander Schulhoff"],
    desc: "Free open-source guide covering prompt engineering from basics to advanced techniques including prompt injection, jailbreaking, and defensive prompting. Widely used as introductory material for AI red-team practitioners.",
    url: "https://learnprompting.org/",
    tags: ["prompt engineering", "guide", "open source", "prompt injection", "beginner"]
  },
  {
    title: "LlamaIndex Documentation",
    type: "guide",
    org: "LlamaIndex",
    year: 2024,
    desc: "Official LlamaIndex documentation covering data-ingestion patterns, RAG pipeline construction, retrieval safety, and security considerations for building production LLM applications over enterprise data.",
    url: "https://docs.llamaindex.ai/en/stable/",
    tags: ["llamaindex", "rag", "documentation", "guide", "data ingestion"]
  },
  {
    title: "Mandiant AI Red Team Blog",
    type: "guide",
    org: "Mandiant (Google Cloud)",
    year: 2024,
    desc: "Mandiant's blog series on AI red-teaming covering threat-actor abuse of generative AI, defensive detection patterns, and offensive tradecraft adapted for LLM-enabled targets.",
    url: "https://www.mandiant.com/resources/blog/ai-red-team",
    tags: ["mandiant", "red team", "threat intelligence", "guide", "google cloud"]
  },
  {
    title: "Microsoft AutoGen Documentation",
    type: "guide",
    org: "Microsoft Research",
    year: 2024,
    desc: "Official Microsoft AutoGen documentation describing multi-agent conversation programming patterns, code-execution sandboxing, and tool-use security for building agentic LLM applications.",
    url: "https://microsoft.github.io/autogen/",
    tags: ["autogen", "microsoft", "multi-agent", "documentation", "guide"]
  },
  {
    title: "Red-Teaming the Risks of Using AI in Biological Attacks",
    type: "whitepaper",
    org: "RAND Corporation",
    year: 2024,
    authors: ["RAND Corporation"],
    desc: "RAND experiment report in which dozens of researchers role-played bad actors planning biological attacks using AI tools, identifying operational risks and red-teaming methodologies for dual-use AI capability evaluations.",
    url: "https://www.rand.org/pubs/articles/2024/red-teaming-the-risks-of-using-ai-in-biological-attacks.html",
    tags: ["red team", "rand", "biorisk", "dual use"]
  },
  {
    title: "Repello AI Blog",
    type: "guide",
    org: "Repello AI",
    year: 2024,
    desc: "Repello AI's practitioner blog covering AI red-teaming techniques, prompt-injection case studies, and defensive guides for protecting LLM applications against model extraction and abuse.",
    url: "https://repello.ai/blog",
    tags: ["repello", "blog", "red teaming", "guide", "prompt injection"]
  },
  {
    title: "SANS Security Resources Hub",
    type: "guide",
    org: "SANS Institute",
    year: 2024,
    desc: "SANS Institute's curated security resources hub including whitepapers, posters, webcasts, and reading-room articles on AI red-teaming, ML security, and adversarial threat emulation.",
    url: "https://www.sans.org/security-resources/",
    tags: ["sans", "resources", "whitepapers", "guide", "training"]
  },
  {
    title: "SentinelOne AI Security 101 Guide",
    type: "guide",
    org: "SentinelOne",
    year: 2024,
    desc: "SentinelOne's introductory guide to AI security fundamentals, covering adversarial ML, prompt injection, model risks, and protective controls for enterprise AI adoption.",
    url: "https://www.sentinelone.com/cybersecurity-101/ai-security/",
    tags: ["sentinelone", "ai security 101", "guide", "adversarial ml", "fundamentals"]
  },
  {
    title: "Wiz AI Security Academy",
    type: "guide",
    org: "Wiz",
    year: 2024,
    desc: "Wiz's AI security learning academy covering cloud AI threat models, prompt injection, and best practices for securing AI infrastructure, pipelines, and identity-perimeter exposure of LLM workloads.",
    url: "https://www.wiz.io/academy/ai-security",
    tags: ["wiz", "cloud security", "academy", "guide", "ai infrastructure"]
  },
  {
    title: "OpenAI Red Teaming Network",
    type: "whitepaper",
    org: "OpenAI",
    year: 2023,
    authors: ["OpenAI"],
    desc: "Program announcement describing OpenAI's network of trusted external experts contracted to perform adversarial testing of frontier AI models, including methodology, scope, and how findings feed into risk mitigations.",
    url: "https://openai.com/index/red-teaming-network",
    tags: ["red team", "openai", "program", "external red teaming"]
  },

  /* ---------- BLOGS & NEWSLETTERS ---------- */
  {
    title: "CSA Labs research notes",
    type: "blog",
    org: "Cloud Security Alliance",
    year: 2026,
    desc: "Research notes on NIST agent standards and red-teaming.",
    url: "https://labs.cloudsecurityalliance.org/research/csa-research-note-nist-ai-agent-red-teaming-standards-202603/",
    tags: ["csa", "nist"]
  },
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
    title: "Gray Swan News",
    type: "newsletter",
    org: "Gray Swan AI",
    year: 2024,
    authors: ["Gray Swan AI"],
    desc: "News and research feed from Gray Swan AI, an AI-security startup founded by former CSET researchers, publishing technical write-ups on LLM jailbreaks, robustness evaluations, and the CiderGuard defense.",
    url: "https://grayswan.ai/news",
    tags: ["jailbreaking", "robustness", "llm security", "vendor blog"]
  },
  {
    title: "Mozilla.ai Blog",
    type: "blog",
    org: "Mozilla.ai",
    year: 2024,
    desc: "Blog from Mozilla.ai, Mozilla's AI-focused subsidiary, publishing open-source AI research, model evaluations, and security analyses of open-weight LLMs and agentic frameworks. Covers topics like Llamafile, Lantern, and local-agent security.",
    url: "https://blog.mozilla.ai/",
    tags: ["open source ai", "ai evaluation", "open weights", "vendor blog"]
  },
  {
    title: "Pillar Security Blog",
    type: "blog",
    org: "Pillar Security",
    year: 2024,
    desc: "Vendor blog from Pillar Security, focused on AI security policy, threat modeling, and runtime defenses for GenAI applications. Publishes research on agentic-AI risks and enterprise security frameworks for LLM deployments.",
    url: "https://www.pillar.security/blog",
    tags: ["ai security", "threat modeling", "agentic security", "vendor blog"]
  },
  {
    title: "The Real Threats of Artificial Intelligence – AI Security Newsletter",
    type: "newsletter",
    org: "Hackstery",
    year: 2024,
    authors: ["Wesley Thiessen"],
    desc: "Biweekly AI security newsletter from LLM pentesting firm Hackstery, summarizing new AI/LLM vulnerabilities, attacks, and safety research. Authored by Wesley Thiessen, an active LLM pentester and conference speaker.",
    url: "https://hackstery.com/newsletter",
    tags: ["ai security", "llm pentesting", "biweekly", "vulnerability", "newsletter"]
  },
  {
    title: "AI Snake Oil",
    type: "newsletter",
    org: "Sayash Kapoor, Arvind Narayanan",
    year: 2023,
    authors: ["Sayash Kapoor", "Arvind Narayanan"],
    desc: "Substack newsletter (now renamed 'AI as Normal Technology') critiquing AI hype and documenting real-world AI failures, security incidents, and jailbreak demonstrations. Authored by researchers at Princeton's Center for Information Technology Policy.",
    url: "https://aisnakeoil.substack.com/",
    tags: ["ai incidents", "ai safety", "jailbreaking", "critique", "substack"]
  },
  {
    title: "Apollo Research Blog",
    type: "newsletter",
    org: "Apollo Research",
    year: 2023,
    authors: ["Apollo Research"],
    desc: "Blog from Apollo Research publishing frontier-model evaluations focused on scheming, deception, and sandbagging behavior in LLM agents. Runs pre-deployment evaluations for major frontier labs and policymakers.",
    url: "https://www.apolloresearch.ai/blog",
    tags: ["scheming", "deception", "frontier models", "evaluation", "research blog"]
  },
  {
    title: "Embrace the Red",
    type: "newsletter",
    org: "Johann Rehberger",
    year: 2023,
    authors: ["Johann Rehberger"],
    desc: "Independent blog and newsletter tracking real-world prompt injection, indirect prompt injection, and agentic AI security incidents with detailed technical write-ups and reproducible demos. Frequently cited for documenting attacks against ChatGPT, Copilot, and other consumer LLM agents.",
    url: "https://embracethered.com/",
    tags: ["prompt injection", "agentic security", "incident", "red teaming", "research blog"]
  },
  {
    title: "Lasso Security Blog",
    type: "blog",
    org: "Lasso Security",
    year: 2023,
    desc: "Vendor blog from Lasso Security covering LLM and agentic-AI threat research, prompt-injection defenses, and enterprise GenAI deployment guidance. Includes technical write-ups of new attacks and CVEs against LLM frameworks.",
    url: "https://www.lasso.security/blog",
    tags: ["llm security", "agentic security", "prompt injection", "vendor blog"]
  },
  {
    title: "OWASP Gen AI Security Project Newsletter",
    type: "newsletter",
    org: "OWASP",
    year: 2023,
    authors: ["OWASP Gen AI Security Project"],
    desc: "Official newsletter of the OWASP Gen AI Security Project, publishing updates to the OWASP Top 10 for LLM Applications, agentic-security guidance, and community-contributed best practices for securing generative AI.",
    url: "https://genai.owasp.org/newsletter/",
    tags: ["owasp", "llm security", "top 10", "agentic security", "newsletter"]
  },
  {
    title: "Prompt Security Blog",
    type: "newsletter",
    org: "Prompt Security",
    year: 2023,
    authors: ["Prompt Security"],
    desc: "Vendor blog from Prompt Security covering LLM and agentic-AI threat research, new prompt-injection and exfiltration techniques, and enterprise guidance on protecting GenAI deployments.",
    url: "https://www.prompt.security/blog",
    tags: ["llm security", "prompt injection", "agentic security", "vendor blog"]
  },
  {
    title: "Rez",
    type: "newsletter",
    org: "Joseph Thacker",
    year: 2023,
    authors: ["Joseph Thacker"],
    desc: "Substack newsletter by AI red-teamer Joseph Thacker (rez0), covering LLM jailbreaks, prompt-injection techniques, agentic AI vulnerabilities, and practical red-teaming methodology drawn from his work at Trail of Bits and independent research.",
    url: "https://rez0.substack.com/",
    tags: ["ai red teaming", "jailbreaking", "prompt injection", "substack"]
  },
  {
    title: "The Rundown AI",
    type: "newsletter",
    org: "The Rundown",
    year: 2023,
    authors: ["The Rundown"],
    desc: "Mass-reach daily AI newsletter summarizing AI news, tools, and capabilities. Frequently highlights new jailbreaks, agent-security incidents, and AI red-teaming announcements for a general AI-curious audience.",
    url: "https://www.therundown.ai/",
    tags: ["ai news", "daily digest", "industry", "newsletter", "mainstream"]
  },
  {
    title: "AVID Blog",
    type: "blog",
    org: "AVID (AI Vulnerability Database)",
    year: 2022,
    desc: "Blog from the AI Vulnerability Database (AVID), an open-source taxonomy and repository of AI model failure modes. Publishes case studies of AI harms, evaluated model risks, and dataset evaluations contributed by the community.",
    url: "https://avidml.org/blog/",
    tags: ["ai vulnerability", "failure modes", "taxonomy", "open source"]
  },
  {
    title: "Ahead of AI",
    type: "newsletter",
    org: "Sebastian Raschka",
    year: 2022,
    authors: ["Sebastian Raschka"],
    desc: "Substack newsletter by Sebastian Raschka covering LLM research, training, and security topics including fine-tuning attacks, model tampering, and the technical underpinnings of jailbreak and prompt-injection defenses.",
    url: "https://magazine.sebastianraschka.com/",
    tags: ["llm research", "ai security", "fine-tuning", "technical", "substack"]
  },
  {
    title: "CAIS Research Blog",
    type: "newsletter",
    org: "Center for AI Safety",
    year: 2022,
    authors: ["Center for AI Safety"],
    desc: "Blog from the Center for AI Safety (CAIS) publishing frontier-model evaluations, deception/scheming research, and policy-relevant threat analysis. Hosts the globally cited 'AI Risk' statement and related safety research.",
    url: "https://www.safe.ai/blog",
    tags: ["ai safety", "frontier models", "evaluation", "policy", "research blog"]
  },
  {
    title: "HiddenLayer Research",
    type: "newsletter",
    org: "HiddenLayer",
    year: 2022,
    authors: ["HiddenLayer"],
    desc: "Research portal from HiddenLayer, an AI-security vendor, publishing threat research on model theft, adversarial machine-learning attacks, and AI supply-chain risks. Mirrors findings reported to MITRE ATLAS.",
    url: "https://hiddenlayer.com/research",
    tags: ["adversarial ml", "model theft", "supply chain", "research blog", "vendor"]
  },
  {
    title: "Kai Greshake's Blog",
    type: "newsletter",
    org: "Kai Greshake",
    year: 2022,
    authors: ["Kai Greshake"],
    desc: "Personal blog of prompt-injection researcher Kai Greshake, co-author of the original indirect prompt injection paper, with ongoing analysis of LLM agent vulnerabilities, defensive proposals, and security research commentary.",
    url: "https://kai-greshake.de/",
    tags: ["prompt injection", "indirect prompt injection", "research blog", "llm security"]
  },
  {
    title: "Lakera Blog",
    type: "newsletter",
    org: "Lakera",
    year: 2022,
    authors: ["Lakera"],
    desc: "Blog and newsletter from Lakera, vendor of the Lakera Guard LLM firewall, covering prompt-injection research, LLM red-teaming methodology, and the company's annual LLM security 'state of the union' reports.",
    url: "https://lakera.ai/blog/",
    tags: ["llm firewall", "prompt injection", "red teaming", "vendor blog"]
  },
  {
    title: "LearnPrompting Blog",
    type: "blog",
    org: "Learn Prompting",
    year: 2022,
    authors: ["Sander Schulhoff"],
    desc: "Blog from LearnPrompting.org, the open-source prompt-engineering curriculum, publishing research on prompt injection, jailbreak defenses, and LLM red-teaming alongside community-contributed tutorials.",
    url: "https://learnprompting.org/blog",
    tags: ["prompt engineering", "prompt injection", "llm security", "education"]
  },
  {
    title: "Protect AI Blog",
    type: "blog",
    org: "Protect AI",
    year: 2022,
    desc: "Vendor blog from Protect AI covering AI/ML supply-chain security, model scanning, runtime threat detection, and the company's Nightmare and VulnHuntr security research tools. Publishes original CVE research for AI frameworks.",
    url: "https://protectai.com/blog",
    tags: ["ai security", "supply chain", "model scanning", "vendor blog"]
  },
  {
    title: "Zenity Blog",
    type: "blog",
    org: "Zenity",
    year: 2022,
    desc: "Vendor blog from Zenity, which provides security for low-code/no-code and AI-agent platforms (Microsoft Copilot, Salesforce, ServiceNow). Publishes original research on prompt injection, agentic vulnerabilities, and SaaS AI security.",
    url: "https://zenity.io/blog",
    tags: ["agentic security", "prompt injection", "low-code security", "vendor blog"]
  },
  {
    title: "Anthropic Research",
    type: "newsletter",
    org: "Anthropic",
    year: 2021,
    authors: ["Anthropic"],
    desc: "Research blog from Anthropic publishing frontier-model safety research including prompt injection, jailbreak analysis, computer-use agent security, and Claude red-teaming results. Frequently cited for empirical agentic-AI security studies.",
    url: "https://www.anthropic.com/research",
    tags: ["ai safety", "frontier models", "jailbreaking", "agent security", "research blog"]
  },
  {
    title: "METR Updates",
    type: "newsletter",
    org: "METR",
    year: 2021,
    authors: ["METR"],
    desc: "Updates feed from METR (Model Evaluation & Threat Research), the non-profit evaluating frontier AI models for deceptive alignment, autonomous capability, and dangerous-agent behavior on behalf of major AI labs.",
    url: "https://www.metr.org/blog/",
    tags: ["model evaluation", "agentic ai", "deceptive alignment", "research blog"]
  },
  {
    title: "Adversa AI Blog",
    type: "newsletter",
    org: "Adversa AI",
    year: 2020,
    authors: ["Adversa AI"],
    desc: "Blog from Adversa AI, an AI red-teaming vendor, publishing annual 'AI Attack Landscapes' reports and technical write-ups of jailbreaks, prompt injections, and agentic-AI vulnerabilities discovered by their research team.",
    url: "https://www.adversa.ai/blog",
    tags: ["ai red teaming", "jailbreaking", "threat report", "vendor blog"]
  },
  {
    title: "Cisco Security Blog — AI",
    type: "blog",
    org: "Cisco",
    year: 2020,
    desc: "Cisco Security blog's AI section, covering research on AI/LLM threats from Cisco's Talos and AI defense teams, including agentic AI security, model abuse detection, and incident-response guidance for AI-augmented attacks.",
    url: "https://blogs.cisco.com/security/ai",
    tags: ["ai security", "threat intelligence", "cisco", "vendor blog"]
  },
  {
    title: "Cohere Blog",
    type: "blog",
    org: "Cohere",
    year: 2020,
    desc: "Blog from Cohere, the enterprise LLM vendor, publishing research on model safety, prompt-injection evaluations, retrieval-augmented generation security, and enterprise GenAI deployment best practices.",
    url: "https://cohere.com/blog",
    tags: ["llm safety", "enterprise ai", "rag security", "vendor blog"]
  },
  {
    title: "Hudson Rock Blog",
    type: "blog",
    org: "Hudson Rock",
    year: 2020,
    desc: "Blog from Hudson Rock, an infostealer intelligence company, publishing research on how stolen credentials from infostealers are used to compromise AI services, LLM accounts, and corporate GenAI deployments. Includes empirical data on InfoStealer-victim overlap with AI platforms.",
    url: "https://www.hudsonrock.com/blog",
    tags: ["infostealer", "ai compromise", "credential theft", "vendor blog"]
  },
  {
    title: "Last Week in AI",
    type: "newsletter",
    org: "Last Week in AI",
    year: 2020,
    authors: ["Last Week in AI"],
    desc: "Weekly Substack newsletter summarizing the most significant AI news, research, and policy developments, with consistent coverage of LLM jailbreaks, agent-security incidents, and frontier-model evaluations.",
    url: "https://lastweekin.ai/",
    tags: ["ai news", "weekly digest", "llm security", "substack", "newsletter"]
  },
  {
    title: "TLDR AI",
    type: "newsletter",
    org: "TLDR",
    year: 2020,
    authors: ["TLDR"],
    desc: "Daily five-minute AI newsletter from TLDR summarizing top AI research, industry news, and notable security incidents. Curated by human editors with a large subscriber base of AI practitioners and engineers.",
    url: "https://tldr.tech/ai",
    tags: ["ai news", "daily digest", "industry", "newsletter", "curated"]
  },
  {
    title: "The Batch",
    type: "newsletter",
    org: "DeepLearning.AI",
    year: 2020,
    authors: ["Andrew Ng", "DeepLearning.AI"],
    desc: "Weekly AI newsletter from DeepLearning.AI, edited by Andrew Ng, summarizing major AI research and industry developments, including LLM security incidents, agentic-AI milestones, and notable jailbreaks.",
    url: "https://www.deeplearning.ai/the-batch/",
    tags: ["ai news", "weekly digest", "llm security", "industry", "newsletter"]
  },
  {
    title: "Wiz Blog",
    type: "blog",
    org: "Wiz",
    year: 2020,
    desc: "Cloud security blog from Wiz covering research on cloud-AI vulnerabilities, including the BingBang Copilot incident, LLM service misconfigurations, and AI-supply-chain threats in cloud environments. Publishes original research from Wiz Research.",
    url: "https://www.wiz.io/blog",
    tags: ["cloud security", "ai security", "research blog", "vendor blog"]
  },
  {
    title: "Avertium Blog",
    type: "blog",
    org: "Avertium",
    year: 2019,
    desc: "Cybersecurity blog from managed detection and response firm Avertium, covering threat intelligence, incident response, and emerging AI-related threats to enterprise environments. Publishes practitioner guidance on defending against AI-augmented attacks.",
    url: "https://www.avertium.com/blog",
    tags: ["cybersecurity", "threat intelligence", "ai security", "vendor blog"]
  },
  {
    title: "Nicholas Carlini — Blog",
    type: "blog",
    org: "Nicholas Carlini",
    year: 2019,
    authors: ["Nicholas Carlini"],
    desc: "Personal blog by Nicholas Carlini (Google DeepMind researcher) on adversarial machine learning, model extraction, and breaking neural-network defenses. Widely cited in academic ML security literature for first-author attacks on certified defenses.",
    url: "https://nicholascarlini.com/",
    tags: ["adversarial ml", "model extraction", "research blog", "neural network attacks"]
  },
  {
    title: "AI Alignment Forum",
    type: "blog",
    org: "AI Alignment Forum",
    year: 2018,
    desc: "Community blog devoted to technical AI alignment research, including posts on deceptive alignment, inner optimization, agent oversight, and frontier-model evaluations. Hosts research from major AI safety organizations including Redwood Research, Anthropic, and Apollo Research.",
    url: "https://www.alignmentforum.org/",
    tags: ["ai alignment", "ai safety", "frontier models", "community blog"]
  },
  {
    title: "AI Alignment Newsletter",
    type: "newsletter",
    org: "Rohin Shah",
    year: 2018,
    authors: ["Rohin Shah"],
    desc: "Long-running newsletter summarizing technical AI alignment and safety research, including posts on deceptive AI behavior, agent oversight, and evaluations of frontier models. Published by Rohin Shah, researcher at the Center for Human-Compatible AI.",
    url: "https://rohinshah.com/alignment-newsletter/",
    tags: ["ai alignment", "ai safety", "frontier models", "evaluation", "newsletter"]
  },
  {
    title: "AI Village",
    type: "newsletter",
    org: "AI Village",
    year: 2018,
    authors: ["AI Village"],
    desc: "Community hub and publication from AI Village, the DEFCON hacker community focused on public AI red-team practice, hands-on security workshops, and open AI-security resources. Includes newsletter and event announcements.",
    url: "https://aivillage.org/",
    tags: ["ai red teaming", "community", "defcon", "workshops", "open source"]
  },
  {
    title: "AI Village Blog",
    type: "blog",
    org: "AI Village",
    year: 2018,
    desc: "Blog of AI Village, the DEFCON hacker community for public AI red-teaming, publishing hands-on security research, workshop materials, and CVE write-ups on adversarial ML and LLM vulnerabilities from community contributors.",
    url: "https://aivillage.org/blog/",
    tags: ["ai red teaming", "defcon", "community blog", "adversarial ml"]
  },
  {
    title: "Cybeats Blog",
    type: "blog",
    org: "Cybeats",
    year: 2018,
    desc: "Blog from Cybeats covering software supply-chain security, SBOM management, and AI/ML model supply-chain risks. Includes guidance on AI Bills of Materials (AIBOM), model provenance, and SBOM-driven risk governance.",
    url: "https://www.cybeats.com/blog",
    tags: ["supply chain", "sbom", "ai bom", "vendor blog"]
  },
  {
    title: "Hugging Face Blog",
    type: "blog",
    org: "Hugging Face",
    year: 2018,
    desc: "Hugging Face's official blog covering model releases, ML research, and security topics including malicious model detection, pickle file risks, the Picklescan tooling, and the Hugging Face Secure Code Hub for AI practitioners.",
    url: "https://huggingface.co/blog",
    tags: ["ml models", "ai security", "open source", "vendor blog"]
  },
  {
    title: "IronCore Labs Blog",
    type: "blog",
    org: "IronCore Labs",
    year: 2018,
    desc: "Blog from IronCore Labs, a privacy and security vendor for AI applications, covering encryption for LLM prompts, confidential RAG architectures, and privacy-preserving AI deployment patterns.",
    url: "https://ironcorelabs.com/blog/",
    tags: ["ai privacy", "encryption", "rag security", "vendor blog"]
  },
  {
    title: "Lil'Log",
    type: "newsletter",
    org: "Lilian Weng",
    year: 2018,
    authors: ["Lilian Weng"],
    desc: "Technical blog by Lilian Weng (OpenAI / formerly Azure OpenAI) that publishes in-depth primers on LLM agents, autonomous agents, prompt injection, and adversarial attacks on language models. Widely cited for foundational survey posts on agentic AI.",
    url: "https://lilianweng.github.io/",
    tags: ["llm agents", "prompt injection", "adversarial", "research blog", "survey"]
  },
  {
    title: "PortSwigger Daily Swig",
    type: "newsletter",
    org: "PortSwigger",
    year: 2018,
    authors: ["PortSwigger"],
    desc: "Daily cybersecurity news digest from PortSwigger (makers of Burp Suite) that tracks AI/LLM web vulnerabilities, prompt-injection incidents, and academic web-agent security research relevant to practitioners.",
    url: "https://www.portswigger.net/daily-swig",
    tags: ["web security", "ai security", "news digest", "vulnerability"]
  },
  {
    title: "Snyk Blog",
    type: "blog",
    org: "Snyk",
    year: 2018,
    desc: "Developer-security blog from Snyk covering open-source vulnerabilities, cloud-native security, and AI/LLM code security. Includes research on AI-generated code risks, the Snyk Code tooling, and agentic-code vulnerabilities.",
    url: "https://snyk.io/blog/",
    tags: ["application security", "open source", "ai code security", "vendor blog"]
  },
  {
    title: "Cobalt Blog",
    type: "blog",
    org: "Cobalt",
    year: 2017,
    desc: "Blog from Cobalt (PtaaS provider) covering application security, penetration testing, and AI-security testing methodology. Includes practitioner guidance on pentesting LLM and agentic applications and the offensive-AI research series.",
    url: "https://www.cobalt.io/blog",
    tags: ["application security", "penetration testing", "ai security", "vendor blog"]
  },
  {
    title: "GitGuardian Blog",
    type: "blog",
    org: "GitGuardian",
    year: 2017,
    desc: "Blog from GitGuardian covering secrets detection, non-human identity governance, and AI/LLM supply-chain security. Publishes technical research on hardcoded credentials in AI training pipelines and model repositories.",
    url: "https://blog.gitguardian.com/",
    tags: ["secrets security", "supply chain", "nhi governance", "vendor blog"]
  },
  {
    title: "Google Safety & Security Blog",
    type: "blog",
    org: "Google",
    year: 2017,
    desc: "Official Google blog on safety and security, covering AI safety research, abuse mitigation, threat-response efforts across Google products including Gemini, Workspace, and Android, and Google's Secure AI Framework (SAIF) announcements.",
    url: "https://blog.google/technology/safety-security/",
    tags: ["ai safety", "security", "abuse mitigation", "vendor blog"]
  },
  {
    title: "The Gradient",
    type: "blog",
    org: "The Gradient",
    year: 2017,
    desc: "Independent digital publication on AI research, policy, and safety, publishing long-form essays and technical analyses on adversarial ML, AI red-teaming, and frontier-model risks from academic and industry contributors.",
    url: "https://thegradient.pub/",
    tags: ["ai research", "ai safety", "ai policy", "publication"]
  },
  {
    title: "ITSPmagazine",
    type: "blog",
    org: "ITSPmagazine",
    year: 2015,
    authors: ["Marco Ciappelli", "Sean Martin"],
    desc: "Independent multimedia publication and podcast network covering cybersecurity, AI, and society, co-founded by Marco Ciappelli. Publishes articles, interviews, and panel discussions on AI security, governance, and red-teaming.",
    url: "https://www.itspmagazine.com/",
    tags: ["cybersecurity", "ai security", "podcast", "media"]
  },
  {
    title: "Import AI",
    type: "newsletter",
    org: "Jack Clark",
    year: 2015,
    authors: ["Jack Clark"],
    desc: "Influential weekly AI newsletter by Jack Clark (co-founder of Anthropic), covering frontier-model research, AI policy, and notable AI security incidents. Read widely across AI labs and policy makers.",
    url: "https://importai.substack.com/",
    tags: ["ai news", "weekly digest", "policy", "frontier models", "substack"]
  },
  {
    title: "OpenAI Research",
    type: "newsletter",
    org: "OpenAI",
    year: 2015,
    authors: ["OpenAI"],
    desc: "OpenAI's research blog covering frontier-model evaluations, safety mitigations, agentic-AI red-teaming, and Computer-Using Agent (CUA) security findings. Posts are accompanied by released system cards and model specs.",
    url: "https://openai.com/research/",
    tags: ["ai safety", "frontier models", "red teaming", "agent security", "research blog"]
  },
  {
    title: "Palo Alto Unit 42 Blog",
    type: "blog",
    org: "Palo Alto Networks Unit 42",
    year: 2014,
    desc: "Threat-research blog from Palo Alto Networks' Unit 42 incident-response and intelligence team, publishing analyses of AI-augmented phishing, deepfake-enabled fraud, LLM-powered malware, and emerging agentic-AI threat actor tradecraft.",
    url: "https://unit42.paloaltonetworks.com/",
    tags: ["threat intelligence", "ai-augmented attacks", "incident response", "vendor blog"]
  },
  {
    title: "Unsupervised Learning",
    type: "newsletter",
    org: "Daniel Miessler",
    year: 2014,
    authors: ["Daniel Miessler"],
    desc: "Weekly newsletter by Daniel Miessler covering the intersection of cybersecurity, AI safety, and national security, including analysis of LLM attacks, agent threats, and the OWASP Top 10 for LLM Applications that he helped author.",
    url: "https://newsletter.danielmiessler.com/",
    tags: ["ai security", "cybersecurity", "weekly digest", "owasp", "analysis"]
  },
  {
    title: "Trail of Bits Blog",
    type: "newsletter",
    org: "Trail of Bits",
    year: 2012,
    authors: ["Trail of Bits"],
    desc: "Security research blog from Trail of Bits covering AI/ML security audits, model supply-chain risks, and adversarial attacks on LLM agents. Publishes original research and tooling for AI red-teamers.",
    url: "https://blog.trailofbits.com/",
    tags: ["ai security", "ml security", "audit", "supply chain", "vendor blog"]
  },
  {
    title: "Google DeepMind Blog",
    type: "newsletter",
    org: "Google DeepMind",
    year: 2010,
    authors: ["Google DeepMind"],
    desc: "Google DeepMind's official blog publishing safety and security research including agentic-AI red-teaming, multi-agent evaluations, frontier safety frameworks, and responsible deployment findings for Gemini models.",
    url: "https://deepmind.google/discover/blog/",
    tags: ["ai safety", "frontier models", "agentic security", "research blog"]
  },
  {
    title: "LessWrong — AI Risk",
    type: "blog",
    org: "LessWrong",
    year: 2009,
    desc: "Curated tag page on LessWrong aggregating AI risk essays, including seminal work on instrumental convergence, the orthogonality thesis, and modern frontier-model risk analysis. Updated continuously by LessWrong editors with both classical and contemporary posts.",
    url: "https://www.lesswrong.com/tag/ai-risk",
    tags: ["ai risk", "ai alignment", "ai safety", "community blog"]
  },
  {
    title: "Microsoft Security Response Center Blog",
    type: "blog",
    org: "Microsoft Security Response Center",
    year: 2005,
    desc: "Blog from Microsoft's Security Response Center (MSRC) covering vulnerability response, CVE patches, and AI-related security incidents affecting Microsoft products and Azure AI services. Publishes Patch Tuesday summaries and AI-incident postmortems.",
    url: "https://www.microsoft.com/en-us/msrc/blog",
    tags: ["vulnerability response", "cve", "ai incidents", "microsoft"]
  },
  {
    title: "Microsoft Security Blog",
    type: "blog",
    org: "Microsoft",
    year: 2003,
    desc: "Official Microsoft Security blog covering enterprise security research, threat intelligence, AI red-teaming, and the Microsoft AI Red Team's (AIRTS) findings on Copilot, Azure OpenAI, and Security Copilot. Publishes monthly threat-intelligence reports.",
    url: "https://www.microsoft.com/en-us/security/blog/",
    tags: ["ai red teaming", "threat intelligence", "microsoft", "vendor blog"]
  },
  {
    title: "Simon Willison's Weblog",
    type: "newsletter",
    org: "Simon Willison",
    year: 2002,
    authors: ["Simon Willison"],
    desc: "Long-running personal weblog whose recent output focuses heavily on LLM security, prompt injection, and tool-use vulnerabilities, with weekly link digests and detailed write-ups of jailbreaks and agent attacks.",
    url: "https://simonwillison.net/",
    tags: ["prompt injection", "llm security", "agent security", "weekly digest", "research blog"]
  },
  {
    title: "Daniel Miessler Blog",
    type: "blog",
    org: "Daniel Miessler",
    year: 2001,
    authors: ["Daniel Miessler"],
    desc: "Long-running personal blog by Daniel Miessler covering cybersecurity, AI/LLM security, prompt injection, and the OWASP Top 10 for LLM Applications. Author of the 'Unsupervised Learning' newsletter and noted security practitioner.",
    url: "https://danielmiessler.com/blog",
    tags: ["ai security", "prompt injection", "owasp", "llm security", "personal blog"]
  },
  {
    title: "Gary McGraw — Writings",
    type: "blog",
    org: "Gary McGraw",
    year: 1997,
    authors: ["Gary McGraw"],
    desc: "Personal site and writings of Gary McGraw, software-security author and co-founder of the Berryville Institute of Machine Learning (BIML). Includes essays on AI risk assessment, the BIML AI Risk Landscape reports, and the 'Securing AI' series.",
    url: "https://www.garymcgraw.com/",
    tags: ["ai security", "software security", "risk assessment", "biml"]
  },

];
