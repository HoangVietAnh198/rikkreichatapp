import { loginPage } from "../pages/loginPage/index";
import { registerPage } from "../pages/registerPage/index";
import { chatPage } from "../pages/chatPage/index";
import { resetPasswordPage } from "../pages/resetPasswordPage/index";
import {
  validateLoginInfo,
  validateRegisterPage,
  validateResetPass,
} from "../controller/index";
import { validate } from "schema-utils";
import { loginfuncition } from "../model";
export let renderErrorMessage = (id, text) => {
  const errorMessage = document.getElementById(id);
  if (errorMessage) {
    errorMessage.innerText = text;
  }
};
export let setActiveScreen = (screenName) => {
  let app = document.getElementById("app");
  switch (screenName) {
    case "loginPage":
      if (app) {
        app.innerHTML = loginPage;
      }
      const loginForm = document.getElementById("loginForm");
      if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
          event.preventDefault();
          const email = loginForm.email.value;
          const password = loginForm.password.value;
          validateLoginInfo(email, password);
          loginfuncition(email, password);
        });
      }
      let create = document.getElementById("create-2");
      create.onclick = function () {
        setActiveScreen("registerPage");
      };
      break;
    case "registerPage":
      if (app) {
        app.innerHTML = registerPage;
      }
      const registerEmail = document.getElementById("registerEmail");
      if (registerEmail) {
        registerEmail.addEventListener("submit", (event) => {
          event.preventDefault();
          const fname = registerEmail.fname.value;
          const lname = registerEmail.lname.value;
          const email = registerEmail.registerEmail.value;
          const password = registerEmail.registerPassword.value;
          const cpassword = registerEmail.cpassword.value;
          console.log(fname);
          validateRegisterPage(fname, lname, email, password, cpassword);
        });
      }
      let backLogin = document.getElementById("back-login");
      backLogin.onclick = function () {
        return setActiveScreen("loginPage");
      };
      break;
    case "chatPage":
      if (app) {
        app.innerHTML = chatPage;
      }
      break;
    case "resetPasswordPage":
      if (app) {
        app.innerHTML = resetPasswordPage;
      }
      const resetPassword = document.getElementById("resetPassword");
      if (resetPassword) {
        resetPassword.addEventListener("submit", (event) => {
          event.preventDefault();
          const reset = resetPassword.email.value;
          validateResetPass(reset);
        });
      }
      break;
    default:
      break;
  }
};
