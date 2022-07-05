import React,{ useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Homepage from './pages/Homepage.jsx'
import Blogpage from './pages/Blogpage.jsx';


const App = () => {

  const [loginPopupVisible, setLoginPopupVisible] = useState(false)
  useEffect(()=>{
    if (loginPopupVisible == true){
      document.body.classList.add('_using-popup')
      document.querySelector(".user-popup").classList.add('_active')
    } else{
      document.body.classList.remove('_using-popup')
      document.querySelector(".user-popup").classList.remove('_active')
    }
  },[loginPopupVisible])

  return (
    <div className="App">
      <Header
        visible={loginPopupVisible}
        setVisible={setLoginPopupVisible}/>
      <Routes>
        <Route 
          path='/' 
          element={
            <Homepage
              setVisible={setLoginPopupVisible}
            />
          }
        />
        <Route path='/blog' element={<Blogpage/>}/>
        <Route path='/adds'/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
