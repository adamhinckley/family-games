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
      console.log(action.payload);
      return {
        ...state,
        side: action.payload
      };
    }
    case "setBodyPart": {
      console.log(action.payload);
      return {
        ...state,
        bodyPart: action.payload
      };
    }
    case "setColor": {
      console.log(action.payload);
      return {
        ...state,
        color: action.payload
      };
    }
    case "setNonColor": {
      console.log(action.payload);
      return {
        ...state,
        nonColor: action.payload
      };
    }
    case "stopSpinning": {
      console.log(action.payload);
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
