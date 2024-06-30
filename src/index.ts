import express, { ErrorRequestHandler, Express, NextFunction, Request, Response } from 'express';
import { router as greeting } from "./routes/greet";
const app: Express = express();
const port: number = 2000;

// app.set('trust proxy', true);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.use('/api/', greeting);

// Global error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    res.status(500).json({ message: err.message });
});

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));