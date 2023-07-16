import { Controller, Get } from '@nestjs/common'

@Controller('user')
export class UserController {
  users: any[]

  constructor() {
    this.users = [
      { id: 1, name: 'anna', age: '21' },
      { id: 2, name: 'hanna', age: '22' }
    ]
  }

  @Get()
  async getAll() {
    return this.users
  }
}
