export class Sitter {

  constructor(
  public firstname: String,
  public lastname: String,
  public age: number, //at least 16 yo
  public yearsOfExperience: number,
  public region: String,
  public gender: String,
  public phone: String,
  public picture?: String //? means that it's optional in the constructor.
  ) {}
}