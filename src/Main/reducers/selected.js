const SELECTED_PRODUCT = 'SELECTED_PRODUCT'

const initialState  = []

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SELECTED_PRODUCT':
        return action.select
      break;
    default:
      return initialState
  }
}
