import { useState } from 'react'
import { Link } from 'react-router-dom'
import VerifyFooter from '../components/VerifyFooter'

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

                            {step == 1 && <form className="verify__form form" action="#">
                                <div className="form__group">
                                    <label className="form__label" htmlFor="input-1">E-mail</label>

                                    <div className="form__input-wrapper">
                                        <img className="form__icon" src="./img/icons/fluent_mail-20-filled.svg" alt="mail icon" />
                                        <input className="form__input" type="email" id="input-1" placeholder="E-mail" />
                                    </div>
                                </div>

                                <button type="submit" className="verify__form-btn btn" onClick={() => setStep(2)}>send code</button>
                            </form>}

                            {step == 2 && <form className="verify__form form" action="#">
                                <div className="form__group">
                                    <label className="form__label" htmlFor="input-2">Code</label>

                                    <div className="form__input-wrapper">
                                        <img className="form__icon" src="./img/icons/fluent_mail-20-filled.svg" alt="mail icon" />
                                        <input className="form__input" type="password" id="input-2" placeholder="Code" />
                                    </div>
                                </div>

                                <button type="submit" className="verify__form-btn btn" onClick={() => setStep(3)}>send code</button>
                            </form>}

                            {step == 3 && <form className="verify__form form" action="#">
                                <div className="form__group">
                                    <label className="form__label" htmlFor="input-3">Phone</label>

                                    <div className="form__input-wrapper">
                                        <img className="form__icon" src="./img/icons/bi_phone-fill.svg" alt="tel icon" />
                                        <input className="form__input" type="tel" id="input-3" placeholder="Phone" />
                                    </div>
                                </div>

                                <button type="submit" className="verify__form-btn btn" onClick={() => setStep(4)}>send code</button>
                            </form>}

                            {step == 4 && <form className="verify__form form" action="#">
                                <div className="form__group">
                                    <label className="form__label" htmlFor="input-3">Code</label>

                                    <div className="form__input-wrapper">
                                        <img className="form__icon" src="./img/icons/bi_phone-fill.svg" alt="tel icon" />
                                        <input className="form__input" type="tel" id="input-3" placeholder="Code" />
                                    </div>
                                </div>

                                <button type="submit" className="verify__form-btn btn" onClick={() => setStep(5)}>confirm phone</button>
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
    )
}

export default Verify