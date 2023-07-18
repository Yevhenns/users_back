import { Body, Get, Post, Delete, Controller, Param } from '@nestjs/common'
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

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.usersService.getOne(id)
  }

  @Delete(':id')
  removeItem(@Param('id') id: number) {
    return this.usersService.removeItem(id)
  }
}
