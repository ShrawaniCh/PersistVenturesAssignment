
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NewsListing from './pages/NewsListing/NewsListing'
import NewsDetails from './pages/NewsDetails/NewsDetails'

function App() {
  

  return (
   
      <Routes>
        <Route path='/' element={<NewsListing/>}/>
        <Route path='/news-details/:news_id' element={<NewsDetails/>}/>



      </Routes>
   
  )
}

export default App
