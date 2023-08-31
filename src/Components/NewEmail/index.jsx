import { useEffect, useState } from "react"
import "./NewEmail.css"

const NewEmail = ({cancelNewEmail}) => {

    const [sendButton, setSendButton] = useState(false)
    const [sentEmail, setSentEmail] = useState(false)
    
    const sendEmail = async () => {
        const response = await fetch (`http://localhost:8080/emails/`, {
            method: 'POST',
            body: JSON.stringify(data.email),
            headers: {
                'content-type': 'application/json'
            }
        })
        let data = await response.json()
        console.log(data)
    }

    useEffect(() => {
        sendEmail()
        .then()
    })



    return (
        <div className="col-12 col-md-7 offset-md-2 offset-lg-1 col-lg-5 newEmail bg-white position-fixed border"> 
            <div className="mb-3">      
                <label htmlFor="to" className="form-label"></label>
                <input type="email" className="form-control form-control-lg" placeholder="To"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label"></label>
                <input className="form-control form-control-lg" placeholder="Subject" value={''}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="emailContent" className="form-label"></label>
                <textarea className="form-control" rows="10" value={''}></textarea>
                </div>
            <div className="mt-4 ms-2 d-flex justify-content-end">
                <button type="button" className="btn btn-secondary m-1" onClick={cancelNewEmail}>Cancel</button>
                <button type="button" className="btn btn-success m-1">Send</button>
            </div>
        </div>
    )
}

export default NewEmail      

// // const [cancelButton, setCancelButton] = useState(false)

    // const handleSend = () => {
    //     setSendButton(true)
    // }