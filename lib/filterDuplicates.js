const filterDuplicates = (people) => {
  const reducer = (accum, current) => {
    if (!accum.includes(current)) {
      accum.push(current);
    }
    return accum;
  };

  const jsonPeople = people.map(person => JSON.stringify(person));
  const deduplicatedPeople = jsonPeople.reduce(reducer, []);
  return deduplicatedPeople.map(person => JSON.parse(person));
};

module.exports = filterDuplicates;
