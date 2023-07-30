import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
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

  @Query(() => User)
  oneUser(@Args('userId', { type: () => Int }) id: number): Promise<User> {
    return this.usersService.getOne(id)
  }

  @Mutation(() => User)
  createUser(@Args('userInfo') userInfo: createUserInput): Promise<User> {
    return this.usersService.createUser(userInfo)
  }

  @Mutation(() => Boolean)
  removeUser(
    @Args('userId', { type: () => Int }) id: number
  ): Promise<boolean> {
    return this.usersService.removeUser(id)
  }
}
