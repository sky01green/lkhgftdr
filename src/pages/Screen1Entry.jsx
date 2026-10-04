import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Screen1Entry({ config, onNext }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 600);
    const timer2 = setTimeout(() => setStep(2), 2000);
    const timer3 = setTimeout(() => setStep(3), 3600);
    const timer4 = setTimeout(() => setStep(4), 5200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div style={{ width: "100%", textAlign: "center", maxWidth: "540px", margin: "0 auto" }}>
      {/* Little cute badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.35rem 0.9rem",
          borderRadius: "var(--radius-full)",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          fontSize: "0.82rem",
          color: "#fbcfe8",
          marginBottom: "1.5rem",
        }}
      >
        <Sparkles size={14} color="#f472b6" />
        <span>A message for my Suu 🥺</span>
      </motion.div>

      <div style={{ minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1.25rem" }}>
        {/* Line 1 */}
        {step >= 1 && (
          <motion.h1
            className="serif-heading"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 3rem)", color: "var(--text-primary)" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Hey Suu... 🥺
          </motion.h1>
        )}

        {/* Line 2 */}
        {step >= 2 && (
          <motion.p
            style={{
              fontSize: "clamp(1.15rem, 3.2vw, 1.35rem)",
              color: "var(--text-secondary)",
              fontWeight: 400,
              maxWidth: "440px",
              lineHeight: "1.5",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            I know you are very, very angry with me right now.
          </motion.p>
        )}

        {/* Line 3 - Real, humble boyfriend English */}
        {step >= 3 && (
          <motion.div
            style={{
              maxWidth: "460px",
              display: "flex",
              flexDirection: "column",
              gap: "0.6rem",
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontSize: "1.05rem",
                color: "rgba(255, 255, 255, 0.75)",
                fontStyle: "italic",
              }}
            >
              My English is not good to write fancy sentences...
            </p>
            <p
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.28rem)",
                color: "#fde68a",
                fontWeight: 500,
              }}
            >
              ...but every single word here is 100% straight from my heart. And honestly, I understand why you're mad.
            </p>
          </motion.div>
        )}
      </div>

      {/* Button */}
      {step >= 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: "2.5rem" }}
        >
          <button
            onClick={onNext}
            className="btn-primary animate-glow-pulse"
            style={{ padding: "1rem 2.25rem", fontSize: "1.05rem" }}
          >
            <span>Okay... I'm listening 🥺</span>
            <ArrowRight size={18} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
