const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return [...state, { id: action.id, text: action.text }]
    case 'HIDE_NOTIFICATION':
      return state.filter((notification) => { return notification.id !== action.id })
    default:
      return state
  }
}

export const notificationsDesc = state => {
	const notifications = [...state];
	notifications.reverse();
	return notifications;
}

// Will be used later
// export const getRating = state =>
// 	state.reduce((prev, current) => ({
// 		...prev,
// 		[current.rating]: (prev[current.rating] || 0) + 1,
// 	}), {})
