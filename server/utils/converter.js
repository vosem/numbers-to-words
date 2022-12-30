var config = require('../configs/config.json');

var convert = function(numbers) {
    var length = numbers.length;
    var output = [];

    if(!length) {
        return [];
    }

    var getCombination = function(index, combination) {
        if(index === length) {
            output.push(combination);
        } else {
            var letters = config[numbers[index]];

            for (var i = 0; i < letters.length; i++)
            getCombination(index + 1, combination + letters[i]);
        }
    };

    getCombination(0, "");

    return output;
};

module.exports = convert;
