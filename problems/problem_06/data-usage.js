const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  const res = raw.split('\n').reduce((o, e) => {
    const data = e.split(',');
    const username = data[1].split('=')[1];
    const value = Number(data[2].split('=')[1]);

    if(!o[username]) {
      o[username] = {
        day: {},
        total: 0
      };
    }

    o[username].total = o[username].total + value;
    o[username].day[data[0]] = 1;

    return o;
  }, {});

  return Object.keys(res).map((e) => {
    return {
      username: e,
      total: res[e].total,
      average: res[e].total / Object.keys(res[e].day).length
    }
  });
};

module.exports = { dataUsage };
