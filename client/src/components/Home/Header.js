import React ,{useState} from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
import "./Header.css";
function Header() {
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Implement the search logic here, such as filtering and displaying search results.
    // For simplicity, let's just log the search query for now.
    console.log("Search Query:", e.target.value);
  };
  return (
    <header className="header">
      <div className="header-left">
      <div className='searchBar'>
          <input
            type='text'
            placeholder='Search'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        <BsSearch className="icon" />
        </div>
      </div>
      <div className="header-right">
        <div className="icon-container">
          <BsFillBellFill className="icon" />
          <BsFillEnvelopeFill className="icon" />
          <BsPersonCircle className="icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
