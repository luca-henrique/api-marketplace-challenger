import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const SignUpController = () => import('#controllers/auth/sign_up_controller')
const SignInController = () => import('#controllers/auth/sign_in_controller')
const SignOutController = () => import('#controllers/auth/sign_out_controller')
const AuthUserInformationDatabaseController = () =>
  import('#controllers/auth/auth_user_informations_database_controller')

router.post('/user', [SignUpController])
router.post('/auth', [SignInController])
router.delete('/logout', [SignOutController]).use(middleware.auth())
router.get('/me', [AuthUserInformationDatabaseController])
