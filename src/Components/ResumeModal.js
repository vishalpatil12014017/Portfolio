import React from "react";
import styled from "styled-components";
import { FaTimes, FaDownload, FaExternalLinkAlt, FaAward, FaCheckCircle } from "react-icons/fa";
import { personalDetails } from "../data/portfolioData";

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resumePdfUrl = `${process.env.PUBLIC_URL || ""}/Vishal_Patil.pdf`;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-area">
            <h3>{personalDetails.name} — Official Resume</h3>
            <span className="subtitle">Lead Software Engineer • Node.js | Backend & AI Systems</span>
          </div>
          <div className="modal-actions">
            <a
              href={resumePdfUrl}
              download="Vishal_Patil_Resume.pdf"
              className="action-btn download"
            >
              <FaDownload />
              <span>Download PDF</span>
            </a>
            <a
              href={resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn external"
            >
              <FaExternalLinkAlt />
              <span>Open Tab</span>
            </a>
            <button onClick={onClose} className="close-btn" aria-label="Close modal">
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <div className="modal-quick-strip">
          <div className="strip-item">
            <FaAward className="strip-icon" />
            <span><strong>Role:</strong> Lead Software Engineer @ HexaHealth</span>
          </div>
          <div className="strip-item">
            <FaCheckCircle className="strip-icon" />
            <span><strong>Scale:</strong> 738+ API Gateway Endpoints / 19 Microservices</span>
          </div>
          <div className="strip-item">
            <FaCheckCircle className="strip-icon" />
            <span><strong>Conversational AI:</strong> Deepgram + Gemini + ElevenLabs + XState</span>
          </div>
        </div>

        <div className="modal-body">
          <object
            data={`${resumePdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <div className="fallback-container">
              <p>Your browser is unable to display the PDF preview directly.</p>
              <a
                href={resumePdfUrl}
                download="Vishal_Patil_Resume.pdf"
                className="action-btn download"
              >
                <FaDownload />
                <span>Download Vishal_Patil.pdf</span>
              </a>
            </div>
          </object>
        </div>
      </ModalContainer>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.85);
  backdrop-filter: blur(12px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 92vh;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.75rem;
    border-bottom: 1px solid var(--border-subtle);
    background: var(--bg-secondary);

    .modal-title-area {
      h3 {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.2rem;
      }
      .subtitle {
        font-size: 0.85rem;
        color: var(--text-secondary);
      }
    }

    .modal-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .action-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.55rem 1.15rem;
        border-radius: 10px;
        font-size: 0.85rem;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease;

        &.download {
          background: var(--accent-gradient);
          color: var(--accent-btn-text);

          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px var(--accent-pill-border);
          }
        }

        &.external {
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-subtle);

          &:hover {
            background: var(--bg-card-hover);
            color: var(--accent-main);
          }
        }
      }

      .close-btn {
        background: transparent;
        border: none;
        color: var(--text-secondary);
        font-size: 1.25rem;
        cursor: pointer;
        padding: 0.4rem;
        display: flex;
        border-radius: 8px;
        transition: all 0.2s ease;

        &:hover {
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.1);
        }
      }
    }
  }

  .modal-quick-strip {
    display: flex;
    justify-content: space-around;
    background: var(--accent-pill-bg);
    border-bottom: 1px solid var(--border-subtle);
    padding: 0.65rem 1.5rem;
    font-size: 0.82rem;
    color: var(--text-secondary);
    flex-wrap: wrap;
    gap: 0.75rem;

    .strip-item {
      display: flex;
      align-items: center;
      gap: 0.45rem;

      strong {
        color: var(--text-primary);
      }

      .strip-icon {
        color: var(--accent-main);
      }
    }
  }

  .modal-body {
    flex: 1;
    background: var(--bg-secondary);
    position: relative;

    .fallback-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      color: var(--text-secondary);
    }
  }
`;

export default ResumeModal;
