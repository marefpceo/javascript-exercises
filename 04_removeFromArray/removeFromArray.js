const removeFromArray = function() {

    let inputArray = arguments[0];   
    let valuePosition;
    let modifiedArray;

    for (let i = 1; i < arguments.length; i++){
        while(inputArray.indexOf(arguments[i]) !== -1){
            valuePosition = inputArray.indexOf(arguments[i]);
            modifiedArray = inputArray.splice(valuePosition,1);
        }
    }
    return inputArray;     
};

// Do not edit below this line
module.exports = removeFromArray;
