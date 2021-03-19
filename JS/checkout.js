const form = document.querySelector("#checkoutForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

function validateCheckoutForm(event) {
    event.preventDefault();

    if (validateLength(fullName.value, 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (validateLength(address.value, 9) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (validateLength(city.value, 0) === true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }
}

form.addEventListener("submit", validateCheckoutForm);

function validateLength(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}