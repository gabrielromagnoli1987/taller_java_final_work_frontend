export class SurgerieRequestData {
  description: string;
  localDateTime: Date;

  constructor(description: string, localDateTime: Date) {
    this.description = description;
    this.localDateTime = localDateTime;
  }
}
