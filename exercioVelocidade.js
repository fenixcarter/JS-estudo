//velocidade máxima de ate 70km
//a cada 5km acima do limite voce ganha 1 ponto
//Math.Floor()
//caso pontos maior que 1 -> "Carteira Suspendida"
verificarVelocidade(130);

function verificarVelocidade(velocidadePermitida){
   const velocidadeMax = 70;
   const Kmporpontos = 5;
    if (velocidadePermitida <= velocidadeMax)
      console.log ('Ok');
   else {
      
      const pontos = Math.floor(((velocidadePermitida - velocidadeMax) / Kmporpontos));
      if (pontos >= 12)
        console.log('Carteira Suspensa');
      else
         console.log('Pontos',pontos);
   }

    }
    
    //se caminhar menos que 70 passos eu canso
    //a cada x passos uma parada
    //math.floor()
    //caminhe sempre o dobro do que voce aguenta

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




    
      
