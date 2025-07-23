
let nomeHeroi = "Superman";
let expHeroi = 0; // Defina aqui o valor de experiência do herói


if (expHeroi != 0 && expHeroi <= 1000) {
    console.log(" O herói " + nomeHeroi + " está no nível Ferro");

}

else if (expHeroi > 1000 && expHeroi < 2001) {
    console.log(" O herói " + nomeHeroi + " está no nível Bronze");

}

else if (expHeroi >= 2001 && expHeroi < 5001) {
    console.log(" O herói " + nomeHeroi + " está no nível Prata");

}

else if (expHeroi >= 5001 && expHeroi < 7001) {
    console.log(" O herói " + nomeHeroi + " está no nível Ouro");

}

else if (expHeroi >= 7001 && expHeroi < 8001) {
    console.log(" O herói " + nomeHeroi + " está no nível Platina");

} 

else if (expHeroi >= 8001 && expHeroi < 9001) {
    console.log(" O herói " + nomeHeroi + " está no nível Ascendente");
} 

else if (expHeroi >= 9001 && expHeroi < 10001) {
    console.log(" O herói " + nomeHeroi + " está no nível Imortal");
} 

else if (expHeroi >= 10001) {
    console.log(" O herói " + nomeHeroi + " está no nível Radiante");
}
else if (expHeroi == 0) {
    console.log(" O herói " + nomeHeroi + " ainda não possui experiência");
}
