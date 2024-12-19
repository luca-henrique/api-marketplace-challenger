import AutoSwagger from 'adonis-autoswagger'
import router from '@adonisjs/core/services/router'

import swaggerSpec from '../../../config/swagger.js'

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swaggerSpec)
})

router.get('/docs', async () => {
  return AutoSwagger.default.scalar('/swagger')
})
