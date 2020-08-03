module.exports = (sequelize, DataTypes) => {

    let alias = 'marca';
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
        tableName: 'marca',
        timestamps: false
    };

    const Brand = sequelize.define(alias, cols, config);
    
    Brand.associate = models => {
        Brand.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'marcas_id'
        });
    };

    return marca;

};