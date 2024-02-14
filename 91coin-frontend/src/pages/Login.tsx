import { Link } from 'react-router-dom'
import VerifyFooter from '../components/VerifyFooter'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import cookies from '../services/cookies'
import { FormEvent, useState } from 'react'
import { validatePhone } from '../utils/validations'
import { login, verifyPhone } from '../apis/Auth'

const Login: React.FunctionComponent = () => {
    const [step, setStep] = useState<number>(1)
    const [phone, setPhone] = useState<string>('')
    const [phoneVerificationCode, setPhoneVerificationCode] = useState<string>('')

    const handlePhone = async (e: FormEvent) => {
        e.preventDefault()
        if(!validatePhone(phone)) {
            toast.error('Please enter correct phone')
            return
        }
        const response = await login({phone})
        if(response.status == 201) {
            toast.success(response.data?.message)
            setStep(2)
        }
        if(response.status == 202) {
            toast.error(response.data?.message)
        }
        if(response.status == 203) {
            toast.warning(response.data?.message)
            setStep(2)
        }
    }

    const handlePhoneVerificationCode = async (e: FormEvent) => {
        e.preventDefault()
        if(!phoneVerificationCode) {
            toast.error('Please enter verification code')
            return
        }
        const response = await verifyPhone({phone, phoneVerificationCode})
        if(response.status == 201) {
            toast.success(response.data?.message)
            cookies.set('access_token', response.data?.access_token)
            setPhoneVerificationCode('')
            setTimeout(() => {
                window.location.replace('/dashboard')
            }, 500)
        }
        if(response.status == 202) {
            toast.error(response.data?.message)
        }
        if(response.status == 203) {
            toast.warning(response.data?.message)
        }
    }

    return (
        <>
            <ToastContainer />
            <div className="verify-wrapper">
                <div className="verify-bg">
                    <img className="verify-bg__logo" width="660" height="318" src="./img/verify/verify-bg-big-logo.svg" alt="verify-bg-big-logo" />
                </div>
                <section className="verify">
                    <div className="verify__wrapper">
                        <div className="verify__inner">
                            <Link to="/" className="verify__back">
                                <img className="verify__back-img" width="22" height="12" src="./img/verify/verify-back.svg" alt="back icon" />

                                <span>Back</span>
                            </Link>

                            <div className="verify__main verify__main--center">

                                <h1 className="verify__title">
                                Log in
                                </h1>

                                <p className="verify__text">
                                Enter your phone number and we will send a code to it to confirm your entry to the site
                                </p>

                                {step == 1 && <form className="verify__form form" onSubmit={handlePhone}>
                                    <div className="form__group">
                                        <label className="form__label" htmlFor="login-phone">Phone</label>

                                        <div className="form__input-wrapper">
                                            <img className="form__icon" src="./img/icons/bi_phone-fill.svg" alt="tel icon" />
                                            <input className="form__input" type="tel" id="login-phone" placeholder="+77_________" value={phone} onChange={e => setPhone(e.target?.value)} />
                                        </div>
                                    </div>

                                    <button type="submit" className="verify__form-btn btn" data-login-btn>send code</button>
                                </form>}

                                {step == 2 && <form className="verify__form form" onSubmit={handlePhoneVerificationCode}>
                                    <div className="form__group">
                                        <label className="form__label" htmlFor="input-3">Code</label>

                                        <div className="form__input-wrapper">
                                            <img className="form__icon" src="./img/icons/bi_phone-fill.svg" alt="tel icon" />
                                            <input className="form__input" type="tel" id="input-3" placeholder="Code" value={phoneVerificationCode} onChange={e => setPhoneVerificationCode(e.target?.value)} />
                                        </div>
                                    </div>

                                    <button type="submit" className="verify__form-btn btn">confirm phone</button>
                                </form>}
                            </div>

                            <VerifyFooter />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Login