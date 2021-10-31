// Falsy
// undefined
// null
// 0
// false
// ''
// NaN / not a number

//Truthy - quando nao se esta em nenhuma das condições falsy

var corPersonalizada = '';
var corPadrao = 'amarelo';
var corAtual = corPersonalizada || corPadrao;

console.log(corAtual);
