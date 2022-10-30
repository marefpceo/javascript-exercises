const palindromes = function (input) {
    let inputString = input.toLowerCase().replace(/[^A-Za-z]/g, "");
    let inputArray = inputString.split('');
    let reverseArray = [...inputArray].reverse();

    let isMatch = "";
    if(inputArray.length !== reverseArray.length) {
        return false;
    }else {
        for (let i = 0; i < inputArray.length; i++){
            if(inputArray[i] !== reverseArray[i]){
                return false;
            }else {
                isMatch = true;
            }
        }
        return isMatch;
    }
};

// Do not edit below this line
module.exports = palindromes;
