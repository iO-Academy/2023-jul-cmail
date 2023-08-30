import { useState } from "react"
import EmailList from "../EmailList"
import { useEffect } from "react"

const Inbox = ({setInboxCount, setEmailId, emailId}) => {
    const [emails, setEmails ] = useState(false)

    const getEmails =  async () => {
        let response = await fetch('http://localhost:8080/emails')
        let emails = await response.json()
        setEmails(emails.data)
        countUnreadEmails(emails.data) 
    }

    const countUnreadEmails = (emails) => {
        let unreadEmails = emails.filter(email => email.read==0)
        setInboxCount(unreadEmails.length)
    }

    useEffect(() => {
        getEmails()
    }, [])
    
    return (
        <>
            {emails && <EmailList emailId={emailId} emails={emails} setEmailId={setEmailId}/>}
        </>
    )
}

export default Inbox

