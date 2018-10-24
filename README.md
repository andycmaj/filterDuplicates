# Filter Dupes

## Summary

a function that filters duplicate objects that look like 

```json
{ name: 'andy cunningham', dob: '1/22/1891' }
```

## Assumptions

* `name` comparisons will be case sensitive
* all `names` will be lower case
* `dob` format doesn't matter

## Tests

you can run tests using `npm test`

```bash
╰ npm test

> nodestuff@1.0.0 test /private/tmp/nodestuff
> yarn run test:unit

yarn run v1.7.0
$ NODE_ENV=test mocha --recursive --check-leaks test/unit/


  duplicateFilter
    ✓ returns exact list when list is empty
    ✓ returns exact list when there are no duplicates
    ✓ returns exact list when there is a dupe name with unique date
    ✓ returns list with only unique pairs when there is a full name/date duplicate
    ✓ returns list with only unique pairs when there are many full name/date duplicate
    ✓ returns only uniques when given a large list with dupes


  6 passing (15ms)

✨  Done in 0.49s.
```
