//ejemplo BUCLE for//


let metodoPagoCorrecto1=("VISA");
let metodoPagoCorrecto2=("MASTERCARD");
let metodoPagoCorrecto3=("AMERICAN EXPRESS");

for (let index = 3;index > 0;index--) {
    let metodoPago=prompt("Elegi un metodo de pago para abonar, tenes " + index + " opciones");
    
    if (metodoPago==metodoPagoCorrecto1||metodoPago==metodoPagoCorrecto2||metodoPago==metodoPagoCorrecto3) 
    {
        alert("Barbaro, vas a poder abonar.Te redirigiremos para el pago. Espere unos segundos... ");
        break;
    }
    else{
        alert("No vas a poder abonar con esa opcion");
    }
    
}

    










