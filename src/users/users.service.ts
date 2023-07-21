import { Injectable } from '@nestjs/common'
import { User } from './user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { createUserInput } from './dto/create-user.input'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.find()
  }

  async createUser(createUserInput: createUserInput): Promise<User> {
    const user = this.usersRepository.create(createUserInput)
    return this.usersRepository.save(user)
  }

  // async getOne(id: number) {
  //   const user = await this.userRepository.findByPk(id)
  //   return user
  // }

  // async removeItem(id: number) {
  //   await this.userRepository.destroy({ where: { id: id } })
  // }
}
