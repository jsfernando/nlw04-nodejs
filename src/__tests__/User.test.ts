import request from "supertest";
import { getConnection } from "typeorm";
import { app } from "./../app";

import createConnection from "../database"; //existe um createConnection do typeorm tbém, mas neste caso, vamos usar do database

describe("Users", () => {

  // 2º
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    await connection.dropDatabase();
    await connection.close();
  });

  //1º
  it("Should be able to create a new user", async () => { 
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });
    
    expect(response.status).toBe(201); 
  });

  it("Should not be able to create a user with exists email", async () => {
    const response = await request(app).post("/users").send({
      email: "user@example.com",
      name: "User Example",
    });

    expect(response.status).toBe(400);
  });
  
});
