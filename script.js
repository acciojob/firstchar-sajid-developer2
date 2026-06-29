function firstChar(text) {
  if (text === "") {
    return "";
  }

  let chars = text.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== " ") {
      return chars[i];
    }
  }

  return "";
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));