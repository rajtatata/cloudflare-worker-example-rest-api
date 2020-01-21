const restCfWorker = require('cloudflare-worker-rest-api')
const { getItems, deleteItem } = require('../controllers/item')

const router = new restCfWorker()

router.delete('/:itemId', deleteItem)
router.get('/', getItems)

module.exports = router