import {Router} from 'express'
import { IDependancies } from '@/application/interfaces/IDependancies'
import { controllers } from '../../presentation/controller'

export const routes = (dependancies: IDependancies) => {

    const { signup, findUserByEmail } = controllers(dependancies)

    const router = Router()

    router.route('/signup').post(signup)


    return router

}