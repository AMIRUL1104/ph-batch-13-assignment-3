function finalScore(omr) {
  const right = omr.right;
  const wrong = omr.wrong;
  const skip = omr.skip;

  if (right + wrong + skip !== 100) {
    return "Invalid";
  } else {
    const negMarks = wrong * 0.5;
    const totalMarks = 100 - (wrong + negMarks + skip);
    return Math.round(totalMarks);
  }
}
