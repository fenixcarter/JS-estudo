//Escrever uma função que use 2 números e retornar o maior entre eles.


let valorMaior = max(33,9);
console.log(valorMaior);

function max(numero1,numero2){
   return numero1 > numero2 ? numero1: numero2 ;
}


let serrapido = correr(33,50);
console.log(serrapido);

function correr(rapido,devagar){
     return rapido > devagar ? rapido : devagar;
    
}