export class PetRequestData {
  name: string;
  bornDate: Date;
  species: string;
  race: string;
  sex: string;
  color: string;
  observations: string;
  vetId: number;

  constructor(name: string, bornDate: Date, species: string, race: string, sex: string, color: string, observations: string, vetId: number) {
    this.name = name;
    this.bornDate = bornDate;
    this.species = species;
    this.race = race;
    this.sex = sex;
    this.color = color;
    this.observations = observations;
    this.vetId = vetId;
  }
}

