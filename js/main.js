

function checkForI() {
  let userInput = document.getElementById('userInput').value;
  let words = userInput.split(' ');

  words.forEach((word) => {
    let countI = (word.match(/i/g) || []).length;
    if (countI === 2) {
      console.log(word);
    }
  });
}