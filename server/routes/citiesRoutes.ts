/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// TODO enable the above and fix the issues the right way
import { Router } from "express";
import { CitiesController } from "../controllers/citiesController";

const router = Router();

const citiesController = new CitiesController();

router.route("/").get(citiesController.read);

export default router;
