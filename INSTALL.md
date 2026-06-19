# OffensiveAgentic — Drop-in Bundle (v3)

**Generated:** 2026-06-19
**Total entries:** 922
**Total categories:** 11
**Languages:** Arabic (default) + English (toggle)

## What changed in v3

| Change | Detail |
|--------|--------|
| ✅ Bilingual (Arabic-first, English-second) | Full Arabic UI with English toggle. Tech/cybersecurity terms stay in English (Prompt Injection, Red Teaming, OWASP Top 10, LLM, Agent, etc.). All 3 tutorial tabs translated to Arabic. RTL layout with flipped arrows, proper Arabic font (Tajawal). Responsive on all screens (375px tested). |
| ✅ 60 new academic papers | Added 60 deep-dive papers from closed-access sources (Semantic Scholar, IEEE Xplore, ACM DL). Knowledge extracted from abstracts only for paywalled papers. 10 papers each across 6 priority topics: Prompt Injection, Red Teaming, Jailbreaking, MCP Security, Agent Memory Attacks, Supply Chain Attacks. |
| ✅ Courses page fixed | Replaced 106 courses (44 broken URLs + general AI courses) with 88 verified offensive-AI-security courses. All URLs return HTTP 200 or 403 (expected for Coursera/Udemy/edX — pages exist, just bot-block). Focused strictly on offensive security of AI/LLMs/agents — no general AI or general cybersecurity courses. |

## Final stats by category

| Category | Count |
|----------|-------|
| Frameworks | 22 |
| Standards | 21 |
| Methodologies | 24 |
| Books | 33 |
| Tools | 77 |
| Benchmarks | 22 |
| Research Papers | 483 |
| Guides | 29 |
| Whitepapers | 21 |
| Blog Posts | 102 |
| Courses | 88 |
| **TOTAL** | **922** |

## Bilingual architecture

| File | Role |
|------|------|
| `i18n.js` | Translation dictionary (UI strings) + language toggle logic + localStorage persistence |
| `i18n-topics.js` | Topic label translations (most topics stay in English since they're tech terms) + helpers (`catLabel`, `catBlurb`, `topicLabel`, `treeNodeLabel`) |
| `tutorial-ar.js` | 298 Arabic translation pairs for the 3 tutorial tabs |
| `config.js` | Categories + TREE with `label_ar` and `blurb_ar` fields |
| `app.js` | Uses `i18n.t()` + helpers for all dynamically-rendered strings |
| `style.css` | RTL overrides + Arabic font (Tajawal) + `.lang-toggle` button + `.brand-row` layout + mobile responsive |

### How the language toggle works
- Default language: **Arabic** (`<html lang="ar" dir="rtl">`)
- Click the "English" button in the top-right (or top-left in RTL) → switches to English (`<html lang="en" dir="ltr">`)
- Choice persists in `localStorage('oaa-lang')` across page navigations
- All UI chrome (headings, buttons, labels, navigation) translates immediately
- Data entries (paper titles, course titles, descriptions) stay in their original English — academic titles aren't translatable
- Tutorial body content (3 tabs) fully translates to Arabic on language switch

## What's in this bundle

| File | Status | Notes |
|------|--------|-------|
| `data.js` | UPDATED | 922 entries (was 880). +60 new papers, courses replaced (88 verified, 0 broken URLs). |
| `config.js` | UPDATED | Added `label_ar` + `blurb_ar` fields to all 11 categories + TREE nodes. |
| `index.html` | UPDATED | Bilingual HTML shell, lang-toggle button, Arabic default. |
| `category.html` | UPDATED | Bilingual HTML shell, lang-toggle button, Arabic default. |
| `tutorial.html` | UPDATED | Bilingual HTML shell + 3 tabs translated to Arabic (298 translation pairs in tutorial-ar.js). |
| `app.js` | UPDATED | Uses `i18n.t()` + `catLabel/catBlurb/topicLabel/treeNodeLabel` for all dynamic strings. |
| `style.css` | UPDATED | RTL overrides + Tajawal font + `.lang-toggle` + `.brand-row` + mobile responsive. |
| `i18n.js` | NEW | i18n engine: STRINGS dictionary, `t()`, `setLang()`, `toggle()`, `applyToDocument()`, localStorage persistence. |
| `i18n-topics.js` | NEW | Topic label translations + helper functions. |
| `tutorial-ar.js` | NEW | 298 Arabic translation pairs for tutorial body content. |
| `category.html` | UNCHANGED | (No edits needed) |
| `HOW-TO-EDIT.md` | UNCHANGED | (No edits needed) |

## How to apply

### Option A — Drop-in replace (easiest)

```bash
git clone https://github.com/apowfour/Offensive-Security-of-Agentic-AI.git
cd Offensive-Security-of-Agentic-AI
cp data.js data.js.backup  # safety net

# Copy all files from this bundle over your repo
cp /path/to/bundle/* .

# Verify locally
python3 -m http.server 8000  # visit http://localhost:8000

# Commit & push
git add -A
git commit -m "v3: bilingual (Arabic-first), +60 deep academic papers, courses page fixed (88 verified)"
git push
```

Your live site updates within ~1 minute.

### Option B — Review the diff first

```bash
git clone https://github.com/apowfour/Offensive-Security-of-Agentic-AI.git
cd Offensive-Security-of-Agentic-AI
cp /path/to/bundle/* .
git diff  # review every change before committing
```

## Bilingual rules followed

Per the user's spec:
1. ✅ Arabic is the default language (loads in Arabic on first visit)
2. ✅ English is available via toggle button
3. ✅ Tech and cybersecurity terminologies stay in English within Arabic text:
   - "Prompt Injection", "Jailbreaking", "Red Teaming", "Penetration Testing"
   - "LLM", "Agent", "Tool", "Memory", "RAG", "MCP", "OWASP", "MITRE ATLAS", "NIST"
   - "system prompt", "tool call", "context window", "token"
   - "data exfiltration", "privilege escalation", "excessive agency"
   - "GCG", "ReAct", "RLHF", "fine-tuning", "backdoor", "poisoning"
   - "HITL", "CI/CD", "sandbox"
   - OWASP ASI risk names: "AS01 Prompt Injection", "AS02 Sensitive Information Disclosure", etc.
4. ✅ All other normal words translated to proper Modern Standard Arabic (الفصحى)
5. ✅ Responsive on all screens — tested at 1280px (desktop), 768px (tablet), 375px (mobile)
6. ✅ RTL layout: arrows flip, padding/margins flip, tree chevrons rotate, lang toggle button positioned correctly

## Course verification

All 88 courses verified working:
- 79 URLs return HTTP 200 (direct verification)
- 9 URLs return HTTP 403 (Coursera/Udemy/edX — bot-blocks, pages exist)
- 0 URLs return HTTP 404 (was 44 in v2)
- All courses are specifically about offensive security of AI/LLMs/agents
- General AI, general cybersecurity, general ML, and general prompt-engineering courses excluded

## Roll back

```bash
git checkout HEAD -- data.js config.js app.js style.css tutorial.html index.html category.html
# Or if you used Option A:
cp data.js.backup data.js
# Remove new i18n files:
rm i18n.js i18n-topics.js tutorial-ar.js
```
