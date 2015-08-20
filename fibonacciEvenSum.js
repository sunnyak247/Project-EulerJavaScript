var numberSequence = [1,2];
var i = 1;
sum = 2;
var fibonacciSequenceEvenSum = function(){
    while(numberSequence[i] < 4000000){
        var newNumber = (numberSequence[i] + numberSequence[i - 1]);
        numberSequence.push(newNumber);
        if(newNumber % 2 === 0){
            sum = sum + newNumber;
            i++;
        } else {
           i++; 
        }
    }
    return sum;
};

console.log(fibonacciSequenceEvenSum());