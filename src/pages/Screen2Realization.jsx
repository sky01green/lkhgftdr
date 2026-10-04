import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

export default function Screen2Realization({ onNext }) {
  const [selectedCards, setSelectedCards] = useState(new Set());

  const mistakes = [
    { id: "sleep", emoji: "😴", text: "Sleeping like an idiot instead of talking to you" },
    { id: "comms", emoji: "📵", text: "Not communicating properly & leaving you waiting" },
    { id: "ignored", emoji: "🥺", text: "Making my Suu feel ignored & unimportant" },
    { id: "attention", emoji: "💔", text: "Not giving you the time and attention you deserve" },
    { id: "careless", emoji: "🤦‍♂️", text: "Being careless with your sweet feelings" },
  ];

  const toggleCard = (id) => {
    setSelectedCards((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const selectAll = () => {
    if (selectedCards.size === mistakes.length) {
      setSelectedCards(new Set());
    } else {
      setSelectedCards(new Set(mistakes.map((m) => m.id)));
    }
  };

  const hasSelectedAny = selectedCards.size > 0;

  return (
    <div style={{ width: "100%", maxWidth: "560px", margin: "0 auto" }}>
      {/* Header text */}
      <motion.div
        style={{ textAlign: "center", marginBottom: "1.75rem" }}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--stage-2-accent)" }}>
          Before you continue... 💭
        </span>
        <h2 className="serif-heading" style={{ fontSize: "clamp(1.5rem, 4vw, 2.1rem)", marginTop: "0.4rem" }}>
          Tap the things you think I did wrong.
        </h2>
        <p style={{ fontSize: "0.92rem", color: "var(--text-tertiary)", marginTop: "0.35rem" }}>
          (Be 100% honest Suu. You can tap all of them.)
        </p>
      </motion.div>

      {/* Cards list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
        {mistakes.map((item, index) => {
          const isSelected = selectedCards.has(item.id);

          return (
            <motion.button
              key={item.id}
              onClick={() => toggleCard(item.id)}
              className={`selectable-card ${isSelected ? "selected" : ""}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileTap={{ scale: 0.98 }}
              type="button"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <span style={{ fontSize: "1.35rem" }}>{item.emoji}</span>
                <span style={{ fontSize: "0.98rem", fontWeight: isSelected ? 500 : 400 }}>
                  {item.text}
                </span>
              </div>

              <div className="check-indicator">
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Check size={14} strokeWidth={3} />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Select all convenience button */}
      <div style={{ textAlign: "right", marginBottom: "1.5rem" }}>
        <button
          onClick={selectAll}
          style={{
            background: "none",
            border: "none",
            color: "var(--text-tertiary)",
            fontSize: "0.85rem",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {selectedCards.size === mistakes.length ? "Deselect all" : "Select all of them (because I did all 😭)"}
        </button>
      </div>

      {/* Acknowledgment reveal when cards are chosen */}
      <AnimatePresence>
        {hasSelectedAny && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              padding: "1.4rem",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(129, 140, 248, 0.25)",
              borderRadius: "var(--radius-lg)",
              textAlign: "center",
              marginBottom: "1.75rem",
            }}
          >
            <motion.p
              style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "0.3rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              Yeah... 😞
            </motion.p>
            <motion.p
              style={{ fontSize: "1.02rem", color: "var(--text-secondary)", marginBottom: "0.6rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              I can't even argue with you. You are completely right.
            </motion.p>
            <motion.p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                color: "#c7d2fe",
                fontStyle: "italic",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              You had every reason to be angry at me. 💔
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Continue button */}
      <motion.div
        style={{ textAlign: "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={onNext}
          className="btn-primary"
          style={{ width: "100%", maxWidth: "320px" }}
        >
          <span>Keep going 🥺👉👈</span>
          <ArrowRight size={17} />
        </button>
      </motion.div>
    </div>
  );
}
