function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (email === "owner@test.com" && password === "12345") {
        message.innerText = "Login successful!";

        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 500);

    } else {
        message.innerText = "Wrong Email or Password";
    }
}

function requestAccess() {
    document.getElementById("message").innerText =
        "Access request coming next.";
}