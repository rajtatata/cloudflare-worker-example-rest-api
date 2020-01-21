const restCfWorker = require('cloudflare-worker-rest-api')

const authRouter = require('./routers/auth')
const itemRouter = require('./routers/item')
const { authMiddleware } = require('./middlewares/auth')

const app = new restCfWorker()

// middlewares
app.use(authMiddleware)

// routes
app.use("/auth", authRouter)
app.use("/item", itemRouter)

app.any("/test", async (req, res) => {
  body = await req.body()
  query = req.query()
  return res.send({ status: 1, message: "Healthy services!", body, query })
})

addEventListener('fetch', event => {
  event.respondWith(app.handleRequest(event.request))
})