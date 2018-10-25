const filterDuplicates = (people) => {
  const peopleMap = {};
  people.forEach(({ name, dob }) => {
    peopleMap[name + dob] = { name, dob };
  });
  return Object.keys(peopleMap).map(key => peopleMap[key]);
};

module.exports = filterDuplicates;
