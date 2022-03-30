function calcularPerimetro(){
    let valor = document.getElementById("inputCuadrado").value;
    let perimetro= valor*4;
    alert("El perimetro es " + perimetro);
}
function calcularArea(){
    let valor = document.getElementById("inputCuadrado").value;
    let area= valor*valor ;
    alert("El perimetro es " + area + "cm^2");
}