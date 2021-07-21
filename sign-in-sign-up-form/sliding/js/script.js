function slidingSignInSignUpForm() {
  const container = document.querySelector(
    "#sliding-sign-in-sign-up-form .container"
  );
  const signInBtn = document.querySelector(
    "#sliding-sign-in-sign-up-form .panel .sign-in-btn"
  );
  const signUpBtn = document.querySelector(
    "#sliding-sign-in-sign-up-form .panel .sign-up-btn"
  );
  if (container && signInBtn && signUpBtn) {
    signUpBtn.onclick = () => {
      container.classList.add("sign-up-mode");
    };

    signInBtn.onclick = () => {
      container.classList.remove("sign-up-mode");
    };
  }
}

slidingSignInSignUpForm();
