import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './router'
import 'express-async-errors'
import { errorHandler } from './middleware/error-handler'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static('uploads'))
app.use(cors())
app.use(router)
app.use(errorHandler)

export { app }