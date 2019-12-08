import { LoginRequestData } from './login-request-data';

describe('LoginRequestData', () => {
  it('should create an instance', () => {
    expect(new LoginRequestData("email@gmail.com", "password")).toBeTruthy();
  });
});
