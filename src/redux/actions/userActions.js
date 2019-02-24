//ADD user
export const addUser = ({
  id,
  imgUrl,
  firstName,
  lastName,
  email,
  phone,
  birthDay,
  password,
  publicProfile,
  additionalBooking
}) => ({
  type: "ADD_USER",
  newAddedUser: {
    id,
    imgUrl,
    firstName,
    lastName,
    email,
    phone,
    birthDay,
    password,
    publicProfile,
    additionalBooking
  }
});
//updateInfo
export const updateInfo = (id, updates) => ({
  type: "UPDATE_INFO",
  id,
  updates
});
//updatePassword
export const updatePassword = (id, newPassword) => ({
  type: "UPDATE_PASSWORD",
  id,
  newPassword
});
//deleteAccount
export const deleteAccount = id => ({
  type: "DELETE_ACCOUNT",
  id
});
