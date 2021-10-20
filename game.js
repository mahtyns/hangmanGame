const words = ["Kotek", "Papuga", "Widelec", "Lampa", "Krzesło", "Astronomia", "Filiżanka", "Szampan", "Krzyżówka", "Wiersz", "Buty", "Nóż", "Mama", "Pas", "Pies"]

const hangmanTable = document.querySelector(".hangman-word")

const randomWord = document.querySelector(".randomBtn");


let newWord;
let wordLetters;

const indices = [];

const dashRandom = () => {
let dashIndex = hangmanTable.textContent.indexOf("_");
        while (dashIndex != -1 ) {
            indices.push(dashIndex);
            dashIndex = hangmanTable.textContent.indexOf("_", dashIndex + 1);
        }
        // console.log(hangmanTable.textContent.length);
        // console.log(indices);

        
       
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
        //Losowanie 1 literki
        let randomLetterIndex = Math.floor(Math.random() * newWord.length)
        let randomLetter = newWord[randomLetterIndex];
        console.log(randomLetter);
        console.log(randomLetterIndex);
        dashRandom();
        
        //not needed in the end
        // let randomDash = indices[(Math.floor(Math.random() * indices.length))];
        // console.log(randomDash);

        
        
    }
    else {
        //Losowanie wielu literek
        console.log("Wiecej niz 5");
    }
}

const showWord = () => {
    hangmanTable.textContent = "";
    drawWord();
    hideLetters();
    showRandomLetter();
    
}

randomWord.addEventListener("click", showWord)

document.querySelector(".resetBtn").addEventListener("click", () => {
    hangmanTable.textContent = "";
})

document.querySelector(".showBtn").addEventListener("click", () => {
    hangmanTable.textContent = newWord;
})