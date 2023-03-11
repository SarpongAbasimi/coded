"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationService = exports.prisma = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const client_1 = require("@prisma/client");
const Registration_1 = require("../services/Registration");
exports.app = (0, express_1.default)();
exports.prisma = new client_1.PrismaClient();
exports.app.use(body_parser_1.default.urlencoded({ extended: false }));
exports.app.use(body_parser_1.default.json());
exports.app.use("/api/v1/auth", require("../routes/auth/auth"));
exports.registrationService = new Registration_1.RegistrationService(exports.prisma);
