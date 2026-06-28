function firstChar(text) {
  let i = 0;

  while (i < text.length && text[i] === " ") {
    i++;
  }

  return i < text.length ? text[i] : "";
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));