import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShieldAlert, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";

export default function Screen7FinalChoice({ config, onGoToFinalClosure }) {
  const [phase, setPhase] = useState(0);
  const [choice, setChoice] = useState(null); // 'still_angry' | 'will_think'
  const [angrySubPhase, setAngrySubPhase] = useState(0);
  const [pleaCount, setPleaCount] = useState(0);

  const pleaMessages = [
    "I am so, so sorry my Suu 🥺",
    "I promise I will never sleep when you want to talk! 🤞",
    "I'll buy you all your favorite snacks and ice cream! 🍨🧎‍♂️",
    "Please talk to your idiot... I miss your sweet voice so much 😭❤️",
    "I'm literally kneeling down holding my ears for you 🙇‍♂️💐",
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500); // intro
    const t2 = setTimeout(() => setPhase(2), 2000); // sincere lines
    const t3 = setTimeout(() => setPhase(3), 4000); // plea + bunny
    const t4 = setTimeout(() => setPhase(4), 5800); // buttons appear

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handlePleaClick = () => {
    setPleaCount((prev) => prev + 1);
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.6 },
      colors: ["#f472b6", "#fbbf24", "#e879f9"],
      ticks: 120,
      gravity: 0.9,
      scalar: 0.8,
    });
  };

  const handleAngryClick = () => {
    setChoice("still_angry");
    setAngrySubPhase(1);

    setTimeout(() => {
      setAngrySubPhase(2);
    }, 2500);
  };

  const handleThinkClick = () => {
    setChoice("will_think");

    confetti({
      particleCount: 55,
      spread: 70,
      origin: { y: 0.65 },
      colors: ["#f59e0b", "#ec4899", "#fde68a", "#c084fc", "#60a5fa"],
      ticks: 220,
      gravity: 0.8,
      scalar: 0.95,
    });
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      {/* Intro message */}
      <AnimatePresence>
        {!choice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            {phase >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ marginBottom: "1.5rem" }}
              >
                <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--stage-5-accent)" }}>
                  Straight from my heart 🤍
                </span>
                <h2 className="serif-heading" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", marginTop: "0.4rem" }}>
                  Suu, please listen to this... 🥺
                </h2>
              </motion.div>
            )}

            {/* Adorable Pleading Bunny Image & Heartfelt Plea */}
            {phase >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginBottom: "1.75rem",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "150px",
                    height: "150px",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "2px solid rgba(251, 191, 36, 0.4)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(251, 191, 36, 0.25)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <img
                    src="/assets/pleading_bunny.jpg"
                    alt="Cute bunny begging please talk to me"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.05rem",
                    lineHeight: "1.6",
                    maxWidth: "460px",
                  }}
                >
                  <p>I am not asking you to forgive me immediately because of a website.</p>
                  <p>And I know one cute message doesn't fix how much I disappointed you.</p>
                </div>
              </motion.div>
            )}

            {/* The Big Sincere Plea */}
            {phase >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-panel"
                style={{
                  padding: "1.75rem 1.5rem",
                  marginBottom: "1.75rem",
                  border: "1px solid rgba(251, 191, 36, 0.3)",
                  background: "rgba(251, 191, 36, 0.05)",
                }}
              >
                <p style={{ fontSize: "1.1rem", color: "#fef08a", fontWeight: 600, marginBottom: "0.5rem" }}>
                  Suu, I love you so much. ❤️
                </p>
                <p style={{ fontSize: "1.02rem", color: "rgba(255, 255, 255, 0.92)", lineHeight: "1.6", marginBottom: "1rem" }}>
                  Even if you want to scold me, yell at me, or be mad... just please, please talk to me. Don't stay silent. Your silence hurts me more than anything. 🥺
                </p>

                {/* Interactive Begging Button */}
                <div style={{ marginTop: "1rem", paddingTop: "0.85rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <motion.button
                    onClick={handlePleaClick}
                    className="btn-secondary"
                    style={{
                      fontSize: "0.9rem",
                      borderColor: "rgba(244, 114, 182, 0.35)",
                      background: "rgba(244, 114, 182, 0.08)",
                      color: "#fbcfe8",
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>Tap to see how sorry I am 🥺 (x{pleaCount})</span>
                  </motion.button>

                  {pleaCount > 0 && (
                    <motion.p
                      key={pleaCount}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        marginTop: "0.6rem",
                        fontSize: "0.95rem",
                        color: "#fde68a",
                        fontWeight: 500,
                      }}
                    >
                      {pleaMessages[(pleaCount - 1) % pleaMessages.length]}
                    </motion.p>
                  )}
                </div>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    fontStyle: "italic",
                    marginTop: "1rem",
                  }}
                >
                  You don't have to force yourself. What do you want to say right now?
                </p>
              </motion.div>
            )}

            {/* Decision Buttons */}
            {phase >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  maxWidth: "400px",
                  margin: "0 auto",
                }}
              >
                <button
                  onClick={handleAngryClick}
                  className="btn-secondary"
                  style={{
                    width: "100%",
                    padding: "0.95rem 1.25rem",
                    fontSize: "0.98rem",
                    borderColor: "rgba(239, 68, 68, 0.3)",
                    background: "rgba(239, 68, 68, 0.05)",
                  }}
                >
                  <span>I'm still angry at you! 😤</span>
                </button>

                <button
                  onClick={handleThinkClick}
                  className="btn-primary warm-glow"
                  style={{
                    width: "100%",
                    padding: "1rem 1.4rem",
                    fontSize: "1.05rem",
                  }}
                >
                  <span>Okay... I will talk to you 🥺❤️</span>
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choice Response: I'm still angry */}
      <AnimatePresence>
        {choice === "still_angry" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: "2.25rem 1.75rem",
              border: "1px solid rgba(239, 68, 68, 0.3)",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(239, 68, 68, 0.15)",
                color: "#f87171",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <ShieldAlert size={26} />
            </div>

            <h3 className="serif-heading" style={{ fontSize: "1.85rem", marginBottom: "0.75rem" }}>
              That's completely okay, Suu.
            </h3>

            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
              You don't have to forgive me right away. Take all the space and time you need.
            </p>
            <p style={{ fontSize: "1.05rem", color: "rgba(255, 255, 255, 0.88)", marginBottom: "1.25rem" }}>
              I know I hurt you, and I deserve your anger.
            </p>

            <div
              style={{
                padding: "1.1rem",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.04)",
                marginBottom: "1.5rem",
              }}
            >
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "0.25rem" }}>
                Just please remember...
              </p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "#fde68a" }}>
                Your idiot is right here, waiting for you. 🥺
              </p>
            </div>

            {/* Optional Playful Humor */}
            {angrySubPhase >= 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-tertiary)",
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}
              >
                <p>Understandable.</p>
                <p>Okay, I won't annoy you.</p>
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  style={{ color: "#fca5a5", marginTop: "2px" }}
                >
                  ...maybe just a tiny little bit 😉
                </motion.p>
              </motion.div>
            )}

            <button
              onClick={() => onGoToFinalClosure("angry")}
              className="btn-primary"
              style={{ minWidth: "220px" }}
            >
              <span>Take your time, my Suu ❤️</span>
              <ArrowRight size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choice Response: Okay... I will talk to you */}
      <AnimatePresence>
        {choice === "will_think" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-panel"
            style={{
              padding: "2.25rem 1.75rem",
              border: "1px solid rgba(251, 191, 36, 0.35)",
              background: "rgba(251, 191, 36, 0.06)",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(251, 191, 36, 0.18)",
                color: "#fbbf24",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Sparkles size={28} />
            </div>

            <h3 className="serif-heading" style={{ fontSize: "1.9rem", marginBottom: "0.75rem", color: "#fde68a" }}>
              That's all I wanted, Suu. 😭❤️
            </h3>

            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
              I am not asking for instant forgiveness.
            </p>
            <p style={{ fontSize: "1.08rem", color: "rgba(255, 255, 255, 0.92)", marginBottom: "1.5rem" }}>
              Just a chance to hear your voice and make things right.
            </p>

            <div
              style={{
                padding: "1rem 1.25rem",
                borderRadius: "var(--radius-md)",
                background: "rgba(255, 255, 255, 0.05)",
                marginBottom: "1.75rem",
              }}
            >
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                Thank you for reading my silly website...
              </p>
              <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "#fbcfe8" }}>
                Now come talk to me or scold me, I'm waiting! 🥺👉👈
              </p>
            </div>

            <button
              onClick={() => onGoToFinalClosure("think")}
              className="btn-primary warm-glow"
              style={{ minWidth: "220px" }}
            >
              <span>See final note ✨</span>
              <ArrowRight size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
