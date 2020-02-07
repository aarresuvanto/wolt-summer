import React from 'react'

const RestaurantTile = ({ restaurants }) => {
    const tileStyle = {
        width: 350,
        marginTop: 25,
        marginLeft: "auto",
        marginRight: "auto",
        border: "0.15mm solid",
        borderRadius: 10,
        borderColor: "lightGrey",
    }

    const imageStyle = {
        width: 350,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
    }

    const descriptionStyle = {
        textAlign: "left",
        marginLeft: 25,
        color: "grey",
        fontSize: 12,
        marginBottom: 0,
    }

    const nameStyle = {
        textAlign: "left",
        marginLeft: 25,
        marginTop: 8,
        fontSize: 22,
    }

    const socialBurgerjoint = restaurants[0]

    return (
        <div style={tileStyle}>
            <img style={imageStyle} src={socialBurgerjoint.image} alt="juicyImage"/>
            <p style={descriptionStyle}>{socialBurgerjoint.description}</p>
            <p style={nameStyle}>{socialBurgerjoint.name}</p>
        </div>
    )
}

export default RestaurantTile
