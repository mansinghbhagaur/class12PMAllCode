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
      {/* <h1>Header</h1> */}
      <nav className="navbar">
        <h1>Todo App</h1>
        <ul>
          <li>ToDO</li>
        </ul>
        <h2>Theme</h2>
      </nav>
      <form style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }} onSubmit={handleSubmit}>
        <div style={{ backgroundColor: 'blue', padding: '20px', width: "30%", }}>
          <input className="inputBox" type="text" name="title" placeholder="Enter title" value={title || ""} onChange={(e) => setTitle(e.target.value)} /><br /> <br />
          <input className="inputBox" type="text" name="description" placeholder="Enter Description" value={description || ""} onChange={(e) => setDescription(e.target.value)} /><br /><br />
          <button className='inputBox' type="submit">Submit</button>
        </div>
      </form>
      {/* table create ui */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ textAlign: 'center', background: 'blue', width: '10%', borderRadius: '20px', padding: 5, color: '#ffffff' }}>Table</h1>
        <table style={{ border: '2px solid black', width: '50%', marginTop: 30, padding: 5, }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title Name</th>
              <th>Descrition</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td align='center'>1</td>
              <td align='center'>Test Project</td>
              <td align='center'>Test Project More description</td>
              <td align='center'><button style={{ backgroundColor: 'black', borderRadius: '10px', color: '#ffffff', padding: '10px' }}>Edit</button></td>
              <td align='center'><button style={{ backgroundColor: 'black', borderRadius: '10px', color: '#ffffff', padding: '10px' }}>Delete</button></td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer className='navFooter'>
        <h1>footer</h1>
      </footer>
    </div>
  )
}

export default App
