import { Body, Controller, Post } from '@nestjs/common';
import { MembersRepository } from './repositories/member-repository';
// import { randomUUID } from 'node:crypto';
import { CreateMemberBody } from './dtos/create-member-body';

export interface ICreateMember {
  name: string;
  function: string;
}
// esse controller nao depende diretamente do prisma
@Controller('v1/member')
export class AppController {
  constructor(private memberRepository: MembersRepository) {
    //
  }

  @Post()
  async getHello(@Body() body: CreateMemberBody) {
    const member = await this.memberRepository.createMember(
      body.name ? body.name : 'Empty',
      body.function ? body.function : 'Empty',
    );

    return {
      member,
    };
  }
}
