export class ReproductiveHistoryRequestData {
  localDateTime: Date;
  numberOfpuppies: number;

  constructor(localDateTime: Date, numberOfpuppies: number) {
    this.localDateTime = localDateTime;
    this.numberOfpuppies = numberOfpuppies;
  }
}
