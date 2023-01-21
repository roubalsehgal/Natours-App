/* eslint-disable */
import "@babel/polyfill";
import { displayMap } from "./mapbox";
import { login, logout } from "./login";
import { updateSettings } from "./updateSettings";
import { signup } from "./signup";
import { forgotPassword } from "./forgotPassword";
import { resetPassword } from "./resetPassword";
import { bookTour } from "./stripe";
import { showAlert } from "./alerts";

// DOM ELEMENTS
const mapBox = document.getElementById("map");
const loginForm = document.querySelector(".form--login");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");
const signupForm = document.querySelector(".signup-form");
const forgotPasswordFrom = document.querySelector(".form--forgotpassword");
const resetPasswordForm = document.querySelector(".form--resetpassword");
const bookBtn = document.getElementById("book-tour");

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (signupForm) {
  signupForm.addEventListener("submit", async e => {
    e.preventDefault();

    // Change button text while Signing up a new user
    // document.querySelector(".btn--signup").textContent = "Signing...";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("passwordconfirm").value;
    await signup(name, email, password, passwordConfirm);

    // Change button text and clear input-fields after Signing up new user
    // document.querySelector(".btn--signup").textContent = "Signup";
    signupForm.reset();
  });
}

if (loginForm)
  loginForm.addEventListener("submit", async e => {
    e.preventDefault();

    // document.querySelector(".btn--login").textContent = "Logging...";

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener("click", logout);

if (userDataForm)
  userDataForm.addEventListener("submit", e => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    // console.log(form);

    updateSettings(form, "data");
  });

if (userPasswordForm)
  userPasswordForm.addEventListener("submit", async e => {
    e.preventDefault();
    // document.querySelector(".btn--save-password").textContent = "Updating...";

    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      "password"
    );

    // document.querySelector(".btn--save-password").textContent = "Save password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  });

if (forgotPasswordFrom) {
  forgotPasswordFrom.addEventListener("submit", async e => {
    e.preventDefault();

    // Change button text while sending email
    // document.querySelector(".btn-forgot-password").textContent = "Sending...";

    const email = document.getElementById("emailForgotPassword").value;
    await forgotPassword(email);

    // Change button text after sending email
    // document.querySelector(".btn-forgot-password").textContent = "Submit";
  });
}

if (resetPasswordForm) {
  resetPasswordForm.addEventListener("submit", async e => {
    e.preventDefault();

    // Change button text while resetting password
    // document.querySelector(".btn--reset").textContent = "Resetting...";

    const password = document.getElementById("passwordResetPassword").value;
    const passwordConfirm = document.getElementById(
      "passwordConfirmResetPassword"
    ).value;
    const resetToken = document.getElementById("resetToken").value;

    await resetPassword(password, passwordConfirm, resetToken);

    // Change button text after resetting password
    // document.querySelector(".btn--reset").textContent = "Reset";
  });
}

if (bookBtn)
  bookBtn.addEventListener("click", e => {
    e.target.textContent = "Processing...";
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });

const alertMessage = document.querySelector("body").dataset.alert;
if (alertMessage) showAlert("success", alertMessage, 20);
