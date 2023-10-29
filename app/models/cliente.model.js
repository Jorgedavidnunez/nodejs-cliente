module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      nombre: {
        type: Sequelize.STRING
      },
      nit: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Cliente;
  };