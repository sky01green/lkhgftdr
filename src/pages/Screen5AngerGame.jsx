import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Screen5AngerGame({ onNext }) {
  const [level, setLevel] = useState(3);
  const [hasInteracted, setHasInteracted] = useState(false);

  const tiers = [
    {
      emoji: "😐",
      label: "Neutral",
      reaction: "Only a little bit mad? 🥺",
      note: "Maybe your idiot still has a small chance to survive today...",
      color: "#60a5fa",
    },
    {
      emoji: "😑",
      label: "Heavy Sigh",
      reaction: "The heavy silence... 🥶",
      note: "I felt that cold sigh right through my phone screen.",
      color: "#818cf8",
    },
    {
      emoji: "😒",
      label: "Side-Eye",
      reaction: "The deadly side-eye 👡🤦‍♂️",
      note: "Honestly, if I were you, I would throw a slipper at my head.",
      color: "#a855f7",
    },
    {
      emoji: "😤",
      label: "Super Mad",
      reaction: "Steam from ears! 🙇‍♂️",
      note: "I am holding my ears and looking at the floor in pure guilt.",
      color: "#ec4899",
    },
    {
      emoji: "😡",
      label: "Furious",
      reaction: "Furious Suu mode! 🤐",
      note: "Standing quietly in the corner with hands up until forgiven.",
      color: "#f87171",
    },
    {
      emoji: "💀",
      label: "Danger Zone",
      reaction: "💀 ...I am officially in danger.",
      note: "Please plan my funeral with cute flowers and snacks. I'm so scared.",
      color: "#ef4444",
    },
  ];

  const currentTier = tiers[level];

  const handleSliderChange = (e) => {
    setLevel(parseInt(e.target.value, 10));
    setHasInteracted(true);
  };

  const handleSelectTier = (index) => {
    setLevel(index);
    setHasInteracted(true);
  };

  return (
    <div style={{ width: "100%", maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "1.75rem" }}
      >
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--stage-3-accent)" }}>
          Honest pulse check 🌡️
        </span>
        <h2 className="serif-heading" style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.2rem)", marginTop: "0.4rem" }}>
          Suu, how angry are you with me right now?
        </h2>
        <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "0.4rem" }}>
          (Slide the bar or tap an emoji to tell me the truth 🥺)
        </p>
      </motion.div>

      {/* Anger Meter Glass Card */}
      <motion.div
        className="glass-panel"
        style={{
          padding: "2rem 1.5rem",
          marginBottom: "1.75rem",
          border: `1px solid ${currentTier.color}50`,
          boxShadow: `0 15px 40px -10px rgba(0, 0, 0, 0.6), 0 0 25px ${currentTier.color}25`,
          transition: "border 0.3s ease, box-shadow 0.3s ease",
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Big Animated Emoji Display */}
        <motion.div
          key={level}
          initial={{ scale: 0.8, rotate: level >= 4 ? -8 : 0 }}
          animate={{
            scale: 1,
            rotate: level === 5 ? [0, -7, 7, -4, 4, 0] : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 15,
            rotate: { duration: 0.5 },
          }}
          style={{
            fontSize: "4.8rem",
            lineHeight: 1,
            marginBottom: "0.85rem",
            userSelect: "none",
          }}
        >
          {currentTier.emoji}
        </motion.div>

        {/* Dynamic Reaction Box */}
        <div style={{ minHeight: "85px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={level}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "0.3rem",
                }}
              >
                {currentTier.reaction}
              </p>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
                {currentTier.note}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Interactive Slider */}
        <div className="anger-slider-container">
          <input
            type="range"
            min="0"
            max="5"
            step="1"
            value={level}
            onChange={handleSliderChange}
            className="anger-slider"
            aria-label="Anger Level Slider"
          />
        </div>

        {/* Emoji Clickable Shortcuts */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "0.5rem",
            padding: "0 0.25rem",
          }}
        >
          {tiers.map((tier, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectTier(idx)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "1.6rem",
                cursor: "pointer",
                padding: "4px",
                transform: level === idx ? "scale(1.35)" : "scale(1)",
                opacity: level === idx ? 1 : 0.45,
                transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              title={tier.label}
              aria-label={tier.label}
            >
              {tier.emoji}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Sincere grounder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ marginBottom: "1.75rem" }}
      >
        <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", marginBottom: "0.3rem" }}>
          Whatever number you picked...
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.25rem",
            color: "var(--text-primary)",
            fontWeight: 500,
          }}
        >
          I still owe you the biggest apology and all my love. 🥺❤️
        </p>
      </motion.div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <button onClick={onNext} className="btn-primary" style={{ minWidth: "220px" }}>
          <span>Continue 🥺👉👈</span>
          <ArrowRight size={17} />
        </button>
      </motion.div>
    </div>
  );
}
