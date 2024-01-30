import { useState } from 'react'
import { Link } from 'react-router-dom'
import VerifyFooter from '../components/VerifyFooter'

export default function Login () {
    const [step, setStep]: any = useState(1)
    const stepPercents: any = {
        1: '10%',
        2: '40%',
        3: '60%',
        4: '90%',
        5: '100%',
    }
    return (
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

                            <form className="verify__form form" action="/dashboard">
                                <div className="form__group">
                                    <label className="form__label" htmlFor="login-phone">Phone</label>

                                    <div className="form__input-wrapper">
                                        <img className="form__icon" src="./img/icons/bi_phone-fill.svg" alt="tel icon" />
                                        <input className="form__input" type="tel" id="login-phone" placeholder="Phone" />
                                    </div>
                                </div>

                                <button type="submit" className="verify__form-btn btn" data-login-btn>send code</button>
                            </form>
                        </div>

                        <VerifyFooter />
                    </div>
                </div>
            </section>
        </div>
    )
}
