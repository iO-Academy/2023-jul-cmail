import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import {useState } from 'react'


function App() {

const [emailId, setEmailId] = useState(false)

  return (
    <div className="row h-100 g-0">
      <Header/>
      <Inbox setEmailId={setEmailId}/>
      <OpenEmail emailId={emailId}/>
    </div>
  )
}

  
  
  
export default App
