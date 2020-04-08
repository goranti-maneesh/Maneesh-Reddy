let form = {};
document.getElementById("change-speed").oninput = (event) => {
    document.getElementById("speedInNumbers").innerHTML = event.target.value;
};
let functionFirstName = (nameValue) => {
    let lettersForName = /[^A-Za-z]+/;
    let emptyForName = "";
    let firstNameDocument;
    if (nameValue.match(lettersForName)) {
        firstNameDocument = "* Invalid value";
    }
    else if (nameValue === emptyForName) {
        firstNameDocument = "* First name required";
    }
    else {
        document.getElementById("first-name-required").innerHTML = "";
        form["firstName"] = nameValue;
        return true;
    }
    document.getElementById("first-name-required").innerHTML = firstNameDocument;
};
let firstName = document.getElementById("first-name");
firstName.onblur = () => {
    functionFirstName(firstName.value);
};
let functionLastName = (nameValue) => {
    let lettersForName = /[^A-Za-z]+/;
    let emptyForName = "";
    let lastNameDocument;
    if (nameValue.match(lettersForName)) {
        lastNameDocument = "* Invalid value";
    }
    else if (nameValue === emptyForName) {
        lastNameDocument = "* Last name required";
    }
    else {
        document.getElementById("last-name-required").innerHTML = "";
        form["lastName"] = nameValue;
        return true;
    }
    document.getElementById("last-name-required").innerHTML = lastNameDocument;
};


let lastName = document.getElementById("last-name");
lastName.onblur = () => {
    functionLastName(lastName.value);
};
let functionMobileNumber = (mobileNumberValue) => {
    let numbers = /^([0-9]){10}$/;
    let emptyNumbers = "";
    let mobileNumberDocument;
    if (mobileNumberValue.match(numbers)) {
        document.getElementById("mobile-number-required").innerHTML = "";
        form["mobileNumber"] = mobileNumberValue;
        return true;
    }
    else if (mobileNumberValue === emptyNumbers) {
        mobileNumberDocument = "* Mobile number required";
    }
    else {
        mobileNumberDocument = "* Invalid value";
    }
    document.getElementById("mobile-number-required").innerHTML = mobileNumberDocument;
};
let mobileNumber = document.getElementById("mobile-number");
mobileNumber.onblur = () => {
    functionMobileNumber(mobileNumber.value);
};
let functionEmail = (emailValue) => {
    let emailValidation = /^[A-Za-z]+[@][g][m][a][i][l][.][c][o][m]/;
    let emptyEmail = "";
    let emailDocument;
    if (emailValue.match(emailValidation)) {
        document.getElementById("email-required").innerHTML = "";
        form["email"] = emailValue;
        return true;
    }
    else if (emailValue === emptyEmail) {
        emailDocument = "* email required";
    }
    else {
        emailDocument = "* Invalid value";
    }
    document.getElementById("email-required").innerHTML = emailDocument;
};
let email = document.getElementById("email");
email.onblur = () => {
    functionEmail(email.value);
};
let functionPassword = (passwordValue) => {
    let passwordValidation1 = /([0-9a-zA-Z]){10,}/;
    let emptyPassword = "";
    let passwordDocument;
    let passwordValidation2 = /([a-z])+/;
    let passwordValidation3 = /([A-Z])+/;
    if (passwordValue.match(passwordValidation1)) {
        if (passwordValue.match(passwordValidation2)) {
            if (passwordValue.match(passwordValidation3)) {
                document.getElementById("password-required").innerHTML = "";
                form["password"] = passwordValue;
                return true;
            }
            else {
                passwordDocument = "* Must contain atleast one small letter and capital letter"
            }
        }
        else {
            passwordDocument = "* Must contain atleast one small letter and capital letter"
        }
    }
    else if (passwordValue === emptyPassword) {
        passwordDocument = "* Password required";
    }
    else {
        passwordDocument = "* Password must contain 10 characters";
    }
    document.getElementById("password-required").innerHTML = passwordDocument;
};
let password = document.getElementById("password");
password.onblur = () => {
    functionPassword(password.value);
};
let functionConfirmPassword = (confirmPasswordValue) => {
    let confirmPasswordValidation = /([0-9a-zA-Z]){10,}/;
    let emptyConfirmPassword = "";
    let confirmPasswordDocument;
    if (confirmPasswordValue.match(confirmPasswordValidation)) {
        if (confirmPasswordValue === password.value) {
            document.getElementById("confirm-password-required").innerHTML = "";
            return true;
        }
        else {
            confirmPasswordDocument = "* Password not matched";
        }
    }
    else if (confirmPasswordValue === emptyConfirmPassword) {
        confirmPasswordDocument = "* Password required";
    }
    else {
        confirmPasswordDocument = "* Password must contain 10 characters";
    }
    document.getElementById("confirm-password-required").innerHTML = confirmPasswordDocument;
};
let confirmPassword = document.getElementById("confirm-password");
confirmPassword.onblur = () => {
    functionConfirmPassword(confirmPassword.value);
};
let functionDate = (dateValue) => {
    let dateValidation = /^([0-9]){2}[/]([0-9]){2}[/]([0-9]){4}/;
    let emptyDate = "";
    let yearValidation = Number(date.value.substr(6, 4));
    let monthValidation = Number(date.value.substr(3, 2));
    let dateVerification = Number(date.value.substr(0, 2));
    let dateDocument;
    if (dateValue.match(dateValidation)) {
        if ((yearValidation === 2004) | (yearValidation === 2008) | (yearValidation === 2012) | (yearValidation === 2016) | (yearValidation === 2020)) {
            if (monthValidation === 2) {
                if ((dateVerification > 0) & (dateVerification < 30)) {
                    document.getElementById("date-required").innerHTML = "";
                    form["dateOfBirth"] = dateValue;
                    return true;
                }
                else {
                    dateDocument = "* Invalid value";
                }
            }
            if ((monthValidation == 1) | (monthValidation == 3) | (monthValidation == 5) | (monthValidation == 7) | (monthValidation == 8) | (monthValidation == 10) | (monthValidation == 12)) {
                if ((dateVerification > 0) & (dateVerification < 32)) {
                    document.getElementById("date-required").innerHTML = "";
                    form["dateOfBirth"] = dateValue;
                    return true;
                }
                else {
                    dateDocument = "* Invalid value";
                }
            }
            else {
                dateDocument = "* Invalid value";
            }
            if ((monthValidation == 4) | (monthValidation == 6) | (monthValidation == 9) | (monthValidation == 11)) {
                if ((dateVerification > 0) & (dateVerification < 31)) {
                    document.getElementById("date-required").innerHTML = "";
                    form["dateOfBirth"] = dateValue;
                    return true;
                }
                else {
                    dateDocument = "* Invalid value";
                }
            }
            else {
                dateDocument = "* Invalid value";
            }
        }
        else if ((yearValidation > 2001) & (yearValidation < 2021)) {
            if ((monthValidation == 1) | (monthValidation == 3) | (monthValidation == 5) | (monthValidation == 7) | (monthValidation == 8) | (monthValidation == 10) | (monthValidation == 12)) {
                if ((dateVerification > 0) & (dateVerification < 32)) {
                    document.getElementById("date-required").innerHTML = "";
                    form["dateOfBirth"] = dateValue;
                    return true;
                }
                else {
                    dateDocument = "* Invalid value";
                }
            }
            else {
                dateDocument = "* Invalid value";
            }
            if ((monthValidation == 4) | (monthValidation == 6) | (monthValidation == 9) | (monthValidation == 11)) {
                if ((dateVerification > 0) & (dateVerification < 31)) {
                    document.getElementById("date-required").innerHTML = "";
                    form["dateOfBirth"] = dateValue;
                    return true;
                }
                else {
                    dateDocument = "* Invalid value";
                }
            }
            else {
                dateDocument = "* Invalid value";
            }
            if (monthValidation == 2) {
                if ((dateVerification > 0) & (dateVerification < 29)) {
                    document.getElementById("date-required").innerHTML = "";
                    form["dateOfBirth"] = dateValue;
                    return true;
                }
                else {
                    dateDocument = "* Invalid value";
                }
            }
        }
        else {
            dateDocument = "* Invalid value";
        }
    }
    else if (dateValue === emptyDate) {
        dateDocument = "* DOB required";
    }
    else {
        dateDocument = "* Invalid value";
    }
    document.getElementById("date-required").innerHTML = dateDocument;
};
let date = document.getElementById("datemax");
date.onblur = () => {
    functionDate(date.value);
};
let a = 0;
document.getElementById("male").onclick = () => {
    a = 1;
    form["Gender"] = "Male";
    if (a == 1) {
        document.getElementById("gender").innerHTML = "";
    }
};
document.getElementById("female").onclick = () => {
    a = 1;
    form["Gender"] = "Female";
    if (a == 1) {
        document.getElementById("gender").innerHTML = "";
    }
};
document.getElementById("other").onclick = () => {
    a = 1;
    form["Gender"] = "Other";
    if (a == 1) {
        document.getElementById("gender").innerHTML = "";
    }
};
let functionGender = () => {
    if (a == 0) {
        document.getElementById("gender").innerHTML = "* Gender required";
    }
    else {
        return true;
    }
};
let b = 0;
document.getElementById("checkbox").onclick = () => {
    b = b + 1;
    if (b % 2 != 0) {
        document.getElementById("accept-terms").innerHTML = "";
    }
};
let functionAcceptAndTerms = () => {
    if (b % 2 != 0) {
        document.getElementById("accept-terms").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("accept-terms").innerHTML = "* Accept terms and policy";
    }
};


form["branch"] = "EEE";
let branch = document.getElementById("mySelect");
branch.onchange = (event) => {
    form["branch"] = event.target.value;
    console.log(event.target.value);
};



let signUp = document.getElementById("sign-up-last");
signUp.onclick = () => {
    let signUpDate = functionDate(date.value);
    let signUpConfirmPassword = functionConfirmPassword(confirmPassword.value);
    let signUpPassword = functionPassword(password.value);
    let signUpEmail = functionEmail(email.value);
    let signUpMobileNumber = functionMobileNumber(mobileNumber.value);
    let signUpFirstName = functionFirstName(firstName.value);
    let signUpLastName = functionLastName(lastName.value);
    let signUpGender = functionGender();
    let signUpTerms = functionAcceptAndTerms();
    if ((signUpDate === true) && (signUpConfirmPassword === true) && (signUpPassword === true) && (signUpEmail === true) && (signUpMobileNumber === true) && (signUpFirstName === true) && (signUpLastName === true) && (signUpGender === true) && (signUpTerms === true)) {
        alert("submitted");
        console.log(form);
    }
    else {
        alert("Invalid Values");
    }
};
