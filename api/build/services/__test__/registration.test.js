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
const client_1 = require("@prisma/client");
const registration_1 = require("../registration");
const encryption_1 = require("../encryption");
const prisma = new client_1.PrismaClient();
const encrptionService = new encryption_1.EncryptionService();
const resgistrationsService = new registration_1.RegistrationService(prisma, encrptionService);
(0, globals_1.afterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.user.deleteMany({ where: {} });
}));
(0, globals_1.describe)("Resgistration", () => {
    (0, globals_1.describe)("Signup", () => {
        (0, globals_1.test)("Should store user datails in the db", () => __awaiter(void 0, void 0, void 0, function* () {
            const userData = {
                name: "name",
                email: "email@demo.com",
                password: "password",
            };
            yield resgistrationsService.signUp(userData);
            let queryResult = yield prisma.user.findUnique({
                where: {
                    email: "email@demo.com",
                },
            });
            (0, globals_1.expect)(queryResult === null || queryResult === void 0 ? void 0 : queryResult.name).toEqual("name");
            (0, globals_1.expect)(queryResult === null || queryResult === void 0 ? void 0 : queryResult.email).toEqual("email@demo.com");
        }));
    });
});
