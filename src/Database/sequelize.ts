import { Error, Sequelize } from "sequelize";

export const sequelize = new Sequelize('classicmodels', 'root', 'jadson@123', {
    host: "localhost",
    dialect: "mysql",
    logging: false,
    define: {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,

    },
    //timezone: "-3:00",
   

});


export default async () => {
    sequelize.authenticate()
        .then(() => {
            console.log("Sucesso: conexao  realizada ");
        }).catch((error: Error) => {
            console.log("Erro: conexao nao realizada " + error);
        })
    //sequelize.sync( { alter: true } );
    //module.exports = sequelize;
};