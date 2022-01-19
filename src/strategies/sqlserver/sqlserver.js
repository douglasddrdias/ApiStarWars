const ICrud = require('../interfaces/interfaceCrud')
const Sequelize = require('sequelize')
const { connect } = require('../base/contextStrategy')

class SqlServer extends ICrud {
    constructor(connection, schema) {
        super()
        this._connection = connection
        this._schema = schema
    }
    async isConnected() {
        try {
            await this._connection.authenticate()
            return true;
        } catch (error) {
            console.log('Fail!', error);
            return false;
        }
    }
    static async defineModel(connection, schema) {
        const model = connection.define(
            schema.name, schema.schema, schema.options
        )
        await model.sync()
        return model
    }
    static async connect() {
        return new Sequelize(process.env.NOME_BANCO, process.env.NOME_USUARIO, process.env.SENHA, {
            host: process.env.HOST,
            port: process.env.PORTA,
            dialect: "mssql",
            // debug das operações
            logging: true,
            ssl: process.env.SSL_DB,
        })
    }
    async create(item) {
        const { dataValues } = await this._schema.create(item)
        return dataValues
    }

    async read(item = {}) {
        return this._schema.findAll({ where: item, raw: true })
    }

    async update(id, item, upsert = false) {
        if (upsert) {
            return this._schema.upsert(item, { where: { id: id } })
        }
        return this._schema.update(item, { where: { id: id } })
    }

    async delete(id) {
        const query = id ? { id } : {}
        return this._schema.destroy({ where: query })
    }
}

module.exports = SqlServer