# OffensiveAgentic — Drop-in Bundle v2

**Generated:** 2026-06-18 (v2)
**Total entries:** 880 (up from 734 in v1, up from 265 originally)
**Categories:** 11 ( Blogs + Newsletters merged into Blog Posts; new Courses category added)

## What changed in v2

### 1. Category restructure
- **Removed:** `blog` (32 entries) and `newsletter` (30 entries) types
- **Added:** `blog_post` type (62 remapped entries + 40 new podcasts = 102 total)
- **Added:** `course` type (106 new entries — SANS, OffSec, Microsoft, Google, AWS, HackTheBox, TryHackMe, DeepLearning.AI, etc.)
- Existing entries remapped: blog → blog_post (with "blog" tag added), newsletter → blog_post (with "newsletter" tag added)

### 2. Chip layout fix
- "By topic" chips on category pages no longer wrap into many rows
- They're now a single horizontal scrollable strip with hidden scrollbars
- Edge fade-out mask hints there's more to scroll
- Active chip auto-scrolls into view when selected
- Works on mobile (swipe) and desktop (click-drag / trackpad)
- Filter-row height: 55px (was previously 300-500px+ on Papers page with 20 topics)

### 3. Tutorials reorganized into 3 tabs
`tutorial.html` now has a tab switcher at the top:
- **Tab 1 — Quick Start** (existing 10-minute primer, preserved)
- **Tab 2 — Core Concepts** (new 30-minute deep beginner tutorial with 10 sections covering LLM internals, agent architecture, full attack surface, trust model problem, attack classification, defense stack, engagement lifecycle, tooling landscape, how to read red-team papers)
- **Tab 3 — OWASP Top 10 ASI Attacks** (new practical walk-through of all 10 OWASP Top 10 for Agentic Applications 2026 risks, with 3 interactive browser demos: AS01 Prompt Injection with 4 payload types, AS03 Excessive Agency with 3 agent configs, AS04 Cross-Session Memory Poisoning)

Tabs are shareable via URL hash: `tutorial.html#concepts`, `tutorial.html#owasp`.

## Files in this bundle

| File | Status | Description |
|------|--------|-------------|
| `data.js` | UPDATED (v2) | 880 entries (was 734 in v1, was 265 originally). All blog+newsletter remapped to blog_post. 146 new entries added (106 courses + 40 podcasts). |
| `config.js` | UPDATED (v2) | CATEGORIES: removed blog + newsletter, added blog_post + course. TREE: updated to reflect new structure (Blog Posts has Vendor blogs/Researcher blogs/Newsletters/Podcasts subgroups; Courses has Professional training/Vendor training/MOOCs/Certifications/Free open subgroups). |
| `tutorial.html` | UPDATED (v2) | 3-tab tutorial hub with Quick Start + Core Concepts + OWASP ASI Attacks. 10 risk cards, 3 interactive demos. |
| `app.js` | UPDATED (v2) | Added horizontal-scroll chip handling: auto-scroll active chip into view, .no-overflow class detection, font-ready re-check. |
| `style.css` | UPDATED (v2) | Chip container is now horizontal scroll (overflow-x: auto, nowrap, thin scrollbar, edge fade mask). Added tab styling (.tut-tabs, .tut-tab, .tut-panel). Added risk-card and risk-demo styling for the OWASP ASI tutorial. |
| `index.html` | UPDATED (v2) | Hardcoded fallback stat-total updated to 880. |
| `category.html` | UNCHANGED | (No edits needed — the chip container change is in CSS only) |
| `HOW-TO-EDIT.md` | UNCHANGED | (Still accurate — fields and structure unchanged) |
| `INSTALL.md` | NEW (v2) | This file |

## How to apply

### Option A — Drop-in replace (easiest)

```bash
git clone https://github.com/apowfour/Offensive-Security-of-Agentic-AI.git
cd Offensive-Security-of-Agentic-AI

# Back up the original files
cp data.js data.js.v1-backup
cp config.js config.js.v1-backup
cp tutorial.html tutorial.html.v1-backup
cp app.js app.js.v1-backup
cp style.css style.css.v1-backup
cp index.html index.html.v1-backup

# Copy the v2 bundle files over your repo
cp /path/to/bundle/data.js .
cp /path/to/bundle/config.js .
cp /path/to/bundle/tutorial.html .
cp /path/to/bundle/app.js .
cp /path/to/bundle/style.css .
cp /path/to/bundle/index.html .

# Verify locally
python3 -m http.server 8000
# Open http://localhost:8000 — should show "880 resources, 11 categories"
# Click Tutorial card — should show 3 tabs
# Click Research Papers — chip strip should be a single horizontal scroll

# Commit & push
git add data.js config.js tutorial.html app.js style.css index.html
git commit -m "v2: +146 courses+podcasts, merge blog+newsletter→blog_post, 3-tab tutorial, horizontal-scroll chips"
git push
```

### Option B — Apply changes incrementally

If you've made your own changes since v1 that you want to preserve, apply the v2 changes incrementally:

1. **data.js**: For each existing entry, if `type === "blog"` change to `"blog_post"` and add `"blog"` to tags. If `type === "newsletter"` change to `"blog_post"` and add `"newsletter"` to tags. Then append the 146 new entries from `/home/z/my-project/data/stream_H1.json`, `stream_H2.json`, `stream_H3.json`, `stream_I1.json`.

2. **config.js**: In CATEGORIES, delete the `blog` and `newsletter` rows. Add:
   ```js
   { type:"blog_post",  label:"Blog Posts",     icon:"news",           blurb:"Blogs, newsletters, and podcasts tracking the field." },
   { type:"course",     label:"Courses",        icon:"school",         blurb:"Training, certifications, and workshops on offensive AI security." }
   ```
   In TREE, replace the `blog` and `newsletter` blocks with:
   ```js
   { label:"Blog Posts", cat:"blog_post", children:[
     {label:"Vendor blogs"},
     {label:"Researcher blogs"},
     {label:"Newsletters"},
     {label:"Podcasts"}
   ]},
   { label:"Courses", cat:"course", children:[
     {label:"Professional training"},
     {label:"Vendor training"},
     {label:"MOOCs"},
     {label:"Certifications"},
     {label:"Free / open"}
   ]}
   ```

3. **app.js**: In `renderCategory()`, replace the existing `syncTopicChips` function (single line) with the expanded version that scrolls the active chip into view, and add the `checkOverflow` helper + listeners (see v2 app.js for exact code).

4. **style.css**: Replace the `.filter-row`, `.chips`, `.chip` block with the v2 version (horizontal scroll, mask, etc.). Append the new `.tut-tabs`, `.tut-tab`, `.tut-panel`, `.risk-card`, `.risk-demo`, `code.payload`, `code.defense` styles at the end.

5. **tutorial.html**: Replace entirely with the v2 version (3-tab structure).

6. **index.html**: Update `<b id="stat-total">0</b>` (or whatever the current number is) to `<b id="stat-total">880</b>`.

## Final stats by category

| Category | v1 | v2 | Δ |
|----------|-----|-----|---|
| Frameworks | 22 | 22 | 0 |
| Standards | 21 | 21 | 0 |
| Methodologies | 24 | 24 | 0 |
| Books | 33 | 33 | 0 |
| Tools | 77 | 77 | 0 |
| Benchmarks | 22 | 22 | 0 |
| Research Papers | 425 | 425 | 0 |
| Guides | 28 | 28 | 0 |
| Whitepapers | 21 | 21 | 0 |
| ~~Blogs~~ | ~~34~~ | — | merged |
| ~~Newsletters~~ | ~~30~~ | — | merged |
| **Blog Posts** (NEW, merged) | — | 102 | +102 (32 blogs + 30 newsletters + 40 new podcasts) |
| **Courses** (NEW) | — | 106 | +106 |
| **TOTAL** | **734** | **880** | **+146** |

## Tutorials added

| Tab | Title | Sections | Interactive demos |
|-----|-------|----------|-------------------|
| 1 | Quick Start (existing, preserved) | 6 | 1 (email-assistant indirect prompt injection) |
| 2 | Core Concepts (new) | 10 | 0 (conceptual deep-dive) |
| 3 | OWASP Top 10 ASI Attacks (new) | 10 risk cards | 3 (AS01 with 4 payloads, AS03 with 3 configs, AS04 with/without guardrail) |

## Verify locally

```bash
python3 -m http.server 8000
# Open http://localhost:8000 — verify:
#   - "880 resources, 11 categories" in hero
#   - 12 cards on home (Tutorial + 11 categories including Blog Posts + Courses)
#   - Tutorial page has 3 tabs that switch correctly
#   - Papers page chip strip is single horizontal scroll (not multi-row wrap)
#   - Blog Posts page shows ~102 entries (mix of blogs, newsletters, podcasts)
#   - Courses page shows ~106 entries
#   - URL hash works: tutorial.html#owasp jumps to tab 3
```

## Roll back

```bash
git checkout HEAD -- data.js config.js tutorial.html app.js style.css index.html
# Or if you used Option A with backups:
cp data.js.v1-backup data.js
cp config.js.v1-backup config.js
cp tutorial.html.v1-backup tutorial.html
cp app.js.v1-backup app.js
cp style.css.v1-backup style.css
cp index.html.v1-backup index.html
```
