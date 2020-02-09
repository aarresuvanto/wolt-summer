import React, { useState } from 'react'
import RestaurantTile from './RestaurantTile'
import Sort from './Sort'

const Search = ({ restaurants }) => {
    const [ searchTerm, setSearchTerm ] = useState('')

    const inputStyle = {
        marginTop: 50,
        width: 270,
        height: 30,
        border: "1px solid lightGrey",
        borderRadius: 4,
        outline: "none",
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
        console.log(event.target.value)
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <Sort filteredRestaurants={filteredRestaurants} pTagStyle={pTagStyle} inputStyle={inputStyle} handleSearchTermChange={handleSearchTermChange} restaurantsBySearchTerm={restaurantsBySearchTerm} restaurants={restaurants} h3Style={h3Style}/>
        </div>
    )
}

export default Search
