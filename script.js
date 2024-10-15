var altura = document.getElementById("altura");
var peso = document.getElementById("peso");

function calcularImc() {
    var valor_altura = altura.value/100;
    var valor_peso = peso.value;
    var valor_IMC = (valor_peso / (valor_altura * valor_altura)).toFixed(2);

    if (valor_altura <= 0 || valor_peso <= 0){
        window.alert("Insira valores validos.")

    } else if (valor_IMC < 18.5){
        window.alert("Seu IMC é: " + valor_IMC + " Magreza");

    } else if (valor_IMC >= 18.5 & valor_IMC <=24.99){
        window.alert("Seu IMC é: " + valor_IMC + " Peso Normal");

    } else if (valor_IMC >= 25 & valor_IMC <=29.9){
        window.alert("Seu IMC é: " + valor_IMC + " Sobrepeso");

    } else if (valor_IMC >= 30 & valor_IMC <=34.9){
        window.alert("Seu IMC é: " + valor_IMC + " Obesidade grau I");

    } else if (valor_IMC >= 35 & valor_IMC <=39.9){
        window.alert("Seu IMC é: " + valor_IMC + " Obesidade grau II");

    } else if (valor_IMC >= 40){
        window.alert("Seu IMC é: " + valor_IMC + " Obesidade grau III");
    }
}
