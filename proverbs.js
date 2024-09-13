const proverbs = [
  "Birds of the same feather flock together – people with common characteristics always end up together.",
  "You reap what you sow – your results are just consequences of your own actions.",
  "He who plays the piper calls the tune – when one has to act according to a superior’s wishes.",
  "A drowning man catches all straws – a person in difficulty will make use of any help he receives.",
  "Well begun is half done – just starting a venture successfully is enough to fulfil it completely.",
  "A bird in hand is better than two in the bush – better to have something than having nothing at all.",
  "Too many cooks spoil the broth – plans often fail when too many people work on it together.",
  "The proof the pudding is in its eating – we can know whether something is good or bad only after trying it.",
  "Too many cooks spoil the broth – plans often fail when too many people work on it together.",
];

button = document.getElementById("btn");

function getRandomProverbs() {
  const randomIndex = Math.floor(Math.random() * proverbs.length);
  return proverbs[randomIndex];
}

button.addEventListener("click", () => {
  const proverb = getRandomProverbs();
  document.getElementById("display-proverbs").innerText = proverb;
});
