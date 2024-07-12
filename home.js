var contador = 0;
var boton = document.getElementById("button-coments")
boton.addEventListener('click', ()=>{
    contador<3;contador++;
})

function comentarioUsuario() {
    let contenedorInfo = document.createElement("div")
    contenedorInfo.setAttribute("id", `comentarios-usuario${contador}`)
    contenedorInfo.setAttribute("style", "display:flex; max-width:100%;")
    let contenedorDatos = document.getElementById(`usuario${contador}`)
    contenedorDatos.appendChild(contenedorInfo)
}


function userInfo() {
    let contenedorInfo = document.createElement("div")
    contenedorInfo.setAttribute("id", `user-info${contador}`)
    contenedorInfo.setAttribute("style", "display:flex; align-items-center; margin-left:10%; gap:10px; align-items:center;")
    let contenedorDatos = document.getElementById(`usuario${contador}`)
    contenedorDatos.appendChild(contenedorInfo)
}

function userLogo() {
    let foto=document.createElement("img")
    foto.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/013/218/086/non_2x/red-rose-transparent-free-png.png")
    foto.setAttribute("style", "width:60px;")
    let contendorCharacters = document.getElementById(`user-info${contador}`)
    contendorCharacters.appendChild(foto);
}

function userName() {
    let name = document.createElement("h4")
    name.innerHTML= "lochoa"
    name.setAttribute("class", `user-name${contador}`)
    name.setAttribute("style", "font-size: 26px; color:#fff;")
    let contendorCharacters = document.getElementById(`user-info${contador}`)
    contendorCharacters.appendChild(name);
}

function userComent() {
    let comentario = document.createElement("p")
    comentario.innerHTML=document.getElementById("box-coments").value
    comentario.setAttribute("class", `comentario-usuario${contador}`)
    comentario.setAttribute("style", "text-align:start; color:#fff; padding-left:20%; padding-right:10%; padding-bottom:5%; box-sizing: content-box; overflow-wrap: anywhere;")
    let contendorComent = document.getElementById(`comentarios-usuario${contador}`)
    contendorComent.appendChild(comentario);
}

function usuario() {
    let contenedorInfo = document.createElement("div")
    contenedorInfo.setAttribute("id", `usuario${contador}`)
    let contenedorUsuario = document.getElementById(`coments-users`)
    contenedorUsuario.appendChild(contenedorInfo);
    contenedorInfo.setAttribute("style", "display:flex; flex-direction:column")
    contenedorInfo.setAttribute("style", "border-left: #111 40px double; margin: 10px 0; width:100%; max-width: 100%; min-width:100%; background-color:#222; ")
    userInfo()
    userLogo()
    comentarioUsuario()
    userName()
    userComent()
}


