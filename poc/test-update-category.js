const sqlite = require('sqlite3').verbose()

const initDB = databaseFile => new Promise((resolve,reject)=>{
  const db =  new sqlite.Database( databaseFile, (err)=> {
        if(err){
            reject(err)
        }else{
           resolve(db) 
        }
  })
})
const run = (db, query, values) => new Promise((resolve,reject)=> {
    db.run(query,values, err => {
        if(err){
            reject(err)
        }else{
          resolve()  
        }
    })
})


const updateCategories = async() => {
    const db = await initDB('banco.sqlite3')

    //UPDATE DATA 
    await run(db, `update categories set category=? where id=?`, ['nova atualizada', 8])
     
    console.log(' category updated')
}
updateCategories().catch(err =>{
    console.log(err)
})