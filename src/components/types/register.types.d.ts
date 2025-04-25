export interface RegisterUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
 export  interface RegisterState {
    registerUser: RegisterUser | null;
  }
  