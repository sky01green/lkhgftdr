import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, RotateCcw, Droplets, Wind, Heart } from "lucide-react";

export default function ScreenFinalClosure({ config, onRestart }) {
  const defaultPreFillText = "Hey idiot... I saw your website. Let's talk 🥺";
  
  const whatsappUrl = config.whatsappNumber
    ? `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(defaultPreFillText)}`
    : `https://api.whatsapp.com/send?text=${encodeURIComponent(defaultPreFillText)}`;

  return (
    <div style={{ width: "100%", maxWidth: "540px", margin: "0 auto", textAlign: "center" }}>
      <motion.div
        className="glass-panel"
        style={{
          padding: "2.75rem 2rem",
          border: "1px solid rgba(251, 191, 36, 0.25)",
          background: "rgba(251, 191, 36, 0.04)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(251, 191, 36, 0.12)",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Intro */}
        <motion.p
          style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Whatever happens next, Suu...
        </motion.p>

        <motion.h2
          className="serif-heading"
          style={{
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            color: "var(--text-primary)",
            marginBottom: "1.75rem",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Thank you for reading this. 🤍
        </motion.h2>

        {/* Gentle Care Reminders */}
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
            padding: "1.35rem",
            background: "rgba(255, 255, 255, 0.04)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            marginBottom: "2.25rem",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", color: "#93c5fd" }}>
            <Droplets size={18} />
            <span style={{ fontSize: "1.05rem" }}>Now go drink some cool water, Suu.</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", color: "#c4b5fd" }}>
            <Wind size={18} />
            <span style={{ fontSize: "1.05rem" }}>Take a slow, deep breath.</span>
          </div>

          <div style={{ marginTop: "0.4rem", color: "var(--text-secondary)", fontSize: "0.98rem" }}>
            And please... whenever you are ready...
          </div>

          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.4rem",
              color: "#fde68a",
              fontWeight: 600,
            }}
          >
            Just talk to me. 🥺
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--text-tertiary)", fontStyle: "italic" }}>
            (Even if you just send an angry emoji, I will be so happy to hear from you.)
          </p>
        </motion.div>

        {/* Closing Signature */}
        <motion.p
          style={{
            fontSize: "0.98rem",
            color: "var(--text-secondary)",
            fontStyle: "italic",
            marginBottom: "2.5rem",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          — from your idiot who should've communicated better & stayed awake for you ❤️
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "0.85rem", alignItems: "center" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary warm-glow"
            style={{ width: "100%", maxWidth: "340px", textDecoration: "none", fontSize: "1.02rem" }}
          >
            <MessageCircle size={19} />
            <span>Send WhatsApp message to him 💬</span>
          </a>

          <button
            onClick={onRestart}
            className="btn-secondary"
            style={{ fontSize: "0.88rem", padding: "0.65rem 1.3rem" }}
          >
            <RotateCcw size={15} />
            <span>Read from the beginning</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
