// import React from "react";
import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import  Footer from "../components/Footer";

const ArticlePage = () => {
  const [artikels, setArtikels] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://63858eb1875ca3273d3f4258.mockapi.io/babycare/v1/baby"
    );

    const data = await response.json();

    setArtikels(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (artikels.length === 0) {
    return <center><h2 className="load">Loading...</h2></center>;
  }

  return (
    <>
        <div className="title_page_article">
          <h1>Daftar Artikel Baby Check</h1>
          <p>Temukan Artikel terupdate setiap harinya sesuai dengan 
            kebutuhan kesehatan bayi anda</p>
        </div>
        <div className="article-list">
        {artikels.map((artikel) => (
          <ArticleList key={artikel.id} {...artikel} />
        ))}
        </div>
        <Footer />
    </>
  );
};

export default ArticlePage;
