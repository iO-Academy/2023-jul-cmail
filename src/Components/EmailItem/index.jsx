const EmailItem = ({name, subject, body, date_created}) => {
    return (
        <>
            <div className="card row col-3">
                <div className="card-body ">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{name}</h5>
                        <p>{date_created}</p>
                    </div>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{subject}</h6>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </>
    )
}


export default EmailItem