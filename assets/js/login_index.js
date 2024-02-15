function userLogin() {
    const fullname = localStorage.getItem("username");
    if (fullname) {
        const userControl = document.getElementById("userControl");
        const userSingup = document.getElementById("userSingup"); 
        const name = document.createElement("div");
        name.className = "user-account"
        name.innerHTML = `
        <p>${fullname}</p>
        <button id="login-btn" onclick="deleteUserFromLocal()">Çıxış</button>`
        name.style.color = "#000";
        userSingup.innerHTML =``
        userControl.innerHTML =``
        userControl.appendChild(name);
    } else {
        console.log("Kullanıcı adı bulunamadı.");
    }
}

userLogin()

function deleteUserFromLocal() {
    const userControl = document.getElementById("userControl"); 
    const userSingup = document.getElementById("userSingup"); 
    localStorage.removeItem("username");
    userSingup.innerHTML =`
    <a href="./assets/pages/login.html">
                                    <i class="fa-solid fa-user-plus"></i>
                                    Qeydiyyat
                                </a>`
    userControl.innerHTML = `
    <a href="./assets/pages/login.html">
        <i class="fa-solid fa-right-to-bracket"></i>
        Giriş
    </a>`;
}



