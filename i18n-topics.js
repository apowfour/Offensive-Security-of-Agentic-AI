/* ============================================================
   Topic label translations (Arabic + English)
   ------------------------------------------------------------
   Most paper topics are tech/cybersecurity terms that stay
   in English per the user's spec. Only the "general" ones
   get Arabic translations.
   ============================================================ */
const TOPIC_LABELS = {
  // Pure tech terms — keep in English in both languages
  "Prompt Injection":           { ar: "Prompt Injection",           en: "Prompt Injection" },
  "Jailbreaking":               { ar: "Jailbreaking",               en: "Jailbreaking" },
  "Backdoor & Poisoning":       { ar: "Backdoor & Poisoning",       en: "Backdoor & Poisoning" },
  "RAG Security":               { ar: "RAG Security",               en: "RAG Security" },
  "Multi-Agent Security":       { ar: "Multi-Agent Security",       en: "Multi-Agent Security" },
  "Pentesting Frameworks":      { ar: "Pentesting Frameworks",      en: "Pentesting Frameworks" },
  "Red Teaming":                { ar: "Red Teaming",                en: "Red Teaming" },
  "Offensive Cyber / CTF / CVE":{ ar: "Offensive Cyber / CTF / CVE",en: "Offensive Cyber / CTF / CVE" },
  "Privacy & Exfiltration":     { ar: "Privacy & Exfiltration",     en: "Privacy & Exfiltration" },
  "Protocol Security":          { ar: "Protocol Security",          en: "Protocol Security" },
  "Embodied & Robotic Security":{ ar: "Embodied & Robotic Security",en: "Embodied & Robotic Security" },
  "Threat Modeling":            { ar: "Threat Modeling",            en: "Threat Modeling" },
  "Computer-Use & Web Agents":  { ar: "Computer-Use & Web Agents",  en: "Computer-Use & Web Agents" },
  "MCP Security":               { ar: "MCP Security",               en: "MCP Security" },
  "Agent Memory Attacks":       { ar: "Agent Memory Attacks",       en: "Agent Memory Attacks" },
  "Supply Chain Attacks":       { ar: "Supply Chain Attacks",       en: "Supply Chain Attacks" },
  "Side-channel Attacks":       { ar: "Side-channel Attacks",       en: "Side-channel Attacks" },
  "Benchmarks":                 { ar: "Benchmarks",                 en: "Benchmarks" },
  // More general terms — translate
  "Surveys":                    { ar: "استبيانات",                  en: "Surveys" },
  "Misc Attacks & Other":       { ar: "هجمات متنوعة وأخرى",         en: "Misc Attacks & Other" },
};

/* Helper: get topic label in current language */
function topicLabel(topic) {
  if (!topic) return '';
  const entry = TOPIC_LABELS[topic];
  if (!entry) return topic; // fallback: use raw string
  const lang = (typeof i18n !== 'undefined') ? i18n.getLang() : 'ar';
  return entry[lang] || entry.en;
}

/* Helper: get category label in current language */
function catLabel(cat) {
  if (!cat) return '';
  const lang = (typeof i18n !== 'undefined') ? i18n.getLang() : 'ar';
  return lang === 'ar' ? (cat.label_ar || cat.label) : cat.label;
}

/* Helper: get category blurb in current language */
function catBlurb(cat) {
  if (!cat) return '';
  const lang = (typeof i18n !== 'undefined') ? i18n.getLang() : 'ar';
  return lang === 'ar' ? (cat.blurb_ar || cat.blurb) : cat.blurb;
}

/* Helper: get tree node label in current language */
function treeNodeLabel(node) {
  if (!node) return '';
  const lang = (typeof i18n !== 'undefined') ? i18n.getLang() : 'ar';
  return lang === 'ar' ? (node.label_ar || node.label) : node.label;
}
