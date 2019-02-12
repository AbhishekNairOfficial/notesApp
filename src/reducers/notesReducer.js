const initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case "ADD_NOTE": {
      let newList = [];
      newList = [...state, action.payload];
      return newList;
    }
    case "DELETE_NOTE": {
      let listAfterDeletion = state;
      listAfterDeletion = JSON.parse(JSON.stringify(listAfterDeletion));
      listAfterDeletion.pop();
      return listAfterDeletion;
    }
    default:
      return state;
  }
}
