import { useState } from "react"
import "./NewEmail.css"

const NewEmail = ({closeNewEmail, setSentSuccess}) => {
    const [emailError, setEmailError] = useState(false)
    const [address, setAddress] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')
    const [emptyError, setEmptyError] = useState(false)

    const isValidEmail = (email) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    }

    const handleAddress = (e) => {
        if(!isValidEmail(e.target.value)) {
            setEmailError('Email is invalid')
        } else {
            setAddress(e.target.value)
            setEmailError(null)
        }
    }

    const handleSubject = (e) => {
        setSubject(e.target.value)
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }
    
    const sendEmail = async () => {
        if (address.length == 0 || subject.length == 0 || body.length == 0) {
            setEmptyError('Please fill out all fields')
        } else {
            const sentEmail = {
                email: address,
                name: 'Colin & The Caterpillars',
                subject: subject,
                body: body
            }
            const response = await fetch (`http://localhost:8080/emails`, {
                method: 'POST',
                body: JSON.stringify(sentEmail),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const emailResponseData = await response.json()
            if (emailResponseData.data.sent) {
                closeNewEmail()
                setSentSuccess(true)
            } else {
                setSentSuccess(false)
            }
        }
    }

    return (
        <div className="col-12 col-md-7 offset-md-2 offset-lg-1 col-lg-7 newEmail bg-white position-fixed border"> 
            <div className="mb-3">      
                <input onBlur={handleAddress} type="email" className={"form-control form-control-lg " + (emailError ? "is-invalid" : '')} placeholder="To"/>
                <div className="ps-2 mt-2 fs-6 invalid-feedback">{emailError}</div>
            </div>
            <div className="mb-3">
                <input onInput={handleSubject} className="form-control form-control-lg" placeholder="Subject"/>
            </div>
            <div className="mb-3">
                <textarea onInput={handleBody} className="form-control" rows="15"/>
            </div>
            <div className="mt-4 ms-2 d-flex justify-content-end">
                <div className="ps-2 mt-2 me-3 fs-6 text-danger">{emptyError}</div>
                <button type="button" className="btn btn-secondary m-1" onClick={closeNewEmail}>Cancel</button>
                <button type="button" className="btn btn-success m-1" onClick={sendEmail}>Send</button>
            </div>
        </div>
    )
}

export default NewEmail 