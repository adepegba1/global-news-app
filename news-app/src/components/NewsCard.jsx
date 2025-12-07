import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function NewsCard() {
  const countryToLanguage = {
    cn: "zh",
    de: "de",
    in: "hi",
    es: "es",
    fr: "fr",
    us: "en",
    gb: "en",
    ng: "en",
    gh: "en",
    ma: "ar",
  };
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState("ng");
  const language = countryToLanguage[country];
  const api_key = "9ed7c81bb6b14831928db989a48332e0";
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const url = `https://api.worldnewsapi.com/top-news?api-key=${api_key}&language=${language}&source-country=${country}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return (
    <>
      <Header></Header>
      <label htmlFor="country">Select a Country:</label>
      <select
        name="country"
        id="country"
        value={country}
        onChange={handleCountryChange}
        className="border-2 ml-2"
      >
        <option value="cn">China</option>
        <option value="de">Germany</option>
        <option value="in">India</option>
        <option value="es">Spain</option>
        <option value="fr">France</option>
        <option value="us">United State</option>
        <option value="gb">United Kingdom</option>
        <option value="ng">Nigeria</option>
        <option value="gh">Ghana</option>
        <option value="ma">Morocco</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {loading && <p>Loading articles...</p>}
        {error && <p>Error loading articles: {error.message}</p>}
        {articles?.top_news?.flatMap((section) =>
          section.news?.map((item) => (
            <div key={item.id}>
              {item.image && (
                <img
                  className="center-block mx-auto"
                  src={item.image}
                  alt={item.title}
                />
              )}
              <h2 className="text-lg font-semibold mt-2 mb-2">{item.title}</h2>
              {item.summary && <p className="text-blue-500">{item.summary}</p>}
              {item.publish_date && <p>Publish Date: {item.publish_date}</p>}
              {item.author && <p>Author: {item.author}</p>}
              {item.category && <p>Category: {item.category.toUpperCase()}</p>}
            </div>
          ))
        )}
      </div>
      <Footer></Footer>
    </>
  );
}

export default NewsCard;
