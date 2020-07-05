// Initial Solution
function palindrome(str) {
    // Use replace to replace none alphanumeric with null
    let letterCollection  = str.replace(/[\W_]/g, '').toLowerCase().split('');
    let originalLength  = letterCollection.length;
    for (let i = 0;i<originalLength;i++){
        if( letterCollection.length > 1 && letterCollection.pop() != letterCollection.shift()){
            return false;
        }
    }

    return true;
  }

  
  
  palindrome("eye");
  console.log(palindrome("race car"))