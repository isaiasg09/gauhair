import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Golden Dust Particles
function GoldenDust({ count = 120 }) {
  const pointsRef = useRef();

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 7;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
      sz[i] = Math.random() * 0.04 + 0.015;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.06;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4A24C"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.75}
      />
    </Points>
  );
}

// 3D Barber Razor & Cylindrical Barber Beacon
function BarberRazorModel({ mousePos, scrollProgress }) {
  const groupRef = useRef();
  const bladeRef = useRef();
  const poleRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Inertial damping towards mouse cursor
    const targetRotX = (mousePos.current.y * 0.4) + (scrollProgress.current * 0.8);
    const targetRotY = (mousePos.current.x * 0.6) + (scrollProgress.current * 1.2);
    
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 4, delta);
    
    // Scale and position reactive to scroll
    const targetScale = Math.max(0.65, 1 - scrollProgress.current * 0.45);
    const targetPosZ = -scrollProgress.current * 1.5;
    groupRef.current.scale.setScalar(THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 4, delta));
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetPosZ, 4, delta);

    // Subtle continuous rotation for barber beacon ring
    if (poleRef.current) {
      poleRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]}>
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* === THE STRAIGHT RAZOR (NAVALHA ARTESANAL) === */}
        <group position={[0, 0.35, 0]} rotation={[0.2, 0.35, -0.15]}>
          
          {/* Blade Spine (Lombo da Navalha) */}
          <mesh position={[0.4, 0.2, 0]} castShadow>
            <boxGeometry args={[2.2, 0.22, 0.12]} />
            <meshStandardMaterial
              color="#CBD5E1"
              metalness={0.96}
              roughness={0.18}
              envMapIntensity={2.5}
            />
          </mesh>

          {/* Blade Cutting Edge (Lâmina Afiada com chanfro e acabamento espelhado) */}
          <mesh position={[0.4, -0.08, 0.02]} rotation={[0, 0, 0]} castShadow>
            <boxGeometry args={[2.1, 0.38, 0.04]} />
            <meshStandardMaterial
              color="#F8FAFC"
              metalness={0.98}
              roughness={0.12}
              envMapIntensity={3.2}
            />
          </mesh>

          {/* Brass Engraved Brand Band (Faixa Dourada com gravação no lombo) */}
          <mesh position={[0.4, 0.12, 0.07]}>
            <boxGeometry args={[1.2, 0.08, 0.02]} />
            <meshStandardMaterial
              color="#D4A24C"
              metalness={0.9}
              roughness={0.25}
              emissive="#D4A24C"
              emissiveIntensity={0.25}
            />
          </mesh>

          {/* Razor Tang (Haste/Extensão traseira da lâmina para apoio dos dedos) */}
          <mesh position={[-0.85, 0.05, 0]} rotation={[0, 0, 0.35]}>
            <cylinderGeometry args={[0.07, 0.07, 0.6, 16]} />
            <meshStandardMaterial
              color="#94A3B8"
              metalness={0.95}
              roughness={0.25}
            />
          </mesh>

          {/* Pivot Screw / Rivet (Pino de articulação em latão dourado) */}
          <mesh position={[-0.95, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.09, 0.09, 0.26, 24]} />
            <meshStandardMaterial
              color="#D4A24C"
              metalness={0.92}
              roughness={0.2}
            />
          </mesh>

          {/* Ergonomic Handle - Scale 1 (Cabo de Ébano/Aço Fosco) */}
          <mesh position={[-1.6, -0.7, 0.09]} rotation={[0, 0, 0.55]} castShadow>
            <boxGeometry args={[1.8, 0.3, 0.07]} />
            <meshStandardMaterial
              color="#141416"
              metalness={0.5}
              roughness={0.4}
            />
          </mesh>

          {/* Ergonomic Handle - Scale 2 (Outro lado do cabo fechando a empunhadura) */}
          <mesh position={[-1.6, -0.7, -0.09]} rotation={[0, 0, 0.55]} castShadow>
            <boxGeometry args={[1.8, 0.3, 0.07]} />
            <meshStandardMaterial
              color="#141416"
              metalness={0.5}
              roughness={0.4}
            />
          </mesh>

          {/* Handle Brass Inlay Pins (Rebites clássicos dourados no cabo) */}
          <mesh position={[-1.3, -0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 0.28, 16]} />
            <meshStandardMaterial color="#D4A24C" metalness={0.95} roughness={0.2} />
          </mesh>
          <mesh position={[-2.0, -1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.045, 0.045, 0.28, 16]} />
            <meshStandardMaterial color="#D4A24C" metalness={0.95} roughness={0.2} />
          </mesh>
        </group>

        {/* === STYLIZED BARBER POLE BEACON RING (Poste Holográfico / Base Rotativa) === */}
        <group ref={poleRef} position={[0, -0.9, 0]} rotation={[0.2, 0, -0.05]}>
          {/* Outer Industrial Brass Ring */}
          <mesh castShadow>
            <torusGeometry args={[1.25, 0.055, 16, 64]} />
            <meshStandardMaterial
              color="#D4A24C"
              metalness={0.9}
              roughness={0.2}
              emissive="#D4A24C"
              emissiveIntensity={0.15}
            />
          </mesh>

          {/* Barber Red Arc */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <torusGeometry args={[1.12, 0.04, 16, 32, Math.PI * 0.7]} />
            <meshStandardMaterial
              color="#B8452A"
              emissive="#B8452A"
              emissiveIntensity={0.8}
              roughness={0.3}
            />
          </mesh>

          {/* White Porcelain Arc */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI * 0.7]}>
            <torusGeometry args={[1.12, 0.04, 16, 32, Math.PI * 0.6]} />
            <meshStandardMaterial
              color="#F2EEE6"
              emissive="#F2EEE6"
              emissiveIntensity={0.5}
              roughness={0.2}
            />
          </mesh>

          {/* Gaucho Moss Arc */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI * 1.3]}>
            <torusGeometry args={[1.12, 0.04, 16, 32, Math.PI * 0.7]} />
            <meshStandardMaterial
              color="#2F5D50"
              emissive="#2F5D50"
              emissiveIntensity={0.7}
              roughness={0.3}
            />
          </mesh>
        </group>
      </Float>

      {/* Golden Dust Atmosphere */}
      <GoldenDust count={90} />

      {/* Ground Contact Shadow */}
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.65}
        scale={6}
        blur={2.4}
        far={3.5}
        color="#000000"
      />
    </group>
  );
}

export default function Hero3D() {
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL availability & track mouse + scroll
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    const handleMouseMove = (e) => {
      // Normalized between -1 and 1
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      scrollProgress.current = Math.min(1, Math.max(0, scrollY / (heroHeight * 1.2)));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-[450px] lg:h-[600px] flex items-center justify-center">
        <div className="relative border border-line bg-graphite/60 p-4 rounded-md shadow-amber-glow backdrop-blur-md max-w-sm">
          <img
            src="/fotos/header_barbearia.png"
            alt="Equipamentos artesanais Gaucho's Hair"
            className="w-full h-72 object-cover rounded-sm filter grayscale-[20%]"
          />
          <div className="mt-3 flex items-center justify-between text-xs font-label uppercase tracking-widest text-amber">
            <span>Ritual & Ofício</span>
            <span>Desde 2013</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[640px] pointer-events-auto select-none">
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Cinematographic Studio Lighting */}
          <ambientLight intensity={0.4} />

          {/* Warm Amber Key Spotlight */}
          <spotLight
            position={[4, 5, 4]}
            angle={0.5}
            penumbra={0.9}
            intensity={3.2}
            color="#D4A24C"
            castShadow
          />

          {/* Soft Fill Light */}
          <pointLight position={[-3, 2, 2]} intensity={1.2} color="#F2EEE6" />

          {/* Cold Blue Rim/Edge Light (Contraluz estúdio) */}
          <pointLight position={[2, -3, -3]} intensity={2.8} color="#7BA0C0" />

          {/* Barber Ember Accent Light */}
          <pointLight position={[0, -2, 2]} intensity={1.5} color="#B8452A" />

          {/* 3D Razor and Barber Elements */}
          <BarberRazorModel mousePos={mousePos} scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>

      {/* Floating Micro-badge for 3D Interaction */}
      <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1 bg-ink/80 backdrop-blur-md border border-line rounded-sm text-[11px] font-label uppercase tracking-widest text-ash">
        <span className="w-1.5 h-1.5 rounded-full bg-amber animate-ping" />
        <span>3D Interativo · Mova o Cursor</span>
      </div>
    </div>
  );
}
