/* ============================================================
   OffensiveAgentic — shared rendering logic. No need to edit.
   ============================================================ */

const TYPE_LABEL = {};
CATEGORIES.forEach(c => TYPE_LABEL[c.type] = c.label);

function countFor(type){ return RESOURCES.filter(r => r.type === type).length; }
function escapeHtml(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

/* ---------- shared card markup ---------- */
function cardHTML(r){
  const tags=(r.tags||[]).map(t=>`<span class="tag" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</span>`).join("");
  const org=[r.org,r.year].filter(Boolean).join(" · ");
  const startTag = r.start ? `<span class="start-tag">★ Start here</span>` : "";
  return `<article class="card${r.start?' is-start':''}">
    <div class="badges"><span class="type">${TYPE_LABEL[r.type]||r.type}</span>${startTag}</div>
    <h3><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(r.title)}</a></h3>
    ${org?`<p class="org">${escapeHtml(org)}</p>`:""}
    <p class="desc">${escapeHtml(r.desc||"")}</p>
    <a class="go" href="${r.url}" target="_blank" rel="noopener">Open <span class="arrow">→</span></a>
    ${tags?`<div class="tags">${tags}</div>`:""}
  </article>`;
}

/* ============================================================
   HOME PAGE
   ============================================================ */
function renderHome(){
  // category cards (hide empty categories)
  const cardsEl = document.getElementById("cat-cards");
  const tutorialCard = `<a class="cat-card cat-card--tutorial" href="tutorial.html">
      <span class="cat-ic"><i class="ti ti-compass"></i></span>
      <span class="cat-name">Tutorial</span>
      <span class="cat-blurb">New to the topic? A 10-minute primer ending in a hands-on attack demo.</span>
      <span class="cat-count">Start learning →</span>
    </a>`;
  cardsEl.innerHTML = tutorialCard + CATEGORIES.filter(c => countFor(c.type) > 0).map(c => {
    const n = countFor(c.type);
    return `<a class="cat-card" href="category.html?cat=${c.type}">
      <span class="cat-ic"><i class="ti ti-${c.icon}"></i></span>
      <span class="cat-name">${c.label}</span>
      <span class="cat-blurb">${c.blurb}</span>
      <span class="cat-count">${n} resource${n===1?"":"s"} →</span>
    </a>`;
  }).join("");

  document.getElementById("stat-total").textContent = RESOURCES.length;
  document.getElementById("stat-cats").textContent = CATEGORIES.filter(c=>countFor(c.type)>0).length;

  // hierarchy tree
  const treeEl = document.getElementById("tree");
  treeEl.innerHTML = `<ul class="tree-root">${TREE.map(n=>treeNode(n,true)).join("")}</ul>`;
  treeEl.addEventListener("click", e => {
    const tog = e.target.closest(".tree-toggle");
    if(tog){ tog.parentElement.classList.toggle("open"); }
  });
}

function treeNode(node, topLevel){
  const link = node.cat ? `category.html?cat=${node.cat}` : node.url || null;
  const labelHtml = link
    ? `<a class="tree-link" href="${link}"${node.url?' target="_blank" rel="noopener"':''}>${escapeHtml(node.label)}</a>`
    : `<span class="tree-text">${escapeHtml(node.label)}</span>`;
  if(node.children && node.children.length){
    return `<li class="tree-branch">
      <span class="tree-toggle"><i class="ti ti-chevron-right tw"></i>${labelHtml}</span>
      <ul>${node.children.map(c=>treeNode(c,false)).join("")}</ul>
    </li>`;
  }
  return `<li class="tree-leaf"><span class="tree-dot"></span>${labelHtml}</li>`;
}

/* ============================================================
   CATEGORY PAGE  (category.html?cat=TYPE)
   ============================================================ */
function getParam(name){ return new URLSearchParams(location.search).get(name); }

function renderCategory(){
  const type = getParam("cat");
  const cat = CATEGORIES.find(c => c.type === type);
  const items = RESOURCES.filter(r => r.type === type);

  // header
  const cl = cat ? cat.label : "Unknown category";
  document.getElementById("cat-title").innerHTML =
    `<span class="cat-ic big"><i class="ti ti-${cat?cat.icon:'help'}"></i></span> ${cl}`;
  document.getElementById("cat-desc").textContent = cat ? cat.blurb : "";
  document.title = `${cl} — OffensiveAgentic`;

  let activeTopic = null, query = "";
  const grid = document.getElementById("grid");
  const empty = document.getElementById("empty");
  const countLine = document.getElementById("count-line");
  const topicChips = document.getElementById("topic-chips");

  // topic chips from this category's tags
  const freq={}; items.forEach(r=>(r.tags||[]).forEach(t=>freq[t]=(freq[t]||0)+1));
  const topics=Object.entries(freq).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
  if(topics.length){
    topicChips.innerHTML = topics.map(t=>`<button class="chip topic" data-topic="${escapeHtml(t)}">${escapeHtml(t)}<span class="count">${freq[t]}</span></button>`).join("");
  } else {
    topicChips.parentElement.style.display="none";
  }

  function matches(r){
    if(activeTopic && !(r.tags||[]).includes(activeTopic)) return false;
    if(query){
      const hay=[r.title,r.org,r.desc,(r.tags||[]).join(" ")].join(" ").toLowerCase();
      if(!hay.includes(query)) return false;
    }
    return true;
  }
  function draw(){
    const list = items.filter(matches);
    grid.innerHTML = list.map(cardHTML).join("");
    empty.style.display = list.length ? "none" : "block";
    const f=[]; if(activeTopic) f.push("topic: "+activeTopic); if(query) f.push(`“${query}”`);
    countLine.textContent = `Showing ${list.length} of ${items.length}${f.length?" — "+f.join(" · "):""}.`;
  }

  document.getElementById("search").addEventListener("input", e=>{ query=e.target.value.trim().toLowerCase(); draw(); });
  topicChips.addEventListener("click", e=>{
    const b=e.target.closest(".chip"); if(!b) return;
    activeTopic = activeTopic===b.dataset.topic ? null : b.dataset.topic;
    [...topicChips.children].forEach(c=>c.classList.toggle("active", c.dataset.topic===activeTopic));
    draw();
  });
  grid.addEventListener("click", e=>{
    const tg=e.target.closest(".tag"); if(!tg) return;
    activeTopic=tg.dataset.tag;
    [...topicChips.children].forEach(c=>c.classList.toggle("active", c.dataset.topic===activeTopic));
    draw(); window.scrollTo({top:0,behavior:"smooth"});
  });

  draw();
}
