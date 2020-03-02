(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
console.log('hello')





/*
STRETCH:
Implement small and subtle slide in menu to adjust theme, see github source/credit and be able to tweet the quote of the day. 
*/
},{}]},{},[1]);
