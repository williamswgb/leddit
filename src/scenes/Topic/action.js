//Action Type
export const RESET_ERROR = 'RESET_ERROR'

//Action Triggers
const resetError = () => ({ type: RESET_ERROR })

//Action List
export const reset = () => (
  (dispatch) => {
    dispatch(resetError())
  }
)
