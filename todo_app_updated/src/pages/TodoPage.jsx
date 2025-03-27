import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TodoForm from '../components/TodoForm'
import TodoTable from '../components/TodoTable'
import { useLocalStorageCutomhook } from '../utils/useLocalStorageCutomHook'
import { reducerTodo } from '../reducderAll/reducderTodo'

const TodoPage = () => {
      const [state, dispatch] = useLocalStorageCutomhook("todos", reducerTodo, []);

      console.log(state, "state")
      return (
            <>
                  <Navbar />
                  <TodoForm dispatch={dispatch} />
                  <TodoTable state={state} dispatch={dispatch} />
                  <Footer />
            </>
      )
}

export default TodoPage
