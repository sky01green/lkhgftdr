# 🌙 For You — An Interactive Apology Experience

A personal, emotionally mature, and interactive apology microsite designed to communicate sincere accountability, understanding, and care without pressure.

---

## 🌟 Concept & Atmosphere

Rather than a generic, clichéd romantic page or a passive wall of text, this website unfolds as a **2–4 minute interactive cinematic journey**. It gives your girlfriend agency to explore at her own pace, express her honest feelings, and see that you truly understand why she was hurt.

### 🎨 Visual & Emotional Transition
The site's visual atmosphere gradually evolves across stages:
1. **Screen 1 (The Entry):** Dark, cold, serious midnight obsidian with calm silver star particles.
2. **Screen 2 & 3 (The Realization & No Excuses):** Deep twilight indigo and royal navy.
3. **Screen 4 & 5 (The Apology & Anger Meter):** Warm purple and deep amethyst.
4. **Screen 6 (The Secret Cards):** Twilight rose and magenta embers.
5. **Screen 7 & Closure:** Warm, peaceful dusk with a subtle golden glow.

---

## 🧭 The Interactive Story Journey

1. **Screen 1 — The Entry**
   - Quiet, respectful dark intro fading in line-by-line.
   - *"Hey... I know you're angry with me. And honestly... I understand why."*
   - Unhurried pacing with a subtle glowing action button.

2. **Screen 2 — The Realization**
   - Interactive mistake cards:
     - Sleeping instead of talking
     - Not communicating properly
     - Making you feel ignored
     - Not giving you enough attention
     - Being careless with your feelings
   - Allows selecting one, several, or all mistakes with animated checkmarks.
   - Sincere acknowledgment: *"Yeah... I can't really argue with that. You had every right to be upset."*

3. **Screen 3 — No Excuses**
   - Sequential animated cards with animated red strike-throughs:
     - *"I was tired."* (Crossed out)
     - *"I didn't mean to."* (Crossed out)
     - *"I'll do better."* (Crossed out)
   - Takeaway: *"None of that changes how you felt. So I'm not going to make excuses. I messed up."*

4. **Screen 4 — The Apology**
   - Frosted glass card revealing the deep personal apology line-by-line:
     - Apology for prioritizing sleep over her time and attention.
     - Apology for poor communication that made her feel unimportant.
     - Apology for making someone you love feel like she had to ask for the bare minimum.
     - Highlight: *"You deserved better from me."*

5. **Screen 5 — The Interactive Anger Meter**
   - A playful, self-deprecating pulse-check: 😐 → 😑 → 😒 → 😤 → 😡 → 💀.
   - Interactive slider and tappable emojis with gentle humorous reactions:
     - *Level 1:* "Okay... maybe I still have a chance."
     - *Level 3:* "Fair. I definitely deserve that side-eye."
     - *Level 5:* "Okay. I'm going to stop talking now."
     - *Level 6:* "💀 ...I'm genuinely scared. Calling my mom to tell her I love her."
   - Grounded message: *"Whatever number you picked... I still owe you a proper apology."*

6. **Screen 6 — The Secret Locked Cards**
   - 3 mysterious cards requiring her tap to unlock:
     - **Card 1:** *What I should have done*
     - **Card 2:** *What I actually feel*
     - **Card 3:** *What I want to change*
   - Rewarding golden ambiance when all 3 are discovered.

7. **Screen 7 — The Final Message & Choice**
   - Soft, warm golden dusk.
   - Non-pressuring confession: *"I'm not asking you to stop being angry immediately... You don't have to answer right now."*
   - Honest choice:
     - **[I'm still angry 😤]:** Respects her space completely. Doesn't disappear. Shows: *"That's okay... I'll give you the space you need. But just so you know, I'm still here."* Followed by subtle playful warmth (*"...maybe just a little."*).
     - **[Okay... I'll think about it ❤️]:** Warm particle burst: *"That's all I wanted. Not instant forgiveness. Just a chance to make things better."*

8. **Screen 8 — Final Closure**
   - Sincere closure with grounding care reminders:
     - *"Now go drink some water."*
     - *"Take a breath."*
     - *"And when you're ready... Talk to me."*
     - *"— from the idiot who should've communicated better ❤️"*
     - WhatsApp / SMS quick message action.

---

## 💎 Hidden Easter Egg

- Click the **tiny glowing star** in the top right corner of the header.
- Reveals a warm, playful note:
  > *"Psst... Yes, I spent way too much time making this. But honestly... You were worth it."*

---

## 🎵 Ambient Instrumental Audio

- Uses the **HTML5 Web Audio API** to synthesize a gentle, melancholic, and soothing Rhodes/piano chord progression on-the-fly.
- **Zero audio file dependencies**: Works 100% offline with no broken external links.
- Defaults to **OFF** (no annoying autoplay). Can be toggled on/off at any time via the top-right music button.

---

## 🛠️ Personalization

You can personalize the names in two easy ways:

### Method 1: In the Code (`src/config.js`)
Edit the default values:
```javascript
export const DEFAULT_CONFIG = {
  herName: "Sarah",       // Her actual name or nickname
  myName: "Alex",         // Your name
  nickname: "my love",    // Sweet nickname
  whatsappNumber: "",     // Optional WhatsApp number (e.g. 14155552671)
};
```

### Method 2: Live In-Browser
Click the **Sliders icon** (next to the audio button in the top right) to edit names and see changes instantly.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Open in your browser (usually http://localhost:5173)
```

To build for production:
```bash
npm run build
```

---

## 📱 Mobile Responsiveness
Designed mobile-first for sharing over WhatsApp or Messages. Tested for screens from **360px up to 1440px** with generous touch targets (≥48px) and zero horizontal overflow.
