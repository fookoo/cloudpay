import express, { Request, Response } from 'express'
import { entries } from './companies.mock'
import { Entry } from '@cloudpay/types'

const router = express.Router()

export const filterEntries = (entries: Entry[], lookForName = '', servicesForLook?: string): Entry[] => {
  const servicesForLookArr = servicesForLook?.split(',') || []

  return entries
    .filter(({ name }) => lookForName === '' || name.toLowerCase().includes(lookForName.toLowerCase()))
    .filter(
      ({ services }) =>
        servicesForLookArr.length === 0 ||
        servicesForLookArr.every((element) => services.some((item) => item === element))
    )
}

router.get('/', (req: Request, res: Response) => {
  const { name = '', services } = req.query as { name: string; services: string }


  res.json(
    filterEntries(entries, name, services)
  )
})

export default router
