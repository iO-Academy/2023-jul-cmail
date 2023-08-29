const Header = () => {

    return (
        <div className="h-100 conatiner-fluid">
            <div className="row d-flex justify-content-between align-items-end border border-secondary bg-secondary text-white">
                <h1 className="col-6 px-5 py-2">Email Client</h1>
                <p className="col-2">User Name</p>
            </div>
            <div className="col-1 h-100 p-3 mb-2 bg-info text-dark">
                <a className="text-white link-underline link-underline-opacity-0" href="#">New Email</a> <br />
                <a className="text-white link-underline link-underline-opacity-0" href="#">Inbox</a> <br />
                <a className="text-white link-underline link-underline-opacity-0" href="#">Sent</a> <br />
                <a className="text-white link-underline link-underline-opacity-0" href="#">Deleted</a> <br />
            </div> 
        </div>
    )



}

export default Header