function revealFact(insectType) {
  let factText;
  switch (insectType) {
    case "fact1":
      factText = "In Colonies, bees are divided into three types: Queen, Worker, and Drone. Queens run the hive and produce chemicals to guide the behavior of the other bees. Workers are all female bees and are responsible for food, building and protecting, and circulating air by beating their wings. Drones are the male bees, and their purpose is to mate with the new queen. ";
      break;
    case "fact2":
      factText = "During the summer, the queen bee can lay up to 2,500 eggs per day!";
      break;
    case "fact3":
      factText = "Honeybees can fly up to 15 miles per hour!";
      break;
    default:
      factText = "Wow! Insects are amazing!";
  }
  document.getElementById("fact-text").innerHTML = factText;
}