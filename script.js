const textArea = document.querySelector("#textBox");
const submitBtn = document.querySelector(".redact-btn");
const refreshtBtn = document.querySelector(".refresh");
const wordCountElm = document.querySelector("#wordCount");
const redactedCountElm = document.querySelector("#redactedCount");

submitBtn.addEventListener("click", () => {
  let userText = textArea.value;
  const redactWord = document.querySelector("#redactText").value;
  const redactSign = document.querySelector("#redactSign").value;

  if (redactWord.trim() === "") {
    return;
  }
  const wordsToRedact = redactWord.split(" ");
  let totalWordsCount = 0;
  let totalRedactedCount = 0;

  wordsToRedact.forEach((element) => {
    const regex = new RegExp(`\\b${element}\\b`, "gi");
    const matches = userText.match(regex);
    if (matches) {
      totalRedactedCount += matches.length;
    }
    totalWordsCount += userText.split(/\s+/).length - 1;
    const redactedWord = redactSign.repeat(element.length);
    userText = userText.replace(regex, redactedWord);
    textArea.value = userText;

    wordCountElm.innerText = `Total Words: ${totalWordsCount}`;
    redactedCountElm.innerText = `Total Redacted: ${totalRedactedCount}`;
  });
});

refreshtBtn.addEventListener("click", () => {
  location.reload();
});
//   // for (let i = 0; i < wordsToRedact.length; i++) {
//   //   const word = wordsToRedact[i];
//   //   // const redactedWord = redactSign.repeat(word.length);
//   //   const regex = new RegExp("\\b" + word + "\\b", "gi");
//   //   userText = userText.replace(regex, redactedWord);
//   }

// });
