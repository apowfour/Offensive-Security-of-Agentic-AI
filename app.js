/* ============================================================
   OffensiveAgentic — shared rendering logic. No need to edit.
   Bilingual: uses i18n.t() for UI strings, catLabel/catBlurb/
   topicLabel/treeNodeLabel for category/topic labels.
   ============================================================ */

function countFor(type){ return RESOURCES.filter(r => r.type === type).length; }
function escapeHtml(s){ return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function tt(key){ return (typeof i18n !== 'undefined') ? i18n.t(key) : key; }

/* ---------- shared card markup ---------- */
function cardHTML(r){
  const tags=(r.tags||[]).map(t=>`<span class="tag" data-tag="${escapeHtml(t)}">${escapeHtml(t)}</span>`).join("");
  const org=[r.org,r.year].filter(Boolean).join(" · ");
  const startTag = r.start ? `<span class="start-tag">${tt('category.card.startHere')}</span>` : "";
  const cat = CATEGORIES.find(c => c.type === r.type);
  const typeLabel = cat ? catLabel(cat) : r.type;
  const topicBadge = r.topic ? `<span class="topic-badge">${escapeHtml(topicLabel(r.topic))}</span>` : "";
  // Use Arabic title/desc if available and current language is Arabic
  const lang = (typeof i18n !== 'undefined') ? i18n.getLang() : 'ar';
  const title = (lang === 'ar' && r.title_ar) ? r.title_ar : r.title;
  const desc = (lang === 'ar' && r.desc_ar) ? r.desc_ar : (r.desc || "");
  return `<article class="card${r.start?' is-start':''}">
    <div class="badges"><span class="type">${escapeHtml(typeLabel)}</span>${topicBadge}${startTag}</div>
    <h3><a href="${r.url}" target="_blank" rel="noopener">${escapeHtml(title)}</a></h3>
    ${org?`<p class="org">${escapeHtml(org)}</p>`:""}
    <p class="desc">${escapeHtml(desc)}</p>
    <a class="go" href="${r.url}" target="_blank" rel="noopener">${tt('category.card.open')} <span class="arrow">→</span></a>
    ${tags?`<div class="tags">${tags}</div>`:""}
  </article>`;
}

/* ============================================================
   HOME PAGE
   ============================================================ */
function renderHome(){
  const cardsEl = document.getElementById("cat-cards");
  const tutorialCard = `<a class="cat-card cat-card--tutorial" href="tutorial.html">
      <span class="cat-ic"><i class="ti ti-compass"></i></span>
      <span class="cat-name">${tt('home.tutorial.label')}</span>
      <span class="cat-blurb">${tt('home.tutorial.blurb')}</span>
      <span class="cat-count">${tt('home.tutorial.cta')}</span>
    </a>`;
  cardsEl.innerHTML = tutorialCard + CATEGORIES.filter(c => countFor(c.type) > 0).map(c => {
    const n = countFor(c.type);
    const resourceWord = (typeof i18n !== 'undefined' && i18n.getLang() === 'ar')
      ? (n === 1 ? 'مورد' : 'موردًا')
      : (n === 1 ? 'resource' : 'resources');
    return `<a class="cat-card" href="category.html?cat=${c.type}">
      <span class="cat-ic"><i class="ti ti-${c.icon}"></i></span>
      <span class="cat-name">${escapeHtml(catLabel(c))}</span>
      <span class="cat-blurb">${escapeHtml(catBlurb(c))}</span>
      <span class="cat-count">${n} ${resourceWord} <span class="arrow" aria-hidden="true">→</span></span>
    </a>`;
  }).join("");

  document.getElementById("stat-total").textContent = RESOURCES.length;
  document.getElementById("stat-cats").textContent = CATEGORIES.filter(c=>countFor(c.type)>0).length;

  // hierarchy tree
  const treeEl = document.getElementById("tree");
  treeEl.innerHTML = `<ul class="tree-root">${TREE.map(n=>treeNode(n,true)).join("")}</ul>`;
  // Re-apply i18n to any newly-rendered [data-i18n] elements (none here, but safe)
  if (typeof i18n !== 'undefined') i18n.applyToDocument();
  treeEl.addEventListener("click", e => {
    const tog = e.target.closest(".tree-toggle");
    if(tog){ tog.parentElement.classList.toggle("open"); }
  });
}

function treeNode(node, topLevel){
  const link = node.cat ? `category.html?cat=${node.cat}${node.topic?"&topic="+encodeURIComponent(node.topic):""}` : node.url || null;
  const label = treeNodeLabel(node);
  const labelHtml = link
    ? `<a class="tree-link" href="${link}"${node.url?' target="_blank" rel="noopener"':''}>${escapeHtml(label)}</a>`
    : `<span class="tree-text">${escapeHtml(label)}</span>`;
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
  const isPapers = (type === "paper");

  const cl = cat ? catLabel(cat) : (typeof i18n !== 'undefined' && i18n.getLang() === 'ar' ? 'فئة غير معروفة' : 'Unknown category');
  document.getElementById("cat-title").innerHTML =
    `<span class="cat-ic big"><i class="ti ti-${cat?cat.icon:'help'}"></i></span> ${escapeHtml(cl)}`;
  document.getElementById("cat-desc").textContent = cat ? catBlurb(cat) : "";
  document.title = `${cl} — OffensiveAgentic`;

  // Update search placeholder to current language
  const searchInput = document.getElementById("search");
  if (searchInput) searchInput.placeholder = tt('category.search.placeholder');

  const grid = document.getElementById("grid");
  grid.classList.remove("grid");
  const empty = document.getElementById("empty");
  const countLine = document.getElementById("count-line");
  const topicChips = document.getElementById("topic-chips");

  let activeTopic = isPapers ? (getParam("topic") || null) : null;
  let query = "";

  // ---- topic chips ----
  const COLLAPSE_THRESHOLD = 6;
  let topicOrder = [];
  let chipsExpanded = false;
  let chipEntries = [];
  if(isPapers){
    items.forEach(r => { if(r.topic && !topicOrder.includes(r.topic)) topicOrder.push(r.topic); });
    chipEntries = topicOrder.map(t => ({key: t, label: topicLabel(t), count: items.filter(r=>r.topic===t).length}));
  } else {
    const freq={}; items.forEach(r=>(r.tags||[]).forEach(t=>freq[t]=(freq[t]||0)+1));
    const tags=Object.entries(freq).sort((a,b)=>b[1]-a[1]).map(x=>x[0]);
    chipEntries = tags.map(t => ({key: t, label: t, count: freq[t]}));
  }

  function renderChips(){
    if(chipEntries.length === 0){
      topicChips.parentElement.style.display="none";
      return;
    }
    const chips = chipEntries.map(e =>
      `<button class="chip topic" data-topic="${escapeHtml(e.key)}">${escapeHtml(e.label)}<span class="count">${e.count}</span></button>`
    ).join("");
    const needToggle = chipEntries.length > COLLAPSE_THRESHOLD;
    const moreLabel = tt('category.chip.more').replace('+N more', `+${chipEntries.length - COLLAPSE_THRESHOLD} ${typeof i18n !== 'undefined' && i18n.getLang() === 'ar' ? 'المزيد' : 'more'}`);
    const lessLabel = tt('category.chip.less');
    const toggleBtn = needToggle
      ? `<button class="chip chip-toggle" id="chip-toggle" aria-expanded="${chipsExpanded}">
           ${chipsExpanded
             ? `<i class="ti ti-chevron-up"></i> ${lessLabel}`
             : `<i class="ti ti-chevron-down"></i> +${chipEntries.length - COLLAPSE_THRESHOLD} ${typeof i18n !== 'undefined' && i18n.getLang() === 'ar' ? 'المزيد' : 'more'}`}
         </button>`
      : "";
    topicChips.innerHTML = chips + toggleBtn;
    topicChips.classList.toggle('is-expanded', chipsExpanded);
    topicChips.classList.toggle('is-collapsed', !chipsExpanded && needToggle);
    const toggle = document.getElementById('chip-toggle');
    if(toggle){
      toggle.addEventListener('click', () => {
        chipsExpanded = !chipsExpanded;
        renderChips();
        syncTopicChips();
        checkOverflow();
      });
    }
  }
  renderChips();

  if(activeTopic){
    const idx = chipEntries.findIndex(e => e.key === activeTopic);
    if(idx >= COLLAPSE_THRESHOLD){
      chipsExpanded = true;
      renderChips();
    }
  }

  function matches(r){
    if(activeTopic && (isPapers ? r.topic!==activeTopic : !(r.tags||[]).includes(activeTopic))) return false;
    if(query){
      // Search in both English and Arabic fields so users can search in either language
      const lang = (typeof i18n !== 'undefined') ? i18n.getLang() : 'ar';
      const hay=[r.title, r.title_ar, r.org, r.desc, r.desc_ar, r.topic, (r.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase();
      if(!hay.includes(query)) return false;
    }
    return true;
  }

  function section(title, list){
    return `<h2 class="group-head">${escapeHtml(title)} <span class="gh-count">${list.length}</span></h2>`+
           `<div class="grid">${list.map(cardHTML).join("")}</div>`;
  }

  function draw(){
    const list = items.filter(matches);
    let html="";
    const grouped = isPapers && !activeTopic && !query;
    if(grouped){
      topicOrder.forEach(t => { const g=list.filter(r=>r.topic===t); if(g.length) html+=section(topicLabel(t),g); });
    } else {
      html = `<div class="grid">${list.map(cardHTML).join("")}</div>`;
    }
    grid.innerHTML = html;
    empty.style.display = list.length ? "none" : "block";
    // Bilingual count line
    const lang = (typeof i18n !== 'undefined') ? i18n.getLang() : 'ar';
    const f = [];
    if (activeTopic) f.push(`${lang === 'ar' ? 'الموضوع:' : 'topic:'} ${topicLabel(activeTopic)}`);
    if (query) f.push(`"${query}"`);
    if (lang === 'ar') {
      countLine.textContent = `عرض ${list.length} من ${items.length}${f.length ? ' — ' + f.join(' · ') : ''}.`;
    } else {
      countLine.textContent = `Showing ${list.length} of ${items.length}${f.length ? ' — ' + f.join(' · ') : ''}.`;
    }
  }

  function syncTopicChips(){
    [...topicChips.children].forEach(c => {
      if(!c.dataset.topic) return;
      c.classList.toggle("active", c.dataset.topic === activeTopic);
    });
    if(activeTopic && !chipsExpanded){
      const active = topicChips.querySelector('.chip.active');
      if(active){
        const cLeft = active.offsetLeft;
        const cRight = cLeft + active.offsetWidth;
        const sLeft = topicChips.scrollLeft;
        const sRight = sLeft + topicChips.clientWidth;
        if(cLeft < sLeft + 8)  topicChips.scrollTo({left: cLeft - 16, behavior: 'smooth'});
        else if(cRight > sRight - 8) topicChips.scrollTo({left: cRight - topicChips.clientWidth + 16, behavior: 'smooth'});
      }
    }
  }

  function checkOverflow(){
    if(chipsExpanded){
      topicChips.classList.add('no-overflow');
      topicChips.parentElement.classList.remove('has-overflow');
      return;
    }
    const hasOverflow = topicChips.scrollWidth > topicChips.clientWidth + 4;
    topicChips.classList.toggle('no-overflow', !hasOverflow);
    topicChips.parentElement.classList.toggle('has-overflow', hasOverflow);
  }
  checkOverflow();
  window.addEventListener('resize', checkOverflow);
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(checkOverflow);
  }
  topicChips.addEventListener('click', () => setTimeout(checkOverflow, 50));

  syncTopicChips();

  // Wire search (preserve query across re-renders)
  const searchEl = document.getElementById("search");
  // Remove existing listeners by cloning
  const newSearch = searchEl.cloneNode(true);
  searchEl.parentNode.replaceChild(newSearch, searchEl);
  newSearch.addEventListener("input", e=>{ query=e.target.value.trim().toLowerCase(); draw(); });

  // Wire chip clicks (replace to avoid double-binding)
  const newTopicChips = topicChips.cloneNode(false);
  topicChips.parentNode.replaceChild(newTopicChips, topicChips);
  // Re-render chips into the new container
  const savedChipsHTML = topicChips.innerHTML;
  newTopicChips.innerHTML = savedChipsHTML;
  newTopicChips.className = topicChips.className;
  // Re-wire toggle
  const newToggle = document.getElementById('chip-toggle');
  if(newToggle){
    newToggle.addEventListener('click', () => {
      chipsExpanded = !chipsExpanded;
      // Re-render via the closure
      renderChips();
      syncTopicChips();
      checkOverflow();
    });
  }
  newTopicChips.addEventListener("click", e=>{
    const b=e.target.closest(".chip"); if(!b) return;
    if(b.id === 'chip-toggle' || !b.dataset.topic) return;
    activeTopic = activeTopic===b.dataset.topic ? null : b.dataset.topic;
    syncTopicChips(); draw();
  });

  // Wire tag clicks in grid
  grid.addEventListener("click", e=>{
    const tg=e.target.closest(".tag"); if(!tg) return;
    activeTopic=tg.dataset.tag; syncTopicChips(); draw(); window.scrollTo({top:0,behavior:"smooth"});
  });

  draw();
}
