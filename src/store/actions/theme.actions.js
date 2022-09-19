import { ACTIONS } from '../reducers/theme.reducer';

export default {
  selectTheme: (theme) => {
    return {
      type: ACTIONS.SET_THEME,
      payload: theme
    }
  }
}