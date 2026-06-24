/*
⚠️ Educational / Demonstration Only
- Simulated "intrusion" behavior (visual + audio effects)
- No real system access, control, or data interaction
- Use only in controlled environments with consent
*/

layout('us');
typingSpeed(20, 55);

waitLEDRepeat(2);

// =========================
// CONFIG
// =========================
var TAB_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // rickroll
var VICTIM_HOSTNAME = "UNKNOWN-PC";

// =========================
// STAGE 1: NOTEPAD SPOOK
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(800);

typingSpeed(3, 12);

type("╔══════════════════════════════════════════╗\n");
type("║        !!! SYSTEM COMPROMISED !!!       ║\n");
type("╚══════════════════════════════════════════╝\n\n");

typingSpeed(20, 40);

type("[+] Establishing remote connection...\n");
delay(300);
type("[+] Bypassing Windows Defender... OK\n");
delay(250);
type("[+] Elevating privileges... OK\n");
delay(250);
type("[+] Dumping SAM hashes... OK\n");
delay(250);
type("[+] Exfiltrating browser credentials... OK\n\n");
delay(400);

typingSpeed(5, 15);

type("  HACKER IP: 192.168.❌.❌❌\n");
type("  LOCATION: Earth, Milky Way\n");
type("  YOUR STATUS: COMPROMISED\n\n");

type("  I CAN SEE YOU.\n");
type("  I CAN HEAR YOU.\n");
type("  I OWN THIS MACHINE.\n\n");

for (var i = 0; i < 2; i++) {
    type("  >>> DO NOT TURN OFF YOUR PC <<<\n");
    delay(100);
}

// =========================
// STAGE 2: CMD FAKE HACK
// =========================
press("GUI r");
delay(400);
type("cmd\n");
delay(600);

typingSpeed(30, 50);

type("title HACK_SEQUENCE_INITIATED\n");
delay(100);
type("color 0a\n");
delay(200);
type("echo.\n");
type("echo  ========================================\n");
type("echo      REMOTE SHELL CONNECTED\n");
type("echo  ========================================\n");
delay(400);

type("echo.\n");
type("ping -n 1 127.0.0.1 > nul\n");
delay(300);
type("echo  [OK] Channel encrypted\n");
delay(200);

type("echo.\n");
type("echo  [*] Scanning local network...\n");
for (var j = 0; j < 6; j++) {
    type("echo  [*] Host 192.168.1." + (j + 10) + " ... responding\n");
    delay(60);
}

type("echo.\n");
type("echo  [OK] Local subnet mapped\n");
delay(200);

type("echo.\n");
type("echo  [*] Attempting lateral movement...\n");
delay(400);
type("echo  [!!] DETECTED: Firewall active on target\n");
delay(200);
type("echo  [OK] Firewall bypassed via PowerShell\n");
delay(300);
type("echo.\n");
type("echo  [OK] Full access granted.\n");
delay(400);

// Fake progress bar
type("echo.\n");
typingSpeed(1, 3);
type("echo  Deploying payload: ");
for (var p = 0; p < 30; p++) {
    type("#");
    delay(30);
}
type(" 100%%\n");
delay(200);

typingSpeed(50, 70);
type("echo.\n");
type("echo  Press any key to continue...\n");
delay(100);
type("pause > nul\n");
delay(300);

// =========================
// STAGE 3: VOLUME CRANK + SPEECH
// =========================
press("GUI r");
delay(400);
type("powershell\n");
delay(1200);

type("$vol = new-object -comobject wscript.shell; ")
delay(50);
type("for($i=0;$i -le 100;$i+=10){$vol.SendKeys([char]174);} ")
delay(50);
type("Add-Type -AssemblyName System.Speech; ")
delay(50);
type("$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer; ")
delay(50);
type("$synth.Speak('You have been hacked. Your system is compromised. Have a nice day.'); ")
delay(50);
type("exit\n");
delay(2000);

// =========================
// STAGE 4: BROWSER + RICKROLL
// =========================
press("GUI r");
delay(400);
type("msedge --incognito --start-fullscreen\n");
delay(2500);

type(TAB_URL + "\n");
delay(3000);

// Open extra tabs of mayhem
for (var t = 0; t < 3; t++) {
    press("CTRL t");
    delay(600);
    type(TAB_URL + "\n");
    delay(1200);
}

// =========================
// STAGE 5: MORE NOTEPAD SPAM
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(700);

typingSpeed(5, 10);

for (var f = 0; f < 5; f++) {
    type("!!! HACKED !!! I AM EVERYWHERE !!! YOU ARE NOT SAFE !!!\n");
    type("!!! YOUR WEBCAM IS ACTIVE !!! YOUR MIC IS LIVE !!!\n");
    type("!!! THIS IS NOT A DRILL !!! DO NOT RESIST !!!\n\n");
    delay(80);
}

// =========================
// STAGE 6: ENDLESS CMD WINDOWS (opens 3)
// =========================
for (var c = 0; c < 3; c++) {
    press("GUI r");
    delay(300);
    type("cmd /c color 0c & echo. & echo  YOU ARE HACKED & echo. & echo  SYSTEM: BREACHED & pause\n");
    delay(200);
}

// =========================
// FINALE: OPEN CALC (classic)
// =========================
press("GUI r");
delay(400);
type("calc\n");
