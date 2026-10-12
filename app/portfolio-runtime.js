// Project content and gallery order preserved from the approved V8 preview.
export function initializePortfolio() {
  const controller = new AbortController();
  const listen = (target, type, handler) =>
    target.addEventListener(type, handler, { signal: controller.signal });
  let caseTrigger = null;

  const NAV = document.getElementById("navigation"),
    HEAD = document.getElementById("siteHeader"),
    TOGGLE = document.getElementById("menuToggle"),
    OVERLAY = document.getElementById("caseOverlay"),
    BODY = document.body;
  function setMenu(open) {
    NAV.classList.toggle("is-open", open);
    HEAD.classList.toggle("active", open);
    NAV.setAttribute("aria-hidden", String(!open));
    TOGGLE.setAttribute("aria-expanded", String(open));
    document.getElementById("menuLabel").textContent = open ? "Close" : "Menu";
    BODY.classList.toggle(
      "lock",
      open || OVERLAY.classList.contains("is-visible"),
    );
  }
  listen(TOGGLE, "click", () => setMenu(!NAV.classList.contains("is-open")));
  NAV.querySelectorAll("a").forEach((el) =>
    listen(el, "click", () => setMenu(false)),
  );
  const ROOT = (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + "/";
  const PROJECTS = {
    terrabench: {
      title: "TerraBench",
      type: "AI PRODUCT · HUMAN-AI EVALUATION",
      subtitle: "Can AI improve 3D quality review?",
      intro:
        "An independent AI product project investigating whether AI-supported quality review can make 3D defect identification more consistent without sacrificing efficiency. Defined five defect categories, built a 30-sample ground-truth evaluation set, and compared four review methods.",
      metrics: [
        ["30%", "AI-only agreement"],
        ["50%", "Rule-enhanced agreement"],
        ["V1 Hold", "Launch recommendation"],
      ],
      summary:
        "The pilot found that rules improved AI consistency, but AI assistance added review time. Human review and Human+AI both reached 100% agreement in the pilot set; this should not be generalized beyond that small sample. Based on these findings, the V1 launch was not recommended.",
      images: [
        "terrabench/terrabench-01.webp",
        "terrabench/terrabench-03.webp",
        "terrabench/terrabench-04.webp",
        "terrabench/terrabench-05.webp",
        "terrabench/terrabench-06.webp",
        "terrabench/terrabench-07.webp",
        "terrabench/terrabench-08.webp",
        "terrabench/terrabench-09.webp",
        "terrabench/terrabench-10.webp",
        "terrabench/terrabench-11.webp",
      ],
    },
    cafe: {
      title: "Café Nomade",
      type: "AI PERSONALIZATION · PRODUCT DESIGN",
      subtitle: "Can AI understand where people work best?",
      intro:
        "An AI-powered café discovery and planning experience. Users describe their schedules and work activities in natural language; AI interprets work needs and atmosphere preferences and recommends suitable cafés. The feature was implemented and used by real testers, alongside calendar, event and café discovery functions.",
      metrics: [
        ["50", "Campus seed users"],
        ["25 → 60%", "Product activation"],
        ["+20%", "D7 retention change"],
      ],
      summary:
        "Four weeks of product testing informed the broader feature iteration. Activation and retention results reflect the product experience as a whole, and should not be attributed only to the AI recommendation feature.",
      images: [
        "lumina/lumina-01.webp",
        "lumina/lumina-02.webp",
        "lumina/lumina-03.webp",
        "lumina/lumina-04.webp",
        "lumina/lumina-05.webp",
        "lumina/lumina-06.webp",
        "lumina/lumina-07.webp",
        "lumina/lumina-08.webp",
        "lumina/lumina-09.webp",
        "lumina/lumina-10.webp",
      ],
    },
    moonlight: {
      title: "Day & Night",
      type: "UE5 · SPATIAL NARRATIVE",
      subtitle: "Mountain Residence",
      intro:
        "A cinematic real-time mountain environment, guiding visitors through a navigable spatial journey using light, atmosphere and seasonal change.",
      metrics: [],
      summary:
        "The original spatial-design work remains part of the portfolio as a creative and technical foundation.",
      images: [
        "moonlight/moonlight-02.webp",
        "moonlight/moonlight-03.webp",
        "moonlight/moonlight-04.webp",
        "moonlight/moonlight-05.webp",
        "moonlight/moonlight-06.webp",
        "moonlight/moonlight-07.webp",
        "moonlight/moonlight-08.webp",
        "moonlight/moonlight-09.webp",
        "moonlight/moonlight-10.webp",
        "moonlight/moonlight-11.webp",
        "moonlight/moonlight-12.webp",
        "moonlight/moonlight-13.webp",
      ],
      video: "https://www.bilibili.com/video/BV1pytE6AEaX/",
    },
    plant: {
      title: "Plant Control",
      type: "BLENDER · ECOLOGICAL SIMULATION",
      subtitle: "A digital garden through game mechanics",
      intro:
        "Custom plants and objects move through their life cycles, exploring the relationship between ecological systems, human intervention and 3D storytelling.",
      metrics: [],
      summary:
        "Blender modeling, animation and interactive spatial narratives.",
      images: [
        "plant-control/plant-control-02.webp",
        "plant-control/plant-control-03.webp",
        "plant-control/plant-control-04.webp",
        "plant-control/plant-control-05.webp",
        "plant-control/plant-control-06.webp",
        "plant-control/plant-control-07.webp",
        "plant-control/plant-control-08.webp",
        "plant-control/plant-control-09.webp",
        "plant-control/plant-control-10.webp",
        "plant-control/plant-control-11.webp",
        "plant-control/plant-control-12.webp",
      ],
    },
    green: {
      title: "Green Infrastructure",
      type: "SPATIAL EVALUATION · RULE SYSTEMS",
      subtitle: "Green Infrastructure Value Engine",
      intro:
        "A rule-based spatial framework translating circulation, ecological performance, land value and risk into evaluation criteria for 3D urban development scenarios.",
      metrics: [],
      summary:
        "Retained as evidence of spatial and system design capabilities.",
      images: [
        "portfolio/green-01.webp",
        "portfolio/green-02.webp",
        "portfolio/green-03.webp",
        "portfolio/green-04.webp",
        "portfolio/green-05.webp",
        "portfolio/green-06.webp",
      ],
    },
    blue: {
      title: "Anell Blau",
      type: "HYDROLOGY · SPATIAL SIMULATION",
      subtitle: "Blue Ring",
      intro:
        "A spatial design project examining hydrological and ecological relationships using digital simulations and multiple levels of spatial analysis.",
      metrics: [],
      summary: "Retained as evidence of analytical spatial visualization.",
      images: [
        "portfolio/blue-ring-01.webp",
        "portfolio/blue-ring-02.webp",
        "portfolio/blue-ring-03.webp",
        "portfolio/blue-ring-04.webp",
        "portfolio/blue-ring-05.webp",
        "portfolio/blue-ring-06.webp",
      ],
    },
  };

  const CAFE_CONCLUSION_IMAGE = ROOT + "lumina/cafe-nomade-conclusion.png";

  const CASE_STORIES = {
    terrabench: {
      kicker: "AI PRODUCT CASE STUDY · FULL PROJECT",
      flow: [
        "3D scene + ID",
        "AI pre-check",
        "Structured candidate record",
        "Human review",
        "Verified record",
      ],
      chapters: [
        [
          "01 · USER PROBLEM",
          "Make 3D quality review consistent",
          "Reviewers need to identify visible defects and create traceable records. Vague standards and subjective decisions make generated-scene quality checks difficult to compare across people and runs.",
        ],
        [
          "02 · PRODUCT VALUE",
          "Optimize verified work, not automation",
          "The north-star measure is verified reviews completed per reviewer-hour. Quality guardrails include recall, omissions, false positives, median review time and rework.",
        ],
        [
          "03 · MVP SCOPE",
          "Define five observable failure types",
          "The first version focused on defects that can be seen in a single image and checked against a verified label. It included structured rules, editable AI output and human override.",
        ],
        [
          "04 · DATA STRATEGY",
          "Build a controlled 30-sample set",
          "The pilot set contained 15 controls and 15 defect scenes, covering five defect types. Ground Truth recorded sample ID, defect type, location, creation method and human verification.",
        ],
        [
          "05 · HUMAN–AI WORKFLOW",
          "Keep final decisions with reviewers",
          "An AI pre-check returned a proposed defect ID, location, severity and evidence; a human could accept, edit or reject the output. The prototype tested AI suggestions, not autonomous approval.",
        ],
        [
          "06 · VALIDATION",
          "Compare quality and efficiency",
          "Four conditions were considered: AI-only, free human review, rule-guided review and AI-assisted review. The product gate included at least 20% lower median review time without a meaningful quality decline.",
        ],
        [
          "07 · PILOT FINDINGS",
          "Rules helped — but not enough",
          "Agreement with verified Ground Truth rose from 30% (AI-only) to 50% (rule-enhanced AI). Human review and Human+AI reached 100% in this small pilot set, but AI assistance increased time.",
        ],
        [
          "08 · FAILURE DIAGNOSIS",
          "AI added verification work",
          "In one reviewed case, the AI passed a scene while missing a terrain/path conflict and a rock/path intersection. Human review found both. Reviewers still had to re-check the AI output.",
        ],
        [
          "09 · PRODUCT DECISION",
          "Stop V1 and reposition AI",
          "The V1 pre-check was not recommended for launch. The next hypothesis shifts AI from making the initial quality judgment to drafting structured documentation after a human identifies a defect.",
        ],
        [
          "10 · ROLLOUT PLAN",
          "Earn trust before scaling",
          "The proposed next steps are shadow mode, a controlled pilot on new holdout scenes, then expansion only if recall, time and error-rate gates pass. This is a plan, not a validated V2 result.",
        ],
      ],
      qualifiers:
        "Pilot-set outcomes only; 100% indicates no observed errors in this small test, not perfect accuracy in general. V2 is a proposed next test, not a released product.",
      cover: "terrabench/cover-terrabench.webp",
      labels: [
        "Cover · TerraBench",
        "Case overview",
        "Product value and reviewer workflow",
        "MVP defect taxonomy",
        "Pilot set and Ground Truth",
        "V1 human–AI workflow",
        "Validation and comparison conditions",
        "Pilot evaluation results",
        "Failure diagnosis",
        "Product decision and V2 direction",
        "Rollout and metrics",
      ],
      tags: [
        "PHY-01 · Floating",
        "PHY-02 · Intersection",
        "SCA-01 · Scale",
        "SPA-01 · Circulation",
        "TER-01 · Terrain / Water",
      ],
    },
    cafe: {
      kicker: "AI PRODUCT DESIGN · FULL PROJECT",
      flow: [
        "Describe daily plans",
        "AI interprets work needs",
        "Understand atmosphere preferences",
        "Recommend cafés",
        "Plan with calendar & events",
      ],
      chapters: [
        [
          "01 · USER PROBLEM",
          "Finding a café is a context problem",
          "Digital nomads need places that fit their work activities, schedules and preferred atmosphere — not just an address, star rating or generic list.",
        ],
        [
          "02 · PRODUCT DISCOVERY",
          "Connect research with product opportunities",
          "The project compared three competing experiences and identified five core user needs. Findings informed the priorities for café discovery, events and integrated planning.",
        ],
        [
          "03 · AI PERSONALIZATION",
          "Translate natural language into intent",
          "Users described their daily plans and work activities. The implemented AI feature interpreted working needs and atmosphere preferences, then surfaced café recommendations informed by that context.",
        ],
        [
          "04 · PRODUCT EXPERIENCE",
          "Link recommendations to daily planning",
          "The experience brought together recommendations, café discovery, events and calendar features so users could move from describing a plan to selecting an appropriate place.",
        ],
        [
          "05 · SPATIAL INTELLIGENCE",
          "A structured view of café environments",
          "The existing Lumina material documents a broader research/data workflow around New York café conditions, reviews and experiential dimensions. Lumina and Café Nomade are presented here as one connected project, not separate products.",
        ],
        [
          "06 · TESTING & ITERATION",
          "Validate the broader journey with users",
          "Fifty campus seed users participated in a four-week product test. The project used A/B tests, behavior metrics and qualitative feedback to guide interface and feature improvements.",
        ],
        [
          "07 · PRODUCT RESULTS",
          "Improve activation and early retention",
          "During the broader feature iteration, activation increased from 25% to 60%, and Day-7 retention improved by 20%. These are product-level results, not an isolated AI feature lift.",
        ],
        [
          "08 · NEXT IMPROVEMENTS",
          "Prioritize friction and user feedback",
          "Findings informed five prioritized improvements across the user journey, providing direction for the product roadmap and further iteration.",
        ],
      ],
      qualifiers:
        "The AI recommendation feature was implemented and used by real testers. Activation and retention figures describe the broader product iteration and should not be interpreted as the standalone effect of AI recommendations.",
      cover: "lumina/cover-lumina-spatial.webp",
      labels: [
        "Cover · Café Nomade / Lumina",
        "Original board · 01",
        "Original board · 02",
        "Original board · 03",
        "Original board · 04",
        "Original board · 05",
        "Original board · 06",
        "Original board · 07",
        "Original board · 08",
        "Original board · 09",
        "Original board · 10",
      ],
      tags: [
        "Natural-language intent",
        "Work requirements",
        "Atmosphere preferences",
        "Café recommendations",
        "Calendar & events",
      ],
    },
  };
  const SPATIAL_CASES = {
    moonlight: {
      cover: "moonlight/cover-moonlight.webp",
      kicker: "REAL-TIME 3D ENVIRONMENT · UE5",
      headline:
        "A first-person journey through an atmospheric mountain landscape.",
      description:
        "A cinematic real-time environment inspired by secluded mountain residences in Chinese landscape traditions. The work uses lighting, spatial sequencing and navigable scenes to build an immersive experience.",
      notes: [
        "Environment storytelling with real-time lighting and atmospheric changes",
        "A spatial journey through arrival, village, bamboo forest and mountain retreat",
        "Created with Unreal Engine, Blender and 3ds Max",
      ],
      categories: [
        "UNREAL ENGINE 5",
        "SPATIAL NARRATIVE",
        "REAL-TIME VISUALIZATION",
      ],
    },
    plant: {
      cover: "plant-control/cover-plant-control.webp",
      kicker: "3D MODELING · DIGITAL ECOLOGY",
      headline: "A digital garden built around ecological life cycles.",
      description:
        "A stylized 3D garden uses the game controller as a metaphor for human intervention in ecological systems. Custom vegetation moves through growth, maturity, decay and remains.",
      notes: [
        "Custom 3D flowers, mushrooms, bamboo and cherry trees",
        "Animation and visualization of ecological transitions",
        "Game mechanics as a spatial storytelling device",
      ],
      categories: ["BLENDER", "ECOLOGICAL SIMULATION", "3D ANIMATION"],
    },
    green: {
      cover: "portfolio/cover-green-spatial.webp",
      kicker: "URBAN DESIGN · SPATIAL RULES",
      headline:
        "Translating environmental conditions into spatial design criteria.",
      description:
        "A digital twin framework for Rotterdam’s Maashaven waterfront, comparing scenarios through access, circulation, land value, ecological performance and sea-level-rise risk.",
      notes: [
        "Structured spatial criteria for comparing design scenarios",
        "Access, circulation, ecology, risk and development conditions",
        "3D urban evaluation and rule-based visual communication",
      ],
      categories: ["SPATIAL EVALUATION", "RULE MODELING", "URBAN SYSTEMS"],
    },
    blue: {
      cover: "portfolio/cover-blue-spatial.webp",
      kicker: "LANDSCAPE RESEARCH · HYDROLOGICAL SIMULATION",
      headline:
        "Exploring the connections between water, land and urban growth.",
      description:
        "Anell Blau examines Valencia’s Horta Sud through hydrological and ecological simulations, testing urban scenarios against water movement, soil absorption, agricultural structure, access and continuity.",
      notes: [
        "Hydrological simulation and environmental evaluation",
        "Multi-scale analysis of water, soil and land-use relationships",
        "Visual comparison of landscape and urban development scenarios",
      ],
      categories: [
        "HYDROLOGICAL SIMULATION",
        "LANDSCAPE DESIGN",
        "SPATIAL ANALYSIS",
      ],
    },
  };
  function renderSpatialCase(key, p) {
    const d = SPATIAL_CASES[key];
    if (!d) return "";
    const galleryItems = [d.cover, ...p.images];
    const gallery = galleryItems
      .map(
        (src, i) =>
          `<figure class="case-sheet" id="spatial-visual-${i + 1}"><div class="case-sheet-frame"><img src="${ROOT + src}" loading="lazy" decoding="async" alt="${safeText(p.title)} original project visual ${i + 1}" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('is-missing')"></div><figcaption><span>${safeText(p.title)} · original project board</span><span>${String(i + 1).padStart(2, "0")} / ${String(galleryItems.length).padStart(2, "0")}</span></figcaption></figure>`,
      )
      .join("");
    const tags = d.categories
      .map((x) => `<span>${safeText(x)}</span>`)
      .join("");
    const notes = d.notes
      .map(
        (n, i) =>
          `<div class="spatial-note"><span>0${i + 1}</span><p>${safeText(n)}</p></div>`,
      )
      .join("");
    return `<nav class="case-case-nav" aria-label="Case study sections"><button data-casesection="case-overview">Overview</button><button data-casesection="case-spatial-story">Project context</button><button data-casesection="case-visuals">Full visual archive (${galleryItems.length})</button></nav>
 <section class="case-narrative spatial-case-context" id="case-spatial-story"><p class="case-kicker">${safeText(d.kicker)}</p><h3 class="case-chapter-title">${safeText(d.headline)}</h3><p class="spatial-case-description">${safeText(d.description)}</p><div class="case-taxon">${tags}</div><div class="spatial-case-notes">${notes}</div></section>
 <section class="case-archive" id="case-visuals"><div class="case-archive-head"><div><p class="case-kicker">Original Project Material</p><h3 class="case-chapter-title">Complete visual archive.</h3></div><span>${galleryItems.length} visuals</span></div><p class="case-archive-note">Cover and every project board currently available in the original GitHub repository, in their original order. Image files load from the existing portfolio media directory.</p><div class="case-gallery">${gallery}</div><button class="case-archive-link" data-casesection="case-overview">↑ Back to project overview</button></section>`;
  }

  function renderDeepCase(key, p) {
    const d = CASE_STORIES[key];
    if (!d) return "";
    const chapters = d.chapters
      .map(
        (part, i) =>
          `<section class="case-story"><div class="case-number">${String(i + 1).padStart(2, "0")}</div><h4>${safeText(part[1])}</h4><p>${safeText(part[2])}</p></section>`,
      )
      .join("");
    const flow = d.flow
      .map(
        (step, i) =>
          `${i ? '<b aria-hidden="true">→</b>' : ""}<span>${safeText(step)}</span>`,
      )
      .join("");
    const galleryItems = [d.cover, ...p.images].map((src, i) => ({
      src: ROOT + src,
      label: d.labels[i] || p.title + " visual " + i,
      conclusion: false,
    }));
    if (key === "cafe")
      galleryItems.push({
        src: CAFE_CONCLUSION_IMAGE,
        label:
          "Conclusion · Design value, AI tool usage, ethics & data privacy",
        conclusion: true,
      });
    const galleryTotal = galleryItems.length;
    const gallery = galleryItems
      .map(
        (item, i) =>
          `<figure class="case-sheet ${item.conclusion ? "is-conclusion" : ""}" id="visual-${i + 1}">${item.conclusion ? '<div class="case-conclusion-heading"><span class="case-kicker">Final Project Page</span><h4>Conclusion.</h4><p>Design value · AI for human-centric support · Ethics & data privacy</p></div>' : ""}<div class="case-sheet-frame"><img src="${item.src}" loading="lazy" decoding="async" alt="${safeText(item.label)}" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('is-missing')"></div><figcaption><span>${safeText(item.label)}</span><span>${String(i + 1).padStart(2, "0")} / ${String(galleryTotal).padStart(2, "0")}</span></figcaption></figure>`,
      )
      .join("");
    const tags = d.tags.map((t) => `<span>${safeText(t)}</span>`).join("");
    return `<nav class="case-case-nav" aria-label="Case study sections"><button data-casesection="case-overview">Overview</button><button data-casesection="case-method">Product story</button><button data-casesection="case-visuals">Full visual archive (${galleryTotal})</button></nav>
 <section class="case-narrative" id="case-method"><p class="case-kicker">${safeText(d.kicker)}</p><h3 class="case-chapter-title">From problem to product decision.</h3><div class="case-flow">${flow}</div><div class="case-taxon">${tags}</div><div class="case-stories">${chapters}</div><div class="case-spotlight"><h4>${key === "terrabench" ? "The product pivot" : "The product learning"}</h4><p>${key === "terrabench" ? "AI should support documentation first; it should not replace reviewer judgment until quality and efficiency gates are met." : "AI personalization should begin with user intent and become part of a useful end-to-end planning experience."}</p></div><p class="case-qualifier">${safeText(d.qualifiers)}</p></section>
 <section class="case-archive" id="case-visuals"><div class="case-archive-head"><div><p class="case-kicker">Original Project Material</p><h3 class="case-chapter-title">The complete visual archive.</h3></div><span>${galleryTotal} project pages</span></div><p class="case-archive-note">Original portfolio visuals in source order. Café Nomade additionally includes the newly supplied Conclusion as the final page.</p><div class="case-gallery">${gallery}</div><button class="case-archive-link" data-casesection="case-overview">↑ Back to project overview</button></section>`;
  }

  function safeText(x) {
    return String(x)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }
  function openCase(key) {
    const p = PROJECTS[key];
    if (!p) return;
    caseTrigger = document.activeElement;
    const rich = !!CASE_STORIES[key];
    const spatialRich = !!SPATIAL_CASES[key];
    const m = p.metrics.length
      ? `<div class="case-metrics">${p.metrics.map(([n, label]) => `<div><strong>${safeText(n)}</strong><span>${safeText(label)}</span></div>`).join("")}</div>`
      : "";
    const imgs =
      rich || spatialRich
        ? ""
        : p.images
            .map(
              (src, i) =>
                `<figure><img src="${ROOT + src}" loading="lazy" alt="${safeText(p.title)} project visual ${i + 1}" onerror="this.onerror=null;this.style.display='none';this.parentElement.innerHTML='<div class=case-placeholder>Original project image available on the online portfolio.</div>'"><figcaption><span>${safeText(p.title)}</span><span>Portfolio visual · ${String(i + 1).padStart(2, "0")}</span></figcaption></figure>`,
            )
            .join("");
    const target = document.getElementById("caseContents");
    target.innerHTML = `<article class="case-study"><div class="case-hero"><div class="micro">${safeText(p.type)}</div><h2>${safeText(p.title)}</h2><div class="case-sub">${safeText(p.subtitle)}</div></div><div class="case-content"><div class="case-top" id="case-overview"><div class="micro">Project Overview</div><div><h3>${safeText(p.subtitle)}</h3><p>${safeText(p.intro)}</p></div></div>${m}<p>${safeText(p.summary)}</p>${rich ? renderDeepCase(key, p) : spatialRich ? renderSpatialCase(key, p) : imgs}${p.video ? `<a href="${p.video}" target="_blank" rel="noopener noreferrer" class="case-cta">Watch project video <span class="arrow">↗</span></a>` : ""}${rich || spatialRich ? "" : `<p class="preview-note">Further original project materials can be added to this preview.</p>`}</div></article>`;
    OVERLAY.classList.add("is-visible");
    OVERLAY.scrollTop = 0;
    BODY.classList.add("lock");
    target.querySelectorAll("[data-casesection]").forEach((el) =>
      listen(el, "click", () => {
        const section = target.querySelector(
          "#" + el.getAttribute("data-casesection"),
        );
        if (section)
          section.scrollIntoView({ behavior: "smooth", block: "start" });
      }),
    );
    document.getElementById("caseClose").focus();
  }
  function closeCase() {
    OVERLAY.classList.remove("is-visible");
    BODY.classList.toggle("lock", NAV.classList.contains("is-open"));
    caseTrigger?.focus();
  }
  document
    .querySelectorAll("[data-case]")
    .forEach((el) => listen(el, "click", () => openCase(el.dataset.case)));
  listen(document.getElementById("caseClose"), "click", closeCase);
  listen(document, "keydown", (e) => {
    if (e.key === "Escape") {
      if (OVERLAY.classList.contains("is-visible")) closeCase();
      else if (NAV.classList.contains("is-open")) setMenu(false);
    }
  });

  listen(document, "keydown", (event) => {
    if (event.key !== "Tab") return;
    const panel = OVERLAY.classList.contains("is-visible")
      ? OVERLAY
      : NAV.classList.contains("is-open")
        ? NAV
        : null;
    if (!panel) return;
    const controls = [
      ...(panel === NAV ? [TOGGLE] : []),
      ...panel.querySelectorAll("a[href], button, summary"),
    ];
    const first = controls[0],
      last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  return () => {
    controller.abort();
    BODY.classList.remove("lock");
  };
}
