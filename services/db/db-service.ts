// import myqsl from "mysql"
// import { config } from "../../db/config"

//  class DBService{
//     private connection;

//     constructor(){
//         this.connection =  myqsl.createConnection(config.db)
//     }

//     async query(sql: string, params: Record<string, any>){
//         const [results, ] = await this.connection.execute(sql, params)
//         return results
//     }
//  }

//  export default DBService