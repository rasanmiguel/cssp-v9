function auth(event) {
    event.preventDefault();
    var uname = document.getElementById('uname').value;
    var psw = document.getElementById('psw').value;
    if (uname === "admin" && psw === "Abc!23") {
        // Set session variable indicating user is authenticated
        sessionStorage.setItem('loggedIn', 'true');
        window.location.assign("admin_gs.html");
    } else {
        alert("Incorrect login credentials");
    }
}

function cancel() {
    // Redirect to the home page
    window.location.href = "index.html";
}
