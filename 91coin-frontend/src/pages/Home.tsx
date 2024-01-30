import * as React from 'react'
const Header = React.lazy(() => import('../components/Header'))
const Footer = React.lazy(() => import('../components/Footer'))

const Home: React.FunctionComponent = () => {
  return (
    <div className="main__landing">
        <Header />

        <div className="hero">
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__info">
                        <h1 className="hero__title">
                            <div className="hero__title-color hero__title-color--sky">Brandnew</div>
                            <div className="hero__title-color hero__title-color--purple">crypto</div>
                            <div className="hero__title-color hero__title-color--orange">
                                project <img width="90" height="90" className="hero__title-arrow" src="./img/hero/arrow.svg" alt="arrow" />
                            </div>
                        </h1>
                    </div>

                    <div className="hero__columns">
                        <div className="hero__icons-column">
                            <img width="110" height="110" className="hero__star" src="./img/hero/star.svg" alt="star icon" />

                            <div className="hero__circkle">
                                <div className="hero__circkle-center"></div>

                                <img width="170" height="170" className="hero__circkle-pic" src="./img/hero/circle-text.svg" alt="circle-text icon" />
                            </div>
                            </div>

                            <div className="hero__icons-column">
                                <img className="hero__logo" src="./img/hero/logo.svg" alt="logo icon" />
                            </div>
                    </div>
                </div>
            </div>
        </div>

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
                        NFT.<br />
                        TOken.<br />
                        GAME-FI.<br />
                        Exchange.
                        </h3>

                        <p className="token-heroes__text">
                        Ornare mi nullam nullam blandit amet. Vestibulum metus sollicitudin duis egestas. Posuere auctor et cursus
                        turpis nisl turpis mi. In pellentesque sapien id id. Tempor ornare imperdiet integer elit quis. Ac lobortis ut
                        felis quis amet. Enim amet pulvinar purus metus aliquam. Arcu risus et nisl elit amet. Nunc at ultrices
                        gravida aliquam pellentesque suspendisse dolor consectetur. Ultricies tellus sollicitudin cras lobortis rutrum
                        lobortis sit lacus ac.
                        </p>

                        <p className="token-heroes__text">
                        Nisi volutpat consectetur lectus risus arcu sit lectus amet eget. Morbi id id quis ultricies. Ut morbi arcu
                        nibh lectus nibh at. Magna elit consectetur ipsum eu imperdiet morbi tristique. Montes molestie dignissim
                        gravida purus et sagittis. Pulvinar placerat augue placerat ultrices convallis nibh neque sodales.
                        Sollicitudin tellus duis nisl est commodo purus fermentum.
                        </p>

                        <img className="token-heroes__arrow" src="./img/token-heroes/token-heroes-arrow.svg" alt="arrow icon" />
                    </div>
                </div>
            </div>
        </div>

        <div className="ninety-one">
            <div className="ninety-one__inner">
                <div className="ninety-one__text ninety-one__text--left ninety-one__text--border">NINETY ONE</div>
                <div className="ninety-one__text">NINETY ONE</div>
                <div className="ninety-one__text ninety-one__text--right ninety-one__text--border">NINETY ONE</div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home