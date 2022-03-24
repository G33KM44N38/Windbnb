import React, {useState} from 'react'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './App.css'

function App() {

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div id='App'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App