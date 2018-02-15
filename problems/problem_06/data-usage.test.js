const { expect } = require('chai');
const { dataUsage } = require('./index');

describe('Problem 06 - data-usage', () => {
  const testcases = [
    { username: 'user03', total: 19387, average: 1938.7 },
    { username: 'user01', total: 15232, average: 1384.7272727272727 },
    { username: 'user02', total: 15897, average: 1445.1818181818182 }
  ];

  const result = dataUsage();

  it(`Problem 06 - data-usage`, () => {
    expect(result).to.be.an('array');
    expect(result.length).to.be.eq(3);
  });

  testcases.map((tc, k) => {
    it(`${JSON.stringify(tc)}`, () => {
      expect(result[k].username).to.be.eq(tc.username);
      expect(result[k].total).to.be.eq(tc.total);
      expect(result[k].average).to.be.eq(tc.average);
    });
  });
});
