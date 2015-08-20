var value  = 2;
var sum = 0;

var sumOfValues = function(){
  while(value < 1000){
  if(value % 3 === 0 || value % 5 === 0){
      sum = sum + value;
      value++;
  } else {
      value++;
  }
  } 
  return sum;
};

sumOfValues();