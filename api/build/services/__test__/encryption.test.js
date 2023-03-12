"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const encryption_1 = require("../encryption");
const bcrypt_1 = require("bcrypt");
globals_1.jest.mock("bcrypt");
let mockedHash = globals_1.jest.mocked(bcrypt_1.hash);
(0, globals_1.describe)("EncryptionService", () => {
    (0, globals_1.describe)("encrypt", () => {
        (0, globals_1.describe)("When given a secret", () => {
            (0, globals_1.test)("it hashes that secret", () => __awaiter(void 0, void 0, void 0, function* () {
                let hash = "$2b.tG.Gop";
                mockedHash.mockImplementation(() => Promise.resolve(hash));
                let encryptionService = new encryption_1.EncryptionService();
                let unHashedPassword = { value: "password" };
                let secret = yield encryptionService.encrypt(unHashedPassword);
                (0, globals_1.expect)(secret.value).toEqual(hash);
            }));
        });
    });
});
