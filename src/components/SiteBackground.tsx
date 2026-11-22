"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { THEME, type BackgroundMode } from "@/lib/theme";

// خلفية الموقع: هادئة، بدون تتبع الماوس، وبدون اندفاع عند تغيير الصفحة.
// الإعدادات كلها في src/lib/theme.ts

function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.6)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function ThreeBackground({ mode }: { mode: "waves" | "stars" }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const speed = reduceMotion ? 0 : THEME.motionSpeed;
    const intensity = Math.min(Math.max(THEME.intensity, 0), 1);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: "low-power" });
    } catch {
      return; // جهاز لا يدعم WebGL: تبقى الخلفية الداكنة فقط
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0b1220, mode === "waves" ? 0.0022 : 0.0012);
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 3000);

    const c1 = new THREE.Color(THEME.primaryColor);
    const c2 = new THREE.Color(THEME.secondaryColor);
    const texture = makeDotTexture();
    const geometry = new THREE.BufferGeometry();
    let positions: Float32Array;
    let cols = 0;
    let rows = 0;
    const spacing = 22;

    if (mode === "waves") {
      cols = isMobile ? 60 : 110;
      rows = isMobile ? 40 : 60;
      positions = new Float32Array(cols * rows * 3);
      const colors = new Float32Array(cols * rows * 3);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const k = (i * rows + j) * 3;
          positions[k] = (i - cols / 2) * spacing;
          positions[k + 1] = 0;
          positions[k + 2] = (j - rows / 2) * spacing;
          const c = c1.clone().lerp(c2, i / cols);
          colors[k] = c.r;
          colors[k + 1] = c.g;
          colors[k + 2] = c.b;
        }
      }
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      camera.position.set(0, 180, isMobile ? 520 : 460);
      camera.lookAt(0, -40, 0);
    } else {
      const count = isMobile ? 500 : 1100;
      positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
        const c = c1.clone().lerp(c2, Math.random());
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      camera.position.set(0, 0, 600);
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      size: mode === "waves" ? 5 : 4,
      map: texture,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      opacity: 0.25 + intensity * 0.6,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let t = 0;
    const update = () => {
      if (mode === "waves") {
        const pos = geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const k = (i * rows + j) * 3;
            pos.array[k + 1] =
              Math.sin(i * 0.12 + t) * 22 + Math.sin(j * 0.18 + t * 0.7) * 16;
          }
        }
        pos.needsUpdate = true;
      } else {
        points.rotation.y = t * 0.02;
        points.rotation.x = t * 0.008;
      }
      renderer.render(scene, camera);
    };

    let frame = 0;
    let last = performance.now();
    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      t += dt * speed * 0.6;
      update();
    };

    const start = () => {
      if (speed > 0 && !frame) {
        last = performance.now();
        frame = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    update(); // أول رسمة (وتبقى ثابتة إذا كانت السرعة 0)
    start();

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      if (!frame) update();
    };
    window.addEventListener("resize", onResize);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [mode]);

  return <div ref={containerRef} className="absolute inset-0" />;
}

function Aurora() {
  const o = 0.08 + THEME.intensity * 0.14;
  const duration = THEME.motionSpeed > 0 ? `${40 / THEME.motionSpeed}s` : "0s";
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ ["--aurora-duration" as string]: duration }}>
      <div
        className="aurora-blob -top-[20%] right-[-10%] h-[70vmax] w-[70vmax]"
        style={{ background: THEME.primaryColor, opacity: o }}
      />
      <div
        className="aurora-blob bottom-[-30%] left-[-15%] h-[75vmax] w-[75vmax]"
        style={{ background: THEME.secondaryColor, opacity: o, animationDelay: "-15s" }}
      />
    </div>
  );
}

export default function SiteBackground() {
  const [mode, setMode] = useState<BackgroundMode | null>(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    setMode(isMobile && THEME.lightBackgroundOnMobile && THEME.background !== "none" ? "aurora" : THEME.background);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-[#0B1220]">
      {mode === "aurora" && <Aurora />}
      {(mode === "waves" || mode === "stars") && <ThreeBackground mode={mode} />}
      <div className="bg-vignette absolute inset-0" />
    </div>
  );
}
