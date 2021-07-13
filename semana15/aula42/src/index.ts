// 1) a: Quando colocado um número dá erro na variável, por ser do tipo string.

// const minhaString: string = 15

// b: Temos que atribuir o tipo number com o comparador | para poder adicionar outros tipos.

// const meuNumero: string|number = 15 

// c, d:

// enum rainbowColors {
//     RED = "Red",
//     ORANGE = "Orange",
//     YELLOW = "Yellow",
//     GREEN = "Green",
//     BLUE = "Blue",
//     INDIGO = "Indigo",
//     VIOLET = "Violet"
// }

// type person = {
//     name: string
//     age: number
//     favColor: rainbowColors
// }

// const venus: person = {
//     name: "Minako",
//     age: 23,
//     favColor: rainbowColors.YELLOW
// }

// const moon: person = {
//     name: "Usagi",
//     age: 22,
//     favColor: rainbowColors.BLUE
// }

// const mars: person = {
//     name: "Rei",
//     age: 22,
//     favColor: rainbowColors.RED
// }

// 2) a: A entrada é um array de números e a saída são as estatísticas
// b: const numerosOrdenados, let soma, const estatistica
// function obterEstatisticas(numeros:number[]) {

//     const numerosOrdenados:number[] = numeros.sort(
//         (a:number, b:number) => a - b
//     )

//     let soma:number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas:object = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// // c:

// type amostraDeIdades = {
//     numeros: number[]
//     obterEstatisticas: (numeros:number[]) => number[]
// }

// 3) a:

type post = {
    autor: string
    texto: string
}

const posts: post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

// b: A entrada são os parametros (post e autorInformado) e a saída retorna o autor do post

function buscarPostsPorAutor(posts:post[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }