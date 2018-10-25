const filterDuplicates = (people) => {
  const reducer = (peopleMap, person) => {
    const { name, dob } = person;
    // Ignore for now the fact that we probably should't mutate parameters.
    // In this case, the accumulator is something we WANT to mutate.
    peopleMap[name + dob] = person;
    return peopleMap;
  };

  const peopleMap = people.reduce(reducer, {});
  return Object.keys(peopleMap).map(key => peopleMap[key]);
};

module.exports = filterDuplicates;
