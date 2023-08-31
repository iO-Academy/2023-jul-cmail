import {useState } from "react"
import "./NewEmail.css"

const NewEmail = ({cancelNewEmail, handleInput}) => {

    const [address, setAddress] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleSubject = (e) => {
        setSubject(e.target.value)
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }
    
    const sendEmail = async () => {
        const sentEmail = {
            email: address,
            name: 'Alex is a loser',
            subject: subject,
            body: body
        }
        const response = await fetch (`http://localhost:8080/emails`, {
            method: 'POST',
            body: JSON.stringify(sentEmail),
            headers: {
                'content-type': 'application/json'
            }
        })
        const emailResponseData = await response.json()
        if (emailResponseData.data.sent) {
            cancelNewEmail()
        }
        console.log(emailResponseData) 
    }

    return (
        <div className="col-12 col-md-7 offset-md-2 offset-lg-1 col-lg-5 newEmail bg-white position-fixed border"> 
            <div className="mb-3">      
                <label htmlFor="to" className="form-label"></label>
                <input onInput={handleAddress} type="email" className="form-control form-control-lg" placeholder="To"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label"></label>
                <input onInput={handleSubject} className="form-control form-control-lg" placeholder="Subject"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="emailContent" className="form-label"></label>
                <textarea onInput={handleBody} className="form-control" rows="10"></textarea>
                </div>
            <div className="mt-4 ms-2 d-flex justify-content-end">
                <button type="button" className="btn btn-secondary m-1" onClick={cancelNewEmail}>Cancel</button>
                <button type="button" className="btn btn-success m-1" onClick={sendEmail}>Send</button>
            </div>
        </div>
    )
}

export default NewEmail      

