export interface Data {
    firstName: string;
    lastName: string;
    id: number;
    age: number;
  }
  export interface AddDataState {
    data: Data[] | null;
  }