import { useState } from "react"
import EmailList from "../EmailList"
import { useEffect } from "react"

const SentBox = ({setInboxCount, setEmailId, emailId}) => {
        const [emails, setEmails] = useState(false)
        
        const getEmails =  async () => {
            let response = await fetch('http://localhost:8080/emails/sent')
            let emails = await response.json()
            setEmails(emails.data)
        }

    
        useEffect(() => {
            getEmails()
        }, [setEmailId])
        
        return (
            <>
                {emails && <EmailList emailId={emailId} emails={emails} setEmailId={setEmailId}/>}
            </>
        )
    }


export default SentBox