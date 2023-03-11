import { PrismaClient, User } from ".prisma/client";
import { Registration, UserDetails } from "../interfaces/Interfaces";
import { PrismaClientOptions } from "@prisma/client/runtime";

export class RegistrationService implements Registration {
  private prisma: PrismaClient;

  constructor(prismaClient: PrismaClient<PrismaClientOptions>) {
    this.prisma = prismaClient;
  }

  public async signUp(details: UserDetails): Promise<void> {
    await this.prisma.user.create({
      data: {
        email: `${details.email}`,
        name: `${details.name}`,
        password: `${details.password}`,
      },
    });
  }
}
