import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './componet/NavBar/NavBar';
import Footer from './componet/Footer/Footer';
import PageTitle from './componet/Main/PageTitle';
import Blog from './componet/Main/Blog';
import GoToTop from './componet/GoToTop';


function App() {
  return (
   <>
      <div className='NavBG pt-3'>
        <NavBar/>
        <PageTitle/>
      </div>
      <div className='main-section'>
        <Blog/>
      </div>
        <Footer/>
        <GoToTop /> 
   </>
  )
}

export default App