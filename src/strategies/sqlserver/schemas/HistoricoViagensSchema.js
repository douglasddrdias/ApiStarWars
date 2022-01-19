const Sequelize = require('sequelize')

const HistoricoViagensSchema
 = {
    name: 'HistoricoViagens',
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
        DtSaida:{
            type: Sequelize.DATE,
            require: true
        },
        DtChegada:{
            type: Sequelize.DATE,
            require: true
        }        
    },
    options: {
        tableName: 'HistoricoViagens',
        freezeTableName: false,
        timestamps: false        
    }    
}

module.exports = HistoricoViagensSchema