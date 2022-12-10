import React from "react";

function ArticleList({ title, img, desc }) {
  return (
    <>
      <div className="article-item">
        <img className="image-article" src={img} alt={title}></img>
          <div className="article-info">
            <h2 className="title-article">{title}</h2>
            <p className="desc-article">{desc}</p>
          </div>
      </div>
    </>
  );
}

export default ArticleList;
