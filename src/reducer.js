export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQD8rJNqbbD62DrNYtNvRLv9JiOxYGN2-0hM-Zn2pmpFiJmv_rVfonAYy2fjaJjQK8Pj0eaaRYZebdvx28nNmFUuvGwP75se9QxMQmxlebgQes8YbpHRi3UbL7OQ0UxDqV9bQ5caBIgGVtsbXmmtAEt2N0UbKA",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
