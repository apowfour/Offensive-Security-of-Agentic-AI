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
     Sub-categorized by topic (your PAPERS subfolders) and year.
     Only offensive-security (OSAA) papers are included. ---------- */
  {
    title: "Personal LLM Agents: Capability, Efficiency and Security",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys the architecture of personal LLM agents with a dedicated treatment of their security and privacy risks. Gives an early systematization of the agent attack surface that frames many OSAA threat categories.",
    url: "https://scholar.google.com/scholar?q=Personal%20LLM%20Agents%3A%20Capability%2C%20Efficiency%20and%20Security"
  },
  {
    title: "A Comprehensive Survey of Unique Security and Privacy Threats of LLMs",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Catalogues security and privacy threats specific to large language models. Establishes the threat vocabulary OSAA builds on once models are wrapped in agents.",
    url: "https://scholar.google.com/scholar?q=A%20Comprehensive%20Survey%20of%20Unique%20Security%20and%20Privacy%20Threats%20of%20LLMs"
  },
  {
    title: "Agentic AI Security: Threats, Defenses, Evaluation and Open Challenges",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys the full agentic-security landscape across threats, defenses, evaluation and open problems. One of the most direct OSAA reference maps of offensive techniques against agents.",
    url: "https://scholar.google.com/scholar?q=Agentic%20AI%20Security%3A%20Threats%2C%20Defenses%2C%20Evaluation%20and%20Open%20Challenges"
  },
  {
    title: "A Comprehensive Survey on LLM Agent Full-Stack Safety",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys safety risks across the entire LLM-agent stack from data to deployment. Gives OSAA practitioners a layered model of where agents can be attacked.",
    url: "https://scholar.google.com/scholar?q=A%20Comprehensive%20Survey%20on%20LLM%20Agent%20Full-Stack%20Safety"
  },
  {
    title: "Toward Secure Multi-LLM Agentic AI: A Zero-Trust Survey",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys multi-LLM agent risks through a zero-trust lens. Frames the inter-agent trust boundaries OSAA red-teaming targets.",
    url: "https://scholar.google.com/scholar?q=Toward%20Secure%20Multi-LLM%20Agentic%20AI%3A%20A%20Zero-Trust%20Survey"
  },
  {
    title: "A Survey of Agentic Security: Applications, Threats and Defenses",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Broad survey of agentic-security threats and defenses. Core OSAA orientation reference for the attack taxonomy.",
    url: "https://scholar.google.com/scholar?q=A%20Survey%20of%20Agentic%20Security%3A%20Applications%2C%20Threats%20and%20Defenses"
  },
  {
    title: "A Survey of Attacks on Large Language Models",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Comprehensive survey of attack techniques against LLMs. Supplies the offensive technique catalogue underlying agent-level attacks.",
    url: "https://scholar.google.com/scholar?q=A%20Survey%20of%20Attacks%20on%20Large%20Language%20Models"
  },
  {
    title: "A Survey on Autonomy-Induced Security Risks of Large Model Agents",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys how increasing agent autonomy creates new security risks. Directly links autonomy, the defining agentic property, to offensive risk.",
    url: "https://scholar.google.com/scholar?q=A%20Survey%20on%20Autonomy-Induced%20Security%20Risks%20of%20Large%20Model%20Agents"
  },
  {
    title: "From Secure Agentic AI to Secure Agentic Web",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Surveys threats and directions as agents interconnect into an agentic web. Extends the OSAA attack surface to multi-agent, web-scale interactions.",
    url: "https://scholar.google.com/scholar?q=From%20Secure%20Agentic%20AI%20to%20Secure%20Agentic%20Web"
  },
  {
    title: "SoK: The Attack Surface of Agentic AI — Tools and Autonomy",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Systematizes how tools and autonomy expand the agent attack surface. The clearest SoK of the OSAA attack surface to date.",
    url: "https://scholar.google.com/scholar?q=SoK%3A%20The%20Attack%20Surface%20of%20Agentic%20AI%20%E2%80%94%20Tools%20and%20Autonomy"
  },
  {
    title: "A Survey of Agentic AI and Cybersecurity",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Surveys challenges, opportunities and prototypes at the agentic-AI / cybersecurity intersection. Connects OSAA to broader offensive-cyber use cases.",
    url: "https://scholar.google.com/scholar?q=A%20Survey%20of%20Agentic%20AI%20and%20Cybersecurity"
  },
  {
    title: "Navigating the Risks: Security, Privacy and Ethics of LLM Agents",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys security, privacy and ethical risks of LLM agents with case studies. Early taxonomy that seeds OSAA threat categories.",
    url: "https://scholar.google.com/scholar?q=Navigating%20the%20Risks%3A%20Security%2C%20Privacy%20and%20Ethics%20of%20LLM%20Agents"
  },
  {
    title: "The Emerged Security and Privacy of LLM Agent: Survey with Case Studies",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys emerging agent security/privacy issues using concrete case studies. Provides real attack case studies useful for OSAA red-teaming.",
    url: "https://scholar.google.com/scholar?q=The%20Emerged%20Security%20and%20Privacy%20of%20LLM%20Agent%3A%20Survey%20with%20Case%20Studies"
  },
  {
    title: "Attack and Defense Landscape of Agentic AI: A Comprehensive Survey",
    type: "paper",
    topic: "Surveys",
    year: 2026,
    desc: "Maps both the attack and defense sides of agentic AI. Its offensive half is a structured catalogue of agent attacks for OSAA.",
    url: "https://scholar.google.com/scholar?q=Attack%20and%20Defense%20Landscape%20of%20Agentic%20AI%3A%20A%20Comprehensive%20Survey"
  },
  {
    title: "Large-Model-Based Agents: Cooperation Paradigms, Security, Privacy and Future Trends",
    type: "paper",
    topic: "Surveys",
    year: 2024,
    desc: "Surveys cooperative multi-agent paradigms and their security/privacy implications. Frames multi-agent collusion and trust attacks for OSAA.",
    url: "https://scholar.google.com/scholar?q=Large-Model-Based%20Agents%3A%20Cooperation%20Paradigms%2C%20Security%2C%20Privacy%20and%20Future%20Trends"
  },
  {
    title: "Evaluation and Benchmarking of LLM Agents: A Survey (KDD 2025)",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys methods for evaluating and benchmarking LLM agents. Grounds the evaluation-and-benchmarking pillar of OSAA.",
    url: "https://scholar.google.com/scholar?q=Evaluation%20and%20Benchmarking%20of%20LLM%20Agents%3A%20A%20Survey"
  },
  {
    title: "TRiSM for Agentic AI: Trust, Risk and Security Management",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys trust, risk and security management for LLM multi-agent systems. Provides the risk-assessment framing OSAA engagements report against.",
    url: "https://scholar.google.com/scholar?q=TRiSM%20for%20Agentic%20AI%3A%20Trust%2C%20Risk%20and%20Security%20Management"
  },
  {
    title: "Forewarned is Forearmed: A Survey on LLM Agents for Autonomous Cyberattacks",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys LLM agents used to carry out autonomous cyberattacks. Directly catalogues offensive agentic capabilities — core OSAA.",
    url: "https://scholar.google.com/scholar?q=Forewarned%20is%20Forearmed%3A%20A%20Survey%20on%20LLM%20Agents%20for%20Autonomous%20Cyberattacks"
  },
  {
    title: "A Survey on Trustworthy LLM Agents: Threats and Countermeasures (KDD 2025)",
    type: "paper",
    topic: "Surveys",
    year: 2025,
    desc: "Surveys threats to and countermeasures for trustworthy LLM agents. Its threat half enumerates the agent attack landscape for OSAA.",
    url: "https://scholar.google.com/scholar?q=A%20Survey%20on%20Trustworthy%20LLM%20Agents%3A%20Threats%20and%20Countermeasures"
  },
  {
    title: "Agent-SafetyBench: Evaluating the Safety of LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark measuring LLM-agent safety across many interactive environments. Standardizes measurement of the agent failures OSAA tries to induce.",
    url: "https://scholar.google.com/scholar?q=Agent-SafetyBench%3A%20Evaluating%20the%20Safety%20of%20LLM%20Agents"
  },
  {
    title: "InjecAgent: Benchmarking Indirect Prompt Injection in Tool-Integrated Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark for indirect prompt injection against tool-using agents. A canonical OSAA benchmark for the highest-impact agent attack.",
    url: "https://scholar.google.com/scholar?q=InjecAgent%3A%20Benchmarking%20Indirect%20Prompt%20Injection%20in%20Tool-Integrated%20Agents"
  },
  {
    title: "JAWS-BENCH: Security Assessment of AI Code Agents via Jailbreaking",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark assessing the security of AI coding agents through jailbreaks. Targets code agents, a high-risk OSAA surface.",
    url: "https://scholar.google.com/scholar?q=JAWS-BENCH%3A%20Security%20Assessment%20of%20AI%20Code%20Agents%20via%20Jailbreaking"
  },
  {
    title: "JailbreakBench: An Open Robustness Benchmark for Jailbreaking LLMs (NeurIPS)",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Open, reproducible benchmark for jailbreaking LLMs. Standard jailbreak benchmark feeding OSAA agent testing.",
    url: "https://scholar.google.com/scholar?q=JailbreakBench%3A%20An%20Open%20Robustness%20Benchmark%20for%20Jailbreaking%20LLMs"
  },
  {
    title: "ST-WebAgentBench: Safety and Trustworthiness of Web Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark for the safety and trust of web-browsing agents. Measures web-agent susceptibility central to OSAA.",
    url: "https://scholar.google.com/scholar?q=ST-WebAgentBench%3A%20Safety%20and%20Trustworthiness%20of%20Web%20Agents"
  },
  {
    title: "SafeAgentBench: Safe Task Planning for Embodied LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark for safe task planning in embodied agents. Extends OSAA evaluation to physical/embodied actions.",
    url: "https://scholar.google.com/scholar?q=SafeAgentBench%3A%20Safe%20Task%20Planning%20for%20Embodied%20LLM%20Agents"
  },
  {
    title: "ToolSword: Safety Issues of LLMs in Tool Learning (ACL 2024)",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark exposing safety issues across the tool-learning lifecycle. Maps the tool-use attack points OSAA exploits.",
    url: "https://scholar.google.com/scholar?q=ToolSword%3A%20Safety%20Issues%20of%20LLMs%20in%20Tool%20Learning"
  },
  {
    title: "OS-HARM: A Benchmark for the Safety of Computer-Use Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Benchmark measuring harm from computer-use (GUI) agents. Evaluates the OS-control attack surface for OSAA.",
    url: "https://scholar.google.com/scholar?q=OS-HARM%3A%20A%20Benchmark%20for%20the%20Safety%20of%20Computer-Use%20Agents"
  },
  {
    title: "RAS-Eval: A Real-World LLM Agent Security Benchmark",
    type: "paper",
    topic: "Benchmarks",
    year: 2025,
    desc: "Comprehensive real-world agent-security benchmark. Brings OSAA evaluation closer to deployment conditions.",
    url: "https://scholar.google.com/scholar?q=RAS-Eval%3A%20A%20Real-World%20LLM%20Agent%20Security%20Benchmark"
  },
  {
    title: "AgentNoiseBench: Robustness of Tool-Using LLM Agents under Noisy Conditions",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "Benchmark for agent robustness to noisy and manipulated tool outputs. Tests resilience to manipulated tool feedback, an OSAA vector.",
    url: "https://scholar.google.com/scholar?q=AgentNoiseBench%3A%20Robustness%20of%20Tool-Using%20LLM%20Agents%20under%20Noisy%20Conditions"
  },
  {
    title: "AgentHarm: Measuring the Harmfulness of LLM Agents",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark measuring how harmful agent behaviors can be elicited. Quantifies attacker-achievable harm for OSAA.",
    url: "https://scholar.google.com/scholar?q=AgentHarm%3A%20Measuring%20the%20Harmfulness%20of%20LLM%20Agents"
  },
  {
    title: "AgentDojo: Evaluating Prompt Injection Attacks and Defenses (NeurIPS 2024)",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Dynamic environment to evaluate prompt-injection attacks and defenses on tool-using agents. A leading OSAA attack/defense harness and benchmark.",
    url: "https://scholar.google.com/scholar?q=AgentDojo%3A%20Evaluating%20Prompt%20Injection%20Attacks%20and%20Defenses"
  },
  {
    title: "Evaluating and Regulating Agentic AI: A Study of Benchmarks",
    type: "paper",
    topic: "Benchmarks",
    year: 2026,
    desc: "Meta-study analyzing agentic-AI benchmarks and their regulatory use. Helps OSAA pick rigorous, comparable evaluations.",
    url: "https://scholar.google.com/scholar?q=Evaluating%20and%20Regulating%20Agentic%20AI%3A%20A%20Study%20of%20Benchmarks"
  },
  {
    title: "ASB: Agent Security Bench (ICLR 2025)",
    type: "paper",
    topic: "Benchmarks",
    year: 2024,
    desc: "Benchmark formalizing agent attack surfaces such as injection and tool misuse. Enables reproducible OSAA evaluation across attack types.",
    url: "https://scholar.google.com/scholar?q=ASB%3A%20Agent%20Security%20Bench"
  },
  {
    title: "MemoryGraft: Persistent Compromise of LLM Agents via Poisoned Experience",
    type: "paper",
    topic: "Prompt Injection",
    year: 2024,
    desc: "Attack that persistently compromises agents by poisoning their stored experience. Demonstrates durable memory-based agent compromise for OSAA.",
    url: "https://scholar.google.com/scholar?q=MemoryGraft%3A%20Persistent%20Compromise%20of%20LLM%20Agents%20via%20Poisoned%20Experience"
  },
  {
    title: "Context Manipulation: Web Agents Susceptible to Corrupted Memory",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Shows web agents can be hijacked through corrupted context and memory. Adds a concrete OSAA memory-manipulation attack on web agents.",
    url: "https://scholar.google.com/scholar?q=Context%20Manipulation%3A%20Web%20Agents%20Susceptible%20to%20Corrupted%20Memory"
  },
  {
    title: "Les Dissonances: Cross-Tool Harvesting from a Pool of Tools",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Attack that harvests data across an agent's pool of tools. Reveals cross-tool exfiltration paths for OSAA.",
    url: "https://scholar.google.com/scholar?q=Les%20Dissonances%3A%20Cross-Tool%20Harvesting%20from%20a%20Pool%20of%20Tools"
  },
  {
    title: "Memory Poisoning Attack and Defense for Memory-Based LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Studies poisoning attacks on agent memory. Its offensive half formalizes memory-poisoning for OSAA.",
    url: "https://scholar.google.com/scholar?q=Memory%20Poisoning%20Attack%20and%20Defense%20for%20Memory-Based%20LLM%20Agents"
  },
  {
    title: "A Simple Prompt Injection Can Leak Personal Data from LLM Agents",
    type: "paper",
    topic: "Prompt Injection",
    year: 2025,
    desc: "Shows minimal prompt injection can exfiltrate personal data from agents. Demonstrates low-effort, high-impact OSAA data leakage.",
    url: "https://scholar.google.com/scholar?q=A%20Simple%20Prompt%20Injection%20Can%20Leak%20Personal%20Data%20from%20LLM%20Agents"
  },
  {
    title: "Automating Agent Hijacking via Structural Template Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2026,
    desc: "Automated agent hijacking using structural template injection. Scales OSAA hijacking through automation.",
    url: "https://scholar.google.com/scholar?q=Automating%20Agent%20Hijacking%20via%20Structural%20Template%20Injection"
  },
  {
    title: "MCP Threat Modeling: Tool Poisoning and Prompt Injection",
    type: "paper",
    topic: "Prompt Injection",
    year: 2026,
    desc: "Threat-models the Model Context Protocol for tool poisoning and injection. Maps the MCP supply-chain attack surface for OSAA.",
    url: "https://scholar.google.com/scholar?q=MCP%20Threat%20Modeling%3A%20Tool%20Poisoning%20and%20Prompt%20Injection"
  },
  {
    title: "Not What You've Signed Up For: Indirect Prompt Injection (AISec 2023)",
    type: "paper",
    topic: "Prompt Injection",
    year: 2023,
    desc: "Seminal paper introducing indirect prompt injection of LLM-integrated applications. Foundational OSAA attack class for tool and agent systems.",
    url: "https://scholar.google.com/scholar?q=Not%20What%20You%27ve%20Signed%20Up%20For%3A%20Indirect%20Prompt%20Injection"
  },
  {
    title: "Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Shows simple adaptive attacks defeat aligned LLMs. Baseline jailbreak technique reused in OSAA agent attacks.",
    url: "https://scholar.google.com/scholar?q=Jailbreaking%20Leading%20Safety-Aligned%20LLMs%20with%20Simple%20Adaptive%20Attacks"
  },
  {
    title: "BadThink: Triggered Overthinking Attacks on CoT Reasoning",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "Attack inducing harmful overthinking in chain-of-thought reasoning. Targets the reasoning loop agents depend on (OSAA).",
    url: "https://scholar.google.com/scholar?q=BadThink%3A%20Triggered%20Overthinking%20Attacks%20on%20CoT%20Reasoning"
  },
  {
    title: "Jailbreaking to Jailbreak: Autonomous Agent Red Teaming",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "Uses an autonomous agent to jailbreak other models. Automates OSAA red-teaming via agentic attackers.",
    url: "https://scholar.google.com/scholar?q=Jailbreaking%20to%20Jailbreak%3A%20Autonomous%20Agent%20Red%20Teaming"
  },
  {
    title: "ShadowCoT: Cognitive Hijacking via Stealthy Reasoning Backdoors",
    type: "paper",
    topic: "Jailbreaking",
    year: 2025,
    desc: "Stealthy backdoors that hijack a model's reasoning. Adds a covert reasoning-hijack technique to OSAA.",
    url: "https://scholar.google.com/scholar?q=ShadowCoT%3A%20Cognitive%20Hijacking%20via%20Stealthy%20Reasoning%20Backdoors"
  },
  {
    title: "Reasoning Hijacking via Constraint Tightening: Red-Teaming LLM Agents",
    type: "paper",
    topic: "Jailbreaking",
    year: 2026,
    desc: "Red-teams agents by tightening constraints to hijack reasoning. A novel OSAA agent reasoning-hijack method.",
    url: "https://scholar.google.com/scholar?q=Reasoning%20Hijacking%20via%20Constraint%20Tightening%3A%20Red-Teaming%20LLM%20Agents"
  },
  {
    title: "PAIR: Jailbreaking Black-Box LLMs in Twenty Queries",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "Query-efficient automated black-box jailbreak. An efficient OSAA jailbreak primitive.",
    url: "https://scholar.google.com/scholar?q=PAIR%3A%20Jailbreaking%20Black-Box%20LLMs%20in%20Twenty%20Queries"
  },
  {
    title: "AutoDAN: Generating Stealthy Jailbreak Prompts",
    type: "paper",
    topic: "Jailbreaking",
    year: 2024,
    desc: "Automatically generates stealthy, readable jailbreak prompts. Automated OSAA prompt-attack generation.",
    url: "https://scholar.google.com/scholar?q=AutoDAN%3A%20Generating%20Stealthy%20Jailbreak%20Prompts"
  },
  {
    title: "Universal and Transferable Adversarial Attacks on Aligned LLMs (GCG)",
    type: "paper",
    topic: "Jailbreaking",
    year: 2023,
    desc: "Introduces transferable adversarial suffixes (GCG) that jailbreak LLMs. Foundational transferable attack underpinning OSAA.",
    url: "https://scholar.google.com/scholar?q=Universal%20and%20Transferable%20Adversarial%20Attacks%20on%20Aligned%20LLMs"
  },
  {
    title: "AgentPoison: Red-Teaming LLM Agents via Poisoning Memory (NeurIPS 2024)",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Red-teams agents by poisoning their memory or knowledge base. A landmark OSAA memory-poisoning attack.",
    url: "https://scholar.google.com/scholar?q=AgentPoison%3A%20Red-Teaming%20LLM%20Agents%20via%20Poisoning%20Memory"
  },
  {
    title: "BadAgent: Inserting and Activating Backdoor Attacks on LLM Agents",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Inserts and triggers backdoors in LLM agents. Demonstrates agent-level backdoors for OSAA.",
    url: "https://scholar.google.com/scholar?q=BadAgent%3A%20Inserting%20and%20Activating%20Backdoor%20Attacks%20on%20LLM%20Agents"
  },
  {
    title: "A Survey of Backdoor Attacks and Defenses on LLMs",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Surveys LLM backdoor attacks and defenses. Its offensive half catalogues backdoor techniques for OSAA.",
    url: "https://scholar.google.com/scholar?q=A%20Survey%20of%20Backdoor%20Attacks%20and%20Defenses%20on%20LLMs"
  },
  {
    title: "Watch Out for Your Agents: Backdoor Threats to LLM-Based Agents",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Analyzes backdoor threats specific to agents. Frames agent backdoor risk for OSAA.",
    url: "https://scholar.google.com/scholar?q=Watch%20Out%20for%20Your%20Agents%3A%20Backdoor%20Threats%20to%20LLM-Based%20Agents"
  },
  {
    title: "Supply-Chain Poisoning of LLM Coding-Agent Skill Ecosystems",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2026,
    desc: "Poisons the skill/plugin supply chain of coding agents. Exposes an OSAA supply-chain attack vector.",
    url: "https://scholar.google.com/scholar?q=Supply-Chain%20Poisoning%20of%20LLM%20Coding-Agent%20Skill%20Ecosystems"
  },
  {
    title: "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training",
    type: "paper",
    topic: "Backdoor & Poisoning",
    year: 2024,
    desc: "Shows backdoored 'sleeper' models survive safety training. Demonstrates a persistent deceptive-agent threat for OSAA.",
    url: "https://scholar.google.com/scholar?q=Sleeper%20Agents%3A%20Training%20Deceptive%20LLMs%20that%20Persist%20Through%20Safety%20Training"
  },
  {
    title: "Targeting the Core: Attack on RAG Agents via Direct LLM Manipulation",
    type: "paper",
    topic: "RAG Security",
    year: 2024,
    desc: "Attacks RAG agents by directly manipulating the underlying LLM. A concrete OSAA attack on retrieval-augmented agents.",
    url: "https://scholar.google.com/scholar?q=Targeting%20the%20Core%3A%20Attack%20on%20RAG%20Agents%20via%20Direct%20LLM%20Manipulation"
  },
  {
    title: "Unveiling Privacy Risks in LLM Agent Memory",
    type: "paper",
    topic: "RAG Security",
    year: 2025,
    desc: "Reveals privacy leakage from agent memory stores. Identifies an OSAA exfiltration risk in agent memory.",
    url: "https://scholar.google.com/scholar?q=Unveiling%20Privacy%20Risks%20in%20LLM%20Agent%20Memory"
  },
  {
    title: "Securing RAG: A Taxonomy of Attacks, Defenses and Future Directions",
    type: "paper",
    topic: "RAG Security",
    year: 2026,
    desc: "Provides a taxonomy of RAG attacks and defenses. Its attack taxonomy informs OSAA against RAG agents.",
    url: "https://scholar.google.com/scholar?q=Securing%20RAG%3A%20A%20Taxonomy%20of%20Attacks%2C%20Defenses%20and%20Future%20Directions"
  },
  {
    title: "Extending OWASP's Multi-Agentic System Threat-Modeling Guide",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Extends OWASP threat modeling to multi-agent systems. Provides OSAA threat-model structure for agent swarms.",
    url: "https://scholar.google.com/scholar?q=Extending%20OWASP%27s%20Multi-Agentic%20System%20Threat-Modeling%20Guide"
  },
  {
    title: "Multi-Agent Systems Can Execute Arbitrary Malicious Code",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Shows multi-agent systems can be driven to run arbitrary malicious code. A high-severity OSAA multi-agent exploitation result.",
    url: "https://scholar.google.com/scholar?q=Multi-Agent%20Systems%20Can%20Execute%20Arbitrary%20Malicious%20Code"
  },
  {
    title: "Open Challenges in Multi-Agent Security",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Lays out open problems for securing systems of AI agents. Defines the OSAA research frontier for multi-agent attacks.",
    url: "https://scholar.google.com/scholar?q=Open%20Challenges%20in%20Multi-Agent%20Security"
  },
  {
    title: "Security of the Internet of Agents: Attacks and Countermeasures",
    type: "paper",
    topic: "Multi-Agent Security",
    year: 2025,
    desc: "Studies attacks on interconnected agent ecosystems. Maps OSAA attacks across agent networks.",
    url: "https://scholar.google.com/scholar?q=Security%20of%20the%20Internet%20of%20Agents%3A%20Attacks%20and%20Countermeasures"
  },
  {
    title: "PentestAgent: LLM Agents for Automated Penetration Testing (AsiaCCS 2025)",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "Multi-agent framework automating penetration testing. A core OSAA offensive-capability system.",
    url: "https://scholar.google.com/scholar?q=PentestAgent%3A%20LLM%20Agents%20for%20Automated%20Penetration%20Testing"
  },
  {
    title: "AutoPentester: An LLM-Agent Framework for Automated Pentesting",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Autonomous LLM penetration-testing framework. Advances automated OSAA offensive tooling.",
    url: "https://scholar.google.com/scholar?q=AutoPentester%3A%20An%20LLM-Agent%20Framework%20for%20Automated%20Pentesting"
  },
  {
    title: "Cybersecurity AI: The OT-Focused Top-10 Ranker (Dragos OT CTF)",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Applies agentic AI to operational-technology security in a CTF setting. Demonstrates OSAA agents in OT offense.",
    url: "https://scholar.google.com/scholar?q=Cybersecurity%20AI%3A%20The%20OT-Focused%20Top-10%20Ranker"
  },
  {
    title: "Dynamic Risk Assessments for Offensive Cybersecurity Agents",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Method for dynamically assessing the risk of offensive cyber agents. Helps scope and measure OSAA agent capability and danger.",
    url: "https://scholar.google.com/scholar?q=Dynamic%20Risk%20Assessments%20for%20Offensive%20Cybersecurity%20Agents"
  },
  {
    title: "xOffense: AI-Driven Autonomous Penetration Testing (Multi-Agent)",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Multi-agent system for autonomous penetration testing. Strengthens OSAA autonomous offense.",
    url: "https://scholar.google.com/scholar?q=xOffense%3A%20AI-Driven%20Autonomous%20Penetration%20Testing"
  },
  {
    title: "To Defend Against Cyber Attacks, Teach AI Agents to Hack",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2026,
    desc: "Argues for and builds offensively-trained agents to improve defense. Frames offensive agent training that is central to OSAA.",
    url: "https://scholar.google.com/scholar?q=To%20Defend%20Against%20Cyber%20Attacks%2C%20Teach%20AI%20Agents%20to%20Hack"
  },
  {
    title: "RedTeamLLM: An Agentic AI Framework for Offensive Security (IJCAI 2025)",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2025,
    desc: "Agentic framework orchestrating offensive-security tasks. A direct OSAA red-team automation framework.",
    url: "https://scholar.google.com/scholar?q=RedTeamLLM%3A%20An%20Agentic%20AI%20Framework%20for%20Offensive%20Security"
  },
  {
    title: "PentestGPT: An LLM-Empowered Automatic Penetration-Testing Tool (USENIX 2024)",
    type: "paper",
    topic: "Pentesting Frameworks",
    year: 2024,
    desc: "Influential LLM-driven automated penetration-testing tool. A foundational OSAA offensive agent.",
    url: "https://scholar.google.com/scholar?q=PentestGPT%3A%20An%20LLM-Empowered%20Automatic%20Penetration-Testing%20Tool"
  },
  {
    title: "AgentAuditor: Human-Level Safety and Security Evaluation of LLM Agents",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Framework for human-level auditing of agent safety and security. Improves the rigor of OSAA evaluation.",
    url: "https://scholar.google.com/scholar?q=AgentAuditor%3A%20Human-Level%20Safety%20and%20Security%20Evaluation%20of%20LLM%20Agents"
  },
  {
    title: "Hiding AI Traffic: Abusing MCP for LLM-Powered Agentic Red-Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Abuses the Model Context Protocol to conceal malicious agent traffic. A novel OSAA evasion technique via protocol abuse.",
    url: "https://scholar.google.com/scholar?q=Hiding%20AI%20Traffic%3A%20Abusing%20MCP%20for%20LLM-Powered%20Agentic%20Red-Teaming"
  },
  {
    title: "SIRAJ: Diverse, Efficient Red-Teaming of LLM Agents via Distilled Reasoning",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Efficient automated red-teaming using distilled reasoning. Scales OSAA agent red-teaming.",
    url: "https://scholar.google.com/scholar?q=SIRAJ%3A%20Diverse%2C%20Efficient%20Red-Teaming%20of%20LLM%20Agents%20via%20Distilled%20Reasoning"
  },
  {
    title: "PISmith: RL-Based Red-Teaming of Prompt-Injection Defenses",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "Uses reinforcement learning to break prompt-injection defenses. Automates OSAA attack discovery against defenses.",
    url: "https://scholar.google.com/scholar?q=PISmith%3A%20RL-Based%20Red-Teaming%20of%20Prompt-Injection%20Defenses"
  },
  {
    title: "A Red-Teaming Framework for Evaluating Robustness of AI Security Orchestration",
    type: "paper",
    topic: "Red Teaming",
    year: 2026,
    desc: "Framework to red-team AI security-orchestration systems. Extends OSAA to security-automation targets.",
    url: "https://scholar.google.com/scholar?q=A%20Red-Teaming%20Framework%20for%20Evaluating%20Robustness%20of%20AI%20Security%20Orchestration"
  },
  {
    title: "AgentVigil: Automatic Black-Box Red-Teaming for Indirect Prompt Injection",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Automatic black-box red-teaming for indirect injection on agents. Automated OSAA discovery of injection flaws.",
    url: "https://scholar.google.com/scholar?q=AgentVigil%3A%20Automatic%20Black-Box%20Red-Teaming%20for%20Indirect%20Prompt%20Injection"
  },
  {
    title: "Lessons from Red-Teaming 100 Generative AI Products",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Practitioner lessons from red-teaming 100 generative-AI products. Real-world OSAA red-team practice and pitfalls.",
    url: "https://scholar.google.com/scholar?q=Lessons%20from%20Red-Teaming%20100%20Generative%20AI%20Products"
  },
  {
    title: "OpenAI's Approach to External Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2024,
    desc: "Describes OpenAI's external red-teaming methodology. A reference for OSAA program design.",
    url: "https://scholar.google.com/scholar?q=OpenAI%27s%20Approach%20to%20External%20Red%20Teaming"
  },
  {
    title: "Red Teaming AI Red Teaming",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Critically examines the practice of AI red-teaming itself. Sharpens OSAA methodology and rigor.",
    url: "https://scholar.google.com/scholar?q=Red%20Teaming%20AI%20Red%20Teaming"
  },
  {
    title: "Red-Teaming LLM Multi-Agent Systems via Communication Attacks",
    type: "paper",
    topic: "Red Teaming",
    year: 2025,
    desc: "Attacks multi-agent systems through their communication channels. An OSAA technique for agent-to-agent compromise.",
    url: "https://scholar.google.com/scholar?q=Red-Teaming%20LLM%20Multi-Agent%20Systems%20via%20Communication%20Attacks"
  },
  {
    title: "LLM Agents Can Autonomously Hack Websites",
    type: "paper",
    topic: "Autonomous Exploitation",
    year: 2024,
    desc: "Demonstrates LLM agents autonomously exploiting real websites. Landmark proof of autonomous OSAA capability.",
    url: "https://scholar.google.com/scholar?q=LLM%20Agents%20Can%20Autonomously%20Hack%20Websites"
  },
  {
    title: "Teams of LLM Agents Can Exploit Zero-Day Vulnerabilities",
    type: "paper",
    topic: "Autonomous Exploitation",
    year: 2024,
    desc: "Shows teams of agents exploiting zero-day vulnerabilities. Escalates OSAA to coordinated zero-day exploitation.",
    url: "https://scholar.google.com/scholar?q=Teams%20of%20LLM%20Agents%20Can%20Exploit%20Zero-Day%20Vulnerabilities"
  },
  {
    title: "LLM Agents Can Leak Data: Exfiltration via Backdoored Tool Use",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "Exfiltrates data through backdoored agent tools. A concrete OSAA tool-based data-exfiltration attack.",
    url: "https://scholar.google.com/scholar?q=LLM%20Agents%20Can%20Leak%20Data%3A%20Exfiltration%20via%20Backdoored%20Tool%20Use"
  },
  {
    title: "Observable Channels: Privacy Leakage in LLM Agent Pipelines",
    type: "paper",
    topic: "Privacy & Exfiltration",
    year: 2026,
    desc: "Analyzes privacy-leakage channels in agent pipelines. Maps OSAA side-channel and exfiltration paths.",
    url: "https://scholar.google.com/scholar?q=Observable%20Channels%3A%20Privacy%20Leakage%20in%20LLM%20Agent%20Pipelines"
  },
  {
    title: "Agentic AI as a Cybersecurity Attack Surface",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Frames agentic AI itself as a new cybersecurity attack surface. A conceptual backbone for OSAA scoping.",
    url: "https://scholar.google.com/scholar?q=Agentic%20AI%20as%20a%20Cybersecurity%20Attack%20Surface"
  },
  {
    title: "MCP Threat Modeling: Vulnerabilities, Tool Poisoning and Prompt Injection",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Threat-models Model Context Protocol vulnerabilities including tool poisoning. Details OSAA protocol and supply-chain attacks.",
    url: "https://scholar.google.com/scholar?q=MCP%20Threat%20Modeling%3A%20Vulnerabilities%2C%20Tool%20Poisoning%20and%20Prompt%20Injection"
  },
  {
    title: "SoK: Security of Autonomous LLM Agents in Agentic Commerce",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Systematizes security of autonomous agents in commerce settings. Maps OSAA risks in transactional agent deployments.",
    url: "https://scholar.google.com/scholar?q=SoK%3A%20Security%20of%20Autonomous%20LLM%20Agents%20in%20Agentic%20Commerce"
  },
  {
    title: "Towards Secure Agent Skills: Architecture and Threat Taxonomy",
    type: "paper",
    topic: "Protocol Security",
    year: 2026,
    desc: "Proposes an architecture and threat taxonomy for agent 'skills'. Its threat taxonomy guides OSAA against skill ecosystems.",
    url: "https://scholar.google.com/scholar?q=Towards%20Secure%20Agent%20Skills%3A%20Architecture%20and%20Threat%20Taxonomy"
  },
  {
    title: "Towards Robust and Secure Embodied AI: A Survey of Vulnerabilities and Attacks",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2025,
    desc: "Surveys vulnerabilities and attacks on embodied AI systems. Extends OSAA to physical-world agents.",
    url: "https://scholar.google.com/scholar?q=Towards%20Robust%20and%20Secure%20Embodied%20AI%3A%20A%20Survey%20of%20Vulnerabilities%20and%20Attacks"
  },
  {
    title: "From Prompt to Physical Action: Backdoor Attacks on Embodied Agents",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "Backdoors that turn prompts into malicious physical actions. Demonstrates OSAA with kinetic, real-world impact.",
    url: "https://scholar.google.com/scholar?q=From%20Prompt%20to%20Physical%20Action%3A%20Backdoor%20Attacks%20on%20Embodied%20Agents"
  },
  {
    title: "What Breaks Embodied AI: LLM Vulnerabilities Meet Cyber-Physical Flaws",
    type: "paper",
    topic: "Embodied & Robotic Security",
    year: 2026,
    desc: "Analyzes how LLM weaknesses combine with cyber-physical system flaws. Maps compound OSAA risk in embodied systems.",
    url: "https://scholar.google.com/scholar?q=What%20Breaks%20Embodied%20AI%3A%20LLM%20Vulnerabilities%20Meet%20Cyber-Physical%20Flaws"
  },
  {
    title: "Security Challenges in AI Agent Deployment (Large-Scale Competition)",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2025,
    desc: "Reports security failures from a large-scale agent red-teaming competition. Empirical OSAA evidence at scale, with tens of thousands of successful attacks.",
    url: "https://scholar.google.com/scholar?q=Security%20Challenges%20in%20AI%20Agent%20Deployment"
  },
  {
    title: "Agent-Fence: Mapping Security Vulnerabilities of Deep-Research Agents",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Systematically maps the vulnerabilities of deep-research agents. An OSAA vulnerability assessment for research agents.",
    url: "https://scholar.google.com/scholar?q=Agent-Fence%3A%20Mapping%20Security%20Vulnerabilities%20of%20Deep-Research%20Agents"
  },
  {
    title: "Atomicity for Agents: TOCTOU Vulnerabilities in Browser-Use Agents",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Finds time-of-check/time-of-use race vulnerabilities in browser agents. Introduces a systems-level OSAA bug class for agents.",
    url: "https://scholar.google.com/scholar?q=Atomicity%20for%20Agents%3A%20TOCTOU%20Vulnerabilities%20in%20Browser-Use%20Agents"
  },
  {
    title: "LITMUS: Benchmarking Behavioral Jailbreaks of LLM Agents on a Real OS",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Benchmarks behavioral jailbreaks of agents operating a real OS. OSAA evaluation of OS-level agent compromise.",
    url: "https://scholar.google.com/scholar?q=LITMUS%3A%20Benchmarking%20Behavioral%20Jailbreaks%20of%20LLM%20Agents%20on%20a%20Real%20OS"
  },
  {
    title: "Security Considerations for Artificial Intelligence Agents",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Outlines security considerations and risks for AI agents. A reference framing for OSAA scoping.",
    url: "https://scholar.google.com/scholar?q=Security%20Considerations%20for%20Artificial%20Intelligence%20Agents"
  },
  {
    title: "Stop Fixating on Prompts: Reasoning-Hijacking Red-Teaming of LLM Agents",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Argues reasoning-level hijacking outperforms prompt-only attacks and red-teams it. Broadens OSAA beyond prompt injection.",
    url: "https://scholar.google.com/scholar?q=Stop%20Fixating%20on%20Prompts%3A%20Reasoning-Hijacking%20Red-Teaming%20of%20LLM%20Agents"
  },
  {
    title: "Taming OpenClaw: A Security Analysis of Autonomous LLM Agent Threats",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Security analysis of an autonomous agent's threat profile. A case-study OSAA threat enumeration.",
    url: "https://scholar.google.com/scholar?q=Taming%20OpenClaw%3A%20A%20Security%20Analysis%20of%20Autonomous%20LLM%20Agent%20Threats"
  },
  {
    title: "Trust No Tool: Evaluating LLM Agents Against Untrusted Feedback",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Evaluates agent susceptibility to untrusted tool feedback. Characterizes the OSAA untrusted-output attack surface.",
    url: "https://scholar.google.com/scholar?q=Trust%20No%20Tool%3A%20Evaluating%20LLM%20Agents%20Against%20Untrusted%20Feedback"
  },
  {
    title: "ASTRA: Agentic Steerability and Risk Assessment Framework",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2025,
    desc: "Framework for assessing agent steerability and risk. Supports OSAA risk and vulnerability assessment.",
    url: "https://scholar.google.com/scholar?q=ASTRA%3A%20Agentic%20Steerability%20and%20Risk%20Assessment%20Framework"
  },
  {
    title: "Bridging AI and Software Security: Comparative Vulnerability Assessment of LLM Agent Paradigms",
    type: "paper",
    topic: "Additional / Emerging",
    year: 2026,
    desc: "Compares vulnerability across different LLM-agent design paradigms. Guides OSAA vulnerability assessment across architectures.",
    url: "https://scholar.google.com/scholar?q=Bridging%20AI%20and%20Software%20Security%3A%20Comparative%20Vulnerability%20Assessment%20of%20LLM%20Agent%20Paradigms"
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
