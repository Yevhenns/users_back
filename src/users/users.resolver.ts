import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { User } from './user.entity'
import { createUserInput } from './dto/create-user.input'

@Resolver(User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [User])
  users(): Promise<User[]> {
    return this.usersService.getAllUsers()
  }

  @Mutation(() => User)
  createUser(@Args('contacts') contacts: createUserInput): Promise<User> {
    return this.usersService.createUser(contacts)
  }
}
