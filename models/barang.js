'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Barang.hasMany(models.Pesanan, { foreignKey: 'id_barang' });
      Barang.hasMany(models.Pembelian, { foreignKey: 'id_barang' });
    }
  }
  Barang.init({
    nama: DataTypes.STRING,
    varian: DataTypes.STRING,
    harga_beli: DataTypes.INTEGER,
    harga_jual: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barang',
    tablename: 'Barang',
    freezeTableName: true
  });
  return Barang;
};