export function randomIndexExcluding(choices, excludedIndex) {
  const indexChoices = choices
    .map((_, i) => i)
    .filter((i) => i !== excludedIndex);
  return indexChoices[Math.floor(Math.random() * indexChoices.length)];
}
