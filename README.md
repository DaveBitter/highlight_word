# Highlight Word

This tiny package wraps strings in a text you pass it in a mark. You can then style the mark to your liking.

## Example usage

```js
const highlightWord = require('highlight-word);

const el = document.getElementById('example');
const text = el.textContent;
const word = 'example';

el.innerText = highlightWord(text, word);
```

Highlight Word accepts two parameters. The first parameter is the source text where you want to highlight the word. The second parameter is the word you want to highlight. The function returns your original text with found words wrapped like this:

`<mark class='wh-highlight'>example</mark>`.
