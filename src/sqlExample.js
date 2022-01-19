const {config} = require('dotenv')
const {join} = require('path')
const SqllServer = require('./strategies/sqlserver/sqlserver')
const PlanetasSchema = require('./strategies/sqlserver/schemas/PlanetaSchema')
const Context = require('./strategies/base/contextStrategy')
const env = process.env.NODE_ENV || "dev"
const configPath = join(__dirname, './config', `.env.${env}`)
config ({
    path: configPath
})

async function main(){
    const connectionSqlServer = await SqllServer.connect()
    const model = await SqllServer.defineModel(connectionSqlServer, PlanetasSchema)
    const contextSqlServer = new Context(new SqllServer(connectionSqlServer, model)) 
    const result = await contextSqlServer.isConnected()
    console.log(result);
    // const [result] = await contextSqlServer.read({
    //     username: dado.username.toLowerCase()
    // })
    // if (!result){
    //     return {
    //         isValid: false
    //     }
    // }       
}

main()