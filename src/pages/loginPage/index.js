import "./style.css";
export let loginPage = /*html*/ `<div id="loginPage">
<div class="container">
<div class="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="">
</div>
<h1>Sign in to Rikkei Chat</h1>
<div class="box-login">
    <form id="loginForm">
        <p>Email address</p>
        <input type="email" placeholder="Please enter your email" class="input" name="email">
        <p class="err-login" id="errLogin"></p>
        <p>Password</p>
        <input type="password" placeholder="Please enter your password" class="input" name="password">
        <p class="err-login1" id="errLogin1"></p>
        <button class="btn-login">Login</button>
    </form>
</div>
<div class="create">
    <p id="create-2">New To Rikkei Chat? Create an account</p>
    <span>Forget your password? Click here</span>
</div>

</div>
</div>`;
