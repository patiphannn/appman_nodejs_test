const threeSum = (arr, x, position = 0, result = []) => {
	const len = arr.length;
  if((position + 1) === (len -2)) {
  	return result;
  }

	const a1 = arr[position];

  for(let i=(position+1);i<(len - 1);i++) {
  	const diff = x - (a1 + arr[i]);
		let y = (i + 1),
    index = arr.indexOf(diff, y);

		while (index > -1) {
			result.push([position, i, index]);
			y = index + 1;
		  index = arr.indexOf(diff, y);
		}
  }

  return threeSum(arr, x, position + 1, result);
};

module.exports = { threeSum };
