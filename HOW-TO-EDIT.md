# How to edit OffensiveAgentic

Plain static files — **no build step**. To preview, double-click `index.html`.

## The files

| File | What it is | Touch it? |
|------|------------|-----------|
| `data.js` | All your content (the reference entries) | ✅ Yes — your main job |
| `config.js` | Category list + the home-page hierarchy tree | Sometimes |
| `index.html` | Home page (category cards + tree) | No |
| `category.html` | The shared template for every category page | No |
| `tutorial.html` | The beginner tutorial + interactive demo | To edit lesson text |
| `app.js` | Rendering logic | No |
| `style.css` | The design | Almost never |

How it fits together: the home page shows one card per category and a hierarchy tree. Clicking a category card opens `category.html?cat=TYPE`, which shows search + every entry of that type. Empty categories are hidden automatically.

---

## Add a new reference (the main thing you'll do)

Open **`data.js`**, copy this block, paste it inside the `[ ... ]`, fill it in, save:

```js
,{
  title: "Name of the resource",
  type: "tool",
  org: "Who made it",
  year: 2026,
  desc: "One or two plain sentences.",
  url: "https://link-here.com",
  tags: ["prompt injection", "scanner"]
}
```

The entry instantly appears on the matching category page, and its `tags` become topic filters there.

### `type` decides which page it lands on
Use exactly one of:

`framework` · `standard` · `methodology` · `book` · `tool` · `benchmark` · `paper` · `guide` · `whitepaper` · `blog` · `newsletter`


### Research Papers: topic + year
Paper entries have an extra `topic:` field (your PAPERS subfolder, e.g. `"Prompt Injection"`). The Research Papers page can group **by topic** or **by year** (toggle at the top), and each topic is a filter. To add a paper:

```js
,{
  title: "Paper title",
  type: "paper",
  topic: "Prompt Injection",
  year: 2026,
  desc: "One sentence on what it is. One sentence on its OSAA contribution.",
  url: "https://link-or-scholar-search"
}
```

To add a new paper topic, just use a new `topic` value and (optionally) add it under Research Papers in `config.js`'s `TREE`.

### Optional: mark an essential
Add `start: true,` to give an entry a ★ Start here badge.

### Small rules
- Every block needs a comma `,` before it (except the first).
- `title`, `type`, `url` are required; the rest optional.
- Keep `desc` neutral and short.

---

## Add a whole new category
1. In **`config.js`**, add a row to `CATEGORIES` (set `type`, `label`, an `icon` from tabler.io/icons, and a `blurb`).
2. Use that new `type` on entries in `data.js`. Done — a card and page appear automatically.

## Edit the hierarchy tree
The tree is the `TREE` list in **`config.js`**. Its top level mirrors the main categories; each has sub-group labels you can rename or extend later. A node links to its category page via `cat:"tool"`, or to any URL via `url:"https://…"`. Nest more levels with `children:[...]`.

## Edit the tutorial
Lesson text lives directly in **`tutorial.html`** (plain HTML sections). The interactive attack demo is the `<script>` at the bottom of that file — you rarely need to touch it.

---

## Publish
On GitHub Pages: edit a file on github.com → Commit → the live site updates in about a minute.
