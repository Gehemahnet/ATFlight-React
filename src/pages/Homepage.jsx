import React from 'react';
import Menu from '../components/home/menu/Menu.jsx';
import Main from '../components/home/main/Main.jsx';


const Homepage = ( {setVisible} ) => {
  return (
    <div className="Home">
      <Menu/>
      <Main
        setVisible={setVisible}
      />
    </div>
  );
}

export default Homepage;
