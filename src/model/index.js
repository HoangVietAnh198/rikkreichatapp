import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { renderErrorMessage, setActiveScreen } from "../view/index";
export let createNewUser = (fname, lname, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      renderErrorMessage("server-ok-message", "Đăng kí thành công");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      renderErrorMessage("server-error-message", errorMessage);
    });
};
export let loginfuncition = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      setActiveScreen("chatPage");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage.replace("Firebase: Error ", ""));
    });
};
