export interface User {
  id?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: Date;
  address: string;
  state: string;
  country: string;
  mobileNumber: string;
  relativeName: string;
  relativeMobileNumber: string;
  existingIllness?: string;
  password: string;
  role: 'patient' | 'admin';
  uniqueId?: string;
}