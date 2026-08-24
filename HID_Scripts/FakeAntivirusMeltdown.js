/*
⚠️ Educational / Demo HID Payload
- Pure visual simulation + UI automation
- No real system impact
*/

layout('us');
typingSpeed(20, 50);

// =========================
// STAGE 1: SCAN LAUNCH (CMD)
// =========================
press("GUI r");
delay(400);
type("cmd\n");
delay(600);

type("color 0c\n");
delay(200);

typingSpeed(10, 25);

type("====================================\n");
type("   DEFENDER PLUS ULTRA - QUICK SCAN\n");
type("====================================\n\n");

type("Initializing scan engine...\n");
delay(400);
type("Loading definitions...\n");
delay(400);
type("Scanning system files...\n\n");
delay(600);

// =========================
// STAGE 2: THE GROWING THREAT LIST
// =========================
typingSpeed(15, 30);

var threats = [
    "Trojan.CoffeeAddict",
    "Virus.Socks.Missing",
    "Worm.MondayBlues",
    "Adware.TooManyTabs",
    "Ransomware.SnacksLocked",
    "Spyware.NosyRoommate",
    "Trojan.KeyboardCrumbs",
    "Malware.WifiPasswordForgotten",
    "Virus.Autocorrect.Betrayal",
    "Trojan.ProcrastinationExe"
];

for (var i = 0; i < threats.length; i++) {
    type("[!] THREAT FOUND: " + threats[i] + "\n");
    delay(300);
}

type("\necho Scanning deeper...\n");
delay(500);

// =========================
// STAGE 3: FAKE PANIC ESCALATION
// =========================
type("echo WARNING: Threat count rising rapidly.\n");
delay(400);
type("echo WARNING: This is fine. This is probably fine.\n");
delay(400);
type("echo CRITICAL: Recommend immediate consumption of snacks.\n");
delay(600);

type("\necho Quarantining threats");
for (var q = 0; q < 4; q++) {
    delay(350);
    type(".");
}
type("\n\n");
delay(600);

// =========================
// STAGE 4: THE REVEAL
// =========================
typingSpeed(10, 25);

type("====================================\n");
type("   SCAN COMPLETE\n");
type("====================================\n\n");

type("Threats removed: " + threats.length + "\n");
type("Actual threats: 0\n\n");

type("All clear! (Just kidding, you're fine. None of that was real.)\n\n");

type("Tip: real antivirus software does not announce itself in ALL CAPS.\n");

// END
