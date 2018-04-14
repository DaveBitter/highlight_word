function insertString(str, index, value) {
	return str.substr(0, index) + value + str.substr(index);
}

function highlight(text, query) {
	if (!text) throw Error('No text provided');
	if (typeof text !== 'string') throw Error('Passed paramater is not a string');
	if (!query) throw Error('No query provided');
	if (typeof query !== 'string')
		throw Error('Passed paramater is not a string');

	return text
		.split(' ')
		.map(word => {
			const charIndex = word.indexOf(query);
			if (charIndex >= 0) {
				word = insertString(word, charIndex, '<mark class="wh-highlight">');
				word = insertString(word, word.length, '</mark>');
			}

			return word;
		})
		.join(' ');
}

module.exports = highlight;
