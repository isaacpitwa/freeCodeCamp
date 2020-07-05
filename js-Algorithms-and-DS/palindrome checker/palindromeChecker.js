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

// proposed Solution

function palindromeSolution(str) {
    // Use  Array split ,reverse join  method  for a direct comparison
    return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  }

  
  palindrome("eye");
  console.log(palindromeSolution("race car"))