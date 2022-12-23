import express, { Request, Response } from 'express';
import { Entry } from '@cloudpay/types'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    const entries: Entry[] = [
        {
            id: 'id-1',
            name: 'Loremipsum',
            country: "Norway",
            services: []
        }
    ]
    res.json(entries)
})

export default router
