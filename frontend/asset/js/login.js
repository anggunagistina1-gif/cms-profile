// DUMMY DATA LOGIN
localStorage.setItem("username","anggun agistina");
localStorage.setItem("password","sayacantik");

// LOGIN
document.getElementById("loginForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(user === savedUser && pass === savedPass){

       localStorage.setItem("login", "true");
       alert("Login berhasil💗");

        // pindah ke halaman CMS
        window.location.href = "cms.html";

    } else {

        alert("Username atau password salah!");

    }

});