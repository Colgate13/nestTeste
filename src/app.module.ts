import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { AppControllerDependt } from './appPrismaDependt.controller';
import { PrismaMemberRepository } from './repositories/prisma/member-repository';
import { MembersRepository } from './repositories/member-repository';

@Module({
  imports: [],
  controllers: [AppController, AppControllerDependt], // Recebem http e tbm ja sao as routes
  providers: [
    PrismaService,
    {
      provide: MembersRepository, // Se alguem pedir um MembersRepository, vai receber um PrismaMemberRepository
      useClass: PrismaMemberRepository, // se solicitar uma classe do tipo MembersRepository, vai receber uma classe do tipo PrismaMemberRepository
    },
  ], // Qualquer coisa que nao seja um controller, sevice ou repository etc..
})
export class AppModule {}
