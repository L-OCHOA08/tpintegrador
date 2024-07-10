function iniciar() {
    let correctUser = "lochoa";
    let correctpassw = "12345";
    let userIngresado = document.getElementById("user").value;
    let passwIngresado = document.getElementById("passw").value;

    if (userIngresado===correctUser&&correctpassw===passwIngresado) {
        window.location.href='./home.html';
    }
    else{
        alert("Datos Incorrectos")
    }
}
