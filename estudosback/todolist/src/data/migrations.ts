import {connection} from "../connection";

const printarError= (error:any) =>{ console.log(error.sqlMessage || error.message) }

const criaTabela1 = () => connection
.raw(
`CREATE TABLE IF NOT EXISTS lista_usuarios_projeto16 (
id VARCHAR(255) PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
apelido VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL
)` 
).then(() => console.log("tabela criada 1"))
.catch(printarError)

const criaTabela2 = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS lista_tarefas_projeto16 (
            id VARCHAR(255) PRIMARY KEY,
            titulo VARCHAR(255) NOT NULL,
            descricao TEXT NOT NULL,
            prazo DATE NOT NULL,
            status ENUM('a fazer', 'fazendo', 'feita') DEFAULT 'a fazer',
            id_criador VARCHAR(255) NOT NULL,
            FOREIGN KEY (id_criador) REFERENCES lista_usuarios_projeto16(id)
            )`
).then(() => console.log("tabela criada 2"))
.catch(printarError)

const criaTabela3 = () => connection.raw(`
            CREATE TABLE IF NOT EXISTS lista_responsaveis_projeto16(
                id_tarefa VARCHAR(255),
                id_responsavel VARCHAR(255),
                FOREIGN KEY (id_tarefa) REFERENCES lista_tarefas_projeto16(id),
                FOREIGN KEY (id_responsavel) REFERENCES lista_usuarios_projeto16(id)
                )`)
    .then(() => console.log("tabela criada 3"))
    .catch(printarError)


const encerraConexao = () => connection.destroy()
criaTabela1()
criaTabela2()
criaTabela3().finally(encerraConexao)