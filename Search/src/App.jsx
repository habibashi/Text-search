import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input';
import Posts from './Posts';
import { POSTS } from './postData';

const App = () => {
  const [searchText, setSearchText] = useState("");

  const filteredPosts = POSTS.filter((post) => post.title.includes(searchText) || post.paragraph.includes(searchText))

  return (
    <div className='p-7'>
      <h1 className='text-4xl font-bold py-5 mb-7'>Search</h1>
      <Input searchText={searchText} setSearchText={setSearchText} />
      {searchText.length !== 0 && <Posts searchText={searchText} filteredPosts={filteredPosts} />}
    </div>
  )
}

export default App
