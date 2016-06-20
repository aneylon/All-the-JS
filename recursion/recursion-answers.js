console.log('recursion answers');

// write a function called countDownFrom that takes a number and logs that number and every other number down to 0 to the console.

function countDownFrom(number){
  if(number <= 0){
    return;
  }
  console.log(number);
  countDownFrom(number-1);
}

// write a function called power that takes base and eponent as arguments and recursively computes the base raised to the provided exponent

function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

// Write a function that takes a nested array of any depth and returns it flattened to one level

function flatten(arr){
	var output = [];
	function inner(a){
		for(var i = 0; i < a.length; i++){
			if(Array.isArray(a[i]))
				inner(a[i]);
			else
				output.push(a[i]);
		}
	}
	inner(arr);
	return output;
}

