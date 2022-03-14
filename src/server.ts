import express, {Request, Response, NextFunction } from 'express';
import "express-async-errors";
import { router } from "./routes";

const app = express();
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world'})
});

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
      return res.status(400).json({
        error: err.message
      })
    }
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error"
    })
});

app.listen(3200)
console.log('servidor no ar na porta 3200')