import connection from "../connection"

export default async function orderUsers(sort: string, order: string):Promise<any> {
    const result = await connection.raw(`
       SELECT *
       FROM aula49_exercicio
       WHERE name LIKE "%${name}%"
       ORDER BY name OR type ;
    `)
 
    return result[0]
 }