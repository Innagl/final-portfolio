
import './App.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Slides from "./Components/Slides.jsx";
import SearchBar from './Components/SearchBar.jsx';
import Books from './Components/BookComponents/Books.jsx';
import { getFavoritesBooks } from './redux/favoritesSlice.jsx';
import { getBooksFounded, setBooksFounded } from './redux/booksSlice.jsx';


const HomePage = () => {
  const favoritesAllIBooks = useSelector(getFavoritesBooks)
  const dispatch = useDispatch();
  const booksFounded = useSelector(getBooksFounded);

  const [mySearch, setMySearch] = useState("");
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [searchError, setSearchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const getData = async () => {
      if (!wordSubmitted) return;
      setSearchError(null);
      setIsLoading(true);
      try {
        const response = await fetch(`https://www.googleapis.com/books/w/volumes?q=${wordSubmitted}&maxResults=12`);
        if (response.status === 429) {
          setSearchError("Too many requests. Please wait a moment and try again.");
          return;
        }
        const data = await response.json();
        dispatch(setBooksFounded(data.items || []));
      } catch (err) {
        setSearchError("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [wordSubmitted, dispatch])


  const bookSearch = (e) => {
    setMySearch(e.target.value)
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }


  useEffect(() => {
    localStorage.setItem("booksFounded", JSON.stringify(booksFounded));
  }, [booksFounded]);


  return (<div>
    <div className='search-books-wrapper'>
      <h1>Book <span>Finder</span></h1>
      <p className="description-text body-text-16">
        Search for your favorite books by title.
      </p>

      {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      <SearchBar
        mySearch={mySearch}
        onInputChange={(e) => setMySearch(e.target.value)}
        onSearchSubmit={(e) => {
          e.preventDefault();
          setWordSubmitted(mySearch);
        }}
        isLoading={isLoading}
      />

      <Books booksFounded={booksFounded} />
    </div>

    <Slides />
  </div>
  );
}

export default HomePage;
































