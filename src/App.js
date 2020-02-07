import React, { useState } from 'react';
import './App.css';

const restaurantData = require('./restaurants.json')

function App() {
  const [ restaurants, setRestaurants ] = useState(restaurantData.restaurants)

  console.log(restaurants)

  const restaurantNamesListed = restaurants.map((restaurant, index) => {
    return (
          <li key={index}>{restaurant.name}</li>
    )
  })

  return (
    <div className="App">
      <ul>
        {restaurantNamesListed}
      </ul>
    </div>
  );
}

export default App;
