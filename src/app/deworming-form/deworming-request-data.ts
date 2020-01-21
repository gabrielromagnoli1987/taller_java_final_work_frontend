export class DewormingRequestData {
  localDateTime: Date;
  drug: string;
  result: string;

  constructor(localDateTime: Date, drug: string, result: string) {
    this.localDateTime = localDateTime;
    this.drug = drug;
    this.result = result;
  }
}
