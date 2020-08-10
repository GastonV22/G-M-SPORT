module.exports = (sequelize, DataTypes) => {

    let alias = 'Marca';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(32)
        }
    };
    let config = {
        tableName: 'marcas',
        timestamps: false
    };

    const Marca = sequelize.define(alias, cols, config);
    
    Marca .associate = models => {
        Marca .hasMany(models.Product, {
            as: 'Product',
            foreignKey: 'marcas_id'
        });
    };

    return Marca;

};