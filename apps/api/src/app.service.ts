import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@modakbul/database';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
