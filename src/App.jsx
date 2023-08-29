
import Header from './Components/Header'
import Inbox from './Components/Inbox'
import { useEffect, useState } from 'react'

function App() {
  const [inboxCount, setInboxCount] = useState(0)

  return (
    <>
     <Inbox setInboxCount={setInboxCount}  />
     <Header inboxCounter={inboxCount}/>
    </>
  )
  }
  
export default App
