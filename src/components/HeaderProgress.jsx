import React from "react";
import { Volume2, VolumeX, Sparkles, SlidersHorizontal } from "lucide-react";

export default function HeaderProgress({
  currentScreen,
  totalScreens = 7,
  isPlayingAudio,
  onToggleAudio,
  onOpenEasterEgg,
  onOpenConfig,
}) {
  const formattedCurrent = String(currentScreen).padStart(2, "0");
  const formattedTotal = String(totalScreens).padStart(2, "0");
  const percent = Math.min(100, Math.round((currentScreen / totalScreens) * 100));

  return (
    <header className="header-bar" role="banner">
      {/* Left: Progress Indicator */}
      <div className="header-interactive flex items-center gap-3">
        <div className="progress-pill flex items-center gap-2">
          <span>{formattedCurrent}</span>
          <span style={{ opacity: 0.35 }}>/</span>
          <span>{formattedTotal}</span>
        </div>
      </div>

      {/* Center: Thin delicate progress bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "2px",
          width: `${percent}%`,
          background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #f59e0b)",
          boxShadow: "0 0 10px rgba(236, 72, 153, 0.5)",
          transition: "width 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      />

      {/* Right: Controls & Secret Star */}
      <div className="header-interactive flex items-center gap-2" style={{ display: "flex", gap: "0.5rem" }}>
        {/* Quick config settings button */}
        <button
          onClick={onOpenConfig}
          className="audio-btn"
          title="Personalize Names"
          aria-label="Personalize Names"
        >
          <SlidersHorizontal size={16} />
        </button>

        {/* Audio Toggle */}
        <button
          onClick={onToggleAudio}
          className={`audio-btn ${isPlayingAudio ? "playing" : ""}`}
          title={isPlayingAudio ? "Mute background music" : "Play soft ambient piano"}
          aria-label={isPlayingAudio ? "Mute background music" : "Play soft ambient piano"}
        >
          {isPlayingAudio ? <Volume2 size={17} /> : <VolumeX size={17} />}
        </button>

        {/* Secret Easter Egg Star */}
        <button
          onClick={onOpenEasterEgg}
          className="easter-egg-star"
          title="A quiet star..."
          aria-label="Secret message"
        >
          <Sparkles size={16} />
        </button>
      </div>
    </header>
  );
}
