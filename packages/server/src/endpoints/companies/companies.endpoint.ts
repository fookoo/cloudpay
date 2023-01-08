import express, { Request, Response } from 'express'
import { entries } from './companies.mock'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  const { name: lookForName = '', services: servicesForLook } = req.query as { name: string; services: string }
  const servicesForLookArr = servicesForLook?.split(',') || []

  res.json(
    entries
      .filter(({ name }) => lookForName === '' || name.toLowerCase().includes(lookForName.toLowerCase()))
      .filter(
        ({ services }) =>
          servicesForLookArr.length === 0 ||
          servicesForLookArr.every((element) => services.some((item) => item === element))
      )
  )
})

export default router
