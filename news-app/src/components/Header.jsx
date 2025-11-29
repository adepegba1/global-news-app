function Header() {
  const now = new Date();
  return (
    <>
      <p className="font-bold bg-white text-blue-600">{now.toLocaleString()}</p>
      <header className="flex items-center justify-around bg-gray-400">
        <img
          className="w-20 h-20"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/news-agency-logo-design-template-fef757c514365e1ead01282f28400ac4.webp?ts=1737445704"
          alt="Logo Image"
        />
        <h1 className="font-bold text-6xl text-blue-200 family-arial">
          GLOBAL NEW
        </h1>
        <div className="flex gap-2">
          <input
            className="border rounded p-2 bg-white"
            type="text"
            name="search"
            id="search"
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
