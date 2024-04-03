import React from 'react'
import {FaSearch} from "react-icons/fa"
import { useState } from "react";

const SearchBar = () => {
    const [input, setInput] = useState("")
  return (
    <div className="input-wrapper">
        <input type="text" placeholder='Search...' value={input} onChange={(e) => setInput(e.target.value)}/>
        <FaSearch id="search-icon"/>
    </div>
  )
}

export default SearchBar