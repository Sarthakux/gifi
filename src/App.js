import React, { useState } from "react";

const api = {
  api_key : "LszGQWwqVymgIPxO5pSw04ZvPkkiW7pU",
  base : "https://api.giphycom/v1/gifs/search"
};

  


function App() {
  const [query, setQuery] = useState("");
  const [gif, setGif] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
fetch(`${api.base}gif?=${query}&api_key=${api.api_key}`)
        .then((res) => res.json())
        .then((result) => {
          setGif(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for gifs"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div>
          {gif.title}
        </div>
      </main>
    </div>
  );
}

export default App;
