import express, { Request, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Hello dev" });
});

export default app;
