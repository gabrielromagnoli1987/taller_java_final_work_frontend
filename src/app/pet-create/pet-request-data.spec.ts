import { PetRequestData } from './pet-request-data';

describe('PetRequestData', () => {
  it('should create an instance', () => {
    expect(new PetRequestData("name X", new Date(), "specie X", "race X", "female", "white", "obs", 11)).toBeTruthy();
  });
});
