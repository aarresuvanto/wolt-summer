import React from 'react'

const RestaurantTile = ({ restaurants }) => {
    const tileStyle = {
        width: 270,
        marginTop: 25,
        marginLeft: "auto",
        marginRight: "auto",
        border: "0.35mm solid",
        borderRadius: 10,
        borderColor: "#e8e8e8",
        boxShadow: "1px 1px 2px #e8e8e8"
    }

    const imageStyle = {
        width: 270,
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
        fontSize: 16,
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
