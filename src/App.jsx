import EmailList from './Components/EmailList'
import Header from './Components/Header'
import Inbox from './Components/Inbox'
import { useEffect, useState } from 'react'


function App() {
  const [inboxCount, setInboxCount] = useState(0)

  return (
    <>
    <Header inboxCounter={inboxCount}/>
    <EmailList/>
    <Inbox setInboxCount={setInboxCount}  />
    </>
  )
  }
  
export default App
