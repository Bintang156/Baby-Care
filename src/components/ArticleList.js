import React from "react";

function ArticleList({ title, img, desc }) {
  return (
    <>
      <h2>{title}</h2>
      <img src={img} alt="gagal"></img>
      <p>{desc}</p>
    </>
  );
}

export default ArticleList;
