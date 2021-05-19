const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.payload]);
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export default postReducer;
