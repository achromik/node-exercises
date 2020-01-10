const sortArray = array => {
  const numberSorted = array
    .filter(item => typeof item === "number")
    .sort((a, b) => (a > b ? 1 : -1));

  const stringLengthSorted = array
    .filter(item => typeof item === "string")
    .sort((a, b) => (a.length > b.length ? 1 : -1));

  return numberSorted.concat(stringLengthSorted);
};

module.exports = sortArray;
