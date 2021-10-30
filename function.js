//verbo + substantivo
let direcao = "direita";
function mudarDirecao(sentido,caminho){
  direcao = sentido + ' ' + caminho;

};

console.log(direcao);   
mudarDirecao("primeiro esquerda","depois esquerda");
console.log(direcao);

