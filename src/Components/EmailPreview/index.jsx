import './EmailPreview.css'

const EmailPreview = ({name, subject, body, date_created, read,setEmailId,id}) => {
    let dateObj = new Date(date_created)
    let day = dateObj.getDate()
    let month = dateObj.getMonth()
    let year = dateObj.getFullYear()
    let formattedDate = `${day}/${month}/${year}`
    
    const handleClick = (e) => {
        setEmailId(id)
      }

    return (
        <div onClick={handleClick} className={"card" + (read == 0 ? ' text-bg-secondary' : '')}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h2 className="card-title">{name}</h2>
                    <p>{formattedDate}</p>
                </div>
                <h5 className="card-subtitle mb-2">{subject}</h5>
                <h6 className="card-text">{body}</h6>
            </div>
        </div>
    )
}

export default EmailPreview