import { describe, expect, test, afterAll } from "@jest/globals";
import { app } from "../../server/index";
import supertest from "supertest";
import { PrismaClient } from "@prisma/client";

/**
 * Find a way to mock the client
 */

afterAll(async () => {
  return await new PrismaClient().user.deleteMany({ where: {} });
});

describe("The auth endpoint", () => {
  describe("When a POST request is sent to /register", () => {
    test("If the request it sucessfult it returns a 201 status code", async () => {
      const response = await supertest(app)
        .post("/api/v1/auth/register")
        .send({
          name: "john",
          email: "xyz@demo.com",
          password: "2342388",
        })
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

      expect(response.statusCode).toBe(201);
    });
  });
});
