import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  FaBars,
  FaTimes,
  FaFilePdf,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaWhatsapp,
  FaPhoneAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { personalDetails } from "../data/portfolioData";
import avatar from "../img/avatar.png";

const navLinks = [
  { name: "Overview", href: "#hero" },
  { name: "Impact", href: "#impact" },
  { name: "Experience", href: "#experience" },
  { name: "Architecture", href: "#architecture" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ onOpenResume, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <NavWrapper className={isScrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        {/* Brand Logo */}
        <a href="#hero" className="brand-logo">
          <div className="avatar-brand-circle">
            <img src={avatar} alt="Vishal Patil" />
          </div>
          <div className="brand-text">
            <span className="name">{personalDetails.name}</span>
            <span className="role-tag">Backend & AI Systems</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA Area: WhatsApp, Call, Socials + Theme Toggle + Resume + Mobile */}
        <div className="nav-right">
          {/* Quick Direct Actions: WhatsApp & Call Dialer */}
          <div className="social-quick">
            <a
              href={personalDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link whatsapp-icon"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp (+91 797 231 8018)"
            >
              <FaWhatsapp />
            </a>
            <a
              href={personalDetails.callUrl}
              className="nav-icon-link call-icon"
              aria-label="Call Directly (Phone Dialer)"
              title="Call Directly (+91 797 231 8018)"
            >
              <FaPhoneAlt />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="GitHub"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href={personalDetails.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="Medium"
              title="Medium Publications"
            >
              <FaMedium />
            </a>
          </div>

          {/* Clean 2-Mode Theme Toggle (Light / Dark) */}
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <>
                <FaSun className="theme-icon sun" />
                <span className="theme-text">Light</span>
              </>
            ) : (
              <>
                <FaMoon className="theme-icon moon" />
                <span className="theme-text">Dark</span>
              </>
            )}
          </button>

          <button onClick={onOpenResume} className="resume-btn" aria-label="View and Download Resume">
            <FaFilePdf />
            <span>Resume</span>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-theme-bar">
            <button className="theme-toggle-btn full" onClick={toggleTheme}>
              {theme === "dark" ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
              <span>{theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
            </button>
          </div>

          <div className="mobile-direct-actions">
            <a
              href={personalDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-action-pill whatsapp"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a
              href={personalDetails.callUrl}
              className="mobile-action-pill call"
            >
              <FaPhoneAlt />
              <span>Call Dialer</span>
            </a>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <div className="mobile-cta-area">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="resume-btn full-width"
            >
              <FaFilePdf />
              <span>View / Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </NavWrapper>
  );
};

const NavWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1.1rem 2rem;

  &.scrolled {
    background: var(--navbar-bg);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-subtle);
    padding: 0.75rem 2rem;
    box-shadow: var(--shadow-card);
  }

  .nav-inner {
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .brand-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;

    .avatar-brand-circle {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 2px solid var(--accent-main);
      box-shadow: 0 0 12px var(--accent-pill-border);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-secondary);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .brand-text {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 1.15rem;
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -0.3px;
      }

      .role-tag {
        font-size: 0.72rem;
        color: var(--accent-main);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
      }
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    padding: 0.45rem 1.25rem;
    border-radius: 9999px;
    backdrop-filter: blur(10px);

    @media (max-width: 1100px) {
      display: none;
    }

    .nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 500;
      transition: all 0.2s ease;
      position: relative;
      padding: 0.35rem 0.2rem;

      &:hover {
        color: var(--text-primary);
      }

      &.active {
        color: var(--accent-main);
        font-weight: 600;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent-main);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--accent-main);
        }
      }
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 1rem;

    .social-quick {
      display: flex;
      align-items: center;
      gap: 0.65rem;

      @media (max-width: 900px) {
        display: none;
      }

      .nav-icon-link {
        color: var(--text-secondary);
        font-size: 1.15rem;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--bg-card);
        border: 1px solid var(--border-subtle);

        &:hover {
          color: var(--accent-main);
          transform: translateY(-2px);
          border-color: var(--accent-main);
        }

        &.whatsapp-icon:hover {
          color: #25d366;
          border-color: #25d366;
          box-shadow: 0 0 10px rgba(37, 211, 102, 0.3);
        }

        &.call-icon:hover {
          color: #38bdf8;
          border-color: #38bdf8;
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
        }
      }
    }

    .theme-toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      color: var(--text-primary);
      padding: 0.45rem 0.95rem;
      border-radius: 9999px;
      font-size: 0.84rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        border-color: var(--accent-main);
        color: var(--accent-main);
        transform: translateY(-1px);
      }

      &.full {
        width: 100%;
        justify-content: center;
        padding: 0.65rem 1rem;
      }

      .theme-icon {
        font-size: 0.95rem;

        &.sun {
          color: #f59e0b;
        }
        &.moon {
          color: #818cf8;
        }
      }

      .theme-text {
        font-size: 0.8rem;
      }
    }

    .resume-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--accent-gradient);
      color: var(--accent-btn-text);
      font-weight: 700;
      font-size: 0.88rem;
      padding: 0.55rem 1.25rem;
      border-radius: 9999px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px var(--accent-pill-border);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px var(--accent-pill-border);
      }
    }

    .mobile-toggle {
      display: none;
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-size: 1.4rem;
      cursor: pointer;
      padding: 0.4rem;

      @media (max-width: 1100px) {
        display: flex;
      }
    }
  }

  .mobile-drawer {
    display: none;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 1.5rem;
    box-shadow: var(--shadow-card);
    backdrop-filter: blur(20px);

    @media (max-width: 1100px) {
      display: flex;
    }

    .mobile-theme-bar {
      padding-bottom: 0.75rem;
      border-bottom: 1px solid var(--border-subtle);
    }

    .mobile-direct-actions {
      display: flex;
      gap: 0.75rem;

      .mobile-action-pill {
        flex: 1;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.65rem 0.5rem;
        border-radius: 10px;
        font-size: 0.85rem;
        font-weight: 700;
        text-decoration: none;
        transition: all 0.2s ease;

        &.whatsapp {
          background: rgba(37, 211, 102, 0.12);
          color: #25d366;
          border: 1px solid rgba(37, 211, 102, 0.3);
        }

        &.call {
          background: var(--accent-pill-bg);
          color: var(--accent-main);
          border: 1px solid var(--accent-pill-border);
        }
      }
    }

    .mobile-nav-link {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.5rem 0;
      border-bottom: 1px solid var(--border-subtle);

      &:hover {
        color: var(--accent-main);
      }
    }

    .mobile-cta-area {
      padding-top: 0.5rem;

      .full-width {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;
