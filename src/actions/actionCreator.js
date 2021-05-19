export const AddPost = (data) => {
  return {
    type: "ADD_POST",
    payload: data,
  };
};

export const DeletePost = (id) => {
  return {
    type: "DELETE_POST",
    payload: id,
  };
};
