import router from '@adonisjs/core/services/router'

const CreateOrderController = () => import('#controllers/create_order_controller')
const FindOrderByUserController = () => import('#controllers/find_order_by_user_controller')

router.get('/order-by-user', [FindOrderByUserController])
router.post('/order', [CreateOrderController])
