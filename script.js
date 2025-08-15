const questions = [
  {
    question: {
      en: "What is the SI unit of force?",
      hi: "बल की एसआई इकाई क्या है?"
    },
    answer: {
      en: "Newton",
      hi: "न्यूटन"
    }
  },
  {
    question: {
      en: "State Newton's First Law of Motion.",
      hi: "न्यूटन का प्रथम गति नियम बताइए।"
    },
    answer: {
      en: "A body remains at rest or in uniform motion unless acted upon by an external force.",
      hi: "जब तक किसी बाहरी बल का प्रभाव नहीं होता, कोई पिंड स्थिर रहता है या समान गति से चलता रहता है।"
    }
  },
  {
    question: {
      en: "Write the formula for acceleration.",
      hi: "त्वरण का सूत्र लिखिए।"
    },
    answer: {
      en: "a = (v - u)/t",
      hi: "a = (v - u)/t"
    }
  },
  {
    question: {
      en: "What is the value of acceleration due to gravity on Earth?",
      hi: "पृथ्वी पर गुरुत्वीय त्वरण का मान कितना है?"
    },
    answer: {
      en: "9.8 m/s^2",
      hi: "9.8 m/s^2"
    }
  },
  {
    question: {
      en: "State the formula for kinetic energy.",
      hi: "गतिज ऊर्जा का सूत्र बताइए।"
    },
    answer: {
      en: "KE = 1/2 mv^2",
      hi: "KE = 1/2 mv^2"
    }
  },
  {
    question: {
      en: "State the formula for potential energy.",
      hi: "स्थितिज ऊर्जा का सूत्र बताइए।"
    },
    answer: {
      en: "PE = mgh",
      hi: "PE = mgh"
    }
  },
  {
    question: {
      en: "What is the work done when a force of 10 N moves a body 5 m?",
      hi: "यदि 10 N का बल किसी वस्तु को 5 मीटर तक ले जाए तो किया गया कार्य कितना होगा?"
    },
    answer: {
      en: "50 J",
      hi: "50 J"
    }
  },
  {
    question: {
      en: "Define power in physics.",
      hi: "भौतिकी में शक्ति को परिभाषित कीजिए।"
    },
    answer: {
      en: "Power is the rate at which work is done. P = W/t",
      hi: "शक्ति कार्य करने की दर है। P = W/t"
    }
  },
  {
    question: {
      en: "What is the formula for momentum?",
      hi: "संवेग का सूत्र बताइए।"
    },
    answer: {
      en: "p = mv",
      hi: "p = mv"
    }
  },
  {
    question: {
      en: "State the law of conservation of momentum.",
      hi: "संवेग संरक्षण का नियम बताइए।"
    },
    answer: {
      en: "The total momentum of a system remains constant if no external force acts on it.",
      hi: "यदि किसी तंत्र पर कोई बाहरी बल न लगे तो कुल संवेग स्थिर रहता है।"
    }
  },
  {
    question: {
      en: "What is the frequency of a wave with a period of 0.01 s?",
      hi: "0.01 सेकंड अवधि वाली तरंग की आवृत्ति कितनी होगी?"
    },
    answer: {
      en: "100 Hz",
      hi: "100 Hz"
    }
  },
  {
    question: {
      en: "Write the equations of motion for uniformly accelerated linear motion.",
      hi: "समान त्वरण वाली रैखिक गति के समीकरण लिखिए।"
    },
    answer: {
      en: "v = u + at, s = ut + 1/2 at^2, v^2 = u^2 + 2as",
      hi: "v = u + at, s = ut + 1/2 at^2, v^2 = u^2 + 2as"
    }
  },
  {
    question: {
      en: "What is the SI unit of pressure?",
      hi: "दबाव की SI इकाई क्या है?"
    },
    answer: {
      en: "Pascal",
      hi: "पास्कल"
    }
  },
  {
    question: {
      en: "State Boyle's Law.",
      hi: "बॉयल का नियम बताइए।"
    },
    answer: {
      en: "At constant temperature, pressure of a gas is inversely proportional to its volume.",
      hi: "स्थिर तापमान पर, गैस का दबाव उसके आयतन के व्युत्क्रमानुपाती होता है।"
    }
  },
  {
    question: {
      en: "State Charles' Law.",
      hi: "चार्ल्स का नियम बताइए।"
    },
    answer: {
      en: "At constant pressure, volume of a gas is directly proportional to its absolute temperature.",
      hi: "स्थिर दबाव पर, गैस का आयतन उसके पूर्ण तापमान के अनुपाती होता है।"
    }
  },
  {
    question: {
      en: "Define the law of equipartition of energy.",
      hi: "ऊर्जा के समान वितरण का नियम बताइए।"
    },
    answer: {
      en: "Energy in a system is equally distributed among all degrees of freedom.",
      hi: "किसी प्रणाली में ऊर्जा सभी स्वतंत्रता डिग्री में समान रूप से वितरित होती है।"
    }
  },
  {
    question: {
      en: "What is the formula for density?",
      hi: "घनत्व का सूत्र लिखिए।"
    },
    answer: {
      en: "ρ = m/V",
      hi: "ρ = m/V"
    }
  },
  {
    question: {
      en: "What is the formula for pressure at a depth h in a liquid?",
      hi: "तरल में गहराई h पर दबाव का सूत्र क्या है?"
    },
    answer: {
      en: "P = P0 + ρgh",
      hi: "P = P0 + ρgh"
    }
  },
  {
    question: {
      en: "Define specific heat capacity.",
      hi: "विशिष्ट ऊष्मा क्षमता को परिभाषित कीजिए।"
    },
    answer: {
      en: "The amount of heat required to raise 1 kg of a substance by 1 K.",
      hi: "किसी पदार्थ के 1 किलोग्राम का तापमान 1 K बढ़ाने के लिए आवश्यक ऊष्मा।"
    }
  },
  {
    question: {
      en: "Write the formula for Ohm's Law.",
      hi: "ओम का नियम लिखिए।"
    },
    answer: {
      en: "V = IR",
      hi: "V = IR"
    }
  },
  {
    question: {
      en: "Define electric current.",
      hi: "विद्युत धारा को परिभाषित कीजिए।"
    },
    answer: {
      en: "The rate of flow of charge through a conductor. I = Q/t",
      hi: "किसी चालक में आवेश के प्रवाह की दर। I = Q/t"
    }
  },
  {
    question: {
      en: "What is the SI unit of electric charge?",
      hi: "विद्युत आवेश की SI इकाई क्या है?"
    },
    answer: {
      en: "Coulomb",
      hi: "कूलॉम्ब"
    }
  },
  {
    question: {
      en: "Formula for work done in moving charge in an electric field.",
      hi: "विद्युत क्षेत्र में आवेश को स्थानांतरित करने में किया गया कार्य।"
    },
    answer: {
      en: "W = VQ",
      hi: "W = VQ"
    }
  },
  {
    question: {
      en: "State Hooke's Law.",
      hi: "हुक का नियम बताइए।"
    },
    answer: {
      en: "The restoring force of a spring is directly proportional to the displacement. F = -kx",
      hi: "एक स्प्रिंग की प्रतिरोधी शक्ति विस्थापन के सीधे अनुपाती होती है। F = -kx"
    }
  },
  {
    question: {
      en: "Define displacement and distance.",
      hi: "विस्थापन और दूरी को परिभाषित कीजिए।"
    },
    answer: {
      en: "Distance is total path covered; displacement is shortest path from initial to final position.",
      hi: "दूरी कुल चली गई पथ है; विस्थापन प्रारंभिक से अंतिम स्थिति तक की सबसे छोटी दूरी है।"
    }
  },
  {
    question: {
      en: "What is the speed of light in vacuum?",
      hi: "शून्य में प्रकाश की गति कितनी है?"
    },
    answer: {
      en: "3 x 10^8 m/s",
      hi: "3 x 10^8 m/s"
    }
  },
  {
    question: {
      en: "State the relation between wavelength, frequency, and speed of a wave.",
      hi: "तरंग की तरंगदैর্ঘ्य, आवृत्ति और गति के बीच संबंध बताइए।"
    },
    answer: {
      en: "v = f λ",
      hi: "v = f λ"
    }
  },
  {
    question: {
      en: "What is the difference between scalar and vector quantities?",
      hi: "स्केलर और वेक्टर राशियों में क्या अंतर है?"
    },
    answer: {
      en: "Scalars have magnitude only; vectors have magnitude and direction.",
      hi: "स्केलर में केवल परिमाण होता है; वेक्टर में परिमाण और दिशा होती है।"
    }
  },
  {
    question: {
      en: "Define torque.",
      hi: "कर्षण बल को परिभाषित कीजिए।"
    },
    answer: {
      en: "Torque is the rotational equivalent of force. τ = r × F",
      hi: "कर्षण बल बल का घूर्णन समकक्ष है। τ = r × F"
    }
  },
  {
    question: {
      en: "What is the unit of moment of inertia?",
      hi: "जड़त्व आघूर्ण की इकाई क्या है?"
    },
    answer: {
      en: "kg m^2",
      hi: "kg m^2"
    }
  }
];


// Sounds
const sounds = {
  correct: new Audio("sounds/correct.mp3"),
  wrong: new Audio("sounds/wrong.mp3"),
  click: new Audio("sounds/click.mp3")
};

// DOM
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("user-answer");
const submitBtn = document.getElementById("submit-btn");
const nextBtn = document.getElementById("next-btn");
const scorebar = document.getElementById("scorebar");

// Progress Bar Elements
const progressBar = document.getElementById("progress-bar");
const progressLabel = document.getElementById("progress-label");

let currentIndex = 0;
let score = 0;
let quizSet = [];
let selectedLanguage = 'en'; // default

// Shuffle helper
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

// Levenshtein distance for typo tolerance
function levenshtein(a, b) {
  const dp = [];
  for (let i = 0; i <= b.length; i++) dp[i] = [i];
  for (let j = 0; j <= a.length; j++) dp[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b[i - 1] === a[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1, // substitute
          dp[i][j - 1] + 1,     // insert
          dp[i - 1][j] + 1      // delete
        );
      }
    }
  }
  return dp[b.length][a.length];
}

// Normalize text: lowercase + remove all spaces, commas and danda symbol (।)
function normalizeText(str) {
  return str.trim().toLowerCase().replace(/[\s,।]+/g, "");
}

function isCloseMatch(user, correct) {
  const dist = levenshtein(user, correct);
  const longest = Math.max(user.length, correct.length);
  const similarity = 1 - (dist / longest);
  return similarity >= 0.85; // tolerance level
}

// Add: Fun Fact logic (optional, for engagement!)
function getFunFact(idx) {
  const facts = [
    "Newton also invented calculus!",
    "Gravitational acceleration is 9.8 m/s² on Earth.",
    "The speed of light is exactly 299,792,458 m/s.",
    "Energy and mass are related by E = mc².",
    "Vectors have direction as well as magnitude.",
    "SI units standardize physics across the world.",
    "A force of 1 Newton will accelerate 1 kg at 1 m/s²."
  ];
  return facts[idx % facts.length];
}

function setLanguage(lang) {
  selectedLanguage = lang;
  document.getElementById("language-modal").style.display = "none";
  startQuiz();
}

function startQuiz() {
  score = 0;
  currentIndex = 0;
  quizSet = shuffle(questions);
  answerInput.style.display = "";
  submitBtn.style.display = "";

  // Set button text in chosen language
  submitBtn.innerText = selectedLanguage === 'en' ? "Submit" : "जमा करें";
  nextBtn.innerText = selectedLanguage === 'en' ? "Next" : "अगला";

  loadQuestion();
  updateProgressBar(); // Ensure bar resets on restart
}

function loadQuestion() {
  resetUI();
  const q = quizSet[currentIndex];
  questionEl.textContent = `${currentIndex + 1}. ${q.question[selectedLanguage]}`;
  updateScorebar();
  updateProgressBar();
  // Show fun fact, if element exists
  const funFactEl = document.getElementById("fun-fact");
  if (funFactEl) funFactEl.textContent = getFunFact(currentIndex);
}

function resetUI() {
  answerInput.value = "";
  answerInput.disabled = false;
  answerInput.classList.remove("correct", "incorrect");
  submitBtn.disabled = false;
  nextBtn.style.display = "none";
}

function updateScorebar(message = "") {
  if (message) {
    scorebar.innerHTML = message;
  } else {
    scorebar.textContent =
      `${selectedLanguage === 'en' ? 'Question' : 'प्रश्न'} ${currentIndex + 1} ${selectedLanguage === 'en' ? 'of' : 'में से'} ${quizSet.length} | ${selectedLanguage === 'en' ? 'Current Score' : 'वर्तमान अंक'}: ${score}`;
  }
}

// Progress bar visual update
function updateProgressBar() {
  if (!progressBar || !progressLabel || !quizSet.length) return;
  progressBar.style.width = ((currentIndex + 1) / quizSet.length * 100) + "%";
  progressLabel.textContent = `Q${currentIndex + 1} / ${quizSet.length}`;
}

// Multiple correct answers + spaces, commas, danda ignored
function checkAnswer() {
  let correctAnswers = quizSet[currentIndex].answer[selectedLanguage];

  // Convert to array: if it's string with commas, split
  if (typeof correctAnswers === "string") {
    correctAnswers = correctAnswers.split(",").map(a => a.trim());
  }

  const userRaw = normalizeText(answerInput.value);

  answerInput.disabled = true;
  submitBtn.disabled = true;

  // Check if matches any correct answer (ignoring spaces, commas, danda)
  const isCorrect = correctAnswers.some(ans =>
    userRaw === normalizeText(ans) ||
    isCloseMatch(userRaw, normalizeText(ans))
  );

  if (isCorrect) {
    score++;
    sounds.correct.play();
    answerInput.classList.add("correct");
    answerInput.value = Array.isArray(quizSet[currentIndex].answer[selectedLanguage])
      ? quizSet[currentIndex].answer[selectedLanguage].join(", ")
      : quizSet[currentIndex].answer[selectedLanguage];
    updateScorebar(`<span class="correct-text">${selectedLanguage === 'en' ? 'Correct!' : 'सही!'}</span>`);
  } else {
    sounds.wrong.play();
    answerInput.classList.add("incorrect");
    const correctJoined = Array.isArray(quizSet[currentIndex].answer[selectedLanguage])
      ? quizSet[currentIndex].answer[selectedLanguage].join(", ")
      : quizSet[currentIndex].answer[selectedLanguage];
    updateScorebar(
      `<span class="incorrect-text">${selectedLanguage === 'en' ? 'Incorrect.' : 'गलत।'}</span> 
      ${selectedLanguage === 'en' ? 'Correct Answer:' : 'सही उत्तर:'} 
      <b>${correctJoined}</b>`
    );
    answerInput.value += ` → ${correctJoined}`;
  }

  nextBtn.style.display = "block";
}

function showScore() {
  questionEl.innerHTML =
    selectedLanguage === 'en'
      ? `You scored <b>${score}</b> out of <b>${quizSet.length}</b>!`
      : `आपने <b>${score}</b> में से <b>${quizSet.length}</b> अंक प्राप्त किए!`;
  answerInput.style.display = "none";
  submitBtn.style.display = "none";
  nextBtn.innerText = selectedLanguage === 'en' ? "Play Again" : "फिर से खेलें";
  scorebar.textContent = "";
  updateProgressBar(); // Reset/re-show bar at end if needed
}

// EVENTS
submitBtn.addEventListener("click", checkAnswer);

nextBtn.addEventListener("click", () => {
  sounds.click.play();
  if (nextBtn.innerText === "Play Again" || nextBtn.innerText === "फिर से खेलें") {
    startQuiz();
  } else {
    currentIndex++;
    if (currentIndex < quizSet.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
});

answerInput.addEventListener("keypress", e => {
  if (e.key === "Enter" && !submitBtn.disabled) checkAnswer();
});

// Optional: Remove answer highlight on focus for a fresh question
answerInput.addEventListener("focus", () => {
  answerInput.classList.remove("correct", "incorrect");
});

// Optional: Hide "fun-fact" at the end screen for visual niceness
function hideFunFactAtEnd() {
  const funFactEl = document.getElementById("fun-fact");
  if (funFactEl && currentIndex >= quizSet.length) {
    funFactEl.textContent = "";
  }
}
