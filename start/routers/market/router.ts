import router from '@adonisjs/core/services/router'

const CreateMarketController = () => import('#controllers/create_market_controller')

router.post('/market', [CreateMarketController])
