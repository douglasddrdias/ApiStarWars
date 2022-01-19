const {config} = require('dotenv')
const {join} = require('path')
const SqllServer = require('./strategies/sqlserver/sqlserver')
const PlanetasSchema = require('./strategies/sqlserver/schemas/PlanetasSchema')
const Context = require('./strategies/base/contextStrategy')
const PilotosSchema = require('./strategies/sqlserver/schemas/PilotosSchema')
const NavesSchema = require('./strategies/sqlserver/schemas/NavesSchema')
const PilotosNavesSchema = require('./strategies/sqlserver/schemas/PilotosNavesSchema')
const HistoricoViagensSchema = require('./strategies/sqlserver/schemas/HistoricoViagensSchema')
const env = process.env.NODE_ENV || "dev"
const configPath = join(__dirname, './config', `.env.${env}`)
config ({
    path: configPath
})

async function main(){
    const connectionSqlServer = await SqllServer.connect()
    const model = await SqllServer.defineModel(connectionSqlServer, PlanetasSchema)
    const contextSqlServer = new Context(new SqllServer(connectionSqlServer, model)) 
    const logou = await contextSqlServer.isConnected()
    console.log(logou);
    const resultado = await contextSqlServer.read();
    console.log(resultado);
    const modelPilotos = await SqllServer.defineModel(connectionSqlServer, PilotosSchema)
    const contextPiloto = new Context(new SqllServer(connectionSqlServer, modelPilotos))
    const resultadoPilotos = await contextPiloto.read();
    console.log(resultadoPilotos);
    const modelNaves = await SqllServer.defineModel(connectionSqlServer, NavesSchema)
    const contextNaves = new Context(new SqllServer(connectionSqlServer, modelNaves))
    const resultadoNaves = await contextNaves.read();
    console.log(resultadoNaves);
    const modelPilotosNaves = await SqllServer.defineModel(connectionSqlServer, PilotosNavesSchema)
    const contextPilotoNaves = new Context(new SqllServer(connectionSqlServer, modelPilotosNaves))
    const resultadoPilotosNaves = await contextPilotoNaves.read();
    console.log(resultadoPilotosNaves);
    const modelHistoricoViagens = await SqllServer.defineModel(connectionSqlServer, HistoricoViagensSchema)
    const contextHistoricoViagens = new Context(new SqllServer(connectionSqlServer, modelHistoricoViagens))
    const resultadoHistoricoViagens = await contextHistoricoViagens.read();
    console.log(resultadoHistoricoViagens);

}

main()