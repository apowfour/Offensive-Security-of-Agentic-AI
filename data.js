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

  /* ---------- RESEARCH PAPERS ----------
     Auto-synced from the PAPERS folders. Topic = subfolder; OSAA-offensive only.
     Defensive / foundational / off-topic papers are excluded. ---------- */
  {
    title: "Personal LLM Agents Capability Efficiency Security Survey",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Personal%20LLM%20Agents%20Capability%20Efficiency%20Security%20Survey"
  },
  {
    title: "Unique Security Privacy Threats LLMs Comprehensive Survey",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Unique%20Security%20Privacy%20Threats%20LLMs%20Comprehensive%20Survey"
  },
  {
    title: "Agentic AI Security Threats Defenses Evaluation Open Challenges",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "A benchmark for evaluating agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Agentic%20AI%20Security%20Threats%20Defenses%20Evaluation%20Open%20Challenges"
  },
  {
    title: "Comprehensive Survey LLM Agent Full Stack Safety",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Comprehensive%20Survey%20LLM%20Agent%20Full%20Stack%20Safety"
  },
  {
    title: "Secure MultiLLM Agentic AI ZeroTrust Survey",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Secure%20MultiLLM%20Agentic%20AI%20ZeroTrust%20Survey"
  },
  {
    title: "Survey Agentic Security Applications Threats Defenses",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Survey%20Agentic%20Security%20Applications%20Threats%20Defenses"
  },
  {
    title: "Survey Attacks Large Language Models",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Survey%20Attacks%20Large%20Language%20Models"
  },
  {
    title: "Survey Autonomy Induced Security Risks Large Model Agents",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Survey%20Autonomy%20Induced%20Security%20Risks%20Large%20Model%20Agents"
  },
  {
    title: "From Secure Agentic AI to Secure Agentic Web",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Surveys threats and directions as agents interconnect into an agentic web. Extends the OSAA attack surface to web-scale interactions.",
    url: "https://scholar.google.com/scholar?q=From%20Secure%20Agentic%20AI%20to%20Secure%20Agentic%20Web"
  },
  {
    title: "SoK Attack Surface Agentic AI Tools Autonomy",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Systematizes how tools and autonomy expand the agent attack surface. The clearest SoK of the OSAA attack surface to date.",
    url: "https://scholar.google.com/scholar?q=SoK%20Attack%20Surface%20Agentic%20AI%20Tools%20Autonomy"
  },
  {
    title: "Survey Agentic AI Cybersecurity Challenges Opportunities",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Survey%20Agentic%20AI%20Cybersecurity%20Challenges%20Opportunities"
  },
  {
    title: "Navigating Risks Security Privacy Ethics LLM Agents",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "A security analysis of agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Navigating%20Risks%20Security%20Privacy%20Ethics%20LLM%20Agents"
  },
  {
    title: "Emerged Security Privacy LLM Agent Survey Case Studies",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Emerged%20Security%20Privacy%20LLM%20Agent%20Survey%20Case%20Studies"
  },
  {
    title: "Attack Defense Landscape Agentic AI Comprehensive Survey",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Attack%20Defense%20Landscape%20Agentic%20AI%20Comprehensive%20Survey"
  },
  {
    title: "Large Model Based Agents Cooperation Paradigms Security Privacy Future Trends",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "A security analysis of agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Large%20Model%20Based%20Agents%20Cooperation%20Paradigms%20Security%20Privacy%20Future%20Trends"
  },
  {
    title: "Evaluation Benchmarking LLM Agents Survey",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Evaluation%20Benchmarking%20LLM%20Agents%20Survey"
  },
  {
    title: "TRiSM Agentic AI Trust Risk Security Management LLM MultiAgent Systems",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "A security analysis of agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=TRiSM%20Agentic%20AI%20Trust%20Risk%20Security%20Management%20LLM%20MultiAgent%20Systems"
  },
  {
    title: "Forewarned Forearmed Survey LLM Agents Autonomous Cyberattacks",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Forewarned%20Forearmed%20Survey%20LLM%20Agents%20Autonomous%20Cyberattacks"
  },
  {
    title: "Survey Trustworthy LLM Agents Threats Countermeasures",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://scholar.google.com/scholar?q=Survey%20Trustworthy%20LLM%20Agents%20Threats%20Countermeasures"
  },
  {
    title: "Agent SafetyBench Evaluating Safety LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Agent%20SafetyBench%20Evaluating%20Safety%20LLM%20Agents"
  },
  {
    title: "InjecAgent Benchmark Indirect Prompt Injection Tool Integrated",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for indirect prompt injection against tool-integrated agents. A canonical OSAA benchmark for the highest-impact agent attack.",
    url: "https://scholar.google.com/scholar?q=InjecAgent%20Benchmark%20Indirect%20Prompt%20Injection%20Tool%20Integrated"
  },
  {
    title: "JAWS BENCH Security Assessment AI Code Agents Jailbreaking",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=JAWS%20BENCH%20Security%20Assessment%20AI%20Code%20Agents%20Jailbreaking"
  },
  {
    title: "JailbreakBench Open Robustness Benchmark Jailbreaking LLMs",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=JailbreakBench%20Open%20Robustness%20Benchmark%20Jailbreaking%20LLMs"
  },
  {
    title: "ST WebAgentBench Benchmark Safety Trustworthiness Web Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=ST%20WebAgentBench%20Benchmark%20Safety%20Trustworthiness%20Web%20Agents"
  },
  {
    title: "SafeAgentBench Benchmark Safe Task Planning Embodied LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=SafeAgentBench%20Benchmark%20Safe%20Task%20Planning%20Embodied%20LLM%20Agents"
  },
  {
    title: "ToolSword Safety Issues LLMs Tool Learning",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A security analysis of agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=ToolSword%20Safety%20Issues%20LLMs%20Tool%20Learning"
  },
  {
    title: "OS HARM Benchmark Safety Computer Use Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=OS%20HARM%20Benchmark%20Safety%20Computer%20Use%20Agents"
  },
  {
    title: "RAS Eval Comprehensive Benchmark LLM Agent Security RealWorld",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=RAS%20Eval%20Comprehensive%20Benchmark%20LLM%20Agent%20Security%20RealWorld"
  },
  {
    title: "AgentNoiseBench Robustness ToolUsing LLM Agents Noisy Conditions",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=AgentNoiseBench%20Robustness%20ToolUsing%20LLM%20Agents%20Noisy%20Conditions"
  },
  {
    title: "Benchmarking the Robustness of Agentic Systems to Adversarially Induced",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Benchmarking%20the%20Robustness%20of%20Agentic%20Systems%20to%20Adversarially%20Induced"
  },
  {
    title: "AgentHarm Benchmark Measuring Harmfulness LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark measuring how harmful agent behaviors can be elicited (AgentHarm). Quantifies attacker-achievable harm for OSAA.",
    url: "https://scholar.google.com/scholar?q=AgentHarm%20Benchmark%20Measuring%20Harmfulness%20LLM%20Agents"
  },
  {
    title: "Breaking Agent Backbones Evaluating the Security of Backbone LLMs",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Breaking%20Agent%20Backbones%20Evaluating%20the%20Security%20of%20Backbone%20LLMs"
  },
  {
    title: "CTRL ALT DECEIT Sabotage Evaluations for Automated AI R",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=CTRL%20ALT%20DECEIT%20Sabotage%20Evaluations%20for%20Automated%20AI%20R"
  },
  {
    title: "Creative Adversarial Testing CAT A Novel Framework for Evaluating",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Creative%20Adversarial%20Testing%20CAT%20A%20Novel%20Framework%20for%20Evaluating"
  },
  {
    title: "Cybersecurity AI Benchmark CAIBench A Meta Benchmark for Evaluating",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Cybersecurity%20AI%20Benchmark%20CAIBench%20A%20Meta%20Benchmark%20for%20Evaluating"
  },
  {
    title: "AgentDojo Evaluate Prompt Injection",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A dynamic environment to evaluate prompt-injection attacks and defenses on tool-using agents. A leading OSAA attack/defense harness and benchmark.",
    url: "https://scholar.google.com/scholar?q=AgentDojo%20Evaluate%20Prompt%20Injection"
  },
  {
    title: "Evaluating Regulating Agentic AI Study of Benchmarks",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Evaluating%20Regulating%20Agentic%20AI%20Study%20of%20Benchmarks"
  },
  {
    title: "FinVault Benchmarking Financial Agent Safety in Execution Grounded Environments",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=FinVault%20Benchmarking%20Financial%20Agent%20Safety%20in%20Execution%20Grounded%20Environments"
  },
  {
    title: "Mind the Gap Evaluating Model and Agentic Level Vulnerabilities",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Mind%20the%20Gap%20Evaluating%20Model%20and%20Agentic%20Level%20Vulnerabilities"
  },
  {
    title: "OpenAgentSafety A Comprehensive Framework for Evaluating Real World AI",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=OpenAgentSafety%20A%20Comprehensive%20Framework%20for%20Evaluating%20Real%20World%20AI"
  },
  {
    title: "PEAR Planner Executor Agent Robustness Benchmark",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=PEAR%20Planner%20Executor%20Agent%20Robustness%20Benchmark"
  },
  {
    title: "PropensityBench Evaluating Latent Safety Risks in Large Language Models",
    type: "paper",
    topic: "Benchmarks",
    year: null,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=PropensityBench%20Evaluating%20Latent%20Safety%20Risks%20in%20Large%20Language%20Models"
  },
  {
    title: "RedCode Risky Code Execution and Generation Benchmark for Code",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=RedCode%20Risky%20Code%20Execution%20and%20Generation%20Benchmark%20for%20Code"
  },
  {
    title: "Security Analysis of Agentic AI Communication Protocols A Comparative",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A security analysis of agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Security%20Analysis%20of%20Agentic%20AI%20Communication%20Protocols%20A%20Comparative"
  },
  {
    title: "Towards Effective Offensive Security LLM Agents Hyperparameter Tuning LLM",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A security analysis of agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://scholar.google.com/scholar?q=Towards%20Effective%20Offensive%20Security%20LLM%20Agents%20Hyperparameter%20Tuning%20LLM"
  },
  {
    title: "ASB Agent Security Bench",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Formalizes agent attack surfaces such as injection and tool misuse (Agent Security Bench). Enables reproducible OSAA evaluation across attack types.",
    url: "https://scholar.google.com/scholar?q=ASB%20Agent%20Security%20Bench"
  },
  {
    title: "MemoryGraft Persistent Compromise LLM Agents Poisoned Experience",
    type: "paper",
    topic: "Prompt Injection",
    year: 2024,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=MemoryGraft%20Persistent%20Compromise%20LLM%20Agents%20Poisoned%20Experience"
  },
  {
    title: "Context Manipulation Web Agents Susceptible Corrupted Memory",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Context%20Manipulation%20Web%20Agents%20Susceptible%20Corrupted%20Memory"
  },
  {
    title: "Les Dissonances CrossTool Harvesting Pool of Tools LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "A security analysis of prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Les%20Dissonances%20CrossTool%20Harvesting%20Pool%20of%20Tools%20LLM%20Agents"
  },
  {
    title: "Memory Poisoning Attack Defense Memory Based LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Memory%20Poisoning%20Attack%20Defense%20Memory%20Based%20LLM%20Agents"
  },
  {
    title: "Simple Prompt Injection Leak Personal Data LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Simple%20Prompt%20Injection%20Leak%20Personal%20Data%20LLM%20Agents"
  },
  {
    title: "Automating Agent Hijacking Structural Template Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2026,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Automating%20Agent%20Hijacking%20Structural%20Template%20Injection"
  },
  {
    title: "MCP Threat Modeling Tool Poisoning Prompt Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2026,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=MCP%20Threat%20Modeling%20Tool%20Poisoning%20Prompt%20Injection"
  },
  {
    title: "Not What Signed Up For Indirect Prompt Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2023,
    desc: "Seminal paper introducing indirect prompt injection of LLM-integrated applications. Foundational OSAA attack class for tool-using agents.",
    url: "https://scholar.google.com/scholar?q=Not%20What%20Signed%20Up%20For%20Indirect%20Prompt%20Injection"
  },
  {
    title: "On the Security of Tool Invocation Prompts for LLM",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "A security analysis of prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://scholar.google.com/scholar?q=On%20the%20Security%20of%20Tool%20Invocation%20Prompts%20for%20LLM"
  },
  {
    title: "Jailbreaking Leading Safety Aligned LLMs Simple Adaptive Attacks",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=Jailbreaking%20Leading%20Safety%20Aligned%20LLMs%20Simple%20Adaptive%20Attacks"
  },
  {
    title: "BadThink Triggered Overthinking Attacks CoT Reasoning LLMs",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=BadThink%20Triggered%20Overthinking%20Attacks%20CoT%20Reasoning%20LLMs"
  },
  {
    title: "Jailbreaking to Jailbreak Autonomous Agent Red Teaming",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An autonomous offensive system in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=Jailbreaking%20to%20Jailbreak%20Autonomous%20Agent%20Red%20Teaming"
  },
  {
    title: "ShadowCoT Cognitive Hijacking Stealthy Reasoning Backdoors",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=ShadowCoT%20Cognitive%20Hijacking%20Stealthy%20Reasoning%20Backdoors"
  },
  {
    title: "Reasoning Hijacking Constraint Tightening RedTeaming LLM Agents",
    type: "paper",
    topic: "Jailbreaking",
    year: 2026,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=Reasoning%20Hijacking%20Constraint%20Tightening%20RedTeaming%20LLM%20Agents"
  },
  {
    title: "AmpleGCG Learning a Universal and Transferable Generative Model of",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=AmpleGCG%20Learning%20a%20Universal%20and%20Transferable%20Generative%20Model%20of"
  },
  {
    title: "AutoDAN Turbo A Lifelong Agent for Strategy Self Exploration",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=AutoDAN%20Turbo%20A%20Lifelong%20Agent%20for%20Strategy%20Self%20Exploration"
  },
  {
    title: "PAIR Jailbreaking Black Box LLMs Few Queries",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "A query-efficient automated black-box jailbreak (PAIR). An efficient OSAA jailbreak primitive.",
    url: "https://scholar.google.com/scholar?q=PAIR%20Jailbreaking%20Black%20Box%20LLMs%20Few%20Queries"
  },
  {
    title: "How Johnny Can Persuade LLMs to Jailbreak Them Rethinking",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=How%20Johnny%20Can%20Persuade%20LLMs%20to%20Jailbreak%20Them%20Rethinking"
  },
  {
    title: "Jailbreak Zero A Path to Pareto Optimal Red Teaming",
    type: "paper",
    topic: "Jailbreaking",
    year: 2026,
    desc: "An autonomous offensive system in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=Jailbreak%20Zero%20A%20Path%20to%20Pareto%20Optimal%20Red%20Teaming"
  },
  {
    title: "LLM Defenses Are Not Robust to Multi Turn Human",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=LLM%20Defenses%20Are%20Not%20Robust%20to%20Multi%20Turn%20Human"
  },
  {
    title: "AutoDAN Generating Stealthy Jailbreak Prompts",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Automatically generates stealthy, readable jailbreak prompts (AutoDAN). Automated OSAA prompt-attack generation.",
    url: "https://scholar.google.com/scholar?q=AutoDAN%20Generating%20Stealthy%20Jailbreak%20Prompts"
  },
  {
    title: "STAC When Innocent Tools Form Dangerous Chains to Jailbreak",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=STAC%20When%20Innocent%20Tools%20Form%20Dangerous%20Chains%20to%20Jailbreak"
  },
  {
    title: "TextBugger Generating Adversarial Text Against Real world Applications",
    type: "paper",
    topic: "Jailbreaking",
    year: 2018,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://scholar.google.com/scholar?q=TextBugger%20Generating%20Adversarial%20Text%20Against%20Real%20world%20Applications"
  },
  {
    title: "Tree of Attacks Jailbreaking Black Box LLMs Automatically",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "Automatically jailbreaks black-box LLMs via a tree search of attacks (TAP). A strong automated OSAA jailbreak method.",
    url: "https://scholar.google.com/scholar?q=Tree%20of%20Attacks%20Jailbreaking%20Black%20Box%20LLMs%20Automatically"
  },
  {
    title: "Universal Transferable Adversarial Attacks GCG",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "Introduces transferable adversarial suffixes (GCG) that jailbreak aligned LLMs. A foundational transferable attack underpinning OSAA.",
    url: "https://scholar.google.com/scholar?q=Universal%20Transferable%20Adversarial%20Attacks%20GCG"
  },
  {
    title: "AgentPoison RedTeaming LLM Agents Poisoning Memory",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Red-teams agents by poisoning their memory or knowledge base (AgentPoison). A landmark OSAA memory-poisoning attack.",
    url: "https://scholar.google.com/scholar?q=AgentPoison%20RedTeaming%20LLM%20Agents%20Poisoning%20Memory"
  },
  {
    title: "BadAgent Inserting Activating Backdoor Attacks LLM Agents",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Inserts and triggers backdoors in LLM agents (BadAgent). Demonstrates agent-level backdoors for OSAA.",
    url: "https://scholar.google.com/scholar?q=BadAgent%20Inserting%20Activating%20Backdoor%20Attacks%20LLM%20Agents"
  },
  {
    title: "Survey Backdoor Attacks Defenses Large Language Models",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Surveys the agent backdoors and poisoning literature. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Survey%20Backdoor%20Attacks%20Defenses%20Large%20Language%20Models"
  },
  {
    title: "Watch Out Agents Backdoor Threats LLM Based Agents",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "An attack/vulnerability study in agent backdoors and poisoning. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Watch%20Out%20Agents%20Backdoor%20Threats%20LLM%20Based%20Agents"
  },
  {
    title: "SupplyChain Poisoning LLM Coding Agent Skill Ecosystems",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2026,
    desc: "An attack/vulnerability study in agent backdoors and poisoning. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://scholar.google.com/scholar?q=SupplyChain%20Poisoning%20LLM%20Coding%20Agent%20Skill%20Ecosystems"
  },
  {
    title: "Sleeper Agents Training Deceptive LLMs Safety Training",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Shows backdoored 'sleeper' models survive safety training. Demonstrates a persistent deceptive-agent threat for OSAA.",
    url: "https://scholar.google.com/scholar?q=Sleeper%20Agents%20Training%20Deceptive%20LLMs%20Safety%20Training"
  },
  {
    title: "Malice in Agentland Down the Rabbit Hole of Backdoors",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2025,
    desc: "An attack/vulnerability study in agent backdoors and poisoning. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://scholar.google.com/scholar?q=Malice%20in%20Agentland%20Down%20the%20Rabbit%20Hole%20of%20Backdoors"
  },
  {
    title: "Targeting Core Attack RAG Agents Direct LLM Manipulation",
    type: "paper",
    topic: "RAG Security",
    year: 2024,
    desc: "An attack/vulnerability study in retrieval-augmented agent attacks. It contributes to OSAA by exposing attacks on retrieval-augmented agents.",
    url: "https://scholar.google.com/scholar?q=Targeting%20Core%20Attack%20RAG%20Agents%20Direct%20LLM%20Manipulation"
  },
  {
    title: "Unveiling Privacy Risks LLM Agent Memory",
    type: "paper",
    topic: "RAG Security",
    year: 2025,
    desc: "A security analysis of retrieval-augmented agent attacks. It contributes to OSAA by exposing attacks on retrieval-augmented agents.",
    url: "https://scholar.google.com/scholar?q=Unveiling%20Privacy%20Risks%20LLM%20Agent%20Memory"
  },
  {
    title: "Securing RAG Taxonomy Attacks Defenses Future Directions",
    type: "paper",
    topic: "RAG Security",
    year: 2026,
    desc: "An attack/vulnerability study in retrieval-augmented agent attacks. It contributes to OSAA by exposing attacks on retrieval-augmented agents.",
    url: "https://scholar.google.com/scholar?q=Securing%20RAG%20Taxonomy%20Attacks%20Defenses%20Future%20Directions"
  },
  {
    title: "Extending OWASP MultiAgentic System Threat Modeling Guide",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=Extending%20OWASP%20MultiAgentic%20System%20Threat%20Modeling%20Guide"
  },
  {
    title: "MultiAgent Systems Execute Arbitrary Malicious Code",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=MultiAgent%20Systems%20Execute%20Arbitrary%20Malicious%20Code"
  },
  {
    title: "Open Challenges MultiAgent Security Secure Systems AI Agents",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=Open%20Challenges%20MultiAgent%20Security%20Secure%20Systems%20AI%20Agents"
  },
  {
    title: "Security Internet of Agents Attacks Countermeasures",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "An attack/vulnerability study in multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=Security%20Internet%20of%20Agents%20Attacks%20Countermeasures"
  },
  {
    title: "Exposing Weak Links in Multi Agent Systems under Adversarial",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=Exposing%20Weak%20Links%20in%20Multi%20Agent%20Systems%20under%20Adversarial"
  },
  {
    title: "MultiFuzz A Dense Retrieval based Multi Agent System for",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=MultiFuzz%20A%20Dense%20Retrieval%20based%20Multi%20Agent%20System%20for"
  },
  {
    title: "Multi Agent Security Tax Trading Off Security and Collaboration",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=Multi%20Agent%20Security%20Tax%20Trading%20Off%20Security%20and%20Collaboration"
  },
  {
    title: "TAMAS Benchmarking Adversarial Risks in Multi Agent LLM Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A benchmark for evaluating multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=TAMAS%20Benchmarking%20Adversarial%20Risks%20in%20Multi%20Agent%20LLM%20Systems"
  },
  {
    title: "Towards Unifying Quantitative Security Benchmarking for Multi Agent Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A benchmark for evaluating multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://scholar.google.com/scholar?q=Towards%20Unifying%20Quantitative%20Security%20Benchmarking%20for%20Multi%20Agent%20Systems"
  },
  {
    title: "PentestAgent LLM Agents Automated Penetration Testing",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=PentestAgent%20LLM%20Agents%20Automated%20Penetration%20Testing"
  },
  {
    title: "AutoPentester LLM Agent Framework Automated Pentesting",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=AutoPentester%20LLM%20Agent%20Framework%20Automated%20Pentesting"
  },
  {
    title: "Cybersecurity AI OT AI Top10 Ranker Dragos OT CTF",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A security analysis of autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=Cybersecurity%20AI%20OT%20AI%20Top10%20Ranker%20Dragos%20OT%20CTF"
  },
  {
    title: "Dynamic Risk Assessments Offensive Cybersecurity Agents",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A security analysis of autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=Dynamic%20Risk%20Assessments%20Offensive%20Cybersecurity%20Agents"
  },
  {
    title: "xOffense AI Driven Autonomous Penetration Testing MultiAgent",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=xOffense%20AI%20Driven%20Autonomous%20Penetration%20Testing%20MultiAgent"
  },
  {
    title: "To Defend Against Cyber Attacks Teach AI Agents to Hack",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2026,
    desc: "An attack/vulnerability study in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=To%20Defend%20Against%20Cyber%20Attacks%20Teach%20AI%20Agents%20to%20Hack"
  },
  {
    title: "AutoPenBench A Vulnerability Testing Benchmark for Generative Agents",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "A benchmark for evaluating autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=AutoPenBench%20A%20Vulnerability%20Testing%20Benchmark%20for%20Generative%20Agents"
  },
  {
    title: "BreachSeek A Multi Agent Automated Penetration Tester",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=BreachSeek%20A%20Multi%20Agent%20Automated%20Penetration%20Tester"
  },
  {
    title: "CAI An Open Bug Bounty Ready Cybersecurity AI",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A security analysis of autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=CAI%20An%20Open%20Bug%20Bounty%20Ready%20Cybersecurity%20AI"
  },
  {
    title: "CIPHER Cybersecurity Intelligent Penetration testing Helper for Ethical Researcher",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=CIPHER%20Cybersecurity%20Intelligent%20Penetration%20testing%20Helper%20for%20Ethical%20Researcher"
  },
  {
    title: "RedTeamLLM Agentic AI Framework Offensive Security",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An agentic framework orchestrating offensive-security tasks (RedTeamLLM). A direct OSAA red-team automation framework.",
    url: "https://scholar.google.com/scholar?q=RedTeamLLM%20Agentic%20AI%20Framework%20Offensive%20Security"
  },
  {
    title: "Collaborative penetration testing suite for emerging generative AI algorithms",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: null,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=Collaborative%20penetration%20testing%20suite%20for%20emerging%20generative%20AI%20algorithms"
  },
  {
    title: "Comparing AI Agents to Cybersecurity Professionals in Real World",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A security analysis of autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=Comparing%20AI%20Agents%20to%20Cybersecurity%20Professionals%20in%20Real%20World"
  },
  {
    title: "PentestGPT LLM Empowered Automatic Penetration Testing",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An influential LLM-driven automated penetration-testing tool (PentestGPT). A foundational OSAA offensive agent.",
    url: "https://scholar.google.com/scholar?q=PentestGPT%20LLM%20Empowered%20Automatic%20Penetration%20Testing"
  },
  {
    title: "HackSynth LLM Agent and Evaluation Framework for Autonomous Penetration",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "A benchmark for evaluating autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=HackSynth%20LLM%20Agent%20and%20Evaluation%20Framework%20for%20Autonomous%20Penetration"
  },
  {
    title: "Multi agent penetration testing AI for the web",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=Multi%20agent%20penetration%20testing%20AI%20for%20the%20web"
  },
  {
    title: "Penetration Testing of Agentic AI A Comparative Security Analysis",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=Penetration%20Testing%20of%20Agentic%20AI%20A%20Comparative%20Security%20Analysis"
  },
  {
    title: "Shell or Nothing Real World Benchmarks and Memory Activated",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A benchmark for evaluating autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=Shell%20or%20Nothing%20Real%20World%20Benchmarks%20and%20Memory%20Activated"
  },
  {
    title: "VulnBot Autonomous Penetration Testing for A Multi Agent Collaborative",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://scholar.google.com/scholar?q=VulnBot%20Autonomous%20Penetration%20Testing%20for%20A%20Multi%20Agent%20Collaborative"
  },
  {
    title: "AgentAuditor Human Level Safety Security Evaluation LLM Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A benchmark for evaluating agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=AgentAuditor%20Human%20Level%20Safety%20Security%20Evaluation%20LLM%20Agents"
  },
  {
    title: "Hiding AI Traffic Abusing MCP LLM Powered Agentic RedTeaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Hiding%20AI%20Traffic%20Abusing%20MCP%20LLM%20Powered%20Agentic%20RedTeaming"
  },
  {
    title: "SIRAJ Diverse Efficient RedTeaming LLM Agents Distilled Reasoning",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=SIRAJ%20Diverse%20Efficient%20RedTeaming%20LLM%20Agents%20Distilled%20Reasoning"
  },
  {
    title: "PISmith RL Based RedTeaming Prompt Injection Defenses",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "An attack/vulnerability study in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=PISmith%20RL%20Based%20RedTeaming%20Prompt%20Injection%20Defenses"
  },
  {
    title: "RedTeaming Framework Evaluating Robustness AI Security Orchestration",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "A benchmark for evaluating agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=RedTeaming%20Framework%20Evaluating%20Robustness%20AI%20Security%20Orchestration"
  },
  {
    title: "AGENTVIGIL Automatic BlackBox RedTeaming Indirect Prompt Injection LLM Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2023,
    desc: "An attack/vulnerability study in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=AGENTVIGIL%20Automatic%20BlackBox%20RedTeaming%20Indirect%20Prompt%20Injection%20LLM%20Agents"
  },
  {
    title: "ALERT A Comprehensive Benchmark for Assessing Large Language Models",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "A benchmark for evaluating agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=ALERT%20A%20Comprehensive%20Benchmark%20for%20Assessing%20Large%20Language%20Models"
  },
  {
    title: "ARMs Adaptive Red Teaming Agent against Multimodal Models with",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=ARMs%20Adaptive%20Red%20Teaming%20Agent%20against%20Multimodal%20Models%20with"
  },
  {
    title: "ASTRA Autonomous Spatial Temporal Red teaming for AI Software",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=ASTRA%20Autonomous%20Spatial%20Temporal%20Red%20teaming%20for%20AI%20Software"
  },
  {
    title: "Against The Achilles Heel A Survey on Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Surveys the agent red teaming literature. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Against%20The%20Achilles%20Heel%20A%20Survey%20on%20Red%20Teaming"
  },
  {
    title: "AgentXploit End to End Red Teaming for AI Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=AgentXploit%20End%20to%20End%20Red%20Teaming%20for%20AI%20Agents"
  },
  {
    title: "AutoODD Agentic Audits via Bayesian Red Teaming in Black",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=AutoODD%20Agentic%20Audits%20via%20Bayesian%20Red%20Teaming%20in%20Black"
  },
  {
    title: "AutoRedTeamer Autonomous Red Teaming with Lifelong Attack Integration",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=AutoRedTeamer%20Autonomous%20Red%20Teaming%20with%20Lifelong%20Attack%20Integration"
  },
  {
    title: "Automated Red Teaming with GOAT the Generative Offensive Agent",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Automated%20Red%20Teaming%20with%20GOAT%20the%20Generative%20Offensive%20Agent"
  },
  {
    title: "BlueCodeAgent A Blue Teaming Agent Enabled by Automated Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=BlueCodeAgent%20A%20Blue%20Teaming%20Agent%20Enabled%20by%20Automated%20Red"
  },
  {
    title: "Genesis Evolving Attack Strategies for LLM Web Agent Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An attack/vulnerability study in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Genesis%20Evolving%20Attack%20Strategies%20for%20LLM%20Web%20Agent%20Red"
  },
  {
    title: "HarmBench A Standardized Evaluation Framework for Automated Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "A standardized evaluation framework for automated red teaming (HarmBench). Standardizes OSAA red-team measurement.",
    url: "https://scholar.google.com/scholar?q=HarmBench%20A%20Standardized%20Evaluation%20Framework%20for%20Automated%20Red%20Teaming"
  },
  {
    title: "Holistic Automated Red Teaming for Large Language Models through",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Holistic%20Automated%20Red%20Teaming%20for%20Large%20Language%20Models%20through"
  },
  {
    title: "Lessons From Red Teaming 100 Generative AI Products eBook",
    type: "paper",
    topic: "Red Teaming",
    year: null,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Lessons%20From%20Red%20Teaming%20100%20Generative%20AI%20Products%20eBook"
  },
  {
    title: "Mind the Gap Comparing Model vs Agentic Level Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Mind%20the%20Gap%20Comparing%20Model%20vs%20Agentic%20Level%20Red"
  },
  {
    title: "OpenAI's Approach to External Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=OpenAI%27s%20Approach%20to%20External%20Red%20Teaming"
  },
  {
    title: "OpenRT An Open Source Red Teaming Framework for Multimodal",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=OpenRT%20An%20Open%20Source%20Red%20Teaming%20Framework%20for%20Multimodal"
  },
  {
    title: "PyRIT A Framework for Security Risk Identification and Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Presents PyRIT, a framework for security-risk identification and red teaming of generative AI. A widely used OSAA red-teaming toolkit.",
    url: "https://scholar.google.com/scholar?q=PyRIT%20A%20Framework%20for%20Security%20Risk%20Identification%20and%20Red"
  },
  {
    title: "Red Teaming AI Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Red%20Teaming%20AI%20Red%20Teaming"
  },
  {
    title: "RedAgent Red Teaming Large Language Models with Context aware",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=RedAgent%20Red%20Teaming%20Large%20Language%20Models%20with%20Context%20aware"
  },
  {
    title: "RedBench A Universal Dataset for Comprehensive Red Teaming of",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "A benchmark for evaluating agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=RedBench%20A%20Universal%20Dataset%20for%20Comprehensive%20Red%20Teaming%20of"
  },
  {
    title: "RedCodeAgent Automatic Red teaming Agent against Diverse Code Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=RedCodeAgent%20Automatic%20Red%20teaming%20Agent%20against%20Diverse%20Code%20Agents"
  },
  {
    title: "RedTeamCUA Realistic Adversarial Testing of Computer Use Agents in",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=RedTeamCUA%20Realistic%20Adversarial%20Testing%20of%20Computer%20Use%20Agents%20in"
  },
  {
    title: "Red Teaming LLM MultiAgent Systems via Communication Attacks",
    type: "paper",
    topic: "Red Teaming",
    year: 2023,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=Red%20Teaming%20LLM%20MultiAgent%20Systems%20via%20Communication%20Attacks"
  },
  {
    title: "SafeSearch Automated Red Teaming for the Safety of LLM",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=SafeSearch%20Automated%20Red%20Teaming%20for%20the%20Safety%20of%20LLM"
  },
  {
    title: "The Automation Advantage in AI Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://scholar.google.com/scholar?q=The%20Automation%20Advantage%20in%20AI%20Red%20Teaming"
  },
  {
    title: "A Framework for Evaluating Emerging Cyberattack Capabilities of AI",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=A%20Framework%20for%20Evaluating%20Emerging%20Cyberattack%20Capabilities%20of%20AI"
  },
  {
    title: "CVE bench a benchmark for AI agents ability to",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=CVE%20bench%20a%20benchmark%20for%20AI%20agents%20ability%20to"
  },
  {
    title: "Catastrophic Cyber Capabilities Benchmark 3CB Robustly Evaluating LLM Agent",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=Catastrophic%20Cyber%20Capabilities%20Benchmark%203CB%20Robustly%20Evaluating%20LLM%20Agent"
  },
  {
    title: "Cybench A Framework for Evaluating Cybersecurity Capabilities and Risk",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=Cybench%20A%20Framework%20for%20Evaluating%20Cybersecurity%20Capabilities%20and%20Risk"
  },
  {
    title: "CyberSecurity AI Evaluating agentic cybersecurity in attack defense CTFs",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=CyberSecurity%20AI%20Evaluating%20agentic%20cybersecurity%20in%20attack%20defense%20CTFs"
  },
  {
    title: "LLM Agents Autonomously Hack Websites",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "Demonstrates LLM agents autonomously exploiting real websites. A landmark proof of autonomous OSAA capability.",
    url: "https://scholar.google.com/scholar?q=LLM%20Agents%20Autonomously%20Hack%20Websites"
  },
  {
    title: "Teams LLM Agents Exploit ZeroDay Vulnerabilities",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "Shows teams of agents exploiting zero-day vulnerabilities. Escalates OSAA to coordinated zero-day exploitation.",
    url: "https://scholar.google.com/scholar?q=Teams%20LLM%20Agents%20Exploit%20ZeroDay%20Vulnerabilities"
  },
  {
    title: "LLM Agents can Autonomously Exploit One day Vulnerabilities",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "An autonomous offensive system in autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=LLM%20Agents%20can%20Autonomously%20Exploit%20One%20day%20Vulnerabilities"
  },
  {
    title: "OCCULT Evaluating Large Language Models for Offensive Cyber Operation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=OCCULT%20Evaluating%20Large%20Language%20Models%20for%20Offensive%20Cyber%20Operation"
  },
  {
    title: "PACEbench A Framework for Evaluating Practical AI Cyber Exploitation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=PACEbench%20A%20Framework%20for%20Evaluating%20Practical%20AI%20Cyber%20Exploitation"
  },
  {
    title: "Pandora A Cyber Range Environment for the Safe Testing",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: null,
    desc: "A security analysis of autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=Pandora%20A%20Cyber%20Range%20Environment%20for%20the%20Safe%20Testing"
  },
  {
    title: "Purple Llama CyberSecEval A Secure Coding Benchmark for Language",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2023,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://scholar.google.com/scholar?q=Purple%20Llama%20CyberSecEval%20A%20Secure%20Coding%20Benchmark%20for%20Language"
  },
  {
    title: "LLM Agent Leak Data Exfiltration Backdoored Tool Use",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "An attack/vulnerability study in agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://scholar.google.com/scholar?q=LLM%20Agent%20Leak%20Data%20Exfiltration%20Backdoored%20Tool%20Use"
  },
  {
    title: "Observable Channels Privacy Leakage LLM Agent Pipelines",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "An attack/vulnerability study in agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://scholar.google.com/scholar?q=Observable%20Channels%20Privacy%20Leakage%20LLM%20Agent%20Pipelines"
  },
  {
    title: "AgentDAM Privacy Leakage Evaluation for Autonomous Web Agents",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2025,
    desc: "A benchmark for evaluating agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://scholar.google.com/scholar?q=AgentDAM%20Privacy%20Leakage%20Evaluation%20for%20Autonomous%20Web%20Agents"
  },
  {
    title: "Automating Prompt Leakage Attacks on Large Language Models Using",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2025,
    desc: "An attack/vulnerability study in agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://scholar.google.com/scholar?q=Automating%20Prompt%20Leakage%20Attacks%20on%20Large%20Language%20Models%20Using"
  },
  {
    title: "Agentic AI as Cybersecurity Attack Surface",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "An attack/vulnerability study in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=Agentic%20AI%20as%20Cybersecurity%20Attack%20Surface"
  },
  {
    title: "MCP Threat Modeling Vulnerabilities Tool Poisoning Prompt Injection",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "An attack/vulnerability study in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=MCP%20Threat%20Modeling%20Vulnerabilities%20Tool%20Poisoning%20Prompt%20Injection"
  },
  {
    title: "SoK Security Autonomous LLM Agents Agentic Commerce",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Surveys the agent protocol (e.g. MCP) security literature. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=SoK%20Security%20Autonomous%20LLM%20Agents%20Agentic%20Commerce"
  },
  {
    title: "Towards Secure Agent Skills Architecture Threat Taxonomy Security",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "A security analysis of agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=Towards%20Secure%20Agent%20Skills%20Architecture%20Threat%20Taxonomy%20Security"
  },
  {
    title: "Automatic Red Teaming LLM based Agents with Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "An autonomous offensive system in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=Automatic%20Red%20Teaming%20LLM%20based%20Agents%20with%20Model%20Context"
  },
  {
    title: "Breaking the Protocol Security Analysis of the Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "An attack/vulnerability study in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=Breaking%20the%20Protocol%20Security%20Analysis%20of%20the%20Model%20Context"
  },
  {
    title: "MCPSecBench A Systematic Security Benchmark and Playground for Testing",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A benchmark for evaluating agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=MCPSecBench%20A%20Systematic%20Security%20Benchmark%20and%20Playground%20for%20Testing"
  },
  {
    title: "MCPTox A Benchmark for Tool Poisoning Attack on Real",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A benchmark for evaluating agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=MCPTox%20A%20Benchmark%20for%20Tool%20Poisoning%20Attack%20on%20Real"
  },
  {
    title: "MCP Security Bench MSB Benchmarking Attacks Against Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A benchmark for evaluating agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=MCP%20Security%20Bench%20MSB%20Benchmarking%20Attacks%20Against%20Model%20Context"
  },
  {
    title: "Systematic Analysis of MCP Security",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A security analysis of agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://scholar.google.com/scholar?q=Systematic%20Analysis%20of%20MCP%20Security"
  },
  {
    title: "Towards Robust Secure Embodied AI Survey Vulnerabilities Attacks",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2025,
    desc: "Surveys the embodied and robotic agent security literature. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://scholar.google.com/scholar?q=Towards%20Robust%20Secure%20Embodied%20AI%20Survey%20Vulnerabilities%20Attacks"
  },
  {
    title: "From Prompt to Physical Action Backdoor Attacks Embodied Agents",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "An attack/vulnerability study in embodied and robotic agent security. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://scholar.google.com/scholar?q=From%20Prompt%20to%20Physical%20Action%20Backdoor%20Attacks%20Embodied%20Agents"
  },
  {
    title: "What Breaks Embodied AI Security LLM Vulnerabilities CPS Flaws",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "An attack/vulnerability study in embodied and robotic agent security. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://scholar.google.com/scholar?q=What%20Breaks%20Embodied%20AI%20Security%20LLM%20Vulnerabilities%20CPS%20Flaws"
  },
  {
    title: "ANNIE Be Careful of Your Robots",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2025,
    desc: "A security analysis of embodied and robotic agent security. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://scholar.google.com/scholar?q=ANNIE%20Be%20Careful%20of%20Your%20Robots"
  },
  {
    title: "ASTRIDE A Security Threat Modeling Platform for Agentic AI",
    type: "paper",
    topic: "Threat Modeling",
    year: 2025,
    desc: "A security analysis of agent threat modeling and risk assessment. It contributes to OSAA by structuring threat models for offensive assessment.",
    url: "https://scholar.google.com/scholar?q=ASTRIDE%20A%20Security%20Threat%20Modeling%20Platform%20for%20Agentic%20AI"
  },
  {
    title: "CIA TA Risk Assessment for AI Reasoning Vulnerabilities",
    type: "paper",
    topic: "Threat Modeling",
    year: 2025,
    desc: "An attack/vulnerability study in agent threat modeling and risk assessment. It contributes to OSAA by structuring threat models for offensive assessment.",
    url: "https://scholar.google.com/scholar?q=CIA%20TA%20Risk%20Assessment%20for%20AI%20Reasoning%20Vulnerabilities"
  },
  {
    title: "Securing Agentic AI Threat Modeling and Risk Analysis for",
    type: "paper",
    topic: "Threat Modeling",
    year: 2025,
    desc: "A security analysis of agent threat modeling and risk assessment. It contributes to OSAA by structuring threat models for offensive assessment.",
    url: "https://scholar.google.com/scholar?q=Securing%20Agentic%20AI%20Threat%20Modeling%20and%20Risk%20Analysis%20for"
  },
  {
    title: "Agent Fence Mapping Security Vulnerabilities Deep Research Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2026,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://scholar.google.com/scholar?q=Agent%20Fence%20Mapping%20Security%20Vulnerabilities%20Deep%20Research%20Agents"
  },
  {
    title: "Atomicity Agents TOCTOU Vulnerabilities Browser Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2026,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://scholar.google.com/scholar?q=Atomicity%20Agents%20TOCTOU%20Vulnerabilities%20Browser%20Use%20Agents"
  },
  {
    title: "A Systematization of Security Vulnerabilities in Computer Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://scholar.google.com/scholar?q=A%20Systematization%20of%20Security%20Vulnerabilities%20in%20Computer%20Use%20Agents"
  },
  {
    title: "HackWorld Evaluating Computer Use Agents on Exploiting Web Application",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "A benchmark for evaluating computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://scholar.google.com/scholar?q=HackWorld%20Evaluating%20Computer%20Use%20Agents%20on%20Exploiting%20Web%20Application"
  },
  {
    title: "SecureWebArena A Holistic Security Evaluation Benchmark for LVLM based",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "A benchmark for evaluating computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://scholar.google.com/scholar?q=SecureWebArena%20A%20Holistic%20Security%20Evaluation%20Benchmark%20for%20LVLM%20based"
  },
  {
    title: "WASP Benchmarking Web Agent Security Against Prompt Injection Attacks",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "A benchmark for evaluating computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://scholar.google.com/scholar?q=WASP%20Benchmarking%20Web%20Agent%20Security%20Against%20Prompt%20Injection%20Attacks"
  },
  {
    title: "Why Are Web AI Agents More Vulnerable Than Standalone",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://scholar.google.com/scholar?q=Why%20Are%20Web%20AI%20Agents%20More%20Vulnerable%20Than%20Standalone"
  },
  {
    title: "Security Challenges AI Agent Deployment Large Scale Competition",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Security%20Challenges%20AI%20Agent%20Deployment%20Large%20Scale%20Competition"
  },
  {
    title: "LITMUS Benchmarking Behavioral Jailbreaks LLM Agents Real OS",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A benchmark for evaluating agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=LITMUS%20Benchmarking%20Behavioral%20Jailbreaks%20LLM%20Agents%20Real%20OS"
  },
  {
    title: "Security Considerations Artificial Intelligence Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Security%20Considerations%20Artificial%20Intelligence%20Agents"
  },
  {
    title: "Stop Fixating Prompts Reasoning Hijacking RedTeaming LLM Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Stop%20Fixating%20Prompts%20Reasoning%20Hijacking%20RedTeaming%20LLM%20Agents"
  },
  {
    title: "Taming OpenClaw Security Analysis Autonomous LLM Agent Threats",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Taming%20OpenClaw%20Security%20Analysis%20Autonomous%20LLM%20Agent%20Threats"
  },
  {
    title: "Trust No Tool Evaluating Defending LLM Agents Untrusted Feedback",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A benchmark for evaluating agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Trust%20No%20Tool%20Evaluating%20Defending%20LLM%20Agents%20Untrusted%20Feedback"
  },
  {
    title: "ASTRA Agentic Steerability and Risk Assessment Framework",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An autonomous offensive system in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=ASTRA%20Agentic%20Steerability%20and%20Risk%20Assessment%20Framework"
  },
  {
    title: "Agent Skills in the Wild An Empirical Study of",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Agent%20Skills%20in%20the%20Wild%20An%20Empirical%20Study%20of"
  },
  {
    title: "Applying Refusal Vector Ablation to Llama 3 1 70B",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Applying%20Refusal%20Vector%20Ablation%20to%20Llama%203%201%2070B"
  },
  {
    title: "Artificial Intelligence as the New Hacker Developing Agents for",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "An autonomous offensive system in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Artificial%20Intelligence%20as%20the%20New%20Hacker%20Developing%20Agents%20for"
  },
  {
    title: "Breaking Agents Compromising Autonomous LLM Agents Through Malfunction Amplification",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Breaking%20Agents%20Compromising%20Autonomous%20LLM%20Agents%20Through%20Malfunction%20Amplification"
  },
  {
    title: "Bridging AI Software Security Comparative Vulnerability Assessment LLM Agent Paradigms",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Bridging%20AI%20Software%20Security%20Comparative%20Vulnerability%20Assessment%20LLM%20Agent%20Paradigms"
  },
  {
    title: "DoomArena A framework for Testing AI Agents Against Evolving",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An autonomous offensive system in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=DoomArena%20A%20framework%20for%20Testing%20AI%20Agents%20Against%20Evolving"
  },
  {
    title: "Get the Agents Drunk Memory Perturbations in Autonomous Agent",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Get%20the%20Agents%20Drunk%20Memory%20Perturbations%20in%20Autonomous%20Agent"
  },
  {
    title: "Image Hijacking Adversarial Images can Control Generative Models at",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2023,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Image%20Hijacking%20Adversarial%20Images%20can%20Control%20Generative%20Models%20at"
  },
  {
    title: "Insights and Current Gaps in Open Source LLM Vulnerability",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Insights%20and%20Current%20Gaps%20in%20Open%20Source%20LLM%20Vulnerability"
  },
  {
    title: "LibVulnWatch A Deep Assessment Agent System and Leaderboard for",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=LibVulnWatch%20A%20Deep%20Assessment%20Agent%20System%20and%20Leaderboard%20for"
  },
  {
    title: "Quantifying Distributional Robustness of Agentic Tool Selection",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Quantifying%20Distributional%20Robustness%20of%20Agentic%20Tool%20Selection"
  },
  {
    title: "SEAS Self Evolving Adversarial Safety Optimization for Large Language",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=SEAS%20Self%20Evolving%20Adversarial%20Safety%20Optimization%20for%20Large%20Language"
  },
  {
    title: "Security of AI Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=Security%20of%20AI%20Agents"
  },
  {
    title: "TRAP Targeted Redirecting of Agentic Preferences",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=TRAP%20Targeted%20Redirecting%20of%20Agentic%20Preferences"
  },
  {
    title: "The Silicon Psyche Anthropomorphic Vulnerabilities in Large Language Models",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://scholar.google.com/scholar?q=The%20Silicon%20Psyche%20Anthropomorphic%20Vulnerabilities%20in%20Large%20Language%20Models"
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
