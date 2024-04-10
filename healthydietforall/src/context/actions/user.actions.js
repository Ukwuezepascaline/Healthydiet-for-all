// import {PayloadAction} from "@reduxjs/toolkit"

export const userActions = {
  setUserData: (states, action) => {
    states.userData = action.payload;
  },
};
