import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, HeartHandshake } from "lucide-react";

export default function Screen4Apology({ onNext }) {
  const [revealedIndex, setRevealedIndex] = useState(-1);

  const lines = [
    "I'm sorry Suu... for the nights when I chose to sleep instead of giving you my time, when all you wanted was just to talk to me. 🥺",
    "I'm sorry for communicating so poorly and making you feel like you weren't important to me. 💔",
    "I'm sorry that my carelessness made you feel ignored, alone, and uncared for. 😞",
    "And most of all... I am so sorry that I made the girl I love the most feel like she had to beg for basic attention from me. 😭",
  ];

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => {
        setRevealedIndex((prev) => Math.max(prev, i));
      }, 700 + i * 1700)
    );

    const finalTimer = setTimeout(() => {
      setRevealedIndex(lines.length);
    }, 700 + lines.length * 1700);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalTimer);
    };
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <motion.div
        className="glass-panel"
        style={{
          padding: "2rem 1.75rem",
          border: "1px solid rgba(168, 85, 247, 0.3)",
          boxShadow: "0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(168, 85, 247, 0.15)",
        }}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Adorable custom 3D image of the cute bear holding "I am sorry Suu" */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              position: "relative",
              width: "160px",
              height: "160px",
              borderRadius: "24px",
              overflow: "hidden",
              border: "2px solid rgba(244, 114, 182, 0.4)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(244, 114, 182, 0.3)",
              marginBottom: "1rem",
            }}
          >
            <img
              src="/assets/sorry_bear.jpg"
              alt="Cute bear holding I am sorry Suu sign"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <h2
            className="serif-heading"
            style={{
              fontSize: "clamp(2rem, 5vw, 2.6rem)",
              color: "var(--text-primary)",
            }}
          >
            I'm so sorry, Suu. 🥺
          </h2>
        </motion.div>

        {/* Lines */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.75rem" }}>
          {lines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={revealedIndex >= idx ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                lineHeight: "1.65",
                color: idx === lines.length - 1 ? "#fdf2f8" : "rgba(248, 250, 252, 0.9)",
                fontWeight: idx === lines.length - 1 ? 500 : 400,
                paddingLeft: "1rem",
                borderLeft: "2px solid rgba(244, 114, 182, 0.45)",
                background: idx === lines.length - 1 ? "rgba(244, 114, 182, 0.06)" : "transparent",
                borderRadius: "0 8px 8px 0",
                padding: "0.5rem 0.75rem 0.5rem 1rem",
              }}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Final emphasis line */}
        {revealedIndex >= lines.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              textAlign: "center",
              padding: "1rem",
              background: "rgba(168, 85, 247, 0.1)",
              borderRadius: "var(--radius-md)",
              border: "1px solid rgba(244, 114, 182, 0.3)",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
                fontStyle: "italic",
                color: "#fbcfe8",
              }}
            >
              You deserved so much better from me. 🤍
            </p>
          </motion.div>
        )}

        {/* Continue Button */}
        {revealedIndex >= lines.length && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ textAlign: "center" }}
          >
            <button onClick={onNext} className="btn-primary warm-glow" style={{ minWidth: "240px" }}>
              <span>One more thing, please... 🥺</span>
              <ArrowRight size={17} />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
