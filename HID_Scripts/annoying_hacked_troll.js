/*
⚠️ Educational / Demonstration Only

- Simulates fake “intrusion” behavior (visual effect only)
- No real system access, control, or data interaction

Do NOT use for:
- Unauthorized access
- Harassment or intimidation
- Any illegal or malicious activity

Use only in controlled environments with consent.
*/

// !IMPORTANT! : If the program doesnt run, its because of the wait led repeat function in line 7, remove that line and it should work, but it wont work based on when a device is connected


layout('us');
typingSpeed(20, 55);

waitLEDRepeat(2);

// VARIABLE: number of Edge tabs to open, set them once at the top of the script for easy adjustment

var EDGE_TABS_TO_OPEN = 2;  


// =========================
// OPEN NOTEPAD FIRST — FAST STATEMENTS
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(600);

// Speed up typing for the statements
typingSpeed(5, 15);

type("========================================\n");
type("  !!! INTRUSION DETECTED !!!\n");
type("========================================\n\n");

// I AM AN ATTACKER / HACKER PHRASES
type("I AM AN ATTACKER\n");
type("I AM A HACKER\n");
type("I HAVE FULL CONTROL\n");
type("I AM AN ATTACKER AND I HAVE FULL CONTROL\n\n");

type("DO NOT LOOK BEHIND\n");
type("DO NOT LOOK BEHIND\n\n");

// =========================
// EVENT VIEWER HEADER
// =========================
type("Microsoft-Windows Event Viewer Simulation\n");
type("=========================================\n\n");

type("Log Name: System\n");
type("Source: Kernel-General\n");
type("Level: Information\n\n");

// =========================
// 2 COMPACT WARNING EVENTS ONLY
// =========================
for (var j = 0; j < 2; j++) {
  type("Event ID: 42" + j + " | Level: Warning | Source: Security-Auditing | Desc: Unusual input pattern detected. Additional Info: Behavior drift within acceptable threshold.\n\n");
  delay(150);
}

// FINAL FLOOD OF ATTACKER PHRASES IN NOTEPAD
delay(300);
for (var f = 0; f < 3; f++) {
  type("I AM AN ATTACKER\n");
  type("I AM A HACKER\n");
  type("I HAVE FULL CONTROL\n");
  type("DO NOT LOOK BEHIND\n\n");
  delay(100);
}

// =========================
// OPEN CAMERA & TAKE PHOTO (SPACE x5)
// =========================
press("GUI r");
delay(400);
type("microsoft.windows.camera:\n");
delay(500);
delay(700);
press("SPACE");
delay(200);
press("SPACE");
delay(200);
press("SPACE");
delay(200);
press("SPACE");
delay(200);
press("SPACE");
delay(500);

// =========================
// OPEN EDGE WITH TABS VARIABLE
// =========================
press("GUI r");
delay(400);
type("msedge\n");
delay(1500);

for (var t = 0; t < EDGE_TABS_TO_OPEN; t++) {
  press("CTRL t");
  delay(400);
  type("about:blank\n");
  delay(300);
}
