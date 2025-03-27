export const reducerTodo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), ...action.payload }];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
