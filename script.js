/*
MVP:
Check current date.

Check localstorage to see if there is a quote stored that matches today's date.
If localstorage and date matches, use localstorage to populate the DOM.

If localstorage and date mismatched OR no localstorage, make API call using
today's date. Save to local storage. 

Also, check the length of the quote. If it exceeds n length (yet to be decided),
alter the text size of the quote itself to stop any kind of scrolling. 1
*/
const datefns = require('date-fns');

const quote = document.querySelector('h1');
const author = document.querySelector('h3');

const errorQuote = {
  quote: 'Find what you love and let it kill you.',
  author: 'Charles Bukowski',
};

const today = new Date();
const dayOfYear = datefns.getDayOfYear(today);

fetch(`https://threesixsixquotes.herokuapp.com/quotes/${dayOfYear}`)
  .then(res => res.json())
  .then(res => {
    setTextToDom(res);
  })
  .catch(error => {
    console.log(error);
    setTextToDom(errorQuote);
  });

function setTextToDom(content) {
  const quoteText = content.quote;
  const authorText = content.author;

  if (quoteText.length > 93) {
    quote.classList.toggle('reduced');
  }
  quote.textContent = quoteText;
  author.textContent = authorText;
}
/*
STRETCH:
Implement small and subtle slide in menu to adjust theme, see github source/credit and be able to tweet the quote of the day. 
*/
