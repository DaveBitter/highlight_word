(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function insertString(str, index, value) {
	return str.substr(0, index) + value + str.substr(index);
}

function highlight(text, query) {
	if (!text) throw Error('No text provided');
	if (typeof text !== 'string') throw Error('Passed paramater is not a string');
	if (!query) throw Error('No query provided');
	if (typeof query !== 'string') throw Error('Passed paramater is not a string');

	return text.split(' ').map(function (word) {
		var charIndex = word.indexOf(query);
		if (charIndex >= 0) {
			word = insertString(word, charIndex, '<mark class="wh-highlight">');
			word = insertString(word, word.length, '</mark>');
		}

		return word;
	}).join(' ');
}

module.exports = highlight;

},{}]},{},[1]);
