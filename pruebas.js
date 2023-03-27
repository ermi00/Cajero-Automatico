var cuentas = [
    { nombre: "Usuario 1", saldo: 200 },
    { nombre: "Usuario 2", saldo: 290 },
    { nombre: "Usuario 3", saldo: 67 }
  ];

let inputUsuario1 = document.getElementById("inputUsuario1");
let inputUsuario2 = document.getElementById("inputUsuario2");
let inputUsuario3 = document.getElementById("inputUsuario3");

let boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    if(!inputUsuario1.checked && !inputUsuario2.checked && !inputUsuario3.checked){
        alert("Selecciona una cuenta primero")
    } else {cualImputEstaSeleccionado()}
})

function cualImputEstaSeleccionado(){
    if(inputUsuario1.checked){
        contraseñaUsuario1();
    } else if(inputUsuario2.checked){
        contraseñaUsuario2();
    } else if(inputUsuario3.checked){
        contraseñaUsuario1();
    }
}

function contraseñaUsuario1(){
    let contraseñaPreguntaUsuario1 = prompt("Ingresa tu contraseña");
    
    if(contraseñaPreguntaUsuario1 == "12qw"){
        alert("EXITO AL INICIAR SESION")
        ocultarSectionCuentas();
        mostarSectionOperaciones();
    } else{alert("CONTRASEÑA INCORRECTA")}
}

function contraseñaUsuario2(){
    let contraseñaPreguntaUsuario2 = prompt("Ingresa tu contraseña");
    
    if(contraseñaPreguntaUsuario2 == "34er"){
        alert("EXITO AL INICIAR SESION")
        ocultarSectionCuentas();
        mostarSectionOperaciones();
    } else{alert("CONTRASEÑA INCORRECTA")}
}

function contraseñaUsuario3(){
    let contraseñaPreguntaUsuario3 = prompt("Ingresa tu contraseña");
    
    if(contraseñaPreguntaUsuario3 == "56ty"){
        alert("EXITO AL INICIAR SESION")
        ocultarSectionCuentas();
        mostarSectionOperaciones();
    } else{
        alert("CONTRASEÑA INCORRECTA")}
}

function ocultarSectionCuentas(){
    let sectionCuentas = document.getElementById("sectionCuentas")
    sectionCuentas.style.display = "none";
}

function mostarSectionOperaciones(){
    let sectionOperaciones = document.getElementById("sectionOperaciones")

    sectionOperaciones.style.display = "flex"
}