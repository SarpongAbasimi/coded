import express, { Express } from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import { RegistrationService } from "../services/registration";
import { PrismaClientOptions } from "@prisma/client/runtime";
import { EncryptionService } from "../services/encryption";
import { Encryptor } from "../interfaces/Interfaces";

export const app: Express = express();
export const prisma: PrismaClient<PrismaClientOptions> = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/auth", require("../routes/auth/auth"));

const encrptionService: Encryptor = new EncryptionService();
export const registrationService = new RegistrationService(
  prisma,
  encrptionService
);
