const Sequelize = require('sequelize')

const PlanetasSchema
 = {
    name: 'Planetas',
    schema: {
        idPlaneta:{
            type: Sequelize.INTEGER,
            require: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            require: true
        },
        Rotacao:{
            type: Sequelize.FLOAT,
            require: true
        },
        Orbita:{
            type: Sequelize.FLOAT,
            require: true
        },
        Diametro:{
            type: Sequelize.FLOAT,
            require: true
        },
        Populacao: {
            type: Sequelize.INTEGER,
            require: true
        },        
    },
    options: {
        tableName: 'Planetas',
        freezeTableName: false,
        timestamps: false        
    }
}
module.exports = PlanetasSchema
