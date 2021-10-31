let a = 'verde';
let b = 'azul';

let c = a;
a = b;
b = c;

//é nescessario uma terceira variavel
//guardar valor da primeira variavel para nao ser modificada
//quando passar o valor a segunda variavel nao perder valor, esta guardada.

console.log(a);
console.log(b);

