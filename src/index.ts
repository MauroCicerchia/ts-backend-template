import express, { Application, Request, Response } from "express";
import * as dotenv from "dotenv";
import initExpress from "./init/express";

dotenv.config();

const app: Application = express();

initExpress(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
