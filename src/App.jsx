import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import { useEffect, useState } from 'react'


function App() {
  const [inboxCount, setInboxCount] = useState(0)

  return (
    <div className="row h-100 g-0">
      <Header inboxCounter={inboxCount}/>
      <Inbox setInboxCount={setInboxCount}/>
      <OpenEmail/>
    </div>
  )
  }
  
export default App
