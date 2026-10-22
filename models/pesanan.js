'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pesanan.belongsTo(models.Pembeli, { foreignKey: 'id_pelanggan', as: 'pembeli' });
      Pesanan.belongsTo(models.Barang, { foreignKey: 'id_barang', as: 'barang' });
    }
  }
  Pesanan.init({
    id_pelanggan: DataTypes.INTEGER,
    id_barang: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    tgl_pesan: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pesanan',
    tablename: 'Pesanan',
    freezeTableName: true
  });
  return Pesanan;
};