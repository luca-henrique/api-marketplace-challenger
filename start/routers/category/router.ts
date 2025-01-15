import router from '@adonisjs/core/services/router'

const GetAllCategoriesController = () => import('#controllers/category/get_categories_controller')

router
  .group(() => {
    router.get('/category', [GetAllCategoriesController])
    router.get('/category/:id', [GetAllCategoriesController])
  })
  .prefix('/api')
