import { Injectable } from '@nestjs/common'
import { User } from './users.model'
import { createUserDto } from './dto/create-user.dto'
import { InjectModel } from '@nestjs/sequelize'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: createUserDto) {
    const user = await this.userRepository.create(dto)
    return user
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll()
    return users
  }

  async getOne(id: number) {
    const user = await this.userRepository.findByPk(id)
    return user
  }

  async removeItem(id: number) {
    await this.userRepository.destroy({ where: { id: id } })
  }
}
