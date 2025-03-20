export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), ...action.payload }];
    default:
      return state;
  }
};
