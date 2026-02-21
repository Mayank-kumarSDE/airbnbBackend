import express from 'express'
import serverConfig from './src/config/index.js'
import pingRouter from './src/router/pingRouter.js'

const app = express()
const port = process.env.PORT;

app.use(pingRouter)
app.listen(port, () => {
  console.log(`Example app listening`)
})
