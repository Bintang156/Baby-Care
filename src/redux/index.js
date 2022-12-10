import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER } from "./type";
import { bake_cookie, read_cookie } from "sfcookies";

const remainders = (state = [], action) => {
  let reminders = null;

  state = read_cookie("Pengingat");

  if (action.type === ADD_REMINDER) {
    reminders = [
      ...state,
      { text: action.text, date: action.date, id: Math.random() },
    ];
    bake_cookie("Pengingat", reminders);

    return reminders;
  } else if (action.type === REMOVE_REMINDER) {
    reminders = state.filter((reminder) => reminder.id !== action.id);
    bake_cookie("Pengingat", reminders);

    return reminders;
  } else if (action.type === CLEAR_REMINDER) {
    reminders = [];
    bake_cookie("Pengingat", reminders);

    return reminders;
  } else {
    return state;
  }
};

export default remainders;
