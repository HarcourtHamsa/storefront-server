
import './db/connect'
import { config } from './db/connect'
import express from 'express'
import dotenv from 'dotenv'
import router from './routes'
import session from 'express-session'

const MySQLStore = require('express-mysql-session')(session);


dotenv.config()

const app = express()
const env = process.env.NODE_ENV || 'development'

const sessionStore = new MySQLStore(config[env])
const PORT = env === 'staging' ? 8001 : 8000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore,
  cookie: {
    sameSite: 'strict',
    httpOnly: true,
    secure: env !== 'production' ? false : true,
    maxAge: 1000 * 60 * 1
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
