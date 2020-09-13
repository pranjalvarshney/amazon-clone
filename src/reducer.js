export const initialState = {
  cart: [],
  user: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      }
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
      }
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      }
    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex((item) => item.id === action.id)
      let newcart = [...state.cart]
      if (index >= 0) {
        newcart.splice(index, 1)
      } else {
        console.log("not found")
      }
      return {
        ...state,
        cart: newcart,
      }
    default:
      return state
  }
}

export default reducer
