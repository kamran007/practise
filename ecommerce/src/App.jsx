
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import FetchItems from './components/FetchItems'
import { useSelector } from 'react-redux'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const {currentlyFetching} = useSelector(store=> store.fetchStatus);
  return (
    <>
    <Header/>
    <FetchItems/>
    {
      currentlyFetching? <LoadingSpinner/>: <Outlet/>
    }
    <Footer/>
    </>
  )
}

export default App
