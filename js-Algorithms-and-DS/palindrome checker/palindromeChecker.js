function palindrome(str) {
    let letterCollection  = str.split('');
    let originalLength  = letterCollection.length;
    for (let i = 0;i<originalLength;i++){
        if( letterCollection.length > 1 && letterCollection.pop() != letterCollection.shift()){
            return false;
        }
    }

    return true;
  }
  
  
  
  palindrome("eye");
  console.log(palindrome("eyee"))