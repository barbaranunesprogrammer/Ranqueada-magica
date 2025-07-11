import chalk from "chalk";


//criar uma funçao que recebe a quantidade de vitoria e derrotas de um jogador
function calculadoraDePartidasRanqueadas(vitorias, derrotas){
  
  //retorne um resultado numa vareavel deve ser feito atravez do calculo (vitorias - derrotas)
  let saldodeVitorias = vitorias - derrotas
  let nivelDoJogador

  //se vitorias for  <10= Ferro
  if(saldodeVitorias <10){
    nivelDoJogador = "Ferro"
  }

  //se vitorias for entre 11 e 20 = bronze
  else if(saldodeVitorias >= 11 && saldodeVitorias <= 20){
    nivelDoJogador = "Bronze"
  }

  //se vitorias for entre 21 e 50 prata
  else if (saldodeVitorias >= 21 && saldodeVitorias <= 50){
    nivelDoJogador = "Prata"
  }

  //se vitorias for entre 51 e 80 = ouro
  else if (saldodeVitorias >= 51 && saldodeVitorias <= 80){
    nivelDoJogador = "Ouro"
  }

  //se vitorias for entre 81 e 90 = Diamante
  else if (saldodeVitorias >= 81 && saldodeVitorias <= 90){
    nivelDoJogador = "Diamante"
  }

  //se vitorias for entre 91 e 100 = lendario
  else if (saldodeVitorias >= 91 && saldodeVitorias <= 100){
    nivelDoJogador = "Lendario"
  }

  //se vitorias for maior ou igual a 101 = imortal
  else {
    nivelDoJogador = "Imortal"
  }

  //mensagem final  "o heroi tem saldo de {saldo de vitorias } e esta no nivel  de {nivel }
  return chalk.red.italic(`O heroi tem saldo de ${saldodeVitorias} e está no nível de ${nivelDoJogador}\n`);

}

//let jogador = [nome]  faça um array no let jogador com nome de personagens do harry potter
let jogadores = ["Dumbledore",,"Harry", "Hermione", "Ron", "Draco" ]

//definir vitorias e derrotas manualmente para cada jogador
let vitorias = [34, 55, 12, 102, 88, 9]
let derrotas = [5, 20, 3, 1, 10, 2]

//mostrar resultado para cada jogador
for(let i = 0; i < jogadores.length; i++) {
  let nome = jogadores[i]
  let resultado = calculadoraDePartidasRanqueadas(vitorias[i], derrotas[i])
 
  console.log(chalk.green.italic(`O herói ${nome} tem ${vitorias[i]} vitórias e ${derrotas[i]} derrotas.\n`))
  console.log(resultado)
}
