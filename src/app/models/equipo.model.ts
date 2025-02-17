export class Equipo {
  constructor(
    public codpat: string,
    public correlinv: string,
    public denominacion: string,
    public fecinv: string,
    public marca: string,
    public modelo: string,
    public serie: string,
    public dimension: string,
    public color: string,
    public estado: string,
    public observaciones: string,
    public sede_idsede: string,
    public ip: string,
    public id?: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
