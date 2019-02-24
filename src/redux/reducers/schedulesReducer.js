const schedulesReducerDefaultState = [];
const schedulesReducer = (state = schedulesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_SCHEDULE":
      return [...state, action.schedule];
    case "REMOVE_SCHEDULE":
      return state.filter(sch => sch.id !== action.id);
    case "EDIT_SCHEDULE":
      return state.map(sch => {
        if (sch.id === action.id) return { ...sch, ...action.updates };
        else return sch;
      });

    default:
      return state;
  }
};
export default schedulesReducer;
