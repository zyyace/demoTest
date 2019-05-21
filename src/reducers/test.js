
const initialState = {
  status: 'init',
  showLoading: false,
}

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'GoodsSearchDoing':
      return {
        ...state,
        showLoading: true,
      }
    case 'GoodsSearchDone':
      return {
        ...state,
        status: 'success',
        showLoading: false,
      }
    case 'GoodsSearchFail':
      return {
        ...state,
        showLoading: false,
        status: 'fail',
      }
    default:
      return state
  }
}

export default test
