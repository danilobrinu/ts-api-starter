export interface IUser {
  firstName: string;
  lastName: string;
}

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
}
