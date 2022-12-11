// import React from "react";
import React, { useEffect, useState } from "react";
// import ArticleList from "../components/SickList";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ArtItem from "../components/artItem";

function BabyCheck() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [artikels, setArtikels] = useState([]);

  // const [keyword, setKeyword] = React.useState(() => {
  //   return searchParams.get("keyword") || "";
  // });

  const defaultKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(defaultKeyword || "");

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://6394a96c86829c49e8239360.mockapi.io/babycheck/v1/baby"
      );

      const data = await response.json();

      setArtikels(await data);
    };
    fetchData();
    // return () => {
    //   setArtikels("");
    // };
  }, []);
  const filteredart = artikels.filter((artikel) => {
    return artikel.title.toLowerCase().includes(keyword.toLowerCase());
  });

  // useEffect(() => {
  //   fetchData();
  // }, []);

  if (artikels.length === 0) {
    return (
      <center>
        <h2 className="load">Loading...</h2>
      </center>
    );
  }

  return (
    <>
      <div className="title_page_article">
        <h1>Baby Check</h1>
        <p>Temukan Solusi dari penyakit Bayi anda</p>
      </div>
      <section>
        <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
        <br />
        <h2 className="title">Daftar</h2>
      </section>
      <div className="article-list">
        {/* {artikels.map((artikel) => (
          <ArticleList key={artikel.id} {...artikel} notes={filteredart} />
        ))} */}
        <ArtItem artic={filteredart} />
      </div>
      <Footer />
    </>
  );
}

export default BabyCheck;
