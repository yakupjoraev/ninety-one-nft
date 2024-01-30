import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Header: React.FunctionComponent = () => {
    const location = useLocation()
    const [showMenu, setShowMenu] = useState<boolean>(false)

    useEffect(() => {
        if(showMenu) {
            document.body.classList.add('locked')
        } else {
            document.body.classList.remove('locked')
        }
    }, [showMenu])

    useEffect(() => {
        showMenu && setShowMenu(false)
        window.scrollTo({top: 0})
    }, [location])

    return (
        <header className="header">
            <nav className="nav">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <Link to="/" className="logo__link">
                                <img width="110" height="54" src="./img/logo.svg" alt="logo icon" />
                            </Link>
                        </div>

                        <ul className={`menu ${showMenu ? 'active' : ''}`}>
                            <li className="menu__item">
                                <Link to="/about" className="menu__item-link" data-scroll>
                                about

                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.49365" cy="7.5" r="7" stroke="#343434" />
                                    <g clipPath="url(#clip0_2003_47)">
                                    <path
                                        d="M4.8275 9.72274L10.1308 4.41944M10.1308 4.41944L10.1308 9.42811M10.1308 4.41944L5.12213 4.41944"
                                        stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2003_47">
                                            <rect width="10" height="10" fill="white" transform="translate(7.479) rotate(45)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                </Link>
                            </li>

                            <li className="menu__item">
                                <Link to="/whitepaper" className="menu__item-link" data-scroll>
                                whitepaper

                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.49365" cy="7.5" r="7" stroke="#343434" />
                                    <g clipPath="url(#clip0_2003_47)">
                                    <path
                                        d="M4.8275 9.72274L10.1308 4.41944M10.1308 4.41944L10.1308 9.42811M10.1308 4.41944L5.12213 4.41944"
                                        stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2003_47">
                                        <rect width="10" height="10" fill="white" transform="translate(7.479) rotate(45)" />
                                    </clipPath>
                                    </defs>
                                </svg>

                                </Link>
                            </li>

                            <li className="menu__item">
                                <Link to="/exchange" className="menu__item-link" data-scroll>
                                exchange

                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.49365" cy="7.5" r="7" stroke="#343434" />
                                    <g clipPath="url(#clip0_2003_47)">
                                    <path
                                        d="M4.8275 9.72274L10.1308 4.41944M10.1308 4.41944L10.1308 9.42811M10.1308 4.41944L5.12213 4.41944"
                                        stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2003_47">
                                        <rect width="10" height="10" fill="white" transform="translate(7.479) rotate(45)" />
                                    </clipPath>
                                    </defs>
                                </svg>

                                </Link>
                            </li>

                            <li className="menu__item">
                                <Link to="/contacts" className="menu__item-link" data-scroll>
                                contacts

                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="7.49365" cy="7.5" r="7" stroke="#343434" />
                                    <g clipPath="url(#clip0_2003_47)">
                                    <path
                                        d="M4.8275 9.72274L10.1308 4.41944M10.1308 4.41944L10.1308 9.42811M10.1308 4.41944L5.12213 4.41944"
                                        stroke="#343434" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_2003_47">
                                        <rect width="10" height="10" fill="white" transform="translate(7.479) rotate(45)" />
                                    </clipPath>
                                    </defs>
                                </svg>

                                </Link>
                            </li>
                        </ul>

                        <Link to="/verify" className="btn nav__btn">recive wallet</Link>

                        <div className={`burger ${showMenu ? 'active-burger' : ''}`} onClick={() => setShowMenu(!showMenu)}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header