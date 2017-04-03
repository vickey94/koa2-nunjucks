
const Sequelize = require('sequelize');
const config = require('./config/development');


var sequelize = new Sequelize(config.database, config.database_username, config.database_password, {
    host: config.database_host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var User = sequelize.define('tb_users', {
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
    },
    t_username: Sequelize.STRING(45),
    t_password: Sequelize.STRING(45),

    
}, {
        timestamps: false
    });


module.exports = User;


