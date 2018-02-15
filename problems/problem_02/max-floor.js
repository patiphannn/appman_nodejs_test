const maxFloor = (input, loop = 1) => {
  const diff = input - loop;

  if(input < loop) {
  	return loop - 1;
  } else {
  	return maxFloor(diff, loop + 1);
  }
};

module.exports = { maxFloor };
