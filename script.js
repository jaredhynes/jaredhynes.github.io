function revealFact(insectType) {
  let factText;
  switch (insectType) {
    case "fact1":
      factText = "Butterflies can taste with their feet!";
      break;
    case "fact2":
      factText = "There are more species of beetles than any other animal group!";
      break;
    case "fact3":
      factText = "Honeybees can fly up to 15 miles per hour!";
      break;
    default:
      factText = "Wow! Insects are amazing!";
  }
  document.getElementById("fact-text").innerHTML = factText;
}