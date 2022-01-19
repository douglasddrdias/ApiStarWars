const Sequelize = require('sequelize')

const PilotosSchema
 = {
    name: 'Pilotos',
    schema: {
        IdPiloto:{
            type: Sequelize.INTEGER,
            require: true,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            require: true
        },
        AnoNascimento:{
            type: Sequelize.STRING,
            require: true
        },
        IdPlaneta:{
            type: Sequelize.INTEGER,
            require: true,
            references: {
                model: 'Planetas',
                key: 'idPlaneta'
            }
        },
    },
    options: {
        tableName: 'Pilotos',
        freezeTableName: false,
        timestamps: false        
    }    
}

module.exports = PilotosSchema