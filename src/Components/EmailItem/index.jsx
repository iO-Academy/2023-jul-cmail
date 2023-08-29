const EmailItem = ({name, subject, body, date_created, read}) => {
    //logic to switch to color to selected text-bg-primary

    //logic to switch color to unread text-bg-secondary
    const highlightEmailItem = () => {
        if ({read} == 0) {
            emailItem.className = "text-bg-secondary"
        }
    }
    
    return (
        <>
            <div className="card row col-3" id="emailItem">
                <div className="card-body ">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{name}</h5>
                        <p>{date_created}</p>
                    </div>
                    <h6 className="card-subtitle mb-2">{subject}</h6>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </>
    )
}


export default EmailItem