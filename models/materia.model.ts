export class MateriaModel {
  constructor(
    private idMateria: string,
    private nombre: string,
    private cuatrimestre: number
  ) {}

  public getAllAttributes(): object {
    return {
      idMateria: this.idMateria,
      nombre: this.nombre,
      cuatrimestre: this.cuatrimestre
    }
  }
}