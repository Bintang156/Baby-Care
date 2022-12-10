// import React from "react";
import React, { useEffect, useState } from "react";
import ArticleList from "../components/SickList";
import  Footer from "../components/Footer";
import { useSearchParams} from "react-router-dom";
import SearchBar from "../components/SearchBar";



function BabyCheck() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [artikels, setArtikels] = useState([]);

const [keyword, setKeyword] = React.useState(() => {
  return searchParams.get("keyword") || "";
});

function onKeywordChangeHandler(keyword) {
  setKeyword(keyword);
  setSearchParams({ keyword });
}

const filteredart = artikels.filter((artikel) => {
  return artikel.title.toLowerCase().includes(keyword.toLowerCase());
});

  const fetchData = async () => {
    const response = await fetch(
      "https://6394a96c86829c49e8239360.mockapi.io/babycheck/v1/baby"
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
        <div className="title_page_article">
          <h1>Baby Check</h1>
          <p>Temukan Solusi dari penyakit Bayi anda</p>
        </div>
        <section>
          <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler}  />
          <br />
          <h2 className="title">Daftar</h2>
              </section>
        <div className="article-list">
        {artikels.map((artikel) => (
          <ArticleList key={artikel.id} {...artikel} notes={filteredart}/>
        ))}
        </div>
        <Footer />
    </>
  );
};

export default BabyCheck;
