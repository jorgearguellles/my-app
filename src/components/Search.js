import React from 'react'
import "./styles/Search.css";
import img from "../assets/icons/lupa.png"

const Search = (props) => {
  return (
    <div className='container' >
      <input placeholder={props.placeholder}/>
      <img src={img} alt='lupa icon'/>
    </div>
  )
}

export default Search;
