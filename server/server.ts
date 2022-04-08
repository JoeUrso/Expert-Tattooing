//TODO You set the main folder at the rootDir in tsconfig, fix if it has issues
import * as dotenv from "dotenv";
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();

// IMPORT FROM ENV
dotenv.config({ path: __dirname + "/.env" });
const port = process.env.PORT || 8080;

// Application routing
app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: "Hello from Ornio AS" });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
