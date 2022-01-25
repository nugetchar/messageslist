const messagesList = document.querySelector(".messages-list");
let isScrolling = false;

const interval = window.setInterval(() => {
  const message = generateMessage();
    messagesList.appendChild(message);
  if (!isScrolling) {
    messagesList.scrollTo({
      top: messagesList.scrollHeight,
      behavior: "smooth"
    });
  }
}, Math.floor(Math.random() * 3001 + 2000));

messagesList.addEventListener("scroll", () => {
  isScrolling =
    messagesList.scrollHeight - messagesList.scrollTop >=
    (messagesList.clientHeight + 10);
});

function generateMessage() {
  const message = document.createElement("div");
  const isNotice = Math.floor(Math.random() * 6) % 5 === 0;
  message.classList.add("message");
  if (isNotice) {
    message.classList.add("notice");
  }

  const user = document.createElement("p");
  user.classList.add("message__user");
  user.innerText = pickRandomUser();

  const messageText = document.createElement("p");
  messageText.classList.add("message__text");
  messageText.innerText = isNotice
    ? generateRandomNotice()
    : generateRandomText();

  if (isNotice) {
      message.appendChild(createCloseNoticeButton(message));
  }

  message.append(user, messageText);
  return message;
}

function createCloseNoticeButton(notice) {
    const closeButton = document.createElement('button');
    closeButton.innerHTML = `<span class="material-icons">cancel</span>`;
    closeButton.addEventListener('click', () => notice.remove());
    closeButton.classList.add('message__close-button');
    return closeButton;
}

function pickRandomUser() {
  const users = [
    "Agnès T.",
    "Amaury T.",
    "Anthony L.",
    "Benoit O.",
    "Ethan H.",
    "Joshua J.",
    "Julie S.",
    "Lauryne T.",
    "Leslie V.",
    "Lilian H.",
    "Marine E.",
    "Mickael K.",
    "Nathan G.",
    "Philippe G.",
    "Pyanossa N.",
    "Rayan H.",
    "Sandra N.",
    "Vincent G.",
    "Wacil B.",
    "Wafa G.",
    "Arthur V.",
    "Cameron V.",
    "Hoani P.",
    "Hugo R.",
    "Jason L.",
    "Kays Z.",
    "Louise I.",
    "Lucas M.",
    "Matisse R.",
    "Maud M.",
    "Salomé G.",
    "Samy Z.",
    "Sara M.",
    "Shelly L.",
    "Theo C.",
    "Timothé P.",
    "Vladyslav V.",
    "Achraf A.",
    "Adil M.",
    "Alexandre V.",
    "Coumba S.",
    "Deyan E.",
    "Ethan N-R.",
    "Imène B.",
    "Jules D.",
    "Justine Q.",
    "Lucinda M.",
    "Maël G.",
    "Noam D.",
    "Tania T.",
    "Thomas B.",
    "Thomas G.",
    "Vaéa S."
  ];
  return users[Math.floor(Math.random() * users.length)];
}

function generateRandomText() {
  const verbs = [
    "mange",
    "fabrique",
    "fais",
    "construis",
    "dessine",
    "peins",
    "chante",
    "calcule",
    "développe",
    "conçois",
    "rends",
    "rebouche",
    "détruis",
    "ligotte",
    "digère",
    "regarde",
    "compte",
    "souffle sur",
    "change",
    "grave",
    "couds",
    "bois",
    "liste",
    "nettoie"
  ];

  const subjects = [
    "une pomme",
    "un couteau",
    "une poire",
    "un mur",
    "une truelle",
    "un chalumeau",
    "une bougie",
    "des étoiles",
    "un oiseau",
    "une montagne",
    "des chaussures",
    "un sabre",
    "une lanterne",
    "une courgette",
    "le soleil",
    "la lune",
    "un tapis",
    "une savonette",
    "des cerises",
    "du métal",
    "une épée",
    "un ordinateur",
    "Saturne",
    "une nébuleuse",
    "un chou",
    "une maison",
    "mes devoirs"
  ];

  const propositions = ["et", "ou", "pendant que", "alors que", "sauf si", "ou alors", "quand bien même"];

  const isQuestion = Math.floor(Math.random() * 2 + 1) % 3 === 0;
  const nbPropositions = Math.floor(Math.random() * 3 + 1);

  let sentence = ``;

  for (let i = 0; i < nbPropositions; i++) {
    let [idxVerb, idxSubject, idxProposition] = [
      Math.floor(Math.random() * verbs.length),
      Math.floor(Math.random() * subjects.length)
    ];

    if (i < nbPropositions - 1) {
      idxProposition = Math.floor(Math.random() * propositions.length);
      sentence = `${sentence} je ${verbs[idxVerb]} ${subjects[idxSubject]} ${propositions[idxProposition]}`;
    } else {
      sentence = `${sentence} je ${verbs[idxVerb]} ${subjects[idxSubject]}`;
    }
  }
  return sentence;
}

function generateRandomNotice() {
  return `Annonce ! - ${generateRandomText()}`;
}
