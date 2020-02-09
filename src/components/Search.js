import React, { useState } from 'react'
import Sort from './Sort'

const Search = ({ restaurants }) => {
    const [ searchTerm, setSearchTerm ] = useState('')

    const inputStyle = {
        width: 270,
        height: 30,
        border: "1px solid lightGrey",
        borderRadius: 4,
        outline: "none",
    }

    const pTagStyle = {
        textAlign: "center",
        fontStyle: "font-family: nimbus-sans-extended, sans-serif",
        paddingTop: 50,
        fontSize: 16,
    }

    const h3Style = {
        textAlign: "center",
        fontStyle: "font-family: nimbus-sans-extended, sans-serif",
        fontWeight: 400,
        marginTop: 200,
    }

    const filteredRestaurants = restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    })

    const handleSearchTermChange = (event) => {
        event.preventDefault()
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <Sort filteredRestaurants={filteredRestaurants} pTagStyle={pTagStyle} inputStyle={inputStyle} handleSearchTermChange={handleSearchTermChange} h3Style={h3Style}/>
        </div>
    )
}

export default Search
