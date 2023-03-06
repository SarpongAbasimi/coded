import { describe, expect, test } from "@jest/globals";
import { app } from "../../server/index";
import supertest from "supertest";

describe("The auth endpoint", () => {
  describe("When a POST request is sent to /register", () => {
    test("If the request it sucessfult it returns a 201 status code", async () => {
      const payload = {
        name: "john",
        email: "xyz@sadfjak.com",
        password: "2342388",
      };
      const response = await supertest(app)
        .post("/api/v1/auth/register")
        .send(payload)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

      expect(response.statusCode).toBe(201);
    });
  });
});
