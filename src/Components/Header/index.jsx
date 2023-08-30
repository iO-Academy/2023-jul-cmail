import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react"

const Header = () => {

    const [displayMenu, setDisplayMenu] = useState(false)

    return (
<<<<<<< HEAD
        <div className="h-100 w-100">
            <div className="d-flex justify-content-between align-items-center border border-secondary bg-secondary text-white">
                <button onClick={() => {setDisplayMenu(!displayMenu)}} className="col-2 mx-3 border border-black btn btn-secondary d-md-none text-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">MENU</button>
=======
        <>
            <div className="col-12 d-flex justify-content-between align-items-center border border-secondary bg-secondary text-white">
                <div className="col-2 d-md-none">
                    <button onClick={() => {setDisplayMenu(!displayMenu)}} className="mx-3 border border-black btn btn-secondary text-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">MENU</button>
                </div>
>>>>>>> S1T4_render_components_with_fetched_data
                <h1 className="col-7 px-4 py-2 d-flex align-self-end">Email Client</h1>
                <div className="col-3 text-end pe-3">
                    <i className="px-3 bi bi-person-circle fs-2"></i>
                    <span>User Name</span>
                </div>
            </div>
<<<<<<< HEAD
            <div className={"col-4 col-md-1 h-100 mb-2 bg-info text-dark d-md-block" + (displayMenu ? '' : ' d-none')}>
                <a className="d-block ps-2 py-3 text-white link-underline link-underline-opacity-0 bg-primary" href="#">New Email</a> <br />
                <a className="d-block ps-2 py-3 text-white link-underline link-underline-opacity-0" href="#">Inbox</a> <br />
                <a className="d-block ps-2 py-3 text-white link-underline link-underline-opacity-0" href="#">Sent</a> <br />
                <a className="d-block ps-2 py-3 text-white link-underline link-underline-opacity-0" href="#">Deleted</a> 
            </div>
        </div>
=======
            <div className={"col-4 col-md-1 h-100 bg-info text-dark d-md-block" + (displayMenu ? '' : ' d-none')}>
                <a className="d-block px-2 py-3 text-white link-underline link-underline-opacity-0 bg-primary" href="#">New Email</a> <br />
                <a className="d-block px-2 py-3 text-white link-underline link-underline-opacity-0" href="#">Inbox</a> <br />
                <a className="d-block px-2 py-3 text-white link-underline link-underline-opacity-0" href="#">Sent</a> <br />
                <a className="d-block px-2 py-3 text-white link-underline link-underline-opacity-0" href="#">Deleted</a> <br />
            </div> 
            
        </>
>>>>>>> S1T4_render_components_with_fetched_data
    )
}

export default Header