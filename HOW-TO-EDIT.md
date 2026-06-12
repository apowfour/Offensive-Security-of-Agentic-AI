# How to edit OffensiveAgentic

Your whole site is **3 files**. You only ever touch one of them.

| File | What it is | Touch it? |
|------|------------|-----------|
| `data.js` | All your content (the reference blocks) | ✅ Yes — this is your job |
| `index.html` | Page skeleton + the mind-map outline | Rarely |
| `style.css` | The design | Almost never |

No build step, no MkDocs, no Python. To preview, just **double-click `index.html`** — it opens in your browser.

---

## Add a new reference (the main thing you'll do)

1. Open **`data.js`** in any text editor (or on GitHub, click the pencil ✏️).
2. Copy this block and paste it inside the `[ ... ]`, above the "ADD NEW ENTRIES ABOVE THIS LINE" comment:

```js
,{
  title: "Name of the resource",
  type: "tool",
  org: "Who made it",
  year: 2026,
  desc: "One or two plain sentences describing it.",
  url: "https://link-here.com",
  tags: ["keyword", "another keyword"]
}
```

3. Fill in the fields. Save. Done — the new card appears automatically, joins its category, and becomes searchable.


### Mark a resource as "essential" (optional)
Add `start: true,` to a block to give it a ★ Start here badge and include it in the Essentials filter / step 1 of the path. Use it sparingly — only for the few must-reads in each area.

### The `type` field controls the category and the filter buttons
Use one of these exact words:

`framework` · `methodology` · `tool` · `benchmark` · `paper` · `guide` · `book` · `course` · `media` · `blog`

(Want a brand-new category, e.g. `podcast`? Just use it as the `type`. To give it a nice label and a filter button, add one line to the `TYPE_LABELS` list near the top of `index.html`.)

### Small rules that keep it clean
- Every block needs a comma `,` before it (except the very first one).
- `title`, `type`, and `url` are required; `org`, `year`, `desc`, `tags` are optional.
- Keep `desc` neutral and short — describe, don't advertise.

---

## Edit the mind map
The outline lives inside `index.html` in the `<script type="text/template">` block (search for "Offensive Security of Agentic AI"). Add a line with `###` under the right `##` heading and it appears as a new branch.

---

## Publish changes
If the site is on GitHub Pages: editing `data.js` on github.com and clicking **Commit** updates the live site in under a minute. That's the whole workflow.
