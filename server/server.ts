//TODO You set the main folder at the rootDir in tsconfig, fix if it has issues
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import citiesRoutes from "./routes/citiesRoutes";

const app: Application = express();

// IMPORT FROM ENV
dotenv.config({ path: __dirname + "/.env" });
const port = process.env.PORT || 8080;

// ENABLE CORS
const allowedOrigins = process.env.FRONTEND_URL;

const options: cors.CorsOptions = {
    origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());

// Routes
app.use("/cities", citiesRoutes);

// Application routing
app.use("/", (req: Request, res: Response) => {
    res.status(200).send({ data: "Hello World" });
});

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
