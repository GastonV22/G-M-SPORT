module.exports = (sequelize, DataTypes) => {

    let alias = 'Cart';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            foreignKey: true
        },
        products_id: {
            type: DataTypes.INTEGER(11),
            foreignKey: true
        },
        cantidad: {
            type: DataTypes.INTEGER(11)
        },
        price_total: {
            type: DataTypes.DOUBLE(7,2)
        }
    };
    let config = {
        tableName: 'cart',
        timestamps: false       
    };

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        });
        Cart.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'products_id'
        });
    };

    return Cart;

};