function gonoVote(array) {
  if (Array.isArray(array)) {
    let ha = 0;
    let na = 0;
    for (let vot of array) {
      vot === "ha" ? ha++ : na++;
    }

    if (ha > na) {
      return true;
    } else if (ha === na) {
      return "equal";
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}
