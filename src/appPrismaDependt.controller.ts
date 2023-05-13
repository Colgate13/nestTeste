import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateMemberBody } from './dtos/create-member-body';

// esse controller depende diretamente no prisma no contstructor
@Controller('v2/member')
export class AppControllerDependt {
  constructor(private readonly prismaService: PrismaService) {
    //
  }

  @Post()
  async getHello(@Body() body: CreateMemberBody) {
    const member = await this.prismaService.member.create({
      data: {
        id: randomUUID(),
        name: body.name ? body.name : 'Empty',
        function: body.function ? body.function : 'Empty',
      },
    });

    return {
      member,
    };
  }
}
