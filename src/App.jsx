import { useState } from 'react'
import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import SentBox from './Components/SentBox'
import Alert from './Components/Alert'
import NewEmail from './Components/NewEmail'

function App() {
    const [inboxCount, setInboxCount] = useState(0)
    const [emailId, setEmailId] = useState(false)
    const [refreshEmails, setRefreshEmails] = useState(false)
    const [emailListToDisplay, setEmailListToDisplay] = useState('inbox')
    const [newEmail, setNewEmail] = useState(false)
    const [sentSuccess, setSentSuccess] = useState(undefined)

    const closeEmail = () => {
        setEmailId(false)
    }

    const openNewEmail = () => {
        setNewEmail(true)
    }

    const closeNewEmail = () => {
        setNewEmail(false)
    }
    
    return (
        <div className="row h-100 g-0">
            {sentSuccess !== undefined && <Alert success={sentSuccess} hideAlert={setSentSuccess} text={sentSuccess ? "Email sent successfully" : "Sending email is unsuccessful"}/>}
            {newEmail && <NewEmail closeNewEmail={closeNewEmail} setSentSuccess={setSentSuccess}/>}
            <Header inboxCounter={inboxCount} setEmailListToDisplay={setEmailListToDisplay} emailListToDisplay={emailListToDisplay} setNewEmail={setNewEmail} openNewEmail={openNewEmail} />
            {emailListToDisplay == 'inbox' && <Inbox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId} refreshEmails={refreshEmails}/>}
            {emailListToDisplay == 'sent' && <SentBox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId} refreshEmails={refreshEmails}/>}
            {emailId && <OpenEmail emailId={emailId} setRefreshEmails={setRefreshEmails} closeEmail={closeEmail}/>}
        </div>
    )
}

export default App