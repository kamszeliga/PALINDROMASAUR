//Entry point AKA Controller
function getValues() {
    let inputString = document.getElementById('userString').value;

    let inputStringLower = inputString.toLowerCase()

    let inputStringNoSpace = inputStringLower.split(" ").join("");

    let inputClean = inputStringNoSpace.replace(/[.,\/#@!$%\^&\*;:{}=\-_`~()]/g, "");

    let reversedString = checkforPalindrome(inputClean);

    displayResults(reversedString);

}


function checkforPalindrome(userString) {
    let revString = '';

    // reverse the string
    for (let i = userString.length - 1; i >= 0; i = i - 1) {
        revString += userString[i];
    }
    // assign palindrome y/n value here???
    if (revString == userString) {
        return true;
    }

    if (revString != userString) {
        return false;
    }
    //return palindromeT/F ??

    return revString == userString;

}


//incorrect or correct pop up w/ results
function displayResults(revString) {

    // THIS IS MESSY BUT IT WORKS SO ITS GOOD FOR NOW 

    let inputString = document.getElementById('userString').value;

    let inputStringLower = inputString.toLowerCase()

    let inputStringNoSpace = inputStringLower.split(" ").join("");

    let inputClean = inputStringNoSpace.replace(/[.,\/#@!$%\^&\*;:{}=\-_`~()]/g, "");

    let reversedString = checkforPalindrome(inputClean);

    document.getElementById('resultsTrue').textContent = inputClean;
    document.getElementById('resultsFalse').textContent = inputClean;

    if (revString == true) {

        document.getElementById('alertCorrect').classList.remove('invisible');
    }

    if (revString == false) {

        document.getElementById('alertIncorrect').classList.remove('invisible');
    }

    // if (revString) {
    //     // it's true!
    // }

    // if (!revString) {
    //     // it's false!
    // }
}