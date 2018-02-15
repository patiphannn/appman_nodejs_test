const maxFloor = (input, loop = 1) => {
  if(input < loop) {
  	return loop - 1;
  } else {
  	return maxFloor(input - loop, loop + 1);
  }
};

module.exports = { maxFloor };
