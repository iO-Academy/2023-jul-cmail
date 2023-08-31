import './Alert.css'

const Alert = () => {
    const sentSuccess = true

    return (
        <div className={"offset-4 col-4 border position-fixed sent-message bg-info " + (sentSuccess ? "bg-info" : "bg-danger")}>
            <div className="modal-dialog fs-4">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title fs-2">{sentSuccess ? "Success" : "Unsuccessful"}</h5> 
                    <button type="button" className="btn-close m-2" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>{sentSuccess ? "Email sent successfully" : "Sending email is unsuccessful also Colin smells and Josh is a turnip"}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary m-1" data-bs-dismiss="modal">Dismiss</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Alert