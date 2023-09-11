// List of words in an array
var wordList = ["Mother", "Galaxy", "Ballot", "Change", "Admire", "Census", "Define", "Favour", "Policy", "Safety", "Layout", "Timber", "Rescue", "Buffet", "Prison", "Immune", "Doctor", "Ground", "Afford", "Dinner", "Velvet", "Camera", "Marble", "Safari", "Candle", "Barrel", "Church", "Sleeve", "Scheme", "Relief", "Critic", "Modest", "Active", "Planet", "Wonder", "Growth", "Senior", "Depart", "Symbol", "Porter", "Option", "System", "Future", "Spirit", "Rhythm", "Harass", "Slogan", "Friend", "Formal", "Belief", "Prince", "Expose", "Estate", "Detail", "Series", "Subway", "Topple", "Acquit", "Meadow", "Ticket", "Writer", "Garlic", "Viable", "Office", "Person", "Remark", "Damage", "Middle", "Forbid", "Happen", "Embark", "Gossip", "Colony", "Dollar", "Exceed", "Corner", "Canvas", "Common", "Kettle", "Weight", "Vessel", "Nature", "Winner", "Insure", "Defend", "Resign", "Bucket", "Runner", "Extend", "Cellar", "Glance", "Clique", "Temple", "Carpet", "Dilute", "Mobile", "Return", "Accept", "Remedy", "Garage", "Banana", "Voyage", "Resort", "Coffee", "Harbor", "Agenda", "Lounge", "Supply", "Visual", "Length", "Ignite", "Punish", "Labour", "Clinic", "Sample", "Parade", "Redeem", "Export", "Adjust", "Needle", "Worker", "Stitch", "Patent", "Pocket", "Scrape", "Member", "Stream", "Thread", "Cherry", "Flavor", "Affect", "Bounce", "Degree", "Employ", "Mosaic", "Mutual", "Cancel", "Switch", "Expand", "Poison", "Listen", "Matter", "Record", "Reveal", "Reform", "Linger", "Retain", "Grudge", "Chance", "Praise", "Tender", "Powder", "Drawer", "Outlet", "Exotic", "Secure", "Throne", "Pledge", "Margin", "Empire", "Sticky", "Absorb", "Debate", "Filter", "Normal", "Tablet", "Height", "Extent", "Gravel", "Window", "Social", "Sunday", "Bubble", "Inside", "Revoke", "Choose", "Injury", "Castle", "Gallon", "Extort", "Launch", "Expect", "Prefer", "Heaven", "Excuse", "Latest", "Makeup", "Reduce", "Frozen", "Crouch", "Single", "Rocket", "Origin", "Freeze", "Script", "Lesson", "Jungle", "Crisis", "Import", "Appeal", "Effect", "Fossil", "Comedy", "Moment", "Chorus", "Design", "Season", "Island", "Narrow", "Bridge", "Offend", "Bottle", "Absent", "Bronze", "Border", "Excess", "Method", "Apathy", "Honest", "Museum", "Legend", "Thesis", "Decade", "Output", "Squash", "Scream", "Speech", "Guitar", "Period", "Circle", "Assume", "Ritual", "Global", "Palace", "Lonely", "Attack", "Tiptoe", "Spring", "Linear", "Outfit", "Sacred", "Tactic", "Aspect", "Figure", "Breeze", "Finger", "Cousin", "Create", "Suburb", "Driver", "Bundle", "Cotton", "Agency", "Arrest", "Remind", "Theory", "Button", "Flower", "Winter", "Deputy", "Packet", "Locate", "Profit", "Resist", "Burial", "Letter", "Cheese", "Banish", "Energy", "Object", "Remain", "Denial", "Closed", "Avenue", "Offset", "Desert", "Ballet", "Escape", "Branch", "Cereal", "Wander", "Pardon", "Appear", "Retire", "Refund", "Unrest", "Delete", "Direct", "Manual", "Career", "Result", "Rotate", "Copper", "Broken", "Carbon", "Mirror", "Animal", "Bottom", "Summer", "Stress", "Ignore", "Ensure", "Weapon", "Finish", "Stroke", "Throat", "Stride", "Preach", "Course", "Basket", "Engine", "Matrix", "Leader", "Jacket", "Differ", "Reason", "Virtue", "Coffin", "Useful", "Depend", "Horror", "Notion", "Ethics", "Waiter", "Shiver", "Mature", "Junior", "Insert", "Regard", "Collar", "Rabbit", "Sister", "Spread", "Studio", "Shower", "Devote", "Snatch", "Suffer", "Killer", "Annual", "Random", "Review", "Sector", "Tongue", "Memory", "Elapse", "Couple", "Tumble", "Patrol", "Exempt", "Hunter", "Accent", "Banner", "Defeat", "Square", "Forget", "Master", "Monkey", "Bomber", "Shadow", "String", "Infect", "Mutter", "Poetry", "Repeat", "Strong", "Gutter", "Jockey", "Action", "Advice", "Stable", "Strain", "Invite", "Peanut", "Inject", "Forest", "Sketch", "Bishop", "Hiccup", "Father", "Player", "Reject", "Trance", "Pierce", "Muscle", "Strike", "Racism", "Valley", "Flight", "Indoor", "Impact", "Manage", "Family", "Dealer", "Carrot", "Survey", "Sphere", "Number", "Threat", "Tissue", "Update", "Silver", "Oppose", "Blonde", "Charge", "Moving", "Decide", "Rotten", "Proper", "Betray", "Report", "Hammer", "Market", "Morale", "Unique", "Crutch", "Health", "Behave", "Flawed", "Helmet", "Nuance", "Spider", "Sailor", "Hotdog", "Effort", "Double", "Choice", "Settle", "Tenant", "Module", "Desire", "Access", "Volume", "Minute", "Refuse", "Summit", "Insist", "Marine", "Manner", "Endure", "Relate", "Foster", "Answer", "Native", "Pigeon", "Shorts", "Pillow", "Center", "Shrink", "Smooth", "Seller", "Vision", "Misery", "Bitter", "Unlike", "Revive", "Deadly", "Revise", "Format", "Dragon", "Ribbon", "Battle", "Coerce", "Ladder", "Occupy", "Bother", "Pastel", "Twitch", "Source", "Wealth", "Likely", "Regret", "Artist", "Trench", "Medium", "Public", "Demand", "Strict", "Kidney", "Factor", "Credit", "Cattle", "Reader", "Reward", "Pepper", "Column", "Screen", "Turkey", "Danger", "Treaty", "Vacuum", "Polish", "Stroll", "Please", "Second", "Orange", "Tycoon", "Belong", "Borrow", "School", "Follow", "Notice", "Budget", "Singer", "Facade", "Divide", "Unfair", "Polite", "Cinema"];
var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerList = "abcdefghijklmnopqrstuvwxyz".split("");
var numberList = "12345678901234567890".split("");
var symbolList = "!@#$%^&*?_-=+".split("");

// Returns a random number between min and max (inclusive)
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function checkDefaultSettings() {
    if (!localStorage.getItem("settingsExist")) {
        setDefaultSettings();
    }
}

function setDefaultSettings() {
    localStorage.clear()
    localStorage.setItem("settingsExist",true);
    localStorage.setItem("passwordLength",24);
    localStorage.setItem("passwordSymbols",true);
    localStorage.setItem("passphraseLength",24);
    localStorage.setItem("passphraseSeparators",true);
}

function setUsedSettings() {
    localStorage.setItem("settingsExist",true);
    localStorage.setItem("passwordLength",$("#settings-passwordLength").val());
    localStorage.setItem("passwordSymbols",$("#settings-passwordSymbols").prop("checked"));
    localStorage.setItem("passphraseLength",$("#settings-passphraseLength").val());
    localStorage.setItem("passphraseSeparators",$("#settings-passphraseSeparators").prop("checked"));
}

function generatePassphrase() {
    var passphrase = "";
    var separatorList = numberList.concatenate(symbolList);

    while (password.length < localStorage.getItem("passphraseLength")) {
        passphrase += wordList[random(0, wordList.length)];
        if (localStorage.getItem("passphraseSeparators")) {
            passphrase += separatorList[random(0, separatorList.length)];
        }
    }

    return passphrase;
}

function generatePassword() {
    var characters = [];
    var password = "";

    characters = characters.concat(upperList);
    characters = characters.concat(lowerList);
    characters = characters.concat(numberList);
    if (localStorage.getItem("passwordSymbols")) {
        characters = characters.concat(symbolList);
    }

    for (var i = 0; i < localStorage.getItem("passwordLength"); i++) {
        password += characters[random(0, characters.length)];
    }

    return password;
}

function sendToPwPush() {
    password = $("#password-field").text();
    pushPayload = {
        "password": {
            "payload": password,
            "expire_after_days": "5",
            "expire_after_views": "2",
            "retrieval_step": "true",
            "deletable_by_viewer": "true"
        }
    }
    $.ajax({
        type: "POST",
        url: "https://pwpush.com/p.json",
        data: JSON.stringify(pushPayload),
        contentType: "application/json",
        success: function (result) {
            console.log(result);
            urlToken = result["url_token"];
            url = "https://pwpush.com/en/p/" + urlToken + "/r"
            console.log(url);
            navigator.clipboard.writeText(url);
            $("#message-field").text("Password Pusher URL copied!");
            $("#message-field").css("color", "green");
        },
        error: function () {
            $("#message-field").text("Password Pusher failed!");
            $("#message-field").css("color", "red");
        }
    });
}

function downloadTextFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}