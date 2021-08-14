const repeatString = function(string,num) {
    let i = 0, string2 = '', error = 'ERROR';
    if(!(num<0)){
        for (i = 0; i < num; i ++){
            string2 = string2 + string;
        }
        return string2;
    }
    return error;
};

repeatString('hey',3);

module.exports = repeatString;
