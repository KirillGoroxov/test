import './App.css'
import Contacts from './components/Contacts/Contacts'
import Description from './components/Descriprion/Description'
import Header from './components/Header/Header'
import Reviews from './components/Reviews/Reviews'
import Works from './components/Works/Works'
function App() {
  return (
    <>
      <div className='background'></div>
      <div className='App'>
        <Header />
        <Description />
        <Works />
        <Reviews />
        <Contacts />
      </div>
    </>
  )
}
export default App
