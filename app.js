// List of words in an array
var wordList = ["Mother", "Galaxy", "Ballot", "Change", "Admire", "Census", "Define", "Favour", "Policy", "Safety", "Layout", "Timber", "Rescue", "Buffet", "Prison", "Immune", "Doctor", "Ground", "Afford", "Dinner", "Velvet", "Camera", "Marble", "Safari", "Candle", "Barrel", "Church", "Sleeve", "Scheme", "Relief", "Critic", "Modest", "Active", "Planet", "Wonder", "Growth", "Senior", "Depart", "Symbol", "Porter", "Option", "System", "Future", "Spirit", "Rhythm", "Harass", "Slogan", "Friend", "Formal", "Belief", "Prince", "Expose", "Estate", "Detail", "Series", "Subway", "Topple", "Acquit", "Meadow", "Ticket", "Writer", "Garlic", "Viable", "Office", "Person", "Remark", "Damage", "Middle", "Forbid", "Happen", "Embark", "Gossip", "Colony", "Dollar", "Exceed", "Corner", "Canvas", "Common", "Kettle", "Weight", "Vessel", "Nature", "Winner", "Insure", "Defend", "Resign", "Bucket", "Runner", "Extend", "Cellar", "Glance", "Clique", "Temple", "Carpet", "Dilute", "Mobile", "Return", "Accept", "Remedy", "Garage", "Banana", "Voyage", "Resort", "Coffee", "Harbor", "Agenda", "Lounge", "Supply", "Visual", "Length", "Ignite", "Punish", "Labour", "Clinic", "Sample", "Parade", "Redeem", "Export", "Adjust", "Needle", "Worker", "Stitch", "Patent", "Pocket", "Scrape", "Member", "Stream", "Thread", "Cherry", "Flavor", "Affect", "Bounce", "Degree", "Employ", "Mosaic", "Mutual", "Cancel", "Switch", "Expand", "Poison", "Listen", "Matter", "Record", "Reveal", "Reform", "Linger", "Retain", "Grudge", "Chance", "Praise", "Tender", "Powder", "Drawer", "Outlet", "Exotic", "Secure", "Throne", "Pledge", "Margin", "Empire", "Sticky", "Absorb", "Debate", "Filter", "Normal", "Tablet", "Height", "Extent", "Gravel", "Window", "Social", "Sunday", "Bubble", "Inside", "Revoke", "Choose", "Injury", "Castle", "Gallon", "Extort", "Launch", "Expect", "Prefer", "Heaven", "Excuse", "Latest", "Makeup", "Reduce", "Frozen", "Crouch", "Single", "Rocket", "Origin", "Freeze", "Script", "Lesson", "Jungle", "Crisis", "Import", "Appeal", "Effect", "Fossil", "Comedy", "Moment", "Chorus", "Design", "Season", "Island", "Narrow", "Bridge", "Offend", "Bottle", "Absent", "Bronze", "Border", "Excess", "Method", "Apathy", "Honest", "Museum", "Legend", "Thesis", "Decade", "Output", "Squash", "Scream", "Speech", "Guitar", "Period", "Circle", "Assume", "Ritual", "Global", "Palace", "Lonely", "Attack", "Tiptoe", "Spring", "Linear", "Outfit", "Sacred", "Tactic", "Aspect", "Figure", "Breeze", "Finger", "Cousin", "Create", "Suburb", "Driver", "Bundle", "Cotton", "Agency", "Arrest", "Remind", "Theory", "Button", "Flower", "Winter", "Deputy", "Packet", "Locate", "Profit", "Resist", "Burial", "Letter", "Cheese", "Banish", "Energy", "Object", "Remain", "Denial", "Closed", "Avenue", "Offset", "Desert", "Ballet", "Escape", "Branch", "Cereal", "Wander", "Pardon", "Appear", "Retire", "Refund", "Unrest", "Delete", "Direct", "Manual", "Career", "Result", "Rotate", "Copper", "Broken", "Carbon", "Mirror", "Animal", "Bottom", "Summer", "Stress", "Ignore", "Ensure", "Weapon", "Finish", "Stroke", "Throat", "Stride", "Preach", "Course", "Basket", "Engine", "Matrix", "Leader", "Jacket", "Differ", "Reason", "Virtue", "Coffin", "Useful", "Depend", "Horror", "Notion", "Ethics", "Waiter", "Shiver", "Mature", "Junior", "Insert", "Regard", "Collar", "Rabbit", "Sister", "Spread", "Studio", "Shower", "Devote", "Snatch", "Suffer", "Killer", "Annual", "Random", "Review", "Sector", "Tongue", "Memory", "Elapse", "Couple", "Tumble", "Patrol", "Exempt", "Hunter", "Accent", "Banner", "Defeat", "Square", "Forget", "Master", "Monkey", "Bomber", "Shadow", "String", "Infect", "Mutter", "Poetry", "Repeat", "Strong", "Gutter", "Jockey", "Action", "Advice", "Stable", "Strain", "Invite", "Peanut", "Inject", "Forest", "Sketch", "Bishop", "Hiccup", "Father", "Player", "Reject", "Trance", "Pierce", "Muscle", "Strike", "Racism", "Valley", "Flight", "Indoor", "Impact", "Manage", "Family", "Dealer", "Carrot", "Survey", "Sphere", "Number", "Threat", "Tissue", "Update", "Silver", "Oppose", "Blonde", "Charge", "Moving", "Decide", "Rotten", "Proper", "Betray", "Report", "Hammer", "Market", "Morale", "Unique", "Crutch", "Health", "Behave", "Flawed", "Helmet", "Nuance", "Spider", "Sailor", "Hotdog", "Effort", "Double", "Choice", "Settle", "Tenant", "Module", "Desire", "Access", "Volume", "Minute", "Refuse", "Summit", "Insist", "Marine", "Manner", "Endure", "Relate", "Foster", "Answer", "Native", "Pigeon", "Shorts", "Pillow", "Center", "Shrink", "Smooth", "Seller", "Vision", "Misery", "Bitter", "Unlike", "Revive", "Deadly", "Revise", "Format", "Dragon", "Ribbon", "Battle", "Coerce", "Ladder", "Occupy", "Bother", "Pastel", "Twitch", "Source", "Wealth", "Likely", "Regret", "Artist", "Trench", "Medium", "Public", "Demand", "Strict", "Kidney", "Factor", "Credit", "Cattle", "Reader", "Reward", "Pepper", "Column", "Screen", "Turkey", "Danger", "Treaty", "Vacuum", "Polish", "Stroll", "Please", "Second", "Orange", "Tycoon", "Belong", "Borrow", "School", "Follow", "Notice", "Budget", "Singer", "Facade", "Divide", "Unfair", "Polite", "Cinema"]
var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolList = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", ",", "<", ".", ">", "?"];

function loadPage() {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var custom = url.searchParams.get("custom");

    changeToPassphrase();

}

function validateNumInput() {
    var words = $("#word-count").val();
    var digits = $("#trailing-digits").val();

    if (words > 10) {
        $("#word-count").val(10);
    } else if (words < 1) {
        $("#word-count").val(1);
    }

    if (digits > 10) {
        $("#trailing-digits").val(10);
    } else if (digits < 1) {
        $("#trailing-digits").val(1);
    }
}

// Returns a random number between min and max (inclusive)
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Saves a value to local storage
function saveLocalStorage(name, value) {
    localStorage.setItem(name, value);
}

// Retrieves a value from local storage
function getLocalStorage(name) {
    return localStorage.getItem(name);
}

// Saves settings to local storage
function clickSavePhraseSettings() {
    validateNumInput();
    var words = $("#word-count").val();
    var symbol = $("#symbol").val();
    var digits = $("#trailing-digits").val();

    saveLocalStorage("words", words);
    saveLocalStorage("symbol", symbol);
    saveLocalStorage("digits", digits);

    $("#message-field").text("Settings saved!");
    $("#message-field").css("color", "green");
}

function clickSaveWordSettings() {
    var wordlength = $("#word-length").val();
    var wordupper = $("#word-upper").prop("checked");
    var wordlower = $("#word-lower").prop("checked");
    var wordnumber = $("#word-number").prop("checked");
    var wordsymbol = $("#word-symbol").prop("checked");

    saveLocalStorage("word-length", wordlength);
    saveLocalStorage("word-upper", wordupper);
    saveLocalStorage("word-lower", wordlower);
    saveLocalStorage("word-number", wordnumber);
    saveLocalStorage("word-symbol", wordsymbol);

    $("#message-field").text("Settings saved!");
    $("#message-field").css("color", "green");
}

function clickResetWordSettings() {
    var wordlength = 16;
    var wordupper = true;
    var wordlower = true;
    var wordnumber = true;
    var wordsymbol = true;

    saveLocalStorage("word-length", wordlength);
    saveLocalStorage("word-upper", wordupper);
    saveLocalStorage("word-lower", wordlower);
    saveLocalStorage("word-number", wordnumber);
    saveLocalStorage("word-symbol", wordsymbol);

    $("#message-field").text("Settings saved!");
    $("#message-field").css("color", "green");

    loadWordSettings();
}

// Resets settings in local storage to defaults and loads those settings
function clickResetPhraseSettings() {
    var words = 3;
    var symbol = "";
    var digits = 4;

    saveLocalStorage("words", words);
    saveLocalStorage("symbol", symbol);
    saveLocalStorage("digits", digits);

    $("#message-field").text("Settings reset!");
    $("#message-field").css("color", "green");

    loadPhraseSettings();
}

// If settings exist in local storage, loads them
function loadPhraseSettings() {
    var words = getLocalStorage("words");
    var symbol = getLocalStorage("symbol");
    var digits = getLocalStorage("digits");

    if (words != null) {
        $("#word-count").val(words);
    } else {
        $("#word-count").val(3);
    }
    if (symbol != null) {
        $("#symbol").val(symbol);
    } else {
        $("#symbol").val("");
    }
    if (digits != null) {
        $("#trailing-digits").val(digits);
    } else {
        $("#trailing-digits").val(4);
    }
}

function loadWordSettings() {
    var wordlength = getLocalStorage("word-length");
    var wordupper = getLocalStorage("word-upper");
    var wordlower = getLocalStorage("word-lower");
    var wordnumber = getLocalStorage("word-number");
    var wordsymbol = getLocalStorage("word-symbol");

    if (wordlength != null) {
        $("#word-length").val(wordlength);
    } else {
        $("#word-length").val(16);
    }
    if (wordupper != null) {
        if (wordupper == "true") {
            $("#word-upper").prop("checked", true);
        } else {
            $("#word-upper").prop("checked", false);
        }
    } else {
        $("#word-upper").prop("checked", true);
    }
    if (wordlower != null) {
        if (wordlower == "true") {
            $("#word-lower").prop("checked", true);
        } else {
            $("#word-lower").prop("checked", false);
        }
    } else {
        $("#word-lower").prop("checked", true);
    }
    if (wordnumber != null) {
        if (wordnumber == "true") {
            $("#word-number").prop("checked", true);
        } else {
            $("#word-number").prop("checked", false);
        }
    } else {
        $("#word-number").prop("checked", true);
    }
    if (wordsymbol != null) {
        if (wordsymbol == "true") {
            $("#word-symbol").prop("checked", true);
        } else {
            $("#word-symbol").prop("checked", false);
        }
    } else {
        $("#word-symbol").prop("checked", true);
    }
}

function generatePassphrase() {
    validateNumInput();
    var words = $("#word-count").val();
    var symbol = $("#symbol").val();
    var digits = $("#trailing-digits").val();

    var password = "";

    for (var i = 0; i < words; i++) {
        password += wordList[random(0, wordList.length)];
        password += symbol;
    }

    for (var i = 0; i < digits; i++) {
        password += random(0, 9);
    }

    return password;
}

function generatePassword() {
    var wordlength = $("#word-length").val();
    var wordupper = $("#word-upper").prop("checked");
    var wordlower = $("#word-lower").prop("checked");
    var wordnumber = $("#word-number").prop("checked");
    var wordsymbol = $("#word-symbol").prop("checked");
    var characters = [];
    var password = "";

    if (wordlength < 1) {
        $("#word-length").val(1);
        wordlength = 1;
    }

    if (wordupper == true) {
        characters = characters.concat(upperList);
    }
    if (wordlower == true) {
        characters = characters.concat(lowerList);
    }
    if (wordnumber == true) {
        characters = characters.concat(numberList);
    }
    if (wordsymbol == true) {
        characters = characters.concat(symbolList);
    }

    for (var i = 0; i < wordlength; i++) {
        password += characters[random(0, characters.length)];
    }

    return password;
}

function clickGeneratePhrase() {
    password = generatePassphrase();
    $("#password-field").text(password);
    $("#message-field").text("Password generated!");
    $("#message-field").css("color", "green");
    $("#crack-field").text("This would take " + getCrackLength(password) + " to crack.");
}

function clickGenerateWord() {
    password = generatePassword();
    $("#password-field").text(password);
    $("#message-field").text("Password generated!");
    $("#message-field").css("color", "green");
    $("#crack-field").text("This would take " + getCrackLength(password) + " to crack.");
}

function clickCopy() {
    password = $("#password-field").text();
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value = password;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    $("#message-field").text("Password copied!");
    $("#message-field").css("color", "green");
}

function getCrackLength(password) {
    var result = zxcvbn(password);
    console.log(result);
    return result.crack_times_display.offline_slow_hashing_1e4_per_second;
}