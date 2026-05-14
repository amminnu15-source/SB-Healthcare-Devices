const signupForm = document.getElementById("signupForm");
const toggleSignupPassword = document.getElementById("toggleSignupPassword");
const signupPassword = document.getElementById("signupPassword");

toggleSignupPassword.addEventListener("click", () => {
  if(signupPassword.type === "password"){
    signupPassword.type = "text";
    toggleSignupPassword.classList.remove("fa-eye");
    toggleSignupPassword.classList.add("fa-eye-slash");
  }else{
    signupPassword.type = "password";
    toggleSignupPassword.classList.remove("fa-eye-slash");
    toggleSignupPassword.classList.add("fa-eye");
  }
});

signupForm.addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const phone = document.getElementById("signupPhone").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if(name === "" || email === "" || phone === "" || password === ""){
    alert("Please fill all fields.");
    return;
  }

  if(password.length < 6){
    alert("Password must be at least 6 characters.");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(user =>
    user.email === email || user.phone === phone
  );

  if(existingUser){
    alert("Account already exists. Please login.");
    window.location.href = "login.html";
    return;
  }

  const newUser = {
    name:name,
    email:email,
    phone:phone,
    password:password
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(newUser));

  alert("Account created successfully!");

  window.location.href = "index.html";
});