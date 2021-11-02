//velocidade máxima de ate 70km
//a cada 5km acima do limite voce ganha 1 ponto
//Math.Floor()
//caso pontos maior que 1 -> "Carteira Suspendida"
verificarVelocidade(130);

function verificarVelocidade(velocidade){
   const velocidadeMax = 70;
   const Kmporpontos = 5;
    if (velocidade <= velocidadeMax)
      console.log ('Ok');
   else {
      
      const pontos = Math.floor(((velocidade - velocidadeMax) / Kmporpontos));
      if (pontos >= 12)
        console.log('Carteira Suspensa');
      else
         console.log('Pontos',pontos);
   }

    }
    
    //se caminhar menos que 100 passos eu canso
    //a cada 10 passos uma parada
    //math.floor()
    //caso eu caminhe mais qe 100 e estagno

    passosdados(80);

    function passosdados(caminhar){
    const quantidadeDpassos = 70;
        if (caminhar <= quantidadeDpassos)
         console.log('Eu nao me canso');
    else {
         const parar = (caminhar - quantidadeDpassos);
        if (parar >= 70)
             console.log('canso');
        else 
             console.log('continuo caminhando',parar);
            
        }
    }


    
      
