import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import VerifyFooter from '../components/VerifyFooter'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { validateEmail, validatePhone } from '../utils/validations'
import { createUserByEmail, updateUserPhoneByEmail, verifyEmail, verifyPhone } from '../apis/Auth'
import cookies from '../services/cookies'
import ReactInputMask from 'react-input-mask'

interface StepPercent {
    [index: number]: string;
}

const Verify: React.FunctionComponent = () => {
    const [step, setStep] = useState<number>(1)
    const stepPercents: StepPercent = {
        1: '10%',
        2: '40%',
        3: '60%',
        4: '90%',
        5: '100%',
    }
    const [email, setEmail] = useState<string>('')
    const [emailVerificationCode, setEmailVerificationCode] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [phoneVerificationCode, setPhoneVerificationCode] = useState<string>('')

    const handleEmail = async (e: FormEvent) => {
        e.preventDefault()
        if(!validateEmail(email)) {
            toast.error('Please enter correct email')
            return
        }
        let data: any = {email}

        const params = new URLSearchParams(window.location.search)
        const referrer = params.get('referrer')
        if(validatePhone(referrer)) data = {...data, referrer}

        const response = await createUserByEmail(data)
        if(response.status == 201) {
            toast.success(response.data?.message)
            setStep(2)
        }
        if(response.status == 202) {
            toast.error(response.data?.message)
        }
        if(response.status == 203) {
            toast.warning(response.data?.message)
            setStep(response.data?.message == 'Verification code already sent to your email' ? 2 : 3)
        }
    }

    const handleEmailVerificationCode = async (e: FormEvent) => {
        e.preventDefault()
        if(!emailVerificationCode) {
            toast.error('Please enter verification code')
            return
        }
        const response = await verifyEmail({email, emailVerificationCode})
        if(response.status == 201) {
            toast.success(response.data?.message)
            setStep(3)
        }
        if(response.status == 202) {
            toast.error(response.data?.message)
        }
        if(response.status == 203) {
            toast.warning(response.data?.message)
        }
    }

    const handlePhone = async (e: FormEvent) => {
        e.preventDefault()
        if(!validatePhone(phone)) {
            toast.error('Please enter correct phone')
            return
        }
        const response = await updateUserPhoneByEmail({email, phone})
        if(response.status == 200) {
            toast.success(response.data?.message)
            setStep(4)
        }
        if(response.status == 202) {
            toast.error(response.data?.message)
        }
        if(response.status == 203) {
            toast.warning(response.data?.message)
            setStep(4)
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
            const expires = new Date(new Date().getTime() + 1000*60*60*24*7)
            cookies.set('access_token', response.data?.access_token, {expires})
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

                            <div className="verify__main">
                                <div className="verify__steps">
                                    <div className="verify__label">STEP 1</div>

                                    <div className="verify__steps-list">
                                        <div className="verify__steps-line">
                                        <div className="verify__steps-line-inner" style={{ width: stepPercents?.[step] }}></div>
                                        </div>

                                        <div className={`verify__step ${step >= 1 ? 'active' : ''}`}>
                                        <div className="verify__step-num">
                                            <span>1</span>
                                        </div>

                                        <p className="verify__step-text">
                                            Verify
                                            e-mail
                                        </p>
                                        </div>

                                        <div className={`verify__step ${step >= 2 ? 'active' : ''}`}>
                                        <div className="verify__step-num">
                                            <span>2</span>
                                        </div>

                                        <p className="verify__step-text">
                                            Confirm
                                            e-mail
                                        </p>
                                        </div>

                                        <div className={`verify__step ${step >= 3 ? 'active' : ''}`}>
                                        <div className="verify__step-num">
                                            <span>3</span>
                                        </div>

                                        <p className="verify__step-text">
                                            Verify
                                            phone
                                        </p>
                                        </div>

                                        <div className={`verify__step ${step >= 4 ? 'active' : ''}`}>
                                        <div className="verify__step-num">
                                            <span>4</span>
                                        </div>

                                        <p className="verify__step-text">
                                            Confirm
                                            phone
                                        </p>
                                        </div>
                                    </div>
                                </div>

                                {step < 5 && <>
                                    <h1 className="verify__title">
                                        verify your wallet
                                    </h1>

                                    <p className="verify__text">
                                    Ac enim mauris a risus felis. Eget phasellus eget et vitae aliquam netus. Sit fringilla massa euismod nisi
                                    nisl. Platea non mauris a volutpat eu lorem vitae tellus ultricies. Quis et eget quam et ac.
                                    </p>
                                </>}

                                {step == 1 && <form className="verify__form form" onSubmit={handleEmail}>
                                    <div className="form__group">
                                        <label className="form__label" htmlFor="input-1">E-mail</label>

                                        <div className="form__input-wrapper">
                                            <img className="form__icon" src="./img/icons/fluent_mail-20-filled.svg" alt="mail icon" />
                                            <input className="form__input" type="email" id="input-1" placeholder="E-mail" value={email} onChange={e => setEmail(e.target?.value)} />
                                        </div>
                                    </div>

                                    <button type="submit" className="verify__form-btn btn">send code</button>
                                </form>}

                                {step == 2 && <form className="verify__form form" onSubmit={handleEmailVerificationCode}>
                                    <div className="form__group">
                                        <label className="form__label" htmlFor="input-2">Code</label>

                                        <div className="form__input-wrapper">
                                            <img className="form__icon" src="./img/icons/fluent_mail-20-filled.svg" alt="mail icon" />
                                            <input className="form__input" type="password" id="input-2" placeholder="Code" value={emailVerificationCode} onChange={e => setEmailVerificationCode(e.target?.value)} />
                                        </div>
                                    </div>

                                    <button type="submit" className="verify__form-btn btn">send code</button>
                                </form>}

                                {step == 3 && <form className="verify__form form" onSubmit={handlePhone}>
                                    <div className="form__group">
                                        <label className="form__label" htmlFor="input-3">Phone</label>

                                        <div className="form__input-wrapper">
                                            <img className="form__icon" src="./img/icons/bi_phone-fill.svg" alt="tel icon" />
                                            {/* <input className="form__input" type="tel" id="input-3" placeholder="+77_________" value={phone} onChange={e => setPhone(e.target?.value)} /> */}
                                            <ReactInputMask className="form__input" type="tel" id="input-3" mask="+\77999999999" maskPlaceholder="_" alwaysShowMask={true} value={phone} onChange={e => setPhone(e.target?.value)} />
                                        </div>
                                    </div>

                                    <button type="submit" className="verify__form-btn btn">send code</button>
                                </form>}

                                {step == 4 && <form className="verify__form form" onSubmit={handlePhoneVerificationCode}>
                                    <div className="form__group">
                                        <label className="form__label" htmlFor="input-3">Code</label>

                                        <div className="form__input-wrapper">
                                            <img className="form__icon" src="./img/icons/bi_phone-fill.svg" alt="tel icon" />
                                            <input className="form__input" type="tel" id="input-3" placeholder="Code" value={phoneVerificationCode} onChange={e => setPhoneVerificationCode(e.target?.value)} />
                                        </div>
                                    </div>

                                    <button type="submit" className="verify__form-btn btn">confirm phone</button>
                                </form>}
                                
                                {step == 5 && <>
                                    <img className="verify__finally-pic" width="284" height="300" src="./img/verify/final-pic.svg" alt="finally pic" />

                                    <h1 className="verify__title">
                                    Your account has been successfully verified!
                                    </h1>

                                    <p className="verify__text">
                                    Now you can log into the site using your username and password that was sent to the email specified during
                                    verification. If you have any questions, <a href="#">contact support</a> or read the <a href="#">FAQ</a>
                                    </p>

                                    <form className="verify__form" action="/login">
                                        <button type="submit" className="verify__form-btn btn">ENTER SITE</button>
                                    </form>
                                </>}
                            </div>

                            <VerifyFooter />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Verify