import { renderErrorMessage } from "../view/index";
import { createNewUser, loginfuncition } from "../model/index";

export let validateLoginInfo = (email, password) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("errLogin", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("errLogin", "Invalid email");
  } else {
    renderErrorMessage("errLogin", "");
  }
  if (!password) {
    renderErrorMessage("errLogin1", "Please enter your password");
  } else {
    renderErrorMessage("errLogin1", "");
  }
  if (email && password) {
    loginfuncition(email, password);
  } else if (email && !password) {
    renderErrorMessage("errLogin1", "sai pass");
  }
};
export let validateResetPass = (email) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email) {
    renderErrorMessage("err-reset", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("err-reset", "Invalid email");
  } else {
    renderErrorMessage("err-reset", "");
  }
};
export let validateRegisterPage = (
  fname,
  lname,
  email,
  password,
  cpassword
) => {
  const emailRegex =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!fname) {
    renderErrorMessage("first-name", "Please enter your email");
  } else {
    renderErrorMessage("first-name", "");
  }
  if (!lname) {
    renderErrorMessage("last-name", "Please enter your email");
  } else {
    renderErrorMessage("last-name", "");
  }
  if (!email) {
    renderErrorMessage("email-address", "Please enter your email");
  } else if (!emailRegex.test(email)) {
    renderErrorMessage("email-address", "Invalid email");
  } else {
    renderErrorMessage("email-address", "");
  }
  if (!password) {
    renderErrorMessage("password-address", "Please enter your email");
  } else {
    renderErrorMessage("password-address", "");
  }
  if (!cpassword) {
    renderErrorMessage("confirm-pass", "Please enter your email");
  } else {
    renderErrorMessage("confirm-pass", "");
  }
  if (
    fname &&
    lname &&
    email &&
    password &&
    cpassword &&
    password === cpassword
  ) {
    createNewUser(fname, lname, email, password);
  }
};
