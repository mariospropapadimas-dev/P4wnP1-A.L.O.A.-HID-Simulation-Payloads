# P4wnP1 A.L.O.A. HID Simulation Payloads

> Annoying “hacked” simulation payloads for demonstration, testing, and controlled environments.

---

## 📌 Overview

This repository contains HID scripts that simulate fake system intrusion scenarios using automated keyboard input.

They are designed to:

* Display fake warning messages
* Generate log-like output
* Trigger UI automation effects
* Simulate “system compromise” visuals for demos

⚠️ All behavior is **purely visual simulation**. No real system access or damage occurs.

---

## ⚠️ Disclaimer

For **educational and demonstration use only**.

Do NOT use for:

* Unauthorized access
* Harassment or intimidation
* Illegal or malicious activity

Use only in environments where you have explicit permission.

No responsibility is assumed for misuse.

---

## 🎯 Platform

Designed for:

* P4wnP1 A.L.O.A.
* Raspberry Pi Zero W (HID mode)

Other platforms may not behave consistently.

---

## 📄 Payloads

---

### `annoying_hacked_troll.js`

A scripted “fake intrusion” scenario using Notepad, CMD, browser automation and camera triggering.

#### Features:
* Fake intrusion alerts in Notepad
* Event Viewer-style log spam simulation
* CMD “hacking” animation
* Camera app triggering (Windows)
* Browser tab automation
* Fake system control messages

---

### `TotalGhostControl.js`

An upgraded, more aggressive **visual simulation payload** designed to feel like a full system takeover sequence.

#### Features:

**🧠 Stage 1 – Notepad Psychological Simulation**
* “SYSTEM COMPROMISED” fake banner
* Fake hacking steps (Defender bypass, credential dump, etc.)
* Threat-style messages for immersion

**💻 Stage 2 – CMD Fake Exploitation**
* Simulated network scanning
* Fake firewall bypass
* ASCII-style progress bar
* “Remote shell connected” illusion

**🔊 Stage 3 – Audio + System Interaction**
* Volume manipulation via PowerShell
* Text-to-speech “system compromised” voice simulation

**🌐 Stage 4 – Browser Hijack Simulation**
* Incognito fullscreen browser launch
* Multiple tab spam (Rickroll payload)

**📓 Stage 5 – Notepad Spam Finale**
* Repeated “YOU ARE NOT SAFE” style messages
* High-speed typing effect for panic simulation

**🪟 Stage 6 – System Window Flood**
* Multiple CMD windows spawned with fake breach messages
* Rapid system disruption illusion

**📟 Final Step**
* Calculator launch as “classic payload ending”

---

## 📁 Structure


P4wnP1-a.l.o.a-HID-Simulation-Payloads/
├── HID_Scripts/
│ ├── annoying_hacked_troll.js
│ └── TotalGhostControl.js
├── README.md
└── LICENSE


---

## 🛠️ Notes

If a script does not run correctly, try removing:

```js
waitLEDRepeat(2);

Some systems may require adjusting delays (delay(...)) for stability.

📌 Important

These scripts are designed purely for:

UI/UX demos
Prank simulations in controlled environments
HID automation testing

They do NOT:

hack systems
access files
modify security settings
📄 License

MIT
