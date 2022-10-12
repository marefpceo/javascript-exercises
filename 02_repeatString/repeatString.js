const repeatLength = 3;

const repeatString = function(str, repeatLength) {
    let hey = '';
    if(repeatLength < 0) {
        return 'ERROR';
    }
    
    for(let i = 0; i < repeatLength; i++){
        hey += str;
    }
    return hey;
};

// Do not edit below this line
module.exports = repeatString;
