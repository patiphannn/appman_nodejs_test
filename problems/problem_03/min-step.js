const minStep = input => {
  if(input === 1) {
    return 0;
  } else if((input % 2) === 0){
    return minStep(input / 2) + 1
  } else {
    return Math.min(minStep(input + 1), minStep(input - 1)) + 1
  }
};
module.exports = { minStep };
