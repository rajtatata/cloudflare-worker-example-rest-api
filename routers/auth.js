const restCfWorker = require('cloudflare-worker-rest-api')
const { login } = require('../controllers/auth')

const router = new restCfWorker()

router.post('/login', login)

module.exports = router