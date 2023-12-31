import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react"
import "./Header.css"

const Header = ({inboxCounter,setEmailListToDisplay, emailListToDisplay, openNewEmail}) => {

    const [displayMenu, setDisplayMenu] = useState(false)

    return (
        <>
            <header className="col-12 d-flex justify-content-between align-items-center border-secondary bg-secondary text-white">
                <div className="col-2 d-md-none">
                    <button 
                        onClick={() => {setDisplayMenu(!displayMenu)}} 
                        className="mx-3 border border-black btn btn-secondary text-center" 
                        type="button" 
                        aria-expanded={displayMenu}
                    >
                        MENU
                    </button>
                </div>
                <h1 className="col-7 px-4 py-2 d-flex align-self-center">Email Client</h1>
                <div className="col-3 d-flex justify-content-end align-items-center pe-2 userName">
                    <i className="px-3 bi bi-person-circle fs-1 text-black"></i>
                    <span>User Name</span>
                </div>
            </header>
            <div className={"z-1 fs-4 col-4 col-md-2 col-lg-1 h-100 bg-info text-dark d-md-block " + (displayMenu ? '' : 'd-none')}>
                <a 
                    onClick={openNewEmail}
                    className="d-block px-3 py-4 text-white link-underline link-underline-opacity-0 new-email" 
                    href="#"
                >
                    New Email
                </a> 
                <a 
                    onClick={() => {setEmailListToDisplay('inbox')}} 
                    className={"d-block px-3 py-4 text-white link-underline link-underline-opacity-0 d-flex justify-content-between" + (emailListToDisplay == 'inbox' ? ' active' : '')} 
                    href="#"
                >
                    <span>Inbox</span>
                    <div>
                        <span className="badge text-bg-warning">
                            {inboxCounter}
                        </span>
                    </div>
                </a>
                <a 
                    onClick={() => {setEmailListToDisplay('sent')}} 
                    className={"d-block px-3 py-4 text-white link-underline link-underline-opacity-0 " + (emailListToDisplay == 'sent' ? 'active' : '')}
                    href="#"
                >
                    Sent
                </a>
                <a 
                    className={"d-block px-3 py-4 text-white link-underline link-underline-opacity-0 " + (emailListToDisplay == 'deleted' ? 'active' : '')} 
                    href="#"
                >
                    Deleted
                </a>
            </div> 
        </>
    )
}

export default Header