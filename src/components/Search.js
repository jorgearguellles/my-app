import React from 'react'
import "./styles/Search.css";
import img from "../assets/icons/lupa.png"

const Search = () => {
  return (
    <div className='container' >
      <input placeholder='What to do'/>
      <img src={img} alt='lupa icon'/>
    </div>
  )
}

export default Search;
