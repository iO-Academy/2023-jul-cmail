import { useState } from "react"
import "./NewEmail.css"

const NewEmail = () => {

    const [error, setError] = useState(false)

    function isValidEmail(email) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)
    }

    const handleChange = (e) => {
        // email is hard coded, use actual email from form then delete this comment
        if(!isValidEmail('cosmin@gmail')) {
            setError('Email is invalid')
            console.log("invalid email")
        } else {
            console.log('valid email')
            setError(null)
        }
    }
    return (
        <div className="col-12 col-md-7 offset-md-2 offset-lg-1 col-lg-5 newEmail bg-white position-fixed border"> 
            <div className="mb-3">      
                <label htmlFor="to" className="form-label"></label>
                <input onInput={handleChange} type="email" className={"form-control form-control-lg" + (error ? " is-invalid" : '')} placeholder="To">
                </input>
                    <div className="ps-2 mt-2 fs-6 invalid-feedback">{error}</div>
                
            </div>
            <div className="mb-3">
                <label htmlFor="subject" className="form-label"></label>
                <input className="form-control form-control-lg" placeholder="Subject"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="emailContent" className="form-label"></label>
                <textarea className="form-control" rows="10"></textarea>
                </div>
            <div className="mt-4 ms-2 d-flex justify-content-end">
                <button type="button" className="btn btn-secondary m-1">Cancel</button>
                <button type="button" className="btn btn-success m-1">Send</button>
            </div>
        </div>
    )
}

export default NewEmail 