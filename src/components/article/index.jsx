import React from "react";
import "./styles.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3__article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
