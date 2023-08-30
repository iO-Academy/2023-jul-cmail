import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import {useState } from 'react'


function App() {
  const [inboxCount, setInboxCount] = useState(0)
  const [emailId, setEmailId] = useState(false)

  return (
    <div className="row h-100 g-0">
      <Header inboxCounter={inboxCount}/>
      <Inbox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId}/>
      {emailId && <OpenEmail emailId={emailId}/>}
    </div>
  )
}

export default App
