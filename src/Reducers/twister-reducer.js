export const spinReducer = (state, action) => {
  switch (action.type) {
    case "spin": {
      return {
        ...state,
        spinning: true,
        bodyPart: "",
        color: "",
        nonColor: "",
        side: ""
      };
    }
    case "setSide": {
      return {
        ...state,
        side: action.payload
      };
    }
    case "setBodyPart": {
      return {
        ...state,
        bodyPart: action.payload
      };
    }
    case "setColor": {
      return {
        ...state,
        color: action.payload
      };
    }
    case "setNonColor": {
      return {
        ...state,
        nonColor: action.payload
      };
    }
    case "stopSpinning": {
      return {
        ...state,
        spinning: false
      };
    }
    default:
      return state;
  }
};

export const initialState = {
  bodyPart: "",
  color: "",
  nonColor: "",
  side: "",
  spinning: false
};
