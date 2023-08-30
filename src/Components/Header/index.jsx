import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react"
import './Header.css'

const Header = ({inboxCounter}) => {

    const [displayMenu, setDisplayMenu] = useState(false)

    return (
        <>
            <div className="col-12 d-flex justify-content-between align-items-center border border-secondary bg-secondary text-white">
                <div className="col-2 d-md-none">
                    <button onClick={() => {setDisplayMenu(!displayMenu)}} className="mx-3 border border-black btn btn-secondary text-center" type="button" aria-expanded={displayMenu}>MENU</button>
                </div>
                <h1 className="offset-xs-1 col-5 px-4 py-4 d-flex align-self-end">Email Client</h1>
                <div className="col-3 col-md-2 col-lg-2 text-end d-flex align-items-center pe-2 fs-3">
                    <i className="px-3 bi bi-person-circle fs-1 text-black"></i>
                    <span>User Name</span>
                </div>
            </div>
            <div className={"fs-4 col-4 col-md-2 col-lg-1 h-100 bg-info text-dark d-md-block" + (displayMenu ? '' : ' d-none')}>
                <a className="d-block px-3 py-4 text-white link-underline link-underline-opacity-0 link-underline-opacity-100-hover bg-primary" href="#">New Email</a>
                <a className="d-block px-3 py-4 text-white link-underline link-underline-opacity-0 link-underline-opacity-75-hover d-flex justify-content-between" href="#">
                    <span>Inbox</span>
                    <div><span className="badge text-bg-warning">{inboxCounter}</span></div>
                </a>
                <a className="d-block px-3 py-4 text-white link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Sent</a>
                <a className="d-block px-3 py-4 text-white link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">Deleted</a>
            </div> 
        </>
    )
}

export default Header