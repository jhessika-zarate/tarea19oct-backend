import express from "express";
import {
  getAllActorsController,
  getActorByIdController,
  createActorController,
  updateActorController,
  deleteActorController,
} from "../controllers/actorControllers.js";

const router = express.Router();

// Rutas para la tabla "actor"
router.get("/actors", getAllActorsController);
router.get("/actors/:id", getActorByIdController);
router.post("/actors", createActorController);
router.put("/actors/:id", updateActorController);
router.delete("/actors/:id", deleteActorController);

export default router;
