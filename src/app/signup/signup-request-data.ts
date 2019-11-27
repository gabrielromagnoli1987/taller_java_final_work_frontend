export class SignupRequestData {
  name: String;
  lastName: String;
  email: String;
  phone: String;
  password: String;
  isVet: Boolean;
  resume?: String;
  address?: String;

  constructor(name: String, lasName: String, email: String, phone: String, password: String, isVet: Boolean, resume?: String, address?: String) {
    this.name = name;
    this.lastName = lasName;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.isVet = isVet;
    this.resume = resume;
    this.address = address;
  }

}
