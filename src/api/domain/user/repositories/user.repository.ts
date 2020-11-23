import { getRepository } from 'typeorm';
import type { Repository } from 'typeorm';
import { User } from 'src/api/domain/user/entities';
import type { IUserRepository } from 'src/api/domain/user/types';

export class UserRepository implements IUserRepository {
  findAll = async () => {
    const userRepository: Repository<User> = getRepository(User);

    return userRepository.find();
  };
}
