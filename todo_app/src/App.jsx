import React, { useState } from 'react'
import TodoPage from './pages/TodoPage'

const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title :", title);
    console.log("Description :", description);
    setTitle('');
    setDescription('');
  }

  return (
    <div>
      <h1>Header</h1>
      <form style={{ display: 'flex', justifyContent: 'center' }} onSubmit={handleSubmit}>
        <div style={{ backgroundColor: 'lightGray', padding: '20px', width: "30%", }}>
          <input className="inputBox" type="text" name="title" placeholder="Enter title" value={title || ""} onChange={(e) => setTitle(e.target.value)} /><br /> <br />
          <input className="inputBox" type="text" name="description" placeholder="Enter Description" value={description || ""} onChange={(e) => setDescription(e.target.value)} /><br /><br />
          <button className='inputBox' type="submit">Submit</button>
        </div>
      </form>
      <h1>Footer</h1>
    </div>
  )
}

export default App
