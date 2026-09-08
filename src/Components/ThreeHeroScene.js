import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const THEME_COLORS = {
  dark: {
    wire: 0x6366f1,
    wireOpacity: 0.4,
    core: 0x8b5cf6,
    coreOpacity: 0.22,
    ring1: 0x6366f1,
    ring2: 0xa855f7,
    ring3: 0x38bdf8,
    packet1: 0x818cf8,
    packet2: 0x38bdf8,
    stars: 0x94a3b8,
    starsOpacity: 0.65,
    nodes: [
      [0.39, 0.40, 0.95], // Indigo #6366f1
      [0.55, 0.36, 0.96], // Violet #8b5cf6
      [0.22, 0.74, 0.97], // Sky #38bdf8
    ],
  },
  light: {
    wire: 0x4f46e5,
    wireOpacity: 0.55,
    core: 0x0284c7,
    coreOpacity: 0.28,
    ring1: 0x4f46e5,
    ring2: 0x2563eb,
    ring3: 0x0284c7,
    packet1: 0x3b82f6,
    packet2: 0x0284c7,
    stars: 0x475569,
    starsOpacity: 0.75,
    nodes: [
      [0.31, 0.27, 0.90], // Deep Indigo #4f46e5
      [0.15, 0.39, 0.92], // Cobalt #2563eb
      [0.01, 0.52, 0.78], // Ocean #0284c7
    ],
  },
};

const ThreeHeroScene = ({ theme = "dark" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const palette = THEME_COLORS[theme] || THEME_COLORS.dark;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = currentMount.clientWidth || window.innerWidth;
    const height = currentMount.clientHeight || 550;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 28;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for everything
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Core: Icosahedron Wireframe (Distributed System Lattice)
    const icoGeometry = new THREE.IcosahedronGeometry(7, 2);
    const icoWireMaterial = new THREE.MeshBasicMaterial({
      color: palette.wire,
      wireframe: true,
      transparent: true,
      opacity: palette.wireOpacity,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoWireMaterial);
    mainGroup.add(icoMesh);

    // 2. Vertex Nodes: Glowing particles at every vertex of the icosahedron
    const vertexPositions = icoGeometry.attributes.position;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodeCount = vertexPositions.count;
    const nodeColors = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const col = palette.nodes[i % palette.nodes.length];
      nodeColors[i * 3] = col[0];
      nodeColors[i * 3 + 1] = col[1];
      nodeColors[i * 3 + 2] = col[2];
    }

    nodeGeometry.setAttribute("position", vertexPositions);
    nodeGeometry.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });
    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    mainGroup.add(nodes);

    // 3. Inner Pulsing Core (Voice AI & Intelligence Sphere)
    const innerCoreGeometry = new THREE.SphereGeometry(3.5, 32, 32);
    const innerCoreMaterial = new THREE.MeshBasicMaterial({
      color: palette.core,
      wireframe: true,
      transparent: true,
      opacity: palette.coreOpacity,
    });
    const innerCore = new THREE.Mesh(innerCoreGeometry, innerCoreMaterial);
    mainGroup.add(innerCore);

    // 4. Orbiting Data Stream Rings (Simulating WebSocket & Telephony Streams)
    const createRing = (radius, tiltX, tiltY, colorHex) => {
      const ringGeo = new THREE.RingGeometry(radius - 0.05, radius + 0.05, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: colorHex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;
      return ring;
    };

    const ring1 = createRing(10.5, Math.PI / 3, Math.PI / 6, palette.ring1);
    const ring2 = createRing(12.0, -Math.PI / 4, Math.PI / 4, palette.ring2);
    const ring3 = createRing(13.2, Math.PI / 6, -Math.PI / 3, palette.ring3);
    mainGroup.add(ring1);
    mainGroup.add(ring2);
    mainGroup.add(ring3);

    // 5. Orbiting Packet Carriers (Data traveling along the rings)
    const packetGeometry = new THREE.SphereGeometry(0.32, 16, 16);
    const packetMaterial1 = new THREE.MeshBasicMaterial({ color: palette.packet1 });
    const packetMaterial2 = new THREE.MeshBasicMaterial({ color: palette.packet2 });
    const packet1 = new THREE.Mesh(packetGeometry, packetMaterial1);
    const packet2 = new THREE.Mesh(packetGeometry, packetMaterial2);
    mainGroup.add(packet1);
    mainGroup.add(packet2);

    // 6. Floating Cloud of Ambient Microservice Stars
    const starCount = 200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 60;
      starPositions[i + 1] = (Math.random() - 0.5) * 60;
      starPositions[i + 2] = (Math.random() - 0.5) * 40;
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      size: 0.18,
      color: palette.stars,
      transparent: true,
      opacity: palette.starsOpacity,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const rect = currentMount.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tilt
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.25 + targetX * 0.5;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + -targetY * 0.3;

      // Pulse inner core
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      innerCore.scale.set(pulse, pulse, pulse);

      // Rotate individual rings
      ring1.rotation.z += 0.01;
      ring2.rotation.z -= 0.008;
      ring3.rotation.z += 0.006;

      // Animate packet along ring trajectories
      packet1.position.x = Math.cos(elapsedTime * 1.5) * 10.5;
      packet1.position.y = Math.sin(elapsedTime * 1.5) * 10.5 * Math.sin(Math.PI / 3);
      packet1.position.z = Math.sin(elapsedTime * 1.5) * 10.5 * Math.cos(Math.PI / 3);

      packet2.position.x = Math.cos(-elapsedTime * 1.2) * 12.0 * Math.cos(Math.PI / 4);
      packet2.position.y = Math.sin(-elapsedTime * 1.2) * 12.0;
      packet2.position.z = Math.cos(-elapsedTime * 1.2) * 12.0 * Math.sin(Math.PI / 4);

      // Ambient star drift
      starField.rotation.y = -elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight || 550;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icoGeometry.dispose();
      icoWireMaterial.dispose();
      innerCoreGeometry.dispose();
      innerCoreMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      packetGeometry.dispose();
      packetMaterial1.dispose();
      packetMaterial2.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "480px",
        position: "relative",
        cursor: "grab",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="three-badge-overlay">
        <span className="live-dot"></span>
        <span>Interactive 3D Microservice & Neural Lattice • Drag / Move</span>
      </div>
    </div>
  );
};

export default ThreeHeroScene;
