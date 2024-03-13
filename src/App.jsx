
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAssRead =time=>{
    // const newReadingTime = readingTime +time;
    // setReadingTime(newReadingTime);
    setReadingTime(readingTime+time);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl items-start mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAssRead={handleMarkAssRead}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>


    </>
  )
}

export default App
