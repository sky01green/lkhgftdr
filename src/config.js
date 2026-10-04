// Personalization Configuration for Suu & her boyfriend
export const DEFAULT_CONFIG = {
  herName: "Suu",
  myName: "Your Idiot",
  nickname: "Suu baby",
  whatsappNumber: "", // Can be filled or entered in settings modal
};

const STORAGE_KEY = "apology_experience_config_suu_v2";

export function getAppConfig() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("Could not load config from localStorage", e);
  }
  return DEFAULT_CONFIG;
}

export function saveAppConfig(newConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
  } catch (e) {
    console.warn("Could not save config to localStorage", e);
  }
}
