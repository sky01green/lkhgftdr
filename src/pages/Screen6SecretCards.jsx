import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Screen6SecretCards({ onNext }) {
  const [unlockedCards, setUnlockedCards] = useState(new Set());

  const cards = [
    {
      id: 1,
      title: "What I should have done 🥺",
      content: [
        "I should have fought my sleep and talked to you when you wanted me.",
        "I should have communicated properly, listened carefully, and replied on time.",
        "I should have never taken your sweet presence for granted.",
      ],
    },
    {
      id: 2,
      title: "What I actually feel for you ❤️",
      content: [
        "Suu, you matter to me more than anyone else in this entire world.",
        "When you don't talk to me, my whole day feels empty, sad, and colorless.",
        "I hate myself for being so foolish and making my favorite person cry.",
      ],
    },
    {
      id: 3,
      title: "What I promise to change 🤞",
      content: [
        "Not just for today because you're mad.",
        "I want to become a better boyfriend who communicates, makes time, and makes you smile every day.",
        "I will never make you feel like you are alone in this relationship.",
      ],
    },
  ];

  const handleUnlock = (id) => {
    setUnlockedCards((prev) => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  };

  const allUnlocked = unlockedCards.size === cards.length;

  return (
    <div style={{ width: "100%", maxWidth: "580px", margin: "0 auto" }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "1.75rem" }}
      >
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--stage-4-accent)" }}>
          {allUnlocked ? "All 3 Unlocked ✨" : `Tap to unlock (${unlockedCards.size} of 3)`}
        </span>
        <h2 className="serif-heading" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.2rem)", marginTop: "0.4rem" }}>
          3 things I really want Suu to know. 💌
        </h2>
      </motion.div>

      {/* 3 Locked / Unlocked Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        {cards.map((card, index) => {
          const isUnlocked = unlockedCards.has(card.id);

          return (
            <motion.div
              key={card.id}
              className={`secret-card ${isUnlocked ? "unlocked" : ""}`}
              onClick={() => handleUnlock(card.id)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileTap={!isUnlocked ? { scale: 0.98 } : {}}
              style={{
                cursor: isUnlocked ? "default" : "pointer",
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: isUnlocked ? "0.85rem" : "0",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isUnlocked ? "rgba(244, 114, 182, 0.18)" : "rgba(255, 255, 255, 0.05)",
                      color: isUnlocked ? "#f472b6" : "var(--text-tertiary)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {isUnlocked ? <Unlock size={17} /> : <Lock size={17} />}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: isUnlocked ? "#ffffff" : "var(--text-secondary)",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {!isUnlocked ? (
                  <span style={{ fontSize: "0.82rem", color: "var(--text-tertiary)" }}>
                    Tap to open 🔓
                  </span>
                ) : (
                  <span style={{ color: "#f472b6" }}>
                    <CheckCircle2 size={17} />
                  </span>
                )}
              </div>

              {/* Unlocked Content */}
              <AnimatePresence>
                {isUnlocked && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    style={{
                      paddingTop: "0.6rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {card.content.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        style={{
                          fontSize: "0.98rem",
                          lineHeight: "1.65",
                          color: "rgba(255, 255, 255, 0.92)",
                          marginBottom: pIdx === card.content.length - 1 ? 0 : "0.75rem",
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Completion message & Next button */}
      <AnimatePresence>
        {allUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
            <p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "1.1rem",
                color: "#fbcfe8",
                marginBottom: "1.25rem",
                fontWeight: 500,
              }}
            >
              You unlocked everything, Suu. 🤍
            </p>
            <button
              onClick={onNext}
              className="btn-primary warm-glow"
              style={{ minWidth: "260px" }}
            >
              <span>Please see one last thing 🥺👉👈</span>
              <ArrowRight size={17} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
