const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('ahmad', 'root', '123', {
  host: 'localhost',
  logging: false,
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.dashboard_chatpandasbd = require('./dashboard_chatpandasbd')(sequelize, DataTypes);
db.chat_panda_pd = require('./chat_panda_pd')(sequelize, DataTypes);
db.sequelize.sync({ alter: true });
module.exports = db;