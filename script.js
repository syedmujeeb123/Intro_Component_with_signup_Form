"use strict";
const form = document.querySelector(".form");
const formBtn = document.querySelector(".my-btn");

const errorFirstName = document.querySelector(".error-fname-border");
const errorLastName = document.querySelector(".error-lname-border");
const errorEmailName = document.querySelector(".error-email-border");
const errorPasswordName = document.querySelector(".error-password-border");

const errorFirstNameText = document.querySelector(".error-fname-text");
const errorLastNameText = document.querySelector(".error-lname-text");
const errorEmailNameText = document.querySelector(".error-email-text");
const errorPasswordNameText = document.querySelector(".error-password-text");

const imgError1 = document.querySelector(".img-error-1");
const imgError2 = document.querySelector(".img-error-2");
const imgError3 = document.querySelector(".img-error-3");
const imgError4 = document.querySelector(".img-error-4");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const storedEmailValue = errorEmailName.value;

  errorFirstName.classList.remove("border-outline");
  errorFirstNameText.classList.add("hidden");
  imgError1.classList.add("hidden");

  errorLastName.classList.remove("border-outline");
  errorLastNameText.classList.add("hidden");
  imgError2.classList.add("hidden");

  errorEmailName.classList.remove("border-outline");
  errorEmailNameText.classList.add("hidden");
  imgError3.classList.add("hidden");

  errorPasswordName.classList.remove("border-outline");
  errorPasswordNameText.classList.add("hidden");
  imgError4.classList.add("hidden");

  const firstNameValue = errorFirstName.value;
  const lastNameValue = errorLastName.value;
  const emailValue = errorEmailName.value;
  const passwordValue = errorPasswordName.value;
  let valid = true;

  if (errorFirstName.value === "") {
    errorFirstName.classList.add("border-outline");
    errorFirstNameText.classList.remove("hidden");
    imgError1.classList.remove("hidden");
    valid = false;
  }

  if (errorLastName.value === "") {
    errorLastName.classList.add("border-outline");
    errorLastNameText.classList.remove("hidden");
    imgError2.classList.remove("hidden");
    valid = false;
  }

  if (!emailPattern.test(storedEmailValue)) {
    errorEmailName.classList.add("border-outline");
    errorEmailNameText.classList.remove("hidden");
    imgError3.classList.remove("hidden");
    valid = false;
  }

  if (errorPasswordName.value === "") {
    errorPasswordName.classList.add("border-outline");
    errorPasswordNameText.classList.remove("hidden");
    imgError4.classList.remove("hidden");
    valid = false;
  }
  if (valid === true) {
    alert(
      `
         All fields are valid!
        First Name: ${firstNameValue}
        Last Name: ${lastNameValue}
        Email: ${emailValue}
        Password: ${passwordValue}
        `
    );
    window.location.reload();
  } else {
    e.preventDefault();
  }
});
