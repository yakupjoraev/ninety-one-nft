import { CreateUserParams, LoginParams, UpdateUserParams, VerifyEmailParams, VerifyPhoneParams } from '../utils/types'
import Api from './Api'

const createUserByEmail = (form: CreateUserParams) => Api().post('/auth/register', form)
const verifyEmail = (form: VerifyEmailParams) => Api().post('/auth/verify-email', form)
const updateUserPhoneByEmail = (form: UpdateUserParams) => Api().put('/auth/register', form)
const verifyPhone = (form: VerifyPhoneParams) => Api().post('/auth/verify-phone', form)
const login = (form: LoginParams) => Api().post('/auth/login', form)
const status = () => Api().get('/auth/status')
const logout = () => Api().post('/auth/logout')

export {
    createUserByEmail,
    verifyEmail,
    updateUserPhoneByEmail,
    verifyPhone,
    login,
    status,
    logout,
}
