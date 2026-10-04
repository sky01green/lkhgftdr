// Procedural Web Audio API Ambient Instrumental Generator
// Plays a warm, soothing, emotional lo-fi piano / Rhodes chord progression
// Requires no external audio files, works completely offline and client-side.

class AmbientSoundEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.timer = null;
    this.step = 0;

    // Emotional, gentle chord progression (Frequencies in Hz)
    // Progression: Fmaj9 -> G6/9 -> Em7 -> Am9 -> Dm9 -> Gsus4 -> Cmaj9
    this.chords = [
      // Fmaj9: F3, C4, E4, G4, A4
      [174.61, 261.63, 329.63, 392.0, 440.0],
      // G6: G3, D4, E4, B4
      [196.0, 293.66, 329.63, 493.88],
      // Em7: E3, B3, D4, G4
      [164.81, 246.94, 293.66, 392.0],
      // Am9: A2, E3, G3, B3, C4, E4
      [110.0, 164.81, 196.0, 246.94, 261.63, 329.63],
      // Dm9: D3, A3, C4, E4, F4
      [146.83, 220.0, 261.63, 329.63, 349.23],
      // Gsus4 / G: G3, C4, D4, G4
      [196.0, 261.63, 293.66, 392.0],
      // Cmaj9: C3, G3, B3, D4, E4
      [130.81, 196.0, 246.94, 293.66, 329.63],
      // Am7 soft transition
      [110.0, 220.0, 261.63, 329.63, 392.0]
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();

      // Master gain node
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

      // Warm low-pass filter to give that soft felt piano / melancholic warmth
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = "lowpass";
      this.filter.frequency.setValueAtTime(850, this.ctx.currentTime);
      this.filter.Q.setValueAtTime(1.2, this.ctx.currentTime);

      // Delay node for subtle ambient space echo
      this.delay = this.ctx.createDelay();
      this.delay.delayTime.setValueAtTime(0.38, this.ctx.currentTime);

      this.delayFeedback = this.ctx.createGain();
      this.delayFeedback.gain.setValueAtTime(0.28, this.ctx.currentTime);

      this.delayFilter = this.ctx.createBiquadFilter();
      this.delayFilter.type = "lowpass";
      this.delayFilter.frequency.setValueAtTime(500, this.ctx.currentTime);

      // Connect delay loop
      this.delay.connect(this.delayFilter);
      this.delayFilter.connect(this.delayFeedback);
      this.delayFeedback.connect(this.delay);

      // Connect signal path
      this.filter.connect(this.masterGain);
      this.filter.connect(this.delay);
      this.delayFilter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playNote(freq, time, duration = 3.6, velocity = 0.12) {
    if (!this.ctx || !this.filter) return;

    // Dual oscillator: Warm sine + soft triangle for gentle harmonics
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, time);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 1.0015, time); // subtle warm chorus detune

    // ADSR Envelope
    const attack = 0.08;
    const decay = duration * 0.7;

    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.exponentialRampToValueAtTime(velocity, time + attack);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + attack + decay);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(this.filter);

    osc1.start(time);
    osc2.start(time);
    osc1.stop(time + attack + decay + 0.1);
    osc2.stop(time + attack + decay + 0.1);
  }

  triggerNextChord() {
    if (!this.isPlaying || !this.ctx) return;

    const chord = this.chords[this.step % this.chords.length];
    const now = this.ctx.currentTime;

    // Strum notes with micro-delays for organic human touch
    chord.forEach((freq, idx) => {
      const strumOffset = idx * 0.075 + (Math.random() * 0.02);
      const velocity = 0.07 + (Math.random() * 0.03);
      this.playNote(freq, now + strumOffset, 4.2, velocity);
    });

    // Occasional delicate high arpeggio chime note
    if (Math.random() > 0.4) {
      const topNote = chord[chord.length - 1] * 2;
      this.playNote(topNote, now + 1.2 + Math.random() * 0.5, 2.5, 0.035);
    }

    this.step++;
    const nextInterval = 3200; // ~3.2 seconds between chords
    this.timer = setTimeout(() => this.triggerNextChord(), nextInterval);
  }

  play() {
    this.init();
    if (!this.ctx) return;
    this.isPlaying = true;

    // Fade in master gain smoothly
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.42, now + 1.2);

    this.triggerNextChord();
  }

  pause() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.masterGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8);
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const ambientSound = new AmbientSoundEngine();
