//Problem 1: Let’s play a mind game------------------------------------------------------------------------------------------------

function mindGame(posNumber) {

    //this function takes the positive number and returns the result according to the given mathematical formula

    if (typeof posNumber === 'number' && posNumber >= 0) {
        const result = (posNumber * 3 + 10) / 2 - 5;
        return result;

    }
    else {
        return "Please enter a valid and positive number";
    }
}



//Problem 2: Finding even or odd------------------------------------------------------------------------------------------------


function evenOdd(inString) {
    //this function takes the string as input and returns odd if the length of string is odd and returns even if the length of the string is even
    if (typeof inString === "string") {
        if (inString.length % 2 === 0) {
            return "even";
        }
        else { return "odd"; }


    }
    else {
        return "please enter a string";
    }

}




//Problem 3: Is Less or Greater than seven----------------------------------------------------------------

function isLGSeven(nSeven) {
    // this function takes the number input and subtracts it by seven. if the result of subtraction is  greater than 7 then it returns twice of the input value and if less than seven then it returns only the subtracted value
    if (typeof nSeven === 'number') {
        let subtraction = nSeven - 7;
        if (subtraction < 7) {
            return subtraction;
        }
        else {
            return nSeven * 2;
        }


    }
    else {
        return "please enter a number";
    }
}




//Problem 4: Finding Bad data------------------------------------------------------------------------


function findingBadData(sArray) {
    //this function counts the number of negative value from the array and returns it as  bad data
    if (Array.isArray(sArray) === true) {
        let badData = 0;
        for (i = 0; i < sArray.length; i++) {
            if (sArray[i] < 0) {
                badData += 1;
            }
        }
        return badData;
    }
    else {
        return "please input an array";

    }

}



//Problem 5: Convert your gems into diamond----------------------------------------------------------------------



function gemsToDiamond(firstF, secondF, thirdF) {

    // this function takes the number of gems of three friends and converts them into diamond and the total amount of diamond. if the number of diamond is greater than 2000 then it substrates the 2000 diamond from the total value
    const firstFd = 21;
    const secondFd = 32;
    const thirdFd = 43;

    if (typeof firstF === 'number' && typeof secondF === 'number' && typeof thirdF === 'number') {
        let sum = firstF * firstFd + secondF * secondFd + thirdF * thirdFd;
        if (sum > 200) {
            return sum - 2000;
        }
        else {
            return sum;
        }
    }
    else {
        return "please enter three numbers";
    }

}
