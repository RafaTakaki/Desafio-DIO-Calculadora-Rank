let classification = balance(50, 15);
console.log("O Herói tem de saldo de "+ classification[0] + " está no nível de "
 + classification[1])

function balance(victories, loses) {
    let result = victories - loses;
    if (result < 10) {
        return [result, "Ferro"]
    } else if (result < 20){
        return [result, "Bronze"]
    } else if (result < 50){
        return [result, "Prata"]
    } else if (result < 80){
        return [result, "Ouro"]
    } else if (result < 90){
        return "Diamante"
    } else if (result < 100){
        return [result, "Lendário"]
    } else {
        return [result, "Imortal"]
    }
}