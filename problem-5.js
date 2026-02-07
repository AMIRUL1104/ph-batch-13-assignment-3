function analyzeText(str) {
  if (typeof str !== "string" || str.trim().length === 0) {
    return "Invalid";
  } else {
    const tukroTukro = str
      .split("")
      .filter((letter) => {
        return letter !== " ";
      })
      .join("").length;

    const kochukata = str.split(" ");
    let longwords = "";

    for (let word of kochukata) {
      if (word.length > longwords.length) {
        longwords = word;
      }
    }

    return { longwords: longwords, token: tukroTukro };
  }
}
