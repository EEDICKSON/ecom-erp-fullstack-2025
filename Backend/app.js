import express from "express";
import cors from "cors";
const app = express();

// JSON BODY
app.use(express.json());

// CORS
app.use(cors());

export default app;
