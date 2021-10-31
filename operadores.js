//Operadores aritimeticos(matematicos)
//operadores atriuição
//operadores de comparação
//operadores lógicos
// operadores bitwise



//operadores aritimeticos

 let salario = 100;

// + , - , * , / , **

//operadres basicos
//console.log(salario + salario);
//console.log(salario - salario);
//console.log(salario * salario);
//console.log(salario / salario);
//console.log(5 ** 5);

// ++ --

let idade = 18;

console.log(--idade);
console.log(idade);

var valorCarro = 100;
console.log(valorCarro);
//valorCarro = valorCarro + valorCarro
//apenas usar +=, -=, operador mais operador matematico

valorCarro += valorCarro;
console.log(valorCarro);


//operadores de igualdade
//igualdade estrita
console.log( 1 === 1);
console.log( '1' === 1);

//igualdade solta
console.log( 1 == 1);
console.log( '1' == 1);
// comparaçao recomendada com 3 =, por sempre ter ctz que comparaçao estara correta


//operador térnario

//tem um cliente, 100 premium, menos que isso, comum

var pontos = 101;
var tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//expressao a ser comparada atribuida, verdadeiro ou falso



//operadores lógicos 
//operador lógico "e" (&&), retorna TRUE se os dois operandos forem true

//console.log(true && true);

var maiorDeIdade = true;
var possuiCarteira = false;
var podeaplicar = maiorDeIdade || possuiCarteira;

console.log('podeaplicar:' ,podeaplicar);






        //operador logico ou (||)
        // retornar true se um dos operandos forem true


        //operador NOT (!)

        var candidatoRecusado = !podeaplicar;
        console.log('Candidato Recusado',candidatoRecusado);



        var aulasterminadas = true;
        var testefeito = false;
        var aprovado = aulasterminadas || testefeito;

        console.log('aulas terminadas',aprovado);

        var reprovado = !aprovado;

        console.log('concluiu',reprovado);



        var aprendeUmaManobra = true;
        var caiuVariasvezes = true;
        var seMachucou = false;
        var continuarTentando = aprendeUmaManobra || caiuVariasvezes || seMachucou;

        console.log('aprendeu uma manobra nova',continuarTentando);

        var desistir = !continuarTentando;
        console.log('Quebrou um braço',desistir);
        