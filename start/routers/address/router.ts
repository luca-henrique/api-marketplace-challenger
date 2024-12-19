const ListAddressByUsersController = () => import('#controllers/list_address_by_users_controller')
const CreateAddressController = () => import('#controllers/create_address_controller')
import router from '@adonisjs/core/services/router'

router.get('/address-by-user', [ListAddressByUsersController])

router.post('/address', [CreateAddressController])
