import { Router } from "express";
import { RepairController } from "../controllers/repair.controller";

const router = Router();

router.post("/", RepairController.create);
router.get("/", RepairController.getAll);

export default router;
