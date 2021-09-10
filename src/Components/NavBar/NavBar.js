import React from 'react'
import Rate from '../Rate'
import "./NavBar.css"

const NavBar = ({ setSearchInput, setSearchRate, searchRate }) => {
    return (

        <div className="search-container">
            <input
                type="text"
                placeholder="Type movie name to search"
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <Rate rating={searchRate} setSearchRate={setSearchRate} />
        </div>

    )
}

export default NavBar
