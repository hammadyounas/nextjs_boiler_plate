import React, { useEffect } from 'react';
import useHomeLogic from '../Functional/useHomeLogic';
import HomeUI from '../UI/HomeUI';

const HomePage: React.FC = () => {
    const {data} = useHomeLogic();

  return (
    <div>
      <h1>Home Page with Combined Logic</h1>
      <HomeUI data={data}/>
    
    </div>
  );
};

export default HomePage;
