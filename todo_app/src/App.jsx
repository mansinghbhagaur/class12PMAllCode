import React, { useEffect, useState } from 'react'
import TodoPage from './pages/TodoPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useReducer } from 'react';
import { reducer } from './reducer/reducer';

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [state, dispatch] = useReducer(reducer, initialState);// useReducer hook
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  console.log(state, "hello");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { title, description } });
    setTitle('')
    setDescription('');
  }

  return (
    <div>
      {/* <h1>Header</h1> */}
      <Navbar />
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

            {
              state?.map((item) => (

                <tr key={item.id}>
                  <td align='center'>{item.id}</td>
                  <td align='center'>{item.title}</td>
                  <td align='center'>{item.description}</td>
                  <td align='center'><button style={{ backgroundColor: 'black', borderRadius: '10px', color: '#ffffff', padding: '10px' }}>Edit</button></td>
                  <td align='center'><button style={{ backgroundColor: 'black', borderRadius: '10px', color: '#ffffff', padding: '10px' }}>Delete</button></td>
                </tr>

              ))
            }


          </tbody>
        </table>
      </section>
      {/* footer section */}
      <Footer />
    </div>
  )
}

export default App
