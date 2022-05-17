// import './styles/Home.css';
import Header from '../components/Header.jsx';
import Menu from '../components/index/menu/Menu.jsx';
import Main from '../components/index/main/Main.jsx';
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
