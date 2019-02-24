const scheduleDefault = {
  message: "",
  sendNow: {
    sendTo: {
      all: false,
      admin: false,
      student: false
    }
  },
  schedule: {
    sendTo: {
      all: false,
      admin: false,
      student: false
    },
    time: "",
    day: {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false
    }
  }
};
export const addSchedule = schedule => ({
  type: "ADD_SCHEDULE",
  schedule: { ...schedule }
});
export const editSchedule = (id, updates) => ({
  type: "EDIT_SCHEDULE",
  updates,
  id
});
export const removeSchedule = id => ({
  type: "REMOVE_SCHEDULE",
  id
});
