import FormattedDate from "./FormattedDate";
import SearchBar from "./SearchBar";

function Header({ onSearch, country, date, loading }) {
  return (
    <>
      <FormattedDate />

      <header className="flex flex-col md:flex-row items-center justify-around bg-gray-400 p-4 gap-4">
        <img
          className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-full border-4 border-white"
          src="https://www.shutterstock.com/shutterstock/photos/2467118167/display_1500/stock-vector-latest-news-breaking-report-breaking-news-badge-template-set-latest-hot-news-label-message-2467118167.jpg"
          alt="Logo Image"
        />

        <h1 className=" family-arial font-bold text-3xl md:text-6xl text-blue-200">
          News Reader
        </h1>

        <div className="w-full md:w-auto">
          <SearchBar
            onSearch={onSearch}
            country={country}
            date={date}
            loading={loading}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
