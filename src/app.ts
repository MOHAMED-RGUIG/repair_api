import express from "express";
import cors from "cors";
import repairRoutes from "./routes/repair.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/repairs", repairRoutes);

export default app;
