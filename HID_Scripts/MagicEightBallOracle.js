/*
⚠️ Educational / Demo HID Payload
- Pure visual simulation + UI automation
- No real system impact
*/

layout('us');
typingSpeed(20, 50);

// =========================
// STAGE 1: THE ORACLE AWAKENS (NOTEPAD)
// =========================
press("GUI r");
delay(400);
type("notepad\n");
delay(800);

typingSpeed(10, 25);

type("========================================\n");
type("        🔮  THE AI ORACLE  🔮\n");
type("========================================\n\n");

type("Consulting the digital spirits");
for (var d = 0; d < 3; d++) {
    delay(400);
    type(".");
}
type("\n\n");
delay(500);

type("The Oracle stirs. Ask, and it shall (probably) answer.\n\n");
delay(600);

// =========================
// STAGE 2: THE QUESTION
// =========================
var questions = [
    "Why do we dream?",
    "What is the sound of one hand clapping?",
    "Do robots dream of electric sheep?",
    "What happens after the last byte is written?",
    "Is a hot dog a sandwich?",
    "If a tree falls in a forest, does it post about it online?",
    "What is the meaning of Ctrl+Alt+Delete?"
];

var question = questions[Math.floor(Math.random() * questions.length)];

type("QUESTION POSED TO THE ORACLE:\n");
type("\"" + question + "\"\n\n");
delay(800);

typingSpeed(5, 15);
type("The Oracle meditates");
for (var m = 0; m < 5; m++) {
    delay(350);
    type(".");
}
type("\n\n");
delay(700);

// =========================
// STAGE 3: THE ANSWER
// =========================
var answers = [
    "Yes, but only on Tuesdays.",
    "Ask again after your PC reboots.",
    "42.",
    "The answer lies within... your Recycle Bin.",
    "Outlook not so good. Literally, check your inbox.",
    "Signs point to snacks.",
    "The Oracle is currently buffering. Please believe again later.",
    "Reply hazy. Try turning it off and on again."
];

var answer = answers[Math.floor(Math.random() * answers.length)];

typingSpeed(10, 25);
type("THE ORACLE SPEAKS:\n\n");
type("\"" + answer + "\"\n\n");
delay(800);

// =========================
// STAGE 4: WHOLESOME SIGN-OFF
// =========================
type("========================================\n");
type("May your uptime be long and your bugs be few. 🌸\n");
type("========================================\n\n");

type("Tip: the Oracle also accepts questions typed directly into a USB port. (It does not. Please don't.) 🔌\n");

// END
