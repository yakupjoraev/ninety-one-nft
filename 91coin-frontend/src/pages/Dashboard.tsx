import DashboardSidebar from "../components/DashboardSidebar";
import DashboardFooter from "../components/DashboardFooter";
import Profile from "../components/Profile";
import cookies from "../services/cookies";
import { useEffect, useState } from "react";
import { status } from "../apis/Auth";

const Dashboard: React.FunctionComponent = () => {
    const [loading, setLoading] = useState(true)

    const checkAuthStatus = async () => {
        const response = await status()
        if(response.status == 200) {
            setLoading(false)
        } else {
            cookies.remove('access_token')
            window.location.replace('/login')
        }
    }

    useEffect(() => {
        checkAuthStatus()
    }, [])

    return (
        <>
        {loading ? <div>loading</div> : <div className="main__dashboard">
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
                            <div className="dashboard__block dashboard__block--blue">
                                <img className="dashboard__block-img" width="100" height="48" src="/img/logo.svg" alt="logo icon" />

                                <div className="dashboard__block-main">
                                <div className="dashboard__block-column">
                                    <h3 className="dashboard__block-label">Deposit Balance</h3>
                                    <p className="dashboard__block-text"> 91 Coin</p>
                                </div>

                                <div className="dashboard__block-column">
                                    <h3 className="dashboard__block-label dashboard__block-label--orange">124 </h3>
                                    <a href="#" className="dashboard__block-text dashboard__block-text--orange">Show USDT</a>
                                </div>
                                </div>
                            </div>

                            <div className="dashboard__block dashboard__block--purple disabled">
                                <img className="dashboard__block-img" width="106" height="48" src="/img/icons/game.svg" alt="game icon" />

                                <div className="dashboard__block-main">
                                <div className="dashboard__block-column">
                                    <h3 className="dashboard__block-label">Received in game </h3>
                                    <p className="dashboard__block-text"> 91 Coin</p>
                                </div>

                                <div className="dashboard__block-column">
                                    <h3 className="dashboard__block-label dashboard__block-label--orange">50</h3>
                                    <a href="#" className="dashboard__block-text dashboard__block-text--orange">Show USDT</a>
                                </div>
                                </div>
                            </div>

                            <div className="dashboard__block dashboard__block--orange disabled">
                                <img className="dashboard__block-img" width="78" height="54" src="/img/icons/rank-list.svg" alt="rank-list icon" />

                                <div className="dashboard__block-main">
                                <div className="dashboard__block-column">
                                    <h3 className="dashboard__block-label">Rank in Video List</h3>
                                    <p className="dashboard__block-text"></p>
                                </div>

                                <div className="dashboard__block-column">
                                    <h3 className="dashboard__block-label dashboard__block-label--orange">24</h3>
                                    <a href="#" className="dashboard__block-text dashboard__block-text--orange">Full List</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="transition-history">
                        <div className="content__head">
                        <h2 className="content__title">Transactions History</h2>
                        </div>

                        <div className="transition-history__main">
                            <ul className="transition-history__list">
                                <li className="transition-history__item transition-history__item--header">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <div className="transition-history__column">Date/Time</div>
                                <div className="transition-history__column transition-history__column--mob">Type</div>
                                <div className="transition-history__column transition-history__column--mob">Wallet/Address</div>
                                <div className="transition-history__column">User/System</div>
                                <div className="transition-history__column transition-history__column--mob">Amount</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                                <li className="transition-history__item">
                                <div className="transition-history__column">
                                    <img src="/img/icons/check.svg" alt="check icon" />
                                </div>
                                <a href="#" className="transition-history__column">Cell A</a>
                                <div className="transition-history__column transition-history__column--mob">Send</div>
                                <a href="#"
                                    className="transition-history__column transition-history__column--mob">0xhe5sbhSTNx98xcv687SDSYOKE3qDs8wFv8</a>
                                <div className="transition-history__column">User</div>
                                <div className="transition-history__column transition-history__column--mob">Cell C</div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <DashboardFooter />
                </div>

                <Profile />
            </div>
        </div>}
        </>
    )
}

export default Dashboard