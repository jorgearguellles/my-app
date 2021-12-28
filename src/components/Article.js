import React from 'react'
import "./styles/Article.css";
import arcitleIMG from '../assets/icons/article.png';

const Article = (props) => {
  return (
    <div className='article-container'>
      <div className='article-border'>
        <div className='article-title'>
          <img src={arcitleIMG} alt="article img"/>
          <h2>{props.title}</h2>
        </div>
        <p>{props.details}</p>
      </div>
    </div>
  )
}

export default Article;
