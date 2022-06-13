import React from 'react';
// import './styles/Home.css';
import Header from '../components/Header.jsx';
import Menu from '../components/home/menu/Menu.jsx';
import Main from '../components/home/main/Main.jsx';
import Footer from '../components/Footer.jsx'


function Home() {
  return (
    <div className="Home">
      <Header/>
      <Menu/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default Home;
