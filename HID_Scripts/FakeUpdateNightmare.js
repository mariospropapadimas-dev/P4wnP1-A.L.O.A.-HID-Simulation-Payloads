/*
⚠️ Educational / Demo HID Payload
- Pure visual simulation + UI automation
- No real system impact
*/

layout('us');
typingSpeed(20, 50);

// =========================
// STAGE 1: FAKE UPDATE LAUNCH (CMD)
// =========================
press("GUI r");
delay(400);
type("cmd\n");
delay(600);

type("color 1f\n");
delay(200);

typingSpeed(10, 25);

type("====================================\n");
type("   WINDOWS UPDATE\n");
type("====================================\n\n");

type("Working on updates. Do not turn off your PC.\n");
type("This will take a while. Or forever. We genuinely don't know.\n\n");
delay(600);

// =========================
// STAGE 2: THE 99% LOOP
// =========================
typingSpeed(15, 30);

var percentages = [7, 19, 32, 55, 74, 91, 97, 99];
for (var i = 0; i < percentages.length; i++) {
    type("Installing updates " + percentages[i] + "%\n");
    delay(250);
}

delay(500);

for (var s = 0; s < 6; s++) {
    type("Still working on updates... 99%\n");
    delay(300);
}

type("\necho Almost there. Probably.\n");
delay(500);

// =========================
// STAGE 3: FAKE PANIC ESCALATION
// =========================
type("echo Configuring updates. This may take several years.\n");
delay(400);
type("echo Do not unplug. Seriously. We mean it.\n");
delay(400);
type("echo Preparing to undo changes... just kidding, there is no undo.\n");
delay(600);

// =========================
// STAGE 4: BROWSER "DOWNLOAD" GAG
// =========================
press("GUI r");
delay(400);
type("msedge\n");
delay(1500);

type("https://www.youtube.com/watch?v=dQw4w9WgXcQ\n");
delay(1000);

press("CTRL t");
delay(400);
type("https://www.youtube.com/watch?v=dQw4w9WgXcQ\n");
delay(800);

// =========================
// STAGE 5: THE REVEAL (NOTEPAD)
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(800);

typingSpeed(10, 25);

type("UPDATE COMPLETE.\n\n");
type("Just kidding 😄\n");
type("Your PC is completely fine. No updates were harmed in the making of this prank.\n\n");

type("Tip: maybe don't run random USB scripts next time 💽\n");

// END
