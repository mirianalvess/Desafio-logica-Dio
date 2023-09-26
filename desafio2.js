// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo 
//(vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let heroi = resultado(50, 5)
let saldo = partidas(50, 5)

function resultado(vitorias, derrotas){
    let saldo = vitorias - derrotas
    return saldo
}

function partidas(vitorias, derrotas){
    let partidasGanhas = vitorias - derrotas
    if(partidasGanhas <= 10){
        return "Ferro"
    }   else if(partidasGanhas >= 11 && partidasGanhas <= 20){
        return "Bronze"
    }   else if(partidasGanhas >= 21 && partidasGanhas <= 50){
        return "Prata"
    }   else if(partidasGanhas >= 51 && partidasGanhas <= 80){
        return "Ouro"
    }   else if(partidasGanhas >= 81 && partidasGanhas <= 90){
        return "Diamante"
    }   else if(partidasGanhas >= 91 && partidasGanhas <= 100){
        return "Lendário"
    }   else if(partidasGanhas <= 101){
        return "Imortal"
    }
}
console.log(`O Herói tem saldo de ${heroi} e está no nível ${saldo}`)