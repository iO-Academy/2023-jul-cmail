import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import {useState } from 'react'
import SentBox from './Components/SentBox'

function App() {
  const [inboxCount, setInboxCount] = useState(0)
  const [emailId, setEmailId] = useState(false)
  const [refreshEmails, setRefreshEmails] = useState(false)
  const [emailListToDisplay, setEmailListToDisplay] = useState('inbox')

  const closeEmail = () => {
    setEmailId(false)
  }
  
  return (
    <div className="row h-100 g-0">
      <Header inboxCounter={inboxCount} setEmailListToDisplay={setEmailListToDisplay} emailListToDisplay={emailListToDisplay}/>
      {emailListToDisplay == 'inbox' && <Inbox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId} refreshEmails={refreshEmails}/>}
      {emailListToDisplay == 'sent' && <SentBox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId} refreshEmails={refreshEmails}/>}
      {emailId && <OpenEmail emailId={emailId} setRefreshEmails={setRefreshEmails} closeEmail={closeEmail}/>}
    </div>
  )
}

export default App
