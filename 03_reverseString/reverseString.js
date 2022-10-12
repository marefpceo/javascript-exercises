const reverseString = function(stringInput) {
    let str = stringInput;
    const stringArray = str.split("");

    let backwardString = stringArray.reverse();
    return backwardString.join("");

};

// Do not edit below this line
module.exports = reverseString;
