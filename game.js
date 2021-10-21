const words = ["Kotek", "Papuga", "Widelec", "Lampa", "Krzesło", "Astronomia", "Filiżanka", "Szampan", "Krzyżówka", "Wiersz", "Buty", "Nóż", "Pas", "Pies", "Warszawianin", ]

const hangmanTable = document.querySelector(".hangman-word")

const randomWord = document.querySelector(".randomBtn");

const guessInput = document.querySelector(".guess-word input");

let newWord;
let wordLetters;
let randomLetter;

// const indices = [];

// const dashRandom = () => {
// let dashIndex = hangmanTable.textContent.indexOf("_");
//         while (dashIndex != -1 ) {
//             indices.push(dashIndex);
//             dashIndex = hangmanTable.textContent.indexOf("_", dashIndex + 1);
//         }
//         // console.log(hangmanTable.textContent.length);
//         // console.log(indices);
        
// }


// to do - repeating letters
// const repeatedLetter = function(txt) {
//     let repeatedInx = 0;
//     for (let i = 0; i < txt.length; i++) {
//         if (txt.indexOf(txt[i]) !== txt.lastIndexOf(txt[i])) {
//             repeatedInx++;
//             console.log(repeatedInx)
//         return false;}
//     }
//     return true
// }


// Replace letter function 
String.prototype.replace = function(index, replaced) {
   return this.substr(0, index) + replaced + this.substr(index + replaced.length);
}

const drawWord = () => {
 let wordIndex = Math.floor(Math.random() * words.length);
 newWord = words[wordIndex];
 wordLetters = newWord.length;
}

const hideLetters = () => {
    for (let i = 0; i < wordLetters; i++) {
    hangmanTable.textContent += " _";
    
} 

   console.log(newWord);}

const showRandomLetter = () => {
   
    if (newWord.length <= 5 ) {
        //Drawing 1 letter for short words
        let randomLetterIndex = Math.floor(Math.random() * newWord.length)
        randomLetter = newWord[randomLetterIndex];
        let replacedIndex = 2 * randomLetterIndex + 1
        hangmanTable.textContent = hangmanTable.textContent.replace(replacedIndex, randomLetter);
        
        
        
        
        //not needed in the end
        // let randomDash = indices[(Math.floor(Math.random() * indices.length))];
        // console.log(randomDash);

        
        
    }
    else if ( 5 < newWord.length && newWord.length <= 10) {
        //losowanie 2 literek
        for (let i = 0; i < 2; i++)
        {
           let randomLetterIndex = Math.floor(Math.random() * newWord.length);
           randomLetter = newWord[randomLetterIndex];
        //    console.log(randomLetter);
            // console.log(randomLetterIndex);
            let replacedIndex = 2 * randomLetterIndex + 1
        hangmanTable.textContent = hangmanTable.textContent.replace(replacedIndex, randomLetter);
       
        }
    }
    else {
        for (let i = 0; i < 3; i++)
        {
           let randomLetterIndex = Math.floor(Math.random() * newWord.length);
           randomLetter = newWord[randomLetterIndex];
        //    console.log(randomLetter);
            // console.log(randomLetterIndex);
            let replacedIndex = 2 * randomLetterIndex + 1
        hangmanTable.textContent = hangmanTable.textContent.replace(replacedIndex, randomLetter);
               


        }
    }
    
 
}

const showWord = () => {
    hangmanTable.textContent = "";
    drawWord();
    hideLetters();
    showRandomLetter();
    
}

const guessBtn = document.querySelector(".guess-word button");

const guessResult = (e) => {
    e.preventDefault();
    let userGuess = guessInput.value.toLowerCase()
    if ( userGuess === newWord.toLowerCase()) {
    hangmanTable.textContent = newWord;
    document.querySelector(".result p").style.color = "green";
    document.querySelector(".result p").style.fontSize = "30px";

    document.querySelector(".result p").textContent = "Gratulacje!!!" }
    else {
    document.querySelector(".result p").style.color = "red";
    document.querySelector(".result p").style.fontSize = "30px";

    document.querySelector(".result p").textContent = "Niestety nie :(";
    }

}

guessBtn.addEventListener("click", guessResult);

randomWord.addEventListener("click", showWord)

document.querySelector(".resetBtn").addEventListener("click", () => {
    hangmanTable.textContent = "";
})

document.querySelector(".showBtn").addEventListener("click", () => {
    hangmanTable.textContent = newWord;
})