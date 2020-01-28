export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

      return { ...state, bands: [...state.bands, action.name] }
    case 'REMOVE_BAND':
      return state = {...state, bands: [...state.bands].filter( band => band.id !== action.id)}

    default:
      return state;
  }
};
