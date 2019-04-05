function suma(){
    var Numero1 = parseFloat(document.getElementById('sumaNumero1').value);
    var Numero2 = parseFloat(document.getElementById('sumaNumero2').value);
    var Resultado = Numero1 + Numero2;

    document.getElementById('sumaResultado').value = Resultado;
}

function resta(){
    var numero1 = parseFloat(document.getElementById('restaNumero1').value);
    var numero2 = parseFloat(document.getElementById('restaNumero2').value);
    var resultado = numero1 - numero2;

    document.getElementById('restaResultado').value = resultado;
}

function multiplicar(){
    var numero1 = parseFloat(document.getElementById('multiploNumero1').value);
    var numero2 = parseFloat(document.getElementById('multiploNumero2').value);
    var resultado = numero1 * numero2;

    document.getElementById('multiploResultado').value = resultado;
}

function division(){
    var numero1 = parseFloat(document.getElementById('divisionNumero1').value);
    var numero2 = parseFloat(document.getElementById('divisionNumero2').value);
    var resultado = numero1 / numero2;

    document.getElementById('divisionResultado').value = resultado;
}
