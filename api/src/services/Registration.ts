import { PrismaClient } from ".prisma/client";
import { Registration, UserDetails } from "../interfaces/Interfaces";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { Encryptor, UnHashedPassword } from "../interfaces/Interfaces";

export class RegistrationService implements Registration {
  private prisma: PrismaClient;
  private encrptionService: Encryptor;

  constructor(
    prismaClient: PrismaClient<PrismaClientOptions>,
    encryptionService: Encryptor
  ) {
    this.prisma = prismaClient;
    this.encrptionService = encryptionService;
  }

  public async signUp(details: UserDetails): Promise<void> {
    let unHashedPassword: UnHashedPassword = { value: details.password };
    let hashedPassword = await this.encrptionService.encrypt(unHashedPassword);
    await this.prisma.user.create({
      data: {
        email: `${details.email}`,
        name: `${details.name}`,
        password: `${hashedPassword.value}`,
      },
    });
  }
}
