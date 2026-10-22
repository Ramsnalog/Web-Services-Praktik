'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Suplier.hasMany(models.Pembelian, { foreignKey: 'id_suplier' });
    }
  }
  Suplier.init({
    nama: DataTypes.STRING,
    alamat: DataTypes.STRING,
    kode_pos: DataTypes.STRING,
    kota: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Suplier',
    tablename: 'Suplier',
    freezeTableName: true
  });
  return Suplier;
};