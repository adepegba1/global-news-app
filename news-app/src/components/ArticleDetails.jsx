import NewsCard from "./NewsCard";

function ArticleDetails({ article, onClose }) {
  if (!article) {
    return null;
  }

  const content =
    article.text ||
    article.summary ||
    "Full article not available from the API";

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl m-8 md:mx-auto md:mx-auto md:my-10 p-6 max-w-4xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-700 hover:text-red-900 text-3xl font-bold"
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold mb-4 border-b pb-2">
          {article.title}
        </h1>

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto max-h-96 object-cover rounded-lg mb-4 "
          />
        )}

        <div className="text-sm text-gray-500 mb-4 flex justify-between">
          <p>
            <b>Sources:</b>
            <span className="font-semibold">{article.source_country}</span>
          </p>

          {article.publish_date && (
            <p>
              <b>Published:</b>{" "}
              <span className="font-semibold">{article.publish_date}</span>
            </p>
          )}
        </div>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6">
          {content}
        </p>

        {article.url && (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Read Full Article on Source Website
          </a>
        )}
      </div>
    </div>
  );
}
export default ArticleDetails;
