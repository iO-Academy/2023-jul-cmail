import { useState, useEffect } from "react"
import EmailList from "../EmailList"

const Inbox = ({setInboxCount, setEmailId, emailId, refreshEmails}) => {
    const [emails, setEmails ] = useState(false)

    const getEmails = async () => {
        const response = await fetch('http://localhost:8080/emails')
        const emails = await response.json()
        setEmails(emails.data)
        countUnreadEmails(emails.data) 
    }

    const countUnreadEmails = (emails) => {
        const unreadEmails = emails.filter(email => email.read==0)
        setInboxCount(unreadEmails.length)
    }

    useEffect(() => {
        getEmails()
    }, [])

    useEffect(() => {
        getEmails()
    }, [refreshEmails])
    
    return (
        <>
            {emails && <EmailList emailId={emailId} emails={emails} setEmailId={setEmailId}/>}
        </>
    )
}

export default Inbox

