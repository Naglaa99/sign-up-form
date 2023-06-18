function submitForm(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        const error = document.querySelector("#error");
        document.querySelector('#email').style.borderColor ="red"
        document.querySelector('#error').style.color="red"
        error.textContent = "valid email required"
        error.classList.add("error");
        return;
    }

    const error = document.getElementById("error");
    error.textContent= "";
    error.classList.remove("error");

    document.querySelector(".card").style.display = "none";
    document.querySelector(".card1").style.display = "block";

    document.getElementById("emailDisplay").innerHTML = email;
}

function dismissMessage() {
    document.querySelector(".card1").style.display = "none";
    document.querySelector(".card").style.display = "block";

}