# P4wnP1-A.L.O.A.-HID-Simulation-Payloads
Harmless HID payloads for simulating fake “hacked” scenarios using automated input. Designed for demos, testing, and controlled environments. Focused on visual intrusion effects, UI automation, and user-response simulation.

# 🛡️ P4wnP1 A.L.O.A. HID Simulation Payloads

> Annoying “hacked” simulation payloads for demonstration and testing purposes.

---

## 📌 Overview

This repository contains HID scripts that simulate fake system intrusion scenarios using automated keyboard input.

They are designed to:

* Display fake warning messages
* Generate log-like output
* Trigger basic UI interactions

All behavior is **simulated** and does not affect system security.

---

## ⚠️ Disclaimer

For **educational and demonstration use only**.

Do NOT use for:

* Unauthorized access
* Harassment or intimidation
* Any illegal or malicious activity

Use only in controlled environments with consent.
No responsibility is assumed for misuse.

---

## 🎯 Platform

Designed for:

* P4wnP1 A.L.O.A.
* Raspberry Pi Zero W

Compatibility with other devices is not guaranteed.

---

## 📄 Payloads

### `annoying_hacked_troll.js`

A simple scripted scenario that creates the illusion of a system being compromised through visual output and UI automation.

* Fake intrusion alerts
* Log-style output
* Basic application triggering

No real access, control, or data interaction is performed.

---

## 📁 Structure

```id="u82kda"
P4wnP1-a.l.o.a-HID-Simulation-Payloads/
├── HID_Scripts/
│   └── annoying_hacked_troll.js
├── README.md
└── LICENSE
```

---

## 🛠️ Notes

If a script does not run correctly, try removing:

```id="2ms9dp"
waitLEDRepeat(2);
```

---

## 📄 License

MIT
