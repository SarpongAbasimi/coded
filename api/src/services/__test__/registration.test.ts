import { describe, expect, test, afterAll } from "@jest/globals";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { PrismaClient, User } from "@prisma/client";
import { RegistrationService } from "../registration";
import { UserDetails, Encryptor } from "../../interfaces/Interfaces";
import { EncryptionService } from "../encryption";

const prisma: PrismaClient<PrismaClientOptions> = new PrismaClient();
const encrptionService: Encryptor = new EncryptionService();
const resgistrationsService = new RegistrationService(prisma, encrptionService);

afterAll(async () => {
  return await prisma.user.deleteMany({ where: {} });
});

describe("Resgistration", () => {
  describe("Signup", () => {
    test("Should store user datails in the db", async () => {
      const userData: UserDetails = {
        name: "name",
        email: "email@demo.com",
        password: "password",
      };
      await resgistrationsService.signUp(userData);

      let queryResult: User | null = await prisma.user.findUnique({
        where: {
          email: "email@demo.com",
        },
      });

      expect(queryResult?.name).toEqual("name");
      expect(queryResult?.email).toEqual("email@demo.com");
    });
  });
});
