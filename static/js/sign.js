
function onChange() {
    const pword = document.querySelector('input[name=password]');
    const cnfpword = document.querySelector('input[name=confirm]');
    const password = document.querySelector('input[name=password]').value;


    var length = password.length;

    console.log(length);
    if (cnfpword.value === pword.value) {
      cnfpword.setCustomValidity('');
    } else {
      cnfpword.setCustomValidity('Password did not match');
    }

    if (length>=8 && length<=16){

      pword.setCustomValidity('');

    }

    else if(length<8){

      pword.setCustomValidity('Password length should be atleast 8 characters');
    }
    

  else{

    pword.setCustomValidity('Password length should not be exceed 16 characters');
  }

    
  }