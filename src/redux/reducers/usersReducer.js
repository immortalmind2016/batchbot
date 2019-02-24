const usersReducerDefaultState = [];
const usersReducer = (
  state = usersReducerDefaultState,
  { id, type, updates, newAddedUser, newPassword }
) => {
  switch (type) {
    case "ADD_USER":
      return [...state, newAddedUser];
    case "UPDATE_INFO":
      return state.map(user => {
        if (user.id === id) {
          return { ...user, ...updates };
        } else {
          return { ...user };
        }
      });
    case "UPDATE_PASSWORD":
      return state.map(user => {
        if (user.id === id) {
          return { ...user, password: newPassword };
        } else return { ...user };
      });

    case "DELETE_ACCOUNT":
      return state.filter(user => user.id !== id);

    /*       state.map(user => {
        if (passwordIsValid(password, newPassword)) {
          return state.filter(u => u.id != id);
        } else {
          return { ...user, error: "password doesn't match" };
        }
      }); */

    default:
      return state;
  }
};
export default usersReducer;
//Add user

//updateInfo

//updatePassword

//deleteAccount

//valitadePassword
