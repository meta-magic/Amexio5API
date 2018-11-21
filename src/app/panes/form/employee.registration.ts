export class EmplpoyeeRegistration {
    firstName: string;
    lastName: string;
    address: Address;
    gender: string;
    email: string;
    department: string;
    dateOfBirth: any;
    constructor() {
      this.address = new Address();
    }
  }
  
  export class Address {
    street: string;
    city: string; 
    state: string;
    country: string;
    pincode: number;
    constructor() { 
  
    }
  }