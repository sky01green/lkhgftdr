import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAppConfig } from "./config";
import { ambientSound } from "./audio/ambientSound";

import BackgroundCanvas from "./components/BackgroundCanvas";
import HeaderProgress from "./components/HeaderProgress";
import EasterEggModal from "./components/EasterEggModal";
import NameConfigModal from "./components/NameConfigModal";

import Screen1Entry from "./pages/Screen1Entry";
import Screen2Realization from "./pages/Screen2Realization";
import Screen3NoExcuses from "./pages/Screen3NoExcuses";
import Screen4Apology from "./pages/Screen4Apology";
import Screen5AngerGame from "./pages/Screen5AngerGame";
import Screen6SecretCards from "./pages/Screen6SecretCards";
import Screen7FinalChoice from "./pages/Screen7FinalChoice";
import ScreenFinalClosure from "./pages/ScreenFinalClosure";

export default function App() {
  const [screen, setScreen] = useState(1);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [config, setConfig] = useState(getAppConfig());

  // Determine atmospheric color stage (1 to 5)
  const getStage = (currentScreen) => {
    if (currentScreen <= 1) return 1;
    if (currentScreen <= 3) return 2;
    if (currentScreen <= 5) return 3;
    if (currentScreen === 6) return 4;
    return 5;
  };

  const currentStage = getStage(screen);

  const handleToggleAudio = () => {
    const isNowPlaying = ambientSound.toggle();
    setIsPlayingAudio(isNowPlaying);
  };

  const nextScreen = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScreen((prev) => Math.min(prev + 1, 8));
  };

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScreen(1);
  };

  const handleGoToFinalClosure = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScreen(8);
  };

  // Animation variants for silky cinematic screen switching
  const pageVariants = {
    initial: { opacity: 0, y: 18, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -18, filter: "blur(4px)", transition: { duration: 0.4, ease: [0.4, 0, 1, 1] } },
  };

  return (
    <div className={`app-container stage-${currentStage}`}>
      {/* Background Interactive Particle Stardust */}
      <BackgroundCanvas stage={currentStage} />

      {/* Ambient Radial Glow Lighting */}
      <div
        className="ambient-glow-orb ambient-orb-top"
        style={{
          background:
            currentStage === 1
              ? "radial-gradient(circle, rgba(148, 163, 184, 0.25) 0%, transparent 70%)"
              : currentStage === 2
              ? "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)"
              : currentStage === 3
              ? "radial-gradient(circle, rgba(168, 85, 247, 0.35) 0%, transparent 70%)"
              : currentStage === 4
              ? "radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(245, 158, 11, 0.38) 0%, transparent 70%)",
        }}
      />
      <div
        className="ambient-glow-orb ambient-orb-bottom"
        style={{
          background:
            currentStage === 1
              ? "radial-gradient(circle, rgba(51, 65, 85, 0.25) 0%, transparent 70%)"
              : currentStage === 2
              ? "radial-gradient(circle, rgba(67, 56, 202, 0.25) 0%, transparent 70%)"
              : currentStage === 3
              ? "radial-gradient(circle, rgba(126, 34, 206, 0.3) 0%, transparent 70%)"
              : currentStage === 4
              ? "radial-gradient(circle, rgba(190, 24, 93, 0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(217, 119, 6, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Top Header with Progress, Audio & Secret Star */}
      <HeaderProgress
        currentScreen={Math.min(screen, 7)}
        totalScreens={7}
        isPlayingAudio={isPlayingAudio}
        onToggleAudio={handleToggleAudio}
        onOpenEasterEgg={() => setIsEasterEggOpen(true)}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Main Content Area */}
      <main className="content-wrapper" role="main">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            {screen === 1 && <Screen1Entry config={config} onNext={nextScreen} />}
            {screen === 2 && <Screen2Realization onNext={nextScreen} />}
            {screen === 3 && <Screen3NoExcuses onNext={nextScreen} />}
            {screen === 4 && <Screen4Apology onNext={nextScreen} />}
            {screen === 5 && <Screen5AngerGame onNext={nextScreen} />}
            {screen === 6 && <Screen6SecretCards onNext={nextScreen} />}
            {screen === 7 && (
              <Screen7FinalChoice config={config} onGoToFinalClosure={handleGoToFinalClosure} />
            )}
            {screen === 8 && <ScreenFinalClosure config={config} onRestart={handleRestart} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Hidden Easter Egg Modal */}
      <EasterEggModal isOpen={isEasterEggOpen} onClose={() => setIsEasterEggOpen(false)} />

      {/* Personalization Settings Modal */}
      <NameConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentConfig={config}
        onUpdateConfig={setConfig}
      />
    </div>
  );
}
