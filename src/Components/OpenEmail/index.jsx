import { useEffect, useState } from "react"
import {formatDate} from '../../Utilities/DateFormatter'
import './OpenEmail.css'
import Button from "../Button"

const OpenEmail = ({emailId, setRefreshEmails, closeEmail}) => {
    const [email, setEmail ] = useState(false)
    const [formattedDate, setFormattedDate] = useState()
    const [error, setError] = useState(false)

    const setEmailAsRead = async () => {
      await fetch(`http://localhost:8080/emails/${emailId}`, {
        method: 'PUT'
      })
    }

    const getEmail = async () => {
        let response = await fetch(`http://localhost:8080/emails/${emailId}`)
        let email = await response.json()
        setEmail(email.data.email)
        setError(false)
    }

    useEffect(() => {
        const formattedDate = formatDate(email.date_created)
        setFormattedDate(formattedDate)
    }, [email.date_created])
    
    useEffect(() => {
        getEmail()
        .then(setEmailAsRead)
        .then(() => {
          setRefreshEmails(emailId)
        })
        .catch(() => {
          setError('Unexpected error occured!')
        })
    }, [emailId])
    
    return (
      <div className="p-md-5 pt-md-3 p-3 col-12 col-md-6 col-lg-8 openEmail">
        {error === false ?
          (<>
            <Button onClick={closeEmail} text={'Close'}/> 
            <div className="border border-start-0 border-end-0 border-top border-bottom mt-3 py-5"> 
              <div className="d-flex justify-content-between">
                <h3>{email.name}</h3><span>{formattedDate}</span>
              </div>
              <p>{email.email}</p>
              <h2>{email.subject}</h2>
              <p>{email.body}</p>
            </div> 
          </>)
          :
          (<p className="h1 pt-5 text-center text-danger">{error}</p>)}
      </div>
    )
}

export default OpenEmail
