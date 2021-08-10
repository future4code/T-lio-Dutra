type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// a) com o typescript instalado, é preciso executar o comando tsc + ./o nome do arquivo.
// b) o que mudaria no processo é a adição do caminho para a pasta src ./src/nome do arquivo.
// c) sim, configurando as pastas rootDit e outDir, e executando o comando tsc, tudo sera transpilado.
// d) configuração do outDir e rootDir com seus caminhos específicos, e a mudança de es5 para es6.