// List of words in an array
let wordList = ["Mother", "Galaxy", "Ballot", "Change", "Admire", "Census", "Define", "Favour", "Policy", "Safety", "Layout", "Timber", "Rescue", "Buffet", "Prison", "Immune", "Doctor", "Ground", "Afford", "Dinner", "Velvet", "Camera", "Marble", "Safari", "Candle", "Barrel", "Church", "Sleeve", "Scheme", "Relief", "Critic", "Modest", "Active", "Planet", "Wonder", "Growth", "Senior", "Depart", "Symbol", "Porter", "Option", "System", "Future", "Spirit", "Rhythm", "Harass", "Slogan", "Friend", "Formal", "Belief", "Prince", "Expose", "Estate", "Detail", "Series", "Subway", "Topple", "Acquit", "Meadow", "Ticket", "Writer", "Garlic", "Viable", "Office", "Person", "Remark", "Damage", "Middle", "Forbid", "Happen", "Embark", "Gossip", "Colony", "Dollar", "Exceed", "Corner", "Canvas", "Common", "Kettle", "Weight", "Vessel", "Nature", "Winner", "Insure", "Defend", "Resign", "Bucket", "Runner", "Extend", "Cellar", "Glance", "Clique", "Temple", "Carpet", "Dilute", "Mobile", "Return", "Accept", "Remedy", "Garage", "Banana", "Voyage", "Resort", "Coffee", "Harbor", "Agenda", "Lounge", "Supply", "Visual", "Length", "Ignite", "Punish", "Labour", "Clinic", "Sample", "Parade", "Redeem", "Export", "Adjust", "Needle", "Worker", "Stitch", "Patent", "Pocket", "Scrape", "Member", "Stream", "Thread", "Cherry", "Flavor", "Affect", "Bounce", "Degree", "Employ", "Mosaic", "Mutual", "Cancel", "Switch", "Expand", "Poison", "Listen", "Matter", "Record", "Reveal", "Reform", "Linger", "Retain", "Grudge", "Chance", "Praise", "Tender", "Powder", "Drawer", "Outlet", "Exotic", "Secure", "Throne", "Pledge", "Margin", "Empire", "Sticky", "Absorb", "Debate", "Filter", "Normal", "Tablet", "Height", "Extent", "Gravel", "Window", "Social", "Sunday", "Bubble", "Inside", "Revoke", "Choose", "Injury", "Castle", "Gallon", "Extort", "Launch", "Expect", "Prefer", "Heaven", "Excuse", "Latest", "Makeup", "Reduce", "Frozen", "Crouch", "Single", "Rocket", "Origin", "Freeze", "Script", "Lesson", "Jungle", "Crisis", "Import", "Appeal", "Effect", "Fossil", "Comedy", "Moment", "Chorus", "Design", "Season", "Island", "Narrow", "Bridge", "Offend", "Bottle", "Absent", "Bronze", "Border", "Excess", "Method", "Apathy", "Honest", "Museum", "Legend", "Thesis", "Decade", "Output", "Squash", "Scream", "Speech", "Guitar", "Period", "Circle", "Assume", "Ritual", "Global", "Palace", "Lonely", "Attack", "Tiptoe", "Spring", "Linear", "Outfit", "Sacred", "Tactic", "Aspect", "Figure", "Breeze", "Finger", "Cousin", "Create", "Suburb", "Driver", "Bundle", "Cotton", "Agency", "Arrest", "Remind", "Theory", "Button", "Flower", "Winter", "Deputy", "Packet", "Locate", "Profit", "Resist", "Burial", "Letter", "Cheese", "Banish", "Energy", "Object", "Remain", "Denial", "Closed", "Avenue", "Offset", "Desert", "Ballet", "Escape", "Branch", "Cereal", "Wander", "Pardon", "Appear", "Retire", "Refund", "Unrest", "Delete", "Direct", "Manual", "Career", "Result", "Rotate", "Copper", "Broken", "Carbon", "Mirror", "Animal", "Bottom", "Summer", "Stress", "Ignore", "Ensure", "Weapon", "Finish", "Stroke", "Throat", "Stride", "Preach", "Course", "Basket", "Engine", "Matrix", "Leader", "Jacket", "Differ", "Reason", "Virtue", "Coffin", "Useful", "Depend", "Horror", "Notion", "Ethics", "Waiter", "Shiver", "Mature", "Junior", "Insert", "Regard", "Collar", "Rabbit", "Sister", "Spread", "Studio", "Shower", "Devote", "Snatch", "Suffer", "Killer", "Annual", "Random", "Review", "Sector", "Tongue", "Memory", "Elapse", "Couple", "Tumble", "Patrol", "Exempt", "Hunter", "Accent", "Banner", "Defeat", "Square", "Forget", "Master", "Monkey", "Bomber", "Shadow", "String", "Infect", "Mutter", "Poetry", "Repeat", "Strong", "Gutter", "Jockey", "Action", "Advice", "Stable", "Strain", "Invite", "Peanut", "Inject", "Forest", "Sketch", "Bishop", "Hiccup", "Father", "Player", "Reject", "Trance", "Pierce", "Muscle", "Strike", "Valley", "Flight", "Indoor", "Impact", "Manage", "Family", "Dealer", "Carrot", "Survey", "Sphere", "Number", "Threat", "Tissue", "Update", "Silver", "Oppose", "Blonde", "Charge", "Moving", "Decide", "Rotten", "Proper", "Betray", "Report", "Hammer", "Market", "Morale", "Unique", "Crutch", "Health", "Behave", "Flawed", "Helmet", "Nuance", "Spider", "Sailor", "Hotdog", "Effort", "Double", "Choice", "Settle", "Tenant", "Module", "Desire", "Access", "Volume", "Minute", "Refuse", "Summit", "Insist", "Marine", "Manner", "Endure", "Relate", "Foster", "Answer", "Native", "Pigeon", "Shorts", "Pillow", "Center", "Shrink", "Smooth", "Seller", "Vision", "Misery", "Bitter", "Unlike", "Revive", "Deadly", "Revise", "Format", "Dragon", "Ribbon", "Battle", "Coerce", "Ladder", "Occupy", "Bother", "Pastel", "Twitch", "Source", "Wealth", "Likely", "Regret", "Artist", "Trench", "Medium", "Public", "Demand", "Strict", "Kidney", "Factor", "Credit", "Cattle", "Reader", "Reward", "Pepper", "Column", "Screen", "Turkey", "Danger", "Treaty", "Vacuum", "Polish", "Stroll", "Please", "Second", "Orange", "Tycoon", "Belong", "Borrow", "School", "Follow", "Notice", "Budget", "Singer", "Facade", "Divide", "Unfair", "Polite", "Cinema"];
let upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lowerList = "abcdefghijklmnopqrstuvwxyz".split("");
let numberList = "12345678901234567890".split("");
let symbolList = "!@#$^&*?-=+".split("");
let messageField = document.getElementById("message-field");
let passwordField = document.getElementById("password-field");
let crackField = document.getElementById("crack-field");
let statusText = document.getElementById("status-text");
let passwordLengthField = document.getElementById("password-length");
let passwordSymbolsButton = document.getElementById("password-symbols");
let passphraseLengthField = document.getElementById("passphrase-length");
let passphraseSeparatorButton = document.getElementById("passphrase-separator");
let generatePasswordButton = document.getElementById("generate-password");
let generatePassphraseButton = document.getElementById("generate-passphrase");
let copyClipboardButton = document.getElementById("copy-clipboard");
let copyPwpushButton = document.getElementById("copy-pwpush");
let resetSettingsButton = document.getElementById("reset-settings");
let settingsButton = document.getElementById("settings-button");
let settingsModal = document.getElementById("settings-modal");
let settingsCloseButton = document.getElementById("settings-close");
let aboutButton = document.getElementById("about-button");
let aboutModal = document.getElementById("about-modal");
let aboutCloseButton = document.getElementById("about-close");

// Returns a random number between min and max (inclusive)
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function copyToClipboard() {
    navigator.clipboard.writeText(passwordField.innerText);
    statusText.innerText = "Copied to clipboard";
}

function initialisePage() {
    if (!localStorage.getItem("settingsExist")) {
        setDefaultSettings();
    }
    passwordLengthField.value = localStorage.getItem("passwordLength").toString();
    if (localStorage.getItem("passwordSymbols") === "false") {
        passwordSymbolsButton.classList.toggle("is-success");
        passwordSymbolsButton.classList.toggle("is-danger");
        passwordSymbolsButton.innerText = "No";
    };
    passphraseLengthField.value = localStorage.getItem("passphraseLength").toString();
    if (localStorage.getItem("passphraseSeparators") === "false") {
        passphraseSeparatorButton.classList.toggle("is-success");
        passphraseSeparatorButton.classList.toggle("is-danger");
        passphraseSeparatorButton.innerText = "No";
    };
}

function setDefaultSettings() {
    localStorage.clear()
    localStorage.setItem("settingsExist",true);
    localStorage.setItem("passwordLength",16);
    localStorage.setItem("passwordSymbols",true);
    localStorage.setItem("passphraseLength",24);
    localStorage.setItem("passphraseSeparators",true);
    passwordLengthField.value = 16;
    passwordSymbolsButton.classList.add("is-success");
    passwordSymbolsButton.classList.remove("is-danger");
    passwordSymbolsButton.innerText = "Yes";
    passphraseLengthField.value = 24;
    passphraseSeparatorButton.classList.add("is-success");
    passphraseSeparatorButton.classList.remove("is-danger");
    passphraseSeparatorButton.innerText = "Yes";
}

function setUsedSettings() {
    localStorage.setItem("settingsExist",true);
    localStorage.setItem("passwordLength", parseInt(passwordLengthField.value));
    localStorage.setItem("passwordSymbols", (passwordSymbolsButton.innerText === "Yes"));
    localStorage.setItem("passphraseLength", parseInt(passphraseLengthField.value));
    localStorage.setItem("passphraseSeparators", (passphraseSeparatorButton.innerText === "Yes"));
}

function generatePassphrase() {
    let passphrase = "";
    let separatorList = [...numberList, ...symbolList];
    let ppLength = parseInt(localStorage.getItem("passphraseLength"));
    while (passphrase.length < ppLength) {
        passphrase += wordList[random(0, wordList.length)];
        if (localStorage.getItem("passphraseSeparators") === "true" && passphrase.length < ppLength) {
            passphrase += separatorList[random(0, separatorList.length)];
        }
    }
    let crackLength = zxcvbn(passphrase).crack_times_display.offline_slow_hashing_1e4_per_second;
    crackField.innerText = `This would take ${crackLength} to crack.`;
    passwordField.innerText = passphrase;
    statusText.innerText = "";
}

function generatePassword() {
    let characters = [...upperList, ...lowerList, ...numberList];
    let password = "";
    let pwLength = parseInt(localStorage.getItem("passwordLength"));
    if (localStorage.getItem("passwordSymbols") === "true") {
        characters = [...characters, ...symbolList];
    }
    for (let i = 0; i < pwLength; i++) {
        password += characters[random(0, characters.length)];
    }
    let crackLength = zxcvbn(password).crack_times_display.offline_slow_hashing_1e4_per_second;
    crackField.innerText = `This would take ${crackLength} to crack.`;
    passwordField.innerText = password;
    statusText.innerText = "";
}

async function postPwPush(password) {
    let payload = {
        password: {
            payload: password,
            expire_after_days: 5,
            expire_after_views: 2,
            retrieval_step: true,
            deletable_by_viewer: true
        }
    };
    let response = await fetch("https://pwpush.com/p.json", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        }
    });
    return await response.json();
}

function pushPassword() {
    let password = passwordField.innerText;
    postPwPush(password).then((data) => {
        let url = "https://pwpush.com/en/p/" + data.url_token + "/r";
        navigator.clipboard.writeText(url);
        statusText.innerText = "Copied PWPush to clipboard";
    })
}

function downloadTextFile(filename, text) {
    let element = document.createElement("a");
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

function showAboutModal() {
    alert("About");
}

function showSettingsModal() {
    alert("Settings");
}

initialisePage();
passwordLengthField.addEventListener("change", setUsedSettings);
passwordSymbolsButton.addEventListener("click", () => {
    passwordSymbolsButton.classList.toggle("is-success");
    passwordSymbolsButton.classList.toggle("is-danger");
    if (passwordSymbolsButton.innerText === "Yes"){
        passwordSymbolsButton.innerText = "No";
    } else {
        passwordSymbolsButton.innerText = "Yes";
    }
    setUsedSettings();
});
passphraseLengthField.addEventListener("change", setUsedSettings);
passphraseSeparatorButton.addEventListener("click", () => {
    passphraseSeparatorButton.classList.toggle("is-success");
    passphraseSeparatorButton.classList.toggle("is-danger");
    if (passphraseSeparatorButton.innerText === "Yes"){
        passphraseSeparatorButton.innerText = "No";
    } else {
        passphraseSeparatorButton.innerText = "Yes";
    }
    setUsedSettings();
});
generatePasswordButton.addEventListener("click", generatePassword);
generatePassphraseButton.addEventListener("click", generatePassphrase);
copyClipboardButton.addEventListener("click", copyToClipboard);
copyPwpushButton.addEventListener("click", pushPassword);
resetSettingsButton.addEventListener("click", setDefaultSettings);
aboutButton.addEventListener("click", () => {aboutModal.style.display = "block"});
aboutCloseButton.addEventListener("click", () => {aboutModal.style.display = "none"});
settingsButton.addEventListener("click", () => {settingsModal.style.display = "block"});
settingsCloseButton.addEventListener("click", () => {
    settingsModal.style.display = "none";
    setUsedSettings();
});