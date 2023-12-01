import { Router } from "express";
import {
  createTravel,
  deleteTravel,
  getAllTravels,
  getTravelById,
  updateTravel,
} from "../controllers/travel.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const routes = Router();

routes.get("/", authRequired, getAllTravels);
routes.get("/travel/:id", authRequired, getTravelById);
routes.post("/travel", authRequired, createTravel);
routes.delete("/travel/:id", authRequired, deleteTravel);
routes.put("/travel/:id", authRequired, updateTravel);

export default routes;
