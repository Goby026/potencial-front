export class Cargo {
  constructor(
    public descripcion: string,
    public estado: number,
    public id?: number,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
