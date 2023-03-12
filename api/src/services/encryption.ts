import { hash } from "bcrypt";
import { Encryptor, Secret, HashedPassword } from "../interfaces/Interfaces";

export class EncryptionService implements Encryptor {
  async encrypt(password: Secret): Promise<Secret> {
    const hashedPassword: HashedPassword = {
      value: await hash(password.value, 10),
    };
    return hashedPassword;
  }
}
