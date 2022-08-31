const db = require('./db')

//CREATE CATEGORIES
const create = async(data) => {
    const dbConn = await db.init('./banco.sqlite3')
    await db.queryWithParams(dbConn,`insert into categories (id,category) values (?,?)`,data)
}

//READ CATEGORIES
const findAll = async() => {
    const dbConn = await db.init('./banco.sqlite3')
    return await db.query(dbConn,`select * from categories`)

}
//REMOVE CATEGORIES
const remove = async(id) => {
    const dbConn = await db.init('./banco.sqlite3')
    await db.queryWithParams(dbConn,`delete from categories where id = ?`,[id])
}
//UPDATE CATEGORIES
const update = async(id,data) => {
    const dbConn = await db.init('./banco.sqlite3')
    await db.queryWithParams(dbConn, `update categories set category=? where id=?`, [...data, id])
     
   
}
const findAllPaginated = async() => {
    const pageSize = 2
    const currentPage = 3
    const dbConn = await db.init('./banco.sqlite3')
    //primeiro parâmetro pageSize(quantos pulam) o segundo currentPage(qunatos serão mostrados)
    return await db.query(dbConn, `select * from categories limit ${pageSize},${currentPage}`)
     
   
}


module.exports = {
    findAll,
    findAllPaginated,
    remove,
    create,
   update
}