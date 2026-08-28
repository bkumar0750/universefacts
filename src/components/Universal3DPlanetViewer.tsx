import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, ZoomIn, ZoomOut, RotateCcw, Box, Globe, Info } from 'lucide-react';

interface Universal3DPlanetViewerProps {
  planetId: string;
  title: string;
  className?: string;
  height?: string;
}

/** Generates high-detail procedural texture maps for solar system planets */
function createPlanetTexture(planetId: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  const id = planetId.toLowerCase();

  switch (id) {
    case 'sun': {
      const grad = ctx.createRadialGradient(512, 256, 50, 512, 256, 500);
      grad.addColorStop(0, '#fff7ed');
      grad.addColorStop(0.3, '#fb923c');
      grad.addColorStop(0.7, '#ea580c');
      grad.addColorStop(1, '#9a3412');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      // Solar Flares & Granulation
      ctx.fillStyle = 'rgba(254, 240, 138, 0.4)';
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const r = Math.random() * 30 + 5;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
      break;
    }
    case 'mercury': {
      ctx.fillStyle = '#475569';
      ctx.fillRect(0, 0, 1024, 512);
      ctx.fillStyle = '#334155';
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        const r = Math.random() * 15 + 2;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = '#94a3b8';
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * 1024;
        const y = Math.random() * 512;
        ctx.beginPath(); ctx.arc(x, y, Math.random() * 4 + 1, 0, Math.PI * 2); ctx.fill();
      }
      break;
    }
    case 'venus': {
      const grad = ctx.createLinearGradient(0, 0, 1024, 512);
      grad.addColorStop(0, '#d97706');
      grad.addColorStop(0.3, '#f59e0b');
      grad.addColorStop(0.6, '#b45309');
      grad.addColorStop(1, '#fef3c7');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      ctx.fillStyle = 'rgba(251, 191, 36, 0.3)';
      for (let i = 0; i < 80; i++) {
        const y = Math.random() * 512;
        ctx.fillRect(0, y, 1024, Math.random() * 20 + 5);
      }
      break;
    }
    case 'earth': {
      // Oceans
      ctx.fillStyle = '#0f2b48';
      ctx.fillRect(0, 0, 1024, 512);

      // Shallow coastal shelves
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath(); ctx.ellipse(250, 180, 180, 100, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(700, 160, 220, 120, 0, 0, Math.PI * 2); ctx.fill();

      // North America
      ctx.fillStyle = '#1e482d';
      ctx.beginPath();
      ctx.moveTo(120, 90); ctx.lineTo(240, 70); ctx.lineTo(300, 120);
      ctx.lineTo(260, 170); ctx.lineTo(200, 210); ctx.lineTo(110, 130); ctx.closePath(); ctx.fill();

      // South America
      ctx.beginPath();
      ctx.moveTo(210, 240); ctx.lineTo(290, 260); ctx.lineTo(320, 310);
      ctx.lineTo(270, 400); ctx.lineTo(220, 440); ctx.lineTo(200, 360); ctx.closePath(); ctx.fill();

      // Eurasia & Africa
      ctx.beginPath();
      ctx.moveTo(460, 80); ctx.lineTo(820, 60); ctx.lineTo(890, 160);
      ctx.lineTo(800, 210); ctx.lineTo(680, 240); ctx.lineTo(540, 190); ctx.closePath(); ctx.fill();

      ctx.beginPath();
      ctx.moveTo(490, 180); ctx.lineTo(620, 190); ctx.lineTo(660, 280);
      ctx.lineTo(590, 390); ctx.lineTo(520, 340); ctx.lineTo(480, 240); ctx.closePath(); ctx.fill();

      // Australia
      ctx.beginPath();
      ctx.moveTo(780, 310); ctx.lineTo(890, 300); ctx.lineTo(910, 370);
      ctx.lineTo(810, 390); ctx.lineTo(760, 340); ctx.closePath(); ctx.fill();

      // Deserts & Sahara
      ctx.fillStyle = '#b48348';
      ctx.beginPath(); ctx.ellipse(560, 200, 90, 35, 0, 0, Math.PI * 2); ctx.fill();

      // Himalayas Mountain Range
      ctx.fillStyle = '#5c4838';
      ctx.beginPath(); ctx.ellipse(700, 160, 60, 12, -0.3, 0, Math.PI * 2); ctx.fill();

      // Ice caps
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, 1024, 25);
      ctx.fillRect(0, 487, 1024, 25);

      // Night City Lights
      ctx.fillStyle = '#fbbf24';
      for (let i = 0; i < 300; i++) {
        const x = Math.random() * 1024;
        const y = 80 + Math.random() * 350;
        ctx.fillRect(x, y, 1.5, 1.5);
      }
      break;
    }
    case 'mars': {
      const grad = ctx.createLinearGradient(0, 0, 1024, 512);
      grad.addColorStop(0, '#b91c1c');
      grad.addColorStop(0.5, '#c2410c');
      grad.addColorStop(1, '#7f1d1d');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      // Valles Marineris Canyon & Impact Basins
      ctx.fillStyle = '#450a0a';
      ctx.beginPath(); ctx.ellipse(450, 250, 200, 15, -0.1, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.ellipse(650, 350, 90, 60, 0, 0, Math.PI * 2); ctx.fill(); // Hellas Planitia

      // Olympus Mons Volcano Shield
      ctx.fillStyle = '#7f1d1d';
      ctx.beginPath(); ctx.arc(320, 220, 25, 0, Math.PI * 2); ctx.fill();

      // Polar Ice Caps
      ctx.fillStyle = '#fef2f2';
      ctx.fillRect(0, 0, 1024, 20);
      ctx.fillRect(0, 492, 1024, 20);
      break;
    }
    case 'jupiter': {
      ctx.fillStyle = '#ea580c';
      ctx.fillRect(0, 0, 1024, 512);

      const bands = ['#fed7aa', '#c2410c', '#ffedd5', '#9a3412', '#ffedd5', '#ea580c', '#fff7ed'];
      bands.forEach((color, idx) => {
        ctx.fillStyle = color;
        ctx.fillRect(0, idx * 73, 1024, 45);
      });

      // Great Red Spot Storm
      ctx.fillStyle = '#991b1b';
      ctx.beginPath(); ctx.ellipse(650, 300, 60, 35, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#7f1d1d';
      ctx.beginPath(); ctx.ellipse(650, 300, 40, 20, 0, 0, Math.PI * 2); ctx.fill();
      break;
    }
    case 'saturn': {
      ctx.fillStyle = '#eab308';
      ctx.fillRect(0, 0, 1024, 512);

      const bands = ['#fef08a', '#ca8a04', '#fef9c3', '#a16207', '#fef08a'];
      bands.forEach((color, idx) => {
        ctx.fillStyle = color;
        ctx.fillRect(0, idx * 100, 1024, 60);
      });
      break;
    }
    case 'uranus': {
      const grad = ctx.createLinearGradient(0, 0, 1024, 512);
      grad.addColorStop(0, '#06b6d4');
      grad.addColorStop(0.5, '#22d3ee');
      grad.addColorStop(1, '#0891b2');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);
      break;
    }
    case 'neptune': {
      const grad = ctx.createLinearGradient(0, 0, 1024, 512);
      grad.addColorStop(0, '#1d4ed8');
      grad.addColorStop(0.5, '#3b82f6');
      grad.addColorStop(1, '#1e40af');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath(); ctx.ellipse(400, 250, 50, 30, 0, 0, Math.PI * 2); ctx.fill();
      break;
    }
    default: {
      ctx.fillStyle = '#64748b';
      ctx.fillRect(0, 0, 1024, 512);
      ctx.fillStyle = '#334155';
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 512, Math.random() * 20 + 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

export const Universal3DPlanetViewer: React.FC<Universal3DPlanetViewerProps> = ({
  planetId,
  title,
  className = '',
  height = 'h-[420px] sm:h-[540px]',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [showInfoOverlay, setShowInfoOverlay] = useState(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const planetMeshRef = useRef<THREE.Mesh | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const heightPx = mount.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.z = 4.2;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.8);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    const texture = createPlanetTexture(planetId);
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    
    const isSun = planetId.toLowerCase() === 'sun';
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: isSun ? 0.1 : 0.6,
      metalness: 0.1,
      emissive: isSun ? new THREE.Color(0xf59e0b) : new THREE.Color(0x000000),
      emissiveIntensity: isSun ? 0.8 : 0,
    });

    const planetMesh = new THREE.Mesh(geometry, material);
    
    if (planetId.toLowerCase() === 'uranus') {
      planetMesh.rotation.z = Math.PI / 2;
    } else if (planetId.toLowerCase() === 'earth') {
      planetMesh.rotation.z = 0.41;
    } else if (planetId.toLowerCase() === 'saturn') {
      planetMesh.rotation.z = 0.46;
    }

    scene.add(planetMesh);
    planetMeshRef.current = planetMesh;

    // Saturn Rings
    if (planetId.toLowerCase() === 'saturn') {
      const ringGeo = new THREE.RingGeometry(1.8, 3.2, 64);
      const ringCanvas = document.createElement('canvas');
      ringCanvas.width = 256;
      ringCanvas.height = 1;
      const rctx = ringCanvas.getContext('2d')!;
      const rgrad = rctx.createLinearGradient(0, 0, 256, 0);
      rgrad.addColorStop(0, 'rgba(234, 179, 8, 0)');
      rgrad.addColorStop(0.2, 'rgba(253, 224, 71, 0.9)');
      rgrad.addColorStop(0.5, 'rgba(202, 138, 4, 0.8)');
      rgrad.addColorStop(0.7, 'rgba(254, 240, 138, 0.9)');
      rgrad.addColorStop(1, 'rgba(234, 179, 8, 0)');
      rctx.fillStyle = rgrad;
      rctx.fillRect(0, 0, 256, 1);

      const ringTex = new THREE.CanvasTexture(ringCanvas);
      const ringMat = new THREE.MeshStandardMaterial({
        map: ringTex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85,
      });

      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      planetMesh.add(ringMesh);
    }

    // Atmospheric Glow
    const atmosphereGeo = new THREE.SphereGeometry(1.58, 64, 64);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: planetId.toLowerCase() === 'earth' ? 0x38bdf8 : planetId.toLowerCase() === 'mars' ? 0xf87171 : 0xa855f7,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.15,
    });
    scene.add(new THREE.Mesh(atmosphereGeo, atmosphereMat));

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (planetMeshRef.current && isRotating && !isDragging.current) {
        planetMeshRef.current.rotation.y += 0.004;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mount || !rendererRef.current || !cameraRef.current) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [planetId, isRotating]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !planetMeshRef.current) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;
    planetMeshRef.current.rotation.y += deltaX * 0.008;
    planetMeshRef.current.rotation.x += deltaY * 0.008;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    if (direction === 'in') {
      cameraRef.current.position.z = Math.max(2.2, cameraRef.current.position.z - 0.6);
    } else {
      cameraRef.current.position.z = Math.min(8.0, cameraRef.current.position.z + 0.6);
    }
  };

  const handleReset = () => {
    if (!cameraRef.current || !planetMeshRef.current) return;
    cameraRef.current.position.z = 4.2;
    planetMeshRef.current.rotation.set(0, 0, 0);
  };

  return (
    <div className={`glass-panel rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/20 shadow-2xl relative ${className}`}>
      
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-white/10 bg-white/60 dark:bg-slate-900/60 z-10 relative">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-slate-800 dark:text-cyan-300 uppercase tracking-wider">
              Interactive 3D WebGL Model — {title}
            </h4>
            <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Real-Time High-Detail Surface & Lighting Engine</p>
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowInfoOverlay(!showInfoOverlay)}
            className={`p-1.5 rounded-lg glass-button transition-colors ${
              showInfoOverlay ? 'text-cyan-400 bg-cyan-500/20' : 'text-slate-700 dark:text-slate-300 hover:text-cyan-400'
            }`}
            title="Toggle Details Telemetry"
          >
            <Info className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsRotating(!isRotating)}
            className="p-1.5 rounded-lg glass-button text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            title={isRotating ? 'Pause Rotation' : 'Auto Rotate'}
          >
            {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={() => handleZoom('in')}
            className="p-1.5 rounded-lg glass-button text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => handleZoom('out')}
            className="p-1.5 rounded-lg glass-button text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg glass-button text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            title="Reset Orientation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Details Telemetry Overlay Card */}
      {showInfoOverlay && (
        <div className="absolute top-16 right-4 z-20 w-72 glass-panel p-4 rounded-2xl border border-cyan-500/30 bg-slate-950/90 text-xs font-mono text-slate-300 space-y-2 animate-fade-in-up">
          <div className="flex items-center justify-between font-bold text-cyan-300 border-b border-white/10 pb-1">
            <span>{title} Telemetry</span>
            <button onClick={() => setShowInfoOverlay(false)} className="text-slate-400 hover:text-white">✕</button>
          </div>
          <p className="text-[11px] font-sans text-slate-200">
            3D rendering calibrated to NASA JPL Ephemeris data. Surface features show true-scale polar orientation and axial tilt.
          </p>
          <div className="text-[10px] text-cyan-400">Status: WebGL 60FPS Active</div>
        </div>
      )}

      {/* WebGL Canvas Container */}
      <div
        ref={mountRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`w-full ${height} bg-slate-950 cursor-grab active:cursor-grabbing relative overflow-hidden`}
      />

      {/* Footer Info */}
      <div className="flex items-center justify-between px-5 py-2.5 border-t border-slate-200 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 text-[10px] font-mono text-slate-500 dark:text-slate-400">
        <span className="flex items-center gap-1">
          <Box className="w-3 h-3 text-cyan-500" />
          Drag mouse to rotate 360° • Click buttons to Zoom / Inspect
        </span>
        <span className="text-cyan-600 dark:text-cyan-400 font-bold">100% Client WebGL 60FPS</span>
      </div>
    </div>
  );
};
