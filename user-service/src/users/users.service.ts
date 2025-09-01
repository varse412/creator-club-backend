import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter = 1;

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.idCounter++,
      ...createUserDto,
      createdAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  remove(id: number): void {
    const index = this.users.findIndex(user => user.id === id);
    if (index > -1) {
      this.users.splice(index, 1);
    }
  }
}