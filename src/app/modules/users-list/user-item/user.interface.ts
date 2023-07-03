import { IRole } from 'src/app/services/auth.model';

export interface IUser {
  id: number;
  email: string;
  password: string;
  fio: string;
  roles: IRole[]
}
