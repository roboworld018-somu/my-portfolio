import React, { useState } from "react";

const projects = [
  {
    title: "IP-SAKTI SAHAYAK",
    type: "Smart India Hackathon Project",
    description:
      "A multilingual, RAG-based AI assistant that provides source-cited Intellectual Property and regulatory guidance for Ayurveda across national and international regimes.",
    tags: ["React", "FastAPI", "Python", "RAG", "Gemini", "ChromaDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "DSA Practice",
    type: "C Programming",
    description:
      "A collection of beginner-friendly implementations covering arrays, searching, insertion, deletion, linked lists, stacks and other core data-structure concepts.",
    tags: ["C", "DSA", "Algorithms"],
    github: "#",
    demo: "#"
  },
  {
    title: "Personal Portfolio",
    type: "Web Development",
    description:
      "A responsive personal portfolio website designed to showcase my skills, projects, achievements and learning journey.",
    tags: ["React", "JavaScript", "CSS", "Vite"],
    github: "#",
    demo: "#"
  }
];

const skills = [
  "C", "Python", "JavaScript", "HTML", "CSS",
  "React", "FastAPI", "Git", "GitHub", "RAG", "Gemini API", "ChromaDB"
];

// ADD YOUR 6 CERTIFICATES HERE
const certificates = [
  {
    title: "Certificate 01",
    issuer: "Organization Name",
    date: "2026",
    image: "/certificates/certificate_1.jpeg"
  },
  {
    title: "Certificate 02",
    issuer: "Organization Name",
    date: "2026",
    image: "/certificates/certificate_2.jpeg"
  },
  {
    title: "Certificate 03",
    issuer: "Organization Name",
    date: "2026",
    image: "/certificates/certificate_3.jpeg"
  },
  {
    title: "Certificate 04",
    issuer: "Organization Name",
    date: "2026",
    image: "/certificates/certificate_4.jpeg"
  },
  {
    title: "Certificate 05",
    issuer: "Organization Name",
    date: "2026",
    image: "/certificates/certificate_5.jpeg"
  },
  {
    title: "Certificate 06",
    issuer: "Organization Name",
    date: "2026",
    image: "/certificates/certificate_6.jpeg"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-dot">B</span>
          <span>Bidyut<span className="accent">.</span></span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Achievements", "Certificates", "Contact"].map((item) => (
            <a key={item} href={'#' + item.toLowerCase()} onClick={closeMenu}>
              {item}
            </a>
          ))}
          <a
            className="nav-resume"
            href="/Bidyut_Mondal_Resume.pdf"
            download="Bidyut_Mondal_Resume.pdf"
          >
            Resume ↓
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Bidyut <span>Mondal</span></h1>
            <h2>Computer Science Student & Developer</h2>
            <p className="hero-text">
              I enjoy building useful technology, learning by doing, and turning
              ideas into real projects.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn secondary" href="#contact">Let's Connect</a>
            </div>

            <div className="quick-links">
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="mailto:bidyutm162@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="glow"></div>
            <div className="profile-card">
              <div className="profile-ring">
                <img src="/profile.png" alt="Bidyut Mondal professional headshot" />
              </div>
              <div className="profile-caption">
                <strong>Building. Learning. Innovating.</strong>
                <span>CS Student • Developer • Tech Enthusiast</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span>
            <div>
              <p className="eyebrow">ABOUT ME</p>
              <h2>Curious about technology,<br />focused on building.</h2>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Computer Science student who is interested in software
                development, artificial intelligence and problem-solving.
              </p>
              <p>
                I learn best by building projects, participating in hackathons,
                exploring new technologies and improving my fundamentals step by step.
              </p>
              <p>
                My current focus is strengthening my programming, web development,
                DSA and AI/RAG skills while creating projects that solve practical problems.
              </p>
            </div>

            <div className="about-facts">
              <div><span>Focus</span><strong>Software Development</strong></div>
              <div><span>Interests</span><strong>AI • Web • DSA</strong></div>
              <div><span>Currently Learning</span><strong>React • Python • RAG</strong></div>
              <div><span>Approach</span><strong>Learn by Building</strong></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <div className="section-heading">
            <span>02</span>
            <div>
              <p className="eyebrow">SKILLS</p>
              <h2>Tools I use to build.</h2>
            </div>
          </div>

          <div className="skill-grid">
            {skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}
          </div>
        </section>

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
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <span className="project-number">0{index + 1}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.github}>GitHub ↗</a>
                  <a href={project.demo}>Live Demo ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="achievements" className="section muted">
          <div className="section-heading">
            <span>04</span>
            <div>
              <p className="eyebrow">ACHIEVEMENTS</p>
              <h2>Milestones along the journey.</h2>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-label">2026</p>
                <h3>SIH Internal Hackathon — Shortlisted</h3>
                <p>Worked with my team on IP-SAKTI SAHAYAK, an AI-powered solution for Ayurveda IP and regulatory guidance.</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-label">2026</p>
                <h3>Zero to Hackathon: Build & Break</h3>
                <p>Participated in a hands-on workshop focused on hackathons, project building, innovation and problem-solving.</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div>
                <p className="timeline-label">Ongoing</p>
                <h3>Continuous Learning</h3>
                <p>Practising DSA, web development, Python and AI/RAG concepts through projects and coursework.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="section">
          <div className="section-heading">
            <span>05</span>
            <div>
              <p className="eyebrow">CERTIFICATES</p>
              <h2>Learning, growing and achieving.</h2>
            </div>
          </div>

          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <article className="certificate-card" key={certificate.title}>
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={'View ' + certificate.title}
                >
                  <img
                    className="certificate-image"
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                  />
                </a>

                <div className="certificate-content">
                  <span className="certificate-date">{certificate.date}</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issuer}</p>
                  <a
                    className="certificate-btn"
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card">
            <p className="eyebrow">06 — CONTACT</p>
            <h2>Let's build something<br /><span>meaningful.</span></h2>
            <p>
              Have a project idea, internship opportunity or just want to connect?
              Feel free to reach out.
            </p>
            <a className="btn primary" href="mailto:bidyutm162@gmail.com">
              Say Hello ↗
            </a>

            <div className="contact-details">
              <a href="mailto:bidyutm162@gmail.com">bidyutm162@gmail.com</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Bidyut Mondal. Built with React.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
