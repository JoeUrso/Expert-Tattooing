/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
// TODO enable the above and fix the issues the right way
import { Router } from "express";
import { ShopsController } from "../controllers/shopsController";

const router = Router();

const shopsController = new ShopsController();

router.route("/").get(shopsController.read);

export default router;
