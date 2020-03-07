import UserActionType from "./user.types";
const setCurrentuser = user => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user
});

export default setCurrentuser;
