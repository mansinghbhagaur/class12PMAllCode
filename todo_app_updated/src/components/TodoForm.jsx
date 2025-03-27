import React, { useState } from 'react'

const TodoForm = ({ dispatch }) => {
      const [formData, setFormData] = useState({
            title: '',
            description: '',
      });

      const handleChange = (e) => {
            // handle change event
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));// update state
      }

      const handleSubmit = (e) => {
            e.preventDefault();
            dispatch({ type: 'ADD_TODO', payload: formData });

      }

      return (
            <div style={{ marginTop: 55, display: 'flex', justifyContent: 'center', margin: '100px 0px 50px 0px', }}>

                  <form onSubmit={handleSubmit} style={{ padding: '10px', width: 'calc(100% - 70%)', textAlign: 'center', boxShadow: '0px 0px 50px 0px rgba(0,0,0,0.2)', }}>
                        <h2>TODO FORM</h2><br />
                        <input type="text" placeholder="Enter your todo Name" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} name="title" value={formData.title || ""} onChange={(e) => handleChange(e)} /><br /><br />
                        <input type="text" placeholder="Enter your description" style={{ width: '100%', padding: '10px', borderRadius: '5px' }} name="description" value={formData.description || ""} onChange={(e) => handleChange(e)} /><br /><br />
                        <div style={{ width: '100%', textAlign: 'end' }}>
                              <button type="submit" style={{ padding: '5px' }}>Add Todo</button>
                        </div>
                  </form>
            </div >
      )
}

export default TodoForm;
