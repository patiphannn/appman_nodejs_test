const axios = require('axios');

const cryptoDetails = async (symbols = []) => {
  let result = [];
  let res = null;
  for(let i=0;i<symbols.length;i++) {
    res = await axios(`https://coinbin.org/${symbols[i]}`);
    result.push(res.data.coin);
  }

  return result;
};

module.exports = { cryptoDetails };
