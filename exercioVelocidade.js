//velocidade máxima de ate 70km
//a cada 5km acima do limite voce ganha 1 ponto
//Math.Floor()
//caso pontos maior que 1 -> "Carteira Suspendida"
verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if ( velocidade <= 70)
        console.log('ok');
    else {
       const pontos = Math.floor((velocidade - velocidadeMaxima) / KmPorPonto);
       if ( pontos >= 12)
             console.log('carteira suspensa');
       else 
             console.log('pontos',pontos);
    }

}