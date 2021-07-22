// 4) a: Usando o comando tsc, para transpilar o codigo para JS

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

// b: O processo seria diferente apenas no tsconfig.json, é preciso mudar o "RootDir" para o ./src.
// c: O comando tsc sem parâmetros converte todos os arquivos com .ts.
// d: as configurações que mudam são: "Target": "es6", descomentar o "sourceMap"; "outDir": "./build"; "rootDir": "./src", "removeComments": true, "strict": true, "noImplicitAny": true.