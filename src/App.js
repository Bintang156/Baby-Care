import React from "react";
import { Route, Routes } from "react-router-dom";
import BabyCheck from "./pages/BabyCheck";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";

import HeaderApp from "./components/HeaderApp";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/remainder" />
          <Route path="/babycheck" element={<BabyCheck />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
