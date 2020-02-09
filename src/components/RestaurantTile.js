import React from 'react'

const RestaurantTile = ({ image, description, name }) => {
    const tileStyle = {
        width: 270,
        overflow: "hidden",
        marginTop: 25,
        marginLeft: "auto",
        marginRight: "auto",
        border: "0.35mm solid",
        borderRadius: 10,
        borderColor: "#e8e8e8",
        boxShadow: "1px 1px 2px #e8e8e8"
    }

    const imageStyle = {
        width: "auto",
        height: 200,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 7,
    }

    const descriptionStyle = {
        fontStyle: "font-family: nimbus-sans-extended, sans-serif",
        textAlign: "left",
        marginLeft: 15,
        color: "grey",
        fontSize: 12,
        marginBottom: 0,
    }

    const nameStyle = {
        fontStyle: "font-family: nimbus-sans-extended, sans-serif",
        textAlign: "left",
        marginLeft: 15,
        marginTop: 8,
        fontSize: 15,
    }

    return (
        <div style={tileStyle}>
            <img style={imageStyle} src={image} alt="juicyImage"/>
            <p style={descriptionStyle}>{description}</p>
            <p style={nameStyle}>{name}</p>
        </div>
    )
}

export default RestaurantTile
