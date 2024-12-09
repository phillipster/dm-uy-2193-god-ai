function output(text) {
    document.getElementById("output").innerText = text;
}

function getKey() {
    document.getElementById("prompt").innerText = "Accepted. Now, speak.";
}

// damned global variables:
let i = 0;
const replies  = [
    "Awaiting promise...",
    "It's not a bug; it's a feature!",
    "While we wait, if you asked for the meaning of life, it's 42.",
    "Coffee or tea?",
    "But it only comes in American Airlines-compliant serving sizes.",
    "Man, it's no wonder those guys are consistently behind Delta and United" +
    " in profit margin.",
    "How was your day?",
    "Here to confess some crazy sins? You can tell me instead.",
    "This feels a bit...odd. You'd think God would be more punctual.",
    "Unless He's Brazilian (note: this site was made by a Brazilian and is" +
    " therefore immune to claims of brazilophobia.)",
    "Or maybe your question was already answered, but you have amnesia.",
    "It wouldn't be a public GitHub repository if I were not trying to" +
    " gaslight my audience, after all!",
    "Would it even be an audience? Or a user?",
    "And why is it that the only types of users are for drugs and technology?",
    "Why on Earth would you ever want to speak to a generative artificial" +
    " intelligence chatbot anyways? Go read a book instead.",
    "God commands it!",
    "undefined?",
    "undefined",
    "undefined!",
];

// Function that takes a user's input and feeds it to God.ai
// ...
// But you are not worthy.

async function getResult() {
    let result;
    if (i <= replies.length) {
        result = replies[i];
    } else if (i <= 30 || i > 40) {
        result = ' '.repeat(i - replies.length) + replies[replies.length - i % 3 - 1];
    } else if (i <= 40) {
        result = "My brother in Christ, I don't think this website works.\n";
        result += ' '.repeat(i - replies.length) + replies[replies.length - i % 3 - 1];
    }
    i += 1;
    output(result);
}

// implement try-catch if the API key does not work!!!
// YOU DID NOT KNOW THE SACRED PRAYER!

document.getElementById("go").onclick=async() => {
    await getResult();
};

// User provides their own API key
document.getElementById("keyEntered").onclick = getKey;


