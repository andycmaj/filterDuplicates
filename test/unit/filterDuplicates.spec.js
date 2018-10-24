const expect = require('unexpected');

const filterDuplicates = require('../../lib/filterDuplicates');

const listWithoutDuplicates = [
  { name: 'andy cunningham', dob: '1/22/1981' },
  { name: 'bobby orr', dob: '5/4/1963' },
  { name: 'steve yzerman', dob: '11/30/1971' }
];
const listWithSingleNameDateDuplicte = [
  { name: 'andy cunningham', dob: '1/22/1981' },
  { name: 'steve yzerman', dob: '11/30/1971' },
  { name: 'steve yzerman', dob: '11/30/1971' },
  { name: 'bobby orr', dob: '5/4/1963' }
];
const listWithManyNameDateDuplicates = [
  { name: 'andy cunningham', dob: '1/22/1981' },
  { name: 'steve yzerman', dob: '11/30/1971' },
  { name: 'andy cunningham', dob: '1/22/1981' },
  { name: 'bobby orr', dob: '5/4/1963' },
  { name: 'steve yzerman', dob: '11/30/1971' },
  { name: 'bobby orr', dob: '5/4/1963' },
  { name: 'bobby orr', dob: '5/4/1963' }
];
const listWithOnlyDupeNames = [
  { name: 'andy cunningham', dob: '1/22/1981' },
  { name: 'andy cunningham', dob: '11/30/1971' },
  { name: 'andy cunningham', dob: '5/4/1963' }
];

const sorter = ({ name: nameA }, { name: nameB }) => {
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

describe('duplicateFilter', () => {
  it('returns exact list when list is empty', () => {
    expect(filterDuplicates([]), 'to equal', []);
  });

  it('returns exact list when there are no duplicates', () => {
    expect(filterDuplicates(listWithOnlyDupeNames), 'to equal', listWithOnlyDupeNames);
  });

  it('returns exact list when there is a dupe name with unique date', () => {
    expect(filterDuplicates(listWithoutDuplicates), 'to equal', listWithoutDuplicates);
  });

  it('returns list with only unique pairs when there is a full name/date duplicate', () => {
    expect(filterDuplicates(listWithSingleNameDateDuplicte), 'when sorted by', sorter, 'to equal', listWithoutDuplicates);
  });

  it('returns list with only unique pairs when there are many full name/date duplicate', () => {
    expect(filterDuplicates(listWithManyNameDateDuplicates), 'when sorted by', sorter, 'to equal', listWithoutDuplicates);
  });

  it('returns only uniques when given a large list with dupes', () => {
    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

    const largeListWithDuplicates = Array.from(new Array(1000), () => listWithoutDuplicates[getRandomInt(3)]);
    expect(filterDuplicates(largeListWithDuplicates), 'when sorted by', sorter, 'to equal', listWithoutDuplicates);
  });
});
