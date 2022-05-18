//TODO You set the main folder at the rootDir in tsconfig, fix if it has issues
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Application } from "express";
import citiesRoutes from "./routes/citiesRoutes";
import shopsRoutes from "./routes/shopsRoutes";

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
app.use("/shops", shopsRoutes);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
