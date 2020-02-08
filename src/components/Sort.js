import React, { useState } from 'react'
import RestaurantTile from './RestaurantTile'

const Sort = ({ filteredRestaurants }) => {
    const [ sortedRestaurants, setSortedRestaurants ] = useState([])
    
    const orStyle = {
        fontSize: 14,
    }

    const buttonStyle = {
        width: 270,
        height: 50,
        borderRadius: 4,
        fontSize: 14,
        border: "0px",
        color: "white",
        backgroundColor: "#6fb4e2",
        boxShadow: "1px 1px 2px #e8e8e8",
    }

    const sortRestaurantsAlphabetically = () => {
        setSortedRestaurants(filteredRestaurants.sort((restaurantA, restaurantB) => {
            let textOne = restaurantA.name.toLowerCase()
            let textTwo = restaurantB.name.toLowerCase()
            return (textOne < textTwo) ? -1 : (textOne > textTwo) ? 1 : 0;
        }))
    }

    const sortedRestaurantsToShow = sortedRestaurants.map((restaurant, index) => {
        return (
            <RestaurantTile key={index} image={restaurant.image} description={restaurant.description} name={restaurant.name}/>
        )
    })

    return (
        <div>
            <p style={orStyle}>Or</p>
            <button onClick={sortRestaurantsAlphabetically} style={buttonStyle}>Sort alphabetically</button>
            {sortedRestaurantsToShow}
        </div>
    )
}

export default Sort
