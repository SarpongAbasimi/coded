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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../../server/index");
const supertest_1 = __importDefault(require("supertest"));
const client_1 = require("@prisma/client");
/**
 * Find a way to mock the client
 */
(0, globals_1.afterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
    return yield new client_1.PrismaClient().user.deleteMany({ where: {} });
}));
(0, globals_1.describe)("The auth endpoint", () => {
    (0, globals_1.describe)("When a POST request is sent to /register", () => {
        (0, globals_1.test)("If the request it sucessfult it returns a 201 status code", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(index_1.app)
                .post("/api/v1/auth/register")
                .send({
                name: "john",
                email: "xyz@demo.com",
                password: "2342388",
            })
                .set("Content-Type", "application/json")
                .set("Accept", "application/json");
            (0, globals_1.expect)(response.statusCode).toBe(201);
        }));
    });
});
