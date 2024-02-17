
import './db/connect'
import express from 'express'
import dotenv from 'dotenv'
import router from './routes'

dotenv.config()

const app = express()
const env = process.env.NODE_ENV || 'development'
const PORT = env === 'staging' ? 8001 : 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('trust proxy', 1)

app.use('/api', router)

app.get('/healthz', (req, res) => {
  res.send("I'm alive and running!")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
