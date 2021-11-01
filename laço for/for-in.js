const pessoa ={
    nome: 'Otavio',
    idade: 25
};

//key-value-chave
for(let chave in pessoa){
    console.log(chave,pessoa ['idade']);
}


const cores = ['vermelho','azul','verde'];
for (let indice in cores) {
    console.log(indice,cores[indice])
}

//for-of
for(let cors of cores){
    console.log(cors);
}




const veiculos = ['carro','Moto','Bicicleta'];

for (let veiculo of veiculos){
    console.log(veiculo);
}