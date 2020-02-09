import React, { useState } from 'react'
import RestaurantTile from './RestaurantTile'

const Sort = ({ filteredRestaurants, pTagStyle, inputStyle, handleSearchTermChange, h3Style}) => {
    const [ load, setLoad ] = useState(true)
    
    const orStyle = {
        fontSize: 14,
    }

    const buttonStyleTop = {
        marginRight: "auto",
        marginLeft: "auto",
        width: 270,
        height: 50,
        borderRadius: 4,
        fontSize: 14,
        border: "0px",
        color: "white",
        backgroundColor: "#6fb4e2",
        boxShadow: "1px 1px 2px #e8e8e8",
        display: "block",
        fontStyle: "font-family: nimbus-sans-extended, sans-serif",
    }

    const buttonStyleBottom = {
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 25,
        width: 270,
        height: 50,
        borderRadius: 4,
        fontSize: 14,
        border: "0px",
        color: "white",
        backgroundColor: "#6fb4e2",
        boxShadow: "1px 1px 2px #e8e8e8",
        display: "block",
        fontStyle: "font-family: nimbus-sans-extended, sans-serif",
    }

    const sortRestaurantsAlphabeticallyASC = () => {
        filteredRestaurants.sort((restaurantA, restaurantB) => {
            restaurantA = restaurantA.name.toLowerCase()
            restaurantB = restaurantB.name.toLowerCase()
            if(restaurantA < restaurantB) {
                return -1
            }
            if(restaurantB < restaurantA) {
                return 1
            }
            return 0
        })
        setLoad(false)
    }

    const sortRestaurantsAlphabeticallyDESC = () => {
        filteredRestaurants.sort((restaurantA, restaurantB) => {
            restaurantA = restaurantA.name.toLowerCase()
            restaurantB = restaurantB.name.toLowerCase()
            if(restaurantA > restaurantB) {
                return -1
            }
            if(restaurantB > restaurantA) {
                return 1
            }
            return 0
        })
        setLoad(true)
    }

    const sortedRestaurantsToShow = filteredRestaurants.map((restaurant, index) => {
        return (
            <RestaurantTile key={index} image={restaurant.image} description={restaurant.description} name={restaurant.name}/>
        )
    })

    if(filteredRestaurants.length === 0) {
        return (
            <div>
                <input autoComplete="off" type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
                <h3 style={h3Style}>No restaurants to show with this search term</h3>
            </div>
        )
    }

    if(load) {
        return (
            <div>
                <input autoComplete="off" type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
                <p style={orStyle}>Or</p>
                <button style={buttonStyleTop} onClick={sortRestaurantsAlphabeticallyASC}>Sort ascending</button>
                <button onClick={sortRestaurantsAlphabeticallyDESC} style={buttonStyleBottom}>Sort descending</button>
                {sortedRestaurantsToShow}
        </div>
        )
    }

    return (
        <div>
            <input autoComplete="off" type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
            <p style={orStyle}>Or</p>
            <button style={buttonStyleTop} onClick={sortRestaurantsAlphabeticallyASC}>Sort ascending</button>
            <button onClick={sortRestaurantsAlphabeticallyDESC} style={buttonStyleBottom}>Sort descending</button>
            {sortedRestaurantsToShow}
        </div>
    )
}

export default Sort
