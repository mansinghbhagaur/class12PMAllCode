import React from 'react'

const TodoTable = ({ state, dispatch }) => {
      return (
            <>
                  <div className='table-component'>
                        <h1 style={{ textAlign: 'center', marginBottom: '15px' }}>Todo Table</h1>
                        <table border="1" cellPadding="0" cellSpacing="0">
                              <thead>
                                    <tr>
                                          <th>id</th>
                                          <th>title</th>
                                          <th>description</th>
                                          <th>Actions</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          state.map((item) => (
                                                <tr key={item.id}>
                                                      <td>{item.id}</td>
                                                      <td>{item.title}</td>
                                                      <td>{item.description}</td>
                                                      <td><button style={{ width: '30%', padding: '5px', marginRight: '10px' }}>Edit</button>
                                                            <button style={{ width: '30%', padding: '5px' }} onClick={() => dispatch({ type: 'REMOVE_TODO', payload: item })}>Delete</button></td>
                                                </tr>
                                          ))
                                    }


                              </tbody>
                        </table>
                  </div >
            </>
      )
}

export default TodoTable
