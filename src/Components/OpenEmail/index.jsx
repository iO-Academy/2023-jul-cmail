import { useEffect, useState } from "react"
import EmailPreview from "../EmailPreview"
import './OpenEmail.css'
import Button from "../Button"

const OpenEmail = ({emailId, closeEmail}) => {
    const [email, setEmail ] = useState(false)
    const getEmail =  async () => {
        let response = await fetch(`http://localhost:8080/emails/${emailId}`)
        let email = await response.json()
        setEmail(email.data.email)
    }

    // const [closeButton, setCloseButton] = useState(false)


    useEffect(() => {
        getEmail()
    }, [emailId])
    
    return (
        <> 
          <div className="p-md-5 pt-md-3 p-3 col-12 col-md-7 col-lg-8 openEmail">
            <Button onClick={closeEmail}  text={'Close'}/>  
              <div className="border border-start-0 border-end-0 border-top border-bottom mt-3 py-5"> 
                <div className="d-flex justify-content-between">
                  <h3>{email.name}</h3><span>{email.date_created}</span>
                </div>
                  <p>{email.email}</p>
                  <h2>{email.subject}</h2>
                  <p>{email.body}</p>
                </div> 
          </div>
        </>
    )
}

export default OpenEmail
