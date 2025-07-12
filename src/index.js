import chalk from "chalk";
import  {jogadores, vitorias, derrotas} from "./services/personagens.js";
import calculadoraDePartidasRanqueadas from "./services/ranqueadas.js";



//mostrar resultado para cada jogador
for(let i = 0; i < jogadores.length; i++) {
  let nome = jogadores[i]
  let resultado = calculadoraDePartidasRanqueadas(vitorias[i], derrotas[i])
 
  console.log(chalk.green.italic(`O herói ${nome} tem ${vitorias[i]} vitórias e ${derrotas[i]} derrotas.\n`))
  console.log(resultado)
}