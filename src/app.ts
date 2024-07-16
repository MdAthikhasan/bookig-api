import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routes/routes";
import notFound from "./app/middleware/notFoundHandler";

// Initialize dotenv to load environment variables
dotenv.config();

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS with specific origins
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// Application-level routes
app.use("/api/v1", router);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send({
    title: "Hello world!",
  });
});

// Global error handler middleware
// app.use(globalErrorHandler);

// Not found handler middleware
app.use(notFound);

export default app;
