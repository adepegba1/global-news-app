import { useState } from "react";

function SearchBar({ onSearch, country, date, loading }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!country || !date) {
      alert("Please select a country and date first!");
      return;
    }
    onSearch({ country, date, text });
    setText("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 w-full"
      >
        <input
          className="border rounded p-2 bg-white flex-grow"
          type="text"
          name="search"
          id="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for news"
        />
        <button
          type="submit"
          className=" w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </>
  );
}

export default SearchBar;
