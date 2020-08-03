module.exports = (sequelize, DataTypes) => {

    let alias = 'Users';
    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        fisrtname: {
            type: DataTypes.STRING(200)
        },
        lastname: {
            type: DataTypes.STRING(200)
        },
        email: {
            type: DataTypes.STRING(200)
        },
        password: {
            type: DataTypes.STRING(200)
        },
        avatar: {
            type: DataTypes.STRING(200)
        },
        
    };
    let config = {
        tableName: 'userss',
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);

    User.associate = models => {
        User.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'user_id'
        });
    };

    return User;

};
