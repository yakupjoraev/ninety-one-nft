import { useEffect, useState } from "react"

const Profile: React.FunctionComponent = () => {
    const [showProfile, setShowProfile] = useState<boolean>(false)
    const [showSendModal, setShowSendModal] = useState<boolean>(false)
    const [showReceiveModal, setShowReceiveModal] = useState<boolean>(false)

    useEffect(() => {
        (showSendModal || showReceiveModal) && setShowProfile(false)
    }, [showSendModal, showReceiveModal])

    return (
    <>
        <div className="profile">
            <div className="profile__mob" data-profile-mob onClick={() => setShowProfile(true)}>
                <div className="profile__mob-avatar">
                <img src="/img/profile/avatar-mob.png" alt="avatar icon" />
                </div>

                <div className="profile__mob-right">
                <p className="profile__mob-name">John Johnson</p>

                <button type="button" className="profile__mob-btn">
                    <img src="/img/icons/profile-polygon.svg" alt="profile-polygon icon" />
                </button>
                </div>
            </div>

            <div className={`profile__inner ${showProfile ? 'active' : ''}`} data-profile-mob-content>
                <div className="profile__header">

                <div className="profile__top">
                    <h2 className="profile__title">Profile</h2>

                    <div className="profile__notif">
                        <img src="/img/icons/mi_notification.svg" alt="notification icon" />
                    </div>

                    <button type="button" className="profile__close-btn" data-profile-mob-close onClick={() => setShowProfile(false)}>
                        <img src="/img/icons/profile-close.svg" alt="profile-close icon" />
                    </button>
                </div>

                <div className="profile__avatar">
                    <img className="profile__avatar-decors" src="/img/profile/avatar-decors.svg" alt="avatar-decors" />
                    <img className="profile__avatar-botders" src="/img/profile/avatar-borders.svg" alt="avatar decor" />
                    <div className="profile__avatar-inner">
                    <img className="profile__avatar-pic" width="80" height="80" src="/img/profile/avatar.png" alt="avatar" />
                    </div>
                </div>

                <div className="profile__naming">
                    <h4 className="profile__name">John Johnson</h4>
                    <p className="profile__address">0x8hjwe76556xcGKH</p>
                </div>
                </div>

                <div className="profile__balance">
                <p className="profile__balance-label">Total Balance</p>
                <div className="profile__balance-sum">$124.983,07 </div>
                <a className="profile__balance-link" href="#">Show 91Coin</a>
                </div>

                <div className="profile__actions">
                <button className="profile__action profile__action--blue open-modal-btn" data-modal-id="send" onClick={() => setShowSendModal(true)}>
                    <img src="/img/icons/uil_money-withdraw.svg" width="20" height="20" alt="uil_money-withdraw icon" />

                    <span>send</span>
                </button>

                <button className="profile__action profile__action--purple open-modal-btn" data-modal-id="recive"  onClick={() => setShowReceiveModal(true)}>
                    <img src="/img/icons/uil_money-withdraw-2.svg" width="20" height="20" alt="uil_money-withdraw icon" />

                    <span>recive</span>
                </button>

                <a href="#" className="profile__action disabled">
                    <span>trade</span>
                </a>


                <a href="#" className="profile__action disabled">
                    <span>withdraw</span>
                </a>
                </div>

                <div className="profile__transfer">
                <p className="profile__transfer-label">Quick Transfer</p>

                <div className="profile__transfer-list">
                    <a href="#" className="profile__transfer-item">
                    <img className="profile__transfer-img" width="48" height="48" src="/img/profile/transfer-1.png"
                        alt="transfer pic" />
                    </a>

                    <a href="#" className="profile__transfer-item">
                    <img className="profile__transfer-img" width="48" height="48" src="/img/profile/transfer-2.png"
                        alt="transfer pic" />
                    </a>

                    <a href="#" className="profile__transfer-item">
                    <img className="profile__transfer-img" width="48" height="48" src="/img/profile/transfer-3.png"
                        alt="transfer pic" />
                    </a>

                    <a href="#" className="profile__transfer-item">
                    <img className="profile__transfer-img" width="48" height="48" src="/img/profile/transfer-4.png"
                        alt="transfer pic" />
                    </a>

                    <a href="#" className="profile__transfer-item profile__transfer-add">
                    <img className="profile__transfer-img" src="/img/icons/add-transfer.svg" alt="add icon" />
                    </a>
                </div>
                </div>

                <div className="profile__invite">
                <div className="profile__invite-picture">
                    <img className="profile__invite-pic" width="134" height="112" src="/img/profile/heart.svg" alt="heart" />
                </div>

                <div className="profile__invite-inner">
                    <p className="profile__invite-label">Invite You Friends</p>

                    <p className="profile__invite-text">Egestas sit pulvinar auctor at duis ac tristique sit.</p>

                    <a className="profile__invite-btn btn" href="#">Invite</a>
                </div>
                </div>
            </div>
        </div>

        <div  className={`modal ${showSendModal ? 'show' : ''}`} id="send">
            <div className="modal-content">
                <button type="button" className="close-modal-btn" onClick={() => setShowSendModal(false)}>
                <img src="/img/icons/close-modal.svg" alt="close-modal icon" />
                </button>

                <div className="modal__header">
                <h3 className="modal__title">Send</h3>

                <div className="modal__qr">
                    <img width="160" height="160" src="/img/qr.png" alt="qr code pic" />
                </div>
                </div>

                <form className="modal__form form" action="#">
                <div className="form__group">
                    <label className="form__label" htmlFor="moda-input-1">Address</label>

                    <div className="form__input-wrapper form__input-wrapper--border">
                    <input className="form__input" type="text" id="moda-input-1" placeholder="Address"
                        defaultValue="0x99sdg4fg564hs8fgh7ss6f5gh4" />
                    </div>
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="moda-input-2">Amount</label>

                    <div className="form__input-wrapper form__input-wrapper--border">
                    <input className="form__input" type="number" id="moda-input-2" placeholder="Amount" defaultValue="100" />

                    <div className="form__token">91COIN</div>
                    </div>
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="moda-input-3">Fee</label>

                    <div className="form__input-wrapper form__input-wrapper--border">
                    <input className="form__input" type="number" id="moda-input-3" placeholder="Fee" defaultValue="0.1" />

                    <div className="form__token">91COIN</div>
                    </div>
                </div>

                <button type="submit" className="btn btn--full">send</button>
                </form>
            </div>
        </div>

        <div className={`modal ${showReceiveModal ? 'show' : ''}`} id="recive">
            <div className="modal-content">
                <button type="button" className="close-modal-btn" onClick={() => setShowReceiveModal(false)}>
                <img src="/img/icons/close-modal.svg" alt="close-modal icon" />
                </button>

                <div className="modal__header">
                <h3 className="modal__title">Recive</h3>

                <div className="modal__qr">
                    <img width="160" height="160" src="/img/qr.png" alt="qr code pic" />
                </div>
                </div>

                <form className="modal__form form" action="#">
                <div className="form__group">
                    <label className="form__label" htmlFor="moda-input-4">Address</label>

                    <div className="form__input-wrapper form__input-wrapper--border">
                    <input className="form__input" type="text" id="moda-input-4" placeholder="Address"
                        defaultValue="0x99sdg4fg564hs8fgh7ss6f5gh4" />
                    <button type="button" className="form__copy">
                        <img src="/img/icons/copy.svg" width="20" height="20" alt="copy icon" />
                    </button>
                    </div>
                </div>

                <div className="form__group">
                    <label className="form__label" htmlFor="moda-input-5">Network Data</label>

                    <div className="form__input-wrapper form__input-wrapper--border">
                    <textarea className="form__input form__input--textarea" id="moda-input-5"
                        placeholder="Network Data" defaultValue="Eget tincidunt tristique urna in. Adipiscing integer tristique libero molestie dolor ante. Urna enim nulla ac porttitor maecenas. Odio duis tincidunt nec et dolor mattis ac facilisis tortor. Aenean nullam arcu quam tortor aliquet."></textarea>
                    </div>
                </div>

                <button type="submit" className="btn btn--full">share</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Profile