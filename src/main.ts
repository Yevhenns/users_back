import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify'

async function bootstrap() {
  const port = process.env.PORT || 4000
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  )
  // app.enableCors()
  await app.listen(port, () => console.log(`started on port ${port}`))
}
bootstrap()
