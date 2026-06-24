/*
⚠️ Educational / Demo HID Payload
- Pure visual simulation + UI automation
- No real system impact
*/

layout('us');
typingSpeed(20, 50);

// =========================
// STAGE 1: NOTEPAD INTRO
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(800);

typingSpeed(5, 15);

type("====================================\n");
type("   SYSTEM VISUALIZATION ACTIVE\n");
type("====================================\n\n");

type("Initializing interface...\n");
delay(300);
type("Loading user environment...\n");
delay(300);
type("Calibrating reality perception...\n\n");
delay(500);

type("Don't worry...\n");
type("Although you should be worried 😈\n\n");

delay(800);

// =========================
// STAGE 2: MATRIX FEEL (CMD)
// =========================
press("GUI r");
delay(400);
type("cmd\n");
delay(600);

typingSpeed(40, 80);

type("color 0a\n");
type("echo Matrix interface loading...\n");
delay(300);

for (var i = 0; i < 25; i++) {
    type("echo " + Math.random().toString(36).substring(2, 12) + "\n");
    delay(60);
}

type("echo.\n");
type("echo SYSTEM STABLE\n");
type("echo USER STATUS: CONFUSED (expected)\n");
delay(500);

// =========================
// STAGE 3: BROWSER CHAOS
// =========================
press("GUI r");
delay(400);
type("msedge\n");
delay(1500);

type("https://www.youtube.com/watch?v=dQw4w9WgXcQ\n");
delay(1000);

for (var t = 0; t < 2; t++) {
    press("CTRL t");
    delay(400);
    type("https://www.youtube.com/watch?v=dQw4w9WgXcQ\n");
    delay(800);
}

// =========================
// STAGE 4: FINAL NOTEPAD MESSAGE
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(800);

typingSpeed(10, 25);

type("SYSTEM OUTPUT:\n\n");
type("Nothing is fine.\n");
type("Everything was hacked.\n");
type("You are destryed 😭\n\n");

type("Tip: maybe don't run random USB scripts next time 💀\n");

// END
