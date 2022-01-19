const Sequelize = require('sequelize')

const NavesSchema
 = {
    name: 'Naves',
    schema: {
        IdNave:{
            type: Sequelize.INTEGER,
            require: true,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            require: true
        },
        Modelo:{
            type: Sequelize.STRING,
            require: true
        },
        Passageiros:{
            type: Sequelize.INTEGER,
            require: true
        },
        Carga:{
            type: Sequelize.FLOAT,
            require: true
        },
        Classe: {
            type: Sequelize.STRING,
            require: true
        },        
    },
    options: {
        tableName: 'Naves',
        freezeTableName: false,
        timestamps: false        
    }
}
module.exports = NavesSchema