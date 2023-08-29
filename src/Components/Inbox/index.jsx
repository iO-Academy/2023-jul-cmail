import { useState } from "react"
import EmailList from "../EmailItem"
import { useEffect } from "react"

const Inbox = () => {
    const [emails, setEmails ] = useState(false)
    async function getEmails() {
        let response = await fetch('http://localhost:8080/emails')
        let emails = await response.json()
        setEmails(emails)   
    }

    useEffect(() => {
        getEmails()
    }, [])
    
    return (
        <ul>
            {emails ? emails.data.map(email => {
            return <li key={email.name}>{email.name}</li>
            }) : 'loading...'}
        </ul>
    )
}

export default Inbox