const add = function(input1, input2) {
	let total = input1 + input2
  return total;
};

const subtract = function(input1, input2) {
	let subTotal = input1 - input2;
  return subTotal;
};

const sum = function(input) {

  return input.reduce((a, b) => a + b, 0);
};

const multiply = function(input) {

  return input.reduce((a, b) => a*b, 1);
  
};

const power = function(...input) {
	return input.reduce((a, b) => a**b);
};

const factorial = function(input) {
  let inputArray = []; 

  if(input === 0) {
    return 1;
  }else {
    for (let i = 1; i <= input; i++) {
      inputArray.push(i);
    }
  
    const total = inputArray.reduce((a, b) => a * b, 1);
    return total;
  } 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
