function calcular() {
    let cantidad = 0;
    let color = 0;
    let resultados = 0;
    let resultados1 = 0;
    let resultados2 = 0;
    let resultados3 = 0;
    let precio = 2;
    let total = 0;

    cantidad = document.getElementById("input1").value;
    color = document.getElementById("select").value;
    resultados = document.getElementById("resultados");

    total = cantidad * precio;

    resultados1 = document.getElementById("text1").innerHTML = "<b>Total: </b> $" + total + ".000.000";
    resultados2 = document.getElementById("text2").innerHTML = "<b>Cantidad: </b>" + cantidad;
    resultados3 = document.getElementById("text3");
    resultados3.style.background= color;

    resultados.style.display = "block";

    console.log(color);
}