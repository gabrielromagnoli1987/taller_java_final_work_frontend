export class VisitRequestData {
  localDateTime: Date;
  weight: number;
  reason: string;
  diagnosis: string;
  indications: string;
  vetId: number

  constructor(localDateTime: Date, weight: number, reason: string, diagnosis: string, indications: string, vetId: number) {
    this.localDateTime = localDateTime;
    this.weight = weight;
    this.reason = reason;
    this.diagnosis = diagnosis;
    this.indications = indications;
    this.vetId = vetId;
  }
}
