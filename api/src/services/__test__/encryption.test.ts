import { describe, expect, test, jest } from "@jest/globals";
import { EncryptionService } from "../encryption";
import { UnHashedPassword, Secret } from "../../interfaces/Interfaces";
import { hash } from "bcrypt";

jest.mock("bcrypt");

let mockedHash = jest.mocked(hash);

describe("EncryptionService", () => {
  describe("encrypt", () => {
    describe("When given a secret", () => {
      test("it hashes that secret", async () => {
        let hash = "$2b.tG.Gop";

        mockedHash.mockImplementation(() => Promise.resolve(hash));
        let encryptionService = new EncryptionService();
        let unHashedPassword: UnHashedPassword = { value: "password" };
        let secret: Secret = await encryptionService.encrypt(unHashedPassword);
        expect(secret.value).toEqual(hash);
      });
    });
  });
});
