const datefns = require('date-fns');

test('works with first day of year', () => {
    let firstJan = datefns.getDayOfYear(new Date(2020, 0, 1))
    expect(firstJan).toEqual(1);
  });

  test('works with last day of year', () => {
    let lastDec = datefns.getDayOfYear(new Date(2020, 11, 31))
    expect(lastDec).toEqual(366);
  });

  test('supports leap year', () => {
    let lastDec = datefns.getDayOfYear(new Date(2020, 1, 29))
    expect(lastDec).toEqual(60);
  });