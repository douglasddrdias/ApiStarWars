const Sequelize = require('sequelize')

const HistoricoViagensSchema
 = {
    name: 'PilotosNaves',
    schema: {
        IdPiloto:{
            type: Sequelize.INTEGER,
            require: true,
            primaryKey: true,
            references: {
                model: 'Pilotos',
                key: 'IdPiloto'
            }            
        },
        IdNave: {
            type: Sequelize.STRING,
            require: true,
            primaryKey: true,
            references: {
                model: 'Naves',
                key: 'IdNave'
            }              
        },
        FlagAutorizado:{
            type: Sequelize.BOOLEAN,
            require: true
        }
    },
    options: {
        tableName: 'PilotosNaves',
        freezeTableName: false,
        timestamps: false        
    }    
}

module.exports = HistoricoViagensSchema