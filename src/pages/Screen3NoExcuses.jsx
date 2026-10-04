import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, XCircle } from "lucide-react";

export default function Screen3NoExcuses({ onNext }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t0 = setTimeout(() => setPhase(1), 500); // show card 1
    const t1 = setTimeout(() => setPhase(2), 1900); // strike 1 + show 2
    const t2 = setTimeout(() => setPhase(3), 3400); // strike 2 + show 3
    const t3 = setTimeout(() => setPhase(4), 4900); // strike 3
    const t4 = setTimeout(() => setPhase(5), 6200); // final resolution text

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const excuses = [
    { id: 1, text: '"I was tired from the day..." 🥱', strikePhase: 2 },
    { id: 2, text: '"I didn\'t mean to make you feel bad..." 🥺', strikePhase: 3 },
    { id: 3, text: '"I promise next time I will do better..." 🤐', strikePhase: 4 },
  ];

  return (
    <div style={{ width: "100%", maxWidth: "540px", margin: "0 auto", textAlign: "center" }}>
      {/* Intro Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "1.75rem" }}
      >
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--stage-2-accent)" }}>
          100% Honest • No Excuses ✋
        </span>
        <h2 className="serif-heading" style={{ fontSize: "clamp(1.75rem, 4.5vw, 2.3rem)", marginTop: "0.4rem" }}>
          Okay Suu. No excuses.
        </h2>
      </motion.div>

      {/* Excuses Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
        {excuses.map((excuse, index) => {
          const isVisible = phase >= index + 1;
          const isStruck = phase >= excuse.strikePhase;

          if (!isVisible) return null;

          return (
            <motion.div
              key={excuse.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              style={{
                position: "relative",
                padding: "1.1rem 1.4rem",
                borderRadius: "var(--radius-md)",
                background: isStruck ? "rgba(239, 68, 68, 0.05)" : "rgba(255, 255, 255, 0.04)",
                border: isStruck
                  ? "1px solid rgba(239, 68, 68, 0.3)"
                  : "1px solid rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
            >
              <span
                style={{
                  fontSize: "1.15rem",
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: isStruck ? "rgba(248, 113, 113, 0.7)" : "var(--text-primary)",
                  position: "relative",
                  display: "inline-block",
                  padding: "0 0.5rem",
                  transition: "color 0.4s ease",
                }}
              >
                {excuse.text}
                {isStruck && <div className="strikethrough-line" />}
              </span>

              {isStruck && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  style={{ position: "absolute", right: "1.25rem", color: "#f87171" }}
                >
                  <XCircle size={18} />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Sincere takeaway */}
      {phase >= 5 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "1.08rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
            None of these silly excuses change how much I hurt you.
          </p>
          <p style={{ fontSize: "1.05rem", color: "rgba(255, 255, 255, 0.9)", marginBottom: "1.25rem" }}>
            You waited for me, and I just slept like an idiot. So I won't defend myself.
          </p>
          <motion.div
            style={{
              display: "inline-block",
              padding: "0.55rem 1.6rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(248, 113, 113, 0.15)",
              border: "1px solid rgba(248, 113, 113, 0.35)",
              color: "#fca5a5",
              fontFamily: "var(--font-serif)",
              fontSize: "1.35rem",
              fontWeight: 600,
            }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            I messed up so bad. 😞💔
          </motion.div>
        </motion.div>
      )}

      {/* Button */}
      {phase >= 5 && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            onClick={onNext}
            className="btn-primary"
            style={{ minWidth: "220px" }}
          >
            <span>I understand 🥺</span>
            <ArrowRight size={17} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
