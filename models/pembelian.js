'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pembelian extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Barang.hasMany(models.Pesanan, { foreignKey: 'id_barang' });
      Pembelian.belongsTo(models.Barang, {
      foreignKey: 'id_barang',
      as: 'barang'
      });
      // Barang.hasMany(models.Pembelian, { foreignKey: 'id_barang' });
      Pembelian.belongsTo(models.Suplier, {
      foreignKey: 'id_suplier',
      as: 'suplier'
      });
    }  
  }
  Pembelian.init({
    id_barang: DataTypes.INTEGER,
    id_suplier: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    tgl: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pembelian',
    tablename: 'Pembelian',
    freezeTableName: true
  });
  return Pembelian;
};