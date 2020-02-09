import './App.css';
import React, { useState } from 'react';
import Search from './components/Search'
import Footer from './components/Footer'
import Headline from './components/Headline'

const restaurantData = require('./restaurants.json')

function App() {
  const [ restaurants] = useState(restaurantData.restaurants)

  return (
    <div className="App">
      <Headline /> 
      <Search restaurants={restaurants}/>
      <Footer />
    </div>
  );
}

export default App;
