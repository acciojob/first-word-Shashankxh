function firstWord(s) {
  // Trim the string to remove leading and trailing whitespaces
  s = s.trim();
  
  // Find the index of the first space
  const firstSpaceIndex = s.indexOf(' ');

  // If there's no space, return the whole string
  if (firstSpaceIndex === -1) {
    return s;
  }

  // Otherwise, return the substring from the beginning to the first space
  return s.substring(0, firstSpaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
