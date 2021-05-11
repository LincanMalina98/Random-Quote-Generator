const quotes = [
    {
     "title": "Khalifatul Masih III",
     "content": "Love For All, Hatred For None. Corrupti esse architecto illum sint quis doloremque placeat. Eius nesciunt dolore aspernatur id laborum aut nostrum nobis placeat aperiam enim. Id, qui"
    },
    {
        "title": "Amy Poehler",
        "content": "Change the world by being yourself. Corrupti esse architecto illum sint quis doloremque placeat. Eius nesciunt dolore aspernatur id laborum aut nostrum nobis placeat aperiam enim. Id, qui"
    },
    {
        "title": "T.S Eliot",
        "content": "Every moment is a fresh beginning Corrupti esse architecto illum sint quis doloremque placeat. Eius nesciunt dolore aspernatur id laborum aut nostrum nobis placeat aperiam enim. Id, qui"
    },
    {
        "title": "Mark Twain",
        "content": "Never regret anything that made you smile.Corrupti esse architecto illum sint quis doloremque placeat. Eius nesciunt dolore aspernatur id laborum aut nostrum nobis placeat aperiam enim. Id, qu"
        
    },
];

const quotesGeneratorButton = document.getElementById("button");

quotesGeneratorButton.addEventListener("click",generateQuote);
window.addEventListener("load",generateQuote);

function generateQuote() {
        
    let random = Math.floor(Math.random() * quotes.length) + 0;

    let quoteTitle = document.getElementById("quote-title").innerHTML = quotes[random]["title"];
    let quoteContent = document.getElementById("quote-content").innerHTML = quotes[random]["content"];

}

