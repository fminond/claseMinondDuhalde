//ejemplo BUCLE for//


let metodoPagoCorrecto=("VISA")
for (let index = 3;index > 0;index--) {
    let metodoPago=prompt("Elegi un metodo de pago para abonar, tenes " + index + " opciones");
    if (metodoPago==metodoPagoCorrecto) {
        alert("Barbaro, vas a poder abonar.Te redirigiremos para el pago. Espere unos segundos... ");
        break;
    }
    else{
        alert("No vas a poder abonar con esa opcion");
    }
    
}

    










