function checkAnonimo() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;

    if (nome || telefone || email) {
        document.getElementById("anonimo").checked = false;
    } else {
        document.getElementById("anonimo").checked = true;
    }
}
