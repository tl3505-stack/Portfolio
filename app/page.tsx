"use client";

import { useEffect, useState } from "react";

type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  intro: string;
  type: string;
  site: string;
  cover: string;
  coverFit?: "cover" | "contain";
  images: string[];
  videoUrl?: string;
  overviewLabel?: string;
  featured?: boolean;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assetPath = (path: string) => `${basePath}${path}`;

const projectDefinitions: Project[] = [
  {
    id: "terrabench",
    number: "01",
    title: "TerraBench",
    subtitle: "Human-AI Evaluation for Spatial Quality in Generated Environments",
    category: "Quality Evaluation · Human-AI Workflow",
    year: "2026",
    intro: "An evaluation benchmark that turns spatial expertise into five executable defect rules for AI-generated environments. A controlled human-AI study tests whether structured rules improve defect detection and reviewer agreement, and where AI can support quality operations without replacing human judgment.",
    type: "Individual Research Project",
    site: "AI-Generated Environments · Controlled Evaluation",
    cover: "/terrabench/cover-terrabench.webp",
    coverFit: "contain",
    images: [
      "/terrabench/terrabench-01.webp", "/terrabench/terrabench-03.webp",
      "/terrabench/terrabench-04.webp", "/terrabench/terrabench-05.webp", "/terrabench/terrabench-06.webp",
      "/terrabench/terrabench-07.webp", "/terrabench/terrabench-08.webp", "/terrabench/terrabench-09.webp",
      "/terrabench/terrabench-10.webp", "/terrabench/terrabench-11.webp",
    ],
    featured: true,
  },
  {
    id: "moonlight",
    number: "02",
    title: "Day & Night · Mountain Residence",
    subtitle: "An Atmospheric Real-Time Environment and First-Person Journey",
    category: "UE5 Environment · Spatial Narrative",
    year: "2026",
    intro: "A cinematic real-time world inspired by the secluded mountain residences of Chinese landscape traditions. The project choreographs a first-person journey from boat arrival to village, bamboo forest and mountain retreat, using lighting, seasonal change and navigable spatial sequences to create a quiet, immersive atmosphere.",
    type: "UE5.7 · Blender · 3ds Max",
    site: "Virtual Mountain Landscape",
    cover: "/moonlight/cover-moonlight.webp",
    images: [
      "/moonlight/moonlight-02.webp", "/moonlight/moonlight-03.webp", "/moonlight/moonlight-04.webp",
      "/moonlight/moonlight-05.webp", "/moonlight/moonlight-06.webp", "/moonlight/moonlight-07.webp",
      "/moonlight/moonlight-08.webp", "/moonlight/moonlight-09.webp", "/moonlight/moonlight-10.webp",
      "/moonlight/moonlight-11.webp", "/moonlight/moonlight-12.webp", "/moonlight/moonlight-13.webp",
    ],
    videoUrl: "https://www.bilibili.com/video/BV1pytE6AEaX/",
    overviewLabel: "Spatial narrative",
  },
  {
    id: "plant-control",
    number: "03",
    title: "Plant Control",
    subtitle: "A Digital Garden Through Game Mechanics",
    category: "Blender Modeling · Ecological Simulation",
    year: "2026",
    intro: "A stylized digital garden that treats the game controller as a metaphor for human intervention in ecological systems. Custom flowers, mushrooms, bamboo and cherry trees move through growth, maturity, decay and remains, turning plant life cycles into an interactive spatial narrative.",
    type: "3D Modeling · Animation · Interaction",
    site: "Digital Garden · Experimental Environment",
    cover: "/plant-control/cover-plant-control.webp",
    images: [
      "/plant-control/plant-control-02.webp", "/plant-control/plant-control-03.webp", "/plant-control/plant-control-04.webp",
      "/plant-control/plant-control-05.webp", "/plant-control/plant-control-06.webp", "/plant-control/plant-control-07.webp",
      "/plant-control/plant-control-08.webp", "/plant-control/plant-control-09.webp", "/plant-control/plant-control-10.webp",
      "/plant-control/plant-control-11.webp", "/plant-control/plant-control-12.webp",
    ],
    overviewLabel: "Project concept",
  },
  {
    id: "lumina",
    number: "04",
    title: "Lumina Spatial Intelligence",
    subtitle: "An AI-Assisted Environmental Quality and Recommendation System",
    category: "Data Workflow · Human Experience",
    year: "2026",
    intro: "Lumina converts real-world environmental conditions and human preferences into a structured spatial evaluation workflow. Data from 546 New York cafés, 2,700+ images and reviews, seating conditions, weather and natural-language intent is normalized into 11 experiential dimensions, then matched to users through an explainable recommendation system.",
    type: "AI Evaluation System · Team Project",
    site: "New York City · Digital Prototype",
    cover: "/lumina/cover-lumina-spatial.webp",
    images: ["/lumina/lumina-01.webp", "/lumina/lumina-02.webp", "/lumina/lumina-03.webp", "/lumina/lumina-04.webp", "/lumina/lumina-05.webp", "/lumina/lumina-06.webp", "/lumina/lumina-07.webp", "/lumina/lumina-08.webp", "/lumina/lumina-09.webp", "/lumina/lumina-10.webp"],
    featured: true,
  },
  {
    id: "green-infrastructure",
    number: "05",
    title: "Green Infrastructure Value Engine",
    subtitle: "A Digital Twin Framework for Spatial Value and Performance",
    category: "Rule Building · 3D Urban Evaluation",
    year: "2025",
    intro: "A 3D rule model for Rotterdam's Maashaven waterfront. The project translates access, land value, ecological performance, circulation and sea-level-rise risk into measurable spatial criteria, allowing development scenarios to be tested against real-world urban and environmental logic.",
    type: "Spatial Rule Model · Group Project",
    site: "Rotterdam, Netherlands",
    cover: "/portfolio/cover-green-spatial.webp",
    images: ["/portfolio/green-01.webp", "/portfolio/green-02.webp", "/portfolio/green-03.webp", "/portfolio/green-04.webp", "/portfolio/green-05.webp", "/portfolio/green-06.webp"],
  },
  {
    id: "anell-blau",
    number: "06",
    title: "Anell Blau — Blue Ring",
    subtitle: "Hydrological Simulation for Physical and Ecological Quality",
    category: "Quality Evaluation · Hydrological Simulation",
    year: "2025",
    intro: "A spatial quality evaluation system for Valencia's Horta Sud. Digital hydrological simulation is used to test whether urban growth scenarios respect water movement, soil absorption, agricultural structure, public access and ecological continuity across multiple scales.",
    type: "Evaluation Framework · Individual Project",
    site: "Valencia, Spain",
    cover: "/portfolio/cover-blue-spatial.webp",
    images: ["/portfolio/blue-ring-01.webp", "/portfolio/blue-ring-02.webp", "/portfolio/blue-ring-03.webp", "/portfolio/blue-ring-04.webp", "/portfolio/blue-ring-05.webp", "/portfolio/blue-ring-06.webp"],
  },
];

const projects = projectDefinitions.map((project) => ({
  ...project,
  cover: assetPath(project.cover),
  images: project.images.map(assetPath),
}));

function Arrow({ down = false }: { down?: boolean }) {
  return <span className={down ? "arrow arrow-down" : "arrow"}>↗</span>;
}

export default function Home() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setSelected(null); setMenuOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected, menuOpen]);

  const nextProject = selected
    ? projects[(projects.findIndex((item) => item.id === selected.id) + 1) % projects.length]
    : projects[0];

  return (
    <main>
      <header className={`site-header ${menuOpen ? "menu-active" : ""}`}>
        <a className="wordmark" href="#top" aria-label="Back to top">TS<span>®</span></a>
        <div className="header-center">3D Spatial Quality & Evaluation</div>
        <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? "Close" : "Menu"}</span><i className={menuOpen ? "is-open" : ""} />
        </button>
      </header>

      <section className="hero" id="top" aria-label="3D Spatial Quality and Evaluation portfolio">
        <div
          className="hero-image"
          style={{
            backgroundImage: `url('${assetPath("/hero-silk.webp")}'), radial-gradient(circle at 80% 65%, #eab2b4 0 14%, transparent 42%), radial-gradient(circle at 15% 55%, #9d91c4, transparent 40%), linear-gradient(135deg, #f7efe6, #ecc8ba 60%, #c17f95)`,
          }}
        /><div className="hero-wash" />
        <div className="hero-copy">
          <p className="eyebrow">Real-world rules × AI-generated content</p>
          <h1 className="hero-title-spatial"><span>3D Spatial</span><span>Quality & <em>Evaluation.</em></span></h1>
        </div>
        <a className="scroll-cue" href="#work">Explore the systems <Arrow down /></a>
        <p className="hero-note">Terrain · Ecology · Scale · Circulation<br />Human experience</p>
      </section>

      <section className="statement" id="method" aria-label="Positioning and methods">
        <p className="section-label">Positioning · 01</p>
        <p className="statement-copy">I translate five years of <em>real-world</em> spatial systems research into evaluation rules, data standards and quality workflows for AI teams.</p>
        <div className="statement-aside">
          <p>Focused on locating physical, ecological and spatial logic failures in AI-generated environments.</p>
          <ol className="capability-list">
            <li><span>01</span>Rule Building</li>
            <li><span>02</span>Quality Evaluation</li>
            <li><span>03</span>Data Workflow</li>
          </ol>
        </div>
      </section>

      <section className="work" id="work">
        <div className="work-heading">
          <p className="section-label">Applied systems · 02</p><h2>Projects</h2><p>{projects.length.toString().padStart(2, "0")} case studies</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <button className={`project-card ${project.featured ? "is-featured" : ""}`} key={project.id} onClick={() => setSelected(project)} aria-label={`View project ${project.title}`}>
              <div className="project-art project-image" aria-hidden="true">
                <img src={project.cover} alt="" loading="lazy" style={{ objectFit: project.coverFit ?? "cover" }} />
                <span className="project-index">{project.number}</span>
              </div>
              <div className="project-meta"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.category}</p></div><Arrow /></div>
            </button>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-label">Profile · 03</p>
        <div className="about-grid"><h2>Turning spatial expertise into evaluation infrastructure.</h2><div><p>I’m Tianjiao Shi. My work connects landscape systems, 3D spatial reasoning, environmental data and AI evaluation—turning domain knowledge into auditable rules and repeatable quality processes.</p><a href="mailto:tianjiaoshi998@gmail.com">Let’s connect <Arrow /></a></div></div>
      </section>

      <footer>
        <div className="footer-title">3D Spatial Quality & Evaluation</div><a className="footer-email" href="mailto:tianjiaoshi998@gmail.com">tianjiaoshi998@gmail.com</a>
        <div className="footer-bottom"><span>© 2026 Tianjiao Shi</span><div><a href="mailto:tianjiaoshi998@gmail.com">Email</a><a href="#work">Case studies</a><a href="#top">Back to top ↑</a></div></div>
      </footer>

      <div className={`menu-overlay ${menuOpen ? "is-visible" : ""}`} aria-hidden={!menuOpen}>
        <nav><a href="#work" onClick={() => setMenuOpen(false)}><span>01</span>Work</a><a href="#method" onClick={() => setMenuOpen(false)}><span>02</span>Method</a><a href="mailto:tianjiaoshi998@gmail.com"><span>03</span>Contact</a></nav>
        <p>Rule building · Quality evaluation · Data workflow</p>
      </div>

      <div className={`case-overlay ${selected ? "is-visible" : ""}`} aria-hidden={!selected}>
        {selected && <article className="case-study">
          <button className="case-close" onClick={() => setSelected(null)} aria-label="Close project">Close ×</button>
          <div className="case-hero"><p>{selected.category}</p><h2 className={selected.title.length > 24 ? "case-title-long" : ""}>{selected.title}</h2><p className="case-subtitle">{selected.subtitle}</p><span>{selected.number} / {selected.year}</span></div>
          <div className="case-intro"><p className="section-label">{selected.overviewLabel ?? "Evaluation logic"}</p><h3>{selected.intro}</h3><dl><div><dt>Context</dt><dd>{selected.site}</dd></div><div><dt>System</dt><dd>{selected.type}</dd></div><div><dt>Year</dt><dd>{selected.year}</dd></div></dl></div>
          {selected.videoUrl && (
            <a className="case-video-link" href={selected.videoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${selected.title} project film on Bilibili`}>
              <span><small>Project film</small>Watch the complete journey on Bilibili</span><Arrow />
            </a>
          )}
          <div className="case-gallery">
            {selected.images.map((image, index) => (
              <figure className={`case-sheet ${selected.id === "lumina" ? "case-sheet-digital" : ""}`} key={image}>
                <img src={image} alt={`${selected.title} system study ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} />
                <figcaption><span>{selected.number}.{(index + 1).toString().padStart(2, "0")}</span><span>{selected.title}</span></figcaption>
              </figure>
            ))}
          </div>
          <button className="next-project" onClick={() => { setSelected(nextProject); document.querySelector(".case-overlay")?.scrollTo({ top: 0, behavior: "smooth" }); }}><span>Next system</span><strong>{nextProject.title}</strong><Arrow /></button>
        </article>}
      </div>
    </main>
  );
}
