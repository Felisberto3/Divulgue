import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './router'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.static('uploads'))
app.use(cors())
app.use(router)

export { app }