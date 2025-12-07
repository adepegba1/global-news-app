import FormattedDate from "./FormattedDate";
function Header() {
  return (
    <>
      <FormattedDate />
      <header className="flex items-center justify-around bg-gray-400">
        <img
          className="w-20 h-20"
          src="https://www.shutterstock.com/shutterstock/photos/2467118167/display_1500/stock-vector-latest-news-breaking-report-breaking-news-badge-template-set-latest-hot-news-label-message-2467118167.jpg"
          alt="Logo Image"
        />
        <h1 className="font-bold text-6xl text-blue-200 family-arial">
          Top News
        </h1>
        <div className="flex gap-2">
          <input
            className="border rounded p-2 bg-white"
            type="text"
            name="search"
            id="search"
            placeholder="Search for news"
          />
          <input
            type="submit"
            value="Search"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
