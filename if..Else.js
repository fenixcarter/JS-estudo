//If.. Else

//Se a hora estive entre 06:00 até 12:00 : Bom dia!
//Se estive entre 12:00 ate 18:00 : Ba tarde!
//Caso contrário : Boa noite1
let hora =  22;

if (hora > 6 && hora < 12) {
    console.log("bom dia");
}

else if (hora > 12 && hora < 18) {
   console.log("boa tarde");
}
else {
    console.log("boa noite");
}