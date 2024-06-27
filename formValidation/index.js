function handleSubmit() {
  let form = document.getElementById("myform");
  let data = new FormData(form);
  let username = data.get("name");
  let email = data.get("email");
  let password = data.get("password");

  //validating username: 5 <= username <=15
  if (username != "") {
    if (username.length < 5) {
      alert("Too short- Username should have minimum 5 characters");
    } else if (username.length > 12) {
      alert("Too long- Username should have maximum 12 characters");
    } else {
      alert("Valid username");
    }
  } else {
    alert("please provide a username!");
  }

  //validating email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email != "") {
    if (email.length < 15) {
      alert("Too short- email should have minimum 15 characters");
    } else if (email.length > 25) {
      alert("Too long- email should have maximum 25 characters");
    } else {
      alert("Valid email");
    }
  } else {
    alert("please provide a email!");
  }

  //validating password: 8 <= username <=15, min 1 -> {(a-z), (A-Z), (0-9), (_ or @)}
  if (password != "") {
    if (password.length < 8) {
      alert("Too short- password should have minimum 8 characters");
    } else if (password.length > 15) {
      alert("Too long- password should have maximum 15 characters");
    } else {
      alert("Valid password");
    }
  } else {
    alert("please provide a password!");
  }
}
