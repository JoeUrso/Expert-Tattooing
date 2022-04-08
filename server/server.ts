//TODO You set the main folder at the rootDir in tsconfig, fix if it has issues
import express, { Application, NextFunction, Request, Response } from "express";

// Boot express
const app: Application = express();
const port = 8000;

// Application routing
app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: "Hello from Ornio AS" });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
