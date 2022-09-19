import "./style.css";
export let registerPage = /*html*/ `<div id="registerPage">
<div class="container">
<div class="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="">
</div>
<h1>Create new account</h1>
<div class="err" id="server-error-message"></div>
<div class="ok" id="server-ok-message"></div>
<div class="box-login">
<form id="registerEmail">
    <p>First Name</p>
    <input type="text" placeholder="Please enter first name" class="input" name="fname">
    <p class="err" id="first-name"></p>
    <p>Last Name</p>
    <input type="text" placeholder="Please enter last name" class="input" name="lname">
    <p class="err" id="last-name"></p>
    <p>Email address</p>
    <input type="email" placeholder="Please enter your email" class="input" name="registerEmail">
    <p class="err" id="email-address"></p>
    <p>Password</p>
    <input type="password" placeholder="Please enter your password" class="input" name="registerPassword">
    <p class="err" id="password-address"></p>
    <p>Confirm Password</p>
    <input type="password" placeholder="Confirm your password" class="input" name="cpassword">
    <p class="err" id="confirm-pass"></p>
    <button class="btn-login">Register</button>
    </form>
</div>
<div class="create" id="back-login">
    <p>Already have an account? Login here</p>
</div>

</div>
</div>`;
