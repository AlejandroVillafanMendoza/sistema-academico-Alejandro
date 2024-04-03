const Leccion = require("../models").leccion;

class LeccionService {
  static async getLecciones(params) {
    return await Leccion.findAll(params);
  }

  static async getLeccion(id) {
    return await Leccion.findOne({ where: { id } });
  }

  static async createLeccion(leccion) {
    return await Leccion.create({
      nombre: leccion.nombre,
      descripcion: leccion.descripcion,
    });
  }

  static async updateLeccion(leccion) {
    const instance = await this.getLeccion(leccion.id);

    if (!instance) return null;

    return instance.update({
      nombre: leccion.nombre,
      descripcion: leccion.descripcion
    });
  }

  static async deleteLeccion(id) {
    const instance = await this.getLeccion(id);

    if (!instance) return;

    await instance.destroy();
  }
}

module.exports = LeccionService;
