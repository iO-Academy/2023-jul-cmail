import { useEffect, useState } from "react"

const EmailPreview = ({name, subject, body, date_created, read,setEmailId,id}) => {
    const [formattedDate, setFormattedDate] = useState()
    
    useEffect(() => {
        const dateObj = new Date(date_created)
        const day = dateObj.getDate()
        const month = dateObj.getMonth()
        const year = dateObj.getFullYear()
        const formattedDate = `${day}/${month}/${year}`
        setFormattedDate(formattedDate)
    }, [date_created])
    
    const handleClick = (e) => {
        setEmailId(id)
      }

    return (
        <div onClick={handleClick} className={"border-bottom p-3" + (read == 0 ? ' text-bg-secondary border-white' : '')}>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h2 className="card-title fs-4">{name}</h2>
                    <p>{formattedDate}</p>
                </div>
                <h5 className="card-subtitle mb-2 fs-5">{subject}</h5>
                <h6 className="card-text fs-5">{body}&hellip;</h6>
            </div>
        </div>
    )
}

export default EmailPreview