import React, { useState } from 'react'
import RestaurantTile from './RestaurantTile'
import Sort from './Sort'

const Search = ({ restaurants }) => {
    const [ searchTerm, setSearchTerm ] = useState('')

    const inputStyle = {
        width: 270,
        height: 25,
        border: "1px solid lightGrey",
        borderRadius: 4,
    }

    const pTagStyle = {
        paddingTop: 50,
        fontSize: 16,
    }

    const h3Style = {
        textAlign: "center",
        marginTop: 200,
    }

    const filteredRestaurants = restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    const restaurantsBySearchTerm = filteredRestaurants.map((restaurant, index) =>  {
        return (
            <RestaurantTile key={index} image={restaurant.image} description={restaurant.description} name={restaurant.name}/>
        )
    })

    const handleSearchTermChange = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    if(filteredRestaurants.length === 0) {
        return (
            <div>
                <p style={pTagStyle}>Search for restaurants by name</p>
                <input type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
                <h3 style={h3Style}>No restaurants to show with this search term</h3>
            </div>
        )
    }


    return (
        <div>
            <p style={pTagStyle}>Search for restaurants by name</p>
            <input type="text" style={inputStyle} onChange={handleSearchTermChange}></input>
            <Sort filteredRestaurants={filteredRestaurants}/>
            {restaurantsBySearchTerm}
        </div>
    )
}

export default Search
