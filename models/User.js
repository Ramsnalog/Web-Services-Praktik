module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', 
        {  
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nama: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'name'
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            pass: {    
                type: DataTypes.STRING,
                allowNull: false,
                field: 'password'
            },
            role: {
                type: DataTypes.ENUM,
                values: ['admin', 'operator'],
                defaultValue: 'operator',
                allowNull: false
            },  
            avatar: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            // profession: {
            //     type: DataTypes.STRING,
            //     allowNull: true,
            // },
            createdAt: {
                field: 'createdAt',
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                field: 'updatedAt',
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
    {
        tableName: 'Users',
    });
    return User;            
}