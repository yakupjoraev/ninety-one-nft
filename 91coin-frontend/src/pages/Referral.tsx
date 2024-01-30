import DashboardFooter from "../components/DashboardFooter";
import DashboardSidebar from "../components/DashboardSidebar";
import Profile from "../components/Profile";

const Referral: React.FunctionComponent = () => {
  return (
    <div className="main__dashboard">
        <div className="dashboard__wrapper">
            <DashboardSidebar />

            <div className="content">
                <div className="dashboard">
                    <div className="content__head">
                        <h1 className="content__title">Dashboard</h1>

                        <time className="content__time">
                            Jan 15, 2024 3:35 AM
                        </time>
                    </div>

                    <div className="dashboard__blocks">
                        <div className="dashboard__block dashboard__block--orange dashboard__block--row">
                            <img className="dashboard__block-img" width="196" height="196" src="/img/qr.png" alt="qr icon" />

                            <div className="dashboard__block-main">
                            <div className="dashboard__block-column">
                                <h3 className="dashboard__block-label">Invite Refferal</h3>
                                <p className="dashboard__block-text">
                                Consequat commodo morbi quis et egestas nunc nisl mi ac. Volutpat penatibus
                                a dui volutpat. Dolor gravida at quis volutpat orci. Adipiscing penatibus nascetur interdum at at non
                                mauris eu viverra. Nullam dictum erat nunc habitant morbi neque.
                                </p>
                            </div>

                            <form className="form" action="#">
                                <div className="form__group">
                                <label className="form__label" htmlFor="moda-input-4">Referral Link</label>

                                <div className="form__input-wrapper form__input-wrapper--border">
                                    <input className="form__input" type="text" id="moda-input-4" placeholder="Referral Link"
                                    defaultValue="0xP]cvx387SDSYOKE3qDs8547c854yLkcR75X" />
                                    <button type="button" className="form__copy">
                                    <img src="/img/icons/copy.svg" width="20" height="20" alt="copy icon" />
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>

                        <div className="dashboard__blocks-column">
                            <div className="dashboard__block dashboard__block--blue">
                            <div className="dashboard__block-main">
                                <div className="dashboard__block-column">
                                <h3 className="dashboard__block-label">Refferals</h3>
                                <p className="dashboard__block-text"> People</p>
                                </div>

                                <div className="dashboard__block-column">
                                <h3 className="dashboard__block-label dashboard__block-label--orange">132 </h3>
                                <a href="#" className="dashboard__block-text dashboard__block-text--orange">Full List</a>
                                </div>
                            </div>
                            </div>

                            <div className="dashboard__block dashboard__block--purple">
                            <div className="dashboard__block-main">
                                <div className="dashboard__block-column">
                                <h3 className="dashboard__block-label">Received from Referral </h3>
                                <p className="dashboard__block-text"> 91 Coin</p>
                                </div>

                                <div className="dashboard__block-column">
                                <h3 className="dashboard__block-label dashboard__block-label--orange">91</h3>
                                {/* <!-- <a href="#" className="dashboard__block-text dashboard__block-text--orange">Show USDT</a> --> */}
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>

                    <div className="transition-history">
                        <div className="content__head">
                        <h2 className="content__title">History of Referral Accruals</h2>
                        </div>

                        <div className="transition-history__main">
                        <ul className="transition-history__list transition-history__list--5-column">
                            <li className="transition-history__item transition-history__item--header">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <div className="transition-history__column transition-history__column--mob">Refferal</div>
                            <div className="transition-history__column">Amount</div>
                            <div className="transition-history__column transition-history__column--mob">Date/Time</div>
                            <div className="transition-history__column transition-history__column--mob">Line</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>

                            <li className="transition-history__item">
                            <div className="transition-history__column">
                                <img src="/img/icons/check.svg" alt="check icon" />
                            </div>
                            <a href="#" className="transition-history__column transition-history__column--mob">John Johnson</a>
                            <div className="transition-history__column">1 000</div>
                            <a href="#" className="transition-history__column transition-history__column--mob">15.01.2024 17:08</a>
                            <div className="transition-history__column transition-history__column--mob">1</div>
                            </li>
                        </ul>
                        </div>
                    </div>

                    <DashboardFooter />
                </div>

                <Profile />
        </div>
    </div>
  )
}

export default Referral