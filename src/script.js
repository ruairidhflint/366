import { getDayOfYear } from 'date-fns';
import db from './firebase';

const quote = document.querySelector('h1');
const author = document.querySelector('h3');
const today = new Date();
const dayOfYear = getDayOfYear(today);
const errorQuote = {
  quote: 'Find what you love and let it kill you.',
  author: 'Charles Bukowski',
};

let tweetContent = 'Check out daily quotes at https://366-quotes.netlify.com/'.replace(
  / /g,
  '%20',
);

/* Twitter */

const twitterLink = document.querySelector('#twitter-link');

twitterLink.href = `https://twitter.com/intent/tweet?text=${tweetContent}`;

/* Spinner */
const spinner = document.querySelector('.loader');

if (window.localStorage.getItem('dailyquote')) {
  const dailyQuote = JSON.parse(window.localStorage.getItem('dailyquote'));
  if (dailyQuote.date == dayOfYear) {
    setTextToDom(dailyQuote);
    tweetContent =
      dailyQuote.quote.replace(/ /g, '%20') +
      ' - ' +
      dailyQuote.author.replace(/ /g, '%20') +
      '\n \n (via https://366-quotes.netlify.com)';
    twitterLink.href = `https://twitter.com/intent/tweet?text=${tweetContent}`;
  } else {
    fetchData();
  }
} else {
  fetchData();
}

function fetchData() {
  db.collection('quotes')
    .where('dayOfYear', '==', today)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        const res = doc.data();
        setTextToDom(res);
      });
    })
    .catch(() => {
      setTextToDom(errorQuote);
    });
}

function setTextToDom(content) {
  const quoteText = content.quote;
  const authorText = content.author;

  if (quoteText.length > 93) {
    quote.classList.toggle('reduced');
  }
  spinner.style.display = 'none';
  quote.textContent = quoteText;
  author.textContent = authorText;
}

function setLocalStorage(quote){
  
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

/* Correct view height on mobile */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

