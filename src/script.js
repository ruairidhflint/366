import { getDayOfYear } from 'date-fns';
import db from './firebase';

const quote = document.querySelector('h1');
const author = document.querySelector('h2');
const twitterLink = document.querySelector('#twitter-link');
const spinner = document.querySelector('.loader');

/* Correct view height on mobile */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const dayOfYear = getDayOfYear(new Date());
const errorQuote = {
  quote: 'Find what you love and let it kill you.',
  author: 'Charles Bukowski',
};
let tweetContent = 'Check out daily quotes at https://366-quotes.netlify.com/'.replace(/ /g, '%20');

twitterLink.href = `https://twitter.com/intent/tweet?text=${tweetContent}`;

function fetchData() {
  db.collection('quotes')
    .where('dayOfYear', '==', dayOfYear)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const res = doc.data();
        setTextToDom(res);
        setTwitterData(res);
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

function setTwitterData(quote) {
  tweetContent = quote.quote.replace(/ /g, '%20') + ' - ' + quote.author.replace(/ /g, '%20');
  twitterLink.href = `https://twitter.com/intent/tweet?text=${tweetContent}`;
}

/* Slide Up Menu  */

const button = document.querySelector('h3');
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

fetchData();
