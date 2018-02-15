const isEqual = (arrs, arr) => {
	for(let i=0;i<arrs.length;i++) {
  	if(arrs[i].sort().toString() == arr.sort().toString()) {
    	return true;
    }
  }

  return false;
}

const threeSum = (arr, x, position = 0, result = []) => {
  if((position + 1) === arr.length) {
  	return result;
  }

	const a1 = arr[position];

  for(let i=(position+1);i<arr.length;i++) {
  	const diff = x - (a1 + arr[i]);
    const index = arr.indexOf(diff, 0);

    if(index > -1 && index !== position && index !== i) {
    	if(!isEqual(result, [position, i, index])) {
      	result.push([position, i, index]);
      }
    }
  }

  return threeSum(arr, x, position + 1, result);
};

module.exports = { threeSum };
