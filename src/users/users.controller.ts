import { Body, Get, Post, Controller } from '@nestjs/common'
import { createUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: createUserDto) {
    return this.usersService.createUser(userDto)
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers()
  }
}
