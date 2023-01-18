//Entry point AKA Controller
function getValues() {
    let inputString = document.getElementById('userString').value;

    let inputStringLower = inputString.toLowerCase()

    let inputStringLowerNoSpace = inputStringLower.split(" ").join("");

    let reversedString = checkforPalindrome(inputStringLowerNoSpace);

    displayResults(reversedString);

}

//Logic Function
//Reverse the String
function checkforPalindrome(userString) {
    let revString = '';

    // reverse the string
    for (let i = userString.length - 1; i >= 0; i = i - 1) { // starting value, condition 
        revString += userString[i];
    }

    return revString;

}


//View Function
function displayResults(revString) {

    document.getElementById('results').textContent = revString;
 
    if (revString == inputStringLowerNoSpace) {

        document.getElementById('alertCorrect').classList.remove('invisible');
    }

    if (revString != inputStringLowerNoSpace) {

        document.getElementById('alertIncorrect').classList.remove('invisible');
    }

}