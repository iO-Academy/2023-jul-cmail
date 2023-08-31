import { useState, useEffect } from "react"
import EmailList from "../EmailList"
import SearchBar from "../SearchBar"

const Inbox = ({setInboxCount, setEmailId, emailId, refreshEmails}) => {
    const [emails, setEmails ] = useState(false)
    const [searchData, setSearchData] = useState(undefined)


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

    const getSearchData = async () => {
        const response = await fetch(`http://localhost:8080/emails?search=${searchData}`)
        const emailData = await response.json()
        setEmails(emailData.data)
    }

    useEffect(() => {
        getEmails()
    }, [])

    useEffect(() => {
        getEmails()
    }, [refreshEmails])

    useEffect(() => {
        if (searchData == undefined) {
            getEmails()
        } else {
            getSearchData()
        }
    }, [searchData])
    
    return (
        <div className="col-12 col-md-4 col-lg-3 border-end">
            <SearchBar handleInput={setSearchData}/>
            <div>
                {emails && <EmailList emailId={emailId} emails={emails} setEmailId={setEmailId}/>}
            </div>
        </div>
    )
}

export default Inbox

