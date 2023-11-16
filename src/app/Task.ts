// Interfaces are a feature of TypeScript that allows us to define the structure or shape of an object
// and specify the properties and methods that an object has or should have. 
// Their primary function is type checking and aiding developers in catching type-related errors 
// during development.

export interface Task {
    id?: number; // ? denotes that field is optional
    text: string;
    day: string;
    reminder: boolean;
  }