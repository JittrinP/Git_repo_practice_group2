// team/utils.js — small shared helper functions. Add new helpers below.
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function shout(word) {
  return word[0].toUpperCase();
}

function whisper(word) {
  return word[0].toLowerCase() + word.slice(1);
}

export { capitalize, whisper ,shout };
