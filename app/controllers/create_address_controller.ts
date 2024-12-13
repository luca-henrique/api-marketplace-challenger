import type { HttpContext } from '@adonisjs/core/http'
import Address from '#models/address'
import type AddressType from '#models/address'
import { createAddressValidation } from '#validators/address'

type AddressProps = Partial<AddressType>

export default class CreateAddressController {
  async handle({ request, response, auth }: HttpContext) {
    try {
      const { address, complement, city, zipCode, neighborhood, uf, number }: AddressProps =
        request.all()

      const user = await auth.authenticate()

      await createAddressValidation.validate({
        address,
        complement,
        city,
        zipCode,
        neighborhood,
        uf,
        number,
      })

      const { id } = await Address.create({
        userId: user.id,
        address,
        complement,
        city,
        zipCode,
        neighborhood,
        uf,
        number,
      })

      response.ok({ id })
    } catch (error) {
      return response.badRequest({
        type: 'Error',
        message: 'Não foi consultar produtos',
        error,
      })
    }
  }
}
