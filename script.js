"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var quote = document.querySelector('h1');
var author = document.querySelector('h3');
var today = new Date();
var dayOfYear = date_fns_1.getDayOfYear(today);
var errorQuote = {
    quote: 'Find what you love and let it kill you.',
    author: 'Charles Bukowski',
};
var tweetContent = 'Check out daily quotes at https://366-quotes.netlify.com/'.replace(/ /g, '%20');
/* Twitter */
var twitterLink = document.querySelector('#twitter-link');
twitterLink.href = "https://twitter.com/intent/tweet?text=" + tweetContent;
/* Spinner */
var spinner = document.querySelector('.loader');
if (window.localStorage.getItem('dailyquote')) {
    var dailyQuote = JSON.parse(window.localStorage.getItem('dailyquote'));
    if (dailyQuote.date == dayOfYear) {
        setTextToDom(dailyQuote);
        tweetContent =
            dailyQuote.quote.replace(/ /g, '%20') +
                ' - ' +
                dailyQuote.author.replace(/ /g, '%20') +
                '\n \n (via https://366-quotes.netlify.com)';
        twitterLink.href = "https://twitter.com/intent/tweet?text=" + tweetContent;
    }
    else {
        fetchData();
    }
}
else {
    fetchData();
}
function fetchData() {
    fetch("https://threesixsixquotes.herokuapp.com/quotes/" + dayOfYear)
        .then(function (res) { return res.json(); })
        .then(function (res) {
        setTextToDom(res);
        var localStorageData = JSON.stringify({
            date: dayOfYear,
            quote: res.quote,
            author: res.author,
        });
        window.localStorage.setItem('dailyquote', localStorageData);
        tweetContent =
            res.quote.replace(/ /g, '%20') +
                ' - ' +
                res.author.replace(/ /g, '%20') +
                '\n \n (https://366-quotes.netlify.com)';
        twitterLink.href = "https://twitter.com/intent/tweet?text=" + tweetContent;
    })
        .catch(function () {
        setTextToDom(errorQuote);
    });
}
function setTextToDom(content) {
    var quoteText = content.quote;
    var authorText = content.author;
    if (quoteText.length > 93) {
        quote.classList.toggle('reduced');
    }
    spinner.style.display = 'none';
    quote.textContent = quoteText;
    author.textContent = authorText;
}
/* Pop Up Bar Functionality */
var button = document.querySelector('h6');
var menuBar = document.querySelector('.popup-bar');
var container = document.querySelector('.container');
button.addEventListener('click', openMenu);
container.addEventListener('click', closeMenu);
function openMenu() {
    menuBar.classList.add('height');
}
function closeMenu() {
    menuBar.classList.remove('height');
}
/* Correct view height on mobile */
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh + "px");
