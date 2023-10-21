var tarjetas = document.querySelectorAll(".tarjeta");
var tarjetaActual = 0;

function mostrarTarjetas() {
    tarjetas.forEach((tarjeta, index) => {
        if (index >= tarjetaActual && index < tarjetaActual + 3) {
            tarjeta.style.display = "block";
        } else {
            tarjeta.style.display = "none";
        }
    });
}

function avanzarTarjeta(n) {
    tarjetaActual += n;

    if (tarjetaActual > tarjetas.length - 3) {
        tarjetaActual = tarjetas.length - 3;
    }

    if (tarjetaActual < 0) {
        tarjetaActual = 0;
    }

    mostrarTarjetas();
}

mostrarTarjetas();