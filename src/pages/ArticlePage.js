// import React from "react";
import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";

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
    return <h2>Data Api Tidak Ada</h2>;
  }

  return (
    <>
      <div>
        {artikels.map((artikel) => (
          <ArticleList key={artikel.id} {...artikel} />
        ))}
      </div>
    </>
  );
};

export default ArticlePage;
