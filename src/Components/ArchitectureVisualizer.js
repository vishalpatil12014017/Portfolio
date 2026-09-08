import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { systemArchitectureNodes } from "../data/portfolioData";
import { FaPhoneAlt, FaNetworkWired, FaMicrophoneAlt, FaProjectDiagram, FaDatabase, FaBrain, FaVolumeUp } from "react-icons/fa";

const iconMap = {
  telephony: <FaPhoneAlt />,
  "ws-gateway": <FaNetworkWired />,
  stt: <FaMicrophoneAlt />,
  "state-machine": <FaProjectDiagram />,
  rag: <FaDatabase />,
  llm: <FaBrain />,
  tts: <FaVolumeUp />,
};

const ArchitectureVisualizer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedNode, setSelectedNode] = useState(systemArchitectureNodes[0]);
  const [isUserPaused, setIsUserPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isUserPaused) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          const next = (prev + 1) % systemArchitectureNodes.length;
          setSelectedNode(systemArchitectureNodes[next]);
          return next;
        });
      }, 1800);
    }
    return () => clearInterval(interval);
  }, [isUserPaused]);

  const handleCardClick = (node, index) => {
    setSelectedNode(node);
    setActiveStep(index);
    setIsUserPaused(true);
    // Automatically resume live cycling after 6 seconds of inactivity
    setTimeout(() => {
      setIsUserPaused(false);
    }, 6000);
  };

  return (
    <ArchContainer id="architecture">
      <div className="section-head">
        <div className="badge-pill">Production Architecture Deep Dive</div>
        <h2>Real-Time Conversational Voice AI & Microservice Pipeline</h2>
        <p className="subtitle">
          Engineered at HexaHealth: High-concurrency speech-to-speech orchestration server over WebSockets with deterministic state branching, low-latency RAG vector search, and automated IVR failover.
        </p>
        <div className="live-status-pill">
          <span className="live-dot"></span>
          <span>Live Continuous Call Flow Simulation</span>
        </div>
      </div>

      {/* Interactive Pipeline Nodes */}
      <div className="pipeline-grid">
        {systemArchitectureNodes.map((node, index) => {
          const isSelected = selectedNode.id === node.id;
          const isCurrentInSim = activeStep === index;
          return (
            <div
              key={node.id}
              className={`pipeline-card ${isSelected ? "selected" : ""} ${isCurrentInSim ? "simulating" : ""}`}
              onClick={() => handleCardClick(node, index)}
              style={{ "--accent-color": node.color }}
            >
              <div className="card-top">
                <span className="step-badge">0{index + 1}</span>
                <span className="latency-badge">{node.latency}</span>
              </div>
              <div className="node-icon-wrapper">{iconMap[node.id] || <FaNetworkWired />}</div>
              <h4>{node.title}</h4>
              <p className="node-provider">{node.provider}</p>
              <span className="node-role">{node.role}</span>

              {index < systemArchitectureNodes.length - 1 && (
                <div className={`connector-arrow ${isCurrentInSim ? "pulse" : ""}`}>➔</div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Node Detailed Inspector */}
      {selectedNode && (
        <div className="inspector-panel" style={{ "--border-glow": selectedNode.color }}>
          <div className="inspector-header">
            <div className="inspector-title">
              <span className="inspector-icon">{iconMap[selectedNode.id]}</span>
              <div>
                <h3>{selectedNode.title}</h3>
                <span className="provider-tag">{selectedNode.provider}</span>
              </div>
            </div>
            <div className="inspector-meta">
              <div className="meta-block">
                <span className="meta-label">Subsystem Role</span>
                <span className="meta-val">{selectedNode.role}</span>
              </div>
              <div className="meta-block">
                <span className="meta-label">Target Latency</span>
                <span className="meta-val highlight">{selectedNode.latency}</span>
              </div>
            </div>
          </div>

          <div className="inspector-body">
            <div className="desc-box">
              <h4>Engineering Implementation & Mechanics:</h4>
              <p>{selectedNode.desc}</p>
            </div>

            <div className="code-snippet-box">
              <div className="code-snippet-header">
                <span>Architecture Specification</span>
                <span className="code-lang">production-ready</span>
              </div>
              <pre>
                <code>{`// HexaHealth Voice AI Pipeline: ${selectedNode.title}
interface ${selectedNode.id.toUpperCase()}_NodeConfig {
  layer: "${selectedNode.role}";
  provider: "${selectedNode.provider}";
  latencySLA: "${selectedNode.latency}";
  failoverRetry: true;
  telemetry: "Winston + Morgan + Langfuse";
  concurrencyModel: "Bi-directional WebSocket streaming (SSE fallback)";
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </ArchContainer>
  );
};

const ArchContainer = styled.section`
  padding: 5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;

  .section-head {
    text-align: center;
    margin-bottom: 2.5rem;

    .badge-pill {
      display: inline-block;
      padding: 0.35rem 1.2rem;
      border-radius: 9999px;
      background: var(--accent-pill-bg);
      border: 1px solid var(--accent-pill-border);
      color: var(--accent-main);
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2.4rem;
      font-weight: 800;
      color: var(--text-primary);
      margin-bottom: 1rem;
      letter-spacing: -0.5px;
    }

    .subtitle {
      max-width: 800px;
      margin: 0 auto;
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.7;
    }

    .live-status-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      padding: 0.35rem 1.1rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      color: #10b981;
      font-weight: 600;
      margin-top: 1.25rem;
    }
  }

  .pipeline-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 2.5rem;
    position: relative;
  }

  .pipeline-card {
    background: var(--bg-card);
    border: 1px solid var(--border-subtle);
    border-radius: 16px;
    padding: 1.25rem 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(12px);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: var(--shadow-card);

    &:hover {
      transform: translateY(-5px);
      border-color: var(--accent-color, var(--accent-main));
      box-shadow: var(--shadow-card), 0 0 15px var(--accent-color, var(--accent-main));
    }

    &.selected {
      border-color: var(--accent-color, var(--accent-main));
      background: var(--bg-card-hover);
      box-shadow: 0 0 20px var(--accent-pill-border);
    }

    &.simulating {
      border-color: #10b981;
      animation: pulseCard 1s infinite alternate;
      background: rgba(16, 185, 129, 0.12);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 0.75rem;

      .step-badge {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--text-muted);
      }

      .latency-badge {
        font-size: 0.65rem;
        padding: 0.15rem 0.45rem;
        border-radius: 6px;
        background: var(--bg-secondary);
        color: var(--text-secondary);
        border: 1px solid var(--border-subtle);
      }
    }

    .node-icon-wrapper {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: var(--bg-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: var(--accent-color, var(--accent-main));
      margin-bottom: 0.75rem;
      border: 1px solid var(--border-subtle);
    }

    h4 {
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.35rem;
      line-height: 1.3;
    }

    .node-provider {
      font-size: 0.75rem;
      color: var(--text-secondary);
      margin-bottom: 0.5rem;
      line-height: 1.2;
    }

    .node-role {
      font-size: 0.68rem;
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      background: var(--accent-pill-bg);
      color: var(--accent-main);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      font-weight: 600;
      margin-top: auto;
    }

    .connector-arrow {
      position: absolute;
      right: -12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 0.9rem;
      color: var(--border-subtle);
      z-index: 2;

      @media (max-width: 768px) {
        display: none;
      }

      &.pulse {
        color: var(--accent-main);
        animation: arrowGlow 0.8s infinite alternate;
      }
    }
  }

  @keyframes pulseCard {
    from {
      box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
    }
    to {
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
    }
  }

  @keyframes arrowGlow {
    from {
      transform: translateY(-50%) scale(1);
    }
    to {
      transform: translateY(-50%) scale(1.3);
    }
  }

  .inspector-panel {
    background: var(--bg-card);
    border: 1px solid var(--border-glow, var(--accent-main));
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(16px);
    box-shadow: var(--shadow-card);

    .inspector-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border-subtle);
      padding-bottom: 1.5rem;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;

      .inspector-title {
        display: flex;
        align-items: center;
        gap: 1rem;

        .inspector-icon {
          font-size: 2rem;
          color: var(--accent-main);
          background: var(--accent-pill-bg);
          padding: 0.75rem;
          border-radius: 14px;
          display: flex;
          border: 1px solid var(--accent-pill-border);
        }

        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .provider-tag {
          font-size: 0.85rem;
          color: var(--accent-main);
          font-weight: 600;
        }
      }

      .inspector-meta {
        display: flex;
        gap: 2rem;

        .meta-block {
          display: flex;
          flex-direction: column;

          .meta-label {
            font-size: 0.75rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.8px;
            margin-bottom: 0.25rem;
          }

          .meta-val {
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--text-primary);

            &.highlight {
              color: #10b981;
            }
          }
        }
      }
    }

    .inspector-body {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 2rem;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }

      .desc-box {
        h4 {
          font-size: 1rem;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.7;
        }
      }

      .code-snippet-box {
        background: var(--code-bg);
        border: 1px solid var(--code-border);
        border-radius: 12px;
        overflow: hidden;

        .code-snippet-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.5rem 1rem;
          border-bottom: 1px solid var(--code-border);
          font-size: 0.75rem;
          color: var(--text-muted);

          .code-lang {
            color: var(--code-text);
            font-family: monospace;
          }
        }

        pre {
          padding: 1rem;
          margin: 0;
          overflow-x: auto;
          font-family: "Fira Code", monospace, "Courier New";
          font-size: 0.8rem;
          color: var(--code-text);
          line-height: 1.5;
        }
      }
    }
  }
`;

export default ArchitectureVisualizer;
