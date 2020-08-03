  
module.exports = (sequelize, DataTypes) => {

    let alias = 'Product';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(70)
        },
        precio: {
            type: DataTypes.DOUBLE(7.2)
        },
        stock: {
            type: DataTypes.INTEGER(11)
        },
        especification: {
            type: DataTypes.STRING(200)
        },
        avatar: {
            type: DataTypes.STRING(200)
        },
        cartegorys_id: {
            type: DataTypes.INTEGER(10),
            foreignKey: true
        },
        marcas_id: {
            type: DataTypes.INTEGER(10),
            foreignKey: true
        }
    };
    let config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'id'
        });
        Product.belongsTo(models.Category, {
            as: 'cartegory',
            foreignKey: 'cartegorys_id'
        });
        Product.belongsTo(models.Brand, {
            as: 'marca',
            foreignKey: 'marcas_id'
        });
    }

    return Product;

};