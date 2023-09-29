// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

// console.log("Bem vindo(a) ao jogo de BlackJack 1.0!")

// let inicioJogo = confirm("Deseja iniciar uma nova jogada?")

// if (inicioJogo) {

//    let primeiraCartaUsuario = comprarCarta()
//    let segundaCartaUsuario = comprarCarta()
//    let primeiraCartaBanca = comprarCarta()
//    let segundaCartaBanca = comprarCarta()

//    let pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
//    let pontuacaoBanca = primeiraCartaBanca.valor + segundaCartaBanca.valor

//    console.log(`Suas cartas: ${primeiraCartaUsuario.texto} e ${segundaCartaUsuario.texto}. A soma é de: ${pontuacaoUsuario}`)
//    console.log(`Cartas da banca: ${primeiraCartaBanca.texto} e ${segundaCartaBanca.texto}. A soma das cartas da banca é de: ${pontuacaoBanca}`)

//    if (pontuacaoUsuario > pontuacaoBanca) {
//       console.log(`Você ganhou com a pontuação de: ${pontuacaoUsuario} pontos contra ${pontuacaoBanca} pontos da banca!`)
//       alert(`Você ganhou com a pontuação de: ${pontuacaoUsuario} pontos contra ${pontuacaoBanca} pontos da banca!\nParabéns!`)

//    } else if (pontuacaoBanca > pontuacaoUsuario) {
//       console.log(`A banca ganhou com a pontuação de: ${pontuacaoBanca} pontos contra ${pontuacaoUsuario} pontos do usuário!`)
//       alert(`A banca ganhou com a pontuação de: ${pontuacaoBanca} pontos contra ${pontuacaoUsuario} pontos do usuário!\nMais sorte da próxima vez!`)

//    } else if (pontuacaoBanca === pontuacaoUsuario) {
//       console.log("O jogo empatou!")
//       alert("O jogo empatou")

// } else {
//       console.log("O jogo acabou!")
//       alert("O jogo acabou!\nAté a próxima!")
//    }
// }