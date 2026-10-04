import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { saveAppConfig } from "../config";

export default function NameConfigModal({ isOpen, onClose, currentConfig, onUpdateConfig }) {
  const [formData, setFormData] = useState({
    herName: currentConfig.herName || "",
    myName: currentConfig.myName || "",
    nickname: currentConfig.nickname || "",
    whatsappNumber: currentConfig.whatsappNumber || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveAppConfig(formData);
    onUpdateConfig(formData);
    onClose();
  };

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
              maxWidth: "460px",
              width: "100%",
              padding: "1.75rem 1.5rem",
              position: "relative",
            }}
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-accent)", fontSize: "1.2rem", color: "var(--text-primary)" }}>
                  Personalize Experience
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                  Names are woven naturally into sincere moments.
                </p>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-tertiary)",
                  cursor: "pointer",
                  padding: "4px",
                }}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                  Her Name
                </label>
                <input
                  type="text"
                  value={formData.herName}
                  onChange={(e) => setFormData({ ...formData, herName: e.target.value })}
                  placeholder="e.g. Sarah"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  required
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.myName}
                  onChange={(e) => setFormData({ ...formData, myName: e.target.value })}
                  placeholder="e.g. Alex"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  required
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                  Nickname (Optional)
                </label>
                <input
                  type="text"
                  value={formData.nickname}
                  onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                  placeholder="e.g. my love or babe"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.35rem" }}>
                  Your WhatsApp / Phone (Optional, for direct link)
                </label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                  placeholder="e.g. 14155552671 (with country code)"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#ffffff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-secondary"
                  style={{ flex: 1 }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  <Check size={16} /> Save Changes
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
