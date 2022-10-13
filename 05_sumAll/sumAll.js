const sumAll = function(num1, num2) {
    let total = 0;

    while((num1 > 0) && (num2 > 0) && (typeof(num1) === 'number') && (typeof(num2) === 'number')){
        if(num2 > num1) {
            for(let i = num1; i <= num2; i++){
                total += i;
            }
        } else {
            for(let i = num2; i <= num1; i++){
                total += i;
            }
        }
        return total;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
