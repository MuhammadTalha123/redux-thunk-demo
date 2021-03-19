const initialState = {
    loading: false,
    users: [],
    error: "",
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "USER_REQUEST":
        return {
          ...state,
          loading: true,
        };
  
      case "USER_SUCCESS":
        return {
          loading: false,
          users: action.payload,
          error: "",
        };
  
      case "USER_ERROR":
        return {
          loading: false,
          users: [],
          error: action.payload,
        };
  
        default: return state;
    }
};

export default reducer;