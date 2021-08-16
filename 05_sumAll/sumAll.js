const sumAll = function(num1, num2) {
    //num1 = Math.abs(num1);
    //num2 = Math.abs(num2);
    let sum = 0, error = 'ERROR';
    if(Math.sign(num1)==1 && Math.sign(num2)==1 && 
       typeof num1 == 'number' && typeof num2 == 'number'){
        if(num1>num2){
            for(i = num2; i <= num1; i++){
                sum = sum + i;
            }
        }else if(num2>num1){
            for(i = num1; i <= num2; i++){
                sum = sum + i;
            }
        }
        return sum;
    }
    return error;
};

sum = sumAll(5, 10);

module.exports = sumAll;
