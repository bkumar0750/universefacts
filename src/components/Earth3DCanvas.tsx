import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, Pause, ZoomIn, ZoomOut, Sun, Moon as MoonIcon, RotateCcw, MapPin, Layers, Flame, ShieldAlert, Sparkles } from 'lucide-react';

interface Earth3DCanvasProps {
  interactiveControls?: boolean;
  className?: string;
}

interface Hotspot {
  id: string;
  name: string;
  lat: number;
  lon: number;
  type: string;
  elevation: string;
  details: string;
  color: string;
}

const EARTH_HOTSPOTS: Hotspot[] = [
  {
    id: 'everest',
    name: 'Mount Everest (Himalayas)',
    lat: 27.9881,
    lon: 86.9250,
    type: 'Mountain Peak',
    elevation: '8,848.86 m',
    details: 'Highest point on Earth. Created by ongoing tectonic collision between the Indian and Eurasian tectonic plates.',
    color: '#f59e0b'
  },
  {
    id: 'mariana',
    name: 'Mariana Trench (Challenger Deep)',
    lat: 11.3500,
    lon: 142.2000,
    type: 'Abyssal Trench',
    elevation: '-10,994 m',
    details: 'Deepest point in Earth’s ocean. Crushing hydrostatic pressure exceeding 1,000 atmospheres.',
    color: '#06b6d4'
  },
  {
    id: 'amazon',
    name: 'Amazon Rainforest Basin',
    lat: -3.4653,
    lon: -62.2159,
    type: 'Equatorial Biome',
    elevation: '0 - 200 m',
    details: 'Largest tropical forest system. Generates ~20% of Earth’s atmospheric oxygen and recycles global moisture.',
    color: '#10b981'
  },
  {
    id: 'sahara',
    name: 'Sahara Desert Belt',
    lat: 23.8000,
    lon: 11.2800,
    type: 'Arid Desert',
    elevation: '200 - 500 m',
    details: 'Spans 9.2 million km². Dust blown across the Atlantic ocean fertilizes the Amazon rainforest soil.',
    color: '#d97706'
  },
  {
    id: 'antarctica',
    name: 'Antarctic Ice Sheet',
    lat: -82.8628,
    lon: 135.0000,
    type: 'Polar Ice Cap',
    elevation: '2,835 m (Ice Thickness ~4.8 km)',
    details: 'Holds 70% of Earth’s total freshwater. Extreme polar desert with record low temperatures reaching -89.2°C.',
    color: '#60a5fa'
  }
];

interface LayerData {
  id: string;
  name: string;
  depth: string;
  temp: string;
  pressure: string;
  composition: string;
  color: string;
  radius: number;
}

const EARTH_INTERNAL_LAYERS: LayerData[] = [
  {
    id: 'crust',
    name: 'Continental & Oceanic Crust',
    depth: '0 - 70 km',
    temp: '0°C to 400°C',
    pressure: '1 to 10,000 atm',
    composition: 'Granite, Basalt, Silicate Rocks & Tectonic Plates',
    color: '#10b981',
    radius: 1.5
  },
  {
    id: 'mantle',
    name: 'Viscous Silicate Mantle',
    depth: '70 - 2,890 km',
    temp: '1,000°C to 3,700°C',
    pressure: '140,000 to 1.35 Million atm',
    composition: 'Peridotite, Olivine, High-Pressure Silicates',
    color: '#f59e0b',
    radius: 1.25
  },
  {
    id: 'outer-core',
    name: 'Liquid Metal Outer Core',
    depth: '2,890 - 5,150 km',
    temp: '4,000°C to 5,700°C',
    pressure: '1.35 to 3.3 Million atm',
    composition: 'Liquid Molten Iron & Nickel (Drives Earth’s Geodynamo)',
    color: '#ef4444',
    radius: 0.95
  },
  {
    id: 'inner-core',
    name: 'Solid Crystal Inner Core',
    depth: '5,150 - 6,371 km',
    temp: '5,400°C (As hot as the Sun surface)',
    pressure: '3.6 Million atm',
    composition: 'Solid Crystallized Iron-Nickel Alloy',
    color: '#f8fafc',
    radius: 0.55
  }
];

function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
}

/** Fallback Procedural Earth Texture generator if image fails to load */
function createFallbackEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  const oceanGrad = ctx.createLinearGradient(0, 0, 0, 1024);
  oceanGrad.addColorStop(0, '#0a1d37');
  oceanGrad.addColorStop(0.5, '#0f2b48');
  oceanGrad.addColorStop(1, '#09182b');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, 2048, 1024);

  // Continents
  ctx.fillStyle = '#1e482d';
  ctx.beginPath(); ctx.ellipse(450, 320, 260, 180, -0.2, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(1350, 280, 420, 220, 0.1, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(1120, 400, 180, 70, 0, 0, Math.PI * 2); ctx.fill();
  ctx.beginPath(); ctx.ellipse(1660, 680, 100, 50, 0, 0, Math.PI * 2); ctx.fill();

  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(0, 0, 2048, 45);
  ctx.fillRect(0, 960, 2048, 64);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

function createProceduralCloudTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d')!;

  ctx.clearRect(0, 0, 1024, 512);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  for (let i = 0; i < 110; i++) {
    const x = Math.random() * 1024;
    const y = 50 + Math.random() * 412;
    const rx = Math.random() * 140 + 30;
    const ry = Math.random() * 35 + 10;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, (Math.random() - 0.5) * 0.4, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

export const Earth3DCanvas: React.FC<Earth3DCanvasProps> = ({
  interactiveControls = true,
  className = 'w-full h-[520px] sm:h-[620px]'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [dayNightMode, setDayNightMode] = useState<'day' | 'night' | 'split'>('split');
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [activeLayer, setActiveLayer] = useState<string>('surface'); // 'surface', 'crust', 'mantle', 'outer-core', 'inner-core'
  const [showClouds, setShowClouds] = useState(true);

  // Three.js Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const earthRef = useRef<THREE.Mesh | null>(null);
  const cloudsRef = useRef<THREE.Mesh | null>(null);
  const internalLayersGroupRef = useRef<THREE.Group | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hotspotsGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;
    cameraRef.current = camera;

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.innerHTML = '';
    mount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Texture Loader for NASA Blue Marble High-Res Earth
    const textureLoader = new THREE.TextureLoader();
    
    // Official NASA Equirectangular Satellite Textures
    const earthMapUrl = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_atmos_2048.jpg';
    const earthNormalUrl = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_normal_2048.jpg';
    const earthSpecularUrl = 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_specular_2048.jpg';

    // Earth Sphere Mesh
    const earthGeo = new THREE.SphereGeometry(1.5, 64, 64);
    
    // Load NASA Texture with procedural fallback
    const earthTexture = textureLoader.load(
      earthMapUrl,
      undefined,
      undefined,
      () => createFallbackEarthTexture()
    );
    const normalMap = textureLoader.load(earthNormalUrl, undefined, undefined, () => undefined);
    const specularMap = textureLoader.load(earthSpecularUrl, undefined, undefined, () => undefined);

    const earthMat = new THREE.MeshPhongMaterial({
      map: earthTexture,
      normalMap: normalMap,
      normalScale: new THREE.Vector2(0.85, 0.85),
      specularMap: specularMap,
      specular: new THREE.Color(0x224466),
      shininess: 35,
    });

    const earth = new THREE.Mesh(earthGeo, earthMat);
    earth.rotation.z = (23.44 * Math.PI) / 180; // 23.44° Axial Tilt
    scene.add(earth);
    earthRef.current = earth;

    // 5. Cloud Layer — 100% Procedural Canvas Map (Zero 404 Network Errors)
    const cloudsGeo = new THREE.SphereGeometry(1.53, 64, 64);
    const cloudTexture = createProceduralCloudTexture();
    const cloudMat = new THREE.MeshStandardMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.NormalBlending,
    });
    const clouds = new THREE.Mesh(cloudsGeo, cloudMat);
    scene.add(clouds);
    cloudsRef.current = clouds;

    // 6. Atmospheric Rayleigh Glow
    const atmosphereGeo = new THREE.SphereGeometry(1.59, 64, 64);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.22,
    });
    scene.add(new THREE.Mesh(atmosphereGeo, atmosphereMat));

    // 7. Internal Earth Layers (Cutaway Concentric Spheres)
    const internalGroup = new THREE.Group();
    
    // Mantle Layer Sphere
    const mantleGeo = new THREE.SphereGeometry(1.25, 32, 32);
    const mantleMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.3,
      metalness: 0.2,
      emissive: 0xd97706,
      emissiveIntensity: 0.4
    });
    const mantleMesh = new THREE.Mesh(mantleGeo, mantleMat);
    internalGroup.add(mantleMesh);

    // Outer Core Sphere
    const outerCoreGeo = new THREE.SphereGeometry(0.95, 32, 32);
    const outerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.2,
      emissive: 0xd97706,
      emissiveIntensity: 0.8
    });
    const outerCoreMesh = new THREE.Mesh(outerCoreGeo, outerCoreMat);
    internalGroup.add(outerCoreMesh);

    // Inner Core Sphere
    const innerCoreGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      emissive: 0xffffff,
      emissiveIntensity: 1.0
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    internalGroup.add(innerCoreMesh);

    internalGroup.visible = false;
    scene.add(internalGroup);
    internalLayersGroupRef.current = internalGroup;

    // 8. 3D Hotspots Pins
    const hotspotsGroup = new THREE.Group();
    EARTH_HOTSPOTS.forEach((spot) => {
      const pos = latLonToVector3(spot.lat, spot.lon, 1.54);
      const pinGeo = new THREE.SphereGeometry(0.035, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(spot.color) });
      const pinMesh = new THREE.Mesh(pinGeo, pinMat);
      pinMesh.position.copy(pos);
      pinMesh.userData = spot;
      hotspotsGroup.add(pinMesh);

      const ringGeo = new THREE.RingGeometry(0.04, 0.06, 16);
      const ringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(spot.color), side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.copy(pos.clone().multiplyScalar(1.01));
      ringMesh.lookAt(0, 0, 0);
      hotspotsGroup.add(ringMesh);
    });
    earth.add(hotspotsGroup);
    hotspotsGroupRef.current = hotspotsGroup;

    // 9. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // Starfield Background
    const starGeo = new THREE.BufferGeometry();
    const starCount = 1500;
    const posArray = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 120;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, transparent: true, opacity: 0.8 })));

    // Drag & Click Controls
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = false;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const deltaX = Math.abs(e.clientX - prevMouse.x);
      const deltaY = Math.abs(e.clientY - prevMouse.y);
      if (deltaX > 3 || deltaY > 3) isDragging = true;

      if (e.buttons === 1 && earthRef.current) {
        const dx = e.clientX - prevMouse.x;
        const dy = e.clientY - prevMouse.y;
        earthRef.current.rotation.y += dx * 0.005;
        earthRef.current.rotation.x += dy * 0.005;
        if (cloudsRef.current) {
          cloudsRef.current.rotation.y += dx * 0.005;
          cloudsRef.current.rotation.x += dy * 0.005;
        }
        if (internalLayersGroupRef.current) {
          internalLayersGroupRef.current.rotation.y += dx * 0.005;
          internalLayersGroupRef.current.rotation.x += dy * 0.005;
        }
      }
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = (e: MouseEvent) => {
      if (!isDragging && mount && cameraRef.current && hotspotsGroupRef.current) {
        const rect = mount.getBoundingClientRect();
        mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouseVec, cameraRef.current);
        const intersects = raycaster.intersectObjects(hotspotsGroupRef.current.children);

        if (intersects.length > 0) {
          const hitSpot = intersects[0].object.userData as Hotspot;
          if (hitSpot && hitSpot.name) {
            setSelectedHotspot(hitSpot);
          }
        }
      }
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      if (autoRotate && earthRef.current) {
        earthRef.current.rotation.y += 0.002;
        if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0025;
        if (internalLayersGroupRef.current) internalLayersGroupRef.current.rotation.y += 0.002;
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
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate]);

  // Handle Layer Selection (Cutaway vs Surface)
  useEffect(() => {
    if (!earthRef.current || !cloudsRef.current || !internalLayersGroupRef.current) return;

    if (activeLayer === 'surface') {
      earthRef.current.visible = true;
      earthRef.current.scale.set(1, 1, 1);
      cloudsRef.current.visible = showClouds;
      internalLayersGroupRef.current.visible = false;
    } else {
      // Cutaway / Internal Layers Mode
      internalLayersGroupRef.current.visible = true;
      cloudsRef.current.visible = false;
      
      if (activeLayer === 'crust') {
        earthRef.current.visible = true;
        earthRef.current.scale.set(1, 1, 1);
      } else if (activeLayer === 'mantle') {
        earthRef.current.visible = false;
      } else if (activeLayer === 'outer-core') {
        earthRef.current.visible = false;
      } else if (activeLayer === 'inner-core') {
        earthRef.current.visible = false;
      }
    }
  }, [activeLayer, showClouds]);

  // Handle Day/Night lighting
  useEffect(() => {
    if (!dirLightRef.current) return;
    if (dayNightMode === 'day') {
      dirLightRef.current.position.set(0, 0, 10);
      dirLightRef.current.intensity = 3.0;
    } else if (dayNightMode === 'night') {
      dirLightRef.current.position.set(0, 0, -10);
      dirLightRef.current.intensity = 0.5;
    } else {
      dirLightRef.current.position.set(5, 3, 5);
      dirLightRef.current.intensity = 2.5;
    }
  }, [dayNightMode]);

  const handleZoom = (direction: 'in' | 'out') => {
    if (!cameraRef.current) return;
    const newZ = cameraRef.current.position.z + (direction === 'in' ? -0.6 : 0.6);
    cameraRef.current.position.z = Math.max(2.2, Math.min(7.0, newZ));
  };

  const handleReset = () => {
    if (cameraRef.current) cameraRef.current.position.z = 4.2;
    if (earthRef.current) {
      earthRef.current.rotation.x = 0;
      earthRef.current.rotation.y = 0;
    }
    setSelectedHotspot(null);
    setActiveLayer('surface');
  };

  const currentLayerData = EARTH_INTERNAL_LAYERS.find((l) => l.id === activeLayer);

  return (
    <div className={`glass-panel rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-500/20 shadow-2xl relative ${className}`}>
      
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="w-full h-full bg-slate-950 cursor-grab active:cursor-grabbing relative overflow-hidden" />

      {/* Top Bar Header & Earth Layer Selector */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-10">
        
        {/* Title Badge */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase glass-panel px-3 py-1.5 rounded-full border border-cyan-500/30 bg-slate-950/80 backdrop-blur-md">
            NASA Blue Marble 3D Globe & Earth Layers Cutaway
          </span>
        </div>

        {/* 🌍 Interactive Layer Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pointer-events-auto bg-slate-950/90 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md">
          <button
            onClick={() => setActiveLayer('surface')}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'surface' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Surface</span>
          </button>

          <button
            onClick={() => setActiveLayer('crust')}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'crust' ? 'bg-emerald-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Crust</span>
          </button>

          <button
            onClick={() => setActiveLayer('mantle')}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'mantle' ? 'bg-amber-500 text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Mantle</span>
          </button>

          <button
            onClick={() => setActiveLayer('outer-core')}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'outer-core' ? 'bg-red-500 text-white shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Outer Core</span>
          </button>

          <button
            onClick={() => setActiveLayer('inner-core')}
            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold flex items-center gap-1 transition-all ${
              activeLayer === 'inner-core' ? 'bg-white text-slate-950 shadow-md font-bold' : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>Inner Core</span>
          </button>
        </div>
      </div>

      {/* Earth Active Layer Telemetry Overlay Card */}
      {currentLayerData && activeLayer !== 'surface' && (
        <div className="absolute top-20 left-4 sm:left-6 w-80 glass-panel p-5 rounded-2xl border border-cyan-500/40 bg-slate-950/90 shadow-2xl space-y-3 z-20 animate-fade-in-up">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <h4 className="font-display font-bold text-sm text-white">{currentLayerData.name}</h4>
            </div>
            <button
              onClick={() => setActiveLayer('surface')}
              className="text-xs font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="bg-slate-900 p-2.5 rounded-xl border border-white/5 space-y-0.5">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Depth Range</span>
              <div className="text-cyan-300 font-bold">{currentLayerData.depth}</div>
            </div>

            <div className="bg-slate-900 p-2.5 rounded-xl border border-white/5 space-y-0.5">
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Temperature</span>
              <div className="text-amber-400 font-bold">{currentLayerData.temp}</div>
            </div>
          </div>

          <div className="bg-slate-900 p-2.5 rounded-xl border border-white/5 text-xs font-mono space-y-0.5">
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Pressure</span>
            <div className="text-slate-200 font-bold">{currentLayerData.pressure}</div>
          </div>

          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs font-sans text-cyan-200">
            <strong>Composition:</strong> {currentLayerData.composition}
          </div>
        </div>
      )}

      {/* Selected Surface Hotspot Telemetry Overlay */}
      {selectedHotspot && activeLayer === 'surface' && (
        <div className="absolute top-20 right-4 sm:right-6 w-80 glass-panel p-4 rounded-2xl border border-cyan-500/40 bg-slate-950/90 shadow-2xl space-y-2.5 z-20 animate-fade-in-up">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <h4 className="font-display font-bold text-sm text-white">{selectedHotspot.name}</h4>
            </div>
            <button
              onClick={() => setSelectedHotspot(null)}
              className="text-xs font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-white/10"
            >
              ✕
            </button>
          </div>

          <p className="text-xs text-slate-300 font-sans leading-relaxed">{selectedHotspot.details}</p>

          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono pt-1">
            <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
              <span className="text-slate-400 block">Type</span>
              <strong className="text-cyan-300 font-bold">{selectedHotspot.type}</strong>
            </div>
            <div className="bg-slate-900 p-2 rounded-lg border border-white/5">
              <span className="text-slate-400 block">Elevation</span>
              <strong className="text-emerald-300 font-bold">{selectedHotspot.elevation}</strong>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Controls Overlay */}
      {interactiveControls && (
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-auto z-10">
          
          {/* Left Controls: Play/Pause & Reset */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl glass-panel bg-slate-950/80 border border-white/15 backdrop-blur-md">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                autoRotate ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
              title="Toggle Auto Rotation"
            >
              {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="hidden sm:inline">{autoRotate ? 'Rotating' : 'Paused'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Reset Globe View"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Center Lighting Mode: Day / Terminator / Night */}
          <div className="flex items-center gap-1 p-1 rounded-2xl glass-panel bg-slate-950/80 border border-white/15 backdrop-blur-md">
            <button
              onClick={() => setDayNightMode('day')}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1 ${
                dayNightMode === 'day' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Day</span>
            </button>

            <button
              onClick={() => setDayNightMode('split')}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1 ${
                dayNightMode === 'split' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="hidden sm:inline">Terminator</span>
            </button>

            <button
              onClick={() => setDayNightMode('night')}
              className={`p-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1 ${
                dayNightMode === 'night' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              <MoonIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Night</span>
            </button>
          </div>

          {/* Right Controls: Zoom & Clouds Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl glass-panel bg-slate-950/80 border border-white/15 backdrop-blur-md">
            <button
              onClick={() => setShowClouds(!showClouds)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                showClouds ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
              }`}
            >
              Clouds: {showClouds ? 'ON' : 'OFF'}
            </button>

            <button
              onClick={() => handleZoom('in')}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom('out')}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* Footer Info */}
      <div className="absolute bottom-2 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 pointer-events-none z-0">
        <span>Click Earth Layer buttons (Surface, Crust, Mantle, Core) or 3D Pins to inspect</span>
        <span className="text-cyan-400 font-bold">Official NASA Blue Marble 60FPS</span>
      </div>

    </div>
  );
};
