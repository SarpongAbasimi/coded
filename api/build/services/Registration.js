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
exports.RegistrationService = void 0;
class RegistrationService {
    constructor(prismaClient) {
        this.prisma = prismaClient;
    }
    signUp(details) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.prisma.user.create({
                data: {
                    email: `${details.email}`,
                    name: `${details.name}`,
                    password: `${details.password}`,
                },
            });
            console.log(result);
        });
    }
}
exports.RegistrationService = RegistrationService;
