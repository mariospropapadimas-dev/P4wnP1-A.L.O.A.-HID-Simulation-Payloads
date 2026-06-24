# P4wnP1 A.L.O.A. HID Simulation Payloads

> Visual prank / demo HID scripts for controlled environments and testing.

---

## 📌 Overview

This repository contains HID automation scripts that simulate fake system behavior using keyboard input.

They are designed for:

* UI/UX prank simulations
* Visual "system compromise" effects (fake only)
* Automation testing
* Demo scenarios

⚠️ Everything is **non-destructive and purely visual**.

---

## ⚠️ Disclaimer

For **educational and authorized testing only**.

Do NOT use for:

* Unauthorized access
* Harassment or intimidation
* Malicious activity

Use only where you have explicit permission.

---

## 🎯 Platform

Designed for:

* P4wnP1 A.L.O.A.
* Raspberry Pi Zero W (HID mode)

Compatibility with other devices is not guaranteed.

---

## 📄 Payloads

### `annoying_hacked_troll.js`

Classic fake intrusion prank simulation.

#### Features

* Fake intrusion alerts in Notepad
* Event Viewer-style log simulation
* Repeated warning messages
* Camera app triggering
* Browser tab automation
* Fake system control messages

---

### `TotalGhostControl.js`

A cinematic "system takeover" simulation payload.

#### Features

**🧠 Stage 1 – Notepad Psychological Simulation**

* Fake system compromise banner
* Simulated intrusion sequence
* Threat-style messages for immersion

**💻 Stage 2 – CMD Fake Exploitation**

* Simulated network scanning
* Fake firewall bypass sequence
* Progress bar animation
* Remote shell illusion

**🔊 Stage 3 – Audio Simulation**

* Volume manipulation
* Text-to-speech prank messages

**🌐 Stage 4 – Browser Chaos**

* Fullscreen browser launch
* Multiple Rickroll tabs

**📓 Stage 5 – Notepad Finale**

* Rapid warning message spam
* High-speed typing effects

**🪟 Stage 6 – Window Flood**

* Multiple CMD windows
* Fake breach notifications

**📟 Final Step**

* Calculator launch

---

### `MatrixPrankShow.js` 🆕

A Matrix-inspired prank payload that combines fake system initialization, terminal effects, browser automation, and a humorous "you are doomed" finale.

#### Features

**🧠 Stage 1 – System Visualization**

* Fake system startup sequence in Notepad
* Reality-calibration themed messages
* Suspicious warning messages for dramatic effect

**💻 Stage 2 – Matrix Terminal Simulation**

* Green CMD interface (`color 0a`)
* Randomized pseudo-Matrix output
* Fake system status reporting
* "USER STATUS: CONFUSED" message

**🌐 Stage 3 – Browser Chaos**

* Microsoft Edge launch
* Automatic Rickroll tab opening
* Multiple browser tabs for added confusion

**📓 Stage 4 – Final Reveal**

* Fake catastrophic system report
* "Nothing is fine" ending message
* Reminder about running random USB scripts

Designed as a harmless visual prank for demonstrations and HID automation experiments.

---

## 📁 Structure

```text
P4wnP1-a.l.o.a-HID-Simulation-Payloads/
├── HID_Scripts/
│   ├── annoying_hacked_troll.js
│   ├── TotalGhostControl.js
│   └── MatrixPrankShow.js
├── README.md
└── LICENSE
```

---

## 🛠️ Notes

If a script does not run correctly, try removing:

```js
waitLEDRepeat(2);
```

You may also need to adjust `delay()` values depending on the target system speed.

---

## 📌 Design Philosophy

These payloads focus on:

* Visual immersion instead of real system impact
* Demonstration and prank scenarios
* HID automation experimentation
* Non-destructive behavior

No payload in this repository performs:

* Unauthorized access
* Data extraction
* Credential collection
* Security bypasses
* System modification

---

## 📄 License

MIT
