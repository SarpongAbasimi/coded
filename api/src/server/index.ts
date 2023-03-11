import express, { Express } from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import { RegistrationService } from "../services/Registration";
import { PrismaClientOptions } from "@prisma/client/runtime";

export const app: Express = express();
export const prisma: PrismaClient<PrismaClientOptions> = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/auth", require("../routes/auth/auth"));

export const registrationService = new RegistrationService(prisma);
