// Content and structure retained from the approved V8 portfolio.
import PortfolioInteractions from "./portfolio-interactions";

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${path}`;

export default function Home() {
  return (
    <>
      <header className="header" id="siteHeader">
        <a aria-label="Home" className="wordmark" href="#top">
          {"TS"}
          <span>{"®"}</span>
        </a>
        <div className="header-center">{"AI Product · Experience Design"}</div>
        <button
          aria-controls="navigation"
          aria-expanded="false"
          className="menu-toggle"
          id="menuToggle"
        >
          <span id="menuLabel">{"Menu"}</span>
          <span className="menu-lines"></span>
        </button>
      </header>
      <div aria-hidden="true" className="nav-overlay" id="navigation">
        <nav className="nav-links">
          <a href="#about">
            <span>{"01"}</span>
            {"About"}
          </a>
          <a href="#ai">
            <span>{"02"}</span>
            {"AI Work"}
          </a>
          <a href="#thinking">
            <span>{"03"}</span>
            {"Thinking"}
          </a>
          <a href="#spatial">
            <span>{"04"}</span>
            {"3D Work"}
          </a>
          <a href="#why-me">
            <span>{"05"}</span>
            {"Why Me"}
          </a>
          <a href="#contact">
            <span>{"06"}</span>
            {"Contact"}
          </a>
        </nav>
        <footer>
          <span>{"Tianjiao Shi — Portfolio"}</span>
          <span>{"AI Product · Experience Design"}</span>
        </footer>
      </div>
      <main>
        <section className="hero" id="top">
          <div
            aria-label="Silk-like abstract pink and lavender background inspired by the original portfolio"
            className="silk"
            role="img"
          ></div>
          <div className="hero-shade"></div>
          <div aria-label="Tianjiao Shi" className="hero-name">
            <span className="hero-name-caption">
              {"SELECTED PORTFOLIO / 2026"}
            </span>
            <span className="hero-name-main">
              {"Tianjiao "}
              <em>{"Shi."}</em>
            </span>
            <span aria-hidden="true" className="hero-name-rule"></span>
          </div>
          <div className="hero-copy">
            <p className="kicker">
              {"AI Product Manager · Product Designer · AI Evaluation"}
            </p>
            <h1>
              <span>
                {"Designing "}
                <em>{"AI"}</em>
              </span>
              <span>{"for people."}</span>
            </h1>
            <p className="hero-desc">
              {
                "Hi, I'm Tianjiao Shi. I combine AI product thinking, human-centered design, and spatial expertise to turn complex problems into intuitive digital experiences."
              }
            </p>
            <div className="hero-actions">
              <a className="inline-link hero-pill hero-pill-primary" href="#ai">
                {"Explore AI Projects "}
                <span className="arrow">{"↗"}</span>
              </a>
              <a
                className="inline-link hero-pill hero-pill-secondary"
                href="#spatial"
              >
                {"Explore 3D Work "}
                <span className="arrow">{"↗"}</span>
              </a>
            </div>
          </div>
          <a className="hero-cue" href="#about">
            {"Scroll to explore →"}
          </a>
          <p className="hero-side">
            {"Human needs · AI systems"}
            <br />
            {"Spatial thinking · Experience design"}
          </p>
        </section>
        <section className="about section-wrap" id="about">
          <div className="about-intro">
            <p className="section-tag">{"Profile · 01"}</p>
            <div>
              <h2 className="about-title">
                {"From complex systems to "}
                <em>{"intuitive AI experiences."}</em>
              </h2>
              <div className="about-text">
                <p>
                  {
                    "I'm Tianjiao Shi, a product-oriented designer with a background in spatial design, interactive systems, and AI product development. My experience at Harvard Graduate School of Design shaped how I approach complex problems — understanding human needs, thinking systematically, and translating ideas into intuitive experiences."
                  }
                </p>
                <p>
                  {
                    "Today, I apply this perspective to AI products, from creating personalized experiences in Café Nomade to evaluating AI reliability and human-AI workflows in TerraBench."
                  }
                </p>
              </div>
            </div>
          </div>
          <div className="about-skills">
            <article className="skill">
              <div className="num">{"01 / HUMAN-CENTERED"}</div>
              <h3>{"Product Thinking"}</h3>
              <p>
                {
                  "Understand real user needs and turn complex problems into clear, useful experiences."
                }
              </p>
              <p className="skill-bottom">
                {"USER RESEARCH · PRODUCT STRATEGY · UX"}
              </p>
            </article>
            <article className="skill">
              <div className="num">{"02 / AI & SYSTEMS"}</div>
              <h3>{"AI Product Thinking"}</h3>
              <p>
                {
                  "Translate emerging AI capabilities into practical features and accountable workflows."
                }
              </p>
              <p className="skill-bottom">
                {"AI PRODUCT DESIGN · HUMAN-AI · EVALUATION"}
              </p>
            </article>
            <article className="skill">
              <div className="num">{"03 / DESIGN BACKGROUND"}</div>
              <h3>{"Spatial & Visual Thinking"}</h3>
              <p>
                {
                  "Make complex systems tangible through spatial reasoning, visual communication, and prototyping."
                }
              </p>
              <p className="skill-bottom">
                {"3D SYSTEMS · VISUALIZATION · INTERACTION"}
              </p>
            </article>
          </div>
        </section>
        <section className="ai section-wrap" id="ai">
          <div className="ai-header">
            <p className="section-tag">{"AI Practice · 02"}</p>
            <div>
              <h2>
                {"What I've built "}
                <em>{"with AI."}</em>
              </h2>
              <p>
                {
                  "From understanding user intent to validating AI product value. My work explores how AI can better understand people, support meaningful interactions, and deliver measurable value."
                }
              </p>
            </div>
          </div>
          <p className="overview-label">
            {"Overview · Three Core Capabilities"}
          </p>
          <div className="overview-grid">
            <article className="overview-card">
              <div className="card-top">
                <span className="badge-circle">{"01"}</span>
                <span className="card-icon">
                  <svg
                    aria-hidden="true"
                    className="line-icon"
                    fill="none"
                    height="27"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="27"
                  >
                    <path d="M12 18V5.5a3 3 0 0 0-5.8-1.1A3 3 0 0 0 3.5 9a3.5 3.5 0 0 0 0 6A3.2 3.2 0 0 0 8 19.7 3.6 3.6 0 0 0 12 18Z"></path>
                    <path d="M12 18V5.5a3 3 0 0 1 5.8-1.1A3 3 0 0 1 20.5 9a3.5 3.5 0 0 1 0 6A3.2 3.2 0 0 1 16 19.7 3.6 3.6 0 0 1 12 18Z"></path>
                    <path d="M8 8c-1.8 0-2.7 1.2-2.7 2.8M8 15c-1.3 0-2.4.8-2.6 2M16 8c1.8 0 2.7 1.2 2.7 2.8M16 15c1.3 0 2.4.8 2.6 2M9 12h6"></path>
                  </svg>
                </span>
              </div>
              <p className="micro">{"Understand"}</p>
              <h3>
                {"User Intent"}
                <br />
                {"& Context"}
              </h3>
              <p className="desc">
                {
                  "Turn natural-language inputs into structured user needs and personalized preferences."
                }
              </p>
              <div className="card-evidence">
                <span className="evidence-label">{"IN PRACTICE"}</span>
                <div className="evidence-links">
                  <a className="mini-link" href="#cafe-card">
                    <span>{"Café Nomade"}</span>
                    <span aria-hidden="true" className="mini-link-arrow">
                      {"↗"}
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="overview-card">
              <div className="card-top">
                <span className="badge-circle">{"02"}</span>
                <span className="card-icon">
                  <svg
                    aria-hidden="true"
                    className="line-icon"
                    fill="none"
                    height="27"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="27"
                  >
                    <rect height="7" rx="1.5" width="7" x="3" y="3"></rect>
                    <rect height="7" rx="1.5" width="7" x="14" y="14"></rect>
                    <path d="M6.5 10v3.2a3 3 0 0 0 3 3H14"></path>
                  </svg>
                </span>
              </div>
              <p className="micro">{"Design"}</p>
              <h3>
                {"AI Product &"}
                <br />
                {"Workflow Design"}
              </h3>
              <p className="desc">
                {
                  "Translate user problems into AI-powered features, intuitive interactions, and human-AI workflows."
                }
              </p>
              <div className="card-evidence">
                <span className="evidence-label">{"IN PRACTICE"}</span>
                <div className="evidence-links">
                  <a className="mini-link" href="#cafe-card">
                    <span>{"Café Nomade"}</span>
                    <span aria-hidden="true" className="mini-link-arrow">
                      {"↗"}
                    </span>
                  </a>
                  <a className="mini-link" href="#terrabench-card">
                    <span>{"TerraBench"}</span>
                    <span aria-hidden="true" className="mini-link-arrow">
                      {"↗"}
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="overview-card">
              <div className="card-top">
                <span className="badge-circle">{"03"}</span>
                <span className="card-icon">
                  <svg
                    aria-hidden="true"
                    className="line-icon"
                    fill="none"
                    height="27"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="27"
                  >
                    <path d="M3 20V14M8 20V12M13 20V9M18 20V5M2.5 10.5l6-5 4 2.5L21 2"></path>
                    <path d="m16.5 2 4.5 0 0 4.5"></path>
                  </svg>
                </span>
              </div>
              <p className="micro">{"Evaluate"}</p>
              <h3>
                {"AI Evaluation"}
                <br />
                {"& Reliability"}
              </h3>
              <p className="desc">
                {
                  "Define evaluation criteria, measure AI performance, and make evidence-based product decisions."
                }
              </p>
              <div className="card-evidence">
                <span className="evidence-label">{"IN PRACTICE"}</span>
                <div className="evidence-links">
                  <a className="mini-link" href="#terrabench-card">
                    <span>{"TerraBench"}</span>
                    <span aria-hidden="true" className="mini-link-arrow">
                      {"↗"}
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div className="overview-flow">
            {"Understand "}
            <span>{"→"}</span>
            {" Design "}
            <span>{"→"}</span>
            {" Evaluate"}
          </div>
          <div className="selected-heading">
            <div>
              <p className="section-tag">{"Selected AI Projects"}</p>
              <h3>{"Featured work"}</h3>
            </div>
            <span>{"02 Case Studies"}</span>
          </div>
          <div className="ai-project-grid">
            <article
              className="ai-project-card terrabench refined-feature"
              id="terrabench-card"
            >
              <div className="ai-cover">
                <button
                  aria-label="Open TerraBench case study"
                  className="cover-click"
                  data-case="terrabench"
                  type="button"
                >
                  <img
                    alt="TerraBench AI 3D quality evaluation original project cover"
                    loading="lazy"
                    src={assetPath("terrabench/cover-terrabench.webp")}
                  />
                </button>
                <span className="counter">{"01"}</span>
                <span aria-hidden="true" className="cover-hint">
                  {"Explore project  ↗"}
                </span>
              </div>
              <div className="ai-project-text">
                <div className="micro">
                  {"AI Evaluation · Human-in-the-Loop · Product Strategy"}
                </div>
                <h4>{"TerraBench"}</h4>
                <p className="question">
                  {"Can AI improve 3D quality review?"}
                </p>
                <p className="detail">
                  {
                    "Designed an AI-assisted 3D quality evaluation framework and compared AI-only, rule-enhanced, human, and Human+AI review approaches."
                  }
                </p>
                <p className="metric">
                  <strong>{"Key finding:"}</strong>
                  {
                    " Rule-based guidance improved agreement from 30% to 50%, but AI assistance increased review time. Recommended holding the V1 launch."
                  }
                </p>
                <button
                  aria-label="Open TerraBench case study"
                  className="project-link"
                  data-case="terrabench"
                >
                  {"View case study"}
                  <span aria-hidden="true" className="button-round-arrow">
                    {"↗"}
                  </span>
                </button>
              </div>
            </article>
            <article className="ai-project-card refined-feature" id="cafe-card">
              <div className="ai-cover">
                <button
                  aria-label="Open Café Nomade case study"
                  className="cover-click"
                  data-case="cafe"
                  type="button"
                >
                  <img
                    alt="Café Nomade original project visual formerly titled Lumina Spatial Intelligence"
                    loading="lazy"
                    src={assetPath("lumina/cover-lumina-spatial.webp")}
                  />
                </button>
                <span className="counter">{"02"}</span>
                <span aria-hidden="true" className="cover-hint">
                  {"Explore project  ↗"}
                </span>
              </div>
              <div className="ai-project-text">
                <div className="micro">
                  {"AI Personalization · Product Design · User Intent"}
                </div>
                <h4>{"Café Nomade"}</h4>
                <p className="question">
                  {"Can AI understand where people work best?"}
                </p>
                <p className="detail">
                  {
                    "Designed and tested an AI-powered café experience that interprets schedules, work needs, and atmosphere preferences to recommend suitable cafés."
                  }
                </p>
                <p className="metric">
                  <strong>{"Product results:"}</strong>
                  {
                    " Activation increased from 25% to 60%, alongside a 20% improvement in D7 retention during the broader product iteration."
                  }
                </p>
                <button
                  aria-label="Open Café Nomade case study"
                  className="project-link"
                  data-case="cafe"
                >
                  {"View case study"}
                  <span aria-hidden="true" className="button-round-arrow">
                    {"↗"}
                  </span>
                </button>
              </div>
            </article>
          </div>
        </section>
        <section className="thinking section-wrap" id="thinking">
          <div className="think-title-row">
            <p className="section-tag">{"Perspective · 03"}</p>
            <div>
              <h2>
                {"How I think about "}
                <em>{"AI."}</em>
              </h2>
              <p>
                {
                  "Three principles that shape how I design AI products — from defining value, to understanding user needs, to keeping people in control."
                }
              </p>
            </div>
          </div>
          <p className="think-overview-label">
            {"Overview · Three Product Principles"}
          </p>
          <div className="think-list">
            <article className="think-item">
              <div className="card-top">
                <span className="badge-circle">{"01"}</span>
                <span className="card-icon">
                  <svg
                    aria-hidden="true"
                    className="line-icon"
                    fill="none"
                    height="27"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="27"
                  >
                    <path d="M12 22s8-3.8 8-10V5l-8-3-8 3v7c0 6.2 8 10 8 10Z"></path>
                    <path d="m8 12 2.5 2.5 5-5"></path>
                  </svg>
                </span>
              </div>
              <p className="micro">{"Reliability"}</p>
              <h3>{"Evaluate before scaling."}</h3>
              <p>
                {
                  "AI should earn its place in a product through measurable quality, real workflow benefits, and clear launch criteria — not just an impressive demo."
                }
              </p>
              <div className="card-evidence">
                <span className="evidence-label">{"EXPLORED IN"}</span>
                <div className="evidence-links">
                  <a className="mini-link" href="#terrabench-card">
                    <span>{"TerraBench"}</span>
                    <span aria-hidden="true" className="mini-link-arrow">
                      {"↗"}
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="think-item">
              <div className="card-top">
                <span className="badge-circle">{"02"}</span>
                <span className="card-icon">
                  <svg
                    aria-hidden="true"
                    className="line-icon"
                    fill="none"
                    height="27"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="27"
                  >
                    <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"></path>
                    <path d="M19 17v4M17 19h4M4 17v4M2 19h4"></path>
                  </svg>
                </span>
              </div>
              <p className="micro">{"User Intent"}</p>
              <h3>{"Design around user intent."}</h3>
              <p>
                {
                  "The best AI experiences start with what users are trying to accomplish, then use AI to reduce friction and make decisions feel more natural."
                }
              </p>
              <div className="card-evidence">
                <span className="evidence-label">{"EXPLORED IN"}</span>
                <div className="evidence-links">
                  <a className="mini-link" href="#cafe-card">
                    <span>{"Café Nomade"}</span>
                    <span aria-hidden="true" className="mini-link-arrow">
                      {"↗"}
                    </span>
                  </a>
                </div>
              </div>
            </article>
            <article className="think-item">
              <div className="card-top">
                <span className="badge-circle">{"03"}</span>
                <span className="card-icon">
                  <svg
                    aria-hidden="true"
                    className="line-icon"
                    fill="none"
                    height="27"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                    viewBox="0 0 24 24"
                    width="27"
                  >
                    <circle cx="12" cy="8" r="3.2"></circle>
                    <path d="M5 20c.3-4 3-6 7-6s6.7 2 7 6"></path>
                    <path d="m18 8 1.8 1.8L22 7.5"></path>
                  </svg>
                </span>
              </div>
              <p className="micro">{"Human Control"}</p>
              <h3>{"Keep humans in control."}</h3>
              <p>
                {
                  "AI should support human judgment with transparent, reviewable, and correctable outputs — especially when trust and quality matter."
                }
              </p>
              <div className="card-evidence">
                <span className="evidence-label">{"EXPLORED IN"}</span>
                <div className="evidence-links">
                  <a className="mini-link" href="#terrabench-card">
                    <span>{"TerraBench"}</span>
                    <span aria-hidden="true" className="mini-link-arrow">
                      {"↗"}
                    </span>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="spatial section-wrap" id="spatial">
          <div className="spatial-head">
            <p className="section-tag">{"Spatial practice · 04"}</p>
            <h2>{"Spatial & 3D work."}</h2>
            <p>
              {
                "Spatial thinking meets digital creation. Selected work in interactive environments, ecological simulation, and spatial systems."
              }
            </p>
          </div>
          <div className="spatial-grid">
            <button className="spatial-card" data-case="moonlight">
              <div className="spatial-cover">
                <img
                  alt="Day & Night Mountain Residence project"
                  loading="lazy"
                  src={assetPath("moonlight/cover-moonlight.webp")}
                />
              </div>
              <div className="spatial-meta">
                <span className="micro">{"01"}</span>
                <div>
                  <h3>{"Day & Night · Mountain Residence"}</h3>
                  <p>{"UE5 Environment · Spatial Narrative"}</p>
                </div>
                <span className="arrow">{"↗"}</span>
              </div>
            </button>
            <button className="spatial-card" data-case="plant">
              <div className="spatial-cover">
                <img
                  alt="Plant Control digital garden"
                  loading="lazy"
                  src={assetPath("plant-control/cover-plant-control.webp")}
                />
              </div>
              <div className="spatial-meta">
                <span className="micro">{"02"}</span>
                <div>
                  <h3>{"Plant Control"}</h3>
                  <p>{"Blender Modeling · Ecological Simulation"}</p>
                </div>
                <span className="arrow">{"↗"}</span>
              </div>
            </button>
            <button className="spatial-card" data-case="green">
              <div className="spatial-cover">
                <img
                  alt="Green Infrastructure Value Engine visual"
                  loading="lazy"
                  src={assetPath("portfolio/cover-green-spatial.webp")}
                />
              </div>
              <div className="spatial-meta">
                <span className="micro">{"03"}</span>
                <div>
                  <h3>{"Green Infrastructure Value Engine"}</h3>
                  <p>{"Spatial Evaluation · Environmental Systems"}</p>
                </div>
                <span className="arrow">{"↗"}</span>
              </div>
            </button>
            <button className="spatial-card" data-case="blue">
              <div className="spatial-cover">
                <img
                  alt="Anell Blau Blue Ring project"
                  loading="lazy"
                  src={assetPath("portfolio/cover-blue-spatial.webp")}
                />
              </div>
              <div className="spatial-meta">
                <span className="micro">{"04"}</span>
                <div>
                  <h3>{"Anell Blau — Blue Ring"}</h3>
                  <p>{"Environmental Design · Hydrological Simulation"}</p>
                </div>
                <span className="arrow">{"↗"}</span>
              </div>
            </button>
          </div>
        </section>
        <section
          className="why-me section-wrap"
          id="why-me"
          aria-labelledby="why-heading"
        >
          <div className="why-header">
            <p className="section-tag">{"Personal strengths · 05"}</p>
            <div>
              <h2 className="why-heading" id="why-heading">
                {"Why me."}
              </h2>
              <p className="why-tagline">
                {"Curious enough to explore. Structured enough to deliver."}
              </p>
              <p className="why-intro">
                {
                  "I bring initiative, analytical thinking, and cross-disciplinary experience to the way I solve problems. I enjoy learning new technologies, understanding people, and turning complex ideas into practical outcomes. Select a strength to see the work behind it."
                }
              </p>
            </div>
          </div>
          <div className="why-card-stack">
            <details className="why-card violet">
              <summary>
                <span className="why-number">{"01"}</span>
                <span>
                  <strong className="why-card-title">
                    {"Self-Driven & Resourceful"}
                  </strong>
                  <span className="why-card-sub">
                    {
                      "I take initiative, learn independently, and turn ideas into tangible outcomes."
                    }
                  </span>
                </span>
                <span className="why-circle" aria-hidden="true"></span>
              </summary>
              <div className="why-card-body">
                <p className="why-proof-label">{"Evidence from my work"}</p>
                <div className="why-proof">
                  <h4>{"Independent AI Product Exploration — TerraBench"}</h4>
                  <p>
                    {
                      "I initiated an independent AI product case study to explore a problem in 3D quality review. Rather than stopping at a product concept, I defined defect categories, built an evaluation dataset, designed review workflows, and tested the solution to inform a product decision."
                    }
                  </p>
                  <button
                    type="button"
                    className="why-evidence-link"
                    data-case="terrabench"
                  >
                    {"Explore TerraBench "}
                    <span aria-hidden="true">{"↗"}</span>
                  </button>
                </div>
                <div className="why-proof">
                  <h4>{"AI-Assisted Building — Personal Portfolio"}</h4>
                  <p>
                    {
                      "I actively experiment with AI-assisted development tools to turn my own ideas into working digital experiences. I developed and iterated my portfolio website through AI-assisted coding, organizing project content, refining interactions, and publishing the result through GitHub Pages."
                    }
                  </p>
                  <a
                    className="why-evidence-link"
                    href="https://github.com/tl3505-stack/Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {"View portfolio repository "}
                    <span aria-hidden="true">{"↗"}</span>
                  </a>
                </div>
                <div className="why-proof">
                  <h4>{"Creative Technology Exploration — UE5 & Blender"}</h4>
                  <p>
                    {
                      "My curiosity extends beyond conventional product design. Through projects such as Day & Night and Plant Control, I explored real-time environments, 3D modeling, animation, and spatial storytelling to expand how I approach digital experiences."
                    }
                  </p>
                  <button
                    type="button"
                    className="why-evidence-link"
                    data-case="moonlight"
                  >
                    {"Day & Night "}
                    <span aria-hidden="true">{"↗"}</span>
                  </button>
                  <button
                    type="button"
                    className="why-evidence-link"
                    data-case="plant"
                  >
                    {"Plant Control "}
                    <span aria-hidden="true">{"↗"}</span>
                  </button>
                </div>
                <div className="why-takeaway">
                  <p className="micro">{"What this says about me"}</p>
                  <p>{"I learn through building, testing, and improving."}</p>
                </div>
              </div>
            </details>
            <details className="why-card sage">
              <summary>
                <span className="why-number">{"02"}</span>
                <span>
                  <strong className="why-card-title">
                    {"Analytical & Evidence-Driven"}
                  </strong>
                  <span className="why-card-sub">
                    {
                      "I approach problems rationally, combine user insights with data, and make decisions based on evidence."
                    }
                  </span>
                </span>
                <span className="why-circle" aria-hidden="true"></span>
              </summary>
              <div className="why-card-body">
                <p className="why-proof-label">{"Evidence from my work"}</p>
                <div className="why-proof">
                  <h4>{"User Research & Product Insights — Café Nomade"}</h4>
                  <p>
                    {
                      "I researched three competing products, identified five core user needs, and explored how natural-language inputs could reveal people's working preferences and café requirements. These insights informed personalized recommendation features and user experience decisions."
                    }
                  </p>
                  <button
                    type="button"
                    className="why-evidence-link"
                    data-case="cafe"
                  >
                    {"Explore Café Nomade "}
                    <span aria-hidden="true">{"↗"}</span>
                  </button>
                </div>
                <div className="why-proof">
                  <h4>{"Product Experimentation & Analytics — Café Nomade"}</h4>
                  <p>
                    {
                      "I used A/B testing, behavioral metrics, and user feedback to evaluate product iterations. Across a four-week test involving 50 campus seed users, activation increased from 25% to 60%, alongside a 20% improvement in Day-7 retention."
                    }
                  </p>
                  <p>
                    {
                      "These results reflect the broader product iteration, rather than the isolated impact of the AI feature."
                    }
                  </p>
                </div>
                <div className="why-proof">
                  <h4>
                    {"Structured Evaluation & Decision-Making — TerraBench"}
                  </h4>
                  <p>
                    {
                      "I designed a controlled pilot involving 30 samples and compared different AI and human review methods. Although rules improved AI agreement from 30% to 50%, the AI-assisted workflow increased review time without improving observed human review quality. Instead of prioritizing an impressive AI demonstration, I recommended holding the V1 launch."
                    }
                  </p>
                  <button
                    type="button"
                    className="why-evidence-link"
                    data-case="terrabench"
                  >
                    {"Explore evaluation results "}
                    <span aria-hidden="true">{"↗"}</span>
                  </button>
                </div>
                <div className="why-takeaway">
                  <p className="micro">{"What this says about me"}</p>
                  <p>
                    {
                      "I measure what matters, and challenge my assumptions when the evidence changes."
                    }
                  </p>
                </div>
              </div>
            </details>
            <details className="why-card peach">
              <summary>
                <span className="why-number">{"03"}</span>
                <span>
                  <strong className="why-card-title">
                    {"Structured Thinking & Execution"}
                  </strong>
                  <span className="why-card-sub">
                    {
                      "I break down ambiguous problems, organize complex workflows, and connect different disciplines to move ideas forward."
                    }
                  </span>
                </span>
                <span className="why-circle" aria-hidden="true"></span>
              </summary>
              <div className="why-card-body">
                <p className="why-proof-label">{"Evidence from my work"}</p>
                <div className="why-proof">
                  <h4>{"From Ambiguity to Actionable Systems — TerraBench"}</h4>
                  <p>
                    {
                      "I transformed a subjective spatial quality problem into a structured product framework: five defect categories, Ground Truth definitions, review workflows, evaluation criteria, and launch decision gates. This approach helped turn expert knowledge into a repeatable and measurable process."
                    }
                  </p>
                  <button
                    type="button"
                    className="why-evidence-link"
                    data-case="terrabench"
                  >
                    {"View evaluation framework "}
                    <span aria-hidden="true">{"↗"}</span>
                  </button>
                </div>
                <div className="why-proof">
                  <h4>{"From User Needs to Product Features — Café Nomade"}</h4>
                  <p>
                    {
                      "I connected user research, natural-language intent understanding, interaction design, and personalized recommendations into a coherent product experience. By integrating café discovery with calendars and daily activity planning, I worked to create a more connected user journey rather than a collection of disconnected features."
                    }
                  </p>
                  <button
                    type="button"
                    className="why-evidence-link"
                    data-case="cafe"
                  >
                    {"View product experience "}
                    <span aria-hidden="true">{"↗"}</span>
                  </button>
                </div>
                <div className="why-proof">
                  <h4>
                    {
                      "Cross-Disciplinary Problem Solving — Spatial & Digital Design"
                    }
                  </h4>
                  <p>
                    {
                      "My spatial design background trained me to work across research, visualization, technical tools, and human experience. In digital twin and interactive environment work, I translated complex spatial information into visual systems, interactive prototypes, and more understandable workflows."
                    }
                  </p>
                  <a className="why-evidence-link" href="#spatial">
                    {"Explore spatial work "}
                    <span aria-hidden="true">{"↗"}</span>
                  </a>
                </div>
                <div className="why-proof">
                  <h4>{"Prioritization & Iteration"}</h4>
                  <p>
                    {
                      "I approach projects by clarifying the problem, identifying constraints, defining priorities, testing assumptions, and adjusting the solution based on feedback."
                    }
                  </p>
                </div>
                <div className="why-takeaway">
                  <p className="micro">{"What this says about me"}</p>
                  <p>
                    {
                      "I organize ideas into clear steps and move them toward practical results."
                    }
                  </p>
                </div>
              </div>
            </details>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="contact-shell">
            <p className="section-tag">{"Contact · 06"}</p>
            <h2>{"Let's build better AI experiences."}</h2>
            <p className="contact-sub">
              {
                "I'm interested in AI Product Management, Product Design, and AI-powered digital experiences."
              }
            </p>
            <div className="contact-actions">
              <a
                className="contact-btn primary"
                href="mailto:tianjiaoshi998@gmail.com"
              >
                {"Email me"}
                <span aria-hidden="true" className="button-round-arrow">
                  {"↗"}
                </span>
              </a>
              <a className="contact-btn" href="#top">
                {"View portfolio "}
                <span className="arrow">{"↗"}</span>
              </a>
            </div>
            <div className="contact-meta">
              <span>{"© 2026 Tianjiao Shi"}</span>
              <div>
                <a href="mailto:tianjiaoshi998@gmail.com">{"Email"}</a>
                <a href="#ai">{"AI Projects"}</a>
                <a href="#top">{"Back to top ↑"}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div
        aria-label="Project case study"
        aria-modal="true"
        className="case-overlay"
        id="caseOverlay"
        role="dialog"
      >
        <button className="case-close" id="caseClose">
          {"Close ×"}
        </button>
        <div id="caseContents"></div>
      </div>
      <PortfolioInteractions />
    </>
  );
}
