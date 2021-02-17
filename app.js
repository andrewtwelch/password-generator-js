// List of words in an array
var wordList = ["Mother","Galaxy","Ballot","Change","Admire","Census","Define","Favour","Policy","Affair","Safety","Layout","Timber","Rescue","Buffet","Prison","Immune","Doctor","Ground","Sermon","Afford","Dinner","Velvet","Camera","Marble","Safari","Candle","Barrel","Church","Sleeve","Scheme","Relief","Critic","Modest","Active","Planet","Wonder","Growth","Senior","Depart","Symbol","Porter","Option","System","Future","Spirit","Rhythm","Tumour","Sodium","Harass","Slogan","Friend","Formal","Belief","Prince","Expose","Estate","Detail","Series","Subway","Topple","Acquit","Meadow","Ticket","Writer","Garlic","Viable","Office","Person","Remark","Damage","Middle","Forbid","Happen","Embark","Gossip","Colony","Dollar","Exceed","Corner","Canvas","Common","Kettle","Weight","Vessel","Nature","Winner","Insure","Defend","Resign","Bucket","Thanks","Runner","Europe","Extend","Cellar","Glance","Corpse","Clique","Temple","Carpet","Dilute","Mobile","Return","Accept","Remedy","Garage","Banana","Voyage","Resort","Coffee","Harbor","Agenda","Lounge","Supply","Visual","Length","Embryo","Ignite","Punish","Labour","Prayer","Clinic","Sample","Parade","Morsel","Redeem","Export","Adjust","Needle","Worker","Stitch","Patent","Pocket","Scrape","Member","Stream","Thread","Quaint","Behead","Cherry","Flavor","Affect","Bounce","Degree","Breast","Employ","Mosaic","Mutual","Cancel","Switch","Expand","Poison","Listen","Matter","Heroin","Record","Reveal","Reform","Linger","Retain","Grudge","Chance","Praise","Tender","Powder","Drawer","Outlet","Exotic","Salmon","Secure","Throne","Pledge","Margin","Earwax","Empire","Sticky","Absorb","Debate","Filter","Normal","Tablet","Height","Extent","Gravel","Window","Social","Sunday","Bubble","Inside","Revoke","Choose","Injury","Castle","Gallon","Extort","Launch","Expect","Prefer","Heaven","Excuse","Latest","Makeup","Reduce","Frozen","Crouch","Single","Rocket","Origin","Freeze","Script","Lesson","Jungle","Crisis","Import","Appeal","Effect","Fossil","Comedy","Moment","Chorus","Design","Season","Island","Narrow","Bridge","Offend","Bottle","Absent","Bronze","Border","Excess","Method","Apathy","Honest","Museum","Legend","Thesis","Decade","Output","Squash","Scream","Speech","Guitar","Period","Thrust","Circle","Assume","Ritual","Global","Palace","Lonely","Attack","Tiptoe","Spring","Linear","Outfit","Sacred","Tactic","Aspect","Kidnap","Figure","Breeze","Finger","Cousin","Create","Suburb","Driver","Bundle","Cotton","Agency","Arrest","Remind","Mosque","Theory","Virgin","Button","Flower","Winter","Deport","Deputy","Packet","Locate","Profit","Resist","Lawyer","Burial","Letter","Cheese","Murder","Banish","Energy","Object","Remain","Denial","Closed","Cheque","Suntan","Bloody","Avenue","Offset","Desert","Ballet","Escape","Branch","Cereal","Wander","Pardon","Appear","Retire","Refund","Unrest","Delete","Bullet","Direct","Manual","Career","Result","Rotate","Copper","Efflux","Broken","Carbon","Mirror","Animal","Bottom","Summer","Stress","Ignore","Ensure","Weapon","Finish","Stroke","Throat","Stride","Preach","Course","Basket","Engine","Matrix","Asylum","Leader","Jacket","Differ","Reason","Virtue","Coffin","Useful","Depend","Horror","Notion","Ethics","Waiter","Shiver","Mature","Junior","Insert","Regard","Collar","Rabbit","Sister","Spread","Cancer","Studio","Shower","Devote","Snatch","Suffer","Killer","Annual","Random","Review","Sector","Tongue","Memory","Elapse","Couple","Tumble","Patrol","Exempt","Hunter","Accent","Banner","Defeat","Square","Forget","Master","Monkey","Bomber","Shadow","String","Infect","Mutter","Poetry","Repeat","Strong","Gutter","Jockey","Action","Advice","Stable","Strain","Invite","Peanut","Inject","Forest","Sketch","Bishop","Hiccup","Father","Player","Reject","Trance","Pierce","Muscle","Strike","Racism","Valley","Flight","Indoor","Impact","Manage","Family","Dealer","Carrot","Survey","Sphere","Number","Threat","Tissue","Update","Silver","Oppose","Blonde","Charge","Moving","Decide","Rotten","Proper","Betray","Report","Hammer","Market","Morale","Unique","Crutch","Health","Behave","Flawed","Helmet","Instal","Nuance","Spider","Sailor","Hotdog","Effort","Double","Choice","Settle","Tenant","Module","Desire","Access","Volume","Minute","Refuse","Summit","Insist","Marine","Manner","Endure","Relate","Foster","Ethnic","Answer","Native","Pigeon","Shorts","Pillow","Center","Shrink","Smooth","Seller","Vision","Misery","Bitter","Unlike","Revive","Deadly","Revise","Format","Dragon","Ribbon","Battle","Coerce","Ladder","Occupy","Bother","Pastel","Twitch","Source","Wealth","Likely","Regret","Artist","Trench","Medium","Public","Demand","Strict","Kidney","Factor","Credit","Cattle","Reader","Reward","Pepper","Column","Screen","Turkey","Danger","Treaty","Vacuum","Polish","Stroll","Please","Second","Orange","Tycoon","Belong","Borrow","School","Follow","Notice","Budget","Singer","Facade","Divide","Unfair","Polite","Cinema"]

function loadPage() {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var custom = url.searchParams.get("custom");

    if (custom != null) {
        changeToCustom();
    } else {
        changeToDefault();
    }
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
function clickSaveSettings() {
    validateNumInput();
    var words = $("#word-count").val();
    var symbol = $("#symbol").val();
    var digits = $("#trailing-digits").val();

    saveLocalStorage("words", words);
    saveLocalStorage("symbol", symbol);
    saveLocalStorage("digits", digits);
}

// Resets settings in local storage to defaults and loads those settings
function clickResetSettings() {
    var words = 3;
    var symbol = "";
    var digits = 4;

    saveLocalStorage("words", words);
    saveLocalStorage("symbol", symbol);
    saveLocalStorage("digits", digits);

    loadSettings();
}

// If settings exist in local storage, loads them
function loadSettings() {
    var words = getLocalStorage("words");
    var symbol = getLocalStorage("symbol");
    var digits = getLocalStorage("digits");

    if (words != null) {
        $("#word-count").val(words);
    }
    if (symbol != null) {
        $("#symbol").val(symbol);
    }
    if (digits != null) {
        $("#trailing-digits").val(digits);
    }
}

function generatePassword() {
    var words = 3;
    var symbol = "";
    var digits = 4;

    var password = "";

    for (var i = 0; i < words; i++) {
        password += wordList[random(0, wordList.length)];
        password += symbol;
    }

    for (var i = 0; i < digits; i++) {
        password += random(0,9);
    }

    return password;
}

function generateCustomPassword() {
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
        password += random(0,9);
    }

    return password;
}

function clickGenerate() {
    password = generatePassword();
    $("#password-field").text(password);
    $("#message-field").text("Password generated!");
    $("#message-field").css("color", "green");
}

function clickGenerateCustom() {
    password = generateCustomPassword();
    $("#password-field").text(password);
    $("#message-field").text("Password generated!");
    $("#message-field").css("color", "green");
}

function clickCopy() {
    password = $("#password-field").text();
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute("id", "dummy_id");
    document.getElementById("dummy_id").value=password;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    $("#message-field").text("Password copied!");
    $("#message-field").css("color", "green");
}

function changeToCustom() {
    $("#navDefault").removeClass("active");
    $("#navAbout").removeClass("active");
    $("#navCustom").addClass("nav-item active");
    var divElement = $("#mainContainer");
    `$("#navCustom").parent().removeClass("active");
    $("#navDefault").parent().addClass("active");`
    var divElement = $("#mainContainer");
    var row1 = $("<div>").addClass("row");
    var pwDiv = $("<div>").addClass("col-md-12");
    var pwField = $("<h3>").addClass("text-center").prop("id", "password-field").text("Click Generate!");
    var row2 = $("<div>").addClass("row");
    var paddingDivRow2 = $("<div>").addClass("col-md-2");
    var generateButtonDiv = $("<div>").addClass("col-md-2");
    var copyButtonDiv = $("<div>").addClass("col-md-2");
    var saveButtonDiv = $("<div>").addClass("col-md-2");
    var resetButtonDiv = $("<div>").addClass("col-md-2");
    var generateButton = $("<button>").text("Generate").addClass("btn btn-success btn-block").click(clickGenerateCustom);
    var copyButton = $("<button>").text("Copy").addClass("btn btn-warning btn-block").click(clickCopy);
    var saveButton = $("<button>").text("Save Settings").addClass("btn btn-primary btn-block").click(clickSaveSettings);
    var resetButton = $("<button>").text("Reset Settings").addClass("btn btn-danger btn-block").click(clickResetSettings);

    var row3 = $("<div>").addClass("row");
    var paddingDivRow3 = $("<div>").addClass("col-md-4");
    var wordsTextDiv = $("<div>").addClass("col-md-2");
    var wordsText = $("<p>").text("Words:");
    var wordsInputDiv = $("<div>").addClass("col-md-2 form-group");
    var wordsInput = $("<input>").prop("id", "word-count").prop("type", "number").prop("min", "1").prop("max", "10").prop("value", "3").addClass("form-control");

    wordsTextDiv.append(wordsText);
    wordsInputDiv.append(wordsInput);
    row3.append(paddingDivRow3);
    row3.append(wordsTextDiv);
    row3.append(wordsInputDiv);

    
    var row4 = $("<div>").addClass("row");
    var paddingDivRow4 = $("<div>").addClass("col-md-4");
    var symbolTextDiv = $("<div>").addClass("col-md-2");
    var symbolText = $("<p>").text("Symbol:");
    var symbolSelectDiv = $("<div>").addClass("col-md-2 form-group");
    var symbolSelect = $("<select>").prop("id", "symbol").addClass("form-control");
    var optionNone = $("<option>").prop("value", "").text("None");
    var optionDash = $("<option>").prop("value", "-").text("Dash (-)");
    var optionStar = $("<option>").prop("value", "*").text("Star (*)");
    var optionSlash = $("<option>").prop("value", "/").text("Slash (/)");
    var optionDot = $("<option>").prop("value", ".").text("Dot (.)");

    symbolSelect.append(optionNone);
    symbolSelect.append(optionDash);
    symbolSelect.append(optionStar);
    symbolSelect.append(optionSlash);
    symbolSelect.append(optionDot);
    symbolSelectDiv.append(symbolSelect);
    symbolTextDiv.append(symbolText);
    row4.append(paddingDivRow4);
    row4.append(symbolTextDiv);
    row4.append(symbolSelectDiv);


    var row5 = $("<div>").addClass("row");
    var paddingDivRow5 = $("<div>").addClass("col-md-4");
    var digitsTextDiv = $("<div>").addClass("col-md-2");
    var digitsText = $("<p>").text("Trailing Digits:");
    var digitsInputDiv = $("<div>").addClass("col-md-2 form-group");
    var digitsInput = $("<input>").prop("id", "trailing-digits").prop("type", "number");
    digitsInput.prop("min", "1").prop("max", "10").prop("value", "4").addClass("form-control");

    digitsTextDiv.append(digitsText);
    digitsInputDiv.append(digitsInput);
    row5.append(paddingDivRow5);
    row5.append(digitsTextDiv);
    row5.append(digitsInputDiv);



    divElement.empty();
    generateButtonDiv.append(generateButton);
    copyButtonDiv.append(copyButton);
    saveButtonDiv.append(saveButton);
    resetButtonDiv.append(resetButton);
    row2.append(paddingDivRow2);
    row2.append(generateButtonDiv);
    row2.append(copyButtonDiv);
    row2.append(saveButtonDiv);
    row2.append(resetButtonDiv);
    pwDiv.append(pwField);
    row1.append(pwDiv);
    divElement.append(row1);
    divElement.append($("<br />"));
    divElement.append(row2);
    divElement.append($("<br />"));
    divElement.append(row3);
    divElement.append(row4);
    divElement.append(row5);

    loadSettings();
}

function changeToDefault() {
    $("#navCustom").removeClass("active");
    $("#navAbout").removeClass("active");
    $("#navDefault").addClass("nav-item active");
    var divElement = $("#mainContainer");
    var row1 = $("<div>").addClass("row");
    var pwDiv = $("<div>").addClass("col-md-12");
    var pwField = $("<h3>").addClass("text-center").prop("id", "password-field").text("Click Generate!");
    var row2 = $("<div>").addClass("row");
    var paddingDiv = $("<div>").addClass("col-md-4");
    var generateButtonDiv = $("<div>").addClass("col-md-2");
    var copyButtonDiv = $("<div>").addClass("col-md-2");
    var generateButton = $("<button>").text("Generate").addClass("btn btn-success btn-block").click(clickGenerate);
    var copyButton = $("<button>").text("Copy").addClass("btn btn-warning btn-block").click(clickCopy);
    divElement.empty();
    generateButtonDiv.append(generateButton);
    copyButtonDiv.append(copyButton);
    row2.append(paddingDiv);
    row2.append(generateButtonDiv);
    row2.append(copyButtonDiv);
    pwDiv.append(pwField);
    row1.append(pwDiv);
    divElement.append(row1);
    divElement.append($("<br />"));
    divElement.append(row2);
}

function changeToAbout() {
    $("#navCustom").removeClass("active");
    $("#navDefault").removeClass("active");
    $("#navAbout").addClass("nav-item active");
    var divElement = $("#mainContainer");
    var aboutTextContents1 = "Password Generator is developed by Andrew Welch (andrewtwelch on GitHub).";
    var aboutTextContents2 = "This password generator currently only uses 6 character words, but will soon use a mixture of word lengths,and a more filtered word list to make this more appropriate for use in a professional setting.";
    var aboutTitle = $("<h3>").addClass("text-center").text("About Password Generator");
    var aboutBreak = $("<br>");
    var aboutText1 = $("<p>").addClass("text-center").text(aboutTextContents1);
    var aboutText2 = $("<p>").addClass("text-center").text(aboutTextContents2);
    divElement.empty();
    divElement.append(aboutTitle);
    divElement.append(aboutBreak);
    divElement.append(aboutText1);
    divElement.append(aboutText2);
}

