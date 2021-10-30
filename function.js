//verbo + substantivo
let direcao = "direita";
function mudarDirecao(sentido,caminho){
  direcao = sentido + ' ' + caminho;

};

console.log(direcao);   
mudarDirecao("primeiro esquerda","depois direta");
console.log(direcao);


let ativar = "ligarr";
function ativarDesativarLuz(ligado,desligado,semEnergia){
    ativado = ligado;
    desativado = desligado;
    standBy = semEnergia;
    

}

console.log(ativar);
ativarDesativarLuz("ligar luz", "desligar luz", "Faltou Energia");
console.log(standBy);