import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env['PORT'] || 3000

app.use(cors())

app.get('/', (_req, res) => {
  res.send('Express + TypeScript Server')
})

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`)
})
