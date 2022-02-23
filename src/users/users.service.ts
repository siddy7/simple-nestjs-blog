import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserInput: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({
      data: createUserInput
    });
  }

  findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  findOne(id: number): Promise<User> {
    return this.prismaService.user.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: number, updateUserInput: Prisma.UserUpdateInput): Promise<User> {
    return this.prismaService.user.update({
      where: {
        id: id
      },
      data: updateUserInput
    });
  }

  remove(id: number): Promise<User> {
    return this.prismaService.user.delete({
      where: {
        id: id
      }
    });
  }
}
