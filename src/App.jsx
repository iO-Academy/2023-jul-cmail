
import { useState } from 'react'
import EmailList from './Components/EmailList'
import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'


function App() {
  return (
    <>
      <Header/>
      <EmailList/>
      <OpenEmail/>
      <Inbox/>
    </>
  )
}

export default App
