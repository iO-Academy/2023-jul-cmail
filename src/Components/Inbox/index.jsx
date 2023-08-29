import { useState } from "react"
import EmailList from "../EmailItem"
import { useEffect } from "react"

const Inbox = ({setInboxCount}) => {
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
        <ul>
            {emails ? emails.map(email => {
            return <li key={email.name}>{email.name}</li>
            }) : 'loading...'}
        </ul>
    )
}

export default Inbox