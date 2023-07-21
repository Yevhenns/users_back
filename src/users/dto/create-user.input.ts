import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class createUserInput {
  @Field()
  name: string
  @Field()
  age: string
}
