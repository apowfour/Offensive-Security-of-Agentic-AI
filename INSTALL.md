# OffensiveAgentic — Drop-in Bundle

**Generated:** 2026-06-18
**Total entries after merge:** 734
**Original entries (pre-collection):** 265
**New entries added:** 473
**Templated descriptions fixed:** 166
**Pre-existing duplicate-URL pairs deduped:** 4

## What's in this bundle

| File | Status | Description |
|------|--------|-------------|
| `data.js` | UPDATED | 734 entries (was 265). All 168 templated descriptions replaced with real per-paper summaries. 4 pre-existing duplicate-URL pairs deduped. 473 new entries added. |
| `config.js` | UPDATED | Added 4 new paper topics to TREE: MCP Security, Agent Memory Attacks, Supply Chain Attacks, Side-channel Attacks |
| `index.html` | UPDATED | Hardcoded fallback stat-total updated from 265 to 734 |
| `category.html` | UNCHANGED | (No edits needed) |
| `tutorial.html` | UNCHANGED | (No edits needed) |
| `app.js` | UNCHANGED | (No edits needed) |
| `style.css` | UNCHANGED | (No edits needed) |
| `HOW-TO-EDIT.md` | UNCHANGED | (No edits needed) |
| `INSTALL.md` | NEW | This file |

## How to apply (3 options)

### Option A — Drop-in replace (easiest)

If you don't have any local changes you want to keep:

```bash
# Clone your repo
git clone https://github.com/apowfour/Offensive-Security-of-Agentic-AI.git
cd Offensive-Security-of-Agentic-AI

# Back up the original data.js (just in case)
cp data.js data.js.backup

# Copy the 3 updated files from this bundle over your repo
cp /path/to/bundle/data.js .
cp /path/to/bundle/config.js .
cp /path/to/bundle/index.html .

# Verify locally
python3 -m http.server 8000  # then visit http://localhost:8000

# Commit and push
git add data.js config.js index.html
git commit -m "Add 472 new entries + fix 168 templated descriptions + 4 new paper topics"
git push
```

Your live site at https://apowfour.github.io/Offensive-Security-of-Agentic-AI/ updates within ~1 minute.

### Option B — Use the patches instead (if you have local changes)

If you've made changes to `data.js` you want to preserve, use the patch files in the `download/` folder:

```bash
# 1. Apply description fixes (backs up to data.js.bak automatically)
python3 /path/to/download/apply_fixes.py /path/to/your/data.js

# 2. Open /path/to/download/new_resources.js
#    Copy everything between the BEGIN NEW ENTRIES and END NEW ENTRIES markers
#    Paste inside your RESOURCES array (after the last existing entry, before the closing ])

# 3. Manually add 4 new topics to config.js TREE under Research Papers.
#    See the snippet block below.

# 4. Update index.html: change the stat-total number from 265 to 734
```

The 4 new topics to add to config.js TREE under Research Papers:

```js
{label:"MCP Security", cat:"paper", topic:"MCP Security"},
{label:"Agent Memory Attacks", cat:"paper", topic:"Agent Memory Attacks"},
{label:"Supply Chain Attacks", cat:"paper", topic:"Supply Chain Attacks"},
{label:"Side-channel Attacks", cat:"paper", topic:"Side-channel Attacks"},
```

### Option C — Cherry-pick with git diff

```bash
# Initialize a fresh clone and copy bundle files in, then review diff
git clone https://github.com/apowfour/Offensive-Security-of-Agentic-AI.git
cd Offensive-Security-of-Agentic-AI
cp /path/to/bundle/data.js .
cp /path/to/bundle/config.js .
cp /path/to/bundle/index.html .
git diff  # review all changes before committing
```

## Pre-existing data issues that were fixed

During the merge, we found and fixed 4 duplicate-URL pairs in your original `data.js`. For each pair, we kept the better-titled entry and removed the duplicate:

| URL | Kept title | Removed duplicate |
|-----|------------|-------------------|
| https://arxiv.org/abs/2603.22489 | MCP Threat Modeling Vulnerabilities Tool Poisoning Prompt Injection | MCP Threat Modeling Tool Poisoning Prompt Injection |
| https://arxiv.org/abs/2604.05549 | Reasoning Hijacking Constraint Tightening RedTeaming LLM Agents | Stop Fixating Prompts Reasoning Hijacking RedTeaming LLM Agents |
| https://www.vectra.ai/topics/ai-red-teaming | AI Red Teaming: Tools, frameworks, and attack strategies explained | Vectra AI — AI security topics |
| https://repello.ai/blog/mitre-atlas-framework | MITRE ATLAS: AI Attack Techniques mapped to red-team operations | Repello AI Blog |

If you preferred the removed titles, you can rename them in `data.js` after applying the bundle.

## Final stats by category

| Category | Pre-collection | Added | Final |
|----------|---------------|-------|-------|
| Frameworks | 2 | 20 | 22 |
| Standards | 2 | 19 | 21 |
| Methodologies | 4 | 20 | 24 |
| Books | 0 | 33 | 33 |
| Tools | 42 | 35 | 77 |
| Benchmarks | 2 | 20 | 22 |
| Research Papers | 202 | 223 | 425 |
| Guides | 6 | 22 | 28 |
| Whitepapers | 1 | 20 | 21 |
| Blogs | 4 | 30 | 34 |
| Newsletters | 0 | 30 | 30 |
| **TOTAL** | **265** | **472** | **734** |

## Research Papers breakdown by topic (final)

| Topic | Pre-collection | Added | Final |
|-------|----------------|-------|-------|
| Red Teaming | 31 | 7 | 38 |
| Benchmarks | 27 | 7 | 34 |
| Misc Attacks and Other | 22 | 6 | 28 |
| Surveys | 19 | 7 | 26 |
| Pentesting Frameworks | 19 | 7 | 26 |
| Jailbreaking | 16 | 7 | 23 |
| Offensive Cyber / CTF / CVE | 12 | 7 | 19 |
| Protocol Security | 10 | 6 | 16 |
| Prompt Injection | 9 | 10 | 19 |
| Multi-Agent Security | 9 | 7 | 16 |
| Backdoor and Poisoning | 7 | 7 | 14 |
| Computer-Use and Web Agents | 7 | 6 | 13 |
| Privacy and Exfiltration | 4 | 7 | 11 |
| Embodied and Robotic Security | 4 | 7 | 11 |
| RAG Security | 3 | 7 | 10 |
| Threat Modeling | 3 | 7 | 10 |
| **MCP Security** (NEW) | 0 | 36 | 36 |
| **Agent Memory Attacks** (NEW) | 0 | 26 | 26 |
| **Supply Chain Attacks** (NEW) | 0 | 26 | 26 |
| **Side-channel Attacks** (NEW) | 0 | 23 | 23 |
| **TOTAL** | **202** | **223** | **425** |

## Verify locally

After copying the bundle files into your repo, verify everything works:

```bash
# Visual check — open the site in your browser
python3 -m http.server 8000
# Open http://localhost:8000 in your browser
# You should see 734 resources total on the homepage hero
```

## Roll back

If anything breaks:

```bash
git checkout HEAD -- data.js config.js index.html
# Or if you used Option A:
cp data.js.backup data.js
```
