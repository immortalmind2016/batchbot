import { createStore, combineReducers } from "redux";
import schedulesReducer from "./reducers/schedulesReducer";
import userReducer from "./reducers/usersReducer";
import {
  addUser,
  updateInfo,
  updatePassword,
  deleteAccount
} from "./actions/userActions";

import {
  addSchedule,
  editSchedule,
  removeSchedule
} from "./actions/schdulesActions";
//store creation
const store = createStore(
  combineReducers({
    users: userReducer,
    schedules: schedulesReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});
//dispatching

//adding users
export const userOne = store.dispatch(
  addUser({
    id: "userA",
    imgUrl: "http://placehold.it/400/100",
    firstName: "Sara",
    lastName: "Hassan",
    email: "sara@ss.com",
    phone: "01124889557",
    birthDay: "11-1-1995",
    password: "12345",
    publicProfile: false,
    additionalBooking: false
  })
);
export const userTwo = store.dispatch(
  addUser({
    id: "userB",
    imgUrl: "http://placehold.it/400/400",
    firstName: "mohammed",
    lastName: "Essam",
    email: "meemasfw@gmail.com",
    phone: "01129466467",
    birthDay: "21-2-97",
    password: "1112",
    publicProfile: true,
    additionalBooking: true
  })
);

const schduleOne = store.dispatch(
  addSchedule({
    id: "abc123",
    message: "this is my first schedulae",
    sendNow: {
      sendTo: {
        all: false,
        admin: true,
        student: false
      }
    },
    schedule: {
      sendTo: {
        all: false,
        admin: true,
        student: false
      },
      time: "10:00",
      day: {
        sun: true,
        mon: false,
        tue: false,
        wed: false,
        thu: true,
        fri: true,
        sat: false
      }
    }
  })
);

//update users
/* store.dispatch(
  updateInfo(userOne.user.id, { firstName: "Alaa", phone: "000-000-000" })
); */

//updatePassword

/* store.dispatch(updatePassword(userOne.user.id, "100", "10"));
 */
//deleteAccount
/* store.dispatch(deleteAccount(userTwo.user.id, "789", "789"));
 */
export default store;
