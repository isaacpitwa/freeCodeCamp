function rot13(str) {
    let letters = str.split("");
    for (let i = 0; i < letters.length; i++) {
        const letterCode = letters[i].charCodeAt(0)
        if (letterCode >= 65 && letterCode <= 90) {
            const ciphered = letterCode + 13 > 90 ? 65 + ((letterCode + 13) - 91) : letterCode + 13
            // console.log(`PreviousCode: ${letters[i].charCodeAt(0)} Code :${ciphered}, Letter:${String.fromCharCode(ciphered)}`)
            letters[i] = String.fromCharCode(ciphered)
        }
    }
    return letters.join("");
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));

// Proposed Solution 
// Solution with Regular expression and Array of ASCII character codes
function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");
    for (var x in str) {
        if (regEx.test(str[x])) {
            // A more general approach
            // possible because of modular arithmetic
            // and cyclic nature of rot13 transform
            rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
        } else {
            rotCharArray.push(str[x].charCodeAt());
        }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG!");