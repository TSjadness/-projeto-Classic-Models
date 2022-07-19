import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize";

export interface ProductsAttributes {
    productCode: string;
    productName: string;
    productLine: string;
    productScale: string;
    productVendor: string;
    productDescription: string;
    quantityInStock: number;
    buyPrice: number;
    MSRP: number;

};

export interface ProductsInput extends Optional<ProductsAttributes, "productCode"> { };
export interface ProductsOutput extends Required<ProductsAttributes> { }; //Saída com o objeto completo!

class Products extends Model<ProductsAttributes, ProductsInput> {
    declare productCode: string;
    declare productName: string;
    declare productLine: string;
    declare productScale: string;
    declare productVendor: string;
    declare productDescription: string;
    declare quantityInStock: number;
    declare buyPrice: number;
    declare MSRP: number;
};

Products.init({
    productCode: { type: DataTypes.STRING(15), primaryKey: true, },
    productName: { type: DataTypes.STRING(70), allowNull: false },
    productLine: { type: DataTypes.STRING(50), allowNull: false },
    productScale: { type: DataTypes.STRING(10), allowNull: false },
    productVendor: { type: DataTypes.STRING(50), allowNull: false },
    productDescription: { type: DataTypes.TEXT, allowNull: false },
    quantityInStock: { type: DataTypes.SMALLINT, allowNull: false },
    buyPrice: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    MSRP: { type: DataTypes.DECIMAL(10,2), allowNull: false },
}, {
    sequelize,
    modelName: "products" //nome da tabela no banco de dados
});
//productLine.hasMany(products,{foreignKey: "productLine"});
//products.belongsTo(productLine,{foreignKey: "productLine"});

export default Products;