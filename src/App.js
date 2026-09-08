import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import ThreeHeroScene from "./Components/ThreeHeroScene";
import ArchitectureVisualizer from "./Components/ArchitectureVisualizer";
import ResumeModal from "./Components/ResumeModal";
import {
  personalDetails,
  keyAchievements,
  experienceData,
  technicalSkills,
  featuredProjects,
  mediumBlogs,
  educationData,
  languages,
} from "./data/portfolioData";
import avatar from "./img/avatar.png";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaWhatsapp,
  FaFilePdf,
  FaDownload,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaBrain,
  FaServer,
  FaDatabase,
  FaCloud,
  FaPlug,
  FaLaptopCode,
  FaPaperPlane,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const skillCategoryIcons = {
  ai: <FaBrain />,
  backend: <FaServer />,
  database: <FaDatabase />,
  cloud: <FaCloud />,
  integration: <FaPlug />,
  frontend: <FaLaptopCode />,
};

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState("All");

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildPrefilledBody = () => {
    const senderName = formData.name ? formData.name.trim() : "Visitor";
    const senderEmail = formData.email ? formData.email.trim() : "Not provided";
    const userMsg = formData.message
      ? formData.message.trim()
      : "Hi Vishal, I came across your portfolio and would like to connect regarding an opportunity.";

    return `Hi Vishal,\n\n${userMsg}\n\n---\nSender Details:\nName: ${senderName}\nEmail: ${senderEmail}\nSubject: ${formData.subject || "Collaboration Inquiry"}`;
  };

  const handleOpenGmail = (e) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(buildPrefilledBody());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalDetails.email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    toast.success("Opening Gmail in a new tab with your prefilled message!");
  };

  const handleOpenOutlook = (e) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(buildPrefilledBody());
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${personalDetails.email}&subject=${subject}&body=${body}`;
    window.open(outlookUrl, "_blank");
    toast.success("Opening Outlook in a new tab with your prefilled message!");
  };

  const handleOpenDefaultMail = (e) => {
    if (e) e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name || "Visitor"}`);
    const body = encodeURIComponent(buildPrefilledBody());
    const mailtoUrl = `mailto:${personalDetails.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    toast.info("Opening default mail application with prefilled details!");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/patil120140@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}: ${formData.subject}`,
          _template: "table",
        }),
      });

      const resData = await response.json();

      if (response.ok && (resData.success === "true" || resData.success === true)) {
        toast.success("Message transmitted! Delivered directly to patil120140@gmail.com.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // Fallback directly to Gmail prefilled compose
        handleOpenGmail();
      }
    } catch (err) {
      handleOpenGmail();
    } finally {
      setIsSending(false);
    }
  };

  // Filter projects
  const filteredProjects =
    activeProjectFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeProjectFilter);

  return (
    <div className="portfolio-app">
      <ToastContainer
        position="bottom-right"
        theme={theme === "light" ? "light" : "dark"}
        autoClose={4000}
      />

      {/* Floating Modern Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-avatar-card">
              <div className="avatar-frame">
                <img src={avatar} alt={personalDetails.name} className="profile-img" />
                <span className="online-beacon"></span>
              </div>
              <div className="avatar-meta">
                <div className="status-indicator">
                  <span className="live-dot"></span>
                  <span>{personalDetails.status}</span>
                </div>
                <div className="hero-exp-tag">
                  Lead Software Engineer @ HexaHealth • 4+ Yrs High-Scale Backend
                </div>
              </div>
            </div>

            <h1 className="hero-headline">
              Hi, I'm <span className="gradient-name">{personalDetails.name}</span>
            </h1>

            <div className="hero-subheadline">{personalDetails.tagline}</div>

            <div className="hero-location">
              <FaMapMarkerAlt />
              <span>{personalDetails.location}</span>
            </div>

            <p className="hero-bio">{personalDetails.summary}</p>

            <div className="hero-cta-group">
              <a href="#architecture" className="btn-primary">
                <span>Explore Architecture</span>
                <FaArrowRight />
              </a>

              <button onClick={() => setResumeOpen(true)} className="btn-secondary">
                <FaFilePdf />
                <span>Resume (PDF)</span>
              </button>

              <a href={personalDetails.resumeUrl} download="Vishal_Patil_Resume.pdf" className="btn-secondary" title="Direct Download PDF">
                <FaDownload />
                <span>Download</span>
              </a>
            </div>

            <div className="hero-social-strip">
              <span>Direct Reach:</span>
              <a
                href={personalDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle whatsapp"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp (+91 797 231 8018)"
              >
                <FaWhatsapp />
              </a>
              <a
                href={personalDetails.callUrl}
                className="social-circle call"
                aria-label="Call Directly (Phone Dialer)"
                title="Call Directly (+91 797 231 8018)"
              >
                <FaPhoneAlt />
              </a>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href={personalDetails.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle"
                aria-label="Medium Articles"
                title="Medium Articles"
              >
                <FaMedium />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                className="social-circle"
                aria-label="Send Email"
                title="Send Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Interactive 3D Canvas Visualizer */}
          <div className="hero-visual">
            <ThreeHeroScene theme={theme} />
          </div>
        </div>
      </section>

      {/* Production Impact & Key Metrics Banner */}
      <section className="section-container" id="impact">
        <div className="section-header">
          <div className="section-pill">Quantifiable Production Impact</div>
          <h2 className="section-title">Scale, Reliability & Business Lift</h2>
          <p className="section-desc">
            Measurable engineering achievements architecting enterprise microservices, real-time voice automation, and distributed payment systems at HexaHealth.
          </p>
        </div>

        <div className="impact-grid">
          {keyAchievements.map((item, idx) => (
            <div
              key={idx}
              className="metric-card"
              style={{ "--metric-gradient": item.gradient }}
            >
              <div className="metric-value">{item.metric}</div>
              <div className="metric-sub">{item.sub}</div>
              <div className="metric-label">{item.label}</div>
              <p className="metric-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System Architecture & Voice AI Interactive Visualizer */}
      <ArchitectureVisualizer />

      {/* Professional Experience Section */}
      <section className="section-container" id="experience">
        <div className="section-header">
          <div className="section-pill">Career Journey</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-desc">
            4+ years building high-throughput backend infrastructure, AI state machines, and resilient microservice ecosystems.
          </p>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp) => (
            <div key={exp.id} className="exp-card">
              <div className="exp-header">
                <div className="exp-title-group">
                  <h3>{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-location">{exp.location}</span>
                </div>
              </div>

              <div className="badge-row">
                {exp.badges.map((b, i) => (
                  <span key={i} className="badge-tag">
                    {b}
                  </span>
                ))}
              </div>

              <div className="exp-pillars-list">
                {exp.highlights.map((pillar, pIdx) => (
                  <div key={pIdx} className="exp-pillar">
                    <div className="pillar-title">{pillar.title}</div>
                    <ul className="exp-bullets">
                      {pillar.points.map((pt, ptIdx) => (
                        <li key={ptIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Technical Skills Arsenal */}
      <section className="section-container" id="skills">
        <div className="section-header">
          <div className="section-pill">Technical Arsenal</div>
          <h2 className="section-title">Core Competencies & Stack</h2>
          <p className="section-desc">
            Specialized in distributed backend systems, real-time voice AI pipelines, high-volume database engineering, and cloud scalability.
          </p>
        </div>

        <div className="skills-grid">
          {technicalSkills.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  {skillCategoryIcons[cat.icon] || <FaServer />}
                </div>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-chips">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="section-container" id="projects">
        <div className="section-header">
          <div className="section-pill">Engineering Portfolio</div>
          <h2 className="section-title">Featured Projects & Systems</h2>
          <p className="section-desc">
            From conversational AI pipelines and enterprise gateways to full-stack platform replicas.
          </p>
        </div>

        <div className="project-filters">
          {["All", "AI & Voice", "Backend Systems", "AI & Cloud", "Web Applications"].map(
            (cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeProjectFilter === cat ? "active" : ""}`}
                onClick={() => setActiveProjectFilter(cat)}
              >
                {cat}
              </button>
            )
          )}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img-wrap">
                {project.image ? (
                  <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                  <div className="project-placeholder-visual">
                    {project.category.includes("AI") ? (
                      <FaBrain />
                    ) : (
                      <FaServer />
                    )}
                    <span>{project.category}</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <span className="project-category-badge">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tagline">{project.tagline}</div>
                <div className="project-metrics-pill">{project.metrics}</div>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((t, i) => (
                    <span key={i} className="project-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      <span>Code Repo</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target={project.links.demo.startsWith("#") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                      <span>{project.links.demo.startsWith("#") ? "View Architecture" : "Live Demo"}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Medium Technical Publications Section */}
      <section className="section-container" id="blogs">
        <div className="section-header">
          <div className="section-pill">Knowledge Sharing</div>
          <h2 className="section-title">Medium Publications & Articles</h2>
          <p className="section-desc">
            Deep technical dives into database internals, MySQL optimizations, concurrency, and distributed system design.
          </p>
        </div>

        {/* Medium Lead Banner */}
        <div className="medium-lead-box">
          <div className="medium-lead-left">
            <FaMedium className="medium-logo-icon" />
            <div className="medium-lead-text">
              <h3>Follow Vishal Patil on Medium</h3>
              <p>Read 10+ published architectural articles on MySQL Partitioning, Replication, ACID Transactions, and System Design.</p>
            </div>
          </div>
          <a
            href={personalDetails.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Visit @Vishal_Patil</span>
            <FaExternalLinkAlt />
          </a>
        </div>

        <div className="blogs-grid">
          {mediumBlogs.map((blog) => (
            <a
              key={blog.id}
              href={blog.src}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <div className="blog-thumb">
                <img src={blog.image} alt={blog.title} loading="lazy" />
                <span className="blog-meta-date">{blog.date}</span>
              </div>
              <div className="blog-body">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
                <div className="blog-tags">
                  {blog.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="blog-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="blog-read-cta">
                  <span>Read Article on Medium</span>
                  <FaArrowRight />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Education & Languages Section */}
      <section className="section-container" id="education">
        <div className="section-header">
          <div className="section-pill">Academic Credentials</div>
          <h2 className="section-title">Education & Languages</h2>
          <p className="section-desc">
            Strong academic distinction and linguistic versatility.
          </p>
        </div>

        <div className="edu-lang-grid">
          <div className="edu-card-group">
            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-item">
                <h4>{edu.degree}</h4>
                <div className="edu-school">{edu.institution}</div>
                <div className="edu-details">
                  <span>{edu.period}</span>
                  <span className="edu-score">{edu.score}</span>
                </div>
                <p className="edu-desc">{edu.details}</p>
              </div>
            ))}
          </div>

          <div className="lang-card">
            <h3>Spoken Languages</h3>
            <div className="lang-list">
              {languages.map((lang, idx) => (
                <div key={idx} className="lang-row">
                  <div className="lang-name">
                    <FaCheckCircle style={{ color: "#10b981", marginRight: "8px" }} />
                    {lang.language}
                  </div>
                  <span className="lang-level">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container" id="contact">
        <div className="section-header">
          <div className="section-pill">Get In Touch</div>
          <h2 className="section-title">Let's Build Something Exceptional</h2>
          <p className="section-desc">
            Looking for a Lead Software Engineer with proven scale in Node.js, AI systems, and microservices? Reach out directly.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Info Tiles */}
          <div className="contact-info-panel">
            <a
              href={personalDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-tile whatsapp-tile"
              title="Open WhatsApp Chat"
            >
              <div className="tile-icon whatsapp-icon-bg">
                <FaWhatsapp />
              </div>
              <div className="tile-info">
                <h4>WhatsApp (Instant)</h4>
                <p>{personalDetails.phone}</p>
              </div>
            </a>

            <a
              href={personalDetails.callUrl}
              className="contact-tile call-tile"
              title="Trigger Phone Dialer"
            >
              <div className="tile-icon call-icon-bg">
                <FaPhoneAlt />
              </div>
              <div className="tile-info">
                <h4>Direct Call (Dialer)</h4>
                <p>{personalDetails.phone}</p>
              </div>
            </a>

            <a href={`mailto:${personalDetails.email}`} className="contact-tile">
              <div className="tile-icon">
                <FaEnvelope />
              </div>
              <div className="tile-info">
                <h4>Email Directly</h4>
                <p>{personalDetails.email}</p>
              </div>
            </a>

            <div className="contact-tile">
              <div className="tile-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="tile-info">
                <h4>Location</h4>
                <p>{personalDetails.location}</p>
              </div>
            </div>

            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-tile"
            >
              <div className="tile-icon">
                <FaLinkedin />
              </div>
              <div className="tile-info">
                <h4>LinkedIn Network</h4>
                <p>linkedin.com/in/vishal-patil17</p>
              </div>
            </a>

            <a
              href={personalDetails.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-tile"
            >
              <div className="tile-icon">
                <FaMedium />
              </div>
              <div className="tile-info">
                <h4>Medium Blog</h4>
                <p>medium.com/@Vishal_Patil</p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Opportunity / Collaboration / Project Inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Share details about the role, project, or inquiry..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="contact-actions-cluster">
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  disabled={isSending}
                >
                  <FaPaperPlane />
                  <span>{isSending ? "Transmitting..." : "Send Direct Message (Instant)"}</span>
                </button>

                <div className="email-client-divider">
                  <span>OR OPEN PREFILLED DIRECTLY IN</span>
                </div>

                <div className="prefilled-apps-grid">
                  <button
                    type="button"
                    onClick={handleOpenGmail}
                    className="client-btn gmail"
                    title="Open Gmail with prefilled name, email, subject, and message"
                  >
                    <SiGmail className="client-icon" />
                    <span>Open in Gmail</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenOutlook}
                    className="client-btn outlook"
                    title="Open Outlook with prefilled name, email, subject, and message"
                  >
                    <SiMicrosoftoutlook className="client-icon" />
                    <span>Open in Outlook</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenDefaultMail}
                    className="client-btn default-mail"
                    title="Open default system mail client"
                  >
                    <FaEnvelope className="client-icon" />
                    <span>Default Mail App</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <h4>{personalDetails.name}</h4>
            <p>{personalDetails.tagline}</p>
          </div>

          <div className="footer-nav">
            <a href="#hero">Overview</a>
            <a href="#impact">Impact</a>
            <a href="#experience">Experience</a>
            <a href="#architecture">Architecture</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#blogs">Medium</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Vishal Patil. Crafted for high-scale engineering.</span>
          <span>Pune, India • Open to Relocation</span>
        </div>
      </footer>

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
