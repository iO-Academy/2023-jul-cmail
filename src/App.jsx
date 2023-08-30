import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import {useState } from 'react'
import SentBox from './Components/SentBox'



function App() {
  const [inboxCount, setInboxCount] = useState(0)
  const [emailId, setEmailId] = useState(false)
  const [emailListToDisplay, setEmailListToDisplay] = useState('inbox')
  return (
    <div className="row h-100 g-0">
      <Header inboxCounter={inboxCount} setEmailListToDisplay={setEmailListToDisplay}/>
      {emailListToDisplay == 'inbox' && <Inbox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId}/>}
      {emailListToDisplay == 'sent' && <SentBox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId}/>}
      {emailId && <OpenEmail emailId={emailId}/>}
    </div>
  )
}

export default App
