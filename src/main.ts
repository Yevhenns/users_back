import { NestFactory } from '@nestjs/core'
// import { UsersModule } from './users/users.module'
import { AppModule } from './app.module'

async function bootstrap() {
  const port = process.env.PORT || 4000
  const app = await NestFactory.create(AppModule)
  await app.listen(port, () => console.log(`started on port ${port}`))
}
bootstrap()
