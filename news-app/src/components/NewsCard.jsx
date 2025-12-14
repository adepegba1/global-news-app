import React, { useState, useEffect } from "react";
import { fetchNewsData } from "../services/newsServices";
import Header from "./Header";
import Footer from "./Footer";
import ArticleDetails from "./ArticleDetails";

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

  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");

  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    handleFetch({ country, date });
  }, []);

  const handleFetch = async ({ country, date }) => {
    setLoading(true);
    setError(null);
    const language = countryToLanguage[country] || "en";

    try {
      const data = await fetchNewsData({ country, language, date });
      setArticles(data);
    } catch (err) {
      setError(err);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFetch({ country, date });
  };

  const openArticleDetails = (article) => {
    setSelectedArticle(article);
  };

  const closeArticleDetails = () => {
    setSelectedArticle(null);
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-wrap items-end gap-4 border-b"
      >
        {/* Country Select */}
        <div>
          <label htmlFor="country" className="font-bold block mb-1">
            Select Country:
          </label>
          <select
            name="country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="border p-2 rounded w-40"
          >
            <option value="cn">China</option>
            <option value="de">Germany</option>
            <option value="in">India</option>
            <option value="es">Spain</option>
            <option value="fr">France</option>
            <option value="us">United States</option>
            <option value="gb">United Kingdom</option>
            <option value="ng">Nigeria</option>
            <option value="gh">Ghana</option>
            <option value="ma">Morocco</option>
          </select>
        </div>

        {/* Date Input */}
        <div>
          <label htmlFor="date" className="font-bold block mb-1">
            Published After Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            // Use YYYY-MM-DD format for the API
            onChange={(e) => setDate(e.target.value)}
            className="border p-2 rounded w-40"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition disabled:bg-gray-400"
        >
          {loading ? "Loading..." : "Get News"}
        </button>
      </form>
      {/* --- End Search Form --- */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {loading && (
          <p className="col-span-3 text-center text-lg">Loading articles...</p>
        )}

        {error && (
          <p className="col-span-3 text-center text-red-500">
            Error loading articles: {error.message}. Please check your API key.
          </p>
        )}

        {/* Display articles */}
        {articles?.top_news?.flatMap((section) =>
          section.news?.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow"
              onClick={() => openArticleDetails(item)}
            >
              {item.image && (
                <img
                  className="w-full h-48 object-cover mb-4 rounded"
                  src={item.image}
                  alt={item.title}
                />
              )}
              <h2 className="text-lg font-semibold mt-2 mb-2">{item.title}</h2>
              {item.summary && (
                <p className="text-gray-600 text-sm mb-2">
                  {item.summary.slice(0, 150)}...
                </p>
              )}
              <div className="text-xs text-gray-500 mt-auto">
                {item.publish_date && <p>Date: {item.publish_date}</p>}
                {item.author && <p>Author: {item.author}</p>}
                {item.category && <input type="button" value={item.category} />}
              </div>
            </div>
          ))
        )}

        {/* No Results Message */}
        {!loading && !error && articles?.top_news?.length === 0 && (
          <p className="col-span-3 text-center text-lg text-gray-500">
            No articles found for the selected country and date range.
          </p>
        )}
      </div>
      <ArticleDetails article={selectedArticle} onClose={closeArticleDetails} />
      <Footer />
    </>
  );
}

export default NewsCard;
