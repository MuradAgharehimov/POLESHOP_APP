const loginForm = document.getElementById("loginForm");
const fullname = document.getElementById("fullname");
const loginPassword = document.getElementById("loginPassword");

const registerForm = document.getElementById("registerForm");
const registerFullName = document.getElementById("registerFullName");
const registerPhoneNumber = document.getElementById("registerPhoneNumber");
const registerEmail = document.getElementById("registerEmail");
const registerPassword = document.getElementById("registerPassword");

async function loginUser(fullname, password) {
    try {
        const response = await axios.get("https://65675cba64fcff8d73103f34.mockapi.io/users");
        const users = response.data;
        const user = users.find((user) => user.fullname == fullname && user.password == password);

        if (user) {
            alert("Giriş başarılı!");
            nameUserLocal()
            window.location.href = "/pole.html";
        } else {
            alert("Geçersiz e-posta veya şifre!");
        }
    } catch (error) {
        console.error("Giriş işlemi sırasında bir hata oluştu:", error);
    }
}

async function registerUser() {
    try {
        const response = await axios.get("https://65675cba64fcff8d73103f34.mockapi.io/users");
        const users = response.data;
        const emailExists = users.some((user) => user.email === registerEmail.value);

        if (emailExists) {
            alert("Bu e-posta adresi zaten kullanımda!");
            return false;
        } else {
            await axios.post("https://65675cba64fcff8d73103f34.mockapi.io/users", {
                fullname: registerFullName.value,
                phoneNumber: registerPhoneNumber.value,
                email: registerEmail.value,
                password: registerPassword.value,
            });
            console.log("Kullanıcı kaydedildi: " + registerFullName.value);
            registerForm.reset();
            return true;
        }
    } catch (error) {
        console.error("Kayıt işlemi sırasında bir hata oluştu:", error);
        return false;
    }
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userFullname = fullname.value;
    const userPassword = loginPassword.value;
    loginUser(userFullname, userPassword);
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    registerUser();
});



function nameUserLocal() {
    if (fullname.value.trim() !== "") {
      localStorage.setItem("username", fullname.value);
      console.log("Kullanıcı adı başarıyla kaydedildi: " + fullname.value);
    } else {
      console.log("Geçersiz kullanıcı adı!");
    }
  }


  