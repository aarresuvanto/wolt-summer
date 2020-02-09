import React from 'react'

const Headline = () => {
    const headlineStyle = {
        marginTop: 50,
        marginBottom: 50,
        fontStyle: "font-family: nimbus-sans-extended, sans-serif",
        fontWeight: 600,
    }

    return (
        <div>
            <h2 style={headlineStyle}>Restaurant Search</h2>
        </div>
    )
}

export default Headline
