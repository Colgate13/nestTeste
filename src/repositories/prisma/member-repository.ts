import { PrismaService } from 'src/database/prisma.service';
import { MembersRepository } from '../member-repository';
import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaMemberRepository implements MembersRepository {
  constructor(private prismaService: PrismaService) {
    //
  }

  async createMember(name: string, Memberfunction: string): Promise<any> {
    const member: any = await this.prismaService.member.create({
      data: {
        id: randomUUID(),
        name: name ? name : 'Empty',
        function: Memberfunction ? Memberfunction : 'Empty',
      },
    });

    return member;
  }
}
