var isPrime = function(number){
      if(number <= 1){
      return(false);
      }
    //only numbers > 1 can be prime.
    
    for(var idx = 2; idx <= (number/2); idx++){
        if(number%idx === 0) {
            return(false);
        }
        return(true);
    }
};



var factorsOfNumber = function(number) {
   // if(number > 1000){
//        return("The maximum number considered is 1000. Kindly try another number from 2 to 1000!");
  //  }
    var factor = number/2;
    factor_list = [];
    for(var i = 2; i <= factor; i++){
        if((number%i === 0) && isPrime(i)){
            factor_list.push(i);
        }
	}
	
	return(factor_list[factor_list.length-1]);
};

factorsOfNumber(11110011);

/*
var isPrime = function(number) {
	if(number <= 1) {
		return(false);
		//("Only numbers greater than one can be prime")
	}
	var h = 2;
	while(h <= (number/2)) {
		if(number%h === 0) {
			return(false);
		} 
		h++;
	}
	return(true);
};
	
var factorsOfNumber = function(number) {
	if(number > 1000){
		return("The maximum number considered is 1000. Kindly try another number from 2 to 1000!");
	}
	var factor = number/2;
	var factor_list = [];
	for(var i = 2; i <= factor; i++){
		if((number%i === 0) && isPrime(i)){
			factor_list.push(i);
		}
	}
	return(factor_list[factor_list.length-1]);
};			
			
*/			
			
/*
var isPrime = function (number) {
    var limit = Math.floor(Math.sqrt(number));
    for (var i = 2; i < limit; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

var prime = function prime(initialValue) {
    var primeFactors = [];
    var maxPrimeFactor = 1;
    var value = initialValue;
    while (true) {
        //console.log("value: " + value);
        if (value === 1) {
            break;
        }
        var foundPrime = false;
        for (var i = 2; i < value; i++) {
            if (value % i === 0 && isPrime(i)) {
                if (i > maxPrimeFactor) {
                    maxPrimeFactor = i;
                }
                //console.log(i);
                primeFactors.push(i);
                value /= i;
                foundPrime = true;
                break;
            }
        }
        if (!foundPrime) {
            if (isPrime(value)) {
                if (value > maxPrimeFactor) {
                    maxPrimeFactor = value;
                }
                //console.log(value);
                primeFactors.push(value);
            } else {
                console.log("Strange: " + value + " is should be a prime but is not");
            }
            break;
        }

    }
    var checkPrimeFactor = 1;
    for (var index = 0; index < primeFactors.length; ++index) {
        checkPrimeFactor *= primeFactors[index];
    }
    if (checkPrimeFactor != initialValue) {
        console.log(checkPrimeFactor + " is different than " + initialValue);
        console.log("A problem occurs when decomposing " + initialValue + " into its prime factors: " + primeFactors);
    } else {
        //console.log("The greatest prime factor of " + initialValue + " is " + maxPrimeFactor);
    }
    return maxPrimeFactor;
}

var getInputValue = function (elementName) {
    var inputField = document.getElementsByName(elementName)[0];
    var value = inputField.value;
    if (value === "") {
        return inputField.placeholder;
    }
    return value;
}

var setAnswer = function (elementId, value) {
    var answerElement = document.getElementById(elementId);
    answerElement.innerHTML = "The answer is <strong>" + value + "</strong>.";
    answerElement.style.display = "inline";
}

var setCallback = function (operation) {
    var label = operation.name;
    var inputLabel = label + "Input";
    var callback = function () {
        setAnswer(label + "Answer", operation(getInputValue(inputLabel)));
        return false;
    };
    document.getElementById(label).onclick = callback;
    document.getElementsByName(inputLabel)[0].onkeydown = function(event) {
        event = event || window.event;
        var keyCode = event.which || event.keyCode;
        console.log(keyCode);
        if (keyCode == 13) {
            callback();
            return false;
        }
        return true;
    };
};

*/