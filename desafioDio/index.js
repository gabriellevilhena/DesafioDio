
const nomeHeroi = prompt("Digite o nome do Heroi");
const xpHeroi = parseInt(prompt("Digite o XP do Heroi"));


let nivel 

if(xpHeroi < 1000){
    nivel = "ferro";
}else if (xpHeroi >= 1001 && xpHeroi <= 2000){
    nivel ="bronze";

}else if (xpHeroi >= 2001 && xpHeroi <=5000){
    nivel = "prata"
}else if(xpHeroi >=6000 && xpHeroi <=7000 ){
    nivel = "ouro";
}else if (xpHeroi >= 7001 && xpHeroi <= 8000){
    nivel = "platina";
}else if(xpHeroi >= 8001 && xpHeroi<= 9000){
    nivel = "ascendente";
}else if (xpHeroi >= 9001 && xpHeroi <=10000){
    nivel = "imortal";
}else {
    nivel = "radiante";
}

alert (`O Herói do nome ${nomeHeroi} esta no nível ${nivel}`);
   