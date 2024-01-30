import * as React from 'react'
import { useLocation } from 'react-router'
const Header = React.lazy(() => import('../components/Header'))
const Footer = React.lazy(() => import('../components/Footer'))

const ComingSoon: React.FunctionComponent = () => {
    const location = useLocation()

    return (
        <div className="main__landing">
            <Header />

            <div className="token-heroes">
                <div className="container">
                    <div className="token-heroes__inner">
                        <div className="token-heroes__pictures">
                            <div className="token-heroes__picture">
                                <img width="490" height="694" src="./img/token-heroes/pic-1.png" alt="pic" />
                            </div>

                            <div className="token-heroes__picture">
                                <img width="522" height="700" src="./img/token-heroes/pic-2.png" alt="pic" />
                            </div>

                            <div className="token-heroes__picture">
                                <img width="588" height="746" src="./img/token-heroes/pic-3.png" alt="pic" />
                            </div>
                        </div>
                        <div className="token-heroes__info">
                            <h3 className="token-heroes__title">
                                {location?.pathname?.split('/')?.join('')}<br /><br /> Coming soon
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default ComingSoon