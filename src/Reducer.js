export const initialState = {
  term: [""],
};

export const actionType = {
  result_Item: "result_Item",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.result_Item:
      return {
        ...state,
        term: action.term,
      };

    default:
      break;
  }
};

export default reducer;
