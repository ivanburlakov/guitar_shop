const Sequelize = require('sequelize');
const config = require('../config/config.json')

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  host: config.db.host,
  port: config.db.port,
  dialect: config.db.dialect
});

const Model = Sequelize.Model;
class Photos extends Model { }
Photos.init({
  product_ID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'products',
      key: 'product_ID'
    }
  },
  path: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
}, {
  sequelize: sequelize,
  tableName: 'photos',
  timestamps: false,
});

module.exports = Photos;

