
import './db/connect'
import { config } from './db/connect'
import express from 'express'
import dotenv from 'dotenv'
import router from './routes'
import session from 'express-session'
import cors from "cors"

const MySQLStore = require('express-mysql-session')(session);


dotenv.config()

const app = express()
const env = process.env.NODE_ENV || 'development'

const sessionStore = new MySQLStore(config[env])
const PORT = env === 'staging' ? 8001 : 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const whiteList = ["http://localhost:3000", "https://staging-app.bizpend.com"]

app.use(
  cors({
    origin: whiteList,
    credentials: true,
    exposedHeaders: ['Set-Cookie'],
  }))

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      sameSite: 'none',
      secure: false,
      maxAge: 12 * 60 * 60 * 1000,
    }
  }))

sessionStore.onReady().then(() => {
  console.log('Session store is ready')
}).catch((error) => {
  console.error('Unable to connect to the session store:', error)
})

app.set('trust proxy', 1)

app.use('/api', router)

app.get('/healthz', (req, res) => {
  const { userId } = req.session as any
  res.send("I'm alive and running!")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
