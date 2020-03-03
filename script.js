const datefns = require('date-fns');
const quote = document.querySelector('h1');
const author = document.querySelector('h3');
const today = new Date();
const dayOfYear = datefns.getDayOfYear(today);
const errorQuote = {
  quote: 'Find what you love and let it kill you.',
  author: 'Charles Bukowski',
};

if (window.localStorage.getItem('dailyquote')) {
  const dailyQuote = JSON.parse(window.localStorage.getItem('dailyquote'));
  if (dailyQuote.date == dayOfYear) {
    setTextToDom(dailyQuote);
  } else {
    fetchData();
  }
} else {
  fetchData();
}

function fetchData() {
  fetch(`https://threesixsixquotes.herokuapp.com/quotes/${dayOfYear}`)
    .then(res => res.json())
    .then(res => {
      setTextToDom(res);
      const localStorageData = JSON.stringify({
        date: dayOfYear,
        quote: res.quote,
        author: res.author,
      });
      window.localStorage.setItem('dailyquote', localStorageData);
    })
    .catch(error => {
      console.log(error);
      setTextToDom(errorQuote);
    });
}

function setTextToDom(content) {
  const quoteText = content.quote;
  const authorText = content.author;

  if (quoteText.length > 93) {
    quote.classList.toggle('reduced');
  }
  quote.textContent = quoteText;
  author.textContent = authorText;
}


/* Pop Up Bar Functionality */

const button = document.querySelector('h6');
const menuBar = document.querySelector('.popup-bar');
const container = document.querySelector('.container');

button.addEventListener('click', openMenu);
container.addEventListener('click', closeMenu);

function openMenu() {
  menuBar.classList.add('height');
}

function closeMenu() {
  menuBar.classList.remove('height');
}

/* Twitter */

const twitterLink = document.querySelector('#twitter-link');

const tweetableQuote =
  quote.textContent.replace(/ /g, '%20') +
  ' - ' +
  author.textContent.replace(/ /g, '%20');

twitterLink.href = `https://twitter.com/intent/tweet?text=${tweetableQuote}`;
