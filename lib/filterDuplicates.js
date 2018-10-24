const filterDuplicates = (people) => {

  const comparer = ({ name, dob }) =>
    ({ name: existingName, dob: existingDob }) => existingName === name && existingDob === dob;

  const reducer = (accum, current) => {
    // TODO: probably a bit more efficient to memoize the currentComparer. in this
    // case, we're not, so we'll end up building the same comparer multiple times
    // if the input is duplicate-dense
    const currentComparer = comparer(current);
    if (!accum.find(currentComparer)) {
      accum.push(current);
    }
    return accum;
  };

  return people.reduce(reducer, []);
};

module.exports = filterDuplicates;
