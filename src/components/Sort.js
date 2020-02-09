import React, { useState } from 'react'
import RestaurantTile from './RestaurantTile'

const Sort = ({ filteredRestaurants, pTagStyle, inputStyle, handleSearchTermChange, restaurantsBySearchTerm, h3Style}) => {
    const [ sortedRestaurants, setSortedRestaurants ] = useState([])
    const [ asc, setAsc ] = useState(true)
    const [ desc, setDesc ] = useState(false)
    
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
    }

    const sortRestaurantsAlphabeticallyDESC = () => {
        setSortedRestaurants(filteredRestaurants.sort((restaurantA, restaurantB) => {
            restaurantA = restaurantA.name.toLowerCase()
            restaurantB = restaurantB.name.toLowerCase()
            if(restaurantA > restaurantB) {
                return -1
            }
            if(restaurantB > restaurantA) {
                return 1
            }
            return 0
        }))
        setDesc(false)
        setAsc(true)
    }

    const sortRestaurantsAlphabeticallyASC = () => {
        setSortedRestaurants(filteredRestaurants.sort((restaurantA, restaurantB) => {
            restaurantA = restaurantA.name.toLowerCase()
            restaurantB = restaurantB.name.toLowerCase()
            if(restaurantA < restaurantB) {
                return -1
            }
            if(restaurantB < restaurantA) {
                return 1
            }
            return 0
        }))
        setAsc(false)
        setDesc(true)
    }

    const sorted = filteredRestaurants.sort((restaurantA, restaurantB) => {
        if(restaurantA > restaurantB) {
            return -1
        }
        if(restaurantB > restaurantA) {
            return 1
        }
        return 0
    })

    const sortedRestaurantsToShow = sorted.map((restaurant, index) => {
        return (
            <RestaurantTile key={index} image={restaurant.image} description={restaurant.description} name={restaurant.name}/>
        )
    })

    const sortedDESC = sorted.reverse()

    if(asc) {
        return (
            <div>
                <input placeholder="Search for restaurants by name" autoComplete="off" type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
                <p style={orStyle}>Or</p>
                <button style={buttonStyleTop} onClick={sortRestaurantsAlphabeticallyASC}>Sort ascending</button>
                <button onClick={sortRestaurantsAlphabeticallyDESC} style={buttonStyleBottom}>Sort descending</button>
                {sortedRestaurantsToShow}
        </div>
        )
    }



    if(sorted.length === 0) {
        return (
            <div>
                <input placeholder="Search for restaurants by name" autoComplete="off" type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
                <h3 style={h3Style}>No restaurants to show with this search term</h3>
            </div>
        )
    }


    return (
        <div>
            <input placeholder="Search for restaurants by name" autoComplete="off" type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
            <p style={orStyle}>Or sort</p>
            <button style={buttonStyleTop} onClick={sortRestaurantsAlphabeticallyASC}>Sort ascending</button>
            <button onClick={sortRestaurantsAlphabeticallyDESC} style={buttonStyleBottom}>Sort descending</button>
            {sortedRestaurantsToShow}
        </div>
    )

  
}

export default Sort
