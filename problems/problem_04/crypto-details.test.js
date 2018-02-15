const { expect } = require('chai');
const { cryptoDetails } = require('./index');

describe('Problem 04 - crypto-details', () => {
  it(`Problem 04 - crypto-details`, () => {
    cryptoDetails(['eth', 'xrp'])
      .then((result) => {
        // console.log('result: ', result);
        expect(result).to.be.an('array');
        expect(result.length).to.be.eq(2);
        expect(result[0].ticker).to.be.eq('eth');
        expect(result[1].ticker).to.be.eq('xrp');
      });
  });
});
