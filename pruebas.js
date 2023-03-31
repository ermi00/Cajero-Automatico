var cuentas = [
    { nombre: "Usuario 1", saldo: 250 },
    { nombre: "Usuario 2", saldo: 290 },
    { nombre: "Usuario 3", saldo: 67 }
];

let inputUsuario1 = document.getElementById("inputUsuario1");
let inputUsuario2 = document.getElementById("inputUsuario2");
let inputUsuario3 = document.getElementById("inputUsuario3");

let botonContinuar = document.getElementById("botonContinuar");
botonContinuar.addEventListener("click", function () {
    if (!inputUsuario1.checked && !inputUsuario2.checked && !inputUsuario3.checked) {
        alert("Selecciona una cuenta primero")
    } else { cualImputEstaSeleccionado() }
})

function cualImputEstaSeleccionado() {
    if (inputUsuario1.checked) {
        contraseñaUsuario1();
    } else if (inputUsuario2.checked) {
        contraseñaUsuario2();
    } else if (inputUsuario3.checked) {
        contraseñaUsuario3();
    }
}

function contraseñaUsuario1() {
    let contraseñaPreguntaUsuario1 = prompt("Ingresa tu contraseña");

    if (contraseñaPreguntaUsuario1 == "12qw") {
        ocultarSectionCuentas();
        mostarSectionOperaciones();
    } else { alert("CONTRASEÑA INCORRECTA") }
}

function contraseñaUsuario2() {
    let contraseñaPreguntaUsuario2 = prompt("Ingresa tu contraseña");

    if (contraseñaPreguntaUsuario2 == "34er") {
        ocultarSectionCuentas();
        mostarSectionOperaciones();
    } else { alert("CONTRASEÑA INCORRECTA") }
}

function contraseñaUsuario3() {
    let contraseñaPreguntaUsuario3 = prompt("Ingresa tu contraseña");

    if (contraseñaPreguntaUsuario3 == "56ty") {
        ocultarSectionCuentas();
        mostarSectionOperaciones();
    } else {
        alert("CONTRASEÑA INCORRECTA")
    }
}

function ocultarSectionCuentas() {
    let sectionCuentas = document.getElementById("sectionCuentas")
    sectionCuentas.style.display = "none";
}

function mostarSectionOperaciones() {
    let sectionOperaciones = document.getElementById("sectionOperaciones")

    sectionOperaciones.style.display = "flex"
}


// MENUS DE INTERACCION //

// Consultar Saldo //

let botonConsultarSaldo = document.getElementById("botonConsultarSaldo")

botonConsultarSaldo.addEventListener("click", function () {

    let menuSaldoActual = document.getElementById("menuSaldoActual")
    let spanResultadoSaldoActual = document.getElementById("spanResultadoSaldoActual")
    let zeldaSound = new Audio("");
    zeldaSound.src = "./assets/Zelda Sound.mp3"

    menuSaldoActual.style.display = "flex"

    if (inputUsuario1.checked) {
        spanResultadoSaldoActual.textContent = `$${cuentas[0].saldo}`
        zeldaSound.play();
        zeldaSound.volume = 0.3
    } else if (inputUsuario2.checked) {
        spanResultadoSaldoActual.textContent = `$${cuentas[1].saldo}`
        zeldaSound.play();
        zeldaSound.volume = 0.3
    } else if (inputUsuario3.checked) {
        spanResultadoSaldoActual.textContent = `$${cuentas[2].saldo}`
        zeldaSound.play();
        zeldaSound.volume = 0.3
    }
});

// Ingresar Monto //


let botonIngresarMonto = document.getElementById("botonIngresarMonto")

botonIngresarMonto.addEventListener("click", function () {
    let menuIngresarMonto = document.getElementById("menuIngresarMonto")

    menuIngresarMonto.style.display = "flex"
})

let botonConfirmarIngresarMonto = document.getElementById("botonConfirmarIngresarMonto")
botonConfirmarIngresarMonto.addEventListener("click", sumarMonto);

function sumarMonto() {
    let inputIngresarMonto = document.getElementById("inputIngresarMonto")
    let spanResultadoIngresarMonto = document.getElementById("spanResultadoIngresarMonto")

    let valorIngresarMonto = inputIngresarMonto.value
    let saldoTotalSumaUsuario1 = parseInt(valorIngresarMonto) + cuentas[0].saldo
    let saldoTotalSumaUsuario2 = parseInt(valorIngresarMonto) + cuentas[1].saldo
    let saldoTotalSumaUsuario3 = parseInt(valorIngresarMonto) + cuentas[2].saldo

    function reglaDeNegocioIngresarMonto() {
        if (saldoTotalSumaUsuario1 > 990) {
            alert("Lo sentimos, no puedes tener una cuenta con mas de $990")
            spanResultadoIngresarMonto.textContent = ``
        } else if (saldoTotalSumaUsuario2 > 990) {
            alert("Lo sentimos, no puedes tener una cuenta con mas de $990")
            spanResultadoIngresarMonto.textContent = ``
        } else if (saldoTotalSumaUsuario3 > 990) {
            alert("Lo sentimos, no puedes tener una cuenta con mas de $990")
            spanResultadoIngresarMonto.textContent = ``
        }
    }

    function operacionSumarMonto() {
        if (inputUsuario1.checked) {
            spanResultadoIngresarMonto.textContent = `Operacion exitosa. Saldo actual $${saldoTotalSumaUsuario1}`
            reglaDeNegocioIngresarMonto();
        } else if (inputUsuario2.checked) {
            spanResultadoIngresarMonto.textContent = `Operacion exitosa. Saldo actual $${saldoTotalSumaUsuario2}`
            reglaDeNegocioIngresarMonto();
        } else if (inputUsuario3.checked) {
            spanResultadoIngresarMonto.textContent = `Operacion exitosa. Saldo actual $${saldoTotalSumaUsuario3}`
            reglaDeNegocioIngresarMonto();
        }
    }

    operacionSumarMonto();
}

// Retirar Monto //

let botonRetirarMonto = document.getElementById("botonRetirarMonto")
botonRetirarMonto.addEventListener("click", function () {

    let menuRetirarMonto = document.getElementById("menuRetirarMonto")
    menuRetirarMonto.style.display = "flex"
})

let botonConfirmarRetirarMonto = document.getElementById("botonConfirmarRetirarMonto")
botonConfirmarRetirarMonto.addEventListener("click", restarMonto);

function restarMonto() {
    let inputRetirarMonto = document.getElementById("inputRetirarMonto")
    let spanResultadoRetirarMonto = document.getElementById("spanResultadoRetirarMonto")

    let valorRetirarMonto = inputRetirarMonto.value
    let saldoTotalRestaUsuario1 = cuentas[0].saldo - parseInt(valorRetirarMonto)
    let saldoTotalRestaUsuario2 = cuentas[1].saldo - parseInt(valorRetirarMonto)
    let saldoTotalRestaUsuario3 = cuentas[2].saldo - parseInt(valorRetirarMonto)

    if (inputUsuario1.checked) {
        spanResultadoRetirarMonto.textContent = `Operacion exitosa. Saldo actual $${saldoTotalRestaUsuario1}`
        if(saldoTotalRestaUsuario1 > 9){} else{
            alert("Necesitas $10 minimo en tu cuenta")
            spanResultadoRetirarMonto.textContent = ``
        }
    } else if (inputUsuario2.checked) {
        spanResultadoRetirarMonto.textContent = `Operacion exitosa. Saldo actual $${saldoTotalRestaUsuario2}`
        if(saldoTotalRestaUsuario2 > 9){} else{
            alert("Necesitas $10 minimo en tu cuenta")
            spanResultadoRetirarMonto.textContent = ``
        }
    } else if (inputUsuario3.checked) {
        spanResultadoRetirarMonto.textContent = `Operacion exitosa. Saldo actual $${saldoTotalRestaUsuario3}`
        if(saldoTotalRestaUsuario3 > 9){} else{
            alert("Necesitas $10 minimo en tu cuenta")
            spanResultadoRetirarMonto.textContent = ``
        }
    }
}

