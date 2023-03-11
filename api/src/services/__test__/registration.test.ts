import { describe, expect, test, afterAll } from "@jest/globals";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { PrismaClient, User } from "@prisma/client";
import { RegistrationService } from "../Registration";
import { UserDetails } from "../../interfaces/Interfaces";

const prisma: PrismaClient<PrismaClientOptions> = new PrismaClient();
const resgistrationsService = new RegistrationService(prisma);

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
    });
  });
});
