import express, { Request, Response } from 'express';
import {entries} from "./companies.mock";

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.json(entries)
})

export default router
