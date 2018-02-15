const { expect } = require('chai');
const { bangkokForecast } = require('./index');

describe('Problem 05 - bangkok-forecast', () => {
  it(`Problem 05 - bangkok-forecast`, () => {
    bangkokForecast()
      .then((result) => {
        // console.log('result: ', result);
        expect(result).to.be.an('array');
        expect(result.length).to.be.eq(7);

        expect(result[0]).to.be.an('object');
        expect(result[0].date).to.be.an('string');
        expect(result[0].minTemp).to.be.an('number');
        expect(result[0].maxTemp).to.be.an('number');
      });
  });
});
