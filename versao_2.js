/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo(a) ao jogo de BlackJack 2.0!")

let inicioJogo = confirm("Bem vindo(a) ao jogo de BlackJack 2.0!\nDeseja iniciar uma nova partida?")
let cartasUsuario = []
let cartasBanca = []


if (inicioJogo) {

   let parDeAs = false

   while (!parDeAs) {

      cartasUsuario.push(comprarCarta())
      cartasUsuario.push(comprarCarta())
      cartasBanca.push(comprarCarta())
      cartasBanca.push(comprarCarta())

      if (cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11 || cartasBanca[0].valor === 11 && cartasBanca[1].valor === 11) {
         cartasUsuario = []
         cartasBanca = []
      } else {
         parDeAs = true
      }
   }

   let novaRodada = true

   while (novaRodada) {

      let pontos = 0
      let suasCartas = ""
      for (let carta of cartasUsuario) {
         suasCartas += carta.texto + " "
         pontos += carta.valor
      }

      if (pontos > 21) {
         novaRodada = false
      } else {
         let novaCarta = confirm(`Suas cartas são ${suasCartas}.\nA carta da banca é ${cartasBanca[0].texto}.\nDeseja comprar mais uma carta?`)

         if (novaCarta) {
            cartasUsuario.push(comprarCarta())
         } else {
            novaRodada = false
         }

      }
   }

   let cartasDoUsuario = ""
   let cartasDaBanca = ""
   let pontuacaoUsuario = 0
   let pontuacaoBanca = 0

   for (let carta of cartasUsuario) {
      pontuacaoUsuario += carta.valor
      cartasDoUsuario += carta.texto + " "
   }

   for (let carta of cartasBanca) {
      pontuacaoBanca += carta.valor
      cartasDaBanca += carta.texto + " "
   }

   if (pontuacaoUsuario <= 21)
      while (pontuacaoBanca <= 21 && pontuacaoBanca < pontuacaoUsuario) {
         cartasBanca.push(comprarCarta())
         pontuacaoBanca = 0
         cartasDaBanca = ""

         for (let carta of cartasBanca) {
            pontuacaoBanca += carta.valor
            cartasDaBanca += carta.texto + " "
         }
      }

   if (pontuacaoUsuario > pontuacaoBanca && pontuacaoUsuario <= 21) {
      console.log(`Você ganhou!\n\nCartas do usuário: ${cartasDoUsuario} | Pontuação do usuário: ${pontuacaoUsuario}\nCartas da banca${cartasDaBanca} | Pontuação da banca: ${pontuacaoBanca}\n\nParabéns!!!`)

      alert(`Você ganhou!!\n\nCartas do usuário: ${cartasDoUsuario} | Pontuação do usuário: ${pontuacaoUsuario}\nCartas da banca${cartasDaBanca} | Pontuação da banca: ${pontuacaoBanca}\n\nParabéns!!!`)

   } else if (pontuacaoBanca > pontuacaoUsuario && pontuacaoBanca <= 21) {
      console.log(`A banca ganhou!\n\nCartas do usuário: ${cartasDoUsuario} | Pontuação do usuário: ${pontuacaoUsuario}\nCartas da banca${cartasDaBanca} | Pontuação da banca: ${pontuacaoBanca}\n\nMais sorte da próxima vez!`)

      alert(`A banca ganhou!\n\nCartas do usuário: ${cartasDoUsuario} | Pontuação do usuário: ${pontuacaoUsuario}\nCartas da banca${cartasDaBanca} | Pontuação da banca: ${pontuacaoBanca}\n\nMais sorte da próxima vez!`)

   } else if (pontuacaoUsuario > 21 && pontuacaoBanca <= 21) {
      console.log(`A sua pontuação estourou, você perdeu!\n\nCartas do usuário: ${cartasDoUsuario} | Pontuação do usuário: ${pontuacaoUsuario}\nCartas da banca${cartasDaBanca} | Pontuação da banca: ${pontuacaoBanca}\n\nMais sorte da próxima vez!`)

      alert(`A sua pontuação estourou, você perdeu!\n\nCartas do usuário: ${cartasDoUsuario} | Pontuação do usuário: ${pontuacaoUsuario}\nCartas da banca${cartasDaBanca} | Pontuação da banca: ${pontuacaoBanca}\n\nMais sorte da próxima vez!`)

   } else if (pontuacaoBanca > 21 && pontuacaoUsuario <= 21) {
      console.log(`A pontuação da banca estourou, a casa perdeu!\n\nCartas do usuário: ${cartasDoUsuario} | Pontuação do usuário: ${pontuacaoUsuario}\nCartas da banca${cartasDaBanca} | Pontuação da banca: ${pontuacaoBanca}\n\nVocê ganhou, parabéns!!!`)

      alert(`A pontuação da banca estourou, a casa perdeu!\n\nCartas usuário: ${cartasDoUsuario} | Pontuação usuário: ${pontuacaoUsuario}\nCartas Banca${cartasDaBanca} | Pontuação banca: ${pontuacaoBanca}\n\nVocê ganhou, parabéns!!!`)

   } else {
      (pontuacaoBanca === pontuacaoUsuario)
      console.log(`O jogo empatou!\n\nCartas usuário: ${cartasDoUsuario} | Pontuação usuário: ${pontuacaoUsuario}\nCartas Banca${cartasDaBanca} | Pontuação banca: ${pontuacaoBanca}`)
      alert(`O jogo empatou\n\nCartas usuário: ${cartasDoUsuario} | Pontuação usuário: ${pontuacaoUsuario}\nCartas Banca${cartasDaBanca} | Pontuação banca: ${pontuacaoBanca}`)
   }

} else {
   console.log("O jogo acabou!")
   alert("O jogo acabou!\nAté a próxima!")
}

