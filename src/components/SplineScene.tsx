"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";

export default function CyberScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const speedBoostRef = useRef(1.0);

  // إطلاق تسارع سينمائي عند الانتقال بين الصفحات
  useEffect(() => {
    speedBoostRef.current = 6.0;
  }, [pathname]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. المشهد والكاميرا والريندر
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050811, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. سحابة جزيئات نيونية (Cyber Particles)
    const particleCount = 2200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorCyan = new THREE.Color(0x06b6d4);
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorPink = new THREE.Color(0xec4899);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

      const mixedColor = colorCyan.clone().lerp(
        Math.random() > 0.5 ? colorViolet : colorPink,
        Math.random()
      );
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 3. مجسم هندسي نيون رئيسي (Icosahedron Core)
    const coreGeo = new THREE.IcosahedronGeometry(75, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // حلقة محيطة تدور في اتجاه معاكس
    const ringGeo = new THREE.TorusGeometry(120, 1.2, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2.5;
    scene.add(ringMesh);

    // 4. تتبع تفاعل حركة الماوس
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.4;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.4;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // تجاوب الشاشة
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // 5. حلقة التحريك (Render Loop)
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // تقليل سرعة الاندفاع تدريجياً لتعود لطبيعتها
      if (speedBoostRef.current > 1.0) {
        speedBoostRef.current += (1.0 - speedBoostRef.current) * 0.04;
      }
      const currentSpeed = speedBoostRef.current;

      // دوران المجسمات والتوروس
      coreMesh.rotation.y += 0.005 * currentSpeed;
      coreMesh.rotation.x += 0.003 * currentSpeed;
      ringMesh.rotation.z -= 0.007 * currentSpeed;

      // دوران وتدفق النجوم
      particles.rotation.y += 0.001 * currentSpeed;
      particles.rotation.x += 0.0006 * currentSpeed;

      // تحريك الكاميرا بسلاسة لتتبع الماوس
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX * 0.6;
      camera.position.y = -targetY * 0.6;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
}