const reverseString = function(str) {
    let string = '', j = str.length;
    for (i = j -1 ; i >= 0 ; i--){
        string += str[i];
    }
    return string;
};

reverseString('hello');

module.exports = reverseString;
