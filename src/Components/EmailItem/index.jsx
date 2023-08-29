import './EmailItem.css'

const EmailItem = ({name, subject, body, date_created, read}) => {
    let dateObj = new Date(date_created)
    let day = dateObj.getDate()
    let month = dateObj.getMonth()
    let year = dateObj.getFullYear()
    let formattedDate = `${day}/${month}/${year}`
    
    return (
        <>
            <div className={"card row col-12" + (read == 0 ? ' text-bg-secondary' : '')}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h2 className="card-title">{name}</h2>
                        <p>{formattedDate}</p>
                    </div>
                    <h5 className="card-subtitle mb-2">{subject}</h5>
                    <h6 className="card-text">{body}</h6>
                </div>
            </div>
        </>
    )
}

export default EmailItem