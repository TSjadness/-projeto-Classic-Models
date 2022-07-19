import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface ProductlinesAttributes {
    productLine: string;
    textDescription: string;
    htmlDescription: string;
    image: string;

};

export interface ProductlinesInput extends Optional<ProductlinesAttributes, "productLine"> { };
export interface ProductlinesOutput extends Required<ProductlinesAttributes> { }; //Saída com o objeto completo!

class Productlines extends Model<ProductlinesAttributes, ProductlinesInput> {
    declare productLine: string;
    declare textDescription: string;
    declare htmlDescription: string;
    declare image: string;
};

Productlines.init({
    productLine: { type: DataTypes.STRING(50), primaryKey: true, },
    textDescription: { type: DataTypes.STRING(4000) },
    htmlDescription: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
}, {
    sequelize,
    modelName: "productlines" //nome da tabela no banco de dados
});
//productLine.hasMany(products,{foreignKey: "productLine"});
//products.belongsTo(productLine,{foreignKey: "productLine"});
export default Productlines;