function createUser() {
    const inputs = document.querySelectorAll(".form-box input");
    const values = Array.from(inputs).map(input => input.value);
    console.log("Utilisateur créé :", values);
    alert("Utilisateur créé : " + values.join(", "));
}
