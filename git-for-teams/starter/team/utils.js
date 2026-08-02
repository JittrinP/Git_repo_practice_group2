// team/utils.js — small shared helper functions. Add new helpers below.
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function whisper(word) {
  return word.toLowerCase();
}

function shout(word) {
  return word.toUpperCase();
}

export { capitalize, whisper, shout };
