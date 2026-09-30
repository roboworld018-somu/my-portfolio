import React, { useState } from "react";

const projects = [
  {
    title: "IP-SAKTI SAHAYAK",
    type: "Smart India Hackathon Project",
    description:
      "A multilingual, RAG-based AI assistant for source-cited Intellectual Property and regulatory guidance in Ayurveda across national and international regimes.",
    tags: ["React", "FastAPI", "Python", "RAG", "Gemini", "ChromaDB"],
    github: "#",
    demo: "#",
  },

  {
    title: "Smart SOS Auto-Dimming Light System",
    type: "IoT / Embedded Systems",
    description:
      "A smart lighting system designed with SOS functionality and automatic dimming to improve safety, automation and energy efficiency.",
    tags: ["Arduino", "Sensors", "IoT", "Embedded"],
    github: "#",
    demo: "https://www.image2url.com/r2/default/videos/1790770690811-9b0fbea5-4d43-434c-b65e-b0c8836ba58c.mp4",
  },

  {
    title: "LDR Sensor Security Alarm",
    type: "Embedded Systems",
    description:
      "A real-time security alarm system built using an LDR sensor and Arduino Uno to detect changes in light conditions and trigger an alarm response.",
    tags: ["Arduino Uno", "LDR", "Sensors", "Embedded"],
    github: "#",
    demo: "https://www.image2url.com/r2/default/videos/1790770810251-a9406bf7-f6b6-41a2-b5ce-799064db43ea.mp4",
  },

  {
    title: "DSA Practice",
    type: "C Programming",
    description:
      "Beginner-friendly implementations of arrays, searching, insertion, deletion, linked lists, stacks and other core data-structure concepts.",
    tags: ["C", "DSA", "Algorithms"],
    github: "#",
    demo: "#",
  },

  {
    title: "Personal Portfolio",
    type: "Web Development",
    description:
      "A responsive personal portfolio website built with React to showcase my skills, projects, achievements and learning journey.",
    tags: ["React", "JavaScript", "CSS", "Vite"],
    github: "#",
    demo: "#",
  },
];

const skills = [
  "C",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Vite",
  "FastAPI",
  "Arduino",
  "RAG",
  "Gemini API",
  "ChromaDB",
  "Git",
  "GitHub",
  "VS Code",
];

const currentlyLearning = ["C++", "DSA", "AI/RAG"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="site">
      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-dot">B</span>

          <span>
            Bidyut<span className="accent">.</span>
          </span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#achievements" onClick={closeMenu}>
            Achievements
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

          <a className="nav-resume" href="/resume.pdf" download>
            Resume ↓
          </a>
        </nav>
      </header>

      <main>
        {/* ================= HERO ================= */}
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Bidyut <span>Mondal</span>
            </h1>

            <h2>Computer Science Student & Developer</h2>

            <p className="hero-text">
              I enjoy building useful technology, learning by doing,
              and turning ideas into real-world projects.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>

              <a className="btn secondary" href="#contact">
                Let's Connect
              </a>
            </div>

            <div className="quick-links">
              <a
                href="https://github.com/roboworld018-somu"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/bidyut-mondal-6591893b2"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:bidyutm162@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="hero-visual">
            <div className="glow"></div>

            <div className="profile-card">
              <div className="profile-ring">
                <img
                  src="/profile.png"
                  alt="Bidyut Mondal"
                />
              </div>

              <div className="profile-caption">
                <strong>Building. Learning. Innovating.</strong>

                <span>
                  CS Student • Developer • Tech Enthusiast
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span>

            <div>
              <p className="eyebrow">ABOUT ME</p>

              <h2>
                Curious about technology,
                <br />
                focused on building.
              </h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Computer Science and Engineering student
                interested in software development, artificial
                intelligence and problem-solving.
              </p>

              <p>
                I learn best by building projects, participating
                in hackathons, exploring new technologies and
                strengthening my fundamentals step by step.
              </p>

              <p>
                My current focus is on software development,
                web development, DSA and AI/RAG technologies
                while creating projects that solve practical
                problems.
              </p>
            </div>

            <div className="about-facts">
              <div>
                <span>Focus</span>
                <strong>Software Development</strong>
              </div>

              <div>
                <span>Interests</span>
                <strong>AI • Web • DSA</strong>
              </div>

              <div>
                <span>Currently Learning</span>
                <strong>C++ • DSA • AI/RAG</strong>
              </div>

              <div>
                <span>Approach</span>
                <strong>Learn by Building</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}
        <section id="skills" className="section muted">
          <div className="section-heading">
            <span>02</span>

            <div>
              <p className="eyebrow">SKILLS</p>

              <h2>Technologies I work with.</h2>
            </div>
          </div>

          <div className="skill-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>

          {/* CURRENTLY LEARNING */}
          <div className="learning-box">
            <p className="eyebrow">CURRENTLY LEARNING</p>

            <div className="skill-grid">
              {currentlyLearning.map((skill) => (
                <div className="skill learning" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROJECTS ================= */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span>03</span>

            <div>
              <p className="eyebrow">PROJECTS</p>

              <h2>Things I've been building.</h2>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.title}
              >
                <div className="project-top">
                  <span className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}
        <section className="section leadership-section">
          <div className="section-heading">
            <span>04</span>

            <div>
              <p className="eyebrow">LEADERSHIP</p>

              <h2>Teamwork & leadership.</h2>
            </div>
          </div>

          <div className="leadership-card">
            <div className="leadership-year">
              2026
            </div>

            <div>
              <p className="timeline-label">
                SMART INDIA HACKATHON
              </p>

              <h3>
                Team Leader — SIH Internal Hackathon
              </h3>

              <p>
                Led the team during the development and
                presentation of IP-SAKTI SAHAYAK, an AI/RAG-based
                solution for Ayurveda-related intellectual
                property and regulatory guidance.
              </p>

              <div className="tags">
                <span>Team Leadership</span>
                <span>AI/RAG</span>
                <span>Project Development</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS ================= */}
        <section id="achievements" className="section muted">
          <div className="section-heading">
            <span>05</span>

            <div>
              <p className="eyebrow">ACHIEVEMENTS</p>

              <h2>Milestones along the journey.</h2>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div>
                <p className="timeline-label">
                  2026
                </p>

                <h3>
                  SIH Internal Hackathon — Shortlisted
                </h3>

                <p>
                  Worked as Team Leader with the team on
                  IP-SAKTI SAHAYAK, an AI-powered solution
                  for Ayurveda IP and regulatory guidance.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div>
                <p className="timeline-label">
                  2026
                </p>

                <h3>
                  Zero to Hackathon: Build & Break
                </h3>

                <p>
                  Participated in a hands-on workshop focused
                  on hackathons, project building, innovation
                  and problem-solving.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>

              <div>
                <p className="timeline-label">
                  ONGOING
                </p>

                <h3>
                  Continuous Learning
                </h3>

                <p>
                  Practising DSA, web development, Python,
                  C++, embedded systems and AI/RAG concepts
                  through projects and coursework.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <p className="eyebrow">
              06 — CONTACT
            </p>

            <h2>
              Let's build something
              <br />
              <span>meaningful.</span>
            </h2>

            <p>
              Have a project idea, internship opportunity,
              or just want to connect? Feel free to reach out.
            </p>

            <a
              className="btn primary"
              href="mailto:bidyutm162@gmail.com"
            >
              Say Hello ↗
            </a>

            <div className="contact-details">
              <a href="mailto:bidyutm162@gmail.com">
                bidyutm162@gmail.com
              </a>

              <a
                href="https://github.com/roboworld018-somu"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/bidyut-mondal-6591893b2"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>
          © {new Date().getFullYear()} Bidyut Mondal.
          Built with React.
        </p>

        <a href="#home">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;