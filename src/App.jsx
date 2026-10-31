import React from 'react'
import resume from './assets/cv.pdf'

const dreamIcon = 'https://raw.githubusercontent.com/NavSudheer/DreamAlchemy/master/assets/images/icon.png'
const glowImage = 'https://user-images.githubusercontent.com/9670009/214174853-16cd29d8-583e-4d3c-b233-d7de6b5283c4.png'

const App = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="site-header">
        <a className="name" href="#top">Navaneeth Sudheer</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href={resume} target="_blank" rel="noreferrer">Résumé ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero page-width">
          <div>
            <p className="label"><span className="status"></span> Toronto, Canada</p>
            <h1>AI &amp; Machine<br />Learning Engineer</h1>
          </div>
          <div className="hero-intro">
            <p className="lead">I build reliable AI systems for complex, high-stakes decisions.</p>
            <p>Currently working in risk innovation at BMO, with a focus on agentic workflows, evaluation, decisioning infrastructure, and production machine learning.</p>
            <div className="links">
              <a href="https://www.linkedin.com/in/navsudheer" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/navsudheer" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={resume} target="_blank" rel="noreferrer">Résumé ↗</a>
            </div>
          </div>
        </section>

        <section className="summary page-width" aria-label="Career highlights">
          <div><strong>5+ years</strong><span>Production engineering</span></div>
          <div><strong>100%</strong><span>Portfolio review coverage</span></div>
          <div><strong>15K+</strong><span>Visitors to shipped AI products</span></div>
        </section>

        <section className="section page-width" id="work">
          <header className="section-header">
            <p className="label">Selected work</p>
            <h2>Systems designed to work<br /><em>beyond the demo.</em></h2>
          </header>

          <div className="work-list">
            <article className="work-item">
              <span className="number">01</span>
              <div>
                <h3>Multi-agent loan review</h3>
                <p>Architected a LangGraph workflow with reviewer and verifier agents, deterministic profile-level scoring, and human review for uncertain cases.</p>
              </div>
              <div className="detail">
                <strong>40% sampling → full portfolio coverage</strong>
                <span>LangGraph · Python · Evaluation · Human-in-the-loop</span>
              </div>
            </article>

            <article className="work-item">
              <span className="number">02</span>
              <div>
                <h3>Enterprise recommendation RAG</h3>
                <p>Built a product recommendation system using Bedrock and vector search, supported by guardrails, LLM-as-judge evaluation, monitoring, and responsible-AI controls.</p>
              </div>
              <div className="detail">
                <strong>From prototype to production architecture</strong>
                <span>AWS Bedrock · OpenSearch · RAG · Observability</span>
              </div>
            </article>

            <article className="work-item">
              <span className="number">03</span>
              <div>
                <h3>Decisioning tools for AI agents</h3>
                <p>Created a Python and FastAPI MCP server that exposes established credit-decisioning services as controlled, typed tools for AI agents.</p>
              </div>
              <div className="detail">
                <strong>Connecting AI workflows to real business systems</strong>
                <span>MCP · FastAPI · REST · GraphQL · Tool calling</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section page-width" id="experience">
          <header className="section-header compact">
            <p className="label">Experience</p>
            <h2>Building at the intersection of<br /><em>ML, software, and risk.</em></h2>
          </header>

          <div className="experience-list">
            <div className="experience-row">
              <span>2025 — Present</span>
              <div><strong>Senior Technology Specialist</strong><small>BMO · Risk Innovation &amp; Decision Management</small></div>
              <p>Agentic AI, production ML systems, evaluation, RAG, and decisioning infrastructure.</p>
            </div>
            <div className="experience-row">
              <span>2022 — 2025</span>
              <div><strong>Senior Software Developer</strong><small>BMO</small></div>
              <p>Modernized decision systems, production APIs, data pipelines, and cloud integrations.</p>
            </div>
            <div className="experience-row">
              <span>2021 — 2022</span>
              <div><strong>Software Developer</strong><small>BMO</small></div>
              <p>Credit strategy implementation, risk models, and production support.</p>
            </div>
          </div>
        </section>

        <section className="section page-width projects">
          <header className="section-header compact">
            <p className="label">Independent projects</p>
            <h2>Products I’ve shipped.</h2>
          </header>
          <div className="project-grid">
            <a className="project" href="https://github.com/NavSudheer/DreamAlchemy" target="_blank" rel="noreferrer">
              <div className="project-image dream-image"><img src={dreamIcon} alt="Dream Alchemy app icon" /></div>
              <div className="project-body">
                <div className="project-top"><span>01</span><span>View project ↗</span></div>
                <h3>Dream Alchemy</h3>
                <p>A mobile AI product for Jungian dream analysis, with voice input, structured interpretations, history, and interactive exploration.</p>
                <small>React Native · Expo · GPT-4 · FastAPI · PostgreSQL</small>
              </div>
            </a>
            <a className="project" href="https://github.com/NavSudheer/GlowAI" target="_blank" rel="noreferrer">
              <div className="project-image glow-image"><img src={glowImage} alt="Minimal skincare products representing Glow AI" /></div>
              <div className="project-body">
                <div className="project-top"><span>02</span><span>View project ↗</span></div>
                <h3>Glow AI</h3>
                <p>A personalized skincare routine generator that reached more than 15,000 visitors.</p>
                <small>Next.js · OpenAI · Product design · Analytics</small>
              </div>
            </a>
          </div>
        </section>

        <section className="section page-width about" id="about">
          <p className="label">About</p>
          <div className="about-grid">
            <h2>Statistics foundations.<br />Engineering discipline.<br /><em>Curiosity about what’s next.</em></h2>
            <div>
              <p>I studied Statistics at the University of Toronto, with minors in Mathematics and Computer Science. That mix still shapes how I work: understand the uncertainty, design the system, and measure whether it actually works.</p>
              <p>I’m especially interested in reinforcement learning, planning, world models, representation learning, and next-generation AI architectures.</p>
              <p className="personal">Outside work: rock climbing, soccer, manga, and finding good food around Toronto.</p>
            </div>
          </div>
        </section>

        <section className="contact page-width">
          <p className="label">Get in touch</p>
          <h2>Interested in thoughtful,<br />production-minded AI?</h2>
          <a className="contact-link" href="https://www.linkedin.com/in/navsudheer" target="_blank" rel="noreferrer">Let’s talk on LinkedIn ↗</a>
        </section>
      </main>

      <footer className="site-footer page-width">
        <span>© {year} Navaneeth Sudheer</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
