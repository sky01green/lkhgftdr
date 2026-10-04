import React, { useEffect, useRef } from "react";

export default function BackgroundCanvas({ stage = 1 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle color palettes per stage
    const stagePalettes = {
      1: ["rgba(180, 205, 240, 0.45)", "rgba(148, 163, 184, 0.35)", "rgba(226, 232, 240, 0.5)"],
      2: ["rgba(129, 140, 248, 0.55)", "rgba(99, 102, 241, 0.45)", "rgba(199, 210, 254, 0.4)"],
      3: ["rgba(192, 132, 252, 0.55)", "rgba(168, 85, 247, 0.45)", "rgba(240, 171, 252, 0.4)"],
      4: ["rgba(244, 114, 182, 0.6)", "rgba(236, 72, 153, 0.45)", "rgba(251, 207, 232, 0.45)"],
      5: ["rgba(251, 191, 36, 0.65)", "rgba(245, 158, 11, 0.5)", "rgba(254, 240, 138, 0.55)"],
    };

    const numParticles = Math.min(Math.floor((width * height) / 22000), 55);
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.45 - 0.1, // gently float upwards
        alpha: Math.random() * 0.7 + 0.2,
        alphaSpeed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const palette = stagePalettes[stage] || stagePalettes[1];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        p.alpha += p.alphaSpeed;
        if (p.alpha > 0.85) {
          p.alpha = 0.85;
          p.alphaSpeed = -p.alphaSpeed;
        } else if (p.alpha < 0.15) {
          p.alpha = 0.15;
          p.alphaSpeed = -p.alphaSpeed;
        }

        const color = palette[i % palette.length];

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = p.radius * 4;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [stage]);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}
