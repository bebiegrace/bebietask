

const form = document.querySelector('#create-account-form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const bdateInput = document.querySelector('#bdate');
const pnumberInput = document.querySelector('#pnumber');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');


form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        alert("Account Created!")
        
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //firstname
    if(fnameInput.value.trim()==''){
        setError(fnameInput, 'Name can not be empty');
        swal({
             title: "Fields Empty!!!",
             text: "Please try to check!",
             icon: "warning",
             button: "ok",
            });
    }else if(fnameInput.value.trim().length <5 || fnameInput.value.trim().length > 15){
        setError(fnameInput, 'Invalid name');
        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
    }else if(!isNameValid(fnameInput.value)){

        setError(fnameInput,'Invalid name');
        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
     } else {
        setSuccess(fnameInput);
    }

     //lastname
     if(lnameInput.value.trim()==''){
        setError(lnameInput, 'Name can not be empty');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(lnameInput.value.trim().length <5 || lnameInput.value.trim().length > 15){
        setError(lnameInput, 'Invalid name');

        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
    }else if(!isNameValid(lnameInput.value)){

        setError(lnameInput,'Invalid name');
        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
        }
    
    else {
        setSuccess(lnameInput);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(!isEmailValidi(emailInput.value)){
        setError(emailInput, 'Provide valid email address');
        swal({
            title: "Please enter a valid email!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
        
    }else{
        
        setSuccess(emailInput);
    }

      //birthdate
      if(bdateInput.value.trim()==''){
        setError(bdateInput, 'Birthdate cannot be empty');
        swal({
            title: "Fields Empty!!!",
            text: "Please check!",
            icon: "warning",
            button: "ok",
           });

      

    }else if(getAge < 18){
        setError(bdateInput, 'Age not qualified');
        swal({
            title: "Your Age is age!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
           
   
         } else{
        setSuccess(bdateInput);
    }

      //Phone Number
      if(pnumberInput.value.trim()==''){
        setError(pnumberInput, 'Phone number cannot be empty');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });

     
    } else if(!isPhonenumValide(pnumberInput.value)){
        setError(pnumberInput, 'Phone number  Invalid!');
        swal({
            title: "Please enter a valid phone number!",
            text: "Accept number only.",
            icon: "warning",
            button: "ok",
            });


    } else if(isPhonenumValid(pnumberInput.value)){
        setError(pnumberInput, 'Invalid format!');
        swal({
            title: "Please enter a valid phone number!",
            text: "Your phone number is not on PH origin. Accounts are exclusive for Philippine users only.",
            icon: "warning",
            button: "ok",
            });

         } else if(!isPhonenumValid1(pnumberInput.value)){
                setError(pnumberInput, 'Phone number  Invalid!');
                swal({
                    title: "Please enter a valid phone number!",
                    text: "“Your phone number is not on PH origin. Accounts are exclusive for Philippine users only.",
                    icon: "warning",
                    button: "ok",
                    });
    }else {
        setSuccess(pnumberInput);
    }

    

    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, "Password cannot be empty");
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(passwordInput.value.trim().length  < 8 ){
        setError(passwordInput, 'Must have 8 characters');
        swal({
            title: "Password Invalid!",
            text: "Your password must have 8 characters or more, and contain at least one special character, number, uppercase letter, and lowercase letter",
            icon: "warning",
            button: "ok",
           });

    } else if(!isPasswordValidlc(passwordInput.value)){
    setError(passwordInput, 'Password Invalid!');
        swal({
            title: "Password Invalid!",
            text: "Your password must contain at least one lowercase letter.",
            icon: "warning",
            button: "ok",
            });
    } else if(!isPasswordValiduc(passwordInput.value)){
        setError(passwordInput, 'Password Invalid!');
        swal({
            title: "Password Invalid!",
            text: "Your password must contain at least one uppercase letter.",
            icon: "warning",
            button: "ok",
            });
    } else if(!isPasswordValidn(passwordInput.value)){
        setError(passwordInput, 'Password Invalid!');
        swal({
            title: "Password Invalid!",
            text: "Your password must contain at least one number.",
            icon: "warning",
            button: "ok",
            });
    } else if(!isPasswordValidsc(passwordInput.value)){
        setError(passwordInput, 'Password Invalid!');
        swal({
            title: "Password Invalid!",
            text: "Your password must contain at least one special characters.",
            icon: "warning",
            button: "ok",
        });

    }else {
        setSuccess(passwordInput);
    }


    //CONFIRM PASSWORD
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Confirm your password');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Password does not match');
        swal({
            title: "Your passwords do not match. Please try again!",
            text: "check your password!",
            icon: "warning",
            button: "ok",
           });
    }else {
        setSuccess(confirmPasswordInput);
        swal({
            title: "Account Created!!",
            text: "check your password!",
            icon: "success",
            button: "ok",
           });
       
    }
    
   
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}


function isNameValid(fname)
  {
   const letters = /^[A-Za-z-.|]+$/;
   return letters.test(fname)
  }


function isEmailValidi(emaili){
  const fmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return fmail.test(emaili);
}

function isPasswordValidlc(password){
    const lcpass =  /[a-z]/g;
    return lcpass.test(password);
  }

  function isPasswordValiduc(password1){
    const ucpass = /[A-Z]/g;
    return ucpass.test(password1);
  }
  function isPasswordValidn(password2){
    const npass = /[0-9]/g;
    return npass.test(password2);
  }

  
function isPasswordValidsc(password3){
    const scpass = /^(?=.*[!@#$%^&*])/;
    return scpass.test(password3);
  }

  function isPhonenumValid(phonenum){
    const phonen = /((\0))[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}/;
    return phonen.test(phonenum);
  }

  function isPhonenumValid1(phonenum1){
    const phonen1 = /((\+63|0))[.\- ]?9[0-9]{2}[.\- ]?[0-9]{3}[.\- ]?[0-9]{4}/;
    return phonen1.test(phonenum1);
  }

  function isPhonenumValide(phonenum1){
    const phonen1 = /[0-9]/g;
    return phonen1.test(phonenum1);
  }


