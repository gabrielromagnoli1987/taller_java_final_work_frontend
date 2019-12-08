import { SignupRequestData } from './signup-request-data';

describe('SignupRequestData', () => {
  it('should create an instance', () => {
    expect(new SignupRequestData("name", "lastname", "email@gmail.com", "123", "password", false)).toBeTruthy();
  });
});
