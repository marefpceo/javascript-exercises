const fibonacci = function(inputVal) {
    let input = Number(inputVal);

    if(input < 0){
        return "OOPS";
    }else if (input <= 1){
        return input;
    }

    const result = [0, 1];

    for (let i = 2; i <= input; i++){
        result[i] = result[i - 1] + result[i - 2];
    }

    return result[result.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
