const ftoc = function(inputTemp) {
    let convertedTemp = 0;

    convertedTemp = Math.round(((inputTemp - 32) * (5/9)) * 10)/10;
    return convertedTemp;
};

const ctof = function(inputTemp) {
    let convertedTemp = 0;

    convertedTemp = Math.round(((inputTemp * (9/5) + 32)) * 10) / 10;
    return convertedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
