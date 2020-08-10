module.exports = (sequelize, DataTypes) => {

    let alias = 'Category';
    let cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50)
        }
    };
    let config = {
        tableName: 'categorys',
        timestamps: false
    };

    const Category =  sequelize.define(alias, cols, config);
        Category.associate = function(models) {
            Category.hasMany(models.Product, {
                as: "Product",
                foreignKey: 'categorys_id'
            });
        };

    return Category;

};