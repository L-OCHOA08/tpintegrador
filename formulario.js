document.getElementById("comprar");

function seguir() {
    if (confirm("¿Desea seguir comprando?")) {
        
    }
    else{
        window.location.href= "./home.html"
    }
}

function confirmacion(){
    document.getElementById("comprar");
    document.getElementById("lista-productos");
    document.getElementById("cantidad");
    let producto = document.getElementById("lista-productos").value;
    let cantidad = document.getElementById("cantidad").value;

        if ((document.getElementById("lista-productos").value!=="empty")&&(document.getElementById("cantidad").value>=1&&document.getElementById("cantidad").value<=3)) {
            alert(`Se realizó con exito la compra de ${cantidad} ${producto}`)
            seguir();
        }
        else {
            alert("Pruebe con seleccionar un producto o seleccionar una cantidad de productos permitida (max. 3 por producto)")
        }
    }