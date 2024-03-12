import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Form from './components/Form/Form'
function App() {

  return <div>
    <Navigation/>
    <ContactHeader/>
    <Form/>
  </div>
    
}

export default App
