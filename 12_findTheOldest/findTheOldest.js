const findTheOldest = function(input) {

    const currentYear = new Date().getFullYear();
    const sortedArray = input.sort(compare);

    function compare(a, b) {

        const lastAge = ((a.yearOfDeath || currentYear) - a.yearOfBirth);
        const nextAge = ((b.yearOfDeath || currentYear) - b.yearOfBirth);

        let comparison = 0;

        if(lastAge < nextAge) {
            comparison = 1;
        }else if(lastAge > nextAge) {
            comparison = -1;
        }
        return comparison;
    } 
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
