const words = ["kotek", "papuga", "widelec", "lampa", "krzesło", "astronomia", "filiżanka", "szampan", "krzyżówka", "wiersz", "buty", "nóż", "pas", "pies", "warszawianin", ]



const hangmanTable = document.querySelector(".hangman-word")

const randomWord = document.querySelector(".randomBtn");

const resultInput = document.querySelector(".guess-word input");

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
         }
        
        
        
        //not needed in the end
        // let randomDash = indices[(Math.floor(Math.random() * indices.length))];
        // console.log(randomDash);

        
        
   
    else if ( 5 < newWord.length && newWord.length <= 10) {
        //Draw 2 letters
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
        // Draw letters for longer words
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

const resultBtn = document.querySelector(".guess-word button");

const guessResult = (e) => {
    e.preventDefault();
    let userGuess = resultInput.value.toLowerCase()
    
    if (newWord === undefined) {
        document.querySelector(".result p").style.fontSize = "30px";
        document.querySelector(".result p").textContent = "Nie wylosowano slowa";
        return

    }


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

const letterGuessBtn = document.querySelector(".input button");
const letterInput = document.querySelector(".input input");

const checkLetter = function(e) {
e.preventDefault();
let guessedLetter = letterInput.value
if (guessedLetter !== "" ) {
    letterInput.value = ""; 
    // console.log(guessedLetter)
    if ( newWord.indexOf(guessedLetter) !== -1 ) {
        if (newWord.indexOf(guessedLetter) === newWord.lastIndexOf(guessedLetter)) {
         let guessedIndex = newWord.indexOf(guessedLetter);
         let replacedIndex = 2 * guessedIndex + 1
        hangmanTable.textContent = hangmanTable.textContent.replace(replacedIndex, guessedLetter);
        console.log(guessedIndex) }
        else {
            

            }
        }

    
    }
    else if (newWord.indexOf(guessedLetter) === -1) {
        document.querySelector(".result p").style.color = "blue";
    document.querySelector(".result p").style.fontSize = "30px";
        document.querySelector(".result p").textContent = "Nie ma tej litery"
    }
    

}


else {
    alert("brak litery");
}
}




letterGuessBtn.addEventListener("click", checkLetter);

resultBtn.addEventListener("click", guessResult);

randomWord.addEventListener("click", showWord)

document.querySelector(".resetBtn").addEventListener("click", () => {
    hangmanTable.textContent = "";
    resultInput.value = "";
})

document.querySelector(".showBtn").addEventListener("click", () => {
    hangmanTable.textContent = newWord;
})

