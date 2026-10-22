'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pembeli extends Model {
    static associate(models) {
      Pembeli.hasMany(models.Pesanan, { foreignKey: 'id_pelanggan' });
    }
  }
  Pembeli.init({
    nama: DataTypes.STRING,
    jns_kelamin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kode_pos: DataTypes.STRING,
    kota: DataTypes.STRING,
    tgl_lahir: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pembeli',
    tablename: 'Pembeli',
    freezeTableName: true
  });
  return Pembeli;
};