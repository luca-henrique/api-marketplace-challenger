import router from '@adonisjs/core/services/router'

const ListProductsController = () => import('#controllers/list_products_controller')
const CreateProductsController = () => import('#controllers/create_product_controller')

const GetProductByCategory = () => import('#controllers/product/get_product_by_category_controller')

router.get('/product', [ListProductsController])
router.post('/product', [CreateProductsController])

router.get('/product/:category', [GetProductByCategory])
