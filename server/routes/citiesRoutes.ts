import { Router } from "express";

const router = Router();

router.route("/").get(citiesController.index);

export default router;
