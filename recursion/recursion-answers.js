// console.log('recursion answers');

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

// Write a function that takes a string and produces an array of all possible anagrams of that string

function allAnagrams(str){
	var anagrams = []
	var getAnagrams = function(inputStr, anagram){
	  anagram = anagram || ''
	  if(inputStr === ''){
	    anagrams.push(anagram)
	  } else {
  		for(var i = 0; i < inputStr.length; i++){
  		  getAnagrams(inputStr.slice(0,i)+inputStr.slice(i+1), anagram+inputStr[i]);
  		}
	  }
	}
	getAnagrams(str)
  return anagrams
}

// Write a function that takes a number and produces an array of strings indicating all possible plays for a game of Rock Paper Scissors of that number of rounds.

function rockPaperPermutation(roundCount){
    var answer = [];
    if (roundCount === 0)
        return answer;
    var things = ["r","p","s"];
    var temp = [];
    function permutate(rounds){

        if (rounds <= 0){
            answer.push(temp.join(''));
            return;
        }

        for ( var i = 0; i < things.length; i++) {
            temp.push(things[i]);
            permutate(rounds-1);
            temp.pop();
        }
    }

    permutate(roundCount)
    return answer;
}
