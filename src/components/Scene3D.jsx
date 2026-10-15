import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, ContactShadows, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Ambient Golden Salon Embers & Dust Field (Full Page)
function FullPageEmberField({ count = 180, scrollProgress, mousePos }) {
  const pointsRef = useRef();

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;     // x spread
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22; // y spread across long vertical space
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;  // z depth
      sc[i] = Math.random() * 0.05 + 0.02;
    }
    return [pos, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Slow drift + vertical translation tied to scroll
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03 + mousePos.current.x * 0.1;
    pointsRef.current.position.y = (scrollProgress.current - 0.5) * 8;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4A24C"
        size={0.07}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.65}
      />
    </Points>
  );
}

// Precision Straight Razor Geometry (Navalha de Barbeiro de Alta Precisão)
function StraightRazor({ isOpen = 0.6 }) {
  return (
    <group rotation={[0.1, 0, -0.15]}>
      {/* Blade Spine (Lombo Reforçado em Aço Escovado) */}
      <mesh position={[0.7, 0.22, 0]} castShadow>
        <boxGeometry args={[1.9, 0.18, 0.09]} />
        <meshStandardMaterial
          color="#D8E2EC"
          metalness={0.96}
          roughness={0.16}
          envMapIntensity={2.5}
        />
      </mesh>

      {/* Razor Blade Cutting Edge (Lâmina Polida Espelhada) */}
      <mesh position={[0.7, -0.04, 0.015]} castShadow>
        <boxGeometry args={[1.85, 0.34, 0.03]} />
        <meshStandardMaterial
          color="#FFFFFF"
          metalness={0.98}
          roughness={0.08}
        />
      </mesh>

      {/* Brass Engraved Brand Spine Accent (Faixa em Latão Nobre) */}
      <mesh position={[0.65, 0.16, 0.05]}>
        <boxGeometry args={[1.2, 0.06, 0.015]} />
        <meshStandardMaterial
          color="#D4A24C"
          metalness={0.92}
          roughness={0.2}
          emissive="#D4A24C"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Tang / Finger Tail (Espiga de Apoio Ergonômico) */}
      <mesh position={[-0.45, 0.1, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
        <meshStandardMaterial color="#94A3B8" metalness={0.95} roughness={0.2} />
      </mesh>

      {/* Pivot Brass Rivet (Pino Dourado da Dobradiça) */}
      <mesh position={[-0.55, 0.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 0.22, 24]} />
        <meshStandardMaterial color="#D4A24C" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Handle Scales (Cabo Escuro em Ébano/Aço Fosco) */}
      <group position={[-0.55, 0, 0]} rotation={[0, 0, isOpen]}>
        <mesh position={[-0.8, -0.45, 0.06]} rotation={[0, 0, 0.35]} castShadow>
          <boxGeometry args={[1.7, 0.24, 0.05]} />
          <meshStandardMaterial color="#161719" metalness={0.65} roughness={0.35} />
        </mesh>
        <mesh position={[-0.8, -0.45, -0.06]} rotation={[0, 0, 0.35]} castShadow>
          <boxGeometry args={[1.7, 0.24, 0.05]} />
          <meshStandardMaterial color="#161719" metalness={0.65} roughness={0.35} />
        </mesh>
        {/* Handle Brass Pins */}
        <mesh position={[-0.7, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.2, 16]} />
          <meshStandardMaterial color="#D4A24C" metalness={0.92} roughness={0.2} />
        </mesh>
        <mesh position={[-1.3, -0.65, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.035, 0.035, 0.2, 16]} />
          <meshStandardMaterial color="#D4A24C" metalness={0.92} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

// Precision Professional Barber Shears (Tesoura Clássica Articulada)
function BarberShears({ openAngle = 0.25 }) {
  return (
    <group position={[0.2, -0.3, -0.2]} rotation={[0.4, 0.2, 0.6]}>
      {/* Central Brass Pivot Screw */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 0.16, 24]} />
        <meshStandardMaterial color="#D4A24C" metalness={0.95} roughness={0.2} />
      </mesh>

      {/* Blade 1 with Handle Ring */}
      <group rotation={[0, 0, openAngle * 0.5]}>
        {/* Cutting Blade */}
        <mesh position={[0.8, 0.06, 0.02]} rotation={[0, 0, -0.05]}>
          <boxGeometry args={[1.6, 0.14, 0.03]} />
          <meshStandardMaterial color="#CBD5E1" metalness={0.97} roughness={0.12} />
        </mesh>
        {/* Handle Shaft */}
        <mesh position={[-0.5, -0.05, 0.02]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.045, 0.045, 1.0, 16]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Finger Ring */}
        <mesh position={[-1.1, -0.22, 0.02]} rotation={[0, 0, 0.3]}>
          <torusGeometry args={[0.22, 0.04, 16, 32]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.88} roughness={0.22} />
        </mesh>
      </group>

      {/* Blade 2 with Finger Ring */}
      <group rotation={[0, 0, -openAngle * 0.5]}>
        {/* Cutting Blade */}
        <mesh position={[0.8, -0.06, -0.02]} rotation={[0, 0, 0.05]}>
          <boxGeometry args={[1.6, 0.14, 0.03]} />
          <meshStandardMaterial color="#E2E8F0" metalness={0.97} roughness={0.12} />
        </mesh>
        {/* Handle Shaft */}
        <mesh position={[-0.5, 0.05, -0.02]} rotation={[0, 0, -0.2]}>
          <cylinderGeometry args={[0.045, 0.045, 1.0, 16]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Finger Ring with Tang */}
        <mesh position={[-1.1, 0.22, -0.02]} rotation={[0, 0, -0.3]}>
          <torusGeometry args={[0.22, 0.04, 16, 32]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.88} roughness={0.22} />
        </mesh>
        {/* Tang Rest */}
        <mesh position={[-1.38, 0.32, -0.02]} rotation={[0, 0, -0.5]}>
          <cylinderGeometry args={[0.03, 0.02, 0.25, 12]} />
          <meshStandardMaterial color="#D4A24C" metalness={0.92} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

// Rotating Ambient Barber Ring (Sutil halo orbital temático)
function AmbientOrbitalRing() {
  const ringRef = useRef();

  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.25;
      ringRef.current.rotation.x = Math.sin(delta * 0.5) * 0.2;
    }
  });

  return (
    <group ref={ringRef} position={[0, 0, -0.4]}>
      {/* Golden Brass Orbital Hoop */}
      <mesh>
        <torusGeometry args={[1.8, 0.025, 16, 80]} />
        <meshStandardMaterial
          color="#D4A24C"
          metalness={0.9}
          roughness={0.2}
          emissive="#D4A24C"
          emissiveIntensity={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Barber Red Arc Segment */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[1.8, 0.032, 16, 32, Math.PI * 0.45]} />
        <meshStandardMaterial color="#B8452A" emissive="#B8452A" emissiveIntensity={0.6} roughness={0.3} />
      </mesh>

      {/* Gaucho Green Arc Segment */}
      <mesh rotation={[0, 0, Math.PI * 1.05]}>
        <torusGeometry args={[1.8, 0.032, 16, 32, Math.PI * 0.45]} />
        <meshStandardMaterial color="#2F5D50" emissive="#2F5D50" emissiveIntensity={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

// Master Choreographed 3D Scene
function MasterChoreography({ scrollProgress, mousePos }) {
  const groupRef = useRef();
  const spotLightRef = useRef();
  const { viewport } = useThree();

  // Responsive scale base
  const isMobile = viewport.width < 7;
  const baseScale = isMobile ? 0.9 : 1.45;

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const s = scrollProgress.current; // 0 to 1
    const mx = mousePos.current.x;
    const my = mousePos.current.y;

    // Fluid spatial choreography as the user scrolls through the landing page:
    // Hero: positioned right beside the text in full glory [1.35, 0.0, 0.5]
    // Services: rotates and glides slightly deeper [0.9, -0.6, -0.8]
    // Experience: glides across to the left [-1.2, 0.1, -0.6]
    // Reviews & Final CTA: returns to center with amber glow [0, -0.2, 0.4]
    
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0.4;
    let targetRotX = 0.25 + my * 0.35;
    let targetRotY = -0.3 + mx * 0.55;
    let targetRotZ = 0.05;
    let targetScale = baseScale;

    if (s < 0.2) {
      // Hero
      const localP = s / 0.2;
      targetX = THREE.MathUtils.lerp(isMobile ? 0 : 1.35, isMobile ? 0 : 1.1, localP);
      targetY = THREE.MathUtils.lerp(isMobile ? -0.9 : 0.0, -0.25, localP);
      targetZ = THREE.MathUtils.lerp(0.5, -0.2, localP);
      targetRotX = 0.22 + my * 0.3;
      targetRotY = -0.35 + mx * 0.5;
      targetRotZ = 0.08;
    } else if (s < 0.45) {
      // Services
      const localP = (s - 0.2) / 0.25;
      targetX = THREE.MathUtils.lerp(isMobile ? 0 : 1.1, isMobile ? -0.4 : 0.8, localP);
      targetY = THREE.MathUtils.lerp(-0.25, 0.1, localP);
      targetZ = THREE.MathUtils.lerp(-0.2, -0.9, localP);
      targetRotX = 0.5 + my * 0.25;
      targetRotY = 0.65 + mx * 0.35;
      targetRotZ = -0.25;
      targetScale = baseScale * 0.88;
    } else if (s < 0.7) {
      // Experience & Barbers
      const localP = (s - 0.45) / 0.25;
      targetX = THREE.MathUtils.lerp(isMobile ? -0.4 : 0.8, isMobile ? 0.2 : -1.3, localP);
      targetY = THREE.MathUtils.lerp(0.1, 0.25, localP);
      targetZ = THREE.MathUtils.lerp(-0.9, -0.5, localP);
      targetRotX = 0.3 + my * 0.3;
      targetRotY = -0.5 + mx * 0.4;
      targetRotZ = 0.3;
      targetScale = baseScale * 0.95;
    } else {
      // Reviews, Location & Final CTA
      const localP = (s - 0.7) / 0.3;
      targetX = THREE.MathUtils.lerp(isMobile ? 0.2 : -1.3, isMobile ? 0 : 0.1, localP);
      targetY = THREE.MathUtils.lerp(0.25, -0.15, localP);
      targetZ = THREE.MathUtils.lerp(-0.5, 0.3, localP);
      targetRotX = 0.2 + my * 0.25;
      targetRotY = 0.15 + mx * 0.4;
      targetRotZ = 0.05;
      targetScale = baseScale * 1.1;
    }

    // Apply smooth inertial damping
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 3.8, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 3.8, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 3.8, delta);

    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 3.8, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 3.8, delta);
    groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotZ, 3.8, delta);

    groupRef.current.scale.setScalar(THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 3.8, delta));

    // Dynamic cursor spotlight tracking
    if (spotLightRef.current) {
      spotLightRef.current.position.x = THREE.MathUtils.damp(spotLightRef.current.position.x, mx * 4 + 2, 4, delta);
      spotLightRef.current.position.y = THREE.MathUtils.damp(spotLightRef.current.position.y, my * 3 + 3, 4, delta);
    }
  });

  return (
    <>
      {/* Studio Key Light tracking cursor */}
      <spotLight
        ref={spotLightRef}
        position={[3, 4, 4]}
        angle={0.65}
        penumbra={0.8}
        intensity={6.0}
        color="#D4A24C"
        castShadow
      />

      {/* Floating 3D Tools Group */}
      <group ref={groupRef}>
        <Float speed={2.2} rotationIntensity={0.5} floatIntensity={0.7}>
          {/* Straight Razor with open chrome blade */}
          <StraightRazor isOpen={0.7} />

          {/* Barber Shears */}
          <BarberShears openAngle={0.35} />

          {/* Orbital Ambient Ring */}
          <AmbientOrbitalRing />
        </Float>
      </group>

      {/* Global Embers Field */}
      <FullPageEmberField scrollProgress={scrollProgress} mousePos={mousePos} count={180} />

      {/* Contact Ground Shadows */}
      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.45}
        scale={7}
        blur={2.5}
        far={4.0}
        color="#000000"
      />
    </>
  );
}

export default function Scene3D() {
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollProgress = useRef(0);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }

    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        scrollProgress.current = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!hasWebGL) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10 select-none overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[-4, 3, 2]} intensity={1.5} color="#F2EEE6" />
        <pointLight position={[3, -4, -3]} intensity={2.5} color="#7BA0C0" />
        <pointLight position={[-2, -2, 1]} intensity={1.2} color="#B8452A" />

        {/* Master Choreographed Scene */}
        <MasterChoreography scrollProgress={scrollProgress} mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
