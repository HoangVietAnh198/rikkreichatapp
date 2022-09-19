import "./style.css";

export let resetPasswordPage =
  /*html*/
  `<div id="resetPasswordPage">
  <div class="container">
<div class="logo">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png" alt="">
</div>
<h1>Reset your password</h1>
<div class="box-login">
    <form id=resetPassword>
    <p>Email address</p>
    <input type="email" placeholder="Please enter your email" class="input" name=email>
    <div id=err-reset></div>
    <button class="btn-login">Reset Password</button>
    </form>
</div>
<div class="create">
    <p>Already have an account?Login here</p>
</div>

</div>
</div>`;
