# ⚔️ Calculadora de Partidas Ranqueadas

Este é um projeto simples em Node.js que calcula o nível de um jogador com base em seu número de vitórias e derrotas, exibindo um ranking correspondente.

## 📜 Descrição

O script principal define uma função `calculadoraDePartidasRanqueadas` que recebe a quantidade de vitórias e derrotas de um jogador. Com base no saldo (vitórias - derrotas), ele determina o nível do jogador e exibe uma mensagem formatada e colorida no console.

O projeto demonstra:
- Manipulação de funções e lógica condicional (`if`/`else if`/`else`).
- Uso de arrays para armazenar e iterar sobre dados de jogadores.
- Utilização de um pacote externo (`chalk`) para estilizar a saída do terminal.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript.
- **JavaScript**: Linguagem de programação principal.
- **Chalk**: Biblioteca para colorir e estilizar o texto no terminal.

## 📋 Pré-requisitos

Antes de começar, você precisará ter o Node.js instalado em sua máquina.

## ⚙️ Instalação

1. Clone o repositório (ou baixe os arquivos para um diretório local).
2. Abra o terminal no diretório do projeto.
3. Instale as dependências necessárias (neste caso, o `chalk`):
   ```bash
   npm install
   ```

## ▶️ Como Executar

Para rodar o projeto, execute o seguinte comando no seu terminal:

```bash
node src/index.js
```

## 📊 Lógica de Ranking

O nível do jogador é determinado pelo saldo de vitórias da seguinte forma:

- **Ferro**: Saldo de vitórias menor ou igual a 10.
- **Bronze**: Saldo de vitórias entre 11 e 20.
- **Prata**: Saldo de vitórias entre 21 e 50.
- **Ouro**: Saldo de vitórias entre 51 e 80.
- **Diamante**: Saldo de vitórias entre 81 e 90.
- **Lendário**: Saldo de vitórias entre 91 e 100.
- **Imortal**: Saldo de vitórias maior ou igual a 101.