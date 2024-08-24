import React, { useState } from 'react';
import "./Home.css"
import Header from '../../components/Header/Header';
import ExporeMenu from '../../components/ExporeMenu/ExporeMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDowload from '../../components/AppDowload/AppDowload';


function Home(props) {
  const [ category , SetCategory] = useState("All")

    return (
        <div>
          <Header/>
          <ExporeMenu category={category} setCategory={SetCategory}/>
          <FoodDisplay category={category}/>
          <AppDowload />
        </div>
    );
}

export default Home;