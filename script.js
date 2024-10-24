// ________________________1________________________
// ________2________
// __3__
// 4

// ________________________LINK TO EACH PAGE________________________
let openAffirmationsPage = () => {
  document.getElementById("affirmationsButton").click();
}

let openMeditatePage = () => {
  document.getElementById("meditateButton").click();
}

// ________________________LOADING SCREEN________________________
let loadingScreen = () => {
  let loadingScreenContainer = document.getElementById("loadingScreenContainer");
  let loadingContent = document.getElementById("loadingContent");
  loadingScreenContainer.classList.remove("fadeIn");
  setTimeout(() => {
    loadingContent.classList.add("fadeOut");
  }, 1000);
  setTimeout(() => {
    loadingScreenContainer.classList.add("fadeOut");
  }, 2000);
  setTimeout(() => {
    loadingScreenContainer.classList.add("fadeOut");
    loadingScreenContainer.style.display = "none";
  }, 3000);
}

// ________________________NAV________________________
// START OF SOURCED CODE
// Source: https://www.w3schools.com/howto/howto_js_tabs.asp
// Scroll down to ‘Create Toggleable Tabs’
// Click on the ‘Try it Yourself »’ button from the example in ‘Step 3) Add JavaScript’
function openPage(evt, pageName) {
  var i, tabcontent, navtabs;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  navtabs = document.getElementsByClassName("navtabs");
  for (i = 0; i < navtabs.length; i++) {
    navtabs[i].className = navtabs[i].className.replace(" active", "");
  }
  document.getElementById(pageName).style.display = "grid";
  evt.currentTarget.className += " active";
}
// END OF SOURCED CODE

document.getElementById("defaultOpen").click();


// ________________________HOME________________________
// ________THE CLOCK________
let theClock = () => {
  let date = new Date();

  let currentGreeting = document.getElementById("currentGreeting");
  let currentDate = document.getElementById("currentDate");
  let currentTime = document.getElementById("currentTime");

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let theYear = date.getFullYear();
  let theMonth = months[date.getMonth()];
  let theWeekday = weekdays[date.getDay()];
  let theDay = date.getDate();
  let theHour = date.getHours();
  let theMinute = date.getMinutes();


  // ________GREETING________
  if (theHour >= 18 && theHour <= 24) {
    currentGreeting.innerHTML = 'evening';
  }
  if (theHour >= 12 && theHour <= 17) {
    currentGreeting.innerHTML = 'afternoon';
  }

  if (theHour >= 6 && theHour <= 11) {
    currentGreeting.innerHTML = 'morning';
  }

  if (theHour >= 0 && theHour <= 5) {
    currentGreeting.innerHTML = 'night';
  }

  // ________DATE________
  currentDate.innerHTML = theWeekday + ', ' + theMonth + ' ' + theDay + ', ' + theYear;

  // ________TIME________
  if (theMinute >= 10) {
    if (theHour >= 12) {
      currentTime.innerHTML = (theHour - 12) + ':' + theMinute + 'pm';
    } else {
      currentTime.innerHTML = theHour + ':' + theMinute + 'am';
    }
    if (theHour == 0) {
      currentTime.innerHTML = '12:' + theMinute + 'am';
    }
    if (theHour == 12) {
      currentTime.innerHTML = '12:' + theMinute + 'pm';
    }

  } else {
    if (theHour >= 12) {
      currentTime.innerHTML = (theHour - 12) + ':' + '0' + theMinute + 'pm';
    } else {
      currentTime.innerHTML = theHour + ':' + '0' + theMinute + 'am';
    }
    if (theHour == 0) {
      currentTime.innerHTML = '12:' + '0' + theMinute + 'am';
    }
    if (theHour == 12) {
      currentTime.innerHTML = '12:' + '0' + theMinute + 'pm';
    }
  }

  setTimeout(theClock, 1000);
}

// ________THE MEDITATION________
let theAffirmationAndMeditation = () => {
  let date = new Date();

  let currentGreeting = document.getElementById("currentGreeting").innerHTML;

  let homeAffirmationImage = document.getElementById("homeAffirmationImage");
  let homeAffirmationTitle = document.getElementById("homeAffirmationTitle");

  let homeMeditationAudio = document.getElementById("homeMeditationAudio");
  let homeMeditationAudiosTitle = document.getElementById("homeMeditationAudiosTitle");
  let meditationHelpYou = document.getElementById("meditationHelpYou");
  let homeMeditationTitle = document.getElementById("homeMeditationTitle");

  if (currentGreeting == 'evening') {
    homeMeditationTitle.innerHTML = 'Evening';
    meditationHelpYou.innerHTML = 'unwind for the evening';
    homeMeditationAudio.src = "audio/evening10Home.mp3";
    homeMeditationAudiosTitle.innerHTML = 'Evening';

    homeAffirmationTitle.innerHTML = 'Evening';
    homeAffirmationImage.src = "img/affirmations/affirmationEvening.jpg";
  }

  if (currentGreeting == 'afternoon') {
    homeMeditationTitle.innerHTML = 'Afternoon';
    meditationHelpYou.innerHTML = 'enjoy a mid-day reset';
    homeMeditationAudio.src = "audio/middayReset10Home.mp3";
    homeMeditationAudiosTitle.innerHTML = 'Afternoon';

    homeAffirmationTitle.innerHTML = 'Afternoon';
    homeAffirmationImage.src = "img/affirmations/affirmationAfternoon.jpg";
  }

  if (currentGreeting == 'morning') {
    homeMeditationTitle.innerHTML = 'Morning';
    meditationHelpYou.innerHTML = 'prepare for the day ahead';
    homeMeditationAudio.src = "audio/startDay10Home.mp3";
    homeMeditationAudiosTitle.innerHTML = 'Morning';

    homeAffirmationTitle.innerHTML = 'Morning';
    homeAffirmationImage.src = "img/affirmations/affirmationMorning.jpg";
  }

  if (currentGreeting == 'night') {
    homeMeditationTitle.innerHTML = 'Night';
    meditationHelpYou.innerHTML = 'get ready to sleep';
    homeMeditationAudio.src = "audio/sleep10Home.mp3";
    homeMeditationAudiosTitle.innerHTML = 'Night';

    homeAffirmationTitle.innerHTML = 'Night';
    homeAffirmationImage.src = "img/affirmations/affirmationNight.jpg";
  }

  // executes every 30 mins (so that meditation audio doesnt cut out every second)
  setTimeout(theAffirmationAndMeditation, 1800000);
}

// ________THE HOME MEDITATION AUDIO BUTTONS________
let homeMeditationPlay = () => {
  let homeMeditationAudio = document.getElementById("homeMeditationAudio");
  let homeMeditationPlayButton = document.getElementById("homeMeditationPlayButton");
  let homeMeditationPauseButton = document.getElementById("homeMeditationPauseButton");

  homeMeditationAudio.play();
  homeMeditationPlayButton.style.display = "none";
  homeMeditationPauseButton.style.display = "inline";
}

let homeMeditationPause = () => {
  let homeMeditationAudio = document.getElementById("homeMeditationAudio");
  let homeMeditationPlayButton = document.getElementById("homeMeditationPlayButton");
  let homeMeditationPauseButton = document.getElementById("homeMeditationPauseButton");

  homeMeditationAudio.pause();
  homeMeditationPlayButton.style.display = "inline";
  homeMeditationPauseButton.style.display = "none";
}

let homeMeditationStop = () => {
  let homeMeditationAudio = document.getElementById("homeMeditationAudio");
  let homeMeditationPlayButton = document.getElementById("homeMeditationPlayButton");
  let homeMeditationPauseButton = document.getElementById("homeMeditationPauseButton");

  homeMeditationAudio.load();
  homeMeditationPlayButton.style.display = "inline";
  homeMeditationPauseButton.style.display = "none";
}

// ________________________AFFIRMATIONS________________________
let allAffirmations = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let changeAffirmations = () => {
  let affirmationSlot1 = document.getElementById("affirmationSlot1");
  let affirmationSlot5 = document.getElementById("affirmationSlot5");
  let affirmationSlot9 = document.getElementById("affirmationSlot9");
  let affirmationSlot13 = document.getElementById("affirmationSlot13");

  let affirmations1 = Math.floor(Math.random() * 2);
  affirmationSlot1.innerHTML = '<img src="img/affirmations/' + allAffirmations[affirmations1] + '.jpg" class="affirmationImages fadeIn">';

  let affirmations5 = Math.floor(Math.random() * 2) + 2;
  affirmationSlot5.innerHTML = '<img src="img/affirmations/' + allAffirmations[affirmations5] + '.jpg" class="affirmationImages fadeIn">';

  let affirmations9 = Math.floor(Math.random() * 2) + 4;
  affirmationSlot9.innerHTML = '<img src="img/affirmations/' + allAffirmations[affirmations9] + '.jpg" class="affirmationImages fadeIn">';

  let affirmations13 = Math.floor(Math.random() * 2) + 6;
  affirmationSlot13.innerHTML = '<img src="img/affirmations/' + allAffirmations[affirmations13] + '.jpg" class="affirmationImages fadeIn">';
}

// create affirmations feed when app loads
document.getElementById("affirmationsRefreshButton").click();

// ________________________WRITE________________________
// ________DROPDOWN FOR TYPE OF QUESTIONS________
let changeQuestionType = () => {
  // changes copy button text to 'copy'
  let copyOrCopied = document.getElementById("copyOrCopied");
  copyOrCopied.innerHTML = 'copy';

  // make button clickable
  let copyButton = document.getElementById("copyButton");
  copyButton.classList.remove("unclickable");

  // change question types
  let questionType = document.getElementById("questionType");
  let questionTypeValue = questionType.innerHTML;
  console.log(questionTypeValue);
  let contentTextQuestion = document.getElementById("contentTextQuestion");

  if (questionTypeValue == 'all') {
    contentTextQuestion.innerHTML = 'Click the generate button to generate a journaling prompt...';
    questionType.innerHTML = 'journaling';
  }

  if (questionTypeValue == 'journaling') {
    contentTextQuestion.innerHTML = 'Click the generate button to generate a storytelling prompt...';
    questionType.innerHTML = 'storytelling';
  }

  if (questionTypeValue == 'storytelling') {
    contentTextQuestion.innerHTML = 'Click the generate button to generate a writing prompt...';
    questionType.innerHTML = 'all';
  }
}


// ________QUESTIONS________
// index position: 0      1           2          3            4           5, etc...
// __JOURNALING__
let journalPrompts = [
  "What is your earliest memory?",
  "What is something you were afraid of as a child?",
  "What are some memories you associate with winter?",
  "What are some memories you associate with spring?",
  "What are some memories you associate with summer?",
  "What are some memories you associate with autumn?",
  "Write about a school day you vividly remember. What happened that day? What emotions did you feel? Why did you choose to write about this memory?",
  "Write about your first love.",
  "Write about the last conversation you had with a stranger.",
  "Write about a song that reminds you of a certain person.",
  "Write about a song that reminds you of a certain place.",
  "Write about a song that reminds you of a certain memory.",
  "Write about a time a person did something that made your day.",
  "Write about a time where you had to make a difficult choice. What did you decide to do and why?",
  "Write about a time where you laughed until your stomach hurt.",
  "Write about a physical or emotional scar.",
  "Write about someone you haven’t seen in a long time but still think about from time to time.",
  "Write about a memorable inside joke, and the day this inside joke was created.",
  "Is there a mistake you keep making repeatedly in your life? Explain.",
  "What is something you wish you had less of in your life?",
  "What is something you wish you had more of in your life?",
  "What’s your biggest insecurity? What would life look like if you let it go?",
  "What advice would you give to yourself 5 years ago?",
  "Write about someone you miss. Why do you miss them? How do they make you feel?",
  "What is something you disagree with about the way you were raised?",
  "What is the biggest trigger for stress in your life?",
  "What do you need right now?",
  "Were you born to shine in one special way? What makes you really stand out?",
  "What is an assumption people often make about you? Why do you think people make that assumption?",
  "How old are you right now? Write about the advantages and disadvantages of being your age.",
  "What is the best thing about being single or partnered (whichever you are right now)?",
  "How would you like your life to be like when you’re older?",
  "Write a diary entry from the perspective of yourself ten years from now.",
  "Do you like to be alone or with company?",
  "What brings you joy?",
  "What is your favourite season of the year, and why?",
  "What is your favourite place, and why?",
  "What is your favourite food, and why?",
  "What is your favourite television series, and why?",
  "What is your favourite movie, and why?",
  "What music genres do you like, and why?",
  "What is a book, movie, song, or television program that has influenced you, and how?",
  "Write about a personal possession you believe best describes who you are.",
  "Who do you go to for advice?",
  "Write about something you once hated but now enjoy.",
  "Do you believe everything happens for a reason? Why or why not?",
  "What do you look for when deciding whether or not to date someone?",
  "Do you have a hobby or passion you share (or would like to share) with others?",
  "Do you keep your promises?",
  "What makes you lose track of time?",
  "Imagine that one day, all the cars in the world just disappeared. How would your life change? What would you do differently?",
  "Imagine that one day, the internet just disappeared. How would your life change? What would you do differently?",
  "If you were a superhero, what superpower would you like to have and how would you use it?",
  "Write a description of yourself as if you were a character in a book or movie.",
  "Describe a perfect day. Where would you be, and what would you do?",
  "Write down a list of ten colours and create a new name for each.",
  "If you could relive any one day or experience from your life, what would it be? Would you change anything or would you relive it in the exact same way?",
  "What is a personality trait you admire in other people?",
  "Write a letter to someone you haven’t seen in a long time."
];

// __STORYTELLING__
let storyPrompts = [
  "There was something about a music box that always made me think of home…",
  "We were supposed to meet each other on the Bay Bridge at midnight, but he never showed up…",
  "Everything stopped. People were stood like statues all around me, people in cars, men on bicycles, babies in prams, all lifeless, frozen in time…",
  "Every night, Peter went out to save the world in his own little way…",
  "For the first time in her life, Janie felt powerful…",
  "Tracking through the woods, Christian found something strange…",
  "Yesterday, I saw an old man walking down the street not wearing any shoes…",
  "When I walked into the living room this morning, my mom had a huge grin on her face…",
  "I can’t believe how fast the time went by when I was…",
  "I was taking a nap when I woke up to find myself surrounded by hundreds of people…",
  "The day began normally until I noticed an odd smell coming from the kitchen sink…",
  "By the time I reached the train station, she was gone…",
  "There was a time when my family was extremely happy…",
  "Every morning, I walked to the café for my latte and a glimpse of him…",
  "There was a secret meeting tonight, and I had to be there…",
  "Lately, Marlene felt that there was something missing from her life…",
  "Flowers came to my house every other Monday around 1 o'clock…"
];

// merges two arrays together
let allPrompts = journalPrompts.concat(storyPrompts);


// ________BUTTON FUNCTIONS________
// GENERATE
// journaling
let changeQuestion = () => {

  let questionTypeValue = document.getElementById("questionType").innerHTML;
  let questionContainer = document.getElementById("questionContainer");
  let copyButton = document.getElementById("copyButton");

  // make button clickable
  copyButton.classList.remove("unclickable");

  if (questionTypeValue == 'all') {
    // chooses a random question
    let questionContainer = document.getElementById("questionContainer");
    let n = Math.floor(Math.random() * 76);
    // ^^ multiply by total number of values (ex. 60 questions = 60)
    questionContainer.innerHTML = '<h3 class="fadeIn" id="contentTextQuestion">' + allPrompts[n] + '</h3>';
  }

  if (questionTypeValue == 'journaling') {
    // chooses a random question
    let questionContainer = document.getElementById("questionContainer");
    let n = Math.floor(Math.random() * 59);
    // ^^ multiply by total number of values (ex. 60 questions = 60)
    questionContainer.innerHTML = '<h3 class="fadeIn" id="contentTextQuestion">' + journalPrompts[n] + '</h3>';
  }

  if (questionTypeValue == 'storytelling') {
    let question = document.getElementById("question");
    let n = Math.floor(Math.random() * 17);
    // ^^ multiply by total number of values (ex. 60 questions = 60)
    questionContainer.innerHTML = '<h3 class="fadeIn" id="contentTextQuestion">' + storyPrompts[n] + '</h3>';
  }

  // changes copy button text to 'copy'
  let copyOrCopied = document.getElementById("copyOrCopied");
  copyOrCopied.innerHTML = 'copy';
}

// COPY
let copyQuestion = () => {
  // defines the text content ie. the question being displayed
  let copiedText = document.getElementById("contentTextQuestion").innerText;

  // copies text to clipboard
  navigator.clipboard.writeText(copiedText);

  // changes copy button text to 'copied'
  let copyOrCopied = document.getElementById("copyOrCopied");
  copyOrCopied.innerHTML = 'copied';

  // make button unclickable
  let copyButton = document.getElementById("copyButton");
  copyButton.classList.add("unclickable");
}

// ________________________MEDITATE________________________
// ________MEDITATION CARDS________
// __MORNING__
let meditateMorningPlay = () => {
  let meditateMorningAudio = document.getElementById("meditateMorningAudio");
  let meditateMorningPlayButton = document.getElementById("meditateMorningPlayButton");
  let meditateMorningPauseButton = document.getElementById("meditateMorningPauseButton");

  meditateMorningAudio.play();
  meditateMorningPlayButton.style.display = "none";
  meditateMorningPauseButton.style.display = "inline";
}

let meditateMorningPause = () => {
  let meditateMorningAudio = document.getElementById("meditateMorningAudio");
  let meditateMorningPlayButton = document.getElementById("meditateMorningPlayButton");
  let meditateMorningPauseButton = document.getElementById("meditateMorningPauseButton");

  meditateMorningAudio.pause();
  meditateMorningPlayButton.style.display = "inline";
  meditateMorningPauseButton.style.display = "none";
}

let meditateMorningStop = () => {
  let meditateMorningAudio = document.getElementById("meditateMorningAudio");
  let meditateMorningPlayButton = document.getElementById("meditateMorningPlayButton");
  let meditateMorningPauseButton = document.getElementById("meditateMorningPauseButton");

  meditateMorningAudio.load();
  meditateMorningPlayButton.style.display = "inline";
  meditateMorningPauseButton.style.display = "none";
}

// __NIGHT__
let meditateNightPlay = () => {
  let meditateNightAudio = document.getElementById("meditateNightAudio");
  let meditateNightPlayButton = document.getElementById("meditateNightPlayButton");
  let meditateNightPauseButton = document.getElementById("meditateNightPauseButton");

  meditateNightAudio.play();
  meditateNightPlayButton.style.display = "none";
  meditateNightPauseButton.style.display = "inline";
}

let meditateNightPause = () => {
  let meditateNightAudio = document.getElementById("meditateNightAudio");
  let meditateNightPlayButton = document.getElementById("meditateNightPlayButton");
  let meditateNightPauseButton = document.getElementById("meditateNightPauseButton");

  meditateNightAudio.pause();
  meditateNightPlayButton.style.display = "inline";
  meditateNightPauseButton.style.display = "none";
}

let meditateNightStop = () => {
  let meditateNightAudio = document.getElementById("meditateNightAudio");
  let meditateNightPlayButton = document.getElementById("meditateNightPlayButton");
  let meditateNightPauseButton = document.getElementById("meditateNightPauseButton");

  meditateNightAudio.load();
  meditateNightPlayButton.style.display = "inline";
  meditateNightPauseButton.style.display = "none";
}

// __HAPPINESS__
let meditateHappinessPlay = () => {
  let meditateHappinessAudio = document.getElementById("meditateHappinessAudio");
  let meditateHappinessPlayButton = document.getElementById("meditateHappinessPlayButton");
  let meditateHappinessPauseButton = document.getElementById("meditateHappinessPauseButton");

  meditateHappinessAudio.play();
  meditateHappinessPlayButton.style.display = "none";
  meditateHappinessPauseButton.style.display = "inline";
}

let meditateHappinessPause = () => {
  let meditateHappinessAudio = document.getElementById("meditateHappinessAudio");
  let meditateHappinessPlayButton = document.getElementById("meditateHappinessPlayButton");
  let meditateHappinessPauseButton = document.getElementById("meditateHappinessPauseButton");

  meditateHappinessAudio.pause();
  meditateHappinessPlayButton.style.display = "inline";
  meditateHappinessPauseButton.style.display = "none";
}

let meditateHappinessStop = () => {
  let meditateHappinessAudio = document.getElementById("meditateHappinessAudio");
  let meditateHappinessPlayButton = document.getElementById("meditateHappinessPlayButton");
  let meditateHappinessPauseButton = document.getElementById("meditateHappinessPauseButton");

  meditateHappinessAudio.load();
  meditateHappinessPlayButton.style.display = "inline";
  meditateHappinessPauseButton.style.display = "none";
}

// __STRESS__
let meditateStressPlay = () => {
  let meditateStressAudio = document.getElementById("meditateStressAudio");
  let meditateStressPlayButton = document.getElementById("meditateStressPlayButton");
  let meditateStressPauseButton = document.getElementById("meditateStressPauseButton");

  meditateStressAudio.play();
  meditateStressPlayButton.style.display = "none";
  meditateStressPauseButton.style.display = "inline";
}

let meditateStressPause = () => {
  let meditateStressAudio = document.getElementById("meditateStressAudio");
  let meditateStressPlayButton = document.getElementById("meditateStressPlayButton");
  let meditateStressPauseButton = document.getElementById("meditateStressPauseButton");

  meditateStressAudio.pause();
  meditateStressPlayButton.style.display = "inline";
  meditateStressPauseButton.style.display = "none";
}

let meditateStressStop = () => {
  let meditateStressAudio = document.getElementById("meditateStressAudio");
  let meditateStressPlayButton = document.getElementById("meditateStressPlayButton");
  let meditateStressPauseButton = document.getElementById("meditateStressPauseButton");

  meditateStressAudio.load();
  meditateStressPlayButton.style.display = "inline";
  meditateStressPauseButton.style.display = "none";
}


// ________PLAY BUTTONS________
function meditationPlay(meditationAudioName, meditationPlayButton, meditationPauseButton) {
  var i, meditationAudiosAll, meditationPlayButtons;
  meditationAudiosAll = document.getElementsByClassName("meditationAudiosAll");
  for (i = 0; i < meditationAudiosAll.length; i++) {
    // meditationAudiosAll[i].load();
  }
  meditationPlayButtons = document.getElementsByClassName("meditationPlayButtons");
  for (i = 0; i < meditationPlayButtons.length; i++) {
    document.getElementById(meditationAudioName).play();
    document.getElementById(meditationPlayButton).style.display = "none";
    document.getElementById(meditationPauseButton).style.display = "inline";
  }
}

// ________PAUSE BUTTONS________
function meditationPause(meditationAudioName, meditationPlayButton, meditationPauseButton) {
  var i, meditationAudiosAll, meditationPauseButtons;
  meditationAudiosAll = document.getElementsByClassName("meditationAudiosAll");
  for (i = 0; i < meditationAudiosAll.length; i++) {
    // meditationAudiosAll[i].load();
  }
  meditationPauseButtons = document.getElementsByClassName("meditationPauseButtons");
  for (i = 0; i < meditationPauseButtons.length; i++) {
    document.getElementById(meditationAudioName).pause();
    document.getElementById(meditationPlayButton).style.display = "inline";
    document.getElementById(meditationPauseButton).style.display = "none";
  }
}

// ________STOP BUTTONS________
function meditationStop(meditationAudioName, meditationPlayButton, meditationPauseButton) {
  var i, meditationAudiosAll, meditationPlayButtons;
  meditationAudiosAll = document.getElementsByClassName("meditationAudiosAll");
  for (i = 0; i < meditationAudiosAll.length; i++) {
    meditationAudiosAll[i].load();
  }
  meditationPlayButtons = document.getElementsByClassName("meditationPlayButtons");
  for (i = 0; i < meditationPlayButtons.length; i++) {
    document.getElementById(meditationAudioName).load();
    document.getElementById(meditationPlayButton).style.display = "inline";
    document.getElementById(meditationPauseButton).style.display = "none";
  }
}

// ________________________FOCUS________________________
// ________START BUTTON________
let startTimer = () => {
  let focusHour = document.getElementById("focusHourTextbox").value;
  let focusMinuteTens = document.getElementById("focusMinuteTensTextbox").value;
  let focusMinuteOnes = document.getElementById("focusMinuteOnesTextbox").value;
  // check to make sure the input time is greater than 0
  if (focusHour == 0 && focusMinuteTens == 0 && focusMinuteOnes == 0) {
    // makes error text visible
    let focusError = document.getElementById("focusError");
    focusError.innerHTML = 'Please enter a value<br>greater than 0...';
    focusError.style.display = "block";
    setTimeout(() => {
      focusError.innerHTML = '';
      focusError.style.display = "none";
    }, 2000);
  } else if (focusHour > 9 || focusMinuteTens > 9 || focusMinuteOnes > 9) {
    document.getElementById("focusError");
    focusError.innerHTML = 'Please only enter one<br>digit per input box...';
    focusError.style.display = "block";
    setTimeout(() => {
      focusError.innerHTML = '';
      focusError.style.display = "none";
    }, 2000);

  } else {
    // make input area disappear
    let timerInput = document.getElementById("timerInput");
    timerInput.style.display = "none";

    // get date of when the start button was pressed
    let dateLoaded = new Date().getTime();
    let dateLoadedMilliseconds = document.getElementById("dateLoadedMilliseconds");
    dateLoadedMilliseconds.innerHTML = dateLoaded;

    // makes error text invisible
    let focusError = document.getElementById("focusError");
    focusError.style.display = "none";

    // makes countdown text visible
    let focusCountdown = document.getElementById("focusCountdown");
    focusCountdown.innerHTML = '[timer]';
    focusCountdown.style.display = "inline";

    // starts timer function
    startTimer2();
  }
}

let startTimer2 = () => {
  let dateLoadedMilliseconds = document.getElementById("dateLoadedMilliseconds").innerHTML;

  // converts input time to milliseconds
  let focusHour = document.getElementById("focusHourTextbox").value;
  let focusMinuteTens = document.getElementById("focusMinuteTensTextbox").value;
  let focusMinuteOnes = document.getElementById("focusMinuteOnesTextbox").value;
  let datePlusHourMilliseconds = focusHour * 3600000;
  let datePlusMinuteTensMilliseconds = focusMinuteTens * 600000;
  let datePlusMinuteOnesMilliseconds = focusMinuteOnes * 60000;
  let datePlus = datePlusHourMilliseconds + datePlusMinuteTensMilliseconds + datePlusMinuteOnesMilliseconds;

  // get current date that updates every second
  let dateNow = new Date();
  // converts new date to milliseconds
  let dateNowMilliseconds = dateNow.getTime();

  // creates a date that is the date the start button was pressed plus the input time
  let datePlusMilliseconds = +dateLoadedMilliseconds + +datePlus;

  // creates an equation which is the current date (plus the input time) minus the current date
  let countdownTime = datePlusMilliseconds - dateNowMilliseconds;

  let focusCountdown = document.getElementById("focusCountdown");
  let focusCountdownValue = focusCountdown.innerHTML;
  if (focusCountdownValue == '[timer reset]') {
    return;
  } else {
    if (countdownTime > 0) {

      // START OF SOURCED CODE
      // Source: https://www.w3schools.com/howto/howto_js_countdown.asp
      // Scroll down to ‘Creating a Countdown Timer’
      // View the example below the heading listed above
      let hoursLeft = Math.floor((countdownTime % 86400000) / 3600000);
      let minutesLeft = Math.floor((countdownTime % 3600000) / 60000);
      let secondsLeft = Math.round((countdownTime % 60000) / 1000);
      // console.log(secondsLeft);
      // END OF SOURCED CODE
      let plantImage = document.getElementById("plantImage");
      let datePlus75Percent = datePlus * 0.75;
      let datePlus50Percent = datePlus * 0.50;
      let datePlus25Percent = datePlus * 0.25;

      // default
      if (hoursLeft <= 9) {
        if (minutesLeft <= 9) {
          if (secondsLeft <= 9) {
            focusCountdown.innerHTML = '0' + hoursLeft + ':0' + minutesLeft + ':0' + secondsLeft;
          } else {
            if (secondsLeft == 60) {
              focusCountdown.innerHTML = '0' + hoursLeft + ':0' + (minutesLeft += 1) + ':' + '00';
            } else {
              focusCountdown.innerHTML = '0' + hoursLeft + ':0' + minutesLeft + ':' + secondsLeft;
            }
          }
        } else {
          if (secondsLeft <= 9) {
            focusCountdown.innerHTML = '0' + hoursLeft + ':' + minutesLeft + ':0' + secondsLeft;
          } else {
            if (secondsLeft == 60) {
              focusCountdown.innerHTML = '0' + hoursLeft + ':' + (minutesLeft += 1) + ':' + '00';
            } else {
              focusCountdown.innerHTML = '0' + hoursLeft + ':' + minutesLeft + ':' + secondsLeft;
            }
          }
        }
      } else {
        if (minutesLeft <= 9) {
          if (secondsLeft <= 9) {
            focusCountdown.innerHTML = hoursLeft + ':0' + minutesLeft + ':0' + secondsLeft;
          } else {
            if (secondsLeft == 60) {
              focusCountdown.innerHTML = hoursLeft + ':0' + (minutesLeft += 1) + ':' + '00';
            } else {
              focusCountdown.innerHTML = hoursLeft + ':0' + minutesLeft + ':' + secondsLeft;
            }
          }
        } else {
          if (secondsLeft <= 9) {
            focusCountdown.innerHTML = hoursLeft + ':' + minutesLeft + ':0' + secondsLeft;
          } else {
            if (secondsLeft == 60) {
              focusCountdown.innerHTML = hoursLeft + ':' + (minutesLeft += 1) + ':' + '00';
            } else {
              focusCountdown.innerHTML = hoursLeft + ':' + minutesLeft + ':' + secondsLeft;
            }
          }
        }
      }

      if (countdownTime >= datePlus75Percent) {
        plantImage.src = "img/focus/flower1.svg";
      } else if (countdownTime >= datePlus50Percent) {
        plantImage.src = "img/focus/flower2.svg";
      } else if (countdownTime >= datePlus25Percent) {
        plantImage.src = "img/focus/flower3.svg";
      } else if (countdownTime > 0) {
        plantImage.src = "img/focus/flower4.svg";
      }

      setTimeout(startTimer2, 1000);

    } else {
      clearTimeout(startTimer2);
      focusCountdown.innerHTML = '00:00:00';

      let focusError = document.getElementById("focusError");
      focusError.innerHTML = 'Time is up!';
      focusError.style.display = "block";
      setTimeout(() => {
        focusError.innerHTML = '';
        focusError.style.display = "none";
      }, 2000);

      plantImage.src = "img/focus/flower5.svg";
    }
  }
}

// ________STOP BUTTON________
let stopTimer = () => {
  let focusCountdown = document.getElementById("focusCountdown");
  focusCountdown.innerHTML = '[timer reset]';
  focusCountdown.style.display = "none";

  let focusError = document.getElementById("focusError");
  focusError.innerHTML = '';
  focusError.style.display = "none";

  let timerInput = document.getElementById("timerInput");
  timerInput.style.display = "inline";

  let plantImage = document.getElementById("plantImage");
  plantImage.src = "img/focus/flower1.svg";

  clearTimeout(startTimer2);
}

// ________ADD TO LIST BUTTON________
let addToList = () => {
  let toDoList = document.getElementById("toDoList");
  // .trim() removes the leading and trailing white space in the value
  let focusToDoTextboxInput = document.getElementById("focusToDoTextbox").value.trim();
  let focusTaskError = document.getElementById("focusTaskError");

  // checks if textbox is empty or only contains white space (.length will be 0 if it's only white space)
  if (focusToDoTextboxInput == '' || focusToDoTextboxInput.length == 0) {
    // makes error text visible
    focusTaskError.style.display = "inline";
    setTimeout(() => {
      focusTaskError.style.display = "none";
    }, 2000);
  } else if (focusToDoTextboxInput) {
    // makes error text invisible
    focusTaskError.style.display = "none";

    // START OF SOURCED CODE
    // Source: https://thispointer.com/javascript-string-replace-space-with-dash/
    // Scroll down to ‘Javascript string replace spaces with dash using replace()’
    // View the example below the heading listed above
    let focusToDoTextboxInputNoSpaces = focusToDoTextboxInput.replace(/ /g, '_');
    // END OF SOURCED CODE

    toDoList.innerHTML += '<div class="toDoTaskEntire" id="' + focusToDoTextboxInputNoSpaces + '">' + '<button class="removeButtons inline" onclick="removeFromList(&apos;' + focusToDoTextboxInputNoSpaces + '&apos;);">' + '<img src="img/focus/remove1.svg" class="icon removeImage1">' + '<img src="img/focus/remove2.svg" class="icon removeImage2">' + '</button>' + '&nbsp;&nbsp;&nbsp;' + '<p class="toDoTasks inline">' + focusToDoTextboxInput + '</p>' + '</div>';
  }

}

function removeFromList(focusToDoTextboxInputNoSpaces) {
  var i, toDoTaskEntire, removeButtons;
  toDoTaskEntire = document.getElementsByClassName("toDoTaskEntire");
  for (i = 0; i < toDoTaskEntire.length; i++) {
    toDoTaskEntire[i].style.display = "block";
  }
  removeButtons = document.getElementsByClassName("removeButtons");
  for (i = 0; i < removeButtons.length; i++) {
    document.getElementById(focusToDoTextboxInputNoSpaces).remove();
  }
}