import { useEffect, useState } from "react"

const OpenEmail = () => {
    const [emails, setEmails ] = useState(false)
    const getEmails =  async () => {
        let response = await fetch('http://localhost:8080/emails')
        let emails = await response.json()
        setEmails(emails.data)
    }

    useEffect(() => {
        getEmails()
    }, [])
    
    return (
        <ul>
            {emails ? emails.map(email => {
            return <li key={email.id}>{email.id}</li>
            }) : 'loading...'}
        </ul>
    ) 
}

export default OpenEmail