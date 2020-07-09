function rot13(str) {
    let letters = str.split("");
    for(let i = 0; i< letters.length;i++){
        const  letterCode = letters[i].charCodeAt(0)
        if(letterCode>=65 && letterCode<=90){
            const  ciphered = letterCode+13 > 90? 65+((letterCode+13)-91):letterCode+13
            // console.log(`PreviousCode: ${letters[i].charCodeAt(0)} Code :${ciphered}, Letter:${String.fromCharCode(ciphered)}`)
            letters[i] = String.fromCharCode(ciphered)
        }
    }
    return letters.join("");
  }
  
  rot13("SERR PBQR PNZC");
  console.log(rot13("SERR PBQR PNZC"));