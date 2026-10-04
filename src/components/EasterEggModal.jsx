import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";

export default function EasterEggModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="glass-panel"
            style={{
              maxWidth: "420px",
              width: "100%",
              padding: "2rem 1.75rem",
              textAlign: "center",
              position: "relative",
              border: "1px solid rgba(251, 191, 36, 0.4)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(251, 191, 36, 0.2)",
            }}
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                background: "transparent",
                border: "none",
                color: "var(--text-tertiary)",
                cursor: "pointer",
                padding: "6px",
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Glowing icon */}
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(251, 191, 36, 0.15)",
                border: "1px solid rgba(251, 191, 36, 0.4)",
                color: "#fbbf24",
                marginBottom: "1.25rem",
              }}
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Sparkles size={24} />
            </motion.div>

            <motion.p
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "1.2rem",
                color: "#fbbf24",
                marginBottom: "0.75rem",
                fontWeight: 600,
              }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Psst Suu... 🥺
            </motion.p>

            <motion.p
              style={{
                color: "var(--text-primary)",
                fontSize: "1.05rem",
                lineHeight: "1.6",
                marginBottom: "0.85rem",
              }}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Yes, your idiot spent so much time making this website for you.
            </motion.p>

            <motion.p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.95rem",
                fontStyle: "italic",
                marginBottom: "0.75rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              My English might be broken, but my love for you is not.
            </motion.p>

            <motion.p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.35rem",
                color: "#fde68a",
                fontWeight: 600,
                marginBottom: "1.75rem",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              You are worth every second, my Suu. ❤️
            </motion.p>

            <motion.button
              onClick={onClose}
              className="btn-primary"
              style={{
                padding: "0.7rem 1.6rem",
                fontSize: "0.95rem",
                background: "rgba(251, 191, 36, 0.15)",
                borderColor: "rgba(251, 191, 36, 0.4)",
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Close & smile for me a little? 🥺✨
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
