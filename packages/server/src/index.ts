import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import CompaniesRouter from './endpoints/companies/companies.endpoint'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cors())

app.use('/companies', CompaniesRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Backend v0.0.1')
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
