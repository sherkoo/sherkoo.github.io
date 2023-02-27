function checkPassword() {
  if (localStorage.getItem("pw") === null) {
    const password = prompt("Enter password:");
    if (password === "sherko2023") {
      localStorage.setItem("pw", "true");
    } else {
      checkPassword(); // recursively call the function until correct password is entered
    }
  }
}

checkPassword();
