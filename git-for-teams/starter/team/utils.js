// team/utils.js — small shared helper functions. Add new helpers below.
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function shout(word) {
  return word.toUpperCase();
}

function whisper(word) {
  return word.toLowerCase();
}

export { capitalize, whisper, shout };
