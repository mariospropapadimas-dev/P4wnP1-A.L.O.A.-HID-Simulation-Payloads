/*
⚠️ Educational / Demonstration Only

- Simulates fake “intrusion” behavior (visual effect only)
- No real system access, control, or data interaction

Use only in controlled environments with consent.
*/

// !IMPORTANT! : If the program doesnt run, remove waitLEDRepeat(2);

layout('us');
typingSpeed(20, 55);

waitLEDRepeat(2);

// =========================
// CONFIG
// =========================
var PREFERRED_BROWSER = "edge"; // "edge", "chrome", "firefox"
var TABS_TO_OPEN = 2;
var TAB_URL = "https://www.youtube.com";

// =========================
// BROWSER SELECTOR
// =========================
function openBrowser() {
  press("GUI r");
  delay(400);

  if (PREFERRED_BROWSER == "edge") {
    type("msedge\n");
  } else if (PREFERRED_BROWSER == "chrome") {
    type("chrome --incognito\n");
  } else if (PREFERRED_BROWSER == "firefox") {
    type("firefox\n");
  } else {
    // fallback
    type("msedge\n");
  }

  delay(1500);
}

// =========================
// OPEN NOTEPAD FIRST
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(600);

// Speed up typing
typingSpeed(5, 15);

type("========================================\n");
type("  !!! INTRUSION DETECTED !!!\n");
type("========================================\n\n");

type("I AM AN ATTACKER\n");
type("I AM A HACKER\n");
type("I HAVE FULL CONTROL\n");
type("I AM AN ATTACKER AND I HAVE FULL CONTROL\n\n");

type("DO NOT LOOK BEHIND\n");
type("DO NOT LOOK BEHIND\n\n");

// =========================
// EVENT VIEWER SIMULATION
// =========================
type("Microsoft-Windows Event Viewer Simulation\n");
type("=========================================\n\n");

type("Log Name: System\n");
type("Source: Kernel-General\n");
type("Level: Information\n\n");

for (var j = 0; j < 2; j++) {
  type("Event ID: 42" + j + " | Level: Warning | Source: Security-Auditing | Desc: Unusual input pattern detected. Additional Info: Behavior drift within acceptable threshold.\n\n");
  delay(150);
}

// FINAL SPAM
delay(300);
for (var f = 0; f < 3; f++) {
  type("I AM AN ATTACKER\n");
  type("I AM A HACKER\n");
  type("I HAVE FULL CONTROL\n");
  type("DO NOT LOOK BEHIND\n\n");
  delay(100);
}

// =========================
// OPEN CAMERA & TAKE PHOTO
// =========================
press("GUI r");
delay(400);
type("microsoft.windows.camera:\n");
delay(1200);

for (var i = 0; i < 5; i++) {
  press("SPACE");
  delay(200);
}

// =========================
// OPEN BROWSER + TABS
// =========================
openBrowser();

for (var t = 0; t < TABS_TO_OPEN; t++) {
  press("CTRL t");
  delay(400);
  type(TAB_URL + "\n");
  delay(800);
}