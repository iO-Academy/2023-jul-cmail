import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import { useState } from 'react'



function App() {
  const [inboxCount, setInboxCount] = useState(0)
  const [emailId, setEmailId] = useState(false)
  const [refreshEmails, setRefreshEmails] = useState(false)

  const closeEmail = () => {
    setEmailId(false)
  }

  return (
    <div className="row h-100 g-0">
      <Header inboxCounter={inboxCount}/>
      <Inbox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId} refreshEmails={refreshEmails}/>
      {emailId && <OpenEmail emailId={emailId} setRefreshEmails={setRefreshEmails} closeEmail={closeEmail}/>}
    </div>
  )
}

export default App
