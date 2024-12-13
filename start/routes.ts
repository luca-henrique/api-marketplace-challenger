import router from '@adonisjs/core/services/router'
import swaggerSpec from '../config/swagger.js'
import AutoSwagger from 'adonis-autoswagger'

import { middleware } from './kernel.js'
const CreateOrderController = () => import('#controllers/create_order_controller')
const CreateAddressController = () => import('#controllers/create_address_controller')
const CreateProductsController = () => import('#controllers/create_product_controller')

const CreateUsersController = () => import('#controllers/create_user_controller')

const SignInController = () => import('#controllers/sign_in_controller')

const SignOutController = () => import('#controllers/sign_out_controller')
const AuthUserInformationDatabaseController = () =>
  import('#controllers/auth_user_informations_database_controller')

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swaggerSpec)
})

router.get('/docs', async () => {
  return AutoSwagger.default.scalar('/swagger')
})

router.post('/user', [CreateUsersController])

router.post('/auth', [SignInController])

router.delete('/logout', [SignOutController]).use(middleware.auth())

router.get('/me', [AuthUserInformationDatabaseController])

router.post('/product', [CreateProductsController])

router.post('/address', [CreateAddressController])

router.post('/order', [CreateOrderController])
