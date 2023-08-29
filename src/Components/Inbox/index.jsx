import { useState } from "react"
import EmailList from "../EmailList"
import { useEffect } from "react"

const Inbox = () => {
    const [emails, setEmails] = useState(false)
    async function getEmails() {
        let response = await fetch('http://localhost:8080/emails')
        let emailsData = await response.json()
        setEmails(emailsData.data)   
    }

    useEffect(() => {
        getEmails()
    }, [])
    
    return (
        <>
            {emails && <EmailList emails={emails}/>}
        </>
    )
}

export default Inbox

