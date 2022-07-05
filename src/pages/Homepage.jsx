import { useState, useEffect } from 'react';
import Menu from '../components/home/menu/Menu.jsx';
import Main from '../components/home/main/Main.jsx';


const Homepage = ( {setVisible} ) => {
  const [homePageState, setHomePageState] = useState("Default")
  
  return (
    <div className="Home">
      <Menu
        setHomePageState={setHomePageState}
      />
      <Main
        homePageState={homePageState}
        setVisible={setVisible}
      />
    </div>
  );
}

export default Homepage;
