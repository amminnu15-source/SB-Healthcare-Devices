const togglePassword = document.getElementById("togglePassword");
const loginPassword = document.getElementById("loginPassword");
const loginForm = document.getElementById("loginForm");

togglePassword.addEventListener("click", () => {

  if(loginPassword.type === "password"){

    loginPassword.type = "text";

    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");

  }else{

    loginPassword.type = "password";

    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");

  }

});

loginForm.addEventListener("submit", function(e){

  e.preventDefault();

  const userInput =
    document.getElementById("loginUser").value.trim();

  const passwordInput =
    document.getElementById("loginPassword").value.trim();

  if(userInput === "" || passwordInput === ""){

    alert("Please enter email/phone and password.");
    return;

  }

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const matchedUser = users.find(user =>

    (user.email === userInput ||
     user.phone === userInput)

     &&

     user.password === passwordInput

  );

  if(matchedUser){

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(matchedUser)
    );

    alert("Login successful!");

    window.location.href = "index.html";

  }else{

    alert("Account not found. Please create an account first.");

    window.location.href = "signup.html";

  }

});