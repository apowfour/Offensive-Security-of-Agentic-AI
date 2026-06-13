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
    url: "https://arxiv.org/abs/2401.05459"
  },
  {
    title: "Unique Security Privacy Threats LLMs Comprehensive Survey",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2406.07973"
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
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2504.15585"
  },
  {
    title: "Secure MultiLLM Agentic AI ZeroTrust Survey",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2508.19870"
  },
  {
    title: "Survey Agentic Security Applications Threats Defenses",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2510.06445"
  },
  {
    title: "Survey Attacks Large Language Models",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2505.12567"
  },
  {
    title: "Survey Autonomy Induced Security Risks Large Model Agents",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2506.23844"
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
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2601.05293"
  },
  {
    title: "Navigating Risks Security Privacy Ethics LLM Agents",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "A security analysis of agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2411.09523"
  },
  {
    title: "Emerged Security Privacy LLM Agent Survey Case Studies",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2407.19354"
  },
  {
    title: "Attack Defense Landscape Agentic AI Comprehensive Survey",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2603.11088"
  },
  {
    title: "Large Model Based Agents Cooperation Paradigms Security Privacy Future Trends",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "A security analysis of agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://doi.org/10.1109/COMST.2025.3576176"
  },
  {
    title: "Evaluation Benchmarking LLM Agents Survey",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2507.21504"
  },
  {
    title: "TRiSM Agentic AI Trust Risk Security Management LLM MultiAgent Systems",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "A security analysis of agentic AI security. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2506.04133"
  },
  {
    title: "Forewarned Forearmed Survey LLM Agents Autonomous Cyberattacks",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2505.12786"
  },
  {
    title: "Survey Trustworthy LLM Agents Threats Countermeasures",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the agentic AI security literature. It contributes to OSAA by mapping the offensive landscape against AI agents.",
    url: "https://arxiv.org/abs/2503.09648"
  },
  {
    title: "Agent SafetyBench Evaluating Safety LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
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
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2510.01359"
  },
  {
    title: "JailbreakBench Open Robustness Benchmark Jailbreaking LLMs",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2404.01318"
  },
  {
    title: "ST WebAgentBench Benchmark Safety Trustworthiness Web Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2410.06703"
  },
  {
    title: "SafeAgentBench Benchmark Safe Task Planning Embodied LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2412.13178"
  },
  {
    title: "ToolSword Safety Issues LLMs Tool Learning",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "A security analysis of agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2402.10753"
  },
  {
    title: "OS HARM Benchmark Safety Computer Use Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2506.14866"
  },
  {
    title: "RAS Eval Comprehensive Benchmark LLM Agent Security RealWorld",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2506.15253"
  },
  {
    title: "AgentNoiseBench Robustness ToolUsing LLM Agents Noisy Conditions",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2602.11348"
  },
  {
    title: "Benchmarking the Robustness of Agentic Systems to Adversarially Induced",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2508.16481"
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
    title: "Breaking Agent Backbones Evaluating the Security of Backbone LLMs",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2510.22620"
  },
  {
    title: "CTRL ALT DECEIT Sabotage Evaluations for Automated AI R",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2511.09904"
  },
  {
    title: "Creative Adversarial Testing CAT A Novel Framework for Evaluating",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2509.23006"
  },
  {
    title: "Cybersecurity AI Benchmark CAIBench A Meta Benchmark for Evaluating",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2510.24317"
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
    title: "Evaluating Regulating Agentic AI Study of Benchmarks",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://doi.org/10.1016/j.inﬀus.2026.104444"
  },
  {
    title: "FinVault Benchmarking Financial Agent Safety in Execution Grounded Environments",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2601.07853"
  },
  {
    title: "Mind the Gap Evaluating Model and Agentic Level Vulnerabilities",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2509.04802"
  },
  {
    title: "OpenAgentSafety A Comprehensive Framework for Evaluating Real World AI",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2507.06134"
  },
  {
    title: "PEAR Planner Executor Agent Robustness Benchmark",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A benchmark for evaluating agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2510.07505"
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
    url: "https://arxiv.org/abs/2411.07781"
  },
  {
    title: "Security Analysis of Agentic AI Communication Protocols A Comparative",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A security analysis of agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2511.03841"
  },
  {
    title: "Towards Effective Offensive Security LLM Agents Hyperparameter Tuning LLM",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "A security analysis of agent security and safety. It contributes to OSAA by enabling reproducible measurement of agent attacks.",
    url: "https://arxiv.org/abs/2508.05674"
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
    title: "MemoryGraft Persistent Compromise LLM Agents Poisoned Experience",
    type: "paper",
    topic: "Prompt Injection",
    year: 2024,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2512.16962"
  },
  {
    title: "Context Manipulation Web Agents Susceptible Corrupted Memory",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2506.17318"
  },
  {
    title: "Les Dissonances CrossTool Harvesting Pool of Tools LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "A security analysis of prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2504.03111"
  },
  {
    title: "Memory Poisoning Attack Defense Memory Based LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2601.05504"
  },
  {
    title: "Simple Prompt Injection Leak Personal Data LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2506.01055"
  },
  {
    title: "Automating Agent Hijacking Structural Template Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2026,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2602.16958"
  },
  {
    title: "MCP Threat Modeling Tool Poisoning Prompt Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2026,
    desc: "An attack/vulnerability study in prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2603.22489"
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
    title: "On the Security of Tool Invocation Prompts for LLM",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "A security analysis of prompt injection against agents. It contributes to OSAA by advancing prompt-injection attacks on agents.",
    url: "https://arxiv.org/abs/2509.05755"
  },
  {
    title: "Jailbreaking Leading Safety Aligned LLMs Simple Adaptive Attacks",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2404.02151"
  },
  {
    title: "BadThink Triggered Overthinking Attacks CoT Reasoning LLMs",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2511.10714"
  },
  {
    title: "Jailbreaking to Jailbreak Autonomous Agent Red Teaming",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An autonomous offensive system in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2502.09638"
  },
  {
    title: "ShadowCoT Cognitive Hijacking Stealthy Reasoning Backdoors",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2504.05605"
  },
  {
    title: "Reasoning Hijacking Constraint Tightening RedTeaming LLM Agents",
    type: "paper",
    topic: "Jailbreaking",
    year: 2026,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2604.05549"
  },
  {
    title: "AmpleGCG Learning a Universal and Transferable Generative Model of",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2404.07921"
  },
  {
    title: "AutoDAN Turbo A Lifelong Agent for Strategy Self Exploration",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2410.05295"
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
    title: "How Johnny Can Persuade LLMs to Jailbreak Them Rethinking",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2401.06373"
  },
  {
    title: "Jailbreak Zero A Path to Pareto Optimal Red Teaming",
    type: "paper",
    topic: "Jailbreaking",
    year: 2026,
    desc: "An autonomous offensive system in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2601.03265"
  },
  {
    title: "LLM Defenses Are Not Robust to Multi Turn Human",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
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
    title: "STAC When Innocent Tools Form Dangerous Chains to Jailbreak",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "An attack/vulnerability study in LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/2509.25624"
  },
  {
    title: "TextBugger Generating Adversarial Text Against Real world Applications",
    type: "paper",
    topic: "Jailbreaking",
    year: 2018,
    desc: "A security analysis of LLM and agent jailbreaking. It contributes to OSAA by strengthening jailbreak techniques used against agents.",
    url: "https://arxiv.org/abs/1812.05271"
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
    desc: "An attack/vulnerability study in agent backdoors and poisoning. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://arxiv.org/abs/2402.11208"
  },
  {
    title: "SupplyChain Poisoning LLM Coding Agent Skill Ecosystems",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2026,
    desc: "An attack/vulnerability study in agent backdoors and poisoning. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://arxiv.org/abs/2604.03081"
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
    title: "Malice in Agentland Down the Rabbit Hole of Backdoors",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2025,
    desc: "An attack/vulnerability study in agent backdoors and poisoning. It contributes to OSAA by demonstrating backdoor and poisoning attacks on agents.",
    url: "https://arxiv.org/abs/2510.05159"
  },
  {
    title: "Targeting Core Attack RAG Agents Direct LLM Manipulation",
    type: "paper",
    topic: "RAG Security",
    year: 2024,
    desc: "An attack/vulnerability study in retrieval-augmented agent attacks. It contributes to OSAA by exposing attacks on retrieval-augmented agents.",
    url: "https://arxiv.org/abs/2412.04415"
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
    title: "Securing RAG Taxonomy Attacks Defenses Future Directions",
    type: "paper",
    topic: "RAG Security",
    year: 2026,
    desc: "An attack/vulnerability study in retrieval-augmented agent attacks. It contributes to OSAA by exposing attacks on retrieval-augmented agents.",
    url: "https://arxiv.org/abs/2604.08304"
  },
  {
    title: "Extending OWASP MultiAgentic System Threat Modeling Guide",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2508.09815"
  },
  {
    title: "MultiAgent Systems Execute Arbitrary Malicious Code",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2503.12188"
  },
  {
    title: "Open Challenges MultiAgent Security Secure Systems AI Agents",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
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
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2511.10949"
  },
  {
    title: "MultiFuzz A Dense Retrieval based Multi Agent System for",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2508.14300"
  },
  {
    title: "Multi Agent Security Tax Trading Off Security and Collaboration",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A security analysis of multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2502.19145"
  },
  {
    title: "TAMAS Benchmarking Adversarial Risks in Multi Agent LLM Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A benchmark for evaluating multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2511.05269"
  },
  {
    title: "Towards Unifying Quantitative Security Benchmarking for Multi Agent Systems",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "A benchmark for evaluating multi-agent system attacks. It contributes to OSAA by revealing attacks across multi-agent systems.",
    url: "https://arxiv.org/abs/2507.21146"
  },
  {
    title: "PentestAgent LLM Agents Automated Penetration Testing",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2411.05185"
  },
  {
    title: "AutoPentester LLM Agent Framework Automated Pentesting",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2510.05605"
  },
  {
    title: "Cybersecurity AI OT AI Top10 Ranker Dragos OT CTF",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A security analysis of autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2511.05119"
  },
  {
    title: "Dynamic Risk Assessments Offensive Cybersecurity Agents",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A security analysis of autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2505.18384"
  },
  {
    title: "xOffense AI Driven Autonomous Penetration Testing MultiAgent",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2509.13021"
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
    title: "AutoPenBench A Vulnerability Testing Benchmark for Generative Agents",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "A benchmark for evaluating autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2410.03225"
  },
  {
    title: "BreachSeek A Multi Agent Automated Penetration Tester",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2409.03789"
  },
  {
    title: "CAI An Open Bug Bounty Ready Cybersecurity AI",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A security analysis of autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2504.06017"
  },
  {
    title: "CIPHER Cybersecurity Intelligent Penetration testing Helper for Ethical Researcher",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2408.11650"
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
    url: "https://arxiv.org/abs/2512.09882"
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
    desc: "A benchmark for evaluating autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2412.01778"
  },
  {
    title: "Multi agent penetration testing AI for the web",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2508.20816"
  },
  {
    title: "Penetration Testing of Agentic AI A Comparative Security Analysis",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2512.14860"
  },
  {
    title: "Shell or Nothing Real World Benchmarks and Memory Activated",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "A benchmark for evaluating autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2509.09207"
  },
  {
    title: "VulnBot Autonomous Penetration Testing for A Multi Agent Collaborative",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "An autonomous offensive system in autonomous penetration testing. It contributes to OSAA by automating offensive penetration testing with agents.",
    url: "https://arxiv.org/abs/2501.13411"
  },
  {
    title: "AgentAuditor Human Level Safety Security Evaluation LLM Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A benchmark for evaluating agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2506.00641"
  },
  {
    title: "Hiding AI Traffic Abusing MCP LLM Powered Agentic RedTeaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2511.15998"
  },
  {
    title: "SIRAJ Diverse Efficient RedTeaming LLM Agents Distilled Reasoning",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2510.26037"
  },
  {
    title: "PISmith RL Based RedTeaming Prompt Injection Defenses",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "An attack/vulnerability study in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2603.13026"
  },
  {
    title: "RedTeaming Framework Evaluating Robustness AI Security Orchestration",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "A benchmark for evaluating agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2605.17075"
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
    url: "https://arxiv.org/abs/2404.08676"
  },
  {
    title: "ARMs Adaptive Red Teaming Agent against Multimodal Models with",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2510.02677"
  },
  {
    title: "ASTRA Autonomous Spatial Temporal Red teaming for AI Software",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2508.03936"
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
    title: "AgentXploit End to End Red Teaming for AI Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2505.05849"
  },
  {
    title: "AutoODD Agentic Audits via Bayesian Red Teaming in Black",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2509.08638"
  },
  {
    title: "AutoRedTeamer Autonomous Red Teaming with Lifelong Attack Integration",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2503.15754"
  },
  {
    title: "Automated Red Teaming with GOAT the Generative Offensive Agent",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2410.01606"
  },
  {
    title: "BlueCodeAgent A Blue Teaming Agent Enabled by Automated Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2510.18131"
  },
  {
    title: "Genesis Evolving Attack Strategies for LLM Web Agent Red",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An attack/vulnerability study in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2510.18314"
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
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2409.16783"
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
    url: "https://arxiv.org/abs/2509.17259"
  },
  {
    title: "OpenAI's Approach to External Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2503.16431"
  },
  {
    title: "OpenRT An Open Source Red Teaming Framework for Multimodal",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2601.01592"
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
    title: "Red Teaming AI Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2507.05538"
  },
  {
    title: "RedAgent Red Teaming Large Language Models with Context aware",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2407.16667"
  },
  {
    title: "RedBench A Universal Dataset for Comprehensive Red Teaming of",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "A benchmark for evaluating agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2601.03699"
  },
  {
    title: "RedCodeAgent Automatic Red teaming Agent against Diverse Code Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2510.02609"
  },
  {
    title: "RedTeamCUA Realistic Adversarial Testing of Computer Use Agents in",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "A security analysis of agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2505.21936"
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
    url: "https://arxiv.org/abs/2509.23694"
  },
  {
    title: "The Automation Advantage in AI Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "An autonomous offensive system in agent red teaming. It contributes to OSAA by advancing automated red teaming of agents.",
    url: "https://arxiv.org/abs/2504.19855"
  },
  {
    title: "A Framework for Evaluating Emerging Cyberattack Capabilities of AI",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2503.11917"
  },
  {
    title: "CVE bench a benchmark for AI agents ability to",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2503.17332"
  },
  {
    title: "Catastrophic Cyber Capabilities Benchmark 3CB Robustly Evaluating LLM Agent",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2410.09114"
  },
  {
    title: "Cybench A Framework for Evaluating Cybersecurity Capabilities and Risk",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2024,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2408.08926"
  },
  {
    title: "CyberSecurity AI Evaluating agentic cybersecurity in attack defense CTFs",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2510.17521"
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
    title: "OCCULT Evaluating Large Language Models for Offensive Cyber Operation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2502.15797"
  },
  {
    title: "PACEbench A Framework for Evaluating Practical AI Cyber Exploitation",
    type: "paper",
    topic: "Offensive Cyber / CTF / CVE",
    year: 2025,
    desc: "A benchmark for evaluating autonomous offensive-cyber capability. It contributes to OSAA by evaluating agents' autonomous offensive-cyber capability.",
    url: "https://arxiv.org/abs/2510.11688"
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
    url: "https://arxiv.org/abs/2312.04724"
  },
  {
    title: "LLM Agent Leak Data Exfiltration Backdoored Tool Use",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "An attack/vulnerability study in agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://arxiv.org/abs/2604.05432"
  },
  {
    title: "Observable Channels Privacy Leakage LLM Agent Pipelines",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "An attack/vulnerability study in agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://arxiv.org/abs/2603.22751"
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
    desc: "An attack/vulnerability study in agent data exfiltration and privacy leakage. It contributes to OSAA by exposing data-exfiltration and privacy-leakage paths in agents.",
    url: "https://arxiv.org/abs/2502.12630"
  },
  {
    title: "Agentic AI as Cybersecurity Attack Surface",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "An attack/vulnerability study in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2602.19555"
  },
  {
    title: "MCP Threat Modeling Vulnerabilities Tool Poisoning Prompt Injection",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "An attack/vulnerability study in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
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
    desc: "A security analysis of agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2604.02837"
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
    title: "Breaking the Protocol Security Analysis of the Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "An attack/vulnerability study in agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2601.17549"
  },
  {
    title: "MCPSecBench A Systematic Security Benchmark and Playground for Testing",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A benchmark for evaluating agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2508.13220"
  },
  {
    title: "MCPTox A Benchmark for Tool Poisoning Attack on Real",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A benchmark for evaluating agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2508.14925"
  },
  {
    title: "MCP Security Bench MSB Benchmarking Attacks Against Model Context",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A benchmark for evaluating agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2510.15994"
  },
  {
    title: "Systematic Analysis of MCP Security",
    type: "paper",
    topic: "Protocol Security",
    year: 2025,
    desc: "A security analysis of agent protocol (e.g. MCP) security. It contributes to OSAA by mapping protocol-level attack surfaces such as MCP.",
    url: "https://arxiv.org/abs/2508.12538"
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
    title: "From Prompt to Physical Action Backdoor Attacks Embodied Agents",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "An attack/vulnerability study in embodied and robotic agent security. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://arxiv.org/abs/2604.03890"
  },
  {
    title: "What Breaks Embodied AI Security LLM Vulnerabilities CPS Flaws",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "An attack/vulnerability study in embodied and robotic agent security. It contributes to OSAA by extending agent attacks to the physical world.",
    url: "https://arxiv.org/abs/2602.17345"
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
    title: "ASTRIDE A Security Threat Modeling Platform for Agentic AI",
    type: "paper",
    topic: "Threat Modeling",
    year: 2025,
    desc: "A security analysis of agent threat modeling and risk assessment. It contributes to OSAA by structuring threat models for offensive assessment.",
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
    desc: "A security analysis of agent threat modeling and risk assessment. It contributes to OSAA by structuring threat models for offensive assessment.",
    url: "https://arxiv.org/abs/2508.10043"
  },
  {
    title: "Agent Fence Mapping Security Vulnerabilities Deep Research Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2026,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://arxiv.org/abs/2602.07652"
  },
  {
    title: "Atomicity Agents TOCTOU Vulnerabilities Browser Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2026,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://arxiv.org/abs/2603.00476"
  },
  {
    title: "A Systematization of Security Vulnerabilities in Computer Use Agents",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://arxiv.org/abs/2507.05445"
  },
  {
    title: "HackWorld Evaluating Computer Use Agents on Exploiting Web Application",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "A benchmark for evaluating computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://arxiv.org/abs/2510.12200"
  },
  {
    title: "SecureWebArena A Holistic Security Evaluation Benchmark for LVLM based",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "A benchmark for evaluating computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://arxiv.org/abs/2510.10073"
  },
  {
    title: "WASP Benchmarking Web Agent Security Against Prompt Injection Attacks",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "A benchmark for evaluating computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://arxiv.org/abs/2504.18575"
  },
  {
    title: "Why Are Web AI Agents More Vulnerable Than Standalone",
    type: "paper",
    topic: "Computer-Use & Web Agents",
    year: 2025,
    desc: "An attack/vulnerability study in computer-use and web agent security. It contributes to OSAA by exposing vulnerabilities in computer-use and web agents.",
    url: "https://arxiv.org/abs/2502.20383"
  },
  {
    title: "Security Challenges AI Agent Deployment Large Scale Competition",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2507.20526"
  },
  {
    title: "LITMUS Benchmarking Behavioral Jailbreaks LLM Agents Real OS",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A benchmark for evaluating agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2605.10779"
  },
  {
    title: "Security Considerations Artificial Intelligence Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2603.12230"
  },
  {
    title: "Stop Fixating Prompts Reasoning Hijacking RedTeaming LLM Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2604.05549"
  },
  {
    title: "Taming OpenClaw Security Analysis Autonomous LLM Agent Threats",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2603.11619"
  },
  {
    title: "Trust No Tool Evaluating Defending LLM Agents Untrusted Feedback",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A benchmark for evaluating agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2605.17453"
  },
  {
    title: "ASTRA Agentic Steerability and Risk Assessment Framework",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An autonomous offensive system in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2511.18114"
  },
  {
    title: "Agent Skills in the Wild An Empirical Study of",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2601.10338"
  },
  {
    title: "Applying Refusal Vector Ablation to Llama 3 1 70B",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2410.10871"
  },
  {
    title: "Artificial Intelligence as the New Hacker Developing Agents for",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "An autonomous offensive system in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2406.07561"
  },
  {
    title: "Breaking Agents Compromising Autonomous LLM Agents Through Malfunction Amplification",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2407.20859"
  },
  {
    title: "Bridging AI Software Security Comparative Vulnerability Assessment LLM Agent Paradigms",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2507.06323"
  },
  {
    title: "DoomArena A framework for Testing AI Agents Against Evolving",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An autonomous offensive system in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2504.14064"
  },
  {
    title: "Get the Agents Drunk Memory Perturbations in Autonomous Agent",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2503.23804"
  },
  {
    title: "Image Hijacking Adversarial Images can Control Generative Models at",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2023,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2309.00236"
  },
  {
    title: "Insights and Current Gaps in Open Source LLM Vulnerability",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2410.16527"
  },
  {
    title: "LibVulnWatch A Deep Assessment Agent System and Leaderboard for",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2505.08842"
  },
  {
    title: "Quantifying Distributional Robustness of Agentic Tool Selection",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2510.03992"
  },
  {
    title: "SEAS Self Evolving Adversarial Safety Optimization for Large Language",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2408.02632"
  },
  {
    title: "Security of AI Agents",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2024,
    desc: "A security analysis of agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2406.08689"
  },
  {
    title: "TRAP Targeted Redirecting of Agentic Preferences",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2025,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2505.23518"
  },
  {
    title: "The Silicon Psyche Anthropomorphic Vulnerabilities in Large Language Models",
    type: "paper",
    topic: "Misc Attacks & Other",
    year: 2026,
    desc: "An attack/vulnerability study in agent attacks and vulnerabilities. It contributes to OSAA by documenting novel agent attacks and vulnerabilities.",
    url: "https://arxiv.org/abs/2601.00867"
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
